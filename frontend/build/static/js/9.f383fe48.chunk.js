/*! For license information please see 9.f383fe48.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{32:function(t,e,r){"use strict";(function(t){r.d(e,"e",(function(){return a})),r.d(e,"f",(function(){return u})),r.d(e,"a",(function(){return c})),r.d(e,"d",(function(){return f})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return l}));var n=r(33),o=r(34),i=r(47),s=r.n(i),a=function(t){return Object(n.a)("".concat(o.a,"/auth/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){return t}))},u=function(t){return Object(n.a)("".concat(o.a,"/auth/student/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){return h("token"),d("user"),t}))},c=function(t){return Object(n.a)("".concat(o.a,"/auth/admin/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){return h("token"),d("user"),t}))},f=function(t){return h("token"),d("user"),t(),Object(n.a)("".concat(o.a,"/auth/signout"),{method:"GET"}).then((function(t){})).catch((function(t){console.log(t)}))},h=function(e){t.browser&&s.a.remove(e,{expires:1})},d=function(e){t.browser&&localStorage.removeItem(e)},p=function(e,r){var n,o;n="token",o=e.token,t.browser&&s.a.set(n,o,{expires:1}),function(e,r){t.browser&&localStorage.setItem(e,JSON.stringify(r))}("user",e.user),r()},l=function(){if(t.browser){var e=function(e){if(t.browser)return s.a.get(e)}("token");if(e&&"undefined"!==e)return!(!localStorage.getItem("user")||"undefined"===localStorage.getItem("user"))&&JSON.parse(localStorage.getItem("user"))}}}).call(this,r(46))},33:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return u}));var n=r(36),o=r(53),i=r.n(o),s=r(47),a=r.n(s);function u(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return i()(e[0],Object(n.a)(Object(n.a)({},e[1]),{},{headers:Object(n.a)(Object(n.a)({},e[1].headers),{},{"set-cookie":c("token")})}))}var c=function(e){if(t.browser)return a.a.get(e)}}).call(this,r(46))},34:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n="http://65.0.3.186//:5000/api"},36:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(38);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},38:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},46:function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var u,c=[],f=!1,h=-1;function d(){f&&u&&(f=!1,u.length?c=u.concat(c):h=-1,c.length&&p())}function p(){if(!f){var t=a(d);f=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function l(t,e){this.fun=t,this.array=e}function y(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new l(t,e)),1!==c.length||f||a(p)},l.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},47:function(t,e,r){var n,o;!function(i){if(void 0===(o="function"===typeof(n=i)?n.call(e,r,e,t):n)||(t.exports=o),!0,t.exports=i(),!!0){var s=window.Cookies,a=window.Cookies=i();a.noConflict=function(){return window.Cookies=s,a}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function o(){}function i(e,r,i){if("undefined"!==typeof document){"number"===typeof(i=t({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var s=JSON.stringify(r);/^[\{\[]/.test(s)&&(r=s)}catch(c){}r=n.write?n.write(r,e):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in i)i[u]&&(a+="; "+u,!0!==i[u]&&(a+="="+i[u].split(";")[0]));return document.cookie=e+"="+r+a}}function s(t,r){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],s=0;s<i.length;s++){var a=i[s].split("="),u=a.slice(1).join("=");r||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var c=e(a[0]);if(u=(n.read||n)(u,c)||e(u),r)try{u=JSON.parse(u)}catch(f){}if(o[c]=u,t===c)break}catch(f){}}return t?o[t]:o}}return o.set=i,o.get=function(t){return s(t,!1)},o.getJSON=function(t){return s(t,!0)},o.remove=function(e,r){i(e,"",t(r,{expires:-1}))},o.defaults={},o.withConverter=r,o}((function(){}))}))},51:function(t,e,r){"use strict";r.r(e),r.d(e,"Headers",(function(){return l})),r.d(e,"Request",(function(){return O})),r.d(e,"Response",(function(){return A})),r.d(e,"DOMException",(function(){return _})),r.d(e,"fetch",(function(){return x}));var n="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,s="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in n,u="ArrayBuffer"in n;if(u)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function d(t){return"string"!==typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function m(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function w(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():u&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=w(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=w(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(m)}),this.text=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,r=b(e);return e.readAsText(t),r}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=h(t),e=d(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[h(t)]},l.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},l.prototype.set=function(t,e){this.map[h(t)]=d(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},i&&(l.prototype[Symbol.iterator]=l.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function O(t,e){if(!(this instanceof O))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r=(e=e||{}).body;if(t instanceof O){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=function(t){var e=t.toUpperCase();return v.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),("GET"===this.method||"HEAD"===this.method)&&("no-store"===e.cache||"no-cache"===e.cache)){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function T(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function j(t){var e=new l;return t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}O.prototype.clone=function(){return new O(this,{body:this._bodyInit})},g.call(O.prototype),g.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];A.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})};var _=n.DOMException;try{new _}catch(B){(_=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),_.prototype.constructor=_}function x(t,e){return new Promise((function(r,o){var i=new O(t,e);if(i.signal&&i.signal.aborted)return o(new _("Aborted","AbortError"));var a=new XMLHttpRequest;function c(){a.abort()}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:j(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;setTimeout((function(){r(new A(e,t))}),0)},a.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){o(new _("Aborted","AbortError"))}),0)},a.open(i.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":u&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!==typeof e.headers||e.headers instanceof l?i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,d(e.headers[t]))})),i.signal&&(i.signal.addEventListener("abort",c),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",c)}),a.send("undefined"===typeof i._bodyInit?null:i._bodyInit)}))}x.polyfill=!0,n.fetch||(n.fetch=x,n.Headers=l,n.Request=O,n.Response=A)},53:function(t,e,r){r(51),t.exports=self.fetch.bind(self)},94:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(2),i=r(32),s=r(1);e.default=Object(o.h)((function(t){var e=t.history;return Object(n.useEffect)((function(){Object(i.c)()&&"admin"===Object(i.c)().role?e.push("/admin/dashboard"):Object(i.c)()&&"student"===Object(i.c)().role&&e.push("/student/dashboard")}),[]),Object(s.jsx)("div",{})}))}}]);
//# sourceMappingURL=9.f383fe48.chunk.js.map