webpackJsonp([1],{159:function(e,a){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},160:function(e,a){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},199:function(e,a){},336:function(e,a,s){"use strict";var t=s(98),n=s(708),c=s(699),f=s.n(c),i=s(700),d=s.n(i),r=s(698),o=s.n(r);t.a.use(n.a),a.a=new n.a({routes:[{path:"/",name:"inventories",component:f.a},{path:"/tag",name:"tag",component:d.a},{path:"/config",name:"config",component:o.a}]})},337:function(e,a,s){"use strict";var t=s(379),n=s.n(t),c=s(98),f=s(710),i=s(73),d=s.n(i);c.a.use(f.a);var r="http://localhost:8090",o={plugged_usbs:{},withSimulator:!0,simulator:{},inventories:[],flash:null},b={setPluggedUsbs:function(e,a){e.plugged_usbs=a},setWithSimulator:function(e,a){e.withSimulator=a},setSimulator:function(e,a){e.simulator=a},setInventories:function(e,a){a.sort(function(e,a){return new Date(a.json.created||a.json.date)-new Date(e.json.created||e.json.date)}),n()(e.inventories)!==n()(a)&&(e.inventories=a)},setFlash:function(e,a){e.flash=a}},l={getPluggedUsbs:function(e){d.a.get(r+"/usbs").then(function(a){"acknowledge"in a.data&&a.data.acknowledge&&e.commit("setPluggedUsbs",a.data.usbs)}).catch(function(e){console.log(e)})},plugUsb:function(e,a){d.a.get(r+"/add_usb",{params:{usb:a.serial,inventory:a.inventory}}).catch(function(e){console.log(e)})},unplugUsb:function(e,a){d.a.get(r+"/del_usb",{params:{inventory:a}}).catch(function(e){console.log(e)})},toggleSimulator:function(e){e.commit("setWithSimulator",!e.getters.withSimulator)},getSimulator:function(e){d.a.get(r+"/simulated_inventories").then(function(a){"acknowledge"in a.data&&a.data.acknowledge&&e.commit("setSimulator",a.data.data)}).catch(function(e){console.log(e)})},getInventories:function(e){d.a.get(r+"/new_inventories").then(function(a){"acknowledge"in a.data&&a.data.acknowledge&&e.commit("setInventories",a.data.inventories)}).catch(function(e){console.log(e)})},Flash:function(e,a){e.commit("setFlash",a),setInterval(function(){e.commit("setFlash",null)},1e4)}},u={flash:function(e){return e.flash},plugged_usbs:function(e){return e.plugged_usbs},withSimulator:function(e){return e.withSimulator},simulations:function(e){return e.simulator},inventories:function(e){return e.inventories}};a.a=new f.a.Store({state:o,mutations:b,actions:l,getters:u})},338:function(e,a){},339:function(e,a){},340:function(e,a,s){var t=s(56)(s(370),s(707),null,null,null);e.exports=t.exports},341:function(e,a,s){var t=s(56)(s(374),s(703),null,null,null);e.exports=t.exports},342:function(e,a,s){var t=s(56)(s(375),s(706),null,null,null);e.exports=t.exports},343:function(e,a,s){function t(e){s(649)}var n=s(56)(s(376),s(702),t,"data-v-33685dde",null);e.exports=n.exports},369:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(98),n=s(340),c=s.n(n),f=s(337),i=s(336),d=s(1),r=s.n(d),o=s(338),b=(s.n(o),s(339)),l=(s.n(b),s(343)),u=s.n(l),h=s(342),A=s.n(h),m=s(341),g=s.n(m);t.a.config.productionTip=!1,t.a.component("usbs",u.a),t.a.component("simulator",A.a),t.a.component("inventories",g.a),t.a.mixin({methods:{deviceIcon:function(e){return{Desktop:"fa-desktop",Laptop:"fa-laptop",Netbook:"fa-laptop netbook",Server:"fa-server",Microtower:"fa-building-o"}[e]||"fa-question"}}}),t.a.filter("moment",function(e,a){return void 0===a&&(a="LLLL"),r()(e).format(a)}),new t.a({el:"#app",store:f.a,router:i.a,template:"<App/>",components:{App:c.a},methods:{refreshData:function(){this.$store.dispatch("getPluggedUsbs"),this.$store.dispatch("getInventories")}},mounted:function(){this.refreshData(),setInterval(this.refreshData,5e3),this.$store.dispatch("getSimulator")}})},370:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app"}},371:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(73),n=s.n(t),c=s(199),f=(s.n(c),"http://localhost:8090");a.default={name:"config",data:function(){return{html:""}},methods:{edit_config:function(){for(var e=document.getElementsByTagName("form")[0],a=new FormData,s=0;s<e.elements.length;s++)"radio"===e.elements[s].type?!0===e.elements[s].checked&&a.append(e.elements[s].name,e.elements[s].value):"checkbox"===e.elements[s].type?a.append(e.elements[s].name,e.elements[s].checked):a.append(e.elements[s].name,e.elements[s].value);n.a.post(f+"/edit_config_form",a).then(function(e){this.$store.dispatch("Flash",{msg:e.data.msg,severity:"success"}),this.$router.push({name:"inventories"})}.bind(this)).catch(function(e){this.html=e.response.data}.bind(this))}},beforeMount:function(){n.a.get(f+"/edit_config_form").then(function(e){this.html=e.data}.bind(this))}}},372:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app",computed:{flash:function(){return this.$store.getters.flash}}}},373:function(e,a,s){"use strict";function t(){new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play()}Object.defineProperty(a,"__esModule",{value:!0});var n=s(73),c=s.n(n),f=s(662),i=s.n(f),d=s(199),r=(s.n(d),"http://localhost:8090");a.default={name:"config",data:function(){return{html:"",scanner:null,camera:null}},methods:{getUSBName:function(e){var a=this.$store.getters.plugged_usbs[e];return a.vendor+" "+a.product},toggleScan:function(){var e=document.getElementsByClassName("qr-preview")[0];null===this.camera?(e.classList.remove("d-none"),this.initScan()):(e.classList.add("d-none"),this.scanner.stop(),this.camera=null)},initScan:function(){null===this.scanner&&(this.scanner=new i.a.Scanner({video:document.getElementsByClassName("qr-preview")[0]}),this.scanner.addListener("scan",function(e){var a=e.split("/");document.getElementsByClassName("qr-input")[0].value=a[a.length-1],t()})),i.a.Camera.getCameras().then(function(e){e.length>1?(this.camera=1,this.scanner.start(e[1])):e.length>0?(this.camera=0,this.scanner.start(e[0])):console.log("No cameras found")}.bind(this))},tag_computer:function(){for(var e=document.getElementsByTagName("form")[0],a=new FormData,s=0;s<e.elements.length;s++)"radio"===e.elements[s].type?!0===e.elements[s].checked&&a.append(e.elements[s].name,e.elements[s].value):a.append(e.elements[s].name,e.elements[s].value);c.a.post(r+"/tag_computer_form?inventory="+this.$route.params.inventory,a).then(function(e){this.$store.dispatch("Flash",{msg:e.data.msg,severity:"success"}),this.$router.push({name:"inventories"})}.bind(this)).catch(function(e){this.html=e.response.data}.bind(this))}},beforeMount:function(){c.a.get(r+"/tag_computer_form").then(function(e){this.html=e.data}.bind(this)).then(function(){document.getElementsByClassName("fa-qrcode")[0].addEventListener("click",this.toggleScan.bind(this))}.bind(this))}}},374:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(380),n=s.n(t);a.default={name:"inventories",methods:{renderHeader:function(e){if(0===e)return!0;var a=new Date(this.inventories[e-1].json.created||this.inventories[e-1].json.date),s=new Date(this.inventories[e].json.created||this.inventories[e].json.date);return a.setHours(0,0,0,0),s.setHours(0,0,0,0),s.valueOf()!==a.valueOf()},hasPlugged:function(e){return e in this.plugged_usbs},getIdentification:function(e){var a=[];return"label"in e&&a.push(e.label),"pid"in e&&a.push(e.pid),"_id"in e&&a.push(e._id),a.join(" - ")||"Not identified"},hasGrades:function(e){return"condition"in e},getStatus:function(e){return"date"in e?"uploaded"in e?"Uploaded":"Finished":"iso"in e.times?"Not rated":"Not finished"},phaseClass:function(e){return{"Not finished":"bg-danger","Not rated":"bg-warning",Finished:"bg-info",Uploaded:"bg-success"}[this.getStatus(e)]},getStatusIcon:function(e){var a=this.getStatus(e);return"Uploaded"===a?'<i class="fa fa-cloud-upload"></i>':"Finished"===a?'<i class="fa fa-check"></i>':n()(e.times).length},tag_computer:function(e,a){}},computed:{fields:function(){return{usb:{label:'<i class="fa fa-usb"></i>'},created:{label:"Created"},device:{label:"Device"},identification:{label:"Identification"},grades:{label:"Grades"},phases:{label:"Phases"}}},inventories:function(){return this.$store.getters.inventories},plugged_usbs:function(){return this.$store.getters.plugged_usbs}}}},375:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(73),n=s.n(t);a.default={name:"simulator",methods:{isPlugged:function(e,a){var s=this.$store.getters.plugged_usbs;return e in s&&s[e].usb===a},toggleMe:function(){this.$store.dispatch("toggleSimulator")},toggleUsb:function(e,a,s){s.target.classList.remove("fa-toggle-off","fa-toggle-on"),s.target.classList.add("fa-spinner","fa-pulse"),e in this.$store.getters.plugged_usbs?this.$store.dispatch("unplugUsb",{inventory:e}):this.$store.dispatch("plugUsb",{inventory:e,serial:a})},toggleTimed:function(e){e.target.classList.contains("fa-hourglass-half")?(e.target.classList.remove("fa-hourglass-half"),e.target.classList.add("fa-hourglass-o")):(e.target.classList.remove("fa-hourglass-o"),e.target.classList.add("fa-hourglass-half"))},launchInventory:function(e,a){var s=a.target,t=a.target.closest(".launcher").querySelector(".timed-icon i");s.classList.remove("fa-rocket"),s.classList.add("fa-spinner","fa-pulse");var c={params:{inventory:e}};t.classList.contains("fa-hourglass-half")&&(c.params.timed=!0),n.a.get("http://localhost:8090/simulate_inventory",c).then(function(){s.classList.remove("fa-spinner","fa-pulse"),s.classList.add("fa-check"),setInterval(function(){s.classList.remove("fa-check"),s.classList.add("fa-rocket")},5e3)}).catch(function(e){console.log(e)})}},computed:{simulations:function(){return this.$store.getters.simulations},visible:function(){return this.$store.getters.withSimulator}}}},376:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"usbs",methods:{unplugMe:function(e,a){this.$store.dispatch("unplugUsb",e)}},computed:{usbs:function(){return this.$store.getters.plugged_usbs}}}},633:function(e,a){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},647:function(e,a){e.exports={_from:"elliptic@^6.0.0",_id:"elliptic@6.4.0",_inBundle:!1,_integrity:"sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",_location:"/elliptic",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"elliptic@^6.0.0",name:"elliptic",escapedName:"elliptic",rawSpec:"^6.0.0",saveSpec:null,fetchSpec:"^6.0.0"},_requiredBy:["/browserify-sign","/create-ecdh"],_resolved:"https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",_shasum:"cac9af8762c85836187003c8dfe193e5e2eae5df",_spec:"elliptic@^6.0.0",_where:"/app/node_modules/browserify-sign",author:{name:"Fedor Indutny",email:"fedor@indutny.com"},bugs:{url:"https://github.com/indutny/elliptic/issues"},bundleDependencies:!1,dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},deprecated:!1,description:"EC cryptography",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},files:["lib"],homepage:"https://github.com/indutny/elliptic",keywords:["EC","Elliptic","curve","Cryptography"],license:"MIT",main:"lib/elliptic.js",name:"elliptic",repository:{type:"git",url:"git+ssh://git@github.com/indutny/elliptic.git"},scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",test:"npm run lint && npm run unit",unit:"istanbul test _mocha --reporter=spec test/index.js",version:"grunt dist && git add dist/"},version:"6.4.0"}},649:function(e,a){},670:function(e,a,s){function t(e){return s(n(e))}function n(e){var a=c[e];if(!(a+1))throw new Error("Cannot find module '"+e+"'.");return a}var c={"./af":206,"./af.js":206,"./ar":213,"./ar-dz":207,"./ar-dz.js":207,"./ar-kw":208,"./ar-kw.js":208,"./ar-ly":209,"./ar-ly.js":209,"./ar-ma":210,"./ar-ma.js":210,"./ar-sa":211,"./ar-sa.js":211,"./ar-tn":212,"./ar-tn.js":212,"./ar.js":213,"./az":214,"./az.js":214,"./be":215,"./be.js":215,"./bg":216,"./bg.js":216,"./bn":217,"./bn.js":217,"./bo":218,"./bo.js":218,"./br":219,"./br.js":219,"./bs":220,"./bs.js":220,"./ca":221,"./ca.js":221,"./cs":222,"./cs.js":222,"./cv":223,"./cv.js":223,"./cy":224,"./cy.js":224,"./da":225,"./da.js":225,"./de":228,"./de-at":226,"./de-at.js":226,"./de-ch":227,"./de-ch.js":227,"./de.js":228,"./dv":229,"./dv.js":229,"./el":230,"./el.js":230,"./en-au":231,"./en-au.js":231,"./en-ca":232,"./en-ca.js":232,"./en-gb":233,"./en-gb.js":233,"./en-ie":234,"./en-ie.js":234,"./en-nz":235,"./en-nz.js":235,"./eo":236,"./eo.js":236,"./es":238,"./es-do":237,"./es-do.js":237,"./es.js":238,"./et":239,"./et.js":239,"./eu":240,"./eu.js":240,"./fa":241,"./fa.js":241,"./fi":242,"./fi.js":242,"./fo":243,"./fo.js":243,"./fr":246,"./fr-ca":244,"./fr-ca.js":244,"./fr-ch":245,"./fr-ch.js":245,"./fr.js":246,"./fy":247,"./fy.js":247,"./gd":248,"./gd.js":248,"./gl":249,"./gl.js":249,"./gom-latn":250,"./gom-latn.js":250,"./he":251,"./he.js":251,"./hi":252,"./hi.js":252,"./hr":253,"./hr.js":253,"./hu":254,"./hu.js":254,"./hy-am":255,"./hy-am.js":255,"./id":256,"./id.js":256,"./is":257,"./is.js":257,"./it":258,"./it.js":258,"./ja":259,"./ja.js":259,"./jv":260,"./jv.js":260,"./ka":261,"./ka.js":261,"./kk":262,"./kk.js":262,"./km":263,"./km.js":263,"./kn":264,"./kn.js":264,"./ko":265,"./ko.js":265,"./ky":266,"./ky.js":266,"./lb":267,"./lb.js":267,"./lo":268,"./lo.js":268,"./lt":269,"./lt.js":269,"./lv":270,"./lv.js":270,"./me":271,"./me.js":271,"./mi":272,"./mi.js":272,"./mk":273,"./mk.js":273,"./ml":274,"./ml.js":274,"./mr":275,"./mr.js":275,"./ms":277,"./ms-my":276,"./ms-my.js":276,"./ms.js":277,"./my":278,"./my.js":278,"./nb":279,"./nb.js":279,"./ne":280,"./ne.js":280,"./nl":282,"./nl-be":281,"./nl-be.js":281,"./nl.js":282,"./nn":283,"./nn.js":283,"./pa-in":284,"./pa-in.js":284,"./pl":285,"./pl.js":285,"./pt":287,"./pt-br":286,"./pt-br.js":286,"./pt.js":287,"./ro":288,"./ro.js":288,"./ru":289,"./ru.js":289,"./sd":290,"./sd.js":290,"./se":291,"./se.js":291,"./si":292,"./si.js":292,"./sk":293,"./sk.js":293,"./sl":294,"./sl.js":294,"./sq":295,"./sq.js":295,"./sr":297,"./sr-cyrl":296,"./sr-cyrl.js":296,"./sr.js":297,"./ss":298,"./ss.js":298,"./sv":299,"./sv.js":299,"./sw":300,"./sw.js":300,"./ta":301,"./ta.js":301,"./te":302,"./te.js":302,"./tet":303,"./tet.js":303,"./th":304,"./th.js":304,"./tl-ph":305,"./tl-ph.js":305,"./tlh":306,"./tlh.js":306,"./tr":307,"./tr.js":307,"./tzl":308,"./tzl.js":308,"./tzm":310,"./tzm-latn":309,"./tzm-latn.js":309,"./tzm.js":310,"./uk":311,"./uk.js":311,"./ur":312,"./ur.js":312,"./uz":314,"./uz-latn":313,"./uz-latn.js":313,"./uz.js":314,"./vi":315,"./vi.js":315,"./x-pseudo":316,"./x-pseudo.js":316,"./yo":317,"./yo.js":317,"./zh-cn":318,"./zh-cn.js":318,"./zh-hk":319,"./zh-hk.js":319,"./zh-tw":320,"./zh-tw.js":320};t.keys=function(){return Object.keys(c)},t.resolve=n,e.exports=t,t.id=670},671:function(e,a){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},698:function(e,a,s){var t=s(56)(s(371),s(701),null,null,null);e.exports=t.exports},699:function(e,a,s){var t=s(56)(s(372),s(704),null,null,null);e.exports=t.exports},700:function(e,a,s){var t=s(56)(s(373),s(705),null,null,null);e.exports=t.exports},701:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("h1",[s("small",[s("router-link",{attrs:{to:{name:"inventories"}}},[s("i",{staticClass:"fa fa-arrow-left"})])],1),e._v("\n    eReuse's Workbench configuration\n  ")]),e._v(" "),s("div",{domProps:{innerHTML:e._s(e.html)}}),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.edit_config}},[e._v("Edit configuration")])])},staticRenderFns:[]}},702:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"plugged-usbs"},[s("h3",[e._v("Plugged usbs")]),e._v(" "),s("ul",{staticClass:"list-unstyled"},e._l(e.usbs,function(a,t){return s("li",{key:"inventory",staticClass:"media"},[s("div",{staticClass:"text-center align-self-center"},[e._m(0,!0),e._v(" "),s("div",{staticClass:"unplug-icon"},[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.unplugMe(t,a)}}},[s("i",{staticClass:"fa fa-toggle-on"})])])]),e._v(" "),s("div",{staticClass:"media-body"},[s("h5",[e._v(e._s(a.vendor)+" "+e._s(a.product))]),e._v(" "),s("div",[e._v(e._s(a.usb))]),e._v(" "),s("div",[e._v(e._s(t))])])])}))])},staticRenderFns:[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"usb-icon"},[s("i",{staticClass:"fa fa-usb fa-2x"})])}]}},703:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"inventories"},[s("h3",[e._v("Inventories")]),e._v(" "),s("table",{staticClass:"table table-responsive"},[e._m(0),e._v(" "),s("tbody",[e._l(e.inventories,function(a,t){return[e.renderHeader(t)?s("tr",[s("th",{staticClass:"text-center",attrs:{colspan:"6"}},[e._v("\n            "+e._s(e._f("moment")(a.json.created||a.json.date,"LL"))+"\n          ")])]):e._e(),e._v(" "),s("tr",[e.hasPlugged(a.id)?s("td",[s("router-link",{attrs:{to:{name:"tag",params:{inventory:a.id,serial:e.plugged_usbs[a.id].usb}}}},[s("div",[e._v(e._s(e.plugged_usbs[a.id].vendor))]),e._v(" "),s("div",[e._v(e._s(e.plugged_usbs[a.id].product))])])],1):s("td",[e._v(" ")]),e._v(" "),s("td",[e._v("\n            "+e._s(e._f("moment")(a.json.created||a.json.date,"HH:mm:ss"))+"\n            "),s("i",{staticClass:"fa fa-info",attrs:{alt:a.id,title:a.id}})]),e._v(" "),s("td",[s("i",{staticClass:"fa",class:e.deviceIcon(a.json.device.type)}),e._v("\n            "+e._s(a.json.device.manufacturer)+" "+e._s(a.json.device.model)+"\n          ")]),e._v(" "),s("td",[e._v(e._s(e.getIdentification(a.json)))]),e._v(" "),s("td",[e.hasGrades(a.json)?[s("i",{staticClass:"fa fa-eye"}),e._v(" \n              "+e._s(a.json.condition.appearance.general)+"\n              "),s("i",{staticClass:"fa fa-wrench"}),e._v("\n              "+e._s(a.json.condition.functionality.general)+"\n            ")]:[e._v("Not rated")]],2),e._v(" "),s("td",{staticClass:"text-center",class:e.phaseClass(a.json),domProps:{innerHTML:e._s(e.getStatusIcon(a.json))}})])]})],2)])])},staticRenderFns:[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("thead",[s("tr",[s("th",[s("i",{staticClass:"fa fa-usb"})]),e._v(" "),s("th",[e._v("Created")]),e._v(" "),s("th",[e._v("Device")]),e._v(" "),s("th",[e._v("Identification")]),e._v(" "),s("th",[e._v("Grades")]),e._v(" "),s("th",[e._v("Phases")])])])}]}},704:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("h1",[e._v("\n    eReuse's Workbench GUI\n    "),s("small",{staticClass:"pull-right"},[s("router-link",{attrs:{to:{name:"config"}}},[s("i",{staticClass:"fa fa-gear"})])],1)]),e._v(" "),e.flash?s("div",{staticClass:"alert",class:"alert-"+e.flash.severity,attrs:{role:"alert"}},[e._v("\n    "+e._s(e.flash.msg)+"\n  ")]):e._e(),e._v(" "),s("div",{staticClass:"row"},[s("usbs",{staticClass:"col-xs-12 col-md-6"}),e._v(" "),s("simulator",{staticClass:"col-xs-12 col-md-6"})],1),e._v(" "),s("div",{staticClass:"row"},[s("inventories",{staticClass:"col-xs-12 col-md-12"})],1)])},staticRenderFns:[]}},705:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("h1",[s("small",[s("router-link",{attrs:{to:{name:"inventories"}}},[s("i",{staticClass:"fa fa-arrow-left"})])],1),e._v("\n    Tag the computer on\n    "),s("small",{staticClass:"text-muted"},[e._v(e._s(e.$route.params.inventory))]),e._v(" \n    with "+e._s(e.getUSBName(e.$route.params.inventory))+"\n    "),s("small",{staticClass:"text-muted"},[e._v(e._s(e.$route.params.serial))])]),e._v(" "),s("div",{domProps:{innerHTML:e._s(e.html)}}),e._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.tag_computer}},[e._v("Tag it")])])},staticRenderFns:[]}},706:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"simulator"},[s("h3",[e._v("\n    Simulator\n    "),s("small",[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.toggleMe(a)}}},[s("i",{staticClass:"fa",class:e.visible?"fa-toggle-on":"fa-toggle-off"})])])]),e._v(" "),e.visible?s("ul",{staticClass:"list-unstyled"},e._l(e.simulations.inventories,function(a,t){return s("li",{key:"inventory",staticClass:"media"},[s("div",{staticClass:"text-center align-self-center launcher"},[s("div",{staticClass:"rocket-icon"},[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.launchInventory(t,a)}}},[s("i",{staticClass:"fa fa-rocket fa-2x"})])]),e._v(" "),s("div",{staticClass:"timed-icon"},[s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.toggleTimed(a)}}},[s("i",{staticClass:"fa fa-hourglass-half"})])])]),e._v(" "),s("div",{staticClass:"media-body"},[s("h5",[s("i",{staticClass:"fa",class:e.deviceIcon(a[0].device.type)}),e._v("\n          "+e._s(a[0].device.manufacturer)+" "+e._s(a[0].device.model)+"\n          "),s("small",[e._v(e._s(t))])]),e._v(" "),e._l(e.simulations.usbs,function(a,n){return s("div",{key:"serial",staticClass:"usb"},[s("i",{staticClass:"fa fa-usb"}),e._v(" \n          "+e._s(a.vendor)+" "+e._s(a.product)+" "),s("small",[e._v(e._s(n))]),e._v(" "),s("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.toggleUsb(t,n,a)}}},[s("i",{staticClass:"fa",class:e.isPlugged(t,n)?"fa-toggle-on":"fa-toggle-off"})])])})],2)])})):e._e()])},staticRenderFns:[]}},707:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement;return(e._self._c||a)("router-view")},staticRenderFns:[]}},719:function(e,a){},720:function(e,a){},721:function(e,a){},722:function(e,a){}},[369]);
//# sourceMappingURL=app.27a4b4edb9de37e5b0cc.js.map