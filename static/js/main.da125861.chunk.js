(this["webpackJsonpcontact-cards"]=this["webpackJsonpcontact-cards"]||[]).push([[0],{102:function(e,t,n){e.exports=n.p+"static/media/rocket.33eda13a.png"},104:function(e,t,n){e.exports=n.p+"static/media/preloader.d8b3f08b.svg"},107:function(e,t,n){e.exports={authBlock:"Login_authBlock__2woQF"}},108:function(e,t,n){e.exports={contacts:"Footer_contacts__3JWpk"}},110:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(108),c=n.n(o);t.a=function(){return r.a.createElement("footer",null,r.a.createElement("span",null,"\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b 2020 ",r.a.createElement("sup",null,"\xa9")),r.a.createElement("div",{className:c.a.contacts},r.a.createElement("span",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0430\u0432\u0442\u043e\u0440\u0430:")," ",r.a.createElement("br",null),r.a.createElement("span",null,"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: +7 905 437 98-77"),r.a.createElement("span",null,"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430: brabus-20@mail.ru")))}},111:function(e,t,n){e.exports=n(223)},116:function(e,t,n){},117:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(47),c=n.n(o),l=(n(116),n(48)),i=n(49),u=n(52),m=n(51),s=(n(117),n(38)),d=n.n(s),E=n(102),b=n.n(E),f=n(26),p=function(e){return r.a.createElement("header",{className:d.a.header},r.a.createElement("div",{className:d.a.brendContainer},r.a.createElement("img",{src:b.a}),r.a.createElement("span",{className:d.a.brend},"REACT"),r.a.createElement("div",{className:d.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:function(){e.logout(!1)}},"\u0412\u044b\u0439\u0442\u0438")):r.a.createElement(f.b,{to:"/Login"},r.a.createElement("button",null,"\u0412\u043e\u0439\u0442\u0438")))))},h=n(14),_=n(10),O={login:null,password:null,isAuth:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_DATA":return Object(_.a)(Object(_.a)({},e),t.payload);case"auth/SET_AUTH_OUT_DATA":return Object(_.a)(Object(_.a)({},e),{},{isAuth:t.isAuth});default:return e}},v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(r.a.Component),T=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(e){return{type:"auth/SET_AUTH_OUT_DATA",isAuth:e}}})(v),A=n(7),j=n(104),N=n.n(j),y=function(){return r.a.createElement("img",{src:N.a})},x=n(6),C=n(80),D=n(105),w=n(226),k=Object(x.c)({ProfilePage:C.c,auth:g,form:w.a}),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,I=Object(x.e)(k,S(Object(x.a)(D.a)));window.__store__=I;var B=I,F=n(107),H=n.n(F),L=n(225),M=n(24),U=n(35),P=n.n(U),V=n(50),J=(n(110),Object(V.a)(20)),Q=Object(L.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(M.b)("Email","email",[V.b,J],M.a,{type:"text"}),Object(M.b)("Password","password",[V.b],M.a,{type:"password"}),Object(M.b)(null,"rememberMe",[],M.a,{type:"checkbox"},"remember me"),n&&r.a.createElement("div",{className:P.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))})),W=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return{type:"auth/SET_AUTH_DATA",payload:{login:e,password:t,isAuth:n}}}})((function(e){if(e.isAuth)return r.a.createElement(A.a,{to:"/profile"});return r.a.createElement("div",{className:H.a.authBlock},r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement(Q,{onSubmit:function(t){e.login(t.email,t.password,!0)}}))})),X=r.a.lazy((function(){return n.e(3).then(n.bind(null,235))})),q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(W,null),r.a.createElement("div",null,r.a.createElement(A.b,{exact:!0,path:"/",render:function(){return r.a.createElement(A.a,{to:"/profile"})}}),r.a.createElement(A.b,{path:"/profile",render:(e=X,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(y,null)},r.a.createElement(e,t))})}))));var e}}]),n}(a.Component),K=Object(x.d)(A.f,Object(h.b)())(q),R=function(){return r.a.createElement(f.a,null,r.a.createElement(h.a,{store:B},r.a.createElement(K,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(109),r=n(0),o=n.n(r),c=n(35),l=n.n(c),i=n(224),u=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:l.a.formControl+" "+(c?l.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,a))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,n)))},s=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",c)}},35:function(e,t,n){e.exports={formControl:"FormControls_formControl__X23vP",error:"FormControls_error__1g2KQ",formSummaryError:"FormControls_formSummaryError__26cKo"}},38:function(e,t,n){e.exports={header:"Header_header__1xV8Q",brend:"Header_brend__1G6ls",loginBlock:"Header_loginBlock__2q_bE"}},50:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return d}));var a=n(71),r=n(10),o=n(21),c=n.n(o),l={contactsData:[{id:c()(),name:"\u0410\u043b\u0435\u043a\u0441",email:"Alex@gmail.com",phoneNumber:"+7(800)-555-35-55",sex:"male",date:"11.07.2020"},{id:c()(),name:"\u041c\u0430\u043a\u0441\u0438\u043c",email:"Maxim@gmail.com",phoneNumber:"+7(400)-552-37-59",sex:"male",date:"11.07.2020"},{id:c()(),name:"\u0410\u043d\u043d\u0430",email:"Anna@gmail.com",phoneNumber:"+7(300)-553-35-21",sex:"female",date:"11.07.2020"},{id:c()(),name:"\u0418\u0432\u0430\u043d",email:"Ivan@gmail.com",phoneNumber:"+7(200)-545-35-33",sex:"male",date:"11.07.2020"},{id:c()(),name:"\u0416\u0430\u043d\u043d\u0430",email:"Zhanna@gmail.com",phoneNumber:"+7(100)-155-35-77",sex:"female",date:"12.07.2020"},{id:c()(),name:"\u041e\u043b\u0435\u0433",email:"Oleg@gmail.com",phoneNumber:"+7(600)-521-25-33",sex:"male",date:"12.07.2020"}],dieElements:[],contactId:[],term:""},i=function(e){return{type:"ADD_CONTACT",payload:{name:e.name,email:e.email,phoneNumber:e.phoneNumber,sex:e.sex}}},u=function(e){return{type:"ADD_ELEMENT_CONTACT",id:e}},m=function(e){return{type:"EDIT_CONTACT",payload:{name:e.name,email:e.email,phoneNumber:e.phoneNumber,sex:e.sex}}},s=function(e){return{type:"DELETE_CONTACT",date:e}},d=function(e){return{type:"SET_EVENT",data:e}};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":var n=Date.now(),o=function(e){return Intl.DateTimeFormat("ru").format(e)},i={id:c()(),name:t.payload.name,email:t.payload.email,phoneNumber:t.payload.phoneNumber,sex:t.payload.sex,date:o(n)};return Object(r.a)(Object(r.a)({},e),{},{contactsData:[].concat(Object(a.a)(e.contactsData.filter((function(t){return!e.dieElements.includes(t.id)}))),[i])});case"ADD_ELEMENT_CONTACT":return Object(r.a)(Object(r.a)({},e),{},{contactId:t.id});case"EDIT_CONTACT":var u={id:e.contactId,name:t.payload.name,email:t.payload.email,phoneNumber:t.payload.phoneNumber,sex:t.payload.sex};return Object.assign({},e,{contactsData:e.contactsData.filter((function(t){return t.id!==e.contactId&&!e.dieElements.includes(t.id)})).concat(u)});case"DELETE_CONTACT":return Object(r.a)(Object(r.a)({},e),{},{dieElements:[].concat(Object(a.a)(e.dieElements),[t.date])});case"SET_EVENT":return Object(r.a)(Object(r.a)({},e),{},{term:t.data});default:return e}}}},[[111,1,2]]]);
//# sourceMappingURL=main.da125861.chunk.js.map