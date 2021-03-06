from pathlib import Path
from typing import Type

import flask_cors
from ereuse_utils import DeviceHubJSONEncoder, ensure_utf8
from ereuse_utils.test import Client
from flask import Flask
from pymongo import MongoClient
from pymongo.database import Database

from workbench_server.views.config import Config
from workbench_server.views.info import Info
from workbench_server.views.snapshots import Snapshots
from workbench_server.views.usbs import USBs


class WorkbenchServer(Flask):
    """
    Server for Workbench. WorkbenchServer exposes a REST API where
    clients like Workbench and DeviceHub can interact to augment
    snapshotting computers.

    When Workbench is started with ``--server {url}`` it connects
    to an instance of this WorkbenchServer and keeps updating it
    with information about the computer and the snapshot process,
    finalizing with sending the full snapshot.

    WorkbenchServer complements Workbench by allowing the user,
    through a *DeviceHubClient*, introduce information that Workbench
    cannot take, like identifiers from stuck tags or visual and
    functional grades.

    WorkbenchServer allows you name USB pen-drives and auto-uploads
    snapshots to DeviceHub.
    """
    test_client_class = Client

    def __init__(self, import_name=__name__, static_path=None, static_url_path=None,
                 static_folder='static', template_folder='templates', instance_path=None,
                 instance_relative_config=False, root_path=None,
                 folder=Path.home().joinpath('workbench'), info: Type[Info] = Info,
                 config: Type[Config] = Config, usbs: Type[USBs] = USBs,
                 snapshots: Type[Snapshots] = Snapshots):
        """
        Instantiates a WorkbenchServer.

        See params from base class Flask. New ones are:
        :param folder: The Path of the main folder for WorkbenchServer.
        WorkbenchServer will create configurations and read images from
        there. By defualt, ~/workbench
        :param info: Info class. Replace this to extend functionality.
        :param config: Config class. Replace this to extend func.
        :param usbs: USB class. Replace this to extend functionality.
        :param snapshots: Snapshots class. Replace this to extend func.
        """
        ensure_utf8(self.__class__.__name__)
        super().__init__(import_name, static_path, static_url_path, static_folder, template_folder,
                         instance_path, instance_relative_config, root_path)
        self.json_encoder = DeviceHubJSONEncoder
        flask_cors.CORS(self,
                        origins='*',
                        allow_headers=['Content-Type', 'Authorization', 'Origin'],
                        expose_headers=['Authorization'],
                        max_age=21600)
        self.folder = folder
        settings_folder = folder.joinpath('.settings')
        settings_folder.mkdir(parents=True, exist_ok=True)
        images_folder = folder.joinpath('images')
        images_folder.mkdir(exist_ok=True)

        self.auth = self.device_hub = self.db = None
        self.mongo_client = MongoClient()
        self.mongo_db = self.mongo_client.workbench_server  # type: Database
        self.configuration = config(self, settings_folder, images_folder)
        self.info = info(self)
        self.snapshots = snapshots(self, folder)
        self.usbs = usbs(self)
