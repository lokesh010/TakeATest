(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{45:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"e",(function(){return i})),s.d(t,"a",(function(){return r})),s.d(t,"c",(function(){return d})),s.d(t,"d",(function(){return l}));var a=s(33),c=s(34),n=function(){return Object(a.a)("".concat(c.a,"/results"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},i=function(e,t,s){return Object(a.a)("".concat(c.a,"/results/user/").concat(e,"/test/").concat(t,"/take/").concat(s),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},r=function(e){return Object(a.a)("".concat(c.a,"/results"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return{status:200,msg:"Test submitted, Goodluck!"}})).catch((function(e){return{status:400,msg:e}}))},d=function(){return Object(a.a)("".concat(c.a,"/results/my-results"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))},l=function(e,t){return Object(a.a)("".concat(c.a,"/results/test/").concat(e,"/take/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify()}).then((function(e){return e.json()})).catch((function(e){return{status:400,msg:e}}))}},50:function(e,t,s){"use strict";s(0),s(41),s(42),s(43),s(44);var a=s(37),c=s(32),n=s(12),i=s(2),r=s(1);t.a=Object(i.h)((function(e){var t=e.title,s=e.children,i=e.history;return Object(r.jsxs)("div",{id:"main-wrapper","data-layout":"vertical","data-navbarbg":"skin5","data-sidebartype":"full","data-sidebar-position":"absolute","data-header-position":"absolute","data-boxed-layout":"full",children:[Object(r.jsx)("header",{className:"topbar","data-navbarbg":"skin5",children:Object(r.jsxs)("nav",{className:"navbar top-navbar navbar-expand-md navbar-dark",children:[Object(r.jsxs)("div",{className:"navbar-header","data-logobg":"skin6",children:[Object(r.jsx)("a",{className:"navbar-brand",href:"/",children:Object(r.jsx)("b",{className:"logo-icon",children:Object(r.jsx)("img",{src:a.a,alt:"homepage"})})}),Object(r.jsx)("a",{className:"nav-toggler waves-effect waves-light text-dark d-block d-md-none",href:"javascript:void(0)",children:Object(r.jsx)("i",{className:"ti-menu ti-close"})})]}),Object(r.jsx)("div",{className:"navbar-collapse collapse",id:"navbarSupportedContent","data-navbarbg":"skin5",children:Object(r.jsx)("ul",{className:"navbar-nav ms-auto d-flex align-items-center",children:Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:"btn text-white font-medium",onClick:function(){return Object(c.d)((function(){return i.push("/home")}))},children:Object(r.jsx)("i",{className:"fas fa-power-off mr-4","aria-hidden":"true"})})})})})]})}),Object(r.jsx)("aside",{className:"left-sidebar","data-sidebarbg":"skin6",children:Object(r.jsx)("div",{className:"scroll-sidebar",children:Object(r.jsx)("nav",{className:"sidebar-nav",children:Object(r.jsxs)("ul",{id:"sidebarnav",children:[Object(r.jsx)("li",{className:"sidebar-item pt-2",children:Object(r.jsx)(n.b,{to:"/student/dashboard",children:Object(r.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(r.jsx)("i",{className:"far fa-clock","aria-hidden":"true"}),Object(r.jsx)("span",{className:"hide-menu",children:"Dashboard"})]})})}),Object(r.jsx)("li",{className:"sidebar-item",children:Object(r.jsx)(n.b,{to:"/myprofile",children:Object(r.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(r.jsx)("i",{className:"fa fa-user","aria-hidden":"true"}),Object(r.jsx)("span",{className:"hide-menu",children:"Profile"})]})})}),Object(r.jsx)("li",{className:"sidebar-item",children:Object(r.jsx)(n.b,{to:"/student/test",children:Object(r.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(r.jsx)("i",{className:"fa fa-table","aria-hidden":"true"}),Object(r.jsx)("span",{className:"hide-menu",children:"Tests"})]})})}),Object(r.jsx)("li",{className:"sidebar-item",children:Object(r.jsx)(n.b,{to:"/student/results",children:Object(r.jsxs)("div",{className:"sidebar-link waves-effect waves-dark sidebar-link","aria-expanded":"false",children:[Object(r.jsx)("i",{className:"fa fa-font","aria-hidden":"true"}),Object(r.jsx)("span",{className:"hide-menu",children:"My Results"})]})})})]})})})}),Object(r.jsxs)("div",{className:"page-wrapper",children:[Object(r.jsx)("div",{className:"page-breadcrumb bg-white",children:Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4 col-xs-12",children:Object(r.jsx)("h4",{className:"page-title",children:t})}),Object(r.jsx)("div",{className:"col-lg-9 col-sm-8 col-md-8 col-xs-12",children:Object(r.jsx)("div",{className:"d-md-flex",children:Object(r.jsx)("ol",{className:"breadcrumb ms-auto",children:Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"#",className:"fw-normal",children:t})})})})})]})}),Object(r.jsx)("div",{className:"container-fluid",children:s}),Object(r.jsx)("footer",{className:"footer text-center",children:"TakeATest"})]})]})}))},63:function(e,t,s){"use strict";var a=s(0),c=s.n(a),n=s(12),i=s(1);t.a=c.a.memo((function(e){var t=e.uniqueQuestions,s=e.testAnswers,a=e.role;return Object(i.jsxs)(i.Fragment,{children:[t.length&&t.map((function(e,t){return Object(i.jsxs)("div",{className:"card shadow",children:[Object(i.jsx)("div",{className:"card-header bg-dark text-white text-left",children:Object(i.jsxs)("h5",{className:"my-2 p-2",children:[t+1,") ",e.question," ",Object(i.jsxs)("b",{children:["[ ",s.find((function(t){return t.QuestionId===e.id})).marks," ]"]})]})}),Object(i.jsx)("div",{className:"row",children:s.map((function(t){return t.QuestionId===e.id&&Object(i.jsx)("div",{id:t.id,className:"col-md-2 col-sm-12",children:Object(i.jsx)("div",{className:"card-body",children:Object(i.jsx)("div",{children:Object(i.jsxs)("div",{style:{alignItems:"baseline"},children:[Object(i.jsx)("input",{type:"checkbox",defaultChecked:t.chosen}),Object(i.jsx)("label",{className:" ml-1 \n                                                            ".concat(t.correct?"text-success":!t.correct&&t.chosen?"text-danger":null,"\n                                                            "),style:{cursor:"pointer"},children:t.Answer.answer})]},t.Answer.id)})})},t.id)}))})]},t)})),Object(i.jsx)(n.b,{to:"admin"===a?"/admin/test/results":"/student/results",children:Object(i.jsx)("div",{className:"text-left",children:Object(i.jsx)("button",{className:"btn btn-primary p-3 text-white",children:"Go Back"})})})]})}))},92:function(e,t,s){"use strict";s.r(t);var a=s(48),c=s.n(a),n=s(49),i=s(35),r=s(0),d=s(2),l=s(50),o=s(63),j=s(45),b=s(1);t.default=function(){var e=Object(d.g)(),t=e.TestId,s=e.take_count,a=Object(r.useState)([]),u=Object(i.a)(a,2),h=u[0],m=u[1],f=Object(r.useState)([]),x=Object(i.a)(f,2),O=x[0],p=x[1];return Object(r.useEffect)(Object(n.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(t,s);case 2:a=e.sent,m(a),n=[],a.map((function(e){n&&n.find((function(t){return t.id===e.QuestionId}))||n.push(e.Question)})),p(n);case 7:case"end":return e.stop()}}),e)}))),[]),Object(b.jsx)(l.a,{title:"Test Answers",children:Object(b.jsx)(o.a,{uniqueQuestions:O,testAnswers:h,role:"student"})})}}}]);
//# sourceMappingURL=17.ba46ce5f.chunk.js.map