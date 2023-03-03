function wc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function $n(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Je(i)?zg(i):$n(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Je(n))return n;if(et(n))return n}}const Fg=/;(?![^(]*\))/g,Ng=/:([^]+)/,Bg=/\/\*.*?\*\//gs;function zg(n){const e={};return n.replace(Bg,"").split(Fg).forEach(t=>{if(t){const i=t.split(Ng);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ke(n){let e="";if(Je(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=ke(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ug="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kg=wc(Ug);function Ch(n){return!!n||n===""}const Ei=n=>Je(n)?n:n==null?"":Ne(n)||et(n)&&(n.toString===Ih||!Xe(n.toString))?JSON.stringify(n,Rh,2):String(n),Rh=(n,e)=>e&&e.__v_isRef?Rh(n,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:Ph(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!Ne(e)&&!Oh(e)?String(e):e,lt={},qr=[],Gn=()=>{},Vg=()=>!1,Gg=/^on[^a-z]/,ha=n=>Gg.test(n),Ec=n=>n.startsWith("onUpdate:"),kt=Object.assign,Lh=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hg=Object.prototype.hasOwnProperty,He=(n,e)=>Hg.call(n,e),Ne=Array.isArray,jr=n=>pa(n)==="[object Map]",Ph=n=>pa(n)==="[object Set]",Xe=n=>typeof n=="function",Je=n=>typeof n=="string",Tc=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Dh=n=>et(n)&&Xe(n.then)&&Xe(n.catch),Ih=Object.prototype.toString,pa=n=>Ih.call(n),Wg=n=>pa(n).slice(8,-1),Oh=n=>pa(n)==="[object Object]",Ac=n=>Je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zo=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$g=/-(\w)/g,qn=ma(n=>n.replace($g,(e,t)=>t?t.toUpperCase():"")),qg=/\B([A-Z])/g,cs=ma(n=>n.replace(qg,"-$1").toLowerCase()),ga=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ua=ma(n=>n?`on${ga(n)}`:""),$s=(n,e)=>!Object.is(n,e),ka=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},sa=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},jg=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Xg=n=>{const e=Je(n)?Number(n):NaN;return isNaN(e)?n:e};let xu;const Kg=()=>xu||(xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let sn;class Yg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=sn;try{return sn=this,e()}finally{sn=t}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Zg(n,e=sn){e&&e.active&&e.effects.push(n)}function Fh(){return sn}function Jg(n){sn&&sn.cleanups.push(n)}const Cc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Nh=n=>(n.w&Oi)>0,Bh=n=>(n.n&Oi)>0,Qg=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Oi},e_=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Nh(r)&&!Bh(r)?r.delete(n):e[t++]=r,r.w&=~Oi,r.n&=~Oi}e.length=t}},oa=new WeakMap;let Ps=0,Oi=1;const Bl=30;let En;const ur=Symbol(""),zl=Symbol("");class Rc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Zg(this,i)}run(){if(!this.active)return this.fn();let e=En,t=Li;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=En,En=this,Li=!0,Oi=1<<++Ps,Ps<=Bl?Qg(this):yu(this),this.fn()}finally{Ps<=Bl&&e_(this),Oi=1<<--Ps,En=this.parent,Li=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){En===this?this.deferStop=!0:this.active&&(yu(this),this.onStop&&this.onStop(),this.active=!1)}}function yu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Li=!0;const zh=[];function uo(){zh.push(Li),Li=!1}function fo(){const n=zh.pop();Li=n===void 0?!0:n}function Zt(n,e,t){if(Li&&En){let i=oa.get(n);i||oa.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Cc()),Uh(r)}}function Uh(n,e){let t=!1;Ps<=Bl?Bh(n)||(n.n|=Oi,t=!Nh(n)):t=!n.has(En),t&&(n.add(En),En.deps.push(n))}function fi(n,e,t,i,r,s){const o=oa.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(n)?Ac(t)&&a.push(o.get("length")):(a.push(o.get(ur)),jr(n)&&a.push(o.get(zl)));break;case"delete":Ne(n)||(a.push(o.get(ur)),jr(n)&&a.push(o.get(zl)));break;case"set":jr(n)&&a.push(o.get(ur));break}if(a.length===1)a[0]&&Ul(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ul(Cc(l))}}function Ul(n,e){const t=Ne(n)?n:[...n];for(const i of t)i.computed&&bu(i);for(const i of t)i.computed||bu(i)}function bu(n,e){(n!==En||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function t_(n,e){var t;return(t=oa.get(n))===null||t===void 0?void 0:t.get(e)}const n_=wc("__proto__,__v_isRef,__isVue"),kh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Tc)),i_=Lc(),r_=Lc(!1,!0),s_=Lc(!0),Su=o_();function o_(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,o=this.length;s<o;s++)Zt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){uo();const i=je(this)[e].apply(this,t);return fo(),i}}),n}function a_(n){const e=je(this);return Zt(e,"has",n),e.hasOwnProperty(n)}function Lc(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?M_:$h:e?Wh:Hh).get(i))return i;const o=Ne(i);if(!n){if(o&&He(Su,r))return Reflect.get(Su,r,s);if(r==="hasOwnProperty")return a_}const a=Reflect.get(i,r,s);return(Tc(r)?kh.has(r):n_(r))||(n||Zt(i,"get",r),e)?a:Ut(a)?o&&Ac(r)?a:a.value:et(a)?n?Ic(a):xr(a):a}}const l_=Vh(),c_=Vh(!0);function Vh(n=!1){return function(t,i,r,s){let o=t[i];if(Qr(o)&&Ut(o)&&!Ut(r))return!1;if(!n&&(!aa(r)&&!Qr(r)&&(o=je(o),r=je(r)),!Ne(t)&&Ut(o)&&!Ut(r)))return o.value=r,!0;const a=Ne(t)&&Ac(i)?Number(i)<t.length:He(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(a?$s(r,o)&&fi(t,"set",i,r):fi(t,"add",i,r)),l}}function u_(n,e){const t=He(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&fi(n,"delete",e,void 0),i}function f_(n,e){const t=Reflect.has(n,e);return(!Tc(e)||!kh.has(e))&&Zt(n,"has",e),t}function d_(n){return Zt(n,"iterate",Ne(n)?"length":ur),Reflect.ownKeys(n)}const Gh={get:i_,set:l_,deleteProperty:u_,has:f_,ownKeys:d_},h_={get:s_,set(n,e){return!0},deleteProperty(n,e){return!0}},p_=kt({},Gh,{get:r_,set:c_}),Pc=n=>n,_a=n=>Reflect.getPrototypeOf(n);function xo(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Zt(r,"get",e),Zt(r,"get",s));const{has:o}=_a(r),a=i?Pc:t?Fc:qs;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function yo(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Zt(i,"has",n),Zt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function bo(n,e=!1){return n=n.__v_raw,!e&&Zt(je(n),"iterate",ur),Reflect.get(n,"size",n)}function Mu(n){n=je(n);const e=je(this);return _a(e).has.call(e,n)||(e.add(n),fi(e,"add",n,n)),this}function wu(n,e){e=je(e);const t=je(this),{has:i,get:r}=_a(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?$s(e,o)&&fi(t,"set",n,e):fi(t,"add",n,e),this}function Eu(n){const e=je(this),{has:t,get:i}=_a(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&fi(e,"delete",n,void 0),s}function Tu(){const n=je(this),e=n.size!==0,t=n.clear();return e&&fi(n,"clear",void 0,void 0),t}function So(n,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?Pc:n?Fc:qs;return!n&&Zt(a,"iterate",ur),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Mo(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=jr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Pc:e?Fc:qs;return!e&&Zt(s,"iterate",l?zl:ur),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function pi(n){return function(...e){return n==="delete"?!1:this}}function m_(){const n={get(s){return xo(this,s)},get size(){return bo(this)},has:yo,add:Mu,set:wu,delete:Eu,clear:Tu,forEach:So(!1,!1)},e={get(s){return xo(this,s,!1,!0)},get size(){return bo(this)},has:yo,add:Mu,set:wu,delete:Eu,clear:Tu,forEach:So(!1,!0)},t={get(s){return xo(this,s,!0)},get size(){return bo(this,!0)},has(s){return yo.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:So(!0,!1)},i={get(s){return xo(this,s,!0,!0)},get size(){return bo(this,!0)},has(s){return yo.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:So(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Mo(s,!1,!1),t[s]=Mo(s,!0,!1),e[s]=Mo(s,!1,!0),i[s]=Mo(s,!0,!0)}),[n,t,e,i]}const[g_,__,v_,x_]=m_();function Dc(n,e){const t=e?n?x_:v_:n?__:g_;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(He(t,r)&&r in i?t:i,r,s)}const y_={get:Dc(!1,!1)},b_={get:Dc(!1,!0)},S_={get:Dc(!0,!1)},Hh=new WeakMap,Wh=new WeakMap,$h=new WeakMap,M_=new WeakMap;function w_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(n){return n.__v_skip||!Object.isExtensible(n)?0:w_(Wg(n))}function xr(n){return Qr(n)?n:Oc(n,!1,Gh,y_,Hh)}function qh(n){return Oc(n,!1,p_,b_,Wh)}function Ic(n){return Oc(n,!0,h_,S_,$h)}function Oc(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=E_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Xr(n){return Qr(n)?Xr(n.__v_raw):!!(n&&n.__v_isReactive)}function Qr(n){return!!(n&&n.__v_isReadonly)}function aa(n){return!!(n&&n.__v_isShallow)}function jh(n){return Xr(n)||Qr(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function Xh(n){return sa(n,"__v_skip",!0),n}const qs=n=>et(n)?xr(n):n,Fc=n=>et(n)?Ic(n):n;function Kh(n){Li&&En&&(n=je(n),Uh(n.dep||(n.dep=Cc())))}function Yh(n,e){n=je(n);const t=n.dep;t&&Ul(t)}function Ut(n){return!!(n&&n.__v_isRef===!0)}function Qe(n){return Zh(n,!1)}function Jo(n){return Zh(n,!0)}function Zh(n,e){return Ut(n)?n:new T_(n,e)}class T_{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:qs(e)}get value(){return Kh(this),this._value}set value(e){const t=this.__v_isShallow||aa(e)||Qr(e);e=t?e:je(e),$s(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:qs(e),Yh(this))}}function V(n){return Ut(n)?n.value:n}const A_={get:(n,e,t)=>V(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Jh(n){return Xr(n)?n:new Proxy(n,A_)}function Qh(n){const e=Ne(n)?new Array(n.length):{};for(const t in n)e[t]=js(n,t);return e}class C_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return t_(je(this._object),this._key)}}function js(n,e,t){const i=n[e];return Ut(i)?i:new C_(n,e,t)}var ep;class R_{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ep]=!1,this._dirty=!0,this.effect=new Rc(e,()=>{this._dirty||(this._dirty=!0,Yh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return Kh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ep="__v_isReadonly";function L_(n,e,t=!1){let i,r;const s=Xe(n);return s?(i=n,r=Gn):(i=n.get,r=n.set),new R_(i,r,s||!r,t)}function P_(n,...e){}function Pi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){va(s,e,t)}return r}function Ln(n,e,t,i){if(Xe(n)){const s=Pi(n,e,t,i);return s&&Dh(s)&&s.catch(o=>{va(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Ln(n[s],e,t,i));return r}function va(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Pi(l,null,10,[n,o,a]);return}}D_(n,t,r,i)}function D_(n,e,t,i=!0){console.error(n)}let Xs=!1,kl=!1;const zt=[];let Un=0;const Kr=[];let ai=null,er=0;const tp=Promise.resolve();let Nc=null;function kn(n){const e=Nc||tp;return n?e.then(this?n.bind(this):n):e}function I_(n){let e=Un+1,t=zt.length;for(;e<t;){const i=e+t>>>1;Ks(zt[i])<n?e=i+1:t=i}return e}function Bc(n){(!zt.length||!zt.includes(n,Xs&&n.allowRecurse?Un+1:Un))&&(n.id==null?zt.push(n):zt.splice(I_(n.id),0,n),np())}function np(){!Xs&&!kl&&(kl=!0,Nc=tp.then(rp))}function O_(n){const e=zt.indexOf(n);e>Un&&zt.splice(e,1)}function F_(n){Ne(n)?Kr.push(...n):(!ai||!ai.includes(n,n.allowRecurse?er+1:er))&&Kr.push(n),np()}function Au(n,e=Xs?Un+1:0){for(;e<zt.length;e++){const t=zt[e];t&&t.pre&&(zt.splice(e,1),e--,t())}}function ip(n){if(Kr.length){const e=[...new Set(Kr)];if(Kr.length=0,ai){ai.push(...e);return}for(ai=e,ai.sort((t,i)=>Ks(t)-Ks(i)),er=0;er<ai.length;er++)ai[er]();ai=null,er=0}}const Ks=n=>n.id==null?1/0:n.id,N_=(n,e)=>{const t=Ks(n)-Ks(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function rp(n){kl=!1,Xs=!0,zt.sort(N_);const e=Gn;try{for(Un=0;Un<zt.length;Un++){const t=zt[Un];t&&t.active!==!1&&Pi(t,null,14)}}finally{Un=0,zt.length=0,ip(),Xs=!1,Nc=null,(zt.length||Kr.length)&&rp()}}function B_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||lt;d&&(r=t.map(m=>Je(m)?m.trim():m)),f&&(r=t.map(jg))}let a,l=i[a=Ua(e)]||i[a=Ua(qn(e))];!l&&s&&(l=i[a=Ua(cs(e))]),l&&Ln(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,r)}}function z_(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={};return!s&&!!1?(et(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):kt(o,s),et(n)&&i.set(n,o),o)}function xa(n,e){return!n||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(n,e[0].toLowerCase()+e.slice(1))||He(n,cs(e))||He(n,e))}let Dt=null,ya=null;function la(n){const e=Dt;return Dt=n,ya=n&&n.type.__scopeId||null,e}function hP(n){ya=n}function pP(){ya=null}function Pt(n,e=Dt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Bu(-1);const s=la(e);let o;try{o=n(...r)}finally{la(s),i._d&&Bu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Va(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:m,ctx:g,inheritAttrs:h}=n;let p,v;const S=la(n);try{if(t.shapeFlag&4){const M=r||i;p=Bn(u.call(M,M,f,s,m,d,g)),v=l}else{const M=e;p=Bn(M.length>1?M(s,{attrs:l,slots:a,emit:c}):M(s,null)),v=e.props?l:U_(l)}}catch(M){zs.length=0,va(M,n,1),p=ht(_n)}let _=p;if(v&&h!==!1){const M=Object.keys(v),{shapeFlag:T}=_;M.length&&T&7&&(o&&M.some(Ec)&&(v=k_(v,o)),_=Fi(_,v))}return t.dirs&&(_=Fi(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),p=_,la(S),p}const U_=n=>{let e;for(const t in n)(t==="class"||t==="style"||ha(t))&&((e||(e={}))[t]=n[t]);return e},k_=(n,e)=>{const t={};for(const i in n)(!Ec(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function V_(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Cu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!xa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cu(i,o,c):!0:!!o;return!1}function Cu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!xa(t,s))return!0}return!1}function G_({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const H_=n=>n.__isSuspense;function W_(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):F_(n)}function Di(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function bt(n,e,t=!1){const i=Rt||Dt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Xe(e)?e.call(i.proxy):e}}const wo={};function Xt(n,e,t){return $_(n,e,t)}function $_(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=lt){const a=Fh()===(Rt==null?void 0:Rt.scope)?Rt:null;let l,c=!1,u=!1;if(Ut(n)?(l=()=>n.value,c=aa(n)):Xr(n)?(l=()=>n,i=!0):Ne(n)?(u=!0,c=n.some(_=>Xr(_)||aa(_)),l=()=>n.map(_=>{if(Ut(_))return _.value;if(Xr(_))return sr(_);if(Xe(_))return Pi(_,a,2)})):Xe(n)?e?l=()=>Pi(n,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ln(n,a,3,[d])}:l=Gn,e&&i){const _=l;l=()=>sr(_())}let f,d=_=>{f=v.onStop=()=>{Pi(_,a,4)}},m;if(Qs)if(d=Gn,e?t&&Ln(e,a,3,[l(),u?[]:void 0,d]):l(),r==="sync"){const _=T0();m=_.__watcherHandles||(_.__watcherHandles=[])}else return Gn;let g=u?new Array(n.length).fill(wo):wo;const h=()=>{if(v.active)if(e){const _=v.run();(i||c||(u?_.some((M,T)=>$s(M,g[T])):$s(_,g)))&&(f&&f(),Ln(e,a,3,[_,g===wo?void 0:u&&g[0]===wo?[]:g,d]),g=_)}else v.run()};h.allowRecurse=!!e;let p;r==="sync"?p=h:r==="post"?p=()=>Yt(h,a&&a.suspense):(h.pre=!0,a&&(h.id=a.uid),p=()=>Bc(h));const v=new Rc(l,p);e?t?h():g=v.run():r==="post"?Yt(v.run.bind(v),a&&a.suspense):v.run();const S=()=>{v.stop(),a&&a.scope&&Lh(a.scope.effects,v)};return m&&m.push(S),S}function sr(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ut(n))sr(n.value,e);else if(Ne(n))for(let t=0;t<n.length;t++)sr(n[t],e);else if(Ph(n)||jr(n))n.forEach(t=>{sr(t,e)});else if(Oh(n))for(const t in n)sr(n[t],e);return n}function sp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return yr(()=>{n.isMounted=!0}),kc(()=>{n.isUnmounting=!0}),n}const hn=[Function,Array],q_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},setup(n,{slots:e}){const t=di(),i=sp();let r;return()=>{const s=e.default&&zc(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const h of s)if(h.type!==_n){o=h;break}}const a=je(n),{mode:l}=a;if(i.isLeaving)return Ga(o);const c=Ru(o);if(!c)return Ga(o);const u=Ys(c,a,i,t);Zs(c,u);const f=t.subTree,d=f&&Ru(f);let m=!1;const{getTransitionKey:g}=c.type;if(g){const h=g();r===void 0?r=h:h!==r&&(r=h,m=!0)}if(d&&d.type!==_n&&(!tr(c,d)||m)){const h=Ys(d,a,i,t);if(Zs(d,h),l==="out-in")return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},Ga(o);l==="in-out"&&c.type!==_n&&(h.delayLeave=(p,v,S)=>{const _=ap(i,d);_[String(d.key)]=d,p._leaveCb=()=>{v(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},op=q_;function ap(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ys(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:h,onAppear:p,onAfterAppear:v,onAppearCancelled:S}=e,_=String(n.key),M=ap(t,n),T=(b,C)=>{b&&Ln(b,i,9,C)},L=(b,C)=>{const I=C[1];T(b,C),Ne(b)?b.every(j=>j.length<=1)&&I():b.length<=1&&I()},N={mode:s,persisted:o,beforeEnter(b){let C=a;if(!t.isMounted)if(r)C=h||a;else return;b._leaveCb&&b._leaveCb(!0);const I=M[_];I&&tr(n,I)&&I.el._leaveCb&&I.el._leaveCb(),T(C,[b])},enter(b){let C=l,I=c,j=u;if(!t.isMounted)if(r)C=p||l,I=v||c,j=S||u;else return;let z=!1;const B=b._enterCb=F=>{z||(z=!0,F?T(j,[b]):T(I,[b]),N.delayedLeave&&N.delayedLeave(),b._enterCb=void 0)};C?L(C,[b,B]):B()},leave(b,C){const I=String(n.key);if(b._enterCb&&b._enterCb(!0),t.isUnmounting)return C();T(f,[b]);let j=!1;const z=b._leaveCb=B=>{j||(j=!0,C(),B?T(g,[b]):T(m,[b]),b._leaveCb=void 0,M[I]===n&&delete M[I])};M[I]=n,d?L(d,[b,z]):z()},clone(b){return Ys(b,e,t,i)}};return N}function Ga(n){if(Uc(n))return n=Fi(n),n.children=null,n}function Ru(n){return Uc(n)?n.children?n.children[0]:void 0:n}function Zs(n,e){n.shapeFlag&6&&n.component?Zs(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function zc(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===xt?(o.patchFlag&128&&r++,i=i.concat(zc(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Fi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ft(n){return Xe(n)?{setup:n,name:n.name}:n}const Ns=n=>!!n.type.__asyncLoader,Uc=n=>n.type.__isKeepAlive;function j_(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;uo(),Wc(t);const a=Ln(e,t,n,o);return ks(),fo(),a});return i?r.unshift(s):r.push(s),s}}const ba=n=>(e,t=Rt)=>(!Qs||n==="sp")&&j_(n,(...i)=>e(...i),t),yr=ba("m"),lp=ba("u"),kc=ba("bum"),X_=ba("um");function Vc(n,e){const t=Dt;if(t===null)return n;const i=Ma(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=lt]=e[s];o&&(Xe(o)&&(o={mounted:o,updated:o}),o.deep&&sr(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Hi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(uo(),Ln(l,t,8,[n.el,a,n,e]),fo())}}const cp="components",up=Symbol();function Vn(n){return Je(n)?K_(cp,n,!1)||n:n||up}function K_(n,e,t=!0,i=!1){const r=Dt||Rt;if(r){const s=r.type;if(n===cp){const a=S0(s,!1);if(a&&(a===e||a===qn(e)||a===ga(qn(e))))return s}const o=Lu(r[n]||s[n],e)||Lu(r.appContext[n],e);return!o&&i?s:o}}function Lu(n,e){return n&&(n[e]||n[qn(e)]||n[ga(qn(e))])}function mP(n,e,t,i){let r;const s=t&&t[i];if(Ne(n)||Je(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s&&s[o])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s&&s[a])}}else r=[];return t&&(t[i]=r),r}function Lt(n,e,t={},i,r){if(Dt.isCE||Dt.parent&&Ns(Dt.parent)&&Dt.parent.isCE)return e!=="default"&&(t.name=e),ht("slot",t,i&&i());let s=n[e];s&&s._c&&(s._d=!1),Le();const o=s&&fp(s(t)),a=dt(xt,{key:t.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&n._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function fp(n){return n.some(e=>es(e)?!(e.type===_n||e.type===xt&&!fp(e.children)):!0)?n:null}const Vl=n=>n?bp(n)?Ma(n)||n.proxy:Vl(n.parent):null,Bs=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Vl(n.parent),$root:n=>Vl(n.root),$emit:n=>n.emit,$options:n=>n.type,$forceUpdate:n=>n.f||(n.f=()=>Bc(n.update)),$nextTick:n=>n.n||(n.n=kn.bind(n.proxy)),$watch:n=>Gn}),Ha=(n,e)=>n!==lt&&!n.__isScriptSetup&&He(n,e),Y_={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ha(i,e))return o[e]=1,i[e];if(r!==lt&&He(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==lt&&He(t,e))return o[e]=4,t[e];o[e]=0}}const u=Bs[e];let f,d;if(u)return e==="$attrs"&&Zt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==lt&&He(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,He(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ha(r,e)?(r[e]=t,!0):i!==lt&&He(i,e)?(i[e]=t,!0):He(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==lt&&He(n,o)||Ha(e,o)||(a=s[0])&&He(a,o)||He(i,o)||He(Bs,o)||He(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:He(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Z_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ca(l,c,o,!0)),ca(l,e,o)),et(e)&&s.set(e,l),l}function ca(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ca(n,s,t,!0),r&&r.forEach(o=>ca(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=J_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const J_={data:Pu,props:Yi,emits:Yi,methods:Yi,computed:Yi,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:Yi,directives:Yi,watch:e0,provide:Pu,inject:Q_};function Pu(n,e){return e?n?function(){return kt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Q_(n,e){return Yi(Du(n),Du(e))}function Du(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Wt(n,e){return n?[...new Set([].concat(n,e))]:e}function Yi(n,e){return n?kt(kt(Object.create(null),n),e):e}function e0(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=Wt(n[i],e[i]);return t}function t0(n,e,t,i=!1){const r={},s={};sa(s,Sa,1),n.propsDefaults=Object.create(null),dp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:qh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function n0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(xa(n.emitsOptions,d))continue;const m=e[d];if(l)if(He(s,d))m!==s[d]&&(s[d]=m,c=!0);else{const g=qn(d);r[g]=Gl(l,a,g,m,n,!1)}else m!==s[d]&&(s[d]=m,c=!0)}}}else{dp(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!He(e,f)&&((u=cs(f))===f||!He(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Gl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!He(e,f))&&(delete s[f],c=!0)}c&&fi(n,"set","$attrs")}function dp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zo(l))continue;const c=e[l];let u;r&&He(r,u=qn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:xa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(t),c=a||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Gl(r,l,f,c[f],n,!He(c,f))}}return o}function Gl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=He(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&Xe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Wc(r),i=c[t]=l.call(null,e),ks())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===cs(t))&&(i=!0))}return i}function i0(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];if(!s&&!!1)return et(n)&&i.set(n,qr),qr;if(Ne(s))for(let u=0;u<s.length;u++){const f=qn(s[u]);Iu(f)&&(o[f]=lt)}else if(s)for(const u in s){const f=qn(u);if(Iu(f)){const d=s[u],m=o[f]=Ne(d)||Xe(d)?{type:d}:Object.assign({},d);if(m){const g=Nu(Boolean,m.type),h=Nu(String,m.type);m[0]=g>-1,m[1]=h<0||g<h,(g>-1||He(m,"default"))&&a.push(f)}}}const c=[o,a];return et(n)&&i.set(n,c),c}function Iu(n){return n[0]!=="$"}function Ou(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Fu(n,e){return Ou(n)===Ou(e)}function Nu(n,e){return Ne(e)?e.findIndex(t=>Fu(t,n)):Xe(e)&&Fu(e,n)?0:-1}const hp=n=>n[0]==="_"||n==="$stable",Gc=n=>Ne(n)?n.map(Bn):[Bn(n)],r0=(n,e,t)=>{if(e._n)return e;const i=Pt((...r)=>Gc(e(...r)),t);return i._c=!1,i},pp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(hp(r))continue;const s=n[r];if(Xe(s))e[r]=r0(r,s,i);else if(s!=null){const o=Gc(s);e[r]=()=>o}}},mp=(n,e)=>{const t=Gc(e);n.slots.default=()=>t},s0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),sa(e,"_",t)):pp(e,n.slots={})}else n.slots={},e&&mp(n,e);sa(n.slots,Sa,1)},o0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(kt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,pp(e,r)),o=e}else e&&(mp(n,e),o={default:1});if(s)for(const a in r)!hp(a)&&!(a in o)&&delete r[a]};function gp(){return{app:null,config:{isNativeTag:Vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let a0=0;function l0(n,e){return function(i,r=null){Xe(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=gp(),o=new Set;let a=!1;const l=s.app={_uid:a0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:A0,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Xe(c.install)?(o.add(c),c.install(l,...u)):Xe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=ht(i,r);return d.appContext=s,u&&e?e(d,c):n(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Ma(d.component)||d.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Hl(n,e,t,i,r=!1){if(Ne(n)){n.forEach((d,m)=>Hl(d,e&&(Ne(e)?e[m]:e),t,i,r));return}if(Ns(i)&&!r)return;const s=i.shapeFlag&4?Ma(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===lt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Je(c)?(u[c]=null,He(f,c)&&(f[c]=null)):Ut(c)&&(c.value=null)),Xe(l))Pi(l,a,12,[o,u]);else{const d=Je(l),m=Ut(l);if(d||m){const g=()=>{if(n.f){const h=d?He(f,l)?f[l]:u[l]:l.value;r?Ne(h)&&Lh(h,s):Ne(h)?h.includes(s)||h.push(s):d?(u[l]=[s],He(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else d?(u[l]=o,He(f,l)&&(f[l]=o)):m&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Yt(g,t)):g()}}}const Yt=W_;function c0(n){return u0(n)}function u0(n,e){const t=Kg();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Gn,insertStaticContent:g}=n,h=(w,R,G,X=null,Q=null,fe=null,he=!1,se=null,ve=!!R.dynamicChildren)=>{if(w===R)return;w&&!tr(w,R)&&(X=P(w),W(w,Q,fe,!0),w=null),R.patchFlag===-2&&(ve=!1,R.dynamicChildren=null);const{type:ae,ref:x,shapeFlag:y}=R;switch(ae){case ho:p(w,R,G,X);break;case _n:v(w,R,G,X);break;case Wa:w==null&&S(R,G,X,he);break;case xt:z(w,R,G,X,Q,fe,he,se,ve);break;default:y&1?T(w,R,G,X,Q,fe,he,se,ve):y&6?B(w,R,G,X,Q,fe,he,se,ve):(y&64||y&128)&&ae.process(w,R,G,X,Q,fe,he,se,ve,re)}x!=null&&Q&&Hl(x,w&&w.ref,fe,R||w,!R)},p=(w,R,G,X)=>{if(w==null)i(R.el=a(R.children),G,X);else{const Q=R.el=w.el;R.children!==w.children&&c(Q,R.children)}},v=(w,R,G,X)=>{w==null?i(R.el=l(R.children||""),G,X):R.el=w.el},S=(w,R,G,X)=>{[w.el,w.anchor]=g(w.children,R,G,X,w.el,w.anchor)},_=({el:w,anchor:R},G,X)=>{let Q;for(;w&&w!==R;)Q=d(w),i(w,G,X),w=Q;i(R,G,X)},M=({el:w,anchor:R})=>{let G;for(;w&&w!==R;)G=d(w),r(w),w=G;r(R)},T=(w,R,G,X,Q,fe,he,se,ve)=>{he=he||R.type==="svg",w==null?L(R,G,X,Q,fe,he,se,ve):C(w,R,Q,fe,he,se,ve)},L=(w,R,G,X,Q,fe,he,se)=>{let ve,ae;const{type:x,props:y,shapeFlag:O,transition:K,dirs:ne}=w;if(ve=w.el=o(w.type,fe,y&&y.is,y),O&8?u(ve,w.children):O&16&&b(w.children,ve,null,X,Q,fe&&x!=="foreignObject",he,se),ne&&Hi(w,null,X,"created"),N(ve,w,w.scopeId,he,X),y){for(const be in y)be!=="value"&&!Zo(be)&&s(ve,be,null,y[be],fe,w.children,X,Q,$);"value"in y&&s(ve,"value",null,y.value),(ae=y.onVnodeBeforeMount)&&On(ae,X,w)}ne&&Hi(w,null,X,"beforeMount");const pe=(!Q||Q&&!Q.pendingBranch)&&K&&!K.persisted;pe&&K.beforeEnter(ve),i(ve,R,G),((ae=y&&y.onVnodeMounted)||pe||ne)&&Yt(()=>{ae&&On(ae,X,w),pe&&K.enter(ve),ne&&Hi(w,null,X,"mounted")},Q)},N=(w,R,G,X,Q)=>{if(G&&m(w,G),X)for(let fe=0;fe<X.length;fe++)m(w,X[fe]);if(Q){let fe=Q.subTree;if(R===fe){const he=Q.vnode;N(w,he,he.scopeId,he.slotScopeIds,Q.parent)}}},b=(w,R,G,X,Q,fe,he,se,ve=0)=>{for(let ae=ve;ae<w.length;ae++){const x=w[ae]=se?Mi(w[ae]):Bn(w[ae]);h(null,x,R,G,X,Q,fe,he,se)}},C=(w,R,G,X,Q,fe,he)=>{const se=R.el=w.el;let{patchFlag:ve,dynamicChildren:ae,dirs:x}=R;ve|=w.patchFlag&16;const y=w.props||lt,O=R.props||lt;let K;G&&Wi(G,!1),(K=O.onVnodeBeforeUpdate)&&On(K,G,R,w),x&&Hi(R,w,G,"beforeUpdate"),G&&Wi(G,!0);const ne=Q&&R.type!=="foreignObject";if(ae?I(w.dynamicChildren,ae,se,G,X,ne,fe):he||Z(w,R,se,null,G,X,ne,fe,!1),ve>0){if(ve&16)j(se,R,y,O,G,X,Q);else if(ve&2&&y.class!==O.class&&s(se,"class",null,O.class,Q),ve&4&&s(se,"style",y.style,O.style,Q),ve&8){const pe=R.dynamicProps;for(let be=0;be<pe.length;be++){const xe=pe[be],ee=y[xe],Re=O[xe];(Re!==ee||xe==="value")&&s(se,xe,ee,Re,Q,w.children,G,X,$)}}ve&1&&w.children!==R.children&&u(se,R.children)}else!he&&ae==null&&j(se,R,y,O,G,X,Q);((K=O.onVnodeUpdated)||x)&&Yt(()=>{K&&On(K,G,R,w),x&&Hi(R,w,G,"updated")},X)},I=(w,R,G,X,Q,fe,he)=>{for(let se=0;se<R.length;se++){const ve=w[se],ae=R[se],x=ve.el&&(ve.type===xt||!tr(ve,ae)||ve.shapeFlag&70)?f(ve.el):G;h(ve,ae,x,null,X,Q,fe,he,!0)}},j=(w,R,G,X,Q,fe,he)=>{if(G!==X){if(G!==lt)for(const se in G)!Zo(se)&&!(se in X)&&s(w,se,G[se],null,he,R.children,Q,fe,$);for(const se in X){if(Zo(se))continue;const ve=X[se],ae=G[se];ve!==ae&&se!=="value"&&s(w,se,ae,ve,he,R.children,Q,fe,$)}"value"in X&&s(w,"value",G.value,X.value)}},z=(w,R,G,X,Q,fe,he,se,ve)=>{const ae=R.el=w?w.el:a(""),x=R.anchor=w?w.anchor:a("");let{patchFlag:y,dynamicChildren:O,slotScopeIds:K}=R;K&&(se=se?se.concat(K):K),w==null?(i(ae,G,X),i(x,G,X),b(R.children,G,x,Q,fe,he,se,ve)):y>0&&y&64&&O&&w.dynamicChildren?(I(w.dynamicChildren,O,G,Q,fe,he,se),(R.key!=null||Q&&R===Q.subTree)&&_p(w,R,!0)):Z(w,R,G,x,Q,fe,he,se,ve)},B=(w,R,G,X,Q,fe,he,se,ve)=>{R.slotScopeIds=se,w==null?R.shapeFlag&512?Q.ctx.activate(R,G,X,he,ve):F(R,G,X,Q,fe,he,ve):Y(w,R,ve)},F=(w,R,G,X,Q,fe,he)=>{const se=w.component=v0(w,X,Q);if(Uc(w)&&(se.ctx.renderer=re),x0(se),se.asyncDep){if(Q&&Q.registerDep(se,oe),!w.el){const ve=se.subTree=ht(_n);v(null,ve,R,G)}return}oe(se,w,R,G,Q,fe,he)},Y=(w,R,G)=>{const X=R.component=w.component;if(V_(w,R,G))if(X.asyncDep&&!X.asyncResolved){ce(X,R,G);return}else X.next=R,O_(X.update),X.update();else R.el=w.el,X.vnode=R},oe=(w,R,G,X,Q,fe,he)=>{const se=()=>{if(w.isMounted){let{next:x,bu:y,u:O,parent:K,vnode:ne}=w,pe=x,be;Wi(w,!1),x?(x.el=ne.el,ce(w,x,he)):x=ne,y&&ka(y),(be=x.props&&x.props.onVnodeBeforeUpdate)&&On(be,K,x,ne),Wi(w,!0);const xe=Va(w),ee=w.subTree;w.subTree=xe,h(ee,xe,f(ee.el),P(ee),w,Q,fe),x.el=xe.el,pe===null&&G_(w,xe.el),O&&Yt(O,Q),(be=x.props&&x.props.onVnodeUpdated)&&Yt(()=>On(be,K,x,ne),Q)}else{let x;const{el:y,props:O}=R,{bm:K,m:ne,parent:pe}=w,be=Ns(R);if(Wi(w,!1),K&&ka(K),!be&&(x=O&&O.onVnodeBeforeMount)&&On(x,pe,R),Wi(w,!0),y&&_e){const xe=()=>{w.subTree=Va(w),_e(y,w.subTree,w,Q,null)};be?R.type.__asyncLoader().then(()=>!w.isUnmounted&&xe()):xe()}else{const xe=w.subTree=Va(w);h(null,xe,G,X,w,Q,fe),R.el=xe.el}if(ne&&Yt(ne,Q),!be&&(x=O&&O.onVnodeMounted)){const xe=R;Yt(()=>On(x,pe,xe),Q)}(R.shapeFlag&256||pe&&Ns(pe.vnode)&&pe.vnode.shapeFlag&256)&&w.a&&Yt(w.a,Q),w.isMounted=!0,R=G=X=null}},ve=w.effect=new Rc(se,()=>Bc(ae),w.scope),ae=w.update=()=>ve.run();ae.id=w.uid,Wi(w,!0),ae()},ce=(w,R,G)=>{R.component=w;const X=w.vnode.props;w.vnode=R,w.next=null,n0(w,R.props,X,G),o0(w,R.children,G),uo(),Au(),fo()},Z=(w,R,G,X,Q,fe,he,se,ve=!1)=>{const ae=w&&w.children,x=w?w.shapeFlag:0,y=R.children,{patchFlag:O,shapeFlag:K}=R;if(O>0){if(O&128){de(ae,y,G,X,Q,fe,he,se,ve);return}else if(O&256){le(ae,y,G,X,Q,fe,he,se,ve);return}}K&8?(x&16&&$(ae,Q,fe),y!==ae&&u(G,y)):x&16?K&16?de(ae,y,G,X,Q,fe,he,se,ve):$(ae,Q,fe,!0):(x&8&&u(G,""),K&16&&b(y,G,X,Q,fe,he,se,ve))},le=(w,R,G,X,Q,fe,he,se,ve)=>{w=w||qr,R=R||qr;const ae=w.length,x=R.length,y=Math.min(ae,x);let O;for(O=0;O<y;O++){const K=R[O]=ve?Mi(R[O]):Bn(R[O]);h(w[O],K,G,null,Q,fe,he,se,ve)}ae>x?$(w,Q,fe,!0,!1,y):b(R,G,X,Q,fe,he,se,ve,y)},de=(w,R,G,X,Q,fe,he,se,ve)=>{let ae=0;const x=R.length;let y=w.length-1,O=x-1;for(;ae<=y&&ae<=O;){const K=w[ae],ne=R[ae]=ve?Mi(R[ae]):Bn(R[ae]);if(tr(K,ne))h(K,ne,G,null,Q,fe,he,se,ve);else break;ae++}for(;ae<=y&&ae<=O;){const K=w[y],ne=R[O]=ve?Mi(R[O]):Bn(R[O]);if(tr(K,ne))h(K,ne,G,null,Q,fe,he,se,ve);else break;y--,O--}if(ae>y){if(ae<=O){const K=O+1,ne=K<x?R[K].el:X;for(;ae<=O;)h(null,R[ae]=ve?Mi(R[ae]):Bn(R[ae]),G,ne,Q,fe,he,se,ve),ae++}}else if(ae>O)for(;ae<=y;)W(w[ae],Q,fe,!0),ae++;else{const K=ae,ne=ae,pe=new Map;for(ae=ne;ae<=O;ae++){const Ee=R[ae]=ve?Mi(R[ae]):Bn(R[ae]);Ee.key!=null&&pe.set(Ee.key,ae)}let be,xe=0;const ee=O-ne+1;let Re=!1,Ae=0;const Pe=new Array(ee);for(ae=0;ae<ee;ae++)Pe[ae]=0;for(ae=K;ae<=y;ae++){const Ee=w[ae];if(xe>=ee){W(Ee,Q,fe,!0);continue}let Oe;if(Ee.key!=null)Oe=pe.get(Ee.key);else for(be=ne;be<=O;be++)if(Pe[be-ne]===0&&tr(Ee,R[be])){Oe=be;break}Oe===void 0?W(Ee,Q,fe,!0):(Pe[Oe-ne]=ae+1,Oe>=Ae?Ae=Oe:Re=!0,h(Ee,R[Oe],G,null,Q,fe,he,se,ve),xe++)}const De=Re?f0(Pe):qr;for(be=De.length-1,ae=ee-1;ae>=0;ae--){const Ee=ne+ae,Oe=R[Ee],tt=Ee+1<x?R[Ee+1].el:X;Pe[ae]===0?h(null,Oe,G,tt,Q,fe,he,se,ve):Re&&(be<0||ae!==De[be]?we(Oe,G,tt,2):be--)}}},we=(w,R,G,X,Q=null)=>{const{el:fe,type:he,transition:se,children:ve,shapeFlag:ae}=w;if(ae&6){we(w.component.subTree,R,G,X);return}if(ae&128){w.suspense.move(R,G,X);return}if(ae&64){he.move(w,R,G,re);return}if(he===xt){i(fe,R,G);for(let y=0;y<ve.length;y++)we(ve[y],R,G,X);i(w.anchor,R,G);return}if(he===Wa){_(w,R,G);return}if(X!==2&&ae&1&&se)if(X===0)se.beforeEnter(fe),i(fe,R,G),Yt(()=>se.enter(fe),Q);else{const{leave:y,delayLeave:O,afterLeave:K}=se,ne=()=>i(fe,R,G),pe=()=>{y(fe,()=>{ne(),K&&K()})};O?O(fe,ne,pe):pe()}else i(fe,R,G)},W=(w,R,G,X=!1,Q=!1)=>{const{type:fe,props:he,ref:se,children:ve,dynamicChildren:ae,shapeFlag:x,patchFlag:y,dirs:O}=w;if(se!=null&&Hl(se,null,G,w,!0),x&256){R.ctx.deactivate(w);return}const K=x&1&&O,ne=!Ns(w);let pe;if(ne&&(pe=he&&he.onVnodeBeforeUnmount)&&On(pe,R,w),x&6)A(w.component,G,X);else{if(x&128){w.suspense.unmount(G,X);return}K&&Hi(w,null,R,"beforeUnmount"),x&64?w.type.remove(w,R,G,Q,re,X):ae&&(fe!==xt||y>0&&y&64)?$(ae,R,G,!1,!0):(fe===xt&&y&384||!Q&&x&16)&&$(ve,R,G),X&&ue(w)}(ne&&(pe=he&&he.onVnodeUnmounted)||K)&&Yt(()=>{pe&&On(pe,R,w),K&&Hi(w,null,R,"unmounted")},G)},ue=w=>{const{type:R,el:G,anchor:X,transition:Q}=w;if(R===xt){ye(G,X);return}if(R===Wa){M(w);return}const fe=()=>{r(G),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(w.shapeFlag&1&&Q&&!Q.persisted){const{leave:he,delayLeave:se}=Q,ve=()=>he(G,fe);se?se(w.el,fe,ve):ve()}else fe()},ye=(w,R)=>{let G;for(;w!==R;)G=d(w),r(w),w=G;r(R)},A=(w,R,G)=>{const{bum:X,scope:Q,update:fe,subTree:he,um:se}=w;X&&ka(X),Q.stop(),fe&&(fe.active=!1,W(he,w,R,G)),se&&Yt(se,R),Yt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},$=(w,R,G,X=!1,Q=!1,fe=0)=>{for(let he=fe;he<w.length;he++)W(w[he],R,G,X,Q)},P=w=>w.shapeFlag&6?P(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el),H=(w,R,G)=>{w==null?R._vnode&&W(R._vnode,null,null,!0):h(R._vnode||null,w,R,null,null,null,G),Au(),ip(),R._vnode=w},re={p:h,um:W,m:we,r:ue,mt:F,mc:b,pc:Z,pbc:I,n:P,o:n};let me,_e;return e&&([me,_e]=e(re)),{render:H,hydrate:me,createApp:l0(H,me)}}function Wi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function _p(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mi(r[s]),a.el=o.el),t||_p(o,a)),a.type===ho&&(a.el=o.el)}}function f0(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const d0=n=>n.__isTeleport,xt=Symbol(void 0),ho=Symbol(void 0),_n=Symbol(void 0),Wa=Symbol(void 0),zs=[];let Cn=null;function Le(n=!1){zs.push(Cn=n?null:[])}function h0(){zs.pop(),Cn=zs[zs.length-1]||null}let Js=1;function Bu(n){Js+=n}function vp(n){return n.dynamicChildren=Js>0?Cn||qr:null,h0(),Js>0&&Cn&&Cn.push(n),n}function Ye(n,e,t,i,r,s){return vp(rt(n,e,t,i,r,s,!0))}function dt(n,e,t,i,r){return vp(ht(n,e,t,i,r,!0))}function es(n){return n?n.__v_isVNode===!0:!1}function tr(n,e){return n.type===e.type&&n.key===e.key}const Sa="__vInternal",xp=({key:n})=>n??null,Qo=({ref:n,ref_key:e,ref_for:t})=>n!=null?Je(n)||Ut(n)||Xe(n)?{i:Dt,r:n,k:e,f:!!t}:n:null;function rt(n,e=null,t=null,i=0,r=null,s=n===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&xp(e),ref:e&&Qo(e),scopeId:ya,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dt};return a?(Hc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Je(t)?8:16),Js>0&&!o&&Cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Cn.push(l),l}const ht=p0;function p0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===up)&&(n=_n),es(n)){const a=Fi(n,e,!0);return t&&Hc(a,t),Js>0&&!s&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag|=-2,a}if(M0(n)&&(n=n.__vccOpts),e){e=m0(e);let{class:a,style:l}=e;a&&!Je(a)&&(e.class=ke(a)),et(l)&&(jh(l)&&!Ne(l)&&(l=kt({},l)),e.style=$n(l))}const o=Je(n)?1:H_(n)?128:d0(n)?64:et(n)?4:Xe(n)?2:0;return rt(n,e,t,i,r,o,s,!0)}function m0(n){return n?jh(n)||Sa in n?kt({},n):n:null}function Fi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Us(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&xp(a),ref:e&&e.ref?t&&r?Ne(r)?r.concat(Qo(e)):[r,Qo(e)]:Qo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fi(n.ssContent),ssFallback:n.ssFallback&&Fi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function yp(n=" ",e=0){return ht(ho,null,n,e)}function it(n="",e=!1){return e?(Le(),dt(_n,null,n)):ht(_n,null,n)}function Bn(n){return n==null||typeof n=="boolean"?ht(_n):Ne(n)?ht(xt,null,n.slice()):typeof n=="object"?Mi(n):ht(ho,null,String(n))}function Mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fi(n)}function Hc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Sa in e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Dt},t=32):(e=String(e),i&64?(t=16,e=[yp(e)]):t=8);n.children=e,n.shapeFlag|=t}function Us(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ke([e.class,i.class]));else if(r==="style")e.style=$n([e.style,i.style]);else if(ha(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function On(n,e,t,i=null){Ln(n,e,7,[t,i])}const g0=gp();let _0=0;function v0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||g0,s={uid:_0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:i0(i,r),emitsOptions:z_(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=B_.bind(null,s),n.ce&&n.ce(s),s}let Rt=null;const di=()=>Rt||Dt,Wc=n=>{Rt=n,n.scope.on()},ks=()=>{Rt&&Rt.scope.off(),Rt=null};function bp(n){return n.vnode.shapeFlag&4}let Qs=!1;function x0(n,e=!1){Qs=e;const{props:t,children:i}=n.vnode,r=bp(n);t0(n,t,r,e),s0(n,i);const s=r?y0(n,e):void 0;return Qs=!1,s}function y0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Xh(new Proxy(n.ctx,Y_));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Mp(n):null;Wc(n),uo();const s=Pi(i,n,0,[n.props,r]);if(fo(),ks(),Dh(s)){if(s.then(ks,ks),e)return s.then(o=>{zu(n,o,e)}).catch(o=>{va(o,n,0)});n.asyncDep=s}else zu(n,s,e)}else Sp(n,e)}function zu(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=Jh(e)),Sp(n,t)}let Uu;function Sp(n,e,t){const i=n.type;if(!n.render){if(!e&&Uu&&!i.render){const r=i.template||Z_(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=kt(kt({isCustomElement:s,delimiters:a},o),l);i.render=Uu(r,c)}}n.render=i.render||Gn}}function b0(n){return new Proxy(n.attrs,{get(e,t){return Zt(n,"get","$attrs"),e[t]}})}function Mp(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=b0(n))},slots:n.slots,emit:n.emit,expose:e}}function Ma(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Jh(Xh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bs)return Bs[t](n)},has(e,t){return t in e||t in Bs}}))}function S0(n,e=!0){return Xe(n)?n.displayName||n.name:n.name||e&&n.__name}function M0(n){return Xe(n)&&"__vccOpts"in n}const Se=(n,e)=>L_(n,e,Qs);function $c(){return wp().slots}function w0(){return wp().attrs}function wp(){const n=di();return n.setupContext||(n.setupContext=Mp(n))}function qc(n,e,t){const i=arguments.length;return i===2?et(e)&&!Ne(e)?es(e)?ht(n,null,[e]):ht(n,e):ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&es(t)&&(t=[t]),ht(n,e,t))}const E0=Symbol(""),T0=()=>bt(E0),A0="3.2.47",C0="http://www.w3.org/2000/svg",nr=typeof document<"u"?document:null,ku=nr&&nr.createElement("template"),R0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?nr.createElementNS(C0,n):nr.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>nr.createTextNode(n),createComment:n=>nr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>nr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ku.innerHTML=i?`<svg>${n}</svg>`:n;const a=ku.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function L0(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function P0(n,e,t){const i=n.style,r=Je(t);if(t&&!r){if(e&&!Je(e))for(const s in e)t[s]==null&&Wl(i,s,"");for(const s in t)Wl(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Vu=/\s*!important$/;function Wl(n,e,t){if(Ne(t))t.forEach(i=>Wl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=D0(n,e);Vu.test(t)?n.setProperty(cs(i),t.replace(Vu,""),"important"):n[i]=t}}const Gu=["Webkit","Moz","ms"],$a={};function D0(n,e){const t=$a[e];if(t)return t;let i=qn(e);if(i!=="filter"&&i in n)return $a[e]=i;i=ga(i);for(let r=0;r<Gu.length;r++){const s=Gu[r]+i;if(s in n)return $a[e]=s}return e}const Hu="http://www.w3.org/1999/xlink";function I0(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Hu,e.slice(6,e.length)):n.setAttributeNS(Hu,e,t);else{const s=kg(e);t==null||s&&!Ch(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function O0(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Ch(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function F0(n,e,t,i){n.addEventListener(e,t,i)}function N0(n,e,t,i){n.removeEventListener(e,t,i)}function B0(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=z0(e);if(i){const c=s[e]=V0(i,r);F0(n,a,c,l)}else o&&(N0(n,a,o,l),s[e]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function z0(n){let e;if(Wu.test(n)){e={};let i;for(;i=n.match(Wu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):cs(n.slice(2)),e]}let qa=0;const U0=Promise.resolve(),k0=()=>qa||(U0.then(()=>qa=0),qa=Date.now());function V0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(G0(i,t.value),e,5,[i])};return t.value=n,t.attached=k0(),t}function G0(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $u=/^on[a-z]/,H0=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?L0(n,i,r):e==="style"?P0(n,t,i):ha(e)?Ec(e)||B0(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):W0(n,e,i,r))?O0(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),I0(n,e,i,r))};function W0(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&$u.test(e)&&Xe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||$u.test(e)&&Je(t)?!1:e in n}const mi="transition",xs="animation",wa=(n,{slots:e})=>qc(op,Tp(n),e);wa.displayName="Transition";const Ep={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$0=wa.props=kt({},op.props,Ep),$i=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},qu=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function Tp(n){const e={};for(const z in n)z in Ep||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,g=q0(r),h=g&&g[0],p=g&&g[1],{onBeforeEnter:v,onEnter:S,onEnterCancelled:_,onLeave:M,onLeaveCancelled:T,onBeforeAppear:L=v,onAppear:N=S,onAppearCancelled:b=_}=e,C=(z,B,F)=>{Si(z,B?u:a),Si(z,B?c:o),F&&F()},I=(z,B)=>{z._isLeaving=!1,Si(z,f),Si(z,m),Si(z,d),B&&B()},j=z=>(B,F)=>{const Y=z?N:S,oe=()=>C(B,z,F);$i(Y,[B,oe]),ju(()=>{Si(B,z?l:s),oi(B,z?u:a),qu(Y)||Xu(B,i,h,oe)})};return kt(e,{onBeforeEnter(z){$i(v,[z]),oi(z,s),oi(z,o)},onBeforeAppear(z){$i(L,[z]),oi(z,l),oi(z,c)},onEnter:j(!1),onAppear:j(!0),onLeave(z,B){z._isLeaving=!0;const F=()=>I(z,B);oi(z,f),Cp(),oi(z,d),ju(()=>{z._isLeaving&&(Si(z,f),oi(z,m),qu(M)||Xu(z,i,p,F))}),$i(M,[z,F])},onEnterCancelled(z){C(z,!1),$i(_,[z])},onAppearCancelled(z){C(z,!0),$i(b,[z])},onLeaveCancelled(z){I(z),$i(T,[z])}})}function q0(n){if(n==null)return null;if(et(n))return[ja(n.enter),ja(n.leave)];{const e=ja(n);return[e,e]}}function ja(n){return Xg(n)}function oi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(e)}function Si(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const{_vtc:t}=n;t&&(t.delete(e),t.size||(n._vtc=void 0))}function ju(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let j0=0;function Xu(n,e,t,i){const r=n._endId=++j0,s=()=>{r===n._endId&&i()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Ap(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=m=>{m.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function Ap(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${mi}Delay`),s=i(`${mi}Duration`),o=Ku(r,s),a=i(`${xs}Delay`),l=i(`${xs}Duration`),c=Ku(a,l);let u=null,f=0,d=0;e===mi?o>0&&(u=mi,f=o,d=s.length):e===xs?c>0&&(u=xs,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?mi:xs:null,d=u?u===mi?s.length:l.length:0);const m=u===mi&&/\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function Ku(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Yu(t)+Yu(n[i])))}function Yu(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function Cp(){return document.body.offsetHeight}const Rp=new WeakMap,Lp=new WeakMap,Pp={name:"TransitionGroup",props:kt({},$0,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=di(),i=sp();let r,s;return lp(()=>{if(!r.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!Q0(r[0].el,t.vnode.el,o))return;r.forEach(Y0),r.forEach(Z0);const a=r.filter(J0);Cp(),a.forEach(l=>{const c=l.el,u=c.style;oi(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c._moveCb=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c._moveCb=null,Si(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=je(n),a=Tp(o);let l=o.tag||xt;r=s,s=e.default?zc(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Zs(u,Ys(u,a,i,t))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Zs(u,Ys(u,a,i,t)),Rp.set(u,u.el.getBoundingClientRect())}return ht(l,null,s)}}},X0=n=>delete n.mode;Pp.props;const K0=Pp;function Y0(n){const e=n.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function Z0(n){Lp.set(n,n.el.getBoundingClientRect())}function J0(n){const e=Rp.get(n),t=Lp.get(n),i=e.left-t.left,r=e.top-t.top;if(i||r){const s=n.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",n}}function Q0(n,e,t){const i=n.cloneNode();n._vtc&&n._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&i.classList.remove(a))}),t.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:s}=Ap(i);return r.removeChild(i),s}const ev=["ctrl","shift","alt","meta"],tv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ev.some(t=>n[`${t}Key`]&&!e.includes(t))},Dp=(n,e)=>(t,...i)=>{for(let r=0;r<e.length;r++){const s=tv[e[r]];if(s&&s(t,e))return}return n(t,...i)},jc={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ys(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ys(n,!0),i.enter(n)):i.leave(n,()=>{ys(n,!1)}):ys(n,e))},beforeUnmount(n,{value:e}){ys(n,e)}};function ys(n,e){n.style.display=e?n._vod:"none"}const nv=kt({patchProp:H0},R0);let Zu;function Ip(){return Zu||(Zu=c0(nv))}const Ju=(...n)=>{Ip().render(...n)},gP=(...n)=>{const e=Ip().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=iv(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function iv(n){return Je(n)?document.querySelector(n):n}var rv=typeof global=="object"&&global&&global.Object===Object&&global;const Op=rv;var sv=typeof self=="object"&&self&&self.Object===Object&&self,ov=Op||sv||Function("return this")();const Xn=ov;var av=Xn.Symbol;const Ni=av;var Fp=Object.prototype,lv=Fp.hasOwnProperty,cv=Fp.toString,bs=Ni?Ni.toStringTag:void 0;function uv(n){var e=lv.call(n,bs),t=n[bs];try{n[bs]=void 0;var i=!0}catch{}var r=cv.call(n);return i&&(e?n[bs]=t:delete n[bs]),r}var fv=Object.prototype,dv=fv.toString;function hv(n){return dv.call(n)}var pv="[object Null]",mv="[object Undefined]",Qu=Ni?Ni.toStringTag:void 0;function us(n){return n==null?n===void 0?mv:pv:Qu&&Qu in Object(n)?uv(n):hv(n)}function fs(n){return n!=null&&typeof n=="object"}var gv="[object Symbol]";function Xc(n){return typeof n=="symbol"||fs(n)&&us(n)==gv}function _v(n,e){for(var t=-1,i=n==null?0:n.length,r=Array(i);++t<i;)r[t]=e(n[t],t,n);return r}var vv=Array.isArray;const br=vv;var xv=1/0,ef=Ni?Ni.prototype:void 0,tf=ef?ef.toString:void 0;function Np(n){if(typeof n=="string")return n;if(br(n))return _v(n,Np)+"";if(Xc(n))return tf?tf.call(n):"";var e=n+"";return e=="0"&&1/n==-xv?"-0":e}function hr(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var yv="[object AsyncFunction]",bv="[object Function]",Sv="[object GeneratorFunction]",Mv="[object Proxy]";function Bp(n){if(!hr(n))return!1;var e=us(n);return e==bv||e==Sv||e==yv||e==Mv}var wv=Xn["__core-js_shared__"];const Xa=wv;var nf=function(){var n=/[^.]+$/.exec(Xa&&Xa.keys&&Xa.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Ev(n){return!!nf&&nf in n}var Tv=Function.prototype,Av=Tv.toString;function Sr(n){if(n!=null){try{return Av.call(n)}catch{}try{return n+""}catch{}}return""}var Cv=/[\\^$.*+?()[\]{}|]/g,Rv=/^\[object .+?Constructor\]$/,Lv=Function.prototype,Pv=Object.prototype,Dv=Lv.toString,Iv=Pv.hasOwnProperty,Ov=RegExp("^"+Dv.call(Iv).replace(Cv,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Fv(n){if(!hr(n)||Ev(n))return!1;var e=Bp(n)?Ov:Rv;return e.test(Sr(n))}function Nv(n,e){return n==null?void 0:n[e]}function Mr(n,e){var t=Nv(n,e);return Fv(t)?t:void 0}var Bv=Mr(Xn,"WeakMap");const $l=Bv;var rf=Object.create,zv=function(){function n(){}return function(e){if(!hr(e))return{};if(rf)return rf(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}();const Uv=zv;function kv(n,e){var t=-1,i=n.length;for(e||(e=Array(i));++t<i;)e[t]=n[t];return e}var Vv=function(){try{var n=Mr(Object,"defineProperty");return n({},"",{}),n}catch{}}();const sf=Vv;function Gv(n,e){for(var t=-1,i=n==null?0:n.length;++t<i&&e(n[t],t,n)!==!1;);return n}var Hv=9007199254740991,Wv=/^(?:0|[1-9]\d*)$/;function zp(n,e){var t=typeof n;return e=e??Hv,!!e&&(t=="number"||t!="symbol"&&Wv.test(n))&&n>-1&&n%1==0&&n<e}function Up(n,e,t){e=="__proto__"&&sf?sf(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function kp(n,e){return n===e||n!==n&&e!==e}var $v=Object.prototype,qv=$v.hasOwnProperty;function Kc(n,e,t){var i=n[e];(!(qv.call(n,e)&&kp(i,t))||t===void 0&&!(e in n))&&Up(n,e,t)}function Ea(n,e,t,i){var r=!t;t||(t={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=i?i(t[a],n[a],a,t,n):void 0;l===void 0&&(l=n[a]),r?Up(t,a,l):Kc(t,a,l)}return t}var jv=9007199254740991;function Vp(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=jv}function Gp(n){return n!=null&&Vp(n.length)&&!Bp(n)}var Xv=Object.prototype;function Yc(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Xv;return n===t}function Kv(n,e){for(var t=-1,i=Array(n);++t<n;)i[t]=e(t);return i}var Yv="[object Arguments]";function of(n){return fs(n)&&us(n)==Yv}var Hp=Object.prototype,Zv=Hp.hasOwnProperty,Jv=Hp.propertyIsEnumerable,Qv=of(function(){return arguments}())?of:function(n){return fs(n)&&Zv.call(n,"callee")&&!Jv.call(n,"callee")};const ex=Qv;function tx(){return!1}var Wp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,af=Wp&&typeof module=="object"&&module&&!module.nodeType&&module,nx=af&&af.exports===Wp,lf=nx?Xn.Buffer:void 0,ix=lf?lf.isBuffer:void 0,rx=ix||tx;const $p=rx;var sx="[object Arguments]",ox="[object Array]",ax="[object Boolean]",lx="[object Date]",cx="[object Error]",ux="[object Function]",fx="[object Map]",dx="[object Number]",hx="[object Object]",px="[object RegExp]",mx="[object Set]",gx="[object String]",_x="[object WeakMap]",vx="[object ArrayBuffer]",xx="[object DataView]",yx="[object Float32Array]",bx="[object Float64Array]",Sx="[object Int8Array]",Mx="[object Int16Array]",wx="[object Int32Array]",Ex="[object Uint8Array]",Tx="[object Uint8ClampedArray]",Ax="[object Uint16Array]",Cx="[object Uint32Array]",at={};at[yx]=at[bx]=at[Sx]=at[Mx]=at[wx]=at[Ex]=at[Tx]=at[Ax]=at[Cx]=!0;at[sx]=at[ox]=at[vx]=at[ax]=at[xx]=at[lx]=at[cx]=at[ux]=at[fx]=at[dx]=at[hx]=at[px]=at[mx]=at[gx]=at[_x]=!1;function Rx(n){return fs(n)&&Vp(n.length)&&!!at[us(n)]}function Zc(n){return function(e){return n(e)}}var qp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Vs=qp&&typeof module=="object"&&module&&!module.nodeType&&module,Lx=Vs&&Vs.exports===qp,Ka=Lx&&Op.process,Px=function(){try{var n=Vs&&Vs.require&&Vs.require("util").types;return n||Ka&&Ka.binding&&Ka.binding("util")}catch{}}();const ts=Px;var cf=ts&&ts.isTypedArray,Dx=cf?Zc(cf):Rx;const Ix=Dx;var Ox=Object.prototype,Fx=Ox.hasOwnProperty;function jp(n,e){var t=br(n),i=!t&&ex(n),r=!t&&!i&&$p(n),s=!t&&!i&&!r&&Ix(n),o=t||i||r||s,a=o?Kv(n.length,String):[],l=a.length;for(var c in n)(e||Fx.call(n,c))&&!(o&&(c=="length"||r&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||zp(c,l)))&&a.push(c);return a}function Xp(n,e){return function(t){return n(e(t))}}var Nx=Xp(Object.keys,Object);const Bx=Nx;var zx=Object.prototype,Ux=zx.hasOwnProperty;function kx(n){if(!Yc(n))return Bx(n);var e=[];for(var t in Object(n))Ux.call(n,t)&&t!="constructor"&&e.push(t);return e}function Jc(n){return Gp(n)?jp(n):kx(n)}function Vx(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var Gx=Object.prototype,Hx=Gx.hasOwnProperty;function Wx(n){if(!hr(n))return Vx(n);var e=Yc(n),t=[];for(var i in n)i=="constructor"&&(e||!Hx.call(n,i))||t.push(i);return t}function Qc(n){return Gp(n)?jp(n,!0):Wx(n)}var $x=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qx=/^\w*$/;function jx(n,e){if(br(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Xc(n)?!0:qx.test(n)||!$x.test(n)||e!=null&&n in Object(e)}var Xx=Mr(Object,"create");const eo=Xx;function Kx(){this.__data__=eo?eo(null):{},this.size=0}function Yx(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Zx="__lodash_hash_undefined__",Jx=Object.prototype,Qx=Jx.hasOwnProperty;function ey(n){var e=this.__data__;if(eo){var t=e[n];return t===Zx?void 0:t}return Qx.call(e,n)?e[n]:void 0}var ty=Object.prototype,ny=ty.hasOwnProperty;function iy(n){var e=this.__data__;return eo?e[n]!==void 0:ny.call(e,n)}var ry="__lodash_hash_undefined__";function sy(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=eo&&e===void 0?ry:e,this}function pr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}pr.prototype.clear=Kx;pr.prototype.delete=Yx;pr.prototype.get=ey;pr.prototype.has=iy;pr.prototype.set=sy;function oy(){this.__data__=[],this.size=0}function Ta(n,e){for(var t=n.length;t--;)if(kp(n[t][0],e))return t;return-1}var ay=Array.prototype,ly=ay.splice;function cy(n){var e=this.__data__,t=Ta(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():ly.call(e,t,1),--this.size,!0}function uy(n){var e=this.__data__,t=Ta(e,n);return t<0?void 0:e[t][1]}function fy(n){return Ta(this.__data__,n)>-1}function dy(n,e){var t=this.__data__,i=Ta(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function hi(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}hi.prototype.clear=oy;hi.prototype.delete=cy;hi.prototype.get=uy;hi.prototype.has=fy;hi.prototype.set=dy;var hy=Mr(Xn,"Map");const to=hy;function py(){this.size=0,this.__data__={hash:new pr,map:new(to||hi),string:new pr}}function my(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Aa(n,e){var t=n.__data__;return my(e)?t[typeof e=="string"?"string":"hash"]:t.map}function gy(n){var e=Aa(this,n).delete(n);return this.size-=e?1:0,e}function _y(n){return Aa(this,n).get(n)}function vy(n){return Aa(this,n).has(n)}function xy(n,e){var t=Aa(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function Ui(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}Ui.prototype.clear=py;Ui.prototype.delete=gy;Ui.prototype.get=_y;Ui.prototype.has=vy;Ui.prototype.set=xy;var yy="Expected a function";function eu(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(yy);var t=function(){var i=arguments,r=e?e.apply(this,i):i[0],s=t.cache;if(s.has(r))return s.get(r);var o=n.apply(this,i);return t.cache=s.set(r,o)||s,o};return t.cache=new(eu.Cache||Ui),t}eu.Cache=Ui;var by=500;function Sy(n){var e=eu(n,function(i){return t.size===by&&t.clear(),i}),t=e.cache;return e}var My=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wy=/\\(\\)?/g,Ey=Sy(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(My,function(t,i,r,s){e.push(r?s.replace(wy,"$1"):i||t)}),e});const Ty=Ey;function Ay(n){return n==null?"":Np(n)}function Kp(n,e){return br(n)?n:jx(n,e)?[n]:Ty(Ay(n))}var Cy=1/0;function Yp(n){if(typeof n=="string"||Xc(n))return n;var e=n+"";return e=="0"&&1/n==-Cy?"-0":e}function Ry(n,e){e=Kp(e,n);for(var t=0,i=e.length;n!=null&&t<i;)n=n[Yp(e[t++])];return t&&t==i?n:void 0}function Ly(n,e,t){var i=n==null?void 0:Ry(n,e);return i===void 0?t:i}function Zp(n,e){for(var t=-1,i=e.length,r=n.length;++t<i;)n[r+t]=e[t];return n}var Py=Xp(Object.getPrototypeOf,Object);const Jp=Py;function ql(){if(!arguments.length)return[];var n=arguments[0];return br(n)?n:[n]}function Dy(){this.__data__=new hi,this.size=0}function Iy(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function Oy(n){return this.__data__.get(n)}function Fy(n){return this.__data__.has(n)}var Ny=200;function By(n,e){var t=this.__data__;if(t instanceof hi){var i=t.__data__;if(!to||i.length<Ny-1)return i.push([n,e]),this.size=++t.size,this;t=this.__data__=new Ui(i)}return t.set(n,e),this.size=t.size,this}function ds(n){var e=this.__data__=new hi(n);this.size=e.size}ds.prototype.clear=Dy;ds.prototype.delete=Iy;ds.prototype.get=Oy;ds.prototype.has=Fy;ds.prototype.set=By;function zy(n,e){return n&&Ea(e,Jc(e),n)}function Uy(n,e){return n&&Ea(e,Qc(e),n)}var Qp=typeof exports=="object"&&exports&&!exports.nodeType&&exports,uf=Qp&&typeof module=="object"&&module&&!module.nodeType&&module,ky=uf&&uf.exports===Qp,ff=ky?Xn.Buffer:void 0,df=ff?ff.allocUnsafe:void 0;function Vy(n,e){if(e)return n.slice();var t=n.length,i=df?df(t):new n.constructor(t);return n.copy(i),i}function Gy(n,e){for(var t=-1,i=n==null?0:n.length,r=0,s=[];++t<i;){var o=n[t];e(o,t,n)&&(s[r++]=o)}return s}function em(){return[]}var Hy=Object.prototype,Wy=Hy.propertyIsEnumerable,hf=Object.getOwnPropertySymbols,$y=hf?function(n){return n==null?[]:(n=Object(n),Gy(hf(n),function(e){return Wy.call(n,e)}))}:em;const tu=$y;function qy(n,e){return Ea(n,tu(n),e)}var jy=Object.getOwnPropertySymbols,Xy=jy?function(n){for(var e=[];n;)Zp(e,tu(n)),n=Jp(n);return e}:em;const tm=Xy;function Ky(n,e){return Ea(n,tm(n),e)}function nm(n,e,t){var i=e(n);return br(n)?i:Zp(i,t(n))}function Yy(n){return nm(n,Jc,tu)}function Zy(n){return nm(n,Qc,tm)}var Jy=Mr(Xn,"DataView");const jl=Jy;var Qy=Mr(Xn,"Promise");const Xl=Qy;var eb=Mr(Xn,"Set");const Kl=eb;var pf="[object Map]",tb="[object Object]",mf="[object Promise]",gf="[object Set]",_f="[object WeakMap]",vf="[object DataView]",nb=Sr(jl),ib=Sr(to),rb=Sr(Xl),sb=Sr(Kl),ob=Sr($l),Zi=us;(jl&&Zi(new jl(new ArrayBuffer(1)))!=vf||to&&Zi(new to)!=pf||Xl&&Zi(Xl.resolve())!=mf||Kl&&Zi(new Kl)!=gf||$l&&Zi(new $l)!=_f)&&(Zi=function(n){var e=us(n),t=e==tb?n.constructor:void 0,i=t?Sr(t):"";if(i)switch(i){case nb:return vf;case ib:return pf;case rb:return mf;case sb:return gf;case ob:return _f}return e});const nu=Zi;var ab=Object.prototype,lb=ab.hasOwnProperty;function cb(n){var e=n.length,t=new n.constructor(e);return e&&typeof n[0]=="string"&&lb.call(n,"index")&&(t.index=n.index,t.input=n.input),t}var ub=Xn.Uint8Array;const xf=ub;function iu(n){var e=new n.constructor(n.byteLength);return new xf(e).set(new xf(n)),e}function fb(n,e){var t=e?iu(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.byteLength)}var db=/\w*$/;function hb(n){var e=new n.constructor(n.source,db.exec(n));return e.lastIndex=n.lastIndex,e}var yf=Ni?Ni.prototype:void 0,bf=yf?yf.valueOf:void 0;function pb(n){return bf?Object(bf.call(n)):{}}function mb(n,e){var t=e?iu(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}var gb="[object Boolean]",_b="[object Date]",vb="[object Map]",xb="[object Number]",yb="[object RegExp]",bb="[object Set]",Sb="[object String]",Mb="[object Symbol]",wb="[object ArrayBuffer]",Eb="[object DataView]",Tb="[object Float32Array]",Ab="[object Float64Array]",Cb="[object Int8Array]",Rb="[object Int16Array]",Lb="[object Int32Array]",Pb="[object Uint8Array]",Db="[object Uint8ClampedArray]",Ib="[object Uint16Array]",Ob="[object Uint32Array]";function Fb(n,e,t){var i=n.constructor;switch(e){case wb:return iu(n);case gb:case _b:return new i(+n);case Eb:return fb(n,t);case Tb:case Ab:case Cb:case Rb:case Lb:case Pb:case Db:case Ib:case Ob:return mb(n,t);case vb:return new i;case xb:case Sb:return new i(n);case yb:return hb(n);case bb:return new i;case Mb:return pb(n)}}function Nb(n){return typeof n.constructor=="function"&&!Yc(n)?Uv(Jp(n)):{}}var Bb="[object Map]";function zb(n){return fs(n)&&nu(n)==Bb}var Sf=ts&&ts.isMap,Ub=Sf?Zc(Sf):zb;const kb=Ub;var Vb="[object Set]";function Gb(n){return fs(n)&&nu(n)==Vb}var Mf=ts&&ts.isSet,Hb=Mf?Zc(Mf):Gb;const Wb=Hb;var $b=1,qb=2,jb=4,im="[object Arguments]",Xb="[object Array]",Kb="[object Boolean]",Yb="[object Date]",Zb="[object Error]",rm="[object Function]",Jb="[object GeneratorFunction]",Qb="[object Map]",eS="[object Number]",sm="[object Object]",tS="[object RegExp]",nS="[object Set]",iS="[object String]",rS="[object Symbol]",sS="[object WeakMap]",oS="[object ArrayBuffer]",aS="[object DataView]",lS="[object Float32Array]",cS="[object Float64Array]",uS="[object Int8Array]",fS="[object Int16Array]",dS="[object Int32Array]",hS="[object Uint8Array]",pS="[object Uint8ClampedArray]",mS="[object Uint16Array]",gS="[object Uint32Array]",nt={};nt[im]=nt[Xb]=nt[oS]=nt[aS]=nt[Kb]=nt[Yb]=nt[lS]=nt[cS]=nt[uS]=nt[fS]=nt[dS]=nt[Qb]=nt[eS]=nt[sm]=nt[tS]=nt[nS]=nt[iS]=nt[rS]=nt[hS]=nt[pS]=nt[mS]=nt[gS]=!0;nt[Zb]=nt[rm]=nt[sS]=!1;function ea(n,e,t,i,r,s){var o,a=e&$b,l=e&qb,c=e&jb;if(t&&(o=r?t(n,i,r,s):t(n)),o!==void 0)return o;if(!hr(n))return n;var u=br(n);if(u){if(o=cb(n),!a)return kv(n,o)}else{var f=nu(n),d=f==rm||f==Jb;if($p(n))return Vy(n,a);if(f==sm||f==im||d&&!r){if(o=l||d?{}:Nb(n),!a)return l?Ky(n,Uy(o,n)):qy(n,zy(o,n))}else{if(!nt[f])return r?n:{};o=Fb(n,f,a)}}s||(s=new ds);var m=s.get(n);if(m)return m;s.set(n,o),Wb(n)?n.forEach(function(p){o.add(ea(p,e,t,p,n,s))}):kb(n)&&n.forEach(function(p,v){o.set(v,ea(p,e,t,v,n,s))});var g=c?l?Zy:Yy:l?Qc:Jc,h=u?void 0:g(n);return Gv(h||n,function(p,v){h&&(v=p,p=n[v]),Kc(o,v,ea(p,e,t,v,n,s))}),o}var _S=4;function wf(n){return ea(n,_S)}function om(n){for(var e=-1,t=n==null?0:n.length,i={};++e<t;){var r=n[e];i[r[0]]=r[1]}return i}function vS(n){return n==null}function xS(n,e,t,i){if(!hr(n))return n;e=Kp(e,n);for(var r=-1,s=e.length,o=s-1,a=n;a!=null&&++r<s;){var l=Yp(e[r]),c=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return n;if(r!=o){var u=a[l];c=i?i(u,l,a):void 0,c===void 0&&(c=hr(u)?u:zp(e[r+1])?[]:{})}Kc(a,l,c),a=a[l]}return n}function yS(n,e,t){return n==null?n:xS(n,e,t)}var Ef;const wr=typeof window<"u",am=n=>typeof n=="boolean",Bi=n=>typeof n=="number",bS=n=>typeof n=="string",Yl=()=>{};wr&&((Ef=window==null?void 0:window.navigator)!=null&&Ef.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function no(n){return typeof n=="function"?n():V(n)}function SS(n,e){function t(...i){return new Promise((r,s)=>{Promise.resolve(n(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return t}function MS(n,e={}){let t,i,r=Yl;const s=a=>{clearTimeout(a),r(),r=Yl};return a=>{const l=no(n),c=no(e.maxWait);return t&&s(t),l<=0||c!==void 0&&c<=0?(i&&(s(i),i=null),Promise.resolve(a())):new Promise((u,f)=>{r=e.rejectOnCancel?f:u,c&&!i&&(i=setTimeout(()=>{t&&s(t),i=null,u(a())},c)),t=setTimeout(()=>{i&&s(i),i=null,u(a())},l)})}}function wS(n){return n}function ru(n){return Fh()?(Jg(n),!0):!1}function ES(n,e=200,t={}){return SS(MS(e,t),n)}function TS(n,e=200,t={}){const i=Qe(n.value),r=ES(()=>{i.value=n.value},e,t);return Xt(n,()=>r()),i}function AS(n,e=!0){di()?yr(n):e?n():kn(n)}function CS(n,e,t={}){const{immediate:i=!0}=t,r=Qe(!1);let s=null;function o(){s&&(clearTimeout(s),s=null)}function a(){r.value=!1,o()}function l(...c){o(),r.value=!0,s=setTimeout(()=>{r.value=!1,s=null,n(...c)},no(e))}return i&&(r.value=!0,wr&&l()),ru(a),{isPending:Ic(r),start:l,stop:a}}function lm(n){var e;const t=no(n);return(e=t==null?void 0:t.$el)!=null?e:t}const cm=wr?window:void 0;function RS(...n){let e,t,i,r;if(bS(n[0])||Array.isArray(n[0])?([t,i,r]=n,e=cm):[e,t,i,r]=n,!e)return Yl;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const s=[],o=()=>{s.forEach(u=>u()),s.length=0},a=(u,f,d,m)=>(u.addEventListener(f,d,m),()=>u.removeEventListener(f,d,m)),l=Xt(()=>[lm(e),no(r)],([u,f])=>{o(),u&&s.push(...t.flatMap(d=>i.map(m=>a(u,d,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return ru(c),c}function LS(n,e=!1){const t=Qe(),i=()=>t.value=Boolean(n());return i(),AS(i,e),t}const Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jl="__vueuse_ssr_handlers__";Zl[Jl]=Zl[Jl]||{};Zl[Jl];var Tf=Object.getOwnPropertySymbols,PS=Object.prototype.hasOwnProperty,DS=Object.prototype.propertyIsEnumerable,IS=(n,e)=>{var t={};for(var i in n)PS.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Tf)for(var i of Tf(n))e.indexOf(i)<0&&DS.call(n,i)&&(t[i]=n[i]);return t};function su(n,e,t={}){const i=t,{window:r=cm}=i,s=IS(i,["window"]);let o;const a=LS(()=>r&&"ResizeObserver"in r),l=()=>{o&&(o.disconnect(),o=void 0)},c=Xt(()=>lm(n),f=>{l(),a.value&&r&&f&&(o=new ResizeObserver(e),o.observe(f,s))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return ru(u),{isSupported:a,stop:u}}var Af;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Af||(Af={}));var OS=Object.defineProperty,Cf=Object.getOwnPropertySymbols,FS=Object.prototype.hasOwnProperty,NS=Object.prototype.propertyIsEnumerable,Rf=(n,e,t)=>e in n?OS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,BS=(n,e)=>{for(var t in e||(e={}))FS.call(e,t)&&Rf(n,t,e[t]);if(Cf)for(var t of Cf(e))NS.call(e,t)&&Rf(n,t,e[t]);return n};const zS={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};BS({linear:wS},zS);const US=n=>n===void 0,kS=n=>typeof Element>"u"?!1:n instanceof Element,VS=n=>Je(n)?!Number.isNaN(Number(n)):!1,Lf=n=>Object.keys(n),Ya=(n,e,t)=>({get value(){return Ly(n,e,t)},set value(i){yS(n,e,i)}});class GS extends Error{constructor(e){super(e),this.name="ElementPlusError"}}function HS(n,e){throw new GS(`[${n}] ${e}`)}function Ql(n,e="px"){if(!n)return"";if(Bi(n)||VS(n))return`${n}${e}`;if(Je(n))return n}/*! Element Plus Icons Vue v2.0.10 */var Kn=(n,e)=>{let t=n.__vccOpts||n;for(let[i,r]of e)t[i]=r;return t},WS={name:"CircleCheck"},$S={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},qS=rt("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),jS=rt("path",{fill:"currentColor",d:"M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"},null,-1),XS=[qS,jS];function KS(n,e,t,i,r,s){return Le(),Ye("svg",$S,XS)}var YS=Kn(WS,[["render",KS],["__file","circle-check.vue"]]),ZS={name:"CircleCloseFilled"},JS={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},QS=rt("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),e1=[QS];function t1(n,e,t,i,r,s){return Le(),Ye("svg",JS,e1)}var um=Kn(ZS,[["render",t1],["__file","circle-close-filled.vue"]]),n1={name:"CircleClose"},i1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},r1=rt("path",{fill:"currentColor",d:"m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"},null,-1),s1=rt("path",{fill:"currentColor",d:"M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"},null,-1),o1=[r1,s1];function a1(n,e,t,i,r,s){return Le(),Ye("svg",i1,o1)}var fm=Kn(n1,[["render",a1],["__file","circle-close.vue"]]),l1={name:"Close"},c1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},u1=rt("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),f1=[u1];function d1(n,e,t,i,r,s){return Le(),Ye("svg",c1,f1)}var h1=Kn(l1,[["render",d1],["__file","close.vue"]]),p1={name:"Hide"},m1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},g1=rt("path",{d:"M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",fill:"currentColor"},null,-1),_1=rt("path",{d:"M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",fill:"currentColor"},null,-1),v1=[g1,_1];function x1(n,e,t,i,r,s){return Le(),Ye("svg",m1,v1)}var y1=Kn(p1,[["render",x1],["__file","hide.vue"]]),b1={name:"InfoFilled"},S1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},M1=rt("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"},null,-1),w1=[M1];function E1(n,e,t,i,r,s){return Le(),Ye("svg",S1,w1)}var dm=Kn(b1,[["render",E1],["__file","info-filled.vue"]]),T1={name:"Loading"},A1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},C1=rt("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"},null,-1),R1=[C1];function L1(n,e,t,i,r,s){return Le(),Ye("svg",A1,R1)}var hm=Kn(T1,[["render",L1],["__file","loading.vue"]]),P1={name:"SuccessFilled"},D1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},I1=rt("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),O1=[I1];function F1(n,e,t,i,r,s){return Le(),Ye("svg",D1,O1)}var pm=Kn(P1,[["render",F1],["__file","success-filled.vue"]]),N1={name:"View"},B1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},z1=rt("path",{fill:"currentColor",d:"M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"},null,-1),U1=[z1];function k1(n,e,t,i,r,s){return Le(),Ye("svg",B1,U1)}var V1=Kn(N1,[["render",k1],["__file","view.vue"]]),G1={name:"WarningFilled"},H1={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},W1=rt("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),$1=[W1];function q1(n,e,t,i,r,s){return Le(),Ye("svg",H1,$1)}var mm=Kn(G1,[["render",q1],["__file","warning-filled.vue"]]);const gm="__epPropKey",yt=n=>n,j1=n=>et(n)&&!!n[gm],_m=(n,e)=>{if(!et(n)||j1(n))return n;const{values:t,required:i,default:r,type:s,validator:o}=n,l={type:s,required:!!i,validator:t||o?c=>{let u=!1,f=[];if(t&&(f=Array.from(t),He(n,"default")&&f.push(r),u||(u=f.includes(c))),o&&(u||(u=o(c))),!u&&f.length>0){const d=[...new Set(f)].map(m=>JSON.stringify(m)).join(", ");P_(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${d}], got value ${JSON.stringify(c)}.`)}return u}:void 0,[gm]:!0};return He(n,"default")&&(l.default=r),l},Yn=n=>om(Object.entries(n).map(([e,t])=>[e,_m(t,e)])),io=yt([String,Object,Function]),X1={Close:h1,SuccessFilled:pm,InfoFilled:dm,WarningFilled:mm,CircleCloseFilled:um},Pf={success:pm,warning:mm,error:um,info:dm},K1={validating:hm,success:YS,error:fm},Er=(n,e)=>{if(n.install=t=>{for(const i of[n,...Object.values(e??{})])t.component(i.name,i)},e)for(const[t,i]of Object.entries(e))n[t]=i;return n},Y1=(n,e)=>(n.install=t=>{n._context=t._context,t.config.globalProperties[e]=n},n),vm=n=>(n.install=Gn,n),Z1={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},ec="update:modelValue",ou=["","default","small","large"],J1=()=>wr&&/firefox/i.test(window.navigator.userAgent),Q1=n=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(n),ir=n=>n,eM=["class","style"],tM=/^on[A-Z]/,nM=(n={})=>{const{excludeListeners:e=!1,excludeKeys:t}=n,i=Se(()=>((t==null?void 0:t.value)||[]).concat(eM)),r=di();return Se(r?()=>{var s;return om(Object.entries((s=r.proxy)==null?void 0:s.$attrs).filter(([o])=>!i.value.includes(o)&&!(e&&tM.test(o))))}:()=>({}))},xm=Symbol("buttonGroupContextKey"),ym=Symbol(),hs=Symbol("formContextKey"),ro=Symbol("formItemContextKey"),bm=Symbol("rowContextKey"),Sm=n=>{const e=di();return Se(()=>{var t,i;return(i=((t=e.proxy)==null?void 0:t.$props)[n])!=null?i:void 0})},ua=Qe();function ps(n,e=void 0){const t=di()?bt(ym,ua):ua;return n?Se(()=>{var i,r;return(r=(i=t.value)==null?void 0:i[n])!=null?r:e}):t}const iM=(n,e,t=!1)=>{var i;const r=!!di(),s=r?ps():void 0,o=(i=e==null?void 0:e.provide)!=null?i:r?Di:void 0;if(!o)return;const a=Se(()=>{const l=V(n);return s!=null&&s.value?rM(s.value,l):l});return o(ym,a),(t||!ua.value)&&(ua.value=a.value),a},rM=(n,e)=>{var t;const i=[...new Set([...Lf(n),...Lf(e)])],r={};for(const s of i)r[s]=(t=e[s])!=null?t:n[s];return r},au=_m({type:String,values:ou,required:!1}),Ca=(n,e={})=>{const t=Qe(void 0),i=e.prop?t:Sm("size"),r=e.global?t:ps("size"),s=e.form?{size:void 0}:bt(hs,void 0),o=e.formItem?{size:void 0}:bt(ro,void 0);return Se(()=>i.value||V(n)||(o==null?void 0:o.size)||(s==null?void 0:s.size)||r.value||"")},lu=n=>{const e=Sm("disabled"),t=bt(hs,void 0);return Se(()=>e.value||V(n)||(t==null?void 0:t.disabled)||!1)},sM=({from:n,replacement:e,scope:t,version:i,ref:r,type:s="API"},o)=>{Xt(()=>V(o),a=>{},{immediate:!0})},Mm="el",oM="is-",qi=(n,e,t,i,r)=>{let s=`${n}-${e}`;return t&&(s+=`-${t}`),i&&(s+=`__${i}`),r&&(s+=`--${r}`),s},fn=n=>{const e=ps("namespace",Mm);return{namespace:e,b:(g="")=>qi(e.value,n,g,"",""),e:g=>g?qi(e.value,n,"",g,""):"",m:g=>g?qi(e.value,n,"","",g):"",be:(g,h)=>g&&h?qi(e.value,n,g,h,""):"",em:(g,h)=>g&&h?qi(e.value,n,"",g,h):"",bm:(g,h)=>g&&h?qi(e.value,n,g,"",h):"",bem:(g,h,p)=>g&&h&&p?qi(e.value,n,g,h,p):"",is:(g,...h)=>{const p=h.length>=1?h[0]:!0;return g&&p?`${oM}${g}`:""},cssVar:g=>{const h={};for(const p in g)g[p]&&(h[`--${e.value}-${p}`]=g[p]);return h},cssVarName:g=>`--${e.value}-${g}`,cssVarBlock:g=>{const h={};for(const p in g)g[p]&&(h[`--${e.value}-${n}-${p}`]=g[p]);return h},cssVarBlockName:g=>`--${e.value}-${n}-${g}`}},Df={prefix:Math.floor(Math.random()*1e4),current:0},aM=Symbol("elIdInjection"),lM=()=>di()?bt(aM,Df):Df,wm=n=>{const e=lM(),t=ps("namespace",Mm);return Se(()=>V(n)||`${t.value}-id-${e.prefix}-${e.current++}`)},Em=()=>{const n=bt(hs,void 0),e=bt(ro,void 0);return{form:n,formItem:e}},cM=(n,{formItemContext:e,disableIdGeneration:t,disableIdManagement:i})=>{t||(t=Qe(!1)),i||(i=Qe(!1));const r=Qe();let s;const o=Se(()=>{var a;return!!(!n.label&&e&&e.inputIds&&((a=e.inputIds)==null?void 0:a.length)<=1)});return yr(()=>{s=Xt([js(n,"id"),t],([a,l])=>{const c=a??(l?void 0:wm().value);c!==r.value&&(e!=null&&e.removeInputId&&(r.value&&e.removeInputId(r.value),!(i!=null&&i.value)&&!l&&c&&e.addInputId(c)),r.value=c)},{immediate:!0})}),X_(()=>{s&&s(),e!=null&&e.removeInputId&&r.value&&e.removeInputId(r.value)}),{isLabeledByFormItem:o,inputId:r}},If=Qe(0),uM=()=>{const n=ps("zIndex",2e3),e=Se(()=>n.value+If.value);return{initialZIndex:n,currentZIndex:e,nextZIndex:()=>(If.value++,e.value)}};function fM(n){const e=Qe();function t(){if(n.value==null)return;const{selectionStart:r,selectionEnd:s,value:o}=n.value;if(r==null||s==null)return;const a=o.slice(0,Math.max(0,r)),l=o.slice(Math.max(0,s));e.value={selectionStart:r,selectionEnd:s,value:o,beforeTxt:a,afterTxt:l}}function i(){if(n.value==null||e.value==null)return;const{value:r}=n.value,{beforeTxt:s,afterTxt:o,selectionStart:a}=e.value;if(s==null||o==null||a==null)return;let l=r.length;if(r.endsWith(o))l=r.length-o.length;else if(r.startsWith(s))l=s.length;else{const c=s[a-1],u=r.indexOf(c,a-1);u!==-1&&(l=u+1)}n.value.setSelectionRange(l,l)}return[t,i]}var Zn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const dM=Yn({size:{type:yt([Number,String])},color:{type:String}}),hM=ft({name:"ElIcon",inheritAttrs:!1}),pM=ft({...hM,props:dM,setup(n){const e=n,t=fn("icon"),i=Se(()=>{const{size:r,color:s}=e;return!r&&!s?{}:{fontSize:US(r)?void 0:Ql(r),"--color":s}});return(r,s)=>(Le(),Ye("i",Us({class:V(t).b(),style:V(i)},r.$attrs),[Lt(r.$slots,"default")],16))}});var mM=Zn(pM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const li=Er(mM);let vn;const gM=`
  height:0 !important;
  visibility:hidden !important;
  ${J1()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,_M=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function vM(n){const e=window.getComputedStyle(n),t=e.getPropertyValue("box-sizing"),i=Number.parseFloat(e.getPropertyValue("padding-bottom"))+Number.parseFloat(e.getPropertyValue("padding-top")),r=Number.parseFloat(e.getPropertyValue("border-bottom-width"))+Number.parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:_M.map(o=>`${o}:${e.getPropertyValue(o)}`).join(";"),paddingSize:i,borderSize:r,boxSizing:t}}function Of(n,e=1,t){var i;vn||(vn=document.createElement("textarea"),document.body.appendChild(vn));const{paddingSize:r,borderSize:s,boxSizing:o,contextStyle:a}=vM(n);vn.setAttribute("style",`${a};${gM}`),vn.value=n.value||n.placeholder||"";let l=vn.scrollHeight;const c={};o==="border-box"?l=l+s:o==="content-box"&&(l=l-r),vn.value="";const u=vn.scrollHeight-r;if(Bi(e)){let f=u*e;o==="border-box"&&(f=f+r+s),l=Math.max(f,l),c.minHeight=`${f}px`}if(Bi(t)){let f=u*t;o==="border-box"&&(f=f+r+s),l=Math.min(f,l)}return c.height=`${l}px`,(i=vn.parentNode)==null||i.removeChild(vn),vn=void 0,c}const xM=Yn({id:{type:String,default:void 0},size:au,disabled:Boolean,modelValue:{type:yt([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:yt([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:io},prefixIcon:{type:io},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:yt([Object,Array,String]),default:()=>ir({})}}),yM={[ec]:n=>Je(n),input:n=>Je(n),change:n=>Je(n),focus:n=>n instanceof FocusEvent,blur:n=>n instanceof FocusEvent,clear:()=>!0,mouseleave:n=>n instanceof MouseEvent,mouseenter:n=>n instanceof MouseEvent,keydown:n=>n instanceof Event,compositionstart:n=>n instanceof CompositionEvent,compositionupdate:n=>n instanceof CompositionEvent,compositionend:n=>n instanceof CompositionEvent},bM=["role"],SM=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],MM=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],wM=ft({name:"ElInput",inheritAttrs:!1}),EM=ft({...wM,props:xM,emits:yM,setup(n,{expose:e,emit:t}){const i=n,r=w0(),s=$c(),o=Se(()=>{const x={};return i.containerRole==="combobox"&&(x["aria-haspopup"]=r["aria-haspopup"],x["aria-owns"]=r["aria-owns"],x["aria-expanded"]=r["aria-expanded"]),x}),a=Se(()=>[i.type==="textarea"?p.b():h.b(),h.m(m.value),h.is("disabled",g.value),h.is("exceed",we.value),{[h.b("group")]:s.prepend||s.append,[h.bm("group","append")]:s.append,[h.bm("group","prepend")]:s.prepend,[h.m("prefix")]:s.prefix||i.prefixIcon,[h.m("suffix")]:s.suffix||i.suffixIcon||i.clearable||i.showPassword,[h.bm("suffix","password-clear")]:ce.value&&Z.value},r.class]),l=Se(()=>[h.e("wrapper"),h.is("focus",_.value)]),c=nM({excludeKeys:Se(()=>Object.keys(o.value))}),{form:u,formItem:f}=Em(),{inputId:d}=cM(i,{formItemContext:f}),m=Ca(),g=lu(),h=fn("input"),p=fn("textarea"),v=Jo(),S=Jo(),_=Qe(!1),M=Qe(!1),T=Qe(!1),L=Qe(!1),N=Qe(),b=Jo(i.inputStyle),C=Se(()=>v.value||S.value),I=Se(()=>{var x;return(x=u==null?void 0:u.statusIcon)!=null?x:!1}),j=Se(()=>(f==null?void 0:f.validateState)||""),z=Se(()=>j.value&&K1[j.value]),B=Se(()=>L.value?V1:y1),F=Se(()=>[r.style,i.inputStyle]),Y=Se(()=>[i.inputStyle,b.value,{resize:i.resize}]),oe=Se(()=>vS(i.modelValue)?"":String(i.modelValue)),ce=Se(()=>i.clearable&&!g.value&&!i.readonly&&!!oe.value&&(_.value||M.value)),Z=Se(()=>i.showPassword&&!g.value&&!i.readonly&&!!oe.value&&(!!oe.value||_.value)),le=Se(()=>i.showWordLimit&&!!c.value.maxlength&&(i.type==="text"||i.type==="textarea")&&!g.value&&!i.readonly&&!i.showPassword),de=Se(()=>Array.from(oe.value).length),we=Se(()=>!!le.value&&de.value>Number(c.value.maxlength)),W=Se(()=>!!s.suffix||!!i.suffixIcon||ce.value||i.showPassword||le.value||!!j.value&&I.value),[ue,ye]=fM(v);su(S,x=>{if(!le.value||i.resize!=="both")return;const y=x[0],{width:O}=y.contentRect;N.value={right:`calc(100% - ${O+15+6}px)`}});const A=()=>{const{type:x,autosize:y}=i;if(!(!wr||x!=="textarea"||!S.value))if(y){const O=et(y)?y.minRows:void 0,K=et(y)?y.maxRows:void 0;b.value={...Of(S.value,O,K)}}else b.value={minHeight:Of(S.value).minHeight}},$=()=>{const x=C.value;!x||x.value===oe.value||(x.value=oe.value)},P=async x=>{ue();let{value:y}=x.target;if(i.formatter&&(y=i.parser?i.parser(y):y,y=i.formatter(y)),!T.value){if(y===oe.value){$();return}t(ec,y),t("input",y),await kn(),$(),ye()}},H=x=>{t("change",x.target.value)},re=x=>{t("compositionstart",x),T.value=!0},me=x=>{var y;t("compositionupdate",x);const O=(y=x.target)==null?void 0:y.value,K=O[O.length-1]||"";T.value=!Q1(K)},_e=x=>{t("compositionend",x),T.value&&(T.value=!1,P(x))},w=()=>{L.value=!L.value,R()},R=async()=>{var x;await kn(),(x=C.value)==null||x.focus()},G=()=>{var x;return(x=C.value)==null?void 0:x.blur()},X=x=>{_.value=!0,t("focus",x)},Q=x=>{var y;_.value=!1,t("blur",x),i.validateEvent&&((y=f==null?void 0:f.validate)==null||y.call(f,"blur").catch(O=>void 0))},fe=x=>{M.value=!1,t("mouseleave",x)},he=x=>{M.value=!0,t("mouseenter",x)},se=x=>{t("keydown",x)},ve=()=>{var x;(x=C.value)==null||x.select()},ae=()=>{t(ec,""),t("change",""),t("clear"),t("input","")};return Xt(()=>i.modelValue,()=>{var x;kn(()=>A()),i.validateEvent&&((x=f==null?void 0:f.validate)==null||x.call(f,"change").catch(y=>void 0))}),Xt(oe,()=>$()),Xt(()=>i.type,async()=>{await kn(),$(),A()}),yr(()=>{!i.formatter&&i.parser,$(),kn(A)}),e({input:v,textarea:S,ref:C,textareaStyle:Y,autosize:js(i,"autosize"),focus:R,blur:G,select:ve,clear:ae,resizeTextarea:A}),(x,y)=>Vc((Le(),Ye("div",Us(V(o),{class:V(a),style:V(F),role:x.containerRole,onMouseenter:he,onMouseleave:fe}),[it(" input "),x.type!=="textarea"?(Le(),Ye(xt,{key:0},[it(" prepend slot "),x.$slots.prepend?(Le(),Ye("div",{key:0,class:ke(V(h).be("group","prepend"))},[Lt(x.$slots,"prepend")],2)):it("v-if",!0),rt("div",{class:ke(V(l))},[it(" prefix slot "),x.$slots.prefix||x.prefixIcon?(Le(),Ye("span",{key:0,class:ke(V(h).e("prefix"))},[rt("span",{class:ke(V(h).e("prefix-inner")),onClick:R},[Lt(x.$slots,"prefix"),x.prefixIcon?(Le(),dt(V(li),{key:0,class:ke(V(h).e("icon"))},{default:Pt(()=>[(Le(),dt(Vn(x.prefixIcon)))]),_:1},8,["class"])):it("v-if",!0)],2)],2)):it("v-if",!0),rt("input",Us({id:V(d),ref_key:"input",ref:v,class:V(h).e("inner")},V(c),{type:x.showPassword?L.value?"text":"password":x.type,disabled:V(g),formatter:x.formatter,parser:x.parser,readonly:x.readonly,autocomplete:x.autocomplete,tabindex:x.tabindex,"aria-label":x.label,placeholder:x.placeholder,style:x.inputStyle,form:i.form,onCompositionstart:re,onCompositionupdate:me,onCompositionend:_e,onInput:P,onFocus:X,onBlur:Q,onChange:H,onKeydown:se}),null,16,SM),it(" suffix slot "),V(W)?(Le(),Ye("span",{key:1,class:ke(V(h).e("suffix"))},[rt("span",{class:ke(V(h).e("suffix-inner")),onClick:R},[!V(ce)||!V(Z)||!V(le)?(Le(),Ye(xt,{key:0},[Lt(x.$slots,"suffix"),x.suffixIcon?(Le(),dt(V(li),{key:0,class:ke(V(h).e("icon"))},{default:Pt(()=>[(Le(),dt(Vn(x.suffixIcon)))]),_:1},8,["class"])):it("v-if",!0)],64)):it("v-if",!0),V(ce)?(Le(),dt(V(li),{key:1,class:ke([V(h).e("icon"),V(h).e("clear")]),onMousedown:Dp(V(Gn),["prevent"]),onClick:ae},{default:Pt(()=>[ht(V(fm))]),_:1},8,["class","onMousedown"])):it("v-if",!0),V(Z)?(Le(),dt(V(li),{key:2,class:ke([V(h).e("icon"),V(h).e("password")]),onClick:w},{default:Pt(()=>[(Le(),dt(Vn(V(B))))]),_:1},8,["class"])):it("v-if",!0),V(le)?(Le(),Ye("span",{key:3,class:ke(V(h).e("count"))},[rt("span",{class:ke(V(h).e("count-inner"))},Ei(V(de))+" / "+Ei(V(c).maxlength),3)],2)):it("v-if",!0),V(j)&&V(z)&&V(I)?(Le(),dt(V(li),{key:4,class:ke([V(h).e("icon"),V(h).e("validateIcon"),V(h).is("loading",V(j)==="validating")])},{default:Pt(()=>[(Le(),dt(Vn(V(z))))]),_:1},8,["class"])):it("v-if",!0)],2)],2)):it("v-if",!0)],2),it(" append slot "),x.$slots.append?(Le(),Ye("div",{key:1,class:ke(V(h).be("group","append"))},[Lt(x.$slots,"append")],2)):it("v-if",!0)],64)):(Le(),Ye(xt,{key:1},[it(" textarea "),rt("textarea",Us({id:V(d),ref_key:"textarea",ref:S,class:V(p).e("inner")},V(c),{tabindex:x.tabindex,disabled:V(g),readonly:x.readonly,autocomplete:x.autocomplete,style:V(Y),"aria-label":x.label,placeholder:x.placeholder,form:i.form,onCompositionstart:re,onCompositionupdate:me,onCompositionend:_e,onInput:P,onFocus:X,onBlur:Q,onChange:H,onKeydown:se}),null,16,MM),V(le)?(Le(),Ye("span",{key:0,style:$n(N.value),class:ke(V(h).e("count"))},Ei(V(de))+" / "+Ei(V(c).maxlength),7)):it("v-if",!0)],64))],16,bM)),[[jc,x.type!=="hidden"]])}});var TM=Zn(EM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const _P=Er(TM),AM=Yn({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),CM=["textContent"],RM=ft({name:"ElBadge"}),LM=ft({...RM,props:AM,setup(n,{expose:e}){const t=n,i=fn("badge"),r=Se(()=>t.isDot?"":Bi(t.value)&&Bi(t.max)?t.max<t.value?`${t.max}+`:`${t.value}`:`${t.value}`);return e({content:r}),(s,o)=>(Le(),Ye("div",{class:ke(V(i).b())},[Lt(s.$slots,"default"),ht(wa,{name:`${V(i).namespace.value}-zoom-in-center`,persisted:""},{default:Pt(()=>[Vc(rt("sup",{class:ke([V(i).e("content"),V(i).em("content",s.type),V(i).is("fixed",!!s.$slots.default),V(i).is("dot",s.isDot)]),textContent:Ei(V(r))},null,10,CM),[[jc,!s.hidden&&(V(r)||s.isDot)]])]),_:1},8,["name"])],2))}});var PM=Zn(LM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const DM=Er(PM),IM=(n,e)=>{sM({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},Se(()=>n.type==="text"));const t=bt(xm,void 0),i=ps("button"),{form:r}=Em(),s=Ca(Se(()=>t==null?void 0:t.size)),o=lu(),a=Qe(),l=$c(),c=Se(()=>n.type||(t==null?void 0:t.type)||""),u=Se(()=>{var m,g,h;return(h=(g=n.autoInsertSpace)!=null?g:(m=i.value)==null?void 0:m.autoInsertSpace)!=null?h:!1}),f=Se(()=>{var m;const g=(m=l.default)==null?void 0:m.call(l);if(u.value&&(g==null?void 0:g.length)===1){const h=g[0];if((h==null?void 0:h.type)===ho){const p=h.children;return/^\p{Unified_Ideograph}{2}$/u.test(p.trim())}}return!1});return{_disabled:o,_size:s,_type:c,_ref:a,shouldAddSpace:f,handleClick:m=>{n.nativeType==="reset"&&(r==null||r.resetFields()),e("click",m)}}},OM=["default","primary","success","warning","info","danger","text",""],FM=["button","submit","reset"],tc=Yn({size:au,disabled:Boolean,type:{type:String,values:OM,default:""},icon:{type:io},nativeType:{type:String,values:FM,default:"button"},loading:Boolean,loadingIcon:{type:io,default:()=>hm},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),NM={click:n=>n instanceof MouseEvent};function Ot(n,e){BM(n)&&(n="100%");var t=zM(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function Eo(n){return Math.min(1,Math.max(0,n))}function BM(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function zM(n){return typeof n=="string"&&n.indexOf("%")!==-1}function Tm(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function To(n){return n<=1?"".concat(Number(n)*100,"%"):n}function or(n){return n.length===1?"0"+n:String(n)}function UM(n,e,t){return{r:Ot(n,255)*255,g:Ot(e,255)*255,b:Ot(t,255)*255}}function Ff(n,e,t){n=Ot(n,255),e=Ot(e,255),t=Ot(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),s=0,o=0,a=(i+r)/2;if(i===r)o=0,s=0;else{var l=i-r;switch(o=a>.5?l/(2-i-r):l/(i+r),i){case n:s=(e-t)/l+(e<t?6:0);break;case e:s=(t-n)/l+2;break;case t:s=(n-e)/l+4;break}s/=6}return{h:s,s:o,l:a}}function Za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function kM(n,e,t){var i,r,s;if(n=Ot(n,360),e=Ot(e,100),t=Ot(t,100),e===0)r=t,s=t,i=t;else{var o=t<.5?t*(1+e):t+e-t*e,a=2*t-o;i=Za(a,o,n+1/3),r=Za(a,o,n),s=Za(a,o,n-1/3)}return{r:i*255,g:r*255,b:s*255}}function Nf(n,e,t){n=Ot(n,255),e=Ot(e,255),t=Ot(t,255);var i=Math.max(n,e,t),r=Math.min(n,e,t),s=0,o=i,a=i-r,l=i===0?0:a/i;if(i===r)s=0;else{switch(i){case n:s=(e-t)/a+(e<t?6:0);break;case e:s=(t-n)/a+2;break;case t:s=(n-e)/a+4;break}s/=6}return{h:s,s:l,v:o}}function VM(n,e,t){n=Ot(n,360)*6,e=Ot(e,100),t=Ot(t,100);var i=Math.floor(n),r=n-i,s=t*(1-e),o=t*(1-r*e),a=t*(1-(1-r)*e),l=i%6,c=[t,o,s,s,a,t][l],u=[a,t,t,o,s,s][l],f=[s,s,a,t,t,o][l];return{r:c*255,g:u*255,b:f*255}}function Bf(n,e,t,i){var r=[or(Math.round(n).toString(16)),or(Math.round(e).toString(16)),or(Math.round(t).toString(16))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function GM(n,e,t,i,r){var s=[or(Math.round(n).toString(16)),or(Math.round(e).toString(16)),or(Math.round(t).toString(16)),or(HM(i))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function HM(n){return Math.round(parseFloat(n)*255).toString(16)}function zf(n){return rn(n)/255}function rn(n){return parseInt(n,16)}function WM(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}var nc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $M(n){var e={r:0,g:0,b:0},t=1,i=null,r=null,s=null,o=!1,a=!1;return typeof n=="string"&&(n=XM(n)),typeof n=="object"&&(Qn(n.r)&&Qn(n.g)&&Qn(n.b)?(e=UM(n.r,n.g,n.b),o=!0,a=String(n.r).substr(-1)==="%"?"prgb":"rgb"):Qn(n.h)&&Qn(n.s)&&Qn(n.v)?(i=To(n.s),r=To(n.v),e=VM(n.h,i,r),o=!0,a="hsv"):Qn(n.h)&&Qn(n.s)&&Qn(n.l)&&(i=To(n.s),s=To(n.l),e=kM(n.h,i,s),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=Tm(t),{ok:o,format:n.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var qM="[-\\+]?\\d+%?",jM="[-\\+]?\\d*\\.\\d+%?",Ti="(?:".concat(jM,")|(?:").concat(qM,")"),Ja="[\\s|\\(]+(".concat(Ti,")[,|\\s]+(").concat(Ti,")[,|\\s]+(").concat(Ti,")\\s*\\)?"),Qa="[\\s|\\(]+(".concat(Ti,")[,|\\s]+(").concat(Ti,")[,|\\s]+(").concat(Ti,")[,|\\s]+(").concat(Ti,")\\s*\\)?"),Sn={CSS_UNIT:new RegExp(Ti),rgb:new RegExp("rgb"+Ja),rgba:new RegExp("rgba"+Qa),hsl:new RegExp("hsl"+Ja),hsla:new RegExp("hsla"+Qa),hsv:new RegExp("hsv"+Ja),hsva:new RegExp("hsva"+Qa),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function XM(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var e=!1;if(nc[n])n=nc[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=Sn.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=Sn.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Sn.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=Sn.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Sn.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=Sn.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Sn.hex8.exec(n),t?{r:rn(t[1]),g:rn(t[2]),b:rn(t[3]),a:zf(t[4]),format:e?"name":"hex8"}:(t=Sn.hex6.exec(n),t?{r:rn(t[1]),g:rn(t[2]),b:rn(t[3]),format:e?"name":"hex"}:(t=Sn.hex4.exec(n),t?{r:rn(t[1]+t[1]),g:rn(t[2]+t[2]),b:rn(t[3]+t[3]),a:zf(t[4]+t[4]),format:e?"name":"hex8"}:(t=Sn.hex3.exec(n),t?{r:rn(t[1]+t[1]),g:rn(t[2]+t[2]),b:rn(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function Qn(n){return Boolean(Sn.CSS_UNIT.exec(String(n)))}var KM=function(){function n(e,t){e===void 0&&(e=""),t===void 0&&(t={});var i;if(e instanceof n)return e;typeof e=="number"&&(e=WM(e)),this.originalInput=e;var r=$M(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(i=t.format)!==null&&i!==void 0?i:r.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},n.prototype.getLuminance=function(){var e=this.toRgb(),t,i,r,s=e.r/255,o=e.g/255,a=e.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),o<=.03928?i=o/12.92:i=Math.pow((o+.055)/1.055,2.4),a<=.03928?r=a/12.92:r=Math.pow((a+.055)/1.055,2.4),.2126*t+.7152*i+.0722*r},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(e){return this.a=Tm(e),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},n.prototype.toHsv=function(){var e=Nf(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},n.prototype.toHsvString=function(){var e=Nf(this.r,this.g,this.b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(i,"%, ").concat(r,"%)"):"hsva(".concat(t,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var e=Ff(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},n.prototype.toHslString=function(){var e=Ff(this.r,this.g,this.b),t=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(i,"%, ").concat(r,"%)"):"hsla(".concat(t,", ").concat(i,"%, ").concat(r,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(e){return e===void 0&&(e=!1),Bf(this.r,this.g,this.b,e)},n.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},n.prototype.toHex8=function(e){return e===void 0&&(e=!1),GM(this.r,this.g,this.b,this.a,e)},n.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},n.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),i=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(i,")"):"rgba(".concat(e,", ").concat(t,", ").concat(i,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(Ot(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(Ot(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Bf(this.r,this.g,this.b,!1),t=0,i=Object.entries(nc);t<i.length;t++){var r=i[t],s=r[0],o=r[1];if(e===o)return s}return!1},n.prototype.toString=function(e){var t=Boolean(e);e=e??this.format;var i=!1,r=this.a<1&&this.a>=0,s=!t&&r&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=Eo(t.l),new n(t)},n.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new n(t)},n.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=Eo(t.l),new n(t)},n.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},n.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},n.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=Eo(t.s),new n(t)},n.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=Eo(t.s),new n(t)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(e){var t=this.toHsl(),i=(t.h+e)%360;return t.h=i<0?360+i:i,new n(t)},n.prototype.mix=function(e,t){t===void 0&&(t=50);var i=this.toRgb(),r=new n(e).toRgb(),s=t/100,o={r:(r.r-i.r)*s+i.r,g:(r.g-i.g)*s+i.g,b:(r.b-i.b)*s+i.b,a:(r.a-i.a)*s+i.a};return new n(o)},n.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var i=this.toHsl(),r=360/t,s=[this];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,s.push(new n(i));return s},n.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new n(e)},n.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),i=t.h,r=t.s,s=t.v,o=[],a=1/e;e--;)o.push(new n({h:i,s:r,v:s})),s=(s+a)%1;return o},n.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new n({h:(t+72)%360,s:e.s,l:e.l}),new n({h:(t+216)%360,s:e.s,l:e.l})]},n.prototype.onBackground=function(e){var t=this.toRgb(),i=new n(e).toRgb(),r=t.a+i.a*(1-t.a);return new n({r:(t.r*t.a+i.r*i.a*(1-t.a))/r,g:(t.g*t.a+i.g*i.a*(1-t.a))/r,b:(t.b*t.a+i.b*i.a*(1-t.a))/r,a:r})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(e){for(var t=this.toHsl(),i=t.h,r=[this],s=360/e,o=1;o<e;o++)r.push(new n({h:(i+o*s)%360,s:t.s,l:t.l}));return r},n.prototype.equals=function(e){return this.toRgbString()===new n(e).toRgbString()},n}();function gi(n,e=20){return n.mix("#141414",e).toString()}function YM(n){const e=lu(),t=fn("button");return Se(()=>{let i={};const r=n.color;if(r){const s=new KM(r),o=n.dark?s.tint(20).toString():gi(s,20);if(n.plain)i=t.cssVarBlock({"bg-color":n.dark?gi(s,90):s.tint(90).toString(),"text-color":r,"border-color":n.dark?gi(s,50):s.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":o,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":o}),e.value&&(i[t.cssVarBlockName("disabled-bg-color")]=n.dark?gi(s,90):s.tint(90).toString(),i[t.cssVarBlockName("disabled-text-color")]=n.dark?gi(s,50):s.tint(50).toString(),i[t.cssVarBlockName("disabled-border-color")]=n.dark?gi(s,80):s.tint(80).toString());else{const a=n.dark?gi(s,30):s.tint(30).toString(),l=s.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(i=t.cssVarBlock({"bg-color":r,"text-color":l,"border-color":r,"hover-bg-color":a,"hover-text-color":l,"hover-border-color":a,"active-bg-color":o,"active-border-color":o}),e.value){const c=n.dark?gi(s,50):s.tint(50).toString();i[t.cssVarBlockName("disabled-bg-color")]=c,i[t.cssVarBlockName("disabled-text-color")]=n.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,i[t.cssVarBlockName("disabled-border-color")]=c}}}return i})}const ZM=["aria-disabled","disabled","autofocus","type"],JM=ft({name:"ElButton"}),QM=ft({...JM,props:tc,emits:NM,setup(n,{expose:e,emit:t}){const i=n,r=YM(i),s=fn("button"),{_ref:o,_size:a,_type:l,_disabled:c,shouldAddSpace:u,handleClick:f}=IM(i,t);return e({ref:o,size:a,type:l,disabled:c,shouldAddSpace:u}),(d,m)=>(Le(),Ye("button",{ref_key:"_ref",ref:o,class:ke([V(s).b(),V(s).m(V(l)),V(s).m(V(a)),V(s).is("disabled",V(c)),V(s).is("loading",d.loading),V(s).is("plain",d.plain),V(s).is("round",d.round),V(s).is("circle",d.circle),V(s).is("text",d.text),V(s).is("link",d.link),V(s).is("has-bg",d.bg)]),"aria-disabled":V(c)||d.loading,disabled:V(c)||d.loading,autofocus:d.autofocus,type:d.nativeType,style:$n(V(r)),onClick:m[0]||(m[0]=(...g)=>V(f)&&V(f)(...g))},[d.loading?(Le(),Ye(xt,{key:0},[d.$slots.loading?Lt(d.$slots,"loading",{key:0}):(Le(),dt(V(li),{key:1,class:ke(V(s).is("loading"))},{default:Pt(()=>[(Le(),dt(Vn(d.loadingIcon)))]),_:1},8,["class"]))],64)):d.icon||d.$slots.icon?(Le(),dt(V(li),{key:1},{default:Pt(()=>[d.icon?(Le(),dt(Vn(d.icon),{key:0})):Lt(d.$slots,"icon",{key:1})]),_:3})):it("v-if",!0),d.$slots.default?(Le(),Ye("span",{key:2,class:ke({[V(s).em("text","expand")]:V(u)})},[Lt(d.$slots,"default")],2)):it("v-if",!0)],14,ZM))}});var ew=Zn(QM,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const tw={size:tc.size,type:tc.type},nw=ft({name:"ElButtonGroup"}),iw=ft({...nw,props:tw,setup(n){const e=n;Di(xm,xr({size:js(e,"size"),type:js(e,"type")}));const t=fn("button");return(i,r)=>(Le(),Ye("div",{class:ke(`${V(t).b("group")}`)},[Lt(i.$slots,"default")],2))}});var Am=Zn(iw,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const vP=Er(ew,{ButtonGroup:Am});vm(Am);const rw=Yn({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:yt([Number,Object]),default:()=>ir({})},sm:{type:yt([Number,Object]),default:()=>ir({})},md:{type:yt([Number,Object]),default:()=>ir({})},lg:{type:yt([Number,Object]),default:()=>ir({})},xl:{type:yt([Number,Object]),default:()=>ir({})}}),sw=ft({name:"ElCol"}),ow=ft({...sw,props:rw,setup(n){const e=n,{gutter:t}=bt(bm,{gutter:Se(()=>0)}),i=fn("col"),r=Se(()=>{const o={};return t.value&&(o.paddingLeft=o.paddingRight=`${t.value/2}px`),o}),s=Se(()=>{const o=[];return["span","offset","pull","push"].forEach(c=>{const u=e[c];Bi(u)&&(c==="span"?o.push(i.b(`${e[c]}`)):u>0&&o.push(i.b(`${c}-${e[c]}`)))}),["xs","sm","md","lg","xl"].forEach(c=>{Bi(e[c])?o.push(i.b(`${c}-${e[c]}`)):et(e[c])&&Object.entries(e[c]).forEach(([u,f])=>{o.push(u!=="span"?i.b(`${c}-${u}-${f}`):i.b(`${c}-${f}`))})}),t.value&&o.push(i.is("guttered")),[i.b(),o]});return(o,a)=>(Le(),dt(Vn(o.tag),{class:ke(V(s)),style:$n(V(r))},{default:Pt(()=>[Lt(o.$slots,"default")]),_:3},8,["class","style"]))}});var aw=Zn(ow,[["__file","/home/runner/work/element-plus/element-plus/packages/components/col/src/col.vue"]]);const xP=Er(aw),ic={},lw=Yn({a11y:{type:Boolean,default:!0},locale:{type:yt(Object)},size:au,button:{type:yt(Object)},experimentalFeatures:{type:yt(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:yt(Object)},zIndex:Number,namespace:{type:String,default:"el"}});ft({name:"ElConfigProvider",props:lw,setup(n,{slots:e}){Xt(()=>n.message,i=>{Object.assign(ic,i??{})},{immediate:!0,deep:!0});const t=iM(n);return()=>Lt(e,"default",{config:t==null?void 0:t.value})}});const cw=Yn({model:Object,rules:{type:yt(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:ou},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),uw={validate:(n,e,t)=>(Ne(n)||Je(n))&&am(e)&&Je(t)};function fw(){const n=Qe([]),e=Se(()=>{if(!n.value.length)return"0";const s=Math.max(...n.value);return s?`${s}px`:""});function t(s){const o=n.value.indexOf(s);return o===-1&&e.value,o}function i(s,o){if(s&&o){const a=t(o);n.value.splice(a,1,s)}else s&&n.value.push(s)}function r(s){const o=t(s);o>-1&&n.value.splice(o,1)}return{autoLabelWidth:e,registerLabelWidth:i,deregisterLabelWidth:r}}const Ao=(n,e)=>{const t=ql(e);return t.length>0?n.filter(i=>i.prop&&t.includes(i.prop)):n},dw="ElForm",hw=ft({name:dw}),pw=ft({...hw,props:cw,emits:uw,setup(n,{expose:e,emit:t}){const i=n,r=[],s=Ca(),o=fn("form"),a=Se(()=>{const{labelPosition:S,inline:_}=i;return[o.b(),o.m(s.value||"default"),{[o.m(`label-${S}`)]:S,[o.m("inline")]:_}]}),l=S=>{r.push(S)},c=S=>{S.prop&&r.splice(r.indexOf(S),1)},u=(S=[])=>{i.model&&Ao(r,S).forEach(_=>_.resetField())},f=(S=[])=>{Ao(r,S).forEach(_=>_.clearValidate())},d=Se(()=>!!i.model),m=S=>{if(r.length===0)return[];const _=Ao(r,S);return _.length?_:[]},g=async S=>p(void 0,S),h=async(S=[])=>{if(!d.value)return!1;const _=m(S);if(_.length===0)return!0;let M={};for(const T of _)try{await T.validate("")}catch(L){M={...M,...L}}return Object.keys(M).length===0?!0:Promise.reject(M)},p=async(S=[],_)=>{const M=!Xe(_);try{const T=await h(S);return T===!0&&(_==null||_(T)),T}catch(T){if(T instanceof Error)throw T;const L=T;return i.scrollToError&&v(Object.keys(L)[0]),_==null||_(!1,L),M&&Promise.reject(L)}},v=S=>{var _;const M=Ao(r,S)[0];M&&((_=M.$el)==null||_.scrollIntoView())};return Xt(()=>i.rules,()=>{i.validateOnRuleChange&&g().catch(S=>void 0)},{deep:!0}),Di(hs,xr({...Qh(i),emit:t,resetFields:u,clearValidate:f,validateField:p,addField:l,removeField:c,...fw()})),e({validate:g,validateField:p,resetFields:u,clearValidate:f,scrollToField:v}),(S,_)=>(Le(),Ye("form",{class:ke(V(a))},[Lt(S.$slots,"default")],2))}});var mw=Zn(pw,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function ar(){return ar=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ar.apply(this,arguments)}function gw(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,so(n,e)}function rc(n){return rc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},rc(n)}function so(n,e){return so=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},so(n,e)}function _w(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ta(n,e,t){return _w()?ta=Reflect.construct.bind():ta=function(r,s,o){var a=[null];a.push.apply(a,s);var l=Function.bind.apply(r,a),c=new l;return o&&so(c,o.prototype),c},ta.apply(null,arguments)}function vw(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function sc(n){var e=typeof Map=="function"?new Map:void 0;return sc=function(i){if(i===null||!vw(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return ta(i,arguments,rc(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),so(r,i)},sc(n)}var xw=/%[sdj%]/g,yw=function(){};typeof process<"u"&&process.env;function oc(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var i=t.field;e[i]=e[i]||[],e[i].push(t)}),e}function an(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=0,s=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var o=n.replace(xw,function(a){if(a==="%%")return"%";if(r>=s)return a;switch(a){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch{return"[Circular]"}break;default:return a}});return o}return n}function bw(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function St(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||bw(e)&&typeof n=="string"&&!n)}function Sw(n,e,t){var i=[],r=0,s=n.length;function o(a){i.push.apply(i,a||[]),r++,r===s&&t(i)}n.forEach(function(a){e(a,o)})}function Uf(n,e,t){var i=0,r=n.length;function s(o){if(o&&o.length){t(o);return}var a=i;i=i+1,a<r?e(n[a],s):t([])}s([])}function Mw(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var kf=function(n){gw(e,n);function e(t,i){var r;return r=n.call(this,"Async Validation Error")||this,r.errors=t,r.fields=i,r}return e}(sc(Error));function ww(n,e,t,i,r){if(e.first){var s=new Promise(function(d,m){var g=function(v){return i(v),v.length?m(new kf(v,oc(v))):d(r)},h=Mw(n);Uf(h,t,g)});return s.catch(function(d){return d}),s}var o=e.firstFields===!0?Object.keys(n):e.firstFields||[],a=Object.keys(n),l=a.length,c=0,u=[],f=new Promise(function(d,m){var g=function(p){if(u.push.apply(u,p),c++,c===l)return i(u),u.length?m(new kf(u,oc(u))):d(r)};a.length||(i(u),d(r)),a.forEach(function(h){var p=n[h];o.indexOf(h)!==-1?Uf(p,t,g):Sw(p,t,g)})});return f.catch(function(d){return d}),f}function Ew(n){return!!(n&&n.message!==void 0)}function Tw(n,e){for(var t=n,i=0;i<e.length;i++){if(t==null)return t;t=t[e[i]]}return t}function Vf(n,e){return function(t){var i;return n.fullFields?i=Tw(e,n.fullFields):i=e[t.field||n.fullField],Ew(t)?(t.field=t.field||n.fullField,t.fieldValue=i,t):{message:typeof t=="function"?t():t,fieldValue:i,field:t.field||n.fullField}}}function Gf(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var i=e[t];typeof i=="object"&&typeof n[t]=="object"?n[t]=ar({},n[t],i):n[t]=i}}return n}var Cm=function(e,t,i,r,s,o){e.required&&(!i.hasOwnProperty(e.field)||St(t,o||e.type))&&r.push(an(s.messages.required,e.fullField))},Aw=function(e,t,i,r,s){(/^\s+$/.test(t)||t==="")&&r.push(an(s.messages.whitespace,e.fullField))},Co,Cw=function(){if(Co)return Co;var n="[a-fA-F\\d:]",e=function(M){return M&&M.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",i="[a-fA-F\\d]{1,4}",r=(`
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
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+r+"$)"),o=new RegExp("^"+t+"$"),a=new RegExp("^"+r+"$"),l=function(M){return M&&M.exact?s:new RegExp("(?:"+e(M)+t+e(M)+")|(?:"+e(M)+r+e(M)+")","g")};l.v4=function(_){return _&&_.exact?o:new RegExp(""+e(_)+t+e(_),"g")},l.v6=function(_){return _&&_.exact?a:new RegExp(""+e(_)+r+e(_),"g")};var c="(?:(?:[a-z]+:)?//)",u="(?:\\S+(?::\\S*)?@)?",f=l.v4().source,d=l.v6().source,m="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",g="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",h="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",p="(?::\\d{2,5})?",v='(?:[/?#][^\\s"]*)?',S="(?:"+c+"|www\\.)"+u+"(?:localhost|"+f+"|"+d+"|"+m+g+h+")"+p+v;return Co=new RegExp("(?:^"+S+"$)","i"),Co},Hf={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Ds={integer:function(e){return Ds.number(e)&&parseInt(e,10)===e},float:function(e){return Ds.number(e)&&!Ds.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Ds.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Hf.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Cw())},hex:function(e){return typeof e=="string"&&!!e.match(Hf.hex)}},Rw=function(e,t,i,r,s){if(e.required&&t===void 0){Cm(e,t,i,r,s);return}var o=["integer","float","array","regexp","object","method","email","number","date","url","hex"],a=e.type;o.indexOf(a)>-1?Ds[a](t)||r.push(an(s.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&r.push(an(s.messages.types[a],e.fullField,e.type))},Lw=function(e,t,i,r,s){var o=typeof e.len=="number",a=typeof e.min=="number",l=typeof e.max=="number",c=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=t,f=null,d=typeof t=="number",m=typeof t=="string",g=Array.isArray(t);if(d?f="number":m?f="string":g&&(f="array"),!f)return!1;g&&(u=t.length),m&&(u=t.replace(c,"_").length),o?u!==e.len&&r.push(an(s.messages[f].len,e.fullField,e.len)):a&&!l&&u<e.min?r.push(an(s.messages[f].min,e.fullField,e.min)):l&&!a&&u>e.max?r.push(an(s.messages[f].max,e.fullField,e.max)):a&&l&&(u<e.min||u>e.max)&&r.push(an(s.messages[f].range,e.fullField,e.min,e.max))},Ar="enum",Pw=function(e,t,i,r,s){e[Ar]=Array.isArray(e[Ar])?e[Ar]:[],e[Ar].indexOf(t)===-1&&r.push(an(s.messages[Ar],e.fullField,e[Ar].join(", ")))},Dw=function(e,t,i,r,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(an(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var o=new RegExp(e.pattern);o.test(t)||r.push(an(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},Ve={required:Cm,whitespace:Aw,type:Rw,range:Lw,enum:Pw,pattern:Dw},Iw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t,"string")&&!e.required)return i();Ve.required(e,t,r,o,s,"string"),St(t,"string")||(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s),Ve.pattern(e,t,r,o,s),e.whitespace===!0&&Ve.whitespace(e,t,r,o,s))}i(o)},Ow=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve.type(e,t,r,o,s)}i(o)},Fw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(t===""&&(t=void 0),St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Nw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve.type(e,t,r,o,s)}i(o)},Bw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),St(t)||Ve.type(e,t,r,o,s)}i(o)},zw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Uw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},kw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(t==null&&!e.required)return i();Ve.required(e,t,r,o,s,"array"),t!=null&&(Ve.type(e,t,r,o,s),Ve.range(e,t,r,o,s))}i(o)},Vw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve.type(e,t,r,o,s)}i(o)},Gw="enum",Hw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s),t!==void 0&&Ve[Gw](e,t,r,o,s)}i(o)},Ww=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t,"string")&&!e.required)return i();Ve.required(e,t,r,o,s),St(t,"string")||Ve.pattern(e,t,r,o,s)}i(o)},$w=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t,"date")&&!e.required)return i();if(Ve.required(e,t,r,o,s),!St(t,"date")){var l;t instanceof Date?l=t:l=new Date(t),Ve.type(e,l,r,o,s),l&&Ve.range(e,l.getTime(),r,o,s)}}i(o)},qw=function(e,t,i,r,s){var o=[],a=Array.isArray(t)?"array":typeof t;Ve.required(e,t,r,o,s,a),i(o)},el=function(e,t,i,r,s){var o=e.type,a=[],l=e.required||!e.required&&r.hasOwnProperty(e.field);if(l){if(St(t,o)&&!e.required)return i();Ve.required(e,t,r,a,s,o),St(t,o)||Ve.type(e,t,r,a,s)}i(a)},jw=function(e,t,i,r,s){var o=[],a=e.required||!e.required&&r.hasOwnProperty(e.field);if(a){if(St(t)&&!e.required)return i();Ve.required(e,t,r,o,s)}i(o)},Gs={string:Iw,method:Ow,number:Fw,boolean:Nw,regexp:Bw,integer:zw,float:Uw,array:kw,object:Vw,enum:Hw,pattern:Ww,date:$w,url:el,hex:el,email:el,required:qw,any:jw};function ac(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var lc=ac(),po=function(){function n(t){this.rules=null,this._messages=lc,this.define(t)}var e=n.prototype;return e.define=function(i){var r=this;if(!i)throw new Error("Cannot configure a schema with no rules");if(typeof i!="object"||Array.isArray(i))throw new Error("Rules must be an object");this.rules={},Object.keys(i).forEach(function(s){var o=i[s];r.rules[s]=Array.isArray(o)?o:[o]})},e.messages=function(i){return i&&(this._messages=Gf(ac(),i)),this._messages},e.validate=function(i,r,s){var o=this;r===void 0&&(r={}),s===void 0&&(s=function(){});var a=i,l=r,c=s;if(typeof l=="function"&&(c=l,l={}),!this.rules||Object.keys(this.rules).length===0)return c&&c(null,a),Promise.resolve(a);function u(h){var p=[],v={};function S(M){if(Array.isArray(M)){var T;p=(T=p).concat.apply(T,M)}else p.push(M)}for(var _=0;_<h.length;_++)S(h[_]);p.length?(v=oc(p),c(p,v)):c(null,a)}if(l.messages){var f=this.messages();f===lc&&(f=ac()),Gf(f,l.messages),l.messages=f}else l.messages=this.messages();var d={},m=l.keys||Object.keys(this.rules);m.forEach(function(h){var p=o.rules[h],v=a[h];p.forEach(function(S){var _=S;typeof _.transform=="function"&&(a===i&&(a=ar({},a)),v=a[h]=_.transform(v)),typeof _=="function"?_={validator:_}:_=ar({},_),_.validator=o.getValidationMethod(_),_.validator&&(_.field=h,_.fullField=_.fullField||h,_.type=o.getType(_),d[h]=d[h]||[],d[h].push({rule:_,value:v,source:a,field:h}))})});var g={};return ww(d,l,function(h,p){var v=h.rule,S=(v.type==="object"||v.type==="array")&&(typeof v.fields=="object"||typeof v.defaultField=="object");S=S&&(v.required||!v.required&&h.value),v.field=h.field;function _(L,N){return ar({},N,{fullField:v.fullField+"."+L,fullFields:v.fullFields?[].concat(v.fullFields,[L]):[L]})}function M(L){L===void 0&&(L=[]);var N=Array.isArray(L)?L:[L];!l.suppressWarning&&N.length&&n.warning("async-validator:",N),N.length&&v.message!==void 0&&(N=[].concat(v.message));var b=N.map(Vf(v,a));if(l.first&&b.length)return g[v.field]=1,p(b);if(!S)p(b);else{if(v.required&&!h.value)return v.message!==void 0?b=[].concat(v.message).map(Vf(v,a)):l.error&&(b=[l.error(v,an(l.messages.required,v.field))]),p(b);var C={};v.defaultField&&Object.keys(h.value).map(function(z){C[z]=v.defaultField}),C=ar({},C,h.rule.fields);var I={};Object.keys(C).forEach(function(z){var B=C[z],F=Array.isArray(B)?B:[B];I[z]=F.map(_.bind(null,z))});var j=new n(I);j.messages(l.messages),h.rule.options&&(h.rule.options.messages=l.messages,h.rule.options.error=l.error),j.validate(h.value,h.rule.options||l,function(z){var B=[];b&&b.length&&B.push.apply(B,b),z&&z.length&&B.push.apply(B,z),p(B.length?B:null)})}}var T;if(v.asyncValidator)T=v.asyncValidator(v,h.value,M,h.source,l);else if(v.validator){try{T=v.validator(v,h.value,M,h.source,l)}catch(L){console.error==null||console.error(L),l.suppressValidatorError||setTimeout(function(){throw L},0),M(L.message)}T===!0?M():T===!1?M(typeof v.message=="function"?v.message(v.fullField||v.field):v.message||(v.fullField||v.field)+" fails"):T instanceof Array?M(T):T instanceof Error&&M(T.message)}T&&T.then&&T.then(function(){return M()},function(L){return M(L)})},function(h){u(h)},a)},e.getType=function(i){if(i.type===void 0&&i.pattern instanceof RegExp&&(i.type="pattern"),typeof i.validator!="function"&&i.type&&!Gs.hasOwnProperty(i.type))throw new Error(an("Unknown rule type %s",i.type));return i.type||"string"},e.getValidationMethod=function(i){if(typeof i.validator=="function")return i.validator;var r=Object.keys(i),s=r.indexOf("message");return s!==-1&&r.splice(s,1),r.length===1&&r[0]==="required"?Gs.required:Gs[this.getType(i)]||void 0},n}();po.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");Gs[e]=t};po.warning=yw;po.messages=lc;po.validators=Gs;const Xw=["","error","validating","success"],Kw=Yn({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:yt([String,Array])},required:{type:Boolean,default:void 0},rules:{type:yt([Object,Array])},error:String,validateStatus:{type:String,values:Xw},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:ou}}),Wf="ElLabelWrap";var Yw=ft({name:Wf,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(n,{slots:e}){const t=bt(hs,void 0),i=bt(ro);i||HS(Wf,"usage: <el-form-item><label-wrap /></el-form-item>");const r=fn("form"),s=Qe(),o=Qe(0),a=()=>{var u;if((u=s.value)!=null&&u.firstElementChild){const f=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(f))}else return 0},l=(u="update")=>{kn(()=>{e.default&&n.isAutoWidth&&(u==="update"?o.value=a():u==="remove"&&(t==null||t.deregisterLabelWidth(o.value)))})},c=()=>l("update");return yr(()=>{c()}),kc(()=>{l("remove")}),lp(()=>c()),Xt(o,(u,f)=>{n.updateAll&&(t==null||t.registerLabelWidth(u,f))}),su(Se(()=>{var u,f;return(f=(u=s.value)==null?void 0:u.firstElementChild)!=null?f:null}),c),()=>{var u,f;if(!e)return null;const{isAutoWidth:d}=n;if(d){const m=t==null?void 0:t.autoLabelWidth,g=i==null?void 0:i.hasLabel,h={};if(g&&m&&m!=="auto"){const p=Math.max(0,Number.parseInt(m,10)-o.value),v=t.labelPosition==="left"?"marginRight":"marginLeft";p&&(h[v]=`${p}px`)}return ht("div",{ref:s,class:[r.be("item","label-wrap")],style:h},[(u=e.default)==null?void 0:u.call(e)])}else return ht(xt,{ref:s},[(f=e.default)==null?void 0:f.call(e)])}}});const Zw=["role","aria-labelledby"],Jw=ft({name:"ElFormItem"}),Qw=ft({...Jw,props:Kw,setup(n,{expose:e}){const t=n,i=$c(),r=bt(hs,void 0),s=bt(ro,void 0),o=Ca(void 0,{formItem:!1}),a=fn("form-item"),l=wm().value,c=Qe([]),u=Qe(""),f=TS(u,100),d=Qe(""),m=Qe();let g,h=!1;const p=Se(()=>{if((r==null?void 0:r.labelPosition)==="top")return{};const P=Ql(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return P?{width:P}:{}}),v=Se(()=>{if((r==null?void 0:r.labelPosition)==="top"||r!=null&&r.inline)return{};if(!t.label&&!t.labelWidth&&C)return{};const P=Ql(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return!t.label&&!i.label?{marginLeft:P}:{}}),S=Se(()=>[a.b(),a.m(o.value),a.is("error",u.value==="error"),a.is("validating",u.value==="validating"),a.is("success",u.value==="success"),a.is("required",F.value||t.required),a.is("no-asterisk",r==null?void 0:r.hideRequiredAsterisk),(r==null?void 0:r.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[a.m("feedback")]:r==null?void 0:r.statusIcon}]),_=Se(()=>am(t.inlineMessage)?t.inlineMessage:(r==null?void 0:r.inlineMessage)||!1),M=Se(()=>[a.e("error"),{[a.em("error","inline")]:_.value}]),T=Se(()=>t.prop?Je(t.prop)?t.prop:t.prop.join("."):""),L=Se(()=>!!(t.label||i.label)),N=Se(()=>t.for||c.value.length===1?c.value[0]:void 0),b=Se(()=>!N.value&&L.value),C=!!s,I=Se(()=>{const P=r==null?void 0:r.model;if(!(!P||!t.prop))return Ya(P,t.prop).value}),j=Se(()=>{const{required:P}=t,H=[];t.rules&&H.push(...ql(t.rules));const re=r==null?void 0:r.rules;if(re&&t.prop){const me=Ya(re,t.prop).value;me&&H.push(...ql(me))}if(P!==void 0){const me=H.map((_e,w)=>[_e,w]).filter(([_e])=>Object.keys(_e).includes("required"));if(me.length>0)for(const[_e,w]of me)_e.required!==P&&(H[w]={..._e,required:P});else H.push({required:P})}return H}),z=Se(()=>j.value.length>0),B=P=>j.value.filter(re=>!re.trigger||!P?!0:Array.isArray(re.trigger)?re.trigger.includes(P):re.trigger===P).map(({trigger:re,...me})=>me),F=Se(()=>j.value.some(P=>P.required)),Y=Se(()=>{var P;return f.value==="error"&&t.showMessage&&((P=r==null?void 0:r.showMessage)!=null?P:!0)}),oe=Se(()=>`${t.label||""}${(r==null?void 0:r.labelSuffix)||""}`),ce=P=>{u.value=P},Z=P=>{var H,re;const{errors:me,fields:_e}=P;(!me||!_e)&&console.error(P),ce("error"),d.value=me?(re=(H=me==null?void 0:me[0])==null?void 0:H.message)!=null?re:`${t.prop} is required`:"",r==null||r.emit("validate",t.prop,!1,d.value)},le=()=>{ce("success"),r==null||r.emit("validate",t.prop,!0,"")},de=async P=>{const H=T.value;return new po({[H]:P}).validate({[H]:I.value},{firstFields:!0}).then(()=>(le(),!0)).catch(me=>(Z(me),Promise.reject(me)))},we=async(P,H)=>{if(h||!t.prop)return!1;const re=Xe(H);if(!z.value)return H==null||H(!1),!1;const me=B(P);return me.length===0?(H==null||H(!0),!0):(ce("validating"),de(me).then(()=>(H==null||H(!0),!0)).catch(_e=>{const{fields:w}=_e;return H==null||H(!1,w),re?!1:Promise.reject(w)}))},W=()=>{ce(""),d.value="",h=!1},ue=async()=>{const P=r==null?void 0:r.model;if(!P||!t.prop)return;const H=Ya(P,t.prop);h=!0,H.value=wf(g),await kn(),W(),h=!1},ye=P=>{c.value.includes(P)||c.value.push(P)},A=P=>{c.value=c.value.filter(H=>H!==P)};Xt(()=>t.error,P=>{d.value=P||"",ce(P?"error":"")},{immediate:!0}),Xt(()=>t.validateStatus,P=>ce(P||""));const $=xr({...Qh(t),$el:m,size:o,validateState:u,labelId:l,inputIds:c,isGroup:b,hasLabel:L,addInputId:ye,removeInputId:A,resetField:ue,clearValidate:W,validate:we});return Di(ro,$),yr(()=>{t.prop&&(r==null||r.addField($),g=wf(I.value))}),kc(()=>{r==null||r.removeField($)}),e({size:o,validateMessage:d,validateState:u,validate:we,clearValidate:W,resetField:ue}),(P,H)=>{var re;return Le(),Ye("div",{ref_key:"formItemRef",ref:m,class:ke(V(S)),role:V(b)?"group":void 0,"aria-labelledby":V(b)?V(l):void 0},[ht(V(Yw),{"is-auto-width":V(p).width==="auto","update-all":((re=V(r))==null?void 0:re.labelWidth)==="auto"},{default:Pt(()=>[V(L)?(Le(),dt(Vn(V(N)?"label":"div"),{key:0,id:V(l),for:V(N),class:ke(V(a).e("label")),style:$n(V(p))},{default:Pt(()=>[Lt(P.$slots,"label",{label:V(oe)},()=>[yp(Ei(V(oe)),1)])]),_:3},8,["id","for","class","style"])):it("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),rt("div",{class:ke(V(a).e("content")),style:$n(V(v))},[Lt(P.$slots,"default"),ht(K0,{name:`${V(a).namespace.value}-zoom-in-top`},{default:Pt(()=>[V(Y)?Lt(P.$slots,"error",{key:0,error:d.value},()=>[rt("div",{class:ke(V(M))},Ei(d.value),3)]):it("v-if",!0)]),_:3},8,["name"])],6)],10,Zw)}}});var Rm=Zn(Qw,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const yP=Er(mw,{FormItem:Rm}),bP=vm(Rm),e2=["start","center","end","space-around","space-between","space-evenly"],t2=["top","middle","bottom"],n2=Yn({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:e2,default:"start"},align:{type:String,values:t2,default:"top"}}),i2=ft({name:"ElRow"}),r2=ft({...i2,props:n2,setup(n){const e=n,t=fn("row"),i=Se(()=>e.gutter);Di(bm,{gutter:i});const r=Se(()=>{const o={};return e.gutter&&(o.marginRight=o.marginLeft=`-${e.gutter/2}px`),o}),s=Se(()=>[t.b(),t.is(`justify-${e.justify}`,e.justify!=="start"),t.is(`align-${e.align}`,e.align!=="top")]);return(o,a)=>(Le(),dt(Vn(o.tag),{class:ke(V(s)),style:$n(V(r))},{default:Pt(()=>[Lt(o.$slots,"default")]),_:3},8,["class","style"]))}});var s2=Zn(r2,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const SP=Er(s2),Lm=["success","info","warning","error"],Kt=ir({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:wr?document.body:void 0}),o2=Yn({customClass:{type:String,default:Kt.customClass},center:{type:Boolean,default:Kt.center},dangerouslyUseHTMLString:{type:Boolean,default:Kt.dangerouslyUseHTMLString},duration:{type:Number,default:Kt.duration},icon:{type:io,default:Kt.icon},id:{type:String,default:Kt.id},message:{type:yt([String,Object,Function]),default:Kt.message},onClose:{type:yt(Function),required:!1},showClose:{type:Boolean,default:Kt.showClose},type:{type:String,values:Lm,default:Kt.type},offset:{type:Number,default:Kt.offset},zIndex:{type:Number,default:Kt.zIndex},grouping:{type:Boolean,default:Kt.grouping},repeatNum:{type:Number,default:Kt.repeatNum}}),a2={destroy:()=>!0},Rn=qh([]),l2=n=>{const e=Rn.findIndex(r=>r.id===n),t=Rn[e];let i;return e>0&&(i=Rn[e-1]),{current:t,prev:i}},c2=n=>{const{prev:e}=l2(n);return e?e.vm.exposed.bottom.value:0},u2=(n,e)=>Rn.findIndex(i=>i.id===n)>0?20:e,f2=["id"],d2=["innerHTML"],h2=ft({name:"ElMessage"}),p2=ft({...h2,props:o2,emits:a2,setup(n,{expose:e}){const t=n,{Close:i}=X1,r=fn("message"),s=Qe(),o=Qe(!1),a=Qe(0);let l;const c=Se(()=>t.type?t.type==="error"?"danger":t.type:"info"),u=Se(()=>{const M=t.type;return{[r.bm("icon",M)]:M&&Pf[M]}}),f=Se(()=>t.icon||Pf[t.type]||""),d=Se(()=>c2(t.id)),m=Se(()=>u2(t.id,t.offset)+d.value),g=Se(()=>a.value+m.value),h=Se(()=>({top:`${m.value}px`,zIndex:t.zIndex}));function p(){t.duration!==0&&({stop:l}=CS(()=>{S()},t.duration))}function v(){l==null||l()}function S(){o.value=!1}function _({code:M}){M===Z1.esc&&S()}return yr(()=>{p(),o.value=!0}),Xt(()=>t.repeatNum,()=>{v(),p()}),RS(document,"keydown",_),su(s,()=>{a.value=s.value.getBoundingClientRect().height}),e({visible:o,bottom:g,close:S}),(M,T)=>(Le(),dt(wa,{name:V(r).b("fade"),onBeforeLeave:M.onClose,onAfterLeave:T[0]||(T[0]=L=>M.$emit("destroy")),persisted:""},{default:Pt(()=>[Vc(rt("div",{id:M.id,ref_key:"messageRef",ref:s,class:ke([V(r).b(),{[V(r).m(M.type)]:M.type&&!M.icon},V(r).is("center",M.center),V(r).is("closable",M.showClose),M.customClass]),style:$n(V(h)),role:"alert",onMouseenter:v,onMouseleave:p},[M.repeatNum>1?(Le(),dt(V(DM),{key:0,value:M.repeatNum,type:V(c),class:ke(V(r).e("badge"))},null,8,["value","type","class"])):it("v-if",!0),V(f)?(Le(),dt(V(li),{key:1,class:ke([V(r).e("icon"),V(u)])},{default:Pt(()=>[(Le(),dt(Vn(V(f))))]),_:1},8,["class"])):it("v-if",!0),Lt(M.$slots,"default",{},()=>[M.dangerouslyUseHTMLString?(Le(),Ye(xt,{key:1},[it(" Caution here, message could've been compromised, never use user's input as message "),rt("p",{class:ke(V(r).e("content")),innerHTML:M.message},null,10,d2)],2112)):(Le(),Ye("p",{key:0,class:ke(V(r).e("content"))},Ei(M.message),3))]),M.showClose?(Le(),dt(V(li),{key:2,class:ke(V(r).e("closeBtn")),onClick:Dp(S,["stop"])},{default:Pt(()=>[ht(V(i))]),_:1},8,["class","onClick"])):it("v-if",!0)],46,f2),[[jc,o.value]])]),_:3},8,["name","onBeforeLeave"]))}});var m2=Zn(p2,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let g2=1;const Pm=n=>{const e=!n||Je(n)||es(n)||Xe(n)?{message:n}:n,t={...Kt,...e};if(!t.appendTo)t.appendTo=document.body;else if(Je(t.appendTo)){let i=document.querySelector(t.appendTo);kS(i)||(i=document.body),t.appendTo=i}return t},_2=n=>{const e=Rn.indexOf(n);if(e===-1)return;Rn.splice(e,1);const{handler:t}=n;t.close()},v2=({appendTo:n,...e},t)=>{const{nextZIndex:i}=uM(),r=`message_${g2++}`,s=e.onClose,o=document.createElement("div"),a={...e,zIndex:i()+e.zIndex,id:r,onClose:()=>{s==null||s(),_2(f)},onDestroy:()=>{Ju(null,o)}},l=ht(m2,a,Xe(a.message)||es(a.message)?{default:Xe(a.message)?a.message:()=>a.message}:null);l.appContext=t||ns._context,Ju(l,o),n.appendChild(o.firstElementChild);const c=l.component,f={id:r,vnode:l,vm:c,handler:{close:()=>{c.exposed.visible.value=!1}},props:l.component.props};return f},ns=(n={},e)=>{if(!wr)return{close:()=>{}};if(Bi(ic.max)&&Rn.length>=ic.max)return{close:()=>{}};const t=Pm(n);if(t.grouping&&Rn.length){const r=Rn.find(({vnode:s})=>{var o;return((o=s.props)==null?void 0:o.message)===t.message});if(r)return r.props.repeatNum+=1,r.props.type=t.type,r.handler}const i=v2(t,e);return Rn.push(i),i.handler};Lm.forEach(n=>{ns[n]=(e={},t)=>{const i=Pm(e);return ns({...i,type:n},t)}});function x2(n){for(const e of Rn)(!n||n===e.props.type)&&e.handler.close()}ns.closeAll=x2;ns._context=null;const MP=Y1(ns,"$message");/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof window<"u";function y2(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Ze=Object.assign;function tl(n,e){const t={};for(const i in e){const r=e[i];t[i]=Pn(r)?r.map(n):n(r)}return t}const Hs=()=>{},Pn=Array.isArray,b2=/\/$/,S2=n=>n.replace(b2,"");function nl(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=T2(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function M2(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function $f(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function w2(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&is(e.matched[i],t.matched[r])&&Dm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function is(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Dm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!E2(n[t],e[t]))return!1;return!0}function E2(n,e){return Pn(n)?qf(n,e):Pn(e)?qf(e,n):n===e}function qf(n,e){return Pn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function T2(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var oo;(function(n){n.pop="pop",n.push="push"})(oo||(oo={}));var Ws;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ws||(Ws={}));function A2(n){if(!n)if(Gr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),S2(n)}const C2=/^[^#]+#/;function R2(n,e){return n.replace(C2,"#")+e}function L2(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function P2(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=L2(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function jf(n,e){return(history.state?history.state.position-e:-1)+n}const cc=new Map;function D2(n,e){cc.set(n,e)}function I2(n){const e=cc.get(n);return cc.delete(n),e}let O2=()=>location.protocol+"//"+location.host;function Im(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),$f(l,"")}return $f(t,n)+i+r}function F2(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const m=Im(n,location),g=t.value,h=e.value;let p=0;if(d){if(t.value=m,e.value=d,o&&o===g){o=null;return}p=h?d.position-h.position:0}else i(m);r.forEach(v=>{v(t.value,g,{delta:p,type:oo.pop,direction:p?p>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){o=t.value}function c(d){r.push(d);const m=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(Ze({},d.state,{scroll:Ra()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function Xf(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Ra():null}}function N2(n){const{history:e,location:t}=window,i={value:Im(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:O2()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](d)}}function o(l,c){const u=Ze({},e.state,Xf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Ze({},r.value,e.state,{forward:l,scroll:Ra()});s(u.current,u,!0);const f=Ze({},Xf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function wP(n){n=A2(n);const e=N2(n),t=F2(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Ze({location:"",base:n,go:i,createHref:R2.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function B2(n){return typeof n=="string"||n&&typeof n=="object"}function Om(n){return typeof n=="string"||typeof n=="symbol"}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fm=Symbol("");var Kf;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Kf||(Kf={}));function rs(n,e){return Ze(new Error,{type:n,[Fm]:!0},e)}function ei(n,e){return n instanceof Error&&Fm in n&&(e==null||!!(n.type&e))}const Yf="[^/]+?",z2={sensitive:!1,strict:!1,start:!0,end:!0},U2=/[.+*?^${}()[\]/\\]/g;function k2(n,e){const t=Ze({},z2,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let m=40+(t.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(U2,"\\$&"),m+=40;else if(d.type===1){const{value:g,repeatable:h,optional:p,regexp:v}=d;s.push({name:g,repeatable:h,optional:p});const S=v||Yf;if(S!==Yf){m+=10;try{new RegExp(`(${S})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+M.message)}}let _=h?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(_=p&&c.length<2?`(?:/${_})`:"/"+_),p&&(_+="?"),r+=_,m+=20,p&&(m+=-8),h&&(m+=-20),S===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",g=s[d-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:h,optional:p}=m,v=g in c?c[g]:"";if(Pn(v)&&!h)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Pn(v)?v.join("/"):v;if(!S)if(p)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function V2(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function G2(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=V2(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Zf(i))return 1;if(Zf(r))return-1}return r.length-i.length}function Zf(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const H2={type:0,value:""},W2=/[a-zA-Z0-9_]/;function $2(n){if(!n)return[[]];if(n==="/")return[[H2]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:W2.test(l)?d():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function q2(n,e,t){const i=k2($2(n.path),t),r=Ze(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function j2(n,e){const t=[],i=new Map;e=ed({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const m=!d,g=X2(u);g.aliasOf=d&&d.record;const h=ed(e,u),p=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of _)p.push(Ze({},g,{components:d?d.record.components:g.components,path:M,aliasOf:d?d.record:g}))}let v,S;for(const _ of p){const{path:M}=_;if(f&&M[0]!=="/"){const T=f.record.path,L=T[T.length-1]==="/"?"":"/";_.path=f.record.path+(M&&L+M)}if(v=q2(_,f,h),d?d.alias.push(v):(S=S||v,S!==v&&S.alias.push(v),m&&u.name&&!Qf(v)&&o(u.name)),g.children){const T=g.children;for(let L=0;L<T.length;L++)s(T[L],v,d&&d.children[L])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return S?()=>{o(S)}:Hs}function o(u){if(Om(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&G2(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Nm(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Qf(u)&&i.set(u.record.name,u)}function c(u,f){let d,m={},g,h;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw rs(1,{location:u});h=d.record.name,m=Ze(Jf(f.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&Jf(u.params,d.keys.map(S=>S.name))),g=d.stringify(m)}else if("path"in u)g=u.path,d=t.find(S=>S.re.test(g)),d&&(m=d.parse(g),h=d.record.name);else{if(d=f.name?i.get(f.name):t.find(S=>S.re.test(f.path)),!d)throw rs(1,{location:u,currentLocation:f});h=d.record.name,m=Ze({},f.params,u.params),g=d.stringify(m)}const p=[];let v=d;for(;v;)p.unshift(v.record),v=v.parent;return{name:h,path:g,params:m,matched:p,meta:Y2(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Jf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function X2(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:K2(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function K2(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function Qf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Y2(n){return n.reduce((e,t)=>Ze(e,t.meta),{})}function ed(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Nm(n,e){return e.children.some(t=>t===n||Nm(n,t))}const Bm=/#/g,Z2=/&/g,J2=/\//g,Q2=/=/g,eE=/\?/g,zm=/\+/g,tE=/%5B/g,nE=/%5D/g,Um=/%5E/g,iE=/%60/g,km=/%7B/g,rE=/%7C/g,Vm=/%7D/g,sE=/%20/g;function cu(n){return encodeURI(""+n).replace(rE,"|").replace(tE,"[").replace(nE,"]")}function oE(n){return cu(n).replace(km,"{").replace(Vm,"}").replace(Um,"^")}function uc(n){return cu(n).replace(zm,"%2B").replace(sE,"+").replace(Bm,"%23").replace(Z2,"%26").replace(iE,"`").replace(km,"{").replace(Vm,"}").replace(Um,"^")}function aE(n){return uc(n).replace(Q2,"%3D")}function lE(n){return cu(n).replace(Bm,"%23").replace(eE,"%3F")}function cE(n){return n==null?"":lE(n).replace(J2,"%2F")}function fa(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function uE(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(zm," "),o=s.indexOf("="),a=fa(o<0?s:s.slice(0,o)),l=o<0?null:fa(s.slice(o+1));if(a in e){let c=e[a];Pn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function td(n){let e="";for(let t in n){const i=n[t];if(t=aE(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Pn(i)?i.map(s=>s&&uc(s)):[i&&uc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function fE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Pn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const dE=Symbol(""),nd=Symbol(""),uu=Symbol(""),Gm=Symbol(""),fc=Symbol("");function Ss(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function wi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(rs(4,{from:t,to:e})):f instanceof Error?a(f):B2(f)?a(rs(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function il(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(hE(a)){const c=(a.__vccOpts||a)[e];c&&r.push(wi(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=y2(c)?c.default:c;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&wi(d,t,i,s,o)()}))}}return r}function hE(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function id(n){const e=bt(uu),t=bt(Gm),i=Se(()=>e.resolve(V(n.to))),r=Se(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(is.bind(null,u));if(d>-1)return d;const m=rd(l[c-2]);return c>1&&rd(u)===m&&f[f.length-1].path!==m?f.findIndex(is.bind(null,l[c-2])):d}),s=Se(()=>r.value>-1&&_E(t.params,i.value.params)),o=Se(()=>r.value>-1&&r.value===t.matched.length-1&&Dm(t.params,i.value.params));function a(l={}){return gE(l)?e[V(n.replace)?"replace":"push"](V(n.to)).catch(Hs):Promise.resolve()}return{route:i,href:Se(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const pE=ft({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:id,setup(n,{slots:e}){const t=xr(id(n)),{options:i}=bt(uu),r=Se(()=>({[sd(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[sd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:qc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),mE=pE;function gE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function _E(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Pn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function rd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const sd=(n,e,t)=>n??e??t,vE=ft({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=bt(fc),r=Se(()=>n.route||i.value),s=bt(nd,0),o=Se(()=>{let c=V(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Se(()=>r.value.matched[o.value]);Di(nd,Se(()=>o.value+1)),Di(dE,a),Di(fc,r);const l=Qe();return Xt(()=>[l.value,a.value,n.name],([c,u,f],[d,m,g])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!is(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return od(t.default,{Component:d,route:c});const m=f.props[u],g=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=qc(d,Ze({},g,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return od(t.default,{Component:p,route:c})||p}}});function od(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const xE=vE;function EP(n){const e=j2(n.routes,n),t=n.parseQuery||uE,i=n.stringifyQuery||td,r=n.history,s=Ss(),o=Ss(),a=Ss(),l=Jo(_i);let c=_i;Gr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,A=>""+A),f=tl.bind(null,cE),d=tl.bind(null,fa);function m(A,$){let P,H;return Om(A)?(P=e.getRecordMatcher(A),H=$):H=A,e.addRoute(H,P)}function g(A){const $=e.getRecordMatcher(A);$&&e.removeRoute($)}function h(){return e.getRoutes().map(A=>A.record)}function p(A){return!!e.getRecordMatcher(A)}function v(A,$){if($=Ze({},$||l.value),typeof A=="string"){const w=nl(t,A,$.path),R=e.resolve({path:w.path},$),G=r.createHref(w.fullPath);return Ze(w,R,{params:d(R.params),hash:fa(w.hash),redirectedFrom:void 0,href:G})}let P;if("path"in A)P=Ze({},A,{path:nl(t,A.path,$.path).path});else{const w=Ze({},A.params);for(const R in w)w[R]==null&&delete w[R];P=Ze({},A,{params:f(A.params)}),$.params=f($.params)}const H=e.resolve(P,$),re=A.hash||"";H.params=u(d(H.params));const me=M2(i,Ze({},A,{hash:oE(re),path:H.path})),_e=r.createHref(me);return Ze({fullPath:me,hash:re,query:i===td?fE(A.query):A.query||{}},H,{redirectedFrom:void 0,href:_e})}function S(A){return typeof A=="string"?nl(t,A,l.value.path):Ze({},A)}function _(A,$){if(c!==A)return rs(8,{from:$,to:A})}function M(A){return N(A)}function T(A){return M(Ze(S(A),{replace:!0}))}function L(A){const $=A.matched[A.matched.length-1];if($&&$.redirect){const{redirect:P}=$;let H=typeof P=="function"?P(A):P;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=S(H):{path:H},H.params={}),Ze({query:A.query,hash:A.hash,params:"path"in H?{}:A.params},H)}}function N(A,$){const P=c=v(A),H=l.value,re=A.state,me=A.force,_e=A.replace===!0,w=L(P);if(w)return N(Ze(S(w),{state:typeof w=="object"?Ze({},re,w.state):re,force:me,replace:_e}),$||P);const R=P;R.redirectedFrom=$;let G;return!me&&w2(i,H,P)&&(G=rs(16,{to:R,from:H}),de(H,H,!0,!1)),(G?Promise.resolve(G):C(R,H)).catch(X=>ei(X)?ei(X,2)?X:le(X):ce(X,R,H)).then(X=>{if(X){if(ei(X,2))return N(Ze({replace:_e},S(X.to),{state:typeof X.to=="object"?Ze({},re,X.to.state):re,force:me}),$||R)}else X=j(R,H,!0,_e,re);return I(R,H,X),X})}function b(A,$){const P=_(A,$);return P?Promise.reject(P):Promise.resolve()}function C(A,$){let P;const[H,re,me]=yE(A,$);P=il(H.reverse(),"beforeRouteLeave",A,$);for(const w of H)w.leaveGuards.forEach(R=>{P.push(wi(R,A,$))});const _e=b.bind(null,A,$);return P.push(_e),Cr(P).then(()=>{P=[];for(const w of s.list())P.push(wi(w,A,$));return P.push(_e),Cr(P)}).then(()=>{P=il(re,"beforeRouteUpdate",A,$);for(const w of re)w.updateGuards.forEach(R=>{P.push(wi(R,A,$))});return P.push(_e),Cr(P)}).then(()=>{P=[];for(const w of A.matched)if(w.beforeEnter&&!$.matched.includes(w))if(Pn(w.beforeEnter))for(const R of w.beforeEnter)P.push(wi(R,A,$));else P.push(wi(w.beforeEnter,A,$));return P.push(_e),Cr(P)}).then(()=>(A.matched.forEach(w=>w.enterCallbacks={}),P=il(me,"beforeRouteEnter",A,$),P.push(_e),Cr(P))).then(()=>{P=[];for(const w of o.list())P.push(wi(w,A,$));return P.push(_e),Cr(P)}).catch(w=>ei(w,8)?w:Promise.reject(w))}function I(A,$,P){for(const H of a.list())H(A,$,P)}function j(A,$,P,H,re){const me=_(A,$);if(me)return me;const _e=$===_i,w=Gr?history.state:{};P&&(H||_e?r.replace(A.fullPath,Ze({scroll:_e&&w&&w.scroll},re)):r.push(A.fullPath,re)),l.value=A,de(A,$,P,_e),le()}let z;function B(){z||(z=r.listen((A,$,P)=>{if(!ye.listening)return;const H=v(A),re=L(H);if(re){N(Ze(re,{replace:!0}),H).catch(Hs);return}c=H;const me=l.value;Gr&&D2(jf(me.fullPath,P.delta),Ra()),C(H,me).catch(_e=>ei(_e,12)?_e:ei(_e,2)?(N(_e.to,H).then(w=>{ei(w,20)&&!P.delta&&P.type===oo.pop&&r.go(-1,!1)}).catch(Hs),Promise.reject()):(P.delta&&r.go(-P.delta,!1),ce(_e,H,me))).then(_e=>{_e=_e||j(H,me,!1),_e&&(P.delta&&!ei(_e,8)?r.go(-P.delta,!1):P.type===oo.pop&&ei(_e,20)&&r.go(-1,!1)),I(H,me,_e)}).catch(Hs)}))}let F=Ss(),Y=Ss(),oe;function ce(A,$,P){le(A);const H=Y.list();return H.length?H.forEach(re=>re(A,$,P)):console.error(A),Promise.reject(A)}function Z(){return oe&&l.value!==_i?Promise.resolve():new Promise((A,$)=>{F.add([A,$])})}function le(A){return oe||(oe=!A,B(),F.list().forEach(([$,P])=>A?P(A):$()),F.reset()),A}function de(A,$,P,H){const{scrollBehavior:re}=n;if(!Gr||!re)return Promise.resolve();const me=!P&&I2(jf(A.fullPath,0))||(H||!P)&&history.state&&history.state.scroll||null;return kn().then(()=>re(A,$,me)).then(_e=>_e&&P2(_e)).catch(_e=>ce(_e,A,$))}const we=A=>r.go(A);let W;const ue=new Set,ye={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:p,getRoutes:h,resolve:v,options:n,push:M,replace:T,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Y.add,isReady:Z,install(A){const $=this;A.component("RouterLink",mE),A.component("RouterView",xE),A.config.globalProperties.$router=$,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>V(l)}),Gr&&!W&&l.value===_i&&(W=!0,M(r.location).catch(re=>{}));const P={};for(const re in _i)P[re]=Se(()=>l.value[re]);A.provide(uu,$),A.provide(Gm,xr(P)),A.provide(fc,l);const H=A.unmount;ue.add(A),A.unmount=function(){ue.delete(A),ue.size<1&&(c=_i,z&&z(),z=null,l.value=_i,W=!1,oe=!1),H()}}};return ye}function Cr(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function yE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>is(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>is(c,l))||r.push(l))}return[t,i,r]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="150",bE=0,ad=1,SE=2,Hm=1,ME=2,Is=3,zi=0,ln=1,Ai=2,Ii=0,Yr=1,ld=2,cd=3,ud=4,wE=5,Hr=100,EE=101,TE=102,fd=103,dd=104,AE=200,CE=201,RE=202,LE=203,Wm=204,$m=205,PE=206,DE=207,IE=208,OE=209,FE=210,NE=0,BE=1,zE=2,dc=3,UE=4,kE=5,VE=6,GE=7,qm=0,HE=1,WE=2,ui=0,$E=1,qE=2,jE=3,XE=4,KE=5,jm=300,ss=301,os=302,hc=303,pc=304,La=306,mc=1e3,Tn=1001,gc=1002,qt=1003,hd=1004,rl=1005,mn=1006,YE=1007,ao=1008,mr=1009,ZE=1010,JE=1011,Xm=1012,QE=1013,lr=1014,cr=1015,lo=1016,eT=1017,tT=1018,Zr=1020,nT=1021,An=1023,iT=1024,rT=1025,fr=1026,as=1027,sT=1028,oT=1029,aT=1030,lT=1031,cT=1033,sl=33776,ol=33777,al=33778,ll=33779,pd=35840,md=35841,gd=35842,_d=35843,uT=36196,vd=37492,xd=37496,yd=37808,bd=37809,Sd=37810,Md=37811,wd=37812,Ed=37813,Td=37814,Ad=37815,Cd=37816,Rd=37817,Ld=37818,Pd=37819,Dd=37820,Id=37821,cl=36492,fT=36283,Od=36284,Fd=36285,Nd=36286,gr=3e3,ot=3001,dT=3200,hT=3201,pT=0,mT=1,Nn="srgb",co="srgb-linear",Km="display-p3",ul=7680,gT=519,Bd=35044,zd="300 es",_c=1035;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,Ud=180/Math.PI;function mo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function on(n,e,t){return Math.max(e,Math.min(t,n))}function _T(n,e){return(n%e+e)%e}function dl(n,e,t){return(1-t)*n+t*e}function kd(n){return(n&n-1)===0&&n!==0}function vT(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ro(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],m=i[5],g=i[8],h=r[0],p=r[3],v=r[6],S=r[1],_=r[4],M=r[7],T=r[2],L=r[5],N=r[8];return s[0]=o*h+a*S+l*T,s[3]=o*p+a*_+l*L,s[6]=o*v+a*M+l*N,s[1]=c*h+u*S+f*T,s[4]=c*p+u*_+f*L,s[7]=c*v+u*M+f*N,s[2]=d*h+m*S+g*T,s[5]=d*p+m*_+g*L,s[8]=d*v+m*M+g*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*f+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(r*c-u*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(u*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(i*l-c*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hl.makeScale(e,t)),this}rotate(e){return this.premultiply(hl.makeRotation(-e)),this}translate(e,t){return this.premultiply(hl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hl=new jt;function Ym(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class go{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==g){let p=1-a;const v=l*d+c*m+u*g+f*h,S=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const T=Math.sqrt(_),L=Math.atan2(T,v*S);p=Math.sin(p*L)/T,a=Math.sin(a*L)/T}const M=a*S;if(l=l*p+d*M,c=c*p+m*M,u=u*p+g*M,f=f*p+h*M,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*i,u=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new q,Vd=new go;function Jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ml(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const xT=new jt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),yT=new jt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Ci=new q;function bT(n){return n.convertSRGBToLinear(),Ci.set(n.r,n.g,n.b).applyMatrix3(yT),n.setRGB(Ci.x,Ci.y,Ci.z)}function ST(n){return Ci.set(n.r,n.g,n.b).applyMatrix3(xT),n.setRGB(Ci.x,Ci.y,Ci.z).convertLinearToSRGB()}const MT={[co]:n=>n,[Nn]:n=>n.convertSRGBToLinear(),[Km]:bT},wT={[co]:n=>n,[Nn]:n=>n.convertLinearToSRGB(),[Km]:ST},Ht={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return co},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=MT[e],r=wT[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Rr;class Zm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=da("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jm{constructor(e=null){this.isSource=!0,this.uuid=mo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gl(r[o].image)):s.push(gl(r[o]))}else s=gl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ET=0;class cn extends ms{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Tn,r=Tn,s=mn,o=ao,a=An,l=mr,c=cn.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=mo(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=jm;cn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],h=l[2],p=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(m+1)/2,T=(v+1)/2,L=(u+d)/4,N=(f+h)/4,b=(g+p)/4;return _>M&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=L/i,s=N/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=L/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=N/s,r=b/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-h)/S,this.z=(d-u)/S,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _r extends ms{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qm extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class TT extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ji.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox),_l.applyMatrix4(e.matrixWorld),this.union(_l);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),Lo.subVectors(this.max,Ms),Lr.subVectors(e.a,Ms),Pr.subVectors(e.b,Ms),Dr.subVectors(e.c,Ms),vi.subVectors(Pr,Lr),xi.subVectors(Dr,Pr),Xi.subVectors(Lr,Dr);let t=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Xi.z,Xi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Xi.z,0,-Xi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Xi.y,Xi.x,0];return!vl(t,Lr,Pr,Dr,Lo)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Lr,Pr,Dr,Lo))?!1:(Po.crossVectors(vi,xi),t=[Po.x,Po.y,Po.z],vl(t,Lr,Pr,Dr,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new q,new q,new q,new q,new q,new q,new q,new q],ji=new q,_l=new _o,Lr=new q,Pr=new q,Dr=new q,vi=new q,xi=new q,Xi=new q,Ms=new q,Lo=new q,Po=new q,Ki=new q;function vl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ki.fromArray(n,s);const a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const AT=new _o,ws=new q,xl=new q;class du{constructor(e=new q,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):AT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(xl)),this.expandByPoint(ws.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new q,yl=new q,Do=new q,yi=new q,bl=new q,Io=new q,Sl=new q;class CT{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){yl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(yl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=yi.dot(this.direction),l=-yi.dot(Do),c=yi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yl).addScaledVector(Do,d),m}intersectSphere(e,t){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,r,s){bl.subVectors(t,e),Io.subVectors(i,e),Sl.crossVectors(bl,Io);let o=this.direction.dot(Sl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(yi,Io));if(l<0)return null;const c=a*this.direction.dot(bl.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(Sl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,c,u,f,d,m,g,h,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=d,v[3]=m,v[7]=g,v[11]=h,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-h*c,t[9]=-a*l,t[2]=h-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d+h*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=h+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d-h*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=h-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=h-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RT,e,LT)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),bi.crossVectors(i,tn),bi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),bi.crossVectors(i,tn)),bi.normalize(),Oo.crossVectors(tn,bi),r[0]=bi.x,r[4]=Oo.x,r[8]=tn.x,r[1]=bi.y,r[5]=Oo.y,r[9]=tn.y,r[2]=bi.z,r[6]=Oo.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],m=i[13],g=i[2],h=i[6],p=i[10],v=i[14],S=i[3],_=i[7],M=i[11],T=i[15],L=r[0],N=r[4],b=r[8],C=r[12],I=r[1],j=r[5],z=r[9],B=r[13],F=r[2],Y=r[6],oe=r[10],ce=r[14],Z=r[3],le=r[7],de=r[11],we=r[15];return s[0]=o*L+a*I+l*F+c*Z,s[4]=o*N+a*j+l*Y+c*le,s[8]=o*b+a*z+l*oe+c*de,s[12]=o*C+a*B+l*ce+c*we,s[1]=u*L+f*I+d*F+m*Z,s[5]=u*N+f*j+d*Y+m*le,s[9]=u*b+f*z+d*oe+m*de,s[13]=u*C+f*B+d*ce+m*we,s[2]=g*L+h*I+p*F+v*Z,s[6]=g*N+h*j+p*Y+v*le,s[10]=g*b+h*z+p*oe+v*de,s[14]=g*C+h*B+p*ce+v*we,s[3]=S*L+_*I+M*F+T*Z,s[7]=S*N+_*j+M*Y+T*le,s[11]=S*b+_*z+M*oe+T*de,s[15]=S*C+_*B+M*ce+T*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],h=e[7],p=e[11],v=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+h*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+v*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],h=e[13],p=e[14],v=e[15],S=f*p*c-h*d*c+h*l*m-a*p*m-f*l*v+a*d*v,_=g*d*c-u*p*c-g*l*m+o*p*m+u*l*v-o*d*v,M=u*h*c-g*f*c+g*a*m-o*h*m-u*a*v+o*f*v,T=g*f*l-u*h*l-g*a*d+o*h*d+u*a*p-o*f*p,L=t*S+i*_+r*M+s*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/L;return e[0]=S*N,e[1]=(h*d*s-f*p*s-h*r*m+i*p*m+f*r*v-i*d*v)*N,e[2]=(a*p*s-h*l*s+h*r*c-i*p*c-a*r*v+i*l*v)*N,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*N,e[4]=_*N,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*v+t*d*v)*N,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*v-t*l*v)*N,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*N,e[8]=M*N,e[9]=(g*f*s-u*h*s-g*i*m+t*h*m+u*i*v-t*f*v)*N,e[10]=(o*h*s-g*a*s+g*i*c-t*h*c-o*i*v+t*a*v)*N,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*m-t*a*m)*N,e[12]=T*N,e[13]=(u*h*r-g*f*r+g*i*d-t*h*d-u*i*p+t*f*p)*N,e[14]=(g*a*r-o*h*r-g*i*l+t*h*l+o*i*p-t*a*p)*N,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,g=s*f,h=o*u,p=o*f,v=a*f,S=l*c,_=l*u,M=l*f,T=i.x,L=i.y,N=i.z;return r[0]=(1-(h+v))*T,r[1]=(m+M)*T,r[2]=(g-_)*T,r[3]=0,r[4]=(m-M)*L,r[5]=(1-(d+v))*L,r[6]=(p+S)*L,r[7]=0,r[8]=(g+_)*N,r[9]=(p-S)*N,r[10]=(1-(d+h))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,f=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,t.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(o-s),f=(t+e)*l,d=(i+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ir=new q,xn=new Ft,RT=new q(0,0,0),LT=new q(1,1,1),bi=new q,Oo=new q,tn=new q,Gd=new Ft,Hd=new go;class Pa{constructor(e=0,t=0,i=0,r=Pa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pa.DEFAULT_ORDER="XYZ";class eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PT=0;const Wd=new q,Or=new go,ii=new Ft,Fo=new q,Es=new q,DT=new q,IT=new go,$d=new q(1,0,0),qd=new q(0,1,0),jd=new q(0,0,1),OT={type:"added"},Xd={type:"removed"};class un extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new q,t=new Pa,i=new go,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new jt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,t){return Or.setFromAxisAngle(e,t),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Es,Fo,this.up):ii.lookAt(Fo,Es,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ii),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(OT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,DT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,IT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new q,ri=new q,Ml=new q,si=new q,Fr=new q,Nr=new q,Kd=new q,wl=new q,El=new q,Tl=new q;class ci{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),yn.subVectors(e,t),r.cross(yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){yn.subVectors(r,t),ri.subVectors(i,t),Ml.subVectors(e,t);const o=yn.dot(yn),a=yn.dot(ri),l=yn.dot(Ml),c=ri.dot(ri),u=ri.dot(Ml),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,si),si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,si),l.set(0,0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l}static isFrontFacing(e,t,i,r){return yn.subVectors(i,t),ri.subVectors(e,t),yn.cross(ri).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),yn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ci.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Fr.subVectors(r,i),Nr.subVectors(s,i),wl.subVectors(e,i);const l=Fr.dot(wl),c=Nr.dot(wl);if(l<=0&&c<=0)return t.copy(i);El.subVectors(e,r);const u=Fr.dot(El),f=Nr.dot(El);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fr,o);Tl.subVectors(e,s);const m=Fr.dot(Tl),g=Nr.dot(Tl);if(g>=0&&m<=g)return t.copy(s);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Nr,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Kd.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Kd,a);const v=1/(p+h+d);return o=h*v,a=d*v,t.copy(i).addScaledVector(Fr,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let FT=0;class Da extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Yr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wm,this.blendDst=$m,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},No={h:0,s:0,l:0};function Al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ht.workingColorSpace){if(e=_T(e,1),t=on(t,0,1),i=on(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Al(o,s,e+1/3),this.g=Al(o,s,e),this.b=Al(o,s,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ht.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ht.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ht.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ht.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nn){const i=tg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=ml(e.r),this.g=ml(e.g),this.b=ml(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Ht.fromWorkingColorSpace(Bt.copy(this),e),on(Bt.r*255,0,255)<<16^on(Bt.g*255,0,255)<<8^on(Bt.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Nn){Ht.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==Nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(bn),bn.h+=e,bn.s+=t,bn.l+=i,this.setHSL(bn.h,bn.s,bn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(No);const i=dl(bn.h,No.h,t),r=dl(bn.s,No.s,t),s=dl(bn.l,No.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new ut;ut.NAMES=tg;class ng extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new q,Bo=new ct;class Hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ig extends Hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rg extends Hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dr extends Hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let NT=0;const pn=new Ft,Cl=new un,Br=new q,nn=new _o,Ts=new _o,Ct=new q;class Tr extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ym(e)?rg:ig)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(nn.min,Ts.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,Ts.max),nn.expandByPoint(Ct)):(nn.expandByPoint(Ts.min),nn.expandByPoint(Ts.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ct.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),Ct.add(Br)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new q,u[I]=new q;const f=new q,d=new q,m=new q,g=new ct,h=new ct,p=new ct,v=new q,S=new q;function _(I,j,z){f.fromArray(r,I*3),d.fromArray(r,j*3),m.fromArray(r,z*3),g.fromArray(o,I*2),h.fromArray(o,j*2),p.fromArray(o,z*2),d.sub(f),m.sub(f),h.sub(g),p.sub(g);const B=1/(h.x*p.y-p.x*h.y);isFinite(B)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(B),S.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(B),c[I].add(v),c[j].add(v),c[z].add(v),u[I].add(S),u[j].add(S),u[z].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let I=0,j=M.length;I<j;++I){const z=M[I],B=z.start,F=z.count;for(let Y=B,oe=B+F;Y<oe;Y+=3)_(i[Y+0],i[Y+1],i[Y+2])}const T=new q,L=new q,N=new q,b=new q;function C(I){N.fromArray(s,I*3),b.copy(N);const j=c[I];T.copy(j),T.sub(N.multiplyScalar(N.dot(j))).normalize(),L.crossVectors(b,j);const B=L.dot(u[I])<0?-1:1;l[I*4]=T.x,l[I*4+1]=T.y,l[I*4+2]=T.z,l[I*4+3]=B}for(let I=0,j=M.length;I<j;++I){const z=M[I],B=z.start,F=z.count;for(let Y=B,oe=B+F;Y<oe;Y+=3)C(i[Y+0]),C(i[Y+1]),C(i[Y+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,h),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let v=0;v<u;v++)d[g++]=c[m++]}return new Hn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new Ft,Fn=new CT,zo=new du,Zd=new q,As=new q,Cs=new q,Rs=new q,Rl=new q,Uo=new q,ko=new ct,Vo=new ct,Go=new ct,Ll=new q,Ho=new q;class Ri extends un{constructor(e=new Tr,t=new ng){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Rl.fromBufferAttribute(f,e),o?Uo.addScaledVector(Rl,u):Uo.addScaledVector(Rl.sub(t),u))}t.add(Uo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(s),Fn.copy(e.ray).recast(e.near),zo.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(zo,Zd)===null||Fn.origin.distanceToSquared(Zd)>(e.far-e.near)**2))||(Yd.copy(s).invert(),Fn.copy(e.ray).applyMatrix4(Yd),i.boundingBox!==null&&Fn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=r[h.materialIndex],v=Math.max(h.start,d.start),S=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let _=v,M=S;_<M;_+=3){const T=a.getX(_),L=a.getX(_+1),N=a.getX(_+2);o=Wo(this,p,e,Fn,c,u,T,L,N),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const v=a.getX(h),S=a.getX(h+1),_=a.getX(h+2);o=Wo(this,r,e,Fn,c,u,v,S,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){const h=f[m],p=r[h.materialIndex],v=Math.max(h.start,d.start),S=Math.min(l.count,Math.min(h.start+h.count,d.start+d.count));for(let _=v,M=S;_<M;_+=3){const T=_,L=_+1,N=_+2;o=Wo(this,p,e,Fn,c,u,T,L,N),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let h=m,p=g;h<p;h+=3){const v=h,S=h+1,_=h+2;o=Wo(this,r,e,Fn,c,u,v,S,_),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function BT(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;Ho.copy(a),Ho.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:n}}function Wo(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,As),n.getVertexPosition(a,Cs),n.getVertexPosition(l,Rs);const c=BT(n,e,t,i,As,Cs,Rs,Ll);if(c){r&&(ko.fromBufferAttribute(r,o),Vo.fromBufferAttribute(r,a),Go.fromBufferAttribute(r,l),c.uv=ci.getUV(Ll,As,Cs,Rs,ko,Vo,Go,new ct)),s&&(ko.fromBufferAttribute(s,o),Vo.fromBufferAttribute(s,a),Go.fromBufferAttribute(s,l),c.uv2=ci.getUV(Ll,As,Cs,Rs,ko,Vo,Go,new ct));const u={a:o,b:a,c:l,normal:new q,materialIndex:0};ci.getNormal(As,Cs,Rs,u.normal),c.face=u}return c}class vo extends Tr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(f,2));function g(h,p,v,S,_,M,T,L,N,b,C){const I=M/N,j=T/b,z=M/2,B=T/2,F=L/2,Y=N+1,oe=b+1;let ce=0,Z=0;const le=new q;for(let de=0;de<oe;de++){const we=de*j-B;for(let W=0;W<Y;W++){const ue=W*I-z;le[h]=ue*S,le[p]=we*_,le[v]=F,c.push(le.x,le.y,le.z),le[h]=0,le[p]=0,le[v]=L>0?1:-1,u.push(le.x,le.y,le.z),f.push(W/N),f.push(1-de/b),ce+=1}}for(let de=0;de<b;de++)for(let we=0;we<N;we++){const W=d+we+Y*de,ue=d+we+Y*(de+1),ye=d+(we+1)+Y*(de+1),A=d+(we+1)+Y*de;l.push(W,ue,A),l.push(ue,ye,A),Z+=6}a.addGroup(m,Z,C),m+=Z,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function $t(n){const e={};for(let t=0;t<n.length;t++){const i=ls(n[t]);for(const r in i)e[r]=i[r]}return e}function zT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sg(n){return n.getRenderTarget()===null&&n.outputEncoding===ot?Nn:co}const UT={clone:ls,merge:$t};var kT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kT,this.fragmentShader=VT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=zT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class og extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends og{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zr=-90,Ur=1;class GT extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new wn(zr,Ur,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new wn(zr,Ur,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new wn(zr,Ur,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new wn(zr,Ur,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new wn(zr,Ur,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new wn(zr,Ur,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ui,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ag extends cn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HT extends _r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ag(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vo(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ii});s.uniforms.tEquirect.value=t;const o=new Ri(r,s),a=t.minFilter;return t.minFilter===ao&&(t.minFilter=mn),new GT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Pl=new q,WT=new q,$T=new jt;class Ji{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pl.subVectors(i,t).cross(WT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$T.getNormalMatrix(e),r=this.coplanarPoint(Pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kr=new du,$o=new q;class lg{constructor(e=new Ji,t=new Ji,i=new Ji,r=new Ji,s=new Ji,o=new Ji){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7],d=i[8],m=i[9],g=i[10],h=i[11],p=i[12],v=i[13],S=i[14],_=i[15];return t[0].setComponents(a-r,f-l,h-d,_-p).normalize(),t[1].setComponents(a+r,f+l,h+d,_+p).normalize(),t[2].setComponents(a+s,f+c,h+m,_+v).normalize(),t[3].setComponents(a-s,f-c,h-m,_-v).normalize(),t[4].setComponents(a-o,f-u,h-g,_-S).normalize(),t[5].setComponents(a+o,f+u,h+g,_+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSprite(e){return kr.center.set(0,0,0),kr.radius=.7071067811865476,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class hu extends Tr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],h=[],p=[];for(let v=0;v<u;v++){const S=v*d-o;for(let _=0;_<c;_++){const M=_*f-s;g.push(M,-S,0),h.push(0,0,1),p.push(_/a),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<a;S++){const _=S+c*v,M=S+c*(v+1),T=S+1+c*(v+1),L=S+1+c*v;m.push(_,M,L),m.push(M,T,L)}this.setIndex(m),this.setAttribute("position",new dr(g,3)),this.setAttribute("normal",new dr(h,3)),this.setAttribute("uv",new dr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}var jT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,XT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,YT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT="vec3 transformed = vec3( position );",e3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t3=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
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
#endif`,n3=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i3=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,f3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,d3=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,h3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,p3=`vec3 transformedNormal = objectNormal;
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
#endif`,m3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x3="gl_FragColor = linearToOutputTexel( gl_FragColor );",y3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b3=`#ifdef USE_ENVMAP
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
#endif`,S3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E3=`#ifdef USE_ENVMAP
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
#endif`,T3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P3=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,D3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F3=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,N3=`#if defined( USE_ENVMAP )
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
#endif`,B3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
#endif`,G3=`struct PhysicalMaterial {
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
}`,H3=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,W3=`#if defined( RE_IndirectDiffuse )
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
#endif`,$3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,q3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j3=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,K3=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Y3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iA=`#ifdef USE_MORPHNORMALS
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
#endif`,rA=`#ifdef USE_MORPHTARGETS
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
#endif`,sA=`#ifdef USE_MORPHTARGETS
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
#endif`,oA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
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
vec3 geometryNormal = normal;`,aA=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
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
#endif`,dA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,pA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,mA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_A=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
}`,vA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AA=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,LA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
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
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,BA=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
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
#endif`,zA=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,UA=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,kA=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,VA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,GA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,HA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,WA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ZA=`#include <common>
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
}`,JA=`#if DEPTH_PACKING == 3200
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
}`,QA=`#define DISTANCE
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
}`,eC=`#define DISTANCE
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
}`,tC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,iC=`uniform float scale;
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
}`,rC=`uniform vec3 diffuse;
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
}`,sC=`#include <common>
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
}`,oC=`uniform vec3 diffuse;
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
}`,aC=`#define LAMBERT
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
}`,lC=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cC=`#define MATCAP
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
}`,uC=`#define MATCAP
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
}`,fC=`#define NORMAL
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
}`,dC=`#define NORMAL
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
}`,hC=`#define PHONG
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
}`,pC=`#define PHONG
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
}`,mC=`#define STANDARD
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
}`,gC=`#define STANDARD
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
}`,_C=`#define TOON
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
}`,vC=`#define TOON
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
}`,xC=`uniform float size;
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
}`,yC=`uniform vec3 diffuse;
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
}`,bC=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
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
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,MC=`uniform float rotation;
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
}`,wC=`uniform vec3 diffuse;
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
}`,Be={alphamap_fragment:jT,alphamap_pars_fragment:XT,alphatest_fragment:KT,alphatest_pars_fragment:YT,aomap_fragment:ZT,aomap_pars_fragment:JT,begin_vertex:QT,beginnormal_vertex:e3,bsdfs:t3,iridescence_fragment:n3,bumpmap_pars_fragment:i3,clipping_planes_fragment:r3,clipping_planes_pars_fragment:s3,clipping_planes_pars_vertex:o3,clipping_planes_vertex:a3,color_fragment:l3,color_pars_fragment:c3,color_pars_vertex:u3,color_vertex:f3,common:d3,cube_uv_reflection_fragment:h3,defaultnormal_vertex:p3,displacementmap_pars_vertex:m3,displacementmap_vertex:g3,emissivemap_fragment:_3,emissivemap_pars_fragment:v3,encodings_fragment:x3,encodings_pars_fragment:y3,envmap_fragment:b3,envmap_common_pars_fragment:S3,envmap_pars_fragment:M3,envmap_pars_vertex:w3,envmap_physical_pars_fragment:N3,envmap_vertex:E3,fog_vertex:T3,fog_pars_vertex:A3,fog_fragment:C3,fog_pars_fragment:R3,gradientmap_pars_fragment:L3,lightmap_fragment:P3,lightmap_pars_fragment:D3,lights_lambert_fragment:I3,lights_lambert_pars_fragment:O3,lights_pars_begin:F3,lights_toon_fragment:B3,lights_toon_pars_fragment:z3,lights_phong_fragment:U3,lights_phong_pars_fragment:k3,lights_physical_fragment:V3,lights_physical_pars_fragment:G3,lights_fragment_begin:H3,lights_fragment_maps:W3,lights_fragment_end:$3,logdepthbuf_fragment:q3,logdepthbuf_pars_fragment:j3,logdepthbuf_pars_vertex:X3,logdepthbuf_vertex:K3,map_fragment:Y3,map_pars_fragment:Z3,map_particle_fragment:J3,map_particle_pars_fragment:Q3,metalnessmap_fragment:eA,metalnessmap_pars_fragment:tA,morphcolor_vertex:nA,morphnormal_vertex:iA,morphtarget_pars_vertex:rA,morphtarget_vertex:sA,normal_fragment_begin:oA,normal_fragment_maps:aA,normal_pars_fragment:lA,normal_pars_vertex:cA,normal_vertex:uA,normalmap_pars_fragment:fA,clearcoat_normal_fragment_begin:dA,clearcoat_normal_fragment_maps:hA,clearcoat_pars_fragment:pA,iridescence_pars_fragment:mA,output_fragment:gA,packing:_A,premultiplied_alpha_fragment:vA,project_vertex:xA,dithering_fragment:yA,dithering_pars_fragment:bA,roughnessmap_fragment:SA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:wA,shadowmap_pars_vertex:EA,shadowmap_vertex:TA,shadowmask_pars_fragment:AA,skinbase_vertex:CA,skinning_pars_vertex:RA,skinning_vertex:LA,skinnormal_vertex:PA,specularmap_fragment:DA,specularmap_pars_fragment:IA,tonemapping_fragment:OA,tonemapping_pars_fragment:FA,transmission_fragment:NA,transmission_pars_fragment:BA,uv_pars_fragment:zA,uv_pars_vertex:UA,uv_vertex:kA,uv2_pars_fragment:VA,uv2_pars_vertex:GA,uv2_vertex:HA,worldpos_vertex:WA,background_vert:$A,background_frag:qA,backgroundCube_vert:jA,backgroundCube_frag:XA,cube_vert:KA,cube_frag:YA,depth_vert:ZA,depth_frag:JA,distanceRGBA_vert:QA,distanceRGBA_frag:eC,equirect_vert:tC,equirect_frag:nC,linedashed_vert:iC,linedashed_frag:rC,meshbasic_vert:sC,meshbasic_frag:oC,meshlambert_vert:aC,meshlambert_frag:lC,meshmatcap_vert:cC,meshmatcap_frag:uC,meshnormal_vert:fC,meshnormal_frag:dC,meshphong_vert:hC,meshphong_frag:pC,meshphysical_vert:mC,meshphysical_frag:gC,meshtoon_vert:_C,meshtoon_frag:vC,points_vert:xC,points_frag:yC,shadow_vert:bC,shadow_frag:SC,sprite_vert:MC,sprite_frag:wC},Me={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},zn={basic:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ut(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new ut(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([Me.points,Me.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([Me.common,Me.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([Me.sprite,Me.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:$t([Me.common,Me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:$t([Me.lights,Me.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};zn.physical={uniforms:$t([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ct(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const qo={r:0,b:0,g:0};function EC(n,e,t,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,u,f=null,d=0,m=null;function g(p,v){let S=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const M=n.xr,T=M.getSession&&M.getSession();T&&T.environmentBlendMode==="additive"&&(_=null),_===null?h(a,l):_&&_.isColor&&(h(_,1),S=!0),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===La)?(u===void 0&&(u=new Ri(new vo(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:ls(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,N,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==ot,(f!==_||d!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ri(new hu(2,2),new vr({name:"BackgroundMaterial",uniforms:ls(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==ot,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function h(p,v){p.getRGB(qo,sg(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(p,v=1){a.set(p),l=v,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:g}}function TC(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(F,Y,oe,ce,Z){let le=!1;if(o){const de=h(ce,oe,Y);c!==de&&(c=de,m(c.object)),le=v(F,ce,oe,Z),le&&S(F,ce,oe,Z)}else{const de=Y.wireframe===!0;(c.geometry!==ce.id||c.program!==oe.id||c.wireframe!==de)&&(c.geometry=ce.id,c.program=oe.id,c.wireframe=de,le=!0)}Z!==null&&t.update(Z,34963),(le||u)&&(u=!1,b(F,Y,oe,ce),Z!==null&&n.bindBuffer(34963,t.get(Z).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function h(F,Y,oe){const ce=oe.wireframe===!0;let Z=a[F.id];Z===void 0&&(Z={},a[F.id]=Z);let le=Z[Y.id];le===void 0&&(le={},Z[Y.id]=le);let de=le[ce];return de===void 0&&(de=p(d()),le[ce]=de),de}function p(F){const Y=[],oe=[],ce=[];for(let Z=0;Z<r;Z++)Y[Z]=0,oe[Z]=0,ce[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:oe,attributeDivisors:ce,object:F,attributes:{},index:null}}function v(F,Y,oe,ce){const Z=c.attributes,le=Y.attributes;let de=0;const we=oe.getAttributes();for(const W in we)if(we[W].location>=0){const ye=Z[W];let A=le[W];if(A===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(A=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(A=F.instanceColor)),ye===void 0||ye.attribute!==A||A&&ye.data!==A.data)return!0;de++}return c.attributesNum!==de||c.index!==ce}function S(F,Y,oe,ce){const Z={},le=Y.attributes;let de=0;const we=oe.getAttributes();for(const W in we)if(we[W].location>=0){let ye=le[W];ye===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor));const A={};A.attribute=ye,ye&&ye.data&&(A.data=ye.data),Z[W]=A,de++}c.attributes=Z,c.attributesNum=de,c.index=ce}function _(){const F=c.newAttributes;for(let Y=0,oe=F.length;Y<oe;Y++)F[Y]=0}function M(F){T(F,0)}function T(F,Y){const oe=c.newAttributes,ce=c.enabledAttributes,Z=c.attributeDivisors;oe[F]=1,ce[F]===0&&(n.enableVertexAttribArray(F),ce[F]=1),Z[F]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),Z[F]=Y)}function L(){const F=c.newAttributes,Y=c.enabledAttributes;for(let oe=0,ce=Y.length;oe<ce;oe++)Y[oe]!==F[oe]&&(n.disableVertexAttribArray(oe),Y[oe]=0)}function N(F,Y,oe,ce,Z,le){i.isWebGL2===!0&&(oe===5124||oe===5125)?n.vertexAttribIPointer(F,Y,oe,Z,le):n.vertexAttribPointer(F,Y,oe,ce,Z,le)}function b(F,Y,oe,ce){if(i.isWebGL2===!1&&(F.isInstancedMesh||ce.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Z=ce.attributes,le=oe.getAttributes(),de=Y.defaultAttributeValues;for(const we in le){const W=le[we];if(W.location>=0){let ue=Z[we];if(ue===void 0&&(we==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),we==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const ye=ue.normalized,A=ue.itemSize,$=t.get(ue);if($===void 0)continue;const P=$.buffer,H=$.type,re=$.bytesPerElement;if(ue.isInterleavedBufferAttribute){const me=ue.data,_e=me.stride,w=ue.offset;if(me.isInstancedInterleavedBuffer){for(let R=0;R<W.locationSize;R++)T(W.location+R,me.meshPerAttribute);F.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let R=0;R<W.locationSize;R++)M(W.location+R);n.bindBuffer(34962,P);for(let R=0;R<W.locationSize;R++)N(W.location+R,A/W.locationSize,H,ye,_e*re,(w+A/W.locationSize*R)*re)}else{if(ue.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)T(W.location+me,ue.meshPerAttribute);F.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<W.locationSize;me++)M(W.location+me);n.bindBuffer(34962,P);for(let me=0;me<W.locationSize;me++)N(W.location+me,A/W.locationSize,H,ye,A*re,A/W.locationSize*me*re)}}else if(de!==void 0){const ye=de[we];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(W.location,ye);break;case 3:n.vertexAttrib3fv(W.location,ye);break;case 4:n.vertexAttrib4fv(W.location,ye);break;default:n.vertexAttrib1fv(W.location,ye)}}}}L()}function C(){z();for(const F in a){const Y=a[F];for(const oe in Y){const ce=Y[oe];for(const Z in ce)g(ce[Z].object),delete ce[Z];delete Y[oe]}delete a[F]}}function I(F){if(a[F.id]===void 0)return;const Y=a[F.id];for(const oe in Y){const ce=Y[oe];for(const Z in ce)g(ce[Z].object),delete ce[Z];delete Y[oe]}delete a[F.id]}function j(F){for(const Y in a){const oe=a[Y];if(oe[F.id]===void 0)continue;const ce=oe[F.id];for(const Z in ce)g(ce[Z].object),delete ce[Z];delete oe[F.id]}}function z(){B(),u=!0,c!==l&&(c=l,m(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:j,initAttributes:_,enableAttribute:M,disableUnusedAttributes:L}}function AC(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function CC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(N){if(N==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),S=n.getParameter(36349),_=d>0,M=o||e.has("OES_texture_float"),T=_&&M,L=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:T,maxSamples:L}}function RC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ji,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,v=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,_=S*4;let M=v.clippingState||null;l.value=M,M=u(g,d,_,m);for(let T=0;T!==_;++T)M[T]=t[T];v.clippingState=M,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,m,g){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const v=m+h*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,M=m;_!==h;++_,M+=4)o.copy(f[_]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function LC(n){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=ss:a===pc&&(o.mapping=os),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new HT(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class PC extends og{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $r=4,Jd=[.125,.215,.35,.446,.526,.582],rr=20,Dl=new PC,Qd=new ut;let Il=null;const Qi=(1+Math.sqrt(5))/2,Vr=1/Qi,eh=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Qi,Vr),new q(0,Qi,-Vr),new q(Vr,0,Qi),new q(-Vr,0,Qi),new q(Qi,Vr,0),new q(-Qi,Vr,0)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Il=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il),e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:lo,format:An,encoding:gr,depthBuffer:!1},r=nh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DC(s)),this._blurMaterial=IC(s,e,t)}return r}_compileMaterial(e){const t=new Ri(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Qd),u.toneMapping=ui,u.autoClear=!1;const m=new ng({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Ri(new vo,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Qd),h=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):S===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;jo(r,S*_,v>2?_:0,_,_),u.setRenderTarget(r),h&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ss||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=eh[(r-1)%eh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ri(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),h=s/g,p=isFinite(s)?1+Math.floor(u*h):rr;p>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rr}`);const v=[];let S=0;for(let N=0;N<rr;++N){const b=N/h,C=Math.exp(-b*b/2);v.push(C),N===0?S+=C:N<p&&(S+=2*C)}for(let N=0;N<v.length;N++)v[N]=v[N]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const M=this._sizeLods[r],T=3*M*(r>_-$r?r-_+$r:0),L=4*(this._cubeSize-M);jo(t,T,L,3*M,2*M),l.setRenderTarget(t),l.render(f,Dl)}}function DC(n){const e=[],t=[],i=[];let r=n;const s=n-$r+1+Jd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-$r?l=Jd[o-n+$r-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,h=3,p=2,v=1,S=new Float32Array(h*g*m),_=new Float32Array(p*g*m),M=new Float32Array(v*g*m);for(let L=0;L<m;L++){const N=L%3*2/3-1,b=L>2?0:-1,C=[N,b,0,N+2/3,b,0,N+2/3,b+1,0,N,b,0,N+2/3,b+1,0,N,b+1,0];S.set(C,h*g*L),_.set(d,p*g*L);const I=[L,L,L,L,L,L];M.set(I,v*g*L)}const T=new Tr;T.setAttribute("position",new Hn(S,h)),T.setAttribute("uv",new Hn(_,p)),T.setAttribute("faceIndex",new Hn(M,v)),e.push(T),r>$r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nh(n,e,t){const i=new _r(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function IC(n,e,t){const i=new Float32Array(rr),r=new q(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ih(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function rh(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function OC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hc||l===pc,u=l===ss||l===os;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new th(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new th(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function FC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function NC(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const h=m[g];for(let p=0,v=h.length;p<v;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let h=0;if(m!==null){const S=m.array;h=m.version;for(let _=0,M=S.length;_<M;_+=3){const T=S[_+0],L=S[_+1],N=S[_+2];d.push(T,L,L,N,N,T)}}else{const S=g.array;h=g.version;for(let _=0,M=S.length/3-1;_<M;_+=3){const T=_+0,L=_+1,N=_+2;d.push(T,L,L,N,N,T)}}const p=new(Ym(d)?rg:ig)(d,1);p.version=h;const v=s.get(f);v&&e.remove(v),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function BC(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){n.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function zC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function UC(n,e){return n[0]-e[0]}function kC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function VC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let h=s.get(u);if(h===void 0||h.count!==g){let F=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",F)};h!==void 0&&h.texture.dispose();const S=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let b=0;S===!0&&(b=1),_===!0&&(b=2),M===!0&&(b=3);let C=u.attributes.position.count*b,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const j=new Float32Array(C*I*4*g),z=new Qm(j,C,I,g);z.type=cr,z.needsUpdate=!0;const B=b*4;for(let Y=0;Y<g;Y++){const oe=T[Y],ce=L[Y],Z=N[Y],le=C*I*4*Y;for(let de=0;de<oe.count;de++){const we=de*B;S===!0&&(o.fromBufferAttribute(oe,de),j[le+we+0]=o.x,j[le+we+1]=o.y,j[le+we+2]=o.z,j[le+we+3]=0),_===!0&&(o.fromBufferAttribute(ce,de),j[le+we+4]=o.x,j[le+we+5]=o.y,j[le+we+6]=o.z,j[le+we+7]=0),M===!0&&(o.fromBufferAttribute(Z,de),j[le+we+8]=o.x,j[le+we+9]=o.y,j[le+we+10]=o.z,j[le+we+11]=Z.itemSize===4?o.w:1)}}h={count:g,texture:z,size:new ct(C,I)},s.set(u,h),u.addEventListener("dispose",F)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];const v=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}else{const m=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<m;_++){const M=g[_];M[0]=_,M[1]=d[_]}g.sort(kC);for(let _=0;_<8;_++)_<m&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(UC);const h=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let _=0;_<8;_++){const M=a[_],T=M[0],L=M[1];T!==Number.MAX_SAFE_INTEGER&&L?(h&&u.getAttribute("morphTarget"+_)!==h[T]&&u.setAttribute("morphTarget"+_,h[T]),p&&u.getAttribute("morphNormal"+_)!==p[T]&&u.setAttribute("morphNormal"+_,p[T]),r[_]=L,v+=L):(h&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const S=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function GC(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ug=new cn,fg=new Qm,dg=new TT,hg=new ag,sh=[],oh=[],ah=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function gs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=sh[r];if(s===void 0&&(s=new Float32Array(r),sh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ia(n,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function qC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function jC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;ch.set(i),n.uniformMatrix2fv(this.addr,!1,ch),wt(t,i)}}function XC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;lh.set(i),n.uniformMatrix3fv(this.addr,!1,lh),wt(t,i)}}function KC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;ah.set(i),n.uniformMatrix4fv(this.addr,!1,ah),wt(t,i)}}function YC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function JC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function QC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function eR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function nR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function iR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function rR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||ug,r)}function sR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||dg,r)}function oR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||hg,r)}function aR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||fg,r)}function lR(n){switch(n){case 5126:return HC;case 35664:return WC;case 35665:return $C;case 35666:return qC;case 35674:return jC;case 35675:return XC;case 35676:return KC;case 5124:case 35670:return YC;case 35667:case 35671:return ZC;case 35668:case 35672:return JC;case 35669:case 35673:return QC;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}function cR(n,e){n.uniform1fv(this.addr,e)}function uR(n,e){const t=gs(e,this.size,2);n.uniform2fv(this.addr,t)}function fR(n,e){const t=gs(e,this.size,3);n.uniform3fv(this.addr,t)}function dR(n,e){const t=gs(e,this.size,4);n.uniform4fv(this.addr,t)}function hR(n,e){const t=gs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pR(n,e){const t=gs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mR(n,e){const t=gs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gR(n,e){n.uniform1iv(this.addr,e)}function _R(n,e){n.uniform2iv(this.addr,e)}function vR(n,e){n.uniform3iv(this.addr,e)}function xR(n,e){n.uniform4iv(this.addr,e)}function yR(n,e){n.uniform1uiv(this.addr,e)}function bR(n,e){n.uniform2uiv(this.addr,e)}function SR(n,e){n.uniform3uiv(this.addr,e)}function MR(n,e){n.uniform4uiv(this.addr,e)}function wR(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ug,s[o])}function ER(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||dg,s[o])}function TR(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hg,s[o])}function AR(n,e,t){const i=this.cache,r=e.length,s=Ia(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||fg,s[o])}function CR(n){switch(n){case 5126:return cR;case 35664:return uR;case 35665:return fR;case 35666:return dR;case 35674:return hR;case 35675:return pR;case 35676:return mR;case 5124:case 35670:return gR;case 35667:case 35671:return _R;case 35668:case 35672:return vR;case 35669:case 35673:return xR;case 5125:return yR;case 36294:return bR;case 36295:return SR;case 36296:return MR;case 35678:case 36198:case 36298:case 36306:case 35682:return wR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return AR}}class RR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=lR(t.type)}}class LR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=CR(t.type)}}class PR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function uh(n,e){n.seq.push(e),n.map[e.id]=e}function DR(n,e,t){const i=n.name,r=i.length;for(Ol.lastIndex=0;;){const s=Ol.exec(i),o=Ol.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){uh(t,c===void 0?new RR(a,n,e):new LR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new PR(a),uh(t,f)),t=f}}}class na{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);DR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function fh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let IR=0;function OR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function FR(n){switch(n){case gr:return["Linear","( value )"];case ot:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function dh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+OR(n.getShaderSource(e),o)}else return r}function NR(n,e){const t=FR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function BR(n,e){let t;switch(e){case $E:t="Linear";break;case qE:t="Reinhard";break;case jE:t="OptimizedCineon";break;case XE:t="ACESFilmic";break;case KE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function UR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kR(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Os(n){return n!==""}function hh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VR=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(VR,GR)}function GR(n,e){const t=Be[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vc(t)}const HR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(n){return n.replace(HR,WR)}function WR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $R(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ME?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Is&&(e="SHADOWMAP_TYPE_VSM"),e}function qR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ss:case os:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function XR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qm:e="ENVMAP_BLENDING_MULTIPLY";break;case HE:e="ENVMAP_BLENDING_MIX";break;case WE:e="ENVMAP_BLENDING_ADD";break}return e}function KR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function YR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=$R(t),c=qR(t),u=jR(t),f=XR(t),d=KR(t),m=t.isWebGL2?"":zR(t),g=UR(s),h=r.createProgram();let p,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Os).join(`
`),p.length>0&&(p+=`
`),v=[m,g].filter(Os).join(`
`),v.length>0&&(v+=`
`)):(p=[gh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),v=[m,gh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?Be.tonemapping_pars_fragment:"",t.toneMapping!==ui?BR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.encodings_pars_fragment,NR("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),o=vc(o),o=hh(o,t),o=ph(o,t),a=vc(a),a=hh(a,t),a=ph(a,t),o=mh(o),a=mh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=S+p+o,M=S+v+a,T=fh(r,35633,_),L=fh(r,35632,M);if(r.attachShader(h,T),r.attachShader(h,L),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),I=r.getShaderInfoLog(T).trim(),j=r.getShaderInfoLog(L).trim();let z=!0,B=!0;if(r.getProgramParameter(h,35714)===!1){z=!1;const F=dh(r,T,"vertex"),Y=dh(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+F+`
`+Y)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||j==="")&&(B=!1);B&&(this.diagnostics={runnable:z,programLog:C,vertexShader:{log:I,prefix:p},fragmentShader:{log:j,prefix:v}})}r.deleteShader(T),r.deleteShader(L);let N;this.getUniforms=function(){return N===void 0&&(N=new na(r,h)),N};let b;return this.getAttributes=function(){return b===void 0&&(b=kR(r,h)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=IR++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=T,this.fragmentShader=L,this}let ZR=0;class JR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QR(e),t.set(e,i)),i}}class QR{constructor(e){this.id=ZR++,this.code=e,this.usedTimes=0}}function eL(n,e,t,i,r,s,o){const a=new eg,l=new JR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b,C,I,j,z){const B=j.fog,F=z.geometry,Y=b.isMeshStandardMaterial?j.environment:null,oe=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),ce=oe&&oe.mapping===La?oe.image.height:null,Z=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,de=le!==void 0?le.length:0;let we=0;F.morphAttributes.position!==void 0&&(we=1),F.morphAttributes.normal!==void 0&&(we=2),F.morphAttributes.color!==void 0&&(we=3);let W,ue,ye,A;if(Z){const _e=zn[Z];W=_e.vertexShader,ue=_e.fragmentShader}else W=b.vertexShader,ue=b.fragmentShader,l.update(b),ye=l.getVertexShaderID(b),A=l.getFragmentShaderID(b);const $=n.getRenderTarget(),P=b.alphaTest>0,H=b.clearcoat>0,re=b.iridescence>0;return{isWebGL2:u,shaderID:Z,shaderName:b.type,vertexShader:W,fragmentShader:ue,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:A,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$===null?n.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:gr,map:!!b.map,matcap:!!b.matcap,envMap:!!oe,envMapMode:oe&&oe.mapping,envMapCubeUVHeight:ce,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===mT,tangentSpaceNormalMap:b.normalMapType===pT,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===ot,clearcoat:H,clearcoatMap:H&&!!b.clearcoatMap,clearcoatRoughnessMap:H&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:H&&!!b.clearcoatNormalMap,iridescence:re,iridescenceMap:re&&!!b.iridescenceMap,iridescenceThicknessMap:re&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Yr,alphaMap:!!b.alphaMap,alphaTest:P,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!F.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!B,useFog:b.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:we,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:ui,useLegacyLights:n.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ai,flipSided:b.side===ln,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)C.push(I),C.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(C,b),S(C,b),C.push(n.outputEncoding)),C.push(b.customProgramCacheKey),C.join()}function v(b,C){b.push(C.precision),b.push(C.outputEncoding),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.combine),b.push(C.vertexUvs),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function S(b,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.useLegacyLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),b.push(a.mask)}function _(b){const C=g[b.type];let I;if(C){const j=zn[C];I=UT.clone(j.uniforms)}else I=b.uniforms;return I}function M(b,C){let I;for(let j=0,z=c.length;j<z;j++){const B=c[j];if(B.cacheKey===C){I=B,++I.usedTimes;break}}return I===void 0&&(I=new YR(n,C,b,s),c.push(I)),I}function T(b){if(--b.usedTimes===0){const C=c.indexOf(b);c[C]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function N(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:_,acquireProgram:M,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:N}}function tL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function nL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,m,g,h,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:h,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=h,v.group=p),e++,v}function a(f,d,m,g,h,p){const v=o(f,d,m,g,h,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,d,m,g,h,p){const v=o(f,d,m,g,h,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,d){t.length>1&&t.sort(f||nL),i.length>1&&i.sort(d||_h),r.length>1&&r.sort(d||_h)}function u(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function iL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new vh,n.set(i,[o])):r>=s.length?(o=new vh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function rL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ut};break;case"SpotLight":t={position:new q,direction:new q,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function sL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oL=0;function aL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lL(n,e){const t=new rL,i=sL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,o=new Ft,a=new Ft;function l(u,f){let d=0,m=0,g=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let h=0,p=0,v=0,S=0,_=0,M=0,T=0,L=0,N=0,b=0;u.sort(aL);const C=f===!0?Math.PI:1;for(let j=0,z=u.length;j<z;j++){const B=u[j],F=B.color,Y=B.intensity,oe=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=F.r*Y*C,m+=F.g*Y*C,g+=F.b*Y*C;else if(B.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(B.sh.coefficients[Z],Y);else if(B.isDirectionalLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const le=B.shadow,de=i.get(B);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,r.directionalShadow[h]=de,r.directionalShadowMap[h]=ce,r.directionalShadowMatrix[h]=B.shadow.matrix,M++}r.directional[h]=Z,h++}else if(B.isSpotLight){const Z=t.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(F).multiplyScalar(Y*C),Z.distance=oe,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,r.spot[v]=Z;const le=B.shadow;if(B.map&&(r.spotLightMap[N]=B.map,N++,le.updateMatrices(B),B.castShadow&&b++),r.spotLightMatrix[v]=le.matrix,B.castShadow){const de=i.get(B);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,r.spotShadow[v]=de,r.spotShadowMap[v]=ce,L++}v++}else if(B.isRectAreaLight){const Z=t.get(B);Z.color.copy(F).multiplyScalar(Y),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=Z,S++}else if(B.isPointLight){const Z=t.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity*C),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const le=B.shadow,de=i.get(B);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,r.pointShadow[p]=de,r.pointShadowMap[p]=ce,r.pointShadowMatrix[p]=B.shadow.matrix,T++}r.point[p]=Z,p++}else if(B.isHemisphereLight){const Z=t.get(B);Z.skyColor.copy(B.color).multiplyScalar(Y*C),Z.groundColor.copy(B.groundColor).multiplyScalar(Y*C),r.hemi[_]=Z,_++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==h||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==S||I.hemiLength!==_||I.numDirectionalShadows!==M||I.numPointShadows!==T||I.numSpotShadows!==L||I.numSpotMaps!==N)&&(r.directional.length=h,r.spot.length=v,r.rectArea.length=S,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=L+N-b,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=b,I.directionalLength=h,I.pointLength=p,I.spotLength=v,I.rectAreaLength=S,I.hemiLength=_,I.numDirectionalShadows=M,I.numPointShadows=T,I.numSpotShadows=L,I.numSpotMaps=N,r.version=oL++)}function c(u,f){let d=0,m=0,g=0,h=0,p=0;const v=f.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const M=u[S];if(M.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),d++}else if(M.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(v),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(v),g++}else if(M.isRectAreaLight){const T=r.rectArea[h];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(v),a.identity(),o.copy(M.matrixWorld),o.premultiply(v),a.extractRotation(o),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),h++}else if(M.isPointLight){const T=r.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(v),m++}else if(M.isHemisphereLight){const T=r.hemi[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function xh(n,e){const t=new lL(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new xh(n,e),t.set(s,[l])):o>=a.length?(l=new xh(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class uL extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fL extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hL=`uniform sampler2D shadow_pass;
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
}`;function pL(n,e,t){let i=new lg;const r=new ct,s=new ct,o=new It,a=new uL({depthPacking:hT}),l=new fL,c={},u=t.maxTextureSize,f={[zi]:ln,[ln]:zi,[Ai]:Ai},d=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:dL,fragmentShader:hL}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Tr;g.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new Ri(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hm,this.render=function(M,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const N=n.getRenderTarget(),b=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ii),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let j=0,z=M.length;j<z;j++){const B=M[j],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const Y=F.getFrameExtents();if(r.multiply(Y),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,F.mapSize.y=s.y)),F.map===null){const ce=this.type!==Is?{minFilter:qt,magFilter:qt}:{};F.map=new _r(r.x,r.y,ce),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const oe=F.getViewportCount();for(let ce=0;ce<oe;ce++){const Z=F.getViewport(ce);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),I.viewport(o),F.updateMatrices(B,ce),i=F.getFrustum(),_(T,L,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===Is&&v(F,L),F.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(N,b,C)};function v(M,T){const L=e.update(h);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _r(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(T,null,L,d,h,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(T,null,L,m,h,null)}function S(M,T,L,N,b,C){let I=null;const j=L.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(j!==void 0)I=j;else if(I=L.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=I.uuid,B=T.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let Y=F[B];Y===void 0&&(Y=I.clone(),F[B]=Y),I=Y}return I.visible=T.visible,I.wireframe=T.wireframe,C===Is?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:f[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,L.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(L.matrixWorld),I.nearDistance=N,I.farDistance=b),I}function _(M,T,L,N,b){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Is)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,M.matrixWorld);const j=e.update(M),z=M.material;if(Array.isArray(z)){const B=j.groups;for(let F=0,Y=B.length;F<Y;F++){const oe=B[F],ce=z[oe.materialIndex];if(ce&&ce.visible){const Z=S(M,ce,N,L.near,L.far,b);n.renderBufferDirect(L,null,j,Z,M,oe)}}}else if(z.visible){const B=S(M,z,N,L.near,L.far,b);n.renderBufferDirect(L,null,j,B,M,null)}}const I=M.children;for(let j=0,z=I.length;j<z;j++)_(I[j],T,L,N,b)}}function mL(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const te=new It;let ge=null;const Te=new It(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!D&&(n.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,st,Tt,Vt,Dn){Dn===!0&&(Ce*=Vt,st*=Vt,Tt*=Vt),te.set(Ce,st,Tt,Vt),Te.equals(te)===!1&&(n.clearColor(Ce,st,Tt,Vt),Te.copy(te))},reset:function(){D=!1,ge=null,Te.set(-1,0,0,0)}}}function s(){let D=!1,te=null,ge=null,Te=null;return{setTest:function(Ce){Ce?P(2929):H(2929)},setMask:function(Ce){te!==Ce&&!D&&(n.depthMask(Ce),te=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case NE:n.depthFunc(512);break;case BE:n.depthFunc(519);break;case zE:n.depthFunc(513);break;case dc:n.depthFunc(515);break;case UE:n.depthFunc(514);break;case kE:n.depthFunc(518);break;case VE:n.depthFunc(516);break;case GE:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Te!==Ce&&(n.clearDepth(Ce),Te=Ce)},reset:function(){D=!1,te=null,ge=null,Te=null}}}function o(){let D=!1,te=null,ge=null,Te=null,Ce=null,st=null,Tt=null,Vt=null,Dn=null;return{setTest:function(pt){D||(pt?P(2960):H(2960))},setMask:function(pt){te!==pt&&!D&&(n.stencilMask(pt),te=pt)},setFunc:function(pt,dn,In){(ge!==pt||Te!==dn||Ce!==In)&&(n.stencilFunc(pt,dn,In),ge=pt,Te=dn,Ce=In)},setOp:function(pt,dn,In){(st!==pt||Tt!==dn||Vt!==In)&&(n.stencilOp(pt,dn,In),st=pt,Tt=dn,Vt=In)},setLocked:function(pt){D=pt},setClear:function(pt){Dn!==pt&&(n.clearStencil(pt),Dn=pt)},reset:function(){D=!1,te=null,ge=null,Te=null,Ce=null,st=null,Tt=null,Vt=null,Dn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,h=[],p=null,v=!1,S=null,_=null,M=null,T=null,L=null,N=null,b=null,C=!1,I=null,j=null,z=null,B=null,F=null;const Y=n.getParameter(35661);let oe=!1,ce=0;const Z=n.getParameter(7938);Z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Z)[1]),oe=ce>=1):Z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),oe=ce>=2);let le=null,de={};const we=n.getParameter(3088),W=n.getParameter(2978),ue=new It().fromArray(we),ye=new It().fromArray(W);function A(D,te,ge){const Te=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(D,Ce),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let st=0;st<ge;st++)n.texImage2D(te+st,0,6408,1,1,0,6408,5121,Te);return Ce}const $={};$[3553]=A(3553,3553,1),$[34067]=A(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),P(2929),l.setFunc(dc),Q(!1),fe(ad),P(2884),G(Ii);function P(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function H(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function re(D,te){return m[D]!==te?(n.bindFramebuffer(D,te),m[D]=te,i&&(D===36009&&(m[36160]=te),D===36160&&(m[36009]=te)),!0):!1}function me(D,te){let ge=h,Te=!1;if(D)if(ge=g.get(te),ge===void 0&&(ge=[],g.set(te,ge)),D.isWebGLMultipleRenderTargets){const Ce=D.texture;if(ge.length!==Ce.length||ge[0]!==36064){for(let st=0,Tt=Ce.length;st<Tt;st++)ge[st]=36064+st;ge.length=Ce.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function _e(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const w={[Hr]:32774,[EE]:32778,[TE]:32779};if(i)w[fd]=32775,w[dd]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(w[fd]=D.MIN_EXT,w[dd]=D.MAX_EXT)}const R={[AE]:0,[CE]:1,[RE]:768,[Wm]:770,[FE]:776,[IE]:774,[PE]:772,[LE]:769,[$m]:771,[OE]:775,[DE]:773};function G(D,te,ge,Te,Ce,st,Tt,Vt){if(D===Ii){v===!0&&(H(3042),v=!1);return}if(v===!1&&(P(3042),v=!0),D!==wE){if(D!==S||Vt!==C){if((_!==Hr||L!==Hr)&&(n.blendEquation(32774),_=Hr,L=Hr),Vt)switch(D){case Yr:n.blendFuncSeparate(1,771,1,771);break;case ld:n.blendFunc(1,1);break;case cd:n.blendFuncSeparate(0,769,0,1);break;case ud:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yr:n.blendFuncSeparate(770,771,1,771);break;case ld:n.blendFunc(770,1);break;case cd:n.blendFuncSeparate(0,769,0,1);break;case ud:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,T=null,N=null,b=null,S=D,C=Vt}return}Ce=Ce||te,st=st||ge,Tt=Tt||Te,(te!==_||Ce!==L)&&(n.blendEquationSeparate(w[te],w[Ce]),_=te,L=Ce),(ge!==M||Te!==T||st!==N||Tt!==b)&&(n.blendFuncSeparate(R[ge],R[Te],R[st],R[Tt]),M=ge,T=Te,N=st,b=Tt),S=D,C=!1}function X(D,te){D.side===Ai?H(2884):P(2884);let ge=D.side===ln;te&&(ge=!ge),Q(ge),D.blending===Yr&&D.transparent===!1?G(Ii):G(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Te=D.stencilWrite;c.setTest(Te),Te&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?P(32926):H(32926)}function Q(D){I!==D&&(D?n.frontFace(2304):n.frontFace(2305),I=D)}function fe(D){D!==bE?(P(2884),D!==j&&(D===ad?n.cullFace(1029):D===SE?n.cullFace(1028):n.cullFace(1032))):H(2884),j=D}function he(D){D!==z&&(oe&&n.lineWidth(D),z=D)}function se(D,te,ge){D?(P(32823),(B!==te||F!==ge)&&(n.polygonOffset(te,ge),B=te,F=ge)):H(32823)}function ve(D){D?P(3089):H(3089)}function ae(D){D===void 0&&(D=33984+Y-1),le!==D&&(n.activeTexture(D),le=D)}function x(D,te,ge){ge===void 0&&(le===null?ge=33984+Y-1:ge=le);let Te=de[ge];Te===void 0&&(Te={type:void 0,texture:void 0},de[ge]=Te),(Te.type!==D||Te.texture!==te)&&(le!==ge&&(n.activeTexture(ge),le=ge),n.bindTexture(D,te||$[D]),Te.type=D,Te.texture=te)}function y(){const D=de[le];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){ue.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function Ee(D){ye.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ye.copy(D))}function Oe(D,te){let ge=f.get(te);ge===void 0&&(ge=new WeakMap,f.set(te,ge));let Te=ge.get(D);Te===void 0&&(Te=n.getUniformBlockIndex(te,D.name),ge.set(D,Te))}function tt(D,te){const Te=f.get(te).get(D);u.get(te)!==Te&&(n.uniformBlockBinding(te,Te,D.__bindingPointIndex),u.set(te,Te))}function Et(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},le=null,de={},m={},g=new WeakMap,h=[],p=null,v=!1,S=null,_=null,M=null,T=null,L=null,N=null,b=null,C=!1,I=null,j=null,z=null,B=null,F=null,ue.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:P,disable:H,bindFramebuffer:re,drawBuffers:me,useProgram:_e,setBlending:G,setMaterial:X,setFlipSided:Q,setCullFace:fe,setLineWidth:he,setPolygonOffset:se,setScissorTest:ve,activeTexture:ae,bindTexture:x,unbindTexture:y,compressedTexImage2D:O,compressedTexImage3D:K,texImage2D:Ae,texImage3D:Pe,updateUBOMapping:Oe,uniformBlockBinding:tt,texStorage2D:ee,texStorage3D:Re,texSubImage2D:ne,texSubImage3D:pe,compressedTexSubImage2D:be,compressedTexSubImage3D:xe,scissor:De,viewport:Ee,reset:Et}}function gL(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(x,y){return v?new OffscreenCanvas(x,y):da("canvas")}function _(x,y,O,K){let ne=1;if((x.width>K||x.height>K)&&(ne=K/Math.max(x.width,x.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const pe=y?vT:Math.floor,be=pe(ne*x.width),xe=pe(ne*x.height);h===void 0&&(h=S(be,xe));const ee=O?S(be,xe):h;return ee.width=be,ee.height=xe,ee.getContext("2d").drawImage(x,0,0,be,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+be+"x"+xe+")."),ee}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function M(x){return kd(x.width)&&kd(x.height)}function T(x){return a?!1:x.wrapS!==Tn||x.wrapT!==Tn||x.minFilter!==qt&&x.minFilter!==mn}function L(x,y){return x.generateMipmaps&&y&&x.minFilter!==qt&&x.minFilter!==mn}function N(x){n.generateMipmap(x)}function b(x,y,O,K,ne=!1){if(a===!1)return y;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let pe=y;return y===6403&&(O===5126&&(pe=33326),O===5131&&(pe=33325),O===5121&&(pe=33321)),y===33319&&(O===5126&&(pe=33328),O===5131&&(pe=33327),O===5121&&(pe=33323)),y===6408&&(O===5126&&(pe=34836),O===5131&&(pe=34842),O===5121&&(pe=K===ot&&ne===!1?35907:32856),O===32819&&(pe=32854),O===32820&&(pe=32855)),(pe===33325||pe===33326||pe===33327||pe===33328||pe===34842||pe===34836)&&e.get("EXT_color_buffer_float"),pe}function C(x,y,O){return L(x,O)===!0||x.isFramebufferTexture&&x.minFilter!==qt&&x.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?y.mipmaps.length:1}function I(x){return x===qt||x===hd||x===rl?9728:9729}function j(x){const y=x.target;y.removeEventListener("dispose",j),B(y),y.isVideoTexture&&g.delete(y)}function z(x){const y=x.target;y.removeEventListener("dispose",z),Y(y)}function B(x){const y=i.get(x);if(y.__webglInit===void 0)return;const O=x.source,K=p.get(O);if(K){const ne=K[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(x),Object.keys(K).length===0&&p.delete(O)}i.remove(x)}function F(x){const y=i.get(x);n.deleteTexture(y.__webglTexture);const O=x.source,K=p.get(O);delete K[y.__cacheKey],o.memory.textures--}function Y(x){const y=x.texture,O=i.get(x),K=i.get(y);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)n.deleteFramebuffer(O.__webglFramebuffer[ne]),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[ne]);else{if(n.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ne=0;ne<O.__webglColorRenderbuffer.length;ne++)O.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ne=0,pe=y.length;ne<pe;ne++){const be=i.get(y[ne]);be.__webglTexture&&(n.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(y[ne])}i.remove(y),i.remove(x)}let oe=0;function ce(){oe=0}function Z(){const x=oe;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),oe+=1,x}function le(x){const y=[];return y.push(x.wrapS),y.push(x.wrapT),y.push(x.wrapR||0),y.push(x.magFilter),y.push(x.minFilter),y.push(x.anisotropy),y.push(x.internalFormat),y.push(x.format),y.push(x.type),y.push(x.generateMipmaps),y.push(x.premultiplyAlpha),y.push(x.flipY),y.push(x.unpackAlignment),y.push(x.encoding),y.join()}function de(x,y){const O=i.get(x);if(x.isVideoTexture&&ve(x),x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){const K=x.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(O,x,y);return}}t.bindTexture(3553,O.__webglTexture,33984+y)}function we(x,y){const O=i.get(x);if(x.version>0&&O.__version!==x.version){H(O,x,y);return}t.bindTexture(35866,O.__webglTexture,33984+y)}function W(x,y){const O=i.get(x);if(x.version>0&&O.__version!==x.version){H(O,x,y);return}t.bindTexture(32879,O.__webglTexture,33984+y)}function ue(x,y){const O=i.get(x);if(x.version>0&&O.__version!==x.version){re(O,x,y);return}t.bindTexture(34067,O.__webglTexture,33984+y)}const ye={[mc]:10497,[Tn]:33071,[gc]:33648},A={[qt]:9728,[hd]:9984,[rl]:9986,[mn]:9729,[YE]:9985,[ao]:9987};function $(x,y,O){if(O?(n.texParameteri(x,10242,ye[y.wrapS]),n.texParameteri(x,10243,ye[y.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,ye[y.wrapR]),n.texParameteri(x,10240,A[y.magFilter]),n.texParameteri(x,10241,A[y.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(y.wrapS!==Tn||y.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,I(y.magFilter)),n.texParameteri(x,10241,I(y.minFilter)),y.minFilter!==qt&&y.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===qt||y.minFilter!==rl&&y.minFilter!==ao||y.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(x,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function P(x,y){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,y.addEventListener("dispose",j));const K=y.source;let ne=p.get(K);ne===void 0&&(ne={},p.set(K,ne));const pe=le(y);if(pe!==x.__cacheKey){ne[pe]===void 0&&(ne[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[pe].usedTimes++;const be=ne[x.__cacheKey];be!==void 0&&(ne[x.__cacheKey].usedTimes--,be.usedTimes===0&&F(y)),x.__cacheKey=pe,x.__webglTexture=ne[pe].texture}return O}function H(x,y,O){let K=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=35866),y.isData3DTexture&&(K=32879);const ne=P(x,y),pe=y.source;t.bindTexture(K,x.__webglTexture,33984+O);const be=i.get(pe);if(pe.version!==be.__version||ne===!0){t.activeTexture(33984+O),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const xe=T(y)&&M(y.image)===!1;let ee=_(y.image,xe,!1,u);ee=ae(y,ee);const Re=M(ee)||a,Ae=s.convert(y.format,y.encoding);let Pe=s.convert(y.type),De=b(y.internalFormat,Ae,Pe,y.encoding,y.isVideoTexture);$(K,y,Re);let Ee;const Oe=y.mipmaps,tt=a&&y.isVideoTexture!==!0,Et=be.__version===void 0||ne===!0,D=C(y,ee,Re);if(y.isDepthTexture)De=6402,a?y.type===cr?De=36012:y.type===lr?De=33190:y.type===Zr?De=35056:De=33189:y.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===fr&&De===6402&&y.type!==Xm&&y.type!==lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=lr,Pe=s.convert(y.type)),y.format===as&&De===6402&&(De=34041,y.type!==Zr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Zr,Pe=s.convert(y.type))),Et&&(tt?t.texStorage2D(3553,1,De,ee.width,ee.height):t.texImage2D(3553,0,De,ee.width,ee.height,0,Ae,Pe,null));else if(y.isDataTexture)if(Oe.length>0&&Re){tt&&Et&&t.texStorage2D(3553,D,De,Oe[0].width,Oe[0].height);for(let te=0,ge=Oe.length;te<ge;te++)Ee=Oe[te],tt?t.texSubImage2D(3553,te,0,0,Ee.width,Ee.height,Ae,Pe,Ee.data):t.texImage2D(3553,te,De,Ee.width,Ee.height,0,Ae,Pe,Ee.data);y.generateMipmaps=!1}else tt?(Et&&t.texStorage2D(3553,D,De,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,ee.width,ee.height,Ae,Pe,ee.data)):t.texImage2D(3553,0,De,ee.width,ee.height,0,Ae,Pe,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){tt&&Et&&t.texStorage3D(35866,D,De,Oe[0].width,Oe[0].height,ee.depth);for(let te=0,ge=Oe.length;te<ge;te++)Ee=Oe[te],y.format!==An?Ae!==null?tt?t.compressedTexSubImage3D(35866,te,0,0,0,Ee.width,Ee.height,ee.depth,Ae,Ee.data,0,0):t.compressedTexImage3D(35866,te,De,Ee.width,Ee.height,ee.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(35866,te,0,0,0,Ee.width,Ee.height,ee.depth,Ae,Pe,Ee.data):t.texImage3D(35866,te,De,Ee.width,Ee.height,ee.depth,0,Ae,Pe,Ee.data)}else{tt&&Et&&t.texStorage2D(3553,D,De,Oe[0].width,Oe[0].height);for(let te=0,ge=Oe.length;te<ge;te++)Ee=Oe[te],y.format!==An?Ae!==null?tt?t.compressedTexSubImage2D(3553,te,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(3553,te,De,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(3553,te,0,0,Ee.width,Ee.height,Ae,Pe,Ee.data):t.texImage2D(3553,te,De,Ee.width,Ee.height,0,Ae,Pe,Ee.data)}else if(y.isDataArrayTexture)tt?(Et&&t.texStorage3D(35866,D,De,ee.width,ee.height,ee.depth),t.texSubImage3D(35866,0,0,0,0,ee.width,ee.height,ee.depth,Ae,Pe,ee.data)):t.texImage3D(35866,0,De,ee.width,ee.height,ee.depth,0,Ae,Pe,ee.data);else if(y.isData3DTexture)tt?(Et&&t.texStorage3D(32879,D,De,ee.width,ee.height,ee.depth),t.texSubImage3D(32879,0,0,0,0,ee.width,ee.height,ee.depth,Ae,Pe,ee.data)):t.texImage3D(32879,0,De,ee.width,ee.height,ee.depth,0,Ae,Pe,ee.data);else if(y.isFramebufferTexture){if(Et)if(tt)t.texStorage2D(3553,D,De,ee.width,ee.height);else{let te=ee.width,ge=ee.height;for(let Te=0;Te<D;Te++)t.texImage2D(3553,Te,De,te,ge,0,Ae,Pe,null),te>>=1,ge>>=1}}else if(Oe.length>0&&Re){tt&&Et&&t.texStorage2D(3553,D,De,Oe[0].width,Oe[0].height);for(let te=0,ge=Oe.length;te<ge;te++)Ee=Oe[te],tt?t.texSubImage2D(3553,te,0,0,Ae,Pe,Ee):t.texImage2D(3553,te,De,Ae,Pe,Ee);y.generateMipmaps=!1}else tt?(Et&&t.texStorage2D(3553,D,De,ee.width,ee.height),t.texSubImage2D(3553,0,0,0,Ae,Pe,ee)):t.texImage2D(3553,0,De,Ae,Pe,ee);L(y,Re)&&N(K),be.__version=pe.version,y.onUpdate&&y.onUpdate(y)}x.__version=y.version}function re(x,y,O){if(y.image.length!==6)return;const K=P(x,y),ne=y.source;t.bindTexture(34067,x.__webglTexture,33984+O);const pe=i.get(ne);if(ne.version!==pe.__version||K===!0){t.activeTexture(33984+O),n.pixelStorei(37440,y.flipY),n.pixelStorei(37441,y.premultiplyAlpha),n.pixelStorei(3317,y.unpackAlignment),n.pixelStorei(37443,0);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,xe=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let te=0;te<6;te++)!be&&!xe?ee[te]=_(y.image[te],!1,!0,c):ee[te]=xe?y.image[te].image:y.image[te],ee[te]=ae(y,ee[te]);const Re=ee[0],Ae=M(Re)||a,Pe=s.convert(y.format,y.encoding),De=s.convert(y.type),Ee=b(y.internalFormat,Pe,De,y.encoding),Oe=a&&y.isVideoTexture!==!0,tt=pe.__version===void 0||K===!0;let Et=C(y,Re,Ae);$(34067,y,Ae);let D;if(be){Oe&&tt&&t.texStorage2D(34067,Et,Ee,Re.width,Re.height);for(let te=0;te<6;te++){D=ee[te].mipmaps;for(let ge=0;ge<D.length;ge++){const Te=D[ge];y.format!==An?Pe!==null?Oe?t.compressedTexSubImage2D(34069+te,ge,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(34069+te,ge,Ee,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+te,ge,0,0,Te.width,Te.height,Pe,De,Te.data):t.texImage2D(34069+te,ge,Ee,Te.width,Te.height,0,Pe,De,Te.data)}}}else{D=y.mipmaps,Oe&&tt&&(D.length>0&&Et++,t.texStorage2D(34067,Et,Ee,ee[0].width,ee[0].height));for(let te=0;te<6;te++)if(xe){Oe?t.texSubImage2D(34069+te,0,0,0,ee[te].width,ee[te].height,Pe,De,ee[te].data):t.texImage2D(34069+te,0,Ee,ee[te].width,ee[te].height,0,Pe,De,ee[te].data);for(let ge=0;ge<D.length;ge++){const Ce=D[ge].image[te].image;Oe?t.texSubImage2D(34069+te,ge+1,0,0,Ce.width,Ce.height,Pe,De,Ce.data):t.texImage2D(34069+te,ge+1,Ee,Ce.width,Ce.height,0,Pe,De,Ce.data)}}else{Oe?t.texSubImage2D(34069+te,0,0,0,Pe,De,ee[te]):t.texImage2D(34069+te,0,Ee,Pe,De,ee[te]);for(let ge=0;ge<D.length;ge++){const Te=D[ge];Oe?t.texSubImage2D(34069+te,ge+1,0,0,Pe,De,Te.image[te]):t.texImage2D(34069+te,ge+1,Ee,Pe,De,Te.image[te])}}}L(y,Ae)&&N(34067),pe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}x.__version=y.version}function me(x,y,O,K,ne){const pe=s.convert(O.format,O.encoding),be=s.convert(O.type),xe=b(O.internalFormat,pe,be,O.encoding);i.get(y).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,xe,y.width,y.height,y.depth,0,pe,be,null):t.texImage2D(ne,0,xe,y.width,y.height,0,pe,be,null)),t.bindFramebuffer(36160,x),se(y)?d.framebufferTexture2DMultisampleEXT(36160,K,ne,i.get(O).__webglTexture,0,he(y)):(ne===3553||ne>=34069&&ne<=34074)&&n.framebufferTexture2D(36160,K,ne,i.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function _e(x,y,O){if(n.bindRenderbuffer(36161,x),y.depthBuffer&&!y.stencilBuffer){let K=33189;if(O||se(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===cr?K=36012:ne.type===lr&&(K=33190));const pe=he(y);se(y)?d.renderbufferStorageMultisampleEXT(36161,pe,K,y.width,y.height):n.renderbufferStorageMultisample(36161,pe,K,y.width,y.height)}else n.renderbufferStorage(36161,K,y.width,y.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(y.depthBuffer&&y.stencilBuffer){const K=he(y);O&&se(y)===!1?n.renderbufferStorageMultisample(36161,K,35056,y.width,y.height):se(y)?d.renderbufferStorageMultisampleEXT(36161,K,35056,y.width,y.height):n.renderbufferStorage(36161,34041,y.width,y.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const K=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<K.length;ne++){const pe=K[ne],be=s.convert(pe.format,pe.encoding),xe=s.convert(pe.type),ee=b(pe.internalFormat,be,xe,pe.encoding),Re=he(y);O&&se(y)===!1?n.renderbufferStorageMultisample(36161,Re,ee,y.width,y.height):se(y)?d.renderbufferStorageMultisampleEXT(36161,Re,ee,y.width,y.height):n.renderbufferStorage(36161,ee,y.width,y.height)}}n.bindRenderbuffer(36161,null)}function w(x,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),de(y.depthTexture,0);const K=i.get(y.depthTexture).__webglTexture,ne=he(y);if(y.depthTexture.format===fr)se(y)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ne):n.framebufferTexture2D(36160,36096,3553,K,0);else if(y.depthTexture.format===as)se(y)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ne):n.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function R(x){const y=i.get(x),O=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");w(y.__webglFramebuffer,x)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]=n.createRenderbuffer(),_e(y.__webglDepthbuffer[K],x,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),_e(y.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function G(x,y,O){const K=i.get(x);y!==void 0&&me(K.__webglFramebuffer,x,x.texture,36064,3553),O!==void 0&&R(x)}function X(x){const y=x.texture,O=i.get(x),K=i.get(y);x.addEventListener("dispose",z),x.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++);const ne=x.isWebGLCubeRenderTarget===!0,pe=x.isWebGLMultipleRenderTargets===!0,be=M(x)||a;if(ne){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)O.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(O.__webglFramebuffer=n.createFramebuffer(),pe)if(r.drawBuffers){const xe=x.texture;for(let ee=0,Re=xe.length;ee<Re;ee++){const Ae=i.get(xe[ee]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&se(x)===!1){const xe=pe?y:[y];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let ee=0;ee<xe.length;ee++){const Re=xe[ee];O.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(36161,O.__webglColorRenderbuffer[ee]);const Ae=s.convert(Re.format,Re.encoding),Pe=s.convert(Re.type),De=b(Re.internalFormat,Ae,Pe,Re.encoding,x.isXRRenderTarget===!0),Ee=he(x);n.renderbufferStorageMultisample(36161,Ee,De,x.width,x.height),n.framebufferRenderbuffer(36160,36064+ee,36161,O.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(36161,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(O.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,K.__webglTexture),$(34067,y,be);for(let xe=0;xe<6;xe++)me(O.__webglFramebuffer[xe],x,y,36064,34069+xe);L(y,be)&&N(34067),t.unbindTexture()}else if(pe){const xe=x.texture;for(let ee=0,Re=xe.length;ee<Re;ee++){const Ae=xe[ee],Pe=i.get(Ae);t.bindTexture(3553,Pe.__webglTexture),$(3553,Ae,be),me(O.__webglFramebuffer,x,Ae,36064+ee,3553),L(Ae,be)&&N(3553)}t.unbindTexture()}else{let xe=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?xe=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,K.__webglTexture),$(xe,y,be),me(O.__webglFramebuffer,x,y,36064,xe),L(y,be)&&N(xe),t.unbindTexture()}x.depthBuffer&&R(x)}function Q(x){const y=M(x)||a,O=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0,ne=O.length;K<ne;K++){const pe=O[K];if(L(pe,y)){const be=x.isWebGLCubeRenderTarget?34067:3553,xe=i.get(pe).__webglTexture;t.bindTexture(be,xe),N(be),t.unbindTexture()}}}function fe(x){if(a&&x.samples>0&&se(x)===!1){const y=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],O=x.width,K=x.height;let ne=16384;const pe=[],be=x.stencilBuffer?33306:36096,xe=i.get(x),ee=x.isWebGLMultipleRenderTargets===!0;if(ee)for(let Re=0;Re<y.length;Re++)t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Re,36161,null),t.bindFramebuffer(36160,xe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Re,3553,null,0);t.bindFramebuffer(36008,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,xe.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){pe.push(36064+Re),x.depthBuffer&&pe.push(be);const Ae=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ae===!1&&(x.depthBuffer&&(ne|=256),x.stencilBuffer&&(ne|=1024)),ee&&n.framebufferRenderbuffer(36008,36064,36161,xe.__webglColorRenderbuffer[Re]),Ae===!0&&(n.invalidateFramebuffer(36008,[be]),n.invalidateFramebuffer(36009,[be])),ee){const Pe=i.get(y[Re]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Pe,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,ne,9728),m&&n.invalidateFramebuffer(36008,pe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ee)for(let Re=0;Re<y.length;Re++){t.bindFramebuffer(36160,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Re,36161,xe.__webglColorRenderbuffer[Re]);const Ae=i.get(y[Re]).__webglTexture;t.bindFramebuffer(36160,xe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Re,3553,Ae,0)}t.bindFramebuffer(36009,xe.__webglMultisampledFramebuffer)}}function he(x){return Math.min(f,x.samples)}function se(x){const y=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(x){const y=o.render.frame;g.get(x)!==y&&(g.set(x,y),x.update())}function ae(x,y){const O=x.encoding,K=x.format,ne=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===_c||O!==gr&&(O===ot?a===!1?e.has("EXT_sRGB")===!0&&K===An?(x.format=_c,x.minFilter=mn,x.generateMipmaps=!1):y=Zm.sRGBToLinear(y):(K!==An||ne!==mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),y}this.allocateTextureUnit=Z,this.resetTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=we,this.setTexture3D=W,this.setTextureCube=ue,this.rebindTextures=G,this.setupRenderTarget=X,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=me,this.useMultisampledRTT=se}function _L(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===mr)return 5121;if(s===eT)return 32819;if(s===tT)return 32820;if(s===ZE)return 5120;if(s===JE)return 5122;if(s===Xm)return 5123;if(s===QE)return 5124;if(s===lr)return 5125;if(s===cr)return 5126;if(s===lo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===nT)return 6406;if(s===An)return 6408;if(s===iT)return 6409;if(s===rT)return 6410;if(s===fr)return 6402;if(s===as)return 34041;if(s===_c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===sT)return 6403;if(s===oT)return 36244;if(s===aT)return 33319;if(s===lT)return 33320;if(s===cT)return 36249;if(s===sl||s===ol||s===al||s===ll)if(o===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===sl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===sl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ol)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===al)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ll)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pd||s===md||s===gd||s===_d)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===pd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===md)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_d)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===vd||s===xd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===vd)return o===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===yd||s===bd||s===Sd||s===Md||s===wd||s===Ed||s===Td||s===Ad||s===Cd||s===Rd||s===Ld||s===Pd||s===Dd||s===Id)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===yd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Sd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Md)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ed)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Cd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ld)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dd)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Id)return o===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===cl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===cl)return o===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===fT||s===Od||s===Fd||s===Nd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===cl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Od)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class vL extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xo extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xL={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),v=this._getHandJoint(c,h);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class yL extends cn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:fr,u!==fr&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fr&&(i=lr),i===void 0&&u===as&&(i=Zr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1}}class bL extends ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,m=null,g=null;const h=t.getContextAttributes();let p=null,v=null;const S=[],_=[],M=new Set,T=new Map,L=new wn;L.layers.enable(1),L.viewport=new It;const N=new wn;N.layers.enable(2),N.viewport=new It;const b=[L,N],C=new vL;C.layers.enable(1),C.layers.enable(2);let I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ue=S[W];return ue===void 0&&(ue=new Fl,S[W]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(W){let ue=S[W];return ue===void 0&&(ue=new Fl,S[W]=ue),ue.getGripSpace()},this.getHand=function(W){let ue=S[W];return ue===void 0&&(ue=new Fl,S[W]=ue),ue.getHandSpace()};function z(W){const ue=_.indexOf(W.inputSource);if(ue===-1)return;const ye=S[ue];ye!==void 0&&ye.dispatchEvent({type:W.type,data:W.inputSource})}function B(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let W=0;W<S.length;W++){const ue=_[W];ue!==null&&(_[W]=null,S[W].disconnect(ue))}I=null,j=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,v=null,we.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),v=new _r(m.framebufferWidth,m.framebufferHeight,{format:An,type:mr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let ue=null,ye=null,A=null;h.depth&&(A=h.stencil?35056:33190,ue=h.stencil?as:fr,ye=h.stencil?Zr:lr);const $={colorFormat:32856,depthFormat:A,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer($),r.updateRenderState({layers:[d]}),v=new _r(d.textureWidth,d.textureHeight,{format:An,type:mr,depthTexture:new yL(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const P=e.properties.get(v);P.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function F(W){for(let ue=0;ue<W.removed.length;ue++){const ye=W.removed[ue],A=_.indexOf(ye);A>=0&&(_[A]=null,S[A].disconnect(ye))}for(let ue=0;ue<W.added.length;ue++){const ye=W.added[ue];let A=_.indexOf(ye);if(A===-1){for(let P=0;P<S.length;P++)if(P>=_.length){_.push(ye),A=P;break}else if(_[P]===null){_[P]=ye,A=P;break}if(A===-1)break}const $=S[A];$&&$.connect(ye)}}const Y=new q,oe=new q;function ce(W,ue,ye){Y.setFromMatrixPosition(ue.matrixWorld),oe.setFromMatrixPosition(ye.matrixWorld);const A=Y.distanceTo(oe),$=ue.projectionMatrix.elements,P=ye.projectionMatrix.elements,H=$[14]/($[10]-1),re=$[14]/($[10]+1),me=($[9]+1)/$[5],_e=($[9]-1)/$[5],w=($[8]-1)/$[0],R=(P[8]+1)/P[0],G=H*w,X=H*R,Q=A/(-w+R),fe=Q*-w;ue.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(fe),W.translateZ(Q),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const he=H+Q,se=re+Q,ve=G-fe,ae=X+(A-fe),x=me*re/se*he,y=_e*re/se*he;W.projectionMatrix.makePerspective(ve,ae,x,y,he,se)}function Z(W,ue){ue===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ue.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;C.near=N.near=L.near=W.near,C.far=N.far=L.far=W.far,(I!==C.near||j!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,j=C.far);const ue=W.parent,ye=C.cameras;Z(C,ue);for(let $=0;$<ye.length;$++)Z(ye[$],ue);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),W.matrix.copy(C.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const A=W.children;for(let $=0,P=A.length;$<P;$++)A[$].updateMatrixWorld(!0);ye.length===2?ce(C,L,N):C.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.getPlanes=function(){return M};let le=null;function de(W,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const ye=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let A=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,A=!0);for(let $=0;$<ye.length;$++){const P=ye[$];let H=null;if(m!==null)H=m.getViewport(P);else{const me=f.getViewSubImage(d,P);H=me.viewport,$===0&&(e.setRenderTargetTextures(v,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(v))}let re=b[$];re===void 0&&(re=new wn,re.layers.enable($),re.viewport=new It,b[$]=re),re.matrix.fromArray(P.transform.matrix),re.projectionMatrix.fromArray(P.projectionMatrix),re.viewport.set(H.x,H.y,H.width,H.height),$===0&&C.matrix.copy(re.matrix),A===!0&&C.cameras.push(re)}}for(let ye=0;ye<S.length;ye++){const A=_[ye],$=S[ye];A!==null&&$!==void 0&&$.update(A,ue,c||o)}if(le&&le(W,ue),ue.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let ye=null;for(const A of M)ue.detectedPlanes.has(A)||(ye===null&&(ye=[]),ye.push(A));if(ye!==null)for(const A of ye)M.delete(A),T.delete(A),i.dispatchEvent({type:"planeremoved",data:A});for(const A of ue.detectedPlanes)if(!M.has(A))M.add(A),T.set(A,ue.lastChangedTime),i.dispatchEvent({type:"planeadded",data:A});else{const $=T.get(A);A.lastChangedTime>$&&(T.set(A,A.lastChangedTime),i.dispatchEvent({type:"planechanged",data:A}))}}g=null}const we=new cg;we.setAnimationLoop(de),this.setAnimationLoop=function(W){le=W},this.dispose=function(){}}}function SL(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,sg(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,v,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),c(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,_)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),g(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,v,S):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===ln&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===ln&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(h.envMap.value=v,h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const M=n.useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uvTransform.value.copy(S.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uv2Transform.value.copy(_.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,v,S){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*v,h.scale.value=S*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,v){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ln&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function ML(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(S,_){const M=_.program;i.uniformBlockBinding(S,M)}function c(S,_){let M=r[S.id];M===void 0&&(g(S),M=u(S),r[S.id]=M,S.addEventListener("dispose",p));const T=_.program;i.updateUBOMapping(S,T);const L=e.render.frame;s[S.id]!==L&&(d(S),s[S.id]=L)}function u(S){const _=f();S.__bindingPointIndex=_;const M=n.createBuffer(),T=S.__size,L=S.usage;return n.bindBuffer(35345,M),n.bufferData(35345,T,L),n.bindBuffer(35345,null),n.bindBufferBase(35345,_,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const _=r[S.id],M=S.uniforms,T=S.__cache;n.bindBuffer(35345,_);for(let L=0,N=M.length;L<N;L++){const b=M[L];if(m(b,L,T)===!0){const C=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let z=0;z<I.length;z++){const B=I[z],F=h(B);typeof B=="number"?(b.__data[0]=B,n.bufferSubData(35345,C+j,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=B.elements[0],b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=B.elements[0],b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=B.elements[0]):(B.toArray(b.__data,j),j+=F.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,b.__data)}}n.bindBuffer(35345,null)}function m(S,_,M){const T=S.value;if(M[_]===void 0){if(typeof T=="number")M[_]=T;else{const L=Array.isArray(T)?T:[T],N=[];for(let b=0;b<L.length;b++)N.push(L[b].clone());M[_]=N}return!0}else if(typeof T=="number"){if(M[_]!==T)return M[_]=T,!0}else{const L=Array.isArray(M[_])?M[_]:[M[_]],N=Array.isArray(T)?T:[T];for(let b=0;b<L.length;b++){const C=L[b];if(C.equals(N[b])===!1)return C.copy(N[b]),!0}}return!1}function g(S){const _=S.uniforms;let M=0;const T=16;let L=0;for(let N=0,b=_.length;N<b;N++){const C=_[N],I={boundary:0,storage:0},j=Array.isArray(C.value)?C.value:[C.value];for(let z=0,B=j.length;z<B;z++){const F=j[z],Y=h(F);I.boundary+=Y.boundary,I.storage+=Y.storage}if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=M,N>0){L=M%T;const z=T-L;L!==0&&z-I.boundary<0&&(M+=T-L,C.__offset=M)}M+=I.storage}return L=M%T,L>0&&(M+=T-L),S.__size=M,S.__cache={},this}function h(S){const _={boundary:0,storage:0};return typeof S=="number"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function p(S){const _=S.target;_.removeEventListener("dispose",p);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function v(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}function wL(){const n=da("canvas");return n.style.display="block",n}function pg(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:wL(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gr,this.useLegacyLights=!0,this.toneMapping=ui,this.toneMappingExposure=1;const h=this;let p=!1,v=0,S=0,_=null,M=-1,T=null;const L=new It,N=new It;let b=null,C=e.width,I=e.height,j=1,z=null,B=null;const F=new It(0,0,C,I),Y=new It(0,0,C,I);let oe=!1;const ce=new lg;let Z=!1,le=!1,de=null;const we=new Ft,W=new q,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return _===null?j:1}let A=t;function $(E,k){for(let J=0;J<E.length;J++){const U=E[J],ie=e.getContext(U,k);if(ie!==null)return ie}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fu}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),A===null){const k=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&k.shift(),A=$(k,E),A===null)throw $(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let P,H,re,me,_e,w,R,G,X,Q,fe,he,se,ve,ae,x,y,O,K,ne,pe,be,xe,ee;function Re(){P=new FC(A),H=new CC(A,P,n),P.init(H),be=new _L(A,P,H),re=new mL(A,P,H),me=new zC,_e=new tL,w=new gL(A,P,re,_e,H,be,me),R=new LC(h),G=new OC(h),X=new qT(A,H),xe=new TC(A,P,X,H),Q=new NC(A,X,me,xe),fe=new GC(A,Q,X,me),K=new VC(A,H,w),x=new RC(_e),he=new eL(h,R,G,P,H,xe,x),se=new SL(h,_e),ve=new iL,ae=new cL(P,H),O=new EC(h,R,G,re,fe,u,o),y=new pL(h,fe,H),ee=new ML(A,me,H,re),ne=new AC(A,P,me,H),pe=new BC(A,P,me,H),me.programs=he.programs,h.capabilities=H,h.extensions=P,h.properties=_e,h.renderLists=ve,h.shadowMap=y,h.state=re,h.info=me}Re();const Ae=new bL(h,A);this.xr=Ae,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=P.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=P.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(C,I,!1))},this.getSize=function(E){return E.set(C,I)},this.setSize=function(E,k,J=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,I=k,e.width=Math.floor(E*j),e.height=Math.floor(k*j),J===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(C*j,I*j).floor()},this.setDrawingBufferSize=function(E,k,J){C=E,I=k,j=J,e.width=Math.floor(E*J),e.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(F)},this.setViewport=function(E,k,J,U){E.isVector4?F.set(E.x,E.y,E.z,E.w):F.set(E,k,J,U),re.viewport(L.copy(F).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,k,J,U){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,k,J,U),re.scissor(N.copy(Y).multiplyScalar(j).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){re.setScissorTest(oe=E)},this.setOpaqueSort=function(E){z=E},this.setTransparentSort=function(E){B=E},this.getClearColor=function(E){return E.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor.apply(O,arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha.apply(O,arguments)},this.clear=function(E=!0,k=!0,J=!0){let U=0;E&&(U|=16384),k&&(U|=256),J&&(U|=1024),A.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),ve.dispose(),ae.dispose(),_e.dispose(),R.dispose(),G.dispose(),fe.dispose(),xe.dispose(),ee.dispose(),he.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ge),Ae.removeEventListener("sessionend",Te),de&&(de.dispose(),de=null),Ce.stop()};function Pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=me.autoReset,k=y.enabled,J=y.autoUpdate,U=y.needsUpdate,ie=y.type;Re(),me.autoReset=E,y.enabled=k,y.autoUpdate=J,y.needsUpdate=U,y.type=ie}function Ee(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const k=E.target;k.removeEventListener("dispose",Oe),tt(k)}function tt(E){Et(E),_e.remove(E)}function Et(E){const k=_e.get(E).programs;k!==void 0&&(k.forEach(function(J){he.releaseProgram(J)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,U,ie,Ie){k===null&&(k=ue);const Fe=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=Pg(E,k,J,U,ie);re.setMaterial(U,Fe);let Ue=J.index,Ke=1;U.wireframe===!0&&(Ue=Q.getWireframeAttribute(J),Ke=2);const We=J.drawRange,$e=J.attributes.position;let mt=We.start*Ke,Jt=(We.start+We.count)*Ke;Ie!==null&&(mt=Math.max(mt,Ie.start*Ke),Jt=Math.min(Jt,(Ie.start+Ie.count)*Ke)),Ue!==null?(mt=Math.max(mt,0),Jt=Math.min(Jt,Ue.count)):$e!=null&&(mt=Math.max(mt,0),Jt=Math.min(Jt,$e.count));const Jn=Jt-mt;if(Jn<0||Jn===1/0)return;xe.setup(ie,U,ze,J,Ue);let ki,gt=ne;if(Ue!==null&&(ki=X.get(Ue),gt=pe,gt.setIndex(ki)),ie.isMesh)U.wireframe===!0?(re.setLineWidth(U.wireframeLinewidth*ye()),gt.setMode(1)):gt.setMode(4);else if(ie.isLine){let qe=U.linewidth;qe===void 0&&(qe=1),re.setLineWidth(qe*ye()),ie.isLineSegments?gt.setMode(1):ie.isLineLoop?gt.setMode(2):gt.setMode(3)}else ie.isPoints?gt.setMode(0):ie.isSprite&&gt.setMode(4);if(ie.isInstancedMesh)gt.renderInstances(mt,Jn,ie.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Fa=Math.min(J.instanceCount,qe);gt.renderInstances(mt,Jn,Fa)}else gt.render(mt,Jn)},this.compile=function(E,k){function J(U,ie,Ie){U.transparent===!0&&U.side===Ai&&U.forceSinglePass===!1?(U.side=ln,U.needsUpdate=!0,dn(U,ie,Ie),U.side=zi,U.needsUpdate=!0,dn(U,ie,Ie),U.side=Ai):dn(U,ie,Ie)}d=ae.get(E),d.init(),g.push(d),E.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(h.useLegacyLights),E.traverse(function(U){const ie=U.material;if(ie)if(Array.isArray(ie))for(let Ie=0;Ie<ie.length;Ie++){const Fe=ie[Ie];J(Fe,E,U)}else J(ie,E,U)}),g.pop(),d=null};let D=null;function te(E){D&&D(E)}function ge(){Ce.stop()}function Te(){Ce.start()}const Ce=new cg;Ce.setAnimationLoop(te),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(E){D=E,Ae.setAnimationLoop(E),E===null?Ce.stop():Ce.start()},Ae.addEventListener("sessionstart",ge),Ae.addEventListener("sessionend",Te),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(k),k=Ae.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,k,_),d=ae.get(E,g.length),d.init(),g.push(d),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(we),le=this.localClippingEnabled,Z=x.init(this.clippingPlanes,le),f=ve.get(E,m.length),f.init(),m.push(f),st(E,k,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(z,B),Z===!0&&x.beginShadows();const J=d.state.shadowsArray;if(y.render(J,E,k),Z===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),O.render(f,E),d.setupLights(h.useLegacyLights),k.isArrayCamera){const U=k.cameras;for(let ie=0,Ie=U.length;ie<Ie;ie++){const Fe=U[ie];Tt(f,E,Fe,Fe.viewport)}}else Tt(f,E,k);_!==null&&(w.updateMultisampleRenderTarget(_),w.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(h,E,k),xe.resetDefaultState(),M=-1,T=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function st(E,k,J,U){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ce.intersectsSprite(E)){U&&W.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const Fe=fe.update(E),ze=E.material;ze.visible&&f.push(E,Fe,ze,J,W.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==me.render.frame&&(E.skeleton.update(),E.skeleton.frame=me.render.frame),!E.frustumCulled||ce.intersectsObject(E))){U&&W.setFromMatrixPosition(E.matrixWorld).applyMatrix4(we);const Fe=fe.update(E),ze=E.material;if(Array.isArray(ze)){const Ue=Fe.groups;for(let Ke=0,We=Ue.length;Ke<We;Ke++){const $e=Ue[Ke],mt=ze[$e.materialIndex];mt&&mt.visible&&f.push(E,Fe,mt,J,W.z,$e)}}else ze.visible&&f.push(E,Fe,ze,J,W.z,null)}}const Ie=E.children;for(let Fe=0,ze=Ie.length;Fe<ze;Fe++)st(Ie[Fe],k,J,U)}function Tt(E,k,J,U){const ie=E.opaque,Ie=E.transmissive,Fe=E.transparent;d.setupLightsView(J),Z===!0&&x.setGlobalState(h.clippingPlanes,J),Ie.length>0&&Vt(ie,k,J),U&&re.viewport(L.copy(U)),ie.length>0&&Dn(ie,k,J),Ie.length>0&&Dn(Ie,k,J),Fe.length>0&&Dn(Fe,k,J),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Vt(E,k,J){const U=H.isWebGL2;de===null&&(de=new _r(1024,1024,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?lo:mr,minFilter:ao,samples:U&&s===!0?4:0}));const ie=h.getRenderTarget();h.setRenderTarget(de),h.clear();const Ie=h.toneMapping;h.toneMapping=ui,Dn(E,k,J),h.toneMapping=Ie,w.updateMultisampleRenderTarget(de),w.updateRenderTargetMipmap(de),h.setRenderTarget(ie)}function Dn(E,k,J){const U=k.isScene===!0?k.overrideMaterial:null;for(let ie=0,Ie=E.length;ie<Ie;ie++){const Fe=E[ie],ze=Fe.object,Ue=Fe.geometry,Ke=U===null?Fe.material:U,We=Fe.group;ze.layers.test(J.layers)&&pt(ze,k,J,Ue,Ke,We)}}function pt(E,k,J,U,ie,Ie){E.onBeforeRender(h,k,J,U,ie,Ie),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ie.onBeforeRender(h,k,J,U,E,Ie),ie.transparent===!0&&ie.side===Ai&&ie.forceSinglePass===!1?(ie.side=ln,ie.needsUpdate=!0,h.renderBufferDirect(J,k,U,ie,E,Ie),ie.side=zi,ie.needsUpdate=!0,h.renderBufferDirect(J,k,U,ie,E,Ie),ie.side=Ai):h.renderBufferDirect(J,k,U,ie,E,Ie),E.onAfterRender(h,k,J,U,ie,Ie)}function dn(E,k,J){k.isScene!==!0&&(k=ue);const U=_e.get(E),ie=d.state.lights,Ie=d.state.shadowsArray,Fe=ie.state.version,ze=he.getParameters(E,ie.state,Ie,k,J),Ue=he.getProgramCacheKey(ze);let Ke=U.programs;U.environment=E.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(E.isMeshStandardMaterial?G:R).get(E.envMap||U.environment),Ke===void 0&&(E.addEventListener("dispose",Oe),Ke=new Map,U.programs=Ke);let We=Ke.get(Ue);if(We!==void 0){if(U.currentProgram===We&&U.lightsStateVersion===Fe)return In(E,ze),We}else ze.uniforms=he.getUniforms(E),E.onBuild(J,ze,h),E.onBeforeCompile(ze,h),We=he.acquireProgram(ze,Ue),Ke.set(Ue,We),U.uniforms=ze.uniforms;const $e=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&($e.clippingPlanes=x.uniform),In(E,ze),U.needsLights=Ig(E),U.lightsStateVersion=Fe,U.needsLights&&($e.ambientLightColor.value=ie.state.ambient,$e.lightProbe.value=ie.state.probe,$e.directionalLights.value=ie.state.directional,$e.directionalLightShadows.value=ie.state.directionalShadow,$e.spotLights.value=ie.state.spot,$e.spotLightShadows.value=ie.state.spotShadow,$e.rectAreaLights.value=ie.state.rectArea,$e.ltc_1.value=ie.state.rectAreaLTC1,$e.ltc_2.value=ie.state.rectAreaLTC2,$e.pointLights.value=ie.state.point,$e.pointLightShadows.value=ie.state.pointShadow,$e.hemisphereLights.value=ie.state.hemi,$e.directionalShadowMap.value=ie.state.directionalShadowMap,$e.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,$e.spotShadowMap.value=ie.state.spotShadowMap,$e.spotLightMatrix.value=ie.state.spotLightMatrix,$e.spotLightMap.value=ie.state.spotLightMap,$e.pointShadowMap.value=ie.state.pointShadowMap,$e.pointShadowMatrix.value=ie.state.pointShadowMatrix);const mt=We.getUniforms(),Jt=na.seqWithValue(mt.seq,$e);return U.currentProgram=We,U.uniformsList=Jt,We}function In(E,k){const J=_e.get(E);J.outputEncoding=k.outputEncoding,J.instancing=k.instancing,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Pg(E,k,J,U,ie){k.isScene!==!0&&(k=ue),w.resetTextureUnits();const Ie=k.fog,Fe=U.isMeshStandardMaterial?k.environment:null,ze=_===null?h.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:gr,Ue=(U.isMeshStandardMaterial?G:R).get(U.envMap||Fe),Ke=U.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!U.normalMap&&!!J.attributes.tangent,$e=!!J.morphAttributes.position,mt=!!J.morphAttributes.normal,Jt=!!J.morphAttributes.color,Jn=U.toneMapped?h.toneMapping:ui,ki=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gt=ki!==void 0?ki.length:0,qe=_e.get(U),Fa=d.state.lights;if(Z===!0&&(le===!0||E!==T)){const Qt=E===T&&U.id===M;x.setState(U,E,Qt)}let At=!1;U.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Fa.state.version||qe.outputEncoding!==ze||ie.isInstancedMesh&&qe.instancing===!1||!ie.isInstancedMesh&&qe.instancing===!0||ie.isSkinnedMesh&&qe.skinning===!1||!ie.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Ue||U.fog===!0&&qe.fog!==Ie||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==x.numPlanes||qe.numIntersection!==x.numIntersection)||qe.vertexAlphas!==Ke||qe.vertexTangents!==We||qe.morphTargets!==$e||qe.morphNormals!==mt||qe.morphColors!==Jt||qe.toneMapping!==Jn||H.isWebGL2===!0&&qe.morphTargetsCount!==gt)&&(At=!0):(At=!0,qe.__version=U.version);let Vi=qe.currentProgram;At===!0&&(Vi=dn(U,k,ie));let _u=!1,vs=!1,Na=!1;const Gt=Vi.getUniforms(),Gi=qe.uniforms;if(re.useProgram(Vi.program)&&(_u=!0,vs=!0,Na=!0),U.id!==M&&(M=U.id,vs=!0),_u||T!==E){if(Gt.setValue(A,"projectionMatrix",E.projectionMatrix),H.logarithmicDepthBuffer&&Gt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),T!==E&&(T=E,vs=!0,Na=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Qt=Gt.map.cameraPosition;Qt!==void 0&&Qt.setValue(A,W.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Gt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||ie.isSkinnedMesh)&&Gt.setValue(A,"viewMatrix",E.matrixWorldInverse)}if(ie.isSkinnedMesh){Gt.setOptional(A,ie,"bindMatrix"),Gt.setOptional(A,ie,"bindMatrixInverse");const Qt=ie.skeleton;Qt&&(H.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Gt.setValue(A,"boneTexture",Qt.boneTexture,w),Gt.setValue(A,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ba=J.morphAttributes;if((Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&H.isWebGL2===!0)&&K.update(ie,J,Vi),(vs||qe.receiveShadow!==ie.receiveShadow)&&(qe.receiveShadow=ie.receiveShadow,Gt.setValue(A,"receiveShadow",ie.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Gi.envMap.value=Ue,Gi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),vs&&(Gt.setValue(A,"toneMappingExposure",h.toneMappingExposure),qe.needsLights&&Dg(Gi,Na),Ie&&U.fog===!0&&se.refreshFogUniforms(Gi,Ie),se.refreshMaterialUniforms(Gi,U,j,I,de),na.upload(A,qe.uniformsList,Gi,w)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(na.upload(A,qe.uniformsList,Gi,w),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Gt.setValue(A,"center",ie.center),Gt.setValue(A,"modelViewMatrix",ie.modelViewMatrix),Gt.setValue(A,"normalMatrix",ie.normalMatrix),Gt.setValue(A,"modelMatrix",ie.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Qt=U.uniformsGroups;for(let za=0,Og=Qt.length;za<Og;za++)if(H.isWebGL2){const vu=Qt[za];ee.update(vu,Vi),ee.bind(vu,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function Dg(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Ig(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,k,J){_e.get(E.texture).__webglTexture=k,_e.get(E.depthTexture).__webglTexture=J;const U=_e.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=J===void 0,U.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const J=_e.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,J=0){_=E,v=k,S=J;let U=!0,ie=null,Ie=!1,Fe=!1;if(E){const Ue=_e.get(E);Ue.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(36160,null),U=!1):Ue.__webglFramebuffer===void 0?w.setupRenderTarget(E):Ue.__hasExternalTextures&&w.rebindTextures(E,_e.get(E.texture).__webglTexture,_e.get(E.depthTexture).__webglTexture);const Ke=E.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Fe=!0);const We=_e.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ie=We[k],Ie=!0):H.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?ie=_e.get(E).__webglMultisampledFramebuffer:ie=We,L.copy(E.viewport),N.copy(E.scissor),b=E.scissorTest}else L.copy(F).multiplyScalar(j).floor(),N.copy(Y).multiplyScalar(j).floor(),b=oe;if(re.bindFramebuffer(36160,ie)&&H.drawBuffers&&U&&re.drawBuffers(E,ie),re.viewport(L),re.scissor(N),re.setScissorTest(b),Ie){const Ue=_e.get(E.texture);A.framebufferTexture2D(36160,36064,34069+k,Ue.__webglTexture,J)}else if(Fe){const Ue=_e.get(E.texture),Ke=k||0;A.framebufferTextureLayer(36160,36064,Ue.__webglTexture,J||0,Ke)}M=-1},this.readRenderTargetPixels=function(E,k,J,U,ie,Ie,Fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=_e.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Fe!==void 0&&(ze=ze[Fe]),ze){re.bindFramebuffer(36160,ze);try{const Ue=E.texture,Ke=Ue.format,We=Ue.type;if(Ke!==An&&be.convert(Ke)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=We===lo&&(P.has("EXT_color_buffer_half_float")||H.isWebGL2&&P.has("EXT_color_buffer_float"));if(We!==mr&&be.convert(We)!==A.getParameter(35738)&&!(We===cr&&(H.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-U&&J>=0&&J<=E.height-ie&&A.readPixels(k,J,U,ie,be.convert(Ke),be.convert(We),Ie)}finally{const Ue=_!==null?_e.get(_).__webglFramebuffer:null;re.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(E,k,J=0){const U=Math.pow(2,-J),ie=Math.floor(k.image.width*U),Ie=Math.floor(k.image.height*U);w.setTexture2D(k,0),A.copyTexSubImage2D(3553,J,0,0,E.x,E.y,ie,Ie),re.unbindTexture()},this.copyTextureToTexture=function(E,k,J,U=0){const ie=k.image.width,Ie=k.image.height,Fe=be.convert(J.format),ze=be.convert(J.type);w.setTexture2D(J,0),A.pixelStorei(37440,J.flipY),A.pixelStorei(37441,J.premultiplyAlpha),A.pixelStorei(3317,J.unpackAlignment),k.isDataTexture?A.texSubImage2D(3553,U,E.x,E.y,ie,Ie,Fe,ze,k.image.data):k.isCompressedTexture?A.compressedTexSubImage2D(3553,U,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Fe,k.mipmaps[0].data):A.texSubImage2D(3553,U,E.x,E.y,Fe,ze,k.image),U===0&&J.generateMipmaps&&A.generateMipmap(3553),re.unbindTexture()},this.copyTextureToTexture3D=function(E,k,J,U,ie=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=E.max.x-E.min.x+1,Fe=E.max.y-E.min.y+1,ze=E.max.z-E.min.z+1,Ue=be.convert(U.format),Ke=be.convert(U.type);let We;if(U.isData3DTexture)w.setTexture3D(U,0),We=32879;else if(U.isDataArrayTexture)w.setTexture2DArray(U,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,U.flipY),A.pixelStorei(37441,U.premultiplyAlpha),A.pixelStorei(3317,U.unpackAlignment);const $e=A.getParameter(3314),mt=A.getParameter(32878),Jt=A.getParameter(3316),Jn=A.getParameter(3315),ki=A.getParameter(32877),gt=J.isCompressedTexture?J.mipmaps[0]:J.image;A.pixelStorei(3314,gt.width),A.pixelStorei(32878,gt.height),A.pixelStorei(3316,E.min.x),A.pixelStorei(3315,E.min.y),A.pixelStorei(32877,E.min.z),J.isDataTexture||J.isData3DTexture?A.texSubImage3D(We,ie,k.x,k.y,k.z,Ie,Fe,ze,Ue,Ke,gt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(We,ie,k.x,k.y,k.z,Ie,Fe,ze,Ue,gt.data)):A.texSubImage3D(We,ie,k.x,k.y,k.z,Ie,Fe,ze,Ue,Ke,gt),A.pixelStorei(3314,$e),A.pixelStorei(32878,mt),A.pixelStorei(3316,Jt),A.pixelStorei(3315,Jn),A.pixelStorei(32877,ki),ie===0&&U.generateMipmaps&&A.generateMipmap(We),re.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),re.unbindTexture()},this.resetState=function(){v=0,S=0,_=null,re.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(pg.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class EL extends pg{}EL.prototype.isWebGL1Renderer=!0;class TP extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);const jn=Object.create(null);jn.open="0";jn.close="1";jn.ping="2";jn.pong="3";jn.message="4";jn.upgrade="5";jn.noop="6";const ia=Object.create(null);Object.keys(jn).forEach(n=>{ia[jn[n]]=n});const TL={type:"error",data:"parser error"},AL=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",CL=typeof ArrayBuffer=="function",RL=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,mg=({type:n,data:e},t,i)=>AL&&e instanceof Blob?t?i(e):yh(e,i):CL&&(e instanceof ArrayBuffer||RL(e))?t?i(e):yh(new Blob([e]),i):i(jn[n]+(e||"")),yh=(n,e)=>{const t=new FileReader;return t.onload=function(){const i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(n)},bh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Fs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<bh.length;n++)Fs[bh.charCodeAt(n)]=n;const LL=n=>{let e=n.length*.75,t=n.length,i,r=0,s,o,a,l;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(i=0;i<t;i+=4)s=Fs[n.charCodeAt(i)],o=Fs[n.charCodeAt(i+1)],a=Fs[n.charCodeAt(i+2)],l=Fs[n.charCodeAt(i+3)],u[r++]=s<<2|o>>4,u[r++]=(o&15)<<4|a>>2,u[r++]=(a&3)<<6|l&63;return c},PL=typeof ArrayBuffer=="function",gg=(n,e)=>{if(typeof n!="string")return{type:"message",data:_g(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:DL(n.substring(1),e)}:ia[t]?n.length>1?{type:ia[t],data:n.substring(1)}:{type:ia[t]}:TL},DL=(n,e)=>{if(PL){const t=LL(n);return _g(t,e)}else return{base64:!0,data:n}},_g=(n,e)=>{switch(e){case"blob":return n instanceof ArrayBuffer?new Blob([n]):n;case"arraybuffer":default:return n}},vg=String.fromCharCode(30),IL=(n,e)=>{const t=n.length,i=new Array(t);let r=0;n.forEach((s,o)=>{mg(s,!1,a=>{i[o]=a,++r===t&&e(i.join(vg))})})},OL=(n,e)=>{const t=n.split(vg),i=[];for(let r=0;r<t.length;r++){const s=gg(t[r],e);if(i.push(s),s.type==="error")break}return i},xg=4;function vt(n){if(n)return FL(n)}function FL(n){for(var e in vt.prototype)n[e]=vt.prototype[e];return n}vt.prototype.on=vt.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};vt.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};vt.prototype.off=vt.prototype.removeListener=vt.prototype.removeAllListeners=vt.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var i,r=0;r<t.length;r++)if(i=t[r],i===e||i.fn===e){t.splice(r,1);break}return t.length===0&&delete this._callbacks["$"+n],this};vt.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,r=t.length;i<r;++i)t[i].apply(this,e)}return this};vt.prototype.emitReserved=vt.prototype.emit;vt.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};vt.prototype.hasListeners=function(n){return!!this.listeners(n).length};const gn=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function yg(n,...e){return e.reduce((t,i)=>(n.hasOwnProperty(i)&&(t[i]=n[i]),t),{})}const NL=gn.setTimeout,BL=gn.clearTimeout;function Oa(n,e){e.useNativeTimers?(n.setTimeoutFn=NL.bind(gn),n.clearTimeoutFn=BL.bind(gn)):(n.setTimeoutFn=gn.setTimeout.bind(gn),n.clearTimeoutFn=gn.clearTimeout.bind(gn))}const zL=1.33;function UL(n){return typeof n=="string"?kL(n):Math.ceil((n.byteLength||n.size)*zL)}function kL(n){let e=0,t=0;for(let i=0,r=n.length;i<r;i++)e=n.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}class VL extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}}class bg extends vt{constructor(e){super(),this.writable=!1,Oa(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,i){return super.emitReserved("error",new VL(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=gg(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}}const Sg="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),xc=64,GL={};let Sh=0,Ko=0,Mh;function wh(n){let e="";do e=Sg[n%xc]+e,n=Math.floor(n/xc);while(n>0);return e}function Mg(){const n=wh(+new Date);return n!==Mh?(Sh=0,Mh=n):n+"."+wh(Sh++)}for(;Ko<xc;Ko++)GL[Sg[Ko]]=Ko;function wg(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function HL(n){let e={},t=n.split("&");for(let i=0,r=t.length;i<r;i++){let s=t[i].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}let Eg=!1;try{Eg=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const WL=Eg;function Tg(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||WL))return new XMLHttpRequest}catch{}if(!e)try{return new gn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function $L(){}const qL=function(){return new Tg({xdomain:!1}).responseType!=null}();class jL extends bg{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const i=location.protocol==="https:";let r=location.port;r||(r=i?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||r!==e.port,this.xs=e.secure!==i}const t=e&&e.forceBase64;this.supportsBinary=qL&&!t}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let i=0;this.polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};OL(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,IL(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const t=this.opts.secure?"https":"http";let i="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Mg()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(t==="https"&&Number(this.opts.port)!==443||t==="http"&&Number(this.opts.port)!==80)&&(i=":"+this.opts.port);const r=wg(e),s=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+i+this.opts.path+(r.length?"?"+r:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new Wn(this.uri(),e)}doWrite(e,t){const i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(r,s)=>{this.onError("xhr post error",r,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}}class Wn extends vt{constructor(e,t){super(),Oa(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.async=t.async!==!1,this.data=t.data!==void 0?t.data:null,this.create()}create(){const e=yg(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const t=this.xhr=new Tg(e);try{t.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){t.setDisableHeaderCheck&&t.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&t.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{t.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in t&&(t.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(t.timeout=this.opts.requestTimeout),t.onreadystatechange=()=>{t.readyState===4&&(t.status===200||t.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof t.status=="number"?t.status:0)},0))},t.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=Wn.requestsCount++,Wn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=$L,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Wn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}Wn.requestsCount=0;Wn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Eh);else if(typeof addEventListener=="function"){const n="onpagehide"in gn?"pagehide":"unload";addEventListener(n,Eh,!1)}}function Eh(){for(let n in Wn.requests)Wn.requests.hasOwnProperty(n)&&Wn.requests[n].abort()}const Ag=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0))(),Yo=gn.WebSocket||gn.MozWebSocket,Th=!0,XL="arraybuffer",Ah=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class KL extends bg{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,i=Ah?{}:yg(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=Th&&!Ah?t?new Yo(e,t):new Yo(e):new Yo(e,t,i)}catch(r){return this.emitReserved("error",r)}this.ws.binaryType=this.socket.binaryType||XL,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const i=e[t],r=t===e.length-1;mg(i,this.supportsBinary,s=>{const o={};try{Th&&this.ws.send(s)}catch{}r&&Ag(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const t=this.opts.secure?"wss":"ws";let i="";this.opts.port&&(t==="wss"&&Number(this.opts.port)!==443||t==="ws"&&Number(this.opts.port)!==80)&&(i=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=Mg()),this.supportsBinary||(e.b64=1);const r=wg(e),s=this.opts.hostname.indexOf(":")!==-1;return t+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+i+this.opts.path+(r.length?"?"+r:"")}check(){return!!Yo}}const YL={websocket:KL,polling:jL},ZL=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,JL=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function yc(n){const e=n,t=n.indexOf("["),i=n.indexOf("]");t!=-1&&i!=-1&&(n=n.substring(0,t)+n.substring(t,i).replace(/:/g,";")+n.substring(i,n.length));let r=ZL.exec(n||""),s={},o=14;for(;o--;)s[JL[o]]=r[o]||"";return t!=-1&&i!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=QL(s,s.path),s.queryKey=eP(s,s.query),s}function QL(n,e){const t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function eP(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,r,s){r&&(t[r]=s)}),t}let Cg=class Wr extends vt{constructor(e,t={}){super(),this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=yc(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=yc(t.host).host),Oa(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=HL(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=xg,t.transport=e,this.id&&(t.sid=this.id);const i=Object.assign({},this.opts.transportOptions[e],this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new YL[e](i)}open(){let e;if(this.opts.rememberUpgrade&&Wr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),i=!1;Wr.priorWebsocketSuccess=!1;const r=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!i)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Wr.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function s(){i||(i=!0,u(),t.close(),t=null)}const o=f=>{const d=new Error("probe error: "+f);d.transport=t.name,s(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){t&&f.name!==t.name&&s()}const u=()=>{t.removeListener("open",r),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",r),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),t.open()}onOpen(){if(this.readyState="open",Wr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){const r=this.writeBuffer[i].data;if(r&&(t+=UL(r)),i>0&&t>this.maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}write(e,t,i){return this.sendPacket("message",e,t,i),this}send(e,t,i){return this.sendPacket("message",e,t,i),this}sendPacket(e,t,i,r){if(typeof t=="function"&&(r=t,t=void 0),typeof i=="function"&&(r=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;const s={type:e,data:t,options:i};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),r&&this.once("flush",r),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}onError(e){Wr.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let i=0;const r=e.length;for(;i<r;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};Cg.protocol=xg;function tP(n,e="",t){let i=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),i=yc(n)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";const s=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+s+":"+i.port+e,i.href=i.protocol+"://"+s+(t&&t.port===i.port?"":":"+i.port),i}const nP=typeof ArrayBuffer=="function",iP=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,Rg=Object.prototype.toString,rP=typeof Blob=="function"||typeof Blob<"u"&&Rg.call(Blob)==="[object BlobConstructor]",sP=typeof File=="function"||typeof File<"u"&&Rg.call(File)==="[object FileConstructor]";function mu(n){return nP&&(n instanceof ArrayBuffer||iP(n))||rP&&n instanceof Blob||sP&&n instanceof File}function ra(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,i=n.length;t<i;t++)if(ra(n[t]))return!0;return!1}if(mu(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return ra(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&ra(n[t]))return!0;return!1}function oP(n){const e=[],t=n.data,i=n;return i.data=bc(t,e),i.attachments=e.length,{packet:i,buffers:e}}function bc(n,e){if(!n)return n;if(mu(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let i=0;i<n.length;i++)t[i]=bc(n[i],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=bc(n[i],e));return t}return n}function aP(n,e){return n.data=Sc(n.data,e),delete n.attachments,n}function Sc(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=Sc(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Sc(n[t],e));return n}const lP=5;var Ge;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(Ge||(Ge={}));class cP{constructor(e){this.replacer=e}encode(e){return(e.type===Ge.EVENT||e.type===Ge.ACK)&&ra(e)?this.encodeAsBinary({type:e.type===Ge.EVENT?Ge.BINARY_EVENT:Ge.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===Ge.BINARY_EVENT||e.type===Ge.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=oP(e),i=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(i),r}}class gu extends vt{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const i=t.type===Ge.BINARY_EVENT;i||t.type===Ge.BINARY_ACK?(t.type=i?Ge.EVENT:Ge.ACK,this.reconstructor=new uP(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(mu(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const i={type:Number(e.charAt(0))};if(Ge[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===Ge.BINARY_EVENT||i.type===Ge.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");i.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(s,t)}else i.nsp="/";const r=e.charAt(t+1);if(r!==""&&Number(r)==r){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(gu.isPayloadValid(i.type,s))i.data=s;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case Ge.CONNECT:return typeof t=="object";case Ge.DISCONNECT:return t===void 0;case Ge.CONNECT_ERROR:return typeof t=="string"||typeof t=="object";case Ge.EVENT:case Ge.BINARY_EVENT:return Array.isArray(t)&&t.length>0;case Ge.ACK:case Ge.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class uP{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=aP(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const fP=Object.freeze(Object.defineProperty({__proto__:null,Decoder:gu,Encoder:cP,get PacketType(){return Ge},protocol:lP},Symbol.toStringTag,{value:"Module"}));function Mn(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const dP=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Lg extends vt{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Mn(e,"open",this.onopen.bind(this)),Mn(e,"packet",this.onpacket.bind(this)),Mn(e,"error",this.onerror.bind(this)),Mn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(dP.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const i={type:Ge.EVENT,data:t};if(i.options={},i.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),i.id=o}const r=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!r||!this.connected)||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}_registerAckCallback(e,t){var i;const r=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(r===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,[null,...o])}}emitWithAck(e,...t){const i=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((r,s)=>{t.push((o,a)=>i?o?s(o):r(a):r(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((r,...s)=>i!==this._queue[0]?void 0:(r!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(r)):(this._queue.shift(),t&&t(null,...s)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:Ge.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Ge.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Ge.EVENT:case Ge.BINARY_EVENT:this.onevent(e);break;case Ge.ACK:case Ge.BINARY_ACK:this.onack(e);break;case Ge.DISCONNECT:this.ondisconnect();break;case Ge.CONNECT_ERROR:this.destroy();const i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let i=!1;return function(...r){i||(i=!0,t.packet({type:Ge.ACK,id:e,data:r}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Ge.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const i of t)i.apply(this,e.data)}}}function _s(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}_s.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};_s.prototype.reset=function(){this.attempts=0};_s.prototype.setMin=function(n){this.ms=n};_s.prototype.setMax=function(n){this.max=n};_s.prototype.setJitter=function(n){this.jitter=n};class Mc extends vt{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Oa(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new _s({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const r=t.parser||fP;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Cg(this.uri,this.opts);const t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;const r=Mn(t,"open",function(){i.onopen(),e&&e()}),s=Mn(t,"error",o=>{i.cleanup(),i._readyState="closed",this.emitReserved("error",o),e?e(o):i.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&r();const a=this.setTimeoutFn(()=>{r(),t.close(),t.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(r),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Mn(e,"ping",this.onping.bind(this)),Mn(e,"data",this.ondata.bind(this)),Mn(e,"error",this.onerror.bind(this)),Mn(e,"close",this.onclose.bind(this)),Mn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Ag(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new Lg(this,e,t),this.nsps[e]=i),i}_destroy(e){const t=Object.keys(this.nsps);for(const i of t)if(this.nsps[i].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(r=>{r?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",r)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(function(){clearTimeout(i)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ls={};function Nl(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=tP(n,e.path||"/socket.io"),i=t.source,r=t.id,s=t.path,o=Ls[r]&&s in Ls[r].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new Mc(i,e):(Ls[r]||(Ls[r]=new Mc(i,e)),l=Ls[r]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Nl,{Manager:Mc,Socket:Lg,io:Nl,connect:Nl});export{xP as A,vo as B,EP as C,wP as D,MP as E,xt as F,gP as G,ng as M,wn as P,mE as R,TP as S,pg as W,xr as a,rt as b,Ye as c,ft as d,yp as e,pP as f,ht as g,vP as h,yr as i,Ri as j,dt as k,Nl as l,X_ as m,mP as n,Le as o,hP as p,Dp as q,Qe as r,yP as s,Ei as t,V as u,_P as v,Pt as w,bP as x,SP as y,xE as z};
