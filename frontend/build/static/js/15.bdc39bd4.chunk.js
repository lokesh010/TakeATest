(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15],{116:function(e,t,n){"use strict";n.r(t);var a=n(48),c=n.n(a),s=n(49),r=n(36),i=n(35),o=n(0),d=n.n(o),l=n(2),u=n(50),j=n(1),b=d.a.memo((function(e){var t=e.questions,n=e.answers,a=e.checkboxChangeHandler,c=e.submitForm;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{id:"accordion",children:t.length&&t.map((function(e,t){return Object(j.jsxs)("div",{className:"card shadow",children:[Object(j.jsx)("div",{className:"card-header bg-dark text-white text-left",id:"headingOne",children:Object(j.jsxs)("h5",{className:"my-2 p-2",children:[t+1,") ",e.question," ",Object(j.jsx)("b",{children:e.chosens?"[".concat(e.chosens,"]"):null})]})}),Object(j.jsx)("div",{id:t,className:"collapse show",children:Object(j.jsx)("div",{className:"card-body bg-light",children:Object(j.jsx)("div",{className:"d-flex ",children:e.Answers.map((function(t,c){return Object(j.jsxs)("div",{className:"w-25 d-flex",style:{alignItems:"baseline"},children:[Object(j.jsx)("input",{type:"checkbox",checked:n.length&&n.find((function(e){return e.AnswerId===t.id})).chosen,onChange:function(n){return a(e.id,t.id)}}),Object(j.jsx)("label",{className:"w-50 ml-1",style:{cursor:"pointer"},onClick:function(n){return a(e.id,t.id)},children:t.answer})]},c)}))})})})]},t)}))}),Object(j.jsx)("div",{className:"text-left",children:Object(j.jsx)("button",{className:"btn btn-success p-3 text-white",onClick:c,children:"Submit"})})]})})),h=n(45),f=n(52);t.default=Object(l.h)((function(e){var t=e.history,n=Object(l.g)().id,a=Object(o.useState)([]),d=Object(i.a)(a,2),m=d[0],p=d[1],O=Object(o.useState)([]),x=Object(i.a)(O,2),v=x[0],N=x[1],g=function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,Object(h.a)(v);case 3:200===e.sent.status&&t.push("/student/results");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)(n);case 2:t=e.sent,p(t),a=[],t.length&&t.map((function(e){return e.Answers.map((function(t){a.push({marks:e.marks,correct:t.correct,chosen:!1,TestId:Number(n),QuestionId:t.QuestionId,AnswerId:t.id})}))})),N(a);case 7:case"end":return e.stop()}}),e)}))),[]),Object(j.jsx)(u.a,{title:"Test",children:Object(j.jsx)(b,{questions:m,answers:v,checkboxChangeHandler:function(e,t){N(v.map((function(n){return n.QuestionId===e?n.AnswerId===t?Object(r.a)(Object(r.a)({},n),{},{chosen:!n.chosen}):Object(r.a)(Object(r.a)({},n),{},{chosen:!1}):n})))},submitForm:g})})}))},45:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return d}));var a=n(33),c=n(34),s=function(){return Object(a.a)("".concat(c.a,"/results"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},r=function(e,t,n){return Object(a.a)("".concat(c.a,"/results/user/").concat(e,"/test/").concat(t,"/take/").concat(n),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},i=function(e){return Object(a.a)("".concat(c.a,"/results"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return{status:200,msg:"Test submitted, Goodluck!"}})).catch((function(e){return{status:400,msg:e}}))},o=function(){return Object(a.a)("".concat(c.a,"/results/my-results"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},d=function(e,t){return Object(a.a)("".concat(c.a,"/results/test/").concat(e,"/take/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))}},50:function(e,t,n){"use strict";n(0),n(41),n(42),n(43),n(44);var a=n(37),c=n(32),s=n(12),r=n(2),i=n(1);t.a=Object(r.h)((function(e){var t=e.title,n=e.children,r=e.history;return Object(i.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(i.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(i.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(i.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:Object(i.jsx)("b",{className:"logo-icon",children:Object(i.jsx)("img",{src:a.a,alt:"homepage"})})}),Object(i.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(i.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(i.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(i.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(i.jsx)("li",{children:Object(i.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(c.d)((function(){return r.push("/home")}))},children:Object(i.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(i.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(i.jsx)("div",{className:"scroll-sidebar",children:Object(i.jsx)("nav",{className:"sidebar-nav",children:Object(i.jsxs)("ul",{id:"sidebarnav",children:[Object(i.jsx)("li",{className:"sidebar-item pt-2",children:Object(i.jsx)(s.b,{to:"/student/dashboard",children:Object(i.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(i.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(i.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(i.jsx)("li",{className:"sidebar-item",children:Object(i.jsx)(s.b,{to:"/myprofile",children:Object(i.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(i.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(i.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(i.jsx)("li",{className:"sidebar-item",children:Object(i.jsx)(s.b,{to:"/student/test",children:Object(i.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(i.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(i.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(i.jsx)("li",{className:"sidebar-item",children:Object(i.jsx)(s.b,{to:"/student/results",children:Object(i.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(i.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(i.jsx)("span",{className:"hide-menu",children:"My Results"})]})})})]})})})}),Object(i.jsxs)("div",{className:"page-wrapper",children:[Object(i.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(i.jsxs)("div",{className:"row align-items-center",children:[Object(i.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(i.jsx)("h4",{className:"page-title",children:t})}),Object(i.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(i.jsx)("div",{className:"d-md-flex",children:Object(i.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(i.jsx)("div",{className:"container-fluid",children:n}),Object(i.jsx)("footer",{className:"footer text-center",children:"TakeATest"})]})]})}))},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(33),c=n(34),s=function(e){return Object(a.a)("".concat(c.a,"/test"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))},r=function(){return Object(a.a)("".concat(c.a,"/test"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return e}))},i=function(e){return Object(a.a)("".concat(c.a,"/test/").concat(e,"/questions"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return e}))},o=function(e){return Object(a.a)("".concat(c.a,"/test/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return e}))}}}]);
//# sourceMappingURL=15.bdc39bd4.chunk.js.map