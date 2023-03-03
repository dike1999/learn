import{d as E,c as R,g as o,w as a,u as p,F as b,y as v,o as L,R as _,e as d,z as C,A as O,C as P,D as w,G as A}from"./vendor-es.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const T=E({__name:"App",setup(r){return(c,l)=>{const n=O,t=v;return L(),R(b,null,[o(t,null,{default:a(()=>[o(n,{span:6},{default:a(()=>[o(p(_),{class:"grid-content bg-purple-light",to:"/chatroom"},{default:a(()=>[d(" ChatRoom ")]),_:1})]),_:1}),o(n,{span:6},{default:a(()=>[o(p(_),{class:"grid-content bg-purple",to:"/webrtc"},{default:a(()=>[d(" WebRTC ")]),_:1})]),_:1}),o(n,{span:6},{default:a(()=>[o(p(_),{class:"grid-content bg-purple-light",to:"/three"},{default:a(()=>[d(" Three ")]),_:1})]),_:1}),o(n,{span:6},{default:a(()=>[o(p(_),{class:"grid-content bg-purple",to:"/"},{default:a(()=>[d("Home")]),_:1})]),_:1})]),_:1}),o(p(C))],64)}}});const V="modulepreload",N=function(r){return"/"+r},h={},m=function(c,l,n){if(!l||l.length===0)return c();const t=document.getElementsByTagName("link");return Promise.all(l.map(e=>{if(e=N(e),e in h)return;h[e]=!0;const s=e.endsWith(".css"),y=s?'[rel="stylesheet"]':"";if(!!n)for(let u=t.length-1;u>=0;u--){const f=t[u];if(f.href===e&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${y}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":V,s||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),s)return new Promise((u,f)=>{i.addEventListener("load",u),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>c())},B=P({history:w("/"),routes:[{path:"/",name:"home",component:()=>m(()=>import("./views-es.js").then(r=>r.i),["static/js/views-es.js","static/js/vendor-es.js","static/css/vendor.css","static/css/views.css"])},{path:"/webrtc",name:"WebRTC",component:()=>m(()=>import("./views-es.js").then(r=>r.r),["static/js/views-es.js","static/js/vendor-es.js","static/css/vendor.css","static/css/views.css"])},{path:"/three",name:"three",component:()=>m(()=>import("./views-es.js").then(r=>r.a),["static/js/views-es.js","static/js/vendor-es.js","static/css/vendor.css","static/css/views.css"])},{path:"/chatroom",name:"ChatRoom",component:()=>m(()=>import("./views-es.js").then(r=>r.b),["static/js/views-es.js","static/js/vendor-es.js","static/css/vendor.css","static/css/views.css"])}]}),g=A(T);g.use(B);g.mount("#app");
