(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const Q of C)if(Q.type==="childList")for(const E of Q.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function I(C){const Q={};return C.integrity&&(Q.integrity=C.integrity),C.referrerpolicy&&(Q.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?Q.credentials="include":C.crossorigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(C){if(C.ep)return;C.ep=!0;const Q=I(C);fetch(C.href,Q)}})();function UI(){}function QQ(B,A){for(const I in A)B[I]=A[I];return B}function Ca(B){return B()}function At(){return Object.create(null)}function bC(B){B.forEach(Ca)}function UE(B){return typeof B=="function"}function DI(B,A){return B!=B?A==A:B!==A||B&&typeof B=="object"||typeof B=="function"}function VD(B){return Object.keys(B).length===0}function eo(B,...A){if(B==null)return UI;const I=B.subscribe(...A);return I.unsubscribe?()=>I.unsubscribe():I}function uC(B){let A;return eo(B,I=>A=I)(),A}function eI(B,A,I){B.$$.on_destroy.push(eo(A,I))}function Ag(B,A,I,g){if(B){const C=Ba(B,A,I,g);return B[0](C)}}function Ba(B,A,I,g){return B[1]&&g?QQ(I.ctx.slice(),B[1](g(A))):I.ctx}function Ig(B,A,I,g){if(B[2]&&g){const C=B[2](g(I));if(A.dirty===void 0)return C;if(typeof C=="object"){const Q=[],E=Math.max(A.dirty.length,C.length);for(let i=0;i<E;i+=1)Q[i]=A.dirty[i]|C[i];return Q}return A.dirty|C}return A.dirty}function gg(B,A,I,g,C,Q){if(C){const E=Ba(A,I,g,Q);B.p(E,C)}}function Cg(B){if(B.ctx.length>32){const A=[],I=B.ctx.length/32;for(let g=0;g<I;g++)A[g]=-1;return A}return-1}function Hi(B){const A={};for(const I in B)I[0]!=="$"&&(A[I]=B[I]);return A}function It(B,A){const I={};A=new Set(A);for(const g in B)!A.has(g)&&g[0]!=="$"&&(I[g]=B[g]);return I}function zQ(B,A,I){return B.set(I),A}function XD(B){return B&&UE(B.destroy)?B.destroy:UI}function vC(B,A){B.appendChild(A)}function II(B,A,I){B.insertBefore(A,I||null)}function $A(B){B.parentNode&&B.parentNode.removeChild(B)}function VB(B){return document.createElement(B)}function XB(B){return document.createTextNode(B)}function nI(){return XB(" ")}function NE(){return XB("")}function MC(B,A,I,g){return B.addEventListener(A,I,g),()=>B.removeEventListener(A,I,g)}function _B(B,A,I){I==null?B.removeAttribute(A):B.getAttribute(A)!==I&&B.setAttribute(A,I)}function _D(B){return Array.from(B.childNodes)}function gt(B,A){A=""+A,B.wholeText!==A&&(B.data=A)}function zD(B,A,{bubbles:I=!1,cancelable:g=!1}={}){const C=document.createEvent("CustomEvent");return C.initCustomEvent(B,I,g,A),C}let EQ;function zB(B){EQ=B}function OC(){if(!EQ)throw new Error("Function called outside component initialization");return EQ}function JE(B){OC().$$.on_mount.push(B)}function BI(B){OC().$$.on_destroy.push(B)}function ZC(){const B=OC();return(A,I,{cancelable:g=!1}={})=>{const C=B.$$.callbacks[A];if(C){const Q=zD(A,I,{cancelable:g});return C.slice().forEach(E=>{E.call(B,Q)}),!Q.defaultPrevented}return!0}}function sg(B,A){return OC().$$.context.set(B,A),A}function cg(B){return OC().$$.context.get(B)}function KI(B,A){const I=B.$$.callbacks[A.type];I&&I.slice().forEach(g=>g.call(this,A))}const sB=[],ng=[],$Q=[],mi=[],Qa=Promise.resolve();let Ti=!1;function Ea(){Ti||(Ti=!0,Qa.then(ia))}function nC(){return Ea(),Qa}function xi(B){$Q.push(B)}function mg(B){mi.push(B)}const zE=new Set;let jC=0;function ia(){if(jC!==0)return;const B=EQ;do{try{for(;jC<sB.length;){const A=sB[jC];jC++,zB(A),$D(A.$$)}}catch(A){throw sB.length=0,jC=0,A}for(zB(null),sB.length=0,jC=0;ng.length;)ng.pop()();for(let A=0;A<$Q.length;A+=1){const I=$Q[A];zE.has(I)||(zE.add(I),I())}$Q.length=0}while(sB.length);for(;mi.length;)mi.pop()();Ti=!1,zE.clear(),zB(B)}function $D(B){if(B.fragment!==null){B.update(),bC(B.before_update);const A=B.dirty;B.dirty=[-1],B.fragment&&B.fragment.p(B.ctx,A),B.after_update.forEach(xi)}}const AE=new Set;let dC;function lB(){dC={r:0,c:[],p:dC}}function yB(){dC.r||bC(dC.c),dC=dC.p}function EA(B,A){B&&B.i&&(AE.delete(B),B.i(A))}function aA(B,A,I,g){if(B&&B.o){if(AE.has(B))return;AE.add(B),dC.c.push(()=>{AE.delete(B),g&&(I&&B.d(1),g())}),B.o(A)}else g&&g()}function Tg(B,A,I){const g=B.$$.props[A];g!==void 0&&(B.$$.bound[g]=I,I(B.$$.ctx[g]))}function RA(B){B&&B.c()}function JA(B,A,I,g){const{fragment:C,after_update:Q}=B.$$;C&&C.m(A,I),g||xi(()=>{const E=B.$$.on_mount.map(Ca).filter(UE);B.$$.on_destroy?B.$$.on_destroy.push(...E):bC(E),B.$$.on_mount=[]}),Q.forEach(xi)}function FA(B,A){const I=B.$$;I.fragment!==null&&(bC(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function As(B,A){B.$$.dirty[0]===-1&&(sB.push(B),Ea(),B.$$.dirty.fill(0)),B.$$.dirty[A/31|0]|=1<<A%31}function hI(B,A,I,g,C,Q,E,i=[-1]){const o=EQ;zB(B);const t=B.$$={fragment:null,ctx:[],props:Q,update:UI,not_equal:C,bound:At(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(o?o.$$.context:[])),callbacks:At(),dirty:i,skip_bound:!1,root:A.target||o.$$.root};E&&E(t.root);let e=!1;if(t.ctx=I?I(B,A.props||{},(a,D,...s)=>{const G=s.length?s[0]:D;return t.ctx&&C(t.ctx[a],t.ctx[a]=G)&&(!t.skip_bound&&t.bound[a]&&t.bound[a](G),e&&As(B,a)),D}):[],t.update(),e=!0,bC(t.before_update),t.fragment=g?g(t.ctx):!1,A.target){if(A.hydrate){const a=_D(A.target);t.fragment&&t.fragment.l(a),a.forEach($A)}else t.fragment&&t.fragment.c();A.intro&&EA(B.$$.fragment),JA(B,A.target,A.anchor,A.customElement),ia()}zB(o)}class GI{$destroy(){FA(this,1),this.$destroy=UI}$on(A,I){if(!UE(I))return UI;const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}$set(A){this.$$set&&!VD(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}const VC=[];function oa(B,A){return{subscribe:rI(B,A).subscribe}}function rI(B,A=UI){let I;const g=new Set;function C(i){if(DI(B,i)&&(B=i,I)){const o=!VC.length;for(const t of g)t[1](),VC.push(t,B);if(o){for(let t=0;t<VC.length;t+=2)VC[t][0](VC[t+1]);VC.length=0}}}function Q(i){C(i(B))}function E(i,o=UI){const t=[i,o];return g.add(t),g.size===1&&(I=A(C)||UI),i(B),()=>{g.delete(t),g.size===0&&(I(),I=null)}}return{set:C,update:Q,subscribe:E}}function oE(B,A,I){const g=!Array.isArray(B),C=g?[B]:B,Q=A.length<2;return oa(I,E=>{let i=!1;const o=[];let t=0,e=UI;const a=()=>{if(t)return;e();const s=A(g?o[0]:o,E);Q?E(s):e=UE(s)?s:UI},D=C.map((s,G)=>eo(s,n=>{o[G]=n,t&=~(1<<G),i&&a()},()=>{t|=1<<G}));return i=!0,a(),function(){bC(D),e()}})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="149",XC={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_C={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Is=0,Ct=1,gs=2,ta=1,ea=2,WB=3,hC=0,wg=1,CC=2,DC=0,SB=1,Bt=2,Qt=3,Et=4,Cs=5,nB=100,Bs=101,Qs=102,it=103,ot=104,Es=200,is=201,os=202,ts=203,aa=204,Da=205,es=206,as=207,Ds=208,ss=209,ns=210,hs=0,Gs=1,ws=2,bi=3,rs=4,Ss=5,cs=6,ks=7,sa=0,ls=1,ys=2,xg=0,Ms=1,Ks=2,Us=3,na=4,Ns=5,ha=300,HC=301,MB=302,tE=303,Oi=304,FE=306,Zi=1e3,hg=1001,Wi=1002,ZI=1003,tt=1004,$E=1005,JI=1006,Js=1007,KB=1008,mC=1009,Fs=1010,Rs=1011,Ga=1012,qs=1013,pC=1014,Ng=1015,Yg=1016,ds=1017,ps=1018,cB=1020,Ys=1021,pg=1023,Ls=1024,fs=1025,LC=1026,UB=1027,us=1028,Hs=1029,ms=1030,Ts=1031,xs=1033,Ai=33776,Ii=33777,gi=33778,Ci=33779,et=35840,at=35841,Dt=35842,st=35843,bs=36196,nt=37492,ht=37496,Gt=37808,wt=37809,rt=37810,St=37811,ct=37812,kt=37813,lt=37814,yt=37815,Mt=37816,Kt=37817,Ut=37818,Nt=37819,Jt=37820,Ft=37821,Bi=36492,Os=36283,Rt=36284,qt=36285,dt=36286,Fg=3e3,sI=3001,Zs=3200,Ws=3201,wa=0,Ps=1,fg="srgb",iQ="srgb-linear",Qi=7680,vs=519,pt=35044,Yt="300 es",Pi=1035;class WC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const Q=C.indexOf(I);Q!==-1&&C.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let Q=0,E=C.length;Q<E;Q++)C[Q].call(this,A);A.target=null}}}const vI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lt=1234567;const $B=Math.PI/180,eE=180/Math.PI;function PC(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(vI[B&255]+vI[B>>8&255]+vI[B>>16&255]+vI[B>>24&255]+"-"+vI[A&255]+vI[A>>8&255]+"-"+vI[A>>16&15|64]+vI[A>>24&255]+"-"+vI[I&63|128]+vI[I>>8&255]+"-"+vI[I>>16&255]+vI[I>>24&255]+vI[g&255]+vI[g>>8&255]+vI[g>>16&255]+vI[g>>24&255]).toLowerCase()}function OI(B,A,I){return Math.max(A,Math.min(I,B))}function Do(B,A){return(B%A+A)%A}function js(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function Vs(B,A,I){return B!==A?(I-B)/(A-B):0}function AQ(B,A,I){return(1-I)*B+I*A}function Xs(B,A,I,g){return AQ(B,A,1-Math.exp(-I*g))}function _s(B,A=1){return A-Math.abs(Do(B,A*2)-A)}function zs(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function $s(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function An(B,A){return B+Math.floor(Math.random()*(A-B+1))}function In(B,A){return B+Math.random()*(A-B)}function gn(B){return B*(.5-Math.random())}function Cn(B){B!==void 0&&(Lt=B);let A=Lt+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Bn(B){return B*$B}function Qn(B){return B*eE}function vi(B){return(B&B-1)===0&&B!==0}function En(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function aE(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function on(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),t=Q((A+g)/2),e=E((A+g)/2),a=Q((A-g)/2),D=E((A-g)/2),s=Q((g-A)/2),G=E((g-A)/2);switch(C){case"XYX":B.set(i*e,o*a,o*D,i*t);break;case"YZY":B.set(o*D,i*e,o*a,i*t);break;case"ZXZ":B.set(o*a,o*D,i*e,i*t);break;case"XZX":B.set(i*e,o*G,o*s,i*t);break;case"YXY":B.set(o*s,i*e,o*G,i*t);break;case"ZYZ":B.set(o*G,o*s,i*e,i*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function PB(B,A){switch(A.constructor){case Float32Array:return B;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function Bg(B,A){switch(A.constructor){case Float32Array:return B;case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}var ft=Object.freeze({__proto__:null,DEG2RAD:$B,RAD2DEG:eE,ceilPowerOfTwo:En,clamp:OI,damp:Xs,degToRad:Bn,denormalize:PB,euclideanModulo:Do,floorPowerOfTwo:aE,generateUUID:PC,inverseLerp:Vs,isPowerOfTwo:vi,lerp:AQ,mapLinear:js,normalize:Bg,pingpong:_s,radToDeg:Qn,randFloat:In,randFloatSpread:gn,randInt:An,seededRandom:Cn,setQuaternionFromProperEuler:on,smootherstep:$s,smoothstep:zs});class hA{constructor(A=0,I=0){hA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gg{constructor(){Gg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,Q,E,i,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=i,e[3]=I,e[4]=Q,e[5]=o,e[6]=g,e[7]=E,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],t=g[1],e=g[4],a=g[7],D=g[2],s=g[5],G=g[8],n=C[0],h=C[3],S=C[6],l=C[1],w=C[4],c=C[7],y=C[2],M=C[5],R=C[8];return Q[0]=E*n+i*l+o*y,Q[3]=E*h+i*w+o*M,Q[6]=E*S+i*c+o*R,Q[1]=t*n+e*l+a*y,Q[4]=t*h+e*w+a*M,Q[7]=t*S+e*c+a*R,Q[2]=D*n+s*l+G*y,Q[5]=D*h+s*w+G*M,Q[8]=D*S+s*c+G*R,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8];return I*E*e-I*i*t-g*Q*e+g*i*o+C*Q*t-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=e*E-i*t,D=i*o-e*Q,s=t*Q-E*o,G=I*a+g*D+C*s;if(G===0)return this.set(0,0,0,0,0,0,0,0,0);const n=1/G;return A[0]=a*n,A[1]=(C*t-e*g)*n,A[2]=(i*g-C*E)*n,A[3]=D*n,A[4]=(e*I-C*o)*n,A[5]=(C*Q-i*I)*n,A[6]=s*n,A[7]=(g*o-t*I)*n,A[8]=(E*I-g*Q)*n,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),t=Math.sin(Q);return this.set(g*o,g*t,-g*(o*E+t*i)+E+A,-C*t,C*o,-C*(-t*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(Ei.makeScale(A,I)),this}rotate(A){return this.premultiply(Ei.makeRotation(-A)),this}translate(A,I){return this.premultiply(Ei.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const Ei=new Gg;function ra(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function oQ(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function fC(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function IE(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}const ii={[fg]:{[iQ]:fC},[iQ]:{[fg]:IE}},VI={legacyMode:!0,get workingColorSpace(){return iQ},set workingColorSpace(B){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(B,A,I){if(this.legacyMode||A===I||!A||!I)return B;if(ii[A]&&ii[A][I]!==void 0){const g=ii[A][I];return B.r=g(B.r),B.g=g(B.g),B.b=g(B.b),B}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(B,A){return this.convert(B,this.workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this.workingColorSpace)}},Sa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},YI={r:0,g:0,b:0},Rg={h:0,s:0,l:0},JQ={h:0,s:0,l:0};function oi(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}function FQ(B,A){return A.r=B.r,A.g=B.g,A.b=B.b,A}class aI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=fg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,VI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=VI.workingColorSpace){return this.r=A,this.g=I,this.b=g,VI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=VI.workingColorSpace){if(A=Do(A,1),I=OI(I,0,1),g=OI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=oi(E,Q,A+1/3),this.g=oi(E,Q,A),this.b=oi(E,Q,A-1/3)}return VI.toWorkingColorSpace(this,C),this}setStyle(A,I=fg){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(Q[1],10))/255,this.g=Math.min(255,parseInt(Q[2],10))/255,this.b=Math.min(255,parseInt(Q[3],10))/255,VI.toWorkingColorSpace(this,I),g(Q[4]),this;if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(Q[1],10))/100,this.g=Math.min(100,parseInt(Q[2],10))/100,this.b=Math.min(100,parseInt(Q[3],10))/100,VI.toWorkingColorSpace(this,I),g(Q[4]),this;break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const o=parseFloat(Q[1])/360,t=parseFloat(Q[2])/100,e=parseFloat(Q[3])/100;return g(Q[4]),this.setHSL(o,t,e,I)}break}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.r=parseInt(Q.charAt(0)+Q.charAt(0),16)/255,this.g=parseInt(Q.charAt(1)+Q.charAt(1),16)/255,this.b=parseInt(Q.charAt(2)+Q.charAt(2),16)/255,VI.toWorkingColorSpace(this,I),this;if(E===6)return this.r=parseInt(Q.charAt(0)+Q.charAt(1),16)/255,this.g=parseInt(Q.charAt(2)+Q.charAt(3),16)/255,this.b=parseInt(Q.charAt(4)+Q.charAt(5),16)/255,VI.toWorkingColorSpace(this,I),this}return A&&A.length>0?this.setColorName(A,I):this}setColorName(A,I=fg){const g=Sa[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=fC(A.r),this.g=fC(A.g),this.b=fC(A.b),this}copyLinearToSRGB(A){return this.r=IE(A.r),this.g=IE(A.g),this.b=IE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=fg){return VI.fromWorkingColorSpace(FQ(this,YI),A),OI(YI.r*255,0,255)<<16^OI(YI.g*255,0,255)<<8^OI(YI.b*255,0,255)<<0}getHexString(A=fg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=VI.workingColorSpace){VI.fromWorkingColorSpace(FQ(this,YI),I);const g=YI.r,C=YI.g,Q=YI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,t;const e=(i+E)/2;if(i===E)o=0,t=0;else{const a=E-i;switch(t=e<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=VI.workingColorSpace){return VI.fromWorkingColorSpace(FQ(this,YI),I),A.r=YI.r,A.g=YI.g,A.b=YI.b,A}getStyle(A=fg){return VI.fromWorkingColorSpace(FQ(this,YI),A),A!==fg?`color(${A} ${YI.r} ${YI.g} ${YI.b})`:`rgb(${YI.r*255|0},${YI.g*255|0},${YI.b*255|0})`}offsetHSL(A,I,g){return this.getHSL(Rg),Rg.h+=A,Rg.s+=I,Rg.l+=g,this.setHSL(Rg.h,Rg.s,Rg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Rg),A.getHSL(JQ);const g=AQ(Rg.h,JQ.h,I),C=AQ(Rg.s,JQ.s,I),Q=AQ(Rg.l,JQ.l,I);return this.setHSL(g,C,Q),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}aI.NAMES=Sa;let zC;class ca{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{zC===void 0&&(zC=oQ("canvas")),zC.width=A.width,zC.height=A.height;const g=zC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=zC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=oQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=fC(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(fC(I[g]/255)*255):I[g]=fC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class ka{constructor(A=null){this.isSource=!0,this.uuid=PC(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(ti(C[E].image)):Q.push(ti(C[E]))}else Q=ti(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function ti(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?ca.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tn=0;class $I extends WC{constructor(A=$I.DEFAULT_IMAGE,I=$I.DEFAULT_MAPPING,g=hg,C=hg,Q=JI,E=KB,i=pg,o=mC,t=$I.DEFAULT_ANISOTROPY,e=Fg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=PC(),this.name="",this.source=new ka(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=t,this.format=i,this.internalFormat=null,this.type=o,this.offset=new hA(0,0),this.repeat=new hA(1,1),this.center=new hA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gg,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ha)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Zi:A.x=A.x-Math.floor(A.x);break;case hg:A.x=A.x<0?0:1;break;case Wi:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Zi:A.y=A.y-Math.floor(A.y);break;case hg:A.y=A.y<0?0:1;break;case Wi:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}$I.DEFAULT_IMAGE=null;$I.DEFAULT_MAPPING=ha;$I.DEFAULT_ANISOTROPY=1;class WI{constructor(A=0,I=0,g=0,C=1){WI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const o=A.elements,t=o[0],e=o[4],a=o[8],D=o[1],s=o[5],G=o[9],n=o[2],h=o[6],S=o[10];if(Math.abs(e-D)<.01&&Math.abs(a-n)<.01&&Math.abs(G-h)<.01){if(Math.abs(e+D)<.1&&Math.abs(a+n)<.1&&Math.abs(G+h)<.1&&Math.abs(t+s+S-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const w=(t+1)/2,c=(s+1)/2,y=(S+1)/2,M=(e+D)/4,R=(a+n)/4,k=(G+h)/4;return w>c&&w>y?w<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(w),C=M/g,Q=R/g):c>y?c<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(c),g=M/C,Q=k/C):y<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(y),g=R/Q,C=k/Q),this.set(g,C,Q,I),this}let l=Math.sqrt((h-G)*(h-G)+(a-n)*(a-n)+(D-e)*(D-e));return Math.abs(l)<.001&&(l=1),this.x=(h-G)/l,this.y=(a-n)/l,this.z=(D-e)/l,this.w=Math.acos((t+s+S-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GC extends WC{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new WI(0,0,A,I),this.scissorTest=!1,this.viewport=new WI(0,0,A,I);const C={width:A,height:I,depth:1};this.texture=new $I(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:JI,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new ka(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends $I{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=ZI,this.minFilter=ZI,this.wrapR=hg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en extends $I{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=ZI,this.minFilter=ZI,this.wrapR=hg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rg{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const D=Q[E+0],s=Q[E+1],G=Q[E+2],n=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(i===1){A[I+0]=D,A[I+1]=s,A[I+2]=G,A[I+3]=n;return}if(a!==n||o!==D||t!==s||e!==G){let h=1-i;const S=o*D+t*s+e*G+a*n,l=S>=0?1:-1,w=1-S*S;if(w>Number.EPSILON){const y=Math.sqrt(w),M=Math.atan2(y,S*l);h=Math.sin(h*M)/y,i=Math.sin(i*M)/y}const c=i*l;if(o=o*h+D*c,t=t*h+s*c,e=e*h+G*c,a=a*h+n*c,h===1-i){const y=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=y,t*=y,e*=y,a*=y}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=Q[E],D=Q[E+1],s=Q[E+2],G=Q[E+3];return A[I]=i*G+e*a+o*s-t*D,A[I+1]=o*G+e*D+t*a-i*s,A[I+2]=t*G+e*s+i*D-o*a,A[I+3]=e*G-i*a-o*D-t*s,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,t=i(g/2),e=i(C/2),a=i(Q/2),D=o(g/2),s=o(C/2),G=o(Q/2);switch(E){case"XYZ":this._x=D*e*a+t*s*G,this._y=t*s*a-D*e*G,this._z=t*e*G+D*s*a,this._w=t*e*a-D*s*G;break;case"YXZ":this._x=D*e*a+t*s*G,this._y=t*s*a-D*e*G,this._z=t*e*G-D*s*a,this._w=t*e*a+D*s*G;break;case"ZXY":this._x=D*e*a-t*s*G,this._y=t*s*a+D*e*G,this._z=t*e*G+D*s*a,this._w=t*e*a-D*s*G;break;case"ZYX":this._x=D*e*a-t*s*G,this._y=t*s*a+D*e*G,this._z=t*e*G-D*s*a,this._w=t*e*a+D*s*G;break;case"YZX":this._x=D*e*a+t*s*G,this._y=t*s*a+D*e*G,this._z=t*e*G-D*s*a,this._w=t*e*a-D*s*G;break;case"XZY":this._x=D*e*a-t*s*G,this._y=t*s*a-D*e*G,this._z=t*e*G+D*s*a,this._w=t*e*a+D*s*G;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],t=I[2],e=I[6],a=I[10],D=g+i+a;if(D>0){const s=.5/Math.sqrt(D+1);this._w=.25/s,this._x=(e-o)*s,this._y=(Q-t)*s,this._z=(E-C)*s}else if(g>i&&g>a){const s=2*Math.sqrt(1+g-i-a);this._w=(e-o)/s,this._x=.25*s,this._y=(C+E)/s,this._z=(Q+t)/s}else if(i>a){const s=2*Math.sqrt(1+i-g-a);this._w=(Q-t)/s,this._x=(C+E)/s,this._y=.25*s,this._z=(o+e)/s}else{const s=2*Math.sqrt(1+a-g-i);this._w=(E-C)/s,this._x=(Q+t)/s,this._y=(o+e)/s,this._z=.25*s}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(OI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+E*i+C*t-Q*o,this._y=C*e+E*o+Q*i-g*t,this._z=Q*e+E*t+g*o-C*i,this._w=E*e-g*i-C*o-Q*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const s=1-I;return this._w=s*E+I*this._w,this._x=s*g+I*this._x,this._y=s*C+I*this._y,this._z=s*Q+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(o),e=Math.atan2(t,i),a=Math.sin((1-I)*e)/t,D=Math.sin(I*e)/t;return this._w=E*a+this._w*D,this._x=g*a+this._x*D,this._y=C*a+this._y*D,this._z=Q*a+this._z*D,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(A=0,I=0,g=0){L.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(ut.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(ut.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,t=o*I+E*C-i*g,e=o*g+i*I-Q*C,a=o*C+Q*g-E*I,D=-Q*I-E*g-i*C;return this.x=t*o+D*-Q+e*-i-a*-E,this.y=e*o+D*-E+a*-Q-t*-i,this.z=a*o+D*-i+t*-E-e*-Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return ei.copy(this).projectOnVector(A),this.sub(ei)}reflect(A){return this.sub(ei.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(OI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ei=new L,ut=new rg;class kQ{constructor(A=new L(1/0,1/0,1/0),I=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,C=1/0,Q=-1/0,E=-1/0,i=-1/0;for(let o=0,t=A.length;o<t;o+=3){const e=A[o],a=A[o+1],D=A[o+2];e<I&&(I=e),a<g&&(g=a),D<C&&(C=D),e>Q&&(Q=e),a>E&&(E=a),D>i&&(i=D)}return this.min.set(I,g,C),this.max.set(Q,E,i),this}setFromBufferAttribute(A){let I=1/0,g=1/0,C=1/0,Q=-1/0,E=-1/0,i=-1/0;for(let o=0,t=A.count;o<t;o++){const e=A.getX(o),a=A.getY(o),D=A.getZ(o);e<I&&(I=e),a<g&&(g=a),D<C&&(C=D),e>Q&&(Q=e),a>E&&(E=a),D>i&&(i=D)}return this.min.set(I,g,C),this.max.set(Q,E,i),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=KC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const Q=g.attributes.position;for(let E=0,i=Q.count;E<i;E++)KC.fromBufferAttribute(Q,E).applyMatrix4(A.matrixWorld),this.expandByPoint(KC)}else g.boundingBox===null&&g.computeBoundingBox(),ai.copy(g.boundingBox),ai.applyMatrix4(A.matrixWorld),this.union(ai);const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,KC),KC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(HB),RQ.subVectors(this.max,HB),$C.subVectors(A.a,HB),AB.subVectors(A.b,HB),IB.subVectors(A.c,HB),iC.subVectors(AB,$C),oC.subVectors(IB,AB),UC.subVectors($C,IB);let I=[0,-iC.z,iC.y,0,-oC.z,oC.y,0,-UC.z,UC.y,iC.z,0,-iC.x,oC.z,0,-oC.x,UC.z,0,-UC.x,-iC.y,iC.x,0,-oC.y,oC.x,0,-UC.y,UC.x,0];return!Di(I,$C,AB,IB,RQ)||(I=[1,0,0,0,1,0,0,0,1],!Di(I,$C,AB,IB,RQ))?!1:(qQ.crossVectors(iC,oC),I=[qQ.x,qQ.y,qQ.z],Di(I,$C,AB,IB,RQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return KC.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(KC).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Vg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Vg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Vg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Vg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Vg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Vg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Vg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Vg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Vg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Vg=[new L,new L,new L,new L,new L,new L,new L,new L],KC=new L,ai=new kQ,$C=new L,AB=new L,IB=new L,iC=new L,oC=new L,UC=new L,HB=new L,RQ=new L,qQ=new L,NC=new L;function Di(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){NC.fromArray(B,Q);const i=C.x*Math.abs(NC.x)+C.y*Math.abs(NC.y)+C.z*Math.abs(NC.z),o=A.dot(NC),t=I.dot(NC),e=g.dot(NC);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>i)return!1}return!0}const an=new kQ,mB=new L,si=new L;class RE{constructor(A=new L,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):an.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;mB.subVectors(A,this.center);const I=mB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(mB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(si.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(mB.copy(A.center).add(si)),this.expandByPoint(mB.copy(A.center).sub(si))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xg=new L,ni=new L,dQ=new L,tC=new L,hi=new L,pQ=new L,Gi=new L;class so{constructor(A=new L,I=new L(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Xg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Xg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Xg.copy(this.direction).multiplyScalar(I).add(this.origin),Xg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){ni.copy(A).add(I).multiplyScalar(.5),dQ.copy(I).sub(A).normalize(),tC.copy(this.origin).sub(ni);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(dQ),i=tC.dot(this.direction),o=-tC.dot(dQ),t=tC.lengthSq(),e=Math.abs(1-E*E);let a,D,s,G;if(e>0)if(a=E*o-i,D=E*i-o,G=Q*e,a>=0)if(D>=-G)if(D<=G){const n=1/e;a*=n,D*=n,s=a*(a+E*D+2*i)+D*(E*a+D+2*o)+t}else D=Q,a=Math.max(0,-(E*D+i)),s=-a*a+D*(D+2*o)+t;else D=-Q,a=Math.max(0,-(E*D+i)),s=-a*a+D*(D+2*o)+t;else D<=-G?(a=Math.max(0,-(-E*Q+i)),D=a>0?-Q:Math.min(Math.max(-Q,-o),Q),s=-a*a+D*(D+2*o)+t):D<=G?(a=0,D=Math.min(Math.max(-Q,-o),Q),s=D*(D+2*o)+t):(a=Math.max(0,-(E*Q+i)),D=a>0?Q:Math.min(Math.max(-Q,-o),Q),s=-a*a+D*(D+2*o)+t);else D=E>0?-Q:Q,a=Math.max(0,-(E*D+i)),s=-a*a+D*(D+2*o)+t;return g&&g.copy(this.direction).multiplyScalar(a).add(this.origin),C&&C.copy(dQ).multiplyScalar(D).add(ni),s}intersectSphere(A,I){Xg.subVectors(A.center,this.origin);const g=Xg.dot(this.direction),C=Xg.dot(Xg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return i<0&&o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,D=this.origin;return t>=0?(g=(A.min.x-D.x)*t,C=(A.max.x-D.x)*t):(g=(A.max.x-D.x)*t,C=(A.min.x-D.x)*t),e>=0?(Q=(A.min.y-D.y)*e,E=(A.max.y-D.y)*e):(Q=(A.max.y-D.y)*e,E=(A.min.y-D.y)*e),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-D.z)*a,o=(A.max.z-D.z)*a):(i=(A.max.z-D.z)*a,o=(A.min.z-D.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Xg)!==null}intersectTriangle(A,I,g,C,Q){hi.subVectors(I,A),pQ.subVectors(g,A),Gi.crossVectors(hi,pQ);let E=this.direction.dot(Gi),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;tC.subVectors(this.origin,A);const o=i*this.direction.dot(pQ.crossVectors(tC,pQ));if(o<0)return null;const t=i*this.direction.dot(hi.cross(tC));if(t<0||o+t>E)return null;const e=-i*tC.dot(Gi);return e<0?null:this.at(e/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class FI{constructor(){FI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,Q,E,i,o,t,e,a,D,s,G,n,h){const S=this.elements;return S[0]=A,S[4]=I,S[8]=g,S[12]=C,S[1]=Q,S[5]=E,S[9]=i,S[13]=o,S[2]=t,S[6]=e,S[10]=a,S[14]=D,S[3]=s,S[7]=G,S[11]=n,S[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new FI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/gB.setFromMatrixColumn(A,0).length(),Q=1/gB.setFromMatrixColumn(A,1).length(),E=1/gB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const D=E*e,s=E*a,G=i*e,n=i*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=s+G*t,I[5]=D-n*t,I[9]=-i*o,I[2]=n-D*t,I[6]=G+s*t,I[10]=E*o}else if(A.order==="YXZ"){const D=o*e,s=o*a,G=t*e,n=t*a;I[0]=D+n*i,I[4]=G*i-s,I[8]=E*t,I[1]=E*a,I[5]=E*e,I[9]=-i,I[2]=s*i-G,I[6]=n+D*i,I[10]=E*o}else if(A.order==="ZXY"){const D=o*e,s=o*a,G=t*e,n=t*a;I[0]=D-n*i,I[4]=-E*a,I[8]=G+s*i,I[1]=s+G*i,I[5]=E*e,I[9]=n-D*i,I[2]=-E*t,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const D=E*e,s=E*a,G=i*e,n=i*a;I[0]=o*e,I[4]=G*t-s,I[8]=D*t+n,I[1]=o*a,I[5]=n*t+D,I[9]=s*t-G,I[2]=-t,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const D=E*o,s=E*t,G=i*o,n=i*t;I[0]=o*e,I[4]=n-D*a,I[8]=G*a+s,I[1]=a,I[5]=E*e,I[9]=-i*e,I[2]=-t*e,I[6]=s*a+G,I[10]=D-n*a}else if(A.order==="XZY"){const D=E*o,s=E*t,G=i*o,n=i*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=D*a+n,I[5]=E*e,I[9]=s*a-G,I[2]=G*a-s,I[6]=i*e,I[10]=n*a+D}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Dn,A,sn)}lookAt(A,I,g){const C=this.elements;return tg.subVectors(A,I),tg.lengthSq()===0&&(tg.z=1),tg.normalize(),eC.crossVectors(g,tg),eC.lengthSq()===0&&(Math.abs(g.z)===1?tg.x+=1e-4:tg.z+=1e-4,tg.normalize(),eC.crossVectors(g,tg)),eC.normalize(),YQ.crossVectors(tg,eC),C[0]=eC.x,C[4]=YQ.x,C[8]=tg.x,C[1]=eC.y,C[5]=YQ.y,C[9]=tg.y,C[2]=eC.z,C[6]=YQ.z,C[10]=tg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],t=g[12],e=g[1],a=g[5],D=g[9],s=g[13],G=g[2],n=g[6],h=g[10],S=g[14],l=g[3],w=g[7],c=g[11],y=g[15],M=C[0],R=C[4],k=C[8],K=C[12],U=C[1],q=C[5],V=C[9],Y=C[13],H=C[2],p=C[6],_=C[10],z=C[14],T=C[3],BA=C[7],QA=C[11],m=C[15];return Q[0]=E*M+i*U+o*H+t*T,Q[4]=E*R+i*q+o*p+t*BA,Q[8]=E*k+i*V+o*_+t*QA,Q[12]=E*K+i*Y+o*z+t*m,Q[1]=e*M+a*U+D*H+s*T,Q[5]=e*R+a*q+D*p+s*BA,Q[9]=e*k+a*V+D*_+s*QA,Q[13]=e*K+a*Y+D*z+s*m,Q[2]=G*M+n*U+h*H+S*T,Q[6]=G*R+n*q+h*p+S*BA,Q[10]=G*k+n*V+h*_+S*QA,Q[14]=G*K+n*Y+h*z+S*m,Q[3]=l*M+w*U+c*H+y*T,Q[7]=l*R+w*q+c*p+y*BA,Q[11]=l*k+w*V+c*_+y*QA,Q[15]=l*K+w*Y+c*z+y*m,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],t=A[13],e=A[2],a=A[6],D=A[10],s=A[14],G=A[3],n=A[7],h=A[11],S=A[15];return G*(+Q*o*a-C*t*a-Q*i*D+g*t*D+C*i*s-g*o*s)+n*(+I*o*s-I*t*D+Q*E*D-C*E*s+C*t*e-Q*o*e)+h*(+I*t*a-I*i*s-Q*E*a+g*E*s+Q*i*e-g*t*e)+S*(-C*i*e-I*o*a+I*i*D+C*E*a-g*E*D+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=A[9],D=A[10],s=A[11],G=A[12],n=A[13],h=A[14],S=A[15],l=a*h*t-n*D*t+n*o*s-i*h*s-a*o*S+i*D*S,w=G*D*t-e*h*t-G*o*s+E*h*s+e*o*S-E*D*S,c=e*n*t-G*a*t+G*i*s-E*n*s-e*i*S+E*a*S,y=G*a*o-e*n*o-G*i*D+E*n*D+e*i*h-E*a*h,M=I*l+g*w+C*c+Q*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return A[0]=l*R,A[1]=(n*D*Q-a*h*Q-n*C*s+g*h*s+a*C*S-g*D*S)*R,A[2]=(i*h*Q-n*o*Q+n*C*t-g*h*t-i*C*S+g*o*S)*R,A[3]=(a*o*Q-i*D*Q-a*C*t+g*D*t+i*C*s-g*o*s)*R,A[4]=w*R,A[5]=(e*h*Q-G*D*Q+G*C*s-I*h*s-e*C*S+I*D*S)*R,A[6]=(G*o*Q-E*h*Q-G*C*t+I*h*t+E*C*S-I*o*S)*R,A[7]=(E*D*Q-e*o*Q+e*C*t-I*D*t-E*C*s+I*o*s)*R,A[8]=c*R,A[9]=(G*a*Q-e*n*Q-G*g*s+I*n*s+e*g*S-I*a*S)*R,A[10]=(E*n*Q-G*i*Q+G*g*t-I*n*t-E*g*S+I*i*S)*R,A[11]=(e*i*Q-E*a*Q-e*g*t+I*a*t+E*g*s-I*i*s)*R,A[12]=y*R,A[13]=(e*n*C-G*a*C+G*g*D-I*n*D-e*g*h+I*a*h)*R,A[14]=(G*i*C-E*n*C-G*g*o+I*n*o+E*g*h-I*i*h)*R,A[15]=(E*a*C-e*i*C+e*g*o-I*a*o-E*g*D+I*i*D)*R,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,t=Q*E,e=Q*i;return this.set(t*E+g,t*i-C*o,t*o+C*i,0,t*i+C*o,e*i+g,e*o-C*E,0,t*o-C*i,e*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,t=Q+Q,e=E+E,a=i+i,D=Q*t,s=Q*e,G=Q*a,n=E*e,h=E*a,S=i*a,l=o*t,w=o*e,c=o*a,y=g.x,M=g.y,R=g.z;return C[0]=(1-(n+S))*y,C[1]=(s+c)*y,C[2]=(G-w)*y,C[3]=0,C[4]=(s-c)*M,C[5]=(1-(D+S))*M,C[6]=(h+l)*M,C[7]=0,C[8]=(G+w)*R,C[9]=(h-l)*R,C[10]=(1-(D+n))*R,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=gB.set(C[0],C[1],C[2]).length();const E=gB.set(C[4],C[5],C[6]).length(),i=gB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],qg.copy(this);const t=1/Q,e=1/E,a=1/i;return qg.elements[0]*=t,qg.elements[1]*=t,qg.elements[2]*=t,qg.elements[4]*=e,qg.elements[5]*=e,qg.elements[6]*=e,qg.elements[8]*=a,qg.elements[9]*=a,qg.elements[10]*=a,I.setFromRotationMatrix(qg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E){const i=this.elements,o=2*Q/(I-A),t=2*Q/(g-C),e=(I+A)/(I-A),a=(g+C)/(g-C),D=-(E+Q)/(E-Q),s=-2*E*Q/(E-Q);return i[0]=o,i[4]=0,i[8]=e,i[12]=0,i[1]=0,i[5]=t,i[9]=a,i[13]=0,i[2]=0,i[6]=0,i[10]=D,i[14]=s,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(A,I,g,C,Q,E){const i=this.elements,o=1/(I-A),t=1/(g-C),e=1/(E-Q),a=(I+A)*o,D=(g+C)*t,s=(E+Q)*e;return i[0]=2*o,i[4]=0,i[8]=0,i[12]=-a,i[1]=0,i[5]=2*t,i[9]=0,i[13]=-D,i[2]=0,i[6]=0,i[10]=-2*e,i[14]=-s,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const gB=new L,qg=new FI,Dn=new L(0,0,0),sn=new L(1,1,1),eC=new L,YQ=new L,tg=new L,Ht=new FI,mt=new rg;class qB{constructor(A=0,I=0,g=0,C=qB.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],t=C[5],e=C[9],a=C[2],D=C[6],s=C[10];switch(I){case"XYZ":this._y=Math.asin(OI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-e,s),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(D,t),this._z=0);break;case"YXZ":this._x=Math.asin(-OI(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(i,s),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(OI(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(-a,s),this._z=Math.atan2(-E,t)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-OI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(D,s),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,t));break;case"YZX":this._z=Math.asin(OI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,s));break;case"XZY":this._z=Math.asin(-OI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(D,t),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-e,s),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ht.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ht,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return mt.setFromEuler(this),this.setFromQuaternion(mt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qB.DEFAULT_ORDER="XYZ";class no{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let nn=0;const Tt=new L,CB=new rg,_g=new FI,LQ=new L,TB=new L,hn=new L,Gn=new rg,xt=new L(1,0,0),bt=new L(0,1,0),Ot=new L(0,0,1),wn={type:"added"},Zt={type:"removed"};class NI extends WC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=PC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=NI.DEFAULT_UP.clone();const A=new L,I=new qB,g=new rg,C=new L(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new FI},normalMatrix:{value:new Gg}}),this.matrix=new FI,this.matrixWorld=new FI,this.matrixAutoUpdate=NI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=NI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return CB.setFromAxisAngle(A,I),this.quaternion.multiply(CB),this}rotateOnWorldAxis(A,I){return CB.setFromAxisAngle(A,I),this.quaternion.premultiply(CB),this}rotateX(A){return this.rotateOnAxis(xt,A)}rotateY(A){return this.rotateOnAxis(bt,A)}rotateZ(A){return this.rotateOnAxis(Ot,A)}translateOnAxis(A,I){return Tt.copy(A).applyQuaternion(this.quaternion),this.position.add(Tt.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(xt,A)}translateY(A){return this.translateOnAxis(bt,A)}translateZ(A){return this.translateOnAxis(Ot,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(_g.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?LQ.copy(A):LQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),TB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_g.lookAt(TB,LQ,this.up):_g.lookAt(LQ,TB,this.up),this.quaternion.setFromRotationMatrix(_g),C&&(_g.extractRotation(C.matrixWorld),CB.setFromRotationMatrix(_g),this.quaternion.premultiply(CB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(wn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Zt)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(Zt)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),_g.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),_g.multiply(A.parent.matrixWorld)),A.applyMatrix4(_g),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,Q=this.children.length;C<Q;C++){const E=this.children[C].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(TB,A,hn),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(TB,Gn,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,t=this.material.length;o<t;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),t=E(A.textures),e=E(A.images),a=E(A.shapes),D=E(A.skeletons),s=E(A.animations),G=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),D.length>0&&(g.skeletons=D),s.length>0&&(g.animations=s),G.length>0&&(g.nodes=G)}return g.object=C,g;function E(i){const o=[];for(const t in i){const e=i[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}NI.DEFAULT_UP=new L(0,1,0);NI.DEFAULT_MATRIX_AUTO_UPDATE=!0;NI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dg=new L,zg=new L,wi=new L,$g=new L,BB=new L,QB=new L,Wt=new L,ri=new L,Si=new L,ci=new L;class IC{constructor(A=new L,I=new L,g=new L){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),dg.subVectors(A,I),C.cross(dg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){dg.subVectors(C,I),zg.subVectors(g,I),wi.subVectors(A,I);const E=dg.dot(dg),i=dg.dot(zg),o=dg.dot(wi),t=zg.dot(zg),e=zg.dot(wi),a=E*t-i*i;if(a===0)return Q.set(-2,-1,-1);const D=1/a,s=(t*o-i*e)*D,G=(E*e-i*o)*D;return Q.set(1-s-G,G,s)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,$g),$g.x>=0&&$g.y>=0&&$g.x+$g.y<=1}static getUV(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,$g),o.set(0,0),o.addScaledVector(Q,$g.x),o.addScaledVector(E,$g.y),o.addScaledVector(i,$g.z),o}static isFrontFacing(A,I,g,C){return dg.subVectors(g,I),zg.subVectors(A,I),dg.cross(zg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return dg.subVectors(this.c,this.b),zg.subVectors(this.a,this.b),dg.cross(zg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return IC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return IC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,Q){return IC.getUV(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return IC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return IC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;BB.subVectors(C,g),QB.subVectors(Q,g),ri.subVectors(A,g);const o=BB.dot(ri),t=QB.dot(ri);if(o<=0&&t<=0)return I.copy(g);Si.subVectors(A,C);const e=BB.dot(Si),a=QB.dot(Si);if(e>=0&&a<=e)return I.copy(C);const D=o*a-e*t;if(D<=0&&o>=0&&e<=0)return E=o/(o-e),I.copy(g).addScaledVector(BB,E);ci.subVectors(A,Q);const s=BB.dot(ci),G=QB.dot(ci);if(G>=0&&s<=G)return I.copy(Q);const n=s*t-o*G;if(n<=0&&t>=0&&G<=0)return i=t/(t-G),I.copy(g).addScaledVector(QB,i);const h=e*G-s*a;if(h<=0&&a-e>=0&&s-G>=0)return Wt.subVectors(Q,C),i=(a-e)/(a-e+(s-G)),I.copy(C).addScaledVector(Wt,i);const S=1/(h+n+D);return E=n*S,i=D*S,I.copy(g).addScaledVector(BB,E).addScaledVector(QB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let rn=0;class dB extends WC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=PC(),this.name="",this.type="Material",this.blending=SB,this.side=hC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=aa,this.blendDst=Da,this.blendEquation=nB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const C=this[I];if(C===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==SB&&(g.blending=this.blending),this.side!==hC&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class ya extends dB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new aI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const dI=new L,fQ=new hA;class Qg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=pt,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)fQ.fromBufferAttribute(this,I),fQ.applyMatrix3(A),this.setXY(I,fQ.x,fQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)dI.fromBufferAttribute(this,I),dI.applyMatrix3(A),this.setXYZ(I,dI.x,dI.y,dI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)dI.fromBufferAttribute(this,I),dI.applyMatrix4(A),this.setXYZ(I,dI.x,dI.y,dI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)dI.fromBufferAttribute(this,I),dI.applyNormalMatrix(A),this.setXYZ(I,dI.x,dI.y,dI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)dI.fromBufferAttribute(this,I),dI.transformDirection(A),this.setXYZ(I,dI.x,dI.y,dI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=PB(I,this.array)),I}setX(A,I){return this.normalized&&(I=Bg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=PB(I,this.array)),I}setY(A,I){return this.normalized&&(I=Bg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=PB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Bg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=PB(I,this.array)),I}setW(A,I){return this.normalized&&(I=Bg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Bg(I,this.array),g=Bg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=Bg(I,this.array),g=Bg(g,this.array),C=Bg(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=Bg(I,this.array),g=Bg(g,this.array),C=Bg(C,this.array),Q=Bg(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==pt&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ma extends Qg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Ka extends Qg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class fI extends Qg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Sn=0;const Mg=new FI,ki=new NI,EB=new L,eg=new kQ,xB=new kQ,bI=new L;class lg extends WC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=PC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(ra(A)?Ka:Ma)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new Gg().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Mg.makeRotationFromQuaternion(A),this.applyMatrix4(Mg),this}rotateX(A){return Mg.makeRotationX(A),this.applyMatrix4(Mg),this}rotateY(A){return Mg.makeRotationY(A),this.applyMatrix4(Mg),this}rotateZ(A){return Mg.makeRotationZ(A),this.applyMatrix4(Mg),this}translate(A,I,g){return Mg.makeTranslation(A,I,g),this.applyMatrix4(Mg),this}scale(A,I,g){return Mg.makeScale(A,I,g),this.applyMatrix4(Mg),this}lookAt(A){return ki.lookAt(A),ki.updateMatrix(),this.applyMatrix4(ki.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(EB).negate(),this.translate(EB.x,EB.y,EB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new fI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kQ);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];eg.setFromBufferAttribute(Q),this.morphTargetsRelative?(bI.addVectors(this.boundingBox.min,eg.min),this.boundingBox.expandByPoint(bI),bI.addVectors(this.boundingBox.max,eg.max),this.boundingBox.expandByPoint(bI)):(this.boundingBox.expandByPoint(eg.min),this.boundingBox.expandByPoint(eg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new RE);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(A){const g=this.boundingSphere.center;if(eg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];xB.setFromBufferAttribute(i),this.morphTargetsRelative?(bI.addVectors(eg.min,xB.min),eg.expandByPoint(bI),bI.addVectors(eg.max,xB.max),eg.expandByPoint(bI)):(eg.expandByPoint(xB.min),eg.expandByPoint(xB.max))}eg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)bI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(bI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let t=0,e=i.count;t<e;t++)bI.fromBufferAttribute(i,t),o&&(EB.fromBufferAttribute(A,t),bI.add(EB)),C=Math.max(C,g.distanceToSquared(bI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,Q=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qg(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let U=0;U<i;U++)t[U]=new L,e[U]=new L;const a=new L,D=new L,s=new L,G=new hA,n=new hA,h=new hA,S=new L,l=new L;function w(U,q,V){a.fromArray(C,U*3),D.fromArray(C,q*3),s.fromArray(C,V*3),G.fromArray(E,U*2),n.fromArray(E,q*2),h.fromArray(E,V*2),D.sub(a),s.sub(a),n.sub(G),h.sub(G);const Y=1/(n.x*h.y-h.x*n.y);isFinite(Y)&&(S.copy(D).multiplyScalar(h.y).addScaledVector(s,-n.y).multiplyScalar(Y),l.copy(s).multiplyScalar(n.x).addScaledVector(D,-h.x).multiplyScalar(Y),t[U].add(S),t[q].add(S),t[V].add(S),e[U].add(l),e[q].add(l),e[V].add(l))}let c=this.groups;c.length===0&&(c=[{start:0,count:g.length}]);for(let U=0,q=c.length;U<q;++U){const V=c[U],Y=V.start,H=V.count;for(let p=Y,_=Y+H;p<_;p+=3)w(g[p+0],g[p+1],g[p+2])}const y=new L,M=new L,R=new L,k=new L;function K(U){R.fromArray(Q,U*3),k.copy(R);const q=t[U];y.copy(q),y.sub(R.multiplyScalar(R.dot(q))).normalize(),M.crossVectors(k,q);const Y=M.dot(e[U])<0?-1:1;o[U*4]=y.x,o[U*4+1]=y.y,o[U*4+2]=y.z,o[U*4+3]=Y}for(let U=0,q=c.length;U<q;++U){const V=c[U],Y=V.start,H=V.count;for(let p=Y,_=Y+H;p<_;p+=3)K(g[p+0]),K(g[p+1]),K(g[p+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Qg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let D=0,s=g.count;D<s;D++)g.setXYZ(D,0,0,0);const C=new L,Q=new L,E=new L,i=new L,o=new L,t=new L,e=new L,a=new L;if(A)for(let D=0,s=A.count;D<s;D+=3){const G=A.getX(D+0),n=A.getX(D+1),h=A.getX(D+2);C.fromBufferAttribute(I,G),Q.fromBufferAttribute(I,n),E.fromBufferAttribute(I,h),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),i.fromBufferAttribute(g,G),o.fromBufferAttribute(g,n),t.fromBufferAttribute(g,h),i.add(e),o.add(e),t.add(e),g.setXYZ(G,i.x,i.y,i.z),g.setXYZ(n,o.x,o.y,o.z),g.setXYZ(h,t.x,t.y,t.z)}else for(let D=0,s=I.count;D<s;D+=3)C.fromBufferAttribute(I,D+0),Q.fromBufferAttribute(I,D+1),E.fromBufferAttribute(I,D+2),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),g.setXYZ(D+0,e.x,e.y,e.z),g.setXYZ(D+1,e.x,e.y,e.z),g.setXYZ(D+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)bI.fromBufferAttribute(A,I),bI.normalize(),A.setXYZ(I,bI.x,bI.y,bI.z)}toNonIndexed(){function A(i,o){const t=i.array,e=i.itemSize,a=i.normalized,D=new t.constructor(o.length*e);let s=0,G=0;for(let n=0,h=o.length;n<h;n++){i.isInterleavedBufferAttribute?s=o[n]*i.data.stride+i.offset:s=o[n]*e;for(let S=0;S<e;S++)D[G++]=t[s++]}return new Qg(D,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new lg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],t=A(o,g);I.setAttribute(i,t)}const Q=this.morphAttributes;for(const i in Q){const o=[],t=Q[i];for(let e=0,a=t.length;e<a;e++){const D=t[e],s=A(D,g);o.push(s)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const t=E[i];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,D=t.length;a<D;a++){const s=t[a];e.push(s.toJSON(A.data))}e.length>0&&(C[o]=e,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const Q=A.morphAttributes;for(const t in Q){const e=[],a=Q[t];for(let D=0,s=a.length;D<s;D++)e.push(a[D].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let t=0,e=E.length;t<e;t++){const a=E[t];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pt=new FI,iB=new so,li=new RE,bB=new L,OB=new L,ZB=new L,yi=new L,uQ=new L,HQ=new hA,mQ=new hA,TQ=new hA,Mi=new L,xQ=new L;class zI extends NI{constructor(A=new lg,I=new ya){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){uQ.set(0,0,0);for(let o=0,t=Q.length;o<t;o++){const e=i[o],a=Q[o];e!==0&&(yi.fromBufferAttribute(a,A),E?uQ.addScaledVector(yi,e):uQ.addScaledVector(yi.sub(I),e))}I.add(uQ)}return this.isSkinnedMesh&&this.boneTransform(A,I),I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;if(C===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),li.copy(g.boundingSphere),li.applyMatrix4(Q),A.ray.intersectsSphere(li)===!1)||(Pt.copy(Q).invert(),iB.copy(A.ray).applyMatrix4(Pt),g.boundingBox!==null&&iB.intersectsBox(g.boundingBox)===!1))return;let E;const i=g.index,o=g.attributes.position,t=g.attributes.uv,e=g.attributes.uv2,a=g.groups,D=g.drawRange;if(i!==null)if(Array.isArray(C))for(let s=0,G=a.length;s<G;s++){const n=a[s],h=C[n.materialIndex],S=Math.max(n.start,D.start),l=Math.min(i.count,Math.min(n.start+n.count,D.start+D.count));for(let w=S,c=l;w<c;w+=3){const y=i.getX(w),M=i.getX(w+1),R=i.getX(w+2);E=bQ(this,h,A,iB,t,e,y,M,R),E&&(E.faceIndex=Math.floor(w/3),E.face.materialIndex=n.materialIndex,I.push(E))}}else{const s=Math.max(0,D.start),G=Math.min(i.count,D.start+D.count);for(let n=s,h=G;n<h;n+=3){const S=i.getX(n),l=i.getX(n+1),w=i.getX(n+2);E=bQ(this,C,A,iB,t,e,S,l,w),E&&(E.faceIndex=Math.floor(n/3),I.push(E))}}else if(o!==void 0)if(Array.isArray(C))for(let s=0,G=a.length;s<G;s++){const n=a[s],h=C[n.materialIndex],S=Math.max(n.start,D.start),l=Math.min(o.count,Math.min(n.start+n.count,D.start+D.count));for(let w=S,c=l;w<c;w+=3){const y=w,M=w+1,R=w+2;E=bQ(this,h,A,iB,t,e,y,M,R),E&&(E.faceIndex=Math.floor(w/3),E.face.materialIndex=n.materialIndex,I.push(E))}}else{const s=Math.max(0,D.start),G=Math.min(o.count,D.start+D.count);for(let n=s,h=G;n<h;n+=3){const S=n,l=n+1,w=n+2;E=bQ(this,C,A,iB,t,e,S,l,w),E&&(E.faceIndex=Math.floor(n/3),I.push(E))}}}}function cn(B,A,I,g,C,Q,E,i){let o;if(A.side===wg?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===hC,i),o===null)return null;xQ.copy(i),xQ.applyMatrix4(B.matrixWorld);const t=I.ray.origin.distanceTo(xQ);return t<I.near||t>I.far?null:{distance:t,point:xQ.clone(),object:B}}function bQ(B,A,I,g,C,Q,E,i,o){B.getVertexPosition(E,bB),B.getVertexPosition(i,OB),B.getVertexPosition(o,ZB);const t=cn(B,A,I,g,bB,OB,ZB,Mi);if(t){C&&(HQ.fromBufferAttribute(C,E),mQ.fromBufferAttribute(C,i),TQ.fromBufferAttribute(C,o),t.uv=IC.getUV(Mi,bB,OB,ZB,HQ,mQ,TQ,new hA)),Q&&(HQ.fromBufferAttribute(Q,E),mQ.fromBufferAttribute(Q,i),TQ.fromBufferAttribute(Q,o),t.uv2=IC.getUV(Mi,bB,OB,ZB,HQ,mQ,TQ,new hA));const e={a:E,b:i,c:o,normal:new L,materialIndex:0};IC.getNormal(bB,OB,ZB,e.normal),t.face=e}return t}class lQ extends lg{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],t=[],e=[],a=[];let D=0,s=0;G("z","y","x",-1,-1,g,I,A,E,Q,0),G("z","y","x",1,-1,g,I,-A,E,Q,1),G("x","z","y",1,1,A,g,I,C,E,2),G("x","z","y",1,-1,A,g,-I,C,E,3),G("x","y","z",1,-1,A,I,g,C,Q,4),G("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new fI(t,3)),this.setAttribute("normal",new fI(e,3)),this.setAttribute("uv",new fI(a,2));function G(n,h,S,l,w,c,y,M,R,k,K){const U=c/R,q=y/k,V=c/2,Y=y/2,H=M/2,p=R+1,_=k+1;let z=0,T=0;const BA=new L;for(let QA=0;QA<_;QA++){const m=QA*q-Y;for(let j=0;j<p;j++){const IA=j*U-V;BA[n]=IA*l,BA[h]=m*w,BA[S]=H,t.push(BA.x,BA.y,BA.z),BA[n]=0,BA[h]=0,BA[S]=M>0?1:-1,e.push(BA.x,BA.y,BA.z),a.push(j/R),a.push(1-QA/k),z+=1}}for(let QA=0;QA<k;QA++)for(let m=0;m<R;m++){const j=D+m+p*QA,IA=D+m+p*(QA+1),eA=D+(m+1)+p*(QA+1),DA=D+(m+1)+p*QA;o.push(j,IA,DA),o.push(IA,eA,DA),T+=6}i.addGroup(s,T,K),s+=T,D+=z}}static fromJSON(A){return new lQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function NB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function XI(B){const A={};for(let I=0;I<B.length;I++){const g=NB(B[I]);for(const C in g)A[C]=g[C]}return A}function kn(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function Ua(B){return B.getRenderTarget()===null&&B.outputEncoding===sI?fg:iQ}const Na={clone:NB,merge:XI};var ln=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bg extends dB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ln,this.fragmentShader=yn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=NB(A.uniforms),this.uniformsGroups=kn(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class ho extends NI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new FI,this.projectionMatrix=new FI,this.projectionMatrixInverse=new FI}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dg extends ho{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=eE*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan($B*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return eE*2*Math.atan(Math.tan($B*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan($B*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,t=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/t,C*=E.width/o,g*=E.height/t}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const oB=-90,tB=1;class Mn extends NI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new Dg(oB,tB,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const Q=new Dg(oB,tB,A,I);Q.layers=this.layers,Q.up.set(0,1,0),Q.lookAt(-1,0,0),this.add(Q);const E=new Dg(oB,tB,A,I);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(0,1,0),this.add(E);const i=new Dg(oB,tB,A,I);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const o=new Dg(oB,tB,A,I);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const t=new Dg(oB,tB,A,I);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,-1),this.add(t)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,Q,E,i,o,t]=this.children,e=A.getRenderTarget(),a=A.toneMapping,D=A.xr.enabled;A.toneMapping=xg,A.xr.enabled=!1;const s=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,Q),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=s,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(e),A.toneMapping=a,A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class qE extends $I{constructor(A,I,g,C,Q,E,i,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:HC,super(A,I,g,C,Q,E,i,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Kn extends GC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new qE(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:JI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new lQ(5,5,5),Q=new bg({name:"CubemapFromEquirect",uniforms:NB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:wg,blending:DC});Q.uniforms.tEquirect.value=I;const E=new zI(C,Q),i=I.minFilter;return I.minFilter===KB&&(I.minFilter=JI),new Mn(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const Ki=new L,Un=new L,Nn=new Gg;class FC{constructor(A=new L(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Ki.subVectors(g,I).cross(Un.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(Ki),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(g).multiplyScalar(Q).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Nn.getNormalMatrix(A),C=this.coplanarPoint(Ki).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const eB=new RE,OQ=new L;class Go{constructor(A=new FC,I=new FC,g=new FC,C=new FC,Q=new FC,E=new FC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],Q=g[1],E=g[2],i=g[3],o=g[4],t=g[5],e=g[6],a=g[7],D=g[8],s=g[9],G=g[10],n=g[11],h=g[12],S=g[13],l=g[14],w=g[15];return I[0].setComponents(i-C,a-o,n-D,w-h).normalize(),I[1].setComponents(i+C,a+o,n+D,w+h).normalize(),I[2].setComponents(i+Q,a+t,n+s,w+S).normalize(),I[3].setComponents(i-Q,a-t,n-s,w-S).normalize(),I[4].setComponents(i-E,a-e,n-G,w-l).normalize(),I[5].setComponents(i+E,a+e,n+G,w+l).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),eB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(eB)}intersectsSprite(A){return eB.center.set(0,0,0),eB.radius=.7071067811865476,eB.applyMatrix4(A.matrixWorld),this.intersectsSphere(eB)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(OQ.x=C.normal.x>0?A.max.x:A.min.x,OQ.y=C.normal.y>0?A.max.y:A.min.y,OQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(OQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ja(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Jn(B,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,D=t.usage,s=B.createBuffer();B.bindBuffer(e,s),B.bufferData(e,a,D),t.onUploadCallback();let G;if(a instanceof Float32Array)G=5126;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)G=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else G=5123;else if(a instanceof Int16Array)G=5122;else if(a instanceof Uint32Array)G=5125;else if(a instanceof Int32Array)G=5124;else if(a instanceof Int8Array)G=5120;else if(a instanceof Uint8Array)G=5121;else if(a instanceof Uint8ClampedArray)G=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:s,type:G,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version}}function Q(t,e,a){const D=e.array,s=e.updateRange;B.bindBuffer(a,t),s.count===-1?B.bufferSubData(a,0,D):(I?B.bufferSubData(a,s.offset*D.BYTES_PER_ELEMENT,D,s.offset,s.count):B.bufferSubData(a,s.offset*D.BYTES_PER_ELEMENT,D.subarray(s.offset,s.offset+s.count)),s.count=-1),e.onUploadCallback()}function E(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function i(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(B.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const D=g.get(t);(!D||D.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);a===void 0?g.set(t,C(t,e)):a.version<t.version&&(Q(a.buffer,t,e),a.version=t.version)}return{get:E,remove:i,update:o}}class dE extends lg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),t=i+1,e=o+1,a=A/i,D=I/o,s=[],G=[],n=[],h=[];for(let S=0;S<e;S++){const l=S*D-E;for(let w=0;w<t;w++){const c=w*a-Q;G.push(c,-l,0),n.push(0,0,1),h.push(w/i),h.push(1-S/o)}}for(let S=0;S<o;S++)for(let l=0;l<i;l++){const w=l+t*S,c=l+t*(S+1),y=l+1+t*(S+1),M=l+1+t*S;s.push(w,c,M),s.push(c,y,M)}this.setIndex(s),this.setAttribute("position",new fI(G,3)),this.setAttribute("normal",new fI(n,3)),this.setAttribute("uv",new fI(h,2))}static fromJSON(A){return new dE(A.width,A.height,A.widthSegments,A.heightSegments)}}var Fn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rn=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qn=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dn=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ln="vec3 transformed = vec3( position );",fn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,un=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Hn=`#ifdef USE_IRIDESCENCE
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
#endif`,mn=`#ifdef USE_BUMPMAP
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
#endif`,Tn=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,On=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zn=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vn=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jn=`#define PI 3.141592653589793
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
}`,Vn=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xn=`vec3 transformedNormal = objectNormal;
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
#endif`,_n=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$n=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",gh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,Eh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dh=`#ifdef USE_GRADIENTMAP
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
}`,sh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,rh=`#if defined( USE_ENVMAP )
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
#endif`,Sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yh=`PhysicalMaterial material;
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
#endif`,Mh=`struct PhysicalMaterial {
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
}`,Kh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ph=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
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
#endif`,Th=`#ifdef USE_MORPHTARGETS
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
#endif`,xh=`#ifdef USE_MORPHTARGETS
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
#endif`,bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Oh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ph=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vh=`#ifdef USE_NORMALMAP
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
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tG=`float getShadowMask() {
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
}`,eG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aG=`#ifdef USE_SKINNING
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
#endif`,DG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sG=`#ifdef USE_SKINNING
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
#endif`,nG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wG=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rG=`#ifdef USE_TRANSMISSION
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
#endif`,SG=`#ifdef USE_TRANSMISSION
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
#endif`,cG=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kG=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lG=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,yG=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,MG=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,KG=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,UG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JG=`uniform sampler2D t2D;
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
}`,FG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pG=`#include <common>
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
}`,YG=`#if DEPTH_PACKING == 3200
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
}`,LG=`#define DISTANCE
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
}`,fG=`#define DISTANCE
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
}`,uG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mG=`uniform float scale;
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
}`,TG=`uniform vec3 diffuse;
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
}`,xG=`#include <common>
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
}`,bG=`uniform vec3 diffuse;
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
}`,OG=`#define LAMBERT
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
}`,ZG=`#define LAMBERT
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
}`,WG=`#define MATCAP
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
}`,PG=`#define MATCAP
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
}`,vG=`#define NORMAL
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
}`,jG=`#define NORMAL
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
}`,VG=`#define PHONG
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
}`,XG=`#define PHONG
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
}`,_G=`#define STANDARD
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
}`,zG=`#define STANDARD
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
}`,$G=`#define TOON
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
}`,Aw=`#define TOON
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
}`,Iw=`uniform float size;
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
}`,gw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Bw=`uniform vec3 color;
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
}`,Qw=`uniform float rotation;
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
}`,Ew=`uniform vec3 diffuse;
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
}`,bA={alphamap_fragment:Fn,alphamap_pars_fragment:Rn,alphatest_fragment:qn,alphatest_pars_fragment:dn,aomap_fragment:pn,aomap_pars_fragment:Yn,begin_vertex:Ln,beginnormal_vertex:fn,bsdfs:un,iridescence_fragment:Hn,bumpmap_pars_fragment:mn,clipping_planes_fragment:Tn,clipping_planes_pars_fragment:xn,clipping_planes_pars_vertex:bn,clipping_planes_vertex:On,color_fragment:Zn,color_pars_fragment:Wn,color_pars_vertex:Pn,color_vertex:vn,common:jn,cube_uv_reflection_fragment:Vn,defaultnormal_vertex:Xn,displacementmap_pars_vertex:_n,displacementmap_vertex:zn,emissivemap_fragment:$n,emissivemap_pars_fragment:Ah,encodings_fragment:Ih,encodings_pars_fragment:gh,envmap_fragment:Ch,envmap_common_pars_fragment:Bh,envmap_pars_fragment:Qh,envmap_pars_vertex:Eh,envmap_physical_pars_fragment:rh,envmap_vertex:ih,fog_vertex:oh,fog_pars_vertex:th,fog_fragment:eh,fog_pars_fragment:ah,gradientmap_pars_fragment:Dh,lightmap_fragment:sh,lightmap_pars_fragment:nh,lights_lambert_fragment:hh,lights_lambert_pars_fragment:Gh,lights_pars_begin:wh,lights_toon_fragment:Sh,lights_toon_pars_fragment:ch,lights_phong_fragment:kh,lights_phong_pars_fragment:lh,lights_physical_fragment:yh,lights_physical_pars_fragment:Mh,lights_fragment_begin:Kh,lights_fragment_maps:Uh,lights_fragment_end:Nh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Rh,logdepthbuf_vertex:qh,map_fragment:dh,map_pars_fragment:ph,map_particle_fragment:Yh,map_particle_pars_fragment:Lh,metalnessmap_fragment:fh,metalnessmap_pars_fragment:uh,morphcolor_vertex:Hh,morphnormal_vertex:mh,morphtarget_pars_vertex:Th,morphtarget_vertex:xh,normal_fragment_begin:bh,normal_fragment_maps:Oh,normal_pars_fragment:Zh,normal_pars_vertex:Wh,normal_vertex:Ph,normalmap_pars_fragment:vh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Vh,clearcoat_pars_fragment:Xh,iridescence_pars_fragment:_h,output_fragment:zh,packing:$h,premultiplied_alpha_fragment:AG,project_vertex:IG,dithering_fragment:gG,dithering_pars_fragment:CG,roughnessmap_fragment:BG,roughnessmap_pars_fragment:QG,shadowmap_pars_fragment:EG,shadowmap_pars_vertex:iG,shadowmap_vertex:oG,shadowmask_pars_fragment:tG,skinbase_vertex:eG,skinning_pars_vertex:aG,skinning_vertex:DG,skinnormal_vertex:sG,specularmap_fragment:nG,specularmap_pars_fragment:hG,tonemapping_fragment:GG,tonemapping_pars_fragment:wG,transmission_fragment:rG,transmission_pars_fragment:SG,uv_pars_fragment:cG,uv_pars_vertex:kG,uv_vertex:lG,uv2_pars_fragment:yG,uv2_pars_vertex:MG,uv2_vertex:KG,worldpos_vertex:UG,background_vert:NG,background_frag:JG,backgroundCube_vert:FG,backgroundCube_frag:RG,cube_vert:qG,cube_frag:dG,depth_vert:pG,depth_frag:YG,distanceRGBA_vert:LG,distanceRGBA_frag:fG,equirect_vert:uG,equirect_frag:HG,linedashed_vert:mG,linedashed_frag:TG,meshbasic_vert:xG,meshbasic_frag:bG,meshlambert_vert:OG,meshlambert_frag:ZG,meshmatcap_vert:WG,meshmatcap_frag:PG,meshnormal_vert:vG,meshnormal_frag:jG,meshphong_vert:VG,meshphong_frag:XG,meshphysical_vert:_G,meshphysical_frag:zG,meshtoon_vert:$G,meshtoon_frag:Aw,points_vert:Iw,points_frag:gw,shadow_vert:Cw,shadow_frag:Bw,sprite_vert:Qw,sprite_frag:Ew},rA={common:{diffuse:{value:new aI(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Gg},uv2Transform:{value:new Gg},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new hA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new aI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new aI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gg}},sprite:{diffuse:{value:new aI(16777215)},opacity:{value:1},center:{value:new hA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Gg}}},ug={basic:{uniforms:XI([rA.common,rA.specularmap,rA.envmap,rA.aomap,rA.lightmap,rA.fog]),vertexShader:bA.meshbasic_vert,fragmentShader:bA.meshbasic_frag},lambert:{uniforms:XI([rA.common,rA.specularmap,rA.envmap,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.fog,rA.lights,{emissive:{value:new aI(0)}}]),vertexShader:bA.meshlambert_vert,fragmentShader:bA.meshlambert_frag},phong:{uniforms:XI([rA.common,rA.specularmap,rA.envmap,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.fog,rA.lights,{emissive:{value:new aI(0)},specular:{value:new aI(1118481)},shininess:{value:30}}]),vertexShader:bA.meshphong_vert,fragmentShader:bA.meshphong_frag},standard:{uniforms:XI([rA.common,rA.envmap,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.roughnessmap,rA.metalnessmap,rA.fog,rA.lights,{emissive:{value:new aI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag},toon:{uniforms:XI([rA.common,rA.aomap,rA.lightmap,rA.emissivemap,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.gradientmap,rA.fog,rA.lights,{emissive:{value:new aI(0)}}]),vertexShader:bA.meshtoon_vert,fragmentShader:bA.meshtoon_frag},matcap:{uniforms:XI([rA.common,rA.bumpmap,rA.normalmap,rA.displacementmap,rA.fog,{matcap:{value:null}}]),vertexShader:bA.meshmatcap_vert,fragmentShader:bA.meshmatcap_frag},points:{uniforms:XI([rA.points,rA.fog]),vertexShader:bA.points_vert,fragmentShader:bA.points_frag},dashed:{uniforms:XI([rA.common,rA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bA.linedashed_vert,fragmentShader:bA.linedashed_frag},depth:{uniforms:XI([rA.common,rA.displacementmap]),vertexShader:bA.depth_vert,fragmentShader:bA.depth_frag},normal:{uniforms:XI([rA.common,rA.bumpmap,rA.normalmap,rA.displacementmap,{opacity:{value:1}}]),vertexShader:bA.meshnormal_vert,fragmentShader:bA.meshnormal_frag},sprite:{uniforms:XI([rA.sprite,rA.fog]),vertexShader:bA.sprite_vert,fragmentShader:bA.sprite_frag},background:{uniforms:{uvTransform:{value:new Gg},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bA.background_vert,fragmentShader:bA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bA.backgroundCube_vert,fragmentShader:bA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bA.cube_vert,fragmentShader:bA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bA.equirect_vert,fragmentShader:bA.equirect_frag},distanceRGBA:{uniforms:XI([rA.common,rA.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bA.distanceRGBA_vert,fragmentShader:bA.distanceRGBA_frag},shadow:{uniforms:XI([rA.lights,rA.fog,{color:{value:new aI(0)},opacity:{value:1}}]),vertexShader:bA.shadow_vert,fragmentShader:bA.shadow_frag}};ug.physical={uniforms:XI([ug.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new hA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new aI(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new hA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new aI(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new aI(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag};const ZQ={r:0,b:0,g:0};function iw(B,A,I,g,C,Q,E){const i=new aI(0);let o=Q===!0?0:1,t,e,a=null,D=0,s=null;function G(h,S){let l=!1,w=S.isScene===!0?S.background:null;w&&w.isTexture&&(w=(S.backgroundBlurriness>0?I:A).get(w));const c=B.xr,y=c.getSession&&c.getSession();y&&y.environmentBlendMode==="additive"&&(w=null),w===null?n(i,o):w&&w.isColor&&(n(w,1),l=!0),(B.autoClear||l)&&B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil),w&&(w.isCubeTexture||w.mapping===FE)?(e===void 0&&(e=new zI(new lQ(1,1,1),new bg({name:"BackgroundCubeMaterial",uniforms:NB(ug.backgroundCube.uniforms),vertexShader:ug.backgroundCube.vertexShader,fragmentShader:ug.backgroundCube.fragmentShader,side:wg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(M,R,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=w,e.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,e.material.toneMapped=w.encoding!==sI,(a!==w||D!==w.version||s!==B.toneMapping)&&(e.material.needsUpdate=!0,a=w,D=w.version,s=B.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null)):w&&w.isTexture&&(t===void 0&&(t=new zI(new dE(2,2),new bg({name:"BackgroundMaterial",uniforms:NB(ug.background.uniforms),vertexShader:ug.background.vertexShader,fragmentShader:ug.background.fragmentShader,side:hC,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=w,t.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,t.material.toneMapped=w.encoding!==sI,w.matrixAutoUpdate===!0&&w.updateMatrix(),t.material.uniforms.uvTransform.value.copy(w.matrix),(a!==w||D!==w.version||s!==B.toneMapping)&&(t.material.needsUpdate=!0,a=w,D=w.version,s=B.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null))}function n(h,S){h.getRGB(ZQ,Ua(B)),g.buffers.color.setClear(ZQ.r,ZQ.g,ZQ.b,S,E)}return{getClearColor:function(){return i},setClearColor:function(h,S=1){i.set(h),o=S,n(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,n(i,o)},render:G}}function ow(B,A,I,g){const C=B.getParameter(34921),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||Q!==null,i={},o=h(null);let t=o,e=!1;function a(H,p,_,z,T){let BA=!1;if(E){const QA=n(z,_,p);t!==QA&&(t=QA,s(t.object)),BA=S(H,z,_,T),BA&&l(H,z,_,T)}else{const QA=p.wireframe===!0;(t.geometry!==z.id||t.program!==_.id||t.wireframe!==QA)&&(t.geometry=z.id,t.program=_.id,t.wireframe=QA,BA=!0)}T!==null&&I.update(T,34963),(BA||e)&&(e=!1,k(H,p,_,z),T!==null&&B.bindBuffer(34963,I.get(T).buffer))}function D(){return g.isWebGL2?B.createVertexArray():Q.createVertexArrayOES()}function s(H){return g.isWebGL2?B.bindVertexArray(H):Q.bindVertexArrayOES(H)}function G(H){return g.isWebGL2?B.deleteVertexArray(H):Q.deleteVertexArrayOES(H)}function n(H,p,_){const z=_.wireframe===!0;let T=i[H.id];T===void 0&&(T={},i[H.id]=T);let BA=T[p.id];BA===void 0&&(BA={},T[p.id]=BA);let QA=BA[z];return QA===void 0&&(QA=h(D()),BA[z]=QA),QA}function h(H){const p=[],_=[],z=[];for(let T=0;T<C;T++)p[T]=0,_[T]=0,z[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:_,attributeDivisors:z,object:H,attributes:{},index:null}}function S(H,p,_,z){const T=t.attributes,BA=p.attributes;let QA=0;const m=_.getAttributes();for(const j in m)if(m[j].location>=0){const eA=T[j];let DA=BA[j];if(DA===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(DA=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(DA=H.instanceColor)),eA===void 0||eA.attribute!==DA||DA&&eA.data!==DA.data)return!0;QA++}return t.attributesNum!==QA||t.index!==z}function l(H,p,_,z){const T={},BA=p.attributes;let QA=0;const m=_.getAttributes();for(const j in m)if(m[j].location>=0){let eA=BA[j];eA===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(eA=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(eA=H.instanceColor));const DA={};DA.attribute=eA,eA&&eA.data&&(DA.data=eA.data),T[j]=DA,QA++}t.attributes=T,t.attributesNum=QA,t.index=z}function w(){const H=t.newAttributes;for(let p=0,_=H.length;p<_;p++)H[p]=0}function c(H){y(H,0)}function y(H,p){const _=t.newAttributes,z=t.enabledAttributes,T=t.attributeDivisors;_[H]=1,z[H]===0&&(B.enableVertexAttribArray(H),z[H]=1),T[H]!==p&&((g.isWebGL2?B:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,p),T[H]=p)}function M(){const H=t.newAttributes,p=t.enabledAttributes;for(let _=0,z=p.length;_<z;_++)p[_]!==H[_]&&(B.disableVertexAttribArray(_),p[_]=0)}function R(H,p,_,z,T,BA){g.isWebGL2===!0&&(_===5124||_===5125)?B.vertexAttribIPointer(H,p,_,T,BA):B.vertexAttribPointer(H,p,_,z,T,BA)}function k(H,p,_,z){if(g.isWebGL2===!1&&(H.isInstancedMesh||z.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;w();const T=z.attributes,BA=_.getAttributes(),QA=p.defaultAttributeValues;for(const m in BA){const j=BA[m];if(j.location>=0){let IA=T[m];if(IA===void 0&&(m==="instanceMatrix"&&H.instanceMatrix&&(IA=H.instanceMatrix),m==="instanceColor"&&H.instanceColor&&(IA=H.instanceColor)),IA!==void 0){const eA=IA.normalized,DA=IA.itemSize,u=I.get(IA);if(u===void 0)continue;const tA=u.buffer,KA=u.type,UA=u.bytesPerElement;if(IA.isInterleavedBufferAttribute){const GA=IA.data,xA=GA.stride,v=IA.offset;if(GA.isInstancedInterleavedBuffer){for(let gA=0;gA<j.locationSize;gA++)y(j.location+gA,GA.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=GA.meshPerAttribute*GA.count)}else for(let gA=0;gA<j.locationSize;gA++)c(j.location+gA);B.bindBuffer(34962,tA);for(let gA=0;gA<j.locationSize;gA++)R(j.location+gA,DA/j.locationSize,KA,eA,xA*UA,(v+DA/j.locationSize*gA)*UA)}else{if(IA.isInstancedBufferAttribute){for(let GA=0;GA<j.locationSize;GA++)y(j.location+GA,IA.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=IA.meshPerAttribute*IA.count)}else for(let GA=0;GA<j.locationSize;GA++)c(j.location+GA);B.bindBuffer(34962,tA);for(let GA=0;GA<j.locationSize;GA++)R(j.location+GA,DA/j.locationSize,KA,eA,DA*UA,DA/j.locationSize*GA*UA)}}else if(QA!==void 0){const eA=QA[m];if(eA!==void 0)switch(eA.length){case 2:B.vertexAttrib2fv(j.location,eA);break;case 3:B.vertexAttrib3fv(j.location,eA);break;case 4:B.vertexAttrib4fv(j.location,eA);break;default:B.vertexAttrib1fv(j.location,eA)}}}}M()}function K(){V();for(const H in i){const p=i[H];for(const _ in p){const z=p[_];for(const T in z)G(z[T].object),delete z[T];delete p[_]}delete i[H]}}function U(H){if(i[H.id]===void 0)return;const p=i[H.id];for(const _ in p){const z=p[_];for(const T in z)G(z[T].object),delete z[T];delete p[_]}delete i[H.id]}function q(H){for(const p in i){const _=i[p];if(_[H.id]===void 0)continue;const z=_[H.id];for(const T in z)G(z[T].object),delete z[T];delete _[H.id]}}function V(){Y(),e=!0,t!==o&&(t=o,s(t.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:V,resetDefaultState:Y,dispose:K,releaseStatesOfGeometry:U,releaseStatesOfProgram:q,initAttributes:w,enableAttribute:c,disableUnusedAttributes:M}}function tw(B,A,I,g){const C=g.isWebGL2;let Q;function E(t){Q=t}function i(t,e){B.drawArrays(Q,t,e),I.update(e,Q,1)}function o(t,e,a){if(a===0)return;let D,s;if(C)D=B,s="drawArraysInstanced";else if(D=A.get("ANGLE_instanced_arrays"),s="drawArraysInstancedANGLE",D===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[s](Q,t,e,a),I.update(e,Q,a)}this.setMode=E,this.render=i,this.renderInstances=o}function ew(B,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const R=A.get("EXT_texture_filter_anisotropic");g=B.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(R){if(R==="highp"){if(B.getShaderPrecisionFormat(35633,36338).precision>0&&B.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&B.getShaderPrecisionFormat(35633,36337).precision>0&&B.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&B instanceof WebGL2RenderingContext;let i=I.precision!==void 0?I.precision:"highp";const o=Q(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const t=E||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=B.getParameter(34930),D=B.getParameter(35660),s=B.getParameter(3379),G=B.getParameter(34076),n=B.getParameter(34921),h=B.getParameter(36347),S=B.getParameter(36348),l=B.getParameter(36349),w=D>0,c=E||A.has("OES_texture_float"),y=w&&c,M=E?B.getParameter(36183):0;return{isWebGL2:E,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:Q,precision:i,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:D,maxTextureSize:s,maxCubemapSize:G,maxAttributes:n,maxVertexUniforms:h,maxVaryings:S,maxFragmentUniforms:l,vertexTextures:w,floatFragmentTextures:c,floatVertexTextures:y,maxSamples:M}}function aw(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new FC,i=new Gg,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,D){const s=a.length!==0||D||g!==0||C;return C=D,g=a.length,s},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,D){I=e(a,D,0)},this.setState=function(a,D,s){const G=a.clippingPlanes,n=a.clipIntersection,h=a.clipShadows,S=B.get(a);if(!C||G===null||G.length===0||Q&&!h)Q?e(null):t();else{const l=Q?0:g,w=l*4;let c=S.clippingState||null;o.value=c,c=e(G,D,w,s);for(let y=0;y!==w;++y)c[y]=I[y];S.clippingState=c,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=l}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,D,s,G){const n=a!==null?a.length:0;let h=null;if(n!==0){if(h=o.value,G!==!0||h===null){const S=s+n*4,l=D.matrixWorldInverse;i.getNormalMatrix(l),(h===null||h.length<S)&&(h=new Float32Array(S));for(let w=0,c=s;w!==n;++w,c+=4)E.copy(a[w]).applyMatrix4(l,i),E.normal.toArray(h,c),h[c+3]=E.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=n,A.numIntersection=0,h}}function Dw(B){let A=new WeakMap;function I(E,i){return i===tE?E.mapping=HC:i===Oi&&(E.mapping=MB),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===tE||i===Oi)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const t=new Kn(o.height/2);return t.fromEquirectangularTexture(B,E),A.set(E,t),E.addEventListener("dispose",C),I(t.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class Fa extends ho{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=t*this.view.offsetX,E=Q+t*this.view.width,i-=e*this.view.offsetY,o=i-e*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const GB=4,vt=[.125,.215,.35,.446,.526,.582],qC=20,Ui=new Fa,jt=new aI;let Ni=null;const RC=(1+Math.sqrt(5))/2,aB=1/RC,Vt=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,RC,aB),new L(0,RC,-aB),new L(aB,0,RC),new L(-aB,0,RC),new L(RC,aB,0),new L(-RC,aB,0)];class Xt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){Ni=this._renderer.getRenderTarget(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$t(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Ni),A.scissorTest=!1,WQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===HC||A.mapping===MB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Ni=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:JI,minFilter:JI,generateMipmaps:!1,type:Yg,format:pg,encoding:Fg,depthBuffer:!1},C=_t(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_t(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sw(Q)),this._blurMaterial=nw(Q,A,I)}return C}_compileMaterial(A){const I=new zI(this._lodPlanes[0],A);this._renderer.compile(I,Ui)}_sceneToCubeUV(A,I,g,C){const i=new Dg(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,D=e.toneMapping;e.getClearColor(jt),e.toneMapping=xg,e.autoClear=!1;const s=new ya({name:"PMREM.Background",side:wg,depthWrite:!1,depthTest:!1}),G=new zI(new lQ,s);let n=!1;const h=A.background;h?h.isColor&&(s.color.copy(h),A.background=null,n=!0):(s.color.copy(jt),n=!0);for(let S=0;S<6;S++){const l=S%3;l===0?(i.up.set(0,o[S],0),i.lookAt(t[S],0,0)):l===1?(i.up.set(0,0,o[S]),i.lookAt(0,t[S],0)):(i.up.set(0,o[S],0),i.lookAt(0,0,t[S]));const w=this._cubeSize;WQ(C,l*w,S>2?w:0,w,w),e.setRenderTarget(C),n&&e.render(G,i),e.render(A,i)}G.geometry.dispose(),G.material.dispose(),e.toneMapping=D,e.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===HC||A.mapping===MB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=$t()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zt());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new zI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;WQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,Ui)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const Q=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=Vt[(C-1)%Vt.length];this._blur(A,C-1,C,Q,E)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,t=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new zI(this._lodPlanes[C],t),D=t.uniforms,s=this._sizeLods[g]-1,G=isFinite(Q)?Math.PI/(2*s):2*Math.PI/(2*qC-1),n=Q/G,h=isFinite(Q)?1+Math.floor(e*n):qC;h>qC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${qC}`);const S=[];let l=0;for(let R=0;R<qC;++R){const k=R/n,K=Math.exp(-k*k/2);S.push(K),R===0?l+=K:R<h&&(l+=2*K)}for(let R=0;R<S.length;R++)S[R]=S[R]/l;D.envMap.value=A.texture,D.samples.value=h,D.weights.value=S,D.latitudinal.value=E==="latitudinal",i&&(D.poleAxis.value=i);const{_lodMax:w}=this;D.dTheta.value=G,D.mipInt.value=w-g;const c=this._sizeLods[C],y=3*c*(C>w-GB?C-w+GB:0),M=4*(this._cubeSize-c);WQ(I,y,M,3*c,2*c),o.setRenderTarget(I),o.render(a,Ui)}}function sw(B){const A=[],I=[],g=[];let C=B;const Q=B-GB+1+vt.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-GB?o=vt[E-B+GB-1]:E===0&&(o=0),g.push(o);const t=1/(i-2),e=-t,a=1+t,D=[e,e,a,e,a,a,e,e,a,a,e,a],s=6,G=6,n=3,h=2,S=1,l=new Float32Array(n*G*s),w=new Float32Array(h*G*s),c=new Float32Array(S*G*s);for(let M=0;M<s;M++){const R=M%3*2/3-1,k=M>2?0:-1,K=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];l.set(K,n*G*M),w.set(D,h*G*M);const U=[M,M,M,M,M,M];c.set(U,S*G*M)}const y=new lg;y.setAttribute("position",new Qg(l,n)),y.setAttribute("uv",new Qg(w,h)),y.setAttribute("faceIndex",new Qg(c,S)),A.push(y),C>GB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function _t(B,A,I){const g=new GC(B,A,I);return g.texture.mapping=FE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function WQ(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function nw(B,A,I){const g=new Float32Array(qC),C=new L(0,1,0);return new bg({name:"SphericalGaussianBlur",defines:{n:qC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:wo(),fragmentShader:`

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
		`,blending:DC,depthTest:!1,depthWrite:!1})}function zt(){return new bg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:DC,depthTest:!1,depthWrite:!1})}function $t(){return new bg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:DC,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function hw(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,t=o===tE||o===Oi,e=o===HC||o===MB;if(t||e)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new Xt(B)),a=t?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new Xt(B));const D=t?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,D),i.addEventListener("dispose",Q),D.texture}else return null}}}return i}function C(i){let o=0;const t=6;for(let e=0;e<t;e++)i[e]!==void 0&&o++;return o===t}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function Gw(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function ww(B,A,I,g){const C={},Q=new WeakMap;function E(a){const D=a.target;D.index!==null&&A.remove(D.index);for(const G in D.attributes)A.remove(D.attributes[G]);D.removeEventListener("dispose",E),delete C[D.id];const s=Q.get(D);s&&(A.remove(s),Q.delete(D)),g.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0&&delete D._maxInstanceCount,I.memory.geometries--}function i(a,D){return C[D.id]===!0||(D.addEventListener("dispose",E),C[D.id]=!0,I.memory.geometries++),D}function o(a){const D=a.attributes;for(const G in D)A.update(D[G],34962);const s=a.morphAttributes;for(const G in s){const n=s[G];for(let h=0,S=n.length;h<S;h++)A.update(n[h],34962)}}function t(a){const D=[],s=a.index,G=a.attributes.position;let n=0;if(s!==null){const l=s.array;n=s.version;for(let w=0,c=l.length;w<c;w+=3){const y=l[w+0],M=l[w+1],R=l[w+2];D.push(y,M,M,R,R,y)}}else{const l=G.array;n=G.version;for(let w=0,c=l.length/3-1;w<c;w+=3){const y=w+0,M=w+1,R=w+2;D.push(y,M,M,R,R,y)}}const h=new(ra(D)?Ka:Ma)(D,1);h.version=n;const S=Q.get(a);S&&A.remove(S),Q.set(a,h)}function e(a){const D=Q.get(a);if(D){const s=a.index;s!==null&&D.version<s.version&&t(a)}else t(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:e}}function rw(B,A,I,g){const C=g.isWebGL2;let Q;function E(D){Q=D}let i,o;function t(D){i=D.type,o=D.bytesPerElement}function e(D,s){B.drawElements(Q,s,i,D*o),I.update(s,Q,1)}function a(D,s,G){if(G===0)return;let n,h;if(C)n=B,h="drawElementsInstanced";else if(n=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",n===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[h](Q,s,i,D*o,G),I.update(s,Q,G)}this.setMode=E,this.setIndex=t,this.render=e,this.renderInstances=a}function Sw(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case 4:I.triangles+=i*(Q/3);break;case 1:I.lines+=i*(Q/2);break;case 3:I.lines+=i*(Q-1);break;case 2:I.lines+=i*Q;break;case 0:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function cw(B,A){return B[0]-A[0]}function kw(B,A){return Math.abs(A[1])-Math.abs(B[1])}function lw(B,A,I){const g={},C=new Float32Array(8),Q=new WeakMap,E=new WI,i=[];for(let t=0;t<8;t++)i[t]=[t,0];function o(t,e,a,D){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const n=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,h=n!==void 0?n.length:0;let S=Q.get(e);if(S===void 0||S.count!==h){let _=function(){H.dispose(),Q.delete(e),e.removeEventListener("dispose",_)};var G=_;S!==void 0&&S.texture.dispose();const c=e.morphAttributes.position!==void 0,y=e.morphAttributes.normal!==void 0,M=e.morphAttributes.color!==void 0,R=e.morphAttributes.position||[],k=e.morphAttributes.normal||[],K=e.morphAttributes.color||[];let U=0;c===!0&&(U=1),y===!0&&(U=2),M===!0&&(U=3);let q=e.attributes.position.count*U,V=1;q>A.maxTextureSize&&(V=Math.ceil(q/A.maxTextureSize),q=A.maxTextureSize);const Y=new Float32Array(q*V*4*h),H=new la(Y,q,V,h);H.type=Ng,H.needsUpdate=!0;const p=U*4;for(let z=0;z<h;z++){const T=R[z],BA=k[z],QA=K[z],m=q*V*4*z;for(let j=0;j<T.count;j++){const IA=j*p;c===!0&&(E.fromBufferAttribute(T,j),Y[m+IA+0]=E.x,Y[m+IA+1]=E.y,Y[m+IA+2]=E.z,Y[m+IA+3]=0),y===!0&&(E.fromBufferAttribute(BA,j),Y[m+IA+4]=E.x,Y[m+IA+5]=E.y,Y[m+IA+6]=E.z,Y[m+IA+7]=0),M===!0&&(E.fromBufferAttribute(QA,j),Y[m+IA+8]=E.x,Y[m+IA+9]=E.y,Y[m+IA+10]=E.z,Y[m+IA+11]=QA.itemSize===4?E.w:1)}}S={count:h,texture:H,size:new hA(q,V)},Q.set(e,S),e.addEventListener("dispose",_)}let l=0;for(let c=0;c<s.length;c++)l+=s[c];const w=e.morphTargetsRelative?1:1-l;D.getUniforms().setValue(B,"morphTargetBaseInfluence",w),D.getUniforms().setValue(B,"morphTargetInfluences",s),D.getUniforms().setValue(B,"morphTargetsTexture",S.texture,I),D.getUniforms().setValue(B,"morphTargetsTextureSize",S.size)}else{const n=s===void 0?0:s.length;let h=g[e.id];if(h===void 0||h.length!==n){h=[];for(let y=0;y<n;y++)h[y]=[y,0];g[e.id]=h}for(let y=0;y<n;y++){const M=h[y];M[0]=y,M[1]=s[y]}h.sort(kw);for(let y=0;y<8;y++)y<n&&h[y][1]?(i[y][0]=h[y][0],i[y][1]=h[y][1]):(i[y][0]=Number.MAX_SAFE_INTEGER,i[y][1]=0);i.sort(cw);const S=e.morphAttributes.position,l=e.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const M=i[y],R=M[0],k=M[1];R!==Number.MAX_SAFE_INTEGER&&k?(S&&e.getAttribute("morphTarget"+y)!==S[R]&&e.setAttribute("morphTarget"+y,S[R]),l&&e.getAttribute("morphNormal"+y)!==l[R]&&e.setAttribute("morphNormal"+y,l[R]),C[y]=k,w+=k):(S&&e.hasAttribute("morphTarget"+y)===!0&&e.deleteAttribute("morphTarget"+y),l&&e.hasAttribute("morphNormal"+y)===!0&&e.deleteAttribute("morphNormal"+y),C[y]=0)}const c=e.morphTargetsRelative?1:1-w;D.getUniforms().setValue(B,"morphTargetBaseInfluence",c),D.getUniforms().setValue(B,"morphTargetInfluences",C)}}return{update:o}}function yw(B,A,I,g){let C=new WeakMap;function Q(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);return C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),I.update(o.instanceMatrix,34962),o.instanceColor!==null&&I.update(o.instanceColor,34962)),a}function E(){C=new WeakMap}function i(o){const t=o.target;t.removeEventListener("dispose",i),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:Q,dispose:E}}const Ra=new $I,qa=new la,da=new en,pa=new qE,Ae=[],Ie=[],ge=new Float32Array(16),Ce=new Float32Array(9),Be=new Float32Array(4);function pB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=Ae[C];if(Q===void 0&&(Q=new Float32Array(C),Ae[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function uI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function HI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function pE(B,A){let I=Ie[A];I===void 0&&(I=new Int32Array(A),Ie[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function Mw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function Kw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(uI(I,A))return;B.uniform2fv(this.addr,A),HI(I,A)}}function Uw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(uI(I,A))return;B.uniform3fv(this.addr,A),HI(I,A)}}function Nw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(uI(I,A))return;B.uniform4fv(this.addr,A),HI(I,A)}}function Jw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(uI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),HI(I,A)}else{if(uI(I,g))return;Be.set(g),B.uniformMatrix2fv(this.addr,!1,Be),HI(I,g)}}function Fw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(uI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),HI(I,A)}else{if(uI(I,g))return;Ce.set(g),B.uniformMatrix3fv(this.addr,!1,Ce),HI(I,g)}}function Rw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(uI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),HI(I,A)}else{if(uI(I,g))return;ge.set(g),B.uniformMatrix4fv(this.addr,!1,ge),HI(I,g)}}function qw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function dw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(uI(I,A))return;B.uniform2iv(this.addr,A),HI(I,A)}}function pw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(uI(I,A))return;B.uniform3iv(this.addr,A),HI(I,A)}}function Yw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(uI(I,A))return;B.uniform4iv(this.addr,A),HI(I,A)}}function Lw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function fw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(uI(I,A))return;B.uniform2uiv(this.addr,A),HI(I,A)}}function uw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(uI(I,A))return;B.uniform3uiv(this.addr,A),HI(I,A)}}function Hw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(uI(I,A))return;B.uniform4uiv(this.addr,A),HI(I,A)}}function mw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||Ra,C)}function Tw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||da,C)}function xw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||pa,C)}function bw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||qa,C)}function Ow(B){switch(B){case 5126:return Mw;case 35664:return Kw;case 35665:return Uw;case 35666:return Nw;case 35674:return Jw;case 35675:return Fw;case 35676:return Rw;case 5124:case 35670:return qw;case 35667:case 35671:return dw;case 35668:case 35672:return pw;case 35669:case 35673:return Yw;case 5125:return Lw;case 36294:return fw;case 36295:return uw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return bw}}function Zw(B,A){B.uniform1fv(this.addr,A)}function Ww(B,A){const I=pB(A,this.size,2);B.uniform2fv(this.addr,I)}function Pw(B,A){const I=pB(A,this.size,3);B.uniform3fv(this.addr,I)}function vw(B,A){const I=pB(A,this.size,4);B.uniform4fv(this.addr,I)}function jw(B,A){const I=pB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function Vw(B,A){const I=pB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function Xw(B,A){const I=pB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function _w(B,A){B.uniform1iv(this.addr,A)}function zw(B,A){B.uniform2iv(this.addr,A)}function $w(B,A){B.uniform3iv(this.addr,A)}function Ar(B,A){B.uniform4iv(this.addr,A)}function Ir(B,A){B.uniform1uiv(this.addr,A)}function gr(B,A){B.uniform2uiv(this.addr,A)}function Cr(B,A){B.uniform3uiv(this.addr,A)}function Br(B,A){B.uniform4uiv(this.addr,A)}function Qr(B,A,I){const g=this.cache,C=A.length,Q=pE(I,C);uI(g,Q)||(B.uniform1iv(this.addr,Q),HI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||Ra,Q[E])}function Er(B,A,I){const g=this.cache,C=A.length,Q=pE(I,C);uI(g,Q)||(B.uniform1iv(this.addr,Q),HI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||da,Q[E])}function ir(B,A,I){const g=this.cache,C=A.length,Q=pE(I,C);uI(g,Q)||(B.uniform1iv(this.addr,Q),HI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||pa,Q[E])}function or(B,A,I){const g=this.cache,C=A.length,Q=pE(I,C);uI(g,Q)||(B.uniform1iv(this.addr,Q),HI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||qa,Q[E])}function tr(B){switch(B){case 5126:return Zw;case 35664:return Ww;case 35665:return Pw;case 35666:return vw;case 35674:return jw;case 35675:return Vw;case 35676:return Xw;case 5124:case 35670:return _w;case 35667:case 35671:return zw;case 35668:case 35672:return $w;case 35669:case 35673:return Ar;case 5125:return Ir;case 36294:return gr;case 36295:return Cr;case 36296:return Br;case 35678:case 36198:case 36298:case 36306:case 35682:return Qr;case 35679:case 36299:case 36307:return Er;case 35680:case 36300:case 36308:case 36293:return ir;case 36289:case 36303:case 36311:case 36292:return or}}class er{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=Ow(I.type)}}class ar{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=tr(I.type)}}class Dr{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const Ji=/(\w+)(\])?(\[|\.)?/g;function Qe(B,A){B.seq.push(A),B.map[A.id]=A}function sr(B,A,I){const g=B.name,C=g.length;for(Ji.lastIndex=0;;){const Q=Ji.exec(g),E=Ji.lastIndex;let i=Q[1];const o=Q[2]==="]",t=Q[3];if(o&&(i=i|0),t===void 0||t==="["&&E+2===C){Qe(I,t===void 0?new er(i,B,A):new ar(i,B,A));break}else{let a=I.map[i];a===void 0&&(a=new Dr(i),Qe(I,a)),I=a}}}class gE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,35718);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);sr(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function Ee(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}let nr=0;function hr(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function Gr(B){switch(B){case Fg:return["Linear","( value )"];case sI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",B),["Linear","( value )"]}}function ie(B,A,I){const g=B.getShaderParameter(A,35713),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+hr(B.getShaderSource(A),E)}else return C}function wr(B,A){const I=Gr(A);return"vec4 "+B+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function rr(B,A){let I;switch(A){case Ms:I="Linear";break;case Ks:I="Reinhard";break;case Us:I="OptimizedCineon";break;case na:I="ACESFilmic";break;case Ns:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Sr(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.tangentSpaceNormalMap||B.clearcoatNormalMap||B.flatShading||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vB).join(`
`)}function cr(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function kr(B,A){const I={},g=B.getProgramParameter(A,35721);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===35674&&(i=2),Q.type===35675&&(i=3),Q.type===35676&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function vB(B){return B!==""}function oe(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function te(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const lr=/^[ \t]*#include +<([\w\d./]+)>/gm;function ji(B){return B.replace(lr,yr)}function yr(B,A){const I=bA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return ji(I)}const Mr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ee(B){return B.replace(Mr,Kr)}function Kr(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function ae(B){let A="precision "+B.precision+` float;
precision `+B.precision+" int;";return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Ur(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===ta?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===ea?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===WB&&(A="SHADOWMAP_TYPE_VSM"),A}function Nr(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case HC:case MB:A="ENVMAP_TYPE_CUBE";break;case FE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Jr(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case MB:A="ENVMAP_MODE_REFRACTION";break}return A}function Fr(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case sa:A="ENVMAP_BLENDING_MULTIPLY";break;case ls:A="ENVMAP_BLENDING_MIX";break;case ys:A="ENVMAP_BLENDING_ADD";break}return A}function Rr(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function qr(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Ur(I),t=Nr(I),e=Jr(I),a=Fr(I),D=Rr(I),s=I.isWebGL2?"":Sr(I),G=cr(Q),n=C.createProgram();let h,S,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=[G].filter(vB).join(`
`),h.length>0&&(h+=`
`),S=[s,G].filter(vB).join(`
`),S.length>0&&(S+=`
`)):(h=[ae(I),"#define SHADER_NAME "+I.shaderName,G,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vB).join(`
`),S=[s,ae(I),"#define SHADER_NAME "+I.shaderName,G,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==xg?"#define TONE_MAPPING":"",I.toneMapping!==xg?bA.tonemapping_pars_fragment:"",I.toneMapping!==xg?rr("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",bA.encodings_pars_fragment,wr("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(vB).join(`
`)),E=ji(E),E=oe(E,I),E=te(E,I),i=ji(i),i=oe(i,I),i=te(i,I),E=ee(E),i=ee(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["#define varying in",I.glslVersion===Yt?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Yt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=l+h+E,c=l+S+i,y=Ee(C,35633,w),M=Ee(C,35632,c);if(C.attachShader(n,y),C.attachShader(n,M),I.index0AttributeName!==void 0?C.bindAttribLocation(n,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(n,0,"position"),C.linkProgram(n),B.debug.checkShaderErrors){const K=C.getProgramInfoLog(n).trim(),U=C.getShaderInfoLog(y).trim(),q=C.getShaderInfoLog(M).trim();let V=!0,Y=!0;if(C.getProgramParameter(n,35714)===!1){V=!1;const H=ie(C,y,"vertex"),p=ie(C,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(n,35715)+`

Program Info Log: `+K+`
`+H+`
`+p)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(U===""||q==="")&&(Y=!1);Y&&(this.diagnostics={runnable:V,programLog:K,vertexShader:{log:U,prefix:h},fragmentShader:{log:q,prefix:S}})}C.deleteShader(y),C.deleteShader(M);let R;this.getUniforms=function(){return R===void 0&&(R=new gE(C,n)),R};let k;return this.getAttributes=function(){return k===void 0&&(k=kr(C,n)),k},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(n),this.program=void 0},this.name=I.shaderName,this.id=nr++,this.cacheKey=A,this.usedTimes=1,this.program=n,this.vertexShader=y,this.fragmentShader=M,this}let dr=0;class pr{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Yr(A),I.set(A,g)),g}}class Yr{constructor(A){this.id=dr++,this.code=A,this.usedTimes=0}}function Lr(B,A,I,g,C,Q,E){const i=new no,o=new pr,t=[],e=C.isWebGL2,a=C.logarithmicDepthBuffer,D=C.vertexTextures;let s=C.precision;const G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function n(k,K,U,q,V){const Y=q.fog,H=V.geometry,p=k.isMeshStandardMaterial?q.environment:null,_=(k.isMeshStandardMaterial?I:A).get(k.envMap||p),z=_&&_.mapping===FE?_.image.height:null,T=G[k.type];k.precision!==null&&(s=C.getMaxPrecision(k.precision),s!==k.precision&&console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",s,"instead."));const BA=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,QA=BA!==void 0?BA.length:0;let m=0;H.morphAttributes.position!==void 0&&(m=1),H.morphAttributes.normal!==void 0&&(m=2),H.morphAttributes.color!==void 0&&(m=3);let j,IA,eA,DA;if(T){const xA=ug[T];j=xA.vertexShader,IA=xA.fragmentShader}else j=k.vertexShader,IA=k.fragmentShader,o.update(k),eA=o.getVertexShaderID(k),DA=o.getFragmentShaderID(k);const u=B.getRenderTarget(),tA=k.alphaTest>0,KA=k.clearcoat>0,UA=k.iridescence>0;return{isWebGL2:e,shaderID:T,shaderName:k.type,vertexShader:j,fragmentShader:IA,defines:k.defines,customVertexShaderID:eA,customFragmentShaderID:DA,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:s,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:D,outputEncoding:u===null?B.outputEncoding:u.isXRRenderTarget===!0?u.texture.encoding:Fg,map:!!k.map,matcap:!!k.matcap,envMap:!!_,envMapMode:_&&_.mapping,envMapCubeUVHeight:z,lightMap:!!k.lightMap,aoMap:!!k.aoMap,emissiveMap:!!k.emissiveMap,bumpMap:!!k.bumpMap,normalMap:!!k.normalMap,objectSpaceNormalMap:k.normalMapType===Ps,tangentSpaceNormalMap:k.normalMapType===wa,decodeVideoTexture:!!k.map&&k.map.isVideoTexture===!0&&k.map.encoding===sI,clearcoat:KA,clearcoatMap:KA&&!!k.clearcoatMap,clearcoatRoughnessMap:KA&&!!k.clearcoatRoughnessMap,clearcoatNormalMap:KA&&!!k.clearcoatNormalMap,iridescence:UA,iridescenceMap:UA&&!!k.iridescenceMap,iridescenceThicknessMap:UA&&!!k.iridescenceThicknessMap,displacementMap:!!k.displacementMap,roughnessMap:!!k.roughnessMap,metalnessMap:!!k.metalnessMap,specularMap:!!k.specularMap,specularIntensityMap:!!k.specularIntensityMap,specularColorMap:!!k.specularColorMap,opaque:k.transparent===!1&&k.blending===SB,alphaMap:!!k.alphaMap,alphaTest:tA,gradientMap:!!k.gradientMap,sheen:k.sheen>0,sheenColorMap:!!k.sheenColorMap,sheenRoughnessMap:!!k.sheenRoughnessMap,transmission:k.transmission>0,transmissionMap:!!k.transmissionMap,thicknessMap:!!k.thicknessMap,combine:k.combine,vertexTangents:!!k.normalMap&&!!H.attributes.tangent,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs:!!k.map||!!k.bumpMap||!!k.normalMap||!!k.specularMap||!!k.alphaMap||!!k.emissiveMap||!!k.roughnessMap||!!k.metalnessMap||!!k.clearcoatMap||!!k.clearcoatRoughnessMap||!!k.clearcoatNormalMap||!!k.iridescenceMap||!!k.iridescenceThicknessMap||!!k.displacementMap||!!k.transmissionMap||!!k.thicknessMap||!!k.specularIntensityMap||!!k.specularColorMap||!!k.sheenColorMap||!!k.sheenRoughnessMap,uvsVertexOnly:!(k.map||k.bumpMap||k.normalMap||k.specularMap||k.alphaMap||k.emissiveMap||k.roughnessMap||k.metalnessMap||k.clearcoatNormalMap||k.iridescenceMap||k.iridescenceThicknessMap||k.transmission>0||k.transmissionMap||k.thicknessMap||k.specularIntensityMap||k.specularColorMap||k.sheen>0||k.sheenColorMap||k.sheenRoughnessMap)&&!!k.displacementMap,fog:!!Y,useFog:k.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!k.flatShading,sizeAttenuation:k.sizeAttenuation,logarithmicDepthBuffer:a,skinning:V.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:QA,morphTextureStride:m,numDirLights:K.directional.length,numPointLights:K.point.length,numSpotLights:K.spot.length,numSpotLightMaps:K.spotLightMap.length,numRectAreaLights:K.rectArea.length,numHemiLights:K.hemi.length,numDirLightShadows:K.directionalShadowMap.length,numPointLightShadows:K.pointShadowMap.length,numSpotLightShadows:K.spotShadowMap.length,numSpotLightShadowsWithMaps:K.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:k.dithering,shadowMapEnabled:B.shadowMap.enabled&&U.length>0,shadowMapType:B.shadowMap.type,toneMapping:k.toneMapped?B.toneMapping:xg,physicallyCorrectLights:B.physicallyCorrectLights,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===CC,flipSided:k.side===wg,useDepthPacking:!!k.depthPacking,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionDerivatives:k.extensions&&k.extensions.derivatives,extensionFragDepth:k.extensions&&k.extensions.fragDepth,extensionDrawBuffers:k.extensions&&k.extensions.drawBuffers,extensionShaderTextureLOD:k.extensions&&k.extensions.shaderTextureLOD,rendererExtensionFragDepth:e||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:e||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:e||g.has("EXT_shader_texture_lod"),customProgramCacheKey:k.customProgramCacheKey()}}function h(k){const K=[];if(k.shaderID?K.push(k.shaderID):(K.push(k.customVertexShaderID),K.push(k.customFragmentShaderID)),k.defines!==void 0)for(const U in k.defines)K.push(U),K.push(k.defines[U]);return k.isRawShaderMaterial===!1&&(S(K,k),l(K,k),K.push(B.outputEncoding)),K.push(k.customProgramCacheKey),K.join()}function S(k,K){k.push(K.precision),k.push(K.outputEncoding),k.push(K.envMapMode),k.push(K.envMapCubeUVHeight),k.push(K.combine),k.push(K.vertexUvs),k.push(K.fogExp2),k.push(K.sizeAttenuation),k.push(K.morphTargetsCount),k.push(K.morphAttributeCount),k.push(K.numDirLights),k.push(K.numPointLights),k.push(K.numSpotLights),k.push(K.numSpotLightMaps),k.push(K.numHemiLights),k.push(K.numRectAreaLights),k.push(K.numDirLightShadows),k.push(K.numPointLightShadows),k.push(K.numSpotLightShadows),k.push(K.numSpotLightShadowsWithMaps),k.push(K.shadowMapType),k.push(K.toneMapping),k.push(K.numClippingPlanes),k.push(K.numClipIntersection),k.push(K.depthPacking)}function l(k,K){i.disableAll(),K.isWebGL2&&i.enable(0),K.supportsVertexTextures&&i.enable(1),K.instancing&&i.enable(2),K.instancingColor&&i.enable(3),K.map&&i.enable(4),K.matcap&&i.enable(5),K.envMap&&i.enable(6),K.lightMap&&i.enable(7),K.aoMap&&i.enable(8),K.emissiveMap&&i.enable(9),K.bumpMap&&i.enable(10),K.normalMap&&i.enable(11),K.objectSpaceNormalMap&&i.enable(12),K.tangentSpaceNormalMap&&i.enable(13),K.clearcoat&&i.enable(14),K.clearcoatMap&&i.enable(15),K.clearcoatRoughnessMap&&i.enable(16),K.clearcoatNormalMap&&i.enable(17),K.iridescence&&i.enable(18),K.iridescenceMap&&i.enable(19),K.iridescenceThicknessMap&&i.enable(20),K.displacementMap&&i.enable(21),K.specularMap&&i.enable(22),K.roughnessMap&&i.enable(23),K.metalnessMap&&i.enable(24),K.gradientMap&&i.enable(25),K.alphaMap&&i.enable(26),K.alphaTest&&i.enable(27),K.vertexColors&&i.enable(28),K.vertexAlphas&&i.enable(29),K.vertexUvs&&i.enable(30),K.vertexTangents&&i.enable(31),K.uvsVertexOnly&&i.enable(32),k.push(i.mask),i.disableAll(),K.fog&&i.enable(0),K.useFog&&i.enable(1),K.flatShading&&i.enable(2),K.logarithmicDepthBuffer&&i.enable(3),K.skinning&&i.enable(4),K.morphTargets&&i.enable(5),K.morphNormals&&i.enable(6),K.morphColors&&i.enable(7),K.premultipliedAlpha&&i.enable(8),K.shadowMapEnabled&&i.enable(9),K.physicallyCorrectLights&&i.enable(10),K.doubleSided&&i.enable(11),K.flipSided&&i.enable(12),K.useDepthPacking&&i.enable(13),K.dithering&&i.enable(14),K.specularIntensityMap&&i.enable(15),K.specularColorMap&&i.enable(16),K.transmission&&i.enable(17),K.transmissionMap&&i.enable(18),K.thicknessMap&&i.enable(19),K.sheen&&i.enable(20),K.sheenColorMap&&i.enable(21),K.sheenRoughnessMap&&i.enable(22),K.decodeVideoTexture&&i.enable(23),K.opaque&&i.enable(24),k.push(i.mask)}function w(k){const K=G[k.type];let U;if(K){const q=ug[K];U=Na.clone(q.uniforms)}else U=k.uniforms;return U}function c(k,K){let U;for(let q=0,V=t.length;q<V;q++){const Y=t[q];if(Y.cacheKey===K){U=Y,++U.usedTimes;break}}return U===void 0&&(U=new qr(B,K,k,Q),t.push(U)),U}function y(k){if(--k.usedTimes===0){const K=t.indexOf(k);t[K]=t[t.length-1],t.pop(),k.destroy()}}function M(k){o.remove(k)}function R(){o.dispose()}return{getParameters:n,getProgramCacheKey:h,getUniforms:w,acquireProgram:c,releaseProgram:y,releaseShaderCache:M,programs:t,dispose:R}}function fr(){let B=new WeakMap;function A(Q){let E=B.get(Q);return E===void 0&&(E={},B.set(Q,E)),E}function I(Q){B.delete(Q)}function g(Q,E,i){B.get(Q)[E]=i}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function ur(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function De(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function se(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,D,s,G,n,h){let S=B[A];return S===void 0?(S={id:a.id,object:a,geometry:D,material:s,groupOrder:G,renderOrder:a.renderOrder,z:n,group:h},B[A]=S):(S.id=a.id,S.object=a,S.geometry=D,S.material=s,S.groupOrder=G,S.renderOrder=a.renderOrder,S.z=n,S.group=h),A++,S}function i(a,D,s,G,n,h){const S=E(a,D,s,G,n,h);s.transmission>0?g.push(S):s.transparent===!0?C.push(S):I.push(S)}function o(a,D,s,G,n,h){const S=E(a,D,s,G,n,h);s.transmission>0?g.unshift(S):s.transparent===!0?C.unshift(S):I.unshift(S)}function t(a,D){I.length>1&&I.sort(a||ur),g.length>1&&g.sort(D||De),C.length>1&&C.sort(D||De)}function e(){for(let a=A,D=B.length;a<D;a++){const s=B[a];if(s.id===null)break;s.id=null,s.object=null,s.geometry=null,s.material=null,s.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:e,sort:t}}function Hr(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new se,B.set(g,[E])):C>=Q.length?(E=new se,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function mr(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new L,color:new aI};break;case"SpotLight":I={position:new L,direction:new L,color:new aI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new L,color:new aI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new L,skyColor:new aI,groundColor:new aI};break;case"RectAreaLight":I={color:new aI,position:new L,halfWidth:new L,halfHeight:new L};break}return B[A.id]=I,I}}}function Tr(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new hA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new hA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new hA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let xr=0;function br(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Or(B,A){const I=new mr,g=Tr(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)C.probe.push(new L);const Q=new L,E=new FI,i=new FI;function o(e,a){let D=0,s=0,G=0;for(let q=0;q<9;q++)C.probe[q].set(0,0,0);let n=0,h=0,S=0,l=0,w=0,c=0,y=0,M=0,R=0,k=0;e.sort(br);const K=a!==!0?Math.PI:1;for(let q=0,V=e.length;q<V;q++){const Y=e[q],H=Y.color,p=Y.intensity,_=Y.distance,z=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)D+=H.r*p*K,s+=H.g*p*K,G+=H.b*p*K;else if(Y.isLightProbe)for(let T=0;T<9;T++)C.probe[T].addScaledVector(Y.sh.coefficients[T],p);else if(Y.isDirectionalLight){const T=I.get(Y);if(T.color.copy(Y.color).multiplyScalar(Y.intensity*K),Y.castShadow){const BA=Y.shadow,QA=g.get(Y);QA.shadowBias=BA.bias,QA.shadowNormalBias=BA.normalBias,QA.shadowRadius=BA.radius,QA.shadowMapSize=BA.mapSize,C.directionalShadow[n]=QA,C.directionalShadowMap[n]=z,C.directionalShadowMatrix[n]=Y.shadow.matrix,c++}C.directional[n]=T,n++}else if(Y.isSpotLight){const T=I.get(Y);T.position.setFromMatrixPosition(Y.matrixWorld),T.color.copy(H).multiplyScalar(p*K),T.distance=_,T.coneCos=Math.cos(Y.angle),T.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),T.decay=Y.decay,C.spot[S]=T;const BA=Y.shadow;if(Y.map&&(C.spotLightMap[R]=Y.map,R++,BA.updateMatrices(Y),Y.castShadow&&k++),C.spotLightMatrix[S]=BA.matrix,Y.castShadow){const QA=g.get(Y);QA.shadowBias=BA.bias,QA.shadowNormalBias=BA.normalBias,QA.shadowRadius=BA.radius,QA.shadowMapSize=BA.mapSize,C.spotShadow[S]=QA,C.spotShadowMap[S]=z,M++}S++}else if(Y.isRectAreaLight){const T=I.get(Y);T.color.copy(H).multiplyScalar(p),T.halfWidth.set(Y.width*.5,0,0),T.halfHeight.set(0,Y.height*.5,0),C.rectArea[l]=T,l++}else if(Y.isPointLight){const T=I.get(Y);if(T.color.copy(Y.color).multiplyScalar(Y.intensity*K),T.distance=Y.distance,T.decay=Y.decay,Y.castShadow){const BA=Y.shadow,QA=g.get(Y);QA.shadowBias=BA.bias,QA.shadowNormalBias=BA.normalBias,QA.shadowRadius=BA.radius,QA.shadowMapSize=BA.mapSize,QA.shadowCameraNear=BA.camera.near,QA.shadowCameraFar=BA.camera.far,C.pointShadow[h]=QA,C.pointShadowMap[h]=z,C.pointShadowMatrix[h]=Y.shadow.matrix,y++}C.point[h]=T,h++}else if(Y.isHemisphereLight){const T=I.get(Y);T.skyColor.copy(Y.color).multiplyScalar(p*K),T.groundColor.copy(Y.groundColor).multiplyScalar(p*K),C.hemi[w]=T,w++}}l>0&&(A.isWebGL2||B.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=rA.LTC_FLOAT_1,C.rectAreaLTC2=rA.LTC_FLOAT_2):B.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=rA.LTC_HALF_1,C.rectAreaLTC2=rA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=D,C.ambient[1]=s,C.ambient[2]=G;const U=C.hash;(U.directionalLength!==n||U.pointLength!==h||U.spotLength!==S||U.rectAreaLength!==l||U.hemiLength!==w||U.numDirectionalShadows!==c||U.numPointShadows!==y||U.numSpotShadows!==M||U.numSpotMaps!==R)&&(C.directional.length=n,C.spot.length=S,C.rectArea.length=l,C.point.length=h,C.hemi.length=w,C.directionalShadow.length=c,C.directionalShadowMap.length=c,C.pointShadow.length=y,C.pointShadowMap.length=y,C.spotShadow.length=M,C.spotShadowMap.length=M,C.directionalShadowMatrix.length=c,C.pointShadowMatrix.length=y,C.spotLightMatrix.length=M+R-k,C.spotLightMap.length=R,C.numSpotLightShadowsWithMaps=k,U.directionalLength=n,U.pointLength=h,U.spotLength=S,U.rectAreaLength=l,U.hemiLength=w,U.numDirectionalShadows=c,U.numPointShadows=y,U.numSpotShadows=M,U.numSpotMaps=R,C.version=xr++)}function t(e,a){let D=0,s=0,G=0,n=0,h=0;const S=a.matrixWorldInverse;for(let l=0,w=e.length;l<w;l++){const c=e[l];if(c.isDirectionalLight){const y=C.directional[D];y.direction.setFromMatrixPosition(c.matrixWorld),Q.setFromMatrixPosition(c.target.matrixWorld),y.direction.sub(Q),y.direction.transformDirection(S),D++}else if(c.isSpotLight){const y=C.spot[G];y.position.setFromMatrixPosition(c.matrixWorld),y.position.applyMatrix4(S),y.direction.setFromMatrixPosition(c.matrixWorld),Q.setFromMatrixPosition(c.target.matrixWorld),y.direction.sub(Q),y.direction.transformDirection(S),G++}else if(c.isRectAreaLight){const y=C.rectArea[n];y.position.setFromMatrixPosition(c.matrixWorld),y.position.applyMatrix4(S),i.identity(),E.copy(c.matrixWorld),E.premultiply(S),i.extractRotation(E),y.halfWidth.set(c.width*.5,0,0),y.halfHeight.set(0,c.height*.5,0),y.halfWidth.applyMatrix4(i),y.halfHeight.applyMatrix4(i),n++}else if(c.isPointLight){const y=C.point[s];y.position.setFromMatrixPosition(c.matrixWorld),y.position.applyMatrix4(S),s++}else if(c.isHemisphereLight){const y=C.hemi[h];y.direction.setFromMatrixPosition(c.matrixWorld),y.direction.transformDirection(S),h++}}}return{setup:o,setupView:t,state:C}}function ne(B,A){const I=new Or(B,A),g=[],C=[];function Q(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:Q,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:E,pushShadow:i}}function Zr(B,A){let I=new WeakMap;function g(Q,E=0){const i=I.get(Q);let o;return i===void 0?(o=new ne(B,A),I.set(Q,[o])):E>=i.length?(o=new ne(B,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class Wr extends dB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Pr extends dB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const vr=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jr=`uniform sampler2D shadow_pass;
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
}`;function Vr(B,A,I){let g=new Go;const C=new hA,Q=new hA,E=new WI,i=new Wr({depthPacking:Ws}),o=new Pr,t={},e=I.maxTextureSize,a={[hC]:wg,[wg]:hC,[CC]:CC},D=new bg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new hA},radius:{value:4}},vertexShader:vr,fragmentShader:jr}),s=D.clone();s.defines.HORIZONTAL_PASS=1;const G=new lg;G.setAttribute("position",new Qg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const n=new zI(G,D),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta,this.render=function(c,y,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||c.length===0)return;const R=B.getRenderTarget(),k=B.getActiveCubeFace(),K=B.getActiveMipmapLevel(),U=B.state;U.setBlending(DC),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let q=0,V=c.length;q<V;q++){const Y=c[q],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;C.copy(H.mapSize);const p=H.getFrameExtents();if(C.multiply(p),Q.copy(H.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(Q.x=Math.floor(e/p.x),C.x=Q.x*p.x,H.mapSize.x=Q.x),C.y>e&&(Q.y=Math.floor(e/p.y),C.y=Q.y*p.y,H.mapSize.y=Q.y)),H.map===null){const z=this.type!==WB?{minFilter:ZI,magFilter:ZI}:{};H.map=new GC(C.x,C.y,z),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}B.setRenderTarget(H.map),B.clear();const _=H.getViewportCount();for(let z=0;z<_;z++){const T=H.getViewport(z);E.set(Q.x*T.x,Q.y*T.y,Q.x*T.z,Q.y*T.w),U.viewport(E),H.updateMatrices(Y,z),g=H.getFrustum(),w(y,M,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===WB&&S(H,M),H.needsUpdate=!1}h.needsUpdate=!1,B.setRenderTarget(R,k,K)};function S(c,y){const M=A.update(n);D.defines.VSM_SAMPLES!==c.blurSamples&&(D.defines.VSM_SAMPLES=c.blurSamples,s.defines.VSM_SAMPLES=c.blurSamples,D.needsUpdate=!0,s.needsUpdate=!0),c.mapPass===null&&(c.mapPass=new GC(C.x,C.y)),D.uniforms.shadow_pass.value=c.map.texture,D.uniforms.resolution.value=c.mapSize,D.uniforms.radius.value=c.radius,B.setRenderTarget(c.mapPass),B.clear(),B.renderBufferDirect(y,null,M,D,n,null),s.uniforms.shadow_pass.value=c.mapPass.texture,s.uniforms.resolution.value=c.mapSize,s.uniforms.radius.value=c.radius,B.setRenderTarget(c.map),B.clear(),B.renderBufferDirect(y,null,M,s,n,null)}function l(c,y,M,R,k,K){let U=null;const q=M.isPointLight===!0?c.customDistanceMaterial:c.customDepthMaterial;if(q!==void 0)U=q;else if(U=M.isPointLight===!0?o:i,B.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const V=U.uuid,Y=y.uuid;let H=t[V];H===void 0&&(H={},t[V]=H);let p=H[Y];p===void 0&&(p=U.clone(),H[Y]=p),U=p}return U.visible=y.visible,U.wireframe=y.wireframe,K===WB?U.side=y.shadowSide!==null?y.shadowSide:y.side:U.side=y.shadowSide!==null?y.shadowSide:a[y.side],U.alphaMap=y.alphaMap,U.alphaTest=y.alphaTest,U.map=y.map,U.clipShadows=y.clipShadows,U.clippingPlanes=y.clippingPlanes,U.clipIntersection=y.clipIntersection,U.displacementMap=y.displacementMap,U.displacementScale=y.displacementScale,U.displacementBias=y.displacementBias,U.wireframeLinewidth=y.wireframeLinewidth,U.linewidth=y.linewidth,M.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(M.matrixWorld),U.nearDistance=R,U.farDistance=k),U}function w(c,y,M,R,k){if(c.visible===!1)return;if(c.layers.test(y.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&k===WB)&&(!c.frustumCulled||g.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,c.matrixWorld);const q=A.update(c),V=c.material;if(Array.isArray(V)){const Y=q.groups;for(let H=0,p=Y.length;H<p;H++){const _=Y[H],z=V[_.materialIndex];if(z&&z.visible){const T=l(c,z,R,M.near,M.far,k);B.renderBufferDirect(M,null,q,T,c,_)}}}else if(V.visible){const Y=l(c,V,R,M.near,M.far,k);B.renderBufferDirect(M,null,q,Y,c,null)}}const U=c.children;for(let q=0,V=U.length;q<V;q++)w(U[q],y,M,R,k)}}function Xr(B,A,I){const g=I.isWebGL2;function C(){let x=!1;const $=new WI;let oA=null;const lA=new WI(0,0,0,0);return{setMask:function(pA){oA!==pA&&!x&&(B.colorMask(pA,pA,pA,pA),oA=pA)},setLocked:function(pA){x=pA},setClear:function(pA,QI,TI,PI,cC){cC===!0&&(pA*=PI,QI*=PI,TI*=PI),$.set(pA,QI,TI,PI),lA.equals($)===!1&&(B.clearColor(pA,QI,TI,PI),lA.copy($))},reset:function(){x=!1,oA=null,lA.set(-1,0,0,0)}}}function Q(){let x=!1,$=null,oA=null,lA=null;return{setTest:function(pA){pA?tA(2929):KA(2929)},setMask:function(pA){$!==pA&&!x&&(B.depthMask(pA),$=pA)},setFunc:function(pA){if(oA!==pA){switch(pA){case hs:B.depthFunc(512);break;case Gs:B.depthFunc(519);break;case ws:B.depthFunc(513);break;case bi:B.depthFunc(515);break;case rs:B.depthFunc(514);break;case Ss:B.depthFunc(518);break;case cs:B.depthFunc(516);break;case ks:B.depthFunc(517);break;default:B.depthFunc(515)}oA=pA}},setLocked:function(pA){x=pA},setClear:function(pA){lA!==pA&&(B.clearDepth(pA),lA=pA)},reset:function(){x=!1,$=null,oA=null,lA=null}}}function E(){let x=!1,$=null,oA=null,lA=null,pA=null,QI=null,TI=null,PI=null,cC=null;return{setTest:function(SI){x||(SI?tA(2960):KA(2960))},setMask:function(SI){$!==SI&&!x&&(B.stencilMask(SI),$=SI)},setFunc:function(SI,vg,yg){(oA!==SI||lA!==vg||pA!==yg)&&(B.stencilFunc(SI,vg,yg),oA=SI,lA=vg,pA=yg)},setOp:function(SI,vg,yg){(QI!==SI||TI!==vg||PI!==yg)&&(B.stencilOp(SI,vg,yg),QI=SI,TI=vg,PI=yg)},setLocked:function(SI){x=SI},setClear:function(SI){cC!==SI&&(B.clearStencil(SI),cC=SI)},reset:function(){x=!1,$=null,oA=null,lA=null,pA=null,QI=null,TI=null,PI=null,cC=null}}}const i=new C,o=new Q,t=new E,e=new WeakMap,a=new WeakMap;let D={},s={},G=new WeakMap,n=[],h=null,S=!1,l=null,w=null,c=null,y=null,M=null,R=null,k=null,K=!1,U=null,q=null,V=null,Y=null,H=null;const p=B.getParameter(35661);let _=!1,z=0;const T=B.getParameter(7938);T.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(T)[1]),_=z>=1):T.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),_=z>=2);let BA=null,QA={};const m=B.getParameter(3088),j=B.getParameter(2978),IA=new WI().fromArray(m),eA=new WI().fromArray(j);function DA(x,$,oA){const lA=new Uint8Array(4),pA=B.createTexture();B.bindTexture(x,pA),B.texParameteri(x,10241,9728),B.texParameteri(x,10240,9728);for(let QI=0;QI<oA;QI++)B.texImage2D($+QI,0,6408,1,1,0,6408,5121,lA);return pA}const u={};u[3553]=DA(3553,3553,1),u[34067]=DA(34067,34069,6),i.setClear(0,0,0,1),o.setClear(1),t.setClear(0),tA(2929),o.setFunc(bi),wA(!1),mA(Ct),tA(2884),nA(DC);function tA(x){D[x]!==!0&&(B.enable(x),D[x]=!0)}function KA(x){D[x]!==!1&&(B.disable(x),D[x]=!1)}function UA(x,$){return s[x]!==$?(B.bindFramebuffer(x,$),s[x]=$,g&&(x===36009&&(s[36160]=$),x===36160&&(s[36009]=$)),!0):!1}function GA(x,$){let oA=n,lA=!1;if(x)if(oA=G.get($),oA===void 0&&(oA=[],G.set($,oA)),x.isWebGLMultipleRenderTargets){const pA=x.texture;if(oA.length!==pA.length||oA[0]!==36064){for(let QI=0,TI=pA.length;QI<TI;QI++)oA[QI]=36064+QI;oA.length=pA.length,lA=!0}}else oA[0]!==36064&&(oA[0]=36064,lA=!0);else oA[0]!==1029&&(oA[0]=1029,lA=!0);lA&&(I.isWebGL2?B.drawBuffers(oA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(oA))}function xA(x){return h!==x?(B.useProgram(x),h=x,!0):!1}const v={[nB]:32774,[Bs]:32778,[Qs]:32779};if(g)v[it]=32775,v[ot]=32776;else{const x=A.get("EXT_blend_minmax");x!==null&&(v[it]=x.MIN_EXT,v[ot]=x.MAX_EXT)}const gA={[Es]:0,[is]:1,[os]:768,[aa]:770,[ns]:776,[Ds]:774,[es]:772,[ts]:769,[Da]:771,[ss]:775,[as]:773};function nA(x,$,oA,lA,pA,QI,TI,PI){if(x===DC){S===!0&&(KA(3042),S=!1);return}if(S===!1&&(tA(3042),S=!0),x!==Cs){if(x!==l||PI!==K){if((w!==nB||M!==nB)&&(B.blendEquation(32774),w=nB,M=nB),PI)switch(x){case SB:B.blendFuncSeparate(1,771,1,771);break;case Bt:B.blendFunc(1,1);break;case Qt:B.blendFuncSeparate(0,769,0,1);break;case Et:B.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case SB:B.blendFuncSeparate(770,771,1,771);break;case Bt:B.blendFunc(770,1);break;case Qt:B.blendFuncSeparate(0,769,0,1);break;case Et:B.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}c=null,y=null,R=null,k=null,l=x,K=PI}return}pA=pA||$,QI=QI||oA,TI=TI||lA,($!==w||pA!==M)&&(B.blendEquationSeparate(v[$],v[pA]),w=$,M=pA),(oA!==c||lA!==y||QI!==R||TI!==k)&&(B.blendFuncSeparate(gA[oA],gA[lA],gA[QI],gA[TI]),c=oA,y=lA,R=QI,k=TI),l=x,K=!1}function MA(x,$){x.side===CC?KA(2884):tA(2884);let oA=x.side===wg;$&&(oA=!oA),wA(oA),x.blending===SB&&x.transparent===!1?nA(DC):nA(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.premultipliedAlpha),o.setFunc(x.depthFunc),o.setTest(x.depthTest),o.setMask(x.depthWrite),i.setMask(x.colorWrite);const lA=x.stencilWrite;t.setTest(lA),lA&&(t.setMask(x.stencilWriteMask),t.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),t.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),YA(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?tA(32926):KA(32926)}function wA(x){U!==x&&(x?B.frontFace(2304):B.frontFace(2305),U=x)}function mA(x){x!==Is?(tA(2884),x!==q&&(x===Ct?B.cullFace(1029):x===gs?B.cullFace(1028):B.cullFace(1032))):KA(2884),q=x}function LA(x){x!==V&&(_&&B.lineWidth(x),V=x)}function YA(x,$,oA){x?(tA(32823),(Y!==$||H!==oA)&&(B.polygonOffset($,oA),Y=$,H=oA)):KA(32823)}function iI(x){x?tA(3089):KA(3089)}function gI(x){x===void 0&&(x=33984+p-1),BA!==x&&(B.activeTexture(x),BA=x)}function F(x,$,oA){oA===void 0&&(BA===null?oA=33984+p-1:oA=BA);let lA=QA[oA];lA===void 0&&(lA={type:void 0,texture:void 0},QA[oA]=lA),(lA.type!==x||lA.texture!==$)&&(BA!==oA&&(B.activeTexture(oA),BA=oA),B.bindTexture(x,$||u[x]),lA.type=x,lA.texture=$)}function N(){const x=QA[BA];x!==void 0&&x.type!==void 0&&(B.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function X(){try{B.compressedTexImage2D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function iA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function sA(){try{B.texSubImage2D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function SA(){try{B.texSubImage3D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function HA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function d(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function O(){try{B.texStorage2D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function cA(){try{B.texStorage3D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function yA(){try{B.texImage2D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function kA(){try{B.texImage3D.apply(B,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function dA(x){IA.equals(x)===!1&&(B.scissor(x.x,x.y,x.z,x.w),IA.copy(x))}function qA(x){eA.equals(x)===!1&&(B.viewport(x.x,x.y,x.z,x.w),eA.copy(x))}function jA(x,$){let oA=a.get($);oA===void 0&&(oA=new WeakMap,a.set($,oA));let lA=oA.get(x);lA===void 0&&(lA=B.getUniformBlockIndex($,x.name),oA.set(x,lA))}function VA(x,$){const lA=a.get($).get(x);e.get($)!==lA&&(B.uniformBlockBinding($,lA,x.__bindingPointIndex),e.set($,lA))}function oI(){B.disable(3042),B.disable(2884),B.disable(2929),B.disable(32823),B.disable(3089),B.disable(2960),B.disable(32926),B.blendEquation(32774),B.blendFunc(1,0),B.blendFuncSeparate(1,0,1,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(513),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(519,0,4294967295),B.stencilOp(7680,7680,7680),B.clearStencil(0),B.cullFace(1029),B.frontFace(2305),B.polygonOffset(0,0),B.activeTexture(33984),B.bindFramebuffer(36160,null),g===!0&&(B.bindFramebuffer(36009,null),B.bindFramebuffer(36008,null)),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),D={},BA=null,QA={},s={},G=new WeakMap,n=[],h=null,S=!1,l=null,w=null,c=null,y=null,M=null,R=null,k=null,K=!1,U=null,q=null,V=null,Y=null,H=null,IA.set(0,0,B.canvas.width,B.canvas.height),eA.set(0,0,B.canvas.width,B.canvas.height),i.reset(),o.reset(),t.reset()}return{buffers:{color:i,depth:o,stencil:t},enable:tA,disable:KA,bindFramebuffer:UA,drawBuffers:GA,useProgram:xA,setBlending:nA,setMaterial:MA,setFlipSided:wA,setCullFace:mA,setLineWidth:LA,setPolygonOffset:YA,setScissorTest:iI,activeTexture:gI,bindTexture:F,unbindTexture:N,compressedTexImage2D:X,compressedTexImage3D:iA,texImage2D:yA,texImage3D:kA,updateUBOMapping:jA,uniformBlockBinding:VA,texStorage2D:O,texStorage3D:cA,texSubImage2D:sA,texSubImage3D:SA,compressedTexSubImage2D:HA,compressedTexSubImage3D:d,scissor:dA,viewport:qA,reset:oI}}function _r(B,A,I,g,C,Q,E){const i=C.isWebGL2,o=C.maxTextures,t=C.maxCubemapSize,e=C.maxTextureSize,a=C.maxSamples,D=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new WeakMap;let n;const h=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function l(F,N){return S?new OffscreenCanvas(F,N):oQ("canvas")}function w(F,N,X,iA){let sA=1;if((F.width>iA||F.height>iA)&&(sA=iA/Math.max(F.width,F.height)),sA<1||N===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const SA=N?aE:Math.floor,HA=SA(sA*F.width),d=SA(sA*F.height);n===void 0&&(n=l(HA,d));const O=X?l(HA,d):n;return O.width=HA,O.height=d,O.getContext("2d").drawImage(F,0,0,HA,d),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+HA+"x"+d+")."),O}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function c(F){return vi(F.width)&&vi(F.height)}function y(F){return i?!1:F.wrapS!==hg||F.wrapT!==hg||F.minFilter!==ZI&&F.minFilter!==JI}function M(F,N){return F.generateMipmaps&&N&&F.minFilter!==ZI&&F.minFilter!==JI}function R(F){B.generateMipmap(F)}function k(F,N,X,iA,sA=!1){if(i===!1)return N;if(F!==null){if(B[F]!==void 0)return B[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let SA=N;return N===6403&&(X===5126&&(SA=33326),X===5131&&(SA=33325),X===5121&&(SA=33321)),N===33319&&(X===5126&&(SA=33328),X===5131&&(SA=33327),X===5121&&(SA=33323)),N===6408&&(X===5126&&(SA=34836),X===5131&&(SA=34842),X===5121&&(SA=iA===sI&&sA===!1?35907:32856),X===32819&&(SA=32854),X===32820&&(SA=32855)),(SA===33325||SA===33326||SA===33327||SA===33328||SA===34842||SA===34836)&&A.get("EXT_color_buffer_float"),SA}function K(F,N,X){return M(F,X)===!0||F.isFramebufferTexture&&F.minFilter!==ZI&&F.minFilter!==JI?Math.log2(Math.max(N.width,N.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?N.mipmaps.length:1}function U(F){return F===ZI||F===tt||F===$E?9728:9729}function q(F){const N=F.target;N.removeEventListener("dispose",q),Y(N),N.isVideoTexture&&G.delete(N)}function V(F){const N=F.target;N.removeEventListener("dispose",V),p(N)}function Y(F){const N=g.get(F);if(N.__webglInit===void 0)return;const X=F.source,iA=h.get(X);if(iA){const sA=iA[N.__cacheKey];sA.usedTimes--,sA.usedTimes===0&&H(F),Object.keys(iA).length===0&&h.delete(X)}g.remove(F)}function H(F){const N=g.get(F);B.deleteTexture(N.__webglTexture);const X=F.source,iA=h.get(X);delete iA[N.__cacheKey],E.memory.textures--}function p(F){const N=F.texture,X=g.get(F),iA=g.get(N);if(iA.__webglTexture!==void 0&&(B.deleteTexture(iA.__webglTexture),E.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let sA=0;sA<6;sA++)B.deleteFramebuffer(X.__webglFramebuffer[sA]),X.__webglDepthbuffer&&B.deleteRenderbuffer(X.__webglDepthbuffer[sA]);else{if(B.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&B.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&B.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let sA=0;sA<X.__webglColorRenderbuffer.length;sA++)X.__webglColorRenderbuffer[sA]&&B.deleteRenderbuffer(X.__webglColorRenderbuffer[sA]);X.__webglDepthRenderbuffer&&B.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let sA=0,SA=N.length;sA<SA;sA++){const HA=g.get(N[sA]);HA.__webglTexture&&(B.deleteTexture(HA.__webglTexture),E.memory.textures--),g.remove(N[sA])}g.remove(N),g.remove(F)}let _=0;function z(){_=0}function T(){const F=_;return F>=o&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o),_+=1,F}function BA(F){const N=[];return N.push(F.wrapS),N.push(F.wrapT),N.push(F.wrapR||0),N.push(F.magFilter),N.push(F.minFilter),N.push(F.anisotropy),N.push(F.internalFormat),N.push(F.format),N.push(F.type),N.push(F.generateMipmaps),N.push(F.premultiplyAlpha),N.push(F.flipY),N.push(F.unpackAlignment),N.push(F.encoding),N.join()}function QA(F,N){const X=g.get(F);if(F.isVideoTexture&&iI(F),F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){const iA=F.image;if(iA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(iA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{KA(X,F,N);return}}I.bindTexture(3553,X.__webglTexture,33984+N)}function m(F,N){const X=g.get(F);if(F.version>0&&X.__version!==F.version){KA(X,F,N);return}I.bindTexture(35866,X.__webglTexture,33984+N)}function j(F,N){const X=g.get(F);if(F.version>0&&X.__version!==F.version){KA(X,F,N);return}I.bindTexture(32879,X.__webglTexture,33984+N)}function IA(F,N){const X=g.get(F);if(F.version>0&&X.__version!==F.version){UA(X,F,N);return}I.bindTexture(34067,X.__webglTexture,33984+N)}const eA={[Zi]:10497,[hg]:33071,[Wi]:33648},DA={[ZI]:9728,[tt]:9984,[$E]:9986,[JI]:9729,[Js]:9985,[KB]:9987};function u(F,N,X){if(X?(B.texParameteri(F,10242,eA[N.wrapS]),B.texParameteri(F,10243,eA[N.wrapT]),(F===32879||F===35866)&&B.texParameteri(F,32882,eA[N.wrapR]),B.texParameteri(F,10240,DA[N.magFilter]),B.texParameteri(F,10241,DA[N.minFilter])):(B.texParameteri(F,10242,33071),B.texParameteri(F,10243,33071),(F===32879||F===35866)&&B.texParameteri(F,32882,33071),(N.wrapS!==hg||N.wrapT!==hg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),B.texParameteri(F,10240,U(N.magFilter)),B.texParameteri(F,10241,U(N.minFilter)),N.minFilter!==ZI&&N.minFilter!==JI&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const iA=A.get("EXT_texture_filter_anisotropic");if(N.magFilter===ZI||N.minFilter!==$E&&N.minFilter!==KB||N.type===Ng&&A.has("OES_texture_float_linear")===!1||i===!1&&N.type===Yg&&A.has("OES_texture_half_float_linear")===!1)return;(N.anisotropy>1||g.get(N).__currentAnisotropy)&&(B.texParameterf(F,iA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,C.getMaxAnisotropy())),g.get(N).__currentAnisotropy=N.anisotropy)}}function tA(F,N){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,N.addEventListener("dispose",q));const iA=N.source;let sA=h.get(iA);sA===void 0&&(sA={},h.set(iA,sA));const SA=BA(N);if(SA!==F.__cacheKey){sA[SA]===void 0&&(sA[SA]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,X=!0),sA[SA].usedTimes++;const HA=sA[F.__cacheKey];HA!==void 0&&(sA[F.__cacheKey].usedTimes--,HA.usedTimes===0&&H(N)),F.__cacheKey=SA,F.__webglTexture=sA[SA].texture}return X}function KA(F,N,X){let iA=3553;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(iA=35866),N.isData3DTexture&&(iA=32879);const sA=tA(F,N),SA=N.source;I.bindTexture(iA,F.__webglTexture,33984+X);const HA=g.get(SA);if(SA.version!==HA.__version||sA===!0){I.activeTexture(33984+X),B.pixelStorei(37440,N.flipY),B.pixelStorei(37441,N.premultiplyAlpha),B.pixelStorei(3317,N.unpackAlignment),B.pixelStorei(37443,0);const d=y(N)&&c(N.image)===!1;let O=w(N.image,d,!1,e);O=gI(N,O);const cA=c(O)||i,yA=Q.convert(N.format,N.encoding);let kA=Q.convert(N.type),dA=k(N.internalFormat,yA,kA,N.encoding,N.isVideoTexture);u(iA,N,cA);let qA;const jA=N.mipmaps,VA=i&&N.isVideoTexture!==!0,oI=HA.__version===void 0||sA===!0,x=K(N,O,cA);if(N.isDepthTexture)dA=6402,i?N.type===Ng?dA=36012:N.type===pC?dA=33190:N.type===cB?dA=35056:dA=33189:N.type===Ng&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),N.format===LC&&dA===6402&&N.type!==Ga&&N.type!==pC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),N.type=pC,kA=Q.convert(N.type)),N.format===UB&&dA===6402&&(dA=34041,N.type!==cB&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),N.type=cB,kA=Q.convert(N.type))),oI&&(VA?I.texStorage2D(3553,1,dA,O.width,O.height):I.texImage2D(3553,0,dA,O.width,O.height,0,yA,kA,null));else if(N.isDataTexture)if(jA.length>0&&cA){VA&&oI&&I.texStorage2D(3553,x,dA,jA[0].width,jA[0].height);for(let $=0,oA=jA.length;$<oA;$++)qA=jA[$],VA?I.texSubImage2D(3553,$,0,0,qA.width,qA.height,yA,kA,qA.data):I.texImage2D(3553,$,dA,qA.width,qA.height,0,yA,kA,qA.data);N.generateMipmaps=!1}else VA?(oI&&I.texStorage2D(3553,x,dA,O.width,O.height),I.texSubImage2D(3553,0,0,0,O.width,O.height,yA,kA,O.data)):I.texImage2D(3553,0,dA,O.width,O.height,0,yA,kA,O.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){VA&&oI&&I.texStorage3D(35866,x,dA,jA[0].width,jA[0].height,O.depth);for(let $=0,oA=jA.length;$<oA;$++)qA=jA[$],N.format!==pg?yA!==null?VA?I.compressedTexSubImage3D(35866,$,0,0,0,qA.width,qA.height,O.depth,yA,qA.data,0,0):I.compressedTexImage3D(35866,$,dA,qA.width,qA.height,O.depth,0,qA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?I.texSubImage3D(35866,$,0,0,0,qA.width,qA.height,O.depth,yA,kA,qA.data):I.texImage3D(35866,$,dA,qA.width,qA.height,O.depth,0,yA,kA,qA.data)}else{VA&&oI&&I.texStorage2D(3553,x,dA,jA[0].width,jA[0].height);for(let $=0,oA=jA.length;$<oA;$++)qA=jA[$],N.format!==pg?yA!==null?VA?I.compressedTexSubImage2D(3553,$,0,0,qA.width,qA.height,yA,qA.data):I.compressedTexImage2D(3553,$,dA,qA.width,qA.height,0,qA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?I.texSubImage2D(3553,$,0,0,qA.width,qA.height,yA,kA,qA.data):I.texImage2D(3553,$,dA,qA.width,qA.height,0,yA,kA,qA.data)}else if(N.isDataArrayTexture)VA?(oI&&I.texStorage3D(35866,x,dA,O.width,O.height,O.depth),I.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,yA,kA,O.data)):I.texImage3D(35866,0,dA,O.width,O.height,O.depth,0,yA,kA,O.data);else if(N.isData3DTexture)VA?(oI&&I.texStorage3D(32879,x,dA,O.width,O.height,O.depth),I.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,yA,kA,O.data)):I.texImage3D(32879,0,dA,O.width,O.height,O.depth,0,yA,kA,O.data);else if(N.isFramebufferTexture){if(oI)if(VA)I.texStorage2D(3553,x,dA,O.width,O.height);else{let $=O.width,oA=O.height;for(let lA=0;lA<x;lA++)I.texImage2D(3553,lA,dA,$,oA,0,yA,kA,null),$>>=1,oA>>=1}}else if(jA.length>0&&cA){VA&&oI&&I.texStorage2D(3553,x,dA,jA[0].width,jA[0].height);for(let $=0,oA=jA.length;$<oA;$++)qA=jA[$],VA?I.texSubImage2D(3553,$,0,0,yA,kA,qA):I.texImage2D(3553,$,dA,yA,kA,qA);N.generateMipmaps=!1}else VA?(oI&&I.texStorage2D(3553,x,dA,O.width,O.height),I.texSubImage2D(3553,0,0,0,yA,kA,O)):I.texImage2D(3553,0,dA,yA,kA,O);M(N,cA)&&R(iA),HA.__version=SA.version,N.onUpdate&&N.onUpdate(N)}F.__version=N.version}function UA(F,N,X){if(N.image.length!==6)return;const iA=tA(F,N),sA=N.source;I.bindTexture(34067,F.__webglTexture,33984+X);const SA=g.get(sA);if(sA.version!==SA.__version||iA===!0){I.activeTexture(33984+X),B.pixelStorei(37440,N.flipY),B.pixelStorei(37441,N.premultiplyAlpha),B.pixelStorei(3317,N.unpackAlignment),B.pixelStorei(37443,0);const HA=N.isCompressedTexture||N.image[0].isCompressedTexture,d=N.image[0]&&N.image[0].isDataTexture,O=[];for(let $=0;$<6;$++)!HA&&!d?O[$]=w(N.image[$],!1,!0,t):O[$]=d?N.image[$].image:N.image[$],O[$]=gI(N,O[$]);const cA=O[0],yA=c(cA)||i,kA=Q.convert(N.format,N.encoding),dA=Q.convert(N.type),qA=k(N.internalFormat,kA,dA,N.encoding),jA=i&&N.isVideoTexture!==!0,VA=SA.__version===void 0||iA===!0;let oI=K(N,cA,yA);u(34067,N,yA);let x;if(HA){jA&&VA&&I.texStorage2D(34067,oI,qA,cA.width,cA.height);for(let $=0;$<6;$++){x=O[$].mipmaps;for(let oA=0;oA<x.length;oA++){const lA=x[oA];N.format!==pg?kA!==null?jA?I.compressedTexSubImage2D(34069+$,oA,0,0,lA.width,lA.height,kA,lA.data):I.compressedTexImage2D(34069+$,oA,qA,lA.width,lA.height,0,lA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jA?I.texSubImage2D(34069+$,oA,0,0,lA.width,lA.height,kA,dA,lA.data):I.texImage2D(34069+$,oA,qA,lA.width,lA.height,0,kA,dA,lA.data)}}}else{x=N.mipmaps,jA&&VA&&(x.length>0&&oI++,I.texStorage2D(34067,oI,qA,O[0].width,O[0].height));for(let $=0;$<6;$++)if(d){jA?I.texSubImage2D(34069+$,0,0,0,O[$].width,O[$].height,kA,dA,O[$].data):I.texImage2D(34069+$,0,qA,O[$].width,O[$].height,0,kA,dA,O[$].data);for(let oA=0;oA<x.length;oA++){const pA=x[oA].image[$].image;jA?I.texSubImage2D(34069+$,oA+1,0,0,pA.width,pA.height,kA,dA,pA.data):I.texImage2D(34069+$,oA+1,qA,pA.width,pA.height,0,kA,dA,pA.data)}}else{jA?I.texSubImage2D(34069+$,0,0,0,kA,dA,O[$]):I.texImage2D(34069+$,0,qA,kA,dA,O[$]);for(let oA=0;oA<x.length;oA++){const lA=x[oA];jA?I.texSubImage2D(34069+$,oA+1,0,0,kA,dA,lA.image[$]):I.texImage2D(34069+$,oA+1,qA,kA,dA,lA.image[$])}}}M(N,yA)&&R(34067),SA.__version=sA.version,N.onUpdate&&N.onUpdate(N)}F.__version=N.version}function GA(F,N,X,iA,sA){const SA=Q.convert(X.format,X.encoding),HA=Q.convert(X.type),d=k(X.internalFormat,SA,HA,X.encoding);g.get(N).__hasExternalTextures||(sA===32879||sA===35866?I.texImage3D(sA,0,d,N.width,N.height,N.depth,0,SA,HA,null):I.texImage2D(sA,0,d,N.width,N.height,0,SA,HA,null)),I.bindFramebuffer(36160,F),YA(N)?D.framebufferTexture2DMultisampleEXT(36160,iA,sA,g.get(X).__webglTexture,0,LA(N)):(sA===3553||sA>=34069&&sA<=34074)&&B.framebufferTexture2D(36160,iA,sA,g.get(X).__webglTexture,0),I.bindFramebuffer(36160,null)}function xA(F,N,X){if(B.bindRenderbuffer(36161,F),N.depthBuffer&&!N.stencilBuffer){let iA=33189;if(X||YA(N)){const sA=N.depthTexture;sA&&sA.isDepthTexture&&(sA.type===Ng?iA=36012:sA.type===pC&&(iA=33190));const SA=LA(N);YA(N)?D.renderbufferStorageMultisampleEXT(36161,SA,iA,N.width,N.height):B.renderbufferStorageMultisample(36161,SA,iA,N.width,N.height)}else B.renderbufferStorage(36161,iA,N.width,N.height);B.framebufferRenderbuffer(36160,36096,36161,F)}else if(N.depthBuffer&&N.stencilBuffer){const iA=LA(N);X&&YA(N)===!1?B.renderbufferStorageMultisample(36161,iA,35056,N.width,N.height):YA(N)?D.renderbufferStorageMultisampleEXT(36161,iA,35056,N.width,N.height):B.renderbufferStorage(36161,34041,N.width,N.height),B.framebufferRenderbuffer(36160,33306,36161,F)}else{const iA=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let sA=0;sA<iA.length;sA++){const SA=iA[sA],HA=Q.convert(SA.format,SA.encoding),d=Q.convert(SA.type),O=k(SA.internalFormat,HA,d,SA.encoding),cA=LA(N);X&&YA(N)===!1?B.renderbufferStorageMultisample(36161,cA,O,N.width,N.height):YA(N)?D.renderbufferStorageMultisampleEXT(36161,cA,O,N.width,N.height):B.renderbufferStorage(36161,O,N.width,N.height)}}B.bindRenderbuffer(36161,null)}function v(F,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(36160,F),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),QA(N.depthTexture,0);const iA=g.get(N.depthTexture).__webglTexture,sA=LA(N);if(N.depthTexture.format===LC)YA(N)?D.framebufferTexture2DMultisampleEXT(36160,36096,3553,iA,0,sA):B.framebufferTexture2D(36160,36096,3553,iA,0);else if(N.depthTexture.format===UB)YA(N)?D.framebufferTexture2DMultisampleEXT(36160,33306,3553,iA,0,sA):B.framebufferTexture2D(36160,33306,3553,iA,0);else throw new Error("Unknown depthTexture format")}function gA(F){const N=g.get(F),X=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!N.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");v(N.__webglFramebuffer,F)}else if(X){N.__webglDepthbuffer=[];for(let iA=0;iA<6;iA++)I.bindFramebuffer(36160,N.__webglFramebuffer[iA]),N.__webglDepthbuffer[iA]=B.createRenderbuffer(),xA(N.__webglDepthbuffer[iA],F,!1)}else I.bindFramebuffer(36160,N.__webglFramebuffer),N.__webglDepthbuffer=B.createRenderbuffer(),xA(N.__webglDepthbuffer,F,!1);I.bindFramebuffer(36160,null)}function nA(F,N,X){const iA=g.get(F);N!==void 0&&GA(iA.__webglFramebuffer,F,F.texture,36064,3553),X!==void 0&&gA(F)}function MA(F){const N=F.texture,X=g.get(F),iA=g.get(N);F.addEventListener("dispose",V),F.isWebGLMultipleRenderTargets!==!0&&(iA.__webglTexture===void 0&&(iA.__webglTexture=B.createTexture()),iA.__version=N.version,E.memory.textures++);const sA=F.isWebGLCubeRenderTarget===!0,SA=F.isWebGLMultipleRenderTargets===!0,HA=c(F)||i;if(sA){X.__webglFramebuffer=[];for(let d=0;d<6;d++)X.__webglFramebuffer[d]=B.createFramebuffer()}else{if(X.__webglFramebuffer=B.createFramebuffer(),SA)if(C.drawBuffers){const d=F.texture;for(let O=0,cA=d.length;O<cA;O++){const yA=g.get(d[O]);yA.__webglTexture===void 0&&(yA.__webglTexture=B.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&F.samples>0&&YA(F)===!1){const d=SA?N:[N];X.__webglMultisampledFramebuffer=B.createFramebuffer(),X.__webglColorRenderbuffer=[],I.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let O=0;O<d.length;O++){const cA=d[O];X.__webglColorRenderbuffer[O]=B.createRenderbuffer(),B.bindRenderbuffer(36161,X.__webglColorRenderbuffer[O]);const yA=Q.convert(cA.format,cA.encoding),kA=Q.convert(cA.type),dA=k(cA.internalFormat,yA,kA,cA.encoding,F.isXRRenderTarget===!0),qA=LA(F);B.renderbufferStorageMultisample(36161,qA,dA,F.width,F.height),B.framebufferRenderbuffer(36160,36064+O,36161,X.__webglColorRenderbuffer[O])}B.bindRenderbuffer(36161,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=B.createRenderbuffer(),xA(X.__webglDepthRenderbuffer,F,!0)),I.bindFramebuffer(36160,null)}}if(sA){I.bindTexture(34067,iA.__webglTexture),u(34067,N,HA);for(let d=0;d<6;d++)GA(X.__webglFramebuffer[d],F,N,36064,34069+d);M(N,HA)&&R(34067),I.unbindTexture()}else if(SA){const d=F.texture;for(let O=0,cA=d.length;O<cA;O++){const yA=d[O],kA=g.get(yA);I.bindTexture(3553,kA.__webglTexture),u(3553,yA,HA),GA(X.__webglFramebuffer,F,yA,36064+O,3553),M(yA,HA)&&R(3553)}I.unbindTexture()}else{let d=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(i?d=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(d,iA.__webglTexture),u(d,N,HA),GA(X.__webglFramebuffer,F,N,36064,d),M(N,HA)&&R(d),I.unbindTexture()}F.depthBuffer&&gA(F)}function wA(F){const N=c(F)||i,X=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let iA=0,sA=X.length;iA<sA;iA++){const SA=X[iA];if(M(SA,N)){const HA=F.isWebGLCubeRenderTarget?34067:3553,d=g.get(SA).__webglTexture;I.bindTexture(HA,d),R(HA),I.unbindTexture()}}}function mA(F){if(i&&F.samples>0&&YA(F)===!1){const N=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],X=F.width,iA=F.height;let sA=16384;const SA=[],HA=F.stencilBuffer?33306:36096,d=g.get(F),O=F.isWebGLMultipleRenderTargets===!0;if(O)for(let cA=0;cA<N.length;cA++)I.bindFramebuffer(36160,d.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(36160,36064+cA,36161,null),I.bindFramebuffer(36160,d.__webglFramebuffer),B.framebufferTexture2D(36009,36064+cA,3553,null,0);I.bindFramebuffer(36008,d.__webglMultisampledFramebuffer),I.bindFramebuffer(36009,d.__webglFramebuffer);for(let cA=0;cA<N.length;cA++){SA.push(36064+cA),F.depthBuffer&&SA.push(HA);const yA=d.__ignoreDepthValues!==void 0?d.__ignoreDepthValues:!1;if(yA===!1&&(F.depthBuffer&&(sA|=256),F.stencilBuffer&&(sA|=1024)),O&&B.framebufferRenderbuffer(36008,36064,36161,d.__webglColorRenderbuffer[cA]),yA===!0&&(B.invalidateFramebuffer(36008,[HA]),B.invalidateFramebuffer(36009,[HA])),O){const kA=g.get(N[cA]).__webglTexture;B.framebufferTexture2D(36009,36064,3553,kA,0)}B.blitFramebuffer(0,0,X,iA,0,0,X,iA,sA,9728),s&&B.invalidateFramebuffer(36008,SA)}if(I.bindFramebuffer(36008,null),I.bindFramebuffer(36009,null),O)for(let cA=0;cA<N.length;cA++){I.bindFramebuffer(36160,d.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(36160,36064+cA,36161,d.__webglColorRenderbuffer[cA]);const yA=g.get(N[cA]).__webglTexture;I.bindFramebuffer(36160,d.__webglFramebuffer),B.framebufferTexture2D(36009,36064+cA,3553,yA,0)}I.bindFramebuffer(36009,d.__webglMultisampledFramebuffer)}}function LA(F){return Math.min(a,F.samples)}function YA(F){const N=g.get(F);return i&&F.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function iI(F){const N=E.render.frame;G.get(F)!==N&&(G.set(F,N),F.update())}function gI(F,N){const X=F.encoding,iA=F.format,sA=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===Pi||X!==Fg&&(X===sI?i===!1?A.has("EXT_sRGB")===!0&&iA===pg?(F.format=Pi,F.minFilter=JI,F.generateMipmaps=!1):N=ca.sRGBToLinear(N):(iA!==pg||sA!==mC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),N}this.allocateTextureUnit=T,this.resetTextureUnits=z,this.setTexture2D=QA,this.setTexture2DArray=m,this.setTexture3D=j,this.setTextureCube=IA,this.rebindTextures=nA,this.setupRenderTarget=MA,this.updateRenderTargetMipmap=wA,this.updateMultisampleRenderTarget=mA,this.setupDepthRenderbuffer=gA,this.setupFrameBufferTexture=GA,this.useMultisampledRTT=YA}function zr(B,A,I){const g=I.isWebGL2;function C(Q,E=null){let i;if(Q===mC)return 5121;if(Q===ds)return 32819;if(Q===ps)return 32820;if(Q===Fs)return 5120;if(Q===Rs)return 5122;if(Q===Ga)return 5123;if(Q===qs)return 5124;if(Q===pC)return 5125;if(Q===Ng)return 5126;if(Q===Yg)return g?5131:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(Q===Ys)return 6406;if(Q===pg)return 6408;if(Q===Ls)return 6409;if(Q===fs)return 6410;if(Q===LC)return 6402;if(Q===UB)return 34041;if(Q===Pi)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(Q===us)return 6403;if(Q===Hs)return 36244;if(Q===ms)return 33319;if(Q===Ts)return 33320;if(Q===xs)return 36249;if(Q===Ai||Q===Ii||Q===gi||Q===Ci)if(E===sI)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(Q===Ai)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===Ii)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===gi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===Ci)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(Q===Ai)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===Ii)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===gi)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===Ci)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===et||Q===at||Q===Dt||Q===st)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(Q===et)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===at)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===Dt)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===st)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===bs)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===nt||Q===ht)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(Q===nt)return E===sI?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(Q===ht)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===Gt||Q===wt||Q===rt||Q===St||Q===ct||Q===kt||Q===lt||Q===yt||Q===Mt||Q===Kt||Q===Ut||Q===Nt||Q===Jt||Q===Ft)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(Q===Gt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===wt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===rt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===St)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===ct)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===kt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===lt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===yt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===Mt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===Kt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===Ut)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===Nt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===Jt)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===Ft)return E===sI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===Bi)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(Q===Bi)return E===sI?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(Q===Os||Q===Rt||Q===qt||Q===dt)if(i=A.get("EXT_texture_compression_rgtc"),i!==null){if(Q===Bi)return i.COMPRESSED_RED_RGTC1_EXT;if(Q===Rt)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Q===qt)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Q===dt)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return Q===cB?g?34042:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):B[Q]!==void 0?B[Q]:null}return{convert:C}}class $r extends Dg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}let jB=class extends NI{constructor(){super(),this.isGroup=!0,this.type="Group"}};const AS={type:"move"};class Fi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jB,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jB,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jB,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){E=!0;for(const n of A.hand.values()){const h=I.getJointPose(n,g),S=this._getHandJoint(t,n);h!==null&&(S.matrix.fromArray(h.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=h.radius),S.visible=h!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],D=e.position.distanceTo(a.position),s=.02,G=.005;t.inputState.pinching&&D>s+G?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&D<=s-G&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(AS)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),t!==null&&(t.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new jB;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class IS extends $I{constructor(A,I,g,C,Q,E,i,o,t,e){if(e=e!==void 0?e:LC,e!==LC&&e!==UB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===LC&&(g=pC),g===void 0&&e===UB&&(g=cB),super(null,C,Q,E,i,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:ZI,this.minFilter=o!==void 0?o:ZI,this.flipY=!1,this.generateMipmaps=!1}}class gS extends WC{constructor(A,I){super();const g=this;let C=null,Q=1,E=null,i="local-floor",o=1,t=null,e=null,a=null,D=null,s=null,G=null;const n=I.getContextAttributes();let h=null,S=null;const l=[],w=[],c=new Set,y=new Map,M=new Dg;M.layers.enable(1),M.viewport=new WI;const R=new Dg;R.layers.enable(2),R.viewport=new WI;const k=[M,R],K=new $r;K.layers.enable(1),K.layers.enable(2);let U=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let IA=l[j];return IA===void 0&&(IA=new Fi,l[j]=IA),IA.getTargetRaySpace()},this.getControllerGrip=function(j){let IA=l[j];return IA===void 0&&(IA=new Fi,l[j]=IA),IA.getGripSpace()},this.getHand=function(j){let IA=l[j];return IA===void 0&&(IA=new Fi,l[j]=IA),IA.getHandSpace()};function V(j){const IA=w.indexOf(j.inputSource);if(IA===-1)return;const eA=l[IA];eA!==void 0&&eA.dispatchEvent({type:j.type,data:j.inputSource})}function Y(){C.removeEventListener("select",V),C.removeEventListener("selectstart",V),C.removeEventListener("selectend",V),C.removeEventListener("squeeze",V),C.removeEventListener("squeezestart",V),C.removeEventListener("squeezeend",V),C.removeEventListener("end",Y),C.removeEventListener("inputsourceschange",H);for(let j=0;j<l.length;j++){const IA=w[j];IA!==null&&(w[j]=null,l[j].disconnect(IA))}U=null,q=null,A.setRenderTarget(h),s=null,D=null,a=null,C=null,S=null,m.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){Q=j,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){i=j,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return t||E},this.setReferenceSpace=function(j){t=j},this.getBaseLayer=function(){return D!==null?D:s},this.getBinding=function(){return a},this.getFrame=function(){return G},this.getSession=function(){return C},this.setSession=async function(j){if(C=j,C!==null){if(h=A.getRenderTarget(),C.addEventListener("select",V),C.addEventListener("selectstart",V),C.addEventListener("selectend",V),C.addEventListener("squeeze",V),C.addEventListener("squeezestart",V),C.addEventListener("squeezeend",V),C.addEventListener("end",Y),C.addEventListener("inputsourceschange",H),n.xrCompatible!==!0&&await I.makeXRCompatible(),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const IA={antialias:C.renderState.layers===void 0?n.antialias:!0,alpha:n.alpha,depth:n.depth,stencil:n.stencil,framebufferScaleFactor:Q};s=new XRWebGLLayer(C,I,IA),C.updateRenderState({baseLayer:s}),S=new GC(s.framebufferWidth,s.framebufferHeight,{format:pg,type:mC,encoding:A.outputEncoding,stencilBuffer:n.stencil})}else{let IA=null,eA=null,DA=null;n.depth&&(DA=n.stencil?35056:33190,IA=n.stencil?UB:LC,eA=n.stencil?cB:pC);const u={colorFormat:32856,depthFormat:DA,scaleFactor:Q};a=new XRWebGLBinding(C,I),D=a.createProjectionLayer(u),C.updateRenderState({layers:[D]}),S=new GC(D.textureWidth,D.textureHeight,{format:pg,type:mC,depthTexture:new IS(D.textureWidth,D.textureHeight,eA,void 0,void 0,void 0,void 0,void 0,void 0,IA),stencilBuffer:n.stencil,encoding:A.outputEncoding,samples:n.antialias?4:0});const tA=A.properties.get(S);tA.__ignoreDepthValues=D.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(o),t=null,E=await C.requestReferenceSpace(i),m.setContext(C),m.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}};function H(j){for(let IA=0;IA<j.removed.length;IA++){const eA=j.removed[IA],DA=w.indexOf(eA);DA>=0&&(w[DA]=null,l[DA].disconnect(eA))}for(let IA=0;IA<j.added.length;IA++){const eA=j.added[IA];let DA=w.indexOf(eA);if(DA===-1){for(let tA=0;tA<l.length;tA++)if(tA>=w.length){w.push(eA),DA=tA;break}else if(w[tA]===null){w[tA]=eA,DA=tA;break}if(DA===-1)break}const u=l[DA];u&&u.connect(eA)}}const p=new L,_=new L;function z(j,IA,eA){p.setFromMatrixPosition(IA.matrixWorld),_.setFromMatrixPosition(eA.matrixWorld);const DA=p.distanceTo(_),u=IA.projectionMatrix.elements,tA=eA.projectionMatrix.elements,KA=u[14]/(u[10]-1),UA=u[14]/(u[10]+1),GA=(u[9]+1)/u[5],xA=(u[9]-1)/u[5],v=(u[8]-1)/u[0],gA=(tA[8]+1)/tA[0],nA=KA*v,MA=KA*gA,wA=DA/(-v+gA),mA=wA*-v;IA.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(mA),j.translateZ(wA),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const LA=KA+wA,YA=UA+wA,iI=nA-mA,gI=MA+(DA-mA),F=GA*UA/YA*LA,N=xA*UA/YA*LA;j.projectionMatrix.makePerspective(iI,gI,F,N,LA,YA)}function T(j,IA){IA===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(IA.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(C===null)return;K.near=R.near=M.near=j.near,K.far=R.far=M.far=j.far,(U!==K.near||q!==K.far)&&(C.updateRenderState({depthNear:K.near,depthFar:K.far}),U=K.near,q=K.far);const IA=j.parent,eA=K.cameras;T(K,IA);for(let u=0;u<eA.length;u++)T(eA[u],IA);K.matrixWorld.decompose(K.position,K.quaternion,K.scale),j.matrix.copy(K.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale);const DA=j.children;for(let u=0,tA=DA.length;u<tA;u++)DA[u].updateMatrixWorld(!0);eA.length===2?z(K,M,R):K.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return K},this.getFoveation=function(){if(!(D===null&&s===null))return o},this.setFoveation=function(j){o=j,D!==null&&(D.fixedFoveation=j),s!==null&&s.fixedFoveation!==void 0&&(s.fixedFoveation=j)},this.getPlanes=function(){return c};let BA=null;function QA(j,IA){if(e=IA.getViewerPose(t||E),G=IA,e!==null){const eA=e.views;s!==null&&(A.setRenderTargetFramebuffer(S,s.framebuffer),A.setRenderTarget(S));let DA=!1;eA.length!==K.cameras.length&&(K.cameras.length=0,DA=!0);for(let u=0;u<eA.length;u++){const tA=eA[u];let KA=null;if(s!==null)KA=s.getViewport(tA);else{const GA=a.getViewSubImage(D,tA);KA=GA.viewport,u===0&&(A.setRenderTargetTextures(S,GA.colorTexture,D.ignoreDepthValues?void 0:GA.depthStencilTexture),A.setRenderTarget(S))}let UA=k[u];UA===void 0&&(UA=new Dg,UA.layers.enable(u),UA.viewport=new WI,k[u]=UA),UA.matrix.fromArray(tA.transform.matrix),UA.projectionMatrix.fromArray(tA.projectionMatrix),UA.viewport.set(KA.x,KA.y,KA.width,KA.height),u===0&&K.matrix.copy(UA.matrix),DA===!0&&K.cameras.push(UA)}}for(let eA=0;eA<l.length;eA++){const DA=w[eA],u=l[eA];DA!==null&&u!==void 0&&u.update(DA,IA,t||E)}if(BA&&BA(j,IA),IA.detectedPlanes){g.dispatchEvent({type:"planesdetected",data:IA.detectedPlanes});let eA=null;for(const DA of c)IA.detectedPlanes.has(DA)||(eA===null&&(eA=[]),eA.push(DA));if(eA!==null)for(const DA of eA)c.delete(DA),y.delete(DA),g.dispatchEvent({type:"planeremoved",data:DA});for(const DA of IA.detectedPlanes)if(!c.has(DA))c.add(DA),y.set(DA,IA.lastChangedTime),g.dispatchEvent({type:"planeadded",data:DA});else{const u=y.get(DA);DA.lastChangedTime>u&&(y.set(DA,DA.lastChangedTime),g.dispatchEvent({type:"planechanged",data:DA}))}}G=null}const m=new Ja;m.setAnimationLoop(QA),this.setAnimationLoop=function(j){BA=j},this.dispose=function(){}}}function CS(B,A){function I(n,h){h.color.getRGB(n.fogColor.value,Ua(B)),h.isFog?(n.fogNear.value=h.near,n.fogFar.value=h.far):h.isFogExp2&&(n.fogDensity.value=h.density)}function g(n,h,S,l,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?C(n,h):h.isMeshToonMaterial?(C(n,h),e(n,h)):h.isMeshPhongMaterial?(C(n,h),t(n,h)):h.isMeshStandardMaterial?(C(n,h),a(n,h),h.isMeshPhysicalMaterial&&D(n,h,w)):h.isMeshMatcapMaterial?(C(n,h),s(n,h)):h.isMeshDepthMaterial?C(n,h):h.isMeshDistanceMaterial?(C(n,h),G(n,h)):h.isMeshNormalMaterial?C(n,h):h.isLineBasicMaterial?(Q(n,h),h.isLineDashedMaterial&&E(n,h)):h.isPointsMaterial?i(n,h,S,l):h.isSpriteMaterial?o(n,h):h.isShadowMaterial?(n.color.value.copy(h.color),n.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function C(n,h){n.opacity.value=h.opacity,h.color&&n.diffuse.value.copy(h.color),h.emissive&&n.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.bumpMap&&(n.bumpMap.value=h.bumpMap,n.bumpScale.value=h.bumpScale,h.side===wg&&(n.bumpScale.value*=-1)),h.displacementMap&&(n.displacementMap.value=h.displacementMap,n.displacementScale.value=h.displacementScale,n.displacementBias.value=h.displacementBias),h.emissiveMap&&(n.emissiveMap.value=h.emissiveMap),h.normalMap&&(n.normalMap.value=h.normalMap,n.normalScale.value.copy(h.normalScale),h.side===wg&&n.normalScale.value.negate()),h.specularMap&&(n.specularMap.value=h.specularMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);const S=A.get(h).envMap;if(S&&(n.envMap.value=S,n.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=h.reflectivity,n.ior.value=h.ior,n.refractionRatio.value=h.refractionRatio),h.lightMap){n.lightMap.value=h.lightMap;const c=B.physicallyCorrectLights!==!0?Math.PI:1;n.lightMapIntensity.value=h.lightMapIntensity*c}h.aoMap&&(n.aoMap.value=h.aoMap,n.aoMapIntensity.value=h.aoMapIntensity);let l;h.map?l=h.map:h.specularMap?l=h.specularMap:h.displacementMap?l=h.displacementMap:h.normalMap?l=h.normalMap:h.bumpMap?l=h.bumpMap:h.roughnessMap?l=h.roughnessMap:h.metalnessMap?l=h.metalnessMap:h.alphaMap?l=h.alphaMap:h.emissiveMap?l=h.emissiveMap:h.clearcoatMap?l=h.clearcoatMap:h.clearcoatNormalMap?l=h.clearcoatNormalMap:h.clearcoatRoughnessMap?l=h.clearcoatRoughnessMap:h.iridescenceMap?l=h.iridescenceMap:h.iridescenceThicknessMap?l=h.iridescenceThicknessMap:h.specularIntensityMap?l=h.specularIntensityMap:h.specularColorMap?l=h.specularColorMap:h.transmissionMap?l=h.transmissionMap:h.thicknessMap?l=h.thicknessMap:h.sheenColorMap?l=h.sheenColorMap:h.sheenRoughnessMap&&(l=h.sheenRoughnessMap),l!==void 0&&(l.isWebGLRenderTarget&&(l=l.texture),l.matrixAutoUpdate===!0&&l.updateMatrix(),n.uvTransform.value.copy(l.matrix));let w;h.aoMap?w=h.aoMap:h.lightMap&&(w=h.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),n.uv2Transform.value.copy(w.matrix))}function Q(n,h){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity}function E(n,h){n.dashSize.value=h.dashSize,n.totalSize.value=h.dashSize+h.gapSize,n.scale.value=h.scale}function i(n,h,S,l){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity,n.size.value=h.size*S,n.scale.value=l*.5,h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),n.uvTransform.value.copy(w.matrix))}function o(n,h){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity,n.rotation.value=h.rotation,h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);let S;h.map?S=h.map:h.alphaMap&&(S=h.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),n.uvTransform.value.copy(S.matrix))}function t(n,h){n.specular.value.copy(h.specular),n.shininess.value=Math.max(h.shininess,1e-4)}function e(n,h){h.gradientMap&&(n.gradientMap.value=h.gradientMap)}function a(n,h){n.roughness.value=h.roughness,n.metalness.value=h.metalness,h.roughnessMap&&(n.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(n.metalnessMap.value=h.metalnessMap),A.get(h).envMap&&(n.envMapIntensity.value=h.envMapIntensity)}function D(n,h,S){n.ior.value=h.ior,h.sheen>0&&(n.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),n.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(n.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(n.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(n.clearcoat.value=h.clearcoat,n.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(n.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(n.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(n.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),n.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===wg&&n.clearcoatNormalScale.value.negate())),h.iridescence>0&&(n.iridescence.value=h.iridescence,n.iridescenceIOR.value=h.iridescenceIOR,n.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],n.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(n.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(n.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(n.transmission.value=h.transmission,n.transmissionSamplerMap.value=S.texture,n.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(n.transmissionMap.value=h.transmissionMap),n.thickness.value=h.thickness,h.thicknessMap&&(n.thicknessMap.value=h.thicknessMap),n.attenuationDistance.value=h.attenuationDistance,n.attenuationColor.value.copy(h.attenuationColor)),n.specularIntensity.value=h.specularIntensity,n.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(n.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(n.specularColorMap.value=h.specularColorMap)}function s(n,h){h.matcap&&(n.matcap.value=h.matcap)}function G(n,h){n.referencePosition.value.copy(h.referencePosition),n.nearDistance.value=h.nearDistance,n.farDistance.value=h.farDistance}return{refreshFogUniforms:I,refreshMaterialUniforms:g}}function BS(B,A,I,g){let C={},Q={},E=[];const i=I.isWebGL2?B.getParameter(35375):0;function o(l,w){const c=w.program;g.uniformBlockBinding(l,c)}function t(l,w){let c=C[l.id];c===void 0&&(G(l),c=e(l),C[l.id]=c,l.addEventListener("dispose",h));const y=w.program;g.updateUBOMapping(l,y);const M=A.render.frame;Q[l.id]!==M&&(D(l),Q[l.id]=M)}function e(l){const w=a();l.__bindingPointIndex=w;const c=B.createBuffer(),y=l.__size,M=l.usage;return B.bindBuffer(35345,c),B.bufferData(35345,y,M),B.bindBuffer(35345,null),B.bindBufferBase(35345,w,c),c}function a(){for(let l=0;l<i;l++)if(E.indexOf(l)===-1)return E.push(l),l;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function D(l){const w=C[l.id],c=l.uniforms,y=l.__cache;B.bindBuffer(35345,w);for(let M=0,R=c.length;M<R;M++){const k=c[M];if(s(k,M,y)===!0){const K=k.__offset,U=Array.isArray(k.value)?k.value:[k.value];let q=0;for(let V=0;V<U.length;V++){const Y=U[V],H=n(Y);typeof Y=="number"?(k.__data[0]=Y,B.bufferSubData(35345,K+q,k.__data)):Y.isMatrix3?(k.__data[0]=Y.elements[0],k.__data[1]=Y.elements[1],k.__data[2]=Y.elements[2],k.__data[3]=Y.elements[0],k.__data[4]=Y.elements[3],k.__data[5]=Y.elements[4],k.__data[6]=Y.elements[5],k.__data[7]=Y.elements[0],k.__data[8]=Y.elements[6],k.__data[9]=Y.elements[7],k.__data[10]=Y.elements[8],k.__data[11]=Y.elements[0]):(Y.toArray(k.__data,q),q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}B.bufferSubData(35345,K,k.__data)}}B.bindBuffer(35345,null)}function s(l,w,c){const y=l.value;if(c[w]===void 0){if(typeof y=="number")c[w]=y;else{const M=Array.isArray(y)?y:[y],R=[];for(let k=0;k<M.length;k++)R.push(M[k].clone());c[w]=R}return!0}else if(typeof y=="number"){if(c[w]!==y)return c[w]=y,!0}else{const M=Array.isArray(c[w])?c[w]:[c[w]],R=Array.isArray(y)?y:[y];for(let k=0;k<M.length;k++){const K=M[k];if(K.equals(R[k])===!1)return K.copy(R[k]),!0}}return!1}function G(l){const w=l.uniforms;let c=0;const y=16;let M=0;for(let R=0,k=w.length;R<k;R++){const K=w[R],U={boundary:0,storage:0},q=Array.isArray(K.value)?K.value:[K.value];for(let V=0,Y=q.length;V<Y;V++){const H=q[V],p=n(H);U.boundary+=p.boundary,U.storage+=p.storage}if(K.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=c,R>0){M=c%y;const V=y-M;M!==0&&V-U.boundary<0&&(c+=y-M,K.__offset=c)}c+=U.storage}return M=c%y,M>0&&(c+=y-M),l.__size=c,l.__cache={},this}function n(l){const w={boundary:0,storage:0};return typeof l=="number"?(w.boundary=4,w.storage=4):l.isVector2?(w.boundary=8,w.storage=8):l.isVector3||l.isColor?(w.boundary=16,w.storage=12):l.isVector4?(w.boundary=16,w.storage=16):l.isMatrix3?(w.boundary=48,w.storage=48):l.isMatrix4?(w.boundary=64,w.storage=64):l.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",l),w}function h(l){const w=l.target;w.removeEventListener("dispose",h);const c=E.indexOf(w.__bindingPointIndex);E.splice(c,1),B.deleteBuffer(C[w.id]),delete C[w.id],delete Q[w.id]}function S(){for(const l in C)B.deleteBuffer(C[l]);E=[],C={},Q={}}return{bind:o,update:t,dispose:S}}function QS(){const B=oQ("canvas");return B.style.display="block",B}function Ya(B={}){this.isWebGLRenderer=!0;const A=B.canvas!==void 0?B.canvas:QS(),I=B.context!==void 0?B.context:null,g=B.depth!==void 0?B.depth:!0,C=B.stencil!==void 0?B.stencil:!0,Q=B.antialias!==void 0?B.antialias:!1,E=B.premultipliedAlpha!==void 0?B.premultipliedAlpha:!0,i=B.preserveDrawingBuffer!==void 0?B.preserveDrawingBuffer:!1,o=B.powerPreference!==void 0?B.powerPreference:"default",t=B.failIfMajorPerformanceCaveat!==void 0?B.failIfMajorPerformanceCaveat:!1;let e;I!==null?e=I.getContextAttributes().alpha:e=B.alpha!==void 0?B.alpha:!1;let a=null,D=null;const s=[],G=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Fg,this.physicallyCorrectLights=!1,this.toneMapping=xg,this.toneMappingExposure=1;const n=this;let h=!1,S=0,l=0,w=null,c=-1,y=null;const M=new WI,R=new WI;let k=null,K=A.width,U=A.height,q=1,V=null,Y=null;const H=new WI(0,0,K,U),p=new WI(0,0,K,U);let _=!1;const z=new Go;let T=!1,BA=!1,QA=null;const m=new FI,j=new hA,IA=new L,eA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function DA(){return w===null?q:1}let u=I;function tA(J,P){for(let AA=0;AA<J.length;AA++){const Z=J[AA],CA=A.getContext(Z,P);if(CA!==null)return CA}return null}try{const J={alpha:!0,depth:g,stencil:C,antialias:Q,premultipliedAlpha:E,preserveDrawingBuffer:i,powerPreference:o,failIfMajorPerformanceCaveat:t};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${ao}`),A.addEventListener("webglcontextlost",dA,!1),A.addEventListener("webglcontextrestored",qA,!1),A.addEventListener("webglcontextcreationerror",jA,!1),u===null){const P=["webgl2","webgl","experimental-webgl"];if(n.isWebGL1Renderer===!0&&P.shift(),u=tA(P,J),u===null)throw tA(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}u.getShaderPrecisionFormat===void 0&&(u.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(J){throw console.error("THREE.WebGLRenderer: "+J.message),J}let KA,UA,GA,xA,v,gA,nA,MA,wA,mA,LA,YA,iI,gI,F,N,X,iA,sA,SA,HA,d,O,cA;function yA(){KA=new Gw(u),UA=new ew(u,KA,B),KA.init(UA),d=new zr(u,KA,UA),GA=new Xr(u,KA,UA),xA=new Sw,v=new fr,gA=new _r(u,KA,GA,v,UA,d,xA),nA=new Dw(n),MA=new hw(n),wA=new Jn(u,UA),O=new ow(u,KA,wA,UA),mA=new ww(u,wA,xA,O),LA=new yw(u,mA,wA,xA),sA=new lw(u,UA,gA),N=new aw(v),YA=new Lr(n,nA,MA,KA,UA,O,N),iI=new CS(n,v),gI=new Hr,F=new Zr(KA,UA),iA=new iw(n,nA,MA,GA,LA,e,E),X=new Vr(n,LA,UA),cA=new BS(u,xA,UA,GA),SA=new tw(u,KA,xA,UA),HA=new rw(u,KA,xA,UA),xA.programs=YA.programs,n.capabilities=UA,n.extensions=KA,n.properties=v,n.renderLists=gI,n.shadowMap=X,n.state=GA,n.info=xA}yA();const kA=new gS(n,u);this.xr=kA,this.getContext=function(){return u},this.getContextAttributes=function(){return u.getContextAttributes()},this.forceContextLoss=function(){const J=KA.get("WEBGL_lose_context");J&&J.loseContext()},this.forceContextRestore=function(){const J=KA.get("WEBGL_lose_context");J&&J.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(J){J!==void 0&&(q=J,this.setSize(K,U,!1))},this.getSize=function(J){return J.set(K,U)},this.setSize=function(J,P,AA){if(kA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=J,U=P,A.width=Math.floor(J*q),A.height=Math.floor(P*q),AA!==!1&&(A.style.width=J+"px",A.style.height=P+"px"),this.setViewport(0,0,J,P)},this.getDrawingBufferSize=function(J){return J.set(K*q,U*q).floor()},this.setDrawingBufferSize=function(J,P,AA){K=J,U=P,q=AA,A.width=Math.floor(J*AA),A.height=Math.floor(P*AA),this.setViewport(0,0,J,P)},this.getCurrentViewport=function(J){return J.copy(M)},this.getViewport=function(J){return J.copy(H)},this.setViewport=function(J,P,AA,Z){J.isVector4?H.set(J.x,J.y,J.z,J.w):H.set(J,P,AA,Z),GA.viewport(M.copy(H).multiplyScalar(q).floor())},this.getScissor=function(J){return J.copy(p)},this.setScissor=function(J,P,AA,Z){J.isVector4?p.set(J.x,J.y,J.z,J.w):p.set(J,P,AA,Z),GA.scissor(R.copy(p).multiplyScalar(q).floor())},this.getScissorTest=function(){return _},this.setScissorTest=function(J){GA.setScissorTest(_=J)},this.setOpaqueSort=function(J){V=J},this.setTransparentSort=function(J){Y=J},this.getClearColor=function(J){return J.copy(iA.getClearColor())},this.setClearColor=function(){iA.setClearColor.apply(iA,arguments)},this.getClearAlpha=function(){return iA.getClearAlpha()},this.setClearAlpha=function(){iA.setClearAlpha.apply(iA,arguments)},this.clear=function(J=!0,P=!0,AA=!0){let Z=0;J&&(Z|=16384),P&&(Z|=256),AA&&(Z|=1024),u.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",dA,!1),A.removeEventListener("webglcontextrestored",qA,!1),A.removeEventListener("webglcontextcreationerror",jA,!1),gI.dispose(),F.dispose(),v.dispose(),nA.dispose(),MA.dispose(),LA.dispose(),O.dispose(),cA.dispose(),YA.dispose(),kA.dispose(),kA.removeEventListener("sessionstart",lA),kA.removeEventListener("sessionend",pA),QA&&(QA.dispose(),QA=null),QI.stop()};function dA(J){J.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function qA(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const J=xA.autoReset,P=X.enabled,AA=X.autoUpdate,Z=X.needsUpdate,CA=X.type;yA(),xA.autoReset=J,X.enabled=P,X.autoUpdate=AA,X.needsUpdate=Z,X.type=CA}function jA(J){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",J.statusMessage)}function VA(J){const P=J.target;P.removeEventListener("dispose",VA),oI(P)}function oI(J){x(J),v.remove(J)}function x(J){const P=v.get(J).programs;P!==void 0&&(P.forEach(function(AA){YA.releaseProgram(AA)}),J.isShaderMaterial&&YA.releaseShaderCache(J))}this.renderBufferDirect=function(J,P,AA,Z,CA,fA){P===null&&(P=eA);const TA=CA.isMesh&&CA.matrixWorld.determinant()<0,ZA=WD(J,P,AA,Z,CA);GA.setMaterial(Z,TA);let WA=AA.index,CI=1;Z.wireframe===!0&&(WA=mA.getWireframeAttribute(AA),CI=2);const XA=AA.drawRange,_A=AA.attributes.position;let RI=XA.start*CI,ig=(XA.start+XA.count)*CI;fA!==null&&(RI=Math.max(RI,fA.start*CI),ig=Math.min(ig,(fA.start+fA.count)*CI)),WA!==null?(RI=Math.max(RI,0),ig=Math.min(ig,WA.count)):_A!=null&&(RI=Math.max(RI,0),ig=Math.min(ig,_A.count));const jg=ig-RI;if(jg<0||jg===1/0)return;O.setup(CA,Z,ZA,AA,WA);let kC,qI=SA;if(WA!==null&&(kC=wA.get(WA),qI=HA,qI.setIndex(kC)),CA.isMesh)Z.wireframe===!0?(GA.setLineWidth(Z.wireframeLinewidth*DA()),qI.setMode(1)):qI.setMode(4);else if(CA.isLine){let zA=Z.linewidth;zA===void 0&&(zA=1),GA.setLineWidth(zA*DA()),CA.isLineSegments?qI.setMode(1):CA.isLineLoop?qI.setMode(2):qI.setMode(3)}else CA.isPoints?qI.setMode(0):CA.isSprite&&qI.setMode(4);if(CA.isInstancedMesh)qI.renderInstances(RI,jg,CA.count);else if(AA.isInstancedBufferGeometry){const zA=AA._maxInstanceCount!==void 0?AA._maxInstanceCount:1/0,jE=Math.min(AA.instanceCount,zA);qI.renderInstances(RI,jg,jE)}else qI.render(RI,jg)},this.compile=function(J,P){function AA(Z,CA,fA){Z.transparent===!0&&Z.side===CC&&Z.forceSinglePass===!1?(Z.side=wg,Z.needsUpdate=!0,yg(Z,CA,fA),Z.side=hC,Z.needsUpdate=!0,yg(Z,CA,fA),Z.side=CC):yg(Z,CA,fA)}D=F.get(J),D.init(),G.push(D),J.traverseVisible(function(Z){Z.isLight&&Z.layers.test(P.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights(n.physicallyCorrectLights),J.traverse(function(Z){const CA=Z.material;if(CA)if(Array.isArray(CA))for(let fA=0;fA<CA.length;fA++){const TA=CA[fA];AA(TA,J,Z)}else AA(CA,J,Z)}),G.pop(),D=null};let $=null;function oA(J){$&&$(J)}function lA(){QI.stop()}function pA(){QI.start()}const QI=new Ja;QI.setAnimationLoop(oA),typeof self<"u"&&QI.setContext(self),this.setAnimationLoop=function(J){$=J,kA.setAnimationLoop(J),J===null?QI.stop():QI.start()},kA.addEventListener("sessionstart",lA),kA.addEventListener("sessionend",pA),this.render=function(J,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),kA.enabled===!0&&kA.isPresenting===!0&&(kA.cameraAutoUpdate===!0&&kA.updateCamera(P),P=kA.getCamera()),J.isScene===!0&&J.onBeforeRender(n,J,P,w),D=F.get(J,G.length),D.init(),G.push(D),m.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),z.setFromProjectionMatrix(m),BA=this.localClippingEnabled,T=N.init(this.clippingPlanes,BA),a=gI.get(J,s.length),a.init(),s.push(a),TI(J,P,0,n.sortObjects),a.finish(),n.sortObjects===!0&&a.sort(V,Y),T===!0&&N.beginShadows();const AA=D.state.shadowsArray;if(X.render(AA,J,P),T===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),iA.render(a,J),D.setupLights(n.physicallyCorrectLights),P.isArrayCamera){const Z=P.cameras;for(let CA=0,fA=Z.length;CA<fA;CA++){const TA=Z[CA];PI(a,J,TA,TA.viewport)}}else PI(a,J,P);w!==null&&(gA.updateMultisampleRenderTarget(w),gA.updateRenderTargetMipmap(w)),J.isScene===!0&&J.onAfterRender(n,J,P),O.resetDefaultState(),c=-1,y=null,G.pop(),G.length>0?D=G[G.length-1]:D=null,s.pop(),s.length>0?a=s[s.length-1]:a=null};function TI(J,P,AA,Z){if(J.visible===!1)return;if(J.layers.test(P.layers)){if(J.isGroup)AA=J.renderOrder;else if(J.isLOD)J.autoUpdate===!0&&J.update(P);else if(J.isLight)D.pushLight(J),J.castShadow&&D.pushShadow(J);else if(J.isSprite){if(!J.frustumCulled||z.intersectsSprite(J)){Z&&IA.setFromMatrixPosition(J.matrixWorld).applyMatrix4(m);const TA=LA.update(J),ZA=J.material;ZA.visible&&a.push(J,TA,ZA,AA,IA.z,null)}}else if((J.isMesh||J.isLine||J.isPoints)&&(J.isSkinnedMesh&&J.skeleton.frame!==xA.render.frame&&(J.skeleton.update(),J.skeleton.frame=xA.render.frame),!J.frustumCulled||z.intersectsObject(J))){Z&&IA.setFromMatrixPosition(J.matrixWorld).applyMatrix4(m);const TA=LA.update(J),ZA=J.material;if(Array.isArray(ZA)){const WA=TA.groups;for(let CI=0,XA=WA.length;CI<XA;CI++){const _A=WA[CI],RI=ZA[_A.materialIndex];RI&&RI.visible&&a.push(J,TA,RI,AA,IA.z,_A)}}else ZA.visible&&a.push(J,TA,ZA,AA,IA.z,null)}}const fA=J.children;for(let TA=0,ZA=fA.length;TA<ZA;TA++)TI(fA[TA],P,AA,Z)}function PI(J,P,AA,Z){const CA=J.opaque,fA=J.transmissive,TA=J.transparent;D.setupLightsView(AA),T===!0&&N.setGlobalState(n.clippingPlanes,AA),fA.length>0&&cC(CA,P,AA),Z&&GA.viewport(M.copy(Z)),CA.length>0&&SI(CA,P,AA),fA.length>0&&SI(fA,P,AA),TA.length>0&&SI(TA,P,AA),GA.buffers.depth.setTest(!0),GA.buffers.depth.setMask(!0),GA.buffers.color.setMask(!0),GA.setPolygonOffset(!1)}function cC(J,P,AA){const Z=UA.isWebGL2;QA===null&&(QA=new GC(1,1,{generateMipmaps:!0,type:KA.has("EXT_color_buffer_half_float")?Yg:mC,minFilter:KB,samples:Z&&Q===!0?4:0})),n.getDrawingBufferSize(j),Z?QA.setSize(j.x,j.y):QA.setSize(aE(j.x),aE(j.y));const CA=n.getRenderTarget();n.setRenderTarget(QA),n.clear();const fA=n.toneMapping;n.toneMapping=xg,SI(J,P,AA),n.toneMapping=fA,gA.updateMultisampleRenderTarget(QA),gA.updateRenderTargetMipmap(QA),n.setRenderTarget(CA)}function SI(J,P,AA){const Z=P.isScene===!0?P.overrideMaterial:null;for(let CA=0,fA=J.length;CA<fA;CA++){const TA=J[CA],ZA=TA.object,WA=TA.geometry,CI=Z===null?TA.material:Z,XA=TA.group;ZA.layers.test(AA.layers)&&vg(ZA,P,AA,WA,CI,XA)}}function vg(J,P,AA,Z,CA,fA){J.onBeforeRender(n,P,AA,Z,CA,fA),J.modelViewMatrix.multiplyMatrices(AA.matrixWorldInverse,J.matrixWorld),J.normalMatrix.getNormalMatrix(J.modelViewMatrix),CA.onBeforeRender(n,P,AA,Z,J,fA),CA.transparent===!0&&CA.side===CC&&CA.forceSinglePass===!1?(CA.side=wg,CA.needsUpdate=!0,n.renderBufferDirect(AA,P,Z,CA,J,fA),CA.side=hC,CA.needsUpdate=!0,n.renderBufferDirect(AA,P,Z,CA,J,fA),CA.side=CC):n.renderBufferDirect(AA,P,Z,CA,J,fA),J.onAfterRender(n,P,AA,Z,CA,fA)}function yg(J,P,AA){P.isScene!==!0&&(P=eA);const Z=v.get(J),CA=D.state.lights,fA=D.state.shadowsArray,TA=CA.state.version,ZA=YA.getParameters(J,CA.state,fA,P,AA),WA=YA.getProgramCacheKey(ZA);let CI=Z.programs;Z.environment=J.isMeshStandardMaterial?P.environment:null,Z.fog=P.fog,Z.envMap=(J.isMeshStandardMaterial?MA:nA).get(J.envMap||Z.environment),CI===void 0&&(J.addEventListener("dispose",VA),CI=new Map,Z.programs=CI);let XA=CI.get(WA);if(XA!==void 0){if(Z.currentProgram===XA&&Z.lightsStateVersion===TA)return _o(J,ZA),XA}else ZA.uniforms=YA.getUniforms(J),J.onBuild(AA,ZA,n),J.onBeforeCompile(ZA,n),XA=YA.acquireProgram(ZA,WA),CI.set(WA,XA),Z.uniforms=ZA.uniforms;const _A=Z.uniforms;(!J.isShaderMaterial&&!J.isRawShaderMaterial||J.clipping===!0)&&(_A.clippingPlanes=N.uniform),_o(J,ZA),Z.needsLights=vD(J),Z.lightsStateVersion=TA,Z.needsLights&&(_A.ambientLightColor.value=CA.state.ambient,_A.lightProbe.value=CA.state.probe,_A.directionalLights.value=CA.state.directional,_A.directionalLightShadows.value=CA.state.directionalShadow,_A.spotLights.value=CA.state.spot,_A.spotLightShadows.value=CA.state.spotShadow,_A.rectAreaLights.value=CA.state.rectArea,_A.ltc_1.value=CA.state.rectAreaLTC1,_A.ltc_2.value=CA.state.rectAreaLTC2,_A.pointLights.value=CA.state.point,_A.pointLightShadows.value=CA.state.pointShadow,_A.hemisphereLights.value=CA.state.hemi,_A.directionalShadowMap.value=CA.state.directionalShadowMap,_A.directionalShadowMatrix.value=CA.state.directionalShadowMatrix,_A.spotShadowMap.value=CA.state.spotShadowMap,_A.spotLightMatrix.value=CA.state.spotLightMatrix,_A.spotLightMap.value=CA.state.spotLightMap,_A.pointShadowMap.value=CA.state.pointShadowMap,_A.pointShadowMatrix.value=CA.state.pointShadowMatrix);const RI=XA.getUniforms(),ig=gE.seqWithValue(RI.seq,_A);return Z.currentProgram=XA,Z.uniformsList=ig,XA}function _o(J,P){const AA=v.get(J);AA.outputEncoding=P.outputEncoding,AA.instancing=P.instancing,AA.skinning=P.skinning,AA.morphTargets=P.morphTargets,AA.morphNormals=P.morphNormals,AA.morphColors=P.morphColors,AA.morphTargetsCount=P.morphTargetsCount,AA.numClippingPlanes=P.numClippingPlanes,AA.numIntersection=P.numClipIntersection,AA.vertexAlphas=P.vertexAlphas,AA.vertexTangents=P.vertexTangents,AA.toneMapping=P.toneMapping}function WD(J,P,AA,Z,CA){P.isScene!==!0&&(P=eA),gA.resetTextureUnits();const fA=P.fog,TA=Z.isMeshStandardMaterial?P.environment:null,ZA=w===null?n.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Fg,WA=(Z.isMeshStandardMaterial?MA:nA).get(Z.envMap||TA),CI=Z.vertexColors===!0&&!!AA.attributes.color&&AA.attributes.color.itemSize===4,XA=!!Z.normalMap&&!!AA.attributes.tangent,_A=!!AA.morphAttributes.position,RI=!!AA.morphAttributes.normal,ig=!!AA.morphAttributes.color,jg=Z.toneMapped?n.toneMapping:xg,kC=AA.morphAttributes.position||AA.morphAttributes.normal||AA.morphAttributes.color,qI=kC!==void 0?kC.length:0,zA=v.get(Z),jE=D.state.lights;if(T===!0&&(BA===!0||J!==y)){const og=J===y&&Z.id===c;N.setState(Z,J,og)}let xI=!1;Z.version===zA.__version?(zA.needsLights&&zA.lightsStateVersion!==jE.state.version||zA.outputEncoding!==ZA||CA.isInstancedMesh&&zA.instancing===!1||!CA.isInstancedMesh&&zA.instancing===!0||CA.isSkinnedMesh&&zA.skinning===!1||!CA.isSkinnedMesh&&zA.skinning===!0||zA.envMap!==WA||Z.fog===!0&&zA.fog!==fA||zA.numClippingPlanes!==void 0&&(zA.numClippingPlanes!==N.numPlanes||zA.numIntersection!==N.numIntersection)||zA.vertexAlphas!==CI||zA.vertexTangents!==XA||zA.morphTargets!==_A||zA.morphNormals!==RI||zA.morphColors!==ig||zA.toneMapping!==jg||UA.isWebGL2===!0&&zA.morphTargetsCount!==qI)&&(xI=!0):(xI=!0,zA.__version=Z.version);let lC=zA.currentProgram;xI===!0&&(lC=yg(Z,P,CA));let zo=!1,uB=!1,VE=!1;const jI=lC.getUniforms(),yC=zA.uniforms;if(GA.useProgram(lC.program)&&(zo=!0,uB=!0,VE=!0),Z.id!==c&&(c=Z.id,uB=!0),zo||y!==J){if(jI.setValue(u,"projectionMatrix",J.projectionMatrix),UA.logarithmicDepthBuffer&&jI.setValue(u,"logDepthBufFC",2/(Math.log(J.far+1)/Math.LN2)),y!==J&&(y=J,uB=!0,VE=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const og=jI.map.cameraPosition;og!==void 0&&og.setValue(u,IA.setFromMatrixPosition(J.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&jI.setValue(u,"isOrthographic",J.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||CA.isSkinnedMesh)&&jI.setValue(u,"viewMatrix",J.matrixWorldInverse)}if(CA.isSkinnedMesh){jI.setOptional(u,CA,"bindMatrix"),jI.setOptional(u,CA,"bindMatrixInverse");const og=CA.skeleton;og&&(UA.floatVertexTextures?(og.boneTexture===null&&og.computeBoneTexture(),jI.setValue(u,"boneTexture",og.boneTexture,gA),jI.setValue(u,"boneTextureSize",og.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const XE=AA.morphAttributes;if((XE.position!==void 0||XE.normal!==void 0||XE.color!==void 0&&UA.isWebGL2===!0)&&sA.update(CA,AA,Z,lC),(uB||zA.receiveShadow!==CA.receiveShadow)&&(zA.receiveShadow=CA.receiveShadow,jI.setValue(u,"receiveShadow",CA.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(yC.envMap.value=WA,yC.flipEnvMap.value=WA.isCubeTexture&&WA.isRenderTargetTexture===!1?-1:1),uB&&(jI.setValue(u,"toneMappingExposure",n.toneMappingExposure),zA.needsLights&&PD(yC,VE),fA&&Z.fog===!0&&iI.refreshFogUniforms(yC,fA),iI.refreshMaterialUniforms(yC,Z,q,U,QA),gE.upload(u,zA.uniformsList,yC,gA)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(gE.upload(u,zA.uniformsList,yC,gA),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&jI.setValue(u,"center",CA.center),jI.setValue(u,"modelViewMatrix",CA.modelViewMatrix),jI.setValue(u,"normalMatrix",CA.normalMatrix),jI.setValue(u,"modelMatrix",CA.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const og=Z.uniformsGroups;for(let _E=0,jD=og.length;_E<jD;_E++)if(UA.isWebGL2){const $o=og[_E];cA.update($o,lC),cA.bind($o,lC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return lC}function PD(J,P){J.ambientLightColor.needsUpdate=P,J.lightProbe.needsUpdate=P,J.directionalLights.needsUpdate=P,J.directionalLightShadows.needsUpdate=P,J.pointLights.needsUpdate=P,J.pointLightShadows.needsUpdate=P,J.spotLights.needsUpdate=P,J.spotLightShadows.needsUpdate=P,J.rectAreaLights.needsUpdate=P,J.hemisphereLights.needsUpdate=P}function vD(J){return J.isMeshLambertMaterial||J.isMeshToonMaterial||J.isMeshPhongMaterial||J.isMeshStandardMaterial||J.isShadowMaterial||J.isShaderMaterial&&J.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return l},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(J,P,AA){v.get(J.texture).__webglTexture=P,v.get(J.depthTexture).__webglTexture=AA;const Z=v.get(J);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=AA===void 0,Z.__autoAllocateDepthBuffer||KA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(J,P){const AA=v.get(J);AA.__webglFramebuffer=P,AA.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(J,P=0,AA=0){w=J,S=P,l=AA;let Z=!0,CA=null,fA=!1,TA=!1;if(J){const WA=v.get(J);WA.__useDefaultFramebuffer!==void 0?(GA.bindFramebuffer(36160,null),Z=!1):WA.__webglFramebuffer===void 0?gA.setupRenderTarget(J):WA.__hasExternalTextures&&gA.rebindTextures(J,v.get(J.texture).__webglTexture,v.get(J.depthTexture).__webglTexture);const CI=J.texture;(CI.isData3DTexture||CI.isDataArrayTexture||CI.isCompressedArrayTexture)&&(TA=!0);const XA=v.get(J).__webglFramebuffer;J.isWebGLCubeRenderTarget?(CA=XA[P],fA=!0):UA.isWebGL2&&J.samples>0&&gA.useMultisampledRTT(J)===!1?CA=v.get(J).__webglMultisampledFramebuffer:CA=XA,M.copy(J.viewport),R.copy(J.scissor),k=J.scissorTest}else M.copy(H).multiplyScalar(q).floor(),R.copy(p).multiplyScalar(q).floor(),k=_;if(GA.bindFramebuffer(36160,CA)&&UA.drawBuffers&&Z&&GA.drawBuffers(J,CA),GA.viewport(M),GA.scissor(R),GA.setScissorTest(k),fA){const WA=v.get(J.texture);u.framebufferTexture2D(36160,36064,34069+P,WA.__webglTexture,AA)}else if(TA){const WA=v.get(J.texture),CI=P||0;u.framebufferTextureLayer(36160,36064,WA.__webglTexture,AA||0,CI)}c=-1},this.readRenderTargetPixels=function(J,P,AA,Z,CA,fA,TA){if(!(J&&J.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ZA=v.get(J).__webglFramebuffer;if(J.isWebGLCubeRenderTarget&&TA!==void 0&&(ZA=ZA[TA]),ZA){GA.bindFramebuffer(36160,ZA);try{const WA=J.texture,CI=WA.format,XA=WA.type;if(CI!==pg&&d.convert(CI)!==u.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const _A=XA===Yg&&(KA.has("EXT_color_buffer_half_float")||UA.isWebGL2&&KA.has("EXT_color_buffer_float"));if(XA!==mC&&d.convert(XA)!==u.getParameter(35738)&&!(XA===Ng&&(UA.isWebGL2||KA.has("OES_texture_float")||KA.has("WEBGL_color_buffer_float")))&&!_A){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=J.width-Z&&AA>=0&&AA<=J.height-CA&&u.readPixels(P,AA,Z,CA,d.convert(CI),d.convert(XA),fA)}finally{const WA=w!==null?v.get(w).__webglFramebuffer:null;GA.bindFramebuffer(36160,WA)}}},this.copyFramebufferToTexture=function(J,P,AA=0){const Z=Math.pow(2,-AA),CA=Math.floor(P.image.width*Z),fA=Math.floor(P.image.height*Z);gA.setTexture2D(P,0),u.copyTexSubImage2D(3553,AA,0,0,J.x,J.y,CA,fA),GA.unbindTexture()},this.copyTextureToTexture=function(J,P,AA,Z=0){const CA=P.image.width,fA=P.image.height,TA=d.convert(AA.format),ZA=d.convert(AA.type);gA.setTexture2D(AA,0),u.pixelStorei(37440,AA.flipY),u.pixelStorei(37441,AA.premultiplyAlpha),u.pixelStorei(3317,AA.unpackAlignment),P.isDataTexture?u.texSubImage2D(3553,Z,J.x,J.y,CA,fA,TA,ZA,P.image.data):P.isCompressedTexture?u.compressedTexSubImage2D(3553,Z,J.x,J.y,P.mipmaps[0].width,P.mipmaps[0].height,TA,P.mipmaps[0].data):u.texSubImage2D(3553,Z,J.x,J.y,TA,ZA,P.image),Z===0&&AA.generateMipmaps&&u.generateMipmap(3553),GA.unbindTexture()},this.copyTextureToTexture3D=function(J,P,AA,Z,CA=0){if(n.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fA=J.max.x-J.min.x+1,TA=J.max.y-J.min.y+1,ZA=J.max.z-J.min.z+1,WA=d.convert(Z.format),CI=d.convert(Z.type);let XA;if(Z.isData3DTexture)gA.setTexture3D(Z,0),XA=32879;else if(Z.isDataArrayTexture)gA.setTexture2DArray(Z,0),XA=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}u.pixelStorei(37440,Z.flipY),u.pixelStorei(37441,Z.premultiplyAlpha),u.pixelStorei(3317,Z.unpackAlignment);const _A=u.getParameter(3314),RI=u.getParameter(32878),ig=u.getParameter(3316),jg=u.getParameter(3315),kC=u.getParameter(32877),qI=AA.isCompressedTexture?AA.mipmaps[0]:AA.image;u.pixelStorei(3314,qI.width),u.pixelStorei(32878,qI.height),u.pixelStorei(3316,J.min.x),u.pixelStorei(3315,J.min.y),u.pixelStorei(32877,J.min.z),AA.isDataTexture||AA.isData3DTexture?u.texSubImage3D(XA,CA,P.x,P.y,P.z,fA,TA,ZA,WA,CI,qI.data):AA.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),u.compressedTexSubImage3D(XA,CA,P.x,P.y,P.z,fA,TA,ZA,WA,qI.data)):u.texSubImage3D(XA,CA,P.x,P.y,P.z,fA,TA,ZA,WA,CI,qI),u.pixelStorei(3314,_A),u.pixelStorei(32878,RI),u.pixelStorei(3316,ig),u.pixelStorei(3315,jg),u.pixelStorei(32877,kC),CA===0&&Z.generateMipmaps&&u.generateMipmap(XA),GA.unbindTexture()},this.initTexture=function(J){J.isCubeTexture?gA.setTextureCube(J,0):J.isData3DTexture?gA.setTexture3D(J,0):J.isDataArrayTexture||J.isCompressedArrayTexture?gA.setTexture2DArray(J,0):gA.setTexture2D(J,0),GA.unbindTexture()},this.resetState=function(){S=0,l=0,w=null,GA.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ES extends Ya{}ES.prototype.isWebGL1Renderer=!0;class iS extends NI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class La extends $I{constructor(A=null,I=1,g=1,C,Q,E,i,o,t=ZI,e=ZI,a,D){super(null,E,i,o,t,e,C,Q,a,D),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa extends dB{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new aI(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const he=new L,Ge=new L,we=new FI,Ri=new so,PQ=new RE;class oS extends NI{constructor(A=new lg,I=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)he.fromBufferAttribute(I,C-1),Ge.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=he.distanceTo(Ge);A.setAttribute("lineDistance",new fI(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),PQ.copy(g.boundingSphere),PQ.applyMatrix4(C),PQ.radius+=Q,A.ray.intersectsSphere(PQ)===!1)return;we.copy(C).invert(),Ri.copy(A.ray).applyMatrix4(we);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,t=new L,e=new L,a=new L,D=new L,s=this.isLineSegments?2:1,G=g.index,h=g.attributes.position;if(G!==null){const S=Math.max(0,E.start),l=Math.min(G.count,E.start+E.count);for(let w=S,c=l-1;w<c;w+=s){const y=G.getX(w),M=G.getX(w+1);if(t.fromBufferAttribute(h,y),e.fromBufferAttribute(h,M),Ri.distanceSqToSegment(t,e,D,a)>o)continue;D.applyMatrix4(this.matrixWorld);const k=A.ray.origin.distanceTo(D);k<A.near||k>A.far||I.push({distance:k,point:a.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,E.start),l=Math.min(h.count,E.start+E.count);for(let w=S,c=l-1;w<c;w+=s){if(t.fromBufferAttribute(h,w),e.fromBufferAttribute(h,w+1),Ri.distanceSqToSegment(t,e,D,a)>o)continue;D.applyMatrix4(this.matrixWorld);const M=A.ray.origin.distanceTo(D);M<A.near||M>A.far||I.push({distance:M,point:a.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}}const re=new L,Se=new L;let tS=class extends oS{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)re.fromBufferAttribute(I,C),Se.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+re.distanceTo(Se);A.setAttribute("lineDistance",new fI(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};class Pg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,I){const g=this.getUtoTmapping(A);return this.getPoint(g,I)}getPoints(A=5){const I=[];for(let g=0;g<=A;g++)I.push(this.getPoint(g/A));return I}getSpacedPoints(A=5){const I=[];for(let g=0;g<=A;g++)I.push(this.getPointAt(g/A));return I}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const I=[];let g,C=this.getPoint(0),Q=0;I.push(0);for(let E=1;E<=A;E++)g=this.getPoint(E/A),Q+=g.distanceTo(C),I.push(Q),C=g;return this.cacheArcLengths=I,I}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,I){const g=this.getLengths();let C=0;const Q=g.length;let E;I?E=I:E=A*g[Q-1];let i=0,o=Q-1,t;for(;i<=o;)if(C=Math.floor(i+(o-i)/2),t=g[C]-E,t<0)i=C+1;else if(t>0)o=C-1;else{o=C;break}if(C=o,g[C]===E)return C/(Q-1);const e=g[C],D=g[C+1]-e,s=(E-e)/D;return(C+s)/(Q-1)}getTangent(A,I){let C=A-1e-4,Q=A+1e-4;C<0&&(C=0),Q>1&&(Q=1);const E=this.getPoint(C),i=this.getPoint(Q),o=I||(E.isVector2?new hA:new L);return o.copy(i).sub(E).normalize(),o}getTangentAt(A,I){const g=this.getUtoTmapping(A);return this.getTangent(g,I)}computeFrenetFrames(A,I){const g=new L,C=[],Q=[],E=[],i=new L,o=new FI;for(let s=0;s<=A;s++){const G=s/A;C[s]=this.getTangentAt(G,new L)}Q[0]=new L,E[0]=new L;let t=Number.MAX_VALUE;const e=Math.abs(C[0].x),a=Math.abs(C[0].y),D=Math.abs(C[0].z);e<=t&&(t=e,g.set(1,0,0)),a<=t&&(t=a,g.set(0,1,0)),D<=t&&g.set(0,0,1),i.crossVectors(C[0],g).normalize(),Q[0].crossVectors(C[0],i),E[0].crossVectors(C[0],Q[0]);for(let s=1;s<=A;s++){if(Q[s]=Q[s-1].clone(),E[s]=E[s-1].clone(),i.crossVectors(C[s-1],C[s]),i.length()>Number.EPSILON){i.normalize();const G=Math.acos(OI(C[s-1].dot(C[s]),-1,1));Q[s].applyMatrix4(o.makeRotationAxis(i,G))}E[s].crossVectors(C[s],Q[s])}if(I===!0){let s=Math.acos(OI(Q[0].dot(Q[A]),-1,1));s/=A,C[0].dot(i.crossVectors(Q[0],Q[A]))>0&&(s=-s);for(let G=1;G<=A;G++)Q[G].applyMatrix4(o.makeRotationAxis(C[G],s*G)),E[G].crossVectors(C[G],Q[G])}return{tangents:C,normals:Q,binormals:E}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class ro extends Pg{constructor(A=0,I=0,g=1,C=1,Q=0,E=Math.PI*2,i=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=A,this.aY=I,this.xRadius=g,this.yRadius=C,this.aStartAngle=Q,this.aEndAngle=E,this.aClockwise=i,this.aRotation=o}getPoint(A,I){const g=I||new hA,C=Math.PI*2;let Q=this.aEndAngle-this.aStartAngle;const E=Math.abs(Q)<Number.EPSILON;for(;Q<0;)Q+=C;for(;Q>C;)Q-=C;Q<Number.EPSILON&&(E?Q=0:Q=C),this.aClockwise===!0&&!E&&(Q===C?Q=-C:Q=Q-C);const i=this.aStartAngle+A*Q;let o=this.aX+this.xRadius*Math.cos(i),t=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){const e=Math.cos(this.aRotation),a=Math.sin(this.aRotation),D=o-this.aX,s=t-this.aY;o=D*e-s*a+this.aX,t=D*a+s*e+this.aY}return g.set(o,t)}copy(A){return super.copy(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}toJSON(){const A=super.toJSON();return A.aX=this.aX,A.aY=this.aY,A.xRadius=this.xRadius,A.yRadius=this.yRadius,A.aStartAngle=this.aStartAngle,A.aEndAngle=this.aEndAngle,A.aClockwise=this.aClockwise,A.aRotation=this.aRotation,A}fromJSON(A){return super.fromJSON(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}}class eS extends ro{constructor(A,I,g,C,Q,E){super(A,I,g,g,C,Q,E),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let B=0,A=0,I=0,g=0;function C(Q,E,i,o){B=Q,A=i,I=-3*Q+3*E-2*i-o,g=2*Q-2*E+i+o}return{initCatmullRom:function(Q,E,i,o,t){C(E,i,t*(i-Q),t*(o-E))},initNonuniformCatmullRom:function(Q,E,i,o,t,e,a){let D=(E-Q)/t-(i-Q)/(t+e)+(i-E)/e,s=(i-E)/e-(o-E)/(e+a)+(o-i)/a;D*=e,s*=e,C(E,i,D,s)},calc:function(Q){const E=Q*Q,i=E*Q;return B+A*Q+I*E+g*i}}}const vQ=new L,qi=new So,di=new So,pi=new So;class aS extends Pg{constructor(A=[],I=!1,g="centripetal",C=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=A,this.closed=I,this.curveType=g,this.tension=C}getPoint(A,I=new L){const g=I,C=this.points,Q=C.length,E=(Q-(this.closed?0:1))*A;let i=Math.floor(E),o=E-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/Q)+1)*Q:o===0&&i===Q-1&&(i=Q-2,o=1);let t,e;this.closed||i>0?t=C[(i-1)%Q]:(vQ.subVectors(C[0],C[1]).add(C[0]),t=vQ);const a=C[i%Q],D=C[(i+1)%Q];if(this.closed||i+2<Q?e=C[(i+2)%Q]:(vQ.subVectors(C[Q-1],C[Q-2]).add(C[Q-1]),e=vQ),this.curveType==="centripetal"||this.curveType==="chordal"){const s=this.curveType==="chordal"?.5:.25;let G=Math.pow(t.distanceToSquared(a),s),n=Math.pow(a.distanceToSquared(D),s),h=Math.pow(D.distanceToSquared(e),s);n<1e-4&&(n=1),G<1e-4&&(G=n),h<1e-4&&(h=n),qi.initNonuniformCatmullRom(t.x,a.x,D.x,e.x,G,n,h),di.initNonuniformCatmullRom(t.y,a.y,D.y,e.y,G,n,h),pi.initNonuniformCatmullRom(t.z,a.z,D.z,e.z,G,n,h)}else this.curveType==="catmullrom"&&(qi.initCatmullRom(t.x,a.x,D.x,e.x,this.tension),di.initCatmullRom(t.y,a.y,D.y,e.y,this.tension),pi.initCatmullRom(t.z,a.z,D.z,e.z,this.tension));return g.set(qi.calc(o),di.calc(o),pi.calc(o)),g}copy(A){super.copy(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(C.clone())}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}toJSON(){const A=super.toJSON();A.points=[];for(let I=0,g=this.points.length;I<g;I++){const C=this.points[I];A.points.push(C.toArray())}return A.closed=this.closed,A.curveType=this.curveType,A.tension=this.tension,A}fromJSON(A){super.fromJSON(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(new L().fromArray(C))}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}}function ce(B,A,I,g,C){const Q=(g-A)*.5,E=(C-I)*.5,i=B*B,o=B*i;return(2*I-2*g+Q+E)*o+(-3*I+3*g-2*Q-E)*i+Q*B+I}function DS(B,A){const I=1-B;return I*I*A}function sS(B,A){return 2*(1-B)*B*A}function nS(B,A){return B*B*A}function IQ(B,A,I,g){return DS(B,A)+sS(B,I)+nS(B,g)}function hS(B,A){const I=1-B;return I*I*I*A}function GS(B,A){const I=1-B;return 3*I*I*B*A}function wS(B,A){return 3*(1-B)*B*B*A}function rS(B,A){return B*B*B*A}function gQ(B,A,I,g,C){return hS(B,A)+GS(B,I)+wS(B,g)+rS(B,C)}class ua extends Pg{constructor(A=new hA,I=new hA,g=new hA,C=new hA){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=A,this.v1=I,this.v2=g,this.v3=C}getPoint(A,I=new hA){const g=I,C=this.v0,Q=this.v1,E=this.v2,i=this.v3;return g.set(gQ(A,C.x,Q.x,E.x,i.x),gQ(A,C.y,Q.y,E.y,i.y)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}}class SS extends Pg{constructor(A=new L,I=new L,g=new L,C=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=A,this.v1=I,this.v2=g,this.v3=C}getPoint(A,I=new L){const g=I,C=this.v0,Q=this.v1,E=this.v2,i=this.v3;return g.set(gQ(A,C.x,Q.x,E.x,i.x),gQ(A,C.y,Q.y,E.y,i.y),gQ(A,C.z,Q.z,E.z,i.z)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}}class co extends Pg{constructor(A=new hA,I=new hA){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=A,this.v2=I}getPoint(A,I=new hA){const g=I;return A===1?g.copy(this.v2):(g.copy(this.v2).sub(this.v1),g.multiplyScalar(A).add(this.v1)),g}getPointAt(A,I){return this.getPoint(A,I)}getTangent(A,I){const g=I||new hA;return g.copy(this.v2).sub(this.v1).normalize(),g}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class cS extends Pg{constructor(A=new L,I=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=A,this.v2=I}getPoint(A,I=new L){const g=I;return A===1?g.copy(this.v2):(g.copy(this.v2).sub(this.v1),g.multiplyScalar(A).add(this.v1)),g}getPointAt(A,I){return this.getPoint(A,I)}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class Ha extends Pg{constructor(A=new hA,I=new hA,g=new hA){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=A,this.v1=I,this.v2=g}getPoint(A,I=new hA){const g=I,C=this.v0,Q=this.v1,E=this.v2;return g.set(IQ(A,C.x,Q.x,E.x),IQ(A,C.y,Q.y,E.y)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class kS extends Pg{constructor(A=new L,I=new L,g=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=A,this.v1=I,this.v2=g}getPoint(A,I=new L){const g=I,C=this.v0,Q=this.v1,E=this.v2;return g.set(IQ(A,C.x,Q.x,E.x),IQ(A,C.y,Q.y,E.y),IQ(A,C.z,Q.z,E.z)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class ma extends Pg{constructor(A=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=A}getPoint(A,I=new hA){const g=I,C=this.points,Q=(C.length-1)*A,E=Math.floor(Q),i=Q-E,o=C[E===0?E:E-1],t=C[E],e=C[E>C.length-2?C.length-1:E+1],a=C[E>C.length-3?C.length-1:E+2];return g.set(ce(i,o.x,t.x,e.x,a.x),ce(i,o.y,t.y,e.y,a.y)),g}copy(A){super.copy(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(C.clone())}return this}toJSON(){const A=super.toJSON();A.points=[];for(let I=0,g=this.points.length;I<g;I++){const C=this.points[I];A.points.push(C.toArray())}return A}fromJSON(A){super.fromJSON(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(new hA().fromArray(C))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:eS,CatmullRomCurve3:aS,CubicBezierCurve:ua,CubicBezierCurve3:SS,EllipseCurve:ro,LineCurve:co,LineCurve3:cS,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:kS,SplineCurve:ma});class lS extends Pg{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(A){this.curves.push(A)}closePath(){const A=this.curves[0].getPoint(0),I=this.curves[this.curves.length-1].getPoint(1);A.equals(I)||this.curves.push(new co(I,A))}getPoint(A,I){const g=A*this.getLength(),C=this.getCurveLengths();let Q=0;for(;Q<C.length;){if(C[Q]>=g){const E=C[Q]-g,i=this.curves[Q],o=i.getLength(),t=o===0?0:1-E/o;return i.getPointAt(t,I)}Q++}return null}getLength(){const A=this.getCurveLengths();return A[A.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const A=[];let I=0;for(let g=0,C=this.curves.length;g<C;g++)I+=this.curves[g].getLength(),A.push(I);return this.cacheLengths=A,A}getSpacedPoints(A=40){const I=[];for(let g=0;g<=A;g++)I.push(this.getPoint(g/A));return this.autoClose&&I.push(I[0]),I}getPoints(A=12){const I=[];let g;for(let C=0,Q=this.curves;C<Q.length;C++){const E=Q[C],i=E.isEllipseCurve?A*2:E.isLineCurve||E.isLineCurve3?1:E.isSplineCurve?A*E.points.length:A,o=E.getPoints(i);for(let t=0;t<o.length;t++){const e=o[t];g&&g.equals(e)||(I.push(e),g=e)}}return this.autoClose&&I.length>1&&!I[I.length-1].equals(I[0])&&I.push(I[0]),I}copy(A){super.copy(A),this.curves=[];for(let I=0,g=A.curves.length;I<g;I++){const C=A.curves[I];this.curves.push(C.clone())}return this.autoClose=A.autoClose,this}toJSON(){const A=super.toJSON();A.autoClose=this.autoClose,A.curves=[];for(let I=0,g=this.curves.length;I<g;I++){const C=this.curves[I];A.curves.push(C.toJSON())}return A}fromJSON(A){super.fromJSON(A),this.autoClose=A.autoClose,this.curves=[];for(let I=0,g=A.curves.length;I<g;I++){const C=A.curves[I];this.curves.push(new Ta[C.type]().fromJSON(C))}return this}}class ke extends lS{constructor(A){super(),this.type="Path",this.currentPoint=new hA,A&&this.setFromPoints(A)}setFromPoints(A){this.moveTo(A[0].x,A[0].y);for(let I=1,g=A.length;I<g;I++)this.lineTo(A[I].x,A[I].y);return this}moveTo(A,I){return this.currentPoint.set(A,I),this}lineTo(A,I){const g=new co(this.currentPoint.clone(),new hA(A,I));return this.curves.push(g),this.currentPoint.set(A,I),this}quadraticCurveTo(A,I,g,C){const Q=new Ha(this.currentPoint.clone(),new hA(A,I),new hA(g,C));return this.curves.push(Q),this.currentPoint.set(g,C),this}bezierCurveTo(A,I,g,C,Q,E){const i=new ua(this.currentPoint.clone(),new hA(A,I),new hA(g,C),new hA(Q,E));return this.curves.push(i),this.currentPoint.set(Q,E),this}splineThru(A){const I=[this.currentPoint.clone()].concat(A),g=new ma(I);return this.curves.push(g),this.currentPoint.copy(A[A.length-1]),this}arc(A,I,g,C,Q,E){const i=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(A+i,I+o,g,C,Q,E),this}absarc(A,I,g,C,Q,E){return this.absellipse(A,I,g,g,C,Q,E),this}ellipse(A,I,g,C,Q,E,i,o){const t=this.currentPoint.x,e=this.currentPoint.y;return this.absellipse(A+t,I+e,g,C,Q,E,i,o),this}absellipse(A,I,g,C,Q,E,i,o){const t=new ro(A,I,g,C,Q,E,i,o);if(this.curves.length>0){const a=t.getPoint(0);a.equals(this.currentPoint)||this.lineTo(a.x,a.y)}this.curves.push(t);const e=t.getPoint(1);return this.currentPoint.copy(e),this}copy(A){return super.copy(A),this.currentPoint.copy(A.currentPoint),this}toJSON(){const A=super.toJSON();return A.currentPoint=this.currentPoint.toArray(),A}fromJSON(A){return super.fromJSON(A),this.currentPoint.fromArray(A.currentPoint),this}}class YE extends lg{constructor(A=[],I=[],g=1,C=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:I,radius:g,detail:C};const Q=[],E=[];i(C),t(g),e(),this.setAttribute("position",new fI(Q,3)),this.setAttribute("normal",new fI(Q.slice(),3)),this.setAttribute("uv",new fI(E,2)),C===0?this.computeVertexNormals():this.normalizeNormals();function i(l){const w=new L,c=new L,y=new L;for(let M=0;M<I.length;M+=3)s(I[M+0],w),s(I[M+1],c),s(I[M+2],y),o(w,c,y,l)}function o(l,w,c,y){const M=y+1,R=[];for(let k=0;k<=M;k++){R[k]=[];const K=l.clone().lerp(c,k/M),U=w.clone().lerp(c,k/M),q=M-k;for(let V=0;V<=q;V++)V===0&&k===M?R[k][V]=K:R[k][V]=K.clone().lerp(U,V/q)}for(let k=0;k<M;k++)for(let K=0;K<2*(M-k)-1;K++){const U=Math.floor(K/2);K%2===0?(D(R[k][U+1]),D(R[k+1][U]),D(R[k][U])):(D(R[k][U+1]),D(R[k+1][U+1]),D(R[k+1][U]))}}function t(l){const w=new L;for(let c=0;c<Q.length;c+=3)w.x=Q[c+0],w.y=Q[c+1],w.z=Q[c+2],w.normalize().multiplyScalar(l),Q[c+0]=w.x,Q[c+1]=w.y,Q[c+2]=w.z}function e(){const l=new L;for(let w=0;w<Q.length;w+=3){l.x=Q[w+0],l.y=Q[w+1],l.z=Q[w+2];const c=h(l)/2/Math.PI+.5,y=S(l)/Math.PI+.5;E.push(c,1-y)}G(),a()}function a(){for(let l=0;l<E.length;l+=6){const w=E[l+0],c=E[l+2],y=E[l+4],M=Math.max(w,c,y),R=Math.min(w,c,y);M>.9&&R<.1&&(w<.2&&(E[l+0]+=1),c<.2&&(E[l+2]+=1),y<.2&&(E[l+4]+=1))}}function D(l){Q.push(l.x,l.y,l.z)}function s(l,w){const c=l*3;w.x=A[c+0],w.y=A[c+1],w.z=A[c+2]}function G(){const l=new L,w=new L,c=new L,y=new L,M=new hA,R=new hA,k=new hA;for(let K=0,U=0;K<Q.length;K+=9,U+=6){l.set(Q[K+0],Q[K+1],Q[K+2]),w.set(Q[K+3],Q[K+4],Q[K+5]),c.set(Q[K+6],Q[K+7],Q[K+8]),M.set(E[U+0],E[U+1]),R.set(E[U+2],E[U+3]),k.set(E[U+4],E[U+5]),y.copy(l).add(w).add(c).divideScalar(3);const q=h(y);n(M,U+0,l,q),n(R,U+2,w,q),n(k,U+4,c,q)}}function n(l,w,c,y){y<0&&l.x===1&&(E[w]=l.x-1),c.x===0&&c.z===0&&(E[w]=y/2/Math.PI+.5)}function h(l){return Math.atan2(l.z,-l.x)}function S(l){return Math.atan2(-l.y,Math.sqrt(l.x*l.x+l.z*l.z))}}static fromJSON(A){return new YE(A.vertices,A.indices,A.radius,A.details)}}class xa extends ke{constructor(A){super(A),this.uuid=PC(),this.type="Shape",this.holes=[]}getPointsHoles(A){const I=[];for(let g=0,C=this.holes.length;g<C;g++)I[g]=this.holes[g].getPoints(A);return I}extractPoints(A){return{shape:this.getPoints(A),holes:this.getPointsHoles(A)}}copy(A){super.copy(A),this.holes=[];for(let I=0,g=A.holes.length;I<g;I++){const C=A.holes[I];this.holes.push(C.clone())}return this}toJSON(){const A=super.toJSON();A.uuid=this.uuid,A.holes=[];for(let I=0,g=this.holes.length;I<g;I++){const C=this.holes[I];A.holes.push(C.toJSON())}return A}fromJSON(A){super.fromJSON(A),this.uuid=A.uuid,this.holes=[];for(let I=0,g=A.holes.length;I<g;I++){const C=A.holes[I];this.holes.push(new ke().fromJSON(C))}return this}}const yS={triangulate:function(B,A,I=2){const g=A&&A.length,C=g?A[0]*I:B.length;let Q=ba(B,0,C,I,!0);const E=[];if(!Q||Q.next===Q.prev)return E;let i,o,t,e,a,D,s;if(g&&(Q=JS(B,A,Q,I)),B.length>80*I){i=t=B[0],o=e=B[1];for(let G=I;G<C;G+=I)a=B[G],D=B[G+1],a<i&&(i=a),D<o&&(o=D),a>t&&(t=a),D>e&&(e=D);s=Math.max(t-i,e-o),s=s!==0?32767/s:0}return tQ(Q,E,I,i,o,s,0),E}};function ba(B,A,I,g,C){let Q,E;if(C===mS(B,A,I,g)>0)for(Q=A;Q<I;Q+=g)E=le(Q,B[Q],B[Q+1],E);else for(Q=I-g;Q>=A;Q-=g)E=le(Q,B[Q],B[Q+1],E);return E&&LE(E,E.next)&&(aQ(E),E=E.next),E}function TC(B,A){if(!B)return B;A||(A=B);let I=B,g;do if(g=!1,!I.steiner&&(LE(I,I.next)||lI(I.prev,I,I.next)===0)){if(aQ(I),I=A=I.prev,I===I.next)break;g=!0}else I=I.next;while(g||I!==A);return A}function tQ(B,A,I,g,C,Q,E){if(!B)return;!E&&Q&&pS(B,g,C,Q);let i=B,o,t;for(;B.prev!==B.next;){if(o=B.prev,t=B.next,Q?KS(B,g,C,Q):MS(B)){A.push(o.i/I|0),A.push(B.i/I|0),A.push(t.i/I|0),aQ(B),B=t.next,i=t.next;continue}if(B=t,B===i){E?E===1?(B=US(TC(B),A,I),tQ(B,A,I,g,C,Q,2)):E===2&&NS(B,A,I,g,C,Q):tQ(TC(B),A,I,g,C,Q,1);break}}}function MS(B){const A=B.prev,I=B,g=B.next;if(lI(A,I,g)>=0)return!1;const C=A.x,Q=I.x,E=g.x,i=A.y,o=I.y,t=g.y,e=C<Q?C<E?C:E:Q<E?Q:E,a=i<o?i<t?i:t:o<t?o:t,D=C>Q?C>E?C:E:Q>E?Q:E,s=i>o?i>t?i:t:o>t?o:t;let G=g.next;for(;G!==A;){if(G.x>=e&&G.x<=D&&G.y>=a&&G.y<=s&&wB(C,i,Q,o,E,t,G.x,G.y)&&lI(G.prev,G,G.next)>=0)return!1;G=G.next}return!0}function KS(B,A,I,g){const C=B.prev,Q=B,E=B.next;if(lI(C,Q,E)>=0)return!1;const i=C.x,o=Q.x,t=E.x,e=C.y,a=Q.y,D=E.y,s=i<o?i<t?i:t:o<t?o:t,G=e<a?e<D?e:D:a<D?a:D,n=i>o?i>t?i:t:o>t?o:t,h=e>a?e>D?e:D:a>D?a:D,S=Vi(s,G,A,I,g),l=Vi(n,h,A,I,g);let w=B.prevZ,c=B.nextZ;for(;w&&w.z>=S&&c&&c.z<=l;){if(w.x>=s&&w.x<=n&&w.y>=G&&w.y<=h&&w!==C&&w!==E&&wB(i,e,o,a,t,D,w.x,w.y)&&lI(w.prev,w,w.next)>=0||(w=w.prevZ,c.x>=s&&c.x<=n&&c.y>=G&&c.y<=h&&c!==C&&c!==E&&wB(i,e,o,a,t,D,c.x,c.y)&&lI(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;w&&w.z>=S;){if(w.x>=s&&w.x<=n&&w.y>=G&&w.y<=h&&w!==C&&w!==E&&wB(i,e,o,a,t,D,w.x,w.y)&&lI(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;c&&c.z<=l;){if(c.x>=s&&c.x<=n&&c.y>=G&&c.y<=h&&c!==C&&c!==E&&wB(i,e,o,a,t,D,c.x,c.y)&&lI(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function US(B,A,I){let g=B;do{const C=g.prev,Q=g.next.next;!LE(C,Q)&&Oa(C,g,g.next,Q)&&eQ(C,Q)&&eQ(Q,C)&&(A.push(C.i/I|0),A.push(g.i/I|0),A.push(Q.i/I|0),aQ(g),aQ(g.next),g=B=Q),g=g.next}while(g!==B);return TC(g)}function NS(B,A,I,g,C,Q){let E=B;do{let i=E.next.next;for(;i!==E.prev;){if(E.i!==i.i&&fS(E,i)){let o=Za(E,i);E=TC(E,E.next),o=TC(o,o.next),tQ(E,A,I,g,C,Q,0),tQ(o,A,I,g,C,Q,0);return}i=i.next}E=E.next}while(E!==B)}function JS(B,A,I,g){const C=[];let Q,E,i,o,t;for(Q=0,E=A.length;Q<E;Q++)i=A[Q]*g,o=Q<E-1?A[Q+1]*g:B.length,t=ba(B,i,o,g,!1),t===t.next&&(t.steiner=!0),C.push(LS(t));for(C.sort(FS),Q=0;Q<C.length;Q++)I=RS(C[Q],I);return I}function FS(B,A){return B.x-A.x}function RS(B,A){const I=qS(B,A);if(!I)return A;const g=Za(I,B);return TC(g,g.next),TC(I,I.next)}function qS(B,A){let I=A,g=-1/0,C;const Q=B.x,E=B.y;do{if(E<=I.y&&E>=I.next.y&&I.next.y!==I.y){const D=I.x+(E-I.y)*(I.next.x-I.x)/(I.next.y-I.y);if(D<=Q&&D>g&&(g=D,C=I.x<I.next.x?I:I.next,D===Q))return C}I=I.next}while(I!==A);if(!C)return null;const i=C,o=C.x,t=C.y;let e=1/0,a;I=C;do Q>=I.x&&I.x>=o&&Q!==I.x&&wB(E<t?Q:g,E,o,t,E<t?g:Q,E,I.x,I.y)&&(a=Math.abs(E-I.y)/(Q-I.x),eQ(I,B)&&(a<e||a===e&&(I.x>C.x||I.x===C.x&&dS(C,I)))&&(C=I,e=a)),I=I.next;while(I!==i);return C}function dS(B,A){return lI(B.prev,B,A.prev)<0&&lI(A.next,B,B.next)<0}function pS(B,A,I,g){let C=B;do C.z===0&&(C.z=Vi(C.x,C.y,A,I,g)),C.prevZ=C.prev,C.nextZ=C.next,C=C.next;while(C!==B);C.prevZ.nextZ=null,C.prevZ=null,YS(C)}function YS(B){let A,I,g,C,Q,E,i,o,t=1;do{for(I=B,B=null,Q=null,E=0;I;){for(E++,g=I,i=0,A=0;A<t&&(i++,g=g.nextZ,!!g);A++);for(o=t;i>0||o>0&&g;)i!==0&&(o===0||!g||I.z<=g.z)?(C=I,I=I.nextZ,i--):(C=g,g=g.nextZ,o--),Q?Q.nextZ=C:B=C,C.prevZ=Q,Q=C;I=g}Q.nextZ=null,t*=2}while(E>1);return B}function Vi(B,A,I,g,C){return B=(B-I)*C|0,A=(A-g)*C|0,B=(B|B<<8)&16711935,B=(B|B<<4)&252645135,B=(B|B<<2)&858993459,B=(B|B<<1)&1431655765,A=(A|A<<8)&16711935,A=(A|A<<4)&252645135,A=(A|A<<2)&858993459,A=(A|A<<1)&1431655765,B|A<<1}function LS(B){let A=B,I=B;do(A.x<I.x||A.x===I.x&&A.y<I.y)&&(I=A),A=A.next;while(A!==B);return I}function wB(B,A,I,g,C,Q,E,i){return(C-E)*(A-i)>=(B-E)*(Q-i)&&(B-E)*(g-i)>=(I-E)*(A-i)&&(I-E)*(Q-i)>=(C-E)*(g-i)}function fS(B,A){return B.next.i!==A.i&&B.prev.i!==A.i&&!uS(B,A)&&(eQ(B,A)&&eQ(A,B)&&HS(B,A)&&(lI(B.prev,B,A.prev)||lI(B,A.prev,A))||LE(B,A)&&lI(B.prev,B,B.next)>0&&lI(A.prev,A,A.next)>0)}function lI(B,A,I){return(A.y-B.y)*(I.x-A.x)-(A.x-B.x)*(I.y-A.y)}function LE(B,A){return B.x===A.x&&B.y===A.y}function Oa(B,A,I,g){const C=VQ(lI(B,A,I)),Q=VQ(lI(B,A,g)),E=VQ(lI(I,g,B)),i=VQ(lI(I,g,A));return!!(C!==Q&&E!==i||C===0&&jQ(B,I,A)||Q===0&&jQ(B,g,A)||E===0&&jQ(I,B,g)||i===0&&jQ(I,A,g))}function jQ(B,A,I){return A.x<=Math.max(B.x,I.x)&&A.x>=Math.min(B.x,I.x)&&A.y<=Math.max(B.y,I.y)&&A.y>=Math.min(B.y,I.y)}function VQ(B){return B>0?1:B<0?-1:0}function uS(B,A){let I=B;do{if(I.i!==B.i&&I.next.i!==B.i&&I.i!==A.i&&I.next.i!==A.i&&Oa(I,I.next,B,A))return!0;I=I.next}while(I!==B);return!1}function eQ(B,A){return lI(B.prev,B,B.next)<0?lI(B,A,B.next)>=0&&lI(B,B.prev,A)>=0:lI(B,A,B.prev)<0||lI(B,B.next,A)<0}function HS(B,A){let I=B,g=!1;const C=(B.x+A.x)/2,Q=(B.y+A.y)/2;do I.y>Q!=I.next.y>Q&&I.next.y!==I.y&&C<(I.next.x-I.x)*(Q-I.y)/(I.next.y-I.y)+I.x&&(g=!g),I=I.next;while(I!==B);return g}function Za(B,A){const I=new Xi(B.i,B.x,B.y),g=new Xi(A.i,A.x,A.y),C=B.next,Q=A.prev;return B.next=A,A.prev=B,I.next=C,C.prev=I,g.next=I,I.prev=g,Q.next=g,g.prev=Q,g}function le(B,A,I,g){const C=new Xi(B,A,I);return g?(C.next=g.next,C.prev=g,g.next.prev=C,g.next=C):(C.prev=C,C.next=C),C}function aQ(B){B.next.prev=B.prev,B.prev.next=B.next,B.prevZ&&(B.prevZ.nextZ=B.nextZ),B.nextZ&&(B.nextZ.prevZ=B.prevZ)}function Xi(B,A,I){this.i=B,this.x=A,this.y=I,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mS(B,A,I,g){let C=0;for(let Q=A,E=I-g;Q<I;Q+=g)C+=(B[E]-B[Q])*(B[Q+1]+B[E+1]),E=Q;return C}class CQ{static area(A){const I=A.length;let g=0;for(let C=I-1,Q=0;Q<I;C=Q++)g+=A[C].x*A[Q].y-A[Q].x*A[C].y;return g*.5}static isClockWise(A){return CQ.area(A)<0}static triangulateShape(A,I){const g=[],C=[],Q=[];ye(A),Me(g,A);let E=A.length;I.forEach(ye);for(let o=0;o<I.length;o++)C.push(E),E+=I[o].length,Me(g,I[o]);const i=yS.triangulate(g,C);for(let o=0;o<i.length;o+=3)Q.push(i.slice(o,o+3));return Q}}function ye(B){const A=B.length;A>2&&B[A-1].equals(B[0])&&B.pop()}function Me(B,A){for(let I=0;I<A.length;I++)B.push(A[I].x),B.push(A[I].y)}class ko extends lg{constructor(A=new xa([new hA(.5,.5),new hA(-.5,.5),new hA(-.5,-.5),new hA(.5,-.5)]),I={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:A,options:I},A=Array.isArray(A)?A:[A];const g=this,C=[],Q=[];for(let i=0,o=A.length;i<o;i++){const t=A[i];E(t)}this.setAttribute("position",new fI(C,3)),this.setAttribute("uv",new fI(Q,2)),this.computeVertexNormals();function E(i){const o=[],t=I.curveSegments!==void 0?I.curveSegments:12,e=I.steps!==void 0?I.steps:1,a=I.depth!==void 0?I.depth:1;let D=I.bevelEnabled!==void 0?I.bevelEnabled:!0,s=I.bevelThickness!==void 0?I.bevelThickness:.2,G=I.bevelSize!==void 0?I.bevelSize:s-.1,n=I.bevelOffset!==void 0?I.bevelOffset:0,h=I.bevelSegments!==void 0?I.bevelSegments:3;const S=I.extrudePath,l=I.UVGenerator!==void 0?I.UVGenerator:TS;let w,c=!1,y,M,R,k;S&&(w=S.getSpacedPoints(e),c=!0,D=!1,y=S.computeFrenetFrames(e,!1),M=new L,R=new L,k=new L),D||(h=0,s=0,G=0,n=0);const K=i.extractPoints(t);let U=K.shape;const q=K.holes;if(!CQ.isClockWise(U)){U=U.reverse();for(let v=0,gA=q.length;v<gA;v++){const nA=q[v];CQ.isClockWise(nA)&&(q[v]=nA.reverse())}}const Y=CQ.triangulateShape(U,q),H=U;for(let v=0,gA=q.length;v<gA;v++){const nA=q[v];U=U.concat(nA)}function p(v,gA,nA){return gA||console.error("THREE.ExtrudeGeometry: vec does not exist"),gA.clone().multiplyScalar(nA).add(v)}const _=U.length,z=Y.length;function T(v,gA,nA){let MA,wA,mA;const LA=v.x-gA.x,YA=v.y-gA.y,iI=nA.x-v.x,gI=nA.y-v.y,F=LA*LA+YA*YA,N=LA*gI-YA*iI;if(Math.abs(N)>Number.EPSILON){const X=Math.sqrt(F),iA=Math.sqrt(iI*iI+gI*gI),sA=gA.x-YA/X,SA=gA.y+LA/X,HA=nA.x-gI/iA,d=nA.y+iI/iA,O=((HA-sA)*gI-(d-SA)*iI)/(LA*gI-YA*iI);MA=sA+LA*O-v.x,wA=SA+YA*O-v.y;const cA=MA*MA+wA*wA;if(cA<=2)return new hA(MA,wA);mA=Math.sqrt(cA/2)}else{let X=!1;LA>Number.EPSILON?iI>Number.EPSILON&&(X=!0):LA<-Number.EPSILON?iI<-Number.EPSILON&&(X=!0):Math.sign(YA)===Math.sign(gI)&&(X=!0),X?(MA=-YA,wA=LA,mA=Math.sqrt(F)):(MA=LA,wA=YA,mA=Math.sqrt(F/2))}return new hA(MA/mA,wA/mA)}const BA=[];for(let v=0,gA=H.length,nA=gA-1,MA=v+1;v<gA;v++,nA++,MA++)nA===gA&&(nA=0),MA===gA&&(MA=0),BA[v]=T(H[v],H[nA],H[MA]);const QA=[];let m,j=BA.concat();for(let v=0,gA=q.length;v<gA;v++){const nA=q[v];m=[];for(let MA=0,wA=nA.length,mA=wA-1,LA=MA+1;MA<wA;MA++,mA++,LA++)mA===wA&&(mA=0),LA===wA&&(LA=0),m[MA]=T(nA[MA],nA[mA],nA[LA]);QA.push(m),j=j.concat(m)}for(let v=0;v<h;v++){const gA=v/h,nA=s*Math.cos(gA*Math.PI/2),MA=G*Math.sin(gA*Math.PI/2)+n;for(let wA=0,mA=H.length;wA<mA;wA++){const LA=p(H[wA],BA[wA],MA);tA(LA.x,LA.y,-nA)}for(let wA=0,mA=q.length;wA<mA;wA++){const LA=q[wA];m=QA[wA];for(let YA=0,iI=LA.length;YA<iI;YA++){const gI=p(LA[YA],m[YA],MA);tA(gI.x,gI.y,-nA)}}}const IA=G+n;for(let v=0;v<_;v++){const gA=D?p(U[v],j[v],IA):U[v];c?(R.copy(y.normals[0]).multiplyScalar(gA.x),M.copy(y.binormals[0]).multiplyScalar(gA.y),k.copy(w[0]).add(R).add(M),tA(k.x,k.y,k.z)):tA(gA.x,gA.y,0)}for(let v=1;v<=e;v++)for(let gA=0;gA<_;gA++){const nA=D?p(U[gA],j[gA],IA):U[gA];c?(R.copy(y.normals[v]).multiplyScalar(nA.x),M.copy(y.binormals[v]).multiplyScalar(nA.y),k.copy(w[v]).add(R).add(M),tA(k.x,k.y,k.z)):tA(nA.x,nA.y,a/e*v)}for(let v=h-1;v>=0;v--){const gA=v/h,nA=s*Math.cos(gA*Math.PI/2),MA=G*Math.sin(gA*Math.PI/2)+n;for(let wA=0,mA=H.length;wA<mA;wA++){const LA=p(H[wA],BA[wA],MA);tA(LA.x,LA.y,a+nA)}for(let wA=0,mA=q.length;wA<mA;wA++){const LA=q[wA];m=QA[wA];for(let YA=0,iI=LA.length;YA<iI;YA++){const gI=p(LA[YA],m[YA],MA);c?tA(gI.x,gI.y+w[e-1].y,w[e-1].x+nA):tA(gI.x,gI.y,a+nA)}}}eA(),DA();function eA(){const v=C.length/3;if(D){let gA=0,nA=_*gA;for(let MA=0;MA<z;MA++){const wA=Y[MA];KA(wA[2]+nA,wA[1]+nA,wA[0]+nA)}gA=e+h*2,nA=_*gA;for(let MA=0;MA<z;MA++){const wA=Y[MA];KA(wA[0]+nA,wA[1]+nA,wA[2]+nA)}}else{for(let gA=0;gA<z;gA++){const nA=Y[gA];KA(nA[2],nA[1],nA[0])}for(let gA=0;gA<z;gA++){const nA=Y[gA];KA(nA[0]+_*e,nA[1]+_*e,nA[2]+_*e)}}g.addGroup(v,C.length/3-v,0)}function DA(){const v=C.length/3;let gA=0;u(H,gA),gA+=H.length;for(let nA=0,MA=q.length;nA<MA;nA++){const wA=q[nA];u(wA,gA),gA+=wA.length}g.addGroup(v,C.length/3-v,1)}function u(v,gA){let nA=v.length;for(;--nA>=0;){const MA=nA;let wA=nA-1;wA<0&&(wA=v.length-1);for(let mA=0,LA=e+h*2;mA<LA;mA++){const YA=_*mA,iI=_*(mA+1),gI=gA+MA+YA,F=gA+wA+YA,N=gA+wA+iI,X=gA+MA+iI;UA(gI,F,N,X)}}}function tA(v,gA,nA){o.push(v),o.push(gA),o.push(nA)}function KA(v,gA,nA){GA(v),GA(gA),GA(nA);const MA=C.length/3,wA=l.generateTopUV(g,C,MA-3,MA-2,MA-1);xA(wA[0]),xA(wA[1]),xA(wA[2])}function UA(v,gA,nA,MA){GA(v),GA(gA),GA(MA),GA(gA),GA(nA),GA(MA);const wA=C.length/3,mA=l.generateSideWallUV(g,C,wA-6,wA-3,wA-2,wA-1);xA(mA[0]),xA(mA[1]),xA(mA[3]),xA(mA[1]),xA(mA[2]),xA(mA[3])}function GA(v){C.push(o[v*3+0]),C.push(o[v*3+1]),C.push(o[v*3+2])}function xA(v){Q.push(v.x),Q.push(v.y)}}}toJSON(){const A=super.toJSON(),I=this.parameters.shapes,g=this.parameters.options;return xS(I,g,A)}static fromJSON(A,I){const g=[];for(let Q=0,E=A.shapes.length;Q<E;Q++){const i=I[A.shapes[Q]];g.push(i)}const C=A.options.extrudePath;return C!==void 0&&(A.options.extrudePath=new Ta[C.type]().fromJSON(C)),new ko(g,A.options)}}const TS={generateTopUV:function(B,A,I,g,C){const Q=A[I*3],E=A[I*3+1],i=A[g*3],o=A[g*3+1],t=A[C*3],e=A[C*3+1];return[new hA(Q,E),new hA(i,o),new hA(t,e)]},generateSideWallUV:function(B,A,I,g,C,Q){const E=A[I*3],i=A[I*3+1],o=A[I*3+2],t=A[g*3],e=A[g*3+1],a=A[g*3+2],D=A[C*3],s=A[C*3+1],G=A[C*3+2],n=A[Q*3],h=A[Q*3+1],S=A[Q*3+2];return Math.abs(i-e)<Math.abs(E-t)?[new hA(E,1-o),new hA(t,1-a),new hA(D,1-G),new hA(n,1-S)]:[new hA(i,1-o),new hA(e,1-a),new hA(s,1-G),new hA(h,1-S)]}};function xS(B,A,I){if(I.shapes=[],Array.isArray(B))for(let g=0,C=B.length;g<C;g++){const Q=B[g];I.shapes.push(Q.uuid)}else I.shapes.push(B.uuid);return I.options=Object.assign({},A),A.extrudePath!==void 0&&(I.options.extrudePath=A.extrudePath.toJSON()),I}class lo extends YE{constructor(A=1,I=0){const g=(1+Math.sqrt(5))/2,C=[-1,g,0,1,g,0,-1,-g,0,1,-g,0,0,-1,g,0,1,g,0,-1,-g,0,1,-g,g,0,-1,g,0,1,-g,0,-1,-g,0,1],Q=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(C,Q,A,I),this.type="IcosahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new lo(A.radius,A.detail)}}class yo extends YE{constructor(A=1,I=0){const g=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],C=[2,1,0,0,3,2,1,3,0,2,3,1];super(g,C,A,I),this.type="TetrahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new yo(A.radius,A.detail)}}class fE extends lg{constructor(A=1,I=.4,g=12,C=48,Q=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:A,tube:I,radialSegments:g,tubularSegments:C,arc:Q},g=Math.floor(g),C=Math.floor(C);const E=[],i=[],o=[],t=[],e=new L,a=new L,D=new L;for(let s=0;s<=g;s++)for(let G=0;G<=C;G++){const n=G/C*Q,h=s/g*Math.PI*2;a.x=(A+I*Math.cos(h))*Math.cos(n),a.y=(A+I*Math.cos(h))*Math.sin(n),a.z=I*Math.sin(h),i.push(a.x,a.y,a.z),e.x=A*Math.cos(n),e.y=A*Math.sin(n),D.subVectors(a,e).normalize(),o.push(D.x,D.y,D.z),t.push(G/C),t.push(s/g)}for(let s=1;s<=g;s++)for(let G=1;G<=C;G++){const n=(C+1)*s+G-1,h=(C+1)*(s-1)+G-1,S=(C+1)*(s-1)+G,l=(C+1)*s+G;E.push(n,h,l),E.push(h,S,l)}this.setIndex(E),this.setAttribute("position",new fI(i,3)),this.setAttribute("normal",new fI(o,3)),this.setAttribute("uv",new fI(t,2))}static fromJSON(A){return new fE(A.radius,A.tube,A.radialSegments,A.tubularSegments,A.arc)}}class DE extends dB{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new aI(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new aI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new hA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}const sE={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class bS{constructor(A,I,g){const C=this;let Q=!1,E=0,i=0,o;const t=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(e){i++,Q===!1&&C.onStart!==void 0&&C.onStart(e,E,i),Q=!0},this.itemEnd=function(e){E++,C.onProgress!==void 0&&C.onProgress(e,E,i),E===i&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(e){C.onError!==void 0&&C.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this},this.addHandler=function(e,a){return t.push(e,a),this},this.removeHandler=function(e){const a=t.indexOf(e);return a!==-1&&t.splice(a,2),this},this.getHandler=function(e){for(let a=0,D=t.length;a<D;a+=2){const s=t[a],G=t[a+1];if(s.global&&(s.lastIndex=0),s.test(e))return G}return null}}}const Wa=new bS;class YB{constructor(A){this.manager=A!==void 0?A:Wa,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}const AC={};class OS extends Error{constructor(A,I){super(A),this.response=I}}class Pa extends YB{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=sE.get(A);if(Q!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(Q),this.manager.itemEnd(A)},0),Q;if(AC[A]!==void 0){AC[A].push({onLoad:I,onProgress:g,onError:C});return}AC[A]=[],AC[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||t.body===void 0||t.body.getReader===void 0)return t;const e=AC[A],a=t.body.getReader(),D=t.headers.get("Content-Length")||t.headers.get("X-File-Size"),s=D?parseInt(D):0,G=s!==0;let n=0;const h=new ReadableStream({start(S){l();function l(){a.read().then(({done:w,value:c})=>{if(w)S.close();else{n+=c.byteLength;const y=new ProgressEvent("progress",{lengthComputable:G,loaded:n,total:s});for(let M=0,R=e.length;M<R;M++){const k=e[M];k.onProgress&&k.onProgress(y)}S.enqueue(c),l()}})}}});return new Response(h)}else throw new OS(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(t=>{switch(o){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then(e=>new DOMParser().parseFromString(e,i));case"json":return t.json();default:if(i===void 0)return t.text();{const a=/charset="?([^;"\s]*)"?/i.exec(i),D=a&&a[1]?a[1].toLowerCase():void 0,s=new TextDecoder(D);return t.arrayBuffer().then(G=>s.decode(G))}}}).then(t=>{sE.add(A,t);const e=AC[A];delete AC[A];for(let a=0,D=e.length;a<D;a++){const s=e[a];s.onLoad&&s.onLoad(t)}}).catch(t=>{const e=AC[A];if(e===void 0)throw this.manager.itemError(A),t;delete AC[A];for(let a=0,D=e.length;a<D;a++){const s=e[a];s.onError&&s.onError(t)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class va extends YB{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=sE.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i=oQ("img");function o(){e(),sE.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function t(a){e(),C&&C(a),Q.manager.itemError(A),Q.manager.itemEnd(A)}function e(){i.removeEventListener("load",o,!1),i.removeEventListener("error",t,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",t,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),i.src=A,i}}class ZS extends YB{constructor(A){super(A)}load(A,I,g,C){const Q=new qE,E=new va(this.manager);E.setCrossOrigin(this.crossOrigin),E.setPath(this.path);let i=0;function o(t){E.load(A[t],function(e){Q.images[t]=e,i++,i===6&&(Q.needsUpdate=!0,I&&I(Q))},void 0,C)}for(let t=0;t<A.length;++t)o(t);return Q}}class WS extends YB{constructor(A){super(A)}load(A,I,g,C){const Q=this,E=new La,i=new Pa(this.manager);return i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setPath(this.path),i.setWithCredentials(Q.withCredentials),i.load(A,function(o){const t=Q.parse(o);t&&(t.image!==void 0?E.image=t.image:t.data!==void 0&&(E.image.width=t.width,E.image.height=t.height,E.image.data=t.data),E.wrapS=t.wrapS!==void 0?t.wrapS:hg,E.wrapT=t.wrapT!==void 0?t.wrapT:hg,E.magFilter=t.magFilter!==void 0?t.magFilter:JI,E.minFilter=t.minFilter!==void 0?t.minFilter:JI,E.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.encoding!==void 0&&(E.encoding=t.encoding),t.flipY!==void 0&&(E.flipY=t.flipY),t.format!==void 0&&(E.format=t.format),t.type!==void 0&&(E.type=t.type),t.mipmaps!==void 0&&(E.mipmaps=t.mipmaps,E.minFilter=KB),t.mipmapCount===1&&(E.minFilter=JI),t.generateMipmaps!==void 0&&(E.generateMipmaps=t.generateMipmaps),E.needsUpdate=!0,I&&I(E,t))},g,C),E}}class nE extends YB{constructor(A){super(A)}load(A,I,g,C){const Q=new $I,E=new va(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){Q.image=i,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class ja{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ke(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=Ke();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function Ke(){return(typeof performance>"u"?Date:performance).now()}class PS{constructor(A,I,g=0,C=1/0){this.ray=new so(A,I),this.near=g,this.far=C,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}intersectObject(A,I=!0,g=[]){return _i(A,this,g,I),g.sort(Ue),g}intersectObjects(A,I=!0,g=[]){for(let C=0,Q=A.length;C<Q;C++)_i(A[C],this,g,I);return g.sort(Ue),g}}function Ue(B,A){return B.distance-A.distance}function _i(B,A,I,g){if(B.layers.test(A.layers)&&B.raycast(A,I),g===!0){const C=B.children;for(let Q=0,E=C.length;Q<E;Q++)_i(C[Q],A,I,!0)}}class Ne{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(OI(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gC=vS();function vS(){const B=new ArrayBuffer(4),A=new Float32Array(B),I=new Uint32Array(B),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const t=o-127;t<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):t<-14?(g[o]=1024>>-t-14,g[o|256]=1024>>-t-14|32768,C[o]=-t-1,C[o|256]=-t-1):t<=15?(g[o]=t+15<<10,g[o|256]=t+15<<10|32768,C[o]=13,C[o|256]=13):t<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const Q=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let t=o<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Q[o]=t|e}for(let o=1024;o<2048;++o)Q[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:Q,exponentTable:E,offsetTable:i}}function jS(B){Math.abs(B)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),B=OI(B,-65504,65504),gC.floatView[0]=B;const A=gC.uint32View[0],I=A>>23&511;return gC.baseTable[I]+((A&8388607)>>gC.shiftTable[I])}function VS(B){const A=B>>10;return gC.uint32View[0]=gC.mantissaTable[gC.offsetTable[A]+(B&1023)]+gC.exponentTable[A],gC.floatView[0]}var XQ=Object.freeze({__proto__:null,fromHalfFloat:VS,toHalfFloat:jS});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);const XS={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class uE{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _S=new Fa(-1,1,1,-1,0,1),Mo=new lg;Mo.setAttribute("position",new fI([-1,3,0,-1,-1,0,3,-1,0],3));Mo.setAttribute("uv",new fI([0,2,0,0,2,0],2));class zS{constructor(A){this._mesh=new zI(Mo,A)}dispose(){this._mesh.geometry.dispose()}render(A){A.render(this._mesh,_S)}get material(){return this._mesh.material}set material(A){this._mesh.material=A}}class $S extends uE{constructor(A,I){super(),this.textureID=I!==void 0?I:"tDiffuse",A instanceof bg?(this.uniforms=A.uniforms,this.material=A):A&&(this.uniforms=Na.clone(A.uniforms),this.material=new bg({defines:Object.assign({},A.defines),uniforms:this.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader})),this.fsQuad=new zS(this.material)}render(A,I,g){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=g.texture),this.fsQuad.material=this.material,this.renderToScreen?(A.setRenderTarget(null),this.fsQuad.render(A)):(A.setRenderTarget(I),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),this.fsQuad.render(A))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Je extends uE{constructor(A,I){super(),this.scene=A,this.camera=I,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(A,I,g){const C=A.getContext(),Q=A.state;Q.buffers.color.setMask(!1),Q.buffers.depth.setMask(!1),Q.buffers.color.setLocked(!0),Q.buffers.depth.setLocked(!0);let E,i;this.inverse?(E=0,i=1):(E=1,i=0),Q.buffers.stencil.setTest(!0),Q.buffers.stencil.setOp(C.REPLACE,C.REPLACE,C.REPLACE),Q.buffers.stencil.setFunc(C.ALWAYS,E,4294967295),Q.buffers.stencil.setClear(i),Q.buffers.stencil.setLocked(!0),A.setRenderTarget(g),this.clear&&A.clear(),A.render(this.scene,this.camera),A.setRenderTarget(I),this.clear&&A.clear(),A.render(this.scene,this.camera),Q.buffers.color.setLocked(!1),Q.buffers.depth.setLocked(!1),Q.buffers.stencil.setLocked(!1),Q.buffers.stencil.setFunc(C.EQUAL,1,4294967295),Q.buffers.stencil.setOp(C.KEEP,C.KEEP,C.KEEP),Q.buffers.stencil.setLocked(!0)}}class Ac extends uE{constructor(){super(),this.needsSwap=!1}render(A){A.state.buffers.stencil.setLocked(!1),A.state.buffers.stencil.setTest(!1)}}class Ic{constructor(A,I){if(this.renderer=A,I===void 0){const g=A.getSize(new hA);this._pixelRatio=A.getPixelRatio(),this._width=g.width,this._height=g.height,I=new GC(this._width*this._pixelRatio,this._height*this._pixelRatio),I.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=I.width,this._height=I.height;this.renderTarget1=I,this.renderTarget2=I.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $S(XS),this.clock=new ja}swapBuffers(){const A=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=A}addPass(A){this.passes.push(A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(A,I){this.passes.splice(I,0,A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(A){const I=this.passes.indexOf(A);I!==-1&&this.passes.splice(I,1)}isLastEnabledPass(A){for(let I=A+1;I<this.passes.length;I++)if(this.passes[I].enabled)return!1;return!0}render(A){A===void 0&&(A=this.clock.getDelta());const I=this.renderer.getRenderTarget();let g=!1;for(let C=0,Q=this.passes.length;C<Q;C++){const E=this.passes[C];if(E.enabled!==!1){if(E.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(C),E.render(this.renderer,this.writeBuffer,this.readBuffer,A,g),E.needsSwap){if(g){const i=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(i.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,A),o.setFunc(i.EQUAL,1,4294967295)}this.swapBuffers()}Je!==void 0&&(E instanceof Je?g=!0:E instanceof Ac&&(g=!1))}}this.renderer.setRenderTarget(I)}reset(A){if(A===void 0){const I=this.renderer.getSize(new hA);this._pixelRatio=this.renderer.getPixelRatio(),this._width=I.width,this._height=I.height,A=this.renderTarget1.clone(),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=A,this.renderTarget2=A.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(A,I){this._width=A,this._height=I;const g=this._width*this._pixelRatio,C=this._height*this._pixelRatio;this.renderTarget1.setSize(g,C),this.renderTarget2.setSize(g,C);for(let Q=0;Q<this.passes.length;Q++)this.passes[Q].setSize(g,C)}setPixelRatio(A){this._pixelRatio=A,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Va extends uE{constructor(A,I,g,C,Q){super(),this.scene=A,this.camera=I,this.overrideMaterial=g,this.clearColor=C,this.clearAlpha=Q!==void 0?Q:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new aI}render(A,I,g){const C=A.autoClear;A.autoClear=!1;let Q,E;this.overrideMaterial!==void 0&&(E=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(A.getClearColor(this._oldClearColor),Q=A.getClearAlpha(),A.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&A.clearDepth(),A.setRenderTarget(this.renderToScreen?null:g),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),A.render(this.scene,this.camera),this.clearColor&&A.setClearColor(this._oldClearColor,Q),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=E),A.autoClear=C}}const gc=(B,A,I)=>{B.renderer=new Ya({powerPreference:"high-performance",canvas:A,antialias:!0,alpha:!0,...I}),B.composer=new Ic(B.renderer),B.composer.addPass(new Va(B.scene,uC(B.camera)))},Fe=(B,A,I)=>{B.renderer&&(A?B.renderer.outputEncoding=Fg:B.renderer.outputEncoding=sI,I?B.renderer.toneMapping=xg:B.renderer.toneMapping=na)},Re=(B,A,I)=>{var g,C,Q,E,i,o,t,e;!B.renderer||!B.composer||((C=(g=B.renderer).setSize)==null||C.call(g,A.width,A.height),(E=(Q=B.renderer).setPixelRatio)==null||E.call(Q,I),(o=(i=B.composer).setSize)==null||o.call(i,A.width,A.height),(e=(t=B.composer).setPixelRatio)==null||e.call(t,I))},qe=(B,A,I)=>{B.renderer&&(B.renderer.shadowMap.enabled=A,B.renderer.shadowMap.type=I)},Jg=B=>B.userData,Cc=(B,A)=>{B.pointer.update(I=>B.renderer?I.set(A.offsetX/B.renderer.domElement.clientWidth*2-1,-(A.offsetY/B.renderer.domElement.clientHeight)*2+1):I)},Xa=(B,A,I,g)=>(B.raycaster.setFromCamera(A,I),B.raycaster.intersectObjects(g,!1)),Bc=(B,A)=>B.object.uuid!==A.object.uuid||B.instanceId!==A.instanceId,Qc=(B,A,I)=>{let g;const C=B.camera.subscribe(t=>g=t);BI(C);let Q;const E=B.pointer.subscribe(t=>Q=t);BI(E);let i;const o=t=>{var D,s;t.preventDefault();const e=t.type;B.pointerOverCanvas.set(!0),I.pointerInvalidated=!0,Cc(B,t);const a=Ec(A,Q,g);if(e==="pointerdown"&&(i=a?{object:a.object,instanceId:a.instanceId}:null),e==="click"){if(!ic(a,i)){i=null;return}i=null}a&&((s=(D=Jg(a.object)).eventDispatcher)==null||s.call(D,e,{...a,event:t}))};return{onClick:o,onContextMenu:o,onPointerUp:o,onPointerDown:o,onPointerMove:o}};function Ec(B,A,I){if(B.interactiveObjects.size===0||B.raycastableObjects.size===0)return null;const g=Xa(B,A,I,Array.from(B.raycastableObjects));return g.length===0||!B.interactiveObjects.has(g[0].object)?null:g[0]}function ic(B,A){return!B||!A?!1:B.object.uuid===A.object.uuid&&B.instanceId===A.instanceId}const oc=(B,A)=>{let I;const g=B.pointerOverCanvas.subscribe(t=>I=t);BI(g);let C;const Q=B.camera.subscribe(t=>C=t);BI(Q);let E;const i=B.pointer.subscribe(t=>E=t);return BI(i),{raycast:()=>{var a,D,s,G,n,h,S,l;if(A.interactiveObjects.size===0||A.raycastableObjects.size===0)return;const t=I?Xa(A,E,C,Array.from(A.raycastableObjects)):[],e=t.length&&A.interactiveObjects.has(t[0].object)?t[0]:null;e?A.lastIntersection?A.lastIntersection&&Bc(A.lastIntersection,e)&&((h=(n=Jg(A.lastIntersection.object)).eventDispatcher)==null||h.call(n,"pointerleave",A.lastIntersection),(l=(S=Jg(e.object)).eventDispatcher)==null||l.call(S,"pointerenter",e)):(G=(s=Jg(e.object)).eventDispatcher)==null||G.call(s,"pointerenter",e):A.lastIntersection&&((D=(a=Jg(A.lastIntersection.object)).eventDispatcher)==null||D.call(a,"pointerleave",A.lastIntersection)),A.lastIntersection=e}}},HE=typeof window<"u",tc=B=>{if(!HE)return;let A;const I=()=>{B(),A=requestAnimationFrame(I)};I(),BI(()=>{A&&cancelAnimationFrame(A)})},ec=(B,A)=>{if(A.frameHandlers.size===0)return;if(A.debugFrameloop){let C=0;A.frameHandlers.forEach(Q=>{Q.debugFrameloopMessage?A.invalidations[Q.debugFrameloopMessage]=Q.debugFrameloopMessage in A.invalidations?A.invalidations[Q.debugFrameloopMessage]+1:1:++C}),C>0&&(A.invalidations.onFrame=A.frameHandlers.size)}const I=Array.from(A.frameHandlers).reduce((C,Q)=>Q.order?!0:C,!1),g=B.clock.getDelta();I?Array.from(A.frameHandlers).sort((C,Q)=>(C.order??0)>(Q.order??0)?1:-1).forEach(C=>C.fn(B,g)):A.frameHandlers.forEach(C=>C.fn(B,g))},ac=B=>{B.debugFrameloop&&(B.frame+=1,console.log(`frame: ${B.frame}${Object.keys(B.invalidations).length>0?", requested by ↴":""}`),Object.keys(B.invalidations).length>0&&console.table(B.invalidations),B.invalidations={})},Dc=(B,A,I,g)=>{let C=uC(B.camera);const Q=B.camera.subscribe(i=>C=i);BI(Q);const{raycast:E}=oc(B,A);tc(()=>{g.dispose();const i=I.frameloop==="always"||I.frameloop==="demand"&&(I.frameInvalidated||I.frameHandlers.size>0)||I.frameloop==="never"&&I.advance;(i||I.pointerInvalidated)&&(E(),I.pointerInvalidated=!1),i&&(!C||!B.composer||!B.renderer||(ec(B,I),B.composer.passes.length>1?B.composer.render():B.renderer.render(B.scene,C),ac(I),I.frameInvalidated=!1,I.advance=!1))})},sc=()=>{const B=new Dg(75,0,.1,1e3);return Jg(B).threlteDefaultCamera=!0,B.position.z=5,B.lookAt(0,0,0),B},nc=B=>{const A=B.size.subscribe(I=>{Jg(uC(B.camera)).threlteDefaultCamera&&B.camera.update(g=>{const C=g;return C.aspect=I.width/I.height,C.updateProjectionMatrix(),B.invalidate("Default camera: aspect ratio changed"),C})});BI(A)},hc=(B,A,I,g,C,Q,E)=>{const i={audioListeners:new Map,addAudioListener:(S,l)=>{if(l=l??"default",i.audioListeners.has(l)){console.warn(`An AudioListener with the id "${l}" has already been added, aborting.`);return}i.audioListeners.set(l,S)},removeAudioListener:S=>{if(S=S??"default",!i.audioListeners.has(S)){console.warn(`No AudioListener with the id "${S}" found, aborting.`);return}i.audioListeners.delete(S)},getAudioListener:S=>{if(S=S??"default",!i.audioListeners.has(S)){console.warn(`No AudioListener with the id "${S}" found, aborting.`);return}return i.audioListeners.get(S)}},o={debugFrameloop:Q,frameloop:E,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},t={size:oE([g,C],([S,l])=>S||l),pointer:rI(new hA),pointerOverCanvas:rI(!1),clock:new ja,camera:rI(sc()),scene:new iS,renderer:void 0,composer:void 0,invalidate:S=>{o.frameInvalidated=!0,o.debugFrameloop&&S&&(o.invalidations[S]=o.invalidations[S]?o.invalidations[S]+1:1)},advance:()=>{o.advance=!0}},e={flat:rI(A),linear:rI(B),dpr:rI(I),setCamera:S=>{t.camera.set(S),t.composer&&(t.composer.passes.forEach(l=>{l instanceof Va&&(l.camera=S)}),t.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new PS,lastIntersection:null,addRaycastableObject:S=>{e.raycastableObjects.add(S)},removeRaycastableObject:S=>{e.raycastableObjects.delete(S)},addInteractiveObject:S=>{e.interactiveObjects.add(S)},removeInteractiveObject:S=>{e.interactiveObjects.delete(S)},addPass:S=>{t.composer&&(t.composer.addPass(S),t.invalidate("Canvas: adding pass"))},removePass:S=>{t.composer&&(t.composer.removePass(S),t.invalidate("Canvas: removing pass"))}},a={dispose:async(S=!1)=>{await nC(),!(!a.shouldDispose&&!S)&&(a.disposableObjects.forEach((l,w)=>{var c;(l===0||S)&&((c=w==null?void 0:w.dispose)==null||c.call(w),a.disposableObjects.delete(w))}),a.shouldDispose=!1)},collectDisposableObjects:(S,l)=>{const w=l??[];return S&&(S!=null&&S.dispose&&typeof S.dispose=="function"&&S.type!=="Scene"&&w.push(S),Object.entries(S).forEach(([c,y])=>{if(c==="parent"||c==="children"||typeof y!="object")return;const M=y;M!=null&&M.dispose&&a.collectDisposableObjects(M,w)})),w},addDisposableObjects:S=>{S.forEach(l=>{const w=a.disposableObjects.get(l);w?a.disposableObjects.set(l,w+1):a.disposableObjects.set(l,1)})},removeDisposableObjects:S=>{S.length!==0&&(S.forEach(l=>{const w=a.disposableObjects.get(l);w&&w>0&&a.disposableObjects.set(l,w-1)}),a.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return sg("threlte",t),sg("threlte-root",e),sg("threlte-render-context",o),sg("threlte-audio-context",i),sg("threlte-disposal-context",a),{ctx:t,rootCtx:e,renderCtx:o,audioCtx:i,disposalCtx:a,getCtx:()=>t,getRootCtx:()=>e,getRenderCtx:()=>o,getAudioCtx:()=>i,getDisposalCtx:()=>a}};function Ko(B,A){const I=rI(B);let g=B;const C=I.subscribe(i=>g=i);return BI(C),{...I,set:i=>{if((i==null?void 0:i.uuid)===(g==null?void 0:g.uuid))return;const o=g;I.set(i),A==null||A(i,o)},update:i=>{const o=i(g);if((o==null?void 0:o.uuid)===(g==null?void 0:g.uuid))return;const t=g;I.set(o),A==null||A(o,t)}}}const Eg=()=>cg("threlte");function Gc(B){let A;const I=B[8].default,g=Ag(I,B,B[7],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,[Q]){g&&g.p&&(!A||Q&128)&&gg(g,I,C,C[7],A?Ig(I,C[7],Q,null):Cg(C[7]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}const wc=()=>({onChildMount:cg("threlte-hierarchical-object-on-mount"),onChildDestroy:cg("threlte-hierarchical-object-on-destroy")}),Uo=()=>cg("threlte-hierarchical-parent-context");function rc(B,A,I){var S;let g,{$$slots:C={},$$scope:Q}=A,{object:E=void 0}=A,{children:i=[]}=A,{onChildMount:o=void 0}=A;const t=l=>{i.push(l),I(1,i),o==null||o(l)};let{onChildDestroy:e=void 0}=A;const a=l=>{const w=i.findIndex(c=>c.uuid===l.uuid);w!==-1&&i.splice(w,1),I(1,i),e==null||e(l)},{invalidate:D}=Eg(),s=Uo();eI(B,s,l=>I(6,g=l));let{parent:G=g}=A;const n=wc();E&&((S=n.onChildMount)==null||S.call(n,E),D("HierarchicalObject: object added"));const h=Ko(E,(l,w)=>{var c,y;w&&((c=n.onChildDestroy)==null||c.call(n,w),D("HierarchicalObject: object added")),l&&((y=n.onChildMount)==null||y.call(n,l),D("HierarchicalObject: object removed"))});return BI(()=>{var l;E&&((l=n.onChildDestroy)==null||l.call(n,E),D("HierarchicalObject: object removed"))}),sg("threlte-hierarchical-object-on-mount",t),sg("threlte-hierarchical-object-on-destroy",a),sg("threlte-hierarchical-parent-context",h),B.$$set=l=>{"object"in l&&I(3,E=l.object),"children"in l&&I(1,i=l.children),"onChildMount"in l&&I(4,o=l.onChildMount),"onChildDestroy"in l&&I(5,e=l.onChildDestroy),"parent"in l&&I(2,G=l.parent),"$$scope"in l&&I(7,Q=l.$$scope)},B.$$.update=()=>{B.$$.dirty&64&&I(2,G=g),B.$$.dirty&8&&h.set(E)},[s,i,G,E,o,e,g,Q,C]}class Sc extends GI{constructor(A){super(),hI(this,A,rc,Gc,DI,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function cc(B){let A;const I=B[1].default,g=Ag(I,B,B[4],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q&16)&&gg(g,I,C,C[4],A?Ig(I,C[4],Q,null):Cg(C[4]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function kc(B){let A,I;return A=new Sc({props:{object:B[0],onChildMount:B[2],onChildDestroy:B[3],$$slots:{default:[cc]},$$scope:{ctx:B}}}),{c(){RA(A.$$.fragment)},m(g,C){JA(A,g,C),I=!0},p(g,[C]){const Q={};C&1&&(Q.object=g[0]),C&1&&(Q.onChildMount=g[2]),C&1&&(Q.onChildDestroy=g[3]),C&16&&(Q.$$scope={dirty:C,ctx:g}),A.$set(Q)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){aA(A.$$.fragment,g),I=!1},d(g){FA(A,g)}}}function lc(B,A,I){let{$$slots:g={},$$scope:C}=A,{object:Q}=A;const E=o=>Q.add(o),i=o=>Q.remove(o);return B.$$set=o=>{"object"in o&&I(0,Q=o.object),"$$scope"in o&&I(4,C=o.$$scope)},[Q,g,E,i,C]}class yQ extends GI{constructor(A){super(),hI(this,A,lc,kc,DI,{object:0})}}const yc=()=>{const B=rI({width:0,height:0});let A={width:0,height:0};const I=B.subscribe(E=>A=E);BI(I);let g;const C=()=>{const E=A;if(!g||!g.parentElement)return;const{clientWidth:i,clientHeight:o}=g.parentElement;(i!==E.width||o!==E.height)&&B.set({width:i,height:o})},Q=E=>{g=E,C(),window.addEventListener("resize",C)};return HE?(BI(()=>{window.removeEventListener("resize",C)}),{parentSizeAction:Q,parentSize:B}):{parentSize:B,parentSizeAction:Q}};function de(B){let A,I;return A=new yQ({props:{object:B[0].scene,$$slots:{default:[Mc]},$$scope:{ctx:B}}}),{c(){RA(A.$$.fragment)},m(g,C){JA(A,g,C),I=!0},p(g,C){const Q={};C[1]&4&&(Q.$$scope={dirty:C,ctx:g}),A.$set(Q)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){aA(A.$$.fragment,g),I=!1},d(g){FA(A,g)}}}function Mc(B){let A;const I=B[29].default,g=Ag(I,B,B[33],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q[1]&4)&&gg(g,I,C,C[33],A?Ig(I,C[33],Q,null):Cg(C[33]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function Kc(B){let A,I,g,C,Q=B[2]&&de(B);return{c(){A=VB("canvas"),Q&&Q.c(),_B(A,"class","svelte-o3oskp")},m(E,i){II(E,A,i),Q&&Q.m(A,null),B[30](A),I=!0,g||(C=[XD(B[3].call(null,A)),MC(A,"click",B[9]),MC(A,"contextmenu",B[10]),MC(A,"pointerup",B[13]),MC(A,"pointerdown",B[11]),MC(A,"pointermove",B[12]),MC(A,"pointerenter",B[31]),MC(A,"pointerleave",B[32])],g=!0)},p(E,i){E[2]?Q?(Q.p(E,i),i[0]&4&&EA(Q,1)):(Q=de(E),Q.c(),EA(Q,1),Q.m(A,null)):Q&&(lB(),aA(Q,1,1,()=>{Q=null}),yB())},i(E){I||(EA(Q),I=!0)},o(E){aA(Q),I=!1},d(E){E&&$A(A),Q&&Q.d(),B[30](null),g=!1,bC(C)}}}const pe=new Set;function Uc(B,A,I){let g,C,Q,E,{$$slots:i={},$$scope:o}=A,{dpr:t=HE?window.devicePixelRatio:1}=A,{flat:e=!1}=A,{linear:a=!1}=A,{frameloop:D="demand"}=A,{debugFrameloop:s=!1}=A,{shadows:G=!0}=A,{shadowMapType:n=ea}=A,{size:h=void 0}=A,{rendererParameters:S=void 0}=A,l,w=!1;const c=rI(h),{parentSize:y,parentSizeAction:M}=yc(),R=hc(a,e,t,c,y,s,D),{getCtx:k,renderCtx:K,disposalCtx:U}=R,{ctx:q,rootCtx:V,audioCtx:Y}=R;nc(q),pe.add(q.invalidate),BI(()=>{pe.delete(q.invalidate)});const{size:H,scene:p}=q;eI(B,H,tA=>I(26,C=tA));const{flat:_,linear:z,dpr:T}=V;eI(B,_,tA=>I(27,Q=tA)),eI(B,z,tA=>I(28,E=tA)),eI(B,T,tA=>I(25,g=tA)),sg("threlte-parent",rI(p)),JE(()=>{l&&(gc(q,l,S),Fe(q,E,Q),Re(q,C,g),qe(q,G,n),I(2,w=!0))}),Dc(q,V,K,U);const{onClick:BA,onContextMenu:QA,onPointerDown:m,onPointerMove:j,onPointerUp:IA}=Qc(q,V,K);BI(()=>{U.dispose(!0)});function eA(tA){ng[tA?"unshift":"push"](()=>{l=tA,I(1,l)})}const DA=()=>k().pointerOverCanvas.set(!0),u=()=>k().pointerOverCanvas.set(!1);return B.$$set=tA=>{"dpr"in tA&&I(14,t=tA.dpr),"flat"in tA&&I(15,e=tA.flat),"linear"in tA&&I(16,a=tA.linear),"frameloop"in tA&&I(17,D=tA.frameloop),"debugFrameloop"in tA&&I(18,s=tA.debugFrameloop),"shadows"in tA&&I(19,G=tA.shadows),"shadowMapType"in tA&&I(20,n=tA.shadowMapType),"size"in tA&&I(21,h=tA.size),"rendererParameters"in tA&&I(22,S=tA.rendererParameters),"$$scope"in tA&&I(33,o=tA.$$scope)},B.$$.update=()=>{B.$$.dirty[0]&2097152&&c.set(h),B.$$.dirty[0]&65536&&zQ(z,E=a,E),B.$$.dirty[0]&32768&&zQ(_,Q=e,Q),B.$$.dirty[0]&16384&&zQ(T,g=t,g),B.$$.dirty[0]&402653184&&Fe(k(),E,Q),B.$$.dirty[0]&100663296&&Re(k(),C,g),B.$$.dirty[0]&1572864&&qe(k(),G,n)},[q,l,w,M,k,H,_,z,T,BA,QA,m,j,IA,t,e,a,D,s,G,n,h,S,V,Y,g,C,Q,E,i,eA,DA,u,o]}class Nc extends GI{constructor(A){super(),hI(this,A,Uc,Kc,DI,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const _a=()=>cg("threlte-root"),Jc=()=>cg("threlte-disposal-context");function Fc(B){let A;const I=B[9].default,g=Ag(I,B,B[8],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,[Q]){g&&g.p&&(!A||Q&256)&&gg(g,I,C,C[8],A?Ig(I,C[8],Q,null):Cg(C[8]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}const Ye="threlte-disposable-object-context";function Rc(B,A,I){let g,C,{$$slots:Q={},$$scope:E}=A;const{collectDisposableObjects:i,addDisposableObjects:o,removeDisposableObjects:t}=Jc();let{object:e=void 0}=A,a=e,{dispose:D=void 0}=A;const s=cg(Ye);eI(B,s,h=>I(7,C=h));const G=rI(D??C??!0);eI(B,G,h=>I(6,g=h)),sg(Ye,G);let n=g?i(e):[];return o(n),BI(()=>{t(n)}),B.$$set=h=>{"object"in h&&I(2,e=h.object),"dispose"in h&&I(3,D=h.dispose),"$$scope"in h&&I(8,E=h.$$scope)},B.$$.update=()=>{B.$$.dirty&136&&G.set(D??C??!0),B.$$.dirty&116&&e!==a&&(t(n),I(5,n=g?i(e):[]),o(n),I(4,a=e))},[s,G,e,D,a,n,g,C,E,Q]}class DQ extends GI{constructor(A){super(),hI(this,A,Rc,Fc,DI,{object:2,dispose:3})}}function qc(B,A,I){let g,C,{object:Q}=A;const E=Ko(Q);eI(B,E,t=>I(4,C=t));const i=cg("threlte-layers");eI(B,i,t=>I(3,g=t));const{invalidate:o}=Eg();return B.$$set=t=>{"object"in t&&I(2,Q=t.object)},B.$$.update=()=>{if(B.$$.dirty&4&&E.set(Q),B.$$.dirty&24){if(g==="all")C.layers.enableAll();else if(g==="none")C.layers.disableAll();else if(Array.isArray(g))for(let t=0;t<32;t+=1){const e=t;g.includes(e)?C.layers.enable(t):C.layers.disable(t)}else g!==void 0&&C.layers.set(g);o("LayerableObject")}},[E,i,Q,g,C]}class za extends GI{constructor(A){super(),hI(this,A,qc,null,DI,{object:2})}}const BC=(B,A)=>{if(!HE)return{start:()=>{},stop:()=>{},started:oa(!1)};const I=cg("threlte-render-context"),g={fn:B,order:A==null?void 0:A.order,debugFrameloopMessage:A==null?void 0:A.debugFrameloopMessage},C=rI(!1),Q=()=>{I.frameHandlers.delete(g),C.set(!1)},E=()=>{I.frameHandlers.add(g),C.set(!0)};return((A==null?void 0:A.autostart)??!0)&&E(),BI(()=>{Q()}),{start:E,stop:Q,started:{subscribe:C.subscribe}}},$a=()=>{const B=rI(!1);return(async()=>{await nC(),B.set(!0)})(),B};function dc(B,A,I){let g,C,{object:Q}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:t=void 0}=A;const e=new L,a=ZC(),{invalidate:D}=Eg(),s=$a();eI(B,s,w=>I(8,C=w));const G=async()=>{C||await nC(),a("transform")},n=async()=>{D("TransformableObject: transformed"),await G()};Jg(Q).onTransform=n;const{start:h,stop:S}=BC(async()=>{t&&!o&&t instanceof NI&&(t.getWorldPosition(e),Q.lookAt(e),await G())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),l=Ko(Q);return eI(B,l,w=>I(7,g=w)),B.$$set=w=>{"object"in w&&I(2,Q=w.object),"position"in w&&I(3,E=w.position),"scale"in w&&I(4,i=w.scale),"rotation"in w&&I(5,o=w.rotation),"lookAt"in w&&I(6,t=w.lookAt)},B.$$.update=()=>{B.$$.dirty&4&&l.set(Q),B.$$.dirty&232&&(E&&(g.position.set(E.x??0,E.y??0,E.z??0),n()),t&&!o&&(t instanceof NI?h():(S(),g.lookAt(t.x??0,t.y??0,t.z??0),n())),t||S()),B.$$.dirty&144&&i&&(typeof i=="number"?g.scale.set(i,i,i):g.scale.set(i.x??1,i.y??1,i.z??1),n()),B.$$.dirty&160&&o&&(g.rotation.set(o.x??0,o.y??0,o.z??0,o.order??"XYZ"),n())},[s,l,Q,E,i,o,t,g]}class No extends GI{constructor(A){super(),hI(this,A,dc,null,DI,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function pc(B,A,I){let g,C,Q,{object:E}=A,{viewportAware:i=!1}=A;const o=ZC(),{camera:t,invalidate:e}=Eg();eI(B,t,M=>I(8,Q=M));const a=new Go,D=new FI,s=M=>M.type==="Mesh",G=new L,n=()=>Q?(D.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),a.setFromProjectionMatrix(D),s(E)?a.intersectsObject(E):(E.getWorldPosition(G),a.containsPoint(G))):!0,h=$a();eI(B,h,M=>I(7,C=M));let{inViewport:S=n()}=A;const l=async M=>{M?(C||await nC(),o("viewportenter",E)):(C||await nC(),o("viewportleave",E))},{start:w,stop:c,started:y}=BC(()=>{const M=n();S===void 0?(I(3,S=n()),l(S)):M!==S&&(l(M),I(3,S=M))},{autostart:i,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return eI(B,y,M=>I(6,g=M)),e("ViewportAwareObject"),B.$$set=M=>{"object"in M&&I(4,E=M.object),"viewportAware"in M&&I(5,i=M.viewportAware),"inViewport"in M&&I(3,S=M.inViewport)},B.$$.update=()=>{B.$$.dirty&96&&(i&&!g?w():!i&&g&&c())},[t,h,y,S,E,i,g]}class Yc extends GI{constructor(A){super(),hI(this,A,pc,null,DI,{object:4,viewportAware:5,inViewport:3})}}function Lc(B){let A;const I=B[14].default,g=Ag(I,B,B[18],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q&262144)&&gg(g,I,C,C[18],A?Ig(I,C[18],Q,null):Cg(C[18]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function fc(B){let A,I;return A=new yQ({props:{object:B[1],$$slots:{default:[Lc]},$$scope:{ctx:B}}}),{c(){RA(A.$$.fragment)},m(g,C){JA(A,g,C),I=!0},p(g,C){const Q={};C&2&&(Q.object=g[1]),C&262144&&(Q.$$scope={dirty:C,ctx:g}),A.$set(Q)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){aA(A.$$.fragment,g),I=!1},d(g){FA(A,g)}}}function uc(B){let A,I,g,C,Q,E,i,o,t;A=new za({props:{object:B[1]}}),g=new No({props:{object:B[1],position:B[2],rotation:B[4],scale:B[3],lookAt:B[5]}}),Q=new DQ({props:{object:B[1],dispose:B[7],$$slots:{default:[fc]},$$scope:{ctx:B}}});function e(D){B[15](D)}let a={object:B[1],viewportAware:B[6]};return B[0]!==void 0&&(a.inViewport=B[0]),i=new Yc({props:a}),ng.push(()=>Tg(i,"inViewport",e)),i.$on("viewportenter",B[16]),i.$on("viewportleave",B[17]),{c(){RA(A.$$.fragment),I=nI(),RA(g.$$.fragment),C=nI(),RA(Q.$$.fragment),E=nI(),RA(i.$$.fragment)},m(D,s){JA(A,D,s),II(D,I,s),JA(g,D,s),II(D,C,s),JA(Q,D,s),II(D,E,s),JA(i,D,s),t=!0},p(D,[s]){const G={};s&2&&(G.object=D[1]),A.$set(G);const n={};s&2&&(n.object=D[1]),s&4&&(n.position=D[2]),s&16&&(n.rotation=D[4]),s&8&&(n.scale=D[3]),s&32&&(n.lookAt=D[5]),g.$set(n);const h={};s&2&&(h.object=D[1]),s&128&&(h.dispose=D[7]),s&262146&&(h.$$scope={dirty:s,ctx:D}),Q.$set(h);const S={};s&2&&(S.object=D[1]),s&64&&(S.viewportAware=D[6]),!o&&s&1&&(o=!0,S.inViewport=D[0],mg(()=>o=!1)),i.$set(S)},i(D){t||(EA(A.$$.fragment,D),EA(g.$$.fragment,D),EA(Q.$$.fragment,D),EA(i.$$.fragment,D),t=!0)},o(D){aA(A.$$.fragment,D),aA(g.$$.fragment,D),aA(Q.$$.fragment,D),aA(i.$$.fragment,D),t=!1},d(D){FA(A,D),D&&$A(I),FA(g,D),D&&$A(C),FA(Q,D),D&&$A(E),FA(i,D)}}}function Hc(B,A,I){let{$$slots:g={},$$scope:C}=A,{object:Q}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:t=void 0}=A,{viewportAware:e=!1}=A,{inViewport:a=!1}=A,{castShadow:D=void 0}=A,{receiveShadow:s=void 0}=A,{frustumCulled:G=void 0}=A,{renderOrder:n=void 0}=A,{visible:h=void 0}=A,{dispose:S=void 0}=A,{userData:l=void 0}=A;const{invalidate:w}=Eg(),c=()=>Q;function y(k){a=k,I(0,a)}function M(k){KI.call(this,B,k)}function R(k){KI.call(this,B,k)}return B.$$set=k=>{"object"in k&&I(1,Q=k.object),"position"in k&&I(2,E=k.position),"scale"in k&&I(3,i=k.scale),"rotation"in k&&I(4,o=k.rotation),"lookAt"in k&&I(5,t=k.lookAt),"viewportAware"in k&&I(6,e=k.viewportAware),"inViewport"in k&&I(0,a=k.inViewport),"castShadow"in k&&I(8,D=k.castShadow),"receiveShadow"in k&&I(9,s=k.receiveShadow),"frustumCulled"in k&&I(10,G=k.frustumCulled),"renderOrder"in k&&I(11,n=k.renderOrder),"visible"in k&&I(12,h=k.visible),"dispose"in k&&I(7,S=k.dispose),"userData"in k&&I(13,l=k.userData),"$$scope"in k&&I(18,C=k.$$scope)},B.$$.update=()=>{B.$$.dirty&16128&&(h!==void 0&&(c().visible=h),D!==void 0&&(c().castShadow=D),s!==void 0&&(c().receiveShadow=s),G!==void 0&&(c().frustumCulled=G),n!==void 0&&(c().renderOrder=n),l!==void 0&&(c().userData={...c().userData,...l}),w("Object3DInstance: props changed"))},[a,Q,E,i,o,t,e,S,D,s,G,n,h,l,g,y,M,R,C]}class AD extends GI{constructor(A){super(),hI(this,A,Hc,uc,DI,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}const Le=[],mc=(B,A)=>{const I=Le.find(C=>C instanceof B);if(I)return I;const g=A();return Le.push(g),g},fe={type:"change"},Yi={type:"start"},ue={type:"end"};let Tc=class extends WC{constructor(A,I){super(),this.object=A,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:XC.ROTATE,MIDDLE:XC.DOLLY,RIGHT:XC.PAN},this.touches={ONE:_C.ROTATE,TWO:_C.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(d){d.addEventListener("keydown",gI),this._domElementKeyEvents=d},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(fe),g.update(),Q=C.NONE},this.update=function(){const d=new L,O=new rg().setFromUnitVectors(A.up,new L(0,1,0)),cA=O.clone().invert(),yA=new L,kA=new rg,dA=2*Math.PI;return function(){const jA=g.object.position;d.copy(jA).sub(g.target),d.applyQuaternion(O),i.setFromVector3(d),g.autoRotate&&Q===C.NONE&&K(R()),g.enableDamping?(i.theta+=o.theta*g.dampingFactor,i.phi+=o.phi*g.dampingFactor):(i.theta+=o.theta,i.phi+=o.phi);let VA=g.minAzimuthAngle,oI=g.maxAzimuthAngle;return isFinite(VA)&&isFinite(oI)&&(VA<-Math.PI?VA+=dA:VA>Math.PI&&(VA-=dA),oI<-Math.PI?oI+=dA:oI>Math.PI&&(oI-=dA),VA<=oI?i.theta=Math.max(VA,Math.min(oI,i.theta)):i.theta=i.theta>(VA+oI)/2?Math.max(VA,i.theta):Math.min(oI,i.theta)),i.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=t,i.radius=Math.max(g.minDistance,Math.min(g.maxDistance,i.radius)),g.enableDamping===!0?g.target.addScaledVector(e,g.dampingFactor):g.target.add(e),d.setFromSpherical(i),d.applyQuaternion(cA),jA.copy(g.target).add(d),g.object.lookAt(g.target),g.enableDamping===!0?(o.theta*=1-g.dampingFactor,o.phi*=1-g.dampingFactor,e.multiplyScalar(1-g.dampingFactor)):(o.set(0,0,0),e.set(0,0,0)),t=1,a||yA.distanceToSquared(g.object.position)>E||8*(1-kA.dot(g.object.quaternion))>E?(g.dispatchEvent(fe),yA.copy(g.object.position),kA.copy(g.object.quaternion),a=!1,!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",X),g.domElement.removeEventListener("pointerdown",nA),g.domElement.removeEventListener("pointercancel",mA),g.domElement.removeEventListener("wheel",iI),g.domElement.removeEventListener("pointermove",MA),g.domElement.removeEventListener("pointerup",wA),g._domElementKeyEvents!==null&&g._domElementKeyEvents.removeEventListener("keydown",gI)};const g=this,C={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let Q=C.NONE;const E=1e-6,i=new Ne,o=new Ne;let t=1;const e=new L;let a=!1;const D=new hA,s=new hA,G=new hA,n=new hA,h=new hA,S=new hA,l=new hA,w=new hA,c=new hA,y=[],M={};function R(){return 2*Math.PI/60/60*g.autoRotateSpeed}function k(){return Math.pow(.95,g.zoomSpeed)}function K(d){o.theta-=d}function U(d){o.phi-=d}const q=function(){const d=new L;return function(cA,yA){d.setFromMatrixColumn(yA,0),d.multiplyScalar(-cA),e.add(d)}}(),V=function(){const d=new L;return function(cA,yA){g.screenSpacePanning===!0?d.setFromMatrixColumn(yA,1):(d.setFromMatrixColumn(yA,0),d.crossVectors(g.object.up,d)),d.multiplyScalar(cA),e.add(d)}}(),Y=function(){const d=new L;return function(cA,yA){const kA=g.domElement;if(g.object.isPerspectiveCamera){const dA=g.object.position;d.copy(dA).sub(g.target);let qA=d.length();qA*=Math.tan(g.object.fov/2*Math.PI/180),q(2*cA*qA/kA.clientHeight,g.object.matrix),V(2*yA*qA/kA.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?(q(cA*(g.object.right-g.object.left)/g.object.zoom/kA.clientWidth,g.object.matrix),V(yA*(g.object.top-g.object.bottom)/g.object.zoom/kA.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function H(d){g.object.isPerspectiveCamera?t/=d:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom*d)),g.object.updateProjectionMatrix(),a=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function p(d){g.object.isPerspectiveCamera?t*=d:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/d)),g.object.updateProjectionMatrix(),a=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function _(d){D.set(d.clientX,d.clientY)}function z(d){l.set(d.clientX,d.clientY)}function T(d){n.set(d.clientX,d.clientY)}function BA(d){s.set(d.clientX,d.clientY),G.subVectors(s,D).multiplyScalar(g.rotateSpeed);const O=g.domElement;K(2*Math.PI*G.x/O.clientHeight),U(2*Math.PI*G.y/O.clientHeight),D.copy(s),g.update()}function QA(d){w.set(d.clientX,d.clientY),c.subVectors(w,l),c.y>0?H(k()):c.y<0&&p(k()),l.copy(w),g.update()}function m(d){h.set(d.clientX,d.clientY),S.subVectors(h,n).multiplyScalar(g.panSpeed),Y(S.x,S.y),n.copy(h),g.update()}function j(d){d.deltaY<0?p(k()):d.deltaY>0&&H(k()),g.update()}function IA(d){let O=!1;switch(d.code){case g.keys.UP:d.ctrlKey||d.metaKey||d.shiftKey?U(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):Y(0,g.keyPanSpeed),O=!0;break;case g.keys.BOTTOM:d.ctrlKey||d.metaKey||d.shiftKey?U(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):Y(0,-g.keyPanSpeed),O=!0;break;case g.keys.LEFT:d.ctrlKey||d.metaKey||d.shiftKey?K(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):Y(g.keyPanSpeed,0),O=!0;break;case g.keys.RIGHT:d.ctrlKey||d.metaKey||d.shiftKey?K(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):Y(-g.keyPanSpeed,0),O=!0;break}O&&(d.preventDefault(),g.update())}function eA(){if(y.length===1)D.set(y[0].pageX,y[0].pageY);else{const d=.5*(y[0].pageX+y[1].pageX),O=.5*(y[0].pageY+y[1].pageY);D.set(d,O)}}function DA(){if(y.length===1)n.set(y[0].pageX,y[0].pageY);else{const d=.5*(y[0].pageX+y[1].pageX),O=.5*(y[0].pageY+y[1].pageY);n.set(d,O)}}function u(){const d=y[0].pageX-y[1].pageX,O=y[0].pageY-y[1].pageY,cA=Math.sqrt(d*d+O*O);l.set(0,cA)}function tA(){g.enableZoom&&u(),g.enablePan&&DA()}function KA(){g.enableZoom&&u(),g.enableRotate&&eA()}function UA(d){if(y.length==1)s.set(d.pageX,d.pageY);else{const cA=HA(d),yA=.5*(d.pageX+cA.x),kA=.5*(d.pageY+cA.y);s.set(yA,kA)}G.subVectors(s,D).multiplyScalar(g.rotateSpeed);const O=g.domElement;K(2*Math.PI*G.x/O.clientHeight),U(2*Math.PI*G.y/O.clientHeight),D.copy(s)}function GA(d){if(y.length===1)h.set(d.pageX,d.pageY);else{const O=HA(d),cA=.5*(d.pageX+O.x),yA=.5*(d.pageY+O.y);h.set(cA,yA)}S.subVectors(h,n).multiplyScalar(g.panSpeed),Y(S.x,S.y),n.copy(h)}function xA(d){const O=HA(d),cA=d.pageX-O.x,yA=d.pageY-O.y,kA=Math.sqrt(cA*cA+yA*yA);w.set(0,kA),c.set(0,Math.pow(w.y/l.y,g.zoomSpeed)),H(c.y),l.copy(w)}function v(d){g.enableZoom&&xA(d),g.enablePan&&GA(d)}function gA(d){g.enableZoom&&xA(d),g.enableRotate&&UA(d)}function nA(d){g.enabled!==!1&&(y.length===0&&(g.domElement.setPointerCapture(d.pointerId),g.domElement.addEventListener("pointermove",MA),g.domElement.addEventListener("pointerup",wA)),iA(d),d.pointerType==="touch"?F(d):LA(d))}function MA(d){g.enabled!==!1&&(d.pointerType==="touch"?N(d):YA(d))}function wA(d){sA(d),y.length===0&&(g.domElement.releasePointerCapture(d.pointerId),g.domElement.removeEventListener("pointermove",MA),g.domElement.removeEventListener("pointerup",wA)),g.dispatchEvent(ue),Q=C.NONE}function mA(d){sA(d)}function LA(d){let O;switch(d.button){case 0:O=g.mouseButtons.LEFT;break;case 1:O=g.mouseButtons.MIDDLE;break;case 2:O=g.mouseButtons.RIGHT;break;default:O=-1}switch(O){case XC.DOLLY:if(g.enableZoom===!1)return;z(d),Q=C.DOLLY;break;case XC.ROTATE:if(d.ctrlKey||d.metaKey||d.shiftKey){if(g.enablePan===!1)return;T(d),Q=C.PAN}else{if(g.enableRotate===!1)return;_(d),Q=C.ROTATE}break;case XC.PAN:if(d.ctrlKey||d.metaKey||d.shiftKey){if(g.enableRotate===!1)return;_(d),Q=C.ROTATE}else{if(g.enablePan===!1)return;T(d),Q=C.PAN}break;default:Q=C.NONE}Q!==C.NONE&&g.dispatchEvent(Yi)}function YA(d){switch(Q){case C.ROTATE:if(g.enableRotate===!1)return;BA(d);break;case C.DOLLY:if(g.enableZoom===!1)return;QA(d);break;case C.PAN:if(g.enablePan===!1)return;m(d);break}}function iI(d){g.enabled===!1||g.enableZoom===!1||Q!==C.NONE||(d.preventDefault(),g.dispatchEvent(Yi),j(d),g.dispatchEvent(ue))}function gI(d){g.enabled===!1||g.enablePan===!1||IA(d)}function F(d){switch(SA(d),y.length){case 1:switch(g.touches.ONE){case _C.ROTATE:if(g.enableRotate===!1)return;eA(),Q=C.TOUCH_ROTATE;break;case _C.PAN:if(g.enablePan===!1)return;DA(),Q=C.TOUCH_PAN;break;default:Q=C.NONE}break;case 2:switch(g.touches.TWO){case _C.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;tA(),Q=C.TOUCH_DOLLY_PAN;break;case _C.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;KA(),Q=C.TOUCH_DOLLY_ROTATE;break;default:Q=C.NONE}break;default:Q=C.NONE}Q!==C.NONE&&g.dispatchEvent(Yi)}function N(d){switch(SA(d),Q){case C.TOUCH_ROTATE:if(g.enableRotate===!1)return;UA(d),g.update();break;case C.TOUCH_PAN:if(g.enablePan===!1)return;GA(d),g.update();break;case C.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;v(d),g.update();break;case C.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;gA(d),g.update();break;default:Q=C.NONE}}function X(d){g.enabled!==!1&&d.preventDefault()}function iA(d){y.push(d)}function sA(d){delete M[d.pointerId];for(let O=0;O<y.length;O++)if(y[O].pointerId==d.pointerId){y.splice(O,1);return}}function SA(d){let O=M[d.pointerId];O===void 0&&(O=new hA,M[d.pointerId]=O),O.set(d.pageX,d.pageY)}function HA(d){const O=d.pointerId===y[0].pointerId?y[1]:y[0];return M[O.pointerId]}g.domElement.addEventListener("contextmenu",X),g.domElement.addEventListener("pointerdown",nA),g.domElement.addEventListener("pointercancel",mA),g.domElement.addEventListener("wheel",iI,{passive:!1}),this.update()}};function xc(B){let A,I,g,C;return A=new DQ({props:{dispose:B[2],object:B[0]}}),g=new No({props:{object:B[4],position:B[1]}}),g.$on("transform",B[5]),{c(){RA(A.$$.fragment),I=nI(),RA(g.$$.fragment)},m(Q,E){JA(A,Q,E),II(Q,I,E),JA(g,Q,E),C=!0},p(Q,E){const i={};E[0]&4&&(i.dispose=Q[2]),E[0]&1&&(i.object=Q[0]),A.$set(i);const o={};E[0]&2&&(o.position=Q[1]),g.$set(o)},i(Q){C||(EA(A.$$.fragment,Q),EA(g.$$.fragment,Q),C=!0)},o(Q){aA(A.$$.fragment,Q),aA(g.$$.fragment,Q),C=!1},d(Q){FA(A,Q),Q&&$A(I),FA(g,Q)}}}function bc(B,A,I){let g,{autoRotate:C=void 0}=A,{autoRotateSpeed:Q=void 0}=A,{dampingFactor:E=void 0}=A,{enableDamping:i=void 0}=A,{enabled:o=void 0}=A,{enablePan:t=void 0}=A,{enableRotate:e=void 0}=A,{enableZoom:a=void 0}=A,{keyPanSpeed:D=void 0}=A,{keys:s=void 0}=A,{maxAzimuthAngle:G=void 0}=A,{maxDistance:n=void 0}=A,{maxPolarAngle:h=void 0}=A,{maxZoom:S=void 0}=A,{minAzimuthAngle:l=void 0}=A,{minDistance:w=void 0}=A,{minPolarAngle:c=void 0}=A,{minZoom:y=void 0}=A,{mouseButtons:M=void 0}=A,{panSpeed:R=void 0}=A,{rotateSpeed:k=void 0}=A,{screenSpacePanning:K=void 0}=A,{touches:U=void 0}=A,{zoomSpeed:q=void 0}=A,{target:V=void 0}=A,{dispose:Y=void 0}=A;const H=Uo();eI(B,H,u=>I(30,g=u));const{renderer:p,invalidate:_}=Eg();if(!p)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(g instanceof ho))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const z=ZC(),T=()=>{_("Orbitcontrols: change event"),z("change")},BA=()=>z("start"),QA=()=>z("end"),m=new Tc(g,p.domElement);Jg(g).orbitControls=m,m.addEventListener("change",T),m.addEventListener("start",BA),m.addEventListener("end",QA),BI(()=>{g&&delete Jg(g).orbitControls,m.removeEventListener("change",T),m.removeEventListener("start",BA),m.removeEventListener("end",QA)});const{start:j,stop:IA}=BC(()=>m.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),eA=new NI,DA=()=>{I(0,m.target=eA.position,m),m.update(),_("OrbitControls: target changed")};return B.$$set=u=>{"autoRotate"in u&&I(6,C=u.autoRotate),"autoRotateSpeed"in u&&I(7,Q=u.autoRotateSpeed),"dampingFactor"in u&&I(8,E=u.dampingFactor),"enableDamping"in u&&I(9,i=u.enableDamping),"enabled"in u&&I(10,o=u.enabled),"enablePan"in u&&I(11,t=u.enablePan),"enableRotate"in u&&I(12,e=u.enableRotate),"enableZoom"in u&&I(13,a=u.enableZoom),"keyPanSpeed"in u&&I(14,D=u.keyPanSpeed),"keys"in u&&I(15,s=u.keys),"maxAzimuthAngle"in u&&I(16,G=u.maxAzimuthAngle),"maxDistance"in u&&I(17,n=u.maxDistance),"maxPolarAngle"in u&&I(18,h=u.maxPolarAngle),"maxZoom"in u&&I(19,S=u.maxZoom),"minAzimuthAngle"in u&&I(20,l=u.minAzimuthAngle),"minDistance"in u&&I(21,w=u.minDistance),"minPolarAngle"in u&&I(22,c=u.minPolarAngle),"minZoom"in u&&I(23,y=u.minZoom),"mouseButtons"in u&&I(24,M=u.mouseButtons),"panSpeed"in u&&I(25,R=u.panSpeed),"rotateSpeed"in u&&I(26,k=u.rotateSpeed),"screenSpacePanning"in u&&I(27,K=u.screenSpacePanning),"touches"in u&&I(28,U=u.touches),"zoomSpeed"in u&&I(29,q=u.zoomSpeed),"target"in u&&I(1,V=u.target),"dispose"in u&&I(2,Y=u.dispose)},B.$$.update=()=>{B.$$.dirty[0]&1073741761&&(C!==void 0&&I(0,m.autoRotate=C,m),Q!==void 0&&I(0,m.autoRotateSpeed=Q,m),E!==void 0&&I(0,m.dampingFactor=E,m),i!==void 0&&I(0,m.enableDamping=i,m),o!==void 0&&I(0,m.enabled=o,m),t!==void 0&&I(0,m.enablePan=t,m),e!==void 0&&I(0,m.enableRotate=e,m),a!==void 0&&I(0,m.enableZoom=a,m),D!==void 0&&I(0,m.keyPanSpeed=D,m),s!==void 0&&I(0,m.keys=s,m),G!==void 0&&I(0,m.maxAzimuthAngle=G,m),n!==void 0&&I(0,m.maxDistance=n,m),h!==void 0&&I(0,m.maxPolarAngle=h,m),S!==void 0&&I(0,m.maxZoom=S,m),l!==void 0&&I(0,m.minAzimuthAngle=l,m),w!==void 0&&I(0,m.minDistance=w,m),c!==void 0&&I(0,m.minPolarAngle=c,m),y!==void 0&&I(0,m.minZoom=y,m),M!==void 0&&I(0,m.mouseButtons=M,m),R!==void 0&&I(0,m.panSpeed=R,m),k!==void 0&&I(0,m.rotateSpeed=k,m),K!==void 0&&I(0,m.screenSpacePanning=K,m),U!==void 0&&I(0,m.touches=U,m),q!==void 0&&I(0,m.zoomSpeed=q,m),m.update(),_("OrbitControls: props changed")),B.$$.dirty[0]&576&&(C||i?j():IA())},[m,V,Y,H,eA,DA,C,Q,E,i,o,t,e,a,D,s,G,n,h,S,l,w,c,y,M,R,k,K,U,q]}class Oc extends GI{constructor(A){super(),hI(this,A,bc,xc,DI,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}function Zc(B,A,I){let{object:g}=A,C=g,{interactive:Q=!1}=A,{ignorePointer:E=!1}=A;const i=ZC(),{addInteractiveObject:o,removeInteractiveObject:t,addRaycastableObject:e,removeRaycastableObject:a}=_a(),{invalidate:D}=Eg(),s=n=>{a(n),t(n),delete Jg(n).eventDispatcher},G=(n,h,S)=>{Jg(n).eventDispatcher=i,h?(a(n),t(n)):(e(n),S?o(n):t(n))};return BI(()=>{s(g),D("InteractiveObject: object removed")}),B.$$set=n=>{"object"in n&&I(0,g=n.object),"interactive"in n&&I(1,Q=n.interactive),"ignorePointer"in n&&I(2,E=n.ignorePointer)},B.$$.update=()=>{B.$$.dirty&15&&(g!==C?(s(C),G(g,E,Q),D("InteractiveObject: object changed"),I(3,C=g)):g===C&&(G(g,E,Q),D("InteractiveObject: props changed")))},[g,Q,E,C]}class Wc extends GI{constructor(A){super(),hI(this,A,Zc,null,DI,{object:0,interactive:1,ignorePointer:2})}}const ID=new NI;ID.scale.set(0,0,0);ID.matrix;new FI().fromArray(new Array(16).fill(0));new aI(16777215);function Pc(B){let A;const I=B[14].default,g=Ag(I,B,B[18],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q&262144)&&gg(g,I,C,C[18],A?Ig(I,C[18],Q,null):Cg(C[18]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function vc(B){let A,I,g;function C(E){B[15](E)}let Q={object:B[13],position:B[1],scale:B[2],rotation:B[3],lookAt:B[4],frustumCulled:B[8],renderOrder:B[9],visible:B[10],userData:B[11],dispose:B[12],castShadow:B[6],receiveShadow:B[7],viewportAware:B[5],$$slots:{default:[Pc]},$$scope:{ctx:B}};return B[0]!==void 0&&(Q.inViewport=B[0]),A=new AD({props:Q}),ng.push(()=>Tg(A,"inViewport",C)),A.$on("viewportenter",B[16]),A.$on("viewportleave",B[17]),{c(){RA(A.$$.fragment)},m(E,i){JA(A,E,i),g=!0},p(E,[i]){const o={};i&2&&(o.position=E[1]),i&4&&(o.scale=E[2]),i&8&&(o.rotation=E[3]),i&16&&(o.lookAt=E[4]),i&256&&(o.frustumCulled=E[8]),i&512&&(o.renderOrder=E[9]),i&1024&&(o.visible=E[10]),i&2048&&(o.userData=E[11]),i&4096&&(o.dispose=E[12]),i&64&&(o.castShadow=E[6]),i&128&&(o.receiveShadow=E[7]),i&32&&(o.viewportAware=E[5]),i&262144&&(o.$$scope={dirty:i,ctx:E}),!I&&i&1&&(I=!0,o.inViewport=E[0],mg(()=>I=!1)),A.$set(o)},i(E){g||(EA(A.$$.fragment,E),g=!0)},o(E){aA(A.$$.fragment,E),g=!1},d(E){FA(A,E)}}}function jc(B,A,I){let{$$slots:g={},$$scope:C}=A,{position:Q=void 0}=A,{scale:E=void 0}=A,{rotation:i=void 0}=A,{lookAt:o=void 0}=A,{viewportAware:t=!1}=A,{inViewport:e=!1}=A,{castShadow:a=void 0}=A,{receiveShadow:D=void 0}=A,{frustumCulled:s=void 0}=A,{renderOrder:G=void 0}=A,{visible:n=void 0}=A,{userData:h=void 0}=A,{dispose:S=void 0}=A;const l=new jB;function w(M){e=M,I(0,e)}function c(M){KI.call(this,B,M)}function y(M){KI.call(this,B,M)}return B.$$set=M=>{"position"in M&&I(1,Q=M.position),"scale"in M&&I(2,E=M.scale),"rotation"in M&&I(3,i=M.rotation),"lookAt"in M&&I(4,o=M.lookAt),"viewportAware"in M&&I(5,t=M.viewportAware),"inViewport"in M&&I(0,e=M.inViewport),"castShadow"in M&&I(6,a=M.castShadow),"receiveShadow"in M&&I(7,D=M.receiveShadow),"frustumCulled"in M&&I(8,s=M.frustumCulled),"renderOrder"in M&&I(9,G=M.renderOrder),"visible"in M&&I(10,n=M.visible),"userData"in M&&I(11,h=M.userData),"dispose"in M&&I(12,S=M.dispose),"$$scope"in M&&I(18,C=M.$$scope)},[e,Q,E,i,o,t,a,D,s,G,n,h,S,l,g,w,c,y,C]}class Vc extends GI{constructor(A){super(),hI(this,A,jc,vc,DI,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}function Xc(B){let A;const I=B[16].default,g=Ag(I,B,B[27],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q&134217728)&&gg(g,I,C,C[27],A?Ig(I,C[27],Q,null):Cg(C[27]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function _c(B){let A,I,g,C,Q;function E(o){B[17](o)}let i={object:B[1],lookAt:B[5],position:B[2],scale:B[3],rotation:B[4],castShadow:B[7],receiveShadow:B[8],frustumCulled:B[9],renderOrder:B[10],visible:B[11],userData:B[12],dispose:B[13],viewportAware:B[6],$$slots:{default:[Xc]},$$scope:{ctx:B}};return B[0]!==void 0&&(i.inViewport=B[0]),A=new AD({props:i}),ng.push(()=>Tg(A,"inViewport",E)),A.$on("viewportenter",B[18]),A.$on("viewportleave",B[19]),C=new Wc({props:{object:B[1],interactive:B[14],ignorePointer:B[15]}}),C.$on("click",B[20]),C.$on("contextmenu",B[21]),C.$on("pointerup",B[22]),C.$on("pointerdown",B[23]),C.$on("pointerenter",B[24]),C.$on("pointerleave",B[25]),C.$on("pointermove",B[26]),{c(){RA(A.$$.fragment),g=nI(),RA(C.$$.fragment)},m(o,t){JA(A,o,t),II(o,g,t),JA(C,o,t),Q=!0},p(o,[t]){const e={};t&2&&(e.object=o[1]),t&32&&(e.lookAt=o[5]),t&4&&(e.position=o[2]),t&8&&(e.scale=o[3]),t&16&&(e.rotation=o[4]),t&128&&(e.castShadow=o[7]),t&256&&(e.receiveShadow=o[8]),t&512&&(e.frustumCulled=o[9]),t&1024&&(e.renderOrder=o[10]),t&2048&&(e.visible=o[11]),t&4096&&(e.userData=o[12]),t&8192&&(e.dispose=o[13]),t&64&&(e.viewportAware=o[6]),t&134217728&&(e.$$scope={dirty:t,ctx:o}),!I&&t&1&&(I=!0,e.inViewport=o[0],mg(()=>I=!1)),A.$set(e);const a={};t&2&&(a.object=o[1]),t&16384&&(a.interactive=o[14]),t&32768&&(a.ignorePointer=o[15]),C.$set(a)},i(o){Q||(EA(A.$$.fragment,o),EA(C.$$.fragment,o),Q=!0)},o(o){aA(A.$$.fragment,o),aA(C.$$.fragment,o),Q=!1},d(o){FA(A,o),o&&$A(g),FA(C,o)}}}function zc(B,A,I){let{$$slots:g={},$$scope:C}=A,{line:Q}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:t=void 0}=A,{viewportAware:e=!1}=A,{inViewport:a=!1}=A,{castShadow:D=void 0}=A,{receiveShadow:s=void 0}=A,{frustumCulled:G=void 0}=A,{renderOrder:n=void 0}=A,{visible:h=void 0}=A,{userData:S=void 0}=A,{dispose:l=void 0}=A,{interactive:w=!1}=A,{ignorePointer:c=!1}=A;function y(p){a=p,I(0,a)}function M(p){KI.call(this,B,p)}function R(p){KI.call(this,B,p)}function k(p){KI.call(this,B,p)}function K(p){KI.call(this,B,p)}function U(p){KI.call(this,B,p)}function q(p){KI.call(this,B,p)}function V(p){KI.call(this,B,p)}function Y(p){KI.call(this,B,p)}function H(p){KI.call(this,B,p)}return B.$$set=p=>{"line"in p&&I(1,Q=p.line),"position"in p&&I(2,E=p.position),"scale"in p&&I(3,i=p.scale),"rotation"in p&&I(4,o=p.rotation),"lookAt"in p&&I(5,t=p.lookAt),"viewportAware"in p&&I(6,e=p.viewportAware),"inViewport"in p&&I(0,a=p.inViewport),"castShadow"in p&&I(7,D=p.castShadow),"receiveShadow"in p&&I(8,s=p.receiveShadow),"frustumCulled"in p&&I(9,G=p.frustumCulled),"renderOrder"in p&&I(10,n=p.renderOrder),"visible"in p&&I(11,h=p.visible),"userData"in p&&I(12,S=p.userData),"dispose"in p&&I(13,l=p.dispose),"interactive"in p&&I(14,w=p.interactive),"ignorePointer"in p&&I(15,c=p.ignorePointer),"$$scope"in p&&I(27,C=p.$$scope)},[a,Q,E,i,o,t,e,D,s,G,n,h,S,l,w,c,g,y,M,R,k,K,U,q,V,Y,H,C]}class $c extends GI{constructor(A){super(),hI(this,A,zc,_c,DI,{line:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function Ak(B){let A;const I=B[20].default,g=Ag(I,B,B[31],null);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q[1]&1)&&gg(g,I,C,C[31],A?Ig(I,C[31],Q,null):Cg(C[31]),null)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function Ik(B){let A,I,g,C,Q,E,i;A=new DQ({props:{dispose:B[11],object:B[15]}}),g=new DQ({props:{dispose:B[11],object:B[16]}});function o(e){B[21](e)}let t={line:B[17],position:B[1],scale:B[2],rotation:B[3],lookAt:B[14],castShadow:B[5],receiveShadow:B[6],frustumCulled:B[7],renderOrder:B[8],visible:B[9],userData:B[10],dispose:B[11],interactive:B[12],ignorePointer:B[13],viewportAware:B[4],$$slots:{default:[Ak]},$$scope:{ctx:B}};return B[0]!==void 0&&(t.inViewport=B[0]),Q=new $c({props:t}),ng.push(()=>Tg(Q,"inViewport",o)),Q.$on("click",B[22]),Q.$on("contextmenu",B[23]),Q.$on("pointerup",B[24]),Q.$on("pointerdown",B[25]),Q.$on("pointerenter",B[26]),Q.$on("pointerleave",B[27]),Q.$on("pointermove",B[28]),Q.$on("viewportenter",B[29]),Q.$on("viewportleave",B[30]),{c(){RA(A.$$.fragment),I=nI(),RA(g.$$.fragment),C=nI(),RA(Q.$$.fragment)},m(e,a){JA(A,e,a),II(e,I,a),JA(g,e,a),II(e,C,a),JA(Q,e,a),i=!0},p(e,a){const D={};a[0]&2048&&(D.dispose=e[11]),a[0]&32768&&(D.object=e[15]),A.$set(D);const s={};a[0]&2048&&(s.dispose=e[11]),a[0]&65536&&(s.object=e[16]),g.$set(s);const G={};a[0]&2&&(G.position=e[1]),a[0]&4&&(G.scale=e[2]),a[0]&8&&(G.rotation=e[3]),a[0]&16384&&(G.lookAt=e[14]),a[0]&32&&(G.castShadow=e[5]),a[0]&64&&(G.receiveShadow=e[6]),a[0]&128&&(G.frustumCulled=e[7]),a[0]&256&&(G.renderOrder=e[8]),a[0]&512&&(G.visible=e[9]),a[0]&1024&&(G.userData=e[10]),a[0]&2048&&(G.dispose=e[11]),a[0]&4096&&(G.interactive=e[12]),a[0]&8192&&(G.ignorePointer=e[13]),a[0]&16&&(G.viewportAware=e[4]),a[1]&1&&(G.$$scope={dirty:a,ctx:e}),!E&&a[0]&1&&(E=!0,G.inViewport=e[0],mg(()=>E=!1)),Q.$set(G)},i(e){i||(EA(A.$$.fragment,e),EA(g.$$.fragment,e),EA(Q.$$.fragment,e),i=!0)},o(e){aA(A.$$.fragment,e),aA(g.$$.fragment,e),aA(Q.$$.fragment,e),i=!1},d(e){FA(A,e),e&&$A(I),FA(g,e),e&&$A(C),FA(Q,e)}}}function gk(B,A,I){let{$$slots:g={},$$scope:C}=A,{position:Q=void 0}=A,{scale:E=void 0}=A,{rotation:i=void 0}=A,{viewportAware:o=!1}=A,{inViewport:t=!1}=A,{castShadow:e=void 0}=A,{receiveShadow:a=void 0}=A,{frustumCulled:D=void 0}=A,{renderOrder:s=void 0}=A,{visible:G=void 0}=A,{userData:n=void 0}=A,{dispose:h=void 0}=A,{interactive:S=!1}=A,{ignorePointer:l=!1}=A,{lookAt:w=void 0}=A,{geometry:c}=A,{material:y}=A,M=y,R=c;const{invalidate:k}=Eg(),K=new tS(c,y),U=()=>K;function q(m){t=m,I(0,t)}function V(m){KI.call(this,B,m)}function Y(m){KI.call(this,B,m)}function H(m){KI.call(this,B,m)}function p(m){KI.call(this,B,m)}function _(m){KI.call(this,B,m)}function z(m){KI.call(this,B,m)}function T(m){KI.call(this,B,m)}function BA(m){KI.call(this,B,m)}function QA(m){KI.call(this,B,m)}return B.$$set=m=>{"position"in m&&I(1,Q=m.position),"scale"in m&&I(2,E=m.scale),"rotation"in m&&I(3,i=m.rotation),"viewportAware"in m&&I(4,o=m.viewportAware),"inViewport"in m&&I(0,t=m.inViewport),"castShadow"in m&&I(5,e=m.castShadow),"receiveShadow"in m&&I(6,a=m.receiveShadow),"frustumCulled"in m&&I(7,D=m.frustumCulled),"renderOrder"in m&&I(8,s=m.renderOrder),"visible"in m&&I(9,G=m.visible),"userData"in m&&I(10,n=m.userData),"dispose"in m&&I(11,h=m.dispose),"interactive"in m&&I(12,S=m.interactive),"ignorePointer"in m&&I(13,l=m.ignorePointer),"lookAt"in m&&I(14,w=m.lookAt),"geometry"in m&&I(15,c=m.geometry),"material"in m&&I(16,y=m.material),"$$scope"in m&&I(31,C=m.$$scope)},B.$$.update=()=>{B.$$.dirty[0]&327680&&(y!==M?(U().material=y,k("LineSegments: material changed")):k("LineSegments: material props changed"),I(18,M=y)),B.$$.dirty[0]&557056&&(c!==R?(U().geometry=c,k("LineSegments: geometry changed")):k("LineSegments: geometry props changed"),I(19,R=c))},[t,Q,E,i,o,e,a,D,s,G,n,h,S,l,w,c,y,K,M,R,g,q,V,Y,H,p,_,z,T,BA,QA,C]}class Ck extends GI{constructor(A){super(),hI(this,A,gk,Ik,DI,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,lineSegments:17},null,[-1,-1])}get lineSegments(){return this.$$.ctx[17]}}const gD=(B,A)=>{if(A.includes(".")){const I=A.split("."),g=I.pop();for(let C=0;C<I.length;C+=1)B=B[I[C]];return{target:B,key:g}}else return{target:B,key:A}},Li=Symbol("initialValueBeforeAttach"),Bk=()=>{const{invalidate:B}=Eg();let A=!1,I=Li,g,C,Q;const E=(o,t,e)=>{if(i(),!e){const a=o;((a==null?void 0:a.isMaterial)||!1)&&(e="material"),((a==null?void 0:a.isBufferGeometry)||(a==null?void 0:a.isGeometry)||!1)&&(e="geometry")}if(e){if(typeof e=="function")g=e(t,o);else{const{target:a,key:D}=gD(t,e);I=a[D],a[D]=o,C=a,Q=D}A=!0,B()}},i=()=>{A&&(g?(g(),g=void 0):C&&Q&&I!==Li&&(C[Q]=I,I=Li,C=void 0,Q=void 0),A=!1,B())};return BI(()=>{i()}),{update:E}},Qk=B=>B&&B.isCamera,CD=B=>B&&B.isOrthographicCamera,BD=B=>B&&B.isPerspectiveCamera,Ek=B=>BD(B)||CD(B),ik=()=>{const{invalidate:B,size:A}=Eg(),{setCamera:I}=_a();let g,C;BI(()=>{C==null||C()});const Q=o=>{g&&(CD(g)?(g.left=o.width/-2,g.right=o.width/2,g.top=o.height/2,g.bottom=o.height/-2,g.updateProjectionMatrix(),g.updateMatrixWorld(),B()):BD(g)&&(g.aspect=o.width/o.height,g.updateProjectionMatrix(),g.updateMatrixWorld(),B()))};return{update:(o,t)=>{if(C==null||C(),t||!Ek(o)){g=void 0;return}g=o,C=A.subscribe(Q)},makeDefaultCamera:(o,t)=>{!Qk(o)||!t||(I(o),B())}}},He=B=>!!(B!=null&&B.addEventListener),ok=()=>{const B=ZC(),A=OC(),I=D=>{D!=null&&D.type&&B(D.type,D)},g=(D,s)=>{He(D)&&s.forEach(G=>{D.removeEventListener(G,I)})},C=(D,s)=>{He(D)&&s.forEach(G=>{D.addEventListener(G,I)})};let Q=[],E;const i=rI([]),o=i.subscribe(D=>{g(E,Q),C(E,D),Q=D});BI(o);const t=rI(),e=t.subscribe(D=>{g(E,Q),C(D,Q),E=D});return BI(e),BI(()=>{g(E,Q)}),JE(()=>{i.set(Object.keys(A.$$.callbacks))}),{updateRef:D=>{t.set(D)}}},tk=["$$scope","$$slots","type","args","attach","instance"],ek=["fov","aspect","near","far","left","right","top","bottom","zoom"],ak=B=>typeof B=="string"||typeof B=="number"||typeof B=="boolean"||typeof B>"u"||B===null,Dk=()=>{const{invalidate:B}=Eg(),A=new Map,I=(C,Q,E,i)=>{var e,a;if(ak(E)){const D=A.get(Q);if(D&&D.instance===C&&D.value===E)return;A.set(Q,{instance:C,value:E})}const{key:o,target:t}=gD(C,Q);if(!Array.isArray(E)&&typeof E=="number"&&typeof((e=t[o])==null?void 0:e.setScalar)=="function")t[o].setScalar(E);else if(typeof((a=t[o])==null?void 0:a.set)=="function")Array.isArray(E)?t[o].set(...E):t[o].set(E);else{if(t[o]=E,i.manualCamera)return;ek.includes(o)&&(t.isPerspectiveCamera||t.isOrthographicCamera)&&t.updateProjectionMatrix()}};return{updateProps:(C,Q,E)=>{for(const i in Q)tk.includes(i)||I(C,i,Q[i],E),B()}}},sk=B=>({ref:B&1}),me=B=>({ref:B[0]}),nk=B=>({ref:B&1}),Te=B=>({ref:B[0]});function xe(B){let A,I;return A=new DQ({props:{object:B[0],dispose:B[1]}}),{c(){RA(A.$$.fragment)},m(g,C){JA(A,g,C),I=!0},p(g,C){const Q={};C&1&&(Q.object=g[0]),C&2&&(Q.dispose=g[1]),A.$set(Q)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){aA(A.$$.fragment,g),I=!1},d(g){FA(A,g)}}}function hk(B){let A;const I=B[12].default,g=Ag(I,B,B[13],me);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q&8193)&&gg(g,I,C,C[13],A?Ig(I,C[13],Q,sk):Cg(C[13]),me)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function Gk(B){let A,I;return A=new yQ({props:{object:B[0],$$slots:{default:[wk]},$$scope:{ctx:B}}}),{c(){RA(A.$$.fragment)},m(g,C){JA(A,g,C),I=!0},p(g,C){const Q={};C&1&&(Q.object=g[0]),C&8193&&(Q.$$scope={dirty:C,ctx:g}),A.$set(Q)},i(g){I||(EA(A.$$.fragment,g),I=!0)},o(g){aA(A.$$.fragment,g),I=!1},d(g){FA(A,g)}}}function wk(B){let A;const I=B[12].default,g=Ag(I,B,B[13],Te);return{c(){g&&g.c()},m(C,Q){g&&g.m(C,Q),A=!0},p(C,Q){g&&g.p&&(!A||Q&8193)&&gg(g,I,C,C[13],A?Ig(I,C[13],Q,nk):Cg(C[13]),Te)},i(C){A||(EA(g,C),A=!0)},o(C){aA(g,C),A=!1},d(C){g&&g.d(C)}}}function rk(B){let A=B[4](B[0]),I,g,C,Q,E,i,o=A&&xe(B);const t=[Gk,hk],e=[];function a(D,s){return s&1&&(g=null),g==null&&(g=!!D[3](D[0])),g?0:1}return C=a(B,-1),Q=e[C]=t[C](B),{c(){o&&o.c(),I=nI(),Q.c(),E=NE()},m(D,s){o&&o.m(D,s),II(D,I,s),e[C].m(D,s),II(D,E,s),i=!0},p(D,[s]){s&1&&(A=D[4](D[0])),A?o?(o.p(D,s),s&1&&EA(o,1)):(o=xe(D),o.c(),EA(o,1),o.m(I.parentNode,I)):o&&(lB(),aA(o,1,1,()=>{o=null}),yB());let G=C;C=a(D,s),C===G?e[C].p(D,s):(lB(),aA(e[G],1,1,()=>{e[G]=null}),yB(),Q=e[C],Q?Q.p(D,s):(Q=e[C]=t[C](D),Q.c()),EA(Q,1),Q.m(E.parentNode,E))},i(D){i||(EA(o),EA(Q),i=!0)},o(D){aA(o),aA(Q),i=!1},d(D){o&&o.d(D),D&&$A(I),e[C].d(D),D&&$A(E)}}}function Sk(B,A,I){const g=["type","args","attach","manual","makeDefault","dispose","ref"];let C=It(A,g),Q,{$$slots:E={},$$scope:i}=A,{type:o}=A,{args:t=void 0}=A,{attach:e=void 0}=A,{manual:a=void 0}=A,{makeDefault:D=void 0}=A,{dispose:s=void 0}=A;const G=cg("threlte-hierarchical-parent-context");eI(B,G,U=>I(11,Q=U));const n=U=>typeof U=="function"&&/^\s*class\s+/.test(U.toString()),h=U=>Array.isArray(U);let{ref:S=n(o)&&h(t)?new o(...t):n(o)?new o:o}=A,l=!1;const w=rI(S);sg("threlte-hierarchical-parent-context",w);const c=Dk(),y=ik(),M=Bk(),R=ok(),k=U=>!!U.isObject3D,K=U=>U.dispose!==void 0;return B.$$set=U=>{A=QQ(QQ({},A),Hi(U)),I(21,C=It(A,g)),"type"in U&&I(5,o=U.type),"args"in U&&I(6,t=U.args),"attach"in U&&I(7,e=U.attach),"manual"in U&&I(8,a=U.manual),"makeDefault"in U&&I(9,D=U.makeDefault),"dispose"in U&&I(1,s=U.dispose),"ref"in U&&I(0,S=U.ref),"$$scope"in U&&I(13,i=U.$$scope)},B.$$.update=()=>{B.$$.dirty&1120&&(l?I(0,S=n(o)&&h(t)?new o(...t):n(o)?new o:o):I(10,l=!0)),B.$$.dirty&1&&w.set(S),c.updateProps(S,C,{manualCamera:a}),B.$$.dirty&257&&y.update(S,a),B.$$.dirty&513&&y.makeDefaultCamera(S,D),B.$$.dirty&2177&&M.update(S,Q,e),B.$$.dirty&1&&R.updateRef(S)},[S,s,G,k,K,o,t,e,a,D,l,Q,E,i]}class kg extends GI{constructor(A){super(),hI(this,A,Sk,rk,DI,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function ck(B){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class be extends GI{constructor(A){super(),hI(this,A,ck,null,DI,{})}}new Proxy(be,{get(B,A){return B[A]||be}});mc(nE,()=>new nE(Wa));new L;new L;new L;class QD extends WS{constructor(A){super(A),this.type=Yg}parse(A){const i=function(w,c){switch(w){case 1:console.error("THREE.RGBELoader Read Error: "+(c||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(c||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(c||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(c||""))}return-1},a=`
`,D=function(w,c,y){c=c||1024;let R=w.pos,k=-1,K=0,U="",q=String.fromCharCode.apply(null,new Uint16Array(w.subarray(R,R+128)));for(;0>(k=q.indexOf(a))&&K<c&&R<w.byteLength;)U+=q,K+=q.length,R+=128,q+=String.fromCharCode.apply(null,new Uint16Array(w.subarray(R,R+128)));return-1<k?(y!==!1&&(w.pos+=K+k+1),U+q.slice(0,k)):!1},s=function(w){const c=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,K={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let U,q;if(w.pos>=w.byteLength||!(U=D(w)))return i(1,"no header found");if(!(q=U.match(c)))return i(3,"bad initial token");for(K.valid|=1,K.programtype=q[1],K.string+=U+`
`;U=D(w),U!==!1;){if(K.string+=U+`
`,U.charAt(0)==="#"){K.comments+=U+`
`;continue}if((q=U.match(y))&&(K.gamma=parseFloat(q[1])),(q=U.match(M))&&(K.exposure=parseFloat(q[1])),(q=U.match(R))&&(K.valid|=2,K.format=q[1]),(q=U.match(k))&&(K.valid|=4,K.height=parseInt(q[1],10),K.width=parseInt(q[2],10)),K.valid&2&&K.valid&4)break}return K.valid&2?K.valid&4?K:i(3,"missing image size specifier"):i(3,"missing format specifier")},G=function(w,c,y){const M=c;if(M<8||M>32767||w[0]!==2||w[1]!==2||w[2]&128)return new Uint8Array(w);if(M!==(w[2]<<8|w[3]))return i(3,"wrong scanline width");const R=new Uint8Array(4*c*y);if(!R.length)return i(4,"unable to allocate buffer space");let k=0,K=0;const U=4*M,q=new Uint8Array(4),V=new Uint8Array(U);let Y=y;for(;Y>0&&K<w.byteLength;){if(K+4>w.byteLength)return i(1);if(q[0]=w[K++],q[1]=w[K++],q[2]=w[K++],q[3]=w[K++],q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=M)return i(3,"bad rgbe scanline format");let H=0,p;for(;H<U&&K<w.byteLength;){p=w[K++];const z=p>128;if(z&&(p-=128),p===0||H+p>U)return i(3,"bad scanline data");if(z){const T=w[K++];for(let BA=0;BA<p;BA++)V[H++]=T}else V.set(w.subarray(K,K+p),H),H+=p,K+=p}const _=M;for(let z=0;z<_;z++){let T=0;R[k]=V[z+T],T+=M,R[k+1]=V[z+T],T+=M,R[k+2]=V[z+T],T+=M,R[k+3]=V[z+T],k+=4}Y--}return R},n=function(w,c,y,M){const R=w[c+3],k=Math.pow(2,R-128)/255;y[M+0]=w[c+0]*k,y[M+1]=w[c+1]*k,y[M+2]=w[c+2]*k,y[M+3]=1},h=function(w,c,y,M){const R=w[c+3],k=Math.pow(2,R-128)/255;y[M+0]=XQ.toHalfFloat(Math.min(w[c+0]*k,65504)),y[M+1]=XQ.toHalfFloat(Math.min(w[c+1]*k,65504)),y[M+2]=XQ.toHalfFloat(Math.min(w[c+2]*k,65504)),y[M+3]=XQ.toHalfFloat(1)},S=new Uint8Array(A);S.pos=0;const l=s(S);if(l!==-1){const w=l.width,c=l.height,y=G(S.subarray(S.pos),w,c);if(y!==-1){let M,R,k;switch(this.type){case Ng:k=y.length/4;const K=new Float32Array(k*4);for(let q=0;q<k;q++)n(y,q*4,K,q*4);M=K,R=Ng;break;case Yg:k=y.length/4;const U=new Uint16Array(k*4);for(let q=0;q<k;q++)h(y,q*4,U,q*4);M=U,R=Yg;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:w,height:c,data:M,header:l.string,gamma:l.gamma,exposure:l.exposure,type:R}}}return null}setDataType(A){return this.type=A,this}load(A,I,g,C){function Q(E,i){switch(E.type){case Ng:case Yg:E.encoding=Fg,E.minFilter=JI,E.magFilter=JI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,Q,g,C)}}class kk extends YB{constructor(A){super(A),this.hdrLoader=new QD,this.type=Yg}load(A,I,g,C){const Q=new qE;switch(Q.type=this.type,Q.type){case Ng:Q.encoding=Fg,Q.minFilter=JI,Q.magFilter=JI,Q.generateMipmaps=!1;break;case Yg:Q.encoding=Fg,Q.minFilter=JI,Q.magFilter=JI,Q.generateMipmaps=!1;break}const E=this;let i=0;function o(t,e,a,D){new Pa(E.manager).setPath(E.path).setResponseType("arraybuffer").setWithCredentials(E.withCredentials).load(A[t],function(s){i++;const G=E.hdrLoader.parse(s);if(G){if(G.data!==void 0){const n=new La(G.data,G.width,G.height);n.type=Q.type,n.encoding=Q.encoding,n.format=Q.format,n.minFilter=Q.minFilter,n.magFilter=Q.magFilter,n.generateMipmaps=Q.generateMipmaps,Q.images[t]=n}i===6&&(Q.needsUpdate=!0,e&&e(Q))}},a,D)}for(let t=0;t<A.length;t++)o(t,I,g,C);return Q}setDataType(A){return this.type=A,this.hdrLoader.setDataType(A),this}}class lk extends zI{constructor(A,I={}){const C=[A.isCubeTexture?"#define ENVMAP_TYPE_CUBE":""],Q=`
        varying vec3 vWorldPosition;

        void main() 
        {

            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

        }
        `,E=C.join(`
`)+`

        varying vec3 vWorldPosition;

        uniform float radius;
        uniform float height;
        uniform float angle;

        #ifdef ENVMAP_TYPE_CUBE

            uniform samplerCube map;

        #else

            uniform sampler2D map;

        #endif

        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {

            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;

        }

        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {

            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;

        }

        vec3 project() 
        {

            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;

            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;

            } else {

                p = vec3( 0.0, 1.0, 0.0 );

            }

            return p;

        }

        #include <common>

        void main() 
        {

            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE

                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;

            #else

                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;

            #endif

            gl_FragColor = vec4( outcolor, 1.0 );

            #include <tonemapping_fragment>
            #include <encodings_fragment>

        }