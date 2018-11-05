"use strict"
define("vlctech-hub/adapters/application",["exports","ember-data","vlctech-hub/config/environment"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default.RESTAdapter.extend({host:a.default.APP.API_HOST,namespace:"v1"})
e.default=n}),define("vlctech-hub/app",["exports","vlctech-hub/resolver","ember-load-initializers","vlctech-hub/config/environment"],function(e,t,a,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default});(0,a.default)(i,n.default.modulePrefix)
var l=i
e.default=l}),define("vlctech-hub/components/head-content",["exports","vlctech-hub/templates/head"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Component.extend({tagName:"",model:Ember.inject.service("head-data"),layout:t.default})
e.default=a}),define("vlctech-hub/components/head-layout",["exports","ember-cli-head/components/head-layout"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("vlctech-hub/helpers/app-version",["exports","vlctech-hub/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,l=n.versionOnly||n.hideSha,r=n.shaOnly||n.hideVersion,o=null
return l&&(n.showExtended&&(o=i.match(a.versionExtendedRegExp)),o||(o=i.match(a.versionRegExp))),r&&(o=i.match(a.shaRegExp)),o?o[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=n,e.default=void 0
var i=Ember.Helper.helper(n)
e.default=i}),define("vlctech-hub/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("vlctech-hub/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("vlctech-hub/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","vlctech-hub/config/environment"],function(e,t,a){var n,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(n=a.default.APP.name,i=a.default.APP.version)
var l={name:"App Version",initialize:(0,t.default)(n,i)}
e.default=l}),define("vlctech-hub/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("vlctech-hub/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("vlctech-hub/initializers/export-application-global",["exports","vlctech-hub/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var n,i=t.default.exportApplicationGlobal
n="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),a[n]||(a[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var n={name:"export-application-global",initialize:a}
e.default=n}),define("vlctech-hub/instance-initializers/clear-double-boot",["exports","ember-cli-fastboot/instance-initializers/clear-double-boot"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("vlctech-hub/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("vlctech-hub/instance-initializers/head-browser",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default={name:"head-browser",initialize:function(){}}}),define("vlctech-hub/locations/none",["exports","ember-cli-fastboot/locations/none"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("vlctech-hub/models/event",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.Model.extend({title:t.default.attr("string"),description:t.default.attr("string"),link:t.default.attr("string"),date:t.default.attr("date"),hashtag:t.default.attr("string"),slug:t.default.attr("string")})
e.default=a}),define("vlctech-hub/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("vlctech-hub/router",["exports","vlctech-hub/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("events",function(){this.route("show",{path:"/:slug"})})})
var n=a
e.default=n}),define("vlctech-hub/routes/events/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({model:function(){return this.get("store").query("event",{category:"next"})}})
e.default=t}),define("vlctech-hub/routes/events/show",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({headData:Ember.inject.service(),model:function(e){return this.store.find("event",e.slug)},afterModel:function(e){this.get("headData").setProperties({title:e.get("title"),description:e.get("description")})}})
e.default=t}),define("vlctech-hub/serializers/application",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.RESTSerializer.extend({primaryKey:"id"})
e.default=a}),define("vlctech-hub/serializers/event",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default.RESTSerializer.extend({primaryKey:"slug"})
e.default=a}),define("vlctech-hub/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("vlctech-hub/services/fastboot",["exports","ember-cli-fastboot/services/fastboot"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("vlctech-hub/services/head-data",["exports","ember-cli-head/services/head-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("vlctech-hub/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"woIhwi/t",block:'{"symbols":[],"statements":[[1,[21,"head-layout"],false],[0,"\\n"],[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"vlctech-hub/templates/application.hbs"}})
e.default=t}),define("vlctech-hub/templates/events/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"1U1BGak6",block:'{"symbols":["event"],"statements":[[4,"each",[[23,["model"]]],null,{"statements":[[0,"  "],[7,"p"],[9],[0," "],[1,[22,1,["title"]],false],[0," - "],[1,[22,1,["slug"]],false],[10],[0,"\\n"]],"parameters":[1]},null]],"hasEval":false}',meta:{moduleName:"vlctech-hub/templates/events/index.hbs"}})
e.default=t}),define("vlctech-hub/templates/events/show",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"XD/Atm4f",block:'{"symbols":[],"statements":[[1,[23,["model","title"]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"vlctech-hub/templates/events/show.hbs"}})
e.default=t}),define("vlctech-hub/templates/head",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"GuGhzksv",block:'{"symbols":[],"statements":[[7,"meta"],[11,"property","og:title"],[12,"content",[23,["model","title"]]],[9],[10],[0,"\\n"],[7,"meta"],[11,"property","og:description"],[12,"content",[23,["model","description"]]],[9],[10],[0,"\\n\\n"]],"hasEval":false}',meta:{moduleName:"vlctech-hub/templates/head.hbs"}})
e.default=t}),define("vlctech-hub/config/environment",[],function(){if("undefined"!=typeof FastBoot)return FastBoot.config("vlctech-hub")
try{var e="vlctech-hub/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(unescape(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})
"undefined"==typeof FastBoot&&(runningTests||require("vlctech-hub/app").default.create({API_HOST:"https://vlctechhub-api.herokuapp.com",name:"vlctech-hub",version:"0.0.0+1b185cd8"})),define("~fastboot/app-factory",["vlctech-hub/app","vlctech-hub/config/environment"],function(e,t){return e=e.default,t=t.default,{default:function(){return e.create(t.APP)}}})
