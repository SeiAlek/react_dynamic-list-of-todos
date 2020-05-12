(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,a){e.exports=a(22)},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),c=a(12),i=a(1),l=a.n(i),u=a(3),d=a(8),m=a(9),f=a(14),p=a(11),h=(a(21),a(5)),b=a(13),v="".concat("../api","/todos.json"),E="".concat("../api","/users.json"),y=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([y(v),y(E)]);case 2:return t=e.sent,a=Object(b.a)(t,2),n=a[0],r=a[1],s=n.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:r.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=a(10),g=a.n(O),j=function(e){var t=e.todo;return r.a.createElement("tr",{className:g()({"is-selected":t.completed})},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.user.username),r.a.createElement("td",null,t.title),r.a.createElement("td",null,t.completed&&"Completed"))},k=function(e){var t=e.text,a=e.className,n=e.handleClick;return r.a.createElement("button",{type:"button",className:a,onClick:n},t)},x=function(e){var t=e.todos,a=e.SORT_BUTTONS,n=e.handleSortButton;return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,a.map((function(e){return r.a.createElement("th",{key:e.name,className:"bd-callout is-primary"},r.a.createElement(k,{text:e.name,className:"button is-primary is-inverted is-outlined is-medium is-fullwidth",handleClick:function(){return n(e.field)}}))})))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(j,{todo:e,key:e.id})}))))},S="id",w=[{name:"Id",field:S},{name:"Name",field:"username"},{name:"Title",field:"title"},{name:"Completed",field:"completed"}],T=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],sortField:S,sortReverse:!1,isLoading:!1,isLoaded:!1,hasError:!1},e.loadGoods=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0,hasError:!1}),t.prev=1,t.next=4,N();case 4:a=t.sent,e.setState({todos:a,isLoaded:!0}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({hasError:!0});case 11:e.setState({isLoading:!1});case 12:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.handleSortButton=function(t){var a=e.state,n=a.sortField,r=a.sortReverse,s=n===t&&!r;e.setState((function(){return{sortField:t,sortReverse:s}}))},e.sortTodos=function(){var t=e.state,a=t.todos,n=t.sortField,r=t.sortReverse?-1:1;return Object(c.a)(a).sort((function(e,t){var a=e[n]||e.user[n]||!1,s=t[n]||t.user[n]||!1;return"number"===typeof a?(a-s)*r:"boolean"===typeof a?(Number(a)-Number(s))*-r:"string"===typeof a?a.localeCompare(s)*r:0}))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoaded,n=e.hasError,s=this.sortTodos();return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title is-1"},"List of TODOs"),!t&&!a&&!n&&r.a.createElement(k,{text:"Load ToDos",className:"button",handleClick:this.loadGoods}),t&&r.a.createElement("progress",{className:"progress is-primary",max:"100"}),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"notification is-warning"},"Something went wrong..."),r.a.createElement(k,{text:"Try Again",className:"button",handleClick:this.loadGoods})),a&&r.a.createElement(x,{todos:s,SORT_BUTTONS:w,handleSortButton:this.handleSortButton})))}}]),a}(n.Component);o.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5bcb9c47.chunk.js.map