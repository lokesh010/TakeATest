(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{101:function(e,t,r){"use strict";r.r(t);r(0);var a=r(64),c=r(60),s=r(1);t.default=function(){return Object(s.jsxs)(c.a,{children:[Object(s.jsx)("h2",{className:"text-center pt-4 pb-4",children:"Student SignIn"}),Object(s.jsx)("div",{className:"row",children:Object(s.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(s.jsx)(a.a,{role:"student"})})})]})}},64:function(e,t,r){"use strict";var a=r(19),c=r(13),s=r(40),n=r(9),o=r(0),i=r(2),l=r(1);t.a=Object(i.h)((function(e){var t=e.history,r=e.role,i=Object(o.useState)({email:"",password:"",error:"",loading:!1,message:"",showForm:!0}),j=Object(s.a)(i,2),d=j[0],b=j[1],u=d.email,m=d.password,O=d.error,h=d.loading,p=d.message,f=d.showForm;Object(o.useEffect)((function(){Object(n.c)()&&t.push("/")}));var x=function(e){e.preventDefault(),b(Object(c.a)(Object(c.a)({},d),{},{loading:!0,error:!1}));var a={email:u,password:m};("admin"===r?Object(n.a)(a):Object(n.f)(a)).then((function(e){try{e.error?b(Object(c.a)(Object(c.a)({},d),{},{error:e.error,loading:!1})):Object(n.b)(e,(function(){Object(n.c)()&&"admin"===Object(n.c)().role?t.push("/admin/dashboard"):t.push("/student/dashboard")}))}catch(r){console.log(r)}}))},g=function(e){return function(t){b(Object(c.a)(Object(c.a)({},d),{},Object(a.a)({error:!1},e,t.target.value)))}};return Object(l.jsxs)("div",{className:"container",children:[h?Object(l.jsx)("div",{className:"alert alert-info",children:"Loading..."}):"",O?Object(l.jsx)("div",{className:"alert alert-danger",children:O}):"",p?Object(l.jsx)("div",{className:"alert alert-info",children:p}):"",f&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("form",{onSubmit:x,children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("input",{value:u,onChange:g("email"),type:"email",className:"form-control",placeholder:"Type your email"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{value:m,onChange:g("password"),type:"password",className:"form-control",placeholder:"Type your password"})]}),Object(l.jsx)("button",{className:"btn btn-primary",children:"SignIn"})]})})]})}))}}]);
//# sourceMappingURL=19.9d07aab2.chunk.js.map