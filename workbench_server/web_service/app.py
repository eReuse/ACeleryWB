from configparser import ConfigParser
from functools import partial
from json import dumps, loads
from logging import getLogger
from logging.config import dictConfig
from os import path

from celery import Celery
from forms import ComputerForm, ConfigIniForm
from jinja2 import Environment, FileSystemLoader
from redis import StrictRedis
from simulatorconf import SimulatorConfig
from werkzeug.contrib.sessions import FilesystemSessionStore
from werkzeug.datastructures import Headers, MultiDict
from werkzeug.exceptions import HTTPException
from werkzeug.routing import Map, Rule
from werkzeug.utils import redirect
from werkzeug.wrappers import Request, Response
from werkzeug.wsgi import SharedDataMiddleware


# from time import sleep

class CORSMiddleware(object):
    def __init__(self, app, origin):
        self.app = app
        self.origin = origin

    def __call__(self, environ, start_response):
        def add_cors_headers(status, headers, exc_info=None):
            headers = Headers(headers)
            headers.add("Access-Control-Allow-Origin", self.origin)
            headers.add("Access-Control-Allow-Headers", "Origin, Content-Type")
            headers.add("Access-Control-Allow-Credentials", "true")
            headers.add("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
            # headers.add("Access-Control-Expose-Headers", "...")
            return start_response(status, headers.to_list(), exc_info)

        # if environ.get("REQUEST_METHOD") == "OPTIONS":
        #   add_cors_headers("200 OK", [("Content-Type", "text/plain")])

        return self.app(environ, add_cors_headers)


class Acelery(object):
    def __init__(self, config):
        template_path = path.join(path.dirname(__file__), "templates")
        self.jinja_env = Environment(loader=FileSystemLoader(template_path), autoescape=True)

        if "routes" in config:
            self.url_map = Map([Rule(url, endpoint=endpoint) for url, endpoint in config["routes"].items()])

        self.config_ini = config["config.ini"] or "config.ini"

        self.tag_computer_url = config[
            "tag_computer_url"] if "tag_computer_url" in config else "http://localhost:5555/api/task/async-apply/worker.tag_computer"

        if "logger" in config:
            if "config" in config["logger"]:
                dictConfig(config["logger"]["config"])
            self.log = getLogger(config["logger"]["name"])

        queue = config["celery"]["queue"] if "celery" in config and "queue" in config["celery"] else "default"
        broker = config["celery"]["broker"] if "celery" in config and "broker" in config[
            "celery"] else "redis://localhost:6379/0"
        self.celery = Celery(queue, broker=broker)

        default_redis = {"host": "localhost", "db": 0}
        self.redis_inventories = StrictRedis(**config.get("redis_inventories", default_redis))
        self.redis_usbs = StrictRedis(**config.get("redis_usbs", default_redis))
        self.redis_consolidated = StrictRedis(**config.get("redis_consolidated", default_redis))
        self.redis_uploaded = StrictRedis(**config.get("redis_uploaded", default_redis))
        self.redis_uploaderrors = StrictRedis(**config.get("redis_uploadederrors", default_redis))

        self.session_store = FilesystemSessionStore()
        self.simulator = SimulatorConfig()

    def render_template(self, name, **context):
        if "status_code" in context:
            status = context.pop("status_code")

            return Response(self.render_template_to_string(name, **context), status=status, mimetype="text/html")
        else:
            self.log.info("Ok")
            return Response(self.render_template_to_string(name, **context), mimetype="text/html")

    def render_template_to_string(self, name, **context):
        return self.jinja_env.get_template(name).render(**context)

    def dispatch_request(self, request):
        adapter = self.url_map.bind_to_environ(request.environ)
        try:
            endpoint, values = adapter.match()
            return getattr(self, endpoint)(request, **values)
        except HTTPException as e:
            return e

    def wsgi_app(self, environ, start_response):
        request = Request(environ)

        sid = request.cookies.get("acelery")
        request.session = self.session_store.new() if sid is None else self.session_store.get(sid)

        self.jinja_env.globals["show_bootstrap_flashes"] = partial(self.show_bootstrap_flashes, request)

        response = self.dispatch_request(request)

        if request.session.should_save:
            self.session_store.save(request.session)
            response.set_cookie("acelery", request.session.sid)

        return response(environ, start_response)

    def __call__(self, environ, start_response):
        return self.wsgi_app(environ, start_response)

    def flash(self, request, message, severity="success", dismissible=False):
        if "_flashes" not in request.session:
            request.session["_flashes"] = []

        request.session["_flashes"].append({"message": message, "severity": severity, "dismissible": dismissible})

    def show_bootstrap_flashes(self, request):
        if "_flashes" in request.session:
            result = [self.render_template_to_string("bootstrap_flash.html", **flash) for flash in
                      request.session["_flashes"]]
            del request.session["_flashes"]

            return "\n".join(result)
        return ""

    def tag_computer(self, request):
        form = ComputerForm(request.form)

        if request.method == "POST" and form.validate():
            data = form.data
            data["_id"] = data["id_"]
            del data["id_"]
            data["_uuid"] = request.args["inventory"]

            self.celery.send_task("worker.tag_computer", (data,))

            if request.is_xhr:
                return Response(dumps({"acknowledge": True}), mimetype="application/json")
            else:
                self.flash(request, "The computer {} has been tagged".format(request.form["label"]), dismissible=True)

                return redirect("/")

        if request.is_xhr:
            return self.tag_computer_form(request)
        else:
            return self.render_template("tag_computer.html", form=form)

    def tag_computer_form(self, request):
        form = ComputerForm(request.form)

        if request.method == "POST":
            if form.validate():
                data = form.data
                if "id_" in data:
                    data["_id"] = data["id_"]
                    del data["id_"]
                data["_uuid"] = request.args["inventory"]

                identList = []
                if "label" in data and data["label"]:
                    identList.append(data["label"])
                if "pid" in data and data["pid"]:
                    identList.append(data["label"])
                if "_id" in data and data["_id"]:
                    identList.append(data["_id"])

                self.celery.send_task("worker.tag_computer", (data,))

                return Response(dumps(
                    {"acknowledge": True, "msg": "The computer {} has been tagged".format(" - ".join(identList))}),
                                mimetype="application/json")
            else:
                return self.render_template("ajax_form.html", form=form, status_code=400)

        return self.render_template("ajax_form.html", form=form)

    def read_config(self):
        config = ConfigParser()
        config.read(self.config_ini)
        sections = ["DEFAULT"]
        sections.extend(config.sections())

        d = {}
        structure = {}
        for section in sections:
            structure[section] = []
            for key, value in config[section].items():
                key = key.upper()

                if section == "DEFAULT" or key not in structure["DEFAULT"]:
                    structure[section].append(key)

                if key == "_ID":
                    key = "ID_"
                elif key == "FLASK":
                    key = "SERVER"
                d[key] = value

        return d, sections, structure

    def write_config(self, data, sections, structure):
        config = ConfigParser()
        config.optionxform = str

        for section in sections:
            result = {}
            for key in structure[section]:
                if key == "_ID":
                    d_key = "ID_"
                elif key == "FLASK":
                    d_key = "SERVER"
                else:
                    d_key = key

                if d_key == "MODE":
                    value = "EraseSectors" if data[d_key] else "EraseBasic"
                else:
                    value = ["no", "yes"][bool(data[d_key])] if isinstance(data[d_key], bool) else data[d_key]

                result[key] = value

            config[section] = result

        with open(self.config_ini, "w") as configfile:
            config.write(configfile)

    def edit_config(self, request):
        data, sections, structure = self.read_config()
        data.update(request.form)
        form = ConfigIniForm(MultiDict(data))

        if request.method == "POST" and form.validate():
            self.write_config(form.data, sections, structure)

            if request.is_xhr:
                return Response(dumps({"acknowledge": True}), mimetype="application/json")
            else:
                self.flash(request, "The configuration has been edited", dismissible=True)

                return redirect("/")

        if request.is_xhr:
            return self.edit_config_form(request)
        else:
            return self.render_template("configini.html", form=form)

    def edit_config_form(self, request):
        data, sections, structure = self.read_config()
        data.update(request.form)
        form = ConfigIniForm(MultiDict(data))

        if request.method == "POST" and form.validate():
            self.write_config(form.data, sections, structure)

            return Response(dumps({"acknowledge": True, "msg": "The configuration has been edited"}))

        return self.render_template("ajax_form.html", form=form)

    def new_inventories(self, request):
        result = []
        keys = self.redis_inventories.keys("*")
        if keys:
            result = [{"id": key.decode("utf-8"), "json": loads(inventory.decode("utf-8"))} for key, inventory in
                      zip(keys, self.redis_inventories.mget(keys))]

        consolidated = []
        keys = self.redis_consolidated.keys("*")
        if keys:
            consolidated = [{"id": key.decode("utf-8"), "json": loads(inventory.decode("utf-8"))} for key, inventory in
                            zip(keys, self.redis_consolidated.mget(keys))]

            result.extend(consolidated)

        uploaded = []
        keys = self.redis_uploaded.keys('*')
        if keys:
            uploaded = [{"id": key.decode("utf-8"), "json": loads(inventory.decode("utf-8"))} for key, inventory in
                        zip(keys, self.redis_uploaded.mget(keys))]

            result.extend(uploaded)

        uploadederrors = []
        keys = self.redis_uploaderrors.keys('*')
        if keys:
            uploadederrors = [{
                                  "id": key.decode("utf-8"), "json": inventory.decode("utf-8")['json'],
                                  'response': inventory.decode('utf-8')['response']
                              } for key, inventory in zip(keys, self.redis_uploaderrors.mget(keys))]

            result.extend(uploadederrors)

        return Response(dumps({"acknowledge": True, "inventories": result}), mimetype="application/json")

    def usbs_list(self, vuejs=False):
        keys = self.redis_usbs.keys()
        if keys:
            values = self.redis_usbs.mget(keys)
            if vuejs:
                usbs = []
                for key, value in zip(keys, values):
                    usb = loads(value.decode("utf-8"))
                    usb["serial"] = usb["usb"]
                    del usb["usb"]
                    usb["id"] = key.decode("utf-8")
                    usbs.append(usb)
                return usbs
            else:
                return {key.decode("utf-8"): loads(value.decode("utf-8")) for key, value in zip(keys, values)}
        else:
            return ([] if vuejs else {})

    def usbs(self, request):
        return Response(dumps({"acknowledge": True, "usbs": self.usbs_list(request.args.get("vuejs", False))}),
                        mimetype="application/json")

    def add_usb(self, request):
        usb_args = self.simulator.usbs[request.args["usb"]]
        usb_args.update(request.args.to_dict())

        self.celery.send_task("worker.add_usb", (usb_args,))

        return Response(dumps({"acknowledge": True}), mimetype="application/json")

    def del_usb(self, request):

        self.log.info(request.args)

        self.celery.send_task("worker.del_usb", (request.args,))

        return Response(dumps({"acknowledge": True}), mimetype="application/json")


def factory(config=None):
    app = Acelery(config)

    app.wsgi_app = CORSMiddleware(
        SharedDataMiddleware(app.wsgi_app, {"/static": path.join(path.dirname(__file__), "static")}), "*")

    return app


if __name__ == "__main__":
    from werkzeug.serving import run_simple

    server = "192.168.2.2"
    # server = "localhost"

    localIP = "0.0.0.0"
    # localIP = "localhost"

    config = {
        "config.ini": "/srv/ereuse-data/config.ini",
        "celery": {
            "broker": "redis://{}:6379/0".format(server),
            "queue": "workbench"
        },
        "redis_inventories": {
            "host": server,
            "db": 1
        },
        "redis_usbs": {
            "host": server,
            "db": 2
        },
        "redis_consolidated": {
            "host": server,
            "db": 3
        },
        "redis_uploaded": {
            "host": server,
            "db": 4
        },
        "redis_uploadederrors": {
            "host": server,
            "db": 5
        },
        "routes": {
            "/tag_computer": "tag_computer",
            "/tag_computer_form": "tag_computer_form",
            "/edit_config": "edit_config",
            "/edit_config_form": "edit_config_form",
            "/inventories": "inventories",
            "/new_inventories": "new_inventories",
            "/usbs": "usbs",
            "/add_usb": "add_usb",
            "/del_usb": "del_usb"
        },
        "logger": {
            "name": "app",
            "config": {
                "version": 1,
                "handlers": {
                    "console": {
                        "class": "logging.StreamHandler",
                        "level": "INFO",
                        "stream": "ext://sys.stdout"
                    }
                },
                "formatters": {
                    "standard": {
                        "format": "%(asctime)s %(levelname)s %(module)s %(message)s"
                    }
                },
                "loggers": {
                    "app": {
                        "handlers": ["console"],
                        "level": "DEBUG"
                    }
                }
            }
        }
    }

    run_simple(localIP, 8090, factory(config), use_debugger=True, use_reloader=True)
