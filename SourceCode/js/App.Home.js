/*
 imagesLoaded PACKAGED v4.1.4
 JavaScript is all like "You images are done yet or what?"
 MIT License
*/
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,b,e){a instanceof String&&(a=String(a));for(var c=a.length,d=0;d<c;d++){var h=a[d];if(b.call(e,h,d,a))return{i:d,v:h}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){a!=Array.prototype&&a!=Object.prototype&&(a[b]=e.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,e,c){if(b){e=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var d=a[c];d in e||(e[d]={});e=e[d]}a=a[a.length-1];c=e[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,e){return $jscomp.findInternal(this,a,e).v}},"es6","es3");
!function(a,b){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",b):"object"==typeof module&&module.exports?module.exports=b():a.EvEmitter=b()}("undefined"!=typeof window?window:this,function(){function a(){}var b=a.prototype;return b.on=function(a,b){if(a&&b){var c=this._events=this._events||{};a=c[a]=c[a]||[];return-1==a.indexOf(b)&&a.push(b),this}},b.once=function(a,b){if(a&&b){this.on(a,b);var c=this._onceEvents=this._onceEvents||{};return(c[a]=c[a]||{})[b]=!0,this}},b.off=
function(a,b){if((a=this._events&&this._events[a])&&a.length)return b=a.indexOf(b),-1!=b&&a.splice(b,1),this},b.emitEvent=function(a,b){var c=this._events&&this._events[a];if(c&&c.length){c=c.slice(0);b=b||[];for(var e=this._onceEvents&&this._onceEvents[a],g=0;g<c.length;g++){var k=c[g];e&&e[k]&&(this.off(a,k),delete e[k]);k.apply(this,b)}return this}},b.allOff=function(){delete this._events;delete this._onceEvents},a});
(function(a,b){"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(e){return b(a,e)}):"object"==typeof module&&module.exports?module.exports=b(a,require("ev-emitter")):a.imagesLoaded=b(a,a.EvEmitter)})("undefined"!=typeof window?window:this,function(a,b){function e(a,b){for(var f in b)a[f]=b[f];return a}function c(a,b,d){if(!(this instanceof c))return new c(a,b,d);var f=a;"string"==typeof a&&(f=document.querySelectorAll(a));f?(a=f,a=Array.isArray(a)?a:"object"==typeof a&&
"number"==typeof a.length?l.call(a):[a],b=(this.elements=a,this.options=e({},this.options),"function"==typeof b?d=b:e(this.options,b),d&&this.on("always",d),this.getImages(),g&&(this.jqDeferred=new g.Deferred),void setTimeout(this.check.bind(this)))):b=void k.error("Bad element for imagesLoaded "+(f||a));return b}function d(a){this.img=a}function h(a,b){this.url=a;this.element=b;this.img=new Image}var g=a.jQuery,k=a.console,l=Array.prototype.slice;c.prototype=Object.create(b.prototype);c.prototype.options=
{};c.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)};c.prototype.addElementImages=function(a){"IMG"==a.nodeName&&this.addImage(a);!0===this.options.background&&this.addElementBackgroundImages(a);var b=a.nodeType;if(b&&m[b]){var c=a.querySelectorAll("img");for(b=0;b<c.length;b++)this.addImage(c[b]);if("string"==typeof this.options.background)for(a=a.querySelectorAll(this.options.background),b=0;b<a.length;b++)this.addElementBackgroundImages(a[b])}};
var m={1:!0,9:!0,11:!0};return c.prototype.addElementBackgroundImages=function(a){var b=getComputedStyle(a);if(b)for(var c=/url\((['"])?(.*?)\1\)/gi,f=c.exec(b.backgroundImage);null!==f;)(f=f&&f[2])&&this.addBackground(f,a),f=c.exec(b.backgroundImage)},c.prototype.addImage=function(a){a=new d(a);this.images.push(a)},c.prototype.addBackground=function(a,b){a=new h(a,b);this.images.push(a)},c.prototype.check=function(){function a(a,c,f){setTimeout(function(){b.progress(a,c,f)})}var b=this;return this.progressedCount=
0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(b){b.once("progress",a);b.check()}):void this.complete()},c.prototype.progress=function(a,b,c){this.progressedCount++;this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded;this.emitEvent("progress",[this,a,b]);this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,a);this.progressedCount==this.images.length&&this.complete();this.options.debug&&k&&k.log("progress: "+c,a,b)},c.prototype.complete=function(){var a=this.hasAnyBroken?
"fail":"done";if(this.isComplete=!0,this.emitEvent(a,[this]),this.emitEvent("always",[this]),this.jqDeferred)this.jqDeferred[this.hasAnyBroken?"reject":"resolve"](this)},d.prototype=Object.create(b.prototype),d.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",
this),void(this.proxyImage.src=this.img.src))},d.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},d.prototype.confirm=function(a,b){this.isLoaded=a;this.emitEvent("progress",[this,this.img,b])},d.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.prototype.onload=function(){this.confirm(!0,"onload");this.unbindEvents()},d.prototype.onerror=function(){this.confirm(!1,"onerror");this.unbindEvents()},d.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",
this);this.proxyImage.removeEventListener("error",this);this.img.removeEventListener("load",this);this.img.removeEventListener("error",this)},h.prototype=Object.create(d.prototype),h.prototype.check=function(){this.img.addEventListener("load",this);this.img.addEventListener("error",this);this.img.src=this.url;this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},h.prototype.unbindEvents=function(){this.img.removeEventListener("load",this);this.img.removeEventListener("error",
this)},h.prototype.confirm=function(a,b){this.isLoaded=a;this.emitEvent("progress",[this,this.element,b])},c.makeJQueryPlugin=function(b){(b=b||a.jQuery)&&(g=b,g.fn.imagesLoaded=function(a,b){return(new c(this,a,b)).jqDeferred.promise(g(this))})},c.makeJQueryPlugin(),c});var clipboardsupport;function readurlparam(a,b){b=b||location.search;return decodeURIComponent(((new RegExp("[?|&]"+a+"=([^&;]+?)(&|#|;|$)")).exec(b)||[null,""])[1].replace(/\+/g,"%20"))||null}function GetUrlParam(a,b){return(a=readurlparam(a))?a:b}function PageReload(){"function"===typeof window.location.reload?window.location.reload():window.location=window.location}
function shownotify(a,b){$.notify({message:a},{type:b,placement:{from:"bottom",align:"right"},animate:{enter:"animated fadeInRight",exit:"animated fadeOutDown"}})}
function SetLoading(a){var b=a.find($("div[metroloading]"));b&&0<b.length||(b=$("<div>").addClass("stretch").addClass("windows8-loading"),b.append($("<b>")),b.append($("<b>")),b.append($("<b>")),b.append($("<b>")),b.append($("<b>")),b=$("<div metroloading>").addClass("midcenter").append(b),$("<div metroloading>").addClass("fixedDiv").addClass("stretch").addClass("disabled").addClass("opacity50").prependTo(a),a.append(b))}
function GetSvgUnavailable(){return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 40 40" class="icon icons8-Unavailable"><g id="surface1"><path style="fill:#DFF0FE;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:#4788C7;stroke-opacity:1;stroke-miterlimit:10;" d="M 20 1 C 9.507813 1 1 9.507813 1 20 C 1 30.492188 9.507813 39 20 39 C 30.492188 39 39 30.492188 39 20 C 39 9.507813 30.492188 1 20 1 Z M 6 20 C 6 12.269531 12.269531 6 20 6 C 22.964844 6 25.707031 6.925781 27.96875 8.496094 L 8.496094 27.96875 C 6.925781 25.707031 6 22.964844 6 20 Z M 20 34 C 17.035156 34 14.292969 33.074219 12.03125 31.503906 L 31.503906 12.03125 C 33.074219 14.292969 34 17.035156 34 20 C 34 27.730469 27.730469 34 20 34 Z"></path></g></svg>'}
function RemoveLoading(a){a.children("div[metroloading]").remove()}String.prototype.ctrim=function(a){void 0===a&&(a="s");return this.replace(new RegExp("^["+a+"]+"),"").replace(new RegExp("["+a+"]+$"),"")};function GetCurrentFolderUrl(){var a=location.pathname.split("/");a[a.length-1]?-1!=a[a.length-1].indexOf(".")&&a.pop():a.pop();return a[a.length-1]}function removefilename(a){};
