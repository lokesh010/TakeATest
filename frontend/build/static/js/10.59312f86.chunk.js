/*! For license information please see 10.59312f86.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[10],{36:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(38);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},38:function(e,t,r){"use strict";function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return s}))},40:function(e,t,r){"use strict";r(0),r(41),r(42),r(43),r(44);var s=r(37),a=r(32),n=r(12),i=r(2),c=r(1);t.a=Object(i.h)((function(e){var t=e.title,r=e.children,i=e.history;return Object(c.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(c.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(c.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(c.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:Object(c.jsx)("b",{className:"logo-icon",children:Object(c.jsx)("img",{src:s.a,alt:"homepage"})})}),Object(c.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(c.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(c.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(c.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(a.d)((function(){return i.push("/home")}))},children:Object(c.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(c.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(c.jsx)("div",{className:"scroll-sidebar",children:Object(c.jsx)("nav",{className:"sidebar-nav",children:Object(c.jsxs)("ul",{id:"sidebarnav",children:[Object(c.jsx)("li",{className:"sidebar-item pt-2",children:Object(c.jsx)(n.b,{to:"/admin/dashboard",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/myprofile",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/admin/test",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/admin/question",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Questions And Answers"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/admin/test/results",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Results"})]})})})]})})})}),Object(c.jsxs)("div",{className:"page-wrapper",children:[Object(c.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(c.jsx)("h4",{className:"page-title",children:t})}),Object(c.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(c.jsx)("div",{className:"d-md-flex",children:Object(c.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(c.jsx)("div",{className:"container-fluid",children:r}),Object(c.jsx)("footer",{className:"footer text-center",children:" TakeATest "})]})]})}))},46:function(e,t){var r,s,a=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(r===setTimeout)return setTimeout(e,0);if((r===n||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:n}catch(e){r=n}try{s="function"===typeof clearTimeout?clearTimeout:i}catch(e){s=i}}();var o,l=[],d=!1,h=-1;function b(){d&&o&&(d=!1,o.length?l=o.concat(l):h=-1,l.length&&u())}function u(){if(!d){var e=c(b);d=!0;for(var t=l.length;t;){for(o=l,l=[];++h<t;)o&&o[h].run();h=-1,t=l.length}o=null,d=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===i||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function j(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||d||c(u)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=j,a.addListener=j,a.once=j,a.off=j,a.removeListener=j,a.removeAllListeners=j,a.emit=j,a.prependListener=j,a.prependOnceListener=j,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},47:function(e,t,r){var s,a;!function(n){if(void 0===(a="function"===typeof(s=n)?s.call(t,r,t,e):s)||(e.exports=a),!0,e.exports=n(),!!0){var i=window.Cookies,c=window.Cookies=n();c.noConflict=function(){return window.Cookies=i,c}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var s in r)t[s]=r[s]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(s){function a(){}function n(t,r,n){if("undefined"!==typeof document){"number"===typeof(n=e({path:"/"},a.defaults,n)).expires&&(n.expires=new Date(1*new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var i=JSON.stringify(r);/^[\{\[]/.test(i)&&(r=i)}catch(l){}r=s.write?s.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var o in n)n[o]&&(c+="; "+o,!0!==n[o]&&(c+="="+n[o].split(";")[0]));return document.cookie=t+"="+r+c}}function i(e,r){if("undefined"!==typeof document){for(var a={},n=document.cookie?document.cookie.split("; "):[],i=0;i<n.length;i++){var c=n[i].split("="),o=c.slice(1).join("=");r||'"'!==o.charAt(0)||(o=o.slice(1,-1));try{var l=t(c[0]);if(o=(s.read||s)(o,l)||t(o),r)try{o=JSON.parse(o)}catch(d){}if(a[l]=o,e===l)break}catch(d){}}return e?a[e]:a}}return a.set=n,a.get=function(e){return i(e,!1)},a.getJSON=function(e){return i(e,!0)},a.remove=function(t,r){n(t,"",e(r,{expires:-1}))},a.defaults={},a.withConverter=r,a}((function(){}))}))},50:function(e,t,r){"use strict";r(0),r(41),r(42),r(43),r(44);var s=r(37),a=r(32),n=r(12),i=r(2),c=r(1);t.a=Object(i.h)((function(e){var t=e.title,r=e.children,i=e.history;return Object(c.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(c.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(c.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(c.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:Object(c.jsx)("b",{className:"logo-icon",children:Object(c.jsx)("img",{src:s.a,alt:"homepage"})})}),Object(c.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(c.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(c.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(c.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(a.d)((function(){return i.push("/home")}))},children:Object(c.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(c.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(c.jsx)("div",{className:"scroll-sidebar",children:Object(c.jsx)("nav",{className:"sidebar-nav",children:Object(c.jsxs)("ul",{id:"sidebarnav",children:[Object(c.jsx)("li",{className:"sidebar-item pt-2",children:Object(c.jsx)(n.b,{to:"/student/dashboard",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/myprofile",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/student/test",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(n.b,{to:"/student/results",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"My Results"})]})})})]})})})}),Object(c.jsxs)("div",{className:"page-wrapper",children:[Object(c.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(c.jsx)("h4",{className:"page-title",children:t})}),Object(c.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(c.jsx)("div",{className:"d-md-flex",children:Object(c.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(c.jsx)("div",{className:"container-fluid",children:r}),Object(c.jsx)("footer",{className:"footer text-center",children:"TakeATest"})]})]})}))},51:function(e,t,r){"use strict";r.r(t),r.d(t,"Headers",(function(){return f})),r.d(t,"Request",(function(){return O})),r.d(t,"Response",(function(){return g})),r.d(t,"DOMException",(function(){return k})),r.d(t,"fetch",(function(){return A}));var s="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof s&&s,a="URLSearchParams"in s,n="Symbol"in s&&"iterator"in Symbol,i="FileReader"in s&&"Blob"in s&&function(){try{return new Blob,!0}catch(e){return!1}}(),c="FormData"in s,o="ArrayBuffer"in s;if(o)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(e){return e&&l.indexOf(Object.prototype.toString.call(e))>-1};function h(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function b(e){return"string"!==typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function j(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function m(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function p(e){var t=new FileReader,r=m(t);return t.readAsArrayBuffer(e),r}function x(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:i&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:c&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:a&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o&&i&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=x(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(e)||d(e))?this._bodyArrayBuffer=x(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):a&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var e=j(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=j(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(p)}),this.text=function(){var e=j(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,r=m(t);return t.readAsText(e),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},c&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(e,t){e=h(e),t=b(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},f.prototype.delete=function(e){delete this.map[h(e)]},f.prototype.get=function(e){return e=h(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(h(e))},f.prototype.set=function(e,t){this.map[h(e)]=b(t)},f.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},f.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),u(e)},f.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),u(e)},f.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),u(e)},n&&(f.prototype[Symbol.iterator]=f.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function O(e,t){if(!(this instanceof O))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r=(t=t||{}).body;if(e instanceof O){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,r||null==e._bodyInit||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=function(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),s=r.shift().replace(/\+/g," "),a=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(a))}})),t}function N(e){var t=new f;return e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var r=e.split(":"),s=r.shift().trim();if(s){var a=r.join(":").trim();t.append(s,a)}})),t}function g(e,t){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}O.prototype.clone=function(){return new O(this,{body:this._bodyInit})},y.call(O.prototype),y.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];g.redirect=function(e,t){if(-1===T.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})};var k=s.DOMException;try{new k}catch(E){(k=function(e,t){this.message=e,this.name=t;var r=Error(e);this.stack=r.stack}).prototype=Object.create(Error.prototype),k.prototype.constructor=k}function A(e,t){return new Promise((function(r,a){var n=new O(e,t);if(n.signal&&n.signal.aborted)return a(new k("Aborted","AbortError"));var c=new XMLHttpRequest;function l(){c.abort()}c.onload=function(){var e={status:c.status,statusText:c.statusText,headers:N(c.getAllResponseHeaders()||"")};e.url="responseURL"in c?c.responseURL:e.headers.get("X-Request-URL");var t="response"in c?c.response:c.responseText;setTimeout((function(){r(new g(t,e))}),0)},c.onerror=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},c.ontimeout=function(){setTimeout((function(){a(new TypeError("Network request failed"))}),0)},c.onabort=function(){setTimeout((function(){a(new k("Aborted","AbortError"))}),0)},c.open(n.method,function(e){try{return""===e&&s.location.href?s.location.href:e}catch(t){return e}}(n.url),!0),"include"===n.credentials?c.withCredentials=!0:"omit"===n.credentials&&(c.withCredentials=!1),"responseType"in c&&(i?c.responseType="blob":o&&n.headers.get("Content-Type")&&-1!==n.headers.get("Content-Type").indexOf("application/octet-stream")&&(c.responseType="arraybuffer")),!t||"object"!==typeof t.headers||t.headers instanceof f?n.headers.forEach((function(e,t){c.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){c.setRequestHeader(e,b(t.headers[e]))})),n.signal&&(n.signal.addEventListener("abort",l),c.onreadystatechange=function(){4===c.readyState&&n.signal.removeEventListener("abort",l)}),c.send("undefined"===typeof n._bodyInit?null:n._bodyInit)}))}A.polyfill=!0,s.fetch||(s.fetch=A,s.Headers=f,s.Request=O,s.Response=g)},53:function(e,t,r){r(51),e.exports=self.fetch.bind(self)},95:function(e,t,r){"use strict";r.r(t);r(0);var s=r(40),a=r(50),n=(r(16),r(1));t.default=function(){var e=JSON.parse(localStorage.getItem("user"));function t(){return Object(n.jsx)("div",{style:{minHeight:"75vh"},children:Object(n.jsx)("div",{className:"container emp-profile",children:Object(n.jsxs)("form",{method:"post",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-2"}),Object(n.jsx)("div",{className:"col-md-8 mb-4",children:Object(n.jsxs)("div",{className:"profile-head",children:[Object(n.jsx)("h3",{children:e.fullName}),Object(n.jsx)("h5",{children:e.role}),Object(n.jsx)("ul",{className:"nav nav-tabs my-4",id:"myTab",role:"tablist",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link active",id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true",children:"About"})})})]})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-2"}),Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)("div",{className:"tab-content profile-tab",id:"myTabContent",children:Object(n.jsxs)("div",{className:"tab-pane fade show active",id:"home",role:"tabpanel","aria-labelledby":"home-tab",children:[Object(n.jsx)("div",{className:"row"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("label",{children:"Full Name"})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("p",{children:e.fullName})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("label",{children:"Address"})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("p",{children:e.address})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("label",{children:"Email"})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("p",{children:e.email})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("label",{children:"Phone"})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("p",{children:e.phone})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("label",{children:"Role"})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("p",{children:e.role})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("label",{children:"Profile Created"})}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsx)("p",{children:e.createdAt.split("T")[0]})})]})]})})})]})]})})})}return"admin"===e.role?Object(n.jsx)(s.a,{title:"My Profile",children:t()}):Object(n.jsx)(a.a,{title:"My Profile",children:t()})}}}]);
//# sourceMappingURL=10.59312f86.chunk.js.map