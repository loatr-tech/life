(this.webpackJsonplife=this.webpackJsonplife||[]).push([[0],{152:function(e,t,c){},267:function(e,t,c){},268:function(e,t,c){},270:function(e,t,c){},275:function(e,t,c){},276:function(e,t,c){},294:function(e,t,c){},295:function(e,t,c){},661:function(e,t,c){},662:function(e,t,c){},663:function(e,t,c){},664:function(e,t,c){},665:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(26),n=c.n(a),i=(c(267),c(54)),r=c(27),j=(c(268),c(51)),o=c(2),l="DESKTOP",d="TABLET",b="MOBILE",h=Object(s.createContext)({});function O(e){var t=Object(s.useState)(l),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(j.a)(i,2),O=r[0],x=r[1];Object(s.useEffect)((function(){window.innerWidth>768?n(l):window.innerWidth>=576?n(d):n(b)}),[]);return Object(o.jsx)(h.Provider,{value:{screenSize:a,sidePanelOpen:O,toggleSidePanel:function(){x(!O)}},children:e.children})}var x=c(670),p=c(83),u=c(673),m=c(671),f=c(674),_=(c(270),x.a.Search);var v=function(){var e=Object(s.useContext)(h),t=e.screenSize,c=e.toggleSidePanel;return Object(o.jsx)("header",{className:"global-header",children:Object(o.jsxs)("div",{className:"global-header__container",children:[Object(o.jsxs)(i.b,{className:"global-header__logo",to:"/",children:[Object(o.jsx)("h1",{children:"\u4e0a\u5cb8"}),Object(o.jsx)("span",{children:"beta"})]}),Object(o.jsx)("div",{className:"global-header__search",children:Object(o.jsx)(_,{placeholder:"\u4f60\u5728\u60f3\u5565\uff1f",allowClear:!0,onSearch:function(e){console.log(e)},className:"global-header__search-input"})}),t===b?Object(o.jsx)(p.a,{onClick:function(){return c()},children:Object(o.jsx)("i",{className:"fas fa-bars"})}):Object(o.jsxs)("div",{className:"global-header-user",children:[Object(o.jsx)(u.a,{count:5,children:Object(o.jsx)(f.a,{className:"global-header-nofitication-bell"})}),Object(o.jsx)(m.a,{children:"U"})]})]})})},N=(c(275),c(37)),g=c.n(N),y=c(79);c(276),c(152);var w=function(e){var t=e.post;return Object(o.jsxs)("div",{className:"post-card",children:[Object(o.jsxs)("section",{className:"post-card__stats",children:[Object(o.jsx)(m.a,{className:"post-card__stats-avatar",children:"U"}),Object(o.jsxs)("div",{className:"post-card__stats-username",children:[Object(o.jsx)("div",{children:"Michael Jackson"}),Object(o.jsx)("div",{className:"post-card__stats-ago",children:"1 \u5c0f\u65f6\u524d"})]}),Object(o.jsxs)("div",{className:"post-card__stats-icon",children:[Object(o.jsx)("i",{className:"far fa-eye"})," 100k"]}),Object(o.jsxs)("div",{className:"post-card__stats-icon",children:[Object(o.jsx)("i",{className:"far fa-thumbs-up"})," 123"]}),Object(o.jsxs)("div",{className:"post-card__stats-icon",children:[Object(o.jsx)("i",{className:"far fa-comment"})," 1.2k"]})]}),Object(o.jsx)("hr",{className:"post-card__divider"}),Object(o.jsxs)(i.b,{to:"/post/".concat(t.id),className:"post-card__details",children:[Object(o.jsx)("h3",{className:"post-card__details-title",children:t.title}),Object(o.jsx)("p",{className:"post-card__details-content",children:t.content||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nemo mollitia repellendus, laudantium unde, vel iste tempora eum nihil aperiam aliquid? Deleniti cum beatae iste sapiente molestias ullam consequatur alias."})]})]})},I=c(149),k=I.a.SubMenu;var S=function(){return Object(o.jsxs)(I.a,{onClick:function(e){return function(e){console.log("menuInfo ",e)}(e)},defaultSelectedKeys:["all"],defaultOpenKeys:["career"],mode:"inline",children:[Object(o.jsx)(I.a.Item,{icon:Object(o.jsx)("i",{className:"fas fa-rss"}),children:"\u6700\u65b0\u52a8\u6001"},"all"),Object(o.jsxs)(k,{icon:Object(o.jsx)("i",{className:"fas fa-suitcase"}),title:"\u6253\u5de5\u4eba\u513f",children:[Object(o.jsxs)(I.a.ItemGroup,{title:"\u7ecf\u9a8c\u5206\u4eab",children:[Object(o.jsx)(I.a.Item,{children:"\u4e0a\u5cb8\u6307\u5357"},"experience-sharing"),Object(o.jsx)(I.a.Item,{children:"\u5347\u804c\u52a0\u85aa"},"promotion")]},"career-exp"),Object(o.jsxs)(I.a.ItemGroup,{title:"\u6570\u636e\u5206\u4eab",children:[Object(o.jsx)(I.a.Item,{children:"\u6211\u7684\u5305\u88f9"},"total-package"),Object(o.jsx)(I.a.Item,{children:"\u5317\u7f8e\u9762\u7ecf"},"interview-questions")]},"career-data")]},"career"),Object(o.jsxs)(k,{icon:Object(o.jsx)("i",{className:"far fa-id-card"}),title:"\u8eab\u4efd\u79fb\u6c11",children:[Object(o.jsx)(I.a.Item,{children:"\u5de5\u4f5c\u7b7e\u8bc1"},"work-visa"),Object(o.jsx)(I.a.Item,{children:"\u79fb\u6c11\u7eff\u5361"},"green-card"),Object(o.jsx)(I.a.Item,{children:"\u5b66\u751f\u7b7e\u8bc1"},"student-visa")]},"immigration"),Object(o.jsxs)(k,{icon:Object(o.jsx)("i",{className:"fas fa-book-reader"}),title:"\u5929\u5929\u5411\u4e0a",children:[Object(o.jsx)(I.a.Item,{children:"\u81ea\u4e60"},"lets-study"),Object(o.jsx)(I.a.Item,{children:"\u7ec4\u961f\u5237\u9898"},"leet-code")]},"study"),Object(o.jsxs)(k,{icon:Object(o.jsx)("i",{className:"fas fa-book-reader"}),title:"\u8857\u574a\u9886\u5c45",children:[Object(o.jsx)(I.a.Item,{children:"\u4e8c\u624b\u5e02\u573a"},"used-items"),Object(o.jsx)(I.a.Item,{children:"\u623f\u5c4b\u51fa\u79df"},"house-rental")]},"neighborhood")]})},C=c(148),P=c.n(C),z="".concat("https://loatr-tech-api.herokuapp.com/","life"),A={get:function(e){return P.a.get("".concat(z,"/").concat(e))},post:function(e,t){return P.a.post("".concat(z,"/").concat(e),t)}};var L=function(){return Object(o.jsxs)("div",{className:"post-card",children:[Object(o.jsxs)("section",{className:"post-card__stats",children:[Object(o.jsx)(m.a,{className:"post-card__stats-avatar"}),Object(o.jsxs)("div",{className:"post-card__stats-username",children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{className:"post-card__stats-ago"})]}),Object(o.jsx)("div",{className:"post-card__stats-icon",children:Object(o.jsx)("i",{className:"far fa-eye"})}),Object(o.jsx)("div",{className:"post-card__stats-icon",children:Object(o.jsx)("i",{className:"far fa-thumbs-up"})}),Object(o.jsx)("div",{className:"post-card__stats-icon",children:Object(o.jsx)("i",{className:"far fa-comment"})})]}),Object(o.jsx)("hr",{className:"post-card__divider"}),Object(o.jsx)("h3",{className:"post-card__details-title post-card-placeholder"}),Object(o.jsx)("p",{className:"post-card__details-content post-card-placeholder"})]})};var E=function(){var e=Object(s.useContext)(h).screenSize,t=Object(s.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(!1),d=Object(j.a)(r,2),b=d[0],O=d[1];return Object(s.useEffect)((function(){(function(){var e=Object(y.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,A.get("posts");case 3:t=e.sent,c=t.data,n(c.items),O(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)("main",{className:"home-main",children:[Object(o.jsx)("section",{className:"home-navigation",children:Object(o.jsx)(S,{})}),Object(o.jsxs)("section",{className:"home-content",children:[e!==l&&Object(o.jsx)("div",{className:"home-content__actions",children:Object(o.jsx)(i.b,{to:"/new-post",children:Object(o.jsxs)(p.a,{shape:"round",size:"middle",children:[Object(o.jsx)("i",{className:"fas fa-pen"})," \u53d1\u5e16"]})})}),b?new Array(10).fill(null).map((function(){return Object(o.jsx)(L,{})})):a.map((function(e){return Object(o.jsx)(w,{post:e},e.id)}))]}),Object(o.jsx)("section",{className:"home-sidebar",children:Object(o.jsx)(i.b,{to:"/new-post",children:Object(o.jsxs)(p.a,{shape:"round",size:"middle",block:!0,children:[Object(o.jsx)("i",{className:"fas fa-pen"})," \u53d1\u5e16"]})})})]})};var T=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(E,{}),Object(o.jsx)("footer",{className:"home-footer",children:"\xa92021 Created by Loatr"})]})},q=c(672),B=c(675),D=c(676);c(294),c(295);var F=function(){return Object(o.jsxs)("div",{className:"post-owner",children:[Object(o.jsxs)("section",{className:"post-owner__user-info",children:[Object(o.jsx)(m.a,{className:"post-owner__avatar",size:64,children:"A"}),Object(o.jsx)("h3",{children:"Michael Jackson"}),Object(o.jsx)("div",{className:"post-owner__ago",children:"\u53d1\u5e03\u4e8e 1 \u5c0f\u65f6\u524d"})]}),Object(o.jsxs)("section",{className:"post-owner__stats",children:[Object(o.jsxs)("div",{className:"post-card__stats-icon",children:[Object(o.jsx)("i",{className:"far fa-eye"})," 100k"]}),Object(o.jsxs)("div",{className:"post-card__stats-icon",children:[Object(o.jsx)("i",{className:"far fa-thumbs-up"})," 123"]}),Object(o.jsxs)("div",{className:"post-card__stats-icon",children:[Object(o.jsx)("i",{className:"far fa-comment"})," 1.2k"]})]})]})},J=c(113),M=c.n(J),H=(c(661),c(669)),K=(c(662),function(e){var t=e.children;return Object(o.jsx)(H.a,{actions:[Object(o.jsx)("span",{children:"Reply to"},"comment-nested-reply-to")],author:Object(o.jsx)("span",{children:"Han Solo"}),avatar:Object(o.jsx)(m.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"}),content:Object(o.jsx)("p",{children:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure)."}),children:t})});var W=function(){return Object(o.jsxs)("section",{className:"post-comments",children:[Object(o.jsxs)(K,{children:[Object(o.jsx)(K,{}),Object(o.jsx)(K,{})]}),Object(o.jsxs)(K,{children:[Object(o.jsx)(K,{}),Object(o.jsx)(K,{})]})]})};var G=function(e){var t=e.post;return Object(o.jsxs)("div",{className:"post-main",children:[Object(o.jsx)("header",{className:"post-main__title",children:Object(o.jsx)("h1",{children:t.title})}),Object(o.jsx)("main",{className:"post-main__content",children:Object(o.jsx)(M.a,{value:t.content,readOnly:!0})}),Object(o.jsx)("p",{className:"post-main_copyright-disclaimer",children:"\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\uff0c\u672a\u7ecf\u6388\u6743\u7981\u6b62\u8f6c\u8f7d"}),Object(o.jsxs)("section",{className:"post-main__interactions",children:[Object(o.jsx)(p.a,{type:"primary",shape:"circle",children:"A"}),Object(o.jsx)(p.a,{type:"primary",shape:"circle",children:"B"}),Object(o.jsx)(p.a,{type:"primary",shape:"circle",children:"C"}),Object(o.jsx)(p.a,{type:"primary",shape:"circle",children:"D"})]}),Object(o.jsx)(W,{})]})};var U=function(e){var t=Object(s.useState)({}),c=Object(j.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){(function(){var t=Object(y.a)(g.a.mark((function t(){var c,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.get("post/".concat(e.match.params.postId));case 2:c=t.sent,s=c.data,n(s);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.match.params.postId]),Object(o.jsxs)("div",{className:"post",children:[Object(o.jsx)("section",{className:"post__path",children:Object(o.jsxs)(q.a,{children:[Object(o.jsx)(q.a.Item,{href:"",children:Object(o.jsx)(B.a,{})}),Object(o.jsxs)(q.a.Item,{href:"",children:[Object(o.jsx)(D.a,{}),Object(o.jsx)("span",{children:"Application List"})]}),Object(o.jsx)(q.a.Item,{children:"Application"})]})}),Object(o.jsxs)("section",{className:"post__container",children:[Object(o.jsx)(F,{}),Object(o.jsx)(G,{post:a})]})]})};c(663);var X=function(e){var t=Object(s.useState)(""),c=Object(j.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),r=Object(j.a)(i,2),l=r[0],d=r[1],b=function(){var t=Object(y.a)(g.a.mark((function t(){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.length||!l.length){t.next=5;break}return c={title:a,content:l},t.next=4,A.post("post",c);case 4:e.history.push("/");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"post-creation",children:[Object(o.jsx)("section",{className:"post-creation__actions",children:Object(o.jsx)(p.a,{onClick:function(){return b()},children:"\u53d1\u5e03"})}),Object(o.jsxs)("section",{className:"post-creation__editor",children:[Object(o.jsx)("div",{className:"post-creation__editor-title",children:Object(o.jsx)(x.a,{placeholder:"\u8f93\u5165\u4f60\u7684\u6807\u9898",value:a,onChange:function(e){n(e.target.value)}})}),Object(o.jsx)("div",{className:"post-creation__editor-content",children:Object(o.jsx)(M.a,{placeholder:"\u5199\u4e0b\u4f60\u7684\u5fc3\u8def\u5386\u7a0b",onChange:function(e){return function(e){var t=e();d(t)}(e)}})}),Object(o.jsx)("div",{className:"post-creation__editor-actions",children:Object(o.jsx)(p.a,{onClick:function(){return b()},children:"\u53d1\u5e03"})})]})]})};c(664);var Q=function(){var e=Object(s.useContext)(h).sidePanelOpen;return Object(o.jsx)("div",{className:"global-side-panel ".concat(e?"side-panel-opened":""),children:Object(o.jsx)(r.c,{children:Object(o.jsx)(r.a,{path:"/",exact:!0,children:Object(o.jsx)(S,{})})})})};var R=function(){var e=Object(s.useContext)(h),t=e.screenSize,c=e.sidePanelOpen;return Object(o.jsxs)(i.a,{children:[Object(o.jsxs)("main",{className:"app-container ".concat(c?"app-container-pushed":""),children:[Object(o.jsx)(v,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",exact:!0,component:T}),Object(o.jsx)(r.a,{path:"/post/:postId",component:U}),Object(o.jsx)(r.a,{path:"/new-post",component:X})]})]}),t===b&&Object(o.jsx)(Q,{})]})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,677)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};function Y(e){return Object(o.jsx)(O,{children:e.children})}n.a.render(Object(o.jsx)(Y,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),V()}},[[665,1,2]]]);
//# sourceMappingURL=main.635823d8.chunk.js.map