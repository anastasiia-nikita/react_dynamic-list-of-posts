(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),s=n.n(c),a=n(3),r=n(2),o=(n(12),n(13),n(4)),i=n(1),u=n.n(i),l="https://mate.academy/students-api",j=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,fetch("".concat(l,"/posts"));case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(l,"/posts/").concat(t));case 8:n=e.sent;case 9:return e.abrupt("return",n.json());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=n(7),p=n.n(b),m=(n(15),n(0)),h=function(e){var t=e.posts,n=e.selectPostId,c=e.onSelectedPostId;return Object(m.jsxs)("div",{className:"PostsList",children:[Object(m.jsx)("h2",{children:"Posts:"}),Object(m.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:t.map((function(e){return Object(m.jsxs)("li",{className:"PostsList__item",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"[User #".concat(e.userId,"]:")}),e.title]}),Object(m.jsx)("button",{type:"button",className:p()("PostsList__button","button",{"PostsList__button--active":n===e.id}),onClick:function(){return n===e.id?c(0):c(e.id)},children:n===e.id?"Close":"Open"})]},e.id)}))})]})},f=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/comments?postId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/comments/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/comments"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(17),function(e){var t=e.selectedPostId,n=e.setComments,c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],l=s[1],j=Object(r.useState)(""),d=Object(a.a)(j,2),b=d[0],p=d[1],h=Object(r.useState)(""),O=Object(a.a)(h,2),v=O[0],_=O[1],N=function(){var e=Object(o.a)(u.a.mark((function e(c){var s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),s={postId:t,name:i,email:b,body:v},e.next=4,x(s);case 4:return e.next=6,f(t);case 6:a=e.sent,n(a),l(""),p(""),_("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{className:"NewCommentForm",onSubmit:N,children:[Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:i,onChange:function(e){return l(e.target.value)}})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:b,onChange:function(e){return p(e.target.value)}})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:v,onChange:function(e){return _(e.target.value)}})}),Object(m.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),_=(n(18),function(){return Object(m.jsx)("div",{className:"Loader",children:Object(m.jsx)("div",{className:"Loader__content"})})}),N=(n(19),function(e){var t=e.selectedPostId,n=Object(r.useState)(null),c=Object(a.a)(n,2),s=c[0],i=c[1],l=Object(r.useState)([]),j=Object(a.a)(l,2),b=j[0],p=j[1],h=Object(r.useState)(!1),x=Object(a.a)(h,2),N=x[0],y=x[1],w=Object(r.useState)(!1),P=Object(a.a)(w,2),C=P[0],S=P[1];Object(r.useEffect)((function(){d(t).then((function(e){return i(e)})),y(!1),S(!1)}),[t]);var k=function(){var e=Object(o.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:0===(n=e.sent).length?(p([]),S(!0)):(p(n),S(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n);case 2:return e.next=4,f(t);case 4:c=e.sent,p(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"PostDetails",children:[Object(m.jsx)("h2",{children:"Post details:"}),Object(m.jsx)("section",{className:"PostDetails__post",children:Object(m.jsx)("p",{children:null===s||void 0===s?void 0:s.body})}),s?Object(m.jsxs)("section",{className:"PostDetails__comments","data-cy":"postDetails",children:[Object(m.jsx)("button",{type:"button",onClick:function(){N?(p([]),y(!1),S(!1)):(k(),y(!0))},className:"button",children:N?"Hide comments":"Show comments"}),N&&Object(m.jsx)("ul",{className:"PostDetails__list",children:b.map((function(e){return Object(m.jsxs)("li",{className:"PostDetails__list-item",children:[Object(m.jsx)("button",{type:"button",onClick:function(){return D(e.id)},className:"PostDetails__remove-button button",children:"X"}),Object(m.jsx)("p",{children:e.body})]},e.id)}))})]}):Object(m.jsx)(_,{}),C&&Object(m.jsx)("p",{className:"PostDetails__comments--notFound",children:"There are no comments yet \u2639"}),Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(m.jsx)(v,{selectedPostId:t,setComments:k})})})]})}),y=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(0),o=Object(a.a)(s,2),i=o[0],u=o[1],l=Object(r.useState)(0),d=Object(a.a)(l,2),b=d[0],p=d[1];Object(r.useEffect)((function(){j(i).then((function(e){return c(e)}))}),[]);var f=n.filter((function(e){return i?e.userId===i:e}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App__header",children:Object(m.jsxs)("label",{children:["Select a user: \xa0",Object(m.jsxs)("select",{className:"App__user-selector",value:i,onChange:function(e){u(+e.target.value)},children:[Object(m.jsx)("option",{value:"0",children:"All users"}),Object(m.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(m.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(m.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(m.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(m.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(m.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(m.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(m.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(m.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(m.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(m.jsxs)("main",{className:"App__main",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(h,{posts:f,selectPostId:b,onSelectedPostId:function(e){p(e)}})}),0!==b&&Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)(N,{selectedPostId:b})})]})]})};s.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e7a18341.chunk.js.map