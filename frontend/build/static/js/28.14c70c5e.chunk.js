(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[28],{117:function(e,r,a){"use strict";a.r(r);var s=a(0),t=a(38),o=a(36),c=a(35),n=a(32),l=a(2),j=a(1),d=Object(l.h)((function(e){var r=e.history,a=Object(s.useState)({fullName:"",phone:"",address:"",email:"",password:"",cpassword:"",error:"",loading:!1,message:"",showForm:!0}),l=Object(c.a)(a,2),d=l[0],i=l[1],b=d.fullName,m=d.phone,p=d.address,h=d.email,u=d.password,O=d.cpassword,f=d.error,x=d.loading,g=d.message,N=d.showForm;Object(s.useEffect)((function(){Object(n.c)()&&r.push("/")}));var v=function(e){if(e.preventDefault(),u!==O)return i(Object(o.a)(Object(o.a)({},d),{},{error:"password and confirm password don't match"}));i(Object(o.a)(Object(o.a)({},d),{},{loading:!0,error:!1}));var r={fullName:b,email:h,password:u,phone:m,address:p};try{Object(n.e)(r).then((function(e){try{e.error?(i(Object(o.a)(Object(o.a)({},d),{},{error:e.error,loading:!1})),console.log("server error")):i(Object(o.a)(Object(o.a)({},d),{},{fullName:"",phone:"",address:"",email:"",password:"",error:"",loading:!1,message:e.message,showForm:!1}))}catch(r){console.log(r)}}))}catch(f){console.log("error something")}},w=function(e){return function(r){i(Object(o.a)(Object(o.a)({},d),{},Object(t.a)({error:!1},e,r.target.value)))}};return Object(j.jsxs)("div",{className:"container",children:[x?Object(j.jsx)("div",{className:"alert alert-info",children:"Loading..."}):"",f?Object(j.jsx)("div",{className:"alert alert-danger",children:f}):"",g?Object(j.jsx)("div",{className:"alert alert-info",children:g}):"",N&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:v,children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("input",{value:b,onChange:w("fullName"),type:"text",className:"form-control",placeholder:"Enter Full Name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{value:m,onChange:w("phone"),type:"number",className:"form-control",placeholder:"Enter phone"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{value:p,onChange:w("address"),type:"text",className:"form-control",placeholder:"Enter adress"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{value:h,onChange:w("email"),type:"email",className:"form-control",placeholder:"Enter email"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{value:u,onChange:w("password"),type:"password",className:"form-control",placeholder:"Enter password"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{value:O,onChange:w("cpassword"),type:"password",className:"form-control",placeholder:"Confirm password"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"SignUp"})]})})]})})),i=a(59);r.default=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)("h2",{className:"text-center pt-4 pb-4",children:"SignUp"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(j.jsx)(d,{})})})]})}}}]);
//# sourceMappingURL=28.14c70c5e.chunk.js.map