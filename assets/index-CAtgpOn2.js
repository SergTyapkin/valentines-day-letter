var Tm=Object.defineProperty;var Em=(i,e,t)=>e in i?Tm(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Be=(i,e,t)=>Em(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function _c(i,e){const t=Object.create(null),n=i.split(",");for(let s=0;s<n.length;s++)t[n[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}const Am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=_c(Am);function Jf(i){return!!i||i===""}function nr(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=St(n)?Pm(n):nr(n);if(s)for(const r in s)e[r]=s[r]}return e}else{if(St(i))return i;if(dt(i))return i}}const Rm=/;(?![^(]*\))/g,Lm=/:(.+)/;function Pm(i){const e={};return i.split(Rm).forEach(t=>{if(t){const n=t.split(Lm);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function is(i){let e="";if(St(i))e=i;else if(Ne(i))for(let t=0;t<i.length;t++){const n=is(i[t]);n&&(e+=n+" ")}else if(dt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Hr=i=>St(i)?i:i==null?"":Ne(i)||dt(i)&&(i.toString===nd||!Ue(i.toString))?JSON.stringify(i,Qf,2):String(i),Qf=(i,e)=>e&&e.__v_isRef?Qf(i,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,s])=>(t[`${n} =>`]=s,t),{})}:ed(e)?{[`Set(${e.size})`]:[...e.values()]}:dt(e)&&!Ne(e)&&!id(e)?String(e):e,nt={},Us=[],An=()=>{},Im=()=>!1,Dm=/^on[^a-z]/,ha=i=>Dm.test(i),xc=i=>i.startsWith("onUpdate:"),Ut=Object.assign,vc=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Nm=Object.prototype.hasOwnProperty,Xe=(i,e)=>Nm.call(i,e),Ne=Array.isArray,Bs=i=>fa(i)==="[object Map]",ed=i=>fa(i)==="[object Set]",Ue=i=>typeof i=="function",St=i=>typeof i=="string",yc=i=>typeof i=="symbol",dt=i=>i!==null&&typeof i=="object",td=i=>dt(i)&&Ue(i.then)&&Ue(i.catch),nd=Object.prototype.toString,fa=i=>nd.call(i),Fm=i=>fa(i).slice(8,-1),id=i=>fa(i)==="[object Object]",bc=i=>St(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ho=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),da=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Om=/-(\w)/g,Cn=da(i=>i.replace(Om,(e,t)=>t?t.toUpperCase():"")),Um=/\B([A-Z])/g,ss=da(i=>i.replace(Um,"-$1").toLowerCase()),pa=da(i=>i.charAt(0).toUpperCase()+i.slice(1)),Oa=da(i=>i?`on${pa(i)}`:""),Gr=(i,e)=>!Object.is(i,e),Go=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Qo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},ea=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let au;const Bm=()=>au||(au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Sn;class zm{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Sn&&(this.parent=Sn,this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=Sn;try{return Sn=this,e()}finally{Sn=t}}}on(){Sn=this}off(){Sn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function km(i,e=Sn){e&&e.active&&e.effects.push(i)}const Mc=i=>{const e=new Set(i);return e.w=0,e.n=0,e},sd=i=>(i.w&xi)>0,rd=i=>(i.n&xi)>0,Vm=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=xi},Hm=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const s=e[n];sd(s)&&!rd(s)?s.delete(i):e[t++]=s,s.w&=~xi,s.n&=~xi}e.length=t}},Dl=new WeakMap;let Lr=0,xi=1;const Nl=30;let fn;const Ki=Symbol(""),Fl=Symbol("");class Sc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,km(this,n)}run(){if(!this.active)return this.fn();let e=fn,t=di;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=fn,fn=this,di=!0,xi=1<<++Lr,Lr<=Nl?Vm(this):lu(this),this.fn()}finally{Lr<=Nl&&Hm(this),xi=1<<--Lr,fn=this.parent,di=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){fn===this?this.deferStop=!0:this.active&&(lu(this),this.onStop&&this.onStop(),this.active=!1)}}function lu(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let di=!0;const od=[];function ir(){od.push(di),di=!1}function sr(){const i=od.pop();di=i===void 0?!0:i}function Yt(i,e,t){if(di&&fn){let n=Dl.get(i);n||Dl.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=Mc()),ad(s)}}function ad(i,e){let t=!1;Lr<=Nl?rd(i)||(i.n|=xi,t=!sd(i)):t=!i.has(fn),t&&(i.add(fn),fn.deps.push(i))}function Kn(i,e,t,n,s,r){const o=Dl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(i)?bc(t)&&a.push(o.get("length")):(a.push(o.get(Ki)),Bs(i)&&a.push(o.get(Fl)));break;case"delete":Ne(i)||(a.push(o.get(Ki)),Bs(i)&&a.push(o.get(Fl)));break;case"set":Bs(i)&&a.push(o.get(Ki));break}if(a.length===1)a[0]&&Ol(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ol(Mc(l))}}function Ol(i,e){const t=Ne(i)?i:[...i];for(const n of t)n.computed&&cu(n);for(const n of t)n.computed||cu(n)}function cu(i,e){(i!==fn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Gm=_c("__proto__,__v_isRef,__isVue"),ld=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(yc)),Wm=wc(),jm=wc(!1,!0),Xm=wc(!0),uu=qm();function qm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Ke(this);for(let r=0,o=this.length;r<o;r++)Yt(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(Ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){ir();const n=Ke(this)[e].apply(this,t);return sr(),n}}),i}function wc(i=!1,e=!1){return function(n,s,r){if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&r===(i?e?cg:dd:e?fd:hd).get(n))return n;const o=Ne(n);if(!i&&o&&Xe(uu,s))return Reflect.get(uu,s,r);const a=Reflect.get(n,s,r);return(yc(s)?ld.has(s):Gm(s))||(i||Yt(n,"get",s),e)?a:Rt(a)?o&&bc(s)?a:a.value:dt(a)?i?pd(a):rr(a):a}}const $m=cd(),Km=cd(!0);function cd(i=!1){return function(t,n,s,r){let o=t[n];if(Wr(o)&&Rt(o)&&!Rt(s))return!1;if(!i&&!Wr(s)&&(Ul(s)||(s=Ke(s),o=Ke(o)),!Ne(t)&&Rt(o)&&!Rt(s)))return o.value=s,!0;const a=Ne(t)&&bc(n)?Number(n)<t.length:Xe(t,n),l=Reflect.set(t,n,s,r);return t===Ke(r)&&(a?Gr(s,o)&&Kn(t,"set",n,s):Kn(t,"add",n,s)),l}}function Ym(i,e){const t=Xe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Kn(i,"delete",e,void 0),n}function Zm(i,e){const t=Reflect.has(i,e);return(!yc(e)||!ld.has(e))&&Yt(i,"has",e),t}function Jm(i){return Yt(i,"iterate",Ne(i)?"length":Ki),Reflect.ownKeys(i)}const ud={get:Wm,set:$m,deleteProperty:Ym,has:Zm,ownKeys:Jm},Qm={get:Xm,set(i,e){return!0},deleteProperty(i,e){return!0}},eg=Ut({},ud,{get:jm,set:Km}),Tc=i=>i,ma=i=>Reflect.getPrototypeOf(i);function lo(i,e,t=!1,n=!1){i=i.__v_raw;const s=Ke(i),r=Ke(e);t||(e!==r&&Yt(s,"get",e),Yt(s,"get",r));const{has:o}=ma(s),a=n?Tc:t?Cc:jr;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function co(i,e=!1){const t=this.__v_raw,n=Ke(t),s=Ke(i);return e||(i!==s&&Yt(n,"has",i),Yt(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function uo(i,e=!1){return i=i.__v_raw,!e&&Yt(Ke(i),"iterate",Ki),Reflect.get(i,"size",i)}function hu(i){i=Ke(i);const e=Ke(this);return ma(e).has.call(e,i)||(e.add(i),Kn(e,"add",i,i)),this}function fu(i,e){e=Ke(e);const t=Ke(this),{has:n,get:s}=ma(t);let r=n.call(t,i);r||(i=Ke(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?Gr(e,o)&&Kn(t,"set",i,e):Kn(t,"add",i,e),this}function du(i){const e=Ke(this),{has:t,get:n}=ma(e);let s=t.call(e,i);s||(i=Ke(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Kn(e,"delete",i,void 0),r}function pu(){const i=Ke(this),e=i.size!==0,t=i.clear();return e&&Kn(i,"clear",void 0,void 0),t}function ho(i,e){return function(n,s){const r=this,o=r.__v_raw,a=Ke(o),l=e?Tc:i?Cc:jr;return!i&&Yt(a,"iterate",Ki),o.forEach((c,u)=>n.call(s,l(c),l(u),r))}}function fo(i,e,t){return function(...n){const s=this.__v_raw,r=Ke(s),o=Bs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=t?Tc:e?Cc:jr;return!e&&Yt(r,"iterate",l?Fl:Ki),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Qn(i){return function(...e){return i==="delete"?!1:this}}function tg(){const i={get(r){return lo(this,r)},get size(){return uo(this)},has:co,add:hu,set:fu,delete:du,clear:pu,forEach:ho(!1,!1)},e={get(r){return lo(this,r,!1,!0)},get size(){return uo(this)},has:co,add:hu,set:fu,delete:du,clear:pu,forEach:ho(!1,!0)},t={get(r){return lo(this,r,!0)},get size(){return uo(this,!0)},has(r){return co.call(this,r,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:ho(!0,!1)},n={get(r){return lo(this,r,!0,!0)},get size(){return uo(this,!0)},has(r){return co.call(this,r,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=fo(r,!1,!1),t[r]=fo(r,!0,!1),e[r]=fo(r,!1,!0),n[r]=fo(r,!0,!0)}),[i,t,e,n]}const[ng,ig,sg,rg]=tg();function Ec(i,e){const t=e?i?rg:sg:i?ig:ng;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(Xe(t,s)&&s in n?t:n,s,r)}const og={get:Ec(!1,!1)},ag={get:Ec(!1,!0)},lg={get:Ec(!0,!1)},hd=new WeakMap,fd=new WeakMap,dd=new WeakMap,cg=new WeakMap;function ug(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hg(i){return i.__v_skip||!Object.isExtensible(i)?0:ug(Fm(i))}function rr(i){return Wr(i)?i:Ac(i,!1,ud,og,hd)}function fg(i){return Ac(i,!1,eg,ag,fd)}function pd(i){return Ac(i,!0,Qm,lg,dd)}function Ac(i,e,t,n,s){if(!dt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=hg(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function zs(i){return Wr(i)?zs(i.__v_raw):!!(i&&i.__v_isReactive)}function Wr(i){return!!(i&&i.__v_isReadonly)}function Ul(i){return!!(i&&i.__v_isShallow)}function md(i){return zs(i)||Wr(i)}function Ke(i){const e=i&&i.__v_raw;return e?Ke(e):i}function gd(i){return Qo(i,"__v_skip",!0),i}const jr=i=>dt(i)?rr(i):i,Cc=i=>dt(i)?pd(i):i;function _d(i){di&&fn&&(i=Ke(i),ad(i.dep||(i.dep=Mc())))}function xd(i,e){i=Ke(i),i.dep&&Ol(i.dep)}function Rt(i){return!!(i&&i.__v_isRef===!0)}function dg(i){return vd(i,!1)}function pg(i){return vd(i,!0)}function vd(i,e){return Rt(i)?i:new mg(i,e)}class mg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ke(e),this._value=t?e:jr(e)}get value(){return _d(this),this._value}set value(e){e=this.__v_isShallow?e:Ke(e),Gr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:jr(e),xd(this))}}function ks(i){return Rt(i)?i.value:i}const gg={get:(i,e,t)=>ks(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return Rt(s)&&!Rt(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function yd(i){return zs(i)?i:new Proxy(i,gg)}class _g{constructor(e,t,n,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Sc(e,()=>{this._dirty||(this._dirty=!0,xd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=Ke(this);return _d(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xg(i,e,t=!1){let n,s;const r=Ue(i);return r?(n=i,s=An):(n=i.get,s=i.set),new _g(n,s,r||!s,t)}function pi(i,e,t,n){let s;try{s=n?i(...n):i()}catch(r){ga(r,e,t)}return s}function on(i,e,t,n){if(Ue(i)){const r=pi(i,e,t,n);return r&&td(r)&&r.catch(o=>{ga(o,e,t)}),r}const s=[];for(let r=0;r<i.length;r++)s.push(on(i[r],e,t,n));return s}function ga(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){pi(l,null,10,[i,o,a]);return}}vg(i,t,s,n)}function vg(i,e,t,n=!0){console.error(i)}let ta=!1,Bl=!1;const qt=[];let Vn=0;const Nr=[];let Pr=null,As=0;const Fr=[];let ci=null,Cs=0;const bd=Promise.resolve();let Rc=null,zl=null;function Md(i){const e=Rc||bd;return i?e.then(this?i.bind(this):i):e}function yg(i){let e=Vn+1,t=qt.length;for(;e<t;){const n=e+t>>>1;Xr(qt[n])<i?e=n+1:t=n}return e}function Sd(i){(!qt.length||!qt.includes(i,ta&&i.allowRecurse?Vn+1:Vn))&&i!==zl&&(i.id==null?qt.push(i):qt.splice(yg(i.id),0,i),wd())}function wd(){!ta&&!Bl&&(Bl=!0,Rc=bd.then(Ad))}function bg(i){const e=qt.indexOf(i);e>Vn&&qt.splice(e,1)}function Td(i,e,t,n){Ne(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),wd()}function Mg(i){Td(i,Pr,Nr,As)}function Sg(i){Td(i,ci,Fr,Cs)}function _a(i,e=null){if(Nr.length){for(zl=e,Pr=[...new Set(Nr)],Nr.length=0,As=0;As<Pr.length;As++)Pr[As]();Pr=null,As=0,zl=null,_a(i,e)}}function Ed(i){if(_a(),Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,ci){ci.push(...e);return}for(ci=e,ci.sort((t,n)=>Xr(t)-Xr(n)),Cs=0;Cs<ci.length;Cs++)ci[Cs]();ci=null,Cs=0}}const Xr=i=>i.id==null?1/0:i.id;function Ad(i){Bl=!1,ta=!0,_a(i),qt.sort((e,t)=>Xr(e)-Xr(t));try{for(Vn=0;Vn<qt.length;Vn++){const e=qt[Vn];e&&e.active!==!1&&pi(e,null,14)}}finally{Vn=0,qt.length=0,Ed(),ta=!1,Rc=null,(qt.length||Nr.length||Fr.length)&&Ad(i)}}function wg(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||nt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||nt;f&&(s=t.map(d=>d.trim())),h&&(s=t.map(ea))}let a,l=n[a=Oa(e)]||n[a=Oa(Cn(e))];!l&&r&&(l=n[a=Oa(ss(e))]),l&&on(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,on(c,i,6,s)}}function Cd(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!Ue(i)){const l=c=>{const u=Cd(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(n.set(i,null),null):(Ne(r)?r.forEach(l=>o[l]=null):Ut(o,r),n.set(i,o),o)}function xa(i,e){return!i||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(i,e[0].toLowerCase()+e.slice(1))||Xe(i,ss(e))||Xe(i,e))}let sn=null,va=null;function na(i){const e=sn;return sn=i,va=i&&i.type.__scopeId||null,e}function or(i){va=i}function ar(){va=null}function ji(i,e=sn,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&Eu(-1);const r=na(e),o=i(...s);return na(r),n._d&&Eu(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function mu(i){const{type:e,vnode:t,proxy:n,withProxy:s,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=i;let p,_;const M=na(i);try{if(t.shapeFlag&4){const b=s||n;p=Tn(u.call(b,b,h,r,d,f,g)),_=l}else{const b=e;p=Tn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),_=e.props?l:Tg(l)}}catch(b){Or.length=0,ga(b,i,1),p=ot(mn)}let x=p;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:S}=x;b.length&&S&7&&(o&&b.some(xc)&&(_=Eg(_,o)),x=vi(x,_))}return t.dirs&&(x=vi(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),p=x,na(M),p}const Tg=i=>{let e;for(const t in i)(t==="class"||t==="style"||ha(t))&&((e||(e={}))[t]=i[t]);return e},Eg=(i,e)=>{const t={};for(const n in i)(!xc(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Ag(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?gu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!xa(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?gu(n,o,c):!0:!!o;return!1}function gu(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!xa(t,r))return!0}return!1}function Cg({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Rg=i=>i.__isSuspense;function Lg(i,e){e&&e.pendingBranch?Ne(i)?e.effects.push(...i):e.effects.push(i):Sg(i)}function Wo(i,e){if(bt){let t=bt.provides;const n=bt.parent&&bt.parent.provides;n===t&&(t=bt.provides=Object.create(n)),t[i]=e}}function mi(i,e,t=!1){const n=bt||sn;if(n){const s=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Ue(e)?e.call(n.proxy):e}}const _u={};function Vs(i,e,t){return Rd(i,e,t)}function Rd(i,e,{immediate:t,deep:n,flush:s,onTrack:r,onTrigger:o}=nt){const a=bt;let l,c=!1,u=!1;if(Rt(i)?(l=()=>i.value,c=Ul(i)):zs(i)?(l=()=>i,n=!0):Ne(i)?(u=!0,c=i.some(_=>zs(_)||Ul(_)),l=()=>i.map(_=>{if(Rt(_))return _.value;if(zs(_))return Xi(_);if(Ue(_))return pi(_,a,2)})):Ue(i)?e?l=()=>pi(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),on(i,a,3,[f])}:l=An,e&&n){const _=l;l=()=>Xi(_())}let h,f=_=>{h=p.onStop=()=>{pi(_,a,4)}};if($r)return f=An,e?t&&on(e,a,3,[l(),u?[]:void 0,f]):l(),An;let d=u?[]:_u;const g=()=>{if(p.active)if(e){const _=p.run();(n||c||(u?_.some((M,x)=>Gr(M,d[x])):Gr(_,d)))&&(h&&h(),on(e,a,3,[_,d===_u?void 0:d,f]),d=_)}else p.run()};g.allowRecurse=!!e;let m;s==="sync"?m=g:s==="post"?m=()=>Bt(g,a&&a.suspense):m=()=>Mg(g);const p=new Sc(l,m);return e?t?g():d=p.run():s==="post"?Bt(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&vc(a.scope.effects,p)}}function Pg(i,e,t){const n=this.proxy,s=St(i)?i.includes(".")?Ld(n,i):()=>n[i]:i.bind(n,n);let r;Ue(e)?r=e:(r=e.handler,t=e);const o=bt;qs(this);const a=Rd(s,r.bind(n),t);return o?qs(o):Yi(),a}function Ld(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function Xi(i,e){if(!dt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Rt(i))Xi(i.value,e);else if(Ne(i))for(let t=0;t<i.length;t++)Xi(i[t],e);else if(ed(i)||Bs(i))i.forEach(t=>{Xi(t,e)});else if(id(i))for(const t in i)Xi(i[t],e);return i}function Ig(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Od(()=>{i.isMounted=!0}),Ud(()=>{i.isUnmounting=!0}),i}const Jt=[Function,Array],Dg={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Jt,onEnter:Jt,onAfterEnter:Jt,onEnterCancelled:Jt,onBeforeLeave:Jt,onLeave:Jt,onAfterLeave:Jt,onLeaveCancelled:Jt,onBeforeAppear:Jt,onAppear:Jt,onAfterAppear:Jt,onAppearCancelled:Jt},setup(i,{slots:e}){const t=Qd(),n=Ig();let s;return()=>{const r=e.default&&Dd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const m of r)if(m.type!==mn){o=m;break}}const a=Ke(i),{mode:l}=a;if(n.isLeaving)return Ua(o);const c=xu(o);if(!c)return Ua(o);const u=kl(c,a,n,t);Vl(c,u);const h=t.subTree,f=h&&xu(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();s===void 0?s=m:m!==s&&(s=m,d=!0)}if(f&&f.type!==mn&&(!Hi(c,f)||d)){const m=kl(f,a,n,t);if(Vl(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},Ua(o);l==="in-out"&&c.type!==mn&&(m.delayLeave=(p,_,M)=>{const x=Id(n,f);x[String(f.key)]=f,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},Pd=Dg;function Id(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function kl(i,e,t,n){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:_,onAppearCancelled:M}=e,x=String(i.key),b=Id(t,i),S=(v,E)=>{v&&on(v,n,9,E)},R=(v,E)=>{const P=E[1];S(v,E),Ne(v)?v.every(z=>z.length<=1)&&P():v.length<=1&&P()},L={mode:r,persisted:o,beforeEnter(v){let E=a;if(!t.isMounted)if(s)E=m||a;else return;v._leaveCb&&v._leaveCb(!0);const P=b[x];P&&Hi(i,P)&&P.el._leaveCb&&P.el._leaveCb(),S(E,[v])},enter(v){let E=l,P=c,z=u;if(!t.isMounted)if(s)E=p||l,P=_||c,z=M||u;else return;let k=!1;const D=v._enterCb=F=>{k||(k=!0,F?S(z,[v]):S(P,[v]),L.delayedLeave&&L.delayedLeave(),v._enterCb=void 0)};E?R(E,[v,D]):D()},leave(v,E){const P=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return E();S(h,[v]);let z=!1;const k=v._leaveCb=D=>{z||(z=!0,E(),D?S(g,[v]):S(d,[v]),v._leaveCb=void 0,b[P]===i&&delete b[P])};b[P]=i,f?R(f,[v,k]):k()},clone(v){return kl(v,e,t,n)}};return L}function Ua(i){if(ya(i))return i=vi(i),i.children=null,i}function xu(i){return ya(i)?i.children?i.children[0]:void 0:i}function Vl(i,e){i.shapeFlag&6&&i.component?Vl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Dd(i,e=!1,t){let n=[],s=0;for(let r=0;r<i.length;r++){let o=i[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===hn?(o.patchFlag&128&&s++,n=n.concat(Dd(o.children,e,a))):(e||o.type!==mn)&&n.push(a!=null?vi(o,{key:a}):o)}if(s>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Nd(i){return Ue(i)?{setup:i,name:i.name}:i}const jo=i=>!!i.type.__asyncLoader,ya=i=>i.type.__isKeepAlive;function Ng(i,e){Fd(i,"a",e)}function Fg(i,e){Fd(i,"da",e)}function Fd(i,e,t=bt){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(ba(e,n,t),t){let s=t.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Og(n,e,t,s),s=s.parent}}function Og(i,e,t,n){const s=ba(e,i,n,!0);Bd(()=>{vc(n[e],s)},t)}function ba(i,e,t=bt,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ir(),qs(t);const a=on(e,t,i,o);return Yi(),sr(),a});return n?s.unshift(r):s.push(r),r}}const Zn=i=>(e,t=bt)=>(!$r||i==="sp")&&ba(i,e,t),Ug=Zn("bm"),Od=Zn("m"),Bg=Zn("bu"),zg=Zn("u"),Ud=Zn("bum"),Bd=Zn("um"),kg=Zn("sp"),Vg=Zn("rtg"),Hg=Zn("rtc");function Gg(i,e=bt){ba("ec",i,e)}function Wg(i,e){const t=sn;if(t===null)return i;const n=Sa(t)||t.proxy,s=i.dirs||(i.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=nt]=e[r];Ue(o)&&(o={mounted:o,updated:o}),o.deep&&Xi(a),s.push({dir:o,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c})}return i}function Ai(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(ir(),on(l,t,8,[i.el,a,i,e]),sr())}}const zd="components";function gi(i,e){return Vd(zd,i,!0,e)||i}const kd=Symbol();function jg(i){return St(i)?Vd(zd,i,!1)||i:i||kd}function Vd(i,e,t=!0,n=!1){const s=sn||bt;if(s){const r=s.type;{const a=b_(r,!1);if(a&&(a===e||a===Cn(e)||a===pa(Cn(e))))return r}const o=vu(s[i]||r[i],e)||vu(s.appContext[i],e);return!o&&n?r:o}}function vu(i,e){return i&&(i[e]||i[Cn(e)]||i[pa(Cn(e))])}const Hl=i=>i?ep(i)?Sa(i)||i.proxy:Hl(i.parent):null,ia=Ut(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Hl(i.parent),$root:i=>Hl(i.root),$emit:i=>i.emit,$options:i=>Gd(i),$forceUpdate:i=>i.f||(i.f=()=>Sd(i.update)),$nextTick:i=>i.n||(i.n=Md.bind(i.proxy)),$watch:i=>Pg.bind(i)}),Xg={get({_:i},e){const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(n!==nt&&Xe(n,e))return o[e]=1,n[e];if(s!==nt&&Xe(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&Xe(c,e))return o[e]=3,r[e];if(t!==nt&&Xe(t,e))return o[e]=4,t[e];Gl&&(o[e]=0)}}const u=ia[e];let h,f;if(u)return e==="$attrs"&&Yt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==nt&&Xe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Xe(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return s!==nt&&Xe(s,e)?(s[e]=t,!0):n!==nt&&Xe(n,e)?(n[e]=t,!0):Xe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==nt&&Xe(i,o)||e!==nt&&Xe(e,o)||(a=r[0])&&Xe(a,o)||Xe(n,o)||Xe(ia,o)||Xe(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Xe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let Gl=!0;function qg(i){const e=Gd(i),t=i.proxy,n=i.ctx;Gl=!1,e.beforeCreate&&yu(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:M,destroyed:x,unmounted:b,render:S,renderTracked:R,renderTriggered:L,errorCaptured:v,serverPrefetch:E,expose:P,inheritAttrs:z,components:k,directives:D,filters:F}=e;if(c&&$g(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const q in o){const H=o[q];Ue(H)&&(n[q]=H.bind(t))}if(s){const q=s.call(t,t);dt(q)&&(i.data=rr(q))}if(Gl=!0,r)for(const q in r){const H=r[q],le=Ue(H)?H.bind(t,t):Ue(H.get)?H.get.bind(t,t):An,he=!Ue(H)&&Ue(H.set)?H.set.bind(t):An,be=tn({get:le,set:he});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>be.value,set:X=>be.value=X})}if(a)for(const q in a)Hd(a[q],n,t,q);if(l){const q=Ue(l)?l.call(t):l;Reflect.ownKeys(q).forEach(H=>{Wo(H,q[H])})}u&&yu(u,i,"c");function ee(q,H){Ne(H)?H.forEach(le=>q(le.bind(t))):H&&q(H.bind(t))}if(ee(Ug,h),ee(Od,f),ee(Bg,d),ee(zg,g),ee(Ng,m),ee(Fg,p),ee(Gg,v),ee(Hg,R),ee(Vg,L),ee(Ud,M),ee(Bd,b),ee(kg,E),Ne(P))if(P.length){const q=i.exposed||(i.exposed={});P.forEach(H=>{Object.defineProperty(q,H,{get:()=>t[H],set:le=>t[H]=le})})}else i.exposed||(i.exposed={});S&&i.render===An&&(i.render=S),z!=null&&(i.inheritAttrs=z),k&&(i.components=k),D&&(i.directives=D)}function $g(i,e,t=An,n=!1){Ne(i)&&(i=Wl(i));for(const s in i){const r=i[s];let o;dt(r)?"default"in r?o=mi(r.from||s,r.default,!0):o=mi(r.from||s):o=mi(r),Rt(o)&&n?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function yu(i,e,t){on(Ne(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Hd(i,e,t,n){const s=n.includes(".")?Ld(t,n):()=>t[n];if(St(i)){const r=e[i];Ue(r)&&Vs(s,r)}else if(Ue(i))Vs(s,i.bind(t));else if(dt(i))if(Ne(i))i.forEach(r=>Hd(r,e,t,n));else{const r=Ue(i.handler)?i.handler.bind(t):e[i.handler];Ue(r)&&Vs(s,r,i)}}function Gd(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>sa(l,c,o,!0)),sa(l,e,o)),r.set(e,l),l}function sa(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&sa(i,r,t,!0),s&&s.forEach(o=>sa(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Kg[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Kg={data:bu,props:Bi,emits:Bi,methods:Bi,computed:Bi,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:Bi,directives:Bi,watch:Zg,provide:bu,inject:Yg};function bu(i,e){return e?i?function(){return Ut(Ue(i)?i.call(this,this):i,Ue(e)?e.call(this,this):e)}:e:i}function Yg(i,e){return Bi(Wl(i),Wl(e))}function Wl(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Nt(i,e){return i?[...new Set([].concat(i,e))]:e}function Bi(i,e){return i?Ut(Ut(Object.create(null),i),e):e}function Zg(i,e){if(!i)return e;if(!e)return i;const t=Ut(Object.create(null),i);for(const n in e)t[n]=Nt(i[n],e[n]);return t}function Jg(i,e,t,n=!1){const s={},r={};Qo(r,Ma,1),i.propsDefaults=Object.create(null),Wd(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:fg(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Qg(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=Ke(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xa(i.emitsOptions,f))continue;const d=e[f];if(l)if(Xe(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Cn(f);s[g]=jl(l,a,g,d,i,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Wd(i,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!Xe(e,h)&&((u=ss(h))===h||!Xe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=jl(l,a,h,void 0,i,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!Xe(e,h))&&(delete r[h],c=!0)}c&&Kn(i,"set","$attrs")}function Wd(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ho(l))continue;const c=e[l];let u;s&&Xe(s,u=Cn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:xa(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=Ke(t),c=a||nt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=jl(s,l,h,c[h],i,!Xe(c,h))}}return o}function jl(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=Xe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ue(l)){const{propsDefaults:c}=s;t in c?n=c[t]:(qs(s),n=c[t]=l.call(null,e),Yi())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===ss(t))&&(n=!0))}return n}function jd(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!Ue(i)){const u=h=>{l=!0;const[f,d]=jd(h,e,!0);Ut(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return n.set(i,Us),Us;if(Ne(r))for(let u=0;u<r.length;u++){const h=Cn(r[u]);Mu(h)&&(o[h]=nt)}else if(r)for(const u in r){const h=Cn(u);if(Mu(h)){const f=r[u],d=o[h]=Ne(f)||Ue(f)?{type:f}:f;if(d){const g=Tu(Boolean,d.type),m=Tu(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||Xe(d,"default"))&&a.push(h)}}}const c=[o,a];return n.set(i,c),c}function Mu(i){return i[0]!=="$"}function Su(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function wu(i,e){return Su(i)===Su(e)}function Tu(i,e){return Ne(e)?e.findIndex(t=>wu(t,i)):Ue(e)&&wu(e,i)?0:-1}const Xd=i=>i[0]==="_"||i==="$stable",Lc=i=>Ne(i)?i.map(Tn):[Tn(i)],e_=(i,e,t)=>{if(e._n)return e;const n=ji((...s)=>Lc(e(...s)),t);return n._c=!1,n},qd=(i,e,t)=>{const n=i._ctx;for(const s in i){if(Xd(s))continue;const r=i[s];if(Ue(r))e[s]=e_(s,r,n);else if(r!=null){const o=Lc(r);e[s]=()=>o}}},$d=(i,e)=>{const t=Lc(e);i.slots.default=()=>t},t_=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Ke(e),Qo(e,"_",t)):qd(e,i.slots={})}else i.slots={},e&&$d(i,e);Qo(i.slots,Ma,1)},n_=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=nt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(Ut(s,e),!t&&a===1&&delete s._):(r=!e.$stable,qd(e,s)),o=e}else e&&($d(i,e),o={default:1});if(r)for(const a in s)!Xd(a)&&!(a in o)&&delete s[a]};function Kd(){return{app:null,config:{isNativeTag:Im,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i_=0;function s_(i,e){return function(n,s=null){Ue(n)||(n=Object.assign({},n)),s!=null&&!dt(s)&&(s=null);const r=Kd(),o=new Set;let a=!1;const l=r.app={_uid:i_++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:S_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ue(c.install)?(o.add(c),c.install(l,...u)):Ue(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=ot(n,s);return f.appContext=r,i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Sa(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function Xl(i,e,t,n,s=!1){if(Ne(i)){i.forEach((f,d)=>Xl(f,e&&(Ne(e)?e[d]:e),t,n,s));return}if(jo(n)&&!s)return;const r=n.shapeFlag&4?Sa(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(St(c)?(u[c]=null,Xe(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),Ue(l))pi(l,a,12,[o,u]);else{const f=St(l),d=Rt(l);if(f||d){const g=()=>{if(i.f){const m=f?u[l]:l.value;s?Ne(m)&&vc(m,r):Ne(m)?m.includes(r)||m.push(r):f?(u[l]=[r],Xe(h,l)&&(h[l]=u[l])):(l.value=[r],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Xe(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Bt(g,t)):g()}}}const Bt=Lg;function r_(i){return o_(i)}function o_(i,e){const t=Bm();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=An,cloneNode:g,insertStaticContent:m}=i,p=(T,C,j,K=null,ne=null,ce=null,de=!1,se=null,ge=!!C.dynamicChildren)=>{if(T===C)return;T&&!Hi(T,C)&&(K=oe(T),te(T,ne,ce,!0),T=null),C.patchFlag===-2&&(ge=!1,C.dynamicChildren=null);const{type:ae,ref:w,shapeFlag:y}=C;switch(ae){case Pc:_(T,C,j,K);break;case mn:M(T,C,j,K);break;case Ba:T==null&&x(C,j,K,de);break;case hn:D(T,C,j,K,ne,ce,de,se,ge);break;default:y&1?R(T,C,j,K,ne,ce,de,se,ge):y&6?F(T,C,j,K,ne,ce,de,se,ge):(y&64||y&128)&&ae.process(T,C,j,K,ne,ce,de,se,ge,fe)}w!=null&&ne&&Xl(w,T&&T.ref,ce,C||T,!C)},_=(T,C,j,K)=>{if(T==null)n(C.el=a(C.children),j,K);else{const ne=C.el=T.el;C.children!==T.children&&c(ne,C.children)}},M=(T,C,j,K)=>{T==null?n(C.el=l(C.children||""),j,K):C.el=T.el},x=(T,C,j,K)=>{[T.el,T.anchor]=m(T.children,C,j,K,T.el,T.anchor)},b=({el:T,anchor:C},j,K)=>{let ne;for(;T&&T!==C;)ne=f(T),n(T,j,K),T=ne;n(C,j,K)},S=({el:T,anchor:C})=>{let j;for(;T&&T!==C;)j=f(T),s(T),T=j;s(C)},R=(T,C,j,K,ne,ce,de,se,ge)=>{de=de||C.type==="svg",T==null?L(C,j,K,ne,ce,de,se,ge):P(T,C,ne,ce,de,se,ge)},L=(T,C,j,K,ne,ce,de,se)=>{let ge,ae;const{type:w,props:y,shapeFlag:B,transition:$,patchFlag:re,dirs:ue}=T;if(T.el&&g!==void 0&&re===-1)ge=T.el=g(T.el);else{if(ge=T.el=o(T.type,ce,y&&y.is,y),B&8?u(ge,T.children):B&16&&E(T.children,ge,null,K,ne,ce&&w!=="foreignObject",de,se),ue&&Ai(T,null,K,"created"),y){for(const pe in y)pe!=="value"&&!Ho(pe)&&r(ge,pe,null,y[pe],ce,T.children,K,ne,Q);"value"in y&&r(ge,"value",null,y.value),(ae=y.onVnodeBeforeMount)&&Mn(ae,K,T)}v(ge,T,T.scopeId,de,K)}ue&&Ai(T,null,K,"beforeMount");const ye=(!ne||ne&&!ne.pendingBranch)&&$&&!$.persisted;ye&&$.beforeEnter(ge),n(ge,C,j),((ae=y&&y.onVnodeMounted)||ye||ue)&&Bt(()=>{ae&&Mn(ae,K,T),ye&&$.enter(ge),ue&&Ai(T,null,K,"mounted")},ne)},v=(T,C,j,K,ne)=>{if(j&&d(T,j),K)for(let ce=0;ce<K.length;ce++)d(T,K[ce]);if(ne){let ce=ne.subTree;if(C===ce){const de=ne.vnode;v(T,de,de.scopeId,de.slotScopeIds,ne.parent)}}},E=(T,C,j,K,ne,ce,de,se,ge=0)=>{for(let ae=ge;ae<T.length;ae++){const w=T[ae]=se?ui(T[ae]):Tn(T[ae]);p(null,w,C,j,K,ne,ce,de,se)}},P=(T,C,j,K,ne,ce,de)=>{const se=C.el=T.el;let{patchFlag:ge,dynamicChildren:ae,dirs:w}=C;ge|=T.patchFlag&16;const y=T.props||nt,B=C.props||nt;let $;j&&Ci(j,!1),($=B.onVnodeBeforeUpdate)&&Mn($,j,C,T),w&&Ai(C,T,j,"beforeUpdate"),j&&Ci(j,!0);const re=ne&&C.type!=="foreignObject";if(ae?z(T.dynamicChildren,ae,se,j,K,re,ce):de||le(T,C,se,null,j,K,re,ce,!1),ge>0){if(ge&16)k(se,C,y,B,j,K,ne);else if(ge&2&&y.class!==B.class&&r(se,"class",null,B.class,ne),ge&4&&r(se,"style",y.style,B.style,ne),ge&8){const ue=C.dynamicProps;for(let ye=0;ye<ue.length;ye++){const pe=ue[ye],Y=y[pe],Ee=B[pe];(Ee!==Y||pe==="value")&&r(se,pe,Y,Ee,ne,T.children,j,K,Q)}}ge&1&&T.children!==C.children&&u(se,C.children)}else!de&&ae==null&&k(se,C,y,B,j,K,ne);(($=B.onVnodeUpdated)||w)&&Bt(()=>{$&&Mn($,j,C,T),w&&Ai(C,T,j,"updated")},K)},z=(T,C,j,K,ne,ce,de)=>{for(let se=0;se<C.length;se++){const ge=T[se],ae=C[se],w=ge.el&&(ge.type===hn||!Hi(ge,ae)||ge.shapeFlag&70)?h(ge.el):j;p(ge,ae,w,null,K,ne,ce,de,!0)}},k=(T,C,j,K,ne,ce,de)=>{if(j!==K){for(const se in K){if(Ho(se))continue;const ge=K[se],ae=j[se];ge!==ae&&se!=="value"&&r(T,se,ae,ge,de,C.children,ne,ce,Q)}if(j!==nt)for(const se in j)!Ho(se)&&!(se in K)&&r(T,se,j[se],null,de,C.children,ne,ce,Q);"value"in K&&r(T,"value",j.value,K.value)}},D=(T,C,j,K,ne,ce,de,se,ge)=>{const ae=C.el=T?T.el:a(""),w=C.anchor=T?T.anchor:a("");let{patchFlag:y,dynamicChildren:B,slotScopeIds:$}=C;$&&(se=se?se.concat($):$),T==null?(n(ae,j,K),n(w,j,K),E(C.children,j,w,ne,ce,de,se,ge)):y>0&&y&64&&B&&T.dynamicChildren?(z(T.dynamicChildren,B,j,ne,ce,de,se),(C.key!=null||ne&&C===ne.subTree)&&Yd(T,C,!0)):le(T,C,j,w,ne,ce,de,se,ge)},F=(T,C,j,K,ne,ce,de,se,ge)=>{C.slotScopeIds=se,T==null?C.shapeFlag&512?ne.ctx.activate(C,j,K,de,ge):G(C,j,K,ne,ce,de,ge):ee(T,C,ge)},G=(T,C,j,K,ne,ce,de)=>{const se=T.component=g_(T,K,ne);if(ya(T)&&(se.ctx.renderer=fe),__(se),se.asyncDep){if(ne&&ne.registerDep(se,q),!T.el){const ge=se.subTree=ot(mn);M(null,ge,C,j)}return}q(se,T,C,j,ne,ce,de)},ee=(T,C,j)=>{const K=C.component=T.component;if(Ag(T,C,j))if(K.asyncDep&&!K.asyncResolved){H(K,C,j);return}else K.next=C,bg(K.update),K.update();else C.el=T.el,K.vnode=C},q=(T,C,j,K,ne,ce,de)=>{const se=()=>{if(T.isMounted){let{next:w,bu:y,u:B,parent:$,vnode:re}=T,ue=w,ye;Ci(T,!1),w?(w.el=re.el,H(T,w,de)):w=re,y&&Go(y),(ye=w.props&&w.props.onVnodeBeforeUpdate)&&Mn(ye,$,w,re),Ci(T,!0);const pe=mu(T),Y=T.subTree;T.subTree=pe,p(Y,pe,h(Y.el),oe(Y),T,ne,ce),w.el=pe.el,ue===null&&Cg(T,pe.el),B&&Bt(B,ne),(ye=w.props&&w.props.onVnodeUpdated)&&Bt(()=>Mn(ye,$,w,re),ne)}else{let w;const{el:y,props:B}=C,{bm:$,m:re,parent:ue}=T,ye=jo(C);Ci(T,!1),$&&Go($),!ye&&(w=B&&B.onVnodeBeforeMount)&&Mn(w,ue,C),Ci(T,!0);{const pe=T.subTree=mu(T);p(null,pe,j,K,T,ne,ce),C.el=pe.el}if(re&&Bt(re,ne),!ye&&(w=B&&B.onVnodeMounted)){const pe=C;Bt(()=>Mn(w,ue,pe),ne)}(C.shapeFlag&256||ue&&jo(ue.vnode)&&ue.vnode.shapeFlag&256)&&T.a&&Bt(T.a,ne),T.isMounted=!0,C=j=K=null}},ge=T.effect=new Sc(se,()=>Sd(ae),T.scope),ae=T.update=()=>ge.run();ae.id=T.uid,Ci(T,!0),ae()},H=(T,C,j)=>{C.component=T;const K=T.vnode.props;T.vnode=C,T.next=null,Qg(T,C.props,K,j),n_(T,C.children,j),ir(),_a(void 0,T.update),sr()},le=(T,C,j,K,ne,ce,de,se,ge=!1)=>{const ae=T&&T.children,w=T?T.shapeFlag:0,y=C.children,{patchFlag:B,shapeFlag:$}=C;if(B>0){if(B&128){be(ae,y,j,K,ne,ce,de,se,ge);return}else if(B&256){he(ae,y,j,K,ne,ce,de,se,ge);return}}$&8?(w&16&&Q(ae,ne,ce),y!==ae&&u(j,y)):w&16?$&16?be(ae,y,j,K,ne,ce,de,se,ge):Q(ae,ne,ce,!0):(w&8&&u(j,""),$&16&&E(y,j,K,ne,ce,de,se,ge))},he=(T,C,j,K,ne,ce,de,se,ge)=>{T=T||Us,C=C||Us;const ae=T.length,w=C.length,y=Math.min(ae,w);let B;for(B=0;B<y;B++){const $=C[B]=ge?ui(C[B]):Tn(C[B]);p(T[B],$,j,null,ne,ce,de,se,ge)}ae>w?Q(T,ne,ce,!0,!1,y):E(C,j,K,ne,ce,de,se,ge,y)},be=(T,C,j,K,ne,ce,de,se,ge)=>{let ae=0;const w=C.length;let y=T.length-1,B=w-1;for(;ae<=y&&ae<=B;){const $=T[ae],re=C[ae]=ge?ui(C[ae]):Tn(C[ae]);if(Hi($,re))p($,re,j,null,ne,ce,de,se,ge);else break;ae++}for(;ae<=y&&ae<=B;){const $=T[y],re=C[B]=ge?ui(C[B]):Tn(C[B]);if(Hi($,re))p($,re,j,null,ne,ce,de,se,ge);else break;y--,B--}if(ae>y){if(ae<=B){const $=B+1,re=$<w?C[$].el:K;for(;ae<=B;)p(null,C[ae]=ge?ui(C[ae]):Tn(C[ae]),j,re,ne,ce,de,se,ge),ae++}}else if(ae>B)for(;ae<=y;)te(T[ae],ne,ce,!0),ae++;else{const $=ae,re=ae,ue=new Map;for(ae=re;ae<=B;ae++){const Me=C[ae]=ge?ui(C[ae]):Tn(C[ae]);Me.key!=null&&ue.set(Me.key,ae)}let ye,pe=0;const Y=B-re+1;let Ee=!1,Le=0;const we=new Array(Y);for(ae=0;ae<Y;ae++)we[ae]=0;for(ae=$;ae<=y;ae++){const Me=T[ae];if(pe>=Y){te(Me,ne,ce,!0);continue}let Fe;if(Me.key!=null)Fe=ue.get(Me.key);else for(ye=re;ye<=B;ye++)if(we[ye-re]===0&&Hi(Me,C[ye])){Fe=ye;break}Fe===void 0?te(Me,ne,ce,!0):(we[Fe-re]=ae+1,Fe>=Le?Le=Fe:Ee=!0,p(Me,C[Fe],j,null,ne,ce,de,se,ge),pe++)}const Ce=Ee?a_(we):Us;for(ye=Ce.length-1,ae=Y-1;ae>=0;ae--){const Me=re+ae,Fe=C[Me],Qe=Me+1<w?C[Me+1].el:K;we[ae]===0?p(null,Fe,j,Qe,ne,ce,de,se,ge):Ee&&(ye<0||ae!==Ce[ye]?X(Fe,j,Qe,2):ye--)}}},X=(T,C,j,K,ne=null)=>{const{el:ce,type:de,transition:se,children:ge,shapeFlag:ae}=T;if(ae&6){X(T.component.subTree,C,j,K);return}if(ae&128){T.suspense.move(C,j,K);return}if(ae&64){de.move(T,C,j,fe);return}if(de===hn){n(ce,C,j);for(let y=0;y<ge.length;y++)X(ge[y],C,j,K);n(T.anchor,C,j);return}if(de===Ba){b(T,C,j);return}if(K!==2&&ae&1&&se)if(K===0)se.beforeEnter(ce),n(ce,C,j),Bt(()=>se.enter(ce),ne);else{const{leave:y,delayLeave:B,afterLeave:$}=se,re=()=>n(ce,C,j),ue=()=>{y(ce,()=>{re(),$&&$()})};B?B(ce,re,ue):ue()}else n(ce,C,j)},te=(T,C,j,K=!1,ne=!1)=>{const{type:ce,props:de,ref:se,children:ge,dynamicChildren:ae,shapeFlag:w,patchFlag:y,dirs:B}=T;if(se!=null&&Xl(se,null,j,T,!0),w&256){C.ctx.deactivate(T);return}const $=w&1&&B,re=!jo(T);let ue;if(re&&(ue=de&&de.onVnodeBeforeUnmount)&&Mn(ue,C,T),w&6)I(T.component,j,K);else{if(w&128){T.suspense.unmount(j,K);return}$&&Ai(T,null,C,"beforeUnmount"),w&64?T.type.remove(T,C,j,ne,fe,K):ae&&(ce!==hn||y>0&&y&64)?Q(ae,C,j,!1,!0):(ce===hn&&y&384||!ne&&w&16)&&Q(ge,C,j),K&&xe(T)}(re&&(ue=de&&de.onVnodeUnmounted)||$)&&Bt(()=>{ue&&Mn(ue,C,T),$&&Ai(T,null,C,"unmounted")},j)},xe=T=>{const{type:C,el:j,anchor:K,transition:ne}=T;if(C===hn){U(j,K);return}if(C===Ba){S(T);return}const ce=()=>{s(j),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(T.shapeFlag&1&&ne&&!ne.persisted){const{leave:de,delayLeave:se}=ne,ge=()=>de(j,ce);se?se(T.el,ce,ge):ge()}else ce()},U=(T,C)=>{let j;for(;T!==C;)j=f(T),s(T),T=j;s(C)},I=(T,C,j)=>{const{bum:K,scope:ne,update:ce,subTree:de,um:se}=T;K&&Go(K),ne.stop(),ce&&(ce.active=!1,te(de,T,C,j)),se&&Bt(se,C),Bt(()=>{T.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Q=(T,C,j,K=!1,ne=!1,ce=0)=>{for(let de=ce;de<T.length;de++)te(T[de],C,j,K,ne)},oe=T=>T.shapeFlag&6?oe(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),_e=(T,C,j)=>{T==null?C._vnode&&te(C._vnode,null,null,!0):p(C._vnode||null,T,C,null,null,null,j),Ed(),C._vnode=T},fe={p,um:te,m:X,r:xe,mt:G,mc:E,pc:le,pbc:z,n:oe,o:i};return{render:_e,hydrate:void 0,createApp:s_(_e)}}function Ci({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Yd(i,e,t=!1){const n=i.children,s=e.children;if(Ne(n)&&Ne(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ui(s[r]),a.el=o.el),t||Yd(o,a))}}function a_(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const l_=i=>i.__isTeleport,hn=Symbol(void 0),Pc=Symbol(void 0),mn=Symbol(void 0),Ba=Symbol(void 0),Or=[];let dn=null;function wt(i=!1){Or.push(dn=i?null:[])}function c_(){Or.pop(),dn=Or[Or.length-1]||null}let qr=1;function Eu(i){qr+=i}function Zd(i){return i.dynamicChildren=qr>0?dn||Us:null,c_(),qr>0&&dn&&dn.push(i),i}function rn(i,e,t,n,s,r){return Zd(De(i,e,t,n,s,r,!0))}function Ur(i,e,t,n,s){return Zd(ot(i,e,t,n,s,!0))}function ql(i){return i?i.__v_isVNode===!0:!1}function Hi(i,e){return i.type===e.type&&i.key===e.key}const Ma="__vInternal",Jd=({key:i})=>i??null,Xo=({ref:i,ref_key:e,ref_for:t})=>i!=null?St(i)||Rt(i)||Ue(i)?{i:sn,r:i,k:e,f:!!t}:i:null;function De(i,e=null,t=null,n=0,s=null,r=i===hn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Jd(e),ref:e&&Xo(e),scopeId:va,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null};return a?(Ic(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),qr>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const ot=u_;function u_(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===kd)&&(i=mn),ql(i)){const a=vi(i,e,!0);return t&&Ic(a,t),qr>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(i)]=a:dn.push(a)),a.patchFlag|=-2,a}if(M_(i)&&(i=i.__vccOpts),e){e=h_(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=is(a)),dt(l)&&(md(l)&&!Ne(l)&&(l=Ut({},l)),e.style=nr(l))}const o=St(i)?1:Rg(i)?128:l_(i)?64:dt(i)?4:Ue(i)?2:0;return De(i,e,t,n,s,o,r,!0)}function h_(i){return i?md(i)||Ma in i?Ut({},i):i:null}function vi(i,e,t=!1){const{props:n,ref:s,patchFlag:r,children:o}=i,a=e?d_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Jd(a),ref:e&&e.ref?t&&s?Ne(s)?s.concat(Xo(e)):[s,Xo(e)]:Xo(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==hn?r===-1?16:r|16:r,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&vi(i.ssContent),ssFallback:i.ssFallback&&vi(i.ssFallback),el:i.el,anchor:i.anchor}}function f_(i=" ",e=0){return ot(Pc,null,i,e)}function qo(i="",e=!1){return e?(wt(),Ur(mn,null,i)):ot(mn,null,i)}function Tn(i){return i==null||typeof i=="boolean"?ot(mn):Ne(i)?ot(hn,null,i.slice()):typeof i=="object"?ui(i):ot(Pc,null,String(i))}function ui(i){return i.el===null||i.memo?i:vi(i)}function Ic(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),Ic(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Ma in e)?e._ctx=sn:s===3&&sn&&(sn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:sn},t=32):(e=String(e),n&64?(t=16,e=[f_(e)]):t=8);i.children=e,i.shapeFlag|=t}function d_(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=is([e.class,n.class]));else if(s==="style")e.style=nr([e.style,n.style]);else if(ha(s)){const r=e[s],o=n[s];o&&r!==o&&!(Ne(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function Mn(i,e,t,n=null){on(i,e,7,[t,n])}const p_=Kd();let m_=0;function g_(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||p_,r={uid:m_++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new zm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jd(n,s),emitsOptions:Cd(n,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:n.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=wg.bind(null,r),i.ce&&i.ce(r),r}let bt=null;const Qd=()=>bt||sn,qs=i=>{bt=i,i.scope.on()},Yi=()=>{bt&&bt.scope.off(),bt=null};function ep(i){return i.vnode.shapeFlag&4}let $r=!1;function __(i,e=!1){$r=e;const{props:t,children:n}=i.vnode,s=ep(i);Jg(i,t,s,e),t_(i,n);const r=s?x_(i,e):void 0;return $r=!1,r}function x_(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=gd(new Proxy(i.ctx,Xg));const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?y_(i):null;qs(i),ir();const r=pi(n,i,0,[i.props,s]);if(sr(),Yi(),td(r)){if(r.then(Yi,Yi),e)return r.then(o=>{Au(i,o)}).catch(o=>{ga(o,i,0)});i.asyncDep=r}else Au(i,r)}else tp(i)}function Au(i,e,t){Ue(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:dt(e)&&(i.setupState=yd(e)),tp(i)}function tp(i,e,t){const n=i.type;i.render||(i.render=n.render||An),qs(i),ir(),qg(i),sr(),Yi()}function v_(i){return new Proxy(i.attrs,{get(e,t){return Yt(i,"get","$attrs"),e[t]}})}function y_(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=v_(i))},slots:i.slots,emit:i.emit,expose:e}}function Sa(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(yd(gd(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ia)return ia[t](i)}}))}function b_(i,e=!0){return Ue(i)?i.displayName||i.name:i.name||e&&i.__name}function M_(i){return Ue(i)&&"__vccOpts"in i}const tn=(i,e)=>xg(i,e,$r);function Dc(i,e,t){const n=arguments.length;return n===2?dt(e)&&!Ne(e)?ql(e)?ot(i,null,[e]):ot(i,e):ot(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&ql(t)&&(t=[t]),ot(i,e,t))}const S_="3.2.37",w_="http://www.w3.org/2000/svg",Gi=typeof document<"u"?document:null,Cu=Gi&&Gi.createElement("template"),T_={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e?Gi.createElementNS(w_,i):Gi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Gi.createTextNode(i),createComment:i=>Gi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Gi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Cu.innerHTML=n?`<svg>${i}</svg>`:i;const a=Cu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function E_(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function A_(i,e,t){const n=i.style,s=St(t);if(t&&!s){for(const r in t)$l(n,r,t[r]);if(e&&!St(e))for(const r in e)t[r]==null&&$l(n,r,"")}else{const r=n.display;s?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=r)}}const Ru=/\s*!important$/;function $l(i,e,t){if(Ne(t))t.forEach(n=>$l(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=C_(i,e);Ru.test(t)?i.setProperty(ss(n),t.replace(Ru,""),"important"):i[n]=t}}const Lu=["Webkit","Moz","ms"],za={};function C_(i,e){const t=za[e];if(t)return t;let n=Cn(e);if(n!=="filter"&&n in i)return za[e]=n;n=pa(n);for(let s=0;s<Lu.length;s++){const r=Lu[s]+n;if(r in i)return za[e]=r}return e}const Pu="http://www.w3.org/1999/xlink";function R_(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Pu,e.slice(6,e.length)):i.setAttributeNS(Pu,e,t);else{const r=Cm(e);t==null||r&&!Jf(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function L_(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Jf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[np,P_]=(()=>{let i=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(i=performance.now.bind(performance));const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let Kl=0;const I_=Promise.resolve(),D_=()=>{Kl=0},N_=()=>Kl||(I_.then(D_),Kl=np());function Rs(i,e,t,n){i.addEventListener(e,t,n)}function F_(i,e,t,n){i.removeEventListener(e,t,n)}function O_(i,e,t,n,s=null){const r=i._vei||(i._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=U_(e);if(n){const c=r[e]=B_(n,s);Rs(i,a,c,l)}else o&&(F_(i,a,o,l),r[e]=void 0)}}const Iu=/(?:Once|Passive|Capture)$/;function U_(i){let e;if(Iu.test(i)){e={};let t;for(;t=i.match(Iu);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[ss(i.slice(2)),e]}function B_(i,e){const t=n=>{const s=n.timeStamp||np();(P_||s>=t.attached-1)&&on(z_(n,t.value),e,5,[n])};return t.value=i,t.attached=N_(),t}function z_(i,e){if(Ne(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const Du=/^on[a-z]/,k_=(i,e,t,n,s=!1,r,o,a,l)=>{e==="class"?E_(i,n,s):e==="style"?A_(i,t,n):ha(e)?xc(e)||O_(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):V_(i,e,n,s))?L_(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),R_(i,e,n,s))};function V_(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Du.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Du.test(e)&&St(t)?!1:e in i}const ei="transition",mr="animation",Hs=(i,{slots:e})=>Dc(Pd,H_(i),e);Hs.displayName="Transition";const ip={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Hs.props=Ut({},Pd.props,ip);const Ri=(i,e=[])=>{Ne(i)?i.forEach(t=>t(...e)):i&&i(...e)},Nu=i=>i?Ne(i)?i.some(e=>e.length>1):i.length>1:!1;function H_(i){const e={};for(const k in i)k in ip||(e[k]=i[k]);if(i.css===!1)return e;const{name:t="v",type:n,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=i,g=G_(s),m=g&&g[0],p=g&&g[1],{onBeforeEnter:_,onEnter:M,onEnterCancelled:x,onLeave:b,onLeaveCancelled:S,onBeforeAppear:R=_,onAppear:L=M,onAppearCancelled:v=x}=e,E=(k,D,F)=>{Li(k,D?u:a),Li(k,D?c:o),F&&F()},P=(k,D)=>{k._isLeaving=!1,Li(k,h),Li(k,d),Li(k,f),D&&D()},z=k=>(D,F)=>{const G=k?L:M,ee=()=>E(D,k,F);Ri(G,[D,ee]),Fu(()=>{Li(D,k?l:r),ti(D,k?u:a),Nu(G)||Ou(D,n,m,ee)})};return Ut(e,{onBeforeEnter(k){Ri(_,[k]),ti(k,r),ti(k,o)},onBeforeAppear(k){Ri(R,[k]),ti(k,l),ti(k,c)},onEnter:z(!1),onAppear:z(!0),onLeave(k,D){k._isLeaving=!0;const F=()=>P(k,D);ti(k,h),X_(),ti(k,f),Fu(()=>{k._isLeaving&&(Li(k,h),ti(k,d),Nu(b)||Ou(k,n,p,F))}),Ri(b,[k,F])},onEnterCancelled(k){E(k,!1),Ri(x,[k])},onAppearCancelled(k){E(k,!0),Ri(v,[k])},onLeaveCancelled(k){P(k),Ri(S,[k])}})}function G_(i){if(i==null)return null;if(dt(i))return[ka(i.enter),ka(i.leave)];{const e=ka(i);return[e,e]}}function ka(i){return ea(i)}function ti(i,e){e.split(/\s+/).forEach(t=>t&&i.classList.add(t)),(i._vtc||(i._vtc=new Set)).add(e)}function Li(i,e){e.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const{_vtc:t}=i;t&&(t.delete(e),t.size||(i._vtc=void 0))}function Fu(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let W_=0;function Ou(i,e,t,n){const s=i._endId=++W_,r=()=>{s===i._endId&&n()};if(t)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=j_(i,e);if(!o)return n();const c=o+"end";let u=0;const h=()=>{i.removeEventListener(c,f),r()},f=d=>{d.target===i&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),i.addEventListener(c,f)}function j_(i,e){const t=window.getComputedStyle(i),n=g=>(t[g]||"").split(", "),s=n(ei+"Delay"),r=n(ei+"Duration"),o=Uu(s,r),a=n(mr+"Delay"),l=n(mr+"Duration"),c=Uu(a,l);let u=null,h=0,f=0;e===ei?o>0&&(u=ei,h=o,f=r.length):e===mr?c>0&&(u=mr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ei:mr:null,f=u?u===ei?r.length:l.length:0);const d=u===ei&&/\b(transform|all)(,|$)/.test(t[ei+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function Uu(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max(...e.map((t,n)=>Bu(t)+Bu(i[n])))}function Bu(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function X_(){return document.body.offsetHeight}const zu=i=>{const e=i.props["onUpdate:modelValue"]||!1;return Ne(e)?t=>Go(e,t):e};function q_(i){i.target.composing=!0}function ku(i){const e=i.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $_={created(i,{modifiers:{lazy:e,trim:t,number:n}},s){i._assign=zu(s);const r=n||s.props&&s.props.type==="number";Rs(i,e?"change":"input",o=>{if(o.target.composing)return;let a=i.value;t&&(a=a.trim()),r&&(a=ea(a)),i._assign(a)}),t&&Rs(i,"change",()=>{i.value=i.value.trim()}),e||(Rs(i,"compositionstart",q_),Rs(i,"compositionend",ku),Rs(i,"change",ku))},mounted(i,{value:e}){i.value=e??""},beforeUpdate(i,{value:e,modifiers:{lazy:t,trim:n,number:s}},r){if(i._assign=zu(r),i.composing||document.activeElement===i&&i.type!=="range"&&(t||n&&i.value.trim()===e||(s||i.type==="number")&&ea(i.value)===e))return;const o=e??"";i.value!==o&&(i.value=o)}},K_=["ctrl","shift","alt","meta"],Y_={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,e)=>K_.some(t=>i[`${t}Key`]&&!e.includes(t))},Z_=(i,e)=>(t,...n)=>{for(let s=0;s<e.length;s++){const r=Y_[e[s]];if(r&&r(t,e))return}return i(t,...n)},J_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Vu=(i,e)=>t=>{if(!("key"in t))return;const n=ss(t.key);if(e.some(s=>s===n||J_[s]===n))return i(t)},Q_=Ut({patchProp:k_},T_);let Hu;function e0(){return Hu||(Hu=r_(Q_))}const t0=(...i)=>{const e=e0().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=n0(n);if(!s)return;const r=e._component;!Ue(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function n0(i){return St(i)?document.querySelector(i):i}function sp(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var Pi={};const i0={data(){return{title:"",description:"",isShowed:!1,text:"",placeholder:"",Types:{prompt:0,confirm:1,alert:2},type:0}},unmounted(){this.isShowed=!1},methods:{async __createModal(i,e="",t="",n="alert"){if(this.type=n,this.title=i,this.description=e,this.placeholder=t,this.isShowed)return this.promise;this.isShowed=!0,await this.$nextTick(),this.type===this.Types.confirm?this.$refs.buttonYes&&this.$refs.buttonYes.focus():this.type===this.Types.prompt?this.$refs.inputText&&this.$refs.inputText.focus():this.$refs.buttonOk&&this.$refs.buttonOk.focus(),this.$refs.form&&(this.$refs.form.scrollTop=0);const s=new Promise(r=>{this.resolvePromise=r});return this.promise=s,s},__resolve(i){this.isShowed&&(this.type===this.Types.prompt&&i&&(i=this.text),this.resolvePromise(i),this.isShowed=!1,this.text="")},prompt(i,e,t,n){return this.text=t,this.__createModal(i,e,n,this.Types.prompt)},confirm(i,e){return this.__createModal(i,e,"",this.Types.confirm)},alert(i,e){return this.__createModal(i,e,"",this.Types.alert)}}},Jn=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},s0=i=>(or("data-v-6ea815e1"),i=i(),ar(),i),r0={class:"form",ref:"form"},o0=s0(()=>De("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"},[De("path",{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"})],-1)),a0=[o0],l0={class:"info-container"},c0={class:"title text-big-x"},u0={class:"description text-small"},h0={class:"fields-container"},f0={key:0,class:"form-group"},d0=["placeholder"],p0={class:"submit-container submit-buttons"},m0={class:"form-group"},g0={key:1,class:"confirm-buttons"};function _0(i,e,t,n,s,r){return wt(),rn("div",{class:is(["modal",{hidden:!s.isShowed}]),onKeydown:[e[6]||(e[6]=Vu(Z_(o=>r.__resolve(!0),["prevent"]),["enter"])),e[7]||(e[7]=Vu(o=>r.__resolve(null),["esc"]))]},[De("div",{class:"modal-background",onClick:e[0]||(e[0]=o=>r.__resolve(null))}),De("div",r0,[De("span",{class:"close-btn",onClick:e[1]||(e[1]=o=>r.__resolve(null))},a0),De("div",l0,[De("div",c0,Hr(s.title),1),De("div",u0,Hr(s.description),1)]),De("div",h0,[s.type===s.Types.prompt?(wt(),rn("div",f0,[Wg(De("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>s.text=o),ref:"inputText",class:"input",placeholder:s.placeholder,id:"__modals-input-prompt"},null,8,d0),[[$_,s.text]])])):qo("",!0)]),De("div",p0,[De("div",m0,[s.type!==s.Types.confirm?(wt(),rn("button",{key:0,onClick:e[3]||(e[3]=o=>r.__resolve(!0)),class:"confirm-button",ref:"buttonOk"},"Ок",512)):(wt(),rn("div",g0,[De("button",{onClick:e[4]||(e[4]=o=>r.__resolve(!0)),class:"confirm-button",ref:"buttonYes"},"Да",512),De("button",{onClick:e[5]||(e[5]=o=>r.__resolve(!1)),class:"confirm-button btn-danger"},"Нет")]))])])],512)],34)}const x0=Jn(i0,[["render",_0],["__scopeId","data-v-6ea815e1"]]),v0=Object.freeze(Object.defineProperty({__proto__:null,default:x0},Symbol.toStringTag,{value:"Module"})),y0=sp(v0),Va=3e3,b0=500,M0=300,S0={data(){return{messages:[]}},methods:{async __addMessage(i,e,t,n){const s=document.createElement("div");s.classList.add("popup-message",t),s.innerHTML=`<div class="title"><strong>${i}</strong></div>
                        <div class="message">${e}</div>`,this.$el.append(s),s.style.height=Array(s.children).reduce((r,o)=>r+o.clientHeight,0)+"px",setTimeout(()=>{s.classList.add("_transitionOpacity"),setTimeout(()=>{s.classList.add("_transitionHeight"),s.style.removeProperty("height"),setTimeout(()=>{s.remove()},M0)},b0)},n)},success(i,e="",t=Va){this.__addMessage(i,e,"success",t)},alert(i,e="",t=Va){this.__addMessage(i,e,"alert",t)},error(i,e="",t=Va){this.__addMessage(i,e,"error",t)}}},w0={class:"popup-messages"};function T0(i,e,t,n,s,r){return wt(),rn("div",w0)}const E0=Jn(S0,[["render",T0]]),A0=Object.freeze(Object.defineProperty({__proto__:null,default:E0},Symbol.toStringTag,{value:"Module"})),C0=sp(A0);var Gu;function R0(){if(Gu)return Pi;Gu=1,Object.defineProperty(Pi,"__esModule",{value:!0}),Pi.Popups=Pi.Modals=void 0;const i=y0;Pi.Modals=i.default;const e=C0;return Pi.Popups=e.default,Pi}var Wu=R0();const L0={props:{size:{default:"60px"},light:{type:Boolean,default:!1}}},an=i=>(or("data-v-41b2f801"),i=i(),ar(),i),P0=an(()=>De("div",null,null,-1)),I0=an(()=>De("div",null,null,-1)),D0=an(()=>De("div",null,null,-1)),N0=an(()=>De("div",null,null,-1)),F0=an(()=>De("div",null,null,-1)),O0=an(()=>De("div",null,null,-1)),U0=an(()=>De("div",null,null,-1)),B0=an(()=>De("div",null,null,-1)),z0=an(()=>De("div",null,null,-1)),k0=an(()=>De("div",null,null,-1)),V0=an(()=>De("div",null,null,-1)),H0=an(()=>De("div",null,null,-1)),G0=[P0,I0,D0,N0,F0,O0,U0,B0,z0,k0,V0,H0];function W0(i,e,t,n,s,r){return wt(),rn("div",{class:"circle-loading",style:nr(`height: ${t.size}; width: ${t.size};`)},[De("div",{class:is(["lds-default",{light:t.light}])},G0,2)],4)}const j0=Jn(L0,[["render",W0],["__scopeId","data-v-41b2f801"]]),X0={components:{CircleLoading:j0,Modals:Wu.Modals,Popups:Wu.Popups},data(){return{transitionName:"",global:void 0}},watch:{$route(i,e){this.transitionName="scale-in",console.log(e.path,"TO",i.path)}},mounted(){this.global=Qd().appContext.config.globalProperties,this.global.$user=this.$store.state.user,this.global.$modal=this.$refs.modals,this.global.$popups=this.$refs.popups,this.global.$app=this,this.checkMobileScreen(),window.addEventListener("resize",i=>{this.checkMobileScreen()})},methods:{checkMobileScreen(){if(window.innerWidth<=700){this.global.$isMobile=!0;return}this.global.$isMobile=!1}}},q0={class:"wrapper"};function $0(i,e,t,n,s,r){const o=gi("router-view"),a=gi("Popups"),l=gi("Modals");return wt(),rn(hn,null,[De("div",q0,[ot(o,null,{default:ji(({Component:c})=>[ot(Hs,{name:"scale-in"},{default:ji(()=>[(wt(),Ur(jg(c)))]),_:2},1024)]),_:1})]),ot(a,{ref:"popups"},null,512),ot(l,{ref:"modals"},null,512)],64)}const K0=Jn(X0,[["render",$0],["__scopeId","data-v-798b526c"]]);function Y0(){return rp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function rp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const Z0=typeof Proxy=="function",J0="devtools-plugin:setup",Q0="plugin:settings:set";let cs,Yl;function ex(){var i;return cs!==void 0||(typeof window<"u"&&window.performance?(cs=!0,Yl=window.performance):typeof globalThis<"u"&&(!((i=globalThis.perf_hooks)===null||i===void 0)&&i.performance)?(cs=!0,Yl=globalThis.perf_hooks.performance):cs=!1),cs}function tx(){return ex()?Yl.now():Date.now()}class nx{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const a=e.settings[o];n[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},n);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}r=o},now(){return tx()}},t&&t.on(Q0,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function ix(i,e){const t=i,n=rp(),s=Y0(),r=Z0&&t.enableEarlyProxy;if(s&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))s.emit(J0,i,e);else{const o=r?new nx(t,s):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var sx="store";function lr(i,e){Object.keys(i).forEach(function(t){return e(i[t],t)})}function rx(i){return i!==null&&typeof i=="object"}function ox(i){return i&&typeof i.then=="function"}function ax(i,e){return function(){return i(e)}}function op(i,e,t){return e.indexOf(i)<0&&(t&&t.prepend?e.unshift(i):e.push(i)),function(){var n=e.indexOf(i);n>-1&&e.splice(n,1)}}function ap(i,e){i._actions=Object.create(null),i._mutations=Object.create(null),i._wrappedGetters=Object.create(null),i._modulesNamespaceMap=Object.create(null);var t=i.state;wa(i,t,[],i._modules.root,!0),Nc(i,t,e)}function Nc(i,e,t){var n=i._state;i.getters={},i._makeLocalGettersCache=Object.create(null);var s=i._wrappedGetters,r={};lr(s,function(o,a){r[a]=ax(o,i),Object.defineProperty(i.getters,a,{get:function(){return r[a]()},enumerable:!0})}),i._state=rr({data:e}),i.strict&&fx(i),n&&t&&i._withCommit(function(){n.data=null})}function wa(i,e,t,n,s){var r=!t.length,o=i._modules.getNamespace(t);if(n.namespaced&&(i._modulesNamespaceMap[o],i._modulesNamespaceMap[o]=n),!r&&!s){var a=Fc(e,t.slice(0,-1)),l=t[t.length-1];i._withCommit(function(){a[l]=n.state})}var c=n.context=lx(i,o,t);n.forEachMutation(function(u,h){var f=o+h;cx(i,f,u,c)}),n.forEachAction(function(u,h){var f=u.root?h:o+h,d=u.handler||u;ux(i,f,d,c)}),n.forEachGetter(function(u,h){var f=o+h;hx(i,f,u,c)}),n.forEachChild(function(u,h){wa(i,e,t.concat(h),u,s)})}function lx(i,e,t){var n=e==="",s={dispatch:n?i.dispatch:function(r,o,a){var l=ra(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),i.dispatch(h,c)},commit:n?i.commit:function(r,o,a){var l=ra(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),i.commit(h,c,u)}};return Object.defineProperties(s,{getters:{get:n?function(){return i.getters}:function(){return lp(i,e)}},state:{get:function(){return Fc(i.state,t)}}}),s}function lp(i,e){if(!i._makeLocalGettersCache[e]){var t={},n=e.length;Object.keys(i.getters).forEach(function(s){if(s.slice(0,n)===e){var r=s.slice(n);Object.defineProperty(t,r,{get:function(){return i.getters[s]},enumerable:!0})}}),i._makeLocalGettersCache[e]=t}return i._makeLocalGettersCache[e]}function cx(i,e,t,n){var s=i._mutations[e]||(i._mutations[e]=[]);s.push(function(o){t.call(i,n.state,o)})}function ux(i,e,t,n){var s=i._actions[e]||(i._actions[e]=[]);s.push(function(o){var a=t.call(i,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:i.getters,rootState:i.state},o);return ox(a)||(a=Promise.resolve(a)),i._devtoolHook?a.catch(function(l){throw i._devtoolHook.emit("vuex:error",l),l}):a})}function hx(i,e,t,n){i._wrappedGetters[e]||(i._wrappedGetters[e]=function(r){return t(n.state,n.getters,r.state,r.getters)})}function fx(i){Vs(function(){return i._state.data},function(){},{deep:!0,flush:"sync"})}function Fc(i,e){return e.reduce(function(t,n){return t[n]},i)}function ra(i,e,t){return rx(i)&&i.type&&(t=e,e=i,i=i.type),{type:i,payload:e,options:t}}var dx="vuex bindings",ju="vuex:mutations",Ha="vuex:actions",us="vuex",px=0;function mx(i,e){ix({id:"org.vuejs.vuex",app:i,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[dx]},function(t){t.addTimelineLayer({id:ju,label:"Vuex Mutations",color:Xu}),t.addTimelineLayer({id:Ha,label:"Vuex Actions",color:Xu}),t.addInspector({id:us,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),t.on.getInspectorTree(function(n){if(n.app===i&&n.inspectorId===us)if(n.filter){var s=[];fp(s,e._modules.root,n.filter,""),n.rootNodes=s}else n.rootNodes=[hp(e._modules.root,"")]}),t.on.getInspectorState(function(n){if(n.app===i&&n.inspectorId===us){var s=n.nodeId;lp(e,s),n.state=xx(yx(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),t.on.editInspectorState(function(n){if(n.app===i&&n.inspectorId===us){var s=n.nodeId,r=n.path;s!=="root"&&(r=s.split("/").filter(Boolean).concat(r)),e._withCommit(function(){n.set(e._state.data,r,n.state.value)})}}),e.subscribe(function(n,s){var r={};n.payload&&(r.payload=n.payload),r.state=s,t.notifyComponentUpdate(),t.sendInspectorTree(us),t.sendInspectorState(us),t.addTimelineEvent({layerId:ju,event:{time:Date.now(),title:n.type,data:r}})}),e.subscribeAction({before:function(n,s){var r={};n.payload&&(r.payload=n.payload),n._id=px++,n._time=Date.now(),r.state=s,t.addTimelineEvent({layerId:Ha,event:{time:n._time,title:n.type,groupId:n._id,subtitle:"start",data:r}})},after:function(n,s){var r={},o=Date.now()-n._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},n.payload&&(r.payload=n.payload),r.state=s,t.addTimelineEvent({layerId:Ha,event:{time:Date.now(),title:n.type,groupId:n._id,subtitle:"end",data:r}})}})})}var Xu=8702998,gx=6710886,_x=16777215,cp={label:"namespaced",textColor:_x,backgroundColor:gx};function up(i){return i&&i!=="root"?i.split("/").slice(-2,-1)[0]:"Root"}function hp(i,e){return{id:e||"root",label:up(e),tags:i.namespaced?[cp]:[],children:Object.keys(i._children).map(function(t){return hp(i._children[t],e+t+"/")})}}function fp(i,e,t,n){n.includes(t)&&i.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:e.namespaced?[cp]:[]}),Object.keys(e._children).forEach(function(s){fp(i,e._children[s],t,n+s+"/")})}function xx(i,e,t){e=t==="root"?e:e[t];var n=Object.keys(e),s={state:Object.keys(i.state).map(function(o){return{key:o,editable:!0,value:i.state[o]}})};if(n.length){var r=vx(e);s.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?up(o):o,editable:!1,value:Zl(function(){return r[o]})}})}return s}function vx(i){var e={};return Object.keys(i).forEach(function(t){var n=t.split("/");if(n.length>1){var s=e,r=n.pop();n.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[r]=Zl(function(){return i[t]})}else e[t]=Zl(function(){return i[t]})}),e}function yx(i,e){var t=e.split("/").filter(function(n){return n});return t.reduce(function(n,s,r){var o=n[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return r===t.length-1?o:o._children},e==="root"?i:i.root._children)}function Zl(i){try{return i()}catch(e){return e}}var bn=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=(typeof n=="function"?n():n)||{}},dp={namespaced:{configurable:!0}};dp.namespaced.get=function(){return!!this._rawModule.namespaced};bn.prototype.addChild=function(e,t){this._children[e]=t};bn.prototype.removeChild=function(e){delete this._children[e]};bn.prototype.getChild=function(e){return this._children[e]};bn.prototype.hasChild=function(e){return e in this._children};bn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};bn.prototype.forEachChild=function(e){lr(this._children,e)};bn.prototype.forEachGetter=function(e){this._rawModule.getters&&lr(this._rawModule.getters,e)};bn.prototype.forEachAction=function(e){this._rawModule.actions&&lr(this._rawModule.actions,e)};bn.prototype.forEachMutation=function(e){this._rawModule.mutations&&lr(this._rawModule.mutations,e)};Object.defineProperties(bn.prototype,dp);var rs=function(e){this.register([],e,!1)};rs.prototype.get=function(e){return e.reduce(function(t,n){return t.getChild(n)},this.root)};rs.prototype.getNamespace=function(e){var t=this.root;return e.reduce(function(n,s){return t=t.getChild(s),n+(t.namespaced?s+"/":"")},"")};rs.prototype.update=function(e){pp([],this.root,e)};rs.prototype.register=function(e,t,n){var s=this;n===void 0&&(n=!0);var r=new bn(t,n);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}t.modules&&lr(t.modules,function(a,l){s.register(e.concat(l),a,n)})};rs.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],s=t.getChild(n);s&&s.runtime&&t.removeChild(n)};rs.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return t?t.hasChild(n):!1};function pp(i,e,t){if(e.update(t),t.modules)for(var n in t.modules){if(!e.getChild(n))return;pp(i.concat(n),e.getChild(n),t.modules[n])}}var Ht=function(e){var t=this;e===void 0&&(e={});var n=e.plugins;n===void 0&&(n=[]);var s=e.strict;s===void 0&&(s=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new rs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,d){return l.call(o,f,d)},this.commit=function(f,d,g){return c.call(o,f,d,g)},this.strict=s;var u=this._modules.root.state;wa(this,u,[],this._modules.root),Nc(this,u),n.forEach(function(h){return h(t)})},Oc={state:{configurable:!0}};Ht.prototype.install=function(e,t){e.provide(t||sx,this),e.config.globalProperties.$store=this;var n=this._devtools!==void 0?this._devtools:!1;n&&mx(e,this)};Oc.state.get=function(){return this._state.data};Oc.state.set=function(i){};Ht.prototype.commit=function(e,t,n){var s=this,r=ra(e,t,n),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,s.state)}))};Ht.prototype.dispatch=function(e,t){var n=this,s=ra(e,t),r=s.type,o=s.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,n.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(f){try{n._actionSubscribers.filter(function(d){return d.after}).forEach(function(d){return d.after(a,n.state)})}catch{}u(f)},function(f){try{n._actionSubscribers.filter(function(d){return d.error}).forEach(function(d){return d.error(a,n.state,f)})}catch{}h(f)})})}};Ht.prototype.subscribe=function(e,t){return op(e,this._subscribers,t)};Ht.prototype.subscribeAction=function(e,t){var n=typeof e=="function"?{before:e}:e;return op(n,this._actionSubscribers,t)};Ht.prototype.watch=function(e,t,n){var s=this;return Vs(function(){return e(s.state,s.getters)},t,Object.assign({},n))};Ht.prototype.replaceState=function(e){var t=this;this._withCommit(function(){t._state.data=e})};Ht.prototype.registerModule=function(e,t,n){n===void 0&&(n={}),typeof e=="string"&&(e=[e]),this._modules.register(e,t),wa(this,this.state,e,this._modules.get(e),n.preserveState),Nc(this,this.state)};Ht.prototype.unregisterModule=function(e){var t=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var n=Fc(t.state,e.slice(0,-1));delete n[e[e.length-1]]}),ap(this)};Ht.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};Ht.prototype.hotUpdate=function(e){this._modules.update(e),ap(this,!0)};Ht.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t};Object.defineProperties(Ht.prototype,Oc);var bx={Store:Ht};const Uc=new bx.Store({state:{user:{id:"",name:"",group:"",tg:"",vk:"",email:"",phone:"",isAdmin:!1,isSignedIn:!1}},mutations:{SET_USER(i,e){i.user.id=String(e.id),i.user.name=String(e.name),i.user.group=String(e.group),i.user.tg=String(e.telegram),i.user.vk=String(e.vk),i.user.email=String(e.email),i.user.phone=String(e.phone_number),i.user.isAdmin=!!e.is_admin,i.user.isSignedIn=!0},DELETE_USER(i){i.user.isSignedIn=!1}},actions:{async SET_USER(i,e){i.commit("SET_USER",e)},DELETE_USER(i){i.commit("DELETE_USER")}}});/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof window<"u";function Mx(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const et=Object.assign;function Ga(i,e){const t={};for(const n in e){const s=e[n];t[n]=yn(s)?s.map(i):i(s)}return t}const Br=()=>{},yn=Array.isArray,Sx=/\/$/,wx=i=>i.replace(Sx,"");function Wa(i,e,t="/"){let n,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=i(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Cx(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:s,hash:o}}function Tx(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function qu(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Ex(i,e,t){const n=e.matched.length-1,s=t.matched.length-1;return n>-1&&n===s&&$s(e.matched[n],t.matched[s])&&mp(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function $s(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function mp(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Ax(i[t],e[t]))return!1;return!0}function Ax(i,e){return yn(i)?$u(i,e):yn(e)?$u(e,i):i===e}function $u(i,e){return yn(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Cx(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let s=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var Kr;(function(i){i.pop="pop",i.push="push"})(Kr||(Kr={}));var zr;(function(i){i.back="back",i.forward="forward",i.unknown=""})(zr||(zr={}));function Rx(i){if(!i)if(Ls){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),wx(i)}const Lx=/^[^#]+#/;function Px(i,e){return i.replace(Lx,"#")+e}function Ix(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Ta=()=>({left:window.pageXOffset,top:window.pageYOffset});function Dx(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Ix(s,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ku(i,e){return(history.state?history.state.position-e:-1)+i}const Jl=new Map;function Nx(i,e){Jl.set(i,e)}function Fx(i){const e=Jl.get(i);return Jl.delete(i),e}let Ox=()=>location.protocol+"//"+location.host;function gp(i,e){const{pathname:t,search:n,hash:s}=e,r=i.indexOf("#");if(r>-1){let a=s.includes(i.slice(r))?i.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),qu(l,"")}return qu(t,i)+n+s}function Ux(i,e,t,n){let s=[],r=[],o=null;const a=({state:f})=>{const d=gp(i,location),g=t.value,m=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===g){o=null;return}p=m?f.position-m.position:0}else n(d);s.forEach(_=>{_(t.value,g,{delta:p,type:Kr.pop,direction:p?p>0?zr.forward:zr.back:zr.unknown})})};function l(){o=t.value}function c(f){s.push(f);const d=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(et({},f.state,{scroll:Ta()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Yu(i,e,t,n=!1,s=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:s?Ta():null}}function Bx(i){const{history:e,location:t}=window,n={value:gp(i,t)},s={value:e.state};s.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:Ox()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){const u=et({},e.state,Yu(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),n.value=l}function a(l,c){const u=et({},s.value,e.state,{forward:l,scroll:Ta()});r(u.current,u,!0);const h=et({},Yu(n.value,l,null),{position:u.position+1},c);r(l,h,!1),n.value=l}return{location:n,state:s,push:a,replace:o}}function zx(i){i=Rx(i);const e=Bx(i),t=Ux(i,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=et({location:"",base:i,go:n,createHref:Px.bind(null,i)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function kx(i){return typeof i=="string"||i&&typeof i=="object"}function _p(i){return typeof i=="string"||typeof i=="symbol"}const ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xp=Symbol("");var Zu;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Zu||(Zu={}));function Ks(i,e){return et(new Error,{type:i,[xp]:!0},e)}function Dn(i,e){return i instanceof Error&&xp in i&&(e==null||!!(i.type&e))}const Ju="[^/]+?",Vx={sensitive:!1,strict:!1,start:!0,end:!0},Hx=/[.+*?^${}()[\]/\\]/g;function Gx(i,e){const t=et({},Vx,e),n=[];let s=t.start?"^":"";const r=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(t.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Hx,"\\$&"),d+=40;else if(f.type===1){const{value:g,repeatable:m,optional:p,regexp:_}=f;r.push({name:g,repeatable:m,optional:p});const M=_||Ju;if(M!==Ju){d+=10;try{new RegExp(`(${M})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+b.message)}}let x=m?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;h||(x=p&&c.length<2?`(?:/${x})`:"/"+x),p&&(x+="?"),s+=x,d+=20,p&&(d+=-8),m&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=r[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:m,optional:p}=d,_=g in c?c[g]:"";if(yn(_)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=yn(_)?_.join("/"):_;if(!M)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function Wx(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===80?-1:1:i.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jx(i,e){let t=0;const n=i.score,s=e.score;for(;t<n.length&&t<s.length;){const r=Wx(n[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-n.length)===1){if(Qu(n))return 1;if(Qu(s))return-1}return s.length-n.length}function Qu(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Xx={type:0,value:""},qx=/[a-zA-Z0-9_]/;function $x(i){if(!i)return[[]];if(i==="/")return[[Xx]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:qx.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Kx(i,e,t){const n=Gx($x(i.path),t),s=et(n,{record:i,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Yx(i,e){const t=[],n=new Map;e=th({strict:!1,end:!0,sensitive:!1},e);function s(u){return n.get(u)}function r(u,h,f){const d=!f,g=Jx(u);g.aliasOf=f&&f.record;const m=th(e,u),p=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of x)p.push(et({},g,{components:f?f.record.components:g.components,path:b,aliasOf:f?f.record:g}))}let _,M;for(const x of p){const{path:b}=x;if(h&&b[0]!=="/"){const S=h.record.path,R=S[S.length-1]==="/"?"":"/";x.path=h.record.path+(b&&R+b)}if(_=Kx(x,h,m),f?f.alias.push(_):(M=M||_,M!==_&&M.alias.push(_),d&&u.name&&!eh(_)&&o(u.name)),g.children){const S=g.children;for(let R=0;R<S.length;R++)r(S[R],_,f&&f.children[R])}f=f||_,l(_)}return M?()=>{o(M)}:Br}function o(u){if(_p(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&jx(u,t[h])>=0&&(u.record.path!==t[h].record.path||!vp(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!eh(u)&&n.set(u.record.name,u)}function c(u,h){let f,d={},g,m;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Ks(1,{location:u});m=f.record.name,d=et(Zx(h.params,f.keys.filter(M=>!M.optional).map(M=>M.name)),u.params),g=f.stringify(d)}else if("path"in u)g=u.path,f=t.find(M=>M.re.test(g)),f&&(d=f.parse(g),m=f.record.name);else{if(f=h.name?n.get(h.name):t.find(M=>M.re.test(h.path)),!f)throw Ks(1,{location:u,currentLocation:h});m=f.record.name,d=et({},h.params,u.params),g=f.stringify(d)}const p=[];let _=f;for(;_;)p.unshift(_.record),_=_.parent;return{name:m,path:g,params:d,matched:p,meta:ev(p)}}return i.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Zx(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Jx(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Qx(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function Qx(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function eh(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function ev(i){return i.reduce((e,t)=>et(e,t.meta),{})}function th(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function vp(i,e){return e.children.some(t=>t===i||vp(i,t))}const yp=/#/g,tv=/&/g,nv=/\//g,iv=/=/g,sv=/\?/g,bp=/\+/g,rv=/%5B/g,ov=/%5D/g,Mp=/%5E/g,av=/%60/g,Sp=/%7B/g,lv=/%7C/g,wp=/%7D/g,cv=/%20/g;function Bc(i){return encodeURI(""+i).replace(lv,"|").replace(rv,"[").replace(ov,"]")}function uv(i){return Bc(i).replace(Sp,"{").replace(wp,"}").replace(Mp,"^")}function Ql(i){return Bc(i).replace(bp,"%2B").replace(cv,"+").replace(yp,"%23").replace(tv,"%26").replace(av,"`").replace(Sp,"{").replace(wp,"}").replace(Mp,"^")}function hv(i){return Ql(i).replace(iv,"%3D")}function fv(i){return Bc(i).replace(yp,"%23").replace(sv,"%3F")}function dv(i){return i==null?"":fv(i).replace(nv,"%2F")}function oa(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function pv(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let s=0;s<n.length;++s){const r=n[s].replace(bp," "),o=r.indexOf("="),a=oa(o<0?r:r.slice(0,o)),l=o<0?null:oa(r.slice(o+1));if(a in e){let c=e[a];yn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nh(i){let e="";for(let t in i){const n=i[t];if(t=hv(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(yn(n)?n.map(r=>r&&Ql(r)):[n&&Ql(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function mv(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=yn(n)?n.map(s=>s==null?null:""+s):n==null?n:""+n)}return e}const gv=Symbol(""),ih=Symbol(""),zc=Symbol(""),Tp=Symbol(""),ec=Symbol("");function gr(){let i=[];function e(n){return i.push(n),()=>{const s=i.indexOf(n);s>-1&&i.splice(s,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function hi(i,e,t,n,s){const r=n&&(n.enterCallbacks[s]=n.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ks(4,{from:t,to:e})):h instanceof Error?a(h):kx(h)?a(Ks(2,{from:e,to:h})):(r&&n.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),o())},c=i.call(n&&n.instances[s],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function ja(i,e,t,n){const s=[];for(const r of i)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(_v(a)){const c=(a.__vccOpts||a)[e];c&&s.push(hi(c,t,n,r,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Mx(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&hi(f,t,n,r,o)()}))}}return s}function _v(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function sh(i){const e=mi(zc),t=mi(Tp),n=tn(()=>e.resolve(ks(i.to))),s=tn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex($s.bind(null,u));if(f>-1)return f;const d=rh(l[c-2]);return c>1&&rh(u)===d&&h[h.length-1].path!==d?h.findIndex($s.bind(null,l[c-2])):f}),r=tn(()=>s.value>-1&&bv(t.params,n.value.params)),o=tn(()=>s.value>-1&&s.value===t.matched.length-1&&mp(t.params,n.value.params));function a(l={}){return yv(l)?e[ks(i.replace)?"replace":"push"](ks(i.to)).catch(Br):Promise.resolve()}return{route:n,href:tn(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const xv=Nd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:sh,setup(i,{slots:e}){const t=rr(sh(i)),{options:n}=mi(zc),s=tn(()=>({[oh(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[oh(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return i.custom?r:Dc("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),vv=xv;function yv(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function bv(i,e){for(const t in e){const n=e[t],s=i[t];if(typeof n=="string"){if(n!==s)return!1}else if(!yn(s)||s.length!==n.length||n.some((r,o)=>r!==s[o]))return!1}return!0}function rh(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const oh=(i,e,t)=>i??e??t,Mv=Nd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=mi(ec),s=tn(()=>i.route||n.value),r=mi(ih,0),o=tn(()=>{let c=ks(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=tn(()=>s.value.matched[o.value]);Wo(ih,tn(()=>o.value+1)),Wo(gv,a),Wo(ec,s);const l=dg();return Vs(()=>[l.value,a.value,i.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!$s(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=s.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return ah(t.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Dc(f,et({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ah(t.default,{Component:p,route:c})||p}}});function ah(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Sv=Mv;function wv(i){const e=Yx(i.routes,i),t=i.parseQuery||pv,n=i.stringifyQuery||nh,s=i.history,r=gr(),o=gr(),a=gr(),l=pg(ni);let c=ni;Ls&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ga.bind(null,U=>""+U),h=Ga.bind(null,dv),f=Ga.bind(null,oa);function d(U,I){let Q,oe;return _p(U)?(Q=e.getRecordMatcher(U),oe=I):oe=U,e.addRoute(oe,Q)}function g(U){const I=e.getRecordMatcher(U);I&&e.removeRoute(I)}function m(){return e.getRoutes().map(U=>U.record)}function p(U){return!!e.getRecordMatcher(U)}function _(U,I){if(I=et({},I||l.value),typeof U=="string"){const T=Wa(t,U,I.path),C=e.resolve({path:T.path},I),j=s.createHref(T.fullPath);return et(T,C,{params:f(C.params),hash:oa(T.hash),redirectedFrom:void 0,href:j})}let Q;if("path"in U)Q=et({},U,{path:Wa(t,U.path,I.path).path});else{const T=et({},U.params);for(const C in T)T[C]==null&&delete T[C];Q=et({},U,{params:h(U.params)}),I.params=h(I.params)}const oe=e.resolve(Q,I),_e=U.hash||"";oe.params=u(f(oe.params));const fe=Tx(n,et({},U,{hash:uv(_e),path:oe.path})),Te=s.createHref(fe);return et({fullPath:fe,hash:_e,query:n===nh?mv(U.query):U.query||{}},oe,{redirectedFrom:void 0,href:Te})}function M(U){return typeof U=="string"?Wa(t,U,l.value.path):et({},U)}function x(U,I){if(c!==U)return Ks(8,{from:I,to:U})}function b(U){return L(U)}function S(U){return b(et(M(U),{replace:!0}))}function R(U){const I=U.matched[U.matched.length-1];if(I&&I.redirect){const{redirect:Q}=I;let oe=typeof Q=="function"?Q(U):Q;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=M(oe):{path:oe},oe.params={}),et({query:U.query,hash:U.hash,params:"path"in oe?{}:U.params},oe)}}function L(U,I){const Q=c=_(U),oe=l.value,_e=U.state,fe=U.force,Te=U.replace===!0,T=R(Q);if(T)return L(et(M(T),{state:_e,force:fe,replace:Te}),I||Q);const C=Q;C.redirectedFrom=I;let j;return!fe&&Ex(n,oe,Q)&&(j=Ks(16,{to:C,from:oe}),he(oe,oe,!0,!1)),(j?Promise.resolve(j):E(C,oe)).catch(K=>Dn(K)?Dn(K,2)?K:le(K):q(K,C,oe)).then(K=>{if(K){if(Dn(K,2))return L(et({replace:Te},M(K.to),{state:_e,force:fe}),I||C)}else K=z(C,oe,!0,Te,_e);return P(C,oe,K),K})}function v(U,I){const Q=x(U,I);return Q?Promise.reject(Q):Promise.resolve()}function E(U,I){let Q;const[oe,_e,fe]=Tv(U,I);Q=ja(oe.reverse(),"beforeRouteLeave",U,I);for(const T of oe)T.leaveGuards.forEach(C=>{Q.push(hi(C,U,I))});const Te=v.bind(null,U,I);return Q.push(Te),hs(Q).then(()=>{Q=[];for(const T of r.list())Q.push(hi(T,U,I));return Q.push(Te),hs(Q)}).then(()=>{Q=ja(_e,"beforeRouteUpdate",U,I);for(const T of _e)T.updateGuards.forEach(C=>{Q.push(hi(C,U,I))});return Q.push(Te),hs(Q)}).then(()=>{Q=[];for(const T of U.matched)if(T.beforeEnter&&!I.matched.includes(T))if(yn(T.beforeEnter))for(const C of T.beforeEnter)Q.push(hi(C,U,I));else Q.push(hi(T.beforeEnter,U,I));return Q.push(Te),hs(Q)}).then(()=>(U.matched.forEach(T=>T.enterCallbacks={}),Q=ja(fe,"beforeRouteEnter",U,I),Q.push(Te),hs(Q))).then(()=>{Q=[];for(const T of o.list())Q.push(hi(T,U,I));return Q.push(Te),hs(Q)}).catch(T=>Dn(T,8)?T:Promise.reject(T))}function P(U,I,Q){for(const oe of a.list())oe(U,I,Q)}function z(U,I,Q,oe,_e){const fe=x(U,I);if(fe)return fe;const Te=I===ni,T=Ls?history.state:{};Q&&(oe||Te?s.replace(U.fullPath,et({scroll:Te&&T&&T.scroll},_e)):s.push(U.fullPath,_e)),l.value=U,he(U,I,Q,Te),le()}let k;function D(){k||(k=s.listen((U,I,Q)=>{if(!xe.listening)return;const oe=_(U),_e=R(oe);if(_e){L(et(_e,{replace:!0}),oe).catch(Br);return}c=oe;const fe=l.value;Ls&&Nx(Ku(fe.fullPath,Q.delta),Ta()),E(oe,fe).catch(Te=>Dn(Te,12)?Te:Dn(Te,2)?(L(Te.to,oe).then(T=>{Dn(T,20)&&!Q.delta&&Q.type===Kr.pop&&s.go(-1,!1)}).catch(Br),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),q(Te,oe,fe))).then(Te=>{Te=Te||z(oe,fe,!1),Te&&(Q.delta&&!Dn(Te,8)?s.go(-Q.delta,!1):Q.type===Kr.pop&&Dn(Te,20)&&s.go(-1,!1)),P(oe,fe,Te)}).catch(Br)}))}let F=gr(),G=gr(),ee;function q(U,I,Q){le(U);const oe=G.list();return oe.length?oe.forEach(_e=>_e(U,I,Q)):console.error(U),Promise.reject(U)}function H(){return ee&&l.value!==ni?Promise.resolve():new Promise((U,I)=>{F.add([U,I])})}function le(U){return ee||(ee=!U,D(),F.list().forEach(([I,Q])=>U?Q(U):I()),F.reset()),U}function he(U,I,Q,oe){const{scrollBehavior:_e}=i;if(!Ls||!_e)return Promise.resolve();const fe=!Q&&Fx(Ku(U.fullPath,0))||(oe||!Q)&&history.state&&history.state.scroll||null;return Md().then(()=>_e(U,I,fe)).then(Te=>Te&&Dx(Te)).catch(Te=>q(Te,U,I))}const be=U=>s.go(U);let X;const te=new Set,xe={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,hasRoute:p,getRoutes:m,resolve:_,options:i,push:b,replace:S,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:H,install(U){const I=this;U.component("RouterLink",vv),U.component("RouterView",Sv),U.config.globalProperties.$router=I,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ks(l)}),Ls&&!X&&l.value===ni&&(X=!0,b(s.location).catch(_e=>{}));const Q={};for(const _e in ni)Q[_e]=tn(()=>l.value[_e]);U.provide(zc,I),U.provide(Tp,rr(Q)),U.provide(ec,l);const oe=U.unmount;te.add(U),U.unmount=function(){te.delete(U),te.size<1&&(c=ni,k&&k(),k=null,l.value=ni,X=!1,ee=!1),oe()}}};return xe}function hs(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Tv(i,e){const t=[],n=[],s=[],r=Math.max(e.matched.length,i.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(i.matched.find(c=>$s(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>$s(c,l))||s.push(l))}return[t,n,s]}const Ev={},Ep=i=>(or("data-v-4ea29dc7"),i=i(),ar(),i),Av={class:"root-finish"},Cv={class:"form"},Rv=Ep(()=>De("div",{class:"title"},"Поздравляю!",-1)),Lv=Ep(()=>De("div",{class:"info"},"200 кругов ада пройдены :)",-1));function Pv(i,e,t,n,s,r){const o=gi("router-link");return wt(),rn("div",Av,[De("div",Cv,[Rv,Lv,ot(o,{to:{name:"default"}})])])}const Iv=Jn(Ev,[["render",Pv],["__scopeId","data-v-4ea29dc7"]]),Dv={},Ap=i=>(or("data-v-65d97ad3"),i=i(),ar(),i),Nv={class:"root-404"},Fv={class:"form"},Ov=Ap(()=>De("div",{class:"title"},"404 Страница не найдена",-1)),Uv=Ap(()=>De("div",{class:"info"},"Запрошенной страницы не существует",-1));function Bv(i,e,t,n,s,r){const o=gi("router-link");return wt(),rn("div",Nv,[De("div",Fv,[Ov,Uv,ot(o,{to:{name:"default"}})])])}const zv=Jn(Dv,[["render",Bv],["__scopeId","data-v-65d97ad3"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="149",kv=0,lh=1,Vv=2,Cp=1,Hv=2,Ir=3,Yn=0,Kt=1,Wn=2,_i=0,Gs=1,tc=2,ch=3,uh=4,Gv=5,Ps=100,Wv=101,jv=102,hh=103,fh=104,Xv=200,qv=201,$v=202,Kv=203,Rp=204,Lp=205,Yv=206,Zv=207,Jv=208,Qv=209,ey=210,ty=0,ny=1,iy=2,nc=3,sy=4,ry=5,oy=6,ay=7,Vc=0,ly=1,cy=2,$n=0,uy=1,hy=2,fy=3,dy=4,py=5,Pp=300,Ys=301,Zs=302,Yr=303,ic=304,Ea=306,Rn=1e3,zt=1001,aa=1002,yt=1003,sc=1004,$o=1005,ft=1006,Ip=1007,yi=1008,Qi=1009,my=1010,gy=1011,Dp=1012,_y=1013,qi=1014,pn=1015,jn=1016,xy=1017,vy=1018,Ws=1020,yy=1021,nn=1023,by=1024,My=1025,Zi=1026,Js=1027,Sy=1028,wy=1029,Ty=1030,Ey=1031,Ay=1033,Xa=33776,qa=33777,$a=33778,Ka=33779,dh=35840,ph=35841,mh=35842,gh=35843,Cy=36196,_h=37492,xh=37496,vh=37808,yh=37809,bh=37810,Mh=37811,Sh=37812,wh=37813,Th=37814,Eh=37815,Ah=37816,Ch=37817,Rh=37818,Lh=37819,Ph=37820,Ih=37821,Ya=36492,Ry=36283,Dh=36284,Nh=36285,Fh=36286,Ly=2200,Py=2201,Iy=2202,Zr=2300,Qs=2301,Za=2302,Ds=2400,Ns=2401,la=2402,Hc=2500,Dy=2501,Ny=0,Np=1,rc=2,bi=3e3,Ze=3001,Fy=3200,Oy=3201,Gc=0,Uy=1,wn="srgb",Jr="srgb-linear",Ja=7680,By=519,oc=35044,Oh="300 es",ac=1035;class os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Uh=1234567;const kr=Math.PI/180,Qr=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ct(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function zy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ky(i,e,t){return i!==e?(t-i)/(e-i):0}function Vr(i,e,t){return(1-t)*i+t*e}function Vy(i,e,t,n){return Vr(i,e,1-Math.exp(-t*n))}function Hy(i,e=1){return e-Math.abs(Wc(i,e*2)-e)}function Gy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xy(i,e){return i+Math.random()*(e-i)}function qy(i){return i*(.5-Math.random())}function $y(i){i!==void 0&&(Uh=i);let e=Uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ky(i){return i*kr}function Yy(i){return i*Qr}function lc(i){return(i&i-1)===0&&i!==0}function Fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ca(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zy(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Op=Object.freeze({__proto__:null,DEG2RAD:kr,RAD2DEG:Qr,ceilPowerOfTwo:Fp,clamp:Ct,damp:Vy,degToRad:Ky,denormalize:Xn,euclideanModulo:Wc,floorPowerOfTwo:ca,generateUUID:gn,inverseLerp:ky,isPowerOfTwo:lc,lerp:Vr,mapLinear:zy,normalize:tt,pingpong:Hy,radToDeg:Yy,randFloat:Xy,randFloatSpread:qy,randInt:jy,seededRandom:$y,setQuaternionFromProperEuler:Zy,smootherstep:Wy,smoothstep:Gy});class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=s[0],p=s[3],_=s[6],M=s[1],x=s[4],b=s[7],S=s[2],R=s[5],L=s[8];return r[0]=o*m+a*M+l*S,r[3]=o*p+a*x+l*R,r[6]=o*_+a*b+l*L,r[1]=c*m+u*M+h*S,r[4]=c*p+u*x+h*R,r[7]=c*_+u*b+h*L,r[2]=f*m+d*M+g*S,r[5]=f*p+d*x+g*R,r[8]=f*_+d*b+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(s*c-u*n)*m,e[2]=(a*n-s*o)*m,e[3]=f*m,e[4]=(u*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new $t;function Up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ko(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const el={[wn]:{[Jr]:Ji},[Jr]:{[wn]:Ko}},It={legacyMode:!0,get workingColorSpace(){return Jr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(el[e]&&el[e][t]!==void 0){const n=el[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ht={r:0,g:0,b:0},ln={h:0,s:0,l:0},po={h:0,s:0,l:0};function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function mo(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=It.workingColorSpace){if(e=Wc(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tl(o,r,e+1/3),this.g=tl(o,r,e),this.b=tl(o,r,e-1/3)}return It.toWorkingColorSpace(this,s),this}setStyle(e,t=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,It.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,It.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=wn){const n=Bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return It.fromWorkingColorSpace(mo(this,ht),e),Ct(ht.r*255,0,255)<<16^Ct(ht.g*255,0,255)<<8^Ct(ht.b*255,0,255)<<0}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(mo(this,ht),t);const n=ht.r,s=ht.g,r=ht.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(mo(this,ht),t),e.r=ht.r,e.g=ht.g,e.b=ht.b,e}getStyle(e=wn){return It.fromWorkingColorSpace(mo(this,ht),e),e!==wn?`color(${e} ${ht.r} ${ht.g} ${ht.b})`:`rgb(${ht.r*255|0},${ht.g*255|0},${ht.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(ln),ln.h+=e,ln.s+=t,ln.l+=n,this.setHSL(ln.h,ln.s,ln.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ln),e.getHSL(po);const n=Vr(ln.h,po.h,t),s=Vr(ln.s,po.s,t),r=Vr(ln.l,po.l,t);return this.setHSL(n,s,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=Bp;let fs;class zp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=eo("canvas")),fs.width=e.width,fs.height=e.height;const n=fs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class kp{constructor(e=null){this.isSource=!0,this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jy=0;class Tt extends os{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=zt,s=zt,r=ft,o=yi,a=nn,l=Qi,c=Tt.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=gn(),this.name="",this.source=new kp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Pp;Tt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(d+1)/2,S=(_+1)/2,R=(u+f)/4,L=(h+m)/4,v=(g+p)/4;return x>b&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=R/n,r=L/n):b>S?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=v/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=L/r,s=v/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-m)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _n extends os{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};this.texture=new Tt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vp extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qy extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yt,this.minFilter=yt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const _=l*f+c*d+u*g+h*m,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),R=Math.atan2(S,_*M);p=Math.sin(p*R)/S,a=Math.sin(a*R)/S}const b=a*M;if(l=l*p+f*b,c=c*p+d*b,u=u*p+g*b,h=h*p+m*b,p===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*s-a*n,u=l*n+a*t-r*s,h=l*s+r*n-o*t,f=-r*t-o*n-a*s;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new N,Bh=new xn;class as{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,s=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<s&&(s=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,s),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Ii.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ii)}else n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox),sl.applyMatrix4(e.matrixWorld),this.union(sl);const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),go.subVectors(this.max,_r),ds.subVectors(e.a,_r),ps.subVectors(e.b,_r),ms.subVectors(e.c,_r),ii.subVectors(ps,ds),si.subVectors(ms,ps),Di.subVectors(ds,ms);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Di.z,Di.y,ii.z,0,-ii.x,si.z,0,-si.x,Di.z,0,-Di.x,-ii.y,ii.x,0,-si.y,si.x,0,-Di.y,Di.x,0];return!rl(t,ds,ps,ms,go)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,ds,ps,ms,go))?!1:(_o.crossVectors(ii,si),t=[_o.x,_o.y,_o.z],rl(t,ds,ps,ms,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new N,new N,new N,new N,new N,new N,new N,new N],Ii=new N,sl=new as,ds=new N,ps=new N,ms=new N,ii=new N,si=new N,Di=new N,_r=new N,go=new N,_o=new N,Ni=new N;function rl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const eb=new as,xr=new N,ol=new N;class cr{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):eb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(ol)),this.expandByPoint(xr.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new N,al=new N,xo=new N,ri=new N,ll=new N,vo=new N,cl=new N;class jc{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){al.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(al);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=ri.dot(this.direction),l=-ri.dot(xo),c=ri.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),s&&s.copy(xo).multiplyScalar(f).add(al),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),s=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,s,r){ll.subVectors(t,e),vo.subVectors(n,e),cl.crossVectors(ll,vo);let o=this.direction.dot(cl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(vo.crossVectors(ri,vo));if(l<0)return null;const c=a*this.direction.dot(ll.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(cl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,o,a,l,c,u,h,f,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tb,e,nb)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),oi.crossVectors(n,jt),oi.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),oi.crossVectors(n,jt)),oi.normalize(),yo.crossVectors(jt,oi),s[0]=oi.x,s[4]=yo.x,s[8]=jt.x,s[1]=oi.y,s[5]=yo.y,s[9]=jt.y,s[2]=oi.z,s[6]=yo.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],M=n[3],x=n[7],b=n[11],S=n[15],R=s[0],L=s[4],v=s[8],E=s[12],P=s[1],z=s[5],k=s[9],D=s[13],F=s[2],G=s[6],ee=s[10],q=s[14],H=s[3],le=s[7],he=s[11],be=s[15];return r[0]=o*R+a*P+l*F+c*H,r[4]=o*L+a*z+l*G+c*le,r[8]=o*v+a*k+l*ee+c*he,r[12]=o*E+a*D+l*q+c*be,r[1]=u*R+h*P+f*F+d*H,r[5]=u*L+h*z+f*G+d*le,r[9]=u*v+h*k+f*ee+d*he,r[13]=u*E+h*D+f*q+d*be,r[2]=g*R+m*P+p*F+_*H,r[6]=g*L+m*z+p*G+_*le,r[10]=g*v+m*k+p*ee+_*he,r[14]=g*E+m*D+p*q+_*be,r[3]=M*R+x*P+b*F+S*H,r[7]=M*L+x*z+b*G+S*le,r[11]=M*v+x*k+b*ee+S*he,r[15]=M*E+x*D+b*q+S*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*d-n*l*d)+m*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+p*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+_*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],M=h*p*c-m*f*c+m*l*d-a*p*d-h*l*_+a*f*_,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*_-o*f*_,b=u*m*c-g*h*c+g*a*d-o*m*d-u*a*_+o*h*_,S=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,R=t*M+n*x+s*b+r*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/R;return e[0]=M*L,e[1]=(m*f*r-h*p*r-m*s*d+n*p*d+h*s*_-n*f*_)*L,e[2]=(a*p*r-m*l*r+m*s*c-n*p*c-a*s*_+n*l*_)*L,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*d-n*l*d)*L,e[4]=x*L,e[5]=(u*p*r-g*f*r+g*s*d-t*p*d-u*s*_+t*f*_)*L,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*_-t*l*_)*L,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*L,e[8]=b*L,e[9]=(g*h*r-u*m*r-g*n*d+t*m*d+u*n*_-t*h*_)*L,e[10]=(o*m*r-g*a*r+g*n*c-t*m*c-o*n*_+t*a*_)*L,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*L,e[12]=S*L,e[13]=(u*m*s-g*h*s+g*n*f-t*m*f-u*n*p+t*h*p)*L,e[14]=(g*a*s-o*m*s-g*n*l+t*m*l+o*n*p-t*a*p)*L,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,m=o*u,p=o*h,_=a*h,M=l*c,x=l*u,b=l*h,S=n.x,R=n.y,L=n.z;return s[0]=(1-(m+_))*S,s[1]=(d+b)*S,s[2]=(g-x)*S,s[3]=0,s[4]=(d-b)*R,s[5]=(1-(f+_))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(g+x)*L,s[9]=(p-M)*L,s[10]=(1-(f+m))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);const c=1/r,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,s,r,o){const a=this.elements,l=1/(t-e),c=1/(n-s),u=1/(o-r),h=(t+e)*l,f=(n+s)*c,d=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new N,cn=new He,tb=new N(0,0,0),nb=new N(1,1,1),oi=new N,yo=new N,jt=new N,zh=new He,kh=new xn;class Aa{constructor(e=0,t=0,n=0,s=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class Hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ib=0;const Vh=new N,_s=new xn,On=new He,bo=new N,vr=new N,sb=new N,rb=new xn,Hh=new N(1,0,0),Gh=new N(0,1,0),Wh=new N(0,0,1),ob={type:"added"},jh={type:"removed"};class rt extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new N,t=new Aa,n=new xn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new $t}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Gh,e)}rotateZ(e){return this.rotateOnAxis(Wh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Gh,e)}translateZ(e){return this.translateOnAxis(Wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(vr,bo,this.up):On.lookAt(bo,vr,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(On),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ob)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,rb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}rt.DEFAULT_UP=new N(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new N,Un=new N,ul=new N,Bn=new N,xs=new N,vs=new N,Xh=new N,hl=new N,fl=new N,dl=new N;class Hn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Un.subVectors(n,t),ul.subVectors(e,t);const o=un.dot(un),a=un.dot(Un),l=un.dot(ul),c=Un.dot(Un),u=Un.dot(ul),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Bn),l.set(0,0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Un.subVectors(e,t),un.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),un.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Hn.getUV(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,n),vs.subVectors(r,n),hl.subVectors(e,n);const l=xs.dot(hl),c=vs.dot(hl);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,s);const u=xs.dot(fl),h=vs.dot(fl);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(xs,o);dl.subVectors(e,r);const d=xs.dot(dl),g=vs.dot(dl);if(g>=0&&d<=g)return t.copy(r);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vs,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Xh.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Xh,a);const _=1/(p+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ab=0;class vn extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Gs,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rp,this.blendDst=Lp,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=By,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const s=this[t];if(s===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new N,Mo=new Pe;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mo.fromBufferAttribute(this,t),Mo.applyMatrix3(e),this.setXY(t,Mo.x,Mo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Gp extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wp extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lb=0;const Qt=new He,pl=new rt,ys=new N,Xt=new as,yr=new as,vt=new N;class Vt extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?Wp:Gp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Xt.min,yr.min),Xt.expandByPoint(vt),vt.addVectors(Xt.max,yr.max),Xt.expandByPoint(vt)):(Xt.expandByPoint(yr.min),Xt.expandByPoint(yr.max))}Xt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),vt.add(ys)),s=Math.max(s,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new N,u[P]=new N;const h=new N,f=new N,d=new N,g=new Pe,m=new Pe,p=new Pe,_=new N,M=new N;function x(P,z,k){h.fromArray(s,P*3),f.fromArray(s,z*3),d.fromArray(s,k*3),g.fromArray(o,P*2),m.fromArray(o,z*2),p.fromArray(o,k*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const D=1/(m.x*p.y-p.x*m.y);isFinite(D)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(D),M.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(D),c[P].add(_),c[z].add(_),c[k].add(_),u[P].add(M),u[z].add(M),u[k].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let P=0,z=b.length;P<z;++P){const k=b[P],D=k.start,F=k.count;for(let G=D,ee=D+F;G<ee;G+=3)x(n[G+0],n[G+1],n[G+2])}const S=new N,R=new N,L=new N,v=new N;function E(P){L.fromArray(r,P*3),v.copy(L);const z=c[P];S.copy(z),S.sub(L.multiplyScalar(L.dot(z))).normalize(),R.crossVectors(v,z);const D=R.dot(u[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=D}for(let P=0,z=b.length;P<z;++P){const k=b[P],D=k.start,F=k.count;for(let G=D,ee=D+F;G<ee;G+=3)E(n[G+0]),E(n[G+1]),E(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Mt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new He,bs=new jc,ml=new cr,br=new N,Mr=new N,Sr=new N,gl=new N,So=new N,wo=new Pe,To=new Pe,Eo=new Pe,_l=new N,Ao=new N;class at extends rt{constructor(e=new Vt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(gl.fromBufferAttribute(h,e),o?So.addScaledVector(gl,u):So.addScaledVector(gl.sub(t),u))}t.add(So)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),e.ray.intersectsSphere(ml)===!1)||(qh.copy(r).invert(),bs.copy(e.ray).applyMatrix4(qh),n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const m=h[d],p=s[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,b=M;x<b;x+=3){const S=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);o=Co(this,p,e,bs,c,u,S,R,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){const _=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);o=Co(this,s,e,bs,c,u,_,M,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(s))for(let d=0,g=h.length;d<g;d++){const m=h[d],p=s[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,b=M;x<b;x+=3){const S=x,R=x+1,L=x+2;o=Co(this,p,e,bs,c,u,S,R,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=d,p=g;m<p;m+=3){const _=m,M=m+1,x=m+2;o=Co(this,s,e,bs,c,u,_,M,x),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function cb(i,e,t,n,s,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Yn,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:i}}function Co(i,e,t,n,s,r,o,a,l){i.getVertexPosition(o,br),i.getVertexPosition(a,Mr),i.getVertexPosition(l,Sr);const c=cb(i,e,t,n,br,Mr,Sr,_l);if(c){s&&(wo.fromBufferAttribute(s,o),To.fromBufferAttribute(s,a),Eo.fromBufferAttribute(s,l),c.uv=Hn.getUV(_l,br,Mr,Sr,wo,To,Eo,new Pe)),r&&(wo.fromBufferAttribute(r,o),To.fromBufferAttribute(r,a),Eo.fromBufferAttribute(r,l),c.uv2=Hn.getUV(_l,br,Mr,Sr,wo,To,Eo,new Pe));const u={a:o,b:a,c:l,normal:new N,materialIndex:0};Hn.getNormal(br,Mr,Sr,u.normal),c.face=u}return c}class so extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function g(m,p,_,M,x,b,S,R,L,v,E){const P=b/L,z=S/v,k=b/2,D=S/2,F=R/2,G=L+1,ee=v+1;let q=0,H=0;const le=new N;for(let he=0;he<ee;he++){const be=he*z-D;for(let X=0;X<G;X++){const te=X*P-k;le[m]=te*M,le[p]=be*x,le[_]=F,c.push(le.x,le.y,le.z),le[m]=0,le[p]=0,le[_]=R>0?1:-1,u.push(le.x,le.y,le.z),h.push(X/L),h.push(1-he/v),q+=1}}for(let he=0;he<v;he++)for(let be=0;be<L;be++){const X=f+be+G*he,te=f+be+G*(he+1),xe=f+(be+1)+G*(he+1),U=f+(be+1)+G*he;l.push(X,te,U),l.push(te,xe,U),H+=6}a.addGroup(d,H,E),d+=H,f+=q}}static fromJSON(e){return new so(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=er(i[t]);for(const s in n)e[s]=n[s]}return e}function ub(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jp(i){return i.getRenderTarget()===null&&i.outputEncoding===Ze?wn:Jr}const to={clone:er,merge:Ft};var hb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hb,this.fragmentShader=fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=ub(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xp extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends Xp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Ss=1;class db extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Ot(Ms,Ss,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Ot(Ms,Ss,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Ot(Ms,Ss,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Ot(Ms,Ss,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Ot(Ms,Ss,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ot(Ms,Ss,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class qp extends Tt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pb extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new so(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:_i});r.uniforms.tEquirect.value=t;const o=new at(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=ft),new db(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const xl=new N,mb=new N,gb=new $t;class zi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xl.subVectors(n,t).cross(mb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(xl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gb.getNormalMatrix(e),s=this.coplanarPoint(xl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new cr,Ro=new N;class Xc{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,o=new zi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(a-s,h-l,m-f,x-p).normalize(),t[1].setComponents(a+s,h+l,m+f,x+p).normalize(),t[2].setComponents(a+r,h+c,m+d,x+_).normalize(),t[3].setComponents(a-r,h-c,m-d,x-_).normalize(),t[4].setComponents(a-o,h-u,m-g,x-M).normalize(),t[5].setComponents(a+o,h+u,m+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSprite(e){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $p(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _b(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,s(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class js extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const M=_*f-o;for(let x=0;x<c;x++){const b=x*h-r;g.push(b,-M,0),m.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const x=M+c*_,b=M+c*(_+1),S=M+1+c*(_+1),R=M+1+c*_;d.push(x,b,R),d.push(b,S,R)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(m,3)),this.setAttribute("uv",new Lt(p,2))}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb="vec3 transformed = vec3( position );",Tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ab=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ub=`#define PI 3.141592653589793
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
}`,Bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",jb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,nM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oM=`uniform bool receiveShadow;
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
#endif`,aM=`#if defined( USE_ENVMAP )
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
#endif`,lM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fM=`PhysicalMaterial material;
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
#endif`,dM=`struct PhysicalMaterial {
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
}`,pM=`
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
#endif`,mM=`#if defined( RE_IndirectDiffuse )
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
#endif`,gM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
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
#endif`,RM=`#ifdef USE_MORPHTARGETS
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
#endif`,LM=`#ifdef USE_MORPHTARGETS
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
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,IM=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
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
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JM=`float getShadowMask() {
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
}`,QM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eS=`#ifdef USE_SKINNING
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
#endif`,tS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#ifdef USE_TRANSMISSION
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
#endif`,cS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_S=`uniform sampler2D t2D;
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MS=`#include <common>
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
}`,SS=`#if DEPTH_PACKING == 3200
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
}`,wS=`#define DISTANCE
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
}`,TS=`#define DISTANCE
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
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,CS=`uniform float scale;
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
}`,RS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,IS=`#define LAMBERT
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
}`,DS=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,FS=`#define MATCAP
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
}`,OS=`#define NORMAL
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
}`,US=`#define NORMAL
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
}`,BS=`#define PHONG
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
}`,zS=`#define PHONG
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
}`,kS=`#define STANDARD
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
}`,VS=`#define STANDARD
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
}`,HS=`#define TOON
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
}`,GS=`#define TOON
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
}`,WS=`uniform float size;
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
}`,jS=`uniform vec3 diffuse;
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
}`,XS=`#include <common>
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
}`,qS=`uniform vec3 color;
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
}`,$S=`uniform float rotation;
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
}`,KS=`uniform vec3 diffuse;
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
}`,ze={alphamap_fragment:xb,alphamap_pars_fragment:vb,alphatest_fragment:yb,alphatest_pars_fragment:bb,aomap_fragment:Mb,aomap_pars_fragment:Sb,begin_vertex:wb,beginnormal_vertex:Tb,bsdfs:Eb,iridescence_fragment:Ab,bumpmap_pars_fragment:Cb,clipping_planes_fragment:Rb,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Pb,clipping_planes_vertex:Ib,color_fragment:Db,color_pars_fragment:Nb,color_pars_vertex:Fb,color_vertex:Ob,common:Ub,cube_uv_reflection_fragment:Bb,defaultnormal_vertex:zb,displacementmap_pars_vertex:kb,displacementmap_vertex:Vb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Gb,encodings_fragment:Wb,encodings_pars_fragment:jb,envmap_fragment:Xb,envmap_common_pars_fragment:qb,envmap_pars_fragment:$b,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:aM,envmap_vertex:Yb,fog_vertex:Zb,fog_pars_vertex:Jb,fog_fragment:Qb,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_fragment:nM,lightmap_pars_fragment:iM,lights_lambert_fragment:sM,lights_lambert_pars_fragment:rM,lights_pars_begin:oM,lights_toon_fragment:lM,lights_toon_pars_fragment:cM,lights_phong_fragment:uM,lights_phong_pars_fragment:hM,lights_physical_fragment:fM,lights_physical_pars_fragment:dM,lights_fragment_begin:pM,lights_fragment_maps:mM,lights_fragment_end:gM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:yM,map_fragment:bM,map_pars_fragment:MM,map_particle_fragment:SM,map_particle_pars_fragment:wM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:EM,morphcolor_vertex:AM,morphnormal_vertex:CM,morphtarget_pars_vertex:RM,morphtarget_vertex:LM,normal_fragment_begin:PM,normal_fragment_maps:IM,normal_pars_fragment:DM,normal_pars_vertex:NM,normal_vertex:FM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:kM,output_fragment:VM,packing:HM,premultiplied_alpha_fragment:GM,project_vertex:WM,dithering_fragment:jM,dithering_pars_fragment:XM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:KM,shadowmap_pars_vertex:YM,shadowmap_vertex:ZM,shadowmask_pars_fragment:JM,skinbase_vertex:QM,skinning_pars_vertex:eS,skinning_vertex:tS,skinnormal_vertex:nS,specularmap_fragment:iS,specularmap_pars_fragment:sS,tonemapping_fragment:rS,tonemapping_pars_fragment:oS,transmission_fragment:aS,transmission_pars_fragment:lS,uv_pars_fragment:cS,uv_pars_vertex:uS,uv_vertex:hS,uv2_pars_fragment:fS,uv2_pars_vertex:dS,uv2_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:_S,backgroundCube_vert:xS,backgroundCube_frag:vS,cube_vert:yS,cube_frag:bS,depth_vert:MS,depth_frag:SS,distanceRGBA_vert:wS,distanceRGBA_frag:TS,equirect_vert:ES,equirect_frag:AS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:LS,meshbasic_frag:PS,meshlambert_vert:IS,meshlambert_frag:DS,meshmatcap_vert:NS,meshmatcap_frag:FS,meshnormal_vert:OS,meshnormal_frag:US,meshphong_vert:BS,meshphong_frag:zS,meshphysical_vert:kS,meshphysical_frag:VS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:WS,points_frag:jS,shadow_vert:XS,shadow_frag:qS,sprite_vert:$S,sprite_frag:KS},ve={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new $t},uv2Transform:{value:new $t},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new $t}}},En={basic:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([ve.lights,ve.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};En.physical={uniforms:Ft([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Lo={r:0,b:0,g:0};function YS(i,e,t,n,s,r,o){const a=new Ie(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(p,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=i.xr,S=b.getSession&&b.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ea)?(u===void 0&&(u=new at(new so(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:er(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Ze,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new js(2,2),new kt({name:"BackgroundMaterial",uniforms:er(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Ze,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){p.getRGB(Lo,jp(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function ZS(i,e,t,n){const s=i.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(F,G,ee,q,H){let le=!1;if(o){const he=m(q,ee,G);c!==he&&(c=he,d(c.object)),le=_(F,q,ee,H),le&&M(F,q,ee,H)}else{const he=G.wireframe===!0;(c.geometry!==q.id||c.program!==ee.id||c.wireframe!==he)&&(c.geometry=q.id,c.program=ee.id,c.wireframe=he,le=!0)}H!==null&&t.update(H,34963),(le||u)&&(u=!1,v(F,G,ee,q),H!==null&&i.bindBuffer(34963,t.get(H).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function m(F,G,ee){const q=ee.wireframe===!0;let H=a[F.id];H===void 0&&(H={},a[F.id]=H);let le=H[G.id];le===void 0&&(le={},H[G.id]=le);let he=le[q];return he===void 0&&(he=p(f()),le[q]=he),he}function p(F){const G=[],ee=[],q=[];for(let H=0;H<s;H++)G[H]=0,ee[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:q,object:F,attributes:{},index:null}}function _(F,G,ee,q){const H=c.attributes,le=G.attributes;let he=0;const be=ee.getAttributes();for(const X in be)if(be[X].location>=0){const xe=H[X];let U=le[X];if(U===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(U=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(U=F.instanceColor)),xe===void 0||xe.attribute!==U||U&&xe.data!==U.data)return!0;he++}return c.attributesNum!==he||c.index!==q}function M(F,G,ee,q){const H={},le=G.attributes;let he=0;const be=ee.getAttributes();for(const X in be)if(be[X].location>=0){let xe=le[X];xe===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(xe=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(xe=F.instanceColor));const U={};U.attribute=xe,xe&&xe.data&&(U.data=xe.data),H[X]=U,he++}c.attributes=H,c.attributesNum=he,c.index=q}function x(){const F=c.newAttributes;for(let G=0,ee=F.length;G<ee;G++)F[G]=0}function b(F){S(F,0)}function S(F,G){const ee=c.newAttributes,q=c.enabledAttributes,H=c.attributeDivisors;ee[F]=1,q[F]===0&&(i.enableVertexAttribArray(F),q[F]=1),H[F]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),H[F]=G)}function R(){const F=c.newAttributes,G=c.enabledAttributes;for(let ee=0,q=G.length;ee<q;ee++)G[ee]!==F[ee]&&(i.disableVertexAttribArray(ee),G[ee]=0)}function L(F,G,ee,q,H,le){n.isWebGL2===!0&&(ee===5124||ee===5125)?i.vertexAttribIPointer(F,G,ee,H,le):i.vertexAttribPointer(F,G,ee,q,H,le)}function v(F,G,ee,q){if(n.isWebGL2===!1&&(F.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const H=q.attributes,le=ee.getAttributes(),he=G.defaultAttributeValues;for(const be in le){const X=le[be];if(X.location>=0){let te=H[be];if(te===void 0&&(be==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),be==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){const xe=te.normalized,U=te.itemSize,I=t.get(te);if(I===void 0)continue;const Q=I.buffer,oe=I.type,_e=I.bytesPerElement;if(te.isInterleavedBufferAttribute){const fe=te.data,Te=fe.stride,T=te.offset;if(fe.isInstancedInterleavedBuffer){for(let C=0;C<X.locationSize;C++)S(X.location+C,fe.meshPerAttribute);F.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let C=0;C<X.locationSize;C++)b(X.location+C);i.bindBuffer(34962,Q);for(let C=0;C<X.locationSize;C++)L(X.location+C,U/X.locationSize,oe,xe,Te*_e,(T+U/X.locationSize*C)*_e)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)S(X.location+fe,te.meshPerAttribute);F.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<X.locationSize;fe++)b(X.location+fe);i.bindBuffer(34962,Q);for(let fe=0;fe<X.locationSize;fe++)L(X.location+fe,U/X.locationSize,oe,xe,U*_e,U/X.locationSize*fe*_e)}}else if(he!==void 0){const xe=he[be];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(X.location,xe);break;case 3:i.vertexAttrib3fv(X.location,xe);break;case 4:i.vertexAttrib4fv(X.location,xe);break;default:i.vertexAttrib1fv(X.location,xe)}}}}R()}function E(){k();for(const F in a){const G=a[F];for(const ee in G){const q=G[ee];for(const H in q)g(q[H].object),delete q[H];delete G[ee]}delete a[F]}}function P(F){if(a[F.id]===void 0)return;const G=a[F.id];for(const ee in G){const q=G[ee];for(const H in q)g(q[H].object),delete q[H];delete G[ee]}delete a[F.id]}function z(F){for(const G in a){const ee=a[G];if(ee[F.id]===void 0)continue;const q=ee[F.id];for(const H in q)g(q[H].object),delete q[H];delete ee[F.id]}}function k(){D(),u=!0,c!==l&&(c=l,d(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:b,disableUnusedAttributes:R}}function JS(i,e,t,n){const s=n.isWebGL2;let r;function o(c){r=c}function a(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,d;if(s)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function QS(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),M=i.getParameter(36349),x=f>0,b=o||e.has("OES_texture_float"),S=x&&b,R=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:R}}function ew(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const M=r?0:n,x=M*4;let b=_.clippingState||null;l.value=b,b=u(g,f,x,d);for(let S=0;S!==x;++S)b[S]=t[S];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,b=d;x!==m;++x,b+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function tw(i){let e=new WeakMap;function t(o,a){return a===Yr?o.mapping=Ys:a===ic&&(o.mapping=Zs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Yr||a===ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pb(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ca extends Xp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,$h=[.125,.215,.35,.446,.526,.582],Wi=20,vl=new Ca,Kh=new Ie;let yl=null;const ki=(1+Math.sqrt(5))/2,Ts=1/ki,Yh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ki,Ts),new N(0,ki,-Ts),new N(Ts,0,ki),new N(-Ts,0,ki),new N(ki,Ts,0),new N(-ki,Ts,0)];class Zh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){yl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yl),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:jn,format:nn,encoding:bi,depthBuffer:!1},s=Jh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nw(r)),this._blurMaterial=iw(r,e,t)}return s}_compileMaterial(e){const t=new at(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,n,s){const a=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Kh),u.toneMapping=$n,u.autoClear=!1;const d=new qn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new at(new so,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Kh),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Po(s,M*x,_>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ys||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new at(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yh[(s-1)%Yh.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new at(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):Wi;p>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wi}`);const _=[];let M=0;for(let L=0;L<Wi;++L){const v=L/m,E=Math.exp(-v*v/2);_.push(E),L===0?M+=E:L<p&&(M+=2*E)}for(let L=0;L<_.length;L++)_[L]=_[L]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[s],S=3*b*(s>x-Fs?s-x+Fs:0),R=4*(this._cubeSize-b);Po(t,S,R,3*b,2*b),l.setRenderTarget(t),l.render(h,vl)}}function nw(i){const e=[],t=[],n=[];let s=i;const r=i-Fs+1+$h.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Fs?l=$h[o-i+Fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,M=new Float32Array(m*g*d),x=new Float32Array(p*g*d),b=new Float32Array(_*g*d);for(let R=0;R<d;R++){const L=R%3*2/3-1,v=R>2?0:-1,E=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];M.set(E,m*g*R),x.set(f,p*g*R);const P=[R,R,R,R,R,R];b.set(P,_*g*R)}const S=new Vt;S.setAttribute("position",new Mt(M,m)),S.setAttribute("uv",new Mt(x,p)),S.setAttribute("faceIndex",new Mt(b,_)),e.push(S),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jh(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function iw(i,e,t){const n=new Float32Array(Wi),s=new N(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Qh(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function ef(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}function sw(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Yr||l===ic,u=l===Ys||l===Zs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Zh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Zh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rw(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ow(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const M=d.array;m=d.version;for(let x=0,b=M.length;x<b;x+=3){const S=M[x+0],R=M[x+1],L=M[x+2];f.push(S,R,R,L,L,S)}}else{const M=g.array;m=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){const S=x+0,R=x+1,L=x+2;f.push(S,R,R,L,L,S)}}const p=new(Up(f)?Wp:Gp)(f,1);p.version=m;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function aw(i,e,t,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(r,d,a,f*l),t.update(d,r,1)}function h(f,d,g){if(g===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,f*l,g),t.update(d,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function lw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function cw(i,e){return i[0]-e[0]}function uw(i,e){return Math.abs(e[1])-Math.abs(i[1])}function hw(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new it,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let ee=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",ee)};var g=ee;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let P=0;b===!0&&(P=1),S===!0&&(P=2),R===!0&&(P=3);let z=u.attributes.position.count*P,k=1;z>e.maxTextureSize&&(k=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const D=new Float32Array(z*k*4*p),F=new Vp(D,z,k,p);F.type=pn,F.needsUpdate=!0;const G=P*4;for(let q=0;q<p;q++){const H=L[q],le=v[q],he=E[q],be=z*k*4*q;for(let X=0;X<H.count;X++){const te=X*G;b===!0&&(o.fromBufferAttribute(H,X),D[be+te+0]=o.x,D[be+te+1]=o.y,D[be+te+2]=o.z,D[be+te+3]=0),S===!0&&(o.fromBufferAttribute(le,X),D[be+te+4]=o.x,D[be+te+5]=o.y,D[be+te+6]=o.z,D[be+te+7]=0),R===!0&&(o.fromBufferAttribute(he,X),D[be+te+8]=o.x,D[be+te+9]=o.y,D[be+te+10]=o.z,D[be+te+11]=he.itemSize===4?o.w:1)}}_={count:p,texture:F,size:new Pe(z,k)},r.set(u,_),u.addEventListener("dispose",ee)}let M=0;for(let b=0;b<d.length;b++)M+=d[b];const x=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let S=0;S<m;S++)p[S]=[S,0];n[u.id]=p}for(let S=0;S<m;S++){const R=p[S];R[0]=S,R[1]=d[S]}p.sort(uw);for(let S=0;S<8;S++)S<m&&p[S][1]?(a[S][0]=p[S][0],a[S][1]=p[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(cw);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const R=a[S],L=R[0],v=R[1];L!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+S)!==_[L]&&u.setAttribute("morphTarget"+S,_[L]),M&&u.getAttribute("morphNormal"+S)!==M[L]&&u.setAttribute("morphNormal"+S,M[L]),s[S]=v,x+=v):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),M&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const b=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function fw(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Kp=new Tt,Yp=new Vp,Zp=new Qy,Jp=new qp,tf=[],nf=[],sf=new Float32Array(16),rf=new Float32Array(9),of=new Float32Array(4);function ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=tf[s];if(r===void 0&&(r=new Float32Array(s),tf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=nf[e];t===void 0&&(t=new Int32Array(e),nf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function dw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function mw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function gw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function _w(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;of.set(n),i.uniformMatrix2fv(this.addr,!1,of),mt(t,n)}}function xw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;rf.set(n),i.uniformMatrix3fv(this.addr,!1,rf),mt(t,n)}}function vw(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;sf.set(n),i.uniformMatrix4fv(this.addr,!1,sf),mt(t,n)}}function yw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Mw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function ww(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Ew(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Aw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Cw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||Kp,s)}function Rw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zp,s)}function Lw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Jp,s)}function Pw(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yp,s)}function Iw(i){switch(i){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return xw;case 35676:return vw;case 5124:case 35670:return yw;case 35667:case 35671:return bw;case 35668:case 35672:return Mw;case 35669:case 35673:return Sw;case 5125:return ww;case 36294:return Tw;case 36295:return Ew;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Lw;case 36289:case 36303:case 36311:case 36292:return Pw}}function Dw(i,e){i.uniform1fv(this.addr,e)}function Nw(i,e){const t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Fw(i,e){const t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Ow(i,e){const t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Uw(i,e){const t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bw(i,e){const t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zw(i,e){const t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kw(i,e){i.uniform1iv(this.addr,e)}function Vw(i,e){i.uniform2iv(this.addr,e)}function Hw(i,e){i.uniform3iv(this.addr,e)}function Gw(i,e){i.uniform4iv(this.addr,e)}function Ww(i,e){i.uniform1uiv(this.addr,e)}function jw(i,e){i.uniform2uiv(this.addr,e)}function Xw(i,e){i.uniform3uiv(this.addr,e)}function qw(i,e){i.uniform4uiv(this.addr,e)}function $w(i,e,t){const n=this.cache,s=e.length,r=Ra(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Kp,r[o])}function Kw(i,e,t){const n=this.cache,s=e.length,r=Ra(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Zp,r[o])}function Yw(i,e,t){const n=this.cache,s=e.length,r=Ra(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Jp,r[o])}function Zw(i,e,t){const n=this.cache,s=e.length,r=Ra(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Yp,r[o])}function Jw(i){switch(i){case 5126:return Dw;case 35664:return Nw;case 35665:return Fw;case 35666:return Ow;case 35674:return Uw;case 35675:return Bw;case 35676:return zw;case 5124:case 35670:return kw;case 35667:case 35671:return Vw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Ww;case 36294:return jw;case 36295:return Xw;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return Zw}}class Qw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Iw(t.type)}}class eT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Jw(t.type)}}class tT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function af(i,e){i.seq.push(e),i.map[e.id]=e}function nT(i,e,t){const n=i.name,s=n.length;for(bl.lastIndex=0;;){const r=bl.exec(n),o=bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){af(t,c===void 0?new Qw(a,i,e):new eT(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new tT(a),af(t,h)),t=h}}}class Yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);nT(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function lf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let iT=0;function sT(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function rT(i){switch(i){case bi:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function cf(i,e,t){const n=i.getShaderParameter(e,35713),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+sT(i.getShaderSource(e),o)}else return s}function oT(i,e){const t=rT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function aT(i,e){let t;switch(e){case uy:t="Linear";break;case hy:t="Reinhard";break;case fy:t="OptimizedCineon";break;case dy:t="ACESFilmic";break;case py:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lT(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function cT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function uT(i,e){const t={},n=i.getProgramParameter(e,35721);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Dr(i){return i!==""}function uf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hT=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(i){return i.replace(hT,fT)}function fT(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return cc(t)}const dT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(i){return i.replace(dT,pT)}function pT(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function df(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ir&&(e="SHADOWMAP_TYPE_VSM"),e}function gT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _T(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case ly:e="ENVMAP_BLENDING_MIX";break;case cy:e="ENVMAP_BLENDING_ADD";break}return e}function vT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yT(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mT(t),c=gT(t),u=_T(t),h=xT(t),f=vT(t),d=t.isWebGL2?"":lT(t),g=cT(r),m=s.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Dr).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(Dr).join(`
`),_.length>0&&(_+=`
`)):(p=[df(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),_=[d,df(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?ze.tonemapping_pars_fragment:"",t.toneMapping!==$n?aT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,oT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),o=cc(o),o=uf(o,t),o=hf(o,t),a=cc(a),a=uf(a,t),a=hf(a,t),o=ff(o),a=ff(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+p+o,b=M+_+a,S=lf(s,35633,x),R=lf(s,35632,b);if(s.attachShader(m,S),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m),i.debug.checkShaderErrors){const E=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(S).trim(),z=s.getShaderInfoLog(R).trim();let k=!0,D=!0;if(s.getProgramParameter(m,35714)===!1){k=!1;const F=cf(s,S,"vertex"),G=cf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+F+`
`+G)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(P===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:k,programLog:E,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:_}})}s.deleteShader(S),s.deleteShader(R);let L;this.getUniforms=function(){return L===void 0&&(L=new Yo(s,m)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=uT(s,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}let bT=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ST(e),t.set(e,n)),n}}class ST{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function wT(i,e,t,n,s,r,o){const a=new Hp,l=new MT,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,E,P,z,k){const D=z.fog,F=k.geometry,G=v.isMeshStandardMaterial?z.environment:null,ee=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),q=ee&&ee.mapping===Ea?ee.image.height:null,H=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=le!==void 0?le.length:0;let be=0;F.morphAttributes.position!==void 0&&(be=1),F.morphAttributes.normal!==void 0&&(be=2),F.morphAttributes.color!==void 0&&(be=3);let X,te,xe,U;if(H){const Te=En[H];X=Te.vertexShader,te=Te.fragmentShader}else X=v.vertexShader,te=v.fragmentShader,l.update(v),xe=l.getVertexShaderID(v),U=l.getFragmentShaderID(v);const I=i.getRenderTarget(),Q=v.alphaTest>0,oe=v.clearcoat>0,_e=v.iridescence>0;return{isWebGL2:u,shaderID:H,shaderName:v.type,vertexShader:X,fragmentShader:te,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:U,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:f,outputEncoding:I===null?i.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:bi,map:!!v.map,matcap:!!v.matcap,envMap:!!ee,envMapMode:ee&&ee.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Uy,tangentSpaceNormalMap:v.normalMapType===Gc,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ze,clearcoat:oe,clearcoatMap:oe&&!!v.clearcoatMap,clearcoatRoughnessMap:oe&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!v.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!v.iridescenceMap,iridescenceThicknessMap:_e&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Gs,alphaMap:!!v.alphaMap,alphaTest:Q,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:$n,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wn,flipSided:v.side===Kt,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(E,v),M(E,v),E.push(i.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),v.push(a.mask)}function x(v){const E=g[v.type];let P;if(E){const z=En[E];P=to.clone(z.uniforms)}else P=v.uniforms;return P}function b(v,E){let P;for(let z=0,k=c.length;z<k;z++){const D=c[z];if(D.cacheKey===E){P=D,++P.usedTimes;break}}return P===void 0&&(P=new yT(i,E,v,r),c.push(P)),P}function S(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:L}}function TT(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ET(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function pf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function mf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,m,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function a(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?s.push(_):t.push(_)}function l(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?s.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||ET),n.length>1&&n.sort(f||pf),s.length>1&&s.sort(f||pf)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function AT(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new mf,i.set(n,[o])):s>=r.length?(o=new mf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function CT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ie};break;case"SpotLight":t={position:new N,direction:new N,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function RT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let LT=0;function PT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function IT(i,e){const t=new CT,n=RT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,o=new He,a=new He;function l(u,h){let f=0,d=0,g=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let m=0,p=0,_=0,M=0,x=0,b=0,S=0,R=0,L=0,v=0;u.sort(PT);const E=h!==!0?Math.PI:1;for(let z=0,k=u.length;z<k;z++){const D=u[z],F=D.color,G=D.intensity,ee=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=F.r*G*E,d+=F.g*G*E,g+=F.b*G*E;else if(D.isLightProbe)for(let H=0;H<9;H++)s.probe[H].addScaledVector(D.sh.coefficients[H],G);else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const le=D.shadow,he=n.get(D);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,s.directionalShadow[m]=he,s.directionalShadowMap[m]=q,s.directionalShadowMatrix[m]=D.shadow.matrix,b++}s.directional[m]=H,m++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(G*E),H.distance=ee,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,s.spot[_]=H;const le=D.shadow;if(D.map&&(s.spotLightMap[L]=D.map,L++,le.updateMatrices(D),D.castShadow&&v++),s.spotLightMatrix[_]=le.matrix,D.castShadow){const he=n.get(D);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,s.spotShadow[_]=he,s.spotShadowMap[_]=q,R++}_++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(F).multiplyScalar(G),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),s.rectArea[M]=H,M++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*E),H.distance=D.distance,H.decay=D.decay,D.castShadow){const le=D.shadow,he=n.get(D);he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,he.shadowCameraNear=le.camera.near,he.shadowCameraFar=le.camera.far,s.pointShadow[p]=he,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=D.shadow.matrix,S++}s.point[p]=H,p++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(G*E),H.groundColor.copy(D.groundColor).multiplyScalar(G*E),s.hemi[x]=H,x++}}M>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;const P=s.hash;(P.directionalLength!==m||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==x||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==R||P.numSpotMaps!==L)&&(s.directional.length=m,s.spot.length=_,s.rectArea.length=M,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=S,s.pointShadowMap.length=S,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=S,s.spotLightMatrix.length=R+L-v,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=v,P.directionalLength=m,P.pointLength=p,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=x,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=R,P.numSpotMaps=L,s.version=LT++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const b=u[M];if(b.isDirectionalLight){const S=s.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),f++}else if(b.isSpotLight){const S=s.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const S=s.rectArea[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const S=s.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const S=s.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:s}}function gf(i,e){const t=new IT(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function DT(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new gf(i,e),t.set(r,[l])):o>=a.length?(l=new gf(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class NT extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FT extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
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
}`;function BT(i,e,t){let n=new Xc;const s=new Pe,r=new Pe,o=new it,a=new NT({depthPacking:Oy}),l=new FT,c={},u=t.maxTextureSize,h={[Yn]:Kt,[Kt]:Yn,[Wn]:Wn},f=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:OT,fragmentShader:UT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new at(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cp,this.render=function(b,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const L=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(_i),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,k=b.length;z<k;z++){const D=b[z],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const G=F.getFrameExtents();if(s.multiply(G),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,F.mapSize.y=r.y)),F.map===null){const q=this.type!==Ir?{minFilter:yt,magFilter:yt}:{};F.map=new _n(s.x,s.y,q),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const ee=F.getViewportCount();for(let q=0;q<ee;q++){const H=F.getViewport(q);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),P.viewport(o),F.updateMatrices(D,q),n=F.getFrustum(),x(S,R,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===Ir&&_(F,R),F.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(L,v,E)};function _(b,S){const R=e.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new _n(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,R,f,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,R,d,m,null)}function M(b,S,R,L,v,E){let P=null;const z=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)P=z;else if(P=R.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const k=P.uuid,D=S.uuid;let F=c[k];F===void 0&&(F={},c[k]=F);let G=F[D];G===void 0&&(G=P.clone(),F[D]=G),P=G}return P.visible=S.visible,P.wireframe=S.wireframe,E===Ir?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:h[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,R.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(R.matrixWorld),P.nearDistance=L,P.farDistance=v),P}function x(b,S,R,L,v){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Ir)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const z=e.update(b),k=b.material;if(Array.isArray(k)){const D=z.groups;for(let F=0,G=D.length;F<G;F++){const ee=D[F],q=k[ee.materialIndex];if(q&&q.visible){const H=M(b,q,L,R.near,R.far,v);i.renderBufferDirect(R,null,z,H,b,ee)}}}else if(k.visible){const D=M(b,k,L,R.near,R.far,v);i.renderBufferDirect(R,null,z,D,b,null)}}const P=b.children;for(let z=0,k=P.length;z<k;z++)x(P[z],S,R,L,v)}}function zT(i,e,t){const n=t.isWebGL2;function s(){let O=!1;const Z=new it;let me=null;const Se=new it(0,0,0,0);return{setMask:function(Ae){me!==Ae&&!O&&(i.colorMask(Ae,Ae,Ae,Ae),me=Ae)},setLocked:function(Ae){O=Ae},setClear:function(Ae,Ye,_t,Et,Si){Si===!0&&(Ae*=Et,Ye*=Et,_t*=Et),Z.set(Ae,Ye,_t,Et),Se.equals(Z)===!1&&(i.clearColor(Ae,Ye,_t,Et),Se.copy(Z))},reset:function(){O=!1,me=null,Se.set(-1,0,0,0)}}}function r(){let O=!1,Z=null,me=null,Se=null;return{setTest:function(Ae){Ae?Q(2929):oe(2929)},setMask:function(Ae){Z!==Ae&&!O&&(i.depthMask(Ae),Z=Ae)},setFunc:function(Ae){if(me!==Ae){switch(Ae){case ty:i.depthFunc(512);break;case ny:i.depthFunc(519);break;case iy:i.depthFunc(513);break;case nc:i.depthFunc(515);break;case sy:i.depthFunc(514);break;case ry:i.depthFunc(518);break;case oy:i.depthFunc(516);break;case ay:i.depthFunc(517);break;default:i.depthFunc(515)}me=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){Se!==Ae&&(i.clearDepth(Ae),Se=Ae)},reset:function(){O=!1,Z=null,me=null,Se=null}}}function o(){let O=!1,Z=null,me=null,Se=null,Ae=null,Ye=null,_t=null,Et=null,Si=null;return{setTest:function(st){O||(st?Q(2960):oe(2960))},setMask:function(st){Z!==st&&!O&&(i.stencilMask(st),Z=st)},setFunc:function(st,Pn,Zt){(me!==st||Se!==Pn||Ae!==Zt)&&(i.stencilFunc(st,Pn,Zt),me=st,Se=Pn,Ae=Zt)},setOp:function(st,Pn,Zt){(Ye!==st||_t!==Pn||Et!==Zt)&&(i.stencilOp(st,Pn,Zt),Ye=st,_t=Pn,Et=Zt)},setLocked:function(st){O=st},setClear:function(st){Si!==st&&(i.clearStencil(st),Si=st)},reset:function(){O=!1,Z=null,me=null,Se=null,Ae=null,Ye=null,_t=null,Et=null,Si=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,x=null,b=null,S=null,R=null,L=null,v=null,E=!1,P=null,z=null,k=null,D=null,F=null;const G=i.getParameter(35661);let ee=!1,q=0;const H=i.getParameter(7938);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),ee=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ee=q>=2);let le=null,he={};const be=i.getParameter(3088),X=i.getParameter(2978),te=new it().fromArray(be),xe=new it().fromArray(X);function U(O,Z,me){const Se=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(O,Ae),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let Ye=0;Ye<me;Ye++)i.texImage2D(Z+Ye,0,6408,1,1,0,6408,5121,Se);return Ae}const I={};I[3553]=U(3553,3553,1),I[34067]=U(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(nc),ne(!1),ce(lh),Q(2884),j(_i);function Q(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function oe(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function _e(O,Z){return d[O]!==Z?(i.bindFramebuffer(O,Z),d[O]=Z,n&&(O===36009&&(d[36160]=Z),O===36160&&(d[36009]=Z)),!0):!1}function fe(O,Z){let me=m,Se=!1;if(O)if(me=g.get(Z),me===void 0&&(me=[],g.set(Z,me)),O.isWebGLMultipleRenderTargets){const Ae=O.texture;if(me.length!==Ae.length||me[0]!==36064){for(let Ye=0,_t=Ae.length;Ye<_t;Ye++)me[Ye]=36064+Ye;me.length=Ae.length,Se=!0}}else me[0]!==36064&&(me[0]=36064,Se=!0);else me[0]!==1029&&(me[0]=1029,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Te(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const T={[Ps]:32774,[Wv]:32778,[jv]:32779};if(n)T[hh]=32775,T[fh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(T[hh]=O.MIN_EXT,T[fh]=O.MAX_EXT)}const C={[Xv]:0,[qv]:1,[$v]:768,[Rp]:770,[ey]:776,[Jv]:774,[Yv]:772,[Kv]:769,[Lp]:771,[Qv]:775,[Zv]:773};function j(O,Z,me,Se,Ae,Ye,_t,Et){if(O===_i){_===!0&&(oe(3042),_=!1);return}if(_===!1&&(Q(3042),_=!0),O!==Gv){if(O!==M||Et!==E){if((x!==Ps||R!==Ps)&&(i.blendEquation(32774),x=Ps,R=Ps),Et)switch(O){case Gs:i.blendFuncSeparate(1,771,1,771);break;case tc:i.blendFunc(1,1);break;case ch:i.blendFuncSeparate(0,769,0,1);break;case uh:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:i.blendFuncSeparate(770,771,1,771);break;case tc:i.blendFunc(770,1);break;case ch:i.blendFuncSeparate(0,769,0,1);break;case uh:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,S=null,L=null,v=null,M=O,E=Et}return}Ae=Ae||Z,Ye=Ye||me,_t=_t||Se,(Z!==x||Ae!==R)&&(i.blendEquationSeparate(T[Z],T[Ae]),x=Z,R=Ae),(me!==b||Se!==S||Ye!==L||_t!==v)&&(i.blendFuncSeparate(C[me],C[Se],C[Ye],C[_t]),b=me,S=Se,L=Ye,v=_t),M=O,E=!1}function K(O,Z){O.side===Wn?oe(2884):Q(2884);let me=O.side===Kt;Z&&(me=!me),ne(me),O.blending===Gs&&O.transparent===!1?j(_i):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const Se=O.stencilWrite;c.setTest(Se),Se&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),se(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(32926):oe(32926)}function ne(O){P!==O&&(O?i.frontFace(2304):i.frontFace(2305),P=O)}function ce(O){O!==kv?(Q(2884),O!==z&&(O===lh?i.cullFace(1029):O===Vv?i.cullFace(1028):i.cullFace(1032))):oe(2884),z=O}function de(O){O!==k&&(ee&&i.lineWidth(O),k=O)}function se(O,Z,me){O?(Q(32823),(D!==Z||F!==me)&&(i.polygonOffset(Z,me),D=Z,F=me)):oe(32823)}function ge(O){O?Q(3089):oe(3089)}function ae(O){O===void 0&&(O=33984+G-1),le!==O&&(i.activeTexture(O),le=O)}function w(O,Z,me){me===void 0&&(le===null?me=33984+G-1:me=le);let Se=he[me];Se===void 0&&(Se={type:void 0,texture:void 0},he[me]=Se),(Se.type!==O||Se.texture!==Z)&&(le!==me&&(i.activeTexture(me),le=me),i.bindTexture(O,Z||I[O]),Se.type=O,Se.texture=Z)}function y(){const O=he[le];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){te.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),te.copy(O))}function Me(O){xe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function Fe(O,Z){let me=h.get(Z);me===void 0&&(me=new WeakMap,h.set(Z,me));let Se=me.get(O);Se===void 0&&(Se=i.getUniformBlockIndex(Z,O.name),me.set(O,Se))}function Qe(O,Z){const Se=h.get(Z).get(O);u.get(Z)!==Se&&(i.uniformBlockBinding(Z,Se,O.__bindingPointIndex),u.set(Z,Se))}function gt(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},le=null,he={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,x=null,b=null,S=null,R=null,L=null,v=null,E=!1,P=null,z=null,k=null,D=null,F=null,te.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Q,disable:oe,bindFramebuffer:_e,drawBuffers:fe,useProgram:Te,setBlending:j,setMaterial:K,setFlipSided:ne,setCullFace:ce,setLineWidth:de,setPolygonOffset:se,setScissorTest:ge,activeTexture:ae,bindTexture:w,unbindTexture:y,compressedTexImage2D:B,compressedTexImage3D:$,texImage2D:Le,texImage3D:we,updateUBOMapping:Fe,uniformBlockBinding:Qe,texStorage2D:Y,texStorage3D:Ee,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:ye,compressedTexSubImage3D:pe,scissor:Ce,viewport:Me,reset:gt}}function kT(i,e,t,n,s,r,o){const a=s.isWebGL2,l=s.maxTextures,c=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,y){return _?new OffscreenCanvas(w,y):eo("canvas")}function x(w,y,B,$){let re=1;if((w.width>$||w.height>$)&&(re=$/Math.max(w.width,w.height)),re<1||y===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ue=y?ca:Math.floor,ye=ue(re*w.width),pe=ue(re*w.height);m===void 0&&(m=M(ye,pe));const Y=B?M(ye,pe):m;return Y.width=ye,Y.height=pe,Y.getContext("2d").drawImage(w,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ye+"x"+pe+")."),Y}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function b(w){return lc(w.width)&&lc(w.height)}function S(w){return a?!1:w.wrapS!==zt||w.wrapT!==zt||w.minFilter!==yt&&w.minFilter!==ft}function R(w,y){return w.generateMipmaps&&y&&w.minFilter!==yt&&w.minFilter!==ft}function L(w){i.generateMipmap(w)}function v(w,y,B,$,re=!1){if(a===!1)return y;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue=y;return y===6403&&(B===5126&&(ue=33326),B===5131&&(ue=33325),B===5121&&(ue=33321)),y===33319&&(B===5126&&(ue=33328),B===5131&&(ue=33327),B===5121&&(ue=33323)),y===6408&&(B===5126&&(ue=34836),B===5131&&(ue=34842),B===5121&&(ue=$===Ze&&re===!1?35907:32856),B===32819&&(ue=32854),B===32820&&(ue=32855)),(ue===33325||ue===33326||ue===33327||ue===33328||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function E(w,y,B){return R(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==yt&&w.minFilter!==ft?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function P(w){return w===yt||w===sc||w===$o?9728:9729}function z(w){const y=w.target;y.removeEventListener("dispose",z),D(y),y.isVideoTexture&&g.delete(y)}function k(w){const y=w.target;y.removeEventListener("dispose",k),G(y)}function D(w){const y=n.get(w);if(y.__webglInit===void 0)return;const B=w.source,$=p.get(B);if($){const re=$[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(w),Object.keys($).length===0&&p.delete(B)}n.remove(w)}function F(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const B=w.source,$=p.get(B);delete $[y.__cacheKey],o.memory.textures--}function G(w){const y=w.texture,B=n.get(w),$=n.get(y);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)i.deleteFramebuffer(B.__webglFramebuffer[re]),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[re]);else{if(i.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let re=0;re<B.__webglColorRenderbuffer.length;re++)B.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[re]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let re=0,ue=y.length;re<ue;re++){const ye=n.get(y[re]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(y[re])}n.remove(y),n.remove(w)}let ee=0;function q(){ee=0}function H(){const w=ee;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),ee+=1,w}function le(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.encoding),y.join()}function he(w,y){const B=n.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,w,y);return}}t.bindTexture(3553,B.__webglTexture,33984+y)}function be(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){oe(B,w,y);return}t.bindTexture(35866,B.__webglTexture,33984+y)}function X(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){oe(B,w,y);return}t.bindTexture(32879,B.__webglTexture,33984+y)}function te(w,y){const B=n.get(w);if(w.version>0&&B.__version!==w.version){_e(B,w,y);return}t.bindTexture(34067,B.__webglTexture,33984+y)}const xe={[Rn]:10497,[zt]:33071,[aa]:33648},U={[yt]:9728,[sc]:9984,[$o]:9986,[ft]:9729,[Ip]:9985,[yi]:9987};function I(w,y,B){if(B?(i.texParameteri(w,10242,xe[y.wrapS]),i.texParameteri(w,10243,xe[y.wrapT]),(w===32879||w===35866)&&i.texParameteri(w,32882,xe[y.wrapR]),i.texParameteri(w,10240,U[y.magFilter]),i.texParameteri(w,10241,U[y.minFilter])):(i.texParameteri(w,10242,33071),i.texParameteri(w,10243,33071),(w===32879||w===35866)&&i.texParameteri(w,32882,33071),(y.wrapS!==zt||y.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,10240,P(y.magFilter)),i.texParameteri(w,10241,P(y.minFilter)),y.minFilter!==yt&&y.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===yt||y.minFilter!==$o&&y.minFilter!==yi||y.type===pn&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===jn&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(w,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Q(w,y){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",z));const $=y.source;let re=p.get($);re===void 0&&(re={},p.set($,re));const ue=le(y);if(ue!==w.__cacheKey){re[ue]===void 0&&(re[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),re[ue].usedTimes++;const ye=re[w.__cacheKey];ye!==void 0&&(re[w.__cacheKey].usedTimes--,ye.usedTimes===0&&F(y)),w.__cacheKey=ue,w.__webglTexture=re[ue].texture}return B}function oe(w,y,B){let $=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=35866),y.isData3DTexture&&($=32879);const re=Q(w,y),ue=y.source;t.bindTexture($,w.__webglTexture,33984+B);const ye=n.get(ue);if(ue.version!==ye.__version||re===!0){t.activeTexture(33984+B),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const pe=S(y)&&b(y.image)===!1;let Y=x(y.image,pe,!1,u);Y=ae(y,Y);const Ee=b(Y)||a,Le=r.convert(y.format,y.encoding);let we=r.convert(y.type),Ce=v(y.internalFormat,Le,we,y.encoding,y.isVideoTexture);I($,y,Ee);let Me;const Fe=y.mipmaps,Qe=a&&y.isVideoTexture!==!0,gt=ye.__version===void 0||re===!0,O=E(y,Y,Ee);if(y.isDepthTexture)Ce=6402,a?y.type===pn?Ce=36012:y.type===qi?Ce=33190:y.type===Ws?Ce=35056:Ce=33189:y.type===pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Zi&&Ce===6402&&y.type!==Dp&&y.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=qi,we=r.convert(y.type)),y.format===Js&&Ce===6402&&(Ce=34041,y.type!==Ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Ws,we=r.convert(y.type))),gt&&(Qe?t.texStorage2D(3553,1,Ce,Y.width,Y.height):t.texImage2D(3553,0,Ce,Y.width,Y.height,0,Le,we,null));else if(y.isDataTexture)if(Fe.length>0&&Ee){Qe&&gt&&t.texStorage2D(3553,O,Ce,Fe[0].width,Fe[0].height);for(let Z=0,me=Fe.length;Z<me;Z++)Me=Fe[Z],Qe?t.texSubImage2D(3553,Z,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(3553,Z,Ce,Me.width,Me.height,0,Le,we,Me.data);y.generateMipmaps=!1}else Qe?(gt&&t.texStorage2D(3553,O,Ce,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Y.width,Y.height,Le,we,Y.data)):t.texImage2D(3553,0,Ce,Y.width,Y.height,0,Le,we,Y.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qe&&gt&&t.texStorage3D(35866,O,Ce,Fe[0].width,Fe[0].height,Y.depth);for(let Z=0,me=Fe.length;Z<me;Z++)Me=Fe[Z],y.format!==nn?Le!==null?Qe?t.compressedTexSubImage3D(35866,Z,0,0,0,Me.width,Me.height,Y.depth,Le,Me.data,0,0):t.compressedTexImage3D(35866,Z,Ce,Me.width,Me.height,Y.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage3D(35866,Z,0,0,0,Me.width,Me.height,Y.depth,Le,we,Me.data):t.texImage3D(35866,Z,Ce,Me.width,Me.height,Y.depth,0,Le,we,Me.data)}else{Qe&&gt&&t.texStorage2D(3553,O,Ce,Fe[0].width,Fe[0].height);for(let Z=0,me=Fe.length;Z<me;Z++)Me=Fe[Z],y.format!==nn?Le!==null?Qe?t.compressedTexSubImage2D(3553,Z,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(3553,Z,Ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?t.texSubImage2D(3553,Z,0,0,Me.width,Me.height,Le,we,Me.data):t.texImage2D(3553,Z,Ce,Me.width,Me.height,0,Le,we,Me.data)}else if(y.isDataArrayTexture)Qe?(gt&&t.texStorage3D(35866,O,Ce,Y.width,Y.height,Y.depth),t.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,Le,we,Y.data)):t.texImage3D(35866,0,Ce,Y.width,Y.height,Y.depth,0,Le,we,Y.data);else if(y.isData3DTexture)Qe?(gt&&t.texStorage3D(32879,O,Ce,Y.width,Y.height,Y.depth),t.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,Le,we,Y.data)):t.texImage3D(32879,0,Ce,Y.width,Y.height,Y.depth,0,Le,we,Y.data);else if(y.isFramebufferTexture){if(gt)if(Qe)t.texStorage2D(3553,O,Ce,Y.width,Y.height);else{let Z=Y.width,me=Y.height;for(let Se=0;Se<O;Se++)t.texImage2D(3553,Se,Ce,Z,me,0,Le,we,null),Z>>=1,me>>=1}}else if(Fe.length>0&&Ee){Qe&&gt&&t.texStorage2D(3553,O,Ce,Fe[0].width,Fe[0].height);for(let Z=0,me=Fe.length;Z<me;Z++)Me=Fe[Z],Qe?t.texSubImage2D(3553,Z,0,0,Le,we,Me):t.texImage2D(3553,Z,Ce,Le,we,Me);y.generateMipmaps=!1}else Qe?(gt&&t.texStorage2D(3553,O,Ce,Y.width,Y.height),t.texSubImage2D(3553,0,0,0,Le,we,Y)):t.texImage2D(3553,0,Ce,Le,we,Y);R(y,Ee)&&L($),ye.__version=ue.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _e(w,y,B){if(y.image.length!==6)return;const $=Q(w,y),re=y.source;t.bindTexture(34067,w.__webglTexture,33984+B);const ue=n.get(re);if(re.version!==ue.__version||$===!0){t.activeTexture(33984+B),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,Y=[];for(let Z=0;Z<6;Z++)!ye&&!pe?Y[Z]=x(y.image[Z],!1,!0,c):Y[Z]=pe?y.image[Z].image:y.image[Z],Y[Z]=ae(y,Y[Z]);const Ee=Y[0],Le=b(Ee)||a,we=r.convert(y.format,y.encoding),Ce=r.convert(y.type),Me=v(y.internalFormat,we,Ce,y.encoding),Fe=a&&y.isVideoTexture!==!0,Qe=ue.__version===void 0||$===!0;let gt=E(y,Ee,Le);I(34067,y,Le);let O;if(ye){Fe&&Qe&&t.texStorage2D(34067,gt,Me,Ee.width,Ee.height);for(let Z=0;Z<6;Z++){O=Y[Z].mipmaps;for(let me=0;me<O.length;me++){const Se=O[me];y.format!==nn?we!==null?Fe?t.compressedTexSubImage2D(34069+Z,me,0,0,Se.width,Se.height,we,Se.data):t.compressedTexImage2D(34069+Z,me,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+Z,me,0,0,Se.width,Se.height,we,Ce,Se.data):t.texImage2D(34069+Z,me,Me,Se.width,Se.height,0,we,Ce,Se.data)}}}else{O=y.mipmaps,Fe&&Qe&&(O.length>0&&gt++,t.texStorage2D(34067,gt,Me,Y[0].width,Y[0].height));for(let Z=0;Z<6;Z++)if(pe){Fe?t.texSubImage2D(34069+Z,0,0,0,Y[Z].width,Y[Z].height,we,Ce,Y[Z].data):t.texImage2D(34069+Z,0,Me,Y[Z].width,Y[Z].height,0,we,Ce,Y[Z].data);for(let me=0;me<O.length;me++){const Ae=O[me].image[Z].image;Fe?t.texSubImage2D(34069+Z,me+1,0,0,Ae.width,Ae.height,we,Ce,Ae.data):t.texImage2D(34069+Z,me+1,Me,Ae.width,Ae.height,0,we,Ce,Ae.data)}}else{Fe?t.texSubImage2D(34069+Z,0,0,0,we,Ce,Y[Z]):t.texImage2D(34069+Z,0,Me,we,Ce,Y[Z]);for(let me=0;me<O.length;me++){const Se=O[me];Fe?t.texSubImage2D(34069+Z,me+1,0,0,we,Ce,Se.image[Z]):t.texImage2D(34069+Z,me+1,Me,we,Ce,Se.image[Z])}}}R(y,Le)&&L(34067),ue.__version=re.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function fe(w,y,B,$,re){const ue=r.convert(B.format,B.encoding),ye=r.convert(B.type),pe=v(B.internalFormat,ue,ye,B.encoding);n.get(y).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,pe,y.width,y.height,y.depth,0,ue,ye,null):t.texImage2D(re,0,pe,y.width,y.height,0,ue,ye,null)),t.bindFramebuffer(36160,w),se(y)?f.framebufferTexture2DMultisampleEXT(36160,$,re,n.get(B).__webglTexture,0,de(y)):(re===3553||re>=34069&&re<=34074)&&i.framebufferTexture2D(36160,$,re,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Te(w,y,B){if(i.bindRenderbuffer(36161,w),y.depthBuffer&&!y.stencilBuffer){let $=33189;if(B||se(y)){const re=y.depthTexture;re&&re.isDepthTexture&&(re.type===pn?$=36012:re.type===qi&&($=33190));const ue=de(y);se(y)?f.renderbufferStorageMultisampleEXT(36161,ue,$,y.width,y.height):i.renderbufferStorageMultisample(36161,ue,$,y.width,y.height)}else i.renderbufferStorage(36161,$,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,w)}else if(y.depthBuffer&&y.stencilBuffer){const $=de(y);B&&se(y)===!1?i.renderbufferStorageMultisample(36161,$,35056,y.width,y.height):se(y)?f.renderbufferStorageMultisampleEXT(36161,$,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,w)}else{const $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let re=0;re<$.length;re++){const ue=$[re],ye=r.convert(ue.format,ue.encoding),pe=r.convert(ue.type),Y=v(ue.internalFormat,ye,pe,ue.encoding),Ee=de(y);B&&se(y)===!1?i.renderbufferStorageMultisample(36161,Ee,Y,y.width,y.height):se(y)?f.renderbufferStorageMultisampleEXT(36161,Ee,Y,y.width,y.height):i.renderbufferStorage(36161,Y,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function T(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),he(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,re=de(y);if(y.depthTexture.format===Zi)se(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,re):i.framebufferTexture2D(36160,36096,3553,$,0);else if(y.depthTexture.format===Js)se(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,re):i.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function C(w){const y=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");T(y.__webglFramebuffer,w)}else if(B){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=i.createRenderbuffer(),Te(y.__webglDepthbuffer[$],w,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Te(y.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function j(w,y,B){const $=n.get(w);y!==void 0&&fe($.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&C(w)}function K(w){const y=w.texture,B=n.get(w),$=n.get(y);w.addEventListener("dispose",k),w.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++);const re=w.isWebGLCubeRenderTarget===!0,ue=w.isWebGLMultipleRenderTargets===!0,ye=b(w)||a;if(re){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)B.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(B.__webglFramebuffer=i.createFramebuffer(),ue)if(s.drawBuffers){const pe=w.texture;for(let Y=0,Ee=pe.length;Y<Ee;Y++){const Le=n.get(pe[Y]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&se(w)===!1){const pe=ue?y:[y];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let Y=0;Y<pe.length;Y++){const Ee=pe[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(36161,B.__webglColorRenderbuffer[Y]);const Le=r.convert(Ee.format,Ee.encoding),we=r.convert(Ee.type),Ce=v(Ee.internalFormat,Le,we,Ee.encoding,w.isXRRenderTarget===!0),Me=de(w);i.renderbufferStorageMultisample(36161,Me,Ce,w.width,w.height),i.framebufferRenderbuffer(36160,36064+Y,36161,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,$.__webglTexture),I(34067,y,ye);for(let pe=0;pe<6;pe++)fe(B.__webglFramebuffer[pe],w,y,36064,34069+pe);R(y,ye)&&L(34067),t.unbindTexture()}else if(ue){const pe=w.texture;for(let Y=0,Ee=pe.length;Y<Ee;Y++){const Le=pe[Y],we=n.get(Le);t.bindTexture(3553,we.__webglTexture),I(3553,Le,ye),fe(B.__webglFramebuffer,w,Le,36064+Y,3553),R(Le,ye)&&L(3553)}t.unbindTexture()}else{let pe=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?pe=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,$.__webglTexture),I(pe,y,ye),fe(B.__webglFramebuffer,w,y,36064,pe),R(y,ye)&&L(pe),t.unbindTexture()}w.depthBuffer&&C(w)}function ne(w){const y=b(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let $=0,re=B.length;$<re;$++){const ue=B[$];if(R(ue,y)){const ye=w.isWebGLCubeRenderTarget?34067:3553,pe=n.get(ue).__webglTexture;t.bindTexture(ye,pe),L(ye),t.unbindTexture()}}}function ce(w){if(a&&w.samples>0&&se(w)===!1){const y=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,$=w.height;let re=16384;const ue=[],ye=w.stencilBuffer?33306:36096,pe=n.get(w),Y=w.isWebGLMultipleRenderTargets===!0;if(Y)for(let Ee=0;Ee<y.length;Ee++)t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,null),t.bindFramebuffer(36160,pe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,null,0);t.bindFramebuffer(36008,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,pe.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){ue.push(36064+Ee),w.depthBuffer&&ue.push(ye);const Le=pe.__ignoreDepthValues!==void 0?pe.__ignoreDepthValues:!1;if(Le===!1&&(w.depthBuffer&&(re|=256),w.stencilBuffer&&(re|=1024)),Y&&i.framebufferRenderbuffer(36008,36064,36161,pe.__webglColorRenderbuffer[Ee]),Le===!0&&(i.invalidateFramebuffer(36008,[ye]),i.invalidateFramebuffer(36009,[ye])),Y){const we=n.get(y[Ee]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,we,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,re,9728),d&&i.invalidateFramebuffer(36008,ue)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Y)for(let Ee=0;Ee<y.length;Ee++){t.bindFramebuffer(36160,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Ee,36161,pe.__webglColorRenderbuffer[Ee]);const Le=n.get(y[Ee]).__webglTexture;t.bindFramebuffer(36160,pe.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Ee,3553,Le,0)}t.bindFramebuffer(36009,pe.__webglMultisampledFramebuffer)}}function de(w){return Math.min(h,w.samples)}function se(w){const y=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ge(w){const y=o.render.frame;g.get(w)!==y&&(g.set(w,y),w.update())}function ae(w,y){const B=w.encoding,$=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===ac||B!==bi&&(B===Ze?a===!1?e.has("EXT_sRGB")===!0&&$===nn?(w.format=ac,w.minFilter=ft,w.generateMipmaps=!1):y=zp.sRGBToLinear(y):($!==nn||re!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),y}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=he,this.setTexture2DArray=be,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=j,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=C,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=se}function VT(i,e,t){const n=t.isWebGL2;function s(r,o=null){let a;if(r===Qi)return 5121;if(r===xy)return 32819;if(r===vy)return 32820;if(r===my)return 5120;if(r===gy)return 5122;if(r===Dp)return 5123;if(r===_y)return 5124;if(r===qi)return 5125;if(r===pn)return 5126;if(r===jn)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yy)return 6406;if(r===nn)return 6408;if(r===by)return 6409;if(r===My)return 6410;if(r===Zi)return 6402;if(r===Js)return 34041;if(r===ac)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Sy)return 6403;if(r===wy)return 36244;if(r===Ty)return 33319;if(r===Ey)return 33320;if(r===Ay)return 36249;if(r===Xa||r===qa||r===$a||r===Ka)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ka)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===dh||r===ph||r===mh||r===gh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===dh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ph)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cy)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_h||r===xh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_h)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===xh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===vh||r===yh||r===bh||r===Mh||r===Sh||r===wh||r===Th||r===Eh||r===Ah||r===Ch||r===Rh||r===Lh||r===Ph||r===Ih)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===vh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Th)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ah)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ch)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ph)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ih)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ya)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ya)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Ry||r===Dh||r===Nh||r===Fh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ya)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ws?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class HT extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GT={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(GT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class WT extends Tt{constructor(e,t,n,s,r,o,a,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zi&&(n=qi),n===void 0&&u===Js&&(n=Ws),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yt,this.minFilter=l!==void 0?l:yt,this.flipY=!1,this.generateMipmaps=!1}}class jT extends os{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const m=t.getContextAttributes();let p=null,_=null;const M=[],x=[],b=new Set,S=new Map,R=new Ot;R.layers.enable(1),R.viewport=new it;const L=new Ot;L.layers.enable(2),L.viewport=new it;const v=[R,L],E=new HT;E.layers.enable(1),E.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=M[X];return te===void 0&&(te=new Ml,M[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=M[X];return te===void 0&&(te=new Ml,M[X]=te),te.getGripSpace()},this.getHand=function(X){let te=M[X];return te===void 0&&(te=new Ml,M[X]=te),te.getHandSpace()};function k(X){const te=x.indexOf(X.inputSource);if(te===-1)return;const xe=M[te];xe!==void 0&&xe.dispatchEvent({type:X.type,data:X.inputSource})}function D(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",F);for(let X=0;X<M.length;X++){const te=x[X];te!==null&&(x[X]=null,M[X].disconnect(te))}P=null,z=null,e.setRenderTarget(p),d=null,f=null,h=null,s=null,_=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",D),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),_=new _n(d.framebufferWidth,d.framebufferHeight,{format:nn,type:Qi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let te=null,xe=null,U=null;m.depth&&(U=m.stencil?35056:33190,te=m.stencil?Js:Zi,xe=m.stencil?Ws:qi);const I={colorFormat:32856,depthFormat:U,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(I),s.updateRenderState({layers:[f]}),_=new _n(f.textureWidth,f.textureHeight,{format:nn,type:Qi,depthTexture:new WT(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const Q=e.properties.get(_);Q.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(X){for(let te=0;te<X.removed.length;te++){const xe=X.removed[te],U=x.indexOf(xe);U>=0&&(x[U]=null,M[U].disconnect(xe))}for(let te=0;te<X.added.length;te++){const xe=X.added[te];let U=x.indexOf(xe);if(U===-1){for(let Q=0;Q<M.length;Q++)if(Q>=x.length){x.push(xe),U=Q;break}else if(x[Q]===null){x[Q]=xe,U=Q;break}if(U===-1)break}const I=M[U];I&&I.connect(xe)}}const G=new N,ee=new N;function q(X,te,xe){G.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const U=G.distanceTo(ee),I=te.projectionMatrix.elements,Q=xe.projectionMatrix.elements,oe=I[14]/(I[10]-1),_e=I[14]/(I[10]+1),fe=(I[9]+1)/I[5],Te=(I[9]-1)/I[5],T=(I[8]-1)/I[0],C=(Q[8]+1)/Q[0],j=oe*T,K=oe*C,ne=U/(-T+C),ce=ne*-T;te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const de=oe+ne,se=_e+ne,ge=j-ce,ae=K+(U-ce),w=fe*_e/se*de,y=Te*_e/se*de;X.projectionMatrix.makePerspective(ge,ae,w,y,de,se)}function H(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;E.near=L.near=R.near=X.near,E.far=L.far=R.far=X.far,(P!==E.near||z!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,z=E.far);const te=X.parent,xe=E.cameras;H(E,te);for(let I=0;I<xe.length;I++)H(xe[I],te);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),X.matrix.copy(E.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale);const U=X.children;for(let I=0,Q=U.length;I<Q;I++)U[I].updateMatrixWorld(!0);xe.length===2?q(E,R,L):E.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.getPlanes=function(){return b};let le=null;function he(X,te){if(u=te.getViewerPose(c||o),g=te,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let U=!1;xe.length!==E.cameras.length&&(E.cameras.length=0,U=!0);for(let I=0;I<xe.length;I++){const Q=xe[I];let oe=null;if(d!==null)oe=d.getViewport(Q);else{const fe=h.getViewSubImage(f,Q);oe=fe.viewport,I===0&&(e.setRenderTargetTextures(_,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(_))}let _e=v[I];_e===void 0&&(_e=new Ot,_e.layers.enable(I),_e.viewport=new it,v[I]=_e),_e.matrix.fromArray(Q.transform.matrix),_e.projectionMatrix.fromArray(Q.projectionMatrix),_e.viewport.set(oe.x,oe.y,oe.width,oe.height),I===0&&E.matrix.copy(_e.matrix),U===!0&&E.cameras.push(_e)}}for(let xe=0;xe<M.length;xe++){const U=x[xe],I=M[xe];U!==null&&I!==void 0&&I.update(U,te,c||o)}if(le&&le(X,te),te.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:te.detectedPlanes});let xe=null;for(const U of b)te.detectedPlanes.has(U)||(xe===null&&(xe=[]),xe.push(U));if(xe!==null)for(const U of xe)b.delete(U),S.delete(U),n.dispatchEvent({type:"planeremoved",data:U});for(const U of te.detectedPlanes)if(!b.has(U))b.add(U),S.set(U,te.lastChangedTime),n.dispatchEvent({type:"planeadded",data:U});else{const I=S.get(U);U.lastChangedTime>I&&(S.set(U,U.lastChangedTime),n.dispatchEvent({type:"planechanged",data:U}))}}g=null}const be=new $p;be.setAnimationLoop(he),this.setAnimationLoop=function(X){le=X},this.dispose=function(){}}}function XT(i,e){function t(m,p){p.color.getRGB(m.fogColor.value,jp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),d(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function qT(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(M,x){const b=x.program;n.uniformBlockBinding(M,b)}function c(M,x){let b=s[M.id];b===void 0&&(g(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",p));const S=x.program;n.updateUBOMapping(M,S);const R=e.render.frame;r[M.id]!==R&&(f(M),r[M.id]=R)}function u(M){const x=h();M.__bindingPointIndex=x;const b=i.createBuffer(),S=M.__size,R=M.usage;return i.bindBuffer(35345,b),i.bufferData(35345,S,R),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],b=M.uniforms,S=M.__cache;i.bindBuffer(35345,x);for(let R=0,L=b.length;R<L;R++){const v=b[R];if(d(v,R,S)===!0){const E=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let k=0;k<P.length;k++){const D=P[k],F=m(D);typeof D=="number"?(v.__data[0]=D,i.bufferSubData(35345,E+z,v.__data)):D.isMatrix3?(v.__data[0]=D.elements[0],v.__data[1]=D.elements[1],v.__data[2]=D.elements[2],v.__data[3]=D.elements[0],v.__data[4]=D.elements[3],v.__data[5]=D.elements[4],v.__data[6]=D.elements[5],v.__data[7]=D.elements[0],v.__data[8]=D.elements[6],v.__data[9]=D.elements[7],v.__data[10]=D.elements[8],v.__data[11]=D.elements[0]):(D.toArray(v.__data,z),z+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,E,v.__data)}}i.bindBuffer(35345,null)}function d(M,x,b){const S=M.value;if(b[x]===void 0){if(typeof S=="number")b[x]=S;else{const R=Array.isArray(S)?S:[S],L=[];for(let v=0;v<R.length;v++)L.push(R[v].clone());b[x]=L}return!0}else if(typeof S=="number"){if(b[x]!==S)return b[x]=S,!0}else{const R=Array.isArray(b[x])?b[x]:[b[x]],L=Array.isArray(S)?S:[S];for(let v=0;v<R.length;v++){const E=R[v];if(E.equals(L[v])===!1)return E.copy(L[v]),!0}}return!1}function g(M){const x=M.uniforms;let b=0;const S=16;let R=0;for(let L=0,v=x.length;L<v;L++){const E=x[L],P={boundary:0,storage:0},z=Array.isArray(E.value)?E.value:[E.value];for(let k=0,D=z.length;k<D;k++){const F=z[k],G=m(F);P.boundary+=G.boundary,P.storage+=G.storage}if(E.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,L>0){R=b%S;const k=S-R;R!==0&&k-P.boundary<0&&(b+=S-R,E.__offset=b)}b+=P.storage}return R=b%S,R>0&&(b+=S-R),M.__size=b,M.__cache={},this}function m(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function _(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:_}}function $T(){const i=eo("canvas");return i.style.display="block",i}function Qp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:$T(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,s=i.stencil!==void 0?i.stencil:!0,r=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=bi,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const m=this;let p=!1,_=0,M=0,x=null,b=-1,S=null;const R=new it,L=new it;let v=null,E=e.width,P=e.height,z=1,k=null,D=null;const F=new it(0,0,E,P),G=new it(0,0,E,P);let ee=!1;const q=new Xc;let H=!1,le=!1,he=null;const be=new He,X=new Pe,te=new N,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function U(){return x===null?z:1}let I=t;function Q(A,W){for(let J=0;J<A.length;J++){const V=A[J],ie=e.getContext(V,W);if(ie!==null)return ie}return null}try{const A={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${kc}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),I===null){const W=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&W.shift(),I=Q(W,A),I===null)throw Q(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,_e,fe,Te,T,C,j,K,ne,ce,de,se,ge,ae,w,y,B,$,re,ue,ye,pe,Y,Ee;function Le(){oe=new rw(I),_e=new QS(I,oe,i),oe.init(_e),pe=new VT(I,oe,_e),fe=new zT(I,oe,_e),Te=new lw,T=new TT,C=new kT(I,oe,fe,T,_e,pe,Te),j=new tw(m),K=new sw(m),ne=new _b(I,_e),Y=new ZS(I,oe,ne,_e),ce=new ow(I,ne,Te,Y),de=new fw(I,ce,ne,Te),re=new hw(I,_e,C),y=new ew(T),se=new wT(m,j,K,oe,_e,Y,y),ge=new XT(m,T),ae=new AT,w=new DT(oe,_e),$=new YS(m,j,K,fe,de,u,o),B=new BT(m,de,_e),Ee=new qT(I,Te,_e,fe),ue=new JS(I,oe,Te,_e),ye=new aw(I,oe,Te,_e),Te.programs=se.programs,m.capabilities=_e,m.extensions=oe,m.properties=T,m.renderLists=ae,m.shadowMap=B,m.state=fe,m.info=Te}Le();const we=new jT(m,I);this.xr=we,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(E,P,!1))},this.getSize=function(A){return A.set(E,P)},this.setSize=function(A,W,J){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=A,P=W,e.width=Math.floor(A*z),e.height=Math.floor(W*z),J!==!1&&(e.style.width=A+"px",e.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(E*z,P*z).floor()},this.setDrawingBufferSize=function(A,W,J){E=A,P=W,z=J,e.width=Math.floor(A*J),e.height=Math.floor(W*J),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,W,J,V){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,W,J,V),fe.viewport(R.copy(F).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,W,J,V){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,W,J,V),fe.scissor(L.copy(G).multiplyScalar(z).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(A){fe.setScissorTest(ee=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,W=!0,J=!0){let V=0;A&&(V|=16384),W&&(V|=256),J&&(V|=1024),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),ae.dispose(),w.dispose(),T.dispose(),j.dispose(),K.dispose(),de.dispose(),Y.dispose(),Ee.dispose(),se.dispose(),we.dispose(),we.removeEventListener("sessionstart",Se),we.removeEventListener("sessionend",Ae),he&&(he.dispose(),he=null),Ye.stop()};function Ce(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Te.autoReset,W=B.enabled,J=B.autoUpdate,V=B.needsUpdate,ie=B.type;Le(),Te.autoReset=A,B.enabled=W,B.autoUpdate=J,B.needsUpdate=V,B.type=ie}function Fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qe(A){const W=A.target;W.removeEventListener("dispose",Qe),gt(W)}function gt(A){O(A),T.remove(A)}function O(A){const W=T.get(A).programs;W!==void 0&&(W.forEach(function(J){se.releaseProgram(J)}),A.isShaderMaterial&&se.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,J,V,ie,Re){W===null&&(W=xe);const Oe=ie.isMesh&&ie.matrixWorld.determinant()<0,ke=bm(A,W,J,V,ie);fe.setMaterial(V,Oe);let Ve=J.index,$e=1;V.wireframe===!0&&(Ve=ce.getWireframeAttribute(J),$e=2);const Ge=J.drawRange,We=J.attributes.position;let lt=Ge.start*$e,Gt=(Ge.start+Ge.count)*$e;Re!==null&&(lt=Math.max(lt,Re.start*$e),Gt=Math.min(Gt,(Re.start+Re.count)*$e)),Ve!==null?(lt=Math.max(lt,0),Gt=Math.min(Gt,Ve.count)):We!=null&&(lt=Math.max(lt,0),Gt=Math.min(Gt,We.count));const In=Gt-lt;if(In<0||In===1/0)return;Y.setup(ie,V,ke,J,Ve);let wi,ct=ue;if(Ve!==null&&(wi=ne.get(Ve),ct=ye,ct.setIndex(wi)),ie.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*U()),ct.setMode(1)):ct.setMode(4);else if(ie.isLine){let je=V.linewidth;je===void 0&&(je=1),fe.setLineWidth(je*U()),ie.isLineSegments?ct.setMode(1):ie.isLineLoop?ct.setMode(2):ct.setMode(3)}else ie.isPoints?ct.setMode(0):ie.isSprite&&ct.setMode(4);if(ie.isInstancedMesh)ct.renderInstances(lt,In,ie.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ia=Math.min(J.instanceCount,je);ct.renderInstances(lt,In,Ia)}else ct.render(lt,In)},this.compile=function(A,W){function J(V,ie,Re){V.transparent===!0&&V.side===Wn&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,Zt(V,ie,Re),V.side=Yn,V.needsUpdate=!0,Zt(V,ie,Re),V.side=Wn):Zt(V,ie,Re)}f=w.get(A),f.init(),g.push(f),A.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights(m.physicallyCorrectLights),A.traverse(function(V){const ie=V.material;if(ie)if(Array.isArray(ie))for(let Re=0;Re<ie.length;Re++){const Oe=ie[Re];J(Oe,A,V)}else J(ie,A,V)}),g.pop(),f=null};let Z=null;function me(A){Z&&Z(A)}function Se(){Ye.stop()}function Ae(){Ye.start()}const Ye=new $p;Ye.setAnimationLoop(me),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){Z=A,we.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},we.addEventListener("sessionstart",Se),we.addEventListener("sessionend",Ae),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(W),W=we.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,W,x),f=w.get(A,g.length),f.init(),g.push(f),be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(be),le=this.localClippingEnabled,H=y.init(this.clippingPlanes,le),h=ae.get(A,d.length),h.init(),d.push(h),_t(A,W,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(k,D),H===!0&&y.beginShadows();const J=f.state.shadowsArray;if(B.render(J,A,W),H===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,A),f.setupLights(m.physicallyCorrectLights),W.isArrayCamera){const V=W.cameras;for(let ie=0,Re=V.length;ie<Re;ie++){const Oe=V[ie];Et(h,A,Oe,Oe.viewport)}}else Et(h,A,W);x!==null&&(C.updateMultisampleRenderTarget(x),C.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(m,A,W),Y.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function _t(A,W,J,V){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){V&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const Oe=de.update(A),ke=A.material;ke.visible&&h.push(A,Oe,ke,J,te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Te.render.frame&&(A.skeleton.update(),A.skeleton.frame=Te.render.frame),!A.frustumCulled||q.intersectsObject(A))){V&&te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const Oe=de.update(A),ke=A.material;if(Array.isArray(ke)){const Ve=Oe.groups;for(let $e=0,Ge=Ve.length;$e<Ge;$e++){const We=Ve[$e],lt=ke[We.materialIndex];lt&&lt.visible&&h.push(A,Oe,lt,J,te.z,We)}}else ke.visible&&h.push(A,Oe,ke,J,te.z,null)}}const Re=A.children;for(let Oe=0,ke=Re.length;Oe<ke;Oe++)_t(Re[Oe],W,J,V)}function Et(A,W,J,V){const ie=A.opaque,Re=A.transmissive,Oe=A.transparent;f.setupLightsView(J),H===!0&&y.setGlobalState(m.clippingPlanes,J),Re.length>0&&Si(ie,W,J),V&&fe.viewport(R.copy(V)),ie.length>0&&st(ie,W,J),Re.length>0&&st(Re,W,J),Oe.length>0&&st(Oe,W,J),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Si(A,W,J){const V=_e.isWebGL2;he===null&&(he=new _n(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?jn:Qi,minFilter:yi,samples:V&&r===!0?4:0})),m.getDrawingBufferSize(X),V?he.setSize(X.x,X.y):he.setSize(ca(X.x),ca(X.y));const ie=m.getRenderTarget();m.setRenderTarget(he),m.clear();const Re=m.toneMapping;m.toneMapping=$n,st(A,W,J),m.toneMapping=Re,C.updateMultisampleRenderTarget(he),C.updateRenderTargetMipmap(he),m.setRenderTarget(ie)}function st(A,W,J){const V=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Re=A.length;ie<Re;ie++){const Oe=A[ie],ke=Oe.object,Ve=Oe.geometry,$e=V===null?Oe.material:V,Ge=Oe.group;ke.layers.test(J.layers)&&Pn(ke,W,J,Ve,$e,Ge)}}function Pn(A,W,J,V,ie,Re){A.onBeforeRender(m,W,J,V,ie,Re),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(m,W,J,V,A,Re),ie.transparent===!0&&ie.side===Wn&&ie.forceSinglePass===!1?(ie.side=Kt,ie.needsUpdate=!0,m.renderBufferDirect(J,W,V,ie,A,Re),ie.side=Yn,ie.needsUpdate=!0,m.renderBufferDirect(J,W,V,ie,A,Re),ie.side=Wn):m.renderBufferDirect(J,W,V,ie,A,Re),A.onAfterRender(m,W,J,V,ie,Re)}function Zt(A,W,J){W.isScene!==!0&&(W=xe);const V=T.get(A),ie=f.state.lights,Re=f.state.shadowsArray,Oe=ie.state.version,ke=se.getParameters(A,ie.state,Re,W,J),Ve=se.getProgramCacheKey(ke);let $e=V.programs;V.environment=A.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(A.isMeshStandardMaterial?K:j).get(A.envMap||V.environment),$e===void 0&&(A.addEventListener("dispose",Qe),$e=new Map,V.programs=$e);let Ge=$e.get(Ve);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Oe)return su(A,ke),Ge}else ke.uniforms=se.getUniforms(A),A.onBuild(J,ke,m),A.onBeforeCompile(ke,m),Ge=se.acquireProgram(ke,Ve),$e.set(Ve,Ge),V.uniforms=ke.uniforms;const We=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=y.uniform),su(A,ke),V.needsLights=Sm(A),V.lightsStateVersion=Oe,V.needsLights&&(We.ambientLightColor.value=ie.state.ambient,We.lightProbe.value=ie.state.probe,We.directionalLights.value=ie.state.directional,We.directionalLightShadows.value=ie.state.directionalShadow,We.spotLights.value=ie.state.spot,We.spotLightShadows.value=ie.state.spotShadow,We.rectAreaLights.value=ie.state.rectArea,We.ltc_1.value=ie.state.rectAreaLTC1,We.ltc_2.value=ie.state.rectAreaLTC2,We.pointLights.value=ie.state.point,We.pointLightShadows.value=ie.state.pointShadow,We.hemisphereLights.value=ie.state.hemi,We.directionalShadowMap.value=ie.state.directionalShadowMap,We.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,We.spotShadowMap.value=ie.state.spotShadowMap,We.spotLightMatrix.value=ie.state.spotLightMatrix,We.spotLightMap.value=ie.state.spotLightMap,We.pointShadowMap.value=ie.state.pointShadowMap,We.pointShadowMatrix.value=ie.state.pointShadowMatrix);const lt=Ge.getUniforms(),Gt=Yo.seqWithValue(lt.seq,We);return V.currentProgram=Ge,V.uniformsList=Gt,Ge}function su(A,W){const J=T.get(A);J.outputEncoding=W.outputEncoding,J.instancing=W.instancing,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function bm(A,W,J,V,ie){W.isScene!==!0&&(W=xe),C.resetTextureUnits();const Re=W.fog,Oe=V.isMeshStandardMaterial?W.environment:null,ke=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:bi,Ve=(V.isMeshStandardMaterial?K:j).get(V.envMap||Oe),$e=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!V.normalMap&&!!J.attributes.tangent,We=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,Gt=!!J.morphAttributes.color,In=V.toneMapped?m.toneMapping:$n,wi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ct=wi!==void 0?wi.length:0,je=T.get(V),Ia=f.state.lights;if(H===!0&&(le===!0||A!==S)){const Wt=A===S&&V.id===b;y.setState(V,A,Wt)}let xt=!1;V.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ia.state.version||je.outputEncoding!==ke||ie.isInstancedMesh&&je.instancing===!1||!ie.isInstancedMesh&&je.instancing===!0||ie.isSkinnedMesh&&je.skinning===!1||!ie.isSkinnedMesh&&je.skinning===!0||je.envMap!==Ve||V.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==y.numPlanes||je.numIntersection!==y.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==Ge||je.morphTargets!==We||je.morphNormals!==lt||je.morphColors!==Gt||je.toneMapping!==In||_e.isWebGL2===!0&&je.morphTargetsCount!==ct)&&(xt=!0):(xt=!0,je.__version=V.version);let Ti=je.currentProgram;xt===!0&&(Ti=Zt(V,W,ie));let ru=!1,pr=!1,Da=!1;const Pt=Ti.getUniforms(),Ei=je.uniforms;if(fe.useProgram(Ti.program)&&(ru=!0,pr=!0,Da=!0),V.id!==b&&(b=V.id,pr=!0),ru||S!==A){if(Pt.setValue(I,"projectionMatrix",A.projectionMatrix),_e.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,pr=!0,Da=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Wt=Pt.map.cameraPosition;Wt!==void 0&&Wt.setValue(I,te.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||ie.isSkinnedMesh)&&Pt.setValue(I,"viewMatrix",A.matrixWorldInverse)}if(ie.isSkinnedMesh){Pt.setOptional(I,ie,"bindMatrix"),Pt.setOptional(I,ie,"bindMatrixInverse");const Wt=ie.skeleton;Wt&&(_e.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),Pt.setValue(I,"boneTexture",Wt.boneTexture,C),Pt.setValue(I,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=J.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&_e.isWebGL2===!0)&&re.update(ie,J,V,Ti),(pr||je.receiveShadow!==ie.receiveShadow)&&(je.receiveShadow=ie.receiveShadow,Pt.setValue(I,"receiveShadow",ie.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ei.envMap.value=Ve,Ei.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),pr&&(Pt.setValue(I,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&Mm(Ei,Da),Re&&V.fog===!0&&ge.refreshFogUniforms(Ei,Re),ge.refreshMaterialUniforms(Ei,V,z,P,he),Yo.upload(I,je.uniformsList,Ei,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yo.upload(I,je.uniformsList,Ei,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(I,"center",ie.center),Pt.setValue(I,"modelViewMatrix",ie.modelViewMatrix),Pt.setValue(I,"normalMatrix",ie.normalMatrix),Pt.setValue(I,"modelMatrix",ie.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Wt=V.uniformsGroups;for(let Fa=0,wm=Wt.length;Fa<wm;Fa++)if(_e.isWebGL2){const ou=Wt[Fa];Ee.update(ou,Ti),Ee.bind(ou,Ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ti}function Mm(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function Sm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,W,J){T.get(A.texture).__webglTexture=W,T.get(A.depthTexture).__webglTexture=J;const V=T.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=J===void 0,V.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){const J=T.get(A);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,J=0){x=A,_=W,M=J;let V=!0,ie=null,Re=!1,Oe=!1;if(A){const Ve=T.get(A);Ve.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(36160,null),V=!1):Ve.__webglFramebuffer===void 0?C.setupRenderTarget(A):Ve.__hasExternalTextures&&C.rebindTextures(A,T.get(A.texture).__webglTexture,T.get(A.depthTexture).__webglTexture);const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const Ge=T.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ie=Ge[W],Re=!0):_e.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?ie=T.get(A).__webglMultisampledFramebuffer:ie=Ge,R.copy(A.viewport),L.copy(A.scissor),v=A.scissorTest}else R.copy(F).multiplyScalar(z).floor(),L.copy(G).multiplyScalar(z).floor(),v=ee;if(fe.bindFramebuffer(36160,ie)&&_e.drawBuffers&&V&&fe.drawBuffers(A,ie),fe.viewport(R),fe.scissor(L),fe.setScissorTest(v),Re){const Ve=T.get(A.texture);I.framebufferTexture2D(36160,36064,34069+W,Ve.__webglTexture,J)}else if(Oe){const Ve=T.get(A.texture),$e=W||0;I.framebufferTextureLayer(36160,36064,Ve.__webglTexture,J||0,$e)}b=-1},this.readRenderTargetPixels=function(A,W,J,V,ie,Re,Oe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=T.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(ke=ke[Oe]),ke){fe.bindFramebuffer(36160,ke);try{const Ve=A.texture,$e=Ve.format,Ge=Ve.type;if($e!==nn&&pe.convert($e)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ge===jn&&(oe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Ge!==Qi&&pe.convert(Ge)!==I.getParameter(35738)&&!(Ge===pn&&(_e.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-V&&J>=0&&J<=A.height-ie&&I.readPixels(W,J,V,ie,pe.convert($e),pe.convert(Ge),Re)}finally{const Ve=x!==null?T.get(x).__webglFramebuffer:null;fe.bindFramebuffer(36160,Ve)}}},this.copyFramebufferToTexture=function(A,W,J=0){const V=Math.pow(2,-J),ie=Math.floor(W.image.width*V),Re=Math.floor(W.image.height*V);C.setTexture2D(W,0),I.copyTexSubImage2D(3553,J,0,0,A.x,A.y,ie,Re),fe.unbindTexture()},this.copyTextureToTexture=function(A,W,J,V=0){const ie=W.image.width,Re=W.image.height,Oe=pe.convert(J.format),ke=pe.convert(J.type);C.setTexture2D(J,0),I.pixelStorei(37440,J.flipY),I.pixelStorei(37441,J.premultiplyAlpha),I.pixelStorei(3317,J.unpackAlignment),W.isDataTexture?I.texSubImage2D(3553,V,A.x,A.y,ie,Re,Oe,ke,W.image.data):W.isCompressedTexture?I.compressedTexSubImage2D(3553,V,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Oe,W.mipmaps[0].data):I.texSubImage2D(3553,V,A.x,A.y,Oe,ke,W.image),V===0&&J.generateMipmaps&&I.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(A,W,J,V,ie=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Oe=A.max.y-A.min.y+1,ke=A.max.z-A.min.z+1,Ve=pe.convert(V.format),$e=pe.convert(V.type);let Ge;if(V.isData3DTexture)C.setTexture3D(V,0),Ge=32879;else if(V.isDataArrayTexture)C.setTexture2DArray(V,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,V.flipY),I.pixelStorei(37441,V.premultiplyAlpha),I.pixelStorei(3317,V.unpackAlignment);const We=I.getParameter(3314),lt=I.getParameter(32878),Gt=I.getParameter(3316),In=I.getParameter(3315),wi=I.getParameter(32877),ct=J.isCompressedTexture?J.mipmaps[0]:J.image;I.pixelStorei(3314,ct.width),I.pixelStorei(32878,ct.height),I.pixelStorei(3316,A.min.x),I.pixelStorei(3315,A.min.y),I.pixelStorei(32877,A.min.z),J.isDataTexture||J.isData3DTexture?I.texSubImage3D(Ge,ie,W.x,W.y,W.z,Re,Oe,ke,Ve,$e,ct.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ge,ie,W.x,W.y,W.z,Re,Oe,ke,Ve,ct.data)):I.texSubImage3D(Ge,ie,W.x,W.y,W.z,Re,Oe,ke,Ve,$e,ct),I.pixelStorei(3314,We),I.pixelStorei(32878,lt),I.pixelStorei(3316,Gt),I.pixelStorei(3315,In),I.pixelStorei(32877,wi),ie===0&&V.generateMipmaps&&I.generateMipmap(Ge),fe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),fe.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,fe.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class KT extends Qp{}KT.prototype.isWebGL1Renderer=!0;class YT extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ZT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new N;class $c{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _f=new N,xf=new it,vf=new it,JT=new N,yf=new He;class QT extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,s=this.geometry;xf.fromBufferAttribute(s.attributes.skinIndex,e),vf.fromBufferAttribute(s.attributes.skinWeight,e),_f.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=vf.getComponent(r);if(o!==0){const a=xf.getComponent(r);yf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(JT.copy(_f).applyMatrix4(yf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class em extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tm extends Tt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=yt,u=yt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bf=new He,e1=new He;class Kc{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:e1;bf.multiplyMatrices(a,t[r]),bf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Kc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Fp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tm(t,e,e,nn,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new em),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Mf extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sf=new He,wf=new He,Io=[],t1=new He,wr=new at;class n1 extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mf(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let s=0;s<n;s++)this.setMatrixAt(s,t1)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0)for(let r=0;r<s;r++){this.getMatrixAt(r,Sf),wf.multiplyMatrices(n,Sf),wr.matrixWorld=wf,wr.raycast(e,Io);for(let o=0,a=Io.length;o<a;o++){const l=Io[o];l.instanceId=r,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nm extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tf=new N,Ef=new N,Af=new He,Sl=new jc,Do=new cr;class Yc extends rt{constructor(e=new Vt,t=new nm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tf.fromBufferAttribute(t,s-1),Ef.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tf.distanceTo(Ef);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Af.copy(s).invert(),Sl.copy(e.ray).applyMatrix4(Af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,h=new N,f=new N,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=_,b=M-1;x<b;x+=d){const S=g.getX(x),R=g.getX(x+1);if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,R),Sl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let x=_,b=M-1;x<b;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Sl.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(f);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Cf=new N,Rf=new N;class i1 extends Yc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cf.fromBufferAttribute(t,s),Rf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cf.distanceTo(Rf);e.setAttribute("lineDistance",new Lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s1 extends Yc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class im extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lf=new He,uc=new jc,No=new cr,Fo=new N;class r1 extends rt{constructor(e=new Vt,t=new im){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Lf.copy(s).invert(),uc.copy(e.ray).applyMatrix4(Lf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);Fo.fromBufferAttribute(h,p),Pf(Fo,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Fo.fromBufferAttribute(h,g),Pf(Fo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Pf(i,e,t,n,s,r,o){const a=uc.distanceSqToPoint(i);if(a<t){const l=new N;uc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zc extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],g=[],m=[],p=[];for(let _=0;_<=n;_++){const M=[],x=_/n;let b=0;_==0&&o==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let S=0;S<=t;S++){const R=S/t;h.x=-e*Math.cos(s+R*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+R*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),p.push(R+b,1-x),M.push(c++)}u.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){const x=u[_][M+1],b=u[_][M],S=u[_+1][M],R=u[_+1][M+1];(_!==0||o>0)&&d.push(x,b,R),(_!==n-1||l<Math.PI)&&d.push(b,S,R)}this.setIndex(d),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(m,3)),this.setAttribute("uv",new Lt(p,2))}static fromJSON(e){return new Zc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jc extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mi extends Jc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sm extends vn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ai(i,e,t){return rm(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Oo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function o1(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function If(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function om(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class ro{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class a1 extends ro{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ds,endingEnd:Ds}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ns:r=e,a=2*t-n;break;case la:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ns:o=e,l=2*n-t;break;case la:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),m=g*g,p=m*g,_=-f*p+2*f*m-f*g,M=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*m+.5*g,b=d*p-d*m;for(let S=0;S!==a;++S)r[S]=_*o[u+S]+M*o[c+S]+x*o[l+S]+b*o[h+S];return r}}class am extends ro{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class l1 extends ro{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new l1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new a1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zr:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case Za:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zr;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ai(n,r,o),this.values=ai(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&rm(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ai(this.times),t=ai(this.values),n=this.getValueSize(),s=this.getInterpolation()===Za,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ai(e,0,o),this.values=ai(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ai(this.times,0),t=ai(this.values,0),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Qs;class hr extends Ln{}hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Zr;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class lm extends Ln{}lm.prototype.ValueTypeName="color";class no extends Ln{}no.prototype.ValueTypeName="number";class c1 extends ro{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class es extends Ln{InterpolantFactoryMethodLinear(e){return new c1(this.times,this.values,this.getValueSize(),e)}}es.prototype.ValueTypeName="quaternion";es.prototype.DefaultInterpolation=Qs;es.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends Ln{}fr.prototype.ValueTypeName="string";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Zr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class io extends Ln{}io.prototype.ValueTypeName="vector";class hc{constructor(e,t=-1,n,s=Hc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(h1(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=o1(l);l=If(l,1,u),c=If(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new no(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],_=[];om(d,p,_,g),p.length!==0&&m.push(new h(f,p,_))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],_=[];for(let M=0;M!==f[g].morphTargets.length;++M){const x=f[g];p.push(x.time),_.push(x.morphTarget===m?1:0)}s.push(new no(".morphTargetInfluence["+m+"]",p,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(io,d+".position",f,"pos",s),n(es,d+".quaternion",f,"rot",s),n(io,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function u1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return no;case"vector":case"vector2":case"vector3":case"vector4":return io;case"color":return lm;case"quaternion":return es;case"bool":case"boolean":return hr;case"string":return fr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function h1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=u1(i.type);if(i.times===void 0){const t=[],n=[];om(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ts={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class f1{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const d1=new f1;class ls{constructor(e){this.manager=e!==void 0?e:d1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const zn={};class p1 extends Error{constructor(e,t){super(e),this.response=t}}class oo extends ls{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=zn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){M();function M(){h.read().then(({done:x,value:b})=>{if(x)_.close();else{m+=b.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let R=0,L=u.length;R<L;R++){const v=u[R];v.onProgress&&v.onProgress(S)}_.enqueue(b),M()}})}}});return new Response(p)}else throw new p1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ts.add(e,c);const u=zn[e];delete zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=zn[e];if(u===void 0)throw this.manager.itemError(e),c;delete zn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class m1 extends ls{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=eo("img");function l(){u(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class g1 extends ls{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new tm,a=new oo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:zt,o.wrapT=c.wrapT!==void 0?c.wrapT:zt,o.magFilter=c.magFilter!==void 0?c.magFilter:ft,o.minFilter=c.minFilter!==void 0?c.minFilter:ft,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=yi),c.mipmapCount===1&&(o.minFilter=ft),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,s),o}}class ao extends ls{constructor(e){super(e)}load(e,t,n,s){const r=new Tt,o=new m1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class La extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class _1 extends La{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wl=new He,Df=new N,Nf=new N;class Qc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Df.setFromMatrixPosition(e.matrixWorld),t.position.copy(Df),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class x1 extends Qc{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cm extends La{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new x1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ff=new He,Tr=new N,Tl=new N;class v1 extends Qc{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Tr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tr),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),Ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff)}}class y1 extends La{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new v1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class b1 extends Qc{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Is extends La{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new b1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class M1 extends ls{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){ts.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Of();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Of(){return(typeof performance>"u"?Date:performance).now()}class S1{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){xn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;xn.multiplyQuaternionsFlat(e,o,e,t,e,n),xn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const eu="\\[\\]\\.:\\/",w1=new RegExp("["+eu+"]","g"),tu="[^"+eu+"]",T1="[^"+eu.replace("\\.","")+"]",E1=/((?:WC+[\/:])*)/.source.replace("WC",tu),A1=/(WCOD+)?/.source.replace("WCOD",T1),C1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tu),R1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tu),L1=new RegExp("^"+E1+A1+C1+R1+"$"),P1=["material","materials","bones","map"];class I1{constructor(e,t,n){const s=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w1,"")}static parseTrackName(e){const t=L1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);P1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=I1;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class D1{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Ds,endingEnd:Ds};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Py,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dy:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Hc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===Iy;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Ly){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ns,s.endingEnd=Ns):(e?s.endingStart=this.zeroSlopeAtStart?Ns:Ds:s.endingStart=la,t?s.endingEnd=this.zeroSlopeAtEnd?Ns:Ds:s.endingEnd=la)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const N1=new Float32Array(1);class F1 extends os{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const f=s[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new S1(Je.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new am(new Float32Array(2),new Float32Array(2),1,N1),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?hc.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Hc),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new D1(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?hc.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Gn=O1();function O1(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function U1(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ct(i,-65504,65504),Gn.floatView[0]=i;const e=Gn.uint32View[0],t=e>>23&511;return Gn.baseTable[t]+((e&8388607)>>Gn.shiftTable[t])}function B1(i){const e=i>>10;return Gn.uint32View[0]=Gn.mantissaTable[Gn.offsetTable[e]+(i&1023)]+Gn.exponentTable[e],Gn.floatView[0]}var Uo=Object.freeze({__proto__:null,fromHalfFloat:B1,toHalfFloat:U1});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);function z1(i){const e=i.scene.children[0];dc(e),e.scale.multiplyScalar(100/Math.max(e.size.x,e.size.y,e.size.z)),dc(e),e.castShadow=!0,e.receiveShadow=!0;const t=i.animations[0];return[e,t]}function dc(i){let e=new as().setFromObject(i);return i.size=new N(e.max.x-e.min.x,e.max.y-e.min.y,e.max.z-e.min.z),i.center=new N((e.max.x+e.min.x)/2,(e.max.y+e.min.y)/2,(e.max.z+e.min.z)/2),i}function Uf(i,e){if(e===Ny)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===rc||e===Np){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===rc)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class k1 extends ls{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new j1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)})}load(e,t,n,s){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=fc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new oo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hm){try{o[qe.KHR_BINARY_GLTF]=new nE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new G1;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new iE(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new sE;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new rE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function V1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class H1{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ie(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Is(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new y1(u),c.distance=h;break;case"spot":c=new cm(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class G1{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,n){const s=[];e.color=new Ie(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ze))}return Promise.all(s)}}class W1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class j1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(r)}}class X1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class q1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ze)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class $1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class K1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(a[0],a[1],a[2]),Promise.all(r)}}class Y1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Z1{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ze)),Promise.all(r)}}class J1{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Q1{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class eE{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class tE{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const m=new He,p=new N,_=new xn,M=new N(1,1,1),x=new n1(g.geometry,g.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,m.compose(p,_,M));for(const b in l)b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);rt.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const hm="glTF",Er=12,Bf={JSON:1313821514,BIN:5130562};class nE{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Er,r=new DataView(e,Er);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Bf.JSON){const c=new Uint8Array(e,Er+o,a);this.content=n.decode(c)}else if(l===Bf.BIN){const c=Er+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=pc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=pc[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Xs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h){s.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],m=l[d];m!==void 0&&(g.normalized=m)}h(f)},a,c)})})}}class sE{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rE{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class fm extends ro{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,m=g-c,p=-2*d+3*f,_=d-f,M=1-p,x=_-f+h;for(let b=0;b!==a;b++){const S=o[m+b+a],R=o[m+b+l]*u,L=o[g+b+a],v=o[g+b]*u;r[b]=M*S+x*R+p*L+_*v}return r}}const oE=new xn;class aE extends fm{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return oE.fromArray(r).normalize().toArray(r),r}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zf={9728:yt,9729:ft,9984:sc,9985:Ip,9986:$o,9987:yi},kf={33071:zt,33648:aa,10497:Rn},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lE={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Zr},Al={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Jc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),i.DefaultMaterial}function Ar(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function hE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fE(i){const e=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Vf(e.attributes):t=i.indices+":"+Vf(i.attributes)+":"+i.mode,t}function Vf(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function mc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const pE=new He;class mE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new V1,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new ao(this.options.manager):this.textureLoader=new M1(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};Ar(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(fc.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=El[s.type],a=Xs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Mt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=El[s.type],c=Xs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let m,p;if(d&&d!==h){const _=Math.floor(f/d),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+_+":"+s.count;let x=t.cache.get(M);x||(m=new c(a,_*d,s.count*d/u),x=new ZT(m,d/u),t.cache.add(M,x)),p=new $c(x,l,f%d/u,g)}else a===null?m=new c(s.count*l):m=new c(a,f,s.count*l),p=new Mt(m,l,g);if(s.sparse!==void 0){const _=El.SCALAR,M=Xs[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,S=new M(o[1],x,s.sparse.count*_),R=new c(o[2],b,s.sparse.count*l);a!==null&&(p=new Mt(p.array.slice(),p.itemSize,p.normalized));for(let L=0,v=S.length;L<v;L++){const E=S[L];if(p.setX(E,R[L*l]),l>=2&&p.setY(E,R[L*l+1]),l>=3&&p.setZ(E,R[L*l+2]),l>=4&&p.setW(E,R[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=zf[f.magFilter]||ft,u.minFilter=zf[f.minFilter]||yi,u.wrapS=kf[f.wrapS]||Rn,u.wrapT=kf[f.wrapT]||Rn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const p=new Tt(m);p.needsUpdate=!0,f(p)}),t.load(fc.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||dE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.encoding=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new im,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nm,vn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Jc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ze)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Wn);const u=r.alphaMode||Al.OPAQUE;if(u===Al.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Al.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}return r.occlusionTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qn&&(a.emissive=new Ie().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==qn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ze)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ar(s,h,r),h})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=fE(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Hf(new Vt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?cE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const m=u[d],p=o[d];let _;const M=c[d];if(p.mode===en.TRIANGLES||p.mode===en.TRIANGLE_STRIP||p.mode===en.TRIANGLE_FAN||p.mode===void 0)_=r.isSkinnedMesh===!0?new QT(m,M):new at(m,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===en.TRIANGLE_STRIP?_.geometry=Uf(_.geometry,Np):p.mode===en.TRIANGLE_FAN&&(_.geometry=Uf(_.geometry,rc));else if(p.mode===en.LINES)_=new i1(m,M);else if(p.mode===en.LINE_STRIP)_=new Yc(m,M);else if(p.mode===en.LINE_LOOP)_=new s1(m,M);else if(p.mode===en.POINTS)_=new r1(m,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&hE(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),fi(_,r),p.extensions&&Ar(s,_,p),t.assignFinalMaterial(_),h.push(_)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new $i;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(Op.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ca(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this.getDependency("node",t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new He;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kc(a,l)})}loadAnimation(e){const n=this.json.animations[e],s=[],r=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;s.push(this.getDependency("node",g)),r.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),a.push(f),l.push(d)}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],m=[];for(let _=0,M=u.length;_<M;_++){const x=u[_],b=h[_],S=f[_],R=d[_],L=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(li[L.path]){case li.weights:v=no;break;case li.rotation:v=es;break;case li.position:case li.scale:default:v=io;break}const E=x.name?x.name:x.uuid,P=R.interpolation!==void 0?lE[R.interpolation]:Qs,z=[];li[L.path]===li.weights?x.traverse(function(D){D.morphTargetInfluences&&z.push(D.name?D.name:D.uuid)}):z.push(E);let k=S.array;if(S.normalized){const D=mc(k.constructor),F=new Float32Array(k.length);for(let G=0,ee=k.length;G<ee;G++)F[G]=k[G]*D;k=F}for(let D=0,F=z.length;D<F;D++){const G=new v(z[D]+"."+li[L.path],b.array,k,P);R.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(q){const H=this instanceof es?aE:fm;return new H(this.times,this.values,this.getValueSize()/3,q)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(G)}}const p=n.name?n.name:"animation_"+e;return new hc(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"";return function(){const a=[],l=s._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(f){return s._getNodeRef(s.cameraCache,r.camera,f)})),s._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)});const c=[],u=r.children||[];for(let f=0,d=u.length;f<d;f++)c.push(s.getDependency("node",u[f]));const h=r.skin===void 0?Promise.resolve(null):s.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(c),h])}().then(function(a){const l=a[0],c=a[1],u=a[2];let h;if(r.isBone===!0?h=new em:l.length>1?h=new $i:l.length===1?h=l[0]:h=new rt,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&Ar(n,h,r),r.matrix!==void 0){const f=new He;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,pE)});for(let f=0,d=c.length;f<d;f++)h.add(c[f]);return h})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new $i;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Ar(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof vn||f instanceof Tt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}}function gE(i,e,t){const n=e.attributes,s=new as;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=mc(Xs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,l=new N;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const m=mc(Xs[f.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new cr;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Hf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=pc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return fi(i,e),gE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?uE(i,e.targets,t):i})}class _E extends ls{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new oo(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){function t(c){const u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;const g=[115,111,108,105,100];for(let m=0;m<5;m++)if(n(g,u,m))return!1;return!0}function n(c,u,h){for(let f=0,d=c.length;f<d;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function s(c){const u=new DataView(c),h=u.getUint32(80,!0);let f,d,g,m=!1,p,_,M,x,b;for(let P=0;P<70;P++)u.getUint32(P,!1)==1129270351&&u.getUint8(P+4)==82&&u.getUint8(P+5)==61&&(m=!0,p=new Float32Array(h*3*3),_=u.getUint8(P+6)/255,M=u.getUint8(P+7)/255,x=u.getUint8(P+8)/255,b=u.getUint8(P+9)/255);const S=84,R=12*4+2,L=new Vt,v=new Float32Array(h*3*3),E=new Float32Array(h*3*3);for(let P=0;P<h;P++){const z=S+P*R,k=u.getFloat32(z,!0),D=u.getFloat32(z+4,!0),F=u.getFloat32(z+8,!0);if(m){const G=u.getUint16(z+48,!0);G&32768?(f=_,d=M,g=x):(f=(G&31)/31,d=(G>>5&31)/31,g=(G>>10&31)/31)}for(let G=1;G<=3;G++){const ee=z+G*12,q=P*3*3+(G-1)*3;v[q]=u.getFloat32(ee,!0),v[q+1]=u.getFloat32(ee+4,!0),v[q+2]=u.getFloat32(ee+8,!0),E[q]=k,E[q+1]=D,E[q+2]=F,m&&(p[q]=f,p[q+1]=d,p[q+2]=g)}}return L.setAttribute("position",new Mt(v,3)),L.setAttribute("normal",new Mt(E,3)),m&&(L.setAttribute("color",new Mt(p,3)),L.hasColors=!0,L.alpha=b),L}function r(c){const u=new Vt,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g;let d=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),p=new RegExp("normal"+g+g+g,"g"),_=[],M=[],x=new N;let b,S=0,R=0,L=0;for(;(b=h.exec(c))!==null;){R=L;const v=b[0];for(;(b=f.exec(v))!==null;){let z=0,k=0;const D=b[0];for(;(b=p.exec(D))!==null;)x.x=parseFloat(b[1]),x.y=parseFloat(b[2]),x.z=parseFloat(b[3]),k++;for(;(b=m.exec(D))!==null;)_.push(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3])),M.push(x.x,x.y,x.z),z++,L++;k!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const E=R,P=L-R;u.addGroup(E,P,S),S++}return u.setAttribute("position",new Lt(_,3)),u.setAttribute("normal",new Lt(M,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}const l=a(e);return t(l)?s(l):r(o(e))}}const Os=class Os{constructor(){if(Os._instance)return Os._instance;Os._instance=this}};Be(Os,"_instance");let gc=Os;const Gf=1024*1024;function xE(i){const e=ts;e.enabled=!0;const t=new ao(i),n=new oo;n.setResponseType("blob");function s(r,o,a,l){e.get(r)?n.load(r,h,a,l):n.load(r,u,a,l);function u(f){const d=URL.createObjectURL(f),g=document.createElementNS("http://www.w3.org/1999/xhtml","img");g.onload=()=>{e.add(r,g),URL.revokeObjectURL(d),document.body.removeChild(g),h()},g.src=d,g.style.visibility="hidden",document.body.appendChild(g)}function h(){t.load(r,o,()=>{},l)}}return Object.assign({},t,{load:s})}class vE{constructor(e,t,n,s,r=void 0,o=Gf){Be(this,"object");Be(this,"total",Gf);Be(this,"loader");Be(this,"url");Be(this,"loaded",0);Be(this,"progress",0);Be(this,"isLoaded",!1);Be(this,"resolvePromise");Be(this,"rejectPromise");this.loader=e,this.url=t,this.resolvePromise=n,this.rejectPromise=s,this.object=r,this.total=o}setLoaded(e,t){e!==void 0&&(this.loaded=e),t!==void 0&&(this.total=t),this.isLoaded=this.loaded>=this.total,this.progress=this.loaded/this.total}setFullyLoaded(){this.setLoaded(this.total)}}class yE extends gc{constructor(){super();Be(this,"loadableObjects",new Set);Be(this,"trackedObjects",new Set);Be(this,"totalSize",0);Be(this,"totalLoaded",0);Be(this,"totalProgress",0);Be(this,"allLoadsPromise");Be(this,"_resolveAllLoadsPromise");Be(this,"_rejectAllLoadsPromise");this.allLoadsPromise=new Promise((t,n)=>{this._resolveAllLoadsPromise=t,this._rejectAllLoadsPromise=n})}async addLoad(t,n,s=void 0,r=!1){t===ao&&(t=xE);const o=new t(s);return new Promise((a,l)=>{const c=new vE(o,n,a,l);this.loadableObjects.add(c),r&&this._loadObject(c)})}async loadAsync(t,n,s=void 0){return this.addLoad(t,n,s,!0)}async _loadObject(t){t.loader.load(t.url,n=>{t.setFullyLoaded(),t.object=n,t.resolvePromise(n);let s=!0;this.loadableObjects.forEach(r=>{s=s&&r.isLoaded}),s&&this._resolveAllLoadsPromise()},({loaded:n,total:s})=>{t.setLoaded(n,s),this._updateTotalLoadedProgress()},n=>{console.error(`Loader: Error when loading asset (url = ${url}, loader = ${typeof t.loader}, error = ${n}`),t.rejectPromise(n),this._rejectAllLoadsPromise()})}async startAllLoads(){return console.log("START ALL",this.loadableObjects),this.loadableObjects.forEach(t=>{this._loadObject(t)}),this.allLoadsPromise}addLoadArray(t,n,s=void 0){return Promise.all(n.map(r=>this.addLoad(t,r,s)))}loadAsyncArray(t,n,s=void 0){return Promise.all(n.map(r=>this.addLoad(t,r,s,!0)))}track(t){return this.trackedObjects.add(t),t}trackArray(t){return this.trackedObjects.add(...t),t}disposeAll(){this.loadableObjects.forEach(t=>{var n;return(n=t==null?void 0:t.object)!=null&&n.dispose?t.object.dispose():null}),this.loadableObjects.clear(),this.trackedObjects.forEach(t=>t!=null&&t.dispose?t.dispose():null),this.trackedObjects.clear(),this.totalLoaded=0,this.totalSize=0,this.totalProgress=1}getObjects(){const t=new Set;return this.loadableObjects.forEach(n=>t.add(n.object)),t}_updateTotalLoadedProgress(){this.totalSize=0,this.totalLoaded=0,this.loadableObjects.forEach(t=>{this.totalSize+=t.total,this.totalLoaded+=t.loaded}),this.totalProgress=this.totalLoaded/this.totalSize}}const ns=new yE,kn=(...i)=>ns.track.call(ns,...i),ua=(...i)=>ns.loadAsync.call(ns,...i),dm="./assets/rough_material-yaAd-q0I.jpg";class pm extends g1{constructor(e){super(e),this.type=jn}parse(e){const a=function(x,b){switch(x){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(b||""))}return-1},h=`
`,f=function(x,b,S){b=b||1024;let L=x.pos,v=-1,E=0,P="",z=String.fromCharCode.apply(null,new Uint16Array(x.subarray(L,L+128)));for(;0>(v=z.indexOf(h))&&E<b&&L<x.byteLength;)P+=z,E+=z.length,L+=128,z+=String.fromCharCode.apply(null,new Uint16Array(x.subarray(L,L+128)));return-1<v?(x.pos+=E+v+1,P+z.slice(0,v)):!1},d=function(x){const b=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,v=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let P,z;if(x.pos>=x.byteLength||!(P=f(x)))return a(1,"no header found");if(!(z=P.match(b)))return a(3,"bad initial token");for(E.valid|=1,E.programtype=z[1],E.string+=P+`
`;P=f(x),P!==!1;){if(E.string+=P+`
`,P.charAt(0)==="#"){E.comments+=P+`
`;continue}if((z=P.match(S))&&(E.gamma=parseFloat(z[1])),(z=P.match(R))&&(E.exposure=parseFloat(z[1])),(z=P.match(L))&&(E.valid|=2,E.format=z[1]),(z=P.match(v))&&(E.valid|=4,E.height=parseInt(z[1],10),E.width=parseInt(z[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2?E.valid&4?E:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(x,b,S){const R=b;if(R<8||R>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);if(R!==(x[2]<<8|x[3]))return a(3,"wrong scanline width");const L=new Uint8Array(4*b*S);if(!L.length)return a(4,"unable to allocate buffer space");let v=0,E=0;const P=4*R,z=new Uint8Array(4),k=new Uint8Array(P);let D=S;for(;D>0&&E<x.byteLength;){if(E+4>x.byteLength)return a(1);if(z[0]=x[E++],z[1]=x[E++],z[2]=x[E++],z[3]=x[E++],z[0]!=2||z[1]!=2||(z[2]<<8|z[3])!=R)return a(3,"bad rgbe scanline format");let F=0,G;for(;F<P&&E<x.byteLength;){G=x[E++];const q=G>128;if(q&&(G-=128),G===0||F+G>P)return a(3,"bad scanline data");if(q){const H=x[E++];for(let le=0;le<G;le++)k[F++]=H}else k.set(x.subarray(E,E+G),F),F+=G,E+=G}const ee=R;for(let q=0;q<ee;q++){let H=0;L[v]=k[q+H],H+=R,L[v+1]=k[q+H],H+=R,L[v+2]=k[q+H],H+=R,L[v+3]=k[q+H],v+=4}D--}return L},m=function(x,b,S,R){const L=x[b+3],v=Math.pow(2,L-128)/255;S[R+0]=x[b+0]*v,S[R+1]=x[b+1]*v,S[R+2]=x[b+2]*v,S[R+3]=1},p=function(x,b,S,R){const L=x[b+3],v=Math.pow(2,L-128)/255;S[R+0]=Uo.toHalfFloat(Math.min(x[b+0]*v,65504)),S[R+1]=Uo.toHalfFloat(Math.min(x[b+1]*v,65504)),S[R+2]=Uo.toHalfFloat(Math.min(x[b+2]*v,65504)),S[R+3]=Uo.toHalfFloat(1)},_=new Uint8Array(e);_.pos=0;const M=d(_);if(M!==-1){const x=M.width,b=M.height,S=g(_.subarray(_.pos),x,b);if(S!==-1){let R,L,v;switch(this.type){case pn:v=S.length/4;const E=new Float32Array(v*4);for(let z=0;z<v;z++)m(S,z*4,E,z*4);R=E,L=pn;break;case jn:v=S.length/4;const P=new Uint16Array(v*4);for(let z=0;z<v;z++)p(S,z*4,P,z*4);R=P,L=jn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:x,height:b,data:R,header:M.string,gamma:M.gamma,exposure:M.exposure,type:L}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case pn:case jn:o.encoding=bi,o.minFilter=ft,o.magFilter=ft,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}const mm="./assets/empty_warehouse--1uoknKM.hdr";async function bE(){const i=new k1,e=new _E,t=await Promise.all([i.loadAsync("./models/animated_pretty_heart.glb")]);kn(...t);const n=await Promise.all([e.loadAsync("./models/hearts_around.stl"),e.loadAsync("./models/pretty_heart.stl")]);kn(...n);const s=[],r=[];t.forEach((f,d)=>{const[g,m]=z1(f),p=new F1(g);p.clipAction(m).play(),g.position.sub(g.center),s.push(g),p.tick=M=>p.update(M),r.push(p)});const[o,a]=await Promise.all([ua(ao,dm),ua(pm,mm)]);o.wrapS=Rn,o.wrapT=Rn,a.mapping=Yr;const l=kn(new sm({color:15610777,shininess:100})),c=kn(new Mi({transmission:1,roughness:.2,thickness:3,clearcoat:!0,clearcoatRoughness:.5,ior:1.5,envMap:a,envMapIntensity:1,normalMap:o,clearcoatNormalMap:o,normalScale:new Pe(.2,.2),clearcoatNormalScale:new Pe(10,10)})),u=kn(new at(n[0],l));u.rotation.x=-Math.PI/180*90,s.push(u);const h=kn(new at(n[1],c));return h.rotation.x=-Math.PI/180*90,h.scale.multiplyScalar(1.1),s.push(h),{models:s,animations:r}}function gm(){let i=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i}const Vi=300,_m=3,Zo=400+_m,Jo=250+_m,Fi=300,Wf=.15,Cl=70,Rl=60,ME=30,SE=7356480;function wE(){const i=new Ot(60,1,.01,2e4);return i.position.set(0,0,Vi),i}function TE(){const i=new _1(16772795,1261648,2),e=new Is(16777215,2);e.position.set(200,200,-200);const t=new Is(10092458,.5);t.position.set(200,100,200);const n=new Is(14548906,1);n.position.set(-200,200,100);const s=new cm(16777215,10);s.position.set(-100,100,-100);const r=new Is(14548906,1),o=new Is(14548906,1);return[r,o,n,i,e,t,s]}function EE(){const i=new YT;return i.background=new Ie(SE),i}async function AE(){const i=new sm({color:819,shininess:10}),e=new js(Zo,Fi),t=new js(Fi,Jo),n=new js(Zo,Jo),s=new at(e,i);s.rotation.x=Math.PI/2,s.position.y=Jo/2,s.position.z=Fi/2;const r=new at(t,i);r.rotation.y=-Math.PI/2,r.position.x=Zo/2,r.position.z=Fi/2;const o=new at(e,i);o.rotation.x=-Math.PI/2,o.position.y=-253/2,o.position.z=Fi/2;const a=new at(t,i);a.rotation.y=Math.PI/2,a.position.x=-403/2,a.position.z=Fi/2;const l=new at(n,i);return l.rotation.y=Math.PI,l.position.z=Fi,[]}async function CE(){const[i,e]=await Promise.all([ua(ao,dm),ua(pm,mm)]);i.wrapS=Rn,i.wrapT=Rn,e.mapping=Yr;const t=kn(new qn({color:0})),n=kn(new Zc(1,5,5));return[kn(new at(n,t))]}async function RE(){return(await AE()).concat(await CE()).map(i=>(i.tick===void 0&&(i.tick=()=>{}),dc(i)))}const jf=100,LE=gm()?.2:.1,PE=5;class IE{constructor(e,t){Be(this,"camera");Be(this,"canvas");Be(this,"target",new N);Be(this,"visibleScreenHeight");Be(this,"visibleScreenWidth");Be(this,"maxX",Zo/2);Be(this,"minX",-403/2);Be(this,"maxY",Jo/2);Be(this,"minY",-253/2);Be(this,"centerX",(this.maxX+this.minX)/2);Be(this,"centerY",(this.maxY+this.minY)/2);Be(this,"scrollPos",new Pe(this.centerX,0));Be(this,"movementPos",new N(this.centerX,this.centerY,Vi));Be(this,"targetCameraPos",new N(this.centerX,this.centerY,Vi));Be(this,"cameraVerticalFov");Be(this,"_dampingFactorDecreasingFactor",1);Be(this,"isMobile",gm());this.camera=e,this.canvas=t}init(){this.camera.lookAt(this.target),window.addEventListener("mousemove",this._onMouseMove()),window.addEventListener("wheel",this._onScroll(),{passive:!1}),window.addEventListener("mouseout",this._onMouseOver()),window.addEventListener("deviceorientation",this._onDeviceOrientation()),this.camera.position.set(...this.targetCameraPos),this.cameraVerticalFov=Op.degToRad(this.camera.fov),this._updateVisibleScreenSize()}dispose(){window.removeEventListener("mousemove",this._onMouseMove()),window.removeEventListener("wheel",this._onScroll()),window.removeEventListener("deviceorientation",this._onDeviceOrientation())}_onScroll(){return e=>{this.isMobile||e.preventDefault()}}_setMovementPos(e,t,n){this.movementPos.x=Math.sin(2*Math.PI*n)*Vi,this.movementPos.z=Math.cos(2*Math.PI*n)*Vi,this.movementPos.y=this.centerY-jf/2+jf*t,this._dampingFactorDecreasingFactor=1,this._updateTargetCameraPos()}_updateVisibleScreenSize(){this.visibleScreenHeight=2*Math.tan(this.cameraVerticalFov/2)*Math.abs(Vi),this.visibleScreenWidth=this.visibleScreenHeight*this.camera.aspect}_updateTargetCameraPos(){this._updateVisibleScreenSize(),this.targetCameraPos.x=this.movementPos.x,this.targetCameraPos.y=this.movementPos.y+this.scrollPos.y,this.targetCameraPos.z=this.movementPos.z}_onMouseMove(){if(!this.isMobile)return e=>{let t=visualViewport.width,n=visualViewport.height,s=t*Wf,r=n*Wf;t-=s*2,n-=r*2;const o=t-Math.max(e.offsetX-s,0),a=n-Math.max(e.offsetY-r,0),l=Math.max(o/t,0),c=Math.max(a/n,0);this._setMovementPos(0,c,l)}}_onMouseOver(){if(!this.isMobile)return e=>{this.targetCameraPos.set(this.centerX,this.centerY,Vi),this._dampingFactorDecreasingFactor=1/PE}}_onDeviceOrientation(){const e=180-Cl*2,t=180-Rl*2,n=360;return s=>{let{absolute:r,gamma:o,beta:a,alpha:l}=s;o=t/2-Math.min(Math.max(o,-90+Rl),90-Rl),a-=ME,a=e/2-Math.min(Math.max(a,-90+Cl),90-Cl),this._setMovementPos(o/t,a/e,l/n)}}tick(){const e=new N(...this.camera.position),s=new N(this.targetCameraPos.x*1.5,this.targetCameraPos.y*1.5,this.targetCameraPos.z).sub(e).multiplyScalar(LE*this._dampingFactorDecreasingFactor),r=e.add(s);this.camera.position.set(...r),this.camera.lookAt(this.target)}}function DE(i,e){const t=new IE(i,e);return t.init(),t}class dr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NE=new Ca(-1,1,1,-1,0,1),nu=new Vt;nu.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3));nu.setAttribute("uv",new Lt([0,2,0,0,2,0],2));class iu{constructor(e){this._mesh=new at(nu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const xm={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`},FE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class tr extends dr{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(r,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new _n(r,o);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new _n(r,o);d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=FE;this.highPassUniforms=to.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new Pe(r,o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=xm;this.copyUniforms=to.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new kt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:tc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new qn,this.fsQuad=new iu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.texSize.value=new Pe(n,s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=tr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=tr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new kt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}tr.BlurDirectionX=new Pe(1,0);tr.BlurDirectionY=new Pe(0,1);class OE extends dr{constructor(e,t,n,s,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=s}}class vm extends dr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=to.clone(e.uniforms),this.material=new kt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new iu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xf extends dr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class UE extends dr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class BE{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Pe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vm(xm),this.clock=new um}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xf!==void 0&&(o instanceof Xf?n=!0:o instanceof UE&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const zE={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class kE extends dr{constructor(e,t,n,s){super();const r=zE;this.uniforms=to.clone(r.uniforms),this.material=new kt({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),s!==void 0&&(this.uniforms.grayscale.value=s),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),n!==void 0&&(this.uniforms.sCount.value=n),this.fsQuad=new iu(this.material)}render(e,t,n,s){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=s,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const VE={uniforms:{tDiffuse:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};function HE(i,e){const t=new Qp({antialias:!0});t.setClearColor(5592405),t.physicallyCorrectLights=!0,t.shadowMap.enabled=!0;const n=new OE(i,e),s=new vm(VE),r=new tr(new Pe(window.innerWidth,window.innerHeight),.5,.33,.9),o=new kE(.1,0,0,!1),a=new BE(t);return a.addPass(n),a.addPass(s),a.addPass(r),a.addPass(o),{composer:a,renderer:t}}class GE{constructor(e,t,n,s){Be(this,"container");Be(this,"camera");Be(this,"renderer");Be(this,"composer");this.container=e,this.camera=t,this.renderer=n,this.composer=s,window.addEventListener("resize",this._onResize()),this.update()}dispose(){window.removeEventListener("resize",this._onResize())}update(){this._onResize()()}_onResize(){return e=>{const t=window.innerWidth,n=window.innerHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer.setSize(t,n),this.composer.setPixelRatio(window.devicePixelRatio)}}}const WE=new um;class jE{constructor(e,t,n,s){this.camera=e,this.scene=t,this.renderer=n,this.composer=s,this.updatables=[],this.composer.render()}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.composer.render()})}stop(){this.renderer.setAnimationLoop(null)}tick(){const e=WE.getDelta();for(const t of this.updatables)t.tick(e)}}const Bo=200,qf=1,$f=.6;let Cr=0;function XE(i,e){return[{tick(n){Cr+=n,i.position.set(Bo*Math.cos(Cr*qf),Bo*Math.sin(Cr*qf),100),e.position.set(Bo*Math.cos(Cr*$f),100,Bo*Math.sin(Cr*$f))}}]}let Rr,Ll,zo,Oi,Es,Ui,ko=[],Kf=[],Yf=[],Zf=[],Pl=[],Il;class qE{constructor(e){Rr=wE(),Es=EE();const t=HE(Es,Rr);zo=t.composer,Oi=t.renderer,Ll=DE(Rr,Oi.domElement),Ui=new jE(Rr,Es,Oi,zo),ko=TE(),Zf=XE(ko[0],ko[1]),e.append(Oi.domElement),Ui.updatables.push(Ll),Es.add(...ko),Il=new GE(e,Rr,Oi,zo)}async init(){const{models:e,animations:t}=await bE();Kf=e,Yf=t,Pl=await RE(),Ui.updatables.push(...Pl),Ui.updatables.push(...Yf),Ui.updatables.push(...Zf),Es.add(...Kf),Es.add(...Pl),Il.update()}start(){Ui.start()}stop(){Ui.stop()}dispose(){this.stop(),Ll.dispose(),zo.dispose(),Oi.dispose(),Il.dispose(),Oi.domElement.remove(),ns.disposeAll()}}const $E={props:{progress:0,size:{default:"60px"},postfix:{type:String,default:" %"},disableAnimation:{type:Boolean,default:!1}},data(){return{MATH_PI:Math.PI}},computed:{isLoaded(){return this.progress>=1}}},ym=i=>(or("data-v-4f404fef"),i=i(),ar(),i),KE=ym(()=>De("circle",{class:"circle",r:"50",cx:"50",cy:"50"},null,-1)),YE=ym(()=>De("circle",{class:"circle-shadow",r:"50",cx:"50",cy:"50"},null,-1)),ZE={class:"text",x:"50",y:"50","font-size":"10","text-anchor":"middle","dominant-baseline":"middle"};function JE(i,e,t,n,s,r){return wt(),rn("svg",{class:is(["root-progress",{animate:!t.disableAnimation}]),viewBox:"0 0 100 100",style:nr({"--progress":t.progress,"--math-pi":s.MATH_PI,"--size":t.size})},[KE,YE,De("text",ZE,Hr(Math.round(t.progress*1e3)/10)+Hr(t.postfix),1)],6)}const QE=Jn($E,[["render",JE],["__scopeId","data-v-4f404fef"]]),eA=200,tA={props:{value:"",size:{default:"60px"},progress:0},data(){return{animationActive:!1,animationInterval:null,MATH_PI:Math.PI}},watch:{async value(i,e){clearInterval(this.animationInterval),this.animationActive=!1,console.log(e,i),this.animationActive=!0,this.animationInterval=setInterval(()=>{this.animationActive=!1},1500)}}},Pa=i=>(or("data-v-b72a3935"),i=i(),ar(),i),nA=Pa(()=>De("circle",{class:"circle",r:"50",cx:"50",cy:"50"},null,-1)),iA=Pa(()=>De("circle",{class:"circle-shadow",r:"50",cx:"50",cy:"50"},null,-1)),sA=Pa(()=>De("circle",{class:"circle-progress",r:"50",cx:"50",cy:"50"},null,-1)),rA=Pa(()=>De("circle",{class:"circle-animation",r:"50",cx:"50",cy:"50"},null,-1)),oA={class:"text",x:"50",y:"50","font-size":"10","text-anchor":"middle","dominant-baseline":"middle"};function aA(i,e,t,n,s,r){return wt(),rn("svg",{class:is(["root-progress",{animation:s.animationActive}]),viewBox:"0 0 100 100",style:nr({"--progress":t.progress,"--math-pi":s.MATH_PI,"--size":t.size})},[nA,iA,sA,rA,De("text",oA,Hr(t.value),1)],6)}const lA=Jn(tA,[["render",aA],["__scopeId","data-v-b72a3935"]]),Vo=40,cA=1.8,uA=4,hA=6,fA={components:{NumberCircle:lA,Progress:QE},data(){return{world:void 0,loadingProgress:0,isLoaded:!1,AssetsTrackerLoader:ns,updatingInterval:void 0,roundsCount:0,roundProgress:0,ROUNDS_NEEDED:eA}},async mounted(){this.roundsCount=this.getRoundsFromLocalStorage();let i=null,e=null,t=null,n=null;window.addEventListener("deviceorientation",s=>{if(i!==null&&e!==null&&t!==null){if(i<Vo&&s.alpha>360-Vo){this.saveRoundsToLocalStorage();const r=new Date;if(n!==null){const o=(n.getSeconds()-r.getSeconds())/1e3;o>cA&&o<uA?this.roundsCount++:this.roundsCount--}n=r}if(s.alpha<Vo&&i>360-Vo){const r=new Date;(n.getSeconds()-r.getSeconds())/1e3<hA&&this.roundsCount--,this.saveRoundsToLocalStorage(),n=r}}i=s.alpha,e=s.beta,t=s.gamma,this.roundProgress=(360-s.alpha)/360}),this.updatingInterval=setInterval(()=>{this.loadingProgress=ns.totalProgress,this.loadingProgress>=1&&(clearInterval(this.updatingInterval),this.isLoaded=!0)},50),this.world=new qE(this.$refs.rootThree3d),await this.world.init(),this.world.start()},unmounted(){this.world.dispose(),clearInterval(this.updatingInterval)},methods:{saveRoundsToLocalStorage(){localStorage.setItem("rounds-count",this.roundsCount)},getRoundsFromLocalStorage(){const i=localStorage.getItem("rounds-count");return Number(i)||0},async resetRounds(){await this.$modal.confirm("Вы уверены, что хотите сбросить прогресс?","Восстановить его не получится, все начнется заново")&&(localStorage.removeItem("rounds"),this.roundsCount=0)}}},dA={class:"root-page-3d"},pA={ref:"rootThree3d",class:"root-3d"};function mA(i,e,t,n,s,r){const o=gi("NumberCircle"),a=gi("router-link"),l=gi("Progress");return wt(),rn("div",dA,[ot(Hs,{name:"opacity"},{default:ji(()=>[s.isLoaded&&s.roundsCount<s.ROUNDS_NEEDED?(wt(),Ur(o,{key:0,class:"progress",value:`${s.roundsCount}/${s.ROUNDS_NEEDED}`,size:"200px",progress:s.roundProgress},null,8,["value","progress"])):qo("",!0)]),_:1}),ot(Hs,{name:"opacity"},{default:ji(()=>[ot(a,{to:{name:"finish"}},{default:ji(()=>[s.isLoaded&&s.roundsCount>=s.ROUNDS_NEEDED?(wt(),Ur(o,{key:0,class:"progress progress-final",value:"Жми сюда",size:"200px",progress:0})):qo("",!0)]),_:1})]),_:1}),De("button",{class:"button-reset",onClick:e[0]||(e[0]=(...c)=>r.resetRounds&&r.resetRounds(...c))},"Сбросить прогресс"),De("div",pA,null,512),ot(Hs,{name:"opacity",class:"loader"},{default:ji(()=>[s.isLoaded?qo("",!0):(wt(),Ur(l,{key:0,size:"200px",ref:"progress",progress:s.loadingProgress},null,8,["progress"]))]),_:1})])}const gA=Jn(fA,[["render",mA],["__scopeId","data-v-aac16467"]]);function _A(i){const e=[{path:"/",name:"default",component:gA},{path:"/finish-18h7dgy32last0",name:"finish",component:Iv},{path:"/:pathMatch(.*)*",name:"page404",component:zv}],t=wv({history:zx(),routes:e});let n=!1;return t.beforeEach(async(s,r,o)=>{n||(await i.dispatch("GET_USER"),n=!0);const a={name:"login"},l={name:"profile"};if(s.matched.some(c=>c.meta.loginRequired===!0||c.meta.adminRequired===!0)){if(i.state.user.isSignedIn){o();return}o(a);return}else if(s.matched.some(c=>c.meta.noLoginRequired===!0)){if(!i.state.user.isSignedIn){o();return}o(l);return}if(s.matched.some(c=>c.meta.adminRequired===!0)){if(i.state.user.isAdmin){o();return}o(l);return}o()}),t.beforeResolve(async s=>{if(window!=null&&window.onbeforeunload)if(confirm("Изменения не сохранены. Вы уверены, что хотите покинуть страницу?"))window.onbeforeunload=null;else return!1}),t}const xA=_A(Uc),vA=t0(K0).use(xA).use(Uc).mount("#app");Uc.$app=vA;
