(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{110:function(e,t,r){"use strict";r.r(t);var n=r(43),a=r.n(n),i=r(44),c=r(40),o=r(0),s=r.n(o),l=r(2),u=r(18),d=r(1),h=s.a.memo((function(e){var t=e.questions;return Object(d.jsxs)(d.Fragment,{children:[t.length&&t.map((function(e,t){return Object(d.jsxs)("div",{className:"card shadow",children:[Object(d.jsx)("div",{className:"card-header bg-dark text-white text-left",children:Object(d.jsxs)("h5",{className:"my-2 p-2",children:[t+1,") ",e.question," ",Object(d.jsxs)("b",{children:["[ ",e.marks," ]"]})]})}),Object(d.jsx)("div",{className:"row",children:e.Answers.map((function(e){return Object(d.jsx)("div",{id:e.id,className:"col-md-3 col-sm-12",children:Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{style:{alignItems:"baseline"},children:[Object(d.jsx)("input",{type:"checkbox",className:"mr-2",defaultChecked:e.correct,disabled:!e.correct}),Object(d.jsx)("label",{children:e.answer})]},e.id)})})},e.id)}))})]},t)})),Object(d.jsx)(u.b,{to:"/admin/test",children:Object(d.jsx)("div",{className:"text-left",children:Object(d.jsx)("button",{className:"btn btn-primary p-3 text-white",children:"Go Back"})})})]})})),f=r(47),b=r(55);t.default=s.a.memo((function(){var e=Object(l.g)().id,t=Object(o.useState)([]),r=Object(c.a)(t,2),n=r[0],s=r[1];return Object(o.useEffect)(Object(i.a)(a.a.mark((function t(){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.c)(e);case 2:r=t.sent,console.log(r),s(r);case 5:case"end":return t.stop()}}),t)}))),[]),Object(d.jsx)(f.a,{title:"Test Questions",children:Object(d.jsx)(h,{questions:n})})}))},40:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(45);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},43:function(e,t,r){e.exports=r(54)},44:function(e,t,r){"use strict";function n(e,t,r,n,a,i,c){try{var o=e[i](c),s=o.value}catch(l){return void r(l)}o.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var c=e.apply(t,r);function o(e){n(c,a,i,o,s,"next",e)}function s(e){n(c,a,i,o,s,"throw",e)}o(void 0)}))}}r.d(t,"a",(function(){return a}))},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(46);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},46:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},47:function(e,t,r){"use strict";r(0),r(48),r(49),r(50),r(51);var n=r(42),a=r(9),i=r(18),c=r(2),o=r(1);t.a=Object(c.h)((function(e){var t=e.title,r=e.children,c=e.history;return Object(o.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(o.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(o.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(o.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:Object(o.jsx)("b",{className:"logo-icon",children:Object(o.jsx)("img",{src:n.a,alt:"homepage"})})}),Object(o.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(o.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(o.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(o.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(a.d)((function(){return c.push("/home")}))},children:Object(o.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(o.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(o.jsx)("div",{className:"scroll-sidebar",children:Object(o.jsx)("nav",{className:"sidebar-nav",children:Object(o.jsxs)("ul",{id:"sidebarnav",children:[Object(o.jsx)("li",{className:"sidebar-item pt-2",children:Object(o.jsx)(i.b,{to:"/admin/dashboard",children:Object(o.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(o.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(o.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(o.jsx)("li",{className:"sidebar-item",children:Object(o.jsx)(i.b,{to:"/myprofile",children:Object(o.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(o.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(o.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(o.jsx)("li",{className:"sidebar-item",children:Object(o.jsx)(i.b,{to:"/admin/test",children:Object(o.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(o.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(o.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(o.jsx)("li",{className:"sidebar-item",children:Object(o.jsx)(i.b,{to:"/admin/question",children:Object(o.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(o.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(o.jsx)("span",{className:"hide-menu",children:"Questions And Answers"})]})})}),Object(o.jsx)("li",{className:"sidebar-item",children:Object(o.jsx)(i.b,{to:"/admin/test/results",children:Object(o.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(o.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(o.jsx)("span",{className:"hide-menu",children:"Results"})]})})})]})})})}),Object(o.jsxs)("div",{className:"page-wrapper",children:[Object(o.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(o.jsxs)("div",{className:"row align-items-center",children:[Object(o.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(o.jsx)("h4",{className:"page-title",children:t})}),Object(o.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(o.jsx)("div",{className:"d-md-flex",children:Object(o.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(o.jsx)("div",{className:"container-fluid",children:r}),Object(o.jsx)("footer",{className:"footer text-center",children:" TakeATest "})]})]})}))},54:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(_){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),c=new S(n||[]);return i._invoke=function(e,t,r){var n=d;return function(a,i){if(n===f)throw new Error("Generator is already running");if(n===b){if("throw"===a)throw i;return A()}for(r.method=a,r.arg=i;;){var c=r.delegate;if(c){var o=k(c,r);if(o){if(o===j)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?b:h,s.arg===j)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=b,r.method="throw",r.arg=s.arg)}}}(e,r,c),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",b="completed",j={};function m(){}function p(){}function v(){}var y={};y[i]=function(){return this};var x=Object.getPrototypeOf,O=x&&x(x(T([])));O&&O!==r&&n.call(O,i)&&(y=O);var g=v.prototype=m.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function r(a,i,c,o){var s=u(e[a],e,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,o)}),(function(e){r("throw",e,c,o)})):t.resolve(d).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,o)}))}o(s.arg)}var a;this._invoke=function(e,n){function i(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(i,i):i()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return j;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var a=u(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,j;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,j):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,j)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function T(e){if(e){var r=e[i];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}return{next:A}}function A(){return{value:t,done:!0}}return p.prototype=g.constructor=v,v.constructor=p,p.displayName=s(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(N.prototype),N.prototype[c]=function(){return this},e.AsyncIterator=N,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var c=new N(l(t,r,n,a),i);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},w(g),s(g,o,"Generator"),g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return o.type="throw",o.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var s=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(s&&l){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,j):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),j}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),j}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},55:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"b",(function(){return s}));var n=r(11),a=r(12),i=function(e){return Object(n.a)("".concat(a.a,"/test"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))},c=function(){return Object(n.a)("".concat(a.a,"/test"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return e}))},o=function(e){return Object(n.a)("".concat(a.a,"/test/").concat(e,"/questions"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return e}))},s=function(e){return Object(n.a)("".concat(a.a,"/test/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return e}))}}}]);
//# sourceMappingURL=11.d24f8cfe.chunk.js.map