(this.webpackJsonplife=this.webpackJsonplife||[]).push([[0],{185:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},301:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},325:function(e,t,a){},326:function(e,t,a){},692:function(e,t,a){},693:function(e,t,a){},694:function(e,t,a){},695:function(e,t,a){},696:function(e,t,a){},697:function(e,t,a){},698:function(e,t,a){},699:function(e,t,a){},700:function(e,t,a){},701:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(29),n=a.n(c),r=(a(298),a(51)),i=a(36),o=(a(299),a(25)),l=a(1),d="DESKTOP",j="TABLET",u="MOBILE",p=Object(s.createContext)({});function b(e){var t=Object(s.useState)(d),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(!1),i=Object(o.a)(r,2),b=i[0],h=i[1];Object(s.useEffect)((function(){window.innerWidth>768?n(d):window.innerWidth>=576?n(j):n(u)}),[]);return Object(l.jsx)(p.Provider,{value:{screenSize:c,sidePanelOpen:b,toggleSidePanel:function(){h(!b)}},children:e.children})}var h=a(708),m=a(62),O=a(710);a(301);var x=function(){var e=Object(s.useContext)(p),t=e.screenSize,a=e.toggleSidePanel;return Object(l.jsx)("header",{className:"global-header",children:Object(l.jsxs)("div",{className:"global-header__container",children:[Object(l.jsxs)(r.b,{className:"global-header__logo",to:"/",children:[Object(l.jsx)("h1",{children:"\u4e0a\u5cb8"}),Object(l.jsx)("span",{children:"beta"})]}),Object(l.jsx)("div",{className:"global-header__search",children:Object(l.jsx)(h.a.Search,{placeholder:"\u4f60\u5728\u60f3\u5565\uff1f",allowClear:!0,onSearch:function(e){console.log(e)},className:"global-header__search-input"})}),t===u?Object(l.jsx)(m.a,{onClick:function(){return a()},children:Object(l.jsx)("i",{className:"fas fa-bars"})}):Object(l.jsx)(r.b,{to:"/user",children:Object(l.jsx)(O.a,{children:"U"})})]})})},_=(a(306),a(27)),f=a.n(_),v=a(40);a(307),a(185);function g(e){var t=Math.floor(((new Date).getTime()-new Date(e).getTime())/1e3),a=t/31536e3;return a>1?Math.floor(a)+" \u5e74\u524d":(a=t/2592e3)>1?Math.floor(a)+" \u6708\u524d":(a=t/86400)>1?Math.floor(a)+" \u5929\u524d":(a=t/3600)>1?Math.floor(a)+" \u5c0f\u65f6\u524d":(a=t/60)>1?Math.floor(a)+" \u5206\u949f\u524d":"\u521a\u521a"}function N(e){var t=parseInt(e);return t>1e3?"".concat((t/1e3).toFixed(1),"k"):t>1e6?"".concat((t/1e6).toFixed(1),"m"):t}var y=function(e){var t,a=e.post;return Object(l.jsxs)("div",{className:"post-card",children:[Object(l.jsxs)("section",{className:"post-card__stats",children:[Object(l.jsx)(O.a,{className:"post-card__stats-avatar",children:"U"}),Object(l.jsxs)("div",{className:"post-card__stats-username",children:[Object(l.jsx)("div",{children:null===a||void 0===a||null===(t=a.owner)||void 0===t?void 0:t.name}),Object(l.jsx)("div",{className:"post-card__stats-ago",children:g(null===a||void 0===a?void 0:a.createdAt)})]}),Object(l.jsxs)("div",{className:"post-card__stats-icon",children:[Object(l.jsx)("i",{className:"far fa-eye"})," ",N(null===a||void 0===a?void 0:a.views)]}),Object(l.jsxs)("div",{className:"post-card__stats-icon",children:[Object(l.jsx)("i",{className:"far fa-thumbs-up"})," ",N(null===a||void 0===a?void 0:a.likes)]}),Object(l.jsxs)("div",{className:"post-card__stats-icon",children:[Object(l.jsx)("i",{className:"far fa-comment"})," ",N(null===a||void 0===a?void 0:a.comments)]})]}),Object(l.jsx)("hr",{className:"post-card__divider"}),Object(l.jsxs)(r.b,{to:"/post/".concat(a.id),className:"post-card__details",children:[Object(l.jsx)("h3",{className:"post-card__details-title",children:a.title}),Object(l.jsx)("p",{className:"post-card__details-content",children:a.content||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nemo mollitia repellendus, laudantium unde, vel iste tempora eum nihil aperiam aliquid? Deleniti cum beatae iste sapiente molestias ullam consequatur alias."})]})]})},w=a(183),C=[{id:"career",name:"\u6253\u5de5\u4eba\u513f",icon:"fas fa-suitcase",subcategories:[{id:"career_exp",type:"group",name:"\u7ecf\u9a8c\u5206\u4eab",subcategories:[{id:"experience_sharing"},{id:"promotion"}]},{id:"career_data",type:"group",name:"\u6570\u636e\u5206\u4eab",subcategories:[{id:"total_package"},{id:"interview_questions"}]},{id:"career_opportunities",type:"group",name:"\u804c\u4f4d\u5206\u4eab",subcategories:[{id:"need_referral"},{id:"we_re_hiring"}]}]},{id:"immigration",name:"\u7559\u5b66\u79fb\u6c11",icon:"far fa-id-card",subcategories:[{id:"international_student",type:"group",name:"\u7559\u5b66\u7533\u8bf7",subcategories:[{id:"apply_school"},{id:"application_results"}]},{id:"immigration",type:"group",name:"\u79fb\u6c11\u7b7e\u8bc1",subcategories:[{id:"work_visa"},{id:"green_card"},{id:"student_visa"}]}]},{id:"study",name:"\u5929\u5929\u5411\u4e0a",icon:"fas fa-book-reader",subcategories:[{id:"lets_study"},{id:"leet_code"}]},{id:"neighborhood",name:"\u8857\u574a\u90bb\u5c45",icon:"fas fa-people-arrows",subcategories:[{id:"used_items"},{id:"house_rental"}]}],k={experience_sharing:"\u7ecf\u9a8c\u5206\u4eab",promotion:"\u5347\u804c\u52a0\u85aa",total_package:"\u6211\u7684\u5305\u88f9",interview_questions:"\u5317\u7f8e\u9762\u7ecf",need_referral:"\u8dea\u6c42\u5185\u63a8",we_re_hiring:"\u6211\u8981\u62db\u4eba",apply_school:"\u7533\u8bf7\u5b66\u6821",application_results:"\u7533\u8bf7\u7ed3\u679c",work_visa:"\u5de5\u4f5c\u7b7e\u8bc1",green_card:"\u79fb\u6c11\u7eff\u5361",student_visa:"\u5b66\u751f\u7b7e\u8bc1",lets_study:"\u6211\u8981\u81ea\u4e60",leet_code:"\u7ec4\u961f\u5237\u9898",used_items:"\u4e8c\u624b\u5e02\u573a",house_rental:"\u623f\u5c4b\u51fa\u79df"},S={experience_sharing:"\u6253\u5de5\u4eba\u513f",promotion:"\u6253\u5de5\u4eba\u513f",total_package:"\u6253\u5de5\u4eba\u513f",interview_questions:"\u6253\u5de5\u4eba\u513f",need_referral:"\u6253\u5de5\u4eba\u513f",we_re_hiring:"\u6253\u5de5\u4eba\u513f",work_visa:"\u7559\u5b66\u79fb\u6c11",green_card:"\u7559\u5b66\u79fb\u6c11",student_visa:"\u7559\u5b66\u79fb\u6c11",lets_study:"\u5929\u5929\u5411\u4e0a",leet_code:"\u5929\u5929\u5411\u4e0a",used_items:"\u8857\u574a\u9886\u5c45",house_rental:"\u8857\u574a\u9886\u5c45"},z=Object(s.createContext)({});function I(e){var t=Object(s.useState)("all"),a=Object(o.a)(t,2),c=a[0],n=a[1];return Object(l.jsx)(z.Provider,{value:{activeCategory:c,setActiveCategory:n},children:e.children})}var M=function(e){var t=e.onCategoryChange,a=Object(s.useContext)(z),c=a.activeCategory,n=a.setActiveCategory;return Object(l.jsxs)(w.a,{onClick:function(e){return function(e){var a=e.key;n(a),null===t||void 0===t||t(a)}(e)},defaultSelectedKeys:[c],defaultOpenKeys:["career"],mode:"inline",children:[Object(l.jsx)(w.a.Item,{icon:Object(l.jsx)("i",{className:"fas fa-rss"}),children:"\u6700\u65b0\u52a8\u6001"},"all"),C.map((function(e){return Object(l.jsx)(w.a.SubMenu,{icon:Object(l.jsx)("i",{className:e.icon}),title:e.name,children:e.subcategories.map((function(e){return"group"===e.type?Object(l.jsx)(w.a.ItemGroup,{title:e.name,children:e.subcategories.map((function(e){return Object(l.jsx)(w.a.Item,{children:k[e.id]},e.id)}))},e.id):Object(l.jsx)(w.a.Item,{children:k[e.id]},e.id)}))},e.id)}))]})},F=a(181),P=a.n(F),q="".concat("https://loatr-tech-api.herokuapp.com/","life"),A={get:function(e,t){return P.a.get("".concat(q,"/").concat(e),t)},post:function(e,t){return P.a.post("".concat(q,"/").concat(e),t)}};var E=function(){return Object(l.jsxs)("div",{className:"post-card",children:[Object(l.jsxs)("section",{className:"post-card__stats",children:[Object(l.jsx)(O.a,{className:"post-card__stats-avatar"}),Object(l.jsxs)("div",{className:"post-card__stats-username",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{className:"post-card__stats-ago"})]}),Object(l.jsx)("div",{className:"post-card__stats-icon",children:Object(l.jsx)("i",{className:"far fa-eye"})}),Object(l.jsx)("div",{className:"post-card__stats-icon",children:Object(l.jsx)("i",{className:"far fa-thumbs-up"})}),Object(l.jsx)("div",{className:"post-card__stats-icon",children:Object(l.jsx)("i",{className:"far fa-comment"})})]}),Object(l.jsx)("hr",{className:"post-card__divider"}),Object(l.jsx)("h3",{className:"post-card__details-title post-card-placeholder"}),Object(l.jsx)("p",{className:"post-card__details-content post-card-placeholder"})]})};var L=function(){var e=Object(s.useContext)(p).screenSize,t=Object(s.useContext)(z).activeCategory,a=Object(s.useState)([]),c=Object(o.a)(a,2),n=c[0],i=c[1],j=Object(s.useState)(!1),u=Object(o.a)(j,2),b=u[0],h=u[1];return Object(s.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var a,s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),a={},t&&"all"!==t&&(a.category=t),e.next=5,A.get("posts",{params:a});case 5:s=e.sent,c=s.data,i(c.items),h(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(l.jsxs)("main",{className:"home-main",children:[Object(l.jsx)("section",{className:"home-navigation",children:Object(l.jsx)(M,{})}),Object(l.jsxs)("section",{className:"home-content",children:[e!==d&&Object(l.jsx)("div",{className:"home-content__actions",children:Object(l.jsx)(r.b,{to:"/new-post",children:Object(l.jsxs)(m.a,{shape:"round",size:"middle",children:[Object(l.jsx)("i",{className:"fas fa-pen"})," \u53d1\u5e16"]})})}),b?new Array(5).fill(null).map((function(e,t){return Object(l.jsx)(E,{},t)})):n.map((function(e){return Object(l.jsx)(y,{post:e},e.id)}))]}),Object(l.jsx)("section",{className:"home-sidebar",children:Object(l.jsx)(r.b,{to:"/new-post",children:Object(l.jsxs)(m.a,{shape:"round",size:"middle",block:!0,children:[Object(l.jsx)("i",{className:"fas fa-pen"})," \u53d1\u5e16"]})})})]})};var T=function(){return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)(L,{}),Object(l.jsx)("footer",{className:"home-footer",children:"\xa92021 Created by Loatr"})]})},D=a(711),B=a(712);a(325),a(326);var R=function(e){var t,a,s=e.post,c=e.fetching;return Object(l.jsxs)("div",{className:"post-owner",children:[Object(l.jsxs)("section",{className:"post-owner__user-info",children:[Object(l.jsx)(O.a,{className:"post-owner__avatar ".concat(c?"loading-placeholder":""),size:64,children:null===s||void 0===s||null===(t=s.owner)||void 0===t?void 0:t.name[0]}),Object(l.jsx)("h3",{children:null===s||void 0===s||null===(a=s.owner)||void 0===a?void 0:a.name}),Object(l.jsx)("div",{className:"post-owner__ago ".concat(c?"post-owner__ago-loading loading-placeholder":""),children:(null===s||void 0===s?void 0:s.createdAt)?"\u53d1\u5e03\u4e8e ".concat(g(s.createdAt)):""})]}),Object(l.jsxs)("section",{className:"post-owner__stats",children:[Object(l.jsxs)("div",{className:"post-card__stats-icon",children:[Object(l.jsx)("i",{className:"far fa-eye"})," ",N(s.views)]}),Object(l.jsxs)("div",{className:"post-card__stats-icon",children:[Object(l.jsx)("i",{className:"far fa-thumbs-up"})," ",N(s.likes)]}),Object(l.jsxs)("div",{className:"post-card__stats-icon",children:[Object(l.jsx)("i",{className:"far fa-comment"})," ",N(s.comments)]})]})]})},J=a(140),K=a.n(J),U=(a(692),a(706)),G=a(705);a(693),a(694),a(695);var H=function(e){var t=e.isHero,a=e.reply;return Object(l.jsxs)("div",{className:"post-reply ".concat(t?"post-reply--hero":""),children:[Object(l.jsx)("section",{className:"post-reply__avatar",children:Object(l.jsx)(O.a,{children:"R"})}),Object(l.jsxs)("section",{className:"post-reply__content",children:[Object(l.jsxs)("div",{className:"post-reply__header",children:[Object(l.jsx)("span",{className:"post-reply__header-username",children:"\u5cb8\u4e0a\u67d0\u4f4d\u7528\u6237"}),Object(l.jsx)("span",{className:"post-reply__header-ago",children:g(null===a||void 0===a?void 0:a.createdAt)})]}),Object(l.jsx)("div",{className:"post-reply__content-message",children:(null===a||void 0===a?void 0:a.reply)||"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque animi dicta natus pariatur sequi distinctio iste debitis? Veritatis, architecto placeat, aliquid enim perferendis ad quidem ipsum doloribus minus voluptatibus provident."})]})]})};a(696);var W=function(){return Object(l.jsxs)("div",{className:"lds-ellipsis",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})};a(697);var Q=function(e){var t=e.thread,a=e.refreshReplies,c=e.children,n=Object(s.useState)(!1),r=Object(o.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(""),u=Object(o.a)(j,2),p=u[0],b=u[1],h=Object(s.useState)(!1),x=Object(o.a)(h,2),_=x[0],N=x[1],y=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,A.post("post/reply",{post_id:t.post_id,thread_id:t.id,reply:p,user_id:1});case 3:b(""),d(!1),N(!1),a();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"post-thread__head",children:[Object(l.jsxs)("div",{className:"post-thread__head-container",children:[Object(l.jsx)("section",{className:"post-thread__head-avatar",children:Object(l.jsx)(O.a,{children:"R"})}),Object(l.jsxs)("section",{className:"post-thread__head-content",children:[Object(l.jsxs)("div",{className:"post-thread__head-header",children:[Object(l.jsx)("span",{className:"post-thread__head-header-username",children:"\u5cb8\u4e0a\u67d0\u4f4d\u7528\u6237"}),Object(l.jsx)("span",{className:"post-thread__head-header-ago",children:g(null===t||void 0===t?void 0:t.createdAt)})]}),Object(l.jsx)("p",{className:"post-thread__head-content-message",children:null===t||void 0===t?void 0:t.comment}),Object(l.jsxs)("div",{className:"post-thread__head-action",children:[Object(l.jsxs)("span",{className:"post-card__head-interaction",children:[Object(l.jsx)("i",{className:"far fa-thumbs-up"})," 123"]}),Object(l.jsxs)("span",{className:"post-card__head-interaction",children:[Object(l.jsx)("i",{className:"far fa-thumbs-down"})," 45"]}),Object(l.jsx)(m.a,{size:"small",type:"text",onClick:function(){return d(!i)},disabled:_,children:"\u56de\u590d"})]})]})]}),i&&Object(l.jsxs)("div",{className:"post-thread__reply",children:[Object(l.jsxs)("div",{className:"post-thread__reply-textarea-container",children:[Object(l.jsx)("span",{className:"post-thread__reply-textarea-avatar",children:Object(l.jsx)(O.a,{children:"M"})}),Object(l.jsx)("textarea",{className:"post-thread__reply-textarea",name:"comment-textarea",rows:2,placeholder:"\u8bf4\u70b9\u4ec0\u4e48...",value:p,onChange:function(e){return b(e.target.value)},disabled:_})]}),Object(l.jsxs)("div",{className:"post-thread__reply-textarea-actions",children:[Object(l.jsx)(m.a,{size:"small",onClick:function(){return y()},loading:_,children:"\u56de\u590d"}),Object(l.jsx)(m.a,{size:"small",type:"text",onClick:function(){return d(!1)},disabled:_,children:"\u53d6\u6d88"})]})]}),c]})};var V=function(e){var t=e.thread,a=Object(s.useState)(!1),c=Object(o.a)(a,2),n=c[0],r=c[1],i=Object(s.useState)([]),d=Object(o.a)(i,2),j=d[0],u=d[1],p=Object(s.useState)(1),b=Object(o.a)(p,2),h=b[0],O=b[1],x=Object(s.useState)((null===t||void 0===t?void 0:t.replies)||0),_=Object(o.a)(x,2),g=_[0],N=_[1],y=Object(s.useState)(!1),w=Object(o.a)(y,2),C=w[0],k=w[1],S=Object(s.useState)(!1),z=Object(o.a)(S,2),I=z[0],M=z[1],F=function(){var e=Object(v.a)(f.a.mark((function e(a){var s,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.get("post/".concat(t.post_id,"/comment/").concat(t.id,"/replies"),{params:{page:a,limit:10}});case 2:return s=e.sent,c=s.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=6;break}r(!1),u([]),O(1),e.next=14;break;case 6:return r(!0),k(!0),e.next=10,F(h);case 10:t=e.sent,k(!1),u(t.replies),N(t.count);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(v.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(1);case 2:t=e.sent,O(1),u(t.replies),N(t.count);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),t=h+1,e.next=4,F(t);case 4:a=e.sent,O(t),u(j.concat(a.replies)),N(a.count),M(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"post-thread",children:[Object(l.jsx)(Q,{thread:t,refreshReplies:q,children:g>0&&Object(l.jsxs)(m.a,{className:"post-thread__view-reply",type:"link",onClick:function(){return P()},children:[Object(l.jsx)("i",{className:"fas fa-caret-".concat(n?"up":"down")})," ",n?"\u6536\u8d77\u56de\u590d":"\u67e5\u770b".concat(g,"\u6761\u56de\u590d")]})}),n&&Object(l.jsxs)("div",{className:"post-thread__replys",children:[C&&Object(l.jsx)("div",{className:"post-thread__replys-loading",children:Object(l.jsx)(W,{})}),j.map((function(e){return Object(l.jsx)(H,{reply:e,isHero:2===e.user_id},e.id)})),!C&&g>j.length&&Object(l.jsxs)(m.a,{type:"link",className:"post-thread__expand",onClick:function(){return E()},loading:I,children:[Object(l.jsx)("span",{className:"post-thread__expand-line"}),"\u5c55\u5f00\u66f4\u591a\u56de\u590d (",g-j.length,")"]})]})]})};var X=function(e){var t=e.post,a=Object(s.useState)([]),c=Object(o.a)(a,2),n=c[0],r=c[1],i=Object(s.useState)(""),d=Object(o.a)(i,2),j=d[0],u=d[1],p=Object(s.useState)(0),b=Object(o.a)(p,2),h=b[0],x=b[1],_=Object(s.useState)(!1),g=Object(o.a)(_,2),N=g[0],y=g[1];function w(e){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(f.a.mark((function e(t){var a,s,c,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1,e.next=3,A.get("post/".concat(t.id,"/comments"),{params:{page:a,limit:10}});case 3:s=e.sent,c=s.data,r(c.threads),x(c.count);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){(null===t||void 0===t?void 0:t.id)&&w(t)}),[t]);var k=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,A.post("post/comment",{post_id:t.id,comment:j,user_id:1});case 3:u(""),y(!1),w(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("section",{className:"post-comments",children:[(null===n||void 0===n?void 0:n.length)>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("i",{className:"far fa-comments"})," \u8bc4\u8bba\u533a (",t.comments,")"]}),n.map((function(e){return Object(l.jsx)(V,{thread:e},e.id)})),Object(l.jsx)(U.a,{className:"post-comments__pagination",size:"small",defaultCurrent:1,pageSize:10,onChange:function(e){w(t,e)},showSizeChanger:!1,total:h})]}),Object(l.jsx)(G.a,{}),Object(l.jsxs)("div",{className:"post-comments__textarea-container",children:[Object(l.jsx)("span",{className:"post-comments__textarea-avatar",children:Object(l.jsx)(O.a,{size:36,children:"M"})}),Object(l.jsx)("textarea",{className:"post-comments__textarea",name:"comment-textarea",rows:4,value:j,onChange:function(e){return u(e.target.value)},disabled:N})]}),Object(l.jsx)("div",{className:"post-comments__textarea-actions",children:Object(l.jsx)(m.a,{onClick:function(){return k()},loading:N,children:"\u7559\u8a00"})})]})};var Y=function(e){var t=e.post,a=e.fetching;return Object(l.jsxs)("div",{className:"post-main",children:[Object(l.jsx)("header",{className:"post-main__title",children:Object(l.jsx)("h1",{className:"post-main__title-text ".concat(a?"post-mian__placeholder loading-placeholder":""),children:t.title})}),Object(l.jsx)("main",{className:"post-main__content",children:a?Object(l.jsxs)("div",{className:"post-main__content-placeholder",children:[Object(l.jsx)("div",{className:"loading-placeholder"}),Object(l.jsx)("div",{className:"loading-placeholder"}),Object(l.jsx)("div",{className:"loading-placeholder"})]}):Object(l.jsx)(K.a,{value:t.content,readOnly:!0})}),Object(l.jsx)("p",{className:"post-main_copyright-disclaimer",children:"\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\uff0c\u672a\u7ecf\u6388\u6743\u7981\u6b62\u8f6c\u8f7d"}),!a&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("section",{className:"post-main__interactions",children:[Object(l.jsx)(m.a,{type:"primary",shape:"circle",children:Object(l.jsx)("i",{className:"far fa-thumbs-up"})}),Object(l.jsx)(m.a,{type:"primary",shape:"circle",children:Object(l.jsx)("i",{className:"far fa-star"})}),Object(l.jsx)(m.a,{type:"primary",shape:"circle",children:Object(l.jsx)("i",{className:"fas fa-share-alt"})}),Object(l.jsx)(m.a,{type:"primary",shape:"circle",children:Object(l.jsx)("i",{className:"far fa-bookmark"})})]}),Object(l.jsx)(X,{post:t})]})]})};var Z=function(e){var t=Object(s.useState)({}),a=Object(o.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(!1),d=Object(o.a)(i,2),j=d[0],u=d[1];return Object(s.useEffect)((function(){(function(){var t=Object(v.a)(f.a.mark((function t(){var a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.next=3,A.get("post/".concat(e.match.params.postId));case 3:a=t.sent,s=a.data,u(!1),n(s);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.match.params.postId]),Object(l.jsxs)("div",{className:"post",children:[Object(l.jsx)("section",{className:"post__path",children:Object(l.jsxs)(D.a,{children:[Object(l.jsx)(D.a.Item,{children:Object(l.jsxs)(r.b,{to:"/",children:[Object(l.jsx)(B.a,{})," \u4e3b\u9875"]})}),Object(l.jsx)(D.a.Item,{children:S[c.category]}),Object(l.jsx)(D.a.Item,{children:k[c.category]})]})}),Object(l.jsxs)("section",{className:"post__container",children:[Object(l.jsx)(R,{post:c}),Object(l.jsx)(Y,{post:c,fetching:j})]})]})},$=(a(698),a(707)),ee=a(709);a(699);var te=function(e){var t=e.selectedCategory,a=e.setSelectedCategory,c=e.showMissingField,n=Object(s.useState)(!1),r=Object(o.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(t),u=Object(o.a)(j,2),p=u[0],b=u[1],h=function(e){b(e.target.value)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{className:"post-creation-category__btn",children:["\u6587\u7ae0\u5206\u7c7b:"," ",Object(l.jsxs)(m.a,{onClick:function(){return d(!0)},size:"small",shape:t?"round":void 0,danger:!(t||!c),children:[t?Object(l.jsx)("i",{className:"fas fa-pen"}):"\u8bf7\u9009\u62e9",t?k[t]:""]})]}),Object(l.jsx)($.a,{className:"post-creation-category__modal",title:"\u9009\u62e9\u5206\u7c7b",visible:i,onOk:function(){return a(p),void d(!1)},onCancel:function(){return d(!1)},children:C.map((function(e){return Object(l.jsxs)("section",{className:"post-creation-category__modal-section",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)(ee.a.Group,{onChange:h,value:p,children:e.subcategories.map((function(e){return"group"===e.type?e.subcategories.map((function(e){return Object(l.jsx)(ee.a,{value:e.id,children:k[e.id]},e.id)})):Object(l.jsx)(ee.a,{value:e.id,children:k[e.id]},e.id)}))})]},e.name)}))})]})};var ae=function(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),d=i[0],j=i[1],u=Object(s.useState)(""),p=Object(o.a)(u,2),b=p[0],O=p[1],x=Object(s.useState)(!1),_=Object(o.a)(x,2),g=_[0],N=_[1],y=Object(s.useState)(!1),w=Object(o.a)(y,2),C=w[0],k=w[1],S=function(){var t=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(k(!0),!(c.length&&d.length&&b)){t.next=8;break}return N(!0),a={title:c,content:d,category:b},t.next=6,A.post("post",a);case 6:N(!1),e.history.push("/");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"post-creation",children:[Object(l.jsxs)("section",{className:"post-creation__actions",children:[Object(l.jsx)(te,{selectedCategory:b,setSelectedCategory:O,showMissingField:C}),Object(l.jsx)(G.a,{}),Object(l.jsx)(m.a,{onClick:function(){return S()},block:!0,loading:g,disabled:g,children:"\u53d1\u5e03"})]}),Object(l.jsxs)("section",{className:"post-creation__editor",children:[Object(l.jsx)("div",{className:"post-creation__editor-title ".concat(!c&&C?"post-creation__missing-field":""),children:Object(l.jsx)(h.a,{placeholder:"\u8f93\u5165\u4f60\u7684\u6807\u9898",value:c,onChange:function(e){n(e.target.value)}})}),Object(l.jsx)("div",{className:"post-creation__editor-content ".concat(!d&&C?"post-creation__missing-field":""),children:Object(l.jsx)(K.a,{placeholder:"\u5199\u4e0b\u4f60\u7684\u5fc3\u8def\u5386\u7a0b",onChange:function(e){return function(e){var t=e();j(t)}(e)}})}),Object(l.jsx)("div",{className:"post-creation__editor-actions",children:Object(l.jsx)(m.a,{onClick:function(){return S()},loading:g,disabled:g,children:"\u53d1\u5e03"})})]})]})};a(700);var se=function(){var e=Object(i.f)(),t=Object(s.useContext)(p),a=t.sidePanelOpen,c=t.toggleSidePanel;return Object(l.jsxs)("div",{className:"global-side-panel ".concat(a?"side-panel-opened":""),children:[Object(l.jsxs)("section",{className:"global-side-panel__user",onClick:function(){return c(),void e.push("/user")},children:[Object(l.jsx)(O.a,{children:"U"}),Object(l.jsx)("span",{className:"global-side-panel__user-name",children:"Michael Jackson"}),Object(l.jsx)("i",{className:"fas fa-chevron-right"})]}),Object(l.jsx)(G.a,{}),Object(l.jsx)(i.c,{children:Object(l.jsx)(i.a,{path:"/",exact:!0,children:Object(l.jsx)(M,{onCategoryChange:function(){return c()}})})})]})};var ce=function(){var e=Object(s.useContext)(p),t=e.screenSize,a=e.sidePanelOpen;return Object(l.jsxs)(r.a,{children:[Object(l.jsxs)("main",{className:"app-container ".concat(a?"app-container-pushed":""),children:[Object(l.jsx)(x,{}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/",exact:!0,component:T}),Object(l.jsx)(i.a,{path:"/post/:postId",component:Z}),Object(l.jsx)(i.a,{path:"/new-post",component:ae})]})]}),t===u&&Object(l.jsx)(se,{})]})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,713)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};function re(e){return Object(l.jsx)(b,{children:Object(l.jsx)(I,{children:e.children})})}n.a.render(Object(l.jsx)(re,{children:Object(l.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[701,1,2]]]);
//# sourceMappingURL=main.16e175f0.chunk.js.map