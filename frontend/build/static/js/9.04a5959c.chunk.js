(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{113:function(e,t,r){"use strict";r.r(t);var n=r(43),a=r.n(n),s=r(44),i=r(40),c=r(0),o=r.n(c),l=r(2),d=r(47),u=r(53),h=r(18),b=r(1),f=o.a.memo((function(e){var t=e.uniqueQuestions,r=e.testAnswers,n=e.role;return Object(b.jsxs)(b.Fragment,{children:[t.length&&t.map((function(e,t){return Object(b.jsxs)("div",{className:"card shadow",children:[Object(b.jsx)("div",{className:"card-header bg-dark text-white text-left",children:Object(b.jsxs)("h5",{className:"my-2 p-2",children:[t+1,") ",e.question," ",Object(b.jsxs)("b",{children:["[ ",r.find((function(t){return t.QuestionId===e.id})).marks," ]"]})]})}),Object(b.jsx)("div",{className:"row",children:r.map((function(t){return t.QuestionId===e.id&&Object(b.jsx)("div",{id:t.id,className:"col-md-2 col-sm-12",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{alignItems:"baseline"},children:[Object(b.jsx)("input",{type:"checkbox",defaultChecked:t.chosen}),Object(b.jsx)("label",{className:" ml-1 \n                                                            ".concat(t.correct?"text-success":!t.correct&&t.chosen?"text-danger":null,"\n                                                            "),style:{cursor:"pointer"},children:t.Answer.answer})]},t.Answer.id)})})},t.id)}))})]},t)})),Object(b.jsx)(h.b,{to:"admin"===n?"/admin/test/results":"/student/results",children:Object(b.jsx)("div",{className:"text-left",children:Object(b.jsx)("button",{className:"btn btn-primary p-3 text-white",children:"Go Back"})})})]})})),j=r(52);t.default=function(e){var t=e.role,r=Object(l.g)(),n=r.UserId,o=r.TestId,h=r.take_count,m=Object(c.useState)([]),p=Object(i.a)(m,2),v=p[0],x=p[1],O=Object(c.useState)([]),y=Object(i.a)(O,2),g=y[0],N=y[1];function w(){return Object(b.jsx)(f,{uniqueQuestions:g,testAnswers:v,role:t})}return Object(c.useEffect)(Object(s.a)(a.a.mark((function e(){var r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],"admin"!==t){e.next=7;break}return e.next=4,Object(j.e)(n,o,h);case 4:r=e.sent,e.next=11;break;case 7:if("student"!==t){e.next=11;break}return e.next=10,Object(j.d)(o,h);case 10:r=e.sent;case 11:x(r),s=[],r.map((function(e){s&&s.find((function(t){return t.id===e.QuestionId}))||s.push(e.Question)})),N(s);case 15:case"end":return e.stop()}}),e)}))),[]),"admin"===t?Object(b.jsx)(d.a,{title:"Test Answers",children:w()}):Object(b.jsx)(u.a,{title:"Test Answers",children:w()})}},40:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(45);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(o){a=!0,s=o}finally{try{n||null==c.return||c.return()}finally{if(a)throw s}}return r}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},43:function(e,t,r){e.exports=r(54)},44:function(e,t,r){"use strict";function n(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var i=e.apply(t,r);function c(e){n(i,a,s,c,o,"next",e)}function o(e){n(i,a,s,c,o,"throw",e)}c(void 0)}))}}r.d(t,"a",(function(){return a}))},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(46);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},46:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},47:function(e,t,r){"use strict";r(0),r(48),r(49),r(50),r(51);var n=r(42),a=r(9),s=r(18),i=r(2),c=r(1);t.a=Object(i.h)((function(e){var t=e.title,r=e.children,i=e.history;return Object(c.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(c.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(c.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(c.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:Object(c.jsx)("b",{className:"logo-icon",children:Object(c.jsx)("img",{src:n.a,alt:"homepage"})})}),Object(c.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(c.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(c.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(c.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(a.d)((function(){return i.push("/home")}))},children:Object(c.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(c.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(c.jsx)("div",{className:"scroll-sidebar",children:Object(c.jsx)("nav",{className:"sidebar-nav",children:Object(c.jsxs)("ul",{id:"sidebarnav",children:[Object(c.jsx)("li",{className:"sidebar-item pt-2",children:Object(c.jsx)(s.b,{to:"/admin/dashboard",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/myprofile",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/admin/test",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/admin/question",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Questions And Answers"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/admin/test/results",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Results"})]})})})]})})})}),Object(c.jsxs)("div",{className:"page-wrapper",children:[Object(c.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(c.jsx)("h4",{className:"page-title",children:t})}),Object(c.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(c.jsx)("div",{className:"d-md-flex",children:Object(c.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(c.jsx)("div",{className:"container-fluid",children:r}),Object(c.jsx)("footer",{className:"footer text-center",children:" TakeATest "})]})]})}))},52:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l}));var n=r(11),a=r(12),s=function(){return Object(n.a)("".concat(a.a,"/results"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},i=function(e,t,r){return Object(n.a)("".concat(a.a,"/results/user/").concat(e,"/test/").concat(t,"/take/").concat(r),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},c=function(e){return Object(n.a)("".concat(a.a,"/results"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return{status:200,msg:"Test submitted, Goodluck!"}})).catch((function(e){return{status:400,msg:e}}))},o=function(){return Object(n.a)("".concat(a.a,"/results/my-results"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},l=function(e,t){return Object(n.a)("".concat(a.a,"/results/test/").concat(e,"/take/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))}},53:function(e,t,r){"use strict";r(0),r(48),r(49),r(50),r(51);var n=r(42),a=r(9),s=r(18),i=r(2),c=r(1);t.a=Object(i.h)((function(e){var t=e.title,r=e.children,i=e.history;return Object(c.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(c.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(c.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(c.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:Object(c.jsx)("b",{className:"logo-icon",children:Object(c.jsx)("img",{src:n.a,alt:"homepage"})})}),Object(c.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(c.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(c.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(c.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(a.d)((function(){return i.push("/home")}))},children:Object(c.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(c.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(c.jsx)("div",{className:"scroll-sidebar",children:Object(c.jsx)("nav",{className:"sidebar-nav",children:Object(c.jsxs)("ul",{id:"sidebarnav",children:[Object(c.jsx)("li",{className:"sidebar-item pt-2",children:Object(c.jsx)(s.b,{to:"/student/dashboard",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/myprofile",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/student/test",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(c.jsx)("li",{className:"sidebar-item",children:Object(c.jsx)(s.b,{to:"/student/results",children:Object(c.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(c.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(c.jsx)("span",{className:"hide-menu",children:"My Results"})]})})})]})})})}),Object(c.jsxs)("div",{className:"page-wrapper",children:[Object(c.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(c.jsx)("h4",{className:"page-title",children:t})}),Object(c.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(c.jsx)("div",{className:"d-md-flex",children:Object(c.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(c.jsx)("div",{className:"container-fluid",children:r}),Object(c.jsx)("footer",{className:"footer text-center",children:"TakeATest"})]})]})}))},54:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(_){o=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,s=Object.create(a.prototype),i=new T(n||[]);return s._invoke=function(e,t,r){var n=u;return function(a,s){if(n===b)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw s;return S()}for(r.method=a,r.arg=s;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===j)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=b;var o=d(e,t,r);if("normal"===o.type){if(n=r.done?f:h,o.arg===j)continue;return{value:o.arg,done:r.done}}"throw"===o.type&&(n=f,r.method="throw",r.arg=o.arg)}}}(e,r,i),s}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=l;var u="suspendedStart",h="suspendedYield",b="executing",f="completed",j={};function m(){}function p(){}function v(){}var x={};x[s]=function(){return this};var O=Object.getPrototypeOf,y=O&&O(O(A([])));y&&y!==r&&n.call(y,s)&&(x=y);var g=v.prototype=m.prototype=Object.create(x);function N(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(a,s,i,c){var o=d(e[a],e,s);if("throw"!==o.type){var l=o.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(o.arg)}var a;this._invoke=function(e,n){function s(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(s,s):s()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return j;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var a=d(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,j;var s=a.arg;return s?s.done?(r[e.resultName]=s.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,j):s:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,j)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var r=e[s];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:t,done:!0}}return p.prototype=g.constructor=v,v.constructor=p,p.displayName=o(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},N(w.prototype),w.prototype[i]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,a,s){void 0===s&&(s=Promise);var i=new w(l(t,r,n,a),s);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(g),o(g,c,"Generator"),g[s]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var o=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(o&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(o){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var s=a;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var i=s?s.completion:{};return i.type=e,i.arg=t,s?(this.method="next",this.next=s.finallyLoc,j):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),j},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),j}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),j}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=9.04a5959c.chunk.js.map