(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(80)},54:function(e,t,a){},55:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);a(44),a(45);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),s=a(35),o=a(36),i=a(41),m=a(37),u=a(42),p=a(12),d=a(3),f=function(e){return r.a.createElement(d.a,null,e.children)},v=(a(54),a(55),function(){return r.a.createElement("div",{className:"row LoginHeader"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(d.c,{to:"/messenger",className:"brand-logo"},"Messenger"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/messenger/login"},"\u0412\u043e\u0439\u0442\u0438")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/messenger/register"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))))}),g=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("div",{className:"row Home align-content-start"},r.a.createElement("h3",{className:"col s12"},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"),r.a.createElement("p",{className:"col s12"},r.a.createElement(d.c,{to:"/messenger/login"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 "),"\u0438\u043b\u0438",r.a.createElement(d.c,{to:"/messenger/register"}," \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))))},E=a(9),b=a(2),h=a(11),w=a.n(h),N=a(17),j="LOGIN_USER",y="USER_EXIT",O="USER_NEW_NAME",S="USER_NEW_MESS",x=a(13),k=a.n(x);function I(e){return function(){var t=Object(N.a)(w.a.mark(function t(a){var n,r,c,l,s;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={},r=[],t.prev=2,t.next=5,k.a.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD-ctZejTPwiu35s4F7ZydNru1fl7mXQpg",e);case 5:return c=t.sent,n.id=c.data.localId,localStorage.setItem("email",e.email),localStorage.setItem("password",e.password),t.next=11,k.a.get("https://reactmessenger-d938e.firebaseio.com/users/".concat(n.id,".json"));case 11:return l=t.sent,n.name=l.data.name,n.age=l.data.age,localStorage.setItem("name",n.name),t.next=17,k.a.get("https://reactmessenger-d938e.firebaseio.com/chat.json");case 17:s=t.sent,r=s.data,t.next=25;break;case 21:return t.prev=21,t.t0=t.catch(2),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0432\u0445\u043e\u0434\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"),t.abrupt("return",!1);case 25:a({type:j,user:n,chat:r});case 26:case"end":return t.stop()}},t,null,[[2,21]])}));return function(e){return t.apply(this,arguments)}}()}a(75);var C=Object(b.b)(null,function(e){return{LoginUser:function(t){return e(I(t))}}})(function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),i=o[0],m=o[1];return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("div",{className:"row Login"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement("h3",null,"\u0412\u0445\u043e\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:function(e){l(c=e.target.value)},value:c,id:"email",type:"email",className:"validate",required:!0}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",minLength:"6",type:"text",className:"validate",required:!0,onChange:function(e){m(i=e.target.value)},value:i}),r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c(\u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)")),r.a.createElement("div",{className:"input-field col s8"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault();var a={email:c,password:i,returnSecureToken:!0};e.LoginUser(a),l(c=""),m(i="")}},"\u0412\u043e\u0439\u0442\u0438"))))))});a(76);var U=Object(b.b)(null,function(e){return{RegisterNewUser:function(t){return e(function(e){return function(){var t=Object(N.a)(w.a.mark(function t(a){return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD-ctZejTPwiu35s4F7ZydNru1fl7mXQpg",e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}},t,null,[[0,5]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),i=o[0],m=o[1];return r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("div",{className:"row Register"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement("h3",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:function(e){l(c=e.target.value)},value:c,id:"name",type:"email",className:"validate",required:!0}),r.a.createElement("label",{htmlFor:"name"},"Email")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"password",type:"text",className:"validate",minLength:"6",onChange:function(e){m(i=e.target.value)},value:i}),r.a.createElement("label",{htmlFor:"password"},"\u041f\u0430\u0440\u043e\u043b\u044c(\u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432)")),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault();var a={email:c,password:i,returnSecureToken:!0};e.RegisterNewUser(a),l(c=""),m(i="")}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))))))});var F=Object(p.g)(Object(b.b)(null,function(e){return{userExit:function(){return e(function(e){localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("password"),e({type:y})})}}})(function(e){return r.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(){e.history.push("/messenger/"),e.userExit()}},"Exit")}));var L=Object(b.b)(null,function(e){return{userNewName:function(t){return e(function(e){return function(){var t=Object(N.a)(w.a.mark(function t(a){var n,r;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=X.getState().user.id,r={name:e},t.prev=2,t.next=5,k.a.patch("https://reactmessenger-d938e.firebaseio.com/users/".concat(n,".json"),r);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.log(t.t0);case 10:a({type:O,name:e});case 11:case"end":return t.stop()}},t,null,[[2,7]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h3",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u043c\u0435\u043d\u0438"),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"input-field col s12 l10"},r.a.createElement("input",{id:"name",type:"text",className:"validate",onChange:function(e){return l(c=e.target.value)},value:c}),r.a.createElement("label",{htmlFor:"name"},"\u041d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f"),r.a.createElement("button",{className:"btn btn-small",onClick:function(){e.userNewName(c),l(c="")}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"))))});a(77);var _=Object(b.b)(function(e){return{chat:e.user.chat}},function(e){return{userNewMess:function(t){return e(function(e){return function(){var t=Object(N.a)(w.a.mark(function t(a){var n,r,c,l;return w.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=X.getState().user.name,r={name:n,text:e},c=[],t.prev=3,t.next=6,k.a.get("https://reactmessenger-d938e.firebaseio.com/chat.json");case 6:return l=t.sent,(c=l.data).push(r),t.next=11,k.a.put("https://reactmessenger-d938e.firebaseio.com/chat.json",c);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.log(t.t0);case 16:a({type:S,newChat:c});case 17:case"end":return t.stop()}},t,null,[[3,13]])}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),c=a[0],l=a[1],s=e.chat.map(function(e,t){return r.a.createElement("p",{key:t,className:"collection-item"},e.name," : ",e.text)});return r.a.createElement("div",{className:"container Chat"},r.a.createElement("div",{className:"row ChatBody"},r.a.createElement("div",{className:"collection col s12 l12"},s)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"new_name",type:"text",className:"validate",value:c,onChange:function(e){return l(c=e.target.value)}}),r.a.createElement("label",{htmlFor:"new_name"},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")),r.a.createElement("button",{className:"waves-effect waves-small btn",onClick:function(){e.userNewMess(c),l(c="")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435")))});a(78);var R=Object(b.b)(function(e){return{name:e.user.name}})(function(e){return r.a.createElement("div",{className:"container UserPage"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 l4"},r.a.createElement("h3",null,e.name),r.a.createElement("div",{className:"collection"},r.a.createElement(d.b,{to:"/messenger/chat",className:"collection-item"},"\u0427\u0430\u0442"),r.a.createElement(d.b,{to:"/messenger/options",className:"collection-item"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u043f\u0440\u043e\u0444\u0438\u043b\u044f")),r.a.createElement(F,null)),r.a.createElement("div",{className:"col s12 l8"},r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/messenger/chat",component:_}),r.a.createElement(p.b,{path:"/messenger/options",component:L})))))}),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){if(window.location.href="https://tazmans.github.io/messenger/",localStorage.getItem("email")){var e={email:localStorage.getItem("email"),password:localStorage.getItem("password"),returnSecureToken:!0};this.props.LoginUser(e)}}},{key:"render",value:function(){var e=localStorage.getItem("email")?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/messenger",component:R}),r.a.createElement(p.a,{to:"/messenger/"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/messenger",exact:!0,component:g}),r.a.createElement(p.b,{path:"/messenger/login",extends:!0,component:C}),r.a.createElement(p.b,{path:"/messenger/register",component:U}),r.a.createElement(p.a,{to:"/messenger/"})));return r.a.createElement(f,null,e)}}]),t}(r.a.Component);var T=Object(b.b)(function(e){return{userIndicator:e.user.userIndicator}},function(e){return{LoginUser:function(t){return e(I(t))}}})(M),D=(a(79),a(14)),P=a(40),Z=a(18),q={id:"",name:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",age:"25",chat:[],userIndicator:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(Z.a)({},e,{id:t.user.id,name:t.user.name,age:t.user.age,chat:t.chat,userIndicator:!0});case y:return Object(Z.a)({},e,{userIndicator:!1,id:""});case O:return Object(Z.a)({},e,{name:t.name});case S:return Object(Z.a)({},e,{chat:t.newChat});default:return e}},A=Object(D.c)({user:z});a.d(t,"store",function(){return X});var X=Object(D.d)(A,Object(D.a)(P.a)),B=r.a.createElement(b.a,{store:X},r.a.createElement(T,null));l.a.render(B,document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.85812585.chunk.js.map