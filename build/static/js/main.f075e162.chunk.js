(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{10:function(t,e,c){"use strict";c.r(e);var s=c(1),n=c(3),i=c.n(n),r=c(0);function a(t){return Object(r.jsxs)("div",{className:"hamburger-menu",children:[Object(r.jsx)("input",{type:"checkbox",id:"menu-btn-check"}),Object(r.jsx)("label",{htmlFor:"menu-btn-check",className:"menu-btn",children:Object(r.jsx)("span",{})}),Object(r.jsxs)("div",{className:"menu-content",children:[Object(r.jsx)(l,{str:"HOME",link:"#"}),Object(r.jsx)(l,{str:"MENU",link:"#"}),Object(r.jsx)(l,{str:"ABOUT",link:"#"})]}),Object(r.jsx)("label",{htmlFor:"menu-btn-check",id:"menu-cover"})]})}function l(t){return Object(r.jsx)("div",{className:"menu-content-row",onClick:()=>{console.log("a")},children:t.str})}function j(){return Object(r.jsx)("div",{className:"ad",children:Object(r.jsx)("img",{className:"ad-img",src:"assets/ad.png",alt:"ad"})})}var o=function(t){return Object(r.jsxs)("div",{id:"header",children:[Object(r.jsx)(a,{}),Object(r.jsx)(j,{})]})};function d(t){return Object(r.jsx)("div",{className:"citing",children:Object(r.jsxs)("p",{className:"comment",children:[t.comment,Object(r.jsx)("span",{className:"author",children:t.author})]})})}function u(t){const e=[{comment:"tasukete",author:"aa"},{comment:"(^-^)\uff89",author:"bb"}];return Object(r.jsx)("div",{className:"citingList",children:e.map(((t,e)=>Object(r.jsx)(d,{comment:t.comment,author:t.author},e)))})}function m(t){return Object(r.jsxs)("div",{className:"music",children:[t.title," - ",t.author," - ",t.file]})}function b(t){const e=[{title:"aarock",author:"aa",file:""},{title:"aaajazz",author:"bb",file:""}];return Object(r.jsx)("div",{className:"musicList",children:e.map(((t,e)=>Object(r.jsx)(m,{file:t.file,title:t.title,author:t.author},e)))})}function h(t){return Object(r.jsxs)("div",{className:"illust",children:[Object(r.jsx)("style",{children:"img{width:50%;}"}),Object(r.jsx)("img",{src:t.file,alt:t.title}),Object(r.jsxs)("p",{children:[t.title," - ",t.author]})]})}function x(t){const e=[{title:"img-1",author:"aa",file:"./assets/test.png"},{title:"illustration",author:"bb",file:"./assets/test.png"}];return Object(r.jsx)("div",{className:"illustList",children:e.map(((t,e)=>Object(r.jsx)(h,{file:t.file,title:t.title,author:t.author},e)))})}function p(t){return Object(r.jsxs)("div",{className:"moreinfo",children:[Object(r.jsx)("div",{className:"infoimg",children:Object(r.jsx)("img",{src:t.img,alt:"info"})}),Object(r.jsx)("div",{className:"infocap",children:t.cap}),Object(r.jsx)("div",{className:"infodet",children:t.det}),Object(r.jsx)("div",{className:"infolink",children:Object(r.jsx)("a",{href:t.link,children:"\u8a73\u3057\u304f\u306f\u3053\u3061\u3089 >"})})]})}function O(t){const e=[{img:"../assets/test.png",cap:"\u7121\u6599\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",det:"\u7121\u6599\u3067\u3001\u5408\u6cd5\u7684\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",link:"#"},{img:"./assets/test.png",cap:"\u30b5\u30dd\u30fc\u30c8\u5bfe\u5fdc",det:"\u611f\u60f3\u3092\u545f\u304d\u3001\u7de8\u66f2\u8005\u306b\u30a2\u30d4\u30fc\u30eb\u3057\u307e\u3057\u3087\u3046\u3002Naffle\u306e\u30b5\u30dd\u30fc\u30bf\u30fc\u304c\u56de\u7b54\u3057\u307e\u3059\u3002",link:"#"},{img:"./assets/test.png",cap:"\u7121\u6599\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",det:"\u7121\u6599\u3067\u3001\u5408\u6cd5\u7684\u306b\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",link:"#"}];return Object(r.jsx)("div",{id:"moreinfoList",children:e.map(((t,e)=>Object(r.jsx)(p,{img:t.img,pr:t.cap,det:t.det,link:t.link},e)))})}function f(){return Object(r.jsx)("div",{className:"prlx_cont prlx_back"})}function g(){const t=[{capt:"\u30b9\u30de\u30fc\u30c8\u306a\u795d\u796d\u3002",pr:"2021\u5e74\u300111\u670817\u65e5\u3002\u67af\u308c\u305f\u4eba\u3005\u304c\u4f55\u6c17\u306a\u304f\u6642\u9593\u3092\u6d6a\u8cbb\u3057\u3066\u3044\u304f\u4e2d\u3001\u3042\u308b\u4e00\u4eba\u306e\u30cb\u30f3\u30b2\u30f3\u306f\u751f\u8a95\u304b\u308920\u5e74\u306e\u82b1\u3092\u54b2\u304b\u305d\u3046\u3068\u3057\u3066\u3044\u305f\u3002",other:""},{capt:"\u30b7\u30f3\u30d7\u30eb\u306b\u3001\u305f\u304f\u3055\u3093\u795d\u3046\u3002",pr:"\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01\u8a95\u751f\u65e5\u304a\u3081\u3067\u3068\u3046\uff01",other:""},{capt:"\u8a95\u751f\u65e5\u696d\u754c\u3067\u3082\u3001\u30c7\u30b8\u30bf\u30eb\u5316\u304c\u9032\u3080\u3002",pr:"\u8457\u540d\u4eba\u304b\u3089\u3082\u795d\u3044\u306e\u30b3\u30e1\u30f3\u30c8\u30fb\u30c6\u30ad\u30b9\u30c8\u30c7\u30fc\u30bf\u304c\u9001\u3089\u308c\u3066\u304d\u3066\u3044\u307e\u3059\u3002",other:"citing"},{capt:"\u97f3\u697d\u3067\u795d\u3046\u3002",pr:"\u5f0a\u30af\u30e9\u30d6\u306f\u72ec\u81ea\u306e\u30eb\u30fc\u30c8\u3067\u9ad8\u54c1\u8cea\u306a\u30b5\u30a6\u30f3\u30c9\u30c7\u30fc\u30bf\u3092\u53d6\u96c6\u3057\u307e\u3057\u305f\u3002\u305d\u306e\u30e6\u30fc\u30b6\u30fc\u30fb\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u3092\u8074\u899a\u3067\u611f\u3058\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002",other:"music"},{capt:"\u753b\u50cf\u3067\u795d\u3046\u3002",pr:"\u8996\u899a\u306b\u3082\u50cd\u304d\u304b\u3051\u308b\u3053\u3068\u3067\u3001\u30d0\u30ea\u30a2\u30d5\u30ea\u30fc\u306a\u8cde\u8cdb\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002",other:"illust"},{capt:"\u3053\u308c\u307e\u3067\u3082\u3001\u3053\u308c\u304b\u3089\u3082\u3002",pr:"\u3088\u308d",other:""}];return Object(r.jsxs)("div",{className:"prlx_cont prlx_front",children:[t.map(((t,e)=>Object(r.jsx)(N,{capt:t.capt,pr:t.pr,other:t.other},e))),Object(r.jsx)(O,{}),Object(r.jsx)(v,{})]})}function N(t){const e=t=>{switch(t.other){case"music":return Object(r.jsx)(b,{});case"illust":return Object(r.jsx)(x,{});case"citing":return Object(r.jsx)(u,{});default:return Object(r.jsx)(r.Fragment,{})}};return Object(r.jsxs)("div",{className:"textBlock",children:[Object(r.jsx)("h2",{className:"capt",children:t.capt}),Object(r.jsx)("p",{className:"pr",children:t.pr}),Object(r.jsx)(e,{other:t.other})]})}function v(t){return Object(r.jsx)("p",{children:"footer"})}var k=function(t){return Object(r.jsxs)("div",{className:"prlx_root",children:[Object(r.jsx)(f,{}),Object(r.jsx)(g,{})]})};c(9);i.a.render(Object(r.jsxs)(s.StrictMode,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(k,{})]}),document.getElementById("root"));let L=0,y=0;const E=document.querySelector(".ad"),_=document.getElementsByClassName("prlx_root")[0];_.addEventListener("scroll",(t=>{y=L,L=_.scrollTop,E.style.bottom=L>y?(L-y).toString()+"px":(-(y-L)).toString()+"px"})),E.addEventListener("click",(t=>{E.classList.add("ad-hidden")}))},9:function(t,e,c){}},[[10,1,2]]]);
//# sourceMappingURL=main.f075e162.chunk.js.map