(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(8),l=a.n(s),u=a(10),o=a(2),i=a.n(o),m=a(4),d=a(1),p=(a(17),a(6)),f="https://seialek.github.io/react_dynamic-list-of-todos/api",b="".concat(f,"/todos.json"),h="".concat(f,"/users.json"),E=function(){var e=Object(m.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([E(b),E(h)]);case 2:return t=e.sent,a=Object(d.a)(t,2),n=a[0],r=a[1],c=n.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{user:r.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=a(9),O=a.n(v),N=function(e){var t=e.todo;return c.a.createElement("tr",{className:O()({"is-selected":t.completed})},c.a.createElement("td",null,t.id),c.a.createElement("td",null,t.user.username),c.a.createElement("td",null,t.title),c.a.createElement("td",null,t.completed&&"Completed"))},y=function(e){var t=e.text,a=e.className,n=e.handleClick;return c.a.createElement("button",{type:"button",className:a,onClick:n},t)},k=function(e){var t=e.todos,a=e.headers,n=e.handleSortButton;return c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,a.map((function(e){return c.a.createElement("th",{key:e.name,className:"bd-callout is-primary"},c.a.createElement(y,{text:e.name,className:"button is-primary is-inverted is-outlined is-medium is-fullwidth",handleClick:function(){return n(e.field)}}))})))),c.a.createElement("tbody",null,t.map((function(e){return c.a.createElement(N,{todo:e,key:e.id})}))))};!function(e){e.Id="id",e.Name="username",e.Title="title",e.Completed="completed"}(n||(n={}));var x=[{name:"Id",field:n.Id},{name:"Name",field:n.Name},{name:"Title",field:n.Title},{name:"Completed",field:n.Completed}],w=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1],l=Object(r.useState)(n.Id),o=Object(d.a)(l,2),p=o[0],f=o[1],b=Object(r.useState)(!1),h=Object(d.a)(b,2),E=h[0],v=h[1],O=Object(r.useState)(!1),N=Object(d.a)(O,2),w=N[0],C=N[1],g=Object(r.useState)(!1),S=Object(d.a)(g,2),I=S[0],T=S[1],B=Object(r.useState)(!1),_=Object(d.a)(B,2),D=_[0],J=_[1],L=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),J(!1),e.prev=2,e.next=5,j();case 5:t=e.sent,s(t),T(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),J(!0);case 13:C(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(e,t){var a=E?-1:1;switch(p){case n.Id:return e.id-t.id*a;case n.Name:return e.user.username.localeCompare(t.user.username)*a;case n.Title:return e.title.localeCompare(t.title)*a;case n.Completed:return(Number(e.completed)-Number(t.completed))*-a;default:return e.id-t.id*a}},F=Object(u.a)(a).sort(A);return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-1"},"List of TODOs"),!w&&!I&&!D&&c.a.createElement(y,{text:"Load ToDos",className:"button",handleClick:L}),w&&c.a.createElement("progress",{className:"progress is-primary",max:"100"}),D&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"notification is-warning"},"Something went wrong..."),c.a.createElement(y,{text:"Try Again",className:"button",handleClick:L})),I&&c.a.createElement(k,{todos:F,headers:x,handleSortButton:function(e){var t=p===e&&!E;f(e),v(t)}})))};l.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.bc9edaea.chunk.js.map