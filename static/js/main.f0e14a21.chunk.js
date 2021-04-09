(this.webpackJsonpreactjournal=this.webpackJsonpreactjournal||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(17),a=n.n(o),s=n(7),i=(n(23),n(0)),l=function(){return Object(i.jsxs)("ul",{className:"navbar",children:[Object(i.jsx)("li",{className:"navbar__item",children:Object(i.jsx)(s.b,{className:"navbar_link",to:"/reactjournal",children:"About Me"})}),Object(i.jsx)("li",{className:"navbar__item",children:Object(i.jsx)(s.b,{className:"navbar_link",to:"/journal",children:"Journal"})}),Object(i.jsx)("li",{className:"navbar__item",children:Object(i.jsx)(s.b,{className:"navbar_link",to:"/messages",children:"Messages"})})]})},j=n(2),d=n.p+"static/media/Logan.fc54d648.jpg",u=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"statement",children:[Object(i.jsxs)("section",{className:"personal",children:[Object(i.jsx)("h2",{children:"Future Web Dev"}),Object(i.jsx)("p",{children:"I am currently enrolled in a C# focused web development bootcamp hosted by Nashville Software School"})]}),Object(i.jsx)("section",{className:"personal",children:Object(i.jsx)("picture",{children:Object(i.jsx)("img",{className:"photo",src:d,alt:"Headshot of Logan"})})})]})})},h=n(8),b=function(e){var t=e.entry,n=e.deletePost;return Object(i.jsxs)("article",{className:"journal-card",children:[Object(i.jsx)("h3",{className:"journal-title",children:t.title}),Object(i.jsxs)("p",{className:"journal-date",children:[t.date,"   ",t.mood.mood]}),Object(i.jsx)("p",{className:"journal-entry",children:t.description}),Object(i.jsxs)("p",{className:"journal-tags",children:["Tags:",t.technologyTag]}),Object(i.jsx)(s.b,{to:"/journal/".concat(t.id,"/edit"),children:Object(i.jsx)("button",{children:"Edit"})}),Object(i.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]})},m="http://localhost:8088",O=[],x=function(){return fetch("".concat(m,"/entries?_expand=user&_expand=mood")).then((function(e){return e.json()})).then((function(e){return O=e.reverse(),console.log(O),O}))},f=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],o=Object(j.e)(),a=function(e){var t;(t=e,fetch("".concat(m,"/entries/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then(x())).then((function(){return x().then(r)}))};return Object(c.useEffect)((function(){x().then((function(e){r(e)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("section",{className:"section-content",children:Object(i.jsx)("button",{type:"button",className:"btn",onClick:function(){o.push("/journal/create")},children:"Create entry"})}),Object(i.jsx)("div",{className:"entry-cards",children:n.map((function(e){return Object(i.jsx)(b,{entry:e,deletePost:a},e.id)}))})]})},p=n(11),g=function(){return fetch("".concat("http://localhost:8088","/moods")).then((function(e){return e.json()}))},v=function(){var e=Object(c.useState)({title:"",date:"",description:"",technologyTag:"",moodId:0,userId:1}),t=Object(h.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(h.a)(o,2),s=(a[0],a[1],Object(c.useState)([])),l=Object(h.a)(s,2),d=l[0],u=l[1],b=Object(j.e)(),O=function(e){var t=Object(p.a)({},n),c=e.target.value;e.target.id.includes("Id")&&(c=parseInt(c)),t[e.target.id]=c,r(t)};Object(c.useEffect)((function(){g().then((function(e){u(e)}))}),[]);return Object(i.jsxs)("form",{className:"EntryForm",children:[Object(i.jsx)("h2",{className:"EntryForm__Title",children:"New Journal Entry"}),Object(i.jsx)("fieldset",{children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"title",children:"Entry Title:"}),Object(i.jsx)("input",{type:"text",id:"title",onChange:O,required:!0,autoFocus:!0,className:"form-control",placeholder:"Title",value:n.title})]})}),Object(i.jsx)("fieldset",{children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"technologyTag",children:"Tech Tags:"}),Object(i.jsx)("input",{type:"text",id:"technologyTag",onChange:O,required:!0,autoFocus:!0,className:"form-control",placeholder:"TechTags",value:n.technologyTag})]})}),Object(i.jsx)("fieldset",{children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"moodId",children:"How are you feeling: "}),Object(i.jsxs)("select",{value:n.moodId,name:"moodId",id:"moodId",onChange:O,className:"form-control",children:[Object(i.jsx)("option",{value:"0",children:"Select a mood"}),d.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.mood},e.id)}))]})]})}),Object(i.jsx)("fieldset",{children:Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(i.jsx)("textarea",{type:"text",id:"description",onChange:O,required:!0,autoFocus:!0,className:"form-control",placeholder:"Description",value:n.description})]})}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(e){var t;e.preventDefault(),0===n.moodId?window.alert("Please select a Mood"):(t=n,fetch("".concat(m,"/entries"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(x())).then((function(){return b.push("/journal")}))},children:"Save Entry"})]})},y=function(){var e=Object(c.useState)({title:"",date:"",description:"",technologyTag:"",moodId:0,userId:1}),t=Object(h.a)(e,2),n=t[0],r=t[1];console.log("entryedit");var o=Object(c.useState)(!1),a=Object(h.a)(o,2),s=a[0],l=a[1],d=Object(c.useState)([]),u=Object(h.a)(d,2),b=u[0],O=u[1],f=Object(j.f)().entryId,v=Object(j.e)();Object(c.useEffect)((function(){g().then((function(e){O(e)}))}),[]);var y=function(e){var t=Object(p.a)({},n);t[e.target.id]=e.target.value,r(t)};return Object(c.useEffect)((function(){var e;(e=f,fetch("".concat(m,"/entries/").concat(e)).then((function(e){return e.json()}))).then((function(e){r(e),l(!1)}))}),[f]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("form",{children:Object(i.jsxs)("fieldset",{children:[Object(i.jsxs)("div",{className:"formgrid",children:[Object(i.jsx)("input",{type:"text",required:!0,className:"form-control",onChange:y,id:"title",value:n.title}),Object(i.jsx)("label",{htmlFor:"title",children:"Title"}),Object(i.jsx)("select",{value:n.moodId,name:"moodId",id:"moodId",onChange:y,className:"form-control",children:b.map((function(e){return Object(i.jsx)("option",{value:e.id,children:e.mood},e.id)}))}),Object(i.jsx)("label",{htmlFor:"moodId",children:"Mood"}),Object(i.jsx)("label",{htmlFor:"description",children:"Description"}),Object(i.jsx)("textarea",{type:"text",required:!0,className:"form-control",onChange:y,id:"description",value:n.description})]}),Object(i.jsx)("div",{className:"alignRight",children:Object(i.jsx)("button",{type:"button",disabled:s,onClick:function(e){e.preventDefault(),l(!0);var t,c={id:f,title:n.title,date:n.date,description:n.description,technologyTag:n.technologyTag,moodId:n.moodId,userId:n.userId};(t=c,fetch("".concat(m,"/entries/").concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(x)).then((function(){return v.push("/journal")}))},className:"btn btn-primary",children:"Submit"})})]})})})},N=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/reactjournal/",children:Object(i.jsx)(u,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/journal",children:Object(i.jsx)(f,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/journal/create",children:Object(i.jsx)(v,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/journal/:entryId(\\d+)/edit",children:Object(i.jsx)(y,{})})]})},I=(n(30),function(){return Object(i.jsx)("div",{className:"footer",children:"\xa9 Logan Demmy 2021"})}),T=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"header",children:"Daily Journal"}),Object(i.jsx)(l,{}),Object(i.jsx)(N,{}),Object(i.jsx)(I,{})]})};n(31);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(s.a,{children:Object(i.jsx)(T,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f0e14a21.chunk.js.map