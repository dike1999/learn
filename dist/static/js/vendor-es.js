function Ec(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Un(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=tt(i)?Fg(i):Un(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(tt(n))return n;if(it(n))return n}}const Pg=/;(?![^(]*\))/g,Dg=/:([^]+)/,Ig=/\/\*.*?\*\//gs;function Fg(n){const e={};return n.replace(Ig,"").split(Pg).forEach(t=>{if(t){const i=t.split(Dg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ke(n){let e="";if(tt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=ke(n[t]);i&&(e+=i+" ")}else if(it(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ng=Ec(Og);function Rd(n){return!!n||n===""}const Mi=n=>tt(n)?n:n==null?"":Fe(n)||it(n)&&(n.toString===Fd||!$e(n.toString))?JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>e&&e.__v_isRef?Ld(n,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Dd(e)?{[`Set(${e.size})`]:[...e.values()]}:it(e)&&!Fe(e)&&!Od(e)?String(e):e,lt={},Wr=[],Nn=()=>{},Bg=()=>!1,zg=/^on[^a-z]/,ha=n=>zg.test(n),Tc=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Pd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ug=Object.prototype.hasOwnProperty,He=(n,e)=>Ug.call(n,e),Fe=Array.isArray,$r=n=>da(n)==="[object Map]",Dd=n=>da(n)==="[object Set]",$e=n=>typeof n=="function",tt=n=>typeof n=="string",Ac=n=>typeof n=="symbol",it=n=>n!==null&&typeof n=="object",Id=n=>it(n)&&$e(n.then)&&$e(n.catch),Fd=Object.prototype.toString,da=n=>Fd.call(n),kg=n=>da(n).slice(8,-1),Od=n=>da(n)==="[object Object]",Cc=n=>tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ko=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vg=/-(\w)/g,kn=pa(n=>n.replace(Vg,(e,t)=>t?t.toUpperCase():"")),Hg=/\B([A-Z])/g,as=pa(n=>n.replace(Hg,"-$1").toLowerCase()),ma=pa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Na=pa(n=>n?`on${ma(n)}`:""),Hs=(n,e)=>!Object.is(n,e),Ba=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ra=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Rc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let bu;const Gg=()=>bu||(bu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Kt;class Wg{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function $g(n,e=Kt){e&&e.active&&e.effects.push(n)}function qg(){return Kt}function jg(n){Kt&&Kt.cleanups.push(n)}const Lc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Nd=n=>(n.w&Pi)>0,Bd=n=>(n.n&Pi)>0,Xg=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Pi},Kg=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Nd(r)&&!Bd(r)?r.delete(n):e[t++]=r,r.w&=~Pi,r.n&=~Pi}e.length=t}},Ol=new WeakMap;let Cs=0,Pi=1;const Nl=30;let hn;const ar=Symbol(""),Bl=Symbol("");class Pc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,$g(this,i)}run(){if(!this.active)return this.fn();let e=hn,t=Ti;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hn,hn=this,Ti=!0,Pi=1<<++Cs,Cs<=Nl?Xg(this):Mu(this),this.fn()}finally{Cs<=Nl&&Kg(this),Pi=1<<--Cs,hn=this.parent,Ti=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(Mu(this),this.onStop&&this.onStop(),this.active=!1)}}function Mu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Ti=!0;const zd=[];function io(){zd.push(Ti),Ti=!1}function ro(){const n=zd.pop();Ti=n===void 0?!0:n}function Zt(n,e,t){if(Ti&&hn){let i=Ol.get(n);i||Ol.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Lc()),Ud(r)}}function Ud(n,e){let t=!1;Cs<=Nl?Bd(n)||(n.n|=Pi,t=!Nd(n)):t=!n.has(hn),t&&(n.add(hn),hn.deps.push(n))}function ii(n,e,t,i,r,s){const o=Ol.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Rc(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?Cc(t)&&a.push(o.get("length")):(a.push(o.get(ar)),$r(n)&&a.push(o.get(Bl)));break;case"delete":Fe(n)||(a.push(o.get(ar)),$r(n)&&a.push(o.get(Bl)));break;case"set":$r(n)&&a.push(o.get(ar));break}if(a.length===1)a[0]&&zl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);zl(Lc(l))}}function zl(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&Su(i);for(const i of t)i.computed||Su(i)}function Su(n,e){(n!==hn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Yg=Ec("__proto__,__v_isRef,__isVue"),kd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ac)),Zg=Dc(),Jg=Dc(!1,!0),Qg=Dc(!0),wu=e0();function e0(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,o=this.length;s<o;s++)Zt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){io();const i=je(this)[e].apply(this,t);return ro(),i}}),n}function Dc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?g0:$d:e?Wd:Gd).get(i))return i;const o=Fe(i);if(!n&&o&&He(wu,r))return Reflect.get(wu,r,s);const a=Reflect.get(i,r,s);return(Ac(r)?kd.has(r):Yg(r))||(n||Zt(i,"get",r),e)?a:Pt(a)?o&&Cc(r)?a:a.value:it(a)?n?jd(a):mr(a):a}}const t0=Vd(),n0=Vd(!0);function Vd(n=!1){return function(t,i,r,s){let o=t[i];if(Yr(o)&&Pt(o)&&!Pt(r))return!1;if(!n&&(!sa(r)&&!Yr(r)&&(o=je(o),r=je(r)),!Fe(t)&&Pt(o)&&!Pt(r)))return o.value=r,!0;const a=Fe(t)&&Cc(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(a?Hs(r,o)&&ii(t,"set",i,r):ii(t,"add",i,r)),l}}function i0(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&ii(n,"delete",e,void 0),i}function r0(n,e){const t=Reflect.has(n,e);return(!Ac(e)||!kd.has(e))&&Zt(n,"has",e),t}function s0(n){return Zt(n,"iterate",Fe(n)?"length":ar),Reflect.ownKeys(n)}const Hd={get:Zg,set:t0,deleteProperty:i0,has:r0,ownKeys:s0},o0={get:Qg,set(n,e){return!0},deleteProperty(n,e){return!0}},a0=Ut({},Hd,{get:Jg,set:n0}),Ic=n=>n,ga=n=>Reflect.getPrototypeOf(n);function go(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Zt(r,"get",e),Zt(r,"get",s));const{has:o}=ga(r),a=i?Ic:t?Nc:Gs;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function _o(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Zt(i,"has",n),Zt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function vo(n,e=!1){return n=n.__v_raw,!e&&Zt(je(n),"iterate",ar),Reflect.get(n,"size",n)}function Eu(n){n=je(n);const e=je(this);return ga(e).has.call(e,n)||(e.add(n),ii(e,"add",n,n)),this}function Tu(n,e){e=je(e);const t=je(this),{has:i,get:r}=ga(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Hs(e,o)&&ii(t,"set",n,e):ii(t,"add",n,e),this}function Au(n){const e=je(this),{has:t,get:i}=ga(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&ii(e,"delete",n,void 0),s}function Cu(){const n=je(this),e=n.size!==0,t=n.clear();return e&&ii(n,"clear",void 0,void 0),t}function xo(n,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?Ic:n?Nc:Gs;return!n&&Zt(a,"iterate",ar),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function yo(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=$r(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ic:e?Nc:Gs;return!e&&Zt(s,"iterate",l?Bl:ar),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ai(n){return function(...e){return n==="delete"?!1:this}}function l0(){const n={get(s){return go(this,s)},get size(){return vo(this)},has:_o,add:Eu,set:Tu,delete:Au,clear:Cu,forEach:xo(!1,!1)},e={get(s){return go(this,s,!1,!0)},get size(){return vo(this)},has:_o,add:Eu,set:Tu,delete:Au,clear:Cu,forEach:xo(!1,!0)},t={get(s){return go(this,s,!0)},get size(){return vo(this,!0)},has(s){return _o.call(this,s,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:xo(!0,!1)},i={get(s){return go(this,s,!0,!0)},get size(){return vo(this,!0)},has(s){return _o.call(this,s,!0)},add:ai("add"),set:ai("set"),delete:ai("delete"),clear:ai("clear"),forEach:xo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=yo(s,!1,!1),t[s]=yo(s,!0,!1),e[s]=yo(s,!1,!0),i[s]=yo(s,!0,!0)}),[n,t,e,i]}const[c0,u0,f0,h0]=l0();function Fc(n,e){const t=e?n?h0:f0:n?u0:c0;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const d0={get:Fc(!1,!1)},p0={get:Fc(!1,!0)},m0={get:Fc(!0,!1)},Gd=new WeakMap,Wd=new WeakMap,$d=new WeakMap,g0=new WeakMap;function _0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function v0(n){return n.__v_skip||!Object.isExtensible(n)?0:_0(kg(n))}function mr(n){return Yr(n)?n:Oc(n,!1,Hd,d0,Gd)}function qd(n){return Oc(n,!1,a0,p0,Wd)}function jd(n){return Oc(n,!0,o0,m0,$d)}function Oc(n,e,t,i,r){if(!it(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=v0(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function qr(n){return Yr(n)?qr(n.__v_raw):!!(n&&n.__v_isReactive)}function Yr(n){return!!(n&&n.__v_isReadonly)}function sa(n){return!!(n&&n.__v_isShallow)}function Xd(n){return qr(n)||Yr(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function Kd(n){return ra(n,"__v_skip",!0),n}const Gs=n=>it(n)?mr(n):n,Nc=n=>it(n)?jd(n):n;function Yd(n){Ti&&hn&&(n=je(n),Ud(n.dep||(n.dep=Lc())))}function Zd(n,e){n=je(n),n.dep&&zl(n.dep)}function Pt(n){return!!(n&&n.__v_isRef===!0)}function nt(n){return Jd(n,!1)}function Yo(n){return Jd(n,!0)}function Jd(n,e){return Pt(n)?n:new x0(n,e)}class x0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Gs(e)}get value(){return Yd(this),this._value}set value(e){const t=this.__v_isShallow||sa(e)||Yr(e);e=t?e:je(e),Hs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Gs(e),Zd(this))}}function H(n){return Pt(n)?n.value:n}const y0={get:(n,e,t)=>H(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Pt(r)&&!Pt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Qd(n){return qr(n)?n:new Proxy(n,y0)}function ep(n){const e=Fe(n)?new Array(n.length):{};for(const t in n)e[t]=Ws(n,t);return e}class b0{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function Ws(n,e,t){const i=n[e];return Pt(i)?i:new b0(n,e,t)}var tp;class M0{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[tp]=!1,this._dirty=!0,this.effect=new Pc(e,()=>{this._dirty||(this._dirty=!0,Zd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return Yd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}tp="__v_isReadonly";function S0(n,e,t=!1){let i,r;const s=$e(n);return s?(i=n,r=Nn):(i=n.get,r=n.set),new M0(i,r,s||!r,t)}function w0(n,...e){}function Ai(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){_a(s,e,t)}return r}function gn(n,e,t,i){if($e(n)){const s=Ai(n,e,t,i);return s&&Id(s)&&s.catch(o=>{_a(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(gn(n[s],e,t,i));return r}function _a(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ai(l,null,10,[n,o,a]);return}}E0(n,t,r,i)}function E0(n,e,t,i=!0){console.error(n)}let $s=!1,Ul=!1;const Lt=[];let Ln=0;const jr=[];let Qn=null,Yi=0;const np=Promise.resolve();let Bc=null;function Pn(n){const e=Bc||np;return n?e.then(this?n.bind(this):n):e}function T0(n){let e=Ln+1,t=Lt.length;for(;e<t;){const i=e+t>>>1;qs(Lt[i])<n?e=i+1:t=i}return e}function zc(n){(!Lt.length||!Lt.includes(n,$s&&n.allowRecurse?Ln+1:Ln))&&(n.id==null?Lt.push(n):Lt.splice(T0(n.id),0,n),ip())}function ip(){!$s&&!Ul&&(Ul=!0,Bc=np.then(sp))}function A0(n){const e=Lt.indexOf(n);e>Ln&&Lt.splice(e,1)}function C0(n){Fe(n)?jr.push(...n):(!Qn||!Qn.includes(n,n.allowRecurse?Yi+1:Yi))&&jr.push(n),ip()}function Ru(n,e=$s?Ln+1:0){for(;e<Lt.length;e++){const t=Lt[e];t&&t.pre&&(Lt.splice(e,1),e--,t())}}function rp(n){if(jr.length){const e=[...new Set(jr)];if(jr.length=0,Qn){Qn.push(...e);return}for(Qn=e,Qn.sort((t,i)=>qs(t)-qs(i)),Yi=0;Yi<Qn.length;Yi++)Qn[Yi]();Qn=null,Yi=0}}const qs=n=>n.id==null?1/0:n.id,R0=(n,e)=>{const t=qs(n)-qs(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function sp(n){Ul=!1,$s=!0,Lt.sort(R0);const e=Nn;try{for(Ln=0;Ln<Lt.length;Ln++){const t=Lt[Ln];t&&t.active!==!1&&Ai(t,null,14)}}finally{Ln=0,Lt.length=0,rp(),$s=!1,Bc=null,(Lt.length||jr.length)&&sp()}}function L0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||lt;h&&(r=t.map(m=>tt(m)?m.trim():m)),f&&(r=t.map(Rc))}let a,l=i[a=Na(e)]||i[a=Na(kn(e))];!l&&s&&(l=i[a=Na(as(e))]),l&&gn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,gn(c,n,6,r)}}function P0(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={};return!s&&!!1?(it(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Ut(o,s),it(n)&&i.set(n,o),o)}function va(n,e){return!n||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,as(e))||He(n,e))}let Tt=null,xa=null;function oa(n){const e=Tt;return Tt=n,xa=n&&n.type.__scopeId||null,e}function sP(n){xa=n}function oP(){xa=null}function Et(n,e=Tt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Uu(-1);const s=oa(e);let o;try{o=n(...r)}finally{oa(s),i._d&&Uu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function za(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:g,inheritAttrs:d}=n;let p,_;const S=oa(n);try{if(t.shapeFlag&4){const y=r||i;p=Cn(u.call(y,y,f,s,m,h,g)),_=l}else{const y=e;p=Cn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:D0(l)}}catch(y){Os.length=0,_a(y,n,1),p=dt(nn)}let w=p;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:A}=w;y.length&&A&7&&(o&&y.some(Tc)&&(_=I0(_,o)),w=Di(w,_))}return t.dirs&&(w=Di(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),p=w,oa(S),p}const D0=n=>{let e;for(const t in n)(t==="class"||t==="style"||ha(t))&&((e||(e={}))[t]=n[t]);return e},I0=(n,e)=>{const t={};for(const i in n)(!Tc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function F0(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Lu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!va(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lu(i,o,c):!0:!!o;return!1}function Lu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!va(t,s))return!0}return!1}function O0({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const N0=n=>n.__isSuspense;function B0(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):C0(n)}function Ci(n,e){if(Bt){let t=Bt.provides;const i=Bt.parent&&Bt.parent.provides;i===t&&(t=Bt.provides=Object.create(i)),t[n]=e}}function xt(n,e,t=!1){const i=Bt||Tt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&$e(e)?e.call(i.proxy):e}}const bo={};function zt(n,e,t){return z0(n,e,t)}function z0(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=lt){const a=Bt;let l,c=!1,u=!1;if(Pt(n)?(l=()=>n.value,c=sa(n)):qr(n)?(l=()=>n,i=!0):Fe(n)?(u=!0,c=n.some(w=>qr(w)||sa(w)),l=()=>n.map(w=>{if(Pt(w))return w.value;if(qr(w))return tr(w);if($e(w))return Ai(w,a,2)})):$e(n)?e?l=()=>Ai(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),gn(n,a,3,[h])}:l=Nn,e&&i){const w=l;l=()=>tr(w())}let f,h=w=>{f=_.onStop=()=>{Ai(w,a,4)}},m;if(Xs)if(h=Nn,e?t&&gn(e,a,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const w=b_();m=w.__watcherHandles||(w.__watcherHandles=[])}else return Nn;let g=u?new Array(n.length).fill(bo):bo;const d=()=>{if(!!_.active)if(e){const w=_.run();(i||c||(u?w.some((y,A)=>Hs(y,g[A])):Hs(w,g)))&&(f&&f(),gn(e,a,3,[w,g===bo?void 0:u&&g[0]===bo?[]:g,h]),g=w)}else _.run()};d.allowRecurse=!!e;let p;r==="sync"?p=d:r==="post"?p=()=>Gt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),p=()=>zc(d));const _=new Pc(l,p);e?t?d():g=_.run():r==="post"?Gt(_.run.bind(_),a&&a.suspense):_.run();const S=()=>{_.stop(),a&&a.scope&&Pd(a.scope.effects,_)};return m&&m.push(S),S}function tr(n,e){if(!it(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Pt(n))tr(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)tr(n[t],e);else if(Dd(n)||$r(n))n.forEach(t=>{tr(t,e)});else if(Od(n))for(const t in n)tr(n[t],e);return n}function U0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gr(()=>{n.isMounted=!0}),kc(()=>{n.isUnmounting=!0}),n}const Qt=[Function,Array],k0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qt,onEnter:Qt,onAfterEnter:Qt,onEnterCancelled:Qt,onBeforeLeave:Qt,onLeave:Qt,onAfterLeave:Qt,onLeaveCancelled:Qt,onBeforeAppear:Qt,onAppear:Qt,onAfterAppear:Qt,onAppearCancelled:Qt},setup(n,{slots:e}){const t=Oi(),i=U0();let r;return()=>{const s=e.default&&lp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==nn){o=d;break}}const a=je(n),{mode:l}=a;if(i.isLeaving)return Ua(o);const c=Pu(o);if(!c)return Ua(o);const u=kl(c,a,i,t);Vl(c,u);const f=t.subTree,h=f&&Pu(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();r===void 0?r=d:d!==r&&(r=d,m=!0)}if(h&&h.type!==nn&&(!Zi(c,h)||m)){const d=kl(h,a,i,t);if(Vl(h,d),l==="out-in")return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Ua(o);l==="in-out"&&c.type!==nn&&(d.delayLeave=(p,_,S)=>{const w=ap(i,h);w[String(h.key)]=h,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},op=k0;function ap(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function kl(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:d,onAppear:p,onAfterAppear:_,onAppearCancelled:S}=e,w=String(n.key),y=ap(t,n),A=(b,C)=>{b&&gn(b,i,9,C)},R=(b,C)=>{const B=C[1];A(b,C),Fe(b)?b.every(N=>N.length<=1)&&B():b.length<=1&&B()},O={mode:s,persisted:o,beforeEnter(b){let C=a;if(!t.isMounted)if(r)C=d||a;else return;b._leaveCb&&b._leaveCb(!0);const B=y[w];B&&Zi(n,B)&&B.el._leaveCb&&B.el._leaveCb(),A(C,[b])},enter(b){let C=l,B=c,N=u;if(!t.isMounted)if(r)C=p||l,B=_||c,N=S||u;else return;let z=!1;const ae=b._enterCb=I=>{z||(z=!0,I?A(N,[b]):A(B,[b]),O.delayedLeave&&O.delayedLeave(),b._enterCb=void 0)};C?R(C,[b,ae]):ae()},leave(b,C){const B=String(n.key);if(b._enterCb&&b._enterCb(!0),t.isUnmounting)return C();A(f,[b]);let N=!1;const z=b._leaveCb=ae=>{N||(N=!0,C(),ae?A(g,[b]):A(m,[b]),b._leaveCb=void 0,y[B]===n&&delete y[B])};y[B]=n,h?R(h,[b,z]):z()},clone(b){return kl(b,e,t,i)}};return O}function Ua(n){if(Uc(n))return n=Di(n),n.children=null,n}function Pu(n){return Uc(n)?n.children?n.children[0]:void 0:n}function Vl(n,e){n.shapeFlag&6&&n.component?Vl(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function lp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Mt?(o.patchFlag&128&&r++,i=i.concat(lp(o.children,e,a))):(e||o.type!==nn)&&i.push(a!=null?Di(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ct(n){return $e(n)?{setup:n,name:n.name}:n}const Is=n=>!!n.type.__asyncLoader,Uc=n=>n.type.__isKeepAlive;function V0(n,e,t=Bt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;io(),Wc(t);const a=gn(e,t,n,o);return Bs(),ro(),a});return i?r.unshift(s):r.push(s),s}}const ya=n=>(e,t=Bt)=>(!Xs||n==="sp")&&V0(n,(...i)=>e(...i),t),gr=ya("m"),H0=ya("u"),kc=ya("bum"),G0=ya("um");function Vc(n,e){const t=Tt;if(t===null)return n;const i=Ma(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=lt]=e[s];o&&($e(o)&&(o={mounted:o,updated:o}),o.deep&&tr(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function zi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(io(),gn(l,t,8,[n.el,a,n,e]),ro())}}const cp="components",up=Symbol();function In(n){return tt(n)?W0(cp,n,!1)||n:n||up}function W0(n,e,t=!0,i=!1){const r=Tt||Bt;if(r){const s=r.type;if(n===cp){const a=__(s,!1);if(a&&(a===e||a===kn(e)||a===ma(kn(e))))return s}const o=Du(r[n]||s[n],e)||Du(r.appContext[n],e);return!o&&i?s:o}}function Du(n,e){return n&&(n[e]||n[kn(e)]||n[ma(kn(e))])}function aP(n,e,t,i){let r;const s=t&&t[i];if(Fe(n)||tt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(it(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function St(n,e,t={},i,r){if(Tt.isCE||Tt.parent&&Is(Tt.parent)&&Tt.parent.isCE)return e!=="default"&&(t.name=e),dt("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),Le();const o=s&&fp(s(t)),a=ft(Mt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function fp(n){return n.some(e=>Zr(e)?!(e.type===nn||e.type===Mt&&!fp(e.children)):!0)?n:null}const Hl=n=>n?bp(n)?Ma(n)||n.proxy:Hl(n.parent):null,Fs=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Hl(n.parent),$root:n=>Hl(n.root),$emit:n=>n.emit,$options:n=>n.type,$forceUpdate:n=>n.f||(n.f=()=>zc(n.update)),$nextTick:n=>n.n||(n.n=Pn.bind(n.proxy)),$watch:n=>Nn}),ka=(n,e)=>n!==lt&&!n.__isScriptSetup&&He(n,e),$0={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ka(i,e))return o[e]=1,i[e];if(r!==lt&&He(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==lt&&He(t,e))return o[e]=4,t[e];o[e]=0}}const u=Fs[e];let f,h;if(u)return e==="$attrs"&&Zt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==lt&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ka(r,e)?(r[e]=t,!0):i!==lt&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==lt&&He(n,o)||ka(e,o)||(a=s[0])&&He(a,o)||He(i,o)||He(Fs,o)||He(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function q0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>aa(l,c,o,!0)),aa(l,e,o)),it(e)&&s.set(e,l),l}function aa(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&aa(n,s,t,!0),r&&r.forEach(o=>aa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=j0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const j0={data:Iu,props:qi,emits:qi,methods:qi,computed:qi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:qi,directives:qi,watch:K0,provide:Iu,inject:X0};function Iu(n,e){return e?n?function(){return Ut($e(n)?n.call(this,this):n,$e(e)?e.call(this,this):e)}:e:n}function X0(n,e){return qi(Fu(n),Fu(e))}function Fu(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Nt(n,e){return n?[...new Set([].concat(n,e))]:e}function qi(n,e){return n?Ut(Ut(Object.create(null),n),e):e}function K0(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=Nt(n[i],e[i]);return t}function Y0(n,e,t,i=!1){const r={},s={};ra(s,ba,1),n.propsDefaults=Object.create(null),hp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:qd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Z0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(va(n.emitsOptions,h))continue;const m=e[h];if(l)if(He(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const g=kn(h);r[g]=Gl(l,a,g,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{hp(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!He(e,f)&&((u=as(f))===f||!He(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Gl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!He(e,f)&&!0)&&(delete s[f],c=!0)}c&&ii(n,"set","$attrs")}function hp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ko(l))continue;const c=e[l];let u;r&&He(r,u=kn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:va(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Gl(r,l,f,c[f],n,!He(c,f))}}return o}function Gl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&$e(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Wc(r),i=c[t]=l.call(null,e),Bs())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===as(t))&&(i=!0))}return i}function J0(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];if(!s&&!!1)return it(n)&&i.set(n,Wr),Wr;if(Fe(s))for(let u=0;u<s.length;u++){const f=kn(s[u]);Ou(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=kn(u);if(Ou(f)){const h=s[u],m=o[f]=Fe(h)||$e(h)?{type:h}:Object.assign({},h);if(m){const g=zu(Boolean,m.type),d=zu(String,m.type);m[0]=g>-1,m[1]=d<0||g<d,(g>-1||He(m,"default"))&&a.push(f)}}}const c=[o,a];return it(n)&&i.set(n,c),c}function Ou(n){return n[0]!=="$"}function Nu(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Bu(n,e){return Nu(n)===Nu(e)}function zu(n,e){return Fe(e)?e.findIndex(t=>Bu(t,n)):$e(e)&&Bu(e,n)?0:-1}const dp=n=>n[0]==="_"||n==="$stable",Hc=n=>Fe(n)?n.map(Cn):[Cn(n)],Q0=(n,e,t)=>{if(e._n)return e;const i=Et((...r)=>Hc(e(...r)),t);return i._c=!1,i},pp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(dp(r))continue;const s=n[r];if($e(s))e[r]=Q0(r,s,i);else if(s!=null){const o=Hc(s);e[r]=()=>o}}},mp=(n,e)=>{const t=Hc(e);n.slots.default=()=>t},e_=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),ra(e,"_",t)):pp(e,n.slots={})}else n.slots={},e&&mp(n,e);ra(n.slots,ba,1)},t_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ut(r,e),!t&&a===1&&delete r._):(s=!e.$stable,pp(e,r)),o=e}else e&&(mp(n,e),o={default:1});if(s)for(const a in r)!dp(a)&&!(a in o)&&delete r[a]};function gp(){return{app:null,config:{isNativeTag:Bg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let n_=0;function i_(n,e){return function(i,r=null){$e(i)||(i=Object.assign({},i)),r!=null&&!it(r)&&(r=null);const s=gp(),o=new Set;let a=!1;const l=s.app={_uid:n_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:M_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&$e(c.install)?(o.add(c),c.install(l,...u)):$e(c)&&(o.add(c),c(l,...u))),l},mixin(c){return l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=dt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Ma(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Wl(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,m)=>Wl(h,e&&(Fe(e)?e[m]:e),t,i,r));return}if(Is(i)&&!r)return;const s=i.shapeFlag&4?Ma(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(tt(c)?(u[c]=null,He(f,c)&&(f[c]=null)):Pt(c)&&(c.value=null)),$e(l))Ai(l,a,12,[o,u]);else{const h=tt(l),m=Pt(l);if(h||m){const g=()=>{if(n.f){const d=h?He(f,l)?f[l]:u[l]:l.value;r?Fe(d)&&Pd(d,s):Fe(d)?d.includes(s)||d.push(s):h?(u[l]=[s],He(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,He(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Gt(g,t)):g()}}}const Gt=B0;function r_(n){return s_(n)}function s_(n,e){const t=Gg();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Nn,insertStaticContent:g}=n,d=(M,T,k,K=null,ee=null,fe=null,pe=!1,ne=null,me=!!T.dynamicChildren)=>{if(M===T)return;M&&!Zi(M,T)&&(K=U(M),re(M,ee,fe,!0),M=null),T.patchFlag===-2&&(me=!1,T.dynamicChildren=null);const{type:ce,ref:v,shapeFlag:x}=T;switch(ce){case so:p(M,T,k,K);break;case nn:_(M,T,k,K);break;case Va:M==null&&S(T,k,K,pe);break;case Mt:z(M,T,k,K,ee,fe,pe,ne,me);break;default:x&1?A(M,T,k,K,ee,fe,pe,ne,me):x&6?ae(M,T,k,K,ee,fe,pe,ne,me):(x&64||x&128)&&ce.process(M,T,k,K,ee,fe,pe,ne,me,ue)}v!=null&&ee&&Wl(v,M&&M.ref,fe,T||M,!T)},p=(M,T,k,K)=>{if(M==null)i(T.el=a(T.children),k,K);else{const ee=T.el=M.el;T.children!==M.children&&c(ee,T.children)}},_=(M,T,k,K)=>{M==null?i(T.el=l(T.children||""),k,K):T.el=M.el},S=(M,T,k,K)=>{[M.el,M.anchor]=g(M.children,T,k,K,M.el,M.anchor)},w=({el:M,anchor:T},k,K)=>{let ee;for(;M&&M!==T;)ee=h(M),i(M,k,K),M=ee;i(T,k,K)},y=({el:M,anchor:T})=>{let k;for(;M&&M!==T;)k=h(M),r(M),M=k;r(T)},A=(M,T,k,K,ee,fe,pe,ne,me)=>{pe=pe||T.type==="svg",M==null?R(T,k,K,ee,fe,pe,ne,me):C(M,T,ee,fe,pe,ne,me)},R=(M,T,k,K,ee,fe,pe,ne)=>{let me,ce;const{type:v,props:x,shapeFlag:D,transition:X,dirs:ie}=M;if(me=M.el=o(M.type,fe,x&&x.is,x),D&8?u(me,M.children):D&16&&b(M.children,me,null,K,ee,fe&&v!=="foreignObject",pe,ne),ie&&zi(M,null,K,"created"),x){for(const Se in x)Se!=="value"&&!Ko(Se)&&s(me,Se,null,x[Se],fe,M.children,K,ee,P);"value"in x&&s(me,"value",null,x.value),(ce=x.onVnodeBeforeMount)&&En(ce,K,M)}O(me,M,M.scopeId,pe,K),ie&&zi(M,null,K,"beforeMount");const he=(!ee||ee&&!ee.pendingBranch)&&X&&!X.persisted;he&&X.beforeEnter(me),i(me,T,k),((ce=x&&x.onVnodeMounted)||he||ie)&&Gt(()=>{ce&&En(ce,K,M),he&&X.enter(me),ie&&zi(M,null,K,"mounted")},ee)},O=(M,T,k,K,ee)=>{if(k&&m(M,k),K)for(let fe=0;fe<K.length;fe++)m(M,K[fe]);if(ee){let fe=ee.subTree;if(T===fe){const pe=ee.vnode;O(M,pe,pe.scopeId,pe.slotScopeIds,ee.parent)}}},b=(M,T,k,K,ee,fe,pe,ne,me=0)=>{for(let ce=me;ce<M.length;ce++){const v=M[ce]=ne?xi(M[ce]):Cn(M[ce]);d(null,v,T,k,K,ee,fe,pe,ne)}},C=(M,T,k,K,ee,fe,pe)=>{const ne=T.el=M.el;let{patchFlag:me,dynamicChildren:ce,dirs:v}=T;me|=M.patchFlag&16;const x=M.props||lt,D=T.props||lt;let X;k&&Ui(k,!1),(X=D.onVnodeBeforeUpdate)&&En(X,k,T,M),v&&zi(T,M,k,"beforeUpdate"),k&&Ui(k,!0);const ie=ee&&T.type!=="foreignObject";if(ce?B(M.dynamicChildren,ce,ne,k,K,ie,fe):pe||se(M,T,ne,null,k,K,ie,fe,!1),me>0){if(me&16)N(ne,T,x,D,k,K,ee);else if(me&2&&x.class!==D.class&&s(ne,"class",null,D.class,ee),me&4&&s(ne,"style",x.style,D.style,ee),me&8){const he=T.dynamicProps;for(let Se=0;Se<he.length;Se++){const W=he[Se],Ce=x[W],we=D[W];(we!==Ce||W==="value")&&s(ne,W,Ce,we,ee,M.children,k,K,P)}}me&1&&M.children!==T.children&&u(ne,T.children)}else!pe&&ce==null&&N(ne,T,x,D,k,K,ee);((X=D.onVnodeUpdated)||v)&&Gt(()=>{X&&En(X,k,T,M),v&&zi(T,M,k,"updated")},K)},B=(M,T,k,K,ee,fe,pe)=>{for(let ne=0;ne<T.length;ne++){const me=M[ne],ce=T[ne],v=me.el&&(me.type===Mt||!Zi(me,ce)||me.shapeFlag&70)?f(me.el):k;d(me,ce,v,null,K,ee,fe,pe,!0)}},N=(M,T,k,K,ee,fe,pe)=>{if(k!==K){if(k!==lt)for(const ne in k)!Ko(ne)&&!(ne in K)&&s(M,ne,k[ne],null,pe,T.children,ee,fe,P);for(const ne in K){if(Ko(ne))continue;const me=K[ne],ce=k[ne];me!==ce&&ne!=="value"&&s(M,ne,ce,me,pe,T.children,ee,fe,P)}"value"in K&&s(M,"value",k.value,K.value)}},z=(M,T,k,K,ee,fe,pe,ne,me)=>{const ce=T.el=M?M.el:a(""),v=T.anchor=M?M.anchor:a("");let{patchFlag:x,dynamicChildren:D,slotScopeIds:X}=T;X&&(ne=ne?ne.concat(X):X),M==null?(i(ce,k,K),i(v,k,K),b(T.children,k,v,ee,fe,pe,ne,me)):x>0&&x&64&&D&&M.dynamicChildren?(B(M.dynamicChildren,D,k,ee,fe,pe,ne),(T.key!=null||ee&&T===ee.subTree)&&_p(M,T,!0)):se(M,T,k,v,ee,fe,pe,ne,me)},ae=(M,T,k,K,ee,fe,pe,ne,me)=>{T.slotScopeIds=ne,M==null?T.shapeFlag&512?ee.ctx.activate(T,k,K,pe,me):I(T,k,K,ee,fe,pe,me):te(M,T,me)},I=(M,T,k,K,ee,fe,pe)=>{const ne=M.component=d_(M,K,ee);if(Uc(M)&&(ne.ctx.renderer=ue),p_(ne),ne.asyncDep){if(ee&&ee.registerDep(ne,$),!M.el){const me=ne.subTree=dt(nn);_(null,me,T,k)}return}$(ne,M,T,k,ee,fe,pe)},te=(M,T,k)=>{const K=T.component=M.component;if(F0(M,T,k))if(K.asyncDep&&!K.asyncResolved){Q(K,T,k);return}else K.next=T,A0(K.update),K.update();else T.el=M.el,K.vnode=T},$=(M,T,k,K,ee,fe,pe)=>{const ne=()=>{if(M.isMounted){let{next:v,bu:x,u:D,parent:X,vnode:ie}=M,he=v,Se;Ui(M,!1),v?(v.el=ie.el,Q(M,v,pe)):v=ie,x&&Ba(x),(Se=v.props&&v.props.onVnodeBeforeUpdate)&&En(Se,X,v,ie),Ui(M,!0);const W=za(M),Ce=M.subTree;M.subTree=W,d(Ce,W,f(Ce.el),U(Ce),M,ee,fe),v.el=W.el,he===null&&O0(M,W.el),D&&Gt(D,ee),(Se=v.props&&v.props.onVnodeUpdated)&&Gt(()=>En(Se,X,v,ie),ee)}else{let v;const{el:x,props:D}=T,{bm:X,m:ie,parent:he}=M,Se=Is(T);if(Ui(M,!1),X&&Ba(X),!Se&&(v=D&&D.onVnodeBeforeMount)&&En(v,he,T),Ui(M,!0),x&&xe){const W=()=>{M.subTree=za(M),xe(x,M.subTree,M,ee,null)};Se?T.type.__asyncLoader().then(()=>!M.isUnmounted&&W()):W()}else{const W=M.subTree=za(M);d(null,W,k,K,M,ee,fe),T.el=W.el}if(ie&&Gt(ie,ee),!Se&&(v=D&&D.onVnodeMounted)){const W=T;Gt(()=>En(v,he,W),ee)}(T.shapeFlag&256||he&&Is(he.vnode)&&he.vnode.shapeFlag&256)&&M.a&&Gt(M.a,ee),M.isMounted=!0,T=k=K=null}},me=M.effect=new Pc(ne,()=>zc(ce),M.scope),ce=M.update=()=>me.run();ce.id=M.uid,Ui(M,!0),ce()},Q=(M,T,k)=>{T.component=M;const K=M.vnode.props;M.vnode=T,M.next=null,Z0(M,T.props,K,k),t_(M,T.children,k),io(),Ru(),ro()},se=(M,T,k,K,ee,fe,pe,ne,me=!1)=>{const ce=M&&M.children,v=M?M.shapeFlag:0,x=T.children,{patchFlag:D,shapeFlag:X}=T;if(D>0){if(D&128){J(ce,x,k,K,ee,fe,pe,ne,me);return}else if(D&256){j(ce,x,k,K,ee,fe,pe,ne,me);return}}X&8?(v&16&&P(ce,ee,fe),x!==ce&&u(k,x)):v&16?X&16?J(ce,x,k,K,ee,fe,pe,ne,me):P(ce,ee,fe,!0):(v&8&&u(k,""),X&16&&b(x,k,K,ee,fe,pe,ne,me))},j=(M,T,k,K,ee,fe,pe,ne,me)=>{M=M||Wr,T=T||Wr;const ce=M.length,v=T.length,x=Math.min(ce,v);let D;for(D=0;D<x;D++){const X=T[D]=me?xi(T[D]):Cn(T[D]);d(M[D],X,k,null,ee,fe,pe,ne,me)}ce>v?P(M,ee,fe,!0,!1,x):b(T,k,K,ee,fe,pe,ne,me,x)},J=(M,T,k,K,ee,fe,pe,ne,me)=>{let ce=0;const v=T.length;let x=M.length-1,D=v-1;for(;ce<=x&&ce<=D;){const X=M[ce],ie=T[ce]=me?xi(T[ce]):Cn(T[ce]);if(Zi(X,ie))d(X,ie,k,null,ee,fe,pe,ne,me);else break;ce++}for(;ce<=x&&ce<=D;){const X=M[x],ie=T[D]=me?xi(T[D]):Cn(T[D]);if(Zi(X,ie))d(X,ie,k,null,ee,fe,pe,ne,me);else break;x--,D--}if(ce>x){if(ce<=D){const X=D+1,ie=X<v?T[X].el:K;for(;ce<=D;)d(null,T[ce]=me?xi(T[ce]):Cn(T[ce]),k,ie,ee,fe,pe,ne,me),ce++}}else if(ce>D)for(;ce<=x;)re(M[ce],ee,fe,!0),ce++;else{const X=ce,ie=ce,he=new Map;for(ce=ie;ce<=D;ce++){const de=T[ce]=me?xi(T[ce]):Cn(T[ce]);de.key!=null&&he.set(de.key,ce)}let Se,W=0;const Ce=D-ie+1;let we=!1,Ee=0;const L=new Array(Ce);for(ce=0;ce<Ce;ce++)L[ce]=0;for(ce=X;ce<=x;ce++){const de=M[ce];if(W>=Ce){re(de,ee,fe,!0);continue}let Re;if(de.key!=null)Re=he.get(de.key);else for(Se=ie;Se<=D;Se++)if(L[Se-ie]===0&&Zi(de,T[Se])){Re=Se;break}Re===void 0?re(de,ee,fe,!0):(L[Re-ie]=ce+1,Re>=Ee?Ee=Re:we=!0,d(de,T[Re],k,null,ee,fe,pe,ne,me),W++)}const be=we?o_(L):Wr;for(Se=be.length-1,ce=Ce-1;ce>=0;ce--){const de=ie+ce,Re=T[de],Ae=de+1<v?T[de+1].el:K;L[ce]===0?d(null,Re,k,Ae,ee,fe,pe,ne,me):we&&(Se<0||ce!==be[Se]?ge(Re,k,Ae,2):Se--)}}},ge=(M,T,k,K,ee=null)=>{const{el:fe,type:pe,transition:ne,children:me,shapeFlag:ce}=M;if(ce&6){ge(M.component.subTree,T,k,K);return}if(ce&128){M.suspense.move(T,k,K);return}if(ce&64){pe.move(M,T,k,ue);return}if(pe===Mt){i(fe,T,k);for(let x=0;x<me.length;x++)ge(me[x],T,k,K);i(M.anchor,T,k);return}if(pe===Va){w(M,T,k);return}if(K!==2&&ce&1&&ne)if(K===0)ne.beforeEnter(fe),i(fe,T,k),Gt(()=>ne.enter(fe),ee);else{const{leave:x,delayLeave:D,afterLeave:X}=ne,ie=()=>i(fe,T,k),he=()=>{x(fe,()=>{ie(),X&&X()})};D?D(fe,ie,he):he()}else i(fe,T,k)},re=(M,T,k,K=!1,ee=!1)=>{const{type:fe,props:pe,ref:ne,children:me,dynamicChildren:ce,shapeFlag:v,patchFlag:x,dirs:D}=M;if(ne!=null&&Wl(ne,null,k,M,!0),v&256){T.ctx.deactivate(M);return}const X=v&1&&D,ie=!Is(M);let he;if(ie&&(he=pe&&pe.onVnodeBeforeUnmount)&&En(he,T,M),v&6)F(M.component,k,K);else{if(v&128){M.suspense.unmount(k,K);return}X&&zi(M,null,T,"beforeUnmount"),v&64?M.type.remove(M,T,k,ee,ue,K):ce&&(fe!==Mt||x>0&&x&64)?P(ce,T,k,!1,!0):(fe===Mt&&x&384||!ee&&v&16)&&P(me,T,k),K&&_e(M)}(ie&&(he=pe&&pe.onVnodeUnmounted)||X)&&Gt(()=>{he&&En(he,T,M),X&&zi(M,null,T,"unmounted")},k)},_e=M=>{const{type:T,el:k,anchor:K,transition:ee}=M;if(T===Mt){Te(k,K);return}if(T===Va){y(M);return}const fe=()=>{r(k),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(M.shapeFlag&1&&ee&&!ee.persisted){const{leave:pe,delayLeave:ne}=ee,me=()=>pe(k,fe);ne?ne(M.el,fe,me):me()}else fe()},Te=(M,T)=>{let k;for(;M!==T;)k=h(M),r(M),M=k;r(T)},F=(M,T,k)=>{const{bum:K,scope:ee,update:fe,subTree:pe,um:ne}=M;K&&Ba(K),ee.stop(),fe&&(fe.active=!1,re(pe,M,T,k)),ne&&Gt(ne,T),Gt(()=>{M.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},P=(M,T,k,K=!1,ee=!1,fe=0)=>{for(let pe=fe;pe<M.length;pe++)re(M[pe],T,k,K,ee)},U=M=>M.shapeFlag&6?U(M.component.subTree):M.shapeFlag&128?M.suspense.next():h(M.anchor||M.el),Y=(M,T,k)=>{M==null?T._vnode&&re(T._vnode,null,null,!0):d(T._vnode||null,M,T,null,null,null,k),Ru(),rp(),T._vnode=M},ue={p:d,um:re,m:ge,r:_e,mt:I,mc:b,pc:se,pbc:B,n:U,o:n};let oe,xe;return e&&([oe,xe]=e(ue)),{render:Y,hydrate:oe,createApp:i_(Y,oe)}}function Ui({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function _p(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=xi(r[s]),a.el=o.el),t||_p(o,a)),a.type===so&&(a.el=o.el)}}function o_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const a_=n=>n.__isTeleport,Mt=Symbol(void 0),so=Symbol(void 0),nn=Symbol(void 0),Va=Symbol(void 0),Os=[];let pn=null;function Le(n=!1){Os.push(pn=n?null:[])}function l_(){Os.pop(),pn=Os[Os.length-1]||null}let js=1;function Uu(n){js+=n}function vp(n){return n.dynamicChildren=js>0?pn||Wr:null,l_(),js>0&&pn&&pn.push(n),n}function Ye(n,e,t,i,r,s){return vp(ot(n,e,t,i,r,s,!0))}function ft(n,e,t,i,r){return vp(dt(n,e,t,i,r,!0))}function Zr(n){return n?n.__v_isVNode===!0:!1}function Zi(n,e){return n.type===e.type&&n.key===e.key}const ba="__vInternal",xp=({key:n})=>n!=null?n:null,Zo=({ref:n,ref_key:e,ref_for:t})=>n!=null?tt(n)||Pt(n)||$e(n)?{i:Tt,r:n,k:e,f:!!t}:n:null;function ot(n,e=null,t=null,i=0,r=null,s=n===Mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xp(e),ref:e&&Zo(e),scopeId:xa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Gc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=tt(t)?8:16),js>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const dt=c_;function c_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===up)&&(n=nn),Zr(n)){const a=Di(n,e,!0);return t&&Gc(a,t),js>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag|=-2,a}if(v_(n)&&(n=n.__vccOpts),e){e=u_(e);let{class:a,style:l}=e;a&&!tt(a)&&(e.class=ke(a)),it(l)&&(Xd(l)&&!Fe(l)&&(l=Ut({},l)),e.style=Un(l))}const o=tt(n)?1:N0(n)?128:a_(n)?64:it(n)?4:$e(n)?2:0;return ot(n,e,t,i,r,o,s,!0)}function u_(n){return n?Xd(n)||ba in n?Ut({},n):n:null}function Di(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Ns(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&xp(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(Zo(e)):[r,Zo(e)]:Zo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Mt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Di(n.ssContent),ssFallback:n.ssFallback&&Di(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function yp(n=" ",e=0){return dt(so,null,n,e)}function st(n="",e=!1){return e?(Le(),ft(nn,null,n)):dt(nn,null,n)}function Cn(n){return n==null||typeof n=="boolean"?dt(nn):Fe(n)?dt(Mt,null,n.slice()):typeof n=="object"?xi(n):dt(so,null,String(n))}function xi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Di(n)}function Gc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Gc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ba in e)?e._ctx=Tt:r===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Tt},t=32):(e=String(e),i&64?(t=16,e=[yp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ns(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ke([e.class,i.class]));else if(r==="style")e.style=Un([e.style,i.style]);else if(ha(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function En(n,e,t,i=null){gn(n,e,7,[t,i])}const f_=gp();let h_=0;function d_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||f_,s={uid:h_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J0(i,r),emitsOptions:P0(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=L0.bind(null,s),n.ce&&n.ce(s),s}let Bt=null;const Oi=()=>Bt||Tt,Wc=n=>{Bt=n,n.scope.on()},Bs=()=>{Bt&&Bt.scope.off(),Bt=null};function bp(n){return n.vnode.shapeFlag&4}let Xs=!1;function p_(n,e=!1){Xs=e;const{props:t,children:i}=n.vnode,r=bp(n);Y0(n,t,r,e),e_(n,i);const s=r?m_(n,e):void 0;return Xs=!1,s}function m_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Kd(new Proxy(n.ctx,$0));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Sp(n):null;Wc(n),io();const s=Ai(i,n,0,[n.props,r]);if(ro(),Bs(),Id(s)){if(s.then(Bs,Bs),e)return s.then(o=>{ku(n,o,e)}).catch(o=>{_a(o,n,0)});n.asyncDep=s}else ku(n,s,e)}else Mp(n,e)}function ku(n,e,t){$e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:it(e)&&(n.setupState=Qd(e)),Mp(n,t)}let Vu;function Mp(n,e,t){const i=n.type;if(!n.render){if(!e&&Vu&&!i.render){const r=i.template||q0(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ut(Ut({isCustomElement:s,delimiters:a},o),l);i.render=Vu(r,c)}}n.render=i.render||Nn}}function g_(n){return new Proxy(n.attrs,{get(e,t){return Zt(n,"get","$attrs"),e[t]}})}function Sp(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=g_(n))},slots:n.slots,emit:n.emit,expose:e}}function Ma(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Qd(Kd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](n)},has(e,t){return t in e||t in Fs}}))}function __(n,e=!0){return $e(n)?n.displayName||n.name:n.name||e&&n.__name}function v_(n){return $e(n)&&"__vccOpts"in n}const ye=(n,e)=>S0(n,e,Xs);function $c(){return wp().slots}function x_(){return wp().attrs}function wp(){const n=Oi();return n.setupContext||(n.setupContext=Sp(n))}function qc(n,e,t){const i=arguments.length;return i===2?it(e)&&!Fe(e)?Zr(e)?dt(n,null,[e]):dt(n,e):dt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Zr(t)&&(t=[t]),dt(n,e,t))}const y_=Symbol(""),b_=()=>xt(y_),M_="3.2.45",S_="http://www.w3.org/2000/svg",Ji=typeof document!="undefined"?document:null,Hu=Ji&&Ji.createElement("template"),w_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Ji.createElementNS(S_,n):Ji.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ji.createTextNode(n),createComment:n=>Ji.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ji.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Hu.innerHTML=i?`<svg>${n}</svg>`:n;const a=Hu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function E_(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function T_(n,e,t){const i=n.style,r=tt(t);if(t&&!r){for(const s in t)$l(i,s,t[s]);if(e&&!tt(e))for(const s in e)t[s]==null&&$l(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Gu=/\s*!important$/;function $l(n,e,t){if(Fe(t))t.forEach(i=>$l(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=A_(n,e);Gu.test(t)?n.setProperty(as(i),t.replace(Gu,""),"important"):n[i]=t}}const Wu=["Webkit","Moz","ms"],Ha={};function A_(n,e){const t=Ha[e];if(t)return t;let i=kn(e);if(i!=="filter"&&i in n)return Ha[e]=i;i=ma(i);for(let r=0;r<Wu.length;r++){const s=Wu[r]+i;if(s in n)return Ha[e]=s}return e}const $u="http://www.w3.org/1999/xlink";function C_(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS($u,e.slice(6,e.length)):n.setAttributeNS($u,e,t);else{const s=Ng(e);t==null||s&&!Rd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function R_(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t==null?"":t;return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t==null?"":t;(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Rd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function L_(n,e,t,i){n.addEventListener(e,t,i)}function P_(n,e,t,i){n.removeEventListener(e,t,i)}function D_(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=I_(e);if(i){const c=s[e]=N_(i,r);L_(n,a,c,l)}else o&&(P_(n,a,o,l),s[e]=void 0)}}const qu=/(?:Once|Passive|Capture)$/;function I_(n){let e;if(qu.test(n)){e={};let i;for(;i=n.match(qu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):as(n.slice(2)),e]}let Ga=0;const F_=Promise.resolve(),O_=()=>Ga||(F_.then(()=>Ga=0),Ga=Date.now());function N_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;gn(B_(i,t.value),e,5,[i])};return t.value=n,t.attached=O_(),t}function B_(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ju=/^on[a-z]/,z_=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?E_(n,i,r):e==="style"?T_(n,t,i):ha(e)?Tc(e)||D_(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U_(n,e,i,r))?R_(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),C_(n,e,i,r))};function U_(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&ju.test(e)&&$e(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||ju.test(e)&&tt(t)?!1:e in n}const li="transition",ys="animation",oo=(n,{slots:e})=>qc(op,k_(n),e);oo.displayName="Transition";const Ep={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};oo.props=Ut({},op.props,Ep);const ki=(n,e=[])=>{Fe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Xu=n=>n?Fe(n)?n.some(e=>e.length>1):n.length>1:!1;function k_(n){const e={};for(const z in n)z in Ep||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=V_(r),d=g&&g[0],p=g&&g[1],{onBeforeEnter:_,onEnter:S,onEnterCancelled:w,onLeave:y,onLeaveCancelled:A,onBeforeAppear:R=_,onAppear:O=S,onAppearCancelled:b=w}=e,C=(z,ae,I)=>{Vi(z,ae?u:a),Vi(z,ae?c:o),I&&I()},B=(z,ae)=>{z._isLeaving=!1,Vi(z,f),Vi(z,m),Vi(z,h),ae&&ae()},N=z=>(ae,I)=>{const te=z?O:S,$=()=>C(ae,z,I);ki(te,[ae,$]),Ku(()=>{Vi(ae,z?l:s),ci(ae,z?u:a),Xu(te)||Yu(ae,i,d,$)})};return Ut(e,{onBeforeEnter(z){ki(_,[z]),ci(z,s),ci(z,o)},onBeforeAppear(z){ki(R,[z]),ci(z,l),ci(z,c)},onEnter:N(!1),onAppear:N(!0),onLeave(z,ae){z._isLeaving=!0;const I=()=>B(z,ae);ci(z,f),W_(),ci(z,h),Ku(()=>{!z._isLeaving||(Vi(z,f),ci(z,m),Xu(y)||Yu(z,i,p,I))}),ki(y,[z,I])},onEnterCancelled(z){C(z,!1),ki(w,[z])},onAppearCancelled(z){C(z,!0),ki(b,[z])},onLeaveCancelled(z){B(z),ki(A,[z])}})}function V_(n){if(n==null)return null;if(it(n))return[Wa(n.enter),Wa(n.leave)];{const e=Wa(n);return[e,e]}}function Wa(n){return Rc(n)}function ci(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function Vi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function Ku(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let H_=0;function Yu(n,e,t,i){const r=n._endId=++H_,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=G_(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function G_(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${li}Delay`),s=i(`${li}Duration`),o=Zu(r,s),a=i(`${ys}Delay`),l=i(`${ys}Duration`),c=Zu(a,l);let u=null,f=0,h=0;e===li?o>0&&(u=li,f=o,h=s.length):e===ys?c>0&&(u=ys,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?li:ys:null,h=u?u===li?s.length:l.length:0);const m=u===li&&/\b(transform|all)(,|$)/.test(i(`${li}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function Zu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ju(t)+Ju(n[i])))}function Ju(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function W_(){return document.body.offsetHeight}const $_=["ctrl","shift","alt","meta"],q_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>$_.some(t=>n[`${t}Key`]&&!e.includes(t))},Tp=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=q_[e[r]];if(s&&s(t,e))return}return n(t,...i)},jc={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):bs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),bs(n,!0),i.enter(n)):i.leave(n,()=>{bs(n,!1)}):bs(n,e))},beforeUnmount(n,{value:e}){bs(n,e)}};function bs(n,e){n.style.display=e?n._vod:"none"}const j_=Ut({patchProp:z_},w_);let Qu;function Ap(){return Qu||(Qu=r_(j_))}const ef=(...n)=>{Ap().render(...n)},lP=(...n)=>{const e=Ap().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=X_(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function X_(n){return tt(n)?document.querySelector(n):n}var K_=typeof global=="object"&&global&&global.Object===Object&&global,Cp=K_,Y_=typeof self=="object"&&self&&self.Object===Object&&self,Z_=Cp||Y_||Function("return this")(),Hn=Z_,J_=Hn.Symbol,Ii=J_,Rp=Object.prototype,Q_=Rp.hasOwnProperty,ev=Rp.toString,Ms=Ii?Ii.toStringTag:void 0;function tv(n){var e=Q_.call(n,Ms),t=n[Ms];try{n[Ms]=void 0;var i=!0}catch{}var r=ev.call(n);return i&&(e?n[Ms]=t:delete n[Ms]),r}var nv=Object.prototype,iv=nv.toString;function rv(n){return iv.call(n)}var sv="[object Null]",ov="[object Undefined]",tf=Ii?Ii.toStringTag:void 0;function ls(n){return n==null?n===void 0?ov:sv:tf&&tf in Object(n)?tv(n):rv(n)}function cs(n){return n!=null&&typeof n=="object"}var av="[object Symbol]";function Xc(n){return typeof n=="symbol"||cs(n)&&ls(n)==av}function lv(n,e){for(var t=-1,i=n==null?0:n.length,r=Array(i);++t<i;)r[t]=e(n[t],t,n);return r}var cv=Array.isArray,_r=cv,uv=1/0,nf=Ii?Ii.prototype:void 0,rf=nf?nf.toString:void 0;function Lp(n){if(typeof n=="string")return n;if(_r(n))return lv(n,Lp)+"";if(Xc(n))return rf?rf.call(n):"";var e=n+"";return e=="0"&&1/n==-uv?"-0":e}function fr(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var fv="[object AsyncFunction]",hv="[object Function]",dv="[object GeneratorFunction]",pv="[object Proxy]";function Pp(n){if(!fr(n))return!1;var e=ls(n);return e==hv||e==dv||e==fv||e==pv}var mv=Hn["__core-js_shared__"],$a=mv,sf=function(){var n=/[^.]+$/.exec($a&&$a.keys&&$a.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function gv(n){return!!sf&&sf in n}var _v=Function.prototype,vv=_v.toString;function vr(n){if(n!=null){try{return vv.call(n)}catch{}try{return n+""}catch{}}return""}var xv=/[\\^$.*+?()[\]{}|]/g,yv=/^\[object .+?Constructor\]$/,bv=Function.prototype,Mv=Object.prototype,Sv=bv.toString,wv=Mv.hasOwnProperty,Ev=RegExp("^"+Sv.call(wv).replace(xv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Tv(n){if(!fr(n)||gv(n))return!1;var e=Pp(n)?Ev:yv;return e.test(vr(n))}function Av(n,e){return n==null?void 0:n[e]}function xr(n,e){var t=Av(n,e);return Tv(t)?t:void 0}var Cv=xr(Hn,"WeakMap"),ql=Cv,of=Object.create,Rv=function(){function n(){}return function(e){if(!fr(e))return{};if(of)return of(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}(),Lv=Rv;function Pv(n,e){var t=-1,i=n.length;for(e||(e=Array(i));++t<i;)e[t]=n[t];return e}var Dv=function(){try{var n=xr(Object,"defineProperty");return n({},"",{}),n}catch{}}(),af=Dv;function Iv(n,e){for(var t=-1,i=n==null?0:n.length;++t<i&&e(n[t],t,n)!==!1;);return n}var Fv=9007199254740991,Ov=/^(?:0|[1-9]\d*)$/;function Dp(n,e){var t=typeof n;return e=e==null?Fv:e,!!e&&(t=="number"||t!="symbol"&&Ov.test(n))&&n>-1&&n%1==0&&n<e}function Ip(n,e,t){e=="__proto__"&&af?af(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Fp(n,e){return n===e||n!==n&&e!==e}var Nv=Object.prototype,Bv=Nv.hasOwnProperty;function Kc(n,e,t){var i=n[e];(!(Bv.call(n,e)&&Fp(i,t))||t===void 0&&!(e in n))&&Ip(n,e,t)}function Sa(n,e,t,i){var r=!t;t||(t={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=i?i(t[a],n[a],a,t,n):void 0;l===void 0&&(l=n[a]),r?Ip(t,a,l):Kc(t,a,l)}return t}var zv=9007199254740991;function Op(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=zv}function Np(n){return n!=null&&Op(n.length)&&!Pp(n)}var Uv=Object.prototype;function Yc(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Uv;return n===t}function kv(n,e){for(var t=-1,i=Array(n);++t<n;)i[t]=e(t);return i}var Vv="[object Arguments]";function lf(n){return cs(n)&&ls(n)==Vv}var Bp=Object.prototype,Hv=Bp.hasOwnProperty,Gv=Bp.propertyIsEnumerable,Wv=lf(function(){return arguments}())?lf:function(n){return cs(n)&&Hv.call(n,"callee")&&!Gv.call(n,"callee")},$v=Wv;function qv(){return!1}var zp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,cf=zp&&typeof module=="object"&&module&&!module.nodeType&&module,jv=cf&&cf.exports===zp,uf=jv?Hn.Buffer:void 0,Xv=uf?uf.isBuffer:void 0,Kv=Xv||qv,Up=Kv,Yv="[object Arguments]",Zv="[object Array]",Jv="[object Boolean]",Qv="[object Date]",ex="[object Error]",tx="[object Function]",nx="[object Map]",ix="[object Number]",rx="[object Object]",sx="[object RegExp]",ox="[object Set]",ax="[object String]",lx="[object WeakMap]",cx="[object ArrayBuffer]",ux="[object DataView]",fx="[object Float32Array]",hx="[object Float64Array]",dx="[object Int8Array]",px="[object Int16Array]",mx="[object Int32Array]",gx="[object Uint8Array]",_x="[object Uint8ClampedArray]",vx="[object Uint16Array]",xx="[object Uint32Array]",at={};at[fx]=at[hx]=at[dx]=at[px]=at[mx]=at[gx]=at[_x]=at[vx]=at[xx]=!0;at[Yv]=at[Zv]=at[cx]=at[Jv]=at[ux]=at[Qv]=at[ex]=at[tx]=at[nx]=at[ix]=at[rx]=at[sx]=at[ox]=at[ax]=at[lx]=!1;function yx(n){return cs(n)&&Op(n.length)&&!!at[ls(n)]}function Zc(n){return function(e){return n(e)}}var kp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,zs=kp&&typeof module=="object"&&module&&!module.nodeType&&module,bx=zs&&zs.exports===kp,qa=bx&&Cp.process,Mx=function(){try{var n=zs&&zs.require&&zs.require("util").types;return n||qa&&qa.binding&&qa.binding("util")}catch{}}(),Jr=Mx,ff=Jr&&Jr.isTypedArray,Sx=ff?Zc(ff):yx,wx=Sx,Ex=Object.prototype,Tx=Ex.hasOwnProperty;function Vp(n,e){var t=_r(n),i=!t&&$v(n),r=!t&&!i&&Up(n),s=!t&&!i&&!r&&wx(n),o=t||i||r||s,a=o?kv(n.length,String):[],l=a.length;for(var c in n)(e||Tx.call(n,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Dp(c,l)))&&a.push(c);return a}function Hp(n,e){return function(t){return n(e(t))}}var Ax=Hp(Object.keys,Object),Cx=Ax,Rx=Object.prototype,Lx=Rx.hasOwnProperty;function Px(n){if(!Yc(n))return Cx(n);var e=[];for(var t in Object(n))Lx.call(n,t)&&t!="constructor"&&e.push(t);return e}function Jc(n){return Np(n)?Vp(n):Px(n)}function Dx(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var Ix=Object.prototype,Fx=Ix.hasOwnProperty;function Ox(n){if(!fr(n))return Dx(n);var e=Yc(n),t=[];for(var i in n)i=="constructor"&&(e||!Fx.call(n,i))||t.push(i);return t}function Qc(n){return Np(n)?Vp(n,!0):Ox(n)}var Nx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Bx=/^\w*$/;function zx(n,e){if(_r(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Xc(n)?!0:Bx.test(n)||!Nx.test(n)||e!=null&&n in Object(e)}var Ux=xr(Object,"create"),Ks=Ux;function kx(){this.__data__=Ks?Ks(null):{},this.size=0}function Vx(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Hx="__lodash_hash_undefined__",Gx=Object.prototype,Wx=Gx.hasOwnProperty;function $x(n){var e=this.__data__;if(Ks){var t=e[n];return t===Hx?void 0:t}return Wx.call(e,n)?e[n]:void 0}var qx=Object.prototype,jx=qx.hasOwnProperty;function Xx(n){var e=this.__data__;return Ks?e[n]!==void 0:jx.call(e,n)}var Kx="__lodash_hash_undefined__";function Yx(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=Ks&&e===void 0?Kx:e,this}function hr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}hr.prototype.clear=kx;hr.prototype.delete=Vx;hr.prototype.get=$x;hr.prototype.has=Xx;hr.prototype.set=Yx;function Zx(){this.__data__=[],this.size=0}function wa(n,e){for(var t=n.length;t--;)if(Fp(n[t][0],e))return t;return-1}var Jx=Array.prototype,Qx=Jx.splice;function ey(n){var e=this.__data__,t=wa(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Qx.call(e,t,1),--this.size,!0}function ty(n){var e=this.__data__,t=wa(e,n);return t<0?void 0:e[t][1]}function ny(n){return wa(this.__data__,n)>-1}function iy(n,e){var t=this.__data__,i=wa(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function si(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}si.prototype.clear=Zx;si.prototype.delete=ey;si.prototype.get=ty;si.prototype.has=ny;si.prototype.set=iy;var ry=xr(Hn,"Map"),Ys=ry;function sy(){this.size=0,this.__data__={hash:new hr,map:new(Ys||si),string:new hr}}function oy(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Ea(n,e){var t=n.__data__;return oy(e)?t[typeof e=="string"?"string":"hash"]:t.map}function ay(n){var e=Ea(this,n).delete(n);return this.size-=e?1:0,e}function ly(n){return Ea(this,n).get(n)}function cy(n){return Ea(this,n).has(n)}function uy(n,e){var t=Ea(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function Ni(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Ni.prototype.clear=sy;Ni.prototype.delete=ay;Ni.prototype.get=ly;Ni.prototype.has=cy;Ni.prototype.set=uy;var fy="Expected a function";function eu(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(fy);var t=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=t.cache;if(s.has(r))return s.get(r);var o=n.apply(this,i);return t.cache=s.set(r,o)||s,o};return t.cache=new(eu.Cache||Ni),t}eu.Cache=Ni;var hy=500;function dy(n){var e=eu(n,function(i){return t.size===hy&&t.clear(),i}),t=e.cache;return e}var py=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,my=/\\(\\)?/g,gy=dy(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(py,function(t,i,r,s){e.push(r?s.replace(my,"$1"):i||t)}),e}),_y=gy;function vy(n){return n==null?"":Lp(n)}function Gp(n,e){return _r(n)?n:zx(n,e)?[n]:_y(vy(n))}var xy=1/0;function Wp(n){if(typeof n=="string"||Xc(n))return n;var e=n+"";return e=="0"&&1/n==-xy?"-0":e}function yy(n,e){e=Gp(e,n);for(var t=0,i=e.length;n!=null&&t<i;)n=n[Wp(e[t++])];return t&&t==i?n:void 0}function by(n,e,t){var i=n==null?void 0:yy(n,e);return i===void 0?t:i}function $p(n,e){for(var t=-1,i=e.length,r=n.length;++t<i;)n[r+t]=e[t];return n}var My=Hp(Object.getPrototypeOf,Object),qp=My;function jl(){if(!arguments.length)return[];var n=arguments[0];return _r(n)?n:[n]}function Sy(){this.__data__=new si,this.size=0}function wy(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function Ey(n){return this.__data__.get(n)}function Ty(n){return this.__data__.has(n)}var Ay=200;function Cy(n,e){var t=this.__data__;if(t instanceof si){var i=t.__data__;if(!Ys||i.length<Ay-1)return i.push([n,e]),this.size=++t.size,this;t=this.__data__=new Ni(i)}return t.set(n,e),this.size=t.size,this}function us(n){var e=this.__data__=new si(n);this.size=e.size}us.prototype.clear=Sy;us.prototype.delete=wy;us.prototype.get=Ey;us.prototype.has=Ty;us.prototype.set=Cy;function Ry(n,e){return n&&Sa(e,Jc(e),n)}function Ly(n,e){return n&&Sa(e,Qc(e),n)}var jp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,hf=jp&&typeof module=="object"&&module&&!module.nodeType&&module,Py=hf&&hf.exports===jp,df=Py?Hn.Buffer:void 0,pf=df?df.allocUnsafe:void 0;function Dy(n,e){if(e)return n.slice();var t=n.length,i=pf?pf(t):new n.constructor(t);return n.copy(i),i}function Iy(n,e){for(var t=-1,i=n==null?0:n.length,r=0,s=[];++t<i;){var o=n[t];e(o,t,n)&&(s[r++]=o)}return s}function Xp(){return[]}var Fy=Object.prototype,Oy=Fy.propertyIsEnumerable,mf=Object.getOwnPropertySymbols,Ny=mf?function(n){return n==null?[]:(n=Object(n),Iy(mf(n),function(e){return Oy.call(n,e)}))}:Xp,tu=Ny;function By(n,e){return Sa(n,tu(n),e)}var zy=Object.getOwnPropertySymbols,Uy=zy?function(n){for(var e=[];n;)$p(e,tu(n)),n=qp(n);return e}:Xp,Kp=Uy;function ky(n,e){return Sa(n,Kp(n),e)}function Yp(n,e,t){var i=e(n);return _r(n)?i:$p(i,t(n))}function Vy(n){return Yp(n,Jc,tu)}function Hy(n){return Yp(n,Qc,Kp)}var Gy=xr(Hn,"DataView"),Xl=Gy,Wy=xr(Hn,"Promise"),Kl=Wy,$y=xr(Hn,"Set"),Yl=$y,gf="[object Map]",qy="[object Object]",_f="[object Promise]",vf="[object Set]",xf="[object WeakMap]",yf="[object DataView]",jy=vr(Xl),Xy=vr(Ys),Ky=vr(Kl),Yy=vr(Yl),Zy=vr(ql),ji=ls;(Xl&&ji(new Xl(new ArrayBuffer(1)))!=yf||Ys&&ji(new Ys)!=gf||Kl&&ji(Kl.resolve())!=_f||Yl&&ji(new Yl)!=vf||ql&&ji(new ql)!=xf)&&(ji=function(n){var e=ls(n),t=e==qy?n.constructor:void 0,i=t?vr(t):"";if(i)switch(i){case jy:return yf;case Xy:return gf;case Ky:return _f;case Yy:return vf;case Zy:return xf}return e});var nu=ji,Jy=Object.prototype,Qy=Jy.hasOwnProperty;function eb(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&Qy.call(n,"index")&&(t.index=n.index,t.input=n.input),t}var tb=Hn.Uint8Array,bf=tb;function iu(n){var e=new n.constructor(n.byteLength);return new bf(e).set(new bf(n)),e}function nb(n,e){var t=e?iu(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}var ib=/\w*$/;function rb(n){var e=new n.constructor(n.source,ib.exec(n));return e.lastIndex=n.lastIndex,e}var Mf=Ii?Ii.prototype:void 0,Sf=Mf?Mf.valueOf:void 0;function sb(n){return Sf?Object(Sf.call(n)):{}}function ob(n,e){var t=e?iu(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}var ab="[object Boolean]",lb="[object Date]",cb="[object Map]",ub="[object Number]",fb="[object RegExp]",hb="[object Set]",db="[object String]",pb="[object Symbol]",mb="[object ArrayBuffer]",gb="[object DataView]",_b="[object Float32Array]",vb="[object Float64Array]",xb="[object Int8Array]",yb="[object Int16Array]",bb="[object Int32Array]",Mb="[object Uint8Array]",Sb="[object Uint8ClampedArray]",wb="[object Uint16Array]",Eb="[object Uint32Array]";function Tb(n,e,t){var i=n.constructor;switch(e){case mb:return iu(n);case ab:case lb:return new i(+n);case gb:return nb(n,t);case _b:case vb:case xb:case yb:case bb:case Mb:case Sb:case wb:case Eb:return ob(n,t);case cb:return new i;case ub:case db:return new i(n);case fb:return rb(n);case hb:return new i;case pb:return sb(n)}}function Ab(n){return typeof n.constructor=="function"&&!Yc(n)?Lv(qp(n)):{}}var Cb="[object Map]";function Rb(n){return cs(n)&&nu(n)==Cb}var wf=Jr&&Jr.isMap,Lb=wf?Zc(wf):Rb,Pb=Lb,Db="[object Set]";function Ib(n){return cs(n)&&nu(n)==Db}var Ef=Jr&&Jr.isSet,Fb=Ef?Zc(Ef):Ib,Ob=Fb,Nb=1,Bb=2,zb=4,Zp="[object Arguments]",Ub="[object Array]",kb="[object Boolean]",Vb="[object Date]",Hb="[object Error]",Jp="[object Function]",Gb="[object GeneratorFunction]",Wb="[object Map]",$b="[object Number]",Qp="[object Object]",qb="[object RegExp]",jb="[object Set]",Xb="[object String]",Kb="[object Symbol]",Yb="[object WeakMap]",Zb="[object ArrayBuffer]",Jb="[object DataView]",Qb="[object Float32Array]",eM="[object Float64Array]",tM="[object Int8Array]",nM="[object Int16Array]",iM="[object Int32Array]",rM="[object Uint8Array]",sM="[object Uint8ClampedArray]",oM="[object Uint16Array]",aM="[object Uint32Array]",rt={};rt[Zp]=rt[Ub]=rt[Zb]=rt[Jb]=rt[kb]=rt[Vb]=rt[Qb]=rt[eM]=rt[tM]=rt[nM]=rt[iM]=rt[Wb]=rt[$b]=rt[Qp]=rt[qb]=rt[jb]=rt[Xb]=rt[Kb]=rt[rM]=rt[sM]=rt[oM]=rt[aM]=!0;rt[Hb]=rt[Jp]=rt[Yb]=!1;function Jo(n,e,t,i,r,s){var o,a=e&Nb,l=e&Bb,c=e&zb;if(t&&(o=r?t(n,i,r,s):t(n)),o!==void 0)return o;if(!fr(n))return n;var u=_r(n);if(u){if(o=eb(n),!a)return Pv(n,o)}else{var f=nu(n),h=f==Jp||f==Gb;if(Up(n))return Dy(n,a);if(f==Qp||f==Zp||h&&!r){if(o=l||h?{}:Ab(n),!a)return l?ky(n,Ly(o,n)):By(n,Ry(o,n))}else{if(!rt[f])return r?n:{};o=Tb(n,f,a)}}s||(s=new us);var m=s.get(n);if(m)return m;s.set(n,o),Ob(n)?n.forEach(function(p){o.add(Jo(p,e,t,p,n,s))}):Pb(n)&&n.forEach(function(p,_){o.set(_,Jo(p,e,t,_,n,s))});var g=c?l?Hy:Vy:l?Qc:Jc,d=u?void 0:g(n);return Iv(d||n,function(p,_){d&&(_=p,p=n[_]),Kc(o,_,Jo(p,e,t,_,n,s))}),o}var lM=4;function Tf(n){return Jo(n,lM)}function em(n){for(var e=-1,t=n==null?0:n.length,i={};++e<t;){var r=n[e];i[r[0]]=r[1]}return i}function cM(n){return n==null}function uM(n,e,t,i){if(!fr(n))return n;e=Gp(e,n);for(var r=-1,s=e.length,o=s-1,a=n;a!=null&&++r<s;){var l=Wp(e[r]),c=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return n;if(r!=o){var u=a[l];c=i?i(u,l,a):void 0,c===void 0&&(c=fr(u)?u:Dp(e[r+1])?[]:{})}Kc(a,l,c),a=a[l]}return n}function fM(n,e,t){return n==null?n:uM(n,e,t)}var Af;const fs=typeof window!="undefined",tm=n=>typeof n=="boolean",Fi=n=>typeof n=="number",hM=n=>typeof n=="string",dM=()=>{};fs&&((Af=window==null?void 0:window.navigator)==null?void 0:Af.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function la(n){return typeof n=="function"?n():H(n)}function pM(n,e){function t(...i){n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})}return t}function mM(n,e={}){let t,i;return s=>{const o=la(n),a=la(e.maxWait);if(t&&clearTimeout(t),o<=0||a!==void 0&&a<=0)return i&&(clearTimeout(i),i=null),s();a&&!i&&(i=setTimeout(()=>{t&&clearTimeout(t),i=null,s()},a)),t=setTimeout(()=>{i&&clearTimeout(i),i=null,s()},o)}}function gM(n){return n}function ru(n){return qg()?(jg(n),!0):!1}function _M(n,e=200,t={}){return pM(mM(e,t),n)}function vM(n,e=200,t={}){const i=nt(n.value),r=_M(()=>{i.value=n.value},e,t);return zt(n,()=>r()),i}function xM(n,e=!0){Oi()?gr(n):e?n():Pn(n)}function yM(n,e,t={}){const{immediate:i=!0}=t,r=nt(!1);let s=null;function o(){s&&(clearTimeout(s),s=null)}function a(){r.value=!1,o()}function l(...c){o(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,n(...c)},la(e))}return i&&(r.value=!0,fs&&l()),ru(a),{isPending:r,start:l,stop:a}}function nm(n){var e;const t=la(n);return(e=t==null?void 0:t.$el)!=null?e:t}const im=fs?window:void 0;function bM(...n){let e,t,i,r;if(hM(n[0])||Array.isArray(n[0])?([t,i,r]=n,e=im):[e,t,i,r]=n,!e)return dM;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,h)=>(u.addEventListener(f,h,r),()=>u.removeEventListener(f,h,r)),l=zt(()=>nm(e),u=>{o(),u&&s.push(...t.flatMap(f=>i.map(h=>a(u,f,h))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ru(c),c}function MM(n,e=!1){const t=nt(),i=()=>t.value=Boolean(n());return i(),xM(i,e),t}const Zl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Jl="__vueuse_ssr_handlers__";Zl[Jl]=Zl[Jl]||{};Zl[Jl];var Cf=Object.getOwnPropertySymbols,SM=Object.prototype.hasOwnProperty,wM=Object.prototype.propertyIsEnumerable,EM=(n,e)=>{var t={};for(var i in n)SM.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Cf)for(var i of Cf(n))e.indexOf(i)<0&&wM.call(n,i)&&(t[i]=n[i]);return t};function su(n,e,t={}){const i=t,{window:r=im}=i,s=EM(i,["window"]);let o;const a=MM(()=>r&&"ResizeObserver"in r),l=()=>{o&&(o.disconnect(),o=void 0)},c=zt(()=>nm(n),f=>{l(),a.value&&r&&f&&(o=new ResizeObserver(e),o.observe(f,s))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return ru(u),{isSupported:a,stop:u}}var Rf;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Rf||(Rf={}));var TM=Object.defineProperty,Lf=Object.getOwnPropertySymbols,AM=Object.prototype.hasOwnProperty,CM=Object.prototype.propertyIsEnumerable,Pf=(n,e,t)=>e in n?TM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,RM=(n,e)=>{for(var t in e||(e={}))AM.call(e,t)&&Pf(n,t,e[t]);if(Lf)for(var t of Lf(e))CM.call(e,t)&&Pf(n,t,e[t]);return n};const LM={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};RM({linear:gM},LM);const PM=n=>n===void 0,DM=n=>typeof Element=="undefined"?!1:n instanceof Element,IM=n=>tt(n)?!Number.isNaN(Number(n)):!1,Df=n=>Object.keys(n),ja=(n,e,t)=>({get value(){return by(n,e,t)},set value(i){fM(n,e,i)}});class FM extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function OM(n,e){throw new FM(`[${n}] ${e}`)}function Ql(n,e="px"){if(!n)return"";if(Fi(n)||IM(n))return`${n}${e}`;if(tt(n))return n}/*! Element Plus Icons Vue v2.0.10 */var Gn=(n,e)=>{let t=n.__vccOpts||n;for(let[i,r]of e)t[i]=r;return t},NM={name:"CircleCheck"},BM={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},zM=ot("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),UM=ot("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"},null,-1),kM=[zM,UM];function VM(n,e,t,i,r,s){return Le(),Ye("svg",BM,kM)}var HM=Gn(NM,[["render",VM],["__file","circle-check.vue"]]),GM={name:"CircleCloseFilled"},WM={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},$M=ot("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),qM=[$M];function jM(n,e,t,i,r,s){return Le(),Ye("svg",WM,qM)}var rm=Gn(GM,[["render",jM],["__file","circle-close-filled.vue"]]),XM={name:"CircleClose"},KM={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},YM=ot("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),ZM=ot("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),JM=[YM,ZM];function QM(n,e,t,i,r,s){return Le(),Ye("svg",KM,JM)}var sm=Gn(XM,[["render",QM],["__file","circle-close.vue"]]),e1={name:"Close"},t1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},n1=ot("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),i1=[n1];function r1(n,e,t,i,r,s){return Le(),Ye("svg",t1,i1)}var s1=Gn(e1,[["render",r1],["__file","close.vue"]]),o1={name:"Hide"},a1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},l1=ot("path",{d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",fill:"currentColor"},null,-1),c1=ot("path",{d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",fill:"currentColor"},null,-1),u1=[l1,c1];function f1(n,e,t,i,r,s){return Le(),Ye("svg",a1,u1)}var h1=Gn(o1,[["render",f1],["__file","hide.vue"]]),d1={name:"InfoFilled"},p1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},m1=ot("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"},null,-1),g1=[m1];function _1(n,e,t,i,r,s){return Le(),Ye("svg",p1,g1)}var om=Gn(d1,[["render",_1],["__file","info-filled.vue"]]),v1={name:"Loading"},x1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},y1=ot("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),b1=[y1];function M1(n,e,t,i,r,s){return Le(),Ye("svg",x1,b1)}var am=Gn(v1,[["render",M1],["__file","loading.vue"]]),S1={name:"SuccessFilled"},w1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},E1=ot("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),T1=[E1];function A1(n,e,t,i,r,s){return Le(),Ye("svg",w1,T1)}var lm=Gn(S1,[["render",A1],["__file","success-filled.vue"]]),C1={name:"View"},R1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},L1=ot("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"},null,-1),P1=[L1];function D1(n,e,t,i,r,s){return Le(),Ye("svg",R1,P1)}var I1=Gn(C1,[["render",D1],["__file","view.vue"]]),F1={name:"WarningFilled"},O1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},N1=ot("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),B1=[N1];function z1(n,e,t,i,r,s){return Le(),Ye("svg",O1,B1)}var cm=Gn(F1,[["render",z1],["__file","warning-filled.vue"]]);const um="__epPropKey",vt=n=>n,U1=n=>it(n)&&!!n[um],fm=(n,e)=>{if(!it(n)||U1(n))return n;const{values:t,required:i,default:r,type:s,validator:o}=n,l={type:s,required:!!i,validator:t||o?c=>{let u=!1,f=[];if(t&&(f=Array.from(t),He(n,"default")&&f.push(r),u||(u=f.includes(c))),o&&(u||(u=o(c))),!u&&f.length>0){const h=[...new Set(f)].map(m=>JSON.stringify(m)).join(", ");w0(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[um]:!0};return He(n,"default")&&(l.default=r),l},Wn=n=>em(Object.entries(n).map(([e,t])=>[e,fm(t,e)])),Zs=vt([String,Object,Function]),k1={Close:s1,SuccessFilled:lm,InfoFilled:om,WarningFilled:cm,CircleCloseFilled:rm},If={success:lm,warning:cm,error:rm,info:om},V1={validating:am,success:HM,error:sm},yr=(n,e)=>{if(n.install=t=>{for(const i of[n,...Object.values(e!=null?e:{})])t.component(i.name,i)},e)for(const[t,i]of Object.entries(e))n[t]=i;return n},H1=(n,e)=>(n.install=t=>{n._context=t._context,t.config.globalProperties[e]=n},n),hm=n=>(n.install=Nn,n),G1={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},ec="update:modelValue",ou=["","default","small","large"],W1=n=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(n),Qi=n=>n,$1=["class","style"],q1=/^on[A-Z]/,j1=(n={})=>{const{excludeListeners:e=!1,excludeKeys:t}=n,i=ye(()=>((t==null?void 0:t.value)||[]).concat($1)),r=Oi();return ye(r?()=>{var s;return em(Object.entries((s=r.proxy)==null?void 0:s.$attrs).filter(([o])=>!i.value.includes(o)&&!(e&&q1.test(o))))}:()=>({}))},dm=Symbol("buttonGroupContextKey"),pm=Symbol(),hs=Symbol("formContextKey"),Js=Symbol("formItemContextKey"),mm=Symbol("rowContextKey"),gm=n=>{const e=Oi();return ye(()=>{var t,i;return(i=((t=e.proxy)==null?void 0:t.$props)[n])!=null?i:void 0})},ca=nt();function ds(n,e=void 0){const t=Oi()?xt(pm,ca):ca;return n?ye(()=>{var i,r;return(r=(i=t.value)==null?void 0:i[n])!=null?r:e}):t}const X1=(n,e,t=!1)=>{var i;const r=!!Oi(),s=r?ds():void 0,o=(i=e==null?void 0:e.provide)!=null?i:r?Ci:void 0;if(!o)return;const a=ye(()=>{const l=H(n);return s!=null&&s.value?K1(s.value,l):l});return o(pm,a),(t||!ca.value)&&(ca.value=a.value),a},K1=(n,e)=>{var t;const i=[...new Set([...Df(n),...Df(e)])],r={};for(const s of i)r[s]=(t=e[s])!=null?t:n[s];return r},au=fm({type:String,values:ou,required:!1}),Ta=(n,e={})=>{const t=nt(void 0),i=e.prop?t:gm("size"),r=e.global?t:ds("size"),s=e.form?{size:void 0}:xt(hs,void 0),o=e.formItem?{size:void 0}:xt(Js,void 0);return ye(()=>i.value||H(n)||(o==null?void 0:o.size)||(s==null?void 0:s.size)||r.value||"")},lu=n=>{const e=gm("disabled"),t=xt(hs,void 0);return ye(()=>e.value||H(n)||(t==null?void 0:t.disabled)||!1)},Y1=({from:n,replacement:e,scope:t,version:i,ref:r,type:s="API"},o)=>{zt(()=>H(o),a=>{},{immediate:!0})},_m="el",Z1="is-",Hi=(n,e,t,i,r)=>{let s=`${n}-${e}`;return t&&(s+=`-${t}`),i&&(s+=`__${i}`),r&&(s+=`--${r}`),s},Jt=n=>{const e=ds("namespace",_m);return{namespace:e,b:(g="")=>Hi(e.value,n,g,"",""),e:g=>g?Hi(e.value,n,"",g,""):"",m:g=>g?Hi(e.value,n,"","",g):"",be:(g,d)=>g&&d?Hi(e.value,n,g,d,""):"",em:(g,d)=>g&&d?Hi(e.value,n,"",g,d):"",bm:(g,d)=>g&&d?Hi(e.value,n,g,"",d):"",bem:(g,d,p)=>g&&d&&p?Hi(e.value,n,g,d,p):"",is:(g,...d)=>{const p=d.length>=1?d[0]:!0;return g&&p?`${Z1}${g}`:""},cssVar:g=>{const d={};for(const p in g)g[p]&&(d[`--${e.value}-${p}`]=g[p]);return d},cssVarName:g=>`--${e.value}-${g}`,cssVarBlock:g=>{const d={};for(const p in g)g[p]&&(d[`--${e.value}-${n}-${p}`]=g[p]);return d},cssVarBlockName:g=>`--${e.value}-${n}-${g}`}},Ff={prefix:Math.floor(Math.random()*1e4),current:0},J1=Symbol("elIdInjection"),Q1=()=>Oi()?xt(J1,Ff):Ff,vm=n=>{const e=Q1(),t=ds("namespace",_m);return ye(()=>H(n)||`${t.value}-id-${e.prefix}-${e.current++}`)},xm=()=>{const n=xt(hs,void 0),e=xt(Js,void 0);return{form:n,formItem:e}},eS=(n,{formItemContext:e,disableIdGeneration:t,disableIdManagement:i})=>{t||(t=nt(!1)),i||(i=nt(!1));const r=nt();let s;const o=ye(()=>{var a;return!!(!n.label&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return gr(()=>{s=zt([Ws(n,"id"),t],([a,l])=>{const c=a!=null?a:l?void 0:vm().value;c!==r.value&&(e!=null&&e.removeInputId&&(r.value&&e.removeInputId(r.value),!(i!=null&&i.value)&&!l&&c&&e.addInputId(c)),r.value=c)},{immediate:!0})}),G0(()=>{s&&s(),e!=null&&e.removeInputId&&r.value&&e.removeInputId(r.value)}),{isLabeledByFormItem:o,inputId:r}},Of=nt(0),tS=()=>{const n=ds("zIndex",2e3),e=ye(()=>n.value+Of.value);return{initialZIndex:n,currentZIndex:e,nextZIndex:()=>(Of.value++,e.value)}};function nS(n){const e=nt();function t(){if(n.value==null)return;const{selectionStart:r,selectionEnd:s,value:o}=n.value;if(r==null||s==null)return;const a=o.slice(0,Math.max(0,r)),l=o.slice(Math.max(0,s));e.value={selectionStart:r,selectionEnd:s,value:o,beforeTxt:a,afterTxt:l}}function i(){if(n.value==null||e.value==null)return;const{value:r}=n.value,{beforeTxt:s,afterTxt:o,selectionStart:a}=e.value;if(s==null||o==null||a==null)return;let l=r.length;if(r.endsWith(o))l=r.length-o.length;else if(r.startsWith(s))l=s.length;else{const c=s[a-1],u=r.indexOf(c,a-1);u!==-1&&(l=u+1)}n.value.setSelectionRange(l,l)}return[t,i]}var $n=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const iS=Wn({size:{type:vt([Number,String])},color:{type:String}}),rS=ct({name:"ElIcon",inheritAttrs:!1}),sS=ct({...rS,props:iS,setup(n){const e=n,t=Jt("icon"),i=ye(()=>{const{size:r,color:s}=e;return!r&&!s?{}:{fontSize:PM(r)?void 0:Ql(r),"--color":s}});return(r,s)=>(Le(),Ye("i",Ns({class:H(t).b(),style:H(i)},r.$attrs),[St(r.$slots,"default")],16))}});var oS=$n(sS,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const ti=yr(oS);let rn;const aS=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,lS=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function cS(n){const e=window.getComputedStyle(n),t=e.getPropertyValue("box-sizing"),i=Number.parseFloat(e.getPropertyValue("padding-bottom"))+Number.parseFloat(e.getPropertyValue("padding-top")),r=Number.parseFloat(e.getPropertyValue("border-bottom-width"))+Number.parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:lS.map(o=>`${o}:${e.getPropertyValue(o)}`).join(";"),paddingSize:i,borderSize:r,boxSizing:t}}function Nf(n,e=1,t){var i;rn||(rn=document.createElement("textarea"),document.body.appendChild(rn));const{paddingSize:r,borderSize:s,boxSizing:o,contextStyle:a}=cS(n);rn.setAttribute("style",`${a};${aS}`),rn.value=n.value||n.placeholder||"";let l=rn.scrollHeight;const c={};o==="border-box"?l=l+s:o==="content-box"&&(l=l-r),rn.value="";const u=rn.scrollHeight-r;if(Fi(e)){let f=u*e;o==="border-box"&&(f=f+r+s),l=Math.max(f,l),c.minHeight=`${f}px`}if(Fi(t)){let f=u*t;o==="border-box"&&(f=f+r+s),l=Math.min(f,l)}return c.height=`${l}px`,(i=rn.parentNode)==null||i.removeChild(rn),rn=void 0,c}const uS=Wn({id:{type:String,default:void 0},size:au,disabled:Boolean,modelValue:{type:vt([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:vt([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Zs},prefixIcon:{type:Zs},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:vt([Object,Array,String]),default:()=>Qi({})}}),fS={[ec]:n=>tt(n),input:n=>tt(n),change:n=>tt(n),focus:n=>n instanceof FocusEvent,blur:n=>n instanceof FocusEvent,clear:()=>!0,mouseleave:n=>n instanceof MouseEvent,mouseenter:n=>n instanceof MouseEvent,keydown:n=>n instanceof Event,compositionstart:n=>n instanceof CompositionEvent,compositionupdate:n=>n instanceof CompositionEvent,compositionend:n=>n instanceof CompositionEvent},hS=["role"],dS=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],pS=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],mS=ct({name:"ElInput",inheritAttrs:!1}),gS=ct({...mS,props:uS,emits:fS,setup(n,{expose:e,emit:t}){const i=n,r=x_(),s=$c(),o=ye(()=>{const v={};return i.containerRole==="combobox"&&(v["aria-haspopup"]=r["aria-haspopup"],v["aria-owns"]=r["aria-owns"],v["aria-expanded"]=r["aria-expanded"]),v}),a=ye(()=>[i.type==="textarea"?p.b():d.b(),d.m(m.value),d.is("disabled",g.value),d.is("exceed",ge.value),{[d.b("group")]:s.prepend||s.append,[d.bm("group","append")]:s.append,[d.bm("group","prepend")]:s.prepend,[d.m("prefix")]:s.prefix||i.prefixIcon,[d.m("suffix")]:s.suffix||i.suffixIcon||i.clearable||i.showPassword,[d.bm("suffix","password-clear")]:Q.value&&se.value},r.class]),l=ye(()=>[d.e("wrapper"),d.is("focus",w.value)]),c=j1({excludeKeys:ye(()=>Object.keys(o.value))}),{form:u,formItem:f}=xm(),{inputId:h}=eS(i,{formItemContext:f}),m=Ta(),g=lu(),d=Jt("input"),p=Jt("textarea"),_=Yo(),S=Yo(),w=nt(!1),y=nt(!1),A=nt(!1),R=nt(!1),O=nt(),b=Yo(i.inputStyle),C=ye(()=>_.value||S.value),B=ye(()=>{var v;return(v=u==null?void 0:u.statusIcon)!=null?v:!1}),N=ye(()=>(f==null?void 0:f.validateState)||""),z=ye(()=>N.value&&V1[N.value]),ae=ye(()=>R.value?I1:h1),I=ye(()=>[r.style,i.inputStyle]),te=ye(()=>[i.inputStyle,b.value,{resize:i.resize}]),$=ye(()=>cM(i.modelValue)?"":String(i.modelValue)),Q=ye(()=>i.clearable&&!g.value&&!i.readonly&&!!$.value&&(w.value||y.value)),se=ye(()=>i.showPassword&&!g.value&&!i.readonly&&!!$.value&&(!!$.value||w.value)),j=ye(()=>i.showWordLimit&&!!c.value.maxlength&&(i.type==="text"||i.type==="textarea")&&!g.value&&!i.readonly&&!i.showPassword),J=ye(()=>Array.from($.value).length),ge=ye(()=>!!j.value&&J.value>Number(c.value.maxlength)),re=ye(()=>!!s.suffix||!!i.suffixIcon||Q.value||i.showPassword||j.value||!!N.value&&B.value),[_e,Te]=nS(_);su(S,v=>{if(!j.value||i.resize!=="both")return;const x=v[0],{width:D}=x.contentRect;O.value={right:`calc(100% - ${D+15+6}px)`}});const F=()=>{const{type:v,autosize:x}=i;if(!(!fs||v!=="textarea"))if(x){const D=it(x)?x.minRows:void 0,X=it(x)?x.maxRows:void 0;b.value={...Nf(S.value,D,X)}}else b.value={minHeight:Nf(S.value).minHeight}},P=()=>{const v=C.value;!v||v.value===$.value||(v.value=$.value)},U=async v=>{_e();let{value:x}=v.target;if(i.formatter&&(x=i.parser?i.parser(x):x,x=i.formatter(x)),!A.value){if(x===$.value){P();return}t(ec,x),t("input",x),await Pn(),P(),Te()}},Y=v=>{t("change",v.target.value)},ue=v=>{t("compositionstart",v),A.value=!0},oe=v=>{var x;t("compositionupdate",v);const D=(x=v.target)==null?void 0:x.value,X=D[D.length-1]||"";A.value=!W1(X)},xe=v=>{t("compositionend",v),A.value&&(A.value=!1,U(v))},M=()=>{R.value=!R.value,T()},T=async()=>{var v;await Pn(),(v=C.value)==null||v.focus()},k=()=>{var v;return(v=C.value)==null?void 0:v.blur()},K=v=>{w.value=!0,t("focus",v)},ee=v=>{var x;w.value=!1,t("blur",v),i.validateEvent&&((x=f==null?void 0:f.validate)==null||x.call(f,"blur").catch(D=>void 0))},fe=v=>{y.value=!1,t("mouseleave",v)},pe=v=>{y.value=!0,t("mouseenter",v)},ne=v=>{t("keydown",v)},me=()=>{var v;(v=C.value)==null||v.select()},ce=()=>{t(ec,""),t("change",""),t("clear"),t("input","")};return zt(()=>i.modelValue,()=>{var v;Pn(()=>F()),i.validateEvent&&((v=f==null?void 0:f.validate)==null||v.call(f,"change").catch(x=>void 0))}),zt($,()=>P()),zt(()=>i.type,async()=>{await Pn(),P(),F()}),gr(()=>{!i.formatter&&i.parser,P(),Pn(F)}),e({input:_,textarea:S,ref:C,textareaStyle:te,autosize:Ws(i,"autosize"),focus:T,blur:k,select:me,clear:ce,resizeTextarea:F}),(v,x)=>Vc((Le(),Ye("div",Ns(H(o),{class:H(a),style:H(I),role:v.containerRole,onMouseenter:pe,onMouseleave:fe}),[st(" input "),v.type!=="textarea"?(Le(),Ye(Mt,{key:0},[st(" prepend slot "),v.$slots.prepend?(Le(),Ye("div",{key:0,class:ke(H(d).be("group","prepend"))},[St(v.$slots,"prepend")],2)):st("v-if",!0),ot("div",{class:ke(H(l))},[st(" prefix slot "),v.$slots.prefix||v.prefixIcon?(Le(),Ye("span",{key:0,class:ke(H(d).e("prefix"))},[ot("span",{class:ke(H(d).e("prefix-inner")),onClick:T},[St(v.$slots,"prefix"),v.prefixIcon?(Le(),ft(H(ti),{key:0,class:ke(H(d).e("icon"))},{default:Et(()=>[(Le(),ft(In(v.prefixIcon)))]),_:1},8,["class"])):st("v-if",!0)],2)],2)):st("v-if",!0),ot("input",Ns({id:H(h),ref_key:"input",ref:_,class:H(d).e("inner")},H(c),{type:v.showPassword?R.value?"text":"password":v.type,disabled:H(g),formatter:v.formatter,parser:v.parser,readonly:v.readonly,autocomplete:v.autocomplete,tabindex:v.tabindex,"aria-label":v.label,placeholder:v.placeholder,style:v.inputStyle,form:i.form,onCompositionstart:ue,onCompositionupdate:oe,onCompositionend:xe,onInput:U,onFocus:K,onBlur:ee,onChange:Y,onKeydown:ne}),null,16,dS),st(" suffix slot "),H(re)?(Le(),Ye("span",{key:1,class:ke(H(d).e("suffix"))},[ot("span",{class:ke(H(d).e("suffix-inner")),onClick:T},[!H(Q)||!H(se)||!H(j)?(Le(),Ye(Mt,{key:0},[St(v.$slots,"suffix"),v.suffixIcon?(Le(),ft(H(ti),{key:0,class:ke(H(d).e("icon"))},{default:Et(()=>[(Le(),ft(In(v.suffixIcon)))]),_:1},8,["class"])):st("v-if",!0)],64)):st("v-if",!0),H(Q)?(Le(),ft(H(ti),{key:1,class:ke([H(d).e("icon"),H(d).e("clear")]),onMousedown:Tp(H(Nn),["prevent"]),onClick:ce},{default:Et(()=>[dt(H(sm))]),_:1},8,["class","onMousedown"])):st("v-if",!0),H(se)?(Le(),ft(H(ti),{key:2,class:ke([H(d).e("icon"),H(d).e("password")]),onClick:M},{default:Et(()=>[(Le(),ft(In(H(ae))))]),_:1},8,["class"])):st("v-if",!0),H(j)?(Le(),Ye("span",{key:3,class:ke(H(d).e("count"))},[ot("span",{class:ke(H(d).e("count-inner"))},Mi(H(J))+" / "+Mi(H(c).maxlength),3)],2)):st("v-if",!0),H(N)&&H(z)&&H(B)?(Le(),ft(H(ti),{key:4,class:ke([H(d).e("icon"),H(d).e("validateIcon"),H(d).is("loading",H(N)==="validating")])},{default:Et(()=>[(Le(),ft(In(H(z))))]),_:1},8,["class"])):st("v-if",!0)],2)],2)):st("v-if",!0)],2),st(" append slot "),v.$slots.append?(Le(),Ye("div",{key:1,class:ke(H(d).be("group","append"))},[St(v.$slots,"append")],2)):st("v-if",!0)],64)):(Le(),Ye(Mt,{key:1},[st(" textarea "),ot("textarea",Ns({id:H(h),ref_key:"textarea",ref:S,class:H(p).e("inner")},H(c),{tabindex:v.tabindex,disabled:H(g),readonly:v.readonly,autocomplete:v.autocomplete,style:H(te),"aria-label":v.label,placeholder:v.placeholder,form:i.form,onCompositionstart:ue,onCompositionupdate:oe,onCompositionend:xe,onInput:U,onFocus:K,onBlur:ee,onChange:Y,onKeydown:ne}),null,16,pS),H(j)?(Le(),Ye("span",{key:0,style:Un(O.value),class:ke(H(d).e("count"))},Mi(H(J))+" / "+Mi(H(c).maxlength),7)):st("v-if",!0)],64))],16,hS)),[[jc,v.type!=="hidden"]])}});var _S=$n(gS,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const cP=yr(_S),vS=Wn({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),xS=["textContent"],yS=ct({name:"ElBadge"}),bS=ct({...yS,props:vS,setup(n,{expose:e}){const t=n,i=Jt("badge"),r=ye(()=>t.isDot?"":Fi(t.value)&&Fi(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return e({content:r}),(s,o)=>(Le(),Ye("div",{class:ke(H(i).b())},[St(s.$slots,"default"),dt(oo,{name:`${H(i).namespace.value}-zoom-in-center`,persisted:""},{default:Et(()=>[Vc(ot("sup",{class:ke([H(i).e("content"),H(i).em("content",s.type),H(i).is("fixed",!!s.$slots.default),H(i).is("dot",s.isDot)]),textContent:Mi(H(r))},null,10,xS),[[jc,!s.hidden&&(H(r)||s.isDot)]])]),_:1},8,["name"])],2))}});var MS=$n(bS,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const SS=yr(MS),wS=(n,e)=>{Y1({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},ye(()=>n.type==="text"));const t=xt(dm,void 0),i=ds("button"),{form:r}=xm(),s=Ta(ye(()=>t==null?void 0:t.size)),o=lu(),a=nt(),l=$c(),c=ye(()=>n.type||(t==null?void 0:t.type)||""),u=ye(()=>{var m,g,d;return(d=(g=n.autoInsertSpace)!=null?g:(m=i.value)==null?void 0:m.autoInsertSpace)!=null?d:!1}),f=ye(()=>{var m;const g=(m=l.default)==null?void 0:m.call(l);if(u.value&&(g==null?void 0:g.length)===1){const d=g[0];if((d==null?void 0:d.type)===so){const p=d.children;return/^\p{Unified_Ideograph}{2}$/u.test(p.trim())}}return!1});return{_disabled:o,_size:s,_type:c,_ref:a,shouldAddSpace:f,handleClick:m=>{n.nativeType==="reset"&&(r==null||r.resetFields()),e("click",m)}}},ES=["default","primary","success","warning","info","danger","text",""],TS=["button","submit","reset"],tc=Wn({size:au,disabled:Boolean,type:{type:String,values:ES,default:""},icon:{type:Zs},nativeType:{type:String,values:TS,default:"button"},loading:Boolean,loadingIcon:{type:Zs,default:()=>am},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),AS={click:n=>n instanceof MouseEvent};function At(n,e){CS(n)&&(n="100%");var t=RS(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function Mo(n){return Math.min(1,Math.max(0,n))}function CS(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function RS(n){return typeof n=="string"&&n.indexOf("%")!==-1}function ym(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function So(n){return n<=1?"".concat(Number(n)*100,"%"):n}function nr(n){return n.length===1?"0"+n:String(n)}function LS(n,e,t){return{r:At(n,255)*255,g:At(e,255)*255,b:At(t,255)*255}}function Bf(n,e,t){n=At(n,255),e=At(e,255),t=At(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),s=0,o=0,a=(i+r)/2;if(i===r)o=0,s=0;else{var l=i-r;switch(o=a>.5?l/(2-i-r):l/(i+r),i){case n:s=(e-t)/l+(e<t?6:0);break;case e:s=(t-n)/l+2;break;case t:s=(n-e)/l+4;break}s/=6}return{h:s,s:o,l:a}}function Xa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function PS(n,e,t){var i,r,s;if(n=At(n,360),e=At(e,100),t=At(t,100),e===0)r=t,s=t,i=t;else{var o=t<.5?t*(1+e):t+e-t*e,a=2*t-o;i=Xa(a,o,n+1/3),r=Xa(a,o,n),s=Xa(a,o,n-1/3)}return{r:i*255,g:r*255,b:s*255}}function zf(n,e,t){n=At(n,255),e=At(e,255),t=At(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),s=0,o=i,a=i-r,l=i===0?0:a/i;if(i===r)s=0;else{switch(i){case n:s=(e-t)/a+(e<t?6:0);break;case e:s=(t-n)/a+2;break;case t:s=(n-e)/a+4;break}s/=6}return{h:s,s:l,v:o}}function DS(n,e,t){n=At(n,360)*6,e=At(e,100),t=At(t,100);var i=Math.floor(n),r=n-i,s=t*(1-e),o=t*(1-r*e),a=t*(1-(1-r)*e),l=i%6,c=[t,o,s,s,a,t][l],u=[a,t,t,o,s,s][l],f=[s,s,a,t,t,o][l];return{r:c*255,g:u*255,b:f*255}}function Uf(n,e,t,i){var r=[nr(Math.round(n).toString(16)),nr(Math.round(e).toString(16)),nr(Math.round(t).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function IS(n,e,t,i,r){var s=[nr(Math.round(n).toString(16)),nr(Math.round(e).toString(16)),nr(Math.round(t).toString(16)),nr(FS(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function FS(n){return Math.round(parseFloat(n)*255).toString(16)}function kf(n){return Xt(n)/255}function Xt(n){return parseInt(n,16)}function OS(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}var nc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function NS(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,s=null,o=!1,a=!1;return typeof n=="string"&&(n=US(n)),typeof n=="object"&&(qn(n.r)&&qn(n.g)&&qn(n.b)?(e=LS(n.r,n.g,n.b),o=!0,a=String(n.r).substr(-1)==="%"?"prgb":"rgb"):qn(n.h)&&qn(n.s)&&qn(n.v)?(i=So(n.s),r=So(n.v),e=DS(n.h,i,r),o=!0,a="hsv"):qn(n.h)&&qn(n.s)&&qn(n.l)&&(i=So(n.s),s=So(n.l),e=PS(n.h,i,s),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=ym(t),{ok:o,format:n.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var BS="[-\\+]?\\d+%?",zS="[-\\+]?\\d*\\.\\d+%?",Si="(?:".concat(zS,")|(?:").concat(BS,")"),Ka="[\\s|\\(]+(".concat(Si,")[,|\\s]+(").concat(Si,")[,|\\s]+(").concat(Si,")\\s*\\)?"),Ya="[\\s|\\(]+(".concat(Si,")[,|\\s]+(").concat(Si,")[,|\\s]+(").concat(Si,")[,|\\s]+(").concat(Si,")\\s*\\)?"),cn={CSS_UNIT:new RegExp(Si),rgb:new RegExp("rgb"+Ka),rgba:new RegExp("rgba"+Ya),hsl:new RegExp("hsl"+Ka),hsla:new RegExp("hsla"+Ya),hsv:new RegExp("hsv"+Ka),hsva:new RegExp("hsva"+Ya),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function US(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var e=!1;if(nc[n])n=nc[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=cn.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=cn.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=cn.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=cn.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=cn.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=cn.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=cn.hex8.exec(n),t?{r:Xt(t[1]),g:Xt(t[2]),b:Xt(t[3]),a:kf(t[4]),format:e?"name":"hex8"}:(t=cn.hex6.exec(n),t?{r:Xt(t[1]),g:Xt(t[2]),b:Xt(t[3]),format:e?"name":"hex"}:(t=cn.hex4.exec(n),t?{r:Xt(t[1]+t[1]),g:Xt(t[2]+t[2]),b:Xt(t[3]+t[3]),a:kf(t[4]+t[4]),format:e?"name":"hex8"}:(t=cn.hex3.exec(n),t?{r:Xt(t[1]+t[1]),g:Xt(t[2]+t[2]),b:Xt(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function qn(n){return Boolean(cn.CSS_UNIT.exec(String(n)))}var kS=function(){function n(e,t){e===void 0&&(e=""),t===void 0&&(t={});var i;if(e instanceof n)return e;typeof e=="number"&&(e=OS(e)),this.originalInput=e;var r=NS(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=t.format)!==null&&i!==void 0?i:r.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},n.prototype.getLuminance=function(){var e=this.toRgb(),t,i,r,s=e.r/255,o=e.g/255,a=e.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*t+.7152*i+.0722*r},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(e){return this.a=ym(e),this.roundA=Math.round(100*this.a)/100,this},n.prototype.toHsv=function(){var e=zf(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},n.prototype.toHsvString=function(){var e=zf(this.r,this.g,this.b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(i,"%, ").concat(r,"%)"):"hsva(".concat(t,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var e=Bf(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},n.prototype.toHslString=function(){var e=Bf(this.r,this.g,this.b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(i,"%, ").concat(r,"%)"):"hsla(".concat(t,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(e){return e===void 0&&(e=!1),Uf(this.r,this.g,this.b,e)},n.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},n.prototype.toHex8=function(e){return e===void 0&&(e=!1),IS(this.r,this.g,this.b,this.a,e)},n.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(i,")"):"rgba(".concat(e,", ").concat(t,", ").concat(i,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(At(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(At(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Uf(this.r,this.g,this.b,!1),t=0,i=Object.entries(nc);t<i.length;t++){var r=i[t],s=r[0],o=r[1];if(e===o)return s}return!1},n.prototype.toString=function(e){var t=Boolean(e);e=e!=null?e:this.format;var i=!1,r=this.a<1&&this.a>=0,s=!t&&r&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=Mo(t.l),new n(t)},n.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new n(t)},n.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=Mo(t.l),new n(t)},n.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},n.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},n.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=Mo(t.s),new n(t)},n.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=Mo(t.s),new n(t)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(e){var t=this.toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,new n(t)},n.prototype.mix=function(e,t){t===void 0&&(t=50);var i=this.toRgb(),r=new n(e).toRgb(),s=t/100,o={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new n(o)},n.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var i=this.toHsl(),r=360/t,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new n(i));return s},n.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new n(e)},n.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),i=t.h,r=t.s,s=t.v,o=[],a=1/e;e--;)o.push(new n({h:i,s:r,v:s})),s=(s+a)%1;return o},n.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new n({h:(t+72)%360,s:e.s,l:e.l}),new n({h:(t+216)%360,s:e.s,l:e.l})]},n.prototype.onBackground=function(e){var t=this.toRgb(),i=new n(e).toRgb();return new n({r:i.r+(t.r-i.r)*t.a,g:i.g+(t.g-i.g)*t.a,b:i.b+(t.b-i.b)*t.a})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(e){for(var t=this.toHsl(),i=t.h,r=[this],s=360/e,o=1;o<e;o++)r.push(new n({h:(i+o*s)%360,s:t.s,l:t.l}));return r},n.prototype.equals=function(e){return this.toRgbString()===new n(e).toRgbString()},n}();function ui(n,e=20){return n.mix("#141414",e).toString()}function VS(n){const e=lu(),t=Jt("button");return ye(()=>{let i={};const r=n.color;if(r){const s=new kS(r),o=n.dark?s.tint(20).toString():ui(s,20);if(n.plain)i=t.cssVarBlock({"bg-color":n.dark?ui(s,90):s.tint(90).toString(),"text-color":r,"border-color":n.dark?ui(s,50):s.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":o,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":o}),e.value&&(i[t.cssVarBlockName("disabled-bg-color")]=n.dark?ui(s,90):s.tint(90).toString(),i[t.cssVarBlockName("disabled-text-color")]=n.dark?ui(s,50):s.tint(50).toString(),i[t.cssVarBlockName("disabled-border-color")]=n.dark?ui(s,80):s.tint(80).toString());else{const a=n.dark?ui(s,30):s.tint(30).toString(),l=s.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(i=t.cssVarBlock({"bg-color":r,"text-color":l,"border-color":r,"hover-bg-color":a,"hover-text-color":l,"hover-border-color":a,"active-bg-color":o,"active-border-color":o}),e.value){const c=n.dark?ui(s,50):s.tint(50).toString();i[t.cssVarBlockName("disabled-bg-color")]=c,i[t.cssVarBlockName("disabled-text-color")]=n.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,i[t.cssVarBlockName("disabled-border-color")]=c}}}return i})}const HS=["aria-disabled","disabled","autofocus","type"],GS=ct({name:"ElButton"}),WS=ct({...GS,props:tc,emits:AS,setup(n,{expose:e,emit:t}){const i=n,r=VS(i),s=Jt("button"),{_ref:o,_size:a,_type:l,_disabled:c,shouldAddSpace:u,handleClick:f}=wS(i,t);return e({ref:o,size:a,type:l,disabled:c,shouldAddSpace:u}),(h,m)=>(Le(),Ye("button",{ref_key:"_ref",ref:o,class:ke([H(s).b(),H(s).m(H(l)),H(s).m(H(a)),H(s).is("disabled",H(c)),H(s).is("loading",h.loading),H(s).is("plain",h.plain),H(s).is("round",h.round),H(s).is("circle",h.circle),H(s).is("text",h.text),H(s).is("link",h.link),H(s).is("has-bg",h.bg)]),"aria-disabled":H(c)||h.loading,disabled:H(c)||h.loading,autofocus:h.autofocus,type:h.nativeType,style:Un(H(r)),onClick:m[0]||(m[0]=(...g)=>H(f)&&H(f)(...g))},[h.loading?(Le(),Ye(Mt,{key:0},[h.$slots.loading?St(h.$slots,"loading",{key:0}):(Le(),ft(H(ti),{key:1,class:ke(H(s).is("loading"))},{default:Et(()=>[(Le(),ft(In(h.loadingIcon)))]),_:1},8,["class"]))],64)):h.icon||h.$slots.icon?(Le(),ft(H(ti),{key:1},{default:Et(()=>[h.icon?(Le(),ft(In(h.icon),{key:0})):St(h.$slots,"icon",{key:1})]),_:3})):st("v-if",!0),h.$slots.default?(Le(),Ye("span",{key:2,class:ke({[H(s).em("text","expand")]:H(u)})},[St(h.$slots,"default")],2)):st("v-if",!0)],14,HS))}});var $S=$n(WS,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const qS={size:tc.size,type:tc.type},jS=ct({name:"ElButtonGroup"}),XS=ct({...jS,props:qS,setup(n){const e=n;Ci(dm,mr({size:Ws(e,"size"),type:Ws(e,"type")}));const t=Jt("button");return(i,r)=>(Le(),Ye("div",{class:ke(`${H(t).b("group")}`)},[St(i.$slots,"default")],2))}});var bm=$n(XS,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const uP=yr($S,{ButtonGroup:bm});hm(bm);const KS=Wn({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:vt([Number,Object]),default:()=>Qi({})},sm:{type:vt([Number,Object]),default:()=>Qi({})},md:{type:vt([Number,Object]),default:()=>Qi({})},lg:{type:vt([Number,Object]),default:()=>Qi({})},xl:{type:vt([Number,Object]),default:()=>Qi({})}}),YS=ct({name:"ElCol"}),ZS=ct({...YS,props:KS,setup(n){const e=n,{gutter:t}=xt(mm,{gutter:ye(()=>0)}),i=Jt("col"),r=ye(()=>{const o={};return t.value&&(o.paddingLeft=o.paddingRight=`${t.value/2}px`),o}),s=ye(()=>{const o=[];return["span","offset","pull","push"].forEach(c=>{const u=e[c];Fi(u)&&(c==="span"?o.push(i.b(`${e[c]}`)):u>0&&o.push(i.b(`${c}-${e[c]}`)))}),["xs","sm","md","lg","xl"].forEach(c=>{Fi(e[c])?o.push(i.b(`${c}-${e[c]}`)):it(e[c])&&Object.entries(e[c]).forEach(([u,f])=>{o.push(u!=="span"?i.b(`${c}-${u}-${f}`):i.b(`${c}-${f}`))})}),t.value&&o.push(i.is("guttered")),[i.b(),o]});return(o,a)=>(Le(),ft(In(o.tag),{class:ke(H(s)),style:Un(H(r))},{default:Et(()=>[St(o.$slots,"default")]),_:3},8,["class","style"]))}});var JS=$n(ZS,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const fP=yr(JS),ic={},QS=Wn({a11y:{type:Boolean,default:!0},locale:{type:vt(Object)},size:au,button:{type:vt(Object)},experimentalFeatures:{type:vt(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:vt(Object)},zIndex:Number,namespace:{type:String,default:"el"}});ct({name:"ElConfigProvider",props:QS,setup(n,{slots:e}){zt(()=>n.message,i=>{Object.assign(ic,i!=null?i:{})},{immediate:!0,deep:!0});const t=X1(n);return()=>St(e,"default",{config:t==null?void 0:t.value})}});const ew=Wn({model:Object,rules:{type:vt(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:ou},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),tw={validate:(n,e,t)=>(Fe(n)||tt(n))&&tm(e)&&tt(t)};function nw(){const n=nt([]),e=ye(()=>{if(!n.value.length)return"0";const s=Math.max(...n.value);return s?`${s}px`:""});function t(s){const o=n.value.indexOf(s);return o===-1&&e.value,o}function i(s,o){if(s&&o){const a=t(o);n.value.splice(a,1,s)}else s&&n.value.push(s)}function r(s){const o=t(s);o>-1&&n.value.splice(o,1)}return{autoLabelWidth:e,registerLabelWidth:i,deregisterLabelWidth:r}}const wo=(n,e)=>{const t=jl(e);return t.length>0?n.filter(i=>i.prop&&t.includes(i.prop)):n},iw="ElForm",rw=ct({name:iw}),sw=ct({...rw,props:ew,emits:tw,setup(n,{expose:e,emit:t}){const i=n,r=[],s=Ta(),o=Jt("form"),a=ye(()=>{const{labelPosition:S,inline:w}=i;return[o.b(),o.m(s.value||"default"),{[o.m(`label-${S}`)]:S,[o.m("inline")]:w}]}),l=S=>{r.push(S)},c=S=>{S.prop&&r.splice(r.indexOf(S),1)},u=(S=[])=>{!i.model||wo(r,S).forEach(w=>w.resetField())},f=(S=[])=>{wo(r,S).forEach(w=>w.clearValidate())},h=ye(()=>!!i.model),m=S=>{if(r.length===0)return[];const w=wo(r,S);return w.length?w:[]},g=async S=>p(void 0,S),d=async(S=[])=>{if(!h.value)return!1;const w=m(S);if(w.length===0)return!0;let y={};for(const A of w)try{await A.validate("")}catch(R){y={...y,...R}}return Object.keys(y).length===0?!0:Promise.reject(y)},p=async(S=[],w)=>{const y=!$e(w);try{const A=await d(S);return A===!0&&(w==null||w(A)),A}catch(A){if(A instanceof Error)throw A;const R=A;return i.scrollToError&&_(Object.keys(R)[0]),w==null||w(!1,R),y&&Promise.reject(R)}},_=S=>{var w;const y=wo(r,S)[0];y&&((w=y.$el)==null||w.scrollIntoView())};return zt(()=>i.rules,()=>{i.validateOnRuleChange&&g().catch(S=>void 0)},{deep:!0}),Ci(hs,mr({...ep(i),emit:t,resetFields:u,clearValidate:f,validateField:p,addField:l,removeField:c,...nw()})),e({validate:g,validateField:p,resetFields:u,clearValidate:f,scrollToField:_}),(S,w)=>(Le(),Ye("form",{class:ke(H(a))},[St(S.$slots,"default")],2))}});var ow=$n(sw,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function ir(){return ir=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ir.apply(this,arguments)}function aw(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Qs(n,e)}function rc(n){return rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},rc(n)}function Qs(n,e){return Qs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Qs(n,e)}function lw(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Qo(n,e,t){return lw()?Qo=Reflect.construct.bind():Qo=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&Qs(c,o.prototype),c},Qo.apply(null,arguments)}function cw(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function sc(n){var e=typeof Map=="function"?new Map:void 0;return sc=function(i){if(i===null||!cw(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e!="undefined"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return Qo(i,arguments,rc(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Qs(r,i)},sc(n)}var uw=/%[sdj%]/g,fw=function(){};typeof process!="undefined"&&process.env;function oc(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var i=t.field;e[i]=e[i]||[],e[i].push(t)}),e}function Yt(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=0,s=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var o=n.replace(uw,function(a){if(a==="%%")return"%";if(r>=s)return a;switch(a){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch{return"[Circular]"}break;default:return a}});return o}return n}function hw(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function yt(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||hw(e)&&typeof n=="string"&&!n)}function dw(n,e,t){var i=[],r=0,s=n.length;function o(a){i.push.apply(i,a||[]),r++,r===s&&t(i)}n.forEach(function(a){e(a,o)})}function Vf(n,e,t){var i=0,r=n.length;function s(o){if(o&&o.length){t(o);return}var a=i;i=i+1,a<r?e(n[a],s):t([])}s([])}function pw(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var Hf=function(n){aw(e,n);function e(t,i){var r;return r=n.call(this,"Async Validation Error")||this,r.errors=t,r.fields=i,r}return e}(sc(Error));function mw(n,e,t,i,r){if(e.first){var s=new Promise(function(h,m){var g=function(_){return i(_),_.length?m(new Hf(_,oc(_))):h(r)},d=pw(n);Vf(d,t,g)});return s.catch(function(h){return h}),s}var o=e.firstFields===!0?Object.keys(n):e.firstFields||[],a=Object.keys(n),l=a.length,c=0,u=[],f=new Promise(function(h,m){var g=function(p){if(u.push.apply(u,p),c++,c===l)return i(u),u.length?m(new Hf(u,oc(u))):h(r)};a.length||(i(u),h(r)),a.forEach(function(d){var p=n[d];o.indexOf(d)!==-1?Vf(p,t,g):dw(p,t,g)})});return f.catch(function(h){return h}),f}function gw(n){return!!(n&&n.message!==void 0)}function _w(n,e){for(var t=n,i=0;i<e.length;i++){if(t==null)return t;t=t[e[i]]}return t}function Gf(n,e){return function(t){var i;return n.fullFields?i=_w(e,n.fullFields):i=e[t.field||n.fullField],gw(t)?(t.field=t.field||n.fullField,t.fieldValue=i,t):{message:typeof t=="function"?t():t,fieldValue:i,field:t.field||n.fullField}}}function Wf(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var i=e[t];typeof i=="object"&&typeof n[t]=="object"?n[t]=ir({},n[t],i):n[t]=i}}return n}var Mm=function(e,t,i,r,s,o){e.required&&(!i.hasOwnProperty(e.field)||yt(t,o||e.type))&&r.push(Yt(s.messages.required,e.fullField))},vw=function(e,t,i,r,s){(/^\s+$/.test(t)||t==="")&&r.push(Yt(s.messages.whitespace,e.fullField))},Eo,xw=function(){if(Eo)return Eo;var n="[a-fA-F\\d:]",e=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",i="[a-fA-F\\d]{1,4}",r=(`
(?:
(?:`+i+":){7}(?:"+i+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+i+":){6}(?:"+t+"|:"+i+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+i+":){5}(?::"+t+"|(?::"+i+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+i+":){4}(?:(?::"+i+"){0,1}:"+t+"|(?::"+i+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+i+":){3}(?:(?::"+i+"){0,2}:"+t+"|(?::"+i+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+i+":){2}(?:(?::"+i+"){0,3}:"+t+"|(?::"+i+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+i+":){1}(?:(?::"+i+"){0,4}:"+t+"|(?::"+i+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+i+"){0,5}:"+t+"|(?::"+i+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+r+"$)"),o=new RegExp("^"+t+"$"),a=new RegExp("^"+r+"$"),l=function(y){return y&&y.exact?s:new RegExp("(?:"+e(y)+t+e(y)+")|(?:"+e(y)+r+e(y)+")","g")};l.v4=function(w){return w&&w.exact?o:new RegExp(""+e(w)+t+e(w),"g")},l.v6=function(w){return w&&w.exact?a:new RegExp(""+e(w)+r+e(w),"g")};var c="(?:(?:[a-z]+:)?//)",u="(?:\\S+(?::\\S*)?@)?",f=l.v4().source,h=l.v6().source,m="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",g="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",p="(?::\\d{2,5})?",_='(?:[/?#][^\\s"]*)?',S="(?:"+c+"|www\\.)"+u+"(?:localhost|"+f+"|"+h+"|"+m+g+d+")"+p+_;return Eo=new RegExp("(?:^"+S+"$)","i"),Eo},$f={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Rs={integer:function(e){return Rs.number(e)&&parseInt(e,10)===e},float:function(e){return Rs.number(e)&&!Rs.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Rs.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match($f.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(xw())},hex:function(e){return typeof e=="string"&&!!e.match($f.hex)}},yw=function(e,t,i,r,s){if(e.required&&t===void 0){Mm(e,t,i,r,s);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],a=e.type;o.indexOf(a)>-1?Rs[a](t)||r.push(Yt(s.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&r.push(Yt(s.messages.types[a],e.fullField,e.type))},bw=function(e,t,i,r,s){var o=typeof e.len=="number",a=typeof e.min=="number",l=typeof e.max=="number",c=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=t,f=null,h=typeof t=="number",m=typeof t=="string",g=Array.isArray(t);if(h?f="number":m?f="string":g&&(f="array"),!f)return!1;g&&(u=t.length),m&&(u=t.replace(c,"_").length),o?u!==e.len&&r.push(Yt(s.messages[f].len,e.fullField,e.len)):a&&!l&&u<e.min?r.push(Yt(s.messages[f].min,e.fullField,e.min)):l&&!a&&u>e.max?r.push(Yt(s.messages[f].max,e.fullField,e.max)):a&&l&&(u<e.min||u>e.max)&&r.push(Yt(s.messages[f].range,e.fullField,e.min,e.max))},Er="enum",Mw=function(e,t,i,r,s){e[Er]=Array.isArray(e[Er])?e[Er]:[],e[Er].indexOf(t)===-1&&r.push(Yt(s.messages[Er],e.fullField,e[Er].join(", ")))},Sw=function(e,t,i,r,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(Yt(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var o=new RegExp(e.pattern);o.test(t)||r.push(Yt(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},Ve={required:Mm,whitespace:vw,type:yw,range:bw,enum:Mw,pattern:Sw},ww=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t,"string")&&!e.required)return i();Ve.required(e,t,r,o,s,"string"),yt(t,"string")||(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s),Ve.pattern(e,t,r,o,s),e.whitespace===!0&&Ve.whitespace(e,t,r,o,s))}i(o)},Ew=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve.type(e,t,r,o,s)}i(o)},Tw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(t===""&&(t=void 0),yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Aw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve.type(e,t,r,o,s)}i(o)},Cw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),yt(t)||Ve.type(e,t,r,o,s)}i(o)},Rw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Lw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Pw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(t==null&&!e.required)return i();Ve.required(e,t,r,o,s,"array"),t!=null&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Dw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve.type(e,t,r,o,s)}i(o)},Iw="enum",Fw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve[Iw](e,t,r,o,s)}i(o)},Ow=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t,"string")&&!e.required)return i();Ve.required(e,t,r,o,s),yt(t,"string")||Ve.pattern(e,t,r,o,s)}i(o)},Nw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t,"date")&&!e.required)return i();if(Ve.required(e,t,r,o,s),!yt(t,"date")){var l;t instanceof Date?l=t:l=new Date(t),Ve.type(e,l,r,o,s),l&&Ve.range(e,l.getTime(),r,o,s)}}i(o)},Bw=function(e,t,i,r,s){var o=[],a=Array.isArray(t)?"array":typeof t;Ve.required(e,t,r,o,s,a),i(o)},Za=function(e,t,i,r,s){var o=e.type,a=[],l=e.required||!e.required&&r.hasOwnProperty(e.field);if(l){if(yt(t,o)&&!e.required)return i();Ve.required(e,t,r,a,s,o),yt(t,o)||Ve.type(e,t,r,a,s)}i(a)},zw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(yt(t)&&!e.required)return i();Ve.required(e,t,r,o,s)}i(o)},Us={string:ww,method:Ew,number:Tw,boolean:Aw,regexp:Cw,integer:Rw,float:Lw,array:Pw,object:Dw,enum:Fw,pattern:Ow,date:Nw,url:Za,hex:Za,email:Za,required:Bw,any:zw};function ac(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var lc=ac(),ao=function(){function n(t){this.rules=null,this._messages=lc,this.define(t)}var e=n.prototype;return e.define=function(i){var r=this;if(!i)throw new Error("Cannot configure a schema with no rules");if(typeof i!="object"||Array.isArray(i))throw new Error("Rules must be an object");this.rules={},Object.keys(i).forEach(function(s){var o=i[s];r.rules[s]=Array.isArray(o)?o:[o]})},e.messages=function(i){return i&&(this._messages=Wf(ac(),i)),this._messages},e.validate=function(i,r,s){var o=this;r===void 0&&(r={}),s===void 0&&(s=function(){});var a=i,l=r,c=s;if(typeof l=="function"&&(c=l,l={}),!this.rules||Object.keys(this.rules).length===0)return c&&c(null,a),Promise.resolve(a);function u(d){var p=[],_={};function S(y){if(Array.isArray(y)){var A;p=(A=p).concat.apply(A,y)}else p.push(y)}for(var w=0;w<d.length;w++)S(d[w]);p.length?(_=oc(p),c(p,_)):c(null,a)}if(l.messages){var f=this.messages();f===lc&&(f=ac()),Wf(f,l.messages),l.messages=f}else l.messages=this.messages();var h={},m=l.keys||Object.keys(this.rules);m.forEach(function(d){var p=o.rules[d],_=a[d];p.forEach(function(S){var w=S;typeof w.transform=="function"&&(a===i&&(a=ir({},a)),_=a[d]=w.transform(_)),typeof w=="function"?w={validator:w}:w=ir({},w),w.validator=o.getValidationMethod(w),w.validator&&(w.field=d,w.fullField=w.fullField||d,w.type=o.getType(w),h[d]=h[d]||[],h[d].push({rule:w,value:_,source:a,field:d}))})});var g={};return mw(h,l,function(d,p){var _=d.rule,S=(_.type==="object"||_.type==="array")&&(typeof _.fields=="object"||typeof _.defaultField=="object");S=S&&(_.required||!_.required&&d.value),_.field=d.field;function w(R,O){return ir({},O,{fullField:_.fullField+"."+R,fullFields:_.fullFields?[].concat(_.fullFields,[R]):[R]})}function y(R){R===void 0&&(R=[]);var O=Array.isArray(R)?R:[R];!l.suppressWarning&&O.length&&n.warning("async-validator:",O),O.length&&_.message!==void 0&&(O=[].concat(_.message));var b=O.map(Gf(_,a));if(l.first&&b.length)return g[_.field]=1,p(b);if(!S)p(b);else{if(_.required&&!d.value)return _.message!==void 0?b=[].concat(_.message).map(Gf(_,a)):l.error&&(b=[l.error(_,Yt(l.messages.required,_.field))]),p(b);var C={};_.defaultField&&Object.keys(d.value).map(function(z){C[z]=_.defaultField}),C=ir({},C,d.rule.fields);var B={};Object.keys(C).forEach(function(z){var ae=C[z],I=Array.isArray(ae)?ae:[ae];B[z]=I.map(w.bind(null,z))});var N=new n(B);N.messages(l.messages),d.rule.options&&(d.rule.options.messages=l.messages,d.rule.options.error=l.error),N.validate(d.value,d.rule.options||l,function(z){var ae=[];b&&b.length&&ae.push.apply(ae,b),z&&z.length&&ae.push.apply(ae,z),p(ae.length?ae:null)})}}var A;if(_.asyncValidator)A=_.asyncValidator(_,d.value,y,d.source,l);else if(_.validator){try{A=_.validator(_,d.value,y,d.source,l)}catch(R){console.error==null||console.error(R),l.suppressValidatorError||setTimeout(function(){throw R},0),y(R.message)}A===!0?y():A===!1?y(typeof _.message=="function"?_.message(_.fullField||_.field):_.message||(_.fullField||_.field)+" fails"):A instanceof Array?y(A):A instanceof Error&&y(A.message)}A&&A.then&&A.then(function(){return y()},function(R){return y(R)})},function(d){u(d)},a)},e.getType=function(i){if(i.type===void 0&&i.pattern instanceof RegExp&&(i.type="pattern"),typeof i.validator!="function"&&i.type&&!Us.hasOwnProperty(i.type))throw new Error(Yt("Unknown rule type %s",i.type));return i.type||"string"},e.getValidationMethod=function(i){if(typeof i.validator=="function")return i.validator;var r=Object.keys(i),s=r.indexOf("message");return s!==-1&&r.splice(s,1),r.length===1&&r[0]==="required"?Us.required:Us[this.getType(i)]||void 0},n}();ao.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");Us[e]=t};ao.warning=fw;ao.messages=lc;ao.validators=Us;const Uw=["","error","validating","success"],kw=Wn({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:vt([String,Array])},required:{type:Boolean,default:void 0},rules:{type:vt([Object,Array])},error:String,validateStatus:{type:String,values:Uw},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:ou}}),qf="ElLabelWrap";var Vw=ct({name:qf,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(n,{slots:e}){const t=xt(hs,void 0),i=xt(Js);i||OM(qf,"usage: <el-form-item><label-wrap /></el-form-item>");const r=Jt("form"),s=nt(),o=nt(0),a=()=>{var u;if((u=s.value)!=null&&u.firstElementChild){const f=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(f))}else return 0},l=(u="update")=>{Pn(()=>{e.default&&n.isAutoWidth&&(u==="update"?o.value=a():u==="remove"&&(t==null||t.deregisterLabelWidth(o.value)))})},c=()=>l("update");return gr(()=>{c()}),kc(()=>{l("remove")}),H0(()=>c()),zt(o,(u,f)=>{n.updateAll&&(t==null||t.registerLabelWidth(u,f))}),su(ye(()=>{var u,f;return(f=(u=s.value)==null?void 0:u.firstElementChild)!=null?f:null}),c),()=>{var u,f;if(!e)return null;const{isAutoWidth:h}=n;if(h){const m=t==null?void 0:t.autoLabelWidth,g=i==null?void 0:i.hasLabel,d={};if(g&&m&&m!=="auto"){const p=Math.max(0,Number.parseInt(m,10)-o.value),_=t.labelPosition==="left"?"marginRight":"marginLeft";p&&(d[_]=`${p}px`)}return dt("div",{ref:s,class:[r.be("item","label-wrap")],style:d},[(u=e.default)==null?void 0:u.call(e)])}else return dt(Mt,{ref:s},[(f=e.default)==null?void 0:f.call(e)])}}});const Hw=["role","aria-labelledby"],Gw=ct({name:"ElFormItem"}),Ww=ct({...Gw,props:kw,setup(n,{expose:e}){const t=n,i=$c(),r=xt(hs,void 0),s=xt(Js,void 0),o=Ta(void 0,{formItem:!1}),a=Jt("form-item"),l=vm().value,c=nt([]),u=nt(""),f=vM(u,100),h=nt(""),m=nt();let g,d=!1;const p=ye(()=>{if((r==null?void 0:r.labelPosition)==="top")return{};const U=Ql(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return U?{width:U}:{}}),_=ye(()=>{if((r==null?void 0:r.labelPosition)==="top"||(r==null?void 0:r.inline))return{};if(!t.label&&!t.labelWidth&&C)return{};const U=Ql(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return!t.label&&!i.label?{marginLeft:U}:{}}),S=ye(()=>[a.b(),a.m(o.value),a.is("error",u.value==="error"),a.is("validating",u.value==="validating"),a.is("success",u.value==="success"),a.is("required",I.value||t.required),a.is("no-asterisk",r==null?void 0:r.hideRequiredAsterisk),(r==null?void 0:r.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[a.m("feedback")]:r==null?void 0:r.statusIcon}]),w=ye(()=>tm(t.inlineMessage)?t.inlineMessage:(r==null?void 0:r.inlineMessage)||!1),y=ye(()=>[a.e("error"),{[a.em("error","inline")]:w.value}]),A=ye(()=>t.prop?tt(t.prop)?t.prop:t.prop.join("."):""),R=ye(()=>!!(t.label||i.label)),O=ye(()=>t.for||c.value.length===1?c.value[0]:void 0),b=ye(()=>!O.value&&R.value),C=!!s,B=ye(()=>{const U=r==null?void 0:r.model;if(!(!U||!t.prop))return ja(U,t.prop).value}),N=ye(()=>{const{required:U}=t,Y=[];t.rules&&Y.push(...jl(t.rules));const ue=r==null?void 0:r.rules;if(ue&&t.prop){const oe=ja(ue,t.prop).value;oe&&Y.push(...jl(oe))}if(U!==void 0){const oe=Y.map((xe,M)=>[xe,M]).filter(([xe])=>Object.keys(xe).includes("required"));if(oe.length>0)for(const[xe,M]of oe)xe.required!==U&&(Y[M]={...xe,required:U});else Y.push({required:U})}return Y}),z=ye(()=>N.value.length>0),ae=U=>N.value.filter(ue=>!ue.trigger||!U?!0:Array.isArray(ue.trigger)?ue.trigger.includes(U):ue.trigger===U).map(({trigger:ue,...oe})=>oe),I=ye(()=>N.value.some(U=>U.required)),te=ye(()=>{var U;return f.value==="error"&&t.showMessage&&((U=r==null?void 0:r.showMessage)!=null?U:!0)}),$=ye(()=>`${t.label||""}${(r==null?void 0:r.labelSuffix)||""}`),Q=U=>{u.value=U},se=U=>{var Y,ue;const{errors:oe,fields:xe}=U;(!oe||!xe)&&console.error(U),Q("error"),h.value=oe?(ue=(Y=oe==null?void 0:oe[0])==null?void 0:Y.message)!=null?ue:`${t.prop} is required`:"",r==null||r.emit("validate",t.prop,!1,h.value)},j=()=>{Q("success"),r==null||r.emit("validate",t.prop,!0,"")},J=async U=>{const Y=A.value;return new ao({[Y]:U}).validate({[Y]:B.value},{firstFields:!0}).then(()=>(j(),!0)).catch(oe=>(se(oe),Promise.reject(oe)))},ge=async(U,Y)=>{if(d||!t.prop)return!1;const ue=$e(Y);if(!z.value)return Y==null||Y(!1),!1;const oe=ae(U);return oe.length===0?(Y==null||Y(!0),!0):(Q("validating"),J(oe).then(()=>(Y==null||Y(!0),!0)).catch(xe=>{const{fields:M}=xe;return Y==null||Y(!1,M),ue?!1:Promise.reject(M)}))},re=()=>{Q(""),h.value="",d=!1},_e=async()=>{const U=r==null?void 0:r.model;if(!U||!t.prop)return;const Y=ja(U,t.prop);d=!0,Y.value=Tf(g),await Pn(),re(),d=!1},Te=U=>{c.value.includes(U)||c.value.push(U)},F=U=>{c.value=c.value.filter(Y=>Y!==U)};zt(()=>t.error,U=>{h.value=U||"",Q(U?"error":"")},{immediate:!0}),zt(()=>t.validateStatus,U=>Q(U||""));const P=mr({...ep(t),$el:m,size:o,validateState:u,labelId:l,inputIds:c,isGroup:b,hasLabel:R,addInputId:Te,removeInputId:F,resetField:_e,clearValidate:re,validate:ge});return Ci(Js,P),gr(()=>{t.prop&&(r==null||r.addField(P),g=Tf(B.value))}),kc(()=>{r==null||r.removeField(P)}),e({size:o,validateMessage:h,validateState:u,validate:ge,clearValidate:re,resetField:_e}),(U,Y)=>{var ue;return Le(),Ye("div",{ref_key:"formItemRef",ref:m,class:ke(H(S)),role:H(b)?"group":void 0,"aria-labelledby":H(b)?H(l):void 0},[dt(H(Vw),{"is-auto-width":H(p).width==="auto","update-all":((ue=H(r))==null?void 0:ue.labelWidth)==="auto"},{default:Et(()=>[H(R)?(Le(),ft(In(H(O)?"label":"div"),{key:0,id:H(l),for:H(O),class:ke(H(a).e("label")),style:Un(H(p))},{default:Et(()=>[St(U.$slots,"label",{label:H($)},()=>[yp(Mi(H($)),1)])]),_:3},8,["id","for","class","style"])):st("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),ot("div",{class:ke(H(a).e("content")),style:Un(H(_))},[St(U.$slots,"default"),dt(oo,{name:`${H(a).namespace.value}-zoom-in-top`},{default:Et(()=>[H(te)?St(U.$slots,"error",{key:0,error:h.value},()=>[ot("div",{class:ke(H(y))},Mi(h.value),3)]):st("v-if",!0)]),_:3},8,["name"])],6)],10,Hw)}}});var Sm=$n(Ww,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const hP=yr(ow,{FormItem:Sm}),dP=hm(Sm),$w=["start","center","end","space-around","space-between","space-evenly"],qw=["top","middle","bottom"],jw=Wn({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:$w,default:"start"},align:{type:String,values:qw,default:"top"}}),Xw=ct({name:"ElRow"}),Kw=ct({...Xw,props:jw,setup(n){const e=n,t=Jt("row"),i=ye(()=>e.gutter);Ci(mm,{gutter:i});const r=ye(()=>{const o={};return e.gutter&&(o.marginRight=o.marginLeft=`-${e.gutter/2}px`),o}),s=ye(()=>[t.b(),t.is(`justify-${e.justify}`,e.justify!=="start"),t.is(`align-${e.align}`,e.align!=="top")]);return(o,a)=>(Le(),ft(In(o.tag),{class:ke(H(s)),style:Un(H(r))},{default:Et(()=>[St(o.$slots,"default")]),_:3},8,["class","style"]))}});var Yw=$n(Kw,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const pP=yr(Yw),wm=["success","info","warning","error"],Ht=Qi({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:fs?document.body:void 0}),Zw=Wn({customClass:{type:String,default:Ht.customClass},center:{type:Boolean,default:Ht.center},dangerouslyUseHTMLString:{type:Boolean,default:Ht.dangerouslyUseHTMLString},duration:{type:Number,default:Ht.duration},icon:{type:Zs,default:Ht.icon},id:{type:String,default:Ht.id},message:{type:vt([String,Object,Function]),default:Ht.message},onClose:{type:vt(Function),required:!1},showClose:{type:Boolean,default:Ht.showClose},type:{type:String,values:wm,default:Ht.type},offset:{type:Number,default:Ht.offset},zIndex:{type:Number,default:Ht.zIndex},grouping:{type:Boolean,default:Ht.grouping},repeatNum:{type:Number,default:Ht.repeatNum}}),Jw={destroy:()=>!0},Fn=qd([]),Qw=n=>{const e=Fn.findIndex(r=>r.id===n),t=Fn[e];let i;return e>0&&(i=Fn[e-1]),{current:t,prev:i}},e2=n=>{const{prev:e}=Qw(n);return e?e.vm.exposed.bottom.value:0},t2=["id"],n2=["innerHTML"],i2=ct({name:"ElMessage"}),r2=ct({...i2,props:Zw,emits:Jw,setup(n,{expose:e}){const t=n,{Close:i}=k1,r=Jt("message"),s=nt(),o=nt(!1),a=nt(0);let l;const c=ye(()=>t.type?t.type==="error"?"danger":t.type:"info"),u=ye(()=>{const y=t.type;return{[r.bm("icon",y)]:y&&If[y]}}),f=ye(()=>t.icon||If[t.type]||""),h=ye(()=>e2(t.id)),m=ye(()=>t.offset+h.value),g=ye(()=>a.value+m.value),d=ye(()=>({top:`${m.value}px`,zIndex:t.zIndex}));function p(){t.duration!==0&&({stop:l}=yM(()=>{S()},t.duration))}function _(){l==null||l()}function S(){o.value=!1}function w({code:y}){y===G1.esc&&S()}return gr(()=>{p(),o.value=!0}),zt(()=>t.repeatNum,()=>{_(),p()}),bM(document,"keydown",w),su(s,()=>{a.value=s.value.getBoundingClientRect().height}),e({visible:o,bottom:g,close:S}),(y,A)=>(Le(),ft(oo,{name:H(r).b("fade"),onBeforeLeave:y.onClose,onAfterLeave:A[0]||(A[0]=R=>y.$emit("destroy")),persisted:""},{default:Et(()=>[Vc(ot("div",{id:y.id,ref_key:"messageRef",ref:s,class:ke([H(r).b(),{[H(r).m(y.type)]:y.type&&!y.icon},H(r).is("center",y.center),H(r).is("closable",y.showClose),y.customClass]),style:Un(H(d)),role:"alert",onMouseenter:_,onMouseleave:p},[y.repeatNum>1?(Le(),ft(H(SS),{key:0,value:y.repeatNum,type:H(c),class:ke(H(r).e("badge"))},null,8,["value","type","class"])):st("v-if",!0),H(f)?(Le(),ft(H(ti),{key:1,class:ke([H(r).e("icon"),H(u)])},{default:Et(()=>[(Le(),ft(In(H(f))))]),_:1},8,["class"])):st("v-if",!0),St(y.$slots,"default",{},()=>[y.dangerouslyUseHTMLString?(Le(),Ye(Mt,{key:1},[st(" Caution here, message could've been compromised, never use user's input as message "),ot("p",{class:ke(H(r).e("content")),innerHTML:y.message},null,10,n2)],2112)):(Le(),Ye("p",{key:0,class:ke(H(r).e("content"))},Mi(y.message),3))]),y.showClose?(Le(),ft(H(ti),{key:2,class:ke(H(r).e("closeBtn")),onClick:Tp(S,["stop"])},{default:Et(()=>[dt(H(i))]),_:1},8,["class","onClick"])):st("v-if",!0)],46,t2),[[jc,o.value]])]),_:3},8,["name","onBeforeLeave"]))}});var s2=$n(r2,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let o2=1;const Em=n=>{const e=!n||tt(n)||Zr(n)||$e(n)?{message:n}:n,t={...Ht,...e};if(!t.appendTo)t.appendTo=document.body;else if(tt(t.appendTo)){let i=document.querySelector(t.appendTo);DM(i)||(i=document.body),t.appendTo=i}return t},a2=n=>{const e=Fn.indexOf(n);if(e===-1)return;Fn.splice(e,1);const{handler:t}=n;t.close()},l2=({appendTo:n,...e},t)=>{const{nextZIndex:i}=tS(),r=`message_${o2++}`,s=e.onClose,o=document.createElement("div"),a={...e,zIndex:i()+e.zIndex,id:r,onClose:()=>{s==null||s(),a2(f)},onDestroy:()=>{ef(null,o)}},l=dt(s2,a,$e(a.message)||Zr(a.message)?{default:$e(a.message)?a.message:()=>a.message}:null);l.appContext=t||Qr._context,ef(l,o),n.appendChild(o.firstElementChild);const c=l.component,f={id:r,vnode:l,vm:c,handler:{close:()=>{c.exposed.visible.value=!1}},props:l.component.props};return f},Qr=(n={},e)=>{if(!fs)return{close:()=>{}};if(Fi(ic.max)&&Fn.length>=ic.max)return{close:()=>{}};const t=Em(n);if(t.grouping&&Fn.length){const r=Fn.find(({vnode:s})=>{var o;return((o=s.props)==null?void 0:o.message)===t.message});if(r)return r.props.repeatNum+=1,r.props.type=t.type,r.handler}const i=l2(t,e);return Fn.push(i),i.handler};wm.forEach(n=>{Qr[n]=(e={},t)=>{const i=Em(e);return Qr({...i,type:n},t)}});function c2(n){for(const e of Fn)(!n||n===e.props.type)&&e.handler.close()}Qr.closeAll=c2;Qr._context=null;const mP=H1(Qr,"$message");/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof window!="undefined";function u2(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const et=Object.assign;function Ja(n,e){const t={};for(const i in e){const r=e[i];t[i]=vn(r)?r.map(n):n(r)}return t}const ks=()=>{},vn=Array.isArray,f2=/\/$/,h2=n=>n.replace(f2,"");function Qa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=g2(i!=null?i:e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function d2(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function jf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function p2(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&es(e.matched[i],t.matched[r])&&Tm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function es(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Tm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!m2(n[t],e[t]))return!1;return!0}function m2(n,e){return vn(n)?Xf(n,e):vn(e)?Xf(e,n):n===e}function Xf(n,e){return vn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function g2(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var eo;(function(n){n.pop="pop",n.push="push"})(eo||(eo={}));var Vs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Vs||(Vs={}));function _2(n){if(!n)if(Vr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),h2(n)}const v2=/^[^#]+#/;function x2(n,e){return n.replace(v2,"#")+e}function y2(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Aa=()=>({left:window.pageXOffset,top:window.pageYOffset});function b2(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=y2(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Kf(n,e){return(history.state?history.state.position-e:-1)+n}const cc=new Map;function M2(n,e){cc.set(n,e)}function S2(n){const e=cc.get(n);return cc.delete(n),e}let w2=()=>location.protocol+"//"+location.host;function Am(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),jf(l,"")}return jf(t,n)+i+r}function E2(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=Am(n,location),g=t.value,d=e.value;let p=0;if(h){if(t.value=m,e.value=h,o&&o===g){o=null;return}p=d?h.position-d.position:0}else i(m);r.forEach(_=>{_(t.value,g,{delta:p,type:eo.pop,direction:p?p>0?Vs.forward:Vs.back:Vs.unknown})})};function l(){o=t.value}function c(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:h}=window;!h.state||h.replaceState(et({},h.state,{scroll:Aa()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Yf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Aa():null}}function T2(n){const{history:e,location:t}=window,i={value:Am(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:w2()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function o(l,c){const u=et({},e.state,Yf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=et({},r.value,e.state,{forward:l,scroll:Aa()});s(u.current,u,!0);const f=et({},Yf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function gP(n){n=_2(n);const e=T2(n),t=E2(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=et({location:"",base:n,go:i,createHref:x2.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function A2(n){return typeof n=="string"||n&&typeof n=="object"}function Cm(n){return typeof n=="string"||typeof n=="symbol"}const fi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Rm=Symbol("");var Zf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Zf||(Zf={}));function ts(n,e){return et(new Error,{type:n,[Rm]:!0},e)}function jn(n,e){return n instanceof Error&&Rm in n&&(e==null||!!(n.type&e))}const Jf="[^/]+?",C2={sensitive:!1,strict:!1,start:!0,end:!0},R2=/[.+*?^${}()[\]/\\]/g;function L2(n,e){const t=et({},C2,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(R2,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:d,optional:p,regexp:_}=h;s.push({name:g,repeatable:d,optional:p});const S=_||Jf;if(S!==Jf){m+=10;try{new RegExp(`(${S})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+y.message)}}let w=d?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(w=p&&c.length<2?`(?:/${w})`:"/"+w),p&&(w+="?"),r+=w,m+=20,p&&(m+=-8),d&&(m+=-20),S===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:d,optional:p}=m,_=g in c?c[g]:"";if(vn(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=vn(_)?_.join("/"):_;if(!S)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function P2(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function D2(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=P2(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Qf(i))return 1;if(Qf(r))return-1}return r.length-i.length}function Qf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const I2={type:0,value:""},F2=/[a-zA-Z0-9_]/;function O2(n){if(!n)return[[]];if(n==="/")return[[I2]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:F2.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function N2(n,e,t){const i=L2(O2(n.path),t),r=et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function B2(n,e){const t=[],i=new Map;e=nh({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,g=z2(u);g.aliasOf=h&&h.record;const d=nh(e,u),p=[g];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of w)p.push(et({},g,{components:h?h.record.components:g.components,path:y,aliasOf:h?h.record:g}))}let _,S;for(const w of p){const{path:y}=w;if(f&&y[0]!=="/"){const A=f.record.path,R=A[A.length-1]==="/"?"":"/";w.path=f.record.path+(y&&R+y)}if(_=N2(w,f,d),h?h.alias.push(_):(S=S||_,S!==_&&S.alias.push(_),m&&u.name&&!th(_)&&o(u.name)),g.children){const A=g.children;for(let R=0;R<A.length;R++)s(A[R],_,h&&h.children[R])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return S?()=>{o(S)}:ks}function o(u){if(Cm(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&D2(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Lm(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!th(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},g,d;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw ts(1,{location:u});d=h.record.name,m=et(eh(f.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&eh(u.params,h.keys.map(S=>S.name))),g=h.stringify(m)}else if("path"in u)g=u.path,h=t.find(S=>S.re.test(g)),h&&(m=h.parse(g),d=h.record.name);else{if(h=f.name?i.get(f.name):t.find(S=>S.re.test(f.path)),!h)throw ts(1,{location:u,currentLocation:f});d=h.record.name,m=et({},f.params,u.params),g=h.stringify(m)}const p=[];let _=h;for(;_;)p.unshift(_.record),_=_.parent;return{name:d,path:g,params:m,matched:p,meta:k2(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function eh(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function z2(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:U2(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function U2(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function th(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function k2(n){return n.reduce((e,t)=>et(e,t.meta),{})}function nh(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Lm(n,e){return e.children.some(t=>t===n||Lm(n,t))}const Pm=/#/g,V2=/&/g,H2=/\//g,G2=/=/g,W2=/\?/g,Dm=/\+/g,$2=/%5B/g,q2=/%5D/g,Im=/%5E/g,j2=/%60/g,Fm=/%7B/g,X2=/%7C/g,Om=/%7D/g,K2=/%20/g;function cu(n){return encodeURI(""+n).replace(X2,"|").replace($2,"[").replace(q2,"]")}function Y2(n){return cu(n).replace(Fm,"{").replace(Om,"}").replace(Im,"^")}function uc(n){return cu(n).replace(Dm,"%2B").replace(K2,"+").replace(Pm,"%23").replace(V2,"%26").replace(j2,"`").replace(Fm,"{").replace(Om,"}").replace(Im,"^")}function Z2(n){return uc(n).replace(G2,"%3D")}function J2(n){return cu(n).replace(Pm,"%23").replace(W2,"%3F")}function Q2(n){return n==null?"":J2(n).replace(H2,"%2F")}function ua(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function eE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Dm," "),o=s.indexOf("="),a=ua(o<0?s:s.slice(0,o)),l=o<0?null:ua(s.slice(o+1));if(a in e){let c=e[a];vn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ih(n){let e="";for(let t in n){const i=n[t];if(t=Z2(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(vn(i)?i.map(s=>s&&uc(s)):[i&&uc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function tE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const nE=Symbol(""),rh=Symbol(""),uu=Symbol(""),Nm=Symbol(""),fc=Symbol("");function Ss(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function yi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(ts(4,{from:t,to:e})):f instanceof Error?a(f):A2(f)?a(ts(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function el(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(iE(a)){const c=(a.__vccOpts||a)[e];c&&r.push(yi(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=u2(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&yi(h,t,i,s,o)()}))}}return r}function iE(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function sh(n){const e=xt(uu),t=xt(Nm),i=ye(()=>e.resolve(H(n.to))),r=ye(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(es.bind(null,u));if(h>-1)return h;const m=oh(l[c-2]);return c>1&&oh(u)===m&&f[f.length-1].path!==m?f.findIndex(es.bind(null,l[c-2])):h}),s=ye(()=>r.value>-1&&aE(t.params,i.value.params)),o=ye(()=>r.value>-1&&r.value===t.matched.length-1&&Tm(t.params,i.value.params));function a(l={}){return oE(l)?e[H(n.replace)?"replace":"push"](H(n.to)).catch(ks):Promise.resolve()}return{route:i,href:ye(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const rE=ct({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sh,setup(n,{slots:e}){const t=mr(sh(n)),{options:i}=xt(uu),r=ye(()=>({[ah(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ah(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:qc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),sE=rE;function oE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function aE(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!vn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function oh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ah=(n,e,t)=>n!=null?n:e!=null?e:t,lE=ct({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=xt(fc),r=ye(()=>n.route||i.value),s=xt(rh,0),o=ye(()=>{let c=H(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ye(()=>r.value.matched[o.value]);Ci(rh,ye(()=>o.value+1)),Ci(nE,a),Ci(fc,r);const l=nt();return zt(()=>[l.value,a.value,n.name],([c,u,f],[h,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!es(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return lh(t.default,{Component:h,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=qc(h,et({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return lh(t.default,{Component:p,route:c})||p}}});function lh(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const cE=lE;function _P(n){const e=B2(n.routes,n),t=n.parseQuery||eE,i=n.stringifyQuery||ih,r=n.history,s=Ss(),o=Ss(),a=Ss(),l=Yo(fi);let c=fi;Vr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ja.bind(null,F=>""+F),f=Ja.bind(null,Q2),h=Ja.bind(null,ua);function m(F,P){let U,Y;return Cm(F)?(U=e.getRecordMatcher(F),Y=P):Y=F,e.addRoute(Y,U)}function g(F){const P=e.getRecordMatcher(F);P&&e.removeRoute(P)}function d(){return e.getRoutes().map(F=>F.record)}function p(F){return!!e.getRecordMatcher(F)}function _(F,P){if(P=et({},P||l.value),typeof F=="string"){const M=Qa(t,F,P.path),T=e.resolve({path:M.path},P),k=r.createHref(M.fullPath);return et(M,T,{params:h(T.params),hash:ua(M.hash),redirectedFrom:void 0,href:k})}let U;if("path"in F)U=et({},F,{path:Qa(t,F.path,P.path).path});else{const M=et({},F.params);for(const T in M)M[T]==null&&delete M[T];U=et({},F,{params:f(F.params)}),P.params=f(P.params)}const Y=e.resolve(U,P),ue=F.hash||"";Y.params=u(h(Y.params));const oe=d2(i,et({},F,{hash:Y2(ue),path:Y.path})),xe=r.createHref(oe);return et({fullPath:oe,hash:ue,query:i===ih?tE(F.query):F.query||{}},Y,{redirectedFrom:void 0,href:xe})}function S(F){return typeof F=="string"?Qa(t,F,l.value.path):et({},F)}function w(F,P){if(c!==F)return ts(8,{from:P,to:F})}function y(F){return O(F)}function A(F){return y(et(S(F),{replace:!0}))}function R(F){const P=F.matched[F.matched.length-1];if(P&&P.redirect){const{redirect:U}=P;let Y=typeof U=="function"?U(F):U;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=S(Y):{path:Y},Y.params={}),et({query:F.query,hash:F.hash,params:"path"in Y?{}:F.params},Y)}}function O(F,P){const U=c=_(F),Y=l.value,ue=F.state,oe=F.force,xe=F.replace===!0,M=R(U);if(M)return O(et(S(M),{state:typeof M=="object"?et({},ue,M.state):ue,force:oe,replace:xe}),P||U);const T=U;T.redirectedFrom=P;let k;return!oe&&p2(i,Y,U)&&(k=ts(16,{to:T,from:Y}),J(Y,Y,!0,!1)),(k?Promise.resolve(k):C(T,Y)).catch(K=>jn(K)?jn(K,2)?K:j(K):Q(K,T,Y)).then(K=>{if(K){if(jn(K,2))return O(et({replace:xe},S(K.to),{state:typeof K.to=="object"?et({},ue,K.to.state):ue,force:oe}),P||T)}else K=N(T,Y,!0,xe,ue);return B(T,Y,K),K})}function b(F,P){const U=w(F,P);return U?Promise.reject(U):Promise.resolve()}function C(F,P){let U;const[Y,ue,oe]=uE(F,P);U=el(Y.reverse(),"beforeRouteLeave",F,P);for(const M of Y)M.leaveGuards.forEach(T=>{U.push(yi(T,F,P))});const xe=b.bind(null,F,P);return U.push(xe),Tr(U).then(()=>{U=[];for(const M of s.list())U.push(yi(M,F,P));return U.push(xe),Tr(U)}).then(()=>{U=el(ue,"beforeRouteUpdate",F,P);for(const M of ue)M.updateGuards.forEach(T=>{U.push(yi(T,F,P))});return U.push(xe),Tr(U)}).then(()=>{U=[];for(const M of F.matched)if(M.beforeEnter&&!P.matched.includes(M))if(vn(M.beforeEnter))for(const T of M.beforeEnter)U.push(yi(T,F,P));else U.push(yi(M.beforeEnter,F,P));return U.push(xe),Tr(U)}).then(()=>(F.matched.forEach(M=>M.enterCallbacks={}),U=el(oe,"beforeRouteEnter",F,P),U.push(xe),Tr(U))).then(()=>{U=[];for(const M of o.list())U.push(yi(M,F,P));return U.push(xe),Tr(U)}).catch(M=>jn(M,8)?M:Promise.reject(M))}function B(F,P,U){for(const Y of a.list())Y(F,P,U)}function N(F,P,U,Y,ue){const oe=w(F,P);if(oe)return oe;const xe=P===fi,M=Vr?history.state:{};U&&(Y||xe?r.replace(F.fullPath,et({scroll:xe&&M&&M.scroll},ue)):r.push(F.fullPath,ue)),l.value=F,J(F,P,U,xe),j()}let z;function ae(){z||(z=r.listen((F,P,U)=>{if(!Te.listening)return;const Y=_(F),ue=R(Y);if(ue){O(et(ue,{replace:!0}),Y).catch(ks);return}c=Y;const oe=l.value;Vr&&M2(Kf(oe.fullPath,U.delta),Aa()),C(Y,oe).catch(xe=>jn(xe,12)?xe:jn(xe,2)?(O(xe.to,Y).then(M=>{jn(M,20)&&!U.delta&&U.type===eo.pop&&r.go(-1,!1)}).catch(ks),Promise.reject()):(U.delta&&r.go(-U.delta,!1),Q(xe,Y,oe))).then(xe=>{xe=xe||N(Y,oe,!1),xe&&(U.delta&&!jn(xe,8)?r.go(-U.delta,!1):U.type===eo.pop&&jn(xe,20)&&r.go(-1,!1)),B(Y,oe,xe)}).catch(ks)}))}let I=Ss(),te=Ss(),$;function Q(F,P,U){j(F);const Y=te.list();return Y.length?Y.forEach(ue=>ue(F,P,U)):console.error(F),Promise.reject(F)}function se(){return $&&l.value!==fi?Promise.resolve():new Promise((F,P)=>{I.add([F,P])})}function j(F){return $||($=!F,ae(),I.list().forEach(([P,U])=>F?U(F):P()),I.reset()),F}function J(F,P,U,Y){const{scrollBehavior:ue}=n;if(!Vr||!ue)return Promise.resolve();const oe=!U&&S2(Kf(F.fullPath,0))||(Y||!U)&&history.state&&history.state.scroll||null;return Pn().then(()=>ue(F,P,oe)).then(xe=>xe&&b2(xe)).catch(xe=>Q(xe,F,P))}const ge=F=>r.go(F);let re;const _e=new Set,Te={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:p,getRoutes:d,resolve:_,options:n,push:y,replace:A,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:se,install(F){const P=this;F.component("RouterLink",sE),F.component("RouterView",cE),F.config.globalProperties.$router=P,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>H(l)}),Vr&&!re&&l.value===fi&&(re=!0,y(r.location).catch(ue=>{}));const U={};for(const ue in fi)U[ue]=ye(()=>l.value[ue]);F.provide(uu,P),F.provide(Nm,mr(U)),F.provide(fc,l);const Y=F.unmount;_e.add(F),F.unmount=function(){_e.delete(F),_e.size<1&&(c=fi,z&&z(),z=null,l.value=fi,re=!1,$=!1),Y()}}};return Te}function Tr(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function uE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>es(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>es(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="141",fE=0,ch=1,hE=2,Bm=1,dE=2,Ls=3,to=0,_n=1,ns=2,pE=1,Ri=0,Xr=1,uh=2,fh=3,hh=4,mE=5,Hr=100,gE=101,_E=102,dh=103,ph=104,vE=200,xE=201,yE=202,bE=203,zm=204,Um=205,ME=206,SE=207,wE=208,EE=209,TE=210,AE=0,CE=1,RE=2,hc=3,LE=4,PE=5,DE=6,IE=7,Ca=0,FE=1,OE=2,ni=0,NE=1,BE=2,zE=3,UE=4,kE=5,km=300,is=301,rs=302,dc=303,pc=304,Ra=306,mc=1e3,dn=1001,gc=1002,Wt=1003,mh=1004,gh=1005,tn=1006,VE=1007,La=1008,dr=1009,HE=1010,GE=1011,Vm=1012,WE=1013,rr=1014,sr=1015,no=1016,$E=1017,qE=1018,Kr=1020,jE=1021,XE=1022,mn=1023,KE=1024,YE=1025,lr=1026,ss=1027,ZE=1028,JE=1029,QE=1030,eT=1031,tT=1033,tl=33776,nl=33777,il=33778,rl=33779,_h=35840,vh=35841,xh=35842,yh=35843,nT=36196,bh=37492,Mh=37496,Sh=37808,wh=37809,Eh=37810,Th=37811,Ah=37812,Ch=37813,Rh=37814,Lh=37815,Ph=37816,Dh=37817,Ih=37818,Fh=37819,Oh=37820,Nh=37821,Bh=36492,pr=3e3,ut=3001,iT=3200,rT=3201,ps=0,sT=1,ei="srgb",or="srgb-linear",sl=7680,oT=519,zh=35044,Uh="300 es",_c=1035;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=[];for(let n=0;n<256;n++)wt[n]=(n<16?"0":"")+n.toString(16);const ol=Math.PI/180,kh=180/Math.PI;function lo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function aT(n,e){return(n%e+e)%e}function al(n,e,t){return(1-t)*n+t*e}function Vh(n){return(n&n-1)===0&&n!==0}function vc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Xe{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],g=i[8],d=r[0],p=r[3],_=r[6],S=r[1],w=r[4],y=r[7],A=r[2],R=r[5],O=r[8];return s[0]=o*d+a*S+l*A,s[3]=o*p+a*w+l*R,s[6]=o*_+a*y+l*O,s[1]=c*d+u*S+f*A,s[4]=c*p+u*w+f*R,s[7]=c*_+u*y+f*O,s[2]=h*d+m*S+g*A,s[5]=h*p+m*w+g*R,s[8]=h*_+m*y+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,g=t*f+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(r*c-u*i)*d,e[2]=(a*i-r*o)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=m*d,e[7]=(i*l-c*t)*d,e[8]=(o*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*c,r[6]=t*a+i*u,r[1]=-i*s+t*l,r[4]=-i*o+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Hm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ll={[ei]:{[or]:cr},[or]:{[ei]:ea}},sn={legacyMode:!0,get workingColorSpace(){return or},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ll[e]&&ll[e][t]!==void 0){const i=ll[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_t={r:0,g:0,b:0},on={h:0,s:0,l:0},To={h:0,s:0,l:0};function cl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ao(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=or){return this.r=e,this.g=t,this.b=i,sn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=or){if(e=aT(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=cl(o,s,e+1/3),this.g=cl(o,s,e),this.b=cl(o,s,e-1/3)}return sn.toWorkingColorSpace(this,r),this}setStyle(e,t=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,sn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,sn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,sn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,sn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ei){const i=Gm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return sn.fromWorkingColorSpace(Ao(this,_t),e),$t(_t.r*255,0,255)<<16^$t(_t.g*255,0,255)<<8^$t(_t.b*255,0,255)<<0}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=or){sn.fromWorkingColorSpace(Ao(this,_t),t);const i=_t.r,r=_t.g,s=_t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=or){return sn.fromWorkingColorSpace(Ao(this,_t),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=ei){return sn.fromWorkingColorSpace(Ao(this,_t),e),e!==ei?`color(${e} ${_t.r} ${_t.g} ${_t.b})`:`rgb(${_t.r*255|0},${_t.g*255|0},${_t.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(on),on.h+=e,on.s+=t,on.l+=i,this.setHSL(on.h,on.s,on.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(To);const i=al(on.h,To.h,t),r=al(on.s,To.s,t),s=al(on.l,To.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ne.NAMES=Gm;let Ar;class Wm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ar===void 0&&(Ar=fa("canvas")),Ar.width=e.width,Ar.height=e.height;const i=Ar.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cr(t[i]/255)*255):t[i]=cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class $m{constructor(e=null){this.isSource=!0,this.uuid=lo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ul(r[o].image)):s.push(ul(r[o]))}else s=ul(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ul(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Wm.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lT=0;class xn extends ms{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=dn,r=dn,s=tn,o=La,a=mn,l=dr,c=1,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=lo(),this.name="",this.source=new $m(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new On,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=km;class Dt{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(m+1)/2,A=(_+1)/2,R=(u+h)/4,O=(f+d)/4,b=(g+p)/4;return w>y&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=R/i,s=O/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=O/s,r=b/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-d)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Li extends ms{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:tn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $m(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qm extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cT extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==g){let p=1-a;const _=l*h+c*m+u*g+f*d,S=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const A=Math.sqrt(w),R=Math.atan2(A,_*S);p=Math.sin(p*R)/A,a=Math.sin(a*R)/A}const y=a*S;if(l=l*p+h*y,c=c*p+m*y,u=u*p+g*y,f=f*p+d*y,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*h,e[t+1]=l*g+u*h+c*f-a*m,e[t+2]=c*g+u*m+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"YXZ":this._x=h*u*f+c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"ZXY":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f-h*m*g;break;case"ZYX":this._x=h*u*f-c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f+h*m*g;break;case"YZX":this._x=h*u*f+c*m*g,this._y=c*m*f+h*u*g,this._z=c*u*g-h*m*f,this._w=c*u*f-h*m*g;break;case"XZY":this._x=h*u*f-c*m*g,this._y=c*m*f-h*u*g,this._z=c*u*g+h*m*f,this._w=c*u*f+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Hh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new G,Hh=new co;class uo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Gi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gi)}else i.boundingBox===null&&i.computeBoundingBox(),hl.copy(i.boundingBox),hl.applyMatrix4(e.matrixWorld),this.union(hl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),Co.subVectors(this.max,ws),Cr.subVectors(e.a,ws),Rr.subVectors(e.b,ws),Lr.subVectors(e.c,ws),hi.subVectors(Rr,Cr),di.subVectors(Lr,Rr),Wi.subVectors(Cr,Lr);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Wi.z,Wi.y,hi.z,0,-hi.x,di.z,0,-di.x,Wi.z,0,-Wi.x,-hi.y,hi.x,0,-di.y,di.x,0,-Wi.y,Wi.x,0];return!dl(t,Cr,Rr,Lr,Co)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Cr,Rr,Lr,Co))?!1:(Ro.crossVectors(hi,di),t=[Ro.x,Ro.y,Ro.z],dl(t,Cr,Rr,Lr,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new G,new G,new G,new G,new G,new G,new G,new G],Gi=new G,hl=new uo,Cr=new G,Rr=new G,Lr=new G,hi=new G,di=new G,Wi=new G,ws=new G,Co=new G,Ro=new G,$i=new G;function dl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$i.fromArray(n,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uT=new uo,Gh=new G,Lo=new G,pl=new G;class hu{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){pl.subVectors(e,this.center);const t=pl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(pl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Lo.set(0,0,1).multiplyScalar(e.radius):Lo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Gh.copy(e.center).add(Lo)),this.expandByPoint(Gh.copy(e.center).sub(Lo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new G,ml=new G,Po=new G,pi=new G,gl=new G,Do=new G,_l=new G;class fT{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.direction).multiplyScalar(t).add(this.origin),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ml.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(ml);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Po),a=pi.dot(this.direction),l=-pi.dot(Po),c=pi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Po).multiplyScalar(h).add(ml),m}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){gl.subVectors(t,e),Do.subVectors(i,e),_l.crossVectors(gl,Do);let o=this.direction.dot(_l),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(Do.crossVectors(pi,Do));if(l<0)return null;const c=a*this.direction.dot(gl.cross(pi));if(c<0||l+c>o)return null;const u=-a*pi.dot(_l);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,c,u,f,h,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hT,e,dT)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),mi.crossVectors(i,qt),mi.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),mi.crossVectors(i,qt)),mi.normalize(),Io.crossVectors(qt,mi),r[0]=mi.x,r[4]=Io.x,r[8]=qt.x,r[1]=mi.y,r[5]=Io.y,r[9]=qt.y,r[2]=mi.z,r[6]=Io.z,r[10]=qt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],g=i[2],d=i[6],p=i[10],_=i[14],S=i[3],w=i[7],y=i[11],A=i[15],R=r[0],O=r[4],b=r[8],C=r[12],B=r[1],N=r[5],z=r[9],ae=r[13],I=r[2],te=r[6],$=r[10],Q=r[14],se=r[3],j=r[7],J=r[11],ge=r[15];return s[0]=o*R+a*B+l*I+c*se,s[4]=o*O+a*N+l*te+c*j,s[8]=o*b+a*z+l*$+c*J,s[12]=o*C+a*ae+l*Q+c*ge,s[1]=u*R+f*B+h*I+m*se,s[5]=u*O+f*N+h*te+m*j,s[9]=u*b+f*z+h*$+m*J,s[13]=u*C+f*ae+h*Q+m*ge,s[2]=g*R+d*B+p*I+_*se,s[6]=g*O+d*N+p*te+_*j,s[10]=g*b+d*z+p*$+_*J,s[14]=g*C+d*ae+p*Q+_*ge,s[3]=S*R+w*B+y*I+A*se,s[7]=S*O+w*N+y*te+A*j,s[11]=S*b+w*z+y*$+A*J,s[15]=S*C+w*ae+y*Q+A*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+d*(+t*l*m-t*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+_*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],S=f*p*c-d*h*c+d*l*m-a*p*m-f*l*_+a*h*_,w=g*h*c-u*p*c-g*l*m+o*p*m+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*m-o*d*m-u*a*_+o*f*_,A=g*f*l-u*d*l-g*a*h+o*d*h+u*a*p-o*f*p,R=t*S+i*w+r*y+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=S*O,e[1]=(d*h*s-f*p*s-d*r*m+i*p*m+f*r*_-i*h*_)*O,e[2]=(a*p*s-d*l*s+d*r*c-i*p*c-a*r*_+i*l*_)*O,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*O,e[4]=w*O,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*_+t*h*_)*O,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*_-t*l*_)*O,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*m+t*l*m)*O,e[8]=y*O,e[9]=(g*f*s-u*d*s-g*i*m+t*d*m+u*i*_-t*f*_)*O,e[10]=(o*d*s-g*a*s+g*i*c-t*d*c-o*i*_+t*a*_)*O,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*O,e[12]=A*O,e[13]=(u*d*r-g*f*r+g*i*h-t*d*h-u*i*p+t*f*p)*O,e[14]=(g*a*r-o*d*r-g*i*l+t*d*l+o*i*p-t*a*p)*O,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,g=s*f,d=o*u,p=o*f,_=a*f,S=l*c,w=l*u,y=l*f,A=i.x,R=i.y,O=i.z;return r[0]=(1-(d+_))*A,r[1]=(m+y)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(m-y)*R,r[5]=(1-(h+_))*R,r[6]=(p+S)*R,r[7]=0,r[8]=(g+w)*O,r[9]=(p-S)*O,r[10]=(1-(h+d))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,f=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=f,an.elements[9]*=f,an.elements[10]*=f,t.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,h=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pr=new G,an=new It,hT=new G(0,0,0),dT=new G(1,1,1),mi=new G,Io=new G,qt=new G,Wh=new It,$h=new co;class fo{constructor(e=0,t=0,i=0,r=fo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}fo.DefaultOrder="XYZ";fo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pT=0;const qh=new G,Dr=new co,Yn=new It,Fo=new G,Es=new G,mT=new G,gT=new co,jh=new G(1,0,0),Xh=new G(0,1,0),Kh=new G(0,0,1),_T={type:"added"},Yh={type:"removed"};class yn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DefaultUp.clone();const e=new G,t=new fo,i=new co,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new On}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=yn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(Kh,e)}translateOnAxis(e,t){return qh.copy(e).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(Kh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Es,Fo,this.up):Yn.lookAt(Fo,Es,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Yn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_T)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,mT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,gT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DefaultUp=new G(0,1,0);yn.DefaultMatrixAutoUpdate=!0;const ln=new G,Zn=new G,vl=new G,Jn=new G,Ir=new G,Fr=new G,Zh=new G,xl=new G,yl=new G,bl=new G;class Dn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Zn.subVectors(i,t),vl.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Zn),l=ln.dot(vl),c=Zn.dot(Zn),u=Zn.dot(vl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Jn),l.set(0,0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Zn.subVectors(e,t),ln.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),ln.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Dn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Fr.subVectors(s,i),xl.subVectors(e,i);const l=Ir.dot(xl),c=Fr.dot(xl);if(l<=0&&c<=0)return t.copy(i);yl.subVectors(e,r);const u=Ir.dot(yl),f=Fr.dot(yl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ir,o);bl.subVectors(e,s);const m=Ir.dot(bl),g=Fr.dot(bl);if(g>=0&&m<=g)return t.copy(s);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Fr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Zh.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Zh,a);const _=1/(p+d+h);return o=d*_,a=h*_,t.copy(i).addScaledVector(Ir,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vT=0;class Ct extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Xr,this.side=to,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zm,this.blendDst=Um,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===pE;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==to&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Ct.fromType=function(){return null};class du extends Ct{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new G,Oo=new Xe;class Bn{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=zh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ne),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Xe),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new G),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Dt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Xm extends Bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Km extends Bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ur extends Bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xT=0;const en=new It,Ml=new yn,Or=new G,jt=new uo,Ts=new uo,bt=new G;class br extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?Km:Xm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new On().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,i){return en.makeTranslation(e,t,i),this.applyMatrix4(en),this}scale(e,t,i){return en.makeScale(e,t,i),this.applyMatrix4(en),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ur(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(jt.min,Ts.min),jt.expandByPoint(bt),bt.addVectors(jt.max,Ts.max),jt.expandByPoint(bt)):(jt.expandByPoint(Ts.min),jt.expandByPoint(Ts.max))}jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(Or.fromBufferAttribute(e,c),bt.add(Or)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let B=0;B<a;B++)c[B]=new G,u[B]=new G;const f=new G,h=new G,m=new G,g=new Xe,d=new Xe,p=new Xe,_=new G,S=new G;function w(B,N,z){f.fromArray(r,B*3),h.fromArray(r,N*3),m.fromArray(r,z*3),g.fromArray(o,B*2),d.fromArray(o,N*2),p.fromArray(o,z*2),h.sub(f),m.sub(f),d.sub(g),p.sub(g);const ae=1/(d.x*p.y-p.x*d.y);!isFinite(ae)||(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(ae),S.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(ae),c[B].add(_),c[N].add(_),c[z].add(_),u[B].add(S),u[N].add(S),u[z].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let B=0,N=y.length;B<N;++B){const z=y[B],ae=z.start,I=z.count;for(let te=ae,$=ae+I;te<$;te+=3)w(i[te+0],i[te+1],i[te+2])}const A=new G,R=new G,O=new G,b=new G;function C(B){O.fromArray(s,B*3),b.copy(O);const N=c[B];A.copy(N),A.sub(O.multiplyScalar(O.dot(N))).normalize(),R.crossVectors(b,N);const ae=R.dot(u[B])<0?-1:1;l[B*4]=A.x,l[B*4+1]=A.y,l[B*4+2]=A.z,l[B*4+3]=ae}for(let B=0,N=y.length;B<N;++B){const z=y[B],ae=z.start,I=z.count;for(let te=ae,$=ae+I;te<$;te+=3)C(i[te+0]),C(i[te+1]),C(i[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Bn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new br,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new It,Nr=new fT,Sl=new hu,gi=new G,_i=new G,vi=new G,wl=new G,El=new G,Tl=new G,No=new G,Bo=new G,zo=new G,Uo=new Xe,ko=new Xe,Vo=new Xe,Al=new G,Ho=new G;class wi extends yn{constructor(e=new br,t=new du){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Sl.copy(i.boundingSphere),Sl.applyMatrix4(s),e.ray.intersectsSphere(Sl)===!1)||(Jh.copy(s).invert(),Nr.copy(e.ray).applyMatrix4(Jh),i.boundingBox!==null&&Nr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,f=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,p=m.length;d<p;d++){const _=m[d],S=r[_.materialIndex],w=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let A=w,R=y;A<R;A+=3){const O=a.getX(A),b=a.getX(A+1),C=a.getX(A+2);o=Go(this,S,e,Nr,l,c,u,f,h,O,b,C),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=d,S=p;_<S;_+=3){const w=a.getX(_),y=a.getX(_+1),A=a.getX(_+2);o=Go(this,r,e,Nr,l,c,u,f,h,w,y,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,p=m.length;d<p;d++){const _=m[d],S=r[_.materialIndex],w=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let A=w,R=y;A<R;A+=3){const O=A,b=A+1,C=A+2;o=Go(this,S,e,Nr,l,c,u,f,h,O,b,C),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,S=p;_<S;_+=3){const w=_,y=_+1,A=_+2;o=Go(this,r,e,Nr,l,c,u,f,h,w,y,A),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function yT(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==ns,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:n}}function Go(n,e,t,i,r,s,o,a,l,c,u,f){gi.fromBufferAttribute(r,c),_i.fromBufferAttribute(r,u),vi.fromBufferAttribute(r,f);const h=n.morphTargetInfluences;if(s&&h){No.set(0,0,0),Bo.set(0,0,0),zo.set(0,0,0);for(let g=0,d=s.length;g<d;g++){const p=h[g],_=s[g];p!==0&&(wl.fromBufferAttribute(_,c),El.fromBufferAttribute(_,u),Tl.fromBufferAttribute(_,f),o?(No.addScaledVector(wl,p),Bo.addScaledVector(El,p),zo.addScaledVector(Tl,p)):(No.addScaledVector(wl.sub(gi),p),Bo.addScaledVector(El.sub(_i),p),zo.addScaledVector(Tl.sub(vi),p)))}gi.add(No),_i.add(Bo),vi.add(zo)}n.isSkinnedMesh&&(n.boneTransform(c,gi),n.boneTransform(u,_i),n.boneTransform(f,vi));const m=yT(n,e,t,i,gi,_i,vi,Al);if(m){a&&(Uo.fromBufferAttribute(a,c),ko.fromBufferAttribute(a,u),Vo.fromBufferAttribute(a,f),m.uv=Dn.getUV(Al,gi,_i,vi,Uo,ko,Vo,new Xe)),l&&(Uo.fromBufferAttribute(l,c),ko.fromBufferAttribute(l,u),Vo.fromBufferAttribute(l,f),m.uv2=Dn.getUV(Al,gi,_i,vi,Uo,ko,Vo,new Xe));const g={a:c,b:u,c:f,normal:new G,materialIndex:0};Dn.getNormal(gi,_i,vi,g.normal),m.face=g}return m}class ho extends br{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ur(c,3)),this.setAttribute("normal",new ur(u,3)),this.setAttribute("uv",new ur(f,2));function g(d,p,_,S,w,y,A,R,O,b,C){const B=y/O,N=A/b,z=y/2,ae=A/2,I=R/2,te=O+1,$=b+1;let Q=0,se=0;const j=new G;for(let J=0;J<$;J++){const ge=J*N-ae;for(let re=0;re<te;re++){const _e=re*B-z;j[d]=_e*S,j[p]=ge*w,j[_]=I,c.push(j.x,j.y,j.z),j[d]=0,j[p]=0,j[_]=R>0?1:-1,u.push(j.x,j.y,j.z),f.push(re/O),f.push(1-J/b),Q+=1}}for(let J=0;J<b;J++)for(let ge=0;ge<O;ge++){const re=h+ge+te*J,_e=h+ge+te*(J+1),Te=h+(ge+1)+te*(J+1),F=h+(ge+1)+te*J;l.push(re,_e,F),l.push(_e,Te,F),se+=6}a.addGroup(m,se,C),m+=se,h+=Q}}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(n){const e={};for(let t=0;t<n.length;t++){const i=os(n[t]);for(const r in i)e[r]=i[r]}return e}const bT={clone:os,merge:Rt};var MT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ST=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends Ct{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=MT,this.fragmentShader=ST,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ym extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Ym{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ol*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=90,zr=1;class wT extends yn{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new fn(Br,zr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new G(1,0,0)),this.add(r);const s=new fn(Br,zr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new G(-1,0,0)),this.add(s);const o=new fn(Br,zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new G(0,1,0)),this.add(o);const a=new fn(Br,zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new G(0,-1,0)),this.add(a);const l=new fn(Br,zr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new G(0,0,1)),this.add(l);const c=new fn(Br,zr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new G(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ni,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Zm extends xn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ET extends Li{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ho(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Ri});s.uniforms.tEquirect.value=t;const o=new wi(r,s),a=t.minFilter;return t.minFilter===La&&(t.minFilter=tn),new wT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Cl=new G,TT=new G,AT=new On;class Xi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Cl.subVectors(i,t).cross(TT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Cl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||AT.getNormalMatrix(e),r=this.coplanarPoint(Cl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new hu,Wo=new G;class Jm{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,o=new Xi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],g=i[10],d=i[11],p=i[12],_=i[13],S=i[14],w=i[15];return t[0].setComponents(a-r,f-l,d-h,w-p).normalize(),t[1].setComponents(a+r,f+l,d+h,w+p).normalize(),t[2].setComponents(a+s,f+c,d+m,w+_).normalize(),t[3].setComponents(a-s,f-c,d-m,w-_).normalize(),t[4].setComponents(a-o,f-u,d-g,w-S).normalize(),t[5].setComponents(a+o,f+u,d+g,w+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function CT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class pu extends br{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const S=_*h-o;for(let w=0;w<c;w++){const y=w*f-s;g.push(y,-S,0),d.push(0,0,1),p.push(w/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<a;S++){const w=S+c*_,y=S+c*(_+1),A=S+1+c*(_+1),R=S+1+c*_;m.push(w,y,R),m.push(y,A,R)}this.setIndex(m),this.setAttribute("position",new ur(g,3)),this.setAttribute("normal",new ur(d,3)),this.setAttribute("uv",new ur(p,2))}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}var RT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT="vec3 transformed = vec3( position );",NT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,zT=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,UT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,XT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t3="gl_FragColor = linearToOutputTexel( gl_FragColor );",n3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,d3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m3=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,g3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_3=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,v3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,y3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,M3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,S3=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w3=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,A3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,P3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,U3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,k3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,V3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,H3=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,j3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,X3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,K3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Y3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Q3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sA=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,oA=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aA=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,lA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_A=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,vA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,xA=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yA=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bA=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,MA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,SA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,EA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AA=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RA=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,LA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,DA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,NA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$A=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:RT,alphamap_pars_fragment:LT,alphatest_fragment:PT,alphatest_pars_fragment:DT,aomap_fragment:IT,aomap_pars_fragment:FT,begin_vertex:OT,beginnormal_vertex:NT,bsdfs:BT,iridescence_fragment:zT,bumpmap_pars_fragment:UT,clipping_planes_fragment:kT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:WT,color_pars_fragment:$T,color_pars_vertex:qT,color_vertex:jT,common:XT,cube_uv_reflection_fragment:KT,defaultnormal_vertex:YT,displacementmap_pars_vertex:ZT,displacementmap_vertex:JT,emissivemap_fragment:QT,emissivemap_pars_fragment:e3,encodings_fragment:t3,encodings_pars_fragment:n3,envmap_fragment:i3,envmap_common_pars_fragment:r3,envmap_pars_fragment:s3,envmap_pars_vertex:o3,envmap_physical_pars_fragment:_3,envmap_vertex:a3,fog_vertex:l3,fog_pars_vertex:c3,fog_fragment:u3,fog_pars_fragment:f3,gradientmap_pars_fragment:h3,lightmap_fragment:d3,lightmap_pars_fragment:p3,lights_lambert_vertex:m3,lights_pars_begin:g3,lights_toon_fragment:v3,lights_toon_pars_fragment:x3,lights_phong_fragment:y3,lights_phong_pars_fragment:b3,lights_physical_fragment:M3,lights_physical_pars_fragment:S3,lights_fragment_begin:w3,lights_fragment_maps:E3,lights_fragment_end:T3,logdepthbuf_fragment:A3,logdepthbuf_pars_fragment:C3,logdepthbuf_pars_vertex:R3,logdepthbuf_vertex:L3,map_fragment:P3,map_pars_fragment:D3,map_particle_fragment:I3,map_particle_pars_fragment:F3,metalnessmap_fragment:O3,metalnessmap_pars_fragment:N3,morphcolor_vertex:B3,morphnormal_vertex:z3,morphtarget_pars_vertex:U3,morphtarget_vertex:k3,normal_fragment_begin:V3,normal_fragment_maps:H3,normal_pars_fragment:G3,normal_pars_vertex:W3,normal_vertex:$3,normalmap_pars_fragment:q3,clearcoat_normal_fragment_begin:j3,clearcoat_normal_fragment_maps:X3,clearcoat_pars_fragment:K3,iridescence_pars_fragment:Y3,output_fragment:Z3,packing:J3,premultiplied_alpha_fragment:Q3,project_vertex:eA,dithering_fragment:tA,dithering_pars_fragment:nA,roughnessmap_fragment:iA,roughnessmap_pars_fragment:rA,shadowmap_pars_fragment:sA,shadowmap_pars_vertex:oA,shadowmap_vertex:aA,shadowmask_pars_fragment:lA,skinbase_vertex:cA,skinning_pars_vertex:uA,skinning_vertex:fA,skinnormal_vertex:hA,specularmap_fragment:dA,specularmap_pars_fragment:pA,tonemapping_fragment:mA,tonemapping_pars_fragment:gA,transmission_fragment:_A,transmission_pars_fragment:vA,uv_pars_fragment:xA,uv_pars_vertex:yA,uv_vertex:bA,uv2_pars_fragment:MA,uv2_pars_vertex:SA,uv2_vertex:wA,worldpos_vertex:EA,background_vert:TA,background_frag:AA,cube_vert:CA,cube_frag:RA,depth_vert:LA,depth_frag:PA,distanceRGBA_vert:DA,distanceRGBA_frag:IA,equirect_vert:FA,equirect_frag:OA,linedashed_vert:NA,linedashed_frag:BA,meshbasic_vert:zA,meshbasic_frag:UA,meshlambert_vert:kA,meshlambert_frag:VA,meshmatcap_vert:HA,meshmatcap_frag:GA,meshnormal_vert:WA,meshnormal_frag:$A,meshphong_vert:qA,meshphong_frag:jA,meshphysical_vert:XA,meshphysical_frag:KA,meshtoon_vert:YA,meshtoon_frag:ZA,points_vert:JA,points_frag:QA,shadow_vert:eC,shadow_frag:tC,sprite_vert:nC,sprite_frag:iC},Me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new On},uv2Transform:{value:new On},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new On}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new On}}},Rn={basic:{uniforms:Rt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Rt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.fog,Me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Rt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Rt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Rt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Rt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Rt([Me.points,Me.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Rt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Rt([Me.common,Me.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Rt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Rt([Me.sprite,Me.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new On},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:Rt([Me.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Rt([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Rt([Me.lights,Me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Rn.physical={uniforms:Rt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function rC(n,e,t,i,r,s){const o=new Ne(0);let a=r===!0?0:1,l,c,u=null,f=0,h=null;function m(d,p){let _=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=e.get(S));const w=n.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(S=null),S===null?g(o,a):S&&S.isColor&&(g(S,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ra)?(c===void 0&&(c=new wi(new ho(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:os(Rn.cube.uniforms),vertexShader:Rn.cube.vertexShader,fragmentShader:Rn.cube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new wi(new pu(2,2),new ri({name:"BackgroundMaterial",uniforms:os(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:to,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(d,p=1){o.set(d),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,g(o,a)},render:m}}function sC(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(I,te,$,Q,se){let j=!1;if(o){const J=d(Q,$,te);c!==J&&(c=J,m(c.object)),j=_(I,Q,$,se),j&&S(I,Q,$,se)}else{const J=te.wireframe===!0;(c.geometry!==Q.id||c.program!==$.id||c.wireframe!==J)&&(c.geometry=Q.id,c.program=$.id,c.wireframe=J,j=!0)}se!==null&&t.update(se,34963),(j||u)&&(u=!1,b(I,te,$,Q),se!==null&&n.bindBuffer(34963,t.get(se).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,te,$){const Q=$.wireframe===!0;let se=a[I.id];se===void 0&&(se={},a[I.id]=se);let j=se[te.id];j===void 0&&(j={},se[te.id]=j);let J=j[Q];return J===void 0&&(J=p(h()),j[Q]=J),J}function p(I){const te=[],$=[],Q=[];for(let se=0;se<r;se++)te[se]=0,$[se]=0,Q[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:$,attributeDivisors:Q,object:I,attributes:{},index:null}}function _(I,te,$,Q){const se=c.attributes,j=te.attributes;let J=0;const ge=$.getAttributes();for(const re in ge)if(ge[re].location>=0){const Te=se[re];let F=j[re];if(F===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(F=I.instanceColor)),Te===void 0||Te.attribute!==F||F&&Te.data!==F.data)return!0;J++}return c.attributesNum!==J||c.index!==Q}function S(I,te,$,Q){const se={},j=te.attributes;let J=0;const ge=$.getAttributes();for(const re in ge)if(ge[re].location>=0){let Te=j[re];Te===void 0&&(re==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),re==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor));const F={};F.attribute=Te,Te&&Te.data&&(F.data=Te.data),se[re]=F,J++}c.attributes=se,c.attributesNum=J,c.index=Q}function w(){const I=c.newAttributes;for(let te=0,$=I.length;te<$;te++)I[te]=0}function y(I){A(I,0)}function A(I,te){const $=c.newAttributes,Q=c.enabledAttributes,se=c.attributeDivisors;$[I]=1,Q[I]===0&&(n.enableVertexAttribArray(I),Q[I]=1),se[I]!==te&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,te),se[I]=te)}function R(){const I=c.newAttributes,te=c.enabledAttributes;for(let $=0,Q=te.length;$<Q;$++)te[$]!==I[$]&&(n.disableVertexAttribArray($),te[$]=0)}function O(I,te,$,Q,se,j){i.isWebGL2===!0&&($===5124||$===5125)?n.vertexAttribIPointer(I,te,$,se,j):n.vertexAttribPointer(I,te,$,Q,se,j)}function b(I,te,$,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const se=Q.attributes,j=$.getAttributes(),J=te.defaultAttributeValues;for(const ge in j){const re=j[ge];if(re.location>=0){let _e=se[ge];if(_e===void 0&&(ge==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),ge==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),_e!==void 0){const Te=_e.normalized,F=_e.itemSize,P=t.get(_e);if(P===void 0)continue;const U=P.buffer,Y=P.type,ue=P.bytesPerElement;if(_e.isInterleavedBufferAttribute){const oe=_e.data,xe=oe.stride,M=_e.offset;if(oe.isInstancedInterleavedBuffer){for(let T=0;T<re.locationSize;T++)A(re.location+T,oe.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let T=0;T<re.locationSize;T++)y(re.location+T);n.bindBuffer(34962,U);for(let T=0;T<re.locationSize;T++)O(re.location+T,F/re.locationSize,Y,Te,xe*ue,(M+F/re.locationSize*T)*ue)}else{if(_e.isInstancedBufferAttribute){for(let oe=0;oe<re.locationSize;oe++)A(re.location+oe,_e.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let oe=0;oe<re.locationSize;oe++)y(re.location+oe);n.bindBuffer(34962,U);for(let oe=0;oe<re.locationSize;oe++)O(re.location+oe,F/re.locationSize,Y,Te,F*ue,F/re.locationSize*oe*ue)}}else if(J!==void 0){const Te=J[ge];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(re.location,Te);break;case 3:n.vertexAttrib3fv(re.location,Te);break;case 4:n.vertexAttrib4fv(re.location,Te);break;default:n.vertexAttrib1fv(re.location,Te)}}}}R()}function C(){z();for(const I in a){const te=a[I];for(const $ in te){const Q=te[$];for(const se in Q)g(Q[se].object),delete Q[se];delete te[$]}delete a[I]}}function B(I){if(a[I.id]===void 0)return;const te=a[I.id];for(const $ in te){const Q=te[$];for(const se in Q)g(Q[se].object),delete Q[se];delete te[$]}delete a[I.id]}function N(I){for(const te in a){const $=a[te];if($[I.id]===void 0)continue;const Q=$[I.id];for(const se in Q)g(Q[se].object),delete Q[se];delete $[I.id]}}function z(){ae(),u=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:ae,dispose:C,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:y,disableUnusedAttributes:R}}function oC(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function aC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),_=n.getParameter(36348),S=n.getParameter(36349),w=h>0,y=o||e.has("OES_texture_float"),A=w&&y,R=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:A,maxSamples:R}}function lC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xi,a=new On,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,m){const g=f.length!==0||h||i!==0||r;return r=h,t=u(f,m,0),i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,m){const g=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,w=S*4;let y=_.clippingState||null;l.value=y,y=u(g,h,w,m);for(let A=0;A!==w;++A)y[A]=t[A];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,g){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,y=m;w!==d;++w,y+=4)o.copy(f[w]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function cC(n){let e=new WeakMap;function t(o,a){return a===dc?o.mapping=is:a===pc&&(o.mapping=rs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===dc||a===pc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ET(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uC extends Ym{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=4,Qh=[.125,.215,.35,.446,.526,.582],er=20,Rl=new uC,ed=new Ne;let Ll=null;const Ki=(1+Math.sqrt(5))/2,kr=1/Ki,td=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,Ki,kr),new G(0,Ki,-kr),new G(kr,0,Ki),new G(-kr,0,Ki),new G(Ki,kr,0),new G(-Ki,kr,0)];class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ll=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ll),e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ll=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:no,format:mn,encoding:pr,depthBuffer:!1},r=id(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fC(s)),this._blurMaterial=hC(s,e,t)}return r}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,i,r){const a=new fn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ed),u.toneMapping=ni,u.autoClear=!1;const m=new du({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new wi(new ho,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(ed),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):S===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;$o(r,S*w,_>2?w:0,w,w),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===is||e.mapping===rs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$o(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=td[(r-1)%td.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wi(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*er-1),d=s/g,p=isFinite(s)?1+Math.floor(u*d):er;p>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${er}`);const _=[];let S=0;for(let O=0;O<er;++O){const b=O/d,C=Math.exp(-b*b/2);_.push(C),O===0?S+=C:O<p&&(S+=2*C)}for(let O=0;O<_.length;O++)_[O]=_[O]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const y=this._sizeLods[r],A=3*y*(r>w-Gr?r-w+Gr:0),R=4*(this._cubeSize-y);$o(t,A,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Rl)}}function fC(n){const e=[],t=[],i=[];let r=n;const s=n-Gr+1+Qh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Gr?l=Qh[o-n+Gr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,d=3,p=2,_=1,S=new Float32Array(d*g*m),w=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let R=0;R<m;R++){const O=R%3*2/3-1,b=R>2?0:-1,C=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];S.set(C,d*g*R),w.set(h,p*g*R);const B=[R,R,R,R,R,R];y.set(B,_*g*R)}const A=new br;A.setAttribute("position",new Bn(S,d)),A.setAttribute("uv",new Bn(w,p)),A.setAttribute("faceIndex",new Bn(y,_)),e.push(A),r>Gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function id(n,e,t){const i=new Li(n,e,t);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function hC(n,e,t){const i=new Float32Array(er),r=new G(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function rd(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function sd(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===dc||l===pc,u=l===is||l===rs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new nd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new nd(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function pC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mC(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const m=f.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,g=f.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let w=0,y=S.length;w<y;w+=3){const A=S[w+0],R=S[w+1],O=S[w+2];h.push(A,R,R,O,O,A)}}else{const S=g.array;d=g.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const A=w+0,R=w+1,O=w+2;h.push(A,R,R,O,O,A)}}const p=new(Hm(h)?Km:Xm)(h,1);p.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gC(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,a,h*l),t.update(m,s,1)}function f(h,m,g){if(g===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,a,h*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function _C(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function vC(n,e){return n[0]-e[0]}function xC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Pl(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function yC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==d){let te=function(){ae.dispose(),s.delete(u),u.removeEventListener("dispose",te)};p!==void 0&&p.texture.dispose();const w=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let C=0;w===!0&&(C=1),y===!0&&(C=2),A===!0&&(C=3);let B=u.attributes.position.count*C,N=1;B>e.maxTextureSize&&(N=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*N*4*d),ae=new qm(z,B,N,d);ae.type=sr,ae.needsUpdate=!0;const I=C*4;for(let $=0;$<d;$++){const Q=R[$],se=O[$],j=b[$],J=B*N*4*$;for(let ge=0;ge<Q.count;ge++){const re=ge*I;w===!0&&(o.fromBufferAttribute(Q,ge),Q.normalized===!0&&Pl(o,Q),z[J+re+0]=o.x,z[J+re+1]=o.y,z[J+re+2]=o.z,z[J+re+3]=0),y===!0&&(o.fromBufferAttribute(se,ge),se.normalized===!0&&Pl(o,se),z[J+re+4]=o.x,z[J+re+5]=o.y,z[J+re+6]=o.z,z[J+re+7]=0),A===!0&&(o.fromBufferAttribute(j,ge),j.normalized===!0&&Pl(o,j),z[J+re+8]=o.x,z[J+re+9]=o.y,z[J+re+10]=o.z,z[J+re+11]=j.itemSize===4?o.w:1)}}p={count:d,texture:ae,size:new Xe(B,N)},s.set(u,p),u.addEventListener("dispose",te)}let _=0;for(let w=0;w<m.length;w++)_+=m[w];const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(n,"morphTargetBaseInfluence",S),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let d=i[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];i[u.id]=d}for(let y=0;y<g;y++){const A=d[y];A[0]=y,A[1]=m[y]}d.sort(xC);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(vC);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const A=a[y],R=A[0],O=A[1];R!==Number.MAX_SAFE_INTEGER&&O?(p&&u.getAttribute("morphTarget"+y)!==p[R]&&u.setAttribute("morphTarget"+y,p[R]),_&&u.getAttribute("morphNormal"+y)!==_[R]&&u.setAttribute("morphNormal"+y,_[R]),r[y]=O,S+=O):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const w=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(n,"morphTargetBaseInfluence",w),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function bC(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const eg=new xn,tg=new qm,ng=new cT,ig=new Zm,od=[],ad=[],ld=new Float32Array(16),cd=new Float32Array(9),ud=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=od[r];if(s===void 0&&(s=new Float32Array(r),od[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function MC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function SC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function wC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function EC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function TC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;ud.set(i),n.uniformMatrix2fv(this.addr,!1,ud),Vt(t,i)}}function AC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;cd.set(i),n.uniformMatrix3fv(this.addr,!1,cd),Vt(t,i)}}function CC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(kt(t,i))return;ld.set(i),n.uniformMatrix4fv(this.addr,!1,ld),Vt(t,i)}}function RC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function LC(n,e){const t=this.cache;kt(t,e)||(n.uniform2iv(this.addr,e),Vt(t,e))}function PC(n,e){const t=this.cache;kt(t,e)||(n.uniform3iv(this.addr,e),Vt(t,e))}function DC(n,e){const t=this.cache;kt(t,e)||(n.uniform4iv(this.addr,e),Vt(t,e))}function IC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function FC(n,e){const t=this.cache;kt(t,e)||(n.uniform2uiv(this.addr,e),Vt(t,e))}function OC(n,e){const t=this.cache;kt(t,e)||(n.uniform3uiv(this.addr,e),Vt(t,e))}function NC(n,e){const t=this.cache;kt(t,e)||(n.uniform4uiv(this.addr,e),Vt(t,e))}function BC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||eg,r)}function zC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ng,r)}function UC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ig,r)}function kC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tg,r)}function VC(n){switch(n){case 5126:return MC;case 35664:return SC;case 35665:return wC;case 35666:return EC;case 35674:return TC;case 35675:return AC;case 35676:return CC;case 5124:case 35670:return RC;case 35667:case 35671:return LC;case 35668:case 35672:return PC;case 35669:case 35673:return DC;case 5125:return IC;case 36294:return FC;case 36295:return OC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return BC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return UC;case 36289:case 36303:case 36311:case 36292:return kC}}function HC(n,e){n.uniform1fv(this.addr,e)}function GC(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function WC(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function $C(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function qC(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jC(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function XC(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KC(n,e){n.uniform1iv(this.addr,e)}function YC(n,e){n.uniform2iv(this.addr,e)}function ZC(n,e){n.uniform3iv(this.addr,e)}function JC(n,e){n.uniform4iv(this.addr,e)}function QC(n,e){n.uniform1uiv(this.addr,e)}function eR(n,e){n.uniform2uiv(this.addr,e)}function tR(n,e){n.uniform3uiv(this.addr,e)}function nR(n,e){n.uniform4uiv(this.addr,e)}function iR(n,e,t){const i=e.length,r=Pa(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||eg,r[s])}function rR(n,e,t){const i=e.length,r=Pa(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ng,r[s])}function sR(n,e,t){const i=e.length,r=Pa(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||ig,r[s])}function oR(n,e,t){const i=e.length,r=Pa(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||tg,r[s])}function aR(n){switch(n){case 5126:return HC;case 35664:return GC;case 35665:return WC;case 35666:return $C;case 35674:return qC;case 35675:return jC;case 35676:return XC;case 5124:case 35670:return KC;case 35667:case 35671:return YC;case 35668:case 35672:return ZC;case 35669:case 35673:return JC;case 5125:return QC;case 36294:return eR;case 36295:return tR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}class lR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=VC(t.type)}}class cR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=aR(t.type)}}class uR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function fd(n,e){n.seq.push(e),n.map[e.id]=e}function fR(n,e,t){const i=n.name,r=i.length;for(Dl.lastIndex=0;;){const s=Dl.exec(i),o=Dl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){fd(t,c===void 0?new lR(a,n,e):new cR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new uR(a),fd(t,f)),t=f}}}class ta{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function hd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let hR=0;function dR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function pR(n){switch(n){case pr:return["Linear","( value )"];case ut:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function dd(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+dR(n.getShaderSource(e),o)}else return r}function mR(n,e){const t=pR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function gR(n,e){let t;switch(e){case NE:t="Linear";break;case BE:t="Reinhard";break;case zE:t="OptimizedCineon";break;case UE:t="ACESFilmic";break;case kE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _R(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function vR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xR(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ps(n){return n!==""}function pd(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yR=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(yR,bR)}function bR(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xc(t)}const MR=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,SR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(n){return n.replace(SR,rg).replace(MR,wR)}function wR(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),rg(n,e,t,i)}function rg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _d(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ER(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ls&&(e="SHADOWMAP_TYPE_VSM"),e}function TR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case rs:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function CR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ca:e="ENVMAP_BLENDING_MULTIPLY";break;case FE:e="ENVMAP_BLENDING_MIX";break;case OE:e="ENVMAP_BLENDING_ADD";break}return e}function RR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function LR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ER(t),c=TR(t),u=AR(t),f=CR(t),h=RR(t),m=t.isWebGL2?"":_R(t),g=vR(s),d=r.createProgram();let p,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ps).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ps).join(`
`),_.length>0&&(_+=`
`)):(p=[_d(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),_=[m,_d(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ue.tonemapping_pars_fragment:"",t.toneMapping!==ni?gR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,mR("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),o=xc(o),o=pd(o,t),o=md(o,t),a=xc(a),a=pd(a,t),a=md(a,t),o=gd(o),a=gd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=S+p+o,y=S+_+a,A=hd(r,35633,w),R=hd(r,35632,y);if(r.attachShader(d,A),r.attachShader(d,R),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(d).trim(),B=r.getShaderInfoLog(A).trim(),N=r.getShaderInfoLog(R).trim();let z=!0,ae=!0;if(r.getProgramParameter(d,35714)===!1){z=!1;const I=dd(r,A,"vertex"),te=dd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+C+`
`+I+`
`+te)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(B===""||N==="")&&(ae=!1);ae&&(this.diagnostics={runnable:z,programLog:C,vertexShader:{log:B,prefix:p},fragmentShader:{log:N,prefix:_}})}r.deleteShader(A),r.deleteShader(R);let O;this.getUniforms=function(){return O===void 0&&(O=new ta(r,d)),O};let b;return this.getAttributes=function(){return b===void 0&&(b=xR(r,d)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=hR++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=A,this.fragmentShader=R,this}let PR=0;class DR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new IR(e);t.set(e,i)}return t.get(e)}}class IR{constructor(e){this.id=PR++,this.code=e,this.usedTimes=0}}function FR(n,e,t,i,r,s,o){const a=new jm,l=new DR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,C,B,N,z){const ae=N.fog,I=z.geometry,te=b.isMeshStandardMaterial?N.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||te),Q=!!$&&$.mapping===Ra?$.image.height:null,se=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const j=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=j!==void 0?j.length:0;let ge=0;I.morphAttributes.position!==void 0&&(ge=1),I.morphAttributes.normal!==void 0&&(ge=2),I.morphAttributes.color!==void 0&&(ge=3);let re,_e,Te,F;if(se){const xe=Rn[se];re=xe.vertexShader,_e=xe.fragmentShader}else re=b.vertexShader,_e=b.fragmentShader,l.update(b),Te=l.getVertexShaderID(b),F=l.getFragmentShaderID(b);const P=n.getRenderTarget(),U=b.alphaTest>0,Y=b.clearcoat>0,ue=b.iridescence>0;return{isWebGL2:u,shaderID:se,shaderName:b.type,vertexShader:re,fragmentShader:_e,defines:b.defines,customVertexShaderID:Te,customFragmentShaderID:F,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:P===null?n.outputEncoding:P.isXRRenderTarget===!0?P.texture.encoding:pr,map:!!b.map,matcap:!!b.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:Q,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===sT,tangentSpaceNormalMap:b.normalMapType===ps,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ut,clearcoat:Y,clearcoatMap:Y&&!!b.clearcoatMap,clearcoatRoughnessMap:Y&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:Y&&!!b.clearcoatNormalMap,iridescence:ue,iridescenceMap:ue&&!!b.iridescenceMap,iridescenceThicknessMap:ue&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Xr,alphaMap:!!b.alphaMap,alphaTest:U,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!ae,useFog:b.fog===!0,fogExp2:ae&&ae.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ge,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:ni,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ns,flipSided:b.side===_n,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(_(C,b),S(C,b),C.push(n.outputEncoding)),C.push(b.customProgramCacheKey),C.join()}function _(b,C){b.push(C.precision),b.push(C.outputEncoding),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.combine),b.push(C.vertexUvs),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function S(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),C.fog&&a.enable(33),b.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.morphTargets&&a.enable(4),C.morphNormals&&a.enable(5),C.morphColors&&a.enable(6),C.premultipliedAlpha&&a.enable(7),C.shadowMapEnabled&&a.enable(8),C.physicallyCorrectLights&&a.enable(9),C.doubleSided&&a.enable(10),C.flipSided&&a.enable(11),C.useDepthPacking&&a.enable(12),C.dithering&&a.enable(13),C.specularIntensityMap&&a.enable(14),C.specularColorMap&&a.enable(15),C.transmission&&a.enable(16),C.transmissionMap&&a.enable(17),C.thicknessMap&&a.enable(18),C.sheen&&a.enable(19),C.sheenColorMap&&a.enable(20),C.sheenRoughnessMap&&a.enable(21),C.decodeVideoTexture&&a.enable(22),C.opaque&&a.enable(23),b.push(a.mask)}function w(b){const C=g[b.type];let B;if(C){const N=Rn[C];B=bT.clone(N.uniforms)}else B=b.uniforms;return B}function y(b,C){let B;for(let N=0,z=c.length;N<z;N++){const ae=c[N];if(ae.cacheKey===C){B=ae,++B.usedTimes;break}}return B===void 0&&(B=new LR(n,C,b,s),c.push(B)),B}function A(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function O(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:w,acquireProgram:y,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:O}}function OR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function NR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,m,g,d,p){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:m,groupOrder:g,renderOrder:f.renderOrder,z:d,group:p},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=p),e++,_}function a(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,h,m,g,d,p){const _=o(f,h,m,g,d,p);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||NR),i.length>1&&i.sort(h||vd),r.length>1&&r.sort(h||vd)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function BR(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new xd,n.set(i,[s])):r>=n.get(i).length?(s=new xd,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function zR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ne};break;case"SpotLight":t={position:new G,direction:new G,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function UR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kR=0;function VR(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function HR(n,e){const t=new zR,i=UR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new It,a=new It;function l(u,f){let h=0,m=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let d=0,p=0,_=0,S=0,w=0,y=0,A=0,R=0;u.sort(VR);const O=f!==!0?Math.PI:1;for(let C=0,B=u.length;C<B;C++){const N=u[C],z=N.color,ae=N.intensity,I=N.distance,te=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=z.r*ae*O,m+=z.g*ae*O,g+=z.b*ae*O;else if(N.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(N.sh.coefficients[$],ae);else if(N.isDirectionalLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*O),N.castShadow){const Q=N.shadow,se=i.get(N);se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,r.directionalShadow[d]=se,r.directionalShadowMap[d]=te,r.directionalShadowMatrix[d]=N.shadow.matrix,y++}r.directional[d]=$,d++}else if(N.isSpotLight){const $=t.get(N);if($.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(z).multiplyScalar(ae*O),$.distance=I,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,N.castShadow){const Q=N.shadow,se=i.get(N);se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,r.spotShadow[_]=se,r.spotShadowMap[_]=te,r.spotShadowMatrix[_]=N.shadow.matrix,R++}r.spot[_]=$,_++}else if(N.isRectAreaLight){const $=t.get(N);$.color.copy(z).multiplyScalar(ae),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),r.rectArea[S]=$,S++}else if(N.isPointLight){const $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*O),$.distance=N.distance,$.decay=N.decay,N.castShadow){const Q=N.shadow,se=i.get(N);se.shadowBias=Q.bias,se.shadowNormalBias=Q.normalBias,se.shadowRadius=Q.radius,se.shadowMapSize=Q.mapSize,se.shadowCameraNear=Q.camera.near,se.shadowCameraFar=Q.camera.far,r.pointShadow[p]=se,r.pointShadowMap[p]=te,r.pointShadowMatrix[p]=N.shadow.matrix,A++}r.point[p]=$,p++}else if(N.isHemisphereLight){const $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(ae*O),$.groundColor.copy(N.groundColor).multiplyScalar(ae*O),r.hemi[w]=$,w++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==d||b.pointLength!==p||b.spotLength!==_||b.rectAreaLength!==S||b.hemiLength!==w||b.numDirectionalShadows!==y||b.numPointShadows!==A||b.numSpotShadows!==R)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=S,r.point.length=p,r.hemi.length=w,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=A,r.spotShadowMatrix.length=R,b.directionalLength=d,b.pointLength=p,b.spotLength=_,b.rectAreaLength=S,b.hemiLength=w,b.numDirectionalShadows=y,b.numPointShadows=A,b.numSpotShadows=R,r.version=kR++)}function c(u,f){let h=0,m=0,g=0,d=0,p=0;const _=f.matrixWorldInverse;for(let S=0,w=u.length;S<w;S++){const y=u[S];if(y.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),h++}else if(y.isSpotLight){const A=r.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const A=r.rectArea[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const A=r.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:r}}function yd(n,e){const t=new HR(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function GR(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new yd(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new yd(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class sg extends Ct{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class og extends Ct{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$R=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qR(n,e,t){let i=new Jm;const r=new Xe,s=new Xe,o=new Dt,a=new sg({depthPacking:rT}),l=new og,c={},u=t.maxTextureSize,f={0:_n,1:to,2:ns},h=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:WR,fragmentShader:$R}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new br;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new wi(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bm,this.render=function(y,A,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const O=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Ri),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let N=0,z=y.length;N<z;N++){const ae=y[N],I=ae.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const te=I.getFrameExtents();if(r.multiply(te),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===Ls&&(I.map=new Li(r.x,r.y),I.map.texture.name=ae.name+".shadowMap",I.mapPass=new Li(r.x,r.y),I.camera.updateProjectionMatrix()),I.map===null){const Q={minFilter:Wt,magFilter:Wt,format:mn};I.map=new Li(r.x,r.y,Q),I.map.texture.name=ae.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const $=I.getViewportCount();for(let Q=0;Q<$;Q++){const se=I.getViewport(Q);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),B.viewport(o),I.updateMatrices(ae,Q),i=I.getFrustum(),w(A,R,I.camera,ae,this.type)}!I.isPointLightShadow&&this.type===Ls&&_(I,R),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(O,b,C)};function _(y,A){const R=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(A,null,R,h,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(A,null,R,m,d,null)}function S(y,A,R,O,b,C){let B=null;const N=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0?B=N:B=R.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const z=B.uuid,ae=A.uuid;let I=c[z];I===void 0&&(I={},c[z]=I);let te=I[ae];te===void 0&&(te=B.clone(),I[ae]=te),B=te}return B.visible=A.visible,B.wireframe=A.wireframe,C===Ls?B.side=A.shadowSide!==null?A.shadowSide:A.side:B.side=A.shadowSide!==null?A.shadowSide:f[A.side],B.alphaMap=A.alphaMap,B.alphaTest=A.alphaTest,B.clipShadows=A.clipShadows,B.clippingPlanes=A.clippingPlanes,B.clipIntersection=A.clipIntersection,B.displacementMap=A.displacementMap,B.displacementScale=A.displacementScale,B.displacementBias=A.displacementBias,B.wireframeLinewidth=A.wireframeLinewidth,B.linewidth=A.linewidth,R.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(R.matrixWorld),B.nearDistance=O,B.farDistance=b),B}function w(y,A,R,O,b){if(y.visible===!1)return;if(y.layers.test(A.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===Ls)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const N=e.update(y),z=y.material;if(Array.isArray(z)){const ae=N.groups;for(let I=0,te=ae.length;I<te;I++){const $=ae[I],Q=z[$.materialIndex];if(Q&&Q.visible){const se=S(y,Q,O,R.near,R.far,b);n.renderBufferDirect(R,null,N,se,y,$)}}}else if(z.visible){const ae=S(y,z,O,R.near,R.far,b);n.renderBufferDirect(R,null,N,ae,y,null)}}const B=y.children;for(let N=0,z=B.length;N<z;N++)w(B[N],A,R,O,b)}}function jR(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const be=new Dt;let de=null;const Re=new Dt(0,0,0,0);return{setMask:function(Ae){de!==Ae&&!L&&(n.colorMask(Ae,Ae,Ae,Ae),de=Ae)},setLocked:function(Ae){L=Ae},setClear:function(Ae,De,ve,Ie,Ze){Ze===!0&&(Ae*=Ie,De*=Ie,ve*=Ie),be.set(Ae,De,ve,Ie),Re.equals(be)===!1&&(n.clearColor(Ae,De,ve,Ie),Re.copy(be))},reset:function(){L=!1,de=null,Re.set(-1,0,0,0)}}}function s(){let L=!1,be=null,de=null,Re=null;return{setTest:function(Ae){Ae?F(2929):P(2929)},setMask:function(Ae){be!==Ae&&!L&&(n.depthMask(Ae),be=Ae)},setFunc:function(Ae){if(de!==Ae){if(Ae)switch(Ae){case AE:n.depthFunc(512);break;case CE:n.depthFunc(519);break;case RE:n.depthFunc(513);break;case hc:n.depthFunc(515);break;case LE:n.depthFunc(514);break;case PE:n.depthFunc(518);break;case DE:n.depthFunc(516);break;case IE:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);de=Ae}},setLocked:function(Ae){L=Ae},setClear:function(Ae){Re!==Ae&&(n.clearDepth(Ae),Re=Ae)},reset:function(){L=!1,be=null,de=null,Re=null}}}function o(){let L=!1,be=null,de=null,Re=null,Ae=null,De=null,ve=null,Ie=null,Ze=null;return{setTest:function(Je){L||(Je?F(2960):P(2960))},setMask:function(Je){be!==Je&&!L&&(n.stencilMask(Je),be=Je)},setFunc:function(Je,Ft,bn){(de!==Je||Re!==Ft||Ae!==bn)&&(n.stencilFunc(Je,Ft,bn),de=Je,Re=Ft,Ae=bn)},setOp:function(Je,Ft,bn){(De!==Je||ve!==Ft||Ie!==bn)&&(n.stencilOp(Je,Ft,bn),De=Je,ve=Ft,Ie=bn)},setLocked:function(Je){L=Je},setClear:function(Je){Ze!==Je&&(n.clearStencil(Je),Ze=Je)},reset:function(){L=!1,be=null,de=null,Re=null,Ae=null,De=null,ve=null,Ie=null,Ze=null}}}const a=new r,l=new s,c=new o;let u={},f={},h=new WeakMap,m=[],g=null,d=!1,p=null,_=null,S=null,w=null,y=null,A=null,R=null,O=!1,b=null,C=null,B=null,N=null,z=null;const ae=n.getParameter(35661);let I=!1,te=0;const $=n.getParameter(7938);$.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec($)[1]),I=te>=1):$.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),I=te>=2);let Q=null,se={};const j=n.getParameter(3088),J=n.getParameter(2978),ge=new Dt().fromArray(j),re=new Dt().fromArray(J);function _e(L,be,de){const Re=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(L,Ae),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let De=0;De<de;De++)n.texImage2D(be+De,0,6408,1,1,0,6408,5121,Re);return Ae}const Te={};Te[3553]=_e(3553,3553,1),Te[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(2929),l.setFunc(hc),k(!1),K(ch),F(2884),M(Ri);function F(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function P(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function U(L,be){return f[L]!==be?(n.bindFramebuffer(L,be),f[L]=be,i&&(L===36009&&(f[36160]=be),L===36160&&(f[36009]=be)),!0):!1}function Y(L,be){let de=m,Re=!1;if(L)if(de=h.get(be),de===void 0&&(de=[],h.set(be,de)),L.isWebGLMultipleRenderTargets){const Ae=L.texture;if(de.length!==Ae.length||de[0]!==36064){for(let De=0,ve=Ae.length;De<ve;De++)de[De]=36064+De;de.length=Ae.length,Re=!0}}else de[0]!==36064&&(de[0]=36064,Re=!0);else de[0]!==1029&&(de[0]=1029,Re=!0);Re&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function ue(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const oe={[Hr]:32774,[gE]:32778,[_E]:32779};if(i)oe[dh]=32775,oe[ph]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(oe[dh]=L.MIN_EXT,oe[ph]=L.MAX_EXT)}const xe={[vE]:0,[xE]:1,[yE]:768,[zm]:770,[TE]:776,[wE]:774,[ME]:772,[bE]:769,[Um]:771,[EE]:775,[SE]:773};function M(L,be,de,Re,Ae,De,ve,Ie){if(L===Ri){d===!0&&(P(3042),d=!1);return}if(d===!1&&(F(3042),d=!0),L!==mE){if(L!==p||Ie!==O){if((_!==Hr||y!==Hr)&&(n.blendEquation(32774),_=Hr,y=Hr),Ie)switch(L){case Xr:n.blendFuncSeparate(1,771,1,771);break;case uh:n.blendFunc(1,1);break;case fh:n.blendFuncSeparate(0,769,0,1);break;case hh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Xr:n.blendFuncSeparate(770,771,1,771);break;case uh:n.blendFunc(770,1);break;case fh:n.blendFuncSeparate(0,769,0,1);break;case hh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,A=null,R=null,p=L,O=Ie}return}Ae=Ae||be,De=De||de,ve=ve||Re,(be!==_||Ae!==y)&&(n.blendEquationSeparate(oe[be],oe[Ae]),_=be,y=Ae),(de!==S||Re!==w||De!==A||ve!==R)&&(n.blendFuncSeparate(xe[de],xe[Re],xe[De],xe[ve]),S=de,w=Re,A=De,R=ve),p=L,O=null}function T(L,be){L.side===ns?P(2884):F(2884);let de=L.side===_n;be&&(de=!de),k(de),L.blending===Xr&&L.transparent===!1?M(Ri):M(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Re=L.stencilWrite;c.setTest(Re),Re&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?F(32926):P(32926)}function k(L){b!==L&&(L?n.frontFace(2304):n.frontFace(2305),b=L)}function K(L){L!==fE?(F(2884),L!==C&&(L===ch?n.cullFace(1029):L===hE?n.cullFace(1028):n.cullFace(1032))):P(2884),C=L}function ee(L){L!==B&&(I&&n.lineWidth(L),B=L)}function fe(L,be,de){L?(F(32823),(N!==be||z!==de)&&(n.polygonOffset(be,de),N=be,z=de)):P(32823)}function pe(L){L?F(3089):P(3089)}function ne(L){L===void 0&&(L=33984+ae-1),Q!==L&&(n.activeTexture(L),Q=L)}function me(L,be){Q===null&&ne();let de=se[Q];de===void 0&&(de={type:void 0,texture:void 0},se[Q]=de),(de.type!==L||de.texture!==be)&&(n.bindTexture(L,be||Te[L]),de.type=L,de.texture=be)}function ce(){const L=se[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function x(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function D(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(L){ge.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function we(L){re.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function Ee(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,se={},f={},h=new WeakMap,m=[],g=null,d=!1,p=null,_=null,S=null,w=null,y=null,A=null,R=null,O=!1,b=null,C=null,B=null,N=null,z=null,ge.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:F,disable:P,bindFramebuffer:U,drawBuffers:Y,useProgram:ue,setBlending:M,setMaterial:T,setFlipSided:k,setCullFace:K,setLineWidth:ee,setPolygonOffset:fe,setScissorTest:pe,activeTexture:ne,bindTexture:me,unbindTexture:ce,compressedTexImage2D:v,texImage2D:Se,texImage3D:W,texStorage2D:ie,texStorage3D:he,texSubImage2D:x,texSubImage3D:D,compressedTexSubImage2D:X,scissor:Ce,viewport:we,reset:Ee}}function XR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(v,x){return _?new OffscreenCanvas(v,x):fa("canvas")}function w(v,x,D,X){let ie=1;if((v.width>X||v.height>X)&&(ie=X/Math.max(v.width,v.height)),ie<1||x===!0)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap){const he=x?vc:Math.floor,Se=he(ie*v.width),W=he(ie*v.height);d===void 0&&(d=S(Se,W));const Ce=D?S(Se,W):d;return Ce.width=Se,Ce.height=W,Ce.getContext("2d").drawImage(v,0,0,Se,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+v.width+"x"+v.height+") to ("+Se+"x"+W+")."),Ce}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+v.width+"x"+v.height+")."),v;return v}function y(v){return Vh(v.width)&&Vh(v.height)}function A(v){return a?!1:v.wrapS!==dn||v.wrapT!==dn||v.minFilter!==Wt&&v.minFilter!==tn}function R(v,x){return v.generateMipmaps&&x&&v.minFilter!==Wt&&v.minFilter!==tn}function O(v){n.generateMipmap(v)}function b(v,x,D,X,ie=!1){if(a===!1)return x;if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let he=x;return x===6403&&(D===5126&&(he=33326),D===5131&&(he=33325),D===5121&&(he=33321)),x===33319&&(D===5126&&(he=33328),D===5131&&(he=33327),D===5121&&(he=33323)),x===6408&&(D===5126&&(he=34836),D===5131&&(he=34842),D===5121&&(he=X===ut&&ie===!1?35907:32856),D===32819&&(he=32854),D===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function C(v,x,D){return R(v,D)===!0||v.isFramebufferTexture&&v.minFilter!==Wt&&v.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function B(v){return v===Wt||v===mh||v===gh?9728:9729}function N(v){const x=v.target;x.removeEventListener("dispose",N),ae(x),x.isVideoTexture&&g.delete(x)}function z(v){const x=v.target;x.removeEventListener("dispose",z),te(x)}function ae(v){const x=i.get(v);if(x.__webglInit===void 0)return;const D=v.source,X=p.get(D);if(X){const ie=X[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(v),Object.keys(X).length===0&&p.delete(D)}i.remove(v)}function I(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const D=v.source,X=p.get(D);delete X[x.__cacheKey],o.memory.textures--}function te(v){const x=v.texture,D=i.get(v),X=i.get(x);if(X.__webglTexture!==void 0&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),v.depthTexture&&v.depthTexture.dispose(),v.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)n.deleteFramebuffer(D.__webglFramebuffer[ie]),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer[ie]);else{if(n.deleteFramebuffer(D.__webglFramebuffer),D.__webglDepthbuffer&&n.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&n.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ie=0;ie<D.__webglColorRenderbuffer.length;ie++)D.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(D.__webglColorRenderbuffer[ie]);D.__webglDepthRenderbuffer&&n.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(v.isWebGLMultipleRenderTargets)for(let ie=0,he=x.length;ie<he;ie++){const Se=i.get(x[ie]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(x[ie])}i.remove(x),i.remove(v)}let $=0;function Q(){$=0}function se(){const v=$;return v>=l&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+l),$+=1,v}function j(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.encoding),x.join()}function J(v,x){const D=i.get(v);if(v.isVideoTexture&&me(v),v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){const X=v.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(D,v,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,D.__webglTexture)}function ge(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){Y(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(35866,D.__webglTexture)}function re(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){Y(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(32879,D.__webglTexture)}function _e(v,x){const D=i.get(v);if(v.version>0&&D.__version!==v.version){ue(D,v,x);return}t.activeTexture(33984+x),t.bindTexture(34067,D.__webglTexture)}const Te={[mc]:10497,[dn]:33071,[gc]:33648},F={[Wt]:9728,[mh]:9984,[gh]:9986,[tn]:9729,[VE]:9985,[La]:9987};function P(v,x,D){if(D?(n.texParameteri(v,10242,Te[x.wrapS]),n.texParameteri(v,10243,Te[x.wrapT]),(v===32879||v===35866)&&n.texParameteri(v,32882,Te[x.wrapR]),n.texParameteri(v,10240,F[x.magFilter]),n.texParameteri(v,10241,F[x.minFilter])):(n.texParameteri(v,10242,33071),n.texParameteri(v,10243,33071),(v===32879||v===35866)&&n.texParameteri(v,32882,33071),(x.wrapS!==dn||x.wrapT!==dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(v,10240,B(x.magFilter)),n.texParameteri(v,10241,B(x.minFilter)),x.minFilter!==Wt&&x.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(x.type===sr&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===no&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(v,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function U(v,x){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",N));const X=x.source;let ie=p.get(X);ie===void 0&&(ie={},p.set(X,ie));const he=j(x);if(he!==v.__cacheKey){ie[he]===void 0&&(ie[he]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),ie[he].usedTimes++;const Se=ie[v.__cacheKey];Se!==void 0&&(ie[v.__cacheKey].usedTimes--,Se.usedTimes===0&&I(x)),v.__cacheKey=he,v.__webglTexture=ie[he].texture}return D}function Y(v,x,D){let X=3553;x.isDataArrayTexture&&(X=35866),x.isData3DTexture&&(X=32879);const ie=U(v,x),he=x.source;if(t.activeTexture(33984+D),t.bindTexture(X,v.__webglTexture),he.version!==he.__currentVersion||ie===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const Se=A(x)&&y(x.image)===!1;let W=w(x.image,Se,!1,u);W=ce(x,W);const Ce=y(W)||a,we=s.convert(x.format,x.encoding);let Ee=s.convert(x.type),L=b(x.internalFormat,we,Ee,x.encoding,x.isVideoTexture);P(X,x,Ce);let be;const de=x.mipmaps,Re=a&&x.isVideoTexture!==!0,Ae=he.__currentVersion===void 0||ie===!0,De=C(x,W,Ce);if(x.isDepthTexture)L=6402,a?x.type===sr?L=36012:x.type===rr?L=33190:x.type===Kr?L=35056:L=33189:x.type===sr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===lr&&L===6402&&x.type!==Vm&&x.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=rr,Ee=s.convert(x.type)),x.format===ss&&L===6402&&(L=34041,x.type!==Kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Kr,Ee=s.convert(x.type))),Ae&&(Re?t.texStorage2D(3553,1,L,W.width,W.height):t.texImage2D(3553,0,L,W.width,W.height,0,we,Ee,null));else if(x.isDataTexture)if(de.length>0&&Ce){Re&&Ae&&t.texStorage2D(3553,De,L,de[0].width,de[0].height);for(let ve=0,Ie=de.length;ve<Ie;ve++)be=de[ve],Re?t.texSubImage2D(3553,ve,0,0,be.width,be.height,we,Ee,be.data):t.texImage2D(3553,ve,L,be.width,be.height,0,we,Ee,be.data);x.generateMipmaps=!1}else Re?(Ae&&t.texStorage2D(3553,De,L,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,we,Ee,W.data)):t.texImage2D(3553,0,L,W.width,W.height,0,we,Ee,W.data);else if(x.isCompressedTexture){Re&&Ae&&t.texStorage2D(3553,De,L,de[0].width,de[0].height);for(let ve=0,Ie=de.length;ve<Ie;ve++)be=de[ve],x.format!==mn?we!==null?Re?t.compressedTexSubImage2D(3553,ve,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(3553,ve,L,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?t.texSubImage2D(3553,ve,0,0,be.width,be.height,we,Ee,be.data):t.texImage2D(3553,ve,L,be.width,be.height,0,we,Ee,be.data)}else if(x.isDataArrayTexture)Re?(Ae&&t.texStorage3D(35866,De,L,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,we,Ee,W.data)):t.texImage3D(35866,0,L,W.width,W.height,W.depth,0,we,Ee,W.data);else if(x.isData3DTexture)Re?(Ae&&t.texStorage3D(32879,De,L,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,we,Ee,W.data)):t.texImage3D(32879,0,L,W.width,W.height,W.depth,0,we,Ee,W.data);else if(x.isFramebufferTexture){if(Ae)if(Re)t.texStorage2D(3553,De,L,W.width,W.height);else{let ve=W.width,Ie=W.height;for(let Ze=0;Ze<De;Ze++)t.texImage2D(3553,Ze,L,ve,Ie,0,we,Ee,null),ve>>=1,Ie>>=1}}else if(de.length>0&&Ce){Re&&Ae&&t.texStorage2D(3553,De,L,de[0].width,de[0].height);for(let ve=0,Ie=de.length;ve<Ie;ve++)be=de[ve],Re?t.texSubImage2D(3553,ve,0,0,we,Ee,be):t.texImage2D(3553,ve,L,we,Ee,be);x.generateMipmaps=!1}else Re?(Ae&&t.texStorage2D(3553,De,L,W.width,W.height),t.texSubImage2D(3553,0,0,0,we,Ee,W)):t.texImage2D(3553,0,L,we,Ee,W);R(x,Ce)&&O(X),he.__currentVersion=he.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function ue(v,x,D){if(x.image.length!==6)return;const X=U(v,x),ie=x.source;if(t.activeTexture(33984+D),t.bindTexture(34067,v.__webglTexture),ie.version!==ie.__currentVersion||X===!0){n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,Se=x.image[0]&&x.image[0].isDataTexture,W=[];for(let ve=0;ve<6;ve++)!he&&!Se?W[ve]=w(x.image[ve],!1,!0,c):W[ve]=Se?x.image[ve].image:x.image[ve],W[ve]=ce(x,W[ve]);const Ce=W[0],we=y(Ce)||a,Ee=s.convert(x.format,x.encoding),L=s.convert(x.type),be=b(x.internalFormat,Ee,L,x.encoding),de=a&&x.isVideoTexture!==!0,Re=ie.__currentVersion===void 0||X===!0;let Ae=C(x,Ce,we);P(34067,x,we);let De;if(he){de&&Re&&t.texStorage2D(34067,Ae,be,Ce.width,Ce.height);for(let ve=0;ve<6;ve++){De=W[ve].mipmaps;for(let Ie=0;Ie<De.length;Ie++){const Ze=De[Ie];x.format!==mn?Ee!==null?de?t.compressedTexSubImage2D(34069+ve,Ie,0,0,Ze.width,Ze.height,Ee,Ze.data):t.compressedTexImage2D(34069+ve,Ie,be,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?t.texSubImage2D(34069+ve,Ie,0,0,Ze.width,Ze.height,Ee,L,Ze.data):t.texImage2D(34069+ve,Ie,be,Ze.width,Ze.height,0,Ee,L,Ze.data)}}}else{De=x.mipmaps,de&&Re&&(De.length>0&&Ae++,t.texStorage2D(34067,Ae,be,W[0].width,W[0].height));for(let ve=0;ve<6;ve++)if(Se){de?t.texSubImage2D(34069+ve,0,0,0,W[ve].width,W[ve].height,Ee,L,W[ve].data):t.texImage2D(34069+ve,0,be,W[ve].width,W[ve].height,0,Ee,L,W[ve].data);for(let Ie=0;Ie<De.length;Ie++){const Je=De[Ie].image[ve].image;de?t.texSubImage2D(34069+ve,Ie+1,0,0,Je.width,Je.height,Ee,L,Je.data):t.texImage2D(34069+ve,Ie+1,be,Je.width,Je.height,0,Ee,L,Je.data)}}else{de?t.texSubImage2D(34069+ve,0,0,0,Ee,L,W[ve]):t.texImage2D(34069+ve,0,be,Ee,L,W[ve]);for(let Ie=0;Ie<De.length;Ie++){const Ze=De[Ie];de?t.texSubImage2D(34069+ve,Ie+1,0,0,Ee,L,Ze.image[ve]):t.texImage2D(34069+ve,Ie+1,be,Ee,L,Ze.image[ve])}}}R(x,we)&&O(34067),ie.__currentVersion=ie.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function oe(v,x,D,X,ie){const he=s.convert(D.format,D.encoding),Se=s.convert(D.type),W=b(D.internalFormat,he,Se,D.encoding);i.get(x).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,W,x.width,x.height,x.depth,0,he,Se,null):t.texImage2D(ie,0,W,x.width,x.height,0,he,Se,null)),t.bindFramebuffer(36160,v),ne(x)?h.framebufferTexture2DMultisampleEXT(36160,X,ie,i.get(D).__webglTexture,0,pe(x)):n.framebufferTexture2D(36160,X,ie,i.get(D).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(v,x,D){if(n.bindRenderbuffer(36161,v),x.depthBuffer&&!x.stencilBuffer){let X=33189;if(D||ne(x)){const ie=x.depthTexture;ie&&ie.isDepthTexture&&(ie.type===sr?X=36012:ie.type===rr&&(X=33190));const he=pe(x);ne(x)?h.renderbufferStorageMultisampleEXT(36161,he,X,x.width,x.height):n.renderbufferStorageMultisample(36161,he,X,x.width,x.height)}else n.renderbufferStorage(36161,X,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,v)}else if(x.depthBuffer&&x.stencilBuffer){const X=pe(x);D&&ne(x)===!1?n.renderbufferStorageMultisample(36161,X,35056,x.width,x.height):ne(x)?h.renderbufferStorageMultisampleEXT(36161,X,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,v)}else{const X=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ie=0;ie<X.length;ie++){const he=X[ie],Se=s.convert(he.format,he.encoding),W=s.convert(he.type),Ce=b(he.internalFormat,Se,W,he.encoding),we=pe(x);D&&ne(x)===!1?n.renderbufferStorageMultisample(36161,we,Ce,x.width,x.height):ne(x)?h.renderbufferStorageMultisampleEXT(36161,we,Ce,x.width,x.height):n.renderbufferStorage(36161,Ce,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function M(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const X=i.get(x.depthTexture).__webglTexture,ie=pe(x);if(x.depthTexture.format===lr)ne(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,X,0,ie):n.framebufferTexture2D(36160,36096,3553,X,0);else if(x.depthTexture.format===ss)ne(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,X,0,ie):n.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function T(v){const x=i.get(v),D=v.isWebGLCubeRenderTarget===!0;if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");M(x.__webglFramebuffer,v)}else if(D){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]=n.createRenderbuffer(),xe(x.__webglDepthbuffer[X],v,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),xe(x.__webglDepthbuffer,v,!1);t.bindFramebuffer(36160,null)}function k(v,x,D){const X=i.get(v);x!==void 0&&oe(X.__webglFramebuffer,v,v.texture,36064,3553),D!==void 0&&T(v)}function K(v){const x=v.texture,D=i.get(v),X=i.get(x);v.addEventListener("dispose",z),v.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++);const ie=v.isWebGLCubeRenderTarget===!0,he=v.isWebGLMultipleRenderTargets===!0,Se=y(v)||a;if(ie){D.__webglFramebuffer=[];for(let W=0;W<6;W++)D.__webglFramebuffer[W]=n.createFramebuffer()}else{if(D.__webglFramebuffer=n.createFramebuffer(),he)if(r.drawBuffers){const W=v.texture;for(let Ce=0,we=W.length;Ce<we;Ce++){const Ee=i.get(W[Ce]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&v.samples>0&&ne(v)===!1){const W=he?x:[x];D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer);for(let Ce=0;Ce<W.length;Ce++){const we=W[Ce];D.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(36161,D.__webglColorRenderbuffer[Ce]);const Ee=s.convert(we.format,we.encoding),L=s.convert(we.type),be=b(we.internalFormat,Ee,L,we.encoding),de=pe(v);n.renderbufferStorageMultisample(36161,de,be,v.width,v.height),n.framebufferRenderbuffer(36160,36064+Ce,36161,D.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(36161,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(D.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,X.__webglTexture),P(34067,x,Se);for(let W=0;W<6;W++)oe(D.__webglFramebuffer[W],v,x,36064,34069+W);R(x,Se)&&O(34067),t.unbindTexture()}else if(he){const W=v.texture;for(let Ce=0,we=W.length;Ce<we;Ce++){const Ee=W[Ce],L=i.get(Ee);t.bindTexture(3553,L.__webglTexture),P(3553,Ee,Se),oe(D.__webglFramebuffer,v,Ee,36064+Ce,3553),R(Ee,Se)&&O(3553)}t.unbindTexture()}else{let W=3553;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(a?W=v.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(W,X.__webglTexture),P(W,x,Se),oe(D.__webglFramebuffer,v,x,36064,W),R(x,Se)&&O(W),t.unbindTexture()}v.depthBuffer&&T(v)}function ee(v){const x=y(v)||a,D=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let X=0,ie=D.length;X<ie;X++){const he=D[X];if(R(he,x)){const Se=v.isWebGLCubeRenderTarget?34067:3553,W=i.get(he).__webglTexture;t.bindTexture(Se,W),O(Se),t.unbindTexture()}}}function fe(v){if(a&&v.samples>0&&ne(v)===!1){const x=v.isWebGLMultipleRenderTargets?v.texture:[v.texture],D=v.width,X=v.height;let ie=16384;const he=[],Se=v.stencilBuffer?33306:36096,W=i.get(v),Ce=v.isWebGLMultipleRenderTargets===!0;if(Ce)for(let we=0;we<x.length;we++)t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,W.__webglFramebuffer),n.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,W.__webglFramebuffer);for(let we=0;we<x.length;we++){he.push(36064+we),v.depthBuffer&&he.push(Se);const Ee=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(Ee===!1&&(v.depthBuffer&&(ie|=256),v.stencilBuffer&&(ie|=1024)),Ce&&n.framebufferRenderbuffer(36008,36064,36161,W.__webglColorRenderbuffer[we]),Ee===!0&&(n.invalidateFramebuffer(36008,[Se]),n.invalidateFramebuffer(36009,[Se])),Ce){const L=i.get(x[we]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,L,0)}n.blitFramebuffer(0,0,D,X,0,0,D,X,ie,9728),m&&n.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Ce)for(let we=0;we<x.length;we++){t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+we,36161,W.__webglColorRenderbuffer[we]);const Ee=i.get(x[we]).__webglTexture;t.bindFramebuffer(36160,W.__webglFramebuffer),n.framebufferTexture2D(36009,36064+we,3553,Ee,0)}t.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}}function pe(v){return Math.min(f,v.samples)}function ne(v){const x=i.get(v);return a&&v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(v){const x=o.render.frame;g.get(v)!==x&&(g.set(v,x),v.update())}function ce(v,x){const D=v.encoding,X=v.format,ie=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||v.format===_c||D!==pr&&(D===ut?a===!1?e.has("EXT_sRGB")===!0&&X===mn?(v.format=_c,v.minFilter=tn,v.generateMipmaps=!1):x=Wm.sRGBToLinear(x):(X!==mn||ie!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",D)),x}this.allocateTextureUnit=se,this.resetTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=ge,this.setTexture3D=re,this.setTextureCube=_e,this.rebindTextures=k,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=T,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ne}function KR(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===dr)return 5121;if(s===$E)return 32819;if(s===qE)return 32820;if(s===HE)return 5120;if(s===GE)return 5122;if(s===Vm)return 5123;if(s===WE)return 5124;if(s===rr)return 5125;if(s===sr)return 5126;if(s===no)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===jE)return 6406;if(s===mn)return 6408;if(s===KE)return 6409;if(s===YE)return 6410;if(s===lr)return 6402;if(s===ss)return 34041;if(s===ZE)return 6403;if(s===XE)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===JE)return 36244;if(s===QE)return 33319;if(s===eT)return 33320;if(s===tT)return 36249;if(s===tl||s===nl||s===il||s===rl)if(o===ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===il)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===vh||s===xh||s===yh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bh||s===Mh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bh)return o===ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Mh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sh||s===wh||s===Eh||s===Th||s===Ah||s===Ch||s===Rh||s===Lh||s===Ph||s===Dh||s===Ih||s===Fh||s===Oh||s===Nh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Eh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ch)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ph)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ih)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Fh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Oh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nh)return o===ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Bh)return o===ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Kr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YR extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qo extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZR={type:"move"};class Il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZR))),c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i);if(c.joints[d.jointName]===void 0){const S=new qo;S.matrixAutoUpdate=!1,S.visible=!1,c.joints[d.jointName]=S,c.add(S)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class JR extends xn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:lr,u!==lr&&u!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===lr&&(i=rr),i===void 0&&u===ss&&(i=Kr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1}}class QR extends ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,h=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],S=new Map,w=new fn;w.layers.enable(1),w.viewport=new Dt;const y=new fn;y.layers.enable(2),y.viewport=new Dt;const A=[w,y],R=new YR;R.layers.enable(1),R.layers.enable(2);let O=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=_[j];return J===void 0&&(J=new Il,_[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=_[j];return J===void 0&&(J=new Il,_[j]=J),J.getGripSpace()},this.getHand=function(j){let J=_[j];return J===void 0&&(J=new Il,_[j]=J),J.getHandSpace()};function C(j){const J=S.get(j.inputSource);J!==void 0&&J.dispatchEvent({type:j.type,data:j.inputSource})}function B(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",N),S.forEach(function(j,J){j!==void 0&&j.disconnect(J)}),S.clear(),O=null,b=null,e.setRenderTarget(d),h=null,f=null,u=null,r=null,p=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",B),r.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:h}),p=new Li(h.framebufferWidth,h.framebufferHeight,{format:mn,type:dr,encoding:e.outputEncoding})}else{let J=null,ge=null,re=null;g.depth&&(re=g.stencil?35056:33190,J=g.stencil?ss:lr,ge=g.stencil?Kr:rr);const _e={colorFormat:e.outputEncoding===ut?35907:32856,depthFormat:re,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(_e),r.updateRenderState({layers:[f]}),p=new Li(f.textureWidth,f.textureHeight,{format:mn,type:dr,depthTexture:new JR(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Te=e.properties.get(p);Te.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(j){const J=r.inputSources;for(let ge=0;ge<J.length;ge++){const re=J[ge].handedness==="right"?1:0;S.set(J[ge],_[re])}for(let ge=0;ge<j.removed.length;ge++){const re=j.removed[ge],_e=S.get(re);_e&&(_e.dispatchEvent({type:"disconnected",data:re}),S.delete(re))}for(let ge=0;ge<j.added.length;ge++){const re=j.added[ge],_e=S.get(re);_e&&_e.dispatchEvent({type:"connected",data:re})}}const z=new G,ae=new G;function I(j,J,ge){z.setFromMatrixPosition(J.matrixWorld),ae.setFromMatrixPosition(ge.matrixWorld);const re=z.distanceTo(ae),_e=J.projectionMatrix.elements,Te=ge.projectionMatrix.elements,F=_e[14]/(_e[10]-1),P=_e[14]/(_e[10]+1),U=(_e[9]+1)/_e[5],Y=(_e[9]-1)/_e[5],ue=(_e[8]-1)/_e[0],oe=(Te[8]+1)/Te[0],xe=F*ue,M=F*oe,T=re/(-ue+oe),k=T*-ue;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(k),j.translateZ(T),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const K=F+T,ee=P+T,fe=xe-k,pe=M+(re-k),ne=U*P/ee*K,me=Y*P/ee*K;j.projectionMatrix.makePerspective(fe,pe,ne,me,K,ee)}function te(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;R.near=y.near=w.near=j.near,R.far=y.far=w.far=j.far,(O!==R.near||b!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),O=R.near,b=R.far);const J=j.parent,ge=R.cameras;te(R,J);for(let _e=0;_e<ge.length;_e++)te(ge[_e],J);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),j.position.copy(R.position),j.quaternion.copy(R.quaternion),j.scale.copy(R.scale),j.matrix.copy(R.matrix),j.matrixWorld.copy(R.matrixWorld);const re=j.children;for(let _e=0,Te=re.length;_e<Te;_e++)re[_e].updateMatrixWorld(!0);ge.length===2?I(R,w,y):R.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(j){f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)};let $=null;function Q(j,J){if(c=J.getViewerPose(l||o),m=J,c!==null){const re=c.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let _e=!1;re.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let Te=0;Te<re.length;Te++){const F=re[Te];let P=null;if(h!==null)P=h.getViewport(F);else{const Y=u.getViewSubImage(f,F);P=Y.viewport,Te===0&&(e.setRenderTargetTextures(p,Y.colorTexture,f.ignoreDepthValues?void 0:Y.depthStencilTexture),e.setRenderTarget(p))}let U=A[Te];U===void 0&&(U=new fn,U.layers.enable(Te),U.viewport=new Dt,A[Te]=U),U.matrix.fromArray(F.transform.matrix),U.projectionMatrix.fromArray(F.projectionMatrix),U.viewport.set(P.x,P.y,P.width,P.height),Te===0&&R.matrix.copy(U.matrix),_e===!0&&R.cameras.push(U)}}const ge=r.inputSources;for(let re=0;re<_.length;re++){const _e=ge[re],Te=S.get(_e);Te!==void 0&&Te.update(_e,J,l||o)}$&&$(j,J),m=null}const se=new Qm;se.setAnimationLoop(Q),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}function eL(n,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,_,S,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,w)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),g(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,_,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===_n&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===_n&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uv2Transform.value.copy(w.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===_n&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function tL(){const n=fa("canvas");return n.style.display="block",n}function nL(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:tL(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pr,this.physicallyCorrectLights=!1,this.toneMapping=ni,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,S=0,w=null,y=-1,A=null;const R=new Dt,O=new Dt;let b=null,C=e.width,B=e.height,N=1,z=null,ae=null;const I=new Dt(0,0,C,B),te=new Dt(0,0,C,B);let $=!1;const Q=new Jm;let se=!1,j=!1,J=null;const ge=new It,re=new Xe,_e=new G,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return w===null?N:1}let P=t;function U(E,V){for(let Z=0;Z<E.length;Z++){const q=E[Z],le=e.getContext(q,V);if(le!==null)return le}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fu}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",de,!1),P===null){const V=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&V.shift(),P=U(V,E),P===null)throw U(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Y,ue,oe,xe,M,T,k,K,ee,fe,pe,ne,me,ce,v,x,D,X,ie,he,Se,W,Ce;function we(){Y=new pC(P),ue=new aC(P,Y,n),Y.init(ue),W=new KR(P,Y,ue),oe=new jR(P,Y,ue),xe=new _C,M=new OR,T=new XR(P,Y,oe,M,ue,W,xe),k=new cC(d),K=new dC(d),ee=new CT(P,ue),Ce=new sC(P,Y,ee,ue),fe=new mC(P,ee,xe,Ce),pe=new bC(P,fe,ee,xe),ie=new yC(P,ue,T),x=new lC(M),ne=new FR(d,k,K,Y,ue,Ce,x),me=new eL(d,M),ce=new BR,v=new GR(Y,ue),X=new rC(d,k,oe,pe,u,o),D=new qR(d,pe,ue),he=new oC(P,Y,xe,ue),Se=new gC(P,Y,xe,ue),xe.programs=ne.programs,d.capabilities=ue,d.extensions=Y,d.properties=M,d.renderLists=ce,d.shadowMap=D,d.state=oe,d.info=xe}we();const Ee=new QR(d,P);this.xr=Ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Y.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Y.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(E){E!==void 0&&(N=E,this.setSize(C,B,!1))},this.getSize=function(E){return E.set(C,B)},this.setSize=function(E,V,Z){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,B=V,e.width=Math.floor(E*N),e.height=Math.floor(V*N),Z!==!1&&(e.style.width=E+"px",e.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(C*N,B*N).floor()},this.setDrawingBufferSize=function(E,V,Z){C=E,B=V,N=Z,e.width=Math.floor(E*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,V,Z,q){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,V,Z,q),oe.viewport(R.copy(I).multiplyScalar(N).floor())},this.getScissor=function(E){return E.copy(te)},this.setScissor=function(E,V,Z,q){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,V,Z,q),oe.scissor(O.copy(te).multiplyScalar(N).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(E){oe.setScissorTest($=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(E=!0,V=!0,Z=!0){let q=0;E&&(q|=16384),V&&(q|=256),Z&&(q|=1024),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",de,!1),ce.dispose(),v.dispose(),M.dispose(),k.dispose(),K.dispose(),pe.dispose(),Ce.dispose(),ne.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ze),Ee.removeEventListener("sessionend",Je),J&&(J.dispose(),J=null),Ft.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=xe.autoReset,V=D.enabled,Z=D.autoUpdate,q=D.needsUpdate,le=D.type;we(),xe.autoReset=E,D.enabled=V,D.autoUpdate=Z,D.needsUpdate=q,D.type=le}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Re(E){const V=E.target;V.removeEventListener("dispose",Re),Ae(V)}function Ae(E){De(E),M.remove(E)}function De(E){const V=M.get(E).programs;V!==void 0&&(V.forEach(function(Z){ne.releaseProgram(Z)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Z,q,le,Pe){V===null&&(V=Te);const Oe=le.isMesh&&le.matrixWorld.determinant()<0,ze=Cg(E,V,Z,q,le);oe.setMaterial(q,Oe);let Be=Z.index;const Qe=Z.attributes.position;if(Be===null){if(Qe===void 0||Qe.count===0)return}else if(Be.count===0)return;let We=1;q.wireframe===!0&&(Be=fe.getWireframeAttribute(Z),We=2),Ce.setup(le,q,ze,Z,Be);let qe,ht=he;Be!==null&&(qe=ee.get(Be),ht=Se,ht.setIndex(qe));const Bi=Be!==null?Be.count:Qe.count,Mr=Z.drawRange.start*We,Sr=Z.drawRange.count*We,Mn=Pe!==null?Pe.start*We:0,Ke=Pe!==null?Pe.count*We:1/0,wr=Math.max(Mr,Mn),pt=Math.min(Bi,Mr+Sr,Mn+Ke)-1,Sn=Math.max(0,pt-wr+1);if(Sn!==0){if(le.isMesh)q.wireframe===!0?(oe.setLineWidth(q.wireframeLinewidth*F()),ht.setMode(1)):ht.setMode(4);else if(le.isLine){let oi=q.linewidth;oi===void 0&&(oi=1),oe.setLineWidth(oi*F()),le.isLineSegments?ht.setMode(1):le.isLineLoop?ht.setMode(2):ht.setMode(3)}else le.isPoints?ht.setMode(0):le.isSprite&&ht.setMode(4);if(le.isInstancedMesh)ht.renderInstances(wr,Sn,le.count);else if(Z.isInstancedBufferGeometry){const oi=Math.min(Z.instanceCount,Z._maxInstanceCount);ht.renderInstances(wr,Sn,oi)}else ht.render(wr,Sn)}},this.compile=function(E,V){h=v.get(E),h.init(),g.push(h),E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(V.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights(d.physicallyCorrectLights),E.traverse(function(Z){const q=Z.material;if(q)if(Array.isArray(q))for(let le=0;le<q.length;le++){const Pe=q[le];Ia(Pe,E,Z)}else Ia(q,E,Z)}),g.pop(),h=null};let ve=null;function Ie(E){ve&&ve(E)}function Ze(){Ft.stop()}function Je(){Ft.start()}const Ft=new Qm;Ft.setAnimationLoop(Ie),typeof self!="undefined"&&Ft.setContext(self),this.setAnimationLoop=function(E){ve=E,Ee.setAnimationLoop(E),E===null?Ft.stop():Ft.start()},Ee.addEventListener("sessionstart",Ze),Ee.addEventListener("sessionend",Je),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(V),V=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,V,w),h=v.get(E,g.length),h.init(),g.push(h),ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(ge),j=this.localClippingEnabled,se=x.init(this.clippingPlanes,j,V),f=ce.get(E,m.length),f.init(),m.push(f),bn(E,V,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(z,ae),se===!0&&x.beginShadows();const Z=h.state.shadowsArray;if(D.render(Z,E,V),se===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(f,E),h.setupLights(d.physicallyCorrectLights),V.isArrayCamera){const q=V.cameras;for(let le=0,Pe=q.length;le<Pe;le++){const Oe=q[le];xu(f,E,Oe,Oe.viewport)}}else xu(f,E,V);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(d,E,V),Ce.resetDefaultState(),y=-1,A=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function bn(E,V,Z,q){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){q&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const Oe=pe.update(E),ze=E.material;ze.visible&&f.push(E,Oe,ze,Z,_e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==xe.render.frame&&(E.skeleton.update(),E.skeleton.frame=xe.render.frame),!E.frustumCulled||Q.intersectsObject(E))){q&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const Oe=pe.update(E),ze=E.material;if(Array.isArray(ze)){const Be=Oe.groups;for(let Qe=0,We=Be.length;Qe<We;Qe++){const qe=Be[Qe],ht=ze[qe.materialIndex];ht&&ht.visible&&f.push(E,Oe,ht,Z,_e.z,qe)}}else ze.visible&&f.push(E,Oe,ze,Z,_e.z,null)}}const Pe=E.children;for(let Oe=0,ze=Pe.length;Oe<ze;Oe++)bn(Pe[Oe],V,Z,q)}function xu(E,V,Z,q){const le=E.opaque,Pe=E.transmissive,Oe=E.transparent;h.setupLightsView(Z),Pe.length>0&&Tg(le,V,Z),q&&oe.viewport(R.copy(q)),le.length>0&&mo(le,V,Z),Pe.length>0&&mo(Pe,V,Z),Oe.length>0&&mo(Oe,V,Z),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function Tg(E,V,Z){const q=ue.isWebGL2;J===null&&(J=new Li(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?no:dr,minFilter:La,samples:q&&s===!0?4:0})),d.getDrawingBufferSize(re),q?J.setSize(re.x,re.y):J.setSize(vc(re.x),vc(re.y));const le=d.getRenderTarget();d.setRenderTarget(J),d.clear();const Pe=d.toneMapping;d.toneMapping=ni,mo(E,V,Z),d.toneMapping=Pe,T.updateMultisampleRenderTarget(J),T.updateRenderTargetMipmap(J),d.setRenderTarget(le)}function mo(E,V,Z){const q=V.isScene===!0?V.overrideMaterial:null;for(let le=0,Pe=E.length;le<Pe;le++){const Oe=E[le],ze=Oe.object,Be=Oe.geometry,Qe=q===null?Oe.material:q,We=Oe.group;ze.layers.test(Z.layers)&&Ag(ze,V,Z,Be,Qe,We)}}function Ag(E,V,Z,q,le,Pe){E.onBeforeRender(d,V,Z,q,le,Pe),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),le.onBeforeRender(d,V,Z,q,E,Pe),le.transparent===!0&&le.side===ns?(le.side=_n,le.needsUpdate=!0,d.renderBufferDirect(Z,V,q,le,E,Pe),le.side=to,le.needsUpdate=!0,d.renderBufferDirect(Z,V,q,le,E,Pe),le.side=ns):d.renderBufferDirect(Z,V,q,le,E,Pe),E.onAfterRender(d,V,Z,q,le,Pe)}function Ia(E,V,Z){V.isScene!==!0&&(V=Te);const q=M.get(E),le=h.state.lights,Pe=h.state.shadowsArray,Oe=le.state.version,ze=ne.getParameters(E,le.state,Pe,V,Z),Be=ne.getProgramCacheKey(ze);let Qe=q.programs;q.environment=E.isMeshStandardMaterial?V.environment:null,q.fog=V.fog,q.envMap=(E.isMeshStandardMaterial?K:k).get(E.envMap||q.environment),Qe===void 0&&(E.addEventListener("dispose",Re),Qe=new Map,q.programs=Qe);let We=Qe.get(Be);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Oe)return yu(E,ze),We}else ze.uniforms=ne.getUniforms(E),E.onBuild(Z,ze,d),E.onBeforeCompile(ze,d),We=ne.acquireProgram(ze,Be),Qe.set(Be,We),q.uniforms=ze.uniforms;const qe=q.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=x.uniform),yu(E,ze),q.needsLights=Lg(E),q.lightsStateVersion=Oe,q.needsLights&&(qe.ambientLightColor.value=le.state.ambient,qe.lightProbe.value=le.state.probe,qe.directionalLights.value=le.state.directional,qe.directionalLightShadows.value=le.state.directionalShadow,qe.spotLights.value=le.state.spot,qe.spotLightShadows.value=le.state.spotShadow,qe.rectAreaLights.value=le.state.rectArea,qe.ltc_1.value=le.state.rectAreaLTC1,qe.ltc_2.value=le.state.rectAreaLTC2,qe.pointLights.value=le.state.point,qe.pointLightShadows.value=le.state.pointShadow,qe.hemisphereLights.value=le.state.hemi,qe.directionalShadowMap.value=le.state.directionalShadowMap,qe.directionalShadowMatrix.value=le.state.directionalShadowMatrix,qe.spotShadowMap.value=le.state.spotShadowMap,qe.spotShadowMatrix.value=le.state.spotShadowMatrix,qe.pointShadowMap.value=le.state.pointShadowMap,qe.pointShadowMatrix.value=le.state.pointShadowMatrix);const ht=We.getUniforms(),Bi=ta.seqWithValue(ht.seq,qe);return q.currentProgram=We,q.uniformsList=Bi,We}function yu(E,V){const Z=M.get(E);Z.outputEncoding=V.outputEncoding,Z.instancing=V.instancing,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function Cg(E,V,Z,q,le){V.isScene!==!0&&(V=Te),T.resetTextureUnits();const Pe=V.fog,Oe=q.isMeshStandardMaterial?V.environment:null,ze=w===null?d.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:pr,Be=(q.isMeshStandardMaterial?K:k).get(q.envMap||Oe),Qe=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,We=!!q.normalMap&&!!Z.attributes.tangent,qe=!!Z.morphAttributes.position,ht=!!Z.morphAttributes.normal,Bi=!!Z.morphAttributes.color,Mr=q.toneMapped?d.toneMapping:ni,Sr=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mn=Sr!==void 0?Sr.length:0,Ke=M.get(q),wr=h.state.lights;if(se===!0&&(j===!0||E!==A)){const wn=E===A&&q.id===y;x.setState(q,E,wn)}let pt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==wr.state.version||Ke.outputEncoding!==ze||le.isInstancedMesh&&Ke.instancing===!1||!le.isInstancedMesh&&Ke.instancing===!0||le.isSkinnedMesh&&Ke.skinning===!1||!le.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Be||q.fog===!0&&Ke.fog!==Pe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==x.numPlanes||Ke.numIntersection!==x.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==We||Ke.morphTargets!==qe||Ke.morphNormals!==ht||Ke.morphColors!==Bi||Ke.toneMapping!==Mr||ue.isWebGL2===!0&&Ke.morphTargetsCount!==Mn)&&(pt=!0):(pt=!0,Ke.__version=q.version);let Sn=Ke.currentProgram;pt===!0&&(Sn=Ia(q,V,le));let oi=!1,vs=!1,Fa=!1;const Ot=Sn.getUniforms(),xs=Ke.uniforms;if(oe.useProgram(Sn.program)&&(oi=!0,vs=!0,Fa=!0),q.id!==y&&(y=q.id,vs=!0),oi||A!==E){if(Ot.setValue(P,"projectionMatrix",E.projectionMatrix),ue.logarithmicDepthBuffer&&Ot.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),A!==E&&(A=E,vs=!0,Fa=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const wn=Ot.map.cameraPosition;wn!==void 0&&wn.setValue(P,_e.setFromMatrixPosition(E.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ot.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||le.isSkinnedMesh)&&Ot.setValue(P,"viewMatrix",E.matrixWorldInverse)}if(le.isSkinnedMesh){Ot.setOptional(P,le,"bindMatrix"),Ot.setOptional(P,le,"bindMatrixInverse");const wn=le.skeleton;wn&&(ue.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Ot.setValue(P,"boneTexture",wn.boneTexture,T),Ot.setValue(P,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Oa=Z.morphAttributes;return(Oa.position!==void 0||Oa.normal!==void 0||Oa.color!==void 0&&ue.isWebGL2===!0)&&ie.update(le,Z,q,Sn),(vs||Ke.receiveShadow!==le.receiveShadow)&&(Ke.receiveShadow=le.receiveShadow,Ot.setValue(P,"receiveShadow",le.receiveShadow)),vs&&(Ot.setValue(P,"toneMappingExposure",d.toneMappingExposure),Ke.needsLights&&Rg(xs,Fa),Pe&&q.fog===!0&&me.refreshFogUniforms(xs,Pe),me.refreshMaterialUniforms(xs,q,N,B,J),ta.upload(P,Ke.uniformsList,xs,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ta.upload(P,Ke.uniformsList,xs,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ot.setValue(P,"center",le.center),Ot.setValue(P,"modelViewMatrix",le.modelViewMatrix),Ot.setValue(P,"normalMatrix",le.normalMatrix),Ot.setValue(P,"modelMatrix",le.matrixWorld),Sn}function Rg(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Lg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,V,Z){M.get(E.texture).__webglTexture=V,M.get(E.depthTexture).__webglTexture=Z;const q=M.get(E);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Z===void 0,q.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){const Z=M.get(E);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,Z=0){w=E,_=V,S=Z;let q=!0;if(E){const Be=M.get(E);Be.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),q=!1):Be.__webglFramebuffer===void 0?T.setupRenderTarget(E):Be.__hasExternalTextures&&T.rebindTextures(E,M.get(E.texture).__webglTexture,M.get(E.depthTexture).__webglTexture)}let le=null,Pe=!1,Oe=!1;if(E){const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture)&&(Oe=!0);const Qe=M.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(le=Qe[V],Pe=!0):ue.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?le=M.get(E).__webglMultisampledFramebuffer:le=Qe,R.copy(E.viewport),O.copy(E.scissor),b=E.scissorTest}else R.copy(I).multiplyScalar(N).floor(),O.copy(te).multiplyScalar(N).floor(),b=$;if(oe.bindFramebuffer(36160,le)&&ue.drawBuffers&&q&&oe.drawBuffers(E,le),oe.viewport(R),oe.scissor(O),oe.setScissorTest(b),Pe){const Be=M.get(E.texture);P.framebufferTexture2D(36160,36064,34069+V,Be.__webglTexture,Z)}else if(Oe){const Be=M.get(E.texture),Qe=V||0;P.framebufferTextureLayer(36160,36064,Be.__webglTexture,Z||0,Qe)}y=-1},this.readRenderTargetPixels=function(E,V,Z,q,le,Pe,Oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=M.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){oe.bindFramebuffer(36160,ze);try{const Be=E.texture,Qe=Be.format,We=Be.type;if(Qe!==mn&&W.convert(Qe)!==P.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=We===no&&(Y.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Y.has("EXT_color_buffer_float"));if(We!==dr&&W.convert(We)!==P.getParameter(35738)&&!(We===sr&&(ue.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-q&&Z>=0&&Z<=E.height-le&&P.readPixels(V,Z,q,le,W.convert(Qe),W.convert(We),Pe)}finally{const Be=w!==null?M.get(w).__webglFramebuffer:null;oe.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(E,V,Z=0){const q=Math.pow(2,-Z),le=Math.floor(V.image.width*q),Pe=Math.floor(V.image.height*q);T.setTexture2D(V,0),P.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,le,Pe),oe.unbindTexture()},this.copyTextureToTexture=function(E,V,Z,q=0){const le=V.image.width,Pe=V.image.height,Oe=W.convert(Z.format),ze=W.convert(Z.type);T.setTexture2D(Z,0),P.pixelStorei(37440,Z.flipY),P.pixelStorei(37441,Z.premultiplyAlpha),P.pixelStorei(3317,Z.unpackAlignment),V.isDataTexture?P.texSubImage2D(3553,q,E.x,E.y,le,Pe,Oe,ze,V.image.data):V.isCompressedTexture?P.compressedTexSubImage2D(3553,q,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,Oe,V.mipmaps[0].data):P.texSubImage2D(3553,q,E.x,E.y,Oe,ze,V.image),q===0&&Z.generateMipmaps&&P.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(E,V,Z,q,le=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=E.max.x-E.min.x+1,Oe=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,Be=W.convert(q.format),Qe=W.convert(q.type);let We;if(q.isData3DTexture)T.setTexture3D(q,0),We=32879;else if(q.isDataArrayTexture)T.setTexture2DArray(q,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(37440,q.flipY),P.pixelStorei(37441,q.premultiplyAlpha),P.pixelStorei(3317,q.unpackAlignment);const qe=P.getParameter(3314),ht=P.getParameter(32878),Bi=P.getParameter(3316),Mr=P.getParameter(3315),Sr=P.getParameter(32877),Mn=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;P.pixelStorei(3314,Mn.width),P.pixelStorei(32878,Mn.height),P.pixelStorei(3316,E.min.x),P.pixelStorei(3315,E.min.y),P.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?P.texSubImage3D(We,le,V.x,V.y,V.z,Pe,Oe,ze,Be,Qe,Mn.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(We,le,V.x,V.y,V.z,Pe,Oe,ze,Be,Mn.data)):P.texSubImage3D(We,le,V.x,V.y,V.z,Pe,Oe,ze,Be,Qe,Mn),P.pixelStorei(3314,qe),P.pixelStorei(32878,ht),P.pixelStorei(3316,Bi),P.pixelStorei(3315,Mr),P.pixelStorei(32877,Sr),le===0&&q.generateMipmaps&&P.generateMipmap(We),oe.unbindTexture()},this.initTexture=function(E){T.setTexture2D(E,0),oe.unbindTexture()},this.resetState=function(){_=0,S=0,w=null,oe.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class iL extends nL{}iL.prototype.isWebGL1Renderer=!0;class vP extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class rL extends Ct{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class ag extends Ct{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class sL extends Ct{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new G;new G;new G;new G;new Dn;class oL extends Ct{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class aL extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lg extends Ct{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lL extends lg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cL extends Ct{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uL extends Ct{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ne(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class fL extends Ct{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class hL extends Ct{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class dL extends Ct{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ne(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ps,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pL extends ag{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const mL={ShadowMaterial:oL,SpriteMaterial:rL,RawShaderMaterial:aL,ShaderMaterial:ri,PointsMaterial:sL,MeshPhysicalMaterial:lL,MeshStandardMaterial:lg,MeshPhongMaterial:cL,MeshToonMaterial:uL,MeshNormalMaterial:fL,MeshLambertMaterial:hL,MeshDepthMaterial:sg,MeshDistanceMaterial:og,MeshBasicMaterial:du,MeshMatcapMaterial:dL,LineDashedMaterial:pL,LineBasicMaterial:ag,Material:Ct};Ct.fromType=function(n){return new mL[n]};const cg="\\[\\]\\.:\\/",gu="[^"+cg+"]",gL="[^"+cg.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",gu);/(WCOD+)?/.source.replace("WCOD",gL);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu);const Tn=new Uint32Array(512),An=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(Tn[n]=0,Tn[n|256]=32768,An[n]=24,An[n|256]=24):e<-14?(Tn[n]=1024>>-e-14,Tn[n|256]=1024>>-e-14|32768,An[n]=-e-1,An[n|256]=-e-1):e<=15?(Tn[n]=e+15<<10,Tn[n|256]=e+15<<10|32768,An[n]=13,An[n|256]=13):e<128?(Tn[n]=31744,Tn[n|256]=64512,An[n]=24,An[n|256]=24):(Tn[n]=31744,Tn[n|256]=64512,An[n]=13,An[n|256]=13)}const ug=new Uint32Array(2048),po=new Uint32Array(64),_L=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,ug[n]=e|t}for(let n=1024;n<2048;++n)ug[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)po[n]=n<<23;po[31]=1199570944;po[32]=2147483648;for(let n=33;n<63;++n)po[n]=2147483648+(n-32<<23);po[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(_L[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);const Vn=Object.create(null);Vn.open="0";Vn.close="1";Vn.ping="2";Vn.pong="3";Vn.message="4";Vn.upgrade="5";Vn.noop="6";const na=Object.create(null);Object.keys(Vn).forEach(n=>{na[Vn[n]]=n});const vL={type:"error",data:"parser error"},xL=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",yL=typeof ArrayBuffer=="function",bL=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,fg=({type:n,data:e},t,i)=>xL&&e instanceof Blob?t?i(e):bd(e,i):yL&&(e instanceof ArrayBuffer||bL(e))?t?i(e):bd(new Blob([e]),i):i(Vn[n]+(e||"")),bd=(n,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+i)},t.readAsDataURL(n)},Md="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ds=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(let n=0;n<Md.length;n++)Ds[Md.charCodeAt(n)]=n;const ML=n=>{let e=n.length*.75,t=n.length,i,r=0,s,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(i=0;i<t;i+=4)s=Ds[n.charCodeAt(i)],o=Ds[n.charCodeAt(i+1)],a=Ds[n.charCodeAt(i+2)],l=Ds[n.charCodeAt(i+3)],u[r++]=s<<2|o>>4,u[r++]=(o&15)<<4|a>>2,u[r++]=(a&3)<<6|l&63;return c},SL=typeof ArrayBuffer=="function",hg=(n,e)=>{if(typeof n!="string")return{type:"message",data:dg(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:wL(n.substring(1),e)}:na[t]?n.length>1?{type:na[t],data:n.substring(1)}:{type:na[t]}:vL},wL=(n,e)=>{if(SL){const t=ML(n);return dg(t,e)}else return{base64:!0,data:n}},dg=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},pg=String.fromCharCode(30),EL=(n,e)=>{const t=n.length,i=new Array(t);let r=0;n.forEach((s,o)=>{fg(s,!1,a=>{i[o]=a,++r===t&&e(i.join(pg))})})},TL=(n,e)=>{const t=n.split(pg),i=[];for(let r=0;r<t.length;r++){const s=hg(t[r],e);if(i.push(s),s.type==="error")break}return i},mg=4;function gt(n){if(n)return AL(n)}function AL(n){for(var e in gt.prototype)n[e]=gt.prototype[e];return n}gt.prototype.on=gt.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};gt.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};gt.prototype.off=gt.prototype.removeListener=gt.prototype.removeAllListeners=gt.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,r=0;r<t.length;r++)if(i=t[r],i===e||i.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+n],this};gt.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,r=t.length;i<r;++i)t[i].apply(this,e)}return this};gt.prototype.emitReserved=gt.prototype.emit;gt.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};gt.prototype.hasListeners=function(n){return!!this.listeners(n).length};const Ei=(()=>typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")())();function gg(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}const CL=setTimeout,RL=clearTimeout;function Da(n,e){e.useNativeTimers?(n.setTimeoutFn=CL.bind(Ei),n.clearTimeoutFn=RL.bind(Ei)):(n.setTimeoutFn=setTimeout.bind(Ei),n.clearTimeoutFn=clearTimeout.bind(Ei))}const LL=1.33;function PL(n){return typeof n=="string"?DL(n):Math.ceil((n.byteLength||n.size)*LL)}function DL(n){let e=0,t=0;for(let i=0,r=n.length;i<r;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}class IL extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class _g extends gt{constructor(e){super(),this.writable=!1,Da(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new IL(e,t,i)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=hg(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const vg="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),yc=64,FL={};let Sd=0,jo=0,wd;function Ed(n){let e="";do e=vg[n%yc]+e,n=Math.floor(n/yc);while(n>0);return e}function xg(){const n=Ed(+new Date);return n!==wd?(Sd=0,wd=n):n+"."+Ed(Sd++)}for(;jo<yc;jo++)FL[vg[jo]]=jo;function yg(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function OL(n){let e={},t=n.split("&");for(let i=0,r=t.length;i<r;i++){let s=t[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}let bg=!1;try{bg=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch{}const NL=bg;function Mg(n){const e=n.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||NL))return new XMLHttpRequest}catch{}if(!e)try{return new Ei[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function BL(){}const zL=function(){return new Mg({xdomain:!1}).responseType!=null}();class UL extends _g{constructor(e){if(super(e),this.polling=!1,typeof location!="undefined"){const i=location.protocol==="https:";let r=location.port;r||(r=i?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==i}const t=e&&e.forceBase64;this.supportsBinary=zL&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};TL(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,EL(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let i="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=xg()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(i=":"+this.opts.port);const r=yg(e),s=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+i+this.opts.path+(r.length?"?"+r:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new zn(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class zn extends gt{constructor(e,t){super(),Da(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=gg(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new Mg(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&t.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document!="undefined"&&(this.index=zn.requestsCount++,zn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr=="undefined"||this.xhr===null)){if(this.xhr.onreadystatechange=BL,e)try{this.xhr.abort()}catch{}typeof document!="undefined"&&delete zn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}zn.requestsCount=0;zn.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",Td);else if(typeof addEventListener=="function"){const n="onpagehide"in Ei?"pagehide":"unload";addEventListener(n,Td,!1)}}function Td(){for(let n in zn.requests)zn.requests.hasOwnProperty(n)&&zn.requests[n].abort()}const Sg=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),Xo=Ei.WebSocket||Ei.MozWebSocket,Ad=!0,kL="arraybuffer",Cd=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class VL extends _g{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=Cd?{}:gg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=Ad&&!Cd?t?new Xo(e,t):new Xo(e):new Xo(e,t,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType||kL,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],r=t===e.length-1;fg(i,this.supportsBinary,s=>{const o={};try{Ad&&this.ws.send(s)}catch{}r&&Sg(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let i="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(i=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=xg()),this.supportsBinary||(e.b64=1);const r=yg(e),s=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+i+this.opts.path+(r.length?"?"+r:"")}check(){return!!Xo}}const HL={websocket:VL,polling:UL},GL=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,WL=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function bc(n){const e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let r=GL.exec(n||""),s={},o=14;for(;o--;)s[WL[o]]=r[o]||"";return t!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=$L(s,s.path),s.queryKey=qL(s,s.query),s}function $L(n,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function qL(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(t[r]=s)}),t}class bi extends gt{constructor(e,t={}){super(),e&&typeof e=="object"&&(t=e,e=null),e?(e=bc(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=bc(t.host).host),Da(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=OL(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=mg,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new HL[e](i)}open(){let e;if(this.opts.rememberUpgrade&&bi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;bi.priorWebsocketSuccess=!1;const r=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!i)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;bi.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=t.name,this.emitReserved("upgradeError",h)}}))};function s(){i||(i=!0,u(),t.close(),t=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=t.name,s(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){t&&f.name!==t.name&&s()}const u=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),t.open()}onOpen(){if(this.readyState="open",bi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(t+=PL(r)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,r){if(typeof t=="function"&&(r=t,t=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:t,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){bi.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const r=e.length;for(;i<r;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}}bi.protocol=mg;function jL(n,e="",t){let i=n;t=t||typeof location!="undefined"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t!="undefined"?n=t.protocol+"//"+n:n="https://"+n),i=bc(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(t&&t.port===i.port?"":":"+i.port),i}const XL=typeof ArrayBuffer=="function",KL=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,wg=Object.prototype.toString,YL=typeof Blob=="function"||typeof Blob!="undefined"&&wg.call(Blob)==="[object BlobConstructor]",ZL=typeof File=="function"||typeof File!="undefined"&&wg.call(File)==="[object FileConstructor]";function _u(n){return XL&&(n instanceof ArrayBuffer||KL(n))||YL&&n instanceof Blob||ZL&&n instanceof File}function ia(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(ia(n[t]))return!0;return!1}if(_u(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return ia(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&ia(n[t]))return!0;return!1}function JL(n){const e=[],t=n.data,i=n;return i.data=Mc(t,e),i.attachments=e.length,{packet:i,buffers:e}}function Mc(n,e){if(!n)return n;if(_u(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let i=0;i<n.length;i++)t[i]=Mc(n[i],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=Mc(n[i],e));return t}return n}function QL(n,e){return n.data=Sc(n.data,e),n.attachments=void 0,n}function Sc(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=Sc(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Sc(n[t],e));return n}const eP=5;var Ge;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Ge||(Ge={}));class tP{constructor(e){this.replacer=e}encode(e){return(e.type===Ge.EVENT||e.type===Ge.ACK)&&ia(e)?(e.type=e.type===Ge.EVENT?Ge.BINARY_EVENT:Ge.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ge.BINARY_EVENT||e.type===Ge.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=JL(e),i=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(i),r}}class vu extends gt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e),t.type===Ge.BINARY_EVENT||t.type===Ge.BINARY_ACK?(this.reconstructor=new nP(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(_u(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(Ge[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ge.BINARY_EVENT||i.type===Ge.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(s,t)}else i.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(vu.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ge.CONNECT:return typeof t=="object";case Ge.DISCONNECT:return t===void 0;case Ge.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case Ge.EVENT:case Ge.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case Ge.ACK:case Ge.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class nP{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=QL(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var iP=Object.freeze(Object.defineProperty({__proto__:null,protocol:eP,get PacketType(){return Ge},Encoder:tP,Decoder:vu},Symbol.toStringTag,{value:"Module"}));function un(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const rP=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Eg extends gt{constructor(e,t,i){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[un(e,"open",this.onopen.bind(this)),un(e,"packet",this.onpacket.bind(this)),un(e,"error",this.onerror.bind(this)),un(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(rP.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');t.unshift(e);const i={type:Ge.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),i.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){const i=this.flags.timeout;if(i===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===e&&this.sendBuffer.splice(s,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...s)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...s])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:Ge.CONNECT,data:e})}):this.packet({type:Ge.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ge.CONNECT:if(e.data&&e.data.sid){const r=e.data.sid;this.onconnect(r)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ge.EVENT:case Ge.BINARY_EVENT:this.onevent(e);break;case Ge.ACK:case Ge.BINARY_ACK:this.onack(e);break;case Ge.DISCONNECT:this.ondisconnect();break;case Ge.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e)}ack(e){const t=this;let i=!1;return function(...r){i||(i=!0,t.packet({type:Ge.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ge.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function _s(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}_s.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=(Math.floor(e*10)&1)==0?n-t:n+t}return Math.min(n,this.max)|0};_s.prototype.reset=function(){this.attempts=0};_s.prototype.setMin=function(n){this.ms=n};_s.prototype.setMax=function(n){this.max=n};_s.prototype.setJitter=function(n){this.jitter=n};class wc extends gt{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Da(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new _s({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||iP;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new bi(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=un(t,"open",function(){i.onopen(),e&&e()}),s=un(t,"error",o=>{i.cleanup(),i._readyState="closed",this.emitReserved("error",o),e?e(o):i.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&r();const a=this.setTimeoutFn(()=>{r(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(r),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(un(e,"ping",this.onping.bind(this)),un(e,"data",this.ondata.bind(this)),un(e,"error",this.onerror.bind(this)),un(e,"close",this.onclose.bind(this)),un(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Sg(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i||(i=new Eg(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(function(){clearTimeout(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const As={};function Fl(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=jL(n,e.path||"/socket.io"),i=t.source,r=t.id,s=t.path,o=As[r]&&s in As[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new wc(i,e):(As[r]||(As[r]=new wc(i,e)),l=As[r]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Fl,{Manager:wc,Socket:Eg,io:Fl,connect:Fl});export{cE as A,ho as B,_P as C,gP as D,uP as E,Mt as F,lP as G,du as M,fn as P,sE as R,vP as S,nL as W,mr as a,ot as b,Ye as c,ct as d,yp as e,oP as f,dt as g,mP as h,gr as i,wi as j,ft as k,Fl as l,G0 as m,cP as n,Le as o,sP as p,dP as q,nt as r,hP as s,Mi as t,H as u,aP as v,Et as w,Tp as x,fP as y,pP as z};
