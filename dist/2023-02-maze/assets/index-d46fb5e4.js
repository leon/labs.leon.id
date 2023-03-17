(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const B of C)if(B.type==="childList")for(const E of B.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function I(C){const B={};return C.integrity&&(B.integrity=C.integrity),C.referrerPolicy&&(B.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?B.credentials="include":C.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function g(C){if(C.ep)return;C.ep=!0;const B=I(C);fetch(C.href,B)}})();function Dg(){}function xi(Q,A){for(const I in A)Q[I]=A[I];return Q}function Ya(Q){return Q()}function ae(){return Object.create(null)}function _C(Q){Q.forEach(Ya)}function qE(Q){return typeof Q=="function"}function JI(Q,A){return Q!=Q?A==A:Q!==A||Q&&typeof Q=="object"||typeof Q=="function"}function ND(Q){return Object.keys(Q).length===0}function ro(Q,...A){if(Q==null)return Dg;const I=Q.subscribe(...A);return I.unsubscribe?()=>I.unsubscribe():I}function NB(Q){let A;return ro(Q,I=>A=I)(),A}function LI(Q,A,I){Q.$$.on_destroy.push(ro(A,I))}function Kg(Q,A,I,g){if(Q){const C=ua(Q,A,I,g);return Q[0](C)}}function ua(Q,A,I,g){return Q[1]&&g?xi(I.ctx.slice(),Q[1](g(A))):I.ctx}function Ug(Q,A,I,g){if(Q[2]&&g){const C=Q[2](g(I));if(A.dirty===void 0)return C;if(typeof C=="object"){const B=[],E=Math.max(A.dirty.length,C.length);for(let i=0;i<E;i+=1)B[i]=A.dirty[i]|C[i];return B}return A.dirty|C}return A.dirty}function Ng(Q,A,I,g,C,B){if(C){const E=ua(A,I,g,B);Q.p(E,C)}}function Jg(Q){if(Q.ctx.length>32){const A=[],I=Q.ctx.length/32;for(let g=0;g<I;g++)A[g]=-1;return A}return-1}function JD(Q){const A={};for(const I in Q)I[0]!=="$"&&(A[I]=Q[I]);return A}function se(Q,A){const I={};A=new Set(A);for(const g in Q)!A.has(g)&&g[0]!=="$"&&(I[g]=Q[g]);return I}function oE(Q,A,I){return Q.set(I),A}function RD(Q){return Q&&qE(Q.destroy)?Q.destroy:Dg}function yI(Q,A,I){Q.insertBefore(A,I||null)}function GI(Q){Q.parentNode&&Q.parentNode.removeChild(Q)}function La(Q){return document.createElement(Q)}function Ha(Q){return document.createTextNode(Q)}function ng(){return Ha(" ")}function JQ(){return Ha("")}function qC(Q,A,I,g){return Q.addEventListener(A,I,g),()=>Q.removeEventListener(A,I,g)}function ma(Q,A,I){I==null?Q.removeAttribute(A):Q.getAttribute(A)!==I&&Q.setAttribute(A,I)}function FD(Q){return Array.from(Q.childNodes)}function qD(Q,A,{bubbles:I=!1,cancelable:g=!1}={}){const C=document.createEvent("CustomEvent");return C.initCustomEvent(Q,I,g,A),C}let nQ;function tQ(Q){nQ=Q}function XC(){if(!nQ)throw new Error("Function called outside component initialization");return nQ}function RQ(Q){XC().$$.on_mount.push(Q)}function AI(Q){XC().$$.on_destroy.push(Q)}function xB(){const Q=XC();return(A,I,{cancelable:g=!1}={})=>{const C=Q.$$.callbacks[A];if(C){const B=qD(A,I,{cancelable:g});return C.slice().forEach(E=>{E.call(Q,B)}),!B.defaultPrevented}return!0}}function ag(Q,A){return XC().$$.context.set(Q,A),A}function rg(Q){return XC().$$.context.get(Q)}const wB=[],hQ=[],eE=[],Oi=[],ba=Promise.resolve();let Zi=!1;function Ta(){Zi||(Zi=!0,ba.then(xa))}function OB(){return Ta(),ba}function Wi(Q){eE.push(Q)}function De(Q){Oi.push(Q)}const Ai=new Set;let IB=0;function xa(){if(IB!==0)return;const Q=nQ;do{try{for(;IB<wB.length;){const A=wB[IB];IB++,tQ(A),dD(A.$$)}}catch(A){throw wB.length=0,IB=0,A}for(tQ(null),wB.length=0,IB=0;hQ.length;)hQ.pop()();for(let A=0;A<eE.length;A+=1){const I=eE[A];Ai.has(I)||(Ai.add(I),I())}eE.length=0}while(wB.length);for(;Oi.length;)Oi.pop()();Zi=!1,Ai.clear(),tQ(Q)}function dD(Q){if(Q.fragment!==null){Q.update(),_C(Q.before_update);const A=Q.dirty;Q.dirty=[-1],Q.fragment&&Q.fragment.p(Q.ctx,A),Q.after_update.forEach(Wi)}}const tE=new Set;let mC;function WC(){mC={r:0,c:[],p:mC}}function PC(){mC.r||_C(mC.c),mC=mC.p}function hA(Q,A){Q&&Q.i&&(tE.delete(Q),Q.i(A))}function kA(Q,A,I,g){if(Q&&Q.o){if(tE.has(Q))return;tE.add(Q),mC.c.push(()=>{tE.delete(Q),g&&(I&&Q.d(1),g())}),Q.o(A)}else g&&g()}function ne(Q,A,I){const g=Q.$$.props[A];g!==void 0&&(Q.$$.bound[g]=I,I(Q.$$.ctx[g]))}function gI(Q){Q&&Q.c()}function zA(Q,A,I,g){const{fragment:C,after_update:B}=Q.$$;C&&C.m(A,I),g||Wi(()=>{const E=Q.$$.on_mount.map(Ya).filter(qE);Q.$$.on_destroy?Q.$$.on_destroy.push(...E):_C(E),Q.$$.on_mount=[]}),B.forEach(Wi)}function $A(Q,A){const I=Q.$$;I.fragment!==null&&(_C(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function pD(Q,A){Q.$$.dirty[0]===-1&&(wB.push(Q),Ta(),Q.$$.dirty.fill(0)),Q.$$.dirty[A/31|0]|=1<<A%31}function HI(Q,A,I,g,C,B,E,i=[-1]){const o=nQ;tQ(Q);const e=Q.$$={fragment:null,ctx:[],props:B,update:Dg,not_equal:C,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(o?o.$$.context:[])),callbacks:ae(),dirty:i,skip_bound:!1,root:A.target||o.$$.root};E&&E(e.root);let t=!1;if(e.ctx=I?I(Q,A.props||{},(a,s,...D)=>{const G=D.length?D[0]:s;return e.ctx&&C(e.ctx[a],e.ctx[a]=G)&&(!e.skip_bound&&e.bound[a]&&e.bound[a](G),t&&pD(Q,a)),s}):[],e.update(),t=!0,_C(e.before_update),e.fragment=g?g(e.ctx):!1,A.target){if(A.hydrate){const a=FD(A.target);e.fragment&&e.fragment.l(a),a.forEach(GI)}else e.fragment&&e.fragment.c();A.intro&&hA(Q.$$.fragment),zA(Q,A.target,A.anchor,A.customElement),xa()}tQ(o)}class mI{$destroy(){$A(this,1),this.$destroy=Dg}$on(A,I){if(!qE(I))return Dg;const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}$set(A){this.$$set&&!ND(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const co="150",gB={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},CB={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fD=0,he=1,YD=2,Oa=1,Za=2,oQ=3,QC=0,hg=1,bg=2,SC=0,yB=1,re=2,ce=3,Ge=4,uD=5,SB=100,LD=101,HD=102,we=103,Se=104,mD=200,bD=201,TD=202,xD=203,Wa=204,Pa=205,OD=206,ZD=207,WD=208,PD=209,vD=210,jD=0,VD=1,_D=2,Pi=3,XD=4,zD=5,$D=6,An=7,va=0,In=1,gn=2,xg=0,Cn=1,Bn=2,Qn=3,ja=4,En=5,Va=300,vC=301,JB=302,GE=303,vi=304,dE=306,RB=1e3,Cg=1001,wE=1002,uI=1003,ji=1004,aE=1005,nI=1006,_a=1007,kC=1008,jC=1009,on=1010,en=1011,Xa=1012,tn=1013,bC=1014,sg=1015,dg=1016,an=1017,sn=1018,MB=1020,Dn=1021,kg=1023,nn=1024,hn=1025,ZC=1026,FB=1027,rn=1028,cn=1029,Gn=1030,wn=1031,Sn=1033,Ii=33776,gi=33777,Ci=33778,Bi=33779,le=35840,ke=35841,ye=35842,Me=35843,ln=36196,Ke=37492,Ue=37496,Ne=37808,Je=37809,Re=37810,Fe=37811,qe=37812,de=37813,pe=37814,fe=37815,Ye=37816,ue=37817,Le=37818,He=37819,me=37820,be=37821,Qi=36492,kn=36283,Te=36284,xe=36285,Oe=36286,rQ=2300,qB=2301,Ei=2302,Ze=2400,We=2401,Pe=2402,yn=2500,Mn=0,za=1,Vi=2,Mg=3e3,VA=3001,Kn=3200,Un=3201,$a=0,Nn=1,lg="srgb",dB="srgb-linear",As="display-p3",ii=7680,Jn=519,_i=35044,ve="300 es",Xi=1035;class zC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,E=C.length;B<E;B++)C[B].call(this,A);A.target=null}}}const ZI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let je=1234567;const aQ=Math.PI/180,cQ=180/Math.PI;function pg(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ZI[Q&255]+ZI[Q>>8&255]+ZI[Q>>16&255]+ZI[Q>>24&255]+"-"+ZI[A&255]+ZI[A>>8&255]+"-"+ZI[A>>16&15|64]+ZI[A>>24&255]+"-"+ZI[I&63|128]+ZI[I>>8&255]+"-"+ZI[I>>16&255]+ZI[I>>24&255]+ZI[g&255]+ZI[g>>8&255]+ZI[g>>16&255]+ZI[g>>24&255]).toLowerCase()}function bI(Q,A,I){return Math.max(A,Math.min(I,Q))}function Go(Q,A){return(Q%A+A)%A}function Rn(Q,A,I,g,C){return g+(Q-A)*(C-g)/(I-A)}function Fn(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function sQ(Q,A,I){return(1-I)*Q+I*A}function qn(Q,A,I,g){return sQ(Q,A,1-Math.exp(-I*g))}function dn(Q,A=1){return A-Math.abs(Go(Q,A*2)-A)}function pn(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function fn(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function Yn(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function un(Q,A){return Q+Math.random()*(A-Q)}function Ln(Q){return Q*(.5-Math.random())}function Hn(Q){Q!==void 0&&(je=Q);let A=je+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function mn(Q){return Q*aQ}function bn(Q){return Q*cQ}function zi(Q){return(Q&Q-1)===0&&Q!==0}function Is(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function gs(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function Tn(Q,A,I,g,C){const B=Math.cos,E=Math.sin,i=B(I/2),o=E(I/2),e=B((A+g)/2),t=E((A+g)/2),a=B((A-g)/2),s=E((A-g)/2),D=B((g-A)/2),G=E((g-A)/2);switch(C){case"XYX":Q.set(i*t,o*a,o*s,i*e);break;case"YZY":Q.set(o*s,i*t,o*a,i*e);break;case"ZXZ":Q.set(o*a,o*s,i*t,i*e);break;case"XZX":Q.set(i*t,o*G,o*D,i*e);break;case"YXY":Q.set(o*D,i*t,o*G,i*e);break;case"ZYZ":Q.set(o*G,o*D,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function BC(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function QI(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const xn={DEG2RAD:aQ,RAD2DEG:cQ,generateUUID:pg,clamp:bI,euclideanModulo:Go,mapLinear:Rn,inverseLerp:Fn,lerp:sQ,damp:qn,pingpong:dn,smoothstep:pn,smootherstep:fn,randInt:Yn,randFloat:un,randFloatSpread:Ln,seededRandom:Hn,degToRad:mn,radToDeg:bn,isPowerOfTwo:zi,ceilPowerOfTwo:Is,floorPowerOfTwo:gs,setQuaternionFromProperEuler:Tn,normalize:QI,denormalize:BC};class JA{constructor(A=0,I=0){JA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,E=this.y-A.y;return this.x=B*g-E*C+A.x,this.y=B*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ig{constructor(){Ig.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=B,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],D=g[5],G=g[8],n=C[0],h=C[3],r=C[6],l=C[1],c=C[4],S=C[7],y=C[2],K=C[5],F=C[8];return B[0]=E*n+i*l+o*y,B[3]=E*h+i*c+o*K,B[6]=E*r+i*S+o*F,B[1]=e*n+t*l+a*y,B[4]=e*h+t*c+a*K,B[7]=e*r+t*S+a*F,B[2]=s*n+D*l+G*y,B[5]=s*h+D*c+G*K,B[8]=s*r+D*S+G*F,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*B*t+g*i*o+C*B*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*B,D=e*B-E*o,G=I*a+g*s+C*D;if(G===0)return this.set(0,0,0,0,0,0,0,0,0);const n=1/G;return A[0]=a*n,A[1]=(C*e-t*g)*n,A[2]=(i*g-C*E)*n,A[3]=s*n,A[4]=(t*I-C*o)*n,A[5]=(C*B-i*I)*n,A[6]=D*n,A[7]=(g*o-e*I)*n,A[8]=(E*I-g*B)*n,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,E,i){const o=Math.cos(B),e=Math.sin(B);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(oi.makeScale(A,I)),this}rotate(A){return this.premultiply(oi.makeRotation(-A)),this}translate(A,I){return this.premultiply(oi.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const oi=new Ig;function Cs(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}function GQ(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}class KI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=B[E+0],D=B[E+1],G=B[E+2],n=B[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=D,A[I+2]=G,A[I+3]=n;return}if(a!==n||o!==s||e!==D||t!==G){let h=1-i;const r=o*s+e*D+t*G+a*n,l=r>=0?1:-1,c=1-r*r;if(c>Number.EPSILON){const y=Math.sqrt(c),K=Math.atan2(y,r*l);h=Math.sin(h*K)/y,i=Math.sin(i*K)/y}const S=i*l;if(o=o*h+s*S,e=e*h+D*S,t=t*h+G*S,a=a*h+n*S,h===1-i){const y=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=y,e*=y,t*=y,a*=y}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=B[E],s=B[E+1],D=B[E+2],G=B[E+3];return A[I]=i*G+t*a+o*D-e*s,A[I+1]=o*G+t*s+e*a-i*D,A[I+2]=e*G+t*D+i*s-o*a,A[I+3]=t*G-i*a-o*s-e*D,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,B=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(B/2),s=o(g/2),D=o(C/2),G=o(B/2);switch(E){case"XYZ":this._x=s*t*a+e*D*G,this._y=e*D*a-s*t*G,this._z=e*t*G+s*D*a,this._w=e*t*a-s*D*G;break;case"YXZ":this._x=s*t*a+e*D*G,this._y=e*D*a-s*t*G,this._z=e*t*G-s*D*a,this._w=e*t*a+s*D*G;break;case"ZXY":this._x=s*t*a-e*D*G,this._y=e*D*a+s*t*G,this._z=e*t*G+s*D*a,this._w=e*t*a-s*D*G;break;case"ZYX":this._x=s*t*a-e*D*G,this._y=e*D*a+s*t*G,this._z=e*t*G-s*D*a,this._w=e*t*a+s*D*G;break;case"YZX":this._x=s*t*a+e*D*G,this._y=e*D*a+s*t*G,this._z=e*t*G-s*D*a,this._w=e*t*a-s*D*G;break;case"XZY":this._x=s*t*a-e*D*G,this._y=e*D*a-s*t*G,this._z=e*t*G+s*D*a,this._w=e*t*a+s*D*G;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const D=.5/Math.sqrt(s+1);this._w=.25/D,this._x=(t-o)*D,this._y=(B-e)*D,this._z=(E-C)*D}else if(g>i&&g>a){const D=2*Math.sqrt(1+g-i-a);this._w=(t-o)/D,this._x=.25*D,this._y=(C+E)/D,this._z=(B+e)/D}else if(i>a){const D=2*Math.sqrt(1+i-g-a);this._w=(B-e)/D,this._x=(C+E)/D,this._y=.25*D,this._z=(o+t)/D}else{const D=2*Math.sqrt(1+a-g-i);this._w=(E-C)/D,this._x=(B+e)/D,this._y=(o+t)/D,this._z=.25*D}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(bI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-B*o,this._y=C*t+E*o+B*i-g*e,this._z=B*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-B*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+B*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=B,this;const o=1-i*i;if(o<=Number.EPSILON){const D=1-I;return this._w=D*E+I*this._w,this._x=D*g+I*this._x,this._y=D*C+I*this._y,this._z=D*B+I*this._z,this.normalize(),this._onChangeCallback(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=B*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class d{constructor(A=0,I=0,g=0){d.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Ve.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Ve.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,E=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*E,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*E,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,E=A.y,i=A.z,o=A.w,e=o*I+E*C-i*g,t=o*g+i*I-B*C,a=o*C+B*g-E*I,s=-B*I-E*g-i*C;return this.x=e*o+s*-B+t*-i-a*-E,this.y=t*o+s*-E+a*-B-e*-i,this.z=a*o+s*-i+e*-E-t*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-B*i,this.y=B*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return ei.copy(this).projectOnVector(A),this.sub(ei)}reflect(A){return this.sub(ei.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(bI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ei=new d,Ve=new KI;function KB(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function ti(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const On=new Ig().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Zn=new Ig().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),wC=new d;function Wn(Q){return Q.convertSRGBToLinear(),wC.set(Q.r,Q.g,Q.b).applyMatrix3(Zn),Q.setRGB(wC.x,wC.y,wC.z)}function Pn(Q){return wC.set(Q.r,Q.g,Q.b).applyMatrix3(On),Q.setRGB(wC.x,wC.y,wC.z).convertLinearToSRGB()}const vn={[dB]:Q=>Q,[lg]:Q=>Q.convertSRGBToLinear(),[As]:Wn},jn={[dB]:Q=>Q,[lg]:Q=>Q.convertLinearToSRGB(),[As]:Pn},XI={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return dB},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=vn[A],C=jn[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}};let BB;class Bs{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{BB===void 0&&(BB=GQ("canvas")),BB.width=A.width,BB.height=A.height;const g=BB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=BB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=GQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let E=0;E<B.length;E++)B[E]=KB(B[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(KB(I[g]/255)*255):I[g]=KB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class Qs{constructor(A=null){this.isSource=!0,this.uuid=pg(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?B.push(ai(C[E].image)):B.push(ai(C[E]))}else B=ai(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function ai(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?Bs.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vn=0;class TI extends zC{constructor(A=TI.DEFAULT_IMAGE,I=TI.DEFAULT_MAPPING,g=Cg,C=Cg,B=nI,E=kC,i=kg,o=jC,e=TI.DEFAULT_ANISOTROPY,t=Mg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vn++}),this.uuid=pg(),this.name="",this.source=new Qs(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new JA(0,0),this.repeat=new JA(1,1),this.center=new JA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ig,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Va)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case RB:A.x=A.x-Math.floor(A.x);break;case Cg:A.x=A.x<0?0:1;break;case wE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case RB:A.y=A.y-Math.floor(A.y);break;case Cg:A.y=A.y<0?0:1;break;case wE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}TI.DEFAULT_IMAGE=null;TI.DEFAULT_MAPPING=Va;TI.DEFAULT_ANISOTROPY=1;class EI{constructor(A=0,I=0,g=0,C=1){EI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*B,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*B,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*B,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,e=o[0],t=o[4],a=o[8],s=o[1],D=o[5],G=o[9],n=o[2],h=o[6],r=o[10];if(Math.abs(t-s)<.01&&Math.abs(a-n)<.01&&Math.abs(G-h)<.01){if(Math.abs(t+s)<.1&&Math.abs(a+n)<.1&&Math.abs(G+h)<.1&&Math.abs(e+D+r-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const c=(e+1)/2,S=(D+1)/2,y=(r+1)/2,K=(t+s)/4,F=(a+n)/4,k=(G+h)/4;return c>S&&c>y?c<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(c),C=K/g,B=F/g):S>y?S<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(S),g=K/C,B=k/C):y<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(y),g=F/B,C=k/B),this.set(g,C,B,I),this}let l=Math.sqrt((h-G)*(h-G)+(a-n)*(a-n)+(s-t)*(s-t));return Math.abs(l)<.001&&(l=1),this.x=(h-G)/l,this.y=(a-n)/l,this.z=(s-t)/l,this.w=Math.acos((e+D+r-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yC extends zC{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new EI(0,0,A,I),this.scissorTest=!1,this.viewport=new EI(0,0,A,I);const C={width:A,height:I,depth:1};this.texture=new TI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:nI,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Qs(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends TI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=uI,this.minFilter=uI,this.wrapR=Cg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n extends TI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=uI,this.minFilter=uI,this.wrapR=Cg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZB{constructor(A=new d(1/0,1/0,1/0),I=new d(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,C=1/0,B=-1/0,E=-1/0,i=-1/0;for(let o=0,e=A.length;o<e;o+=3){const t=A[o],a=A[o+1],s=A[o+2];t<I&&(I=t),a<g&&(g=a),s<C&&(C=s),t>B&&(B=t),a>E&&(E=a),s>i&&(i=s)}return this.min.set(I,g,C),this.max.set(B,E,i),this}setFromBufferAttribute(A){let I=1/0,g=1/0,C=1/0,B=-1/0,E=-1/0,i=-1/0;for(let o=0,e=A.count;o<e;o++){const t=A.getX(o),a=A.getY(o),s=A.getZ(o);t<I&&(I=t),a<g&&(g=a),s<C&&(C=s),t>B&&(B=t),a>E&&(E=a),s>i&&(i=s)}return this.min.set(I,g,C),this.max.set(B,E,i),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=dC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const B=g.attributes.position;for(let E=0,i=B.count;E<i;E++)dC.fromBufferAttribute(B,E).applyMatrix4(A.matrixWorld),this.expandByPoint(dC)}else g.boundingBox===null&&g.computeBoundingBox(),si.copy(g.boundingBox),si.applyMatrix4(A.matrixWorld),this.union(si);const C=A.children;for(let B=0,E=C.length;B<E;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,dC),dC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(XB),LQ.subVectors(this.max,XB),QB.subVectors(A.a,XB),EB.subVectors(A.b,XB),iB.subVectors(A.c,XB),aC.subVectors(EB,QB),sC.subVectors(iB,EB),pC.subVectors(QB,iB);let I=[0,-aC.z,aC.y,0,-sC.z,sC.y,0,-pC.z,pC.y,aC.z,0,-aC.x,sC.z,0,-sC.x,pC.z,0,-pC.x,-aC.y,aC.x,0,-sC.y,sC.x,0,-pC.y,pC.x,0];return!Di(I,QB,EB,iB,LQ)||(I=[1,0,0,0,1,0,0,0,1],!Di(I,QB,EB,iB,LQ))?!1:(HQ.crossVectors(aC,sC),I=[HQ.x,HQ.y,HQ.z],Di(I,QB,EB,iB,LQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,dC).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(dC).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(_g[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),_g[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),_g[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),_g[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),_g[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),_g[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),_g[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),_g[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(_g),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const _g=[new d,new d,new d,new d,new d,new d,new d,new d],dC=new d,si=new ZB,QB=new d,EB=new d,iB=new d,aC=new d,sC=new d,pC=new d,XB=new d,LQ=new d,HQ=new d,fC=new d;function Di(Q,A,I,g,C){for(let B=0,E=Q.length-3;B<=E;B+=3){fC.fromArray(Q,B);const i=C.x*Math.abs(fC.x)+C.y*Math.abs(fC.y)+C.z*Math.abs(fC.z),o=A.dot(fC),e=I.dot(fC),t=g.dot(fC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const Xn=new ZB,zB=new d,ni=new d;class WB{constructor(A=new d,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Xn.setFromPoints(A).getCenter(g);let C=0;for(let B=0,E=A.length;B<E;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;zB.subVectors(A,this.center);const I=zB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(zB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(ni.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(zB.copy(A.center).add(ni)),this.expandByPoint(zB.copy(A.center).sub(ni))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xg=new d,hi=new d,mQ=new d,DC=new d,ri=new d,bQ=new d,ci=new d;class pE{constructor(A=new d,I=new d(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Xg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Xg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Xg.copy(this.origin).addScaledVector(this.direction,I),Xg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){hi.copy(A).add(I).multiplyScalar(.5),mQ.copy(I).sub(A).normalize(),DC.copy(this.origin).sub(hi);const B=A.distanceTo(I)*.5,E=-this.direction.dot(mQ),i=DC.dot(this.direction),o=-DC.dot(mQ),e=DC.lengthSq(),t=Math.abs(1-E*E);let a,s,D,G;if(t>0)if(a=E*o-i,s=E*i-o,G=B*t,a>=0)if(s>=-G)if(s<=G){const n=1/t;a*=n,s*=n,D=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s=-B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;else s<=-G?(a=Math.max(0,-(-E*B+i)),s=a>0?-B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e):s<=G?(a=0,s=Math.min(Math.max(-B,-o),B),D=s*(s+2*o)+e):(a=Math.max(0,-(E*B+i)),s=a>0?B:Math.min(Math.max(-B,-o),B),D=-a*a+s*(s+2*o)+e);else s=E>0?-B:B,a=Math.max(0,-(E*s+i)),D=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(hi).addScaledVector(mQ,s),D}intersectSphere(A,I){Xg.subVectors(A.center,this.origin);const g=Xg.dot(this.direction),C=Xg.dot(Xg)-g*g,B=A.radius*A.radius;if(C>B)return null;const E=Math.sqrt(B-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(B=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(B=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||B>C||((B>g||isNaN(g))&&(g=B),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Xg)!==null}intersectTriangle(A,I,g,C,B){ri.subVectors(I,A),bQ.subVectors(g,A),ci.crossVectors(ri,bQ);let E=this.direction.dot(ci),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;DC.subVectors(this.origin,A);const o=i*this.direction.dot(bQ.crossVectors(DC,bQ));if(o<0)return null;const e=i*this.direction.dot(ri.cross(DC));if(e<0||o+e>E)return null;const t=-i*DC.dot(ci);return t<0?null:this.at(t/E,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uA{constructor(){uA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,B,E,i,o,e,t,a,s,D,G,n,h){const r=this.elements;return r[0]=A,r[4]=I,r[8]=g,r[12]=C,r[1]=B,r[5]=E,r[9]=i,r[13]=o,r[2]=e,r[6]=t,r[10]=a,r[14]=s,r[3]=D,r[7]=G,r[11]=n,r[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/oB.setFromMatrixColumn(A,0).length(),B=1/oB.setFromMatrixColumn(A,1).length(),E=1/oB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const s=E*t,D=E*a,G=i*t,n=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=D+G*e,I[5]=s-n*e,I[9]=-i*o,I[2]=n-s*e,I[6]=G+D*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,D=o*a,G=e*t,n=e*a;I[0]=s+n*i,I[4]=G*i-D,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=D*i-G,I[6]=n+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,D=o*a,G=e*t,n=e*a;I[0]=s-n*i,I[4]=-E*a,I[8]=G+D*i,I[1]=D+G*i,I[5]=E*t,I[9]=n-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,D=E*a,G=i*t,n=i*a;I[0]=o*t,I[4]=G*e-D,I[8]=s*e+n,I[1]=o*a,I[5]=n*e+s,I[9]=D*e-G,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,D=E*e,G=i*o,n=i*e;I[0]=o*t,I[4]=n-s*a,I[8]=G*a+D,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=D*a+G,I[10]=s-n*a}else if(A.order==="XZY"){const s=E*o,D=E*e,G=i*o,n=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+n,I[5]=E*t,I[9]=D*a-G,I[2]=G*a-D,I[6]=i*t,I[10]=n*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(zn,A,$n)}lookAt(A,I,g){const C=this.elements;return og.subVectors(A,I),og.lengthSq()===0&&(og.z=1),og.normalize(),nC.crossVectors(g,og),nC.lengthSq()===0&&(Math.abs(g.z)===1?og.x+=1e-4:og.z+=1e-4,og.normalize(),nC.crossVectors(g,og)),nC.normalize(),TQ.crossVectors(og,nC),C[0]=nC.x,C[4]=TQ.x,C[8]=og.x,C[1]=nC.y,C[5]=TQ.y,C[9]=og.y,C[2]=nC.z,C[6]=TQ.z,C[10]=og.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],D=g[13],G=g[2],n=g[6],h=g[10],r=g[14],l=g[3],c=g[7],S=g[11],y=g[15],K=C[0],F=C[4],k=C[8],M=C[12],J=C[1],u=C[5],Y=C[9],p=C[13],m=C[2],T=C[6],IA=C[10],AA=C[14],H=C[3],CA=C[7],gA=C[11],z=C[15];return B[0]=E*K+i*J+o*m+e*H,B[4]=E*F+i*u+o*T+e*CA,B[8]=E*k+i*Y+o*IA+e*gA,B[12]=E*M+i*p+o*AA+e*z,B[1]=t*K+a*J+s*m+D*H,B[5]=t*F+a*u+s*T+D*CA,B[9]=t*k+a*Y+s*IA+D*gA,B[13]=t*M+a*p+s*AA+D*z,B[2]=G*K+n*J+h*m+r*H,B[6]=G*F+n*u+h*T+r*CA,B[10]=G*k+n*Y+h*IA+r*gA,B[14]=G*M+n*p+h*AA+r*z,B[3]=l*K+c*J+S*m+y*H,B[7]=l*F+c*u+S*T+y*CA,B[11]=l*k+c*Y+S*IA+y*gA,B[15]=l*M+c*p+S*AA+y*z,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],D=A[14],G=A[3],n=A[7],h=A[11],r=A[15];return G*(+B*o*a-C*e*a-B*i*s+g*e*s+C*i*D-g*o*D)+n*(+I*o*D-I*e*s+B*E*s-C*E*D+C*e*t-B*o*t)+h*(+I*e*a-I*i*D-B*E*a+g*E*D+B*i*t-g*e*t)+r*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],D=A[11],G=A[12],n=A[13],h=A[14],r=A[15],l=a*h*e-n*s*e+n*o*D-i*h*D-a*o*r+i*s*r,c=G*s*e-t*h*e-G*o*D+E*h*D+t*o*r-E*s*r,S=t*n*e-G*a*e+G*i*D-E*n*D-t*i*r+E*a*r,y=G*a*o-t*n*o-G*i*s+E*n*s+t*i*h-E*a*h,K=I*l+g*c+C*S+B*y;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/K;return A[0]=l*F,A[1]=(n*s*B-a*h*B-n*C*D+g*h*D+a*C*r-g*s*r)*F,A[2]=(i*h*B-n*o*B+n*C*e-g*h*e-i*C*r+g*o*r)*F,A[3]=(a*o*B-i*s*B-a*C*e+g*s*e+i*C*D-g*o*D)*F,A[4]=c*F,A[5]=(t*h*B-G*s*B+G*C*D-I*h*D-t*C*r+I*s*r)*F,A[6]=(G*o*B-E*h*B-G*C*e+I*h*e+E*C*r-I*o*r)*F,A[7]=(E*s*B-t*o*B+t*C*e-I*s*e-E*C*D+I*o*D)*F,A[8]=S*F,A[9]=(G*a*B-t*n*B-G*g*D+I*n*D+t*g*r-I*a*r)*F,A[10]=(E*n*B-G*i*B+G*g*e-I*n*e-E*g*r+I*i*r)*F,A[11]=(t*i*B-E*a*B-t*g*e+I*a*e+E*g*D-I*i*D)*F,A[12]=y*F,A[13]=(t*n*C-G*a*C+G*g*s-I*n*s-t*g*h+I*a*h)*F,A[14]=(G*i*C-E*n*C-G*g*o+I*n*o+E*g*h-I*i*h)*F,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*F,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,E=A.x,i=A.y,o=A.z,e=B*E,t=B*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,E){return this.set(1,g,B,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,E=I._y,i=I._z,o=I._w,e=B+B,t=E+E,a=i+i,s=B*e,D=B*t,G=B*a,n=E*t,h=E*a,r=i*a,l=o*e,c=o*t,S=o*a,y=g.x,K=g.y,F=g.z;return C[0]=(1-(n+r))*y,C[1]=(D+S)*y,C[2]=(G-c)*y,C[3]=0,C[4]=(D-S)*K,C[5]=(1-(s+r))*K,C[6]=(h+l)*K,C[7]=0,C[8]=(G+c)*F,C[9]=(h-l)*F,C[10]=(1-(s+n))*F,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=oB.set(C[0],C[1],C[2]).length();const E=oB.set(C[4],C[5],C[6]).length(),i=oB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],Rg.copy(this);const e=1/B,t=1/E,a=1/i;return Rg.elements[0]*=e,Rg.elements[1]*=e,Rg.elements[2]*=e,Rg.elements[4]*=t,Rg.elements[5]*=t,Rg.elements[6]*=t,Rg.elements[8]*=a,Rg.elements[9]*=a,Rg.elements[10]*=a,I.setFromRotationMatrix(Rg),g.x=B,g.y=E,g.z=i,this}makePerspective(A,I,g,C,B,E){const i=this.elements,o=2*B/(I-A),e=2*B/(g-C),t=(I+A)/(I-A),a=(g+C)/(g-C),s=-(E+B)/(E-B),D=-2*E*B/(E-B);return i[0]=o,i[4]=0,i[8]=t,i[12]=0,i[1]=0,i[5]=e,i[9]=a,i[13]=0,i[2]=0,i[6]=0,i[10]=s,i[14]=D,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(A,I,g,C,B,E){const i=this.elements,o=1/(I-A),e=1/(g-C),t=1/(E-B),a=(I+A)*o,s=(g+C)*e,D=(E+B)*t;return i[0]=2*o,i[4]=0,i[8]=0,i[12]=-a,i[1]=0,i[5]=2*e,i[9]=0,i[13]=-s,i[2]=0,i[6]=0,i[10]=-2*t,i[14]=-D,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const oB=new d,Rg=new uA,zn=new d(0,0,0),$n=new d(1,1,1),nC=new d,TQ=new d,og=new d,_e=new uA,Xe=new KI;class $C{constructor(A=0,I=0,g=0,C=$C.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],D=C[10];switch(I){case"XYZ":this._y=Math.asin(bI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,D),this._z=Math.atan2(-E,B)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-bI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,D),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(bI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,D),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-bI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,D),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(bI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(i,D));break;case"XZY":this._z=Math.asin(-bI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,B)):(this._x=Math.atan2(-t,D),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return _e.makeRotationFromQuaternion(A),this.setFromRotationMatrix(_e,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Xe.setFromEuler(this),this.setFromQuaternion(Xe,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$C.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Ah=0;const ze=new d,eB=new KI,zg=new uA,xQ=new d,$B=new d,Ih=new d,gh=new KI,$e=new d(1,0,0),At=new d(0,1,0),It=new d(0,0,1),Ch={type:"added"},gt={type:"removed"};class _A extends zC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=pg(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_A.DEFAULT_UP.clone();const A=new d,I=new $C,g=new KI,C=new d(1,1,1);function B(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new uA},normalMatrix:{value:new Ig}}),this.matrix=new uA,this.matrixWorld=new uA,this.matrixAutoUpdate=_A.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_A.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return eB.setFromAxisAngle(A,I),this.quaternion.multiply(eB),this}rotateOnWorldAxis(A,I){return eB.setFromAxisAngle(A,I),this.quaternion.premultiply(eB),this}rotateX(A){return this.rotateOnAxis($e,A)}rotateY(A){return this.rotateOnAxis(At,A)}rotateZ(A){return this.rotateOnAxis(It,A)}translateOnAxis(A,I){return ze.copy(A).applyQuaternion(this.quaternion),this.position.add(ze.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis($e,A)}translateY(A){return this.translateOnAxis(At,A)}translateZ(A){return this.translateOnAxis(It,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(zg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?xQ.copy(A):xQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),$B.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zg.lookAt($B,xQ,this.up):zg.lookAt(xQ,$B,this.up),this.quaternion.setFromRotationMatrix(zg),C&&(zg.extractRotation(C.matrixWorld),eB.setFromRotationMatrix(zg),this.quaternion.premultiply(eB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Ch)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(gt)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(gt)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),zg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),zg.multiply(A.parent.matrixWorld)),A.applyMatrix4(zg),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,B=this.children.length;C<B;C++){const E=this.children[C].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($B,A,Ih),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($B,gh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,E=C.length;B<E;B++){const i=C[B];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function B(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(B(A.materials,this.material[o]));C.material=i}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(B(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),D=E(A.animations),G=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),D.length>0&&(g.animations=D),G.length>0&&(g.nodes=G)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}_A.DEFAULT_UP=new d(0,1,0);_A.DEFAULT_MATRIX_AUTO_UPDATE=!0;_A.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fg=new d,$g=new d,Gi=new d,AC=new d,tB=new d,aB=new d,Ct=new d,wi=new d,Si=new d,li=new d;class gC{constructor(A=new d,I=new d,g=new d){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Fg.subVectors(A,I),C.cross(Fg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){Fg.subVectors(C,I),$g.subVectors(g,I),Gi.subVectors(A,I);const E=Fg.dot(Fg),i=Fg.dot($g),o=Fg.dot(Gi),e=$g.dot($g),t=$g.dot(Gi),a=E*e-i*i;if(a===0)return B.set(-2,-1,-1);const s=1/a,D=(e*o-i*t)*s,G=(E*t-i*o)*s;return B.set(1-D-G,G,D)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,AC),AC.x>=0&&AC.y>=0&&AC.x+AC.y<=1}static getUV(A,I,g,C,B,E,i,o){return this.getBarycoord(A,I,g,C,AC),o.set(0,0),o.addScaledVector(B,AC.x),o.addScaledVector(E,AC.y),o.addScaledVector(i,AC.z),o}static isFrontFacing(A,I,g,C){return Fg.subVectors(g,I),$g.subVectors(A,I),Fg.cross($g).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Fg.subVectors(this.c,this.b),$g.subVectors(this.a,this.b),Fg.cross($g).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return gC.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return gC.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,B){return gC.getUV(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return gC.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return gC.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let E,i;tB.subVectors(C,g),aB.subVectors(B,g),wi.subVectors(A,g);const o=tB.dot(wi),e=aB.dot(wi);if(o<=0&&e<=0)return I.copy(g);Si.subVectors(A,C);const t=tB.dot(Si),a=aB.dot(Si);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(tB,E);li.subVectors(A,B);const D=tB.dot(li),G=aB.dot(li);if(G>=0&&D<=G)return I.copy(B);const n=D*e-o*G;if(n<=0&&e>=0&&G<=0)return i=e/(e-G),I.copy(g).addScaledVector(aB,i);const h=t*G-D*a;if(h<=0&&a-t>=0&&D-G>=0)return Ct.subVectors(B,C),i=(a-t)/(a-t+(D-G)),I.copy(C).addScaledVector(Ct,i);const r=1/(h+n+s);return E=n*r,i=s*r,I.copy(g).addScaledVector(tB,E).addScaledVector(aB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Bh=0;class Og extends zC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=pg(),this.name="",this.type="Material",this.blending=yB,this.side=QC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wa,this.blendDst=Pa,this.blendEquation=SB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jn,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const C=this[I];if(C===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==yB&&(g.blending=this.blending),this.side!==QC&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const E=[];for(const i in B){const o=B[i];delete o.metadata,E.push(o)}return E}if(I){const B=C(A.textures),E=C(A.images);B.length>0&&(g.textures=B),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const is={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qg={h:0,s:0,l:0},OQ={h:0,s:0,l:0};function ki(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class FA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=lg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,XI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=XI.workingColorSpace){return this.r=A,this.g=I,this.b=g,XI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=XI.workingColorSpace){if(A=Go(A,1),I=bI(I,0,1),g=bI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,E=2*g-B;this.r=ki(E,B,A+1/3),this.g=ki(E,B,A),this.b=ki(E,B,A-1/3)}return XI.toWorkingColorSpace(this,C),this}setStyle(A,I=lg){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(B[1],10))/255,this.g=Math.min(255,parseInt(B[2],10))/255,this.b=Math.min(255,parseInt(B[3],10))/255,XI.toWorkingColorSpace(this,I),g(B[4]),this;if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(B[1],10))/100,this.g=Math.min(100,parseInt(B[2],10))/100,this.b=Math.min(100,parseInt(B[3],10))/100,XI.toWorkingColorSpace(this,I),g(B[4]),this;break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const o=parseFloat(B[1])/360,e=parseFloat(B[2])/100,t=parseFloat(B[3])/100;return g(B[4]),this.setHSL(o,e,t,I)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],E=B.length;if(E===3)return this.r=parseInt(B.charAt(0)+B.charAt(0),16)/255,this.g=parseInt(B.charAt(1)+B.charAt(1),16)/255,this.b=parseInt(B.charAt(2)+B.charAt(2),16)/255,XI.toWorkingColorSpace(this,I),this;if(E===6)return this.r=parseInt(B.charAt(0)+B.charAt(1),16)/255,this.g=parseInt(B.charAt(2)+B.charAt(3),16)/255,this.b=parseInt(B.charAt(4)+B.charAt(5),16)/255,XI.toWorkingColorSpace(this,I),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=lg){const g=is[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=KB(A.r),this.g=KB(A.g),this.b=KB(A.b),this}copyLinearToSRGB(A){return this.r=ti(A.r),this.g=ti(A.g),this.b=ti(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=lg){return XI.fromWorkingColorSpace(WI.copy(this),A),bI(WI.r*255,0,255)<<16^bI(WI.g*255,0,255)<<8^bI(WI.b*255,0,255)<<0}getHexString(A=lg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=XI.workingColorSpace){XI.fromWorkingColorSpace(WI.copy(this),I);const g=WI.r,C=WI.g,B=WI.b,E=Math.max(g,C,B),i=Math.min(g,C,B);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=XI.workingColorSpace){return XI.fromWorkingColorSpace(WI.copy(this),I),A.r=WI.r,A.g=WI.g,A.b=WI.b,A}getStyle(A=lg){XI.fromWorkingColorSpace(WI.copy(this),A);const I=WI.r,g=WI.g,C=WI.b;return A!==lg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${I*255|0},${g*255|0},${C*255|0})`}offsetHSL(A,I,g){return this.getHSL(qg),qg.h+=A,qg.s+=I,qg.l+=g,this.setHSL(qg.h,qg.s,qg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(qg),A.getHSL(OQ);const g=sQ(qg.h,OQ.h,I),C=sQ(qg.s,OQ.s,I),B=sQ(qg.l,OQ.l,I);return this.setHSL(g,C,B),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const WI=new FA;FA.NAMES=is;class TC extends Og{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new FA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const lI=new d,ZQ=new JA;class xI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=_i,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ZQ.fromBufferAttribute(this,I),ZQ.applyMatrix3(A),this.setXY(I,ZQ.x,ZQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyMatrix3(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyMatrix4(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyNormalMatrix(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.transformDirection(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=BC(I,this.array)),I}setX(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=BC(I,this.array)),I}setY(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=BC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=BC(I,this.array)),I}setW(A,I){return this.normalized&&(I=QI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array),B=QI(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==_i&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class os extends xI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class es extends xI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class OI extends xI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Qh=0;const Gg=new uA,yi=new _A,sB=new d,eg=new ZB,AQ=new ZB,YI=new d;class Bg extends zC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=pg(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Cs(A)?es:os)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new Ig().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Gg.makeRotationFromQuaternion(A),this.applyMatrix4(Gg),this}rotateX(A){return Gg.makeRotationX(A),this.applyMatrix4(Gg),this}rotateY(A){return Gg.makeRotationY(A),this.applyMatrix4(Gg),this}rotateZ(A){return Gg.makeRotationZ(A),this.applyMatrix4(Gg),this}translate(A,I,g){return Gg.makeTranslation(A,I,g),this.applyMatrix4(Gg),this}scale(A,I,g){return Gg.makeScale(A,I,g),this.applyMatrix4(Gg),this}lookAt(A){return yi.lookAt(A),yi.updateMatrix(),this.applyMatrix4(yi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sB).negate(),this.translate(sB.x,sB.y,sB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new OI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ZB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new d(-1/0,-1/0,-1/0),new d(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];eg.setFromBufferAttribute(B),this.morphTargetsRelative?(YI.addVectors(this.boundingBox.min,eg.min),this.boundingBox.expandByPoint(YI),YI.addVectors(this.boundingBox.max,eg.max),this.boundingBox.expandByPoint(YI)):(this.boundingBox.expandByPoint(eg.min),this.boundingBox.expandByPoint(eg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new WB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new d,1/0);return}if(A){const g=this.boundingSphere.center;if(eg.setFromBufferAttribute(A),I)for(let B=0,E=I.length;B<E;B++){const i=I[B];AQ.setFromBufferAttribute(i),this.morphTargetsRelative?(YI.addVectors(eg.min,AQ.min),eg.expandByPoint(YI),YI.addVectors(eg.max,AQ.max),eg.expandByPoint(YI)):(eg.expandByPoint(AQ.min),eg.expandByPoint(AQ.max))}eg.getCenter(g);let C=0;for(let B=0,E=A.count;B<E;B++)YI.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(YI));if(I)for(let B=0,E=I.length;B<E;B++){const i=I[B],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)YI.fromBufferAttribute(i,e),o&&(sB.fromBufferAttribute(A,e),YI.add(sB)),C=Math.max(C,g.distanceToSquared(YI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xI(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,e=[],t=[];for(let J=0;J<i;J++)e[J]=new d,t[J]=new d;const a=new d,s=new d,D=new d,G=new JA,n=new JA,h=new JA,r=new d,l=new d;function c(J,u,Y){a.fromArray(C,J*3),s.fromArray(C,u*3),D.fromArray(C,Y*3),G.fromArray(E,J*2),n.fromArray(E,u*2),h.fromArray(E,Y*2),s.sub(a),D.sub(a),n.sub(G),h.sub(G);const p=1/(n.x*h.y-h.x*n.y);isFinite(p)&&(r.copy(s).multiplyScalar(h.y).addScaledVector(D,-n.y).multiplyScalar(p),l.copy(D).multiplyScalar(n.x).addScaledVector(s,-h.x).multiplyScalar(p),e[J].add(r),e[u].add(r),e[Y].add(r),t[J].add(l),t[u].add(l),t[Y].add(l))}let S=this.groups;S.length===0&&(S=[{start:0,count:g.length}]);for(let J=0,u=S.length;J<u;++J){const Y=S[J],p=Y.start,m=Y.count;for(let T=p,IA=p+m;T<IA;T+=3)c(g[T+0],g[T+1],g[T+2])}const y=new d,K=new d,F=new d,k=new d;function M(J){F.fromArray(B,J*3),k.copy(F);const u=e[J];y.copy(u),y.sub(F.multiplyScalar(F.dot(u))).normalize(),K.crossVectors(k,u);const p=K.dot(t[J])<0?-1:1;o[J*4]=y.x,o[J*4+1]=y.y,o[J*4+2]=y.z,o[J*4+3]=p}for(let J=0,u=S.length;J<u;++J){const Y=S[J],p=Y.start,m=Y.count;for(let T=p,IA=p+m;T<IA;T+=3)M(g[T+0]),M(g[T+1]),M(g[T+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new xI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,D=g.count;s<D;s++)g.setXYZ(s,0,0,0);const C=new d,B=new d,E=new d,i=new d,o=new d,e=new d,t=new d,a=new d;if(A)for(let s=0,D=A.count;s<D;s+=3){const G=A.getX(s+0),n=A.getX(s+1),h=A.getX(s+2);C.fromBufferAttribute(I,G),B.fromBufferAttribute(I,n),E.fromBufferAttribute(I,h),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),i.fromBufferAttribute(g,G),o.fromBufferAttribute(g,n),e.fromBufferAttribute(g,h),i.add(t),o.add(t),e.add(t),g.setXYZ(G,i.x,i.y,i.z),g.setXYZ(n,o.x,o.y,o.z),g.setXYZ(h,e.x,e.y,e.z)}else for(let s=0,D=I.count;s<D;s+=3)C.fromBufferAttribute(I,s+0),B.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,B),a.subVectors(C,B),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)YI.fromBufferAttribute(A,I),YI.normalize(),A.setXYZ(I,YI.x,YI.y,YI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let D=0,G=0;for(let n=0,h=o.length;n<h;n++){i.isInterleavedBufferAttribute?D=o[n]*i.data.stride+i.offset:D=o[n]*t;for(let r=0;r<t;r++)s[G++]=e[D++]}return new xI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Bg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const B=this.morphAttributes;for(const i in B){const o=[],e=B[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],D=A(s,g);o.push(D)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const D=e[a];t.push(D.toJSON(A.data))}t.length>0&&(C[o]=t,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const B=A.morphAttributes;for(const e in B){const t=[],a=B[e];for(let s=0,D=a.length;s<D;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bt=new uA,ug=new pE,WQ=new WB,Qt=new d,IQ=new d,gQ=new d,CQ=new d,Mi=new d,PQ=new d,vQ=new JA,jQ=new JA,VQ=new JA,Ki=new d,_Q=new d;class gg extends _A{constructor(A=new Bg,I=new TC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(B&&i){PQ.set(0,0,0);for(let o=0,e=B.length;o<e;o++){const t=i[o],a=B[o];t!==0&&(Mi.fromBufferAttribute(a,A),E?PQ.addScaledVector(Mi,t):PQ.addScaledVector(Mi.sub(I),t))}I.add(PQ)}return this.isSkinnedMesh&&this.boneTransform(A,I),I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;if(C===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),WQ.copy(g.boundingSphere),WQ.applyMatrix4(B),ug.copy(A.ray).recast(A.near),WQ.containsPoint(ug.origin)===!1&&(ug.intersectSphere(WQ,Qt)===null||ug.origin.distanceToSquared(Qt)>(A.far-A.near)**2))||(Bt.copy(B).invert(),ug.copy(A.ray).applyMatrix4(Bt),g.boundingBox!==null&&ug.intersectsBox(g.boundingBox)===!1))return;let E;const i=g.index,o=g.attributes.position,e=g.attributes.uv,t=g.attributes.uv2,a=g.groups,s=g.drawRange;if(i!==null)if(Array.isArray(C))for(let D=0,G=a.length;D<G;D++){const n=a[D],h=C[n.materialIndex],r=Math.max(n.start,s.start),l=Math.min(i.count,Math.min(n.start+n.count,s.start+s.count));for(let c=r,S=l;c<S;c+=3){const y=i.getX(c),K=i.getX(c+1),F=i.getX(c+2);E=XQ(this,h,A,ug,e,t,y,K,F),E&&(E.faceIndex=Math.floor(c/3),E.face.materialIndex=n.materialIndex,I.push(E))}}else{const D=Math.max(0,s.start),G=Math.min(i.count,s.start+s.count);for(let n=D,h=G;n<h;n+=3){const r=i.getX(n),l=i.getX(n+1),c=i.getX(n+2);E=XQ(this,C,A,ug,e,t,r,l,c),E&&(E.faceIndex=Math.floor(n/3),I.push(E))}}else if(o!==void 0)if(Array.isArray(C))for(let D=0,G=a.length;D<G;D++){const n=a[D],h=C[n.materialIndex],r=Math.max(n.start,s.start),l=Math.min(o.count,Math.min(n.start+n.count,s.start+s.count));for(let c=r,S=l;c<S;c+=3){const y=c,K=c+1,F=c+2;E=XQ(this,h,A,ug,e,t,y,K,F),E&&(E.faceIndex=Math.floor(c/3),E.face.materialIndex=n.materialIndex,I.push(E))}}else{const D=Math.max(0,s.start),G=Math.min(o.count,s.start+s.count);for(let n=D,h=G;n<h;n+=3){const r=n,l=n+1,c=n+2;E=XQ(this,C,A,ug,e,t,r,l,c),E&&(E.faceIndex=Math.floor(n/3),I.push(E))}}}}function Eh(Q,A,I,g,C,B,E,i){let o;if(A.side===hg?o=g.intersectTriangle(E,B,C,!0,i):o=g.intersectTriangle(C,B,E,A.side===QC,i),o===null)return null;_Q.copy(i),_Q.applyMatrix4(Q.matrixWorld);const e=I.ray.origin.distanceTo(_Q);return e<I.near||e>I.far?null:{distance:e,point:_Q.clone(),object:Q}}function XQ(Q,A,I,g,C,B,E,i,o){Q.getVertexPosition(E,IQ),Q.getVertexPosition(i,gQ),Q.getVertexPosition(o,CQ);const e=Eh(Q,A,I,g,IQ,gQ,CQ,Ki);if(e){C&&(vQ.fromBufferAttribute(C,E),jQ.fromBufferAttribute(C,i),VQ.fromBufferAttribute(C,o),e.uv=gC.getUV(Ki,IQ,gQ,CQ,vQ,jQ,VQ,new JA)),B&&(vQ.fromBufferAttribute(B,E),jQ.fromBufferAttribute(B,i),VQ.fromBufferAttribute(B,o),e.uv2=gC.getUV(Ki,IQ,gQ,CQ,vQ,jQ,VQ,new JA));const t={a:E,b:i,c:o,normal:new d,materialIndex:0};gC.getNormal(IQ,gQ,CQ,t.normal),e.face=t}return e}class FQ extends Bg{constructor(A=1,I=1,g=1,C=1,B=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:E};const i=this;C=Math.floor(C),B=Math.floor(B),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,D=0;G("z","y","x",-1,-1,g,I,A,E,B,0),G("z","y","x",1,-1,g,I,-A,E,B,1),G("x","z","y",1,1,A,g,I,C,E,2),G("x","z","y",1,-1,A,g,-I,C,E,3),G("x","y","z",1,-1,A,I,g,C,B,4),G("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new OI(e,3)),this.setAttribute("normal",new OI(t,3)),this.setAttribute("uv",new OI(a,2));function G(n,h,r,l,c,S,y,K,F,k,M){const J=S/F,u=y/k,Y=S/2,p=y/2,m=K/2,T=F+1,IA=k+1;let AA=0,H=0;const CA=new d;for(let gA=0;gA<IA;gA++){const z=gA*u-p;for(let v=0;v<T;v++){const BA=v*J-Y;CA[n]=BA*l,CA[h]=z*c,CA[r]=m,e.push(CA.x,CA.y,CA.z),CA[n]=0,CA[h]=0,CA[r]=K>0?1:-1,t.push(CA.x,CA.y,CA.z),a.push(v/F),a.push(1-gA/k),AA+=1}}for(let gA=0;gA<k;gA++)for(let z=0;z<F;z++){const v=s+z+T*gA,BA=s+z+T*(gA+1),eA=s+(z+1)+T*(gA+1),W=s+(z+1)+T*gA;o.push(v,BA,W),o.push(BA,eA,W),H+=6}i.addGroup(D,H,M),D+=H,s+=AA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new FQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function pB(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const C=Q[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function $I(Q){const A={};for(let I=0;I<Q.length;I++){const g=pB(Q[I]);for(const C in g)A[C]=g[C]}return A}function ih(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function ts(Q){return Q.getRenderTarget()===null&&Q.outputEncoding===VA?lg:dB}const as={clone:pB,merge:$I};var oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zg extends Og{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=pB(A.uniforms),this.uniformsGroups=ih(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class So extends _A{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new uA,this.projectionMatrix=new uA,this.projectionMatrixInverse=new uA}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PI extends So{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=cQ*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(aQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return cQ*2*Math.atan(Math.tan(aQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,B,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(aQ*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;B+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(B+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const DB=-90,nB=1;class th extends _A{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new PI(DB,nB,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const B=new PI(DB,nB,A,I);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(-1,0,0),this.add(B);const E=new PI(DB,nB,A,I);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(0,1,0),this.add(E);const i=new PI(DB,nB,A,I);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const o=new PI(DB,nB,A,I);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const e=new PI(DB,nB,A,I);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(0,0,-1),this.add(e)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,B,E,i,o,e]=this.children,t=A.getRenderTarget(),a=A.toneMapping,s=A.xr.enabled;A.toneMapping=xg,A.xr.enabled=!1;const D=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,B),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=D,A.setRenderTarget(g,5),A.render(I,e),A.setRenderTarget(t),A.toneMapping=a,A.xr.enabled=s,g.texture.needsPMREMUpdate=!0}}class fE extends TI{constructor(A,I,g,C,B,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:vC,super(A,I,g,C,B,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class ah extends yC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new fE(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:nI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new FQ(5,5,5),B=new Zg({name:"CubemapFromEquirect",uniforms:pB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:hg,blending:SC});B.uniforms.tEquirect.value=I;const E=new gg(C,B),i=I.minFilter;return I.minFilter===kC&&(I.minFilter=nI),new th(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(B)}}const Ui=new d,sh=new d,Dh=new Ig;class uC{constructor(A=new d(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=Ui.subVectors(g,I).cross(sh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(Ui),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Dh.getNormalMatrix(A),C=this.coplanarPoint(Ui).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hB=new WB,zQ=new d;class lo{constructor(A=new uC,I=new uC,g=new uC,C=new uC,B=new uC,E=new uC){this.planes=[A,I,g,C,B,E]}set(A,I,g,C,B,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(B),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],B=g[1],E=g[2],i=g[3],o=g[4],e=g[5],t=g[6],a=g[7],s=g[8],D=g[9],G=g[10],n=g[11],h=g[12],r=g[13],l=g[14],c=g[15];return I[0].setComponents(i-C,a-o,n-s,c-h).normalize(),I[1].setComponents(i+C,a+o,n+s,c+h).normalize(),I[2].setComponents(i+B,a+e,n+D,c+r).normalize(),I[3].setComponents(i-B,a-e,n-D,c-r).normalize(),I[4].setComponents(i-E,a-t,n-G,c-l).normalize(),I[5].setComponents(i+E,a+t,n+G,c+l).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),hB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(hB)}intersectsSprite(A){return hB.center.set(0,0,0),hB.radius=.7071067811865476,hB.applyMatrix4(A.matrixWorld),this.intersectsSphere(hB)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(zQ.x=C.normal.x>0?A.max.x:A.min.x,zQ.y=C.normal.y>0?A.max.y:A.min.y,zQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(zQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ss(){let Q=null,A=!1,I=null,g=null;function C(B,E){I(B,E),g=Q.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(C),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){Q=B}}}function nh(Q,A){const I=A.isWebGL2,g=new WeakMap;function C(e,t){const a=e.array,s=e.usage,D=Q.createBuffer();Q.bindBuffer(t,D),Q.bufferData(t,a,s),e.onUploadCallback();let G;if(a instanceof Float32Array)G=5126;else if(a instanceof Uint16Array)if(e.isFloat16BufferAttribute)if(I)G=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else G=5123;else if(a instanceof Int16Array)G=5122;else if(a instanceof Uint32Array)G=5125;else if(a instanceof Int32Array)G=5124;else if(a instanceof Int8Array)G=5120;else if(a instanceof Uint8Array)G=5121;else if(a instanceof Uint8ClampedArray)G=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:D,type:G,bytesPerElement:a.BYTES_PER_ELEMENT,version:e.version}}function B(e,t,a){const s=t.array,D=t.updateRange;Q.bindBuffer(a,e),D.count===-1?Q.bufferSubData(a,0,s):(I?Q.bufferSubData(a,D.offset*s.BYTES_PER_ELEMENT,s,D.offset,D.count):Q.bufferSubData(a,D.offset*s.BYTES_PER_ELEMENT,s.subarray(D.offset,D.offset+D.count)),D.count=-1),t.onUploadCallback()}function E(e){return e.isInterleavedBufferAttribute&&(e=e.data),g.get(e)}function i(e){e.isInterleavedBufferAttribute&&(e=e.data);const t=g.get(e);t&&(Q.deleteBuffer(t.buffer),g.delete(e))}function o(e,t){if(e.isGLBufferAttribute){const s=g.get(e);(!s||s.version<e.version)&&g.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);const a=g.get(e);a===void 0?g.set(e,C(e,t)):a.version<e.version&&(B(a.buffer,e,t),a.version=e.version)}return{get:E,remove:i,update:o}}class ko extends Bg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,D=[],G=[],n=[],h=[];for(let r=0;r<t;r++){const l=r*s-E;for(let c=0;c<e;c++){const S=c*a-B;G.push(S,-l,0),n.push(0,0,1),h.push(c/i),h.push(1-r/o)}}for(let r=0;r<o;r++)for(let l=0;l<i;l++){const c=l+e*r,S=l+e*(r+1),y=l+1+e*(r+1),K=l+1+e*r;D.push(c,S,K),D.push(S,y,K)}this.setIndex(D),this.setAttribute("position",new OI(G,3)),this.setAttribute("normal",new OI(n,3)),this.setAttribute("uv",new OI(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ko(A.width,A.height,A.widthSegments,A.heightSegments)}}var hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh="vec3 transformed = vec3( position );",kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Mh=`#ifdef USE_IRIDESCENCE
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
#endif`,Kh=`#ifdef USE_BUMPMAP
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fh=`#define PI 3.141592653589793
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
}
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
}`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uh=`vec3 transformedNormal = objectNormal;
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
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",xh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,$h=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ar=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ir=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cr=`uniform bool receiveShadow;
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
#endif`,Br=`#if defined( USE_ENVMAP )
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
#endif`,Qr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Er=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ir=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,or=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,er=`PhysicalMaterial material;
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
#endif`,tr=`struct PhysicalMaterial {
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
}`,ar=`
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
#endif`,sr=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gr=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yr=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mr=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kr=`#ifdef USE_MORPHNORMALS
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
#endif`,Ur=`#ifdef USE_MORPHTARGETS
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
#endif`,Nr=`#ifdef USE_MORPHTARGETS
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
#endif`,Jr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Rr=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Fr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dr=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pr=`#ifdef USE_NORMALMAP
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
#endif`,fr=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yr=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ur=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Lr=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hr=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mr=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,br=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xr=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Or=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zr=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wr=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pr=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vr=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jr=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vr=`float getShadowMask() {
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
}`,_r=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xr=`#ifdef USE_SKINNING
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
#endif`,zr=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$r=`#ifdef USE_SKINNING
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
#endif`,Ac=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ic=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cc=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bc=`#ifdef USE_TRANSMISSION
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
#endif`,Qc=`#ifdef USE_TRANSMISSION
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
#endif`,Ec=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ic=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,oc=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ec=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,tc=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ac=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,sc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nc=`uniform sampler2D t2D;
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
}`,hc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rc=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wc=`#include <common>
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
}`,Sc=`#if DEPTH_PACKING == 3200
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
}`,lc=`#define DISTANCE
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
}`,kc=`#define DISTANCE
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
}`,yc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kc=`uniform float scale;
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
}`,Uc=`uniform vec3 diffuse;
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
}`,Nc=`#include <common>
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
}`,Jc=`uniform vec3 diffuse;
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
}`,Rc=`#define LAMBERT
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
}`,Fc=`#define LAMBERT
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
}`,qc=`#define MATCAP
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
}`,dc=`#define MATCAP
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
}`,pc=`#define NORMAL
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
}`,fc=`#define NORMAL
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
}`,Yc=`#define PHONG
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
}`,uc=`#define PHONG
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
}`,Lc=`#define STANDARD
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
}`,Hc=`#define STANDARD
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
}`,mc=`#define TOON
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
}`,bc=`#define TOON
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
}`,Tc=`uniform float size;
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
}`,xc=`uniform vec3 diffuse;
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
}`,Oc=`#include <common>
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
}`,Zc=`uniform vec3 color;
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
}`,Wc=`uniform float rotation;
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
}`,Pc=`uniform vec3 diffuse;
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
}`,dA={alphamap_fragment:hh,alphamap_pars_fragment:rh,alphatest_fragment:ch,alphatest_pars_fragment:Gh,aomap_fragment:wh,aomap_pars_fragment:Sh,begin_vertex:lh,beginnormal_vertex:kh,bsdfs:yh,iridescence_fragment:Mh,bumpmap_pars_fragment:Kh,clipping_planes_fragment:Uh,clipping_planes_pars_fragment:Nh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Rh,color_fragment:Fh,color_pars_fragment:qh,color_pars_vertex:dh,color_vertex:ph,common:fh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:uh,displacementmap_pars_vertex:Lh,displacementmap_vertex:Hh,emissivemap_fragment:mh,emissivemap_pars_fragment:bh,encodings_fragment:Th,encodings_pars_fragment:xh,envmap_fragment:Oh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:Wh,envmap_pars_vertex:Ph,envmap_physical_pars_fragment:Br,envmap_vertex:vh,fog_vertex:jh,fog_pars_vertex:Vh,fog_fragment:_h,fog_pars_fragment:Xh,gradientmap_pars_fragment:zh,lightmap_fragment:$h,lightmap_pars_fragment:Ar,lights_lambert_fragment:Ir,lights_lambert_pars_fragment:gr,lights_pars_begin:Cr,lights_toon_fragment:Qr,lights_toon_pars_fragment:Er,lights_phong_fragment:ir,lights_phong_pars_fragment:or,lights_physical_fragment:er,lights_physical_pars_fragment:tr,lights_fragment_begin:ar,lights_fragment_maps:sr,lights_fragment_end:Dr,logdepthbuf_fragment:nr,logdepthbuf_pars_fragment:hr,logdepthbuf_pars_vertex:rr,logdepthbuf_vertex:cr,map_fragment:Gr,map_pars_fragment:wr,map_particle_fragment:Sr,map_particle_pars_fragment:lr,metalnessmap_fragment:kr,metalnessmap_pars_fragment:yr,morphcolor_vertex:Mr,morphnormal_vertex:Kr,morphtarget_pars_vertex:Ur,morphtarget_vertex:Nr,normal_fragment_begin:Jr,normal_fragment_maps:Rr,normal_pars_fragment:Fr,normal_pars_vertex:qr,normal_vertex:dr,normalmap_pars_fragment:pr,clearcoat_normal_fragment_begin:fr,clearcoat_normal_fragment_maps:Yr,clearcoat_pars_fragment:ur,iridescence_pars_fragment:Lr,output_fragment:Hr,packing:mr,premultiplied_alpha_fragment:br,project_vertex:Tr,dithering_fragment:xr,dithering_pars_fragment:Or,roughnessmap_fragment:Zr,roughnessmap_pars_fragment:Wr,shadowmap_pars_fragment:Pr,shadowmap_pars_vertex:vr,shadowmap_vertex:jr,shadowmask_pars_fragment:Vr,skinbase_vertex:_r,skinning_pars_vertex:Xr,skinning_vertex:zr,skinnormal_vertex:$r,specularmap_fragment:Ac,specularmap_pars_fragment:Ic,tonemapping_fragment:gc,tonemapping_pars_fragment:Cc,transmission_fragment:Bc,transmission_pars_fragment:Qc,uv_pars_fragment:Ec,uv_pars_vertex:ic,uv_vertex:oc,uv2_pars_fragment:ec,uv2_pars_vertex:tc,uv2_vertex:ac,worldpos_vertex:sc,background_vert:Dc,background_frag:nc,backgroundCube_vert:hc,backgroundCube_frag:rc,cube_vert:cc,cube_frag:Gc,depth_vert:wc,depth_frag:Sc,distanceRGBA_vert:lc,distanceRGBA_frag:kc,equirect_vert:yc,equirect_frag:Mc,linedashed_vert:Kc,linedashed_frag:Uc,meshbasic_vert:Nc,meshbasic_frag:Jc,meshlambert_vert:Rc,meshlambert_frag:Fc,meshmatcap_vert:qc,meshmatcap_frag:dc,meshnormal_vert:pc,meshnormal_frag:fc,meshphong_vert:Yc,meshphong_frag:uc,meshphysical_vert:Lc,meshphysical_frag:Hc,meshtoon_vert:mc,meshtoon_frag:bc,points_vert:Tc,points_frag:xc,shadow_vert:Oc,shadow_frag:Zc,sprite_vert:Wc,sprite_frag:Pc},tA={common:{diffuse:{value:new FA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ig},uv2Transform:{value:new Ig},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new JA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new FA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new FA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ig}},sprite:{diffuse:{value:new FA(16777215)},opacity:{value:1},center:{value:new JA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ig}}},Hg={basic:{uniforms:$I([tA.common,tA.specularmap,tA.envmap,tA.aomap,tA.lightmap,tA.fog]),vertexShader:dA.meshbasic_vert,fragmentShader:dA.meshbasic_frag},lambert:{uniforms:$I([tA.common,tA.specularmap,tA.envmap,tA.aomap,tA.lightmap,tA.emissivemap,tA.bumpmap,tA.normalmap,tA.displacementmap,tA.fog,tA.lights,{emissive:{value:new FA(0)}}]),vertexShader:dA.meshlambert_vert,fragmentShader:dA.meshlambert_frag},phong:{uniforms:$I([tA.common,tA.specularmap,tA.envmap,tA.aomap,tA.lightmap,tA.emissivemap,tA.bumpmap,tA.normalmap,tA.displacementmap,tA.fog,tA.lights,{emissive:{value:new FA(0)},specular:{value:new FA(1118481)},shininess:{value:30}}]),vertexShader:dA.meshphong_vert,fragmentShader:dA.meshphong_frag},standard:{uniforms:$I([tA.common,tA.envmap,tA.aomap,tA.lightmap,tA.emissivemap,tA.bumpmap,tA.normalmap,tA.displacementmap,tA.roughnessmap,tA.metalnessmap,tA.fog,tA.lights,{emissive:{value:new FA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dA.meshphysical_vert,fragmentShader:dA.meshphysical_frag},toon:{uniforms:$I([tA.common,tA.aomap,tA.lightmap,tA.emissivemap,tA.bumpmap,tA.normalmap,tA.displacementmap,tA.gradientmap,tA.fog,tA.lights,{emissive:{value:new FA(0)}}]),vertexShader:dA.meshtoon_vert,fragmentShader:dA.meshtoon_frag},matcap:{uniforms:$I([tA.common,tA.bumpmap,tA.normalmap,tA.displacementmap,tA.fog,{matcap:{value:null}}]),vertexShader:dA.meshmatcap_vert,fragmentShader:dA.meshmatcap_frag},points:{uniforms:$I([tA.points,tA.fog]),vertexShader:dA.points_vert,fragmentShader:dA.points_frag},dashed:{uniforms:$I([tA.common,tA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dA.linedashed_vert,fragmentShader:dA.linedashed_frag},depth:{uniforms:$I([tA.common,tA.displacementmap]),vertexShader:dA.depth_vert,fragmentShader:dA.depth_frag},normal:{uniforms:$I([tA.common,tA.bumpmap,tA.normalmap,tA.displacementmap,{opacity:{value:1}}]),vertexShader:dA.meshnormal_vert,fragmentShader:dA.meshnormal_frag},sprite:{uniforms:$I([tA.sprite,tA.fog]),vertexShader:dA.sprite_vert,fragmentShader:dA.sprite_frag},background:{uniforms:{uvTransform:{value:new Ig},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dA.background_vert,fragmentShader:dA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:dA.backgroundCube_vert,fragmentShader:dA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dA.cube_vert,fragmentShader:dA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dA.equirect_vert,fragmentShader:dA.equirect_frag},distanceRGBA:{uniforms:$I([tA.common,tA.displacementmap,{referencePosition:{value:new d},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dA.distanceRGBA_vert,fragmentShader:dA.distanceRGBA_frag},shadow:{uniforms:$I([tA.lights,tA.fog,{color:{value:new FA(0)},opacity:{value:1}}]),vertexShader:dA.shadow_vert,fragmentShader:dA.shadow_frag}};Hg.physical={uniforms:$I([Hg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new JA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new FA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new JA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new FA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new FA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:dA.meshphysical_vert,fragmentShader:dA.meshphysical_frag};const $Q={r:0,b:0,g:0};function vc(Q,A,I,g,C,B,E){const i=new FA(0);let o=B===!0?0:1,e,t,a=null,s=0,D=null;function G(h,r){let l=!1,c=r.isScene===!0?r.background:null;c&&c.isTexture&&(c=(r.backgroundBlurriness>0?I:A).get(c));const S=Q.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(c=null),c===null?n(i,o):c&&c.isColor&&(n(c,1),l=!0),(Q.autoClear||l)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),c&&(c.isCubeTexture||c.mapping===dE)?(t===void 0&&(t=new gg(new FQ(1,1,1),new Zg({name:"BackgroundCubeMaterial",uniforms:pB(Hg.backgroundCube.uniforms),vertexShader:Hg.backgroundCube.vertexShader,fragmentShader:Hg.backgroundCube.fragmentShader,side:hg,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(K,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),t.material.uniforms.envMap.value=c,t.material.uniforms.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=r.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,t.material.toneMapped=c.encoding!==VA,(a!==c||s!==c.version||D!==Q.toneMapping)&&(t.material.needsUpdate=!0,a=c,s=c.version,D=Q.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null)):c&&c.isTexture&&(e===void 0&&(e=new gg(new ko(2,2),new Zg({name:"BackgroundMaterial",uniforms:pB(Hg.background.uniforms),vertexShader:Hg.background.vertexShader,fragmentShader:Hg.background.fragmentShader,side:QC,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=c,e.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,e.material.toneMapped=c.encoding!==VA,c.matrixAutoUpdate===!0&&c.updateMatrix(),e.material.uniforms.uvTransform.value.copy(c.matrix),(a!==c||s!==c.version||D!==Q.toneMapping)&&(e.material.needsUpdate=!0,a=c,s=c.version,D=Q.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null))}function n(h,r){h.getRGB($Q,ts(Q)),g.buffers.color.setClear($Q.r,$Q.g,$Q.b,r,E)}return{getClearColor:function(){return i},setClearColor:function(h,r=1){i.set(h),o=r,n(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,n(i,o)},render:G}}function jc(Q,A,I,g){const C=Q.getParameter(34921),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||B!==null,i={},o=h(null);let e=o,t=!1;function a(m,T,IA,AA,H){let CA=!1;if(E){const gA=n(AA,IA,T);e!==gA&&(e=gA,D(e.object)),CA=r(m,AA,IA,H),CA&&l(m,AA,IA,H)}else{const gA=T.wireframe===!0;(e.geometry!==AA.id||e.program!==IA.id||e.wireframe!==gA)&&(e.geometry=AA.id,e.program=IA.id,e.wireframe=gA,CA=!0)}H!==null&&I.update(H,34963),(CA||t)&&(t=!1,k(m,T,IA,AA),H!==null&&Q.bindBuffer(34963,I.get(H).buffer))}function s(){return g.isWebGL2?Q.createVertexArray():B.createVertexArrayOES()}function D(m){return g.isWebGL2?Q.bindVertexArray(m):B.bindVertexArrayOES(m)}function G(m){return g.isWebGL2?Q.deleteVertexArray(m):B.deleteVertexArrayOES(m)}function n(m,T,IA){const AA=IA.wireframe===!0;let H=i[m.id];H===void 0&&(H={},i[m.id]=H);let CA=H[T.id];CA===void 0&&(CA={},H[T.id]=CA);let gA=CA[AA];return gA===void 0&&(gA=h(s()),CA[AA]=gA),gA}function h(m){const T=[],IA=[],AA=[];for(let H=0;H<C;H++)T[H]=0,IA[H]=0,AA[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:IA,attributeDivisors:AA,object:m,attributes:{},index:null}}function r(m,T,IA,AA){const H=e.attributes,CA=T.attributes;let gA=0;const z=IA.getAttributes();for(const v in z)if(z[v].location>=0){const eA=H[v];let W=CA[v];if(W===void 0&&(v==="instanceMatrix"&&m.instanceMatrix&&(W=m.instanceMatrix),v==="instanceColor"&&m.instanceColor&&(W=m.instanceColor)),eA===void 0||eA.attribute!==W||W&&eA.data!==W.data)return!0;gA++}return e.attributesNum!==gA||e.index!==AA}function l(m,T,IA,AA){const H={},CA=T.attributes;let gA=0;const z=IA.getAttributes();for(const v in z)if(z[v].location>=0){let eA=CA[v];eA===void 0&&(v==="instanceMatrix"&&m.instanceMatrix&&(eA=m.instanceMatrix),v==="instanceColor"&&m.instanceColor&&(eA=m.instanceColor));const W={};W.attribute=eA,eA&&eA.data&&(W.data=eA.data),H[v]=W,gA++}e.attributes=H,e.attributesNum=gA,e.index=AA}function c(){const m=e.newAttributes;for(let T=0,IA=m.length;T<IA;T++)m[T]=0}function S(m){y(m,0)}function y(m,T){const IA=e.newAttributes,AA=e.enabledAttributes,H=e.attributeDivisors;IA[m]=1,AA[m]===0&&(Q.enableVertexAttribArray(m),AA[m]=1),H[m]!==T&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](m,T),H[m]=T)}function K(){const m=e.newAttributes,T=e.enabledAttributes;for(let IA=0,AA=T.length;IA<AA;IA++)T[IA]!==m[IA]&&(Q.disableVertexAttribArray(IA),T[IA]=0)}function F(m,T,IA,AA,H,CA){g.isWebGL2===!0&&(IA===5124||IA===5125)?Q.vertexAttribIPointer(m,T,IA,H,CA):Q.vertexAttribPointer(m,T,IA,AA,H,CA)}function k(m,T,IA,AA){if(g.isWebGL2===!1&&(m.isInstancedMesh||AA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;c();const H=AA.attributes,CA=IA.getAttributes(),gA=T.defaultAttributeValues;for(const z in CA){const v=CA[z];if(v.location>=0){let BA=H[z];if(BA===void 0&&(z==="instanceMatrix"&&m.instanceMatrix&&(BA=m.instanceMatrix),z==="instanceColor"&&m.instanceColor&&(BA=m.instanceColor)),BA!==void 0){const eA=BA.normalized,W=BA.itemSize,V=I.get(BA);if(V===void 0)continue;const QA=V.buffer,cA=V.type,rA=V.bytesPerElement;if(BA.isInterleavedBufferAttribute){const NA=BA.data,qA=NA.stride,fA=BA.offset;if(NA.isInstancedInterleavedBuffer){for(let WA=0;WA<v.locationSize;WA++)y(v.location+WA,NA.meshPerAttribute);m.isInstancedMesh!==!0&&AA._maxInstanceCount===void 0&&(AA._maxInstanceCount=NA.meshPerAttribute*NA.count)}else for(let WA=0;WA<v.locationSize;WA++)S(v.location+WA);Q.bindBuffer(34962,QA);for(let WA=0;WA<v.locationSize;WA++)F(v.location+WA,W/v.locationSize,cA,eA,qA*rA,(fA+W/v.locationSize*WA)*rA)}else{if(BA.isInstancedBufferAttribute){for(let NA=0;NA<v.locationSize;NA++)y(v.location+NA,BA.meshPerAttribute);m.isInstancedMesh!==!0&&AA._maxInstanceCount===void 0&&(AA._maxInstanceCount=BA.meshPerAttribute*BA.count)}else for(let NA=0;NA<v.locationSize;NA++)S(v.location+NA);Q.bindBuffer(34962,QA);for(let NA=0;NA<v.locationSize;NA++)F(v.location+NA,W/v.locationSize,cA,eA,W*rA,W/v.locationSize*NA*rA)}}else if(gA!==void 0){const eA=gA[z];if(eA!==void 0)switch(eA.length){case 2:Q.vertexAttrib2fv(v.location,eA);break;case 3:Q.vertexAttrib3fv(v.location,eA);break;case 4:Q.vertexAttrib4fv(v.location,eA);break;default:Q.vertexAttrib1fv(v.location,eA)}}}}K()}function M(){Y();for(const m in i){const T=i[m];for(const IA in T){const AA=T[IA];for(const H in AA)G(AA[H].object),delete AA[H];delete T[IA]}delete i[m]}}function J(m){if(i[m.id]===void 0)return;const T=i[m.id];for(const IA in T){const AA=T[IA];for(const H in AA)G(AA[H].object),delete AA[H];delete T[IA]}delete i[m.id]}function u(m){for(const T in i){const IA=i[T];if(IA[m.id]===void 0)continue;const AA=IA[m.id];for(const H in AA)G(AA[H].object),delete AA[H];delete IA[m.id]}}function Y(){p(),t=!0,e!==o&&(e=o,D(e.object))}function p(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:Y,resetDefaultState:p,dispose:M,releaseStatesOfGeometry:J,releaseStatesOfProgram:u,initAttributes:c,enableAttribute:S,disableUnusedAttributes:K}}function Vc(Q,A,I,g){const C=g.isWebGL2;let B;function E(e){B=e}function i(e,t){Q.drawArrays(B,e,t),I.update(t,B,1)}function o(e,t,a){if(a===0)return;let s,D;if(C)s=Q,D="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),D="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[D](B,e,t,a),I.update(t,B,a)}this.setMode=E,this.render=i,this.renderInstances=o}function _c(Q,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const F=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(F){if(F==="highp"){if(Q.getShaderPrecisionFormat(35633,36338).precision>0&&Q.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";F="mediump"}return F==="mediump"&&Q.getShaderPrecisionFormat(35633,36337).precision>0&&Q.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&Q instanceof WebGL2RenderingContext;let i=I.precision!==void 0?I.precision:"highp";const o=B(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const e=E||A.has("WEBGL_draw_buffers"),t=I.logarithmicDepthBuffer===!0,a=Q.getParameter(34930),s=Q.getParameter(35660),D=Q.getParameter(3379),G=Q.getParameter(34076),n=Q.getParameter(34921),h=Q.getParameter(36347),r=Q.getParameter(36348),l=Q.getParameter(36349),c=s>0,S=E||A.has("OES_texture_float"),y=c&&S,K=E?Q.getParameter(36183):0;return{isWebGL2:E,drawBuffers:e,getMaxAnisotropy:C,getMaxPrecision:B,precision:i,logarithmicDepthBuffer:t,maxTextures:a,maxVertexTextures:s,maxTextureSize:D,maxCubemapSize:G,maxAttributes:n,maxVertexUniforms:h,maxVaryings:r,maxFragmentUniforms:l,vertexTextures:c,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:K}}function Xc(Q){const A=this;let I=null,g=0,C=!1,B=!1;const E=new uC,i=new Ig,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const D=a.length!==0||s||g!==0||C;return C=s,g=a.length,D},this.beginShadows=function(){B=!0,t(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,D){const G=a.clippingPlanes,n=a.clipIntersection,h=a.clipShadows,r=Q.get(a);if(!C||G===null||G.length===0||B&&!h)B?t(null):e();else{const l=B?0:g,c=l*4;let S=r.clippingState||null;o.value=S,S=t(G,s,c,D);for(let y=0;y!==c;++y)S[y]=I[y];r.clippingState=S,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=l}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,D,G){const n=a!==null?a.length:0;let h=null;if(n!==0){if(h=o.value,G!==!0||h===null){const r=D+n*4,l=s.matrixWorldInverse;i.getNormalMatrix(l),(h===null||h.length<r)&&(h=new Float32Array(r));for(let c=0,S=D;c!==n;++c,S+=4)E.copy(a[c]).applyMatrix4(l,i),E.normal.toArray(h,S),h[S+3]=E.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=n,A.numIntersection=0,h}}function zc(Q){let A=new WeakMap;function I(E,i){return i===GE?E.mapping=vC:i===vi&&(E.mapping=JB),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===GE||i===vi)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new ah(o.height/2);return e.fromEquirectangularTexture(Q,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class YE extends So{constructor(A=-1,I=1,g=1,C=-1,B=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=e*this.view.offsetX,E=B+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(B,E,i,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const lB=4,Et=[.125,.215,.35,.446,.526,.582],HC=20,Ni=new YE,it=new FA;let Ji=null;const LC=(1+Math.sqrt(5))/2,rB=1/LC,ot=[new d(1,1,1),new d(-1,1,1),new d(1,1,-1),new d(-1,1,-1),new d(0,LC,rB),new d(0,LC,-rB),new d(rB,0,LC),new d(-rB,0,LC),new d(LC,rB,0),new d(-LC,rB,0)];class et{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){Ji=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=st(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=at(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Ji),A.scissorTest=!1,AE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===vC||A.mapping===JB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Ji=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:nI,minFilter:nI,generateMipmaps:!1,type:dg,format:kg,encoding:Mg,depthBuffer:!1},C=tt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tt(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$c(B)),this._blurMaterial=AG(B,A,I)}return C}_compileMaterial(A){const I=new gg(this._lodPlanes[0],A);this._renderer.compile(I,Ni)}_sceneToCubeUV(A,I,g,C){const i=new PI(90,1,I,g),o=[1,-1,1,1,1,1],e=[1,1,1,-1,-1,-1],t=this._renderer,a=t.autoClear,s=t.toneMapping;t.getClearColor(it),t.toneMapping=xg,t.autoClear=!1;const D=new TC({name:"PMREM.Background",side:hg,depthWrite:!1,depthTest:!1}),G=new gg(new FQ,D);let n=!1;const h=A.background;h?h.isColor&&(D.color.copy(h),A.background=null,n=!0):(D.color.copy(it),n=!0);for(let r=0;r<6;r++){const l=r%3;l===0?(i.up.set(0,o[r],0),i.lookAt(e[r],0,0)):l===1?(i.up.set(0,0,o[r]),i.lookAt(0,e[r],0)):(i.up.set(0,o[r],0),i.lookAt(0,0,e[r]));const c=this._cubeSize;AE(C,l*c,r>2?c:0,c,c),t.setRenderTarget(C),n&&t.render(G,i),t.render(A,i)}G.geometry.dispose(),G.material.dispose(),t.toneMapping=s,t.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===vC||A.mapping===JB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=st()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=at());const B=C?this._cubemapMaterial:this._equirectMaterial,E=new gg(this._lodPlanes[0],B),i=B.uniforms;i.envMap.value=A;const o=this._cubeSize;AE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,Ni)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=ot[(C-1)%ot.length];this._blur(A,C-1,C,B,E)}I.autoClear=g}_blur(A,I,g,C,B){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",B),this._halfBlur(E,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new gg(this._lodPlanes[C],e),s=e.uniforms,D=this._sizeLods[g]-1,G=isFinite(B)?Math.PI/(2*D):2*Math.PI/(2*HC-1),n=B/G,h=isFinite(B)?1+Math.floor(t*n):HC;h>HC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${HC}`);const r=[];let l=0;for(let F=0;F<HC;++F){const k=F/n,M=Math.exp(-k*k/2);r.push(M),F===0?l+=M:F<h&&(l+=2*M)}for(let F=0;F<r.length;F++)r[F]=r[F]/l;s.envMap.value=A.texture,s.samples.value=h,s.weights.value=r,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:c}=this;s.dTheta.value=G,s.mipInt.value=c-g;const S=this._sizeLods[C],y=3*S*(C>c-lB?C-c+lB:0),K=4*(this._cubeSize-S);AE(I,y,K,3*S,2*S),o.setRenderTarget(I),o.render(a,Ni)}}function $c(Q){const A=[],I=[],g=[];let C=Q;const B=Q-lB+1+Et.length;for(let E=0;E<B;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>Q-lB?o=Et[E-Q+lB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],D=6,G=6,n=3,h=2,r=1,l=new Float32Array(n*G*D),c=new Float32Array(h*G*D),S=new Float32Array(r*G*D);for(let K=0;K<D;K++){const F=K%3*2/3-1,k=K>2?0:-1,M=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];l.set(M,n*G*K),c.set(s,h*G*K);const J=[K,K,K,K,K,K];S.set(J,r*G*K)}const y=new Bg;y.setAttribute("position",new xI(l,n)),y.setAttribute("uv",new xI(c,h)),y.setAttribute("faceIndex",new xI(S,r)),A.push(y),C>lB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function tt(Q,A,I){const g=new yC(Q,A,I);return g.texture.mapping=dE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function AE(Q,A,I,g,C){Q.viewport.set(A,I,g,C),Q.scissor.set(A,I,g,C)}function AG(Q,A,I){const g=new Float32Array(HC),C=new d(0,1,0);return new Zg({name:"SphericalGaussianBlur",defines:{n:HC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:yo(),fragmentShader:`

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
		`,blending:SC,depthTest:!1,depthWrite:!1})}function at(){return new Zg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:SC,depthTest:!1,depthWrite:!1})}function st(){return new Zg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:SC,depthTest:!1,depthWrite:!1})}function yo(){return`

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
	`}function IG(Q){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===GE||o===vi,t=o===vC||o===JB;if(e||t)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new et(Q)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(e&&a&&a.height>0||t&&a&&C(a)){I===null&&(I=new et(Q));const s=e?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,s),i.addEventListener("dispose",B),s.texture}else return null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function B(i){const o=i.target;o.removeEventListener("dispose",B);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function gG(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=Q.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function CG(Q,A,I,g){const C={},B=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const G in s.attributes)A.remove(s.attributes[G]);s.removeEventListener("dispose",E),delete C[s.id];const D=B.get(s);D&&(A.remove(D),B.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const G in s)A.update(s[G],34962);const D=a.morphAttributes;for(const G in D){const n=D[G];for(let h=0,r=n.length;h<r;h++)A.update(n[h],34962)}}function e(a){const s=[],D=a.index,G=a.attributes.position;let n=0;if(D!==null){const l=D.array;n=D.version;for(let c=0,S=l.length;c<S;c+=3){const y=l[c+0],K=l[c+1],F=l[c+2];s.push(y,K,K,F,F,y)}}else{const l=G.array;n=G.version;for(let c=0,S=l.length/3-1;c<S;c+=3){const y=c+0,K=c+1,F=c+2;s.push(y,K,K,F,F,y)}}const h=new(Cs(s)?es:os)(s,1);h.version=n;const r=B.get(a);r&&A.remove(r),B.set(a,h)}function t(a){const s=B.get(a);if(s){const D=a.index;D!==null&&s.version<D.version&&e(a)}else e(a);return B.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function BG(Q,A,I,g){const C=g.isWebGL2;let B;function E(s){B=s}let i,o;function e(s){i=s.type,o=s.bytesPerElement}function t(s,D){Q.drawElements(B,D,i,s*o),I.update(D,B,1)}function a(s,D,G){if(G===0)return;let n,h;if(C)n=Q,h="drawElementsInstanced";else if(n=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",n===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[h](B,D,i,s*o,G),I.update(D,B,G)}this.setMode=E,this.setIndex=e,this.render=t,this.renderInstances=a}function QG(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,E,i){switch(I.calls++,E){case 4:I.triangles+=i*(B/3);break;case 1:I.lines+=i*(B/2);break;case 3:I.lines+=i*(B-1);break;case 2:I.lines+=i*B;break;case 0:I.points+=i*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function EG(Q,A){return Q[0]-A[0]}function iG(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function oG(Q,A,I){const g={},C=new Float32Array(8),B=new WeakMap,E=new EI,i=[];for(let e=0;e<8;e++)i[e]=[e,0];function o(e,t,a){const s=e.morphTargetInfluences;if(A.isWebGL2===!0){const G=t.morphAttributes.position||t.morphAttributes.normal||t.morphAttributes.color,n=G!==void 0?G.length:0;let h=B.get(t);if(h===void 0||h.count!==n){let T=function(){p.dispose(),B.delete(t),t.removeEventListener("dispose",T)};var D=T;h!==void 0&&h.texture.dispose();const c=t.morphAttributes.position!==void 0,S=t.morphAttributes.normal!==void 0,y=t.morphAttributes.color!==void 0,K=t.morphAttributes.position||[],F=t.morphAttributes.normal||[],k=t.morphAttributes.color||[];let M=0;c===!0&&(M=1),S===!0&&(M=2),y===!0&&(M=3);let J=t.attributes.position.count*M,u=1;J>A.maxTextureSize&&(u=Math.ceil(J/A.maxTextureSize),J=A.maxTextureSize);const Y=new Float32Array(J*u*4*n),p=new Es(Y,J,u,n);p.type=sg,p.needsUpdate=!0;const m=M*4;for(let IA=0;IA<n;IA++){const AA=K[IA],H=F[IA],CA=k[IA],gA=J*u*4*IA;for(let z=0;z<AA.count;z++){const v=z*m;c===!0&&(E.fromBufferAttribute(AA,z),Y[gA+v+0]=E.x,Y[gA+v+1]=E.y,Y[gA+v+2]=E.z,Y[gA+v+3]=0),S===!0&&(E.fromBufferAttribute(H,z),Y[gA+v+4]=E.x,Y[gA+v+5]=E.y,Y[gA+v+6]=E.z,Y[gA+v+7]=0),y===!0&&(E.fromBufferAttribute(CA,z),Y[gA+v+8]=E.x,Y[gA+v+9]=E.y,Y[gA+v+10]=E.z,Y[gA+v+11]=CA.itemSize===4?E.w:1)}}h={count:n,texture:p,size:new JA(J,u)},B.set(t,h),t.addEventListener("dispose",T)}let r=0;for(let c=0;c<s.length;c++)r+=s[c];const l=t.morphTargetsRelative?1:1-r;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",l),a.getUniforms().setValue(Q,"morphTargetInfluences",s),a.getUniforms().setValue(Q,"morphTargetsTexture",h.texture,I),a.getUniforms().setValue(Q,"morphTargetsTextureSize",h.size)}else{const G=s===void 0?0:s.length;let n=g[t.id];if(n===void 0||n.length!==G){n=[];for(let S=0;S<G;S++)n[S]=[S,0];g[t.id]=n}for(let S=0;S<G;S++){const y=n[S];y[0]=S,y[1]=s[S]}n.sort(iG);for(let S=0;S<8;S++)S<G&&n[S][1]?(i[S][0]=n[S][0],i[S][1]=n[S][1]):(i[S][0]=Number.MAX_SAFE_INTEGER,i[S][1]=0);i.sort(EG);const h=t.morphAttributes.position,r=t.morphAttributes.normal;let l=0;for(let S=0;S<8;S++){const y=i[S],K=y[0],F=y[1];K!==Number.MAX_SAFE_INTEGER&&F?(h&&t.getAttribute("morphTarget"+S)!==h[K]&&t.setAttribute("morphTarget"+S,h[K]),r&&t.getAttribute("morphNormal"+S)!==r[K]&&t.setAttribute("morphNormal"+S,r[K]),C[S]=F,l+=F):(h&&t.hasAttribute("morphTarget"+S)===!0&&t.deleteAttribute("morphTarget"+S),r&&t.hasAttribute("morphNormal"+S)===!0&&t.deleteAttribute("morphNormal"+S),C[S]=0)}const c=t.morphTargetsRelative?1:1-l;a.getUniforms().setValue(Q,"morphTargetBaseInfluence",c),a.getUniforms().setValue(Q,"morphTargetInfluences",C)}}return{update:o}}function eG(Q,A,I,g){let C=new WeakMap;function B(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);return C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),I.update(o.instanceMatrix,34962),o.instanceColor!==null&&I.update(o.instanceColor,34962)),a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:B,dispose:E}}const Ds=new TI,ns=new Es,hs=new _n,rs=new fE,Dt=[],nt=[],ht=new Float32Array(16),rt=new Float32Array(9),ct=new Float32Array(4);function PB(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const C=A*I;let B=Dt[C];if(B===void 0&&(B=new Float32Array(C),Dt[C]=B),A!==0){g.toArray(B,0);for(let E=1,i=0;E!==A;++E)i+=I,Q[E].toArray(B,i)}return B}function UI(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function NI(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function uE(Q,A){let I=nt[A];I===void 0&&(I=new Int32Array(A),nt[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function tG(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function aG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(UI(I,A))return;Q.uniform2fv(this.addr,A),NI(I,A)}}function sG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(UI(I,A))return;Q.uniform3fv(this.addr,A),NI(I,A)}}function DG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(UI(I,A))return;Q.uniform4fv(this.addr,A),NI(I,A)}}function nG(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(UI(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),NI(I,A)}else{if(UI(I,g))return;ct.set(g),Q.uniformMatrix2fv(this.addr,!1,ct),NI(I,g)}}function hG(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(UI(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),NI(I,A)}else{if(UI(I,g))return;rt.set(g),Q.uniformMatrix3fv(this.addr,!1,rt),NI(I,g)}}function rG(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(UI(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),NI(I,A)}else{if(UI(I,g))return;ht.set(g),Q.uniformMatrix4fv(this.addr,!1,ht),NI(I,g)}}function cG(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function GG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(UI(I,A))return;Q.uniform2iv(this.addr,A),NI(I,A)}}function wG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(UI(I,A))return;Q.uniform3iv(this.addr,A),NI(I,A)}}function SG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(UI(I,A))return;Q.uniform4iv(this.addr,A),NI(I,A)}}function lG(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function kG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(UI(I,A))return;Q.uniform2uiv(this.addr,A),NI(I,A)}}function yG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(UI(I,A))return;Q.uniform3uiv(this.addr,A),NI(I,A)}}function MG(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(UI(I,A))return;Q.uniform4uiv(this.addr,A),NI(I,A)}}function KG(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||Ds,C)}function UG(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||hs,C)}function NG(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||rs,C)}function JG(Q,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(Q.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ns,C)}function RG(Q){switch(Q){case 5126:return tG;case 35664:return aG;case 35665:return sG;case 35666:return DG;case 35674:return nG;case 35675:return hG;case 35676:return rG;case 5124:case 35670:return cG;case 35667:case 35671:return GG;case 35668:case 35672:return wG;case 35669:case 35673:return SG;case 5125:return lG;case 36294:return kG;case 36295:return yG;case 36296:return MG;case 35678:case 36198:case 36298:case 36306:case 35682:return KG;case 35679:case 36299:case 36307:return UG;case 35680:case 36300:case 36308:case 36293:return NG;case 36289:case 36303:case 36311:case 36292:return JG}}function FG(Q,A){Q.uniform1fv(this.addr,A)}function qG(Q,A){const I=PB(A,this.size,2);Q.uniform2fv(this.addr,I)}function dG(Q,A){const I=PB(A,this.size,3);Q.uniform3fv(this.addr,I)}function pG(Q,A){const I=PB(A,this.size,4);Q.uniform4fv(this.addr,I)}function fG(Q,A){const I=PB(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function YG(Q,A){const I=PB(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function uG(Q,A){const I=PB(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function LG(Q,A){Q.uniform1iv(this.addr,A)}function HG(Q,A){Q.uniform2iv(this.addr,A)}function mG(Q,A){Q.uniform3iv(this.addr,A)}function bG(Q,A){Q.uniform4iv(this.addr,A)}function TG(Q,A){Q.uniform1uiv(this.addr,A)}function xG(Q,A){Q.uniform2uiv(this.addr,A)}function OG(Q,A){Q.uniform3uiv(this.addr,A)}function ZG(Q,A){Q.uniform4uiv(this.addr,A)}function WG(Q,A,I){const g=this.cache,C=A.length,B=uE(I,C);UI(g,B)||(Q.uniform1iv(this.addr,B),NI(g,B));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||Ds,B[E])}function PG(Q,A,I){const g=this.cache,C=A.length,B=uE(I,C);UI(g,B)||(Q.uniform1iv(this.addr,B),NI(g,B));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||hs,B[E])}function vG(Q,A,I){const g=this.cache,C=A.length,B=uE(I,C);UI(g,B)||(Q.uniform1iv(this.addr,B),NI(g,B));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||rs,B[E])}function jG(Q,A,I){const g=this.cache,C=A.length,B=uE(I,C);UI(g,B)||(Q.uniform1iv(this.addr,B),NI(g,B));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||ns,B[E])}function VG(Q){switch(Q){case 5126:return FG;case 35664:return qG;case 35665:return dG;case 35666:return pG;case 35674:return fG;case 35675:return YG;case 35676:return uG;case 5124:case 35670:return LG;case 35667:case 35671:return HG;case 35668:case 35672:return mG;case 35669:case 35673:return bG;case 5125:return TG;case 36294:return xG;case 36295:return OG;case 36296:return ZG;case 35678:case 36198:case 36298:case 36306:case 35682:return WG;case 35679:case 36299:case 36307:return PG;case 35680:case 36300:case 36308:case 36293:return vG;case 36289:case 36303:case 36311:case 36292:return jG}}class _G{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=RG(I.type)}}class XG{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=VG(I.type)}}class zG{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,E=C.length;B!==E;++B){const i=C[B];i.setValue(A,I[i.id],g)}}}const Ri=/(\w+)(\])?(\[|\.)?/g;function Gt(Q,A){Q.seq.push(A),Q.map[A.id]=A}function $G(Q,A,I){const g=Q.name,C=g.length;for(Ri.lastIndex=0;;){const B=Ri.exec(g),E=Ri.lastIndex;let i=B[1];const o=B[2]==="]",e=B[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){Gt(I,e===void 0?new _G(i,Q,A):new XG(i,Q,A));break}else{let a=I.map[i];a===void 0&&(a=new zG(i),Gt(I,a)),I=a}}}class sE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,35718);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),E=A.getUniformLocation(I,B.name);$G(B,E,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,E=I.length;B!==E;++B){const i=I[B],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function wt(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}let Aw=0;function Iw(Q,A){const I=Q.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let E=C;E<B;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function gw(Q){switch(Q){case Mg:return["Linear","( value )"];case VA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",Q),["Linear","( value )"]}}function St(Q,A,I){const g=Q.getShaderParameter(A,35713),C=Q.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const E=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+Iw(Q.getShaderSource(A),E)}else return C}function Cw(Q,A){const I=gw(A);return"vec4 "+Q+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function Bw(Q,A){let I;switch(A){case Cn:I="Linear";break;case Bn:I="Reinhard";break;case Qn:I="OptimizedCineon";break;case ja:I="ACESFilmic";break;case En:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Qw(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.tangentSpaceNormalMap||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(eQ).join(`
`)}function Ew(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function iw(Q,A){const I={},g=Q.getProgramParameter(A,35721);for(let C=0;C<g;C++){const B=Q.getActiveAttrib(A,C),E=B.name;let i=1;B.type===35674&&(i=2),B.type===35675&&(i=3),B.type===35676&&(i=4),I[E]={type:B.type,location:Q.getAttribLocation(A,E),locationSize:i}}return I}function eQ(Q){return Q!==""}function lt(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function kt(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function $i(Q){return Q.replace(ow,ew)}function ew(Q,A){const I=dA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return $i(I)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yt(Q){return Q.replace(tw,aw)}function aw(Q,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function Mt(Q){let A="precision "+Q.precision+` float;
precision `+Q.precision+" int;";return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function sw(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===Oa?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===Za?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===oQ&&(A="SHADOWMAP_TYPE_VSM"),A}function Dw(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case vC:case JB:A="ENVMAP_TYPE_CUBE";break;case dE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function nw(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case JB:A="ENVMAP_MODE_REFRACTION";break}return A}function hw(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case va:A="ENVMAP_BLENDING_MULTIPLY";break;case In:A="ENVMAP_BLENDING_MIX";break;case gn:A="ENVMAP_BLENDING_ADD";break}return A}function rw(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function cw(Q,A,I,g){const C=Q.getContext(),B=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=sw(I),e=Dw(I),t=nw(I),a=hw(I),s=rw(I),D=I.isWebGL2?"":Qw(I),G=Ew(B),n=C.createProgram();let h,r,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=[G].filter(eQ).join(`
`),h.length>0&&(h+=`
`),r=[D,G].filter(eQ).join(`
`),r.length>0&&(r+=`
`)):(h=[Mt(I),"#define SHADER_NAME "+I.shaderName,G,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eQ).join(`
`),r=[D,Mt(I),"#define SHADER_NAME "+I.shaderName,G,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==xg?"#define TONE_MAPPING":"",I.toneMapping!==xg?dA.tonemapping_pars_fragment:"",I.toneMapping!==xg?Bw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",dA.encodings_pars_fragment,Cw("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(eQ).join(`
`)),E=$i(E),E=lt(E,I),E=kt(E,I),i=$i(i),i=lt(i,I),i=kt(i,I),E=yt(E),i=yt(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,r=["#define varying in",I.glslVersion===ve?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ve?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const c=l+h+E,S=l+r+i,y=wt(C,35633,c),K=wt(C,35632,S);if(C.attachShader(n,y),C.attachShader(n,K),I.index0AttributeName!==void 0?C.bindAttribLocation(n,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(n,0,"position"),C.linkProgram(n),Q.debug.checkShaderErrors){const M=C.getProgramInfoLog(n).trim(),J=C.getShaderInfoLog(y).trim(),u=C.getShaderInfoLog(K).trim();let Y=!0,p=!0;if(C.getProgramParameter(n,35714)===!1){Y=!1;const m=St(C,y,"vertex"),T=St(C,K,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(n,35715)+`

Program Info Log: `+M+`
`+m+`
`+T)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(J===""||u==="")&&(p=!1);p&&(this.diagnostics={runnable:Y,programLog:M,vertexShader:{log:J,prefix:h},fragmentShader:{log:u,prefix:r}})}C.deleteShader(y),C.deleteShader(K);let F;this.getUniforms=function(){return F===void 0&&(F=new sE(C,n)),F};let k;return this.getAttributes=function(){return k===void 0&&(k=iw(C,n)),k},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(n),this.program=void 0},this.name=I.shaderName,this.id=Aw++,this.cacheKey=A,this.usedTimes=1,this.program=n,this.vertexShader=y,this.fragmentShader=K,this}let Gw=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(B)===!1&&(E.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Sw(A),I.set(A,g)),g}}class Sw{constructor(A){this.id=Gw++,this.code=A,this.usedTimes=0}}function lw(Q,A,I,g,C,B,E){const i=new wo,o=new ww,e=[],t=C.isWebGL2,a=C.logarithmicDepthBuffer,s=C.vertexTextures;let D=C.precision;const G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function n(k,M,J,u,Y){const p=u.fog,m=Y.geometry,T=k.isMeshStandardMaterial?u.environment:null,IA=(k.isMeshStandardMaterial?I:A).get(k.envMap||T),AA=IA&&IA.mapping===dE?IA.image.height:null,H=G[k.type];k.precision!==null&&(D=C.getMaxPrecision(k.precision),D!==k.precision&&console.warn("THREE.WebGLProgram.getParameters:",k.precision,"not supported, using",D,"instead."));const CA=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,gA=CA!==void 0?CA.length:0;let z=0;m.morphAttributes.position!==void 0&&(z=1),m.morphAttributes.normal!==void 0&&(z=2),m.morphAttributes.color!==void 0&&(z=3);let v,BA,eA,W;if(H){const qA=Hg[H];v=qA.vertexShader,BA=qA.fragmentShader}else v=k.vertexShader,BA=k.fragmentShader,o.update(k),eA=o.getVertexShaderID(k),W=o.getFragmentShaderID(k);const V=Q.getRenderTarget(),QA=k.alphaTest>0,cA=k.clearcoat>0,rA=k.iridescence>0;return{isWebGL2:t,shaderID:H,shaderName:k.type,vertexShader:v,fragmentShader:BA,defines:k.defines,customVertexShaderID:eA,customFragmentShaderID:W,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:D,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:s,outputEncoding:V===null?Q.outputEncoding:V.isXRRenderTarget===!0?V.texture.encoding:Mg,map:!!k.map,matcap:!!k.matcap,envMap:!!IA,envMapMode:IA&&IA.mapping,envMapCubeUVHeight:AA,lightMap:!!k.lightMap,aoMap:!!k.aoMap,emissiveMap:!!k.emissiveMap,bumpMap:!!k.bumpMap,normalMap:!!k.normalMap,objectSpaceNormalMap:k.normalMapType===Nn,tangentSpaceNormalMap:k.normalMapType===$a,decodeVideoTexture:!!k.map&&k.map.isVideoTexture===!0&&k.map.encoding===VA,clearcoat:cA,clearcoatMap:cA&&!!k.clearcoatMap,clearcoatRoughnessMap:cA&&!!k.clearcoatRoughnessMap,clearcoatNormalMap:cA&&!!k.clearcoatNormalMap,iridescence:rA,iridescenceMap:rA&&!!k.iridescenceMap,iridescenceThicknessMap:rA&&!!k.iridescenceThicknessMap,displacementMap:!!k.displacementMap,roughnessMap:!!k.roughnessMap,metalnessMap:!!k.metalnessMap,specularMap:!!k.specularMap,specularIntensityMap:!!k.specularIntensityMap,specularColorMap:!!k.specularColorMap,opaque:k.transparent===!1&&k.blending===yB,alphaMap:!!k.alphaMap,alphaTest:QA,gradientMap:!!k.gradientMap,sheen:k.sheen>0,sheenColorMap:!!k.sheenColorMap,sheenRoughnessMap:!!k.sheenRoughnessMap,transmission:k.transmission>0,transmissionMap:!!k.transmissionMap,thicknessMap:!!k.thicknessMap,combine:k.combine,vertexTangents:!!k.normalMap&&!!m.attributes.tangent,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,vertexUvs:!!k.map||!!k.bumpMap||!!k.normalMap||!!k.specularMap||!!k.alphaMap||!!k.emissiveMap||!!k.roughnessMap||!!k.metalnessMap||!!k.clearcoatMap||!!k.clearcoatRoughnessMap||!!k.clearcoatNormalMap||!!k.iridescenceMap||!!k.iridescenceThicknessMap||!!k.displacementMap||!!k.transmissionMap||!!k.thicknessMap||!!k.specularIntensityMap||!!k.specularColorMap||!!k.sheenColorMap||!!k.sheenRoughnessMap,uvsVertexOnly:!(k.map||k.bumpMap||k.normalMap||k.specularMap||k.alphaMap||k.emissiveMap||k.roughnessMap||k.metalnessMap||k.clearcoatNormalMap||k.iridescenceMap||k.iridescenceThicknessMap||k.transmission>0||k.transmissionMap||k.thicknessMap||k.specularIntensityMap||k.specularColorMap||k.sheen>0||k.sheenColorMap||k.sheenRoughnessMap)&&!!k.displacementMap,fog:!!p,useFog:k.fog===!0,fogExp2:p&&p.isFogExp2,flatShading:!!k.flatShading,sizeAttenuation:k.sizeAttenuation,logarithmicDepthBuffer:a,skinning:Y.isSkinnedMesh===!0,morphTargets:m.morphAttributes.position!==void 0,morphNormals:m.morphAttributes.normal!==void 0,morphColors:m.morphAttributes.color!==void 0,morphTargetsCount:gA,morphTextureStride:z,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:k.dithering,shadowMapEnabled:Q.shadowMap.enabled&&J.length>0,shadowMapType:Q.shadowMap.type,toneMapping:k.toneMapped?Q.toneMapping:xg,useLegacyLights:Q.useLegacyLights,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===bg,flipSided:k.side===hg,useDepthPacking:!!k.depthPacking,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionDerivatives:k.extensions&&k.extensions.derivatives,extensionFragDepth:k.extensions&&k.extensions.fragDepth,extensionDrawBuffers:k.extensions&&k.extensions.drawBuffers,extensionShaderTextureLOD:k.extensions&&k.extensions.shaderTextureLOD,rendererExtensionFragDepth:t||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:t||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:t||g.has("EXT_shader_texture_lod"),customProgramCacheKey:k.customProgramCacheKey()}}function h(k){const M=[];if(k.shaderID?M.push(k.shaderID):(M.push(k.customVertexShaderID),M.push(k.customFragmentShaderID)),k.defines!==void 0)for(const J in k.defines)M.push(J),M.push(k.defines[J]);return k.isRawShaderMaterial===!1&&(r(M,k),l(M,k),M.push(Q.outputEncoding)),M.push(k.customProgramCacheKey),M.join()}function r(k,M){k.push(M.precision),k.push(M.outputEncoding),k.push(M.envMapMode),k.push(M.envMapCubeUVHeight),k.push(M.combine),k.push(M.vertexUvs),k.push(M.fogExp2),k.push(M.sizeAttenuation),k.push(M.morphTargetsCount),k.push(M.morphAttributeCount),k.push(M.numDirLights),k.push(M.numPointLights),k.push(M.numSpotLights),k.push(M.numSpotLightMaps),k.push(M.numHemiLights),k.push(M.numRectAreaLights),k.push(M.numDirLightShadows),k.push(M.numPointLightShadows),k.push(M.numSpotLightShadows),k.push(M.numSpotLightShadowsWithMaps),k.push(M.shadowMapType),k.push(M.toneMapping),k.push(M.numClippingPlanes),k.push(M.numClipIntersection),k.push(M.depthPacking)}function l(k,M){i.disableAll(),M.isWebGL2&&i.enable(0),M.supportsVertexTextures&&i.enable(1),M.instancing&&i.enable(2),M.instancingColor&&i.enable(3),M.map&&i.enable(4),M.matcap&&i.enable(5),M.envMap&&i.enable(6),M.lightMap&&i.enable(7),M.aoMap&&i.enable(8),M.emissiveMap&&i.enable(9),M.bumpMap&&i.enable(10),M.normalMap&&i.enable(11),M.objectSpaceNormalMap&&i.enable(12),M.tangentSpaceNormalMap&&i.enable(13),M.clearcoat&&i.enable(14),M.clearcoatMap&&i.enable(15),M.clearcoatRoughnessMap&&i.enable(16),M.clearcoatNormalMap&&i.enable(17),M.iridescence&&i.enable(18),M.iridescenceMap&&i.enable(19),M.iridescenceThicknessMap&&i.enable(20),M.displacementMap&&i.enable(21),M.specularMap&&i.enable(22),M.roughnessMap&&i.enable(23),M.metalnessMap&&i.enable(24),M.gradientMap&&i.enable(25),M.alphaMap&&i.enable(26),M.alphaTest&&i.enable(27),M.vertexColors&&i.enable(28),M.vertexAlphas&&i.enable(29),M.vertexUvs&&i.enable(30),M.vertexTangents&&i.enable(31),M.uvsVertexOnly&&i.enable(32),k.push(i.mask),i.disableAll(),M.fog&&i.enable(0),M.useFog&&i.enable(1),M.flatShading&&i.enable(2),M.logarithmicDepthBuffer&&i.enable(3),M.skinning&&i.enable(4),M.morphTargets&&i.enable(5),M.morphNormals&&i.enable(6),M.morphColors&&i.enable(7),M.premultipliedAlpha&&i.enable(8),M.shadowMapEnabled&&i.enable(9),M.useLegacyLights&&i.enable(10),M.doubleSided&&i.enable(11),M.flipSided&&i.enable(12),M.useDepthPacking&&i.enable(13),M.dithering&&i.enable(14),M.specularIntensityMap&&i.enable(15),M.specularColorMap&&i.enable(16),M.transmission&&i.enable(17),M.transmissionMap&&i.enable(18),M.thicknessMap&&i.enable(19),M.sheen&&i.enable(20),M.sheenColorMap&&i.enable(21),M.sheenRoughnessMap&&i.enable(22),M.decodeVideoTexture&&i.enable(23),M.opaque&&i.enable(24),k.push(i.mask)}function c(k){const M=G[k.type];let J;if(M){const u=Hg[M];J=as.clone(u.uniforms)}else J=k.uniforms;return J}function S(k,M){let J;for(let u=0,Y=e.length;u<Y;u++){const p=e[u];if(p.cacheKey===M){J=p,++J.usedTimes;break}}return J===void 0&&(J=new cw(Q,M,k,B),e.push(J)),J}function y(k){if(--k.usedTimes===0){const M=e.indexOf(k);e[M]=e[e.length-1],e.pop(),k.destroy()}}function K(k){o.remove(k)}function F(){o.dispose()}return{getParameters:n,getProgramCacheKey:h,getUniforms:c,acquireProgram:S,releaseProgram:y,releaseShaderCache:K,programs:e,dispose:F}}function kw(){let Q=new WeakMap;function A(B){let E=Q.get(B);return E===void 0&&(E={},Q.set(B,E)),E}function I(B){Q.delete(B)}function g(B,E,i){Q.get(B)[E]=i}function C(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function yw(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function Kt(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function Ut(){const Q=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,D,G,n,h){let r=Q[A];return r===void 0?(r={id:a.id,object:a,geometry:s,material:D,groupOrder:G,renderOrder:a.renderOrder,z:n,group:h},Q[A]=r):(r.id=a.id,r.object=a,r.geometry=s,r.material=D,r.groupOrder=G,r.renderOrder=a.renderOrder,r.z=n,r.group=h),A++,r}function i(a,s,D,G,n,h){const r=E(a,s,D,G,n,h);D.transmission>0?g.push(r):D.transparent===!0?C.push(r):I.push(r)}function o(a,s,D,G,n,h){const r=E(a,s,D,G,n,h);D.transmission>0?g.unshift(r):D.transparent===!0?C.unshift(r):I.unshift(r)}function e(a,s){I.length>1&&I.sort(a||yw),g.length>1&&g.sort(s||Kt),C.length>1&&C.sort(s||Kt)}function t(){for(let a=A,s=Q.length;a<s;a++){const D=Q[a];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:i,unshift:o,finish:t,sort:e}}function Mw(){let Q=new WeakMap;function A(g,C){const B=Q.get(g);let E;return B===void 0?(E=new Ut,Q.set(g,[E])):C>=B.length?(E=new Ut,B.push(E)):E=B[C],E}function I(){Q=new WeakMap}return{get:A,dispose:I}}function Kw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new d,color:new FA};break;case"SpotLight":I={position:new d,direction:new d,color:new FA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new d,color:new FA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new d,skyColor:new FA,groundColor:new FA};break;case"RectAreaLight":I={color:new FA,position:new d,halfWidth:new d,halfHeight:new d};break}return Q[A.id]=I,I}}}function Uw(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new JA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let Nw=0;function Jw(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function Rw(Q,A){const I=new Kw,g=Uw(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let t=0;t<9;t++)C.probe.push(new d);const B=new d,E=new uA,i=new uA;function o(t,a){let s=0,D=0,G=0;for(let u=0;u<9;u++)C.probe[u].set(0,0,0);let n=0,h=0,r=0,l=0,c=0,S=0,y=0,K=0,F=0,k=0;t.sort(Jw);const M=a===!0?Math.PI:1;for(let u=0,Y=t.length;u<Y;u++){const p=t[u],m=p.color,T=p.intensity,IA=p.distance,AA=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)s+=m.r*T*M,D+=m.g*T*M,G+=m.b*T*M;else if(p.isLightProbe)for(let H=0;H<9;H++)C.probe[H].addScaledVector(p.sh.coefficients[H],T);else if(p.isDirectionalLight){const H=I.get(p);if(H.color.copy(p.color).multiplyScalar(p.intensity*M),p.castShadow){const CA=p.shadow,gA=g.get(p);gA.shadowBias=CA.bias,gA.shadowNormalBias=CA.normalBias,gA.shadowRadius=CA.radius,gA.shadowMapSize=CA.mapSize,C.directionalShadow[n]=gA,C.directionalShadowMap[n]=AA,C.directionalShadowMatrix[n]=p.shadow.matrix,S++}C.directional[n]=H,n++}else if(p.isSpotLight){const H=I.get(p);H.position.setFromMatrixPosition(p.matrixWorld),H.color.copy(m).multiplyScalar(T*M),H.distance=IA,H.coneCos=Math.cos(p.angle),H.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),H.decay=p.decay,C.spot[r]=H;const CA=p.shadow;if(p.map&&(C.spotLightMap[F]=p.map,F++,CA.updateMatrices(p),p.castShadow&&k++),C.spotLightMatrix[r]=CA.matrix,p.castShadow){const gA=g.get(p);gA.shadowBias=CA.bias,gA.shadowNormalBias=CA.normalBias,gA.shadowRadius=CA.radius,gA.shadowMapSize=CA.mapSize,C.spotShadow[r]=gA,C.spotShadowMap[r]=AA,K++}r++}else if(p.isRectAreaLight){const H=I.get(p);H.color.copy(m).multiplyScalar(T),H.halfWidth.set(p.width*.5,0,0),H.halfHeight.set(0,p.height*.5,0),C.rectArea[l]=H,l++}else if(p.isPointLight){const H=I.get(p);if(H.color.copy(p.color).multiplyScalar(p.intensity*M),H.distance=p.distance,H.decay=p.decay,p.castShadow){const CA=p.shadow,gA=g.get(p);gA.shadowBias=CA.bias,gA.shadowNormalBias=CA.normalBias,gA.shadowRadius=CA.radius,gA.shadowMapSize=CA.mapSize,gA.shadowCameraNear=CA.camera.near,gA.shadowCameraFar=CA.camera.far,C.pointShadow[h]=gA,C.pointShadowMap[h]=AA,C.pointShadowMatrix[h]=p.shadow.matrix,y++}C.point[h]=H,h++}else if(p.isHemisphereLight){const H=I.get(p);H.skyColor.copy(p.color).multiplyScalar(T*M),H.groundColor.copy(p.groundColor).multiplyScalar(T*M),C.hemi[c]=H,c++}}l>0&&(A.isWebGL2||Q.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=tA.LTC_FLOAT_1,C.rectAreaLTC2=tA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=tA.LTC_HALF_1,C.rectAreaLTC2=tA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=s,C.ambient[1]=D,C.ambient[2]=G;const J=C.hash;(J.directionalLength!==n||J.pointLength!==h||J.spotLength!==r||J.rectAreaLength!==l||J.hemiLength!==c||J.numDirectionalShadows!==S||J.numPointShadows!==y||J.numSpotShadows!==K||J.numSpotMaps!==F)&&(C.directional.length=n,C.spot.length=r,C.rectArea.length=l,C.point.length=h,C.hemi.length=c,C.directionalShadow.length=S,C.directionalShadowMap.length=S,C.pointShadow.length=y,C.pointShadowMap.length=y,C.spotShadow.length=K,C.spotShadowMap.length=K,C.directionalShadowMatrix.length=S,C.pointShadowMatrix.length=y,C.spotLightMatrix.length=K+F-k,C.spotLightMap.length=F,C.numSpotLightShadowsWithMaps=k,J.directionalLength=n,J.pointLength=h,J.spotLength=r,J.rectAreaLength=l,J.hemiLength=c,J.numDirectionalShadows=S,J.numPointShadows=y,J.numSpotShadows=K,J.numSpotMaps=F,C.version=Nw++)}function e(t,a){let s=0,D=0,G=0,n=0,h=0;const r=a.matrixWorldInverse;for(let l=0,c=t.length;l<c;l++){const S=t[l];if(S.isDirectionalLight){const y=C.directional[s];y.direction.setFromMatrixPosition(S.matrixWorld),B.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(B),y.direction.transformDirection(r),s++}else if(S.isSpotLight){const y=C.spot[G];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(r),y.direction.setFromMatrixPosition(S.matrixWorld),B.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(B),y.direction.transformDirection(r),G++}else if(S.isRectAreaLight){const y=C.rectArea[n];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(r),i.identity(),E.copy(S.matrixWorld),E.premultiply(r),i.extractRotation(E),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(i),y.halfHeight.applyMatrix4(i),n++}else if(S.isPointLight){const y=C.point[D];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(r),D++}else if(S.isHemisphereLight){const y=C.hemi[h];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(r),h++}}}return{setup:o,setupView:e,state:C}}function Nt(Q,A){const I=new Rw(Q,A),g=[],C=[];function B(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function e(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:e,pushLight:E,pushShadow:i}}function Fw(Q,A){let I=new WeakMap;function g(B,E=0){const i=I.get(B);let o;return i===void 0?(o=new Nt(Q,A),I.set(B,[o])):E>=i.length?(o=new Nt(Q,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class qw extends Og{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kn,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class dw extends Og{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new d,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
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
}`;function Yw(Q,A,I){let g=new lo;const C=new JA,B=new JA,E=new EI,i=new qw({depthPacking:Un}),o=new dw,e={},t=I.maxTextureSize,a={[QC]:hg,[hg]:QC,[bg]:bg},s=new Zg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new JA},radius:{value:4}},vertexShader:pw,fragmentShader:fw}),D=s.clone();D.defines.HORIZONTAL_PASS=1;const G=new Bg;G.setAttribute("position",new xI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const n=new gg(G,s),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa,this.render=function(S,y,K){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||S.length===0)return;const F=Q.getRenderTarget(),k=Q.getActiveCubeFace(),M=Q.getActiveMipmapLevel(),J=Q.state;J.setBlending(SC),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);for(let u=0,Y=S.length;u<Y;u++){const p=S[u],m=p.shadow;if(m===void 0){console.warn("THREE.WebGLShadowMap:",p,"has no shadow.");continue}if(m.autoUpdate===!1&&m.needsUpdate===!1)continue;C.copy(m.mapSize);const T=m.getFrameExtents();if(C.multiply(T),B.copy(m.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(B.x=Math.floor(t/T.x),C.x=B.x*T.x,m.mapSize.x=B.x),C.y>t&&(B.y=Math.floor(t/T.y),C.y=B.y*T.y,m.mapSize.y=B.y)),m.map===null){const AA=this.type!==oQ?{minFilter:uI,magFilter:uI}:{};m.map=new yC(C.x,C.y,AA),m.map.texture.name=p.name+".shadowMap",m.camera.updateProjectionMatrix()}Q.setRenderTarget(m.map),Q.clear();const IA=m.getViewportCount();for(let AA=0;AA<IA;AA++){const H=m.getViewport(AA);E.set(B.x*H.x,B.y*H.y,B.x*H.z,B.y*H.w),J.viewport(E),m.updateMatrices(p,AA),g=m.getFrustum(),c(y,K,m.camera,p,this.type)}m.isPointLightShadow!==!0&&this.type===oQ&&r(m,K),m.needsUpdate=!1}h.needsUpdate=!1,Q.setRenderTarget(F,k,M)};function r(S,y){const K=A.update(n);s.defines.VSM_SAMPLES!==S.blurSamples&&(s.defines.VSM_SAMPLES=S.blurSamples,D.defines.VSM_SAMPLES=S.blurSamples,s.needsUpdate=!0,D.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yC(C.x,C.y)),s.uniforms.shadow_pass.value=S.map.texture,s.uniforms.resolution.value=S.mapSize,s.uniforms.radius.value=S.radius,Q.setRenderTarget(S.mapPass),Q.clear(),Q.renderBufferDirect(y,null,K,s,n,null),D.uniforms.shadow_pass.value=S.mapPass.texture,D.uniforms.resolution.value=S.mapSize,D.uniforms.radius.value=S.radius,Q.setRenderTarget(S.map),Q.clear(),Q.renderBufferDirect(y,null,K,D,n,null)}function l(S,y,K,F,k,M){let J=null;const u=K.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(u!==void 0)J=u;else if(J=K.isPointLight===!0?o:i,Q.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const Y=J.uuid,p=y.uuid;let m=e[Y];m===void 0&&(m={},e[Y]=m);let T=m[p];T===void 0&&(T=J.clone(),m[p]=T),J=T}return J.visible=y.visible,J.wireframe=y.wireframe,M===oQ?J.side=y.shadowSide!==null?y.shadowSide:y.side:J.side=y.shadowSide!==null?y.shadowSide:a[y.side],J.alphaMap=y.alphaMap,J.alphaTest=y.alphaTest,J.map=y.map,J.clipShadows=y.clipShadows,J.clippingPlanes=y.clippingPlanes,J.clipIntersection=y.clipIntersection,J.displacementMap=y.displacementMap,J.displacementScale=y.displacementScale,J.displacementBias=y.displacementBias,J.wireframeLinewidth=y.wireframeLinewidth,J.linewidth=y.linewidth,K.isPointLight===!0&&J.isMeshDistanceMaterial===!0&&(J.referencePosition.setFromMatrixPosition(K.matrixWorld),J.nearDistance=F,J.farDistance=k),J}function c(S,y,K,F,k){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&k===oQ)&&(!S.frustumCulled||g.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld);const u=A.update(S),Y=S.material;if(Array.isArray(Y)){const p=u.groups;for(let m=0,T=p.length;m<T;m++){const IA=p[m],AA=Y[IA.materialIndex];if(AA&&AA.visible){const H=l(S,AA,F,K.near,K.far,k);Q.renderBufferDirect(K,null,u,H,S,IA)}}}else if(Y.visible){const p=l(S,Y,F,K.near,K.far,k);Q.renderBufferDirect(K,null,u,p,S,null)}}const J=S.children;for(let u=0,Y=J.length;u<Y;u++)c(J[u],y,K,F,k)}}function uw(Q,A,I){const g=I.isWebGL2;function C(){let L=!1;const X=new EI;let EA=null;const nA=new EI(0,0,0,0);return{setMask:function(GA){EA!==GA&&!L&&(Q.colorMask(GA,GA,GA,GA),EA=GA)},setLocked:function(GA){L=GA},setClear:function(GA,tI,pI,VI,fg){fg===!0&&(GA*=VI,tI*=VI,pI*=VI),X.set(GA,tI,pI,VI),nA.equals(X)===!1&&(Q.clearColor(GA,tI,pI,VI),nA.copy(X))},reset:function(){L=!1,EA=null,nA.set(-1,0,0,0)}}}function B(){let L=!1,X=null,EA=null,nA=null;return{setTest:function(GA){GA?QA(2929):cA(2929)},setMask:function(GA){X!==GA&&!L&&(Q.depthMask(GA),X=GA)},setFunc:function(GA){if(EA!==GA){switch(GA){case jD:Q.depthFunc(512);break;case VD:Q.depthFunc(519);break;case _D:Q.depthFunc(513);break;case Pi:Q.depthFunc(515);break;case XD:Q.depthFunc(514);break;case zD:Q.depthFunc(518);break;case $D:Q.depthFunc(516);break;case An:Q.depthFunc(517);break;default:Q.depthFunc(515)}EA=GA}},setLocked:function(GA){L=GA},setClear:function(GA){nA!==GA&&(Q.clearDepth(GA),nA=GA)},reset:function(){L=!1,X=null,EA=null,nA=null}}}function E(){let L=!1,X=null,EA=null,nA=null,GA=null,tI=null,pI=null,VI=null,fg=null;return{setTest:function(cI){L||(cI?QA(2960):cA(2960))},setMask:function(cI){X!==cI&&!L&&(Q.stencilMask(cI),X=cI)},setFunc:function(cI,cg,Yg){(EA!==cI||nA!==cg||GA!==Yg)&&(Q.stencilFunc(cI,cg,Yg),EA=cI,nA=cg,GA=Yg)},setOp:function(cI,cg,Yg){(tI!==cI||pI!==cg||VI!==Yg)&&(Q.stencilOp(cI,cg,Yg),tI=cI,pI=cg,VI=Yg)},setLocked:function(cI){L=cI},setClear:function(cI){fg!==cI&&(Q.clearStencil(cI),fg=cI)},reset:function(){L=!1,X=null,EA=null,nA=null,GA=null,tI=null,pI=null,VI=null,fg=null}}}const i=new C,o=new B,e=new E,t=new WeakMap,a=new WeakMap;let s={},D={},G=new WeakMap,n=[],h=null,r=!1,l=null,c=null,S=null,y=null,K=null,F=null,k=null,M=!1,J=null,u=null,Y=null,p=null,m=null;const T=Q.getParameter(35661);let IA=!1,AA=0;const H=Q.getParameter(7938);H.indexOf("WebGL")!==-1?(AA=parseFloat(/^WebGL (\d)/.exec(H)[1]),IA=AA>=1):H.indexOf("OpenGL ES")!==-1&&(AA=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),IA=AA>=2);let CA=null,gA={};const z=Q.getParameter(3088),v=Q.getParameter(2978),BA=new EI().fromArray(z),eA=new EI().fromArray(v);function W(L,X,EA){const nA=new Uint8Array(4),GA=Q.createTexture();Q.bindTexture(L,GA),Q.texParameteri(L,10241,9728),Q.texParameteri(L,10240,9728);for(let tI=0;tI<EA;tI++)Q.texImage2D(X+tI,0,6408,1,1,0,6408,5121,nA);return GA}const V={};V[3553]=W(3553,3553,1),V[34067]=W(34067,34069,6),i.setClear(0,0,0,1),o.setClear(1),e.setClear(0),QA(2929),o.setFunc(Pi),qI(!1),dI(he),QA(2884),FI(SC);function QA(L){s[L]!==!0&&(Q.enable(L),s[L]=!0)}function cA(L){s[L]!==!1&&(Q.disable(L),s[L]=!1)}function rA(L,X){return D[L]!==X?(Q.bindFramebuffer(L,X),D[L]=X,g&&(L===36009&&(D[36160]=X),L===36160&&(D[36009]=X)),!0):!1}function NA(L,X){let EA=n,nA=!1;if(L)if(EA=G.get(X),EA===void 0&&(EA=[],G.set(X,EA)),L.isWebGLMultipleRenderTargets){const GA=L.texture;if(EA.length!==GA.length||EA[0]!==36064){for(let tI=0,pI=GA.length;tI<pI;tI++)EA[tI]=36064+tI;EA.length=GA.length,nA=!0}}else EA[0]!==36064&&(EA[0]=36064,nA=!0);else EA[0]!==1029&&(EA[0]=1029,nA=!0);nA&&(I.isWebGL2?Q.drawBuffers(EA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(EA))}function qA(L){return h!==L?(Q.useProgram(L),h=L,!0):!1}const fA={[SB]:32774,[LD]:32778,[HD]:32779};if(g)fA[we]=32775,fA[Se]=32776;else{const L=A.get("EXT_blend_minmax");L!==null&&(fA[we]=L.MIN_EXT,fA[Se]=L.MAX_EXT)}const WA={[mD]:0,[bD]:1,[TD]:768,[Wa]:770,[vD]:776,[WD]:774,[OD]:772,[xD]:769,[Pa]:771,[PD]:775,[ZD]:773};function FI(L,X,EA,nA,GA,tI,pI,VI){if(L===SC){r===!0&&(cA(3042),r=!1);return}if(r===!1&&(QA(3042),r=!0),L!==uD){if(L!==l||VI!==M){if((c!==SB||K!==SB)&&(Q.blendEquation(32774),c=SB,K=SB),VI)switch(L){case yB:Q.blendFuncSeparate(1,771,1,771);break;case re:Q.blendFunc(1,1);break;case ce:Q.blendFuncSeparate(0,769,0,1);break;case Ge:Q.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case yB:Q.blendFuncSeparate(770,771,1,771);break;case re:Q.blendFunc(770,1);break;case ce:Q.blendFuncSeparate(0,769,0,1);break;case Ge:Q.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,y=null,F=null,k=null,l=L,M=VI}return}GA=GA||X,tI=tI||EA,pI=pI||nA,(X!==c||GA!==K)&&(Q.blendEquationSeparate(fA[X],fA[GA]),c=X,K=GA),(EA!==S||nA!==y||tI!==F||pI!==k)&&(Q.blendFuncSeparate(WA[EA],WA[nA],WA[tI],WA[pI]),S=EA,y=nA,F=tI,k=pI),l=L,M=!1}function vI(L,X){L.side===bg?cA(2884):QA(2884);let EA=L.side===hg;X&&(EA=!EA),qI(EA),L.blending===yB&&L.transparent===!1?FI(SC):FI(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),i.setMask(L.colorWrite);const nA=L.stencilWrite;e.setTest(nA),nA&&(e.setMask(L.stencilWriteMask),e.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),e.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),eI(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?QA(32926):cA(32926)}function qI(L){J!==L&&(L?Q.frontFace(2304):Q.frontFace(2305),J=L)}function dI(L){L!==fD?(QA(2884),L!==u&&(L===he?Q.cullFace(1029):L===YD?Q.cullFace(1028):Q.cullFace(1032))):cA(2884),u=L}function aI(L){L!==Y&&(IA&&Q.lineWidth(L),Y=L)}function eI(L,X,EA){L?(QA(32823),(p!==X||m!==EA)&&(Q.polygonOffset(X,EA),p=X,m=EA)):cA(32823)}function Qg(L){L?QA(3089):cA(3089)}function jI(L){L===void 0&&(L=33984+T-1),CA!==L&&(Q.activeTexture(L),CA=L)}function R(L,X,EA){EA===void 0&&(CA===null?EA=33984+T-1:EA=CA);let nA=gA[EA];nA===void 0&&(nA={type:void 0,texture:void 0},gA[EA]=nA),(nA.type!==L||nA.texture!==X)&&(CA!==EA&&(Q.activeTexture(EA),CA=EA),Q.bindTexture(L,X||V[L]),nA.type=L,nA.texture=X)}function U(){const L=gA[CA];L!==void 0&&L.type!==void 0&&(Q.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{Q.compressedTexImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function iA(){try{Q.compressedTexImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oA(){try{Q.texSubImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function sA(){try{Q.texSubImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function MA(){try{Q.compressedTexSubImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{Q.compressedTexSubImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{Q.texStorage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function DA(){try{Q.texStorage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function aA(){try{Q.texImage2D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function SA(){try{Q.texImage3D.apply(Q,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yA(L){BA.equals(L)===!1&&(Q.scissor(L.x,L.y,L.z,L.w),BA.copy(L))}function lA(L){eA.equals(L)===!1&&(Q.viewport(L.x,L.y,L.z,L.w),eA.copy(L))}function bA(L,X){let EA=a.get(X);EA===void 0&&(EA=new WeakMap,a.set(X,EA));let nA=EA.get(L);nA===void 0&&(nA=Q.getUniformBlockIndex(X,L.name),EA.set(L,nA))}function PA(L,X){const nA=a.get(X).get(L);t.get(X)!==nA&&(Q.uniformBlockBinding(X,nA,L.__bindingPointIndex),t.set(X,nA))}function CI(){Q.disable(3042),Q.disable(2884),Q.disable(2929),Q.disable(32823),Q.disable(3089),Q.disable(2960),Q.disable(32926),Q.blendEquation(32774),Q.blendFunc(1,0),Q.blendFuncSeparate(1,0,1,0),Q.colorMask(!0,!0,!0,!0),Q.clearColor(0,0,0,0),Q.depthMask(!0),Q.depthFunc(513),Q.clearDepth(1),Q.stencilMask(4294967295),Q.stencilFunc(519,0,4294967295),Q.stencilOp(7680,7680,7680),Q.clearStencil(0),Q.cullFace(1029),Q.frontFace(2305),Q.polygonOffset(0,0),Q.activeTexture(33984),Q.bindFramebuffer(36160,null),g===!0&&(Q.bindFramebuffer(36009,null),Q.bindFramebuffer(36008,null)),Q.useProgram(null),Q.lineWidth(1),Q.scissor(0,0,Q.canvas.width,Q.canvas.height),Q.viewport(0,0,Q.canvas.width,Q.canvas.height),s={},CA=null,gA={},D={},G=new WeakMap,n=[],h=null,r=!1,l=null,c=null,S=null,y=null,K=null,F=null,k=null,M=!1,J=null,u=null,Y=null,p=null,m=null,BA.set(0,0,Q.canvas.width,Q.canvas.height),eA.set(0,0,Q.canvas.width,Q.canvas.height),i.reset(),o.reset(),e.reset()}return{buffers:{color:i,depth:o,stencil:e},enable:QA,disable:cA,bindFramebuffer:rA,drawBuffers:NA,useProgram:qA,setBlending:FI,setMaterial:vI,setFlipSided:qI,setCullFace:dI,setLineWidth:aI,setPolygonOffset:eI,setScissorTest:Qg,activeTexture:jI,bindTexture:R,unbindTexture:U,compressedTexImage2D:_,compressedTexImage3D:iA,texImage2D:aA,texImage3D:SA,updateUBOMapping:bA,uniformBlockBinding:PA,texStorage2D:O,texStorage3D:DA,texSubImage2D:oA,texSubImage3D:sA,compressedTexSubImage2D:MA,compressedTexSubImage3D:q,scissor:yA,viewport:lA,reset:CI}}function Lw(Q,A,I,g,C,B,E){const i=C.isWebGL2,o=C.maxTextures,e=C.maxCubemapSize,t=C.maxTextureSize,a=C.maxSamples,s=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new WeakMap;let n;const h=new WeakMap;let r=!1;try{r=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function l(R,U){return r?new OffscreenCanvas(R,U):GQ("canvas")}function c(R,U,_,iA){let oA=1;if((R.width>iA||R.height>iA)&&(oA=iA/Math.max(R.width,R.height)),oA<1||U===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const sA=U?gs:Math.floor,MA=sA(oA*R.width),q=sA(oA*R.height);n===void 0&&(n=l(MA,q));const O=_?l(MA,q):n;return O.width=MA,O.height=q,O.getContext("2d").drawImage(R,0,0,MA,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+MA+"x"+q+")."),O}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return zi(R.width)&&zi(R.height)}function y(R){return i?!1:R.wrapS!==Cg||R.wrapT!==Cg||R.minFilter!==uI&&R.minFilter!==nI}function K(R,U){return R.generateMipmaps&&U&&R.minFilter!==uI&&R.minFilter!==nI}function F(R){Q.generateMipmap(R)}function k(R,U,_,iA,oA=!1){if(i===!1)return U;if(R!==null){if(Q[R]!==void 0)return Q[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let sA=U;return U===6403&&(_===5126&&(sA=33326),_===5131&&(sA=33325),_===5121&&(sA=33321)),U===33319&&(_===5126&&(sA=33328),_===5131&&(sA=33327),_===5121&&(sA=33323)),U===6408&&(_===5126&&(sA=34836),_===5131&&(sA=34842),_===5121&&(sA=iA===VA&&oA===!1?35907:32856),_===32819&&(sA=32854),_===32820&&(sA=32855)),(sA===33325||sA===33326||sA===33327||sA===33328||sA===34842||sA===34836)&&A.get("EXT_color_buffer_float"),sA}function M(R,U,_){return K(R,_)===!0||R.isFramebufferTexture&&R.minFilter!==uI&&R.minFilter!==nI?Math.log2(Math.max(U.width,U.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?U.mipmaps.length:1}function J(R){return R===uI||R===ji||R===aE?9728:9729}function u(R){const U=R.target;U.removeEventListener("dispose",u),p(U),U.isVideoTexture&&G.delete(U)}function Y(R){const U=R.target;U.removeEventListener("dispose",Y),T(U)}function p(R){const U=g.get(R);if(U.__webglInit===void 0)return;const _=R.source,iA=h.get(_);if(iA){const oA=iA[U.__cacheKey];oA.usedTimes--,oA.usedTimes===0&&m(R),Object.keys(iA).length===0&&h.delete(_)}g.remove(R)}function m(R){const U=g.get(R);Q.deleteTexture(U.__webglTexture);const _=R.source,iA=h.get(_);delete iA[U.__cacheKey],E.memory.textures--}function T(R){const U=R.texture,_=g.get(R),iA=g.get(U);if(iA.__webglTexture!==void 0&&(Q.deleteTexture(iA.__webglTexture),E.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oA=0;oA<6;oA++)Q.deleteFramebuffer(_.__webglFramebuffer[oA]),_.__webglDepthbuffer&&Q.deleteRenderbuffer(_.__webglDepthbuffer[oA]);else{if(Q.deleteFramebuffer(_.__webglFramebuffer),_.__webglDepthbuffer&&Q.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&Q.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let oA=0;oA<_.__webglColorRenderbuffer.length;oA++)_.__webglColorRenderbuffer[oA]&&Q.deleteRenderbuffer(_.__webglColorRenderbuffer[oA]);_.__webglDepthRenderbuffer&&Q.deleteRenderbuffer(_.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oA=0,sA=U.length;oA<sA;oA++){const MA=g.get(U[oA]);MA.__webglTexture&&(Q.deleteTexture(MA.__webglTexture),E.memory.textures--),g.remove(U[oA])}g.remove(U),g.remove(R)}let IA=0;function AA(){IA=0}function H(){const R=IA;return R>=o&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o),IA+=1,R}function CA(R){const U=[];return U.push(R.wrapS),U.push(R.wrapT),U.push(R.wrapR||0),U.push(R.magFilter),U.push(R.minFilter),U.push(R.anisotropy),U.push(R.internalFormat),U.push(R.format),U.push(R.type),U.push(R.generateMipmaps),U.push(R.premultiplyAlpha),U.push(R.flipY),U.push(R.unpackAlignment),U.push(R.encoding),U.join()}function gA(R,U){const _=g.get(R);if(R.isVideoTexture&&Qg(R),R.isRenderTargetTexture===!1&&R.version>0&&_.__version!==R.version){const iA=R.image;if(iA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(iA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{cA(_,R,U);return}}I.bindTexture(3553,_.__webglTexture,33984+U)}function z(R,U){const _=g.get(R);if(R.version>0&&_.__version!==R.version){cA(_,R,U);return}I.bindTexture(35866,_.__webglTexture,33984+U)}function v(R,U){const _=g.get(R);if(R.version>0&&_.__version!==R.version){cA(_,R,U);return}I.bindTexture(32879,_.__webglTexture,33984+U)}function BA(R,U){const _=g.get(R);if(R.version>0&&_.__version!==R.version){rA(_,R,U);return}I.bindTexture(34067,_.__webglTexture,33984+U)}const eA={[RB]:10497,[Cg]:33071,[wE]:33648},W={[uI]:9728,[ji]:9984,[aE]:9986,[nI]:9729,[_a]:9985,[kC]:9987};function V(R,U,_){if(_?(Q.texParameteri(R,10242,eA[U.wrapS]),Q.texParameteri(R,10243,eA[U.wrapT]),(R===32879||R===35866)&&Q.texParameteri(R,32882,eA[U.wrapR]),Q.texParameteri(R,10240,W[U.magFilter]),Q.texParameteri(R,10241,W[U.minFilter])):(Q.texParameteri(R,10242,33071),Q.texParameteri(R,10243,33071),(R===32879||R===35866)&&Q.texParameteri(R,32882,33071),(U.wrapS!==Cg||U.wrapT!==Cg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),Q.texParameteri(R,10240,J(U.magFilter)),Q.texParameteri(R,10241,J(U.minFilter)),U.minFilter!==uI&&U.minFilter!==nI&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const iA=A.get("EXT_texture_filter_anisotropic");if(U.magFilter===uI||U.minFilter!==aE&&U.minFilter!==kC||U.type===sg&&A.has("OES_texture_float_linear")===!1||i===!1&&U.type===dg&&A.has("OES_texture_half_float_linear")===!1)return;(U.anisotropy>1||g.get(U).__currentAnisotropy)&&(Q.texParameterf(R,iA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,C.getMaxAnisotropy())),g.get(U).__currentAnisotropy=U.anisotropy)}}function QA(R,U){let _=!1;R.__webglInit===void 0&&(R.__webglInit=!0,U.addEventListener("dispose",u));const iA=U.source;let oA=h.get(iA);oA===void 0&&(oA={},h.set(iA,oA));const sA=CA(U);if(sA!==R.__cacheKey){oA[sA]===void 0&&(oA[sA]={texture:Q.createTexture(),usedTimes:0},E.memory.textures++,_=!0),oA[sA].usedTimes++;const MA=oA[R.__cacheKey];MA!==void 0&&(oA[R.__cacheKey].usedTimes--,MA.usedTimes===0&&m(U)),R.__cacheKey=sA,R.__webglTexture=oA[sA].texture}return _}function cA(R,U,_){let iA=3553;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(iA=35866),U.isData3DTexture&&(iA=32879);const oA=QA(R,U),sA=U.source;I.bindTexture(iA,R.__webglTexture,33984+_);const MA=g.get(sA);if(sA.version!==MA.__version||oA===!0){I.activeTexture(33984+_),Q.pixelStorei(37440,U.flipY),Q.pixelStorei(37441,U.premultiplyAlpha),Q.pixelStorei(3317,U.unpackAlignment),Q.pixelStorei(37443,0);const q=y(U)&&S(U.image)===!1;let O=c(U.image,q,!1,t);O=jI(U,O);const DA=S(O)||i,aA=B.convert(U.format,U.encoding);let SA=B.convert(U.type),yA=k(U.internalFormat,aA,SA,U.encoding,U.isVideoTexture);V(iA,U,DA);let lA;const bA=U.mipmaps,PA=i&&U.isVideoTexture!==!0,CI=MA.__version===void 0||oA===!0,L=M(U,O,DA);if(U.isDepthTexture)yA=6402,i?U.type===sg?yA=36012:U.type===bC?yA=33190:U.type===MB?yA=35056:yA=33189:U.type===sg&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),U.format===ZC&&yA===6402&&U.type!==Xa&&U.type!==bC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),U.type=bC,SA=B.convert(U.type)),U.format===FB&&yA===6402&&(yA=34041,U.type!==MB&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),U.type=MB,SA=B.convert(U.type))),CI&&(PA?I.texStorage2D(3553,1,yA,O.width,O.height):I.texImage2D(3553,0,yA,O.width,O.height,0,aA,SA,null));else if(U.isDataTexture)if(bA.length>0&&DA){PA&&CI&&I.texStorage2D(3553,L,yA,bA[0].width,bA[0].height);for(let X=0,EA=bA.length;X<EA;X++)lA=bA[X],PA?I.texSubImage2D(3553,X,0,0,lA.width,lA.height,aA,SA,lA.data):I.texImage2D(3553,X,yA,lA.width,lA.height,0,aA,SA,lA.data);U.generateMipmaps=!1}else PA?(CI&&I.texStorage2D(3553,L,yA,O.width,O.height),I.texSubImage2D(3553,0,0,0,O.width,O.height,aA,SA,O.data)):I.texImage2D(3553,0,yA,O.width,O.height,0,aA,SA,O.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){PA&&CI&&I.texStorage3D(35866,L,yA,bA[0].width,bA[0].height,O.depth);for(let X=0,EA=bA.length;X<EA;X++)lA=bA[X],U.format!==kg?aA!==null?PA?I.compressedTexSubImage3D(35866,X,0,0,0,lA.width,lA.height,O.depth,aA,lA.data,0,0):I.compressedTexImage3D(35866,X,yA,lA.width,lA.height,O.depth,0,lA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):PA?I.texSubImage3D(35866,X,0,0,0,lA.width,lA.height,O.depth,aA,SA,lA.data):I.texImage3D(35866,X,yA,lA.width,lA.height,O.depth,0,aA,SA,lA.data)}else{PA&&CI&&I.texStorage2D(3553,L,yA,bA[0].width,bA[0].height);for(let X=0,EA=bA.length;X<EA;X++)lA=bA[X],U.format!==kg?aA!==null?PA?I.compressedTexSubImage2D(3553,X,0,0,lA.width,lA.height,aA,lA.data):I.compressedTexImage2D(3553,X,yA,lA.width,lA.height,0,lA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):PA?I.texSubImage2D(3553,X,0,0,lA.width,lA.height,aA,SA,lA.data):I.texImage2D(3553,X,yA,lA.width,lA.height,0,aA,SA,lA.data)}else if(U.isDataArrayTexture)PA?(CI&&I.texStorage3D(35866,L,yA,O.width,O.height,O.depth),I.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,aA,SA,O.data)):I.texImage3D(35866,0,yA,O.width,O.height,O.depth,0,aA,SA,O.data);else if(U.isData3DTexture)PA?(CI&&I.texStorage3D(32879,L,yA,O.width,O.height,O.depth),I.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,aA,SA,O.data)):I.texImage3D(32879,0,yA,O.width,O.height,O.depth,0,aA,SA,O.data);else if(U.isFramebufferTexture){if(CI)if(PA)I.texStorage2D(3553,L,yA,O.width,O.height);else{let X=O.width,EA=O.height;for(let nA=0;nA<L;nA++)I.texImage2D(3553,nA,yA,X,EA,0,aA,SA,null),X>>=1,EA>>=1}}else if(bA.length>0&&DA){PA&&CI&&I.texStorage2D(3553,L,yA,bA[0].width,bA[0].height);for(let X=0,EA=bA.length;X<EA;X++)lA=bA[X],PA?I.texSubImage2D(3553,X,0,0,aA,SA,lA):I.texImage2D(3553,X,yA,aA,SA,lA);U.generateMipmaps=!1}else PA?(CI&&I.texStorage2D(3553,L,yA,O.width,O.height),I.texSubImage2D(3553,0,0,0,aA,SA,O)):I.texImage2D(3553,0,yA,aA,SA,O);K(U,DA)&&F(iA),MA.__version=sA.version,U.onUpdate&&U.onUpdate(U)}R.__version=U.version}function rA(R,U,_){if(U.image.length!==6)return;const iA=QA(R,U),oA=U.source;I.bindTexture(34067,R.__webglTexture,33984+_);const sA=g.get(oA);if(oA.version!==sA.__version||iA===!0){I.activeTexture(33984+_),Q.pixelStorei(37440,U.flipY),Q.pixelStorei(37441,U.premultiplyAlpha),Q.pixelStorei(3317,U.unpackAlignment),Q.pixelStorei(37443,0);const MA=U.isCompressedTexture||U.image[0].isCompressedTexture,q=U.image[0]&&U.image[0].isDataTexture,O=[];for(let X=0;X<6;X++)!MA&&!q?O[X]=c(U.image[X],!1,!0,e):O[X]=q?U.image[X].image:U.image[X],O[X]=jI(U,O[X]);const DA=O[0],aA=S(DA)||i,SA=B.convert(U.format,U.encoding),yA=B.convert(U.type),lA=k(U.internalFormat,SA,yA,U.encoding),bA=i&&U.isVideoTexture!==!0,PA=sA.__version===void 0||iA===!0;let CI=M(U,DA,aA);V(34067,U,aA);let L;if(MA){bA&&PA&&I.texStorage2D(34067,CI,lA,DA.width,DA.height);for(let X=0;X<6;X++){L=O[X].mipmaps;for(let EA=0;EA<L.length;EA++){const nA=L[EA];U.format!==kg?SA!==null?bA?I.compressedTexSubImage2D(34069+X,EA,0,0,nA.width,nA.height,SA,nA.data):I.compressedTexImage2D(34069+X,EA,lA,nA.width,nA.height,0,nA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):bA?I.texSubImage2D(34069+X,EA,0,0,nA.width,nA.height,SA,yA,nA.data):I.texImage2D(34069+X,EA,lA,nA.width,nA.height,0,SA,yA,nA.data)}}}else{L=U.mipmaps,bA&&PA&&(L.length>0&&CI++,I.texStorage2D(34067,CI,lA,O[0].width,O[0].height));for(let X=0;X<6;X++)if(q){bA?I.texSubImage2D(34069+X,0,0,0,O[X].width,O[X].height,SA,yA,O[X].data):I.texImage2D(34069+X,0,lA,O[X].width,O[X].height,0,SA,yA,O[X].data);for(let EA=0;EA<L.length;EA++){const GA=L[EA].image[X].image;bA?I.texSubImage2D(34069+X,EA+1,0,0,GA.width,GA.height,SA,yA,GA.data):I.texImage2D(34069+X,EA+1,lA,GA.width,GA.height,0,SA,yA,GA.data)}}else{bA?I.texSubImage2D(34069+X,0,0,0,SA,yA,O[X]):I.texImage2D(34069+X,0,lA,SA,yA,O[X]);for(let EA=0;EA<L.length;EA++){const nA=L[EA];bA?I.texSubImage2D(34069+X,EA+1,0,0,SA,yA,nA.image[X]):I.texImage2D(34069+X,EA+1,lA,SA,yA,nA.image[X])}}}K(U,aA)&&F(34067),sA.__version=oA.version,U.onUpdate&&U.onUpdate(U)}R.__version=U.version}function NA(R,U,_,iA,oA){const sA=B.convert(_.format,_.encoding),MA=B.convert(_.type),q=k(_.internalFormat,sA,MA,_.encoding);g.get(U).__hasExternalTextures||(oA===32879||oA===35866?I.texImage3D(oA,0,q,U.width,U.height,U.depth,0,sA,MA,null):I.texImage2D(oA,0,q,U.width,U.height,0,sA,MA,null)),I.bindFramebuffer(36160,R),eI(U)?s.framebufferTexture2DMultisampleEXT(36160,iA,oA,g.get(_).__webglTexture,0,aI(U)):(oA===3553||oA>=34069&&oA<=34074)&&Q.framebufferTexture2D(36160,iA,oA,g.get(_).__webglTexture,0),I.bindFramebuffer(36160,null)}function qA(R,U,_){if(Q.bindRenderbuffer(36161,R),U.depthBuffer&&!U.stencilBuffer){let iA=33189;if(_||eI(U)){const oA=U.depthTexture;oA&&oA.isDepthTexture&&(oA.type===sg?iA=36012:oA.type===bC&&(iA=33190));const sA=aI(U);eI(U)?s.renderbufferStorageMultisampleEXT(36161,sA,iA,U.width,U.height):Q.renderbufferStorageMultisample(36161,sA,iA,U.width,U.height)}else Q.renderbufferStorage(36161,iA,U.width,U.height);Q.framebufferRenderbuffer(36160,36096,36161,R)}else if(U.depthBuffer&&U.stencilBuffer){const iA=aI(U);_&&eI(U)===!1?Q.renderbufferStorageMultisample(36161,iA,35056,U.width,U.height):eI(U)?s.renderbufferStorageMultisampleEXT(36161,iA,35056,U.width,U.height):Q.renderbufferStorage(36161,34041,U.width,U.height),Q.framebufferRenderbuffer(36160,33306,36161,R)}else{const iA=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let oA=0;oA<iA.length;oA++){const sA=iA[oA],MA=B.convert(sA.format,sA.encoding),q=B.convert(sA.type),O=k(sA.internalFormat,MA,q,sA.encoding),DA=aI(U);_&&eI(U)===!1?Q.renderbufferStorageMultisample(36161,DA,O,U.width,U.height):eI(U)?s.renderbufferStorageMultisampleEXT(36161,DA,O,U.width,U.height):Q.renderbufferStorage(36161,O,U.width,U.height)}}Q.bindRenderbuffer(36161,null)}function fA(R,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(36160,R),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),gA(U.depthTexture,0);const iA=g.get(U.depthTexture).__webglTexture,oA=aI(U);if(U.depthTexture.format===ZC)eI(U)?s.framebufferTexture2DMultisampleEXT(36160,36096,3553,iA,0,oA):Q.framebufferTexture2D(36160,36096,3553,iA,0);else if(U.depthTexture.format===FB)eI(U)?s.framebufferTexture2DMultisampleEXT(36160,33306,3553,iA,0,oA):Q.framebufferTexture2D(36160,33306,3553,iA,0);else throw new Error("Unknown depthTexture format")}function WA(R){const U=g.get(R),_=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!U.__autoAllocateDepthBuffer){if(_)throw new Error("target.depthTexture not supported in Cube render targets");fA(U.__webglFramebuffer,R)}else if(_){U.__webglDepthbuffer=[];for(let iA=0;iA<6;iA++)I.bindFramebuffer(36160,U.__webglFramebuffer[iA]),U.__webglDepthbuffer[iA]=Q.createRenderbuffer(),qA(U.__webglDepthbuffer[iA],R,!1)}else I.bindFramebuffer(36160,U.__webglFramebuffer),U.__webglDepthbuffer=Q.createRenderbuffer(),qA(U.__webglDepthbuffer,R,!1);I.bindFramebuffer(36160,null)}function FI(R,U,_){const iA=g.get(R);U!==void 0&&NA(iA.__webglFramebuffer,R,R.texture,36064,3553),_!==void 0&&WA(R)}function vI(R){const U=R.texture,_=g.get(R),iA=g.get(U);R.addEventListener("dispose",Y),R.isWebGLMultipleRenderTargets!==!0&&(iA.__webglTexture===void 0&&(iA.__webglTexture=Q.createTexture()),iA.__version=U.version,E.memory.textures++);const oA=R.isWebGLCubeRenderTarget===!0,sA=R.isWebGLMultipleRenderTargets===!0,MA=S(R)||i;if(oA){_.__webglFramebuffer=[];for(let q=0;q<6;q++)_.__webglFramebuffer[q]=Q.createFramebuffer()}else{if(_.__webglFramebuffer=Q.createFramebuffer(),sA)if(C.drawBuffers){const q=R.texture;for(let O=0,DA=q.length;O<DA;O++){const aA=g.get(q[O]);aA.__webglTexture===void 0&&(aA.__webglTexture=Q.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&R.samples>0&&eI(R)===!1){const q=sA?U:[U];_.__webglMultisampledFramebuffer=Q.createFramebuffer(),_.__webglColorRenderbuffer=[],I.bindFramebuffer(36160,_.__webglMultisampledFramebuffer);for(let O=0;O<q.length;O++){const DA=q[O];_.__webglColorRenderbuffer[O]=Q.createRenderbuffer(),Q.bindRenderbuffer(36161,_.__webglColorRenderbuffer[O]);const aA=B.convert(DA.format,DA.encoding),SA=B.convert(DA.type),yA=k(DA.internalFormat,aA,SA,DA.encoding,R.isXRRenderTarget===!0),lA=aI(R);Q.renderbufferStorageMultisample(36161,lA,yA,R.width,R.height),Q.framebufferRenderbuffer(36160,36064+O,36161,_.__webglColorRenderbuffer[O])}Q.bindRenderbuffer(36161,null),R.depthBuffer&&(_.__webglDepthRenderbuffer=Q.createRenderbuffer(),qA(_.__webglDepthRenderbuffer,R,!0)),I.bindFramebuffer(36160,null)}}if(oA){I.bindTexture(34067,iA.__webglTexture),V(34067,U,MA);for(let q=0;q<6;q++)NA(_.__webglFramebuffer[q],R,U,36064,34069+q);K(U,MA)&&F(34067),I.unbindTexture()}else if(sA){const q=R.texture;for(let O=0,DA=q.length;O<DA;O++){const aA=q[O],SA=g.get(aA);I.bindTexture(3553,SA.__webglTexture),V(3553,aA,MA),NA(_.__webglFramebuffer,R,aA,36064+O,3553),K(aA,MA)&&F(3553)}I.unbindTexture()}else{let q=3553;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(i?q=R.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(q,iA.__webglTexture),V(q,U,MA),NA(_.__webglFramebuffer,R,U,36064,q),K(U,MA)&&F(q),I.unbindTexture()}R.depthBuffer&&WA(R)}function qI(R){const U=S(R)||i,_=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let iA=0,oA=_.length;iA<oA;iA++){const sA=_[iA];if(K(sA,U)){const MA=R.isWebGLCubeRenderTarget?34067:3553,q=g.get(sA).__webglTexture;I.bindTexture(MA,q),F(MA),I.unbindTexture()}}}function dI(R){if(i&&R.samples>0&&eI(R)===!1){const U=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],_=R.width,iA=R.height;let oA=16384;const sA=[],MA=R.stencilBuffer?33306:36096,q=g.get(R),O=R.isWebGLMultipleRenderTargets===!0;if(O)for(let DA=0;DA<U.length;DA++)I.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(36160,36064+DA,36161,null),I.bindFramebuffer(36160,q.__webglFramebuffer),Q.framebufferTexture2D(36009,36064+DA,3553,null,0);I.bindFramebuffer(36008,q.__webglMultisampledFramebuffer),I.bindFramebuffer(36009,q.__webglFramebuffer);for(let DA=0;DA<U.length;DA++){sA.push(36064+DA),R.depthBuffer&&sA.push(MA);const aA=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(aA===!1&&(R.depthBuffer&&(oA|=256),R.stencilBuffer&&(oA|=1024)),O&&Q.framebufferRenderbuffer(36008,36064,36161,q.__webglColorRenderbuffer[DA]),aA===!0&&(Q.invalidateFramebuffer(36008,[MA]),Q.invalidateFramebuffer(36009,[MA])),O){const SA=g.get(U[DA]).__webglTexture;Q.framebufferTexture2D(36009,36064,3553,SA,0)}Q.blitFramebuffer(0,0,_,iA,0,0,_,iA,oA,9728),D&&Q.invalidateFramebuffer(36008,sA)}if(I.bindFramebuffer(36008,null),I.bindFramebuffer(36009,null),O)for(let DA=0;DA<U.length;DA++){I.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),Q.framebufferRenderbuffer(36160,36064+DA,36161,q.__webglColorRenderbuffer[DA]);const aA=g.get(U[DA]).__webglTexture;I.bindFramebuffer(36160,q.__webglFramebuffer),Q.framebufferTexture2D(36009,36064+DA,3553,aA,0)}I.bindFramebuffer(36009,q.__webglMultisampledFramebuffer)}}function aI(R){return Math.min(a,R.samples)}function eI(R){const U=g.get(R);return i&&R.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function Qg(R){const U=E.render.frame;G.get(R)!==U&&(G.set(R,U),R.update())}function jI(R,U){const _=R.encoding,iA=R.format,oA=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Xi||_!==Mg&&(_===VA?i===!1?A.has("EXT_sRGB")===!0&&iA===kg?(R.format=Xi,R.minFilter=nI,R.generateMipmaps=!1):U=Bs.sRGBToLinear(U):(iA!==kg||oA!==jC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",_)),U}this.allocateTextureUnit=H,this.resetTextureUnits=AA,this.setTexture2D=gA,this.setTexture2DArray=z,this.setTexture3D=v,this.setTextureCube=BA,this.rebindTextures=FI,this.setupRenderTarget=vI,this.updateRenderTargetMipmap=qI,this.updateMultisampleRenderTarget=dI,this.setupDepthRenderbuffer=WA,this.setupFrameBufferTexture=NA,this.useMultisampledRTT=eI}function Hw(Q,A,I){const g=I.isWebGL2;function C(B,E=null){let i;if(B===jC)return 5121;if(B===an)return 32819;if(B===sn)return 32820;if(B===on)return 5120;if(B===en)return 5122;if(B===Xa)return 5123;if(B===tn)return 5124;if(B===bC)return 5125;if(B===sg)return 5126;if(B===dg)return g?5131:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(B===Dn)return 6406;if(B===kg)return 6408;if(B===nn)return 6409;if(B===hn)return 6410;if(B===ZC)return 6402;if(B===FB)return 34041;if(B===Xi)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(B===rn)return 6403;if(B===cn)return 36244;if(B===Gn)return 33319;if(B===wn)return 33320;if(B===Sn)return 36249;if(B===Ii||B===gi||B===Ci||B===Bi)if(E===VA)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(B===Ii)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(B===gi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(B===Ci)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(B===Bi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(B===Ii)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(B===gi)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(B===Ci)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(B===Bi)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(B===le||B===ke||B===ye||B===Me)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(B===le)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(B===ke)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(B===ye)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(B===Me)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(B===ln)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(B===Ke||B===Ue)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(B===Ke)return E===VA?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(B===Ue)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(B===Ne||B===Je||B===Re||B===Fe||B===qe||B===de||B===pe||B===fe||B===Ye||B===ue||B===Le||B===He||B===me||B===be)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(B===Ne)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(B===Je)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(B===Re)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(B===Fe)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(B===qe)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(B===de)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(B===pe)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(B===fe)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(B===Ye)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(B===ue)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(B===Le)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(B===He)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(B===me)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(B===be)return E===VA?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(B===Qi)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(B===Qi)return E===VA?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(B===kn||B===Te||B===xe||B===Oe)if(i=A.get("EXT_texture_compression_rgtc"),i!==null){if(B===Qi)return i.COMPRESSED_RED_RGTC1_EXT;if(B===Te)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(B===xe)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(B===Oe)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return B===MB?g?34042:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):Q[B]!==void 0?Q[B]:null}return{convert:C}}class mw extends PI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class xC extends _A{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bw={type:"move"};class Fi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xC,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xC,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new d,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new d),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xC,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new d,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new d),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,B=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const n of A.hand.values()){const h=I.getJointPose(n,g),r=this._getHandJoint(e,n);h!==null&&(r.matrix.fromArray(h.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.jointRadius=h.radius),r.visible=h!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),D=.02,G=.005;e.inputState.pinching&&s>D+G?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=D-G&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(B=I.getPose(A.gripSpace,g),B!==null&&(o.matrix.fromArray(B.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),B.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(B.linearVelocity)):o.hasLinearVelocity=!1,B.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(B.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&B!==null&&(C=B),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(bw)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=B!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new xC;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class Tw extends TI{constructor(A,I,g,C,B,E,i,o,e,t){if(t=t!==void 0?t:ZC,t!==ZC&&t!==FB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===ZC&&(g=bC),g===void 0&&t===FB&&(g=MB),super(null,C,B,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:uI,this.minFilter=o!==void 0?o:uI,this.flipY=!1,this.generateMipmaps=!1}}class xw extends zC{constructor(A,I){super();const g=this;let C=null,B=1,E=null,i="local-floor",o=1,e=null,t=null,a=null,s=null,D=null,G=null;const n=I.getContextAttributes();let h=null,r=null;const l=[],c=[],S=new Set,y=new Map,K=new PI;K.layers.enable(1),K.viewport=new EI;const F=new PI;F.layers.enable(2),F.viewport=new EI;const k=[K,F],M=new mw;M.layers.enable(1),M.layers.enable(2);let J=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(v){let BA=l[v];return BA===void 0&&(BA=new Fi,l[v]=BA),BA.getTargetRaySpace()},this.getControllerGrip=function(v){let BA=l[v];return BA===void 0&&(BA=new Fi,l[v]=BA),BA.getGripSpace()},this.getHand=function(v){let BA=l[v];return BA===void 0&&(BA=new Fi,l[v]=BA),BA.getHandSpace()};function Y(v){const BA=c.indexOf(v.inputSource);if(BA===-1)return;const eA=l[BA];eA!==void 0&&eA.dispatchEvent({type:v.type,data:v.inputSource})}function p(){C.removeEventListener("select",Y),C.removeEventListener("selectstart",Y),C.removeEventListener("selectend",Y),C.removeEventListener("squeeze",Y),C.removeEventListener("squeezestart",Y),C.removeEventListener("squeezeend",Y),C.removeEventListener("end",p),C.removeEventListener("inputsourceschange",m);for(let v=0;v<l.length;v++){const BA=c[v];BA!==null&&(c[v]=null,l[v].disconnect(BA))}J=null,u=null,A.setRenderTarget(h),D=null,s=null,a=null,C=null,r=null,z.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(v){B=v,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(v){i=v,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return e||E},this.setReferenceSpace=function(v){e=v},this.getBaseLayer=function(){return s!==null?s:D},this.getBinding=function(){return a},this.getFrame=function(){return G},this.getSession=function(){return C},this.setSession=async function(v){if(C=v,C!==null){if(h=A.getRenderTarget(),C.addEventListener("select",Y),C.addEventListener("selectstart",Y),C.addEventListener("selectend",Y),C.addEventListener("squeeze",Y),C.addEventListener("squeezestart",Y),C.addEventListener("squeezeend",Y),C.addEventListener("end",p),C.addEventListener("inputsourceschange",m),n.xrCompatible!==!0&&await I.makeXRCompatible(),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const BA={antialias:C.renderState.layers===void 0?n.antialias:!0,alpha:n.alpha,depth:n.depth,stencil:n.stencil,framebufferScaleFactor:B};D=new XRWebGLLayer(C,I,BA),C.updateRenderState({baseLayer:D}),r=new yC(D.framebufferWidth,D.framebufferHeight,{format:kg,type:jC,encoding:A.outputEncoding,stencilBuffer:n.stencil})}else{let BA=null,eA=null,W=null;n.depth&&(W=n.stencil?35056:33190,BA=n.stencil?FB:ZC,eA=n.stencil?MB:bC);const V={colorFormat:32856,depthFormat:W,scaleFactor:B};a=new XRWebGLBinding(C,I),s=a.createProjectionLayer(V),C.updateRenderState({layers:[s]}),r=new yC(s.textureWidth,s.textureHeight,{format:kg,type:jC,depthTexture:new Tw(s.textureWidth,s.textureHeight,eA,void 0,void 0,void 0,void 0,void 0,void 0,BA),stencilBuffer:n.stencil,encoding:A.outputEncoding,samples:n.antialias?4:0});const QA=A.properties.get(r);QA.__ignoreDepthValues=s.ignoreDepthValues}r.isXRRenderTarget=!0,this.setFoveation(o),e=null,E=await C.requestReferenceSpace(i),z.setContext(C),z.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}};function m(v){for(let BA=0;BA<v.removed.length;BA++){const eA=v.removed[BA],W=c.indexOf(eA);W>=0&&(c[W]=null,l[W].disconnect(eA))}for(let BA=0;BA<v.added.length;BA++){const eA=v.added[BA];let W=c.indexOf(eA);if(W===-1){for(let QA=0;QA<l.length;QA++)if(QA>=c.length){c.push(eA),W=QA;break}else if(c[QA]===null){c[QA]=eA,W=QA;break}if(W===-1)break}const V=l[W];V&&V.connect(eA)}}const T=new d,IA=new d;function AA(v,BA,eA){T.setFromMatrixPosition(BA.matrixWorld),IA.setFromMatrixPosition(eA.matrixWorld);const W=T.distanceTo(IA),V=BA.projectionMatrix.elements,QA=eA.projectionMatrix.elements,cA=V[14]/(V[10]-1),rA=V[14]/(V[10]+1),NA=(V[9]+1)/V[5],qA=(V[9]-1)/V[5],fA=(V[8]-1)/V[0],WA=(QA[8]+1)/QA[0],FI=cA*fA,vI=cA*WA,qI=W/(-fA+WA),dI=qI*-fA;BA.matrixWorld.decompose(v.position,v.quaternion,v.scale),v.translateX(dI),v.translateZ(qI),v.matrixWorld.compose(v.position,v.quaternion,v.scale),v.matrixWorldInverse.copy(v.matrixWorld).invert();const aI=cA+qI,eI=rA+qI,Qg=FI-dI,jI=vI+(W-dI),R=NA*rA/eI*aI,U=qA*rA/eI*aI;v.projectionMatrix.makePerspective(Qg,jI,R,U,aI,eI)}function H(v,BA){BA===null?v.matrixWorld.copy(v.matrix):v.matrixWorld.multiplyMatrices(BA.matrixWorld,v.matrix),v.matrixWorldInverse.copy(v.matrixWorld).invert()}this.updateCamera=function(v){if(C===null)return;M.near=F.near=K.near=v.near,M.far=F.far=K.far=v.far,(J!==M.near||u!==M.far)&&(C.updateRenderState({depthNear:M.near,depthFar:M.far}),J=M.near,u=M.far);const BA=v.parent,eA=M.cameras;H(M,BA);for(let V=0;V<eA.length;V++)H(eA[V],BA);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),v.matrix.copy(M.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale);const W=v.children;for(let V=0,QA=W.length;V<QA;V++)W[V].updateMatrixWorld(!0);eA.length===2?AA(M,K,F):M.projectionMatrix.copy(K.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(s===null&&D===null))return o},this.setFoveation=function(v){o=v,s!==null&&(s.fixedFoveation=v),D!==null&&D.fixedFoveation!==void 0&&(D.fixedFoveation=v)},this.getPlanes=function(){return S};let CA=null;function gA(v,BA){if(t=BA.getViewerPose(e||E),G=BA,t!==null){const eA=t.views;D!==null&&(A.setRenderTargetFramebuffer(r,D.framebuffer),A.setRenderTarget(r));let W=!1;eA.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let V=0;V<eA.length;V++){const QA=eA[V];let cA=null;if(D!==null)cA=D.getViewport(QA);else{const NA=a.getViewSubImage(s,QA);cA=NA.viewport,V===0&&(A.setRenderTargetTextures(r,NA.colorTexture,s.ignoreDepthValues?void 0:NA.depthStencilTexture),A.setRenderTarget(r))}let rA=k[V];rA===void 0&&(rA=new PI,rA.layers.enable(V),rA.viewport=new EI,k[V]=rA),rA.matrix.fromArray(QA.transform.matrix),rA.projectionMatrix.fromArray(QA.projectionMatrix),rA.viewport.set(cA.x,cA.y,cA.width,cA.height),V===0&&M.matrix.copy(rA.matrix),W===!0&&M.cameras.push(rA)}}for(let eA=0;eA<l.length;eA++){const W=c[eA],V=l[eA];W!==null&&V!==void 0&&V.update(W,BA,e||E)}if(CA&&CA(v,BA),BA.detectedPlanes){g.dispatchEvent({type:"planesdetected",data:BA.detectedPlanes});let eA=null;for(const W of S)BA.detectedPlanes.has(W)||(eA===null&&(eA=[]),eA.push(W));if(eA!==null)for(const W of eA)S.delete(W),y.delete(W),g.dispatchEvent({type:"planeremoved",data:W});for(const W of BA.detectedPlanes)if(!S.has(W))S.add(W),y.set(W,BA.lastChangedTime),g.dispatchEvent({type:"planeadded",data:W});else{const V=y.get(W);W.lastChangedTime>V&&(y.set(W,W.lastChangedTime),g.dispatchEvent({type:"planechanged",data:W}))}}G=null}const z=new ss;z.setAnimationLoop(gA),this.setAnimationLoop=function(v){CA=v},this.dispose=function(){}}}function Ow(Q,A){function I(n,h){h.color.getRGB(n.fogColor.value,ts(Q)),h.isFog?(n.fogNear.value=h.near,n.fogFar.value=h.far):h.isFogExp2&&(n.fogDensity.value=h.density)}function g(n,h,r,l,c){h.isMeshBasicMaterial||h.isMeshLambertMaterial?C(n,h):h.isMeshToonMaterial?(C(n,h),t(n,h)):h.isMeshPhongMaterial?(C(n,h),e(n,h)):h.isMeshStandardMaterial?(C(n,h),a(n,h),h.isMeshPhysicalMaterial&&s(n,h,c)):h.isMeshMatcapMaterial?(C(n,h),D(n,h)):h.isMeshDepthMaterial?C(n,h):h.isMeshDistanceMaterial?(C(n,h),G(n,h)):h.isMeshNormalMaterial?C(n,h):h.isLineBasicMaterial?(B(n,h),h.isLineDashedMaterial&&E(n,h)):h.isPointsMaterial?i(n,h,r,l):h.isSpriteMaterial?o(n,h):h.isShadowMaterial?(n.color.value.copy(h.color),n.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function C(n,h){n.opacity.value=h.opacity,h.color&&n.diffuse.value.copy(h.color),h.emissive&&n.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.bumpMap&&(n.bumpMap.value=h.bumpMap,n.bumpScale.value=h.bumpScale,h.side===hg&&(n.bumpScale.value*=-1)),h.displacementMap&&(n.displacementMap.value=h.displacementMap,n.displacementScale.value=h.displacementScale,n.displacementBias.value=h.displacementBias),h.emissiveMap&&(n.emissiveMap.value=h.emissiveMap),h.normalMap&&(n.normalMap.value=h.normalMap,n.normalScale.value.copy(h.normalScale),h.side===hg&&n.normalScale.value.negate()),h.specularMap&&(n.specularMap.value=h.specularMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);const r=A.get(h).envMap;if(r&&(n.envMap.value=r,n.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=h.reflectivity,n.ior.value=h.ior,n.refractionRatio.value=h.refractionRatio),h.lightMap){n.lightMap.value=h.lightMap;const S=Q.useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=h.lightMapIntensity*S}h.aoMap&&(n.aoMap.value=h.aoMap,n.aoMapIntensity.value=h.aoMapIntensity);let l;h.map?l=h.map:h.specularMap?l=h.specularMap:h.displacementMap?l=h.displacementMap:h.normalMap?l=h.normalMap:h.bumpMap?l=h.bumpMap:h.roughnessMap?l=h.roughnessMap:h.metalnessMap?l=h.metalnessMap:h.alphaMap?l=h.alphaMap:h.emissiveMap?l=h.emissiveMap:h.clearcoatMap?l=h.clearcoatMap:h.clearcoatNormalMap?l=h.clearcoatNormalMap:h.clearcoatRoughnessMap?l=h.clearcoatRoughnessMap:h.iridescenceMap?l=h.iridescenceMap:h.iridescenceThicknessMap?l=h.iridescenceThicknessMap:h.specularIntensityMap?l=h.specularIntensityMap:h.specularColorMap?l=h.specularColorMap:h.transmissionMap?l=h.transmissionMap:h.thicknessMap?l=h.thicknessMap:h.sheenColorMap?l=h.sheenColorMap:h.sheenRoughnessMap&&(l=h.sheenRoughnessMap),l!==void 0&&(l.isWebGLRenderTarget&&(l=l.texture),l.matrixAutoUpdate===!0&&l.updateMatrix(),n.uvTransform.value.copy(l.matrix));let c;h.aoMap?c=h.aoMap:h.lightMap&&(c=h.lightMap),c!==void 0&&(c.isWebGLRenderTarget&&(c=c.texture),c.matrixAutoUpdate===!0&&c.updateMatrix(),n.uv2Transform.value.copy(c.matrix))}function B(n,h){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity}function E(n,h){n.dashSize.value=h.dashSize,n.totalSize.value=h.dashSize+h.gapSize,n.scale.value=h.scale}function i(n,h,r,l){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity,n.size.value=h.size*r,n.scale.value=l*.5,h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);let c;h.map?c=h.map:h.alphaMap&&(c=h.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),n.uvTransform.value.copy(c.matrix))}function o(n,h){n.diffuse.value.copy(h.color),n.opacity.value=h.opacity,n.rotation.value=h.rotation,h.map&&(n.map.value=h.map),h.alphaMap&&(n.alphaMap.value=h.alphaMap),h.alphaTest>0&&(n.alphaTest.value=h.alphaTest);let r;h.map?r=h.map:h.alphaMap&&(r=h.alphaMap),r!==void 0&&(r.matrixAutoUpdate===!0&&r.updateMatrix(),n.uvTransform.value.copy(r.matrix))}function e(n,h){n.specular.value.copy(h.specular),n.shininess.value=Math.max(h.shininess,1e-4)}function t(n,h){h.gradientMap&&(n.gradientMap.value=h.gradientMap)}function a(n,h){n.roughness.value=h.roughness,n.metalness.value=h.metalness,h.roughnessMap&&(n.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(n.metalnessMap.value=h.metalnessMap),A.get(h).envMap&&(n.envMapIntensity.value=h.envMapIntensity)}function s(n,h,r){n.ior.value=h.ior,h.sheen>0&&(n.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),n.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(n.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(n.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(n.clearcoat.value=h.clearcoat,n.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(n.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(n.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(n.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),n.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===hg&&n.clearcoatNormalScale.value.negate())),h.iridescence>0&&(n.iridescence.value=h.iridescence,n.iridescenceIOR.value=h.iridescenceIOR,n.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],n.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(n.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(n.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(n.transmission.value=h.transmission,n.transmissionSamplerMap.value=r.texture,n.transmissionSamplerSize.value.set(r.width,r.height),h.transmissionMap&&(n.transmissionMap.value=h.transmissionMap),n.thickness.value=h.thickness,h.thicknessMap&&(n.thicknessMap.value=h.thicknessMap),n.attenuationDistance.value=h.attenuationDistance,n.attenuationColor.value.copy(h.attenuationColor)),n.specularIntensity.value=h.specularIntensity,n.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(n.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(n.specularColorMap.value=h.specularColorMap)}function D(n,h){h.matcap&&(n.matcap.value=h.matcap)}function G(n,h){n.referencePosition.value.copy(h.referencePosition),n.nearDistance.value=h.nearDistance,n.farDistance.value=h.farDistance}return{refreshFogUniforms:I,refreshMaterialUniforms:g}}function Zw(Q,A,I,g){let C={},B={},E=[];const i=I.isWebGL2?Q.getParameter(35375):0;function o(l,c){const S=c.program;g.uniformBlockBinding(l,S)}function e(l,c){let S=C[l.id];S===void 0&&(G(l),S=t(l),C[l.id]=S,l.addEventListener("dispose",h));const y=c.program;g.updateUBOMapping(l,y);const K=A.render.frame;B[l.id]!==K&&(s(l),B[l.id]=K)}function t(l){const c=a();l.__bindingPointIndex=c;const S=Q.createBuffer(),y=l.__size,K=l.usage;return Q.bindBuffer(35345,S),Q.bufferData(35345,y,K),Q.bindBuffer(35345,null),Q.bindBufferBase(35345,c,S),S}function a(){for(let l=0;l<i;l++)if(E.indexOf(l)===-1)return E.push(l),l;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function s(l){const c=C[l.id],S=l.uniforms,y=l.__cache;Q.bindBuffer(35345,c);for(let K=0,F=S.length;K<F;K++){const k=S[K];if(D(k,K,y)===!0){const M=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let u=0;for(let Y=0;Y<J.length;Y++){const p=J[Y],m=n(p);typeof p=="number"?(k.__data[0]=p,Q.bufferSubData(35345,M+u,k.__data)):p.isMatrix3?(k.__data[0]=p.elements[0],k.__data[1]=p.elements[1],k.__data[2]=p.elements[2],k.__data[3]=p.elements[0],k.__data[4]=p.elements[3],k.__data[5]=p.elements[4],k.__data[6]=p.elements[5],k.__data[7]=p.elements[0],k.__data[8]=p.elements[6],k.__data[9]=p.elements[7],k.__data[10]=p.elements[8],k.__data[11]=p.elements[0]):(p.toArray(k.__data,u),u+=m.storage/Float32Array.BYTES_PER_ELEMENT)}Q.bufferSubData(35345,M,k.__data)}}Q.bindBuffer(35345,null)}function D(l,c,S){const y=l.value;if(S[c]===void 0){if(typeof y=="number")S[c]=y;else{const K=Array.isArray(y)?y:[y],F=[];for(let k=0;k<K.length;k++)F.push(K[k].clone());S[c]=F}return!0}else if(typeof y=="number"){if(S[c]!==y)return S[c]=y,!0}else{const K=Array.isArray(S[c])?S[c]:[S[c]],F=Array.isArray(y)?y:[y];for(let k=0;k<K.length;k++){const M=K[k];if(M.equals(F[k])===!1)return M.copy(F[k]),!0}}return!1}function G(l){const c=l.uniforms;let S=0;const y=16;let K=0;for(let F=0,k=c.length;F<k;F++){const M=c[F],J={boundary:0,storage:0},u=Array.isArray(M.value)?M.value:[M.value];for(let Y=0,p=u.length;Y<p;Y++){const m=u[Y],T=n(m);J.boundary+=T.boundary,J.storage+=T.storage}if(M.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,F>0){K=S%y;const Y=y-K;K!==0&&Y-J.boundary<0&&(S+=y-K,M.__offset=S)}S+=J.storage}return K=S%y,K>0&&(S+=y-K),l.__size=S,l.__cache={},this}function n(l){const c={boundary:0,storage:0};return typeof l=="number"?(c.boundary=4,c.storage=4):l.isVector2?(c.boundary=8,c.storage=8):l.isVector3||l.isColor?(c.boundary=16,c.storage=12):l.isVector4?(c.boundary=16,c.storage=16):l.isMatrix3?(c.boundary=48,c.storage=48):l.isMatrix4?(c.boundary=64,c.storage=64):l.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",l),c}function h(l){const c=l.target;c.removeEventListener("dispose",h);const S=E.indexOf(c.__bindingPointIndex);E.splice(S,1),Q.deleteBuffer(C[c.id]),delete C[c.id],delete B[c.id]}function r(){for(const l in C)Q.deleteBuffer(C[l]);E=[],C={},B={}}return{bind:o,update:e,dispose:r}}function Ww(){const Q=GQ("canvas");return Q.style.display="block",Q}function Mo(Q={}){this.isWebGLRenderer=!0;const A=Q.canvas!==void 0?Q.canvas:Ww(),I=Q.context!==void 0?Q.context:null,g=Q.depth!==void 0?Q.depth:!0,C=Q.stencil!==void 0?Q.stencil:!0,B=Q.antialias!==void 0?Q.antialias:!1,E=Q.premultipliedAlpha!==void 0?Q.premultipliedAlpha:!0,i=Q.preserveDrawingBuffer!==void 0?Q.preserveDrawingBuffer:!1,o=Q.powerPreference!==void 0?Q.powerPreference:"default",e=Q.failIfMajorPerformanceCaveat!==void 0?Q.failIfMajorPerformanceCaveat:!1;let t;I!==null?t=I.getContextAttributes().alpha:t=Q.alpha!==void 0?Q.alpha:!1;let a=null,s=null;const D=[],G=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mg,this.useLegacyLights=!0,this.toneMapping=xg,this.toneMappingExposure=1;const n=this;let h=!1,r=0,l=0,c=null,S=-1,y=null;const K=new EI,F=new EI;let k=null,M=A.width,J=A.height,u=1,Y=null,p=null;const m=new EI(0,0,M,J),T=new EI(0,0,M,J);let IA=!1;const AA=new lo;let H=!1,CA=!1,gA=null;const z=new uA,v=new d,BA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function eA(){return c===null?u:1}let W=I;function V(N,P){for(let j=0;j<N.length;j++){const Z=N[j],$=A.getContext(Z,P);if($!==null)return $}return null}try{const N={alpha:!0,depth:g,stencil:C,antialias:B,premultipliedAlpha:E,preserveDrawingBuffer:i,powerPreference:o,failIfMajorPerformanceCaveat:e};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${co}`),A.addEventListener("webglcontextlost",SA,!1),A.addEventListener("webglcontextrestored",yA,!1),A.addEventListener("webglcontextcreationerror",lA,!1),W===null){const P=["webgl2","webgl","experimental-webgl"];if(n.isWebGL1Renderer===!0&&P.shift(),W=V(P,N),W===null)throw V(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let QA,cA,rA,NA,qA,fA,WA,FI,vI,qI,dI,aI,eI,Qg,jI,R,U,_,iA,oA,sA,MA,q,O;function DA(){QA=new gG(W),cA=new _c(W,QA,Q),QA.init(cA),MA=new Hw(W,QA,cA),rA=new uw(W,QA,cA),NA=new QG,qA=new kw,fA=new Lw(W,QA,rA,qA,cA,MA,NA),WA=new zc(n),FI=new IG(n),vI=new nh(W,cA),q=new jc(W,QA,vI,cA),qI=new CG(W,vI,NA,q),dI=new eG(W,qI,vI,NA),iA=new oG(W,cA,fA),R=new Xc(qA),aI=new lw(n,WA,FI,QA,cA,q,R),eI=new Ow(n,qA),Qg=new Mw,jI=new Fw(QA,cA),_=new vc(n,WA,FI,rA,dI,t,E),U=new Yw(n,dI,cA),O=new Zw(W,NA,cA,rA),oA=new Vc(W,QA,NA,cA),sA=new BG(W,QA,NA,cA),NA.programs=aI.programs,n.capabilities=cA,n.extensions=QA,n.properties=qA,n.renderLists=Qg,n.shadowMap=U,n.state=rA,n.info=NA}DA();const aA=new xw(n,W);this.xr=aA,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const N=QA.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=QA.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return u},this.setPixelRatio=function(N){N!==void 0&&(u=N,this.setSize(M,J,!1))},this.getSize=function(N){return N.set(M,J)},this.setSize=function(N,P,j=!0){if(aA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=N,J=P,A.width=Math.floor(N*u),A.height=Math.floor(P*u),j===!0&&(A.style.width=N+"px",A.style.height=P+"px"),this.setViewport(0,0,N,P)},this.getDrawingBufferSize=function(N){return N.set(M*u,J*u).floor()},this.setDrawingBufferSize=function(N,P,j){M=N,J=P,u=j,A.width=Math.floor(N*j),A.height=Math.floor(P*j),this.setViewport(0,0,N,P)},this.getCurrentViewport=function(N){return N.copy(K)},this.getViewport=function(N){return N.copy(m)},this.setViewport=function(N,P,j,Z){N.isVector4?m.set(N.x,N.y,N.z,N.w):m.set(N,P,j,Z),rA.viewport(K.copy(m).multiplyScalar(u).floor())},this.getScissor=function(N){return N.copy(T)},this.setScissor=function(N,P,j,Z){N.isVector4?T.set(N.x,N.y,N.z,N.w):T.set(N,P,j,Z),rA.scissor(F.copy(T).multiplyScalar(u).floor())},this.getScissorTest=function(){return IA},this.setScissorTest=function(N){rA.setScissorTest(IA=N)},this.setOpaqueSort=function(N){Y=N},this.setTransparentSort=function(N){p=N},this.getClearColor=function(N){return N.copy(_.getClearColor())},this.setClearColor=function(){_.setClearColor.apply(_,arguments)},this.getClearAlpha=function(){return _.getClearAlpha()},this.setClearAlpha=function(){_.setClearAlpha.apply(_,arguments)},this.clear=function(N=!0,P=!0,j=!0){let Z=0;N&&(Z|=16384),P&&(Z|=256),j&&(Z|=1024),W.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",SA,!1),A.removeEventListener("webglcontextrestored",yA,!1),A.removeEventListener("webglcontextcreationerror",lA,!1),Qg.dispose(),jI.dispose(),qA.dispose(),WA.dispose(),FI.dispose(),dI.dispose(),q.dispose(),O.dispose(),aI.dispose(),aA.dispose(),aA.removeEventListener("sessionstart",EA),aA.removeEventListener("sessionend",nA),gA&&(gA.dispose(),gA=null),GA.stop()};function SA(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function yA(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const N=NA.autoReset,P=U.enabled,j=U.autoUpdate,Z=U.needsUpdate,$=U.type;DA(),NA.autoReset=N,U.enabled=P,U.autoUpdate=j,U.needsUpdate=Z,U.type=$}function lA(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function bA(N){const P=N.target;P.removeEventListener("dispose",bA),PA(P)}function PA(N){CI(N),qA.remove(N)}function CI(N){const P=qA.get(N).programs;P!==void 0&&(P.forEach(function(j){aI.releaseProgram(j)}),N.isShaderMaterial&&aI.releaseShaderCache(N))}this.renderBufferDirect=function(N,P,j,Z,$,KA){P===null&&(P=BA);const RA=$.isMesh&&$.matrixWorld.determinant()<0,YA=yD(N,P,j,Z,$);rA.setMaterial(Z,RA);let LA=j.index,jA=1;Z.wireframe===!0&&(LA=qI.getWireframeAttribute(j),jA=2);const TA=j.drawRange,xA=j.attributes.position;let wI=TA.start*jA,Eg=(TA.start+TA.count)*jA;KA!==null&&(wI=Math.max(wI,KA.start*jA),Eg=Math.min(Eg,(KA.start+KA.count)*jA)),LA!==null?(wI=Math.max(wI,0),Eg=Math.min(Eg,LA.count)):xA!=null&&(wI=Math.max(wI,0),Eg=Math.min(Eg,xA.count));const Vg=Eg-wI;if(Vg<0||Vg===1/0)return;q.setup($,Z,YA,j,LA);let JC,SI=oA;if(LA!==null&&(JC=vI.get(LA),SI=sA,SI.setIndex(JC)),$.isMesh)Z.wireframe===!0?(rA.setLineWidth(Z.wireframeLinewidth*eA()),SI.setMode(1)):SI.setMode(4);else if($.isLine){let OA=Z.linewidth;OA===void 0&&(OA=1),rA.setLineWidth(OA*eA()),$.isLineSegments?SI.setMode(1):$.isLineLoop?SI.setMode(2):SI.setMode(3)}else $.isPoints?SI.setMode(0):$.isSprite&&SI.setMode(4);if($.isInstancedMesh)SI.renderInstances(wI,Vg,$.count);else if(j.isInstancedBufferGeometry){const OA=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_E=Math.min(j.instanceCount,OA);SI.renderInstances(wI,Vg,_E)}else SI.render(wI,Vg)},this.compile=function(N,P){function j(Z,$,KA){Z.transparent===!0&&Z.side===bg&&Z.forceSinglePass===!1?(Z.side=hg,Z.needsUpdate=!0,cg(Z,$,KA),Z.side=QC,Z.needsUpdate=!0,cg(Z,$,KA),Z.side=bg):cg(Z,$,KA)}s=jI.get(N),s.init(),G.push(s),N.traverseVisible(function(Z){Z.isLight&&Z.layers.test(P.layers)&&(s.pushLight(Z),Z.castShadow&&s.pushShadow(Z))}),s.setupLights(n.useLegacyLights),N.traverse(function(Z){const $=Z.material;if($)if(Array.isArray($))for(let KA=0;KA<$.length;KA++){const RA=$[KA];j(RA,N,Z)}else j($,N,Z)}),G.pop(),s=null};let L=null;function X(N){L&&L(N)}function EA(){GA.stop()}function nA(){GA.start()}const GA=new ss;GA.setAnimationLoop(X),typeof self<"u"&&GA.setContext(self),this.setAnimationLoop=function(N){L=N,aA.setAnimationLoop(N),N===null?GA.stop():GA.start()},aA.addEventListener("sessionstart",EA),aA.addEventListener("sessionend",nA),this.render=function(N,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),aA.enabled===!0&&aA.isPresenting===!0&&(aA.cameraAutoUpdate===!0&&aA.updateCamera(P),P=aA.getCamera()),N.isScene===!0&&N.onBeforeRender(n,N,P,c),s=jI.get(N,G.length),s.init(),G.push(s),z.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),AA.setFromProjectionMatrix(z),CA=this.localClippingEnabled,H=R.init(this.clippingPlanes,CA),a=Qg.get(N,D.length),a.init(),D.push(a),tI(N,P,0,n.sortObjects),a.finish(),n.sortObjects===!0&&a.sort(Y,p),H===!0&&R.beginShadows();const j=s.state.shadowsArray;if(U.render(j,N,P),H===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),_.render(a,N),s.setupLights(n.useLegacyLights),P.isArrayCamera){const Z=P.cameras;for(let $=0,KA=Z.length;$<KA;$++){const RA=Z[$];pI(a,N,RA,RA.viewport)}}else pI(a,N,P);c!==null&&(fA.updateMultisampleRenderTarget(c),fA.updateRenderTargetMipmap(c)),N.isScene===!0&&N.onAfterRender(n,N,P),q.resetDefaultState(),S=-1,y=null,G.pop(),G.length>0?s=G[G.length-1]:s=null,D.pop(),D.length>0?a=D[D.length-1]:a=null};function tI(N,P,j,Z){if(N.visible===!1)return;if(N.layers.test(P.layers)){if(N.isGroup)j=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(P);else if(N.isLight)s.pushLight(N),N.castShadow&&s.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||AA.intersectsSprite(N)){Z&&v.setFromMatrixPosition(N.matrixWorld).applyMatrix4(z);const RA=dI.update(N),YA=N.material;YA.visible&&a.push(N,RA,YA,j,v.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(N.isSkinnedMesh&&N.skeleton.frame!==NA.render.frame&&(N.skeleton.update(),N.skeleton.frame=NA.render.frame),!N.frustumCulled||AA.intersectsObject(N))){Z&&v.setFromMatrixPosition(N.matrixWorld).applyMatrix4(z);const RA=dI.update(N),YA=N.material;if(Array.isArray(YA)){const LA=RA.groups;for(let jA=0,TA=LA.length;jA<TA;jA++){const xA=LA[jA],wI=YA[xA.materialIndex];wI&&wI.visible&&a.push(N,RA,wI,j,v.z,xA)}}else YA.visible&&a.push(N,RA,YA,j,v.z,null)}}const KA=N.children;for(let RA=0,YA=KA.length;RA<YA;RA++)tI(KA[RA],P,j,Z)}function pI(N,P,j,Z){const $=N.opaque,KA=N.transmissive,RA=N.transparent;s.setupLightsView(j),H===!0&&R.setGlobalState(n.clippingPlanes,j),KA.length>0&&VI($,P,j),Z&&rA.viewport(K.copy(Z)),$.length>0&&fg($,P,j),KA.length>0&&fg(KA,P,j),RA.length>0&&fg(RA,P,j),rA.buffers.depth.setTest(!0),rA.buffers.depth.setMask(!0),rA.buffers.color.setMask(!0),rA.setPolygonOffset(!1)}function VI(N,P,j){const Z=cA.isWebGL2;gA===null&&(gA=new yC(1024,1024,{generateMipmaps:!0,type:QA.has("EXT_color_buffer_half_float")?dg:jC,minFilter:kC,samples:Z&&B===!0?4:0}));const $=n.getRenderTarget();n.setRenderTarget(gA),n.clear();const KA=n.toneMapping;n.toneMapping=xg,fg(N,P,j),n.toneMapping=KA,fA.updateMultisampleRenderTarget(gA),fA.updateRenderTargetMipmap(gA),n.setRenderTarget($)}function fg(N,P,j){const Z=P.isScene===!0?P.overrideMaterial:null;for(let $=0,KA=N.length;$<KA;$++){const RA=N[$],YA=RA.object,LA=RA.geometry,jA=Z===null?RA.material:Z,TA=RA.group;YA.layers.test(j.layers)&&cI(YA,P,j,LA,jA,TA)}}function cI(N,P,j,Z,$,KA){N.onBeforeRender(n,P,j,Z,$,KA),N.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),$.onBeforeRender(n,P,j,Z,N,KA),$.transparent===!0&&$.side===bg&&$.forceSinglePass===!1?($.side=hg,$.needsUpdate=!0,n.renderBufferDirect(j,P,Z,$,N,KA),$.side=QC,$.needsUpdate=!0,n.renderBufferDirect(j,P,Z,$,N,KA),$.side=bg):n.renderBufferDirect(j,P,Z,$,N,KA),N.onAfterRender(n,P,j,Z,$,KA)}function cg(N,P,j){P.isScene!==!0&&(P=BA);const Z=qA.get(N),$=s.state.lights,KA=s.state.shadowsArray,RA=$.state.version,YA=aI.getParameters(N,$.state,KA,P,j),LA=aI.getProgramCacheKey(YA);let jA=Z.programs;Z.environment=N.isMeshStandardMaterial?P.environment:null,Z.fog=P.fog,Z.envMap=(N.isMeshStandardMaterial?FI:WA).get(N.envMap||Z.environment),jA===void 0&&(N.addEventListener("dispose",bA),jA=new Map,Z.programs=jA);let TA=jA.get(LA);if(TA!==void 0){if(Z.currentProgram===TA&&Z.lightsStateVersion===RA)return Yg(N,YA),TA}else YA.uniforms=aI.getUniforms(N),N.onBuild(j,YA,n),N.onBeforeCompile(YA,n),TA=aI.acquireProgram(YA,LA),jA.set(LA,TA),Z.uniforms=YA.uniforms;const xA=Z.uniforms;(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(xA.clippingPlanes=R.uniform),Yg(N,YA),Z.needsLights=KD(N),Z.lightsStateVersion=RA,Z.needsLights&&(xA.ambientLightColor.value=$.state.ambient,xA.lightProbe.value=$.state.probe,xA.directionalLights.value=$.state.directional,xA.directionalLightShadows.value=$.state.directionalShadow,xA.spotLights.value=$.state.spot,xA.spotLightShadows.value=$.state.spotShadow,xA.rectAreaLights.value=$.state.rectArea,xA.ltc_1.value=$.state.rectAreaLTC1,xA.ltc_2.value=$.state.rectAreaLTC2,xA.pointLights.value=$.state.point,xA.pointLightShadows.value=$.state.pointShadow,xA.hemisphereLights.value=$.state.hemi,xA.directionalShadowMap.value=$.state.directionalShadowMap,xA.directionalShadowMatrix.value=$.state.directionalShadowMatrix,xA.spotShadowMap.value=$.state.spotShadowMap,xA.spotLightMatrix.value=$.state.spotLightMatrix,xA.spotLightMap.value=$.state.spotLightMap,xA.pointShadowMap.value=$.state.pointShadowMap,xA.pointShadowMatrix.value=$.state.pointShadowMatrix);const wI=TA.getUniforms(),Eg=sE.seqWithValue(wI.seq,xA);return Z.currentProgram=TA,Z.uniformsList=Eg,TA}function Yg(N,P){const j=qA.get(N);j.outputEncoding=P.outputEncoding,j.instancing=P.instancing,j.skinning=P.skinning,j.morphTargets=P.morphTargets,j.morphNormals=P.morphNormals,j.morphColors=P.morphColors,j.morphTargetsCount=P.morphTargetsCount,j.numClippingPlanes=P.numClippingPlanes,j.numIntersection=P.numClipIntersection,j.vertexAlphas=P.vertexAlphas,j.vertexTangents=P.vertexTangents,j.toneMapping=P.toneMapping}function yD(N,P,j,Z,$){P.isScene!==!0&&(P=BA),fA.resetTextureUnits();const KA=P.fog,RA=Z.isMeshStandardMaterial?P.environment:null,YA=c===null?n.outputEncoding:c.isXRRenderTarget===!0?c.texture.encoding:Mg,LA=(Z.isMeshStandardMaterial?FI:WA).get(Z.envMap||RA),jA=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,TA=!!Z.normalMap&&!!j.attributes.tangent,xA=!!j.morphAttributes.position,wI=!!j.morphAttributes.normal,Eg=!!j.morphAttributes.color,Vg=Z.toneMapped?n.toneMapping:xg,JC=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,SI=JC!==void 0?JC.length:0,OA=qA.get(Z),_E=s.state.lights;if(H===!0&&(CA===!0||N!==y)){const ig=N===y&&Z.id===S;R.setState(Z,N,ig)}let fI=!1;Z.version===OA.__version?(OA.needsLights&&OA.lightsStateVersion!==_E.state.version||OA.outputEncoding!==YA||$.isInstancedMesh&&OA.instancing===!1||!$.isInstancedMesh&&OA.instancing===!0||$.isSkinnedMesh&&OA.skinning===!1||!$.isSkinnedMesh&&OA.skinning===!0||OA.envMap!==LA||Z.fog===!0&&OA.fog!==KA||OA.numClippingPlanes!==void 0&&(OA.numClippingPlanes!==R.numPlanes||OA.numIntersection!==R.numIntersection)||OA.vertexAlphas!==jA||OA.vertexTangents!==TA||OA.morphTargets!==xA||OA.morphNormals!==wI||OA.morphColors!==Eg||OA.toneMapping!==Vg||cA.isWebGL2===!0&&OA.morphTargetsCount!==SI)&&(fI=!0):(fI=!0,OA.__version=Z.version);let RC=OA.currentProgram;fI===!0&&(RC=cg(Z,P,$));let ee=!1,_B=!1,XE=!1;const _I=RC.getUniforms(),FC=OA.uniforms;if(rA.useProgram(RC.program)&&(ee=!0,_B=!0,XE=!0),Z.id!==S&&(S=Z.id,_B=!0),ee||y!==N){if(_I.setValue(W,"projectionMatrix",N.projectionMatrix),cA.logarithmicDepthBuffer&&_I.setValue(W,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),y!==N&&(y=N,_B=!0,XE=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const ig=_I.map.cameraPosition;ig!==void 0&&ig.setValue(W,v.setFromMatrixPosition(N.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_I.setValue(W,"isOrthographic",N.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||$.isSkinnedMesh)&&_I.setValue(W,"viewMatrix",N.matrixWorldInverse)}if($.isSkinnedMesh){_I.setOptional(W,$,"bindMatrix"),_I.setOptional(W,$,"bindMatrixInverse");const ig=$.skeleton;ig&&(cA.floatVertexTextures?(ig.boneTexture===null&&ig.computeBoneTexture(),_I.setValue(W,"boneTexture",ig.boneTexture,fA),_I.setValue(W,"boneTextureSize",ig.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const zE=j.morphAttributes;if((zE.position!==void 0||zE.normal!==void 0||zE.color!==void 0&&cA.isWebGL2===!0)&&iA.update($,j,RC),(_B||OA.receiveShadow!==$.receiveShadow)&&(OA.receiveShadow=$.receiveShadow,_I.setValue(W,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(FC.envMap.value=LA,FC.flipEnvMap.value=LA.isCubeTexture&&LA.isRenderTargetTexture===!1?-1:1),_B&&(_I.setValue(W,"toneMappingExposure",n.toneMappingExposure),OA.needsLights&&MD(FC,XE),KA&&Z.fog===!0&&eI.refreshFogUniforms(FC,KA),eI.refreshMaterialUniforms(FC,Z,u,J,gA),sE.upload(W,OA.uniformsList,FC,fA)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(sE.upload(W,OA.uniformsList,FC,fA),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_I.setValue(W,"center",$.center),_I.setValue(W,"modelViewMatrix",$.modelViewMatrix),_I.setValue(W,"normalMatrix",$.normalMatrix),_I.setValue(W,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ig=Z.uniformsGroups;for(let $E=0,UD=ig.length;$E<UD;$E++)if(cA.isWebGL2){const te=ig[$E];O.update(te,RC),O.bind(te,RC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return RC}function MD(N,P){N.ambientLightColor.needsUpdate=P,N.lightProbe.needsUpdate=P,N.directionalLights.needsUpdate=P,N.directionalLightShadows.needsUpdate=P,N.pointLights.needsUpdate=P,N.pointLightShadows.needsUpdate=P,N.spotLights.needsUpdate=P,N.spotLightShadows.needsUpdate=P,N.rectAreaLights.needsUpdate=P,N.hemisphereLights.needsUpdate=P}function KD(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return r},this.getActiveMipmapLevel=function(){return l},this.getRenderTarget=function(){return c},this.setRenderTargetTextures=function(N,P,j){qA.get(N.texture).__webglTexture=P,qA.get(N.depthTexture).__webglTexture=j;const Z=qA.get(N);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||QA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(N,P){const j=qA.get(N);j.__webglFramebuffer=P,j.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(N,P=0,j=0){c=N,r=P,l=j;let Z=!0,$=null,KA=!1,RA=!1;if(N){const LA=qA.get(N);LA.__useDefaultFramebuffer!==void 0?(rA.bindFramebuffer(36160,null),Z=!1):LA.__webglFramebuffer===void 0?fA.setupRenderTarget(N):LA.__hasExternalTextures&&fA.rebindTextures(N,qA.get(N.texture).__webglTexture,qA.get(N.depthTexture).__webglTexture);const jA=N.texture;(jA.isData3DTexture||jA.isDataArrayTexture||jA.isCompressedArrayTexture)&&(RA=!0);const TA=qA.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?($=TA[P],KA=!0):cA.isWebGL2&&N.samples>0&&fA.useMultisampledRTT(N)===!1?$=qA.get(N).__webglMultisampledFramebuffer:$=TA,K.copy(N.viewport),F.copy(N.scissor),k=N.scissorTest}else K.copy(m).multiplyScalar(u).floor(),F.copy(T).multiplyScalar(u).floor(),k=IA;if(rA.bindFramebuffer(36160,$)&&cA.drawBuffers&&Z&&rA.drawBuffers(N,$),rA.viewport(K),rA.scissor(F),rA.setScissorTest(k),KA){const LA=qA.get(N.texture);W.framebufferTexture2D(36160,36064,34069+P,LA.__webglTexture,j)}else if(RA){const LA=qA.get(N.texture),jA=P||0;W.framebufferTextureLayer(36160,36064,LA.__webglTexture,j||0,jA)}S=-1},this.readRenderTargetPixels=function(N,P,j,Z,$,KA,RA){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let YA=qA.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&RA!==void 0&&(YA=YA[RA]),YA){rA.bindFramebuffer(36160,YA);try{const LA=N.texture,jA=LA.format,TA=LA.type;if(jA!==kg&&MA.convert(jA)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const xA=TA===dg&&(QA.has("EXT_color_buffer_half_float")||cA.isWebGL2&&QA.has("EXT_color_buffer_float"));if(TA!==jC&&MA.convert(TA)!==W.getParameter(35738)&&!(TA===sg&&(cA.isWebGL2||QA.has("OES_texture_float")||QA.has("WEBGL_color_buffer_float")))&&!xA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=N.width-Z&&j>=0&&j<=N.height-$&&W.readPixels(P,j,Z,$,MA.convert(jA),MA.convert(TA),KA)}finally{const LA=c!==null?qA.get(c).__webglFramebuffer:null;rA.bindFramebuffer(36160,LA)}}},this.copyFramebufferToTexture=function(N,P,j=0){const Z=Math.pow(2,-j),$=Math.floor(P.image.width*Z),KA=Math.floor(P.image.height*Z);fA.setTexture2D(P,0),W.copyTexSubImage2D(3553,j,0,0,N.x,N.y,$,KA),rA.unbindTexture()},this.copyTextureToTexture=function(N,P,j,Z=0){const $=P.image.width,KA=P.image.height,RA=MA.convert(j.format),YA=MA.convert(j.type);fA.setTexture2D(j,0),W.pixelStorei(37440,j.flipY),W.pixelStorei(37441,j.premultiplyAlpha),W.pixelStorei(3317,j.unpackAlignment),P.isDataTexture?W.texSubImage2D(3553,Z,N.x,N.y,$,KA,RA,YA,P.image.data):P.isCompressedTexture?W.compressedTexSubImage2D(3553,Z,N.x,N.y,P.mipmaps[0].width,P.mipmaps[0].height,RA,P.mipmaps[0].data):W.texSubImage2D(3553,Z,N.x,N.y,RA,YA,P.image),Z===0&&j.generateMipmaps&&W.generateMipmap(3553),rA.unbindTexture()},this.copyTextureToTexture3D=function(N,P,j,Z,$=0){if(n.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const KA=N.max.x-N.min.x+1,RA=N.max.y-N.min.y+1,YA=N.max.z-N.min.z+1,LA=MA.convert(Z.format),jA=MA.convert(Z.type);let TA;if(Z.isData3DTexture)fA.setTexture3D(Z,0),TA=32879;else if(Z.isDataArrayTexture)fA.setTexture2DArray(Z,0),TA=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,Z.flipY),W.pixelStorei(37441,Z.premultiplyAlpha),W.pixelStorei(3317,Z.unpackAlignment);const xA=W.getParameter(3314),wI=W.getParameter(32878),Eg=W.getParameter(3316),Vg=W.getParameter(3315),JC=W.getParameter(32877),SI=j.isCompressedTexture?j.mipmaps[0]:j.image;W.pixelStorei(3314,SI.width),W.pixelStorei(32878,SI.height),W.pixelStorei(3316,N.min.x),W.pixelStorei(3315,N.min.y),W.pixelStorei(32877,N.min.z),j.isDataTexture||j.isData3DTexture?W.texSubImage3D(TA,$,P.x,P.y,P.z,KA,RA,YA,LA,jA,SI.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(TA,$,P.x,P.y,P.z,KA,RA,YA,LA,SI.data)):W.texSubImage3D(TA,$,P.x,P.y,P.z,KA,RA,YA,LA,jA,SI),W.pixelStorei(3314,xA),W.pixelStorei(32878,wI),W.pixelStorei(3316,Eg),W.pixelStorei(3315,Vg),W.pixelStorei(32877,JC),$===0&&Z.generateMipmaps&&W.generateMipmap(TA),rA.unbindTexture()},this.initTexture=function(N){N.isCubeTexture?fA.setTextureCube(N,0):N.isData3DTexture?fA.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?fA.setTexture2DArray(N,0):fA.setTexture2D(N,0),rA.unbindTexture()},this.resetState=function(){r=0,l=0,c=null,rA.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Mo.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(Q){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!Q}}});class Pw extends Mo{}Pw.prototype.isWebGL1Renderer=!0;let vw=class extends _A{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}};class jw{constructor(A,I){this.isInterleavedBuffer=!0,this.array=A,this.stride=I,this.count=A!==void 0?A.length/I:0,this.usage=_i,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=pg()}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.array=new A.array.constructor(A.array),this.count=A.count,this.stride=A.stride,this.usage=A.usage,this}copyAt(A,I,g){A*=this.stride,g*=I.stride;for(let C=0,B=this.stride;C<B;C++)this.array[A+C]=I.array[g+C];return this}set(A,I=0){return this.array.set(A,I),this}clone(A){A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const I=new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]),g=new this.constructor(I,this.stride);return g.setUsage(this.usage),g}onUpload(A){return this.onUploadCallback=A,this}toJSON(A){return A.arrayBuffers===void 0&&(A.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pg()),A.arrayBuffers[this.array.buffer._uuid]===void 0&&(A.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zI=new d;class Ko{constructor(A,I,g,C=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=A,this.itemSize=I,this.offset=g,this.normalized=C}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(A){this.data.needsUpdate=A}applyMatrix4(A){for(let I=0,g=this.data.count;I<g;I++)zI.fromBufferAttribute(this,I),zI.applyMatrix4(A),this.setXYZ(I,zI.x,zI.y,zI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)zI.fromBufferAttribute(this,I),zI.applyNormalMatrix(A),this.setXYZ(I,zI.x,zI.y,zI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)zI.fromBufferAttribute(this,I),zI.transformDirection(A),this.setXYZ(I,zI.x,zI.y,zI.z);return this}setX(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset]=I,this}setY(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset+1]=I,this}setZ(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset+2]=I,this}setW(A,I){return this.normalized&&(I=QI(I,this.array)),this.data.array[A*this.data.stride+this.offset+3]=I,this}getX(A){let I=this.data.array[A*this.data.stride+this.offset];return this.normalized&&(I=BC(I,this.array)),I}getY(A){let I=this.data.array[A*this.data.stride+this.offset+1];return this.normalized&&(I=BC(I,this.array)),I}getZ(A){let I=this.data.array[A*this.data.stride+this.offset+2];return this.normalized&&(I=BC(I,this.array)),I}getW(A){let I=this.data.array[A*this.data.stride+this.offset+3];return this.normalized&&(I=BC(I,this.array)),I}setXY(A,I,g){return A=A*this.data.stride+this.offset,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this}setXYZ(A,I,g,C){return A=A*this.data.stride+this.offset,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A=A*this.data.stride+this.offset,this.normalized&&(I=QI(I,this.array),g=QI(g,this.array),C=QI(C,this.array),B=QI(B,this.array)),this.data.array[A+0]=I,this.data.array[A+1]=g,this.data.array[A+2]=C,this.data.array[A+3]=B,this}clone(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let B=0;B<this.itemSize;B++)I.push(this.data.array[C+B])}return new xI(new this.array.constructor(I),this.itemSize,this.normalized)}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.clone(A)),new Ko(A.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(A){if(A===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const I=[];for(let g=0;g<this.count;g++){const C=g*this.data.stride+this.offset;for(let B=0;B<this.itemSize;B++)I.push(this.data.array[C+B])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:I,normalized:this.normalized}}else return A.interleavedBuffers===void 0&&(A.interleavedBuffers={}),A.interleavedBuffers[this.data.uuid]===void 0&&(A.interleavedBuffers[this.data.uuid]=this.data.toJSON(A)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jt=new d,Rt=new EI,Ft=new EI,Vw=new d,qt=new uA;class _w extends gg{constructor(A,I){super(A,I),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new uA,this.bindMatrixInverse=new uA}copy(A,I){return super.copy(A,I),this.bindMode=A.bindMode,this.bindMatrix.copy(A.bindMatrix),this.bindMatrixInverse.copy(A.bindMatrixInverse),this.skeleton=A.skeleton,this}bind(A,I){this.skeleton=A,I===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),I=this.matrixWorld),this.bindMatrix.copy(I),this.bindMatrixInverse.copy(I).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const A=new EI,I=this.geometry.attributes.skinWeight;for(let g=0,C=I.count;g<C;g++){A.fromBufferAttribute(I,g);const B=1/A.manhattanLength();B!==1/0?A.multiplyScalar(B):A.set(1,0,0,0),I.setXYZW(g,A.x,A.y,A.z,A.w)}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(A,I){const g=this.skeleton,C=this.geometry;Rt.fromBufferAttribute(C.attributes.skinIndex,A),Ft.fromBufferAttribute(C.attributes.skinWeight,A),Jt.copy(I).applyMatrix4(this.bindMatrix),I.set(0,0,0);for(let B=0;B<4;B++){const E=Ft.getComponent(B);if(E!==0){const i=Rt.getComponent(B);qt.multiplyMatrices(g.bones[i].matrixWorld,g.boneInverses[i]),I.addScaledVector(Vw.copy(Jt).applyMatrix4(qt),E)}}return I.applyMatrix4(this.bindMatrixInverse)}}class cs extends _A{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uo extends TI{constructor(A=null,I=1,g=1,C,B,E,i,o,e=uI,t=uI,a,s){super(null,E,i,o,e,t,C,B,a,s),this.isDataTexture=!0,this.image={data:A,width:I,height:g},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dt=new uA,Xw=new uA;class No{constructor(A=[],I=[]){this.uuid=pg(),this.bones=A.slice(0),this.boneInverses=I,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const A=this.bones,I=this.boneInverses;if(this.boneMatrices=new Float32Array(A.length*16),I.length===0)this.calculateInverses();else if(A.length!==I.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let g=0,C=this.bones.length;g<C;g++)this.boneInverses.push(new uA)}}calculateInverses(){this.boneInverses.length=0;for(let A=0,I=this.bones.length;A<I;A++){const g=new uA;this.bones[A]&&g.copy(this.bones[A].matrixWorld).invert(),this.boneInverses.push(g)}}pose(){for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&g.matrixWorld.copy(this.boneInverses[A]).invert()}for(let A=0,I=this.bones.length;A<I;A++){const g=this.bones[A];g&&(g.parent&&g.parent.isBone?(g.matrix.copy(g.parent.matrixWorld).invert(),g.matrix.multiply(g.matrixWorld)):g.matrix.copy(g.matrixWorld),g.matrix.decompose(g.position,g.quaternion,g.scale))}}update(){const A=this.bones,I=this.boneInverses,g=this.boneMatrices,C=this.boneTexture;for(let B=0,E=A.length;B<E;B++){const i=A[B]?A[B].matrixWorld:Xw;dt.multiplyMatrices(i,I[B]),dt.toArray(g,B*16)}C!==null&&(C.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){let A=Math.sqrt(this.bones.length*4);A=Is(A),A=Math.max(A,4);const I=new Float32Array(A*A*4);I.set(this.boneMatrices);const g=new Uo(I,A,A,kg,sg);return g.needsUpdate=!0,this.boneMatrices=I,this.boneTexture=g,this.boneTextureSize=A,this}getBoneByName(A){for(let I=0,g=this.bones.length;I<g;I++){const C=this.bones[I];if(C.name===A)return C}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(A,I){this.uuid=A.uuid;for(let g=0,C=A.bones.length;g<C;g++){const B=A.bones[g];let E=I[B];E===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",B),E=new cs),this.bones.push(E),this.boneInverses.push(new uA().fromArray(A.boneInverses[g]))}return this.init(),this}toJSON(){const A={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};A.uuid=this.uuid;const I=this.bones,g=this.boneInverses;for(let C=0,B=I.length;C<B;C++){const E=I[C];A.bones.push(E.uuid);const i=g[C];A.boneInverses.push(i.toArray())}return A}}class pt extends xI{constructor(A,I,g,C=1){super(A,I,g),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=C}copy(A){return super.copy(A),this.meshPerAttribute=A.meshPerAttribute,this}toJSON(){const A=super.toJSON();return A.meshPerAttribute=this.meshPerAttribute,A.isInstancedBufferAttribute=!0,A}}const ft=new uA,Yt=new uA,IE=[],zw=new uA,BQ=new gg;class $w extends gg{constructor(A,I,g){super(A,I),this.isInstancedMesh=!0,this.instanceMatrix=new pt(new Float32Array(g*16),16),this.instanceColor=null,this.count=g,this.frustumCulled=!1;for(let C=0;C<g;C++)this.setMatrixAt(C,zw)}copy(A,I){return super.copy(A,I),this.instanceMatrix.copy(A.instanceMatrix),A.instanceColor!==null&&(this.instanceColor=A.instanceColor.clone()),this.count=A.count,this}getColorAt(A,I){I.fromArray(this.instanceColor.array,A*3)}getMatrixAt(A,I){I.fromArray(this.instanceMatrix.array,A*16)}raycast(A,I){const g=this.matrixWorld,C=this.count;if(BQ.geometry=this.geometry,BQ.material=this.material,BQ.material!==void 0)for(let B=0;B<C;B++){this.getMatrixAt(B,ft),Yt.multiplyMatrices(g,ft),BQ.matrixWorld=Yt,BQ.raycast(A,IE);for(let E=0,i=IE.length;E<i;E++){const o=IE[E];o.instanceId=B,o.object=this,I.push(o)}IE.length=0}}setColorAt(A,I){this.instanceColor===null&&(this.instanceColor=new pt(new Float32Array(this.instanceMatrix.count*3),3)),I.toArray(this.instanceColor.array,A*3)}setMatrixAt(A,I){I.toArray(this.instanceMatrix.array,A*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends Og{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new FA(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const ut=new d,Lt=new d,Ht=new uA,qi=new pE,gE=new WB;class Jo extends _A{constructor(A=new Bg,I=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,B=I.count;C<B;C++)ut.fromBufferAttribute(I,C-1),Lt.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=ut.distanceTo(Lt);A.setAttribute("lineDistance",new OI(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,B=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),gE.copy(g.boundingSphere),gE.applyMatrix4(C),gE.radius+=B,A.ray.intersectsSphere(gE)===!1)return;Ht.copy(C).invert(),qi.copy(A.ray).applyMatrix4(Ht);const i=B/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=new d,t=new d,a=new d,s=new d,D=this.isLineSegments?2:1,G=g.index,h=g.attributes.position;if(G!==null){const r=Math.max(0,E.start),l=Math.min(G.count,E.start+E.count);for(let c=r,S=l-1;c<S;c+=D){const y=G.getX(c),K=G.getX(c+1);if(e.fromBufferAttribute(h,y),t.fromBufferAttribute(h,K),qi.distanceSqToSegment(e,t,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const k=A.ray.origin.distanceTo(s);k<A.near||k>A.far||I.push({distance:k,point:a.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this})}}else{const r=Math.max(0,E.start),l=Math.min(h.count,E.start+E.count);for(let c=r,S=l-1;c<S;c+=D){if(e.fromBufferAttribute(h,c),t.fromBufferAttribute(h,c+1),qi.distanceSqToSegment(e,t,s,a)>o)continue;s.applyMatrix4(this.matrixWorld);const K=A.ray.origin.distanceTo(s);K<A.near||K>A.far||I.push({distance:K,point:a.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}}const mt=new d,bt=new d;class AS extends Jo{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,B=I.count;C<B;C+=2)mt.fromBufferAttribute(I,C),bt.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+mt.distanceTo(bt);A.setAttribute("lineDistance",new OI(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IS extends Jo{constructor(A,I){super(A,I),this.isLineLoop=!0,this.type="LineLoop"}}class ws extends Og{constructor(A){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new FA(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.alphaMap=A.alphaMap,this.size=A.size,this.sizeAttenuation=A.sizeAttenuation,this.fog=A.fog,this}}const Tt=new uA,Ao=new pE,CE=new WB,BE=new d;class gS extends _A{constructor(A=new Bg,I=new ws){super(),this.isPoints=!0,this.type="Points",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,B=A.params.Points.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),CE.copy(g.boundingSphere),CE.applyMatrix4(C),CE.radius+=B,A.ray.intersectsSphere(CE)===!1)return;Tt.copy(C).invert(),Ao.copy(A.ray).applyMatrix4(Tt);const i=B/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,e=g.index,a=g.attributes.position;if(e!==null){const s=Math.max(0,E.start),D=Math.min(e.count,E.start+E.count);for(let G=s,n=D;G<n;G++){const h=e.getX(G);BE.fromBufferAttribute(a,h),xt(BE,h,o,C,A,I,this)}}else{const s=Math.max(0,E.start),D=Math.min(a.count,E.start+E.count);for(let G=s,n=D;G<n;G++)BE.fromBufferAttribute(a,G),xt(BE,G,o,C,A,I,this)}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,E=C.length;B<E;B++){const i=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=B}}}}}function xt(Q,A,I,g,C,B,E){const i=Ao.distanceSqToPoint(Q);if(i<I){const o=new d;Ao.closestPointToPoint(Q,o),o.applyMatrix4(g);const e=C.ray.origin.distanceTo(o);if(e<C.near||e>C.far)return;B.push({distance:e,distanceToRay:Math.sqrt(i),point:o,index:A,face:null,object:E})}}class Ro extends Bg{constructor(A=[],I=[],g=1,C=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:I,radius:g,detail:C};const B=[],E=[];i(C),e(g),t(),this.setAttribute("position",new OI(B,3)),this.setAttribute("normal",new OI(B.slice(),3)),this.setAttribute("uv",new OI(E,2)),C===0?this.computeVertexNormals():this.normalizeNormals();function i(l){const c=new d,S=new d,y=new d;for(let K=0;K<I.length;K+=3)D(I[K+0],c),D(I[K+1],S),D(I[K+2],y),o(c,S,y,l)}function o(l,c,S,y){const K=y+1,F=[];for(let k=0;k<=K;k++){F[k]=[];const M=l.clone().lerp(S,k/K),J=c.clone().lerp(S,k/K),u=K-k;for(let Y=0;Y<=u;Y++)Y===0&&k===K?F[k][Y]=M:F[k][Y]=M.clone().lerp(J,Y/u)}for(let k=0;k<K;k++)for(let M=0;M<2*(K-k)-1;M++){const J=Math.floor(M/2);M%2===0?(s(F[k][J+1]),s(F[k+1][J]),s(F[k][J])):(s(F[k][J+1]),s(F[k+1][J+1]),s(F[k+1][J]))}}function e(l){const c=new d;for(let S=0;S<B.length;S+=3)c.x=B[S+0],c.y=B[S+1],c.z=B[S+2],c.normalize().multiplyScalar(l),B[S+0]=c.x,B[S+1]=c.y,B[S+2]=c.z}function t(){const l=new d;for(let c=0;c<B.length;c+=3){l.x=B[c+0],l.y=B[c+1],l.z=B[c+2];const S=h(l)/2/Math.PI+.5,y=r(l)/Math.PI+.5;E.push(S,1-y)}G(),a()}function a(){for(let l=0;l<E.length;l+=6){const c=E[l+0],S=E[l+2],y=E[l+4],K=Math.max(c,S,y),F=Math.min(c,S,y);K>.9&&F<.1&&(c<.2&&(E[l+0]+=1),S<.2&&(E[l+2]+=1),y<.2&&(E[l+4]+=1))}}function s(l){B.push(l.x,l.y,l.z)}function D(l,c){const S=l*3;c.x=A[S+0],c.y=A[S+1],c.z=A[S+2]}function G(){const l=new d,c=new d,S=new d,y=new d,K=new JA,F=new JA,k=new JA;for(let M=0,J=0;M<B.length;M+=9,J+=6){l.set(B[M+0],B[M+1],B[M+2]),c.set(B[M+3],B[M+4],B[M+5]),S.set(B[M+6],B[M+7],B[M+8]),K.set(E[J+0],E[J+1]),F.set(E[J+2],E[J+3]),k.set(E[J+4],E[J+5]),y.copy(l).add(c).add(S).divideScalar(3);const u=h(y);n(K,J+0,l,u),n(F,J+2,c,u),n(k,J+4,S,u)}}function n(l,c,S,y){y<0&&l.x===1&&(E[c]=l.x-1),S.x===0&&S.z===0&&(E[c]=y/2/Math.PI+.5)}function h(l){return Math.atan2(l.z,-l.x)}function r(l){return Math.atan2(-l.y,Math.sqrt(l.x*l.x+l.z*l.z))}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Ro(A.vertices,A.indices,A.radius,A.details)}}class Fo extends Ro{constructor(A=1,I=0){const g=(1+Math.sqrt(5))/2,C=[-1,g,0,1,g,0,-1,-g,0,1,-g,0,0,-1,g,0,1,g,0,-1,-g,0,1,-g,g,0,-1,g,0,1,-g,0,-1,-g,0,1],B=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(C,B,A,I),this.type="IcosahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new Fo(A.radius,A.detail)}}class qo extends Bg{constructor(A=1,I=32,g=16,C=0,B=Math.PI*2,E=0,i=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:A,widthSegments:I,heightSegments:g,phiStart:C,phiLength:B,thetaStart:E,thetaLength:i},I=Math.max(3,Math.floor(I)),g=Math.max(2,Math.floor(g));const o=Math.min(E+i,Math.PI);let e=0;const t=[],a=new d,s=new d,D=[],G=[],n=[],h=[];for(let r=0;r<=g;r++){const l=[],c=r/g;let S=0;r==0&&E==0?S=.5/I:r==g&&o==Math.PI&&(S=-.5/I);for(let y=0;y<=I;y++){const K=y/I;a.x=-A*Math.cos(C+K*B)*Math.sin(E+c*i),a.y=A*Math.cos(E+c*i),a.z=A*Math.sin(C+K*B)*Math.sin(E+c*i),G.push(a.x,a.y,a.z),s.copy(a).normalize(),n.push(s.x,s.y,s.z),h.push(K+S,1-c),l.push(e++)}t.push(l)}for(let r=0;r<g;r++)for(let l=0;l<I;l++){const c=t[r][l+1],S=t[r][l],y=t[r+1][l],K=t[r+1][l+1];(r!==0||E>0)&&D.push(c,S,K),(r!==g-1||o<Math.PI)&&D.push(S,y,K)}this.setIndex(D),this.setAttribute("position",new OI(G,3)),this.setAttribute("normal",new OI(n,3)),this.setAttribute("uv",new OI(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new qo(A.radius,A.widthSegments,A.heightSegments,A.phiStart,A.phiLength,A.thetaStart,A.thetaLength)}}class LE extends Og{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new FA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new FA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new JA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class AB extends LE{constructor(A){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new JA(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bI(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(I){this.ior=(1+.4*I)/(1-.4*I)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new FA(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new FA(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new FA(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(A)}get sheen(){return this._sheen}set sheen(A){this._sheen>0!=A>0&&this.version++,this._sheen=A}get clearcoat(){return this._clearcoat}set clearcoat(A){this._clearcoat>0!=A>0&&this.version++,this._clearcoat=A}get iridescence(){return this._iridescence}set iridescence(A){this._iridescence>0!=A>0&&this.version++,this._iridescence=A}get transmission(){return this._transmission}set transmission(A){this._transmission>0!=A>0&&this.version++,this._transmission=A}copy(A){return super.copy(A),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=A.clearcoat,this.clearcoatMap=A.clearcoatMap,this.clearcoatRoughness=A.clearcoatRoughness,this.clearcoatRoughnessMap=A.clearcoatRoughnessMap,this.clearcoatNormalMap=A.clearcoatNormalMap,this.clearcoatNormalScale.copy(A.clearcoatNormalScale),this.ior=A.ior,this.iridescence=A.iridescence,this.iridescenceMap=A.iridescenceMap,this.iridescenceIOR=A.iridescenceIOR,this.iridescenceThicknessRange=[...A.iridescenceThicknessRange],this.iridescenceThicknessMap=A.iridescenceThicknessMap,this.sheen=A.sheen,this.sheenColor.copy(A.sheenColor),this.sheenColorMap=A.sheenColorMap,this.sheenRoughness=A.sheenRoughness,this.sheenRoughnessMap=A.sheenRoughnessMap,this.transmission=A.transmission,this.transmissionMap=A.transmissionMap,this.thickness=A.thickness,this.thicknessMap=A.thicknessMap,this.attenuationDistance=A.attenuationDistance,this.attenuationColor.copy(A.attenuationColor),this.specularIntensity=A.specularIntensity,this.specularIntensityMap=A.specularIntensityMap,this.specularColor.copy(A.specularColor),this.specularColorMap=A.specularColorMap,this}}function hC(Q,A,I){return Ss(Q)?new Q.constructor(Q.subarray(A,I!==void 0?I:Q.length)):Q.slice(A,I)}function QE(Q,A,I){return!Q||!I&&Q.constructor===A?Q:typeof A.BYTES_PER_ELEMENT=="number"?new A(Q):Array.prototype.slice.call(Q)}function Ss(Q){return ArrayBuffer.isView(Q)&&!(Q instanceof DataView)}function CS(Q){function A(C,B){return Q[C]-Q[B]}const I=Q.length,g=new Array(I);for(let C=0;C!==I;++C)g[C]=C;return g.sort(A),g}function Ot(Q,A,I){const g=Q.length,C=new Q.constructor(g);for(let B=0,E=0;E!==g;++B){const i=I[B]*A;for(let o=0;o!==A;++o)C[E++]=Q[i+o]}return C}function ls(Q,A,I,g){let C=1,B=Q[0];for(;B!==void 0&&B[g]===void 0;)B=Q[C++];if(B===void 0)return;let E=B[g];if(E!==void 0)if(Array.isArray(E))do E=B[g],E!==void 0&&(A.push(B.time),I.push.apply(I,E)),B=Q[C++];while(B!==void 0);else if(E.toArray!==void 0)do E=B[g],E!==void 0&&(A.push(B.time),E.toArray(I,I.length)),B=Q[C++];while(B!==void 0);else do E=B[g],E!==void 0&&(A.push(B.time),I.push(E)),B=Q[C++];while(B!==void 0)}class qQ{constructor(A,I,g,C){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=C!==void 0?C:new I.constructor(g),this.sampleValues=I,this.valueSize=g,this.settings=null,this.DefaultSettings_={}}evaluate(A){const I=this.parameterPositions;let g=this._cachedIndex,C=I[g],B=I[g-1];g:{A:{let E;I:{C:if(!(A<C)){for(let i=g+2;;){if(C===void 0){if(A<B)break C;return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}if(g===i)break;if(B=C,C=I[++g],A<C)break A}E=I.length;break I}if(!(A>=B)){const i=I[1];A<i&&(g=2,B=i);for(let o=g-2;;){if(B===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(g===o)break;if(C=B,B=I[--g-1],A>=B)break A}E=g,g=0;break I}break g}for(;g<E;){const i=g+E>>>1;A<I[i]?E=i:g=i+1}if(C=I[g],B=I[g-1],B===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(C===void 0)return g=I.length,this._cachedIndex=g,this.copySampleValue_(g-1)}this._cachedIndex=g,this.intervalChanged_(g,B,C)}return this.interpolate_(g,B,A,C)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C;for(let E=0;E!==C;++E)I[E]=g[B+E];return I}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class BS extends qQ{constructor(A,I,g,C){super(A,I,g,C),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ze,endingEnd:Ze}}intervalChanged_(A,I,g){const C=this.parameterPositions;let B=A-2,E=A+1,i=C[B],o=C[E];if(i===void 0)switch(this.getSettings_().endingStart){case We:B=A,i=2*I-g;break;case Pe:B=C.length-2,i=I+C[B]-C[B+1];break;default:B=A,i=g}if(o===void 0)switch(this.getSettings_().endingEnd){case We:E=A,o=2*g-I;break;case Pe:E=1,o=g+C[1]-C[0];break;default:E=A-1,o=I}const e=(g-I)*.5,t=this.valueSize;this._weightPrev=e/(I-i),this._weightNext=e/(o-g),this._offsetPrev=B*t,this._offsetNext=E*t}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=this._offsetPrev,a=this._offsetNext,s=this._weightPrev,D=this._weightNext,G=(g-I)/(C-I),n=G*G,h=n*G,r=-s*h+2*s*n-s*G,l=(1+s)*h+(-1.5-2*s)*n+(-.5+s)*G+1,c=(-1-D)*h+(1.5+D)*n+.5*G,S=D*h-D*n;for(let y=0;y!==i;++y)B[y]=r*E[t+y]+l*E[e+y]+c*E[o+y]+S*E[a+y];return B}}class QS extends qQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=A*i,e=o-i,t=(g-I)/(C-I),a=1-t;for(let s=0;s!==i;++s)B[s]=E[e+s]*a+E[o+s]*t;return B}}class ES extends qQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A){return this.copySampleValue_(A-1)}}class jg{constructor(A,I,g,C){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(I===void 0||I.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=QE(I,this.TimeBufferType),this.values=QE(g,this.ValueBufferType),this.setInterpolation(C||this.DefaultInterpolation)}static toJSON(A){const I=A.constructor;let g;if(I.toJSON!==this.toJSON)g=I.toJSON(A);else{g={name:A.name,times:QE(A.times,Array),values:QE(A.values,Array)};const C=A.getInterpolation();C!==A.DefaultInterpolation&&(g.interpolation=C)}return g.type=A.ValueTypeName,g}InterpolantFactoryMethodDiscrete(A){return new ES(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new QS(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new BS(this.times,this.values,this.getValueSize(),A)}setInterpolation(A){let I;switch(A){case rQ:I=this.InterpolantFactoryMethodDiscrete;break;case qB:I=this.InterpolantFactoryMethodLinear;break;case Ei:I=this.InterpolantFactoryMethodSmooth;break}if(I===void 0){const g="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(g);return console.warn("THREE.KeyframeTrack:",g),this}return this.createInterpolant=I,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rQ;case this.InterpolantFactoryMethodLinear:return qB;case this.InterpolantFactoryMethodSmooth:return Ei}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]+=A}return this}scale(A){if(A!==1){const I=this.times;for(let g=0,C=I.length;g!==C;++g)I[g]*=A}return this}trim(A,I){const g=this.times,C=g.length;let B=0,E=C-1;for(;B!==C&&g[B]<A;)++B;for(;E!==-1&&g[E]>I;)--E;if(++E,B!==0||E!==C){B>=E&&(E=Math.max(E,1),B=E-1);const i=this.getValueSize();this.times=hC(g,B,E),this.values=hC(this.values,B*i,E*i)}return this}validate(){let A=!0;const I=this.getValueSize();I-Math.floor(I)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),A=!1);const g=this.times,C=this.values,B=g.length;B===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),A=!1);let E=null;for(let i=0;i!==B;i++){const o=g[i];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,i,o),A=!1;break}if(E!==null&&E>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,i,o,E),A=!1;break}E=o}if(C!==void 0&&Ss(C))for(let i=0,o=C.length;i!==o;++i){const e=C[i];if(isNaN(e)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,i,e),A=!1;break}}return A}optimize(){const A=hC(this.times),I=hC(this.values),g=this.getValueSize(),C=this.getInterpolation()===Ei,B=A.length-1;let E=1;for(let i=1;i<B;++i){let o=!1;const e=A[i],t=A[i+1];if(e!==t&&(i!==1||e!==A[0]))if(C)o=!0;else{const a=i*g,s=a-g,D=a+g;for(let G=0;G!==g;++G){const n=I[a+G];if(n!==I[s+G]||n!==I[D+G]){o=!0;break}}}if(o){if(i!==E){A[E]=A[i];const a=i*g,s=E*g;for(let D=0;D!==g;++D)I[s+D]=I[a+D]}++E}}if(B>0){A[E]=A[B];for(let i=B*g,o=E*g,e=0;e!==g;++e)I[o+e]=I[i+e];++E}return E!==A.length?(this.times=hC(A,0,E),this.values=hC(I,0,E*g)):(this.times=A,this.values=I),this}clone(){const A=hC(this.times,0),I=hC(this.values,0),g=this.constructor,C=new g(this.name,A,I);return C.createInterpolant=this.createInterpolant,C}}jg.prototype.TimeBufferType=Float32Array;jg.prototype.ValueBufferType=Float32Array;jg.prototype.DefaultInterpolation=qB;class vB extends jg{}vB.prototype.ValueTypeName="bool";vB.prototype.ValueBufferType=Array;vB.prototype.DefaultInterpolation=rQ;vB.prototype.InterpolantFactoryMethodLinear=void 0;vB.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends jg{}ks.prototype.ValueTypeName="color";class wQ extends jg{}wQ.prototype.ValueTypeName="number";class iS extends qQ{constructor(A,I,g,C){super(A,I,g,C)}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=(g-I)/(C-I);let e=A*i;for(let t=e+i;e!==t;e+=4)KI.slerpFlat(B,0,E,e-i,E,e,o);return B}}class VC extends jg{InterpolantFactoryMethodLinear(A){return new iS(this.times,this.values,this.getValueSize(),A)}}VC.prototype.ValueTypeName="quaternion";VC.prototype.DefaultInterpolation=qB;VC.prototype.InterpolantFactoryMethodSmooth=void 0;class jB extends jg{}jB.prototype.ValueTypeName="string";jB.prototype.ValueBufferType=Array;jB.prototype.DefaultInterpolation=rQ;jB.prototype.InterpolantFactoryMethodLinear=void 0;jB.prototype.InterpolantFactoryMethodSmooth=void 0;class SQ extends jg{}SQ.prototype.ValueTypeName="vector";class oS{constructor(A,I=-1,g,C=yn){this.name=A,this.tracks=g,this.duration=I,this.blendMode=C,this.uuid=pg(),this.duration<0&&this.resetDuration()}static parse(A){const I=[],g=A.tracks,C=1/(A.fps||1);for(let E=0,i=g.length;E!==i;++E)I.push(tS(g[E]).scale(C));const B=new this(A.name,A.duration,I,A.blendMode);return B.uuid=A.uuid,B}static toJSON(A){const I=[],g=A.tracks,C={name:A.name,duration:A.duration,tracks:I,uuid:A.uuid,blendMode:A.blendMode};for(let B=0,E=g.length;B!==E;++B)I.push(jg.toJSON(g[B]));return C}static CreateFromMorphTargetSequence(A,I,g,C){const B=I.length,E=[];for(let i=0;i<B;i++){let o=[],e=[];o.push((i+B-1)%B,i,(i+1)%B),e.push(0,1,0);const t=CS(o);o=Ot(o,1,t),e=Ot(e,1,t),!C&&o[0]===0&&(o.push(B),e.push(e[0])),E.push(new wQ(".morphTargetInfluences["+I[i].name+"]",o,e).scale(1/g))}return new this(A,-1,E)}static findByName(A,I){let g=A;if(!Array.isArray(A)){const C=A;g=C.geometry&&C.geometry.animations||C.animations}for(let C=0;C<g.length;C++)if(g[C].name===I)return g[C];return null}static CreateClipsFromMorphTargetSequences(A,I,g){const C={},B=/^([\w-]*?)([\d]+)$/;for(let i=0,o=A.length;i<o;i++){const e=A[i],t=e.name.match(B);if(t&&t.length>1){const a=t[1];let s=C[a];s||(C[a]=s=[]),s.push(e)}}const E=[];for(const i in C)E.push(this.CreateFromMorphTargetSequence(i,C[i],I,g));return E}static parseAnimation(A,I){if(!A)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const g=function(a,s,D,G,n){if(D.length!==0){const h=[],r=[];ls(D,h,r,G),h.length!==0&&n.push(new a(s,h,r))}},C=[],B=A.name||"default",E=A.fps||30,i=A.blendMode;let o=A.length||-1;const e=A.hierarchy||[];for(let a=0;a<e.length;a++){const s=e[a].keys;if(!(!s||s.length===0))if(s[0].morphTargets){const D={};let G;for(G=0;G<s.length;G++)if(s[G].morphTargets)for(let n=0;n<s[G].morphTargets.length;n++)D[s[G].morphTargets[n]]=-1;for(const n in D){const h=[],r=[];for(let l=0;l!==s[G].morphTargets.length;++l){const c=s[G];h.push(c.time),r.push(c.morphTarget===n?1:0)}C.push(new wQ(".morphTargetInfluence["+n+"]",h,r))}o=D.length*E}else{const D=".bones["+I[a].name+"]";g(SQ,D+".position",s,"pos",C),g(VC,D+".quaternion",s,"rot",C),g(SQ,D+".scale",s,"scl",C)}}return C.length===0?null:new this(B,o,C,i)}resetDuration(){const A=this.tracks;let I=0;for(let g=0,C=A.length;g!==C;++g){const B=this.tracks[g];I=Math.max(I,B.times[B.times.length-1])}return this.duration=I,this}trim(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].trim(0,this.duration);return this}validate(){let A=!0;for(let I=0;I<this.tracks.length;I++)A=A&&this.tracks[I].validate();return A}optimize(){for(let A=0;A<this.tracks.length;A++)this.tracks[A].optimize();return this}clone(){const A=[];for(let I=0;I<this.tracks.length;I++)A.push(this.tracks[I].clone());return new this.constructor(this.name,this.duration,A,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function eS(Q){switch(Q.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wQ;case"vector":case"vector2":case"vector3":case"vector4":return SQ;case"color":return ks;case"quaternion":return VC;case"bool":case"boolean":return vB;case"string":return jB}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+Q)}function tS(Q){if(Q.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const A=eS(Q.type);if(Q.times===void 0){const I=[],g=[];ls(Q.keys,I,g,"value"),Q.times=I,Q.values=g}return A.parse!==void 0?A.parse(Q):new A(Q.name,Q.times,Q.values,Q.interpolation)}const fB={enabled:!1,files:{},add:function(Q,A){this.enabled!==!1&&(this.files[Q]=A)},get:function(Q){if(this.enabled!==!1)return this.files[Q]},remove:function(Q){delete this.files[Q]},clear:function(){this.files={}}};class aS{constructor(A,I,g){const C=this;let B=!1,E=0,i=0,o;const e=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(t){i++,B===!1&&C.onStart!==void 0&&C.onStart(t,E,i),B=!0},this.itemEnd=function(t){E++,C.onProgress!==void 0&&C.onProgress(t,E,i),E===i&&(B=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(t){C.onError!==void 0&&C.onError(t)},this.resolveURL=function(t){return o?o(t):t},this.setURLModifier=function(t){return o=t,this},this.addHandler=function(t,a){return e.push(t,a),this},this.removeHandler=function(t){const a=e.indexOf(t);return a!==-1&&e.splice(a,2),this},this.getHandler=function(t){for(let a=0,s=e.length;a<s;a+=2){const D=e[a],G=e[a+1];if(D.global&&(D.lastIndex=0),D.test(t))return G}return null}}}const SE=new aS;class eC{constructor(A){this.manager=A!==void 0?A:SE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,B){g.load(A,C,I,B)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}const IC={};class sS extends Error{constructor(A,I){super(A),this.response=I}}class YB extends eC{constructor(A){super(A)}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=fB.get(A);if(B!==void 0)return this.manager.itemStart(A),setTimeout(()=>{I&&I(B),this.manager.itemEnd(A)},0),B;if(IC[A]!==void 0){IC[A].push({onLoad:I,onProgress:g,onError:C});return}IC[A]=[],IC[A].push({onLoad:I,onProgress:g,onError:C});const E=new Request(A,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,o=this.responseType;fetch(E).then(e=>{if(e.status===200||e.status===0){if(e.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||e.body===void 0||e.body.getReader===void 0)return e;const t=IC[A],a=e.body.getReader(),s=e.headers.get("Content-Length")||e.headers.get("X-File-Size"),D=s?parseInt(s):0,G=D!==0;let n=0;const h=new ReadableStream({start(r){l();function l(){a.read().then(({done:c,value:S})=>{if(c)r.close();else{n+=S.byteLength;const y=new ProgressEvent("progress",{lengthComputable:G,loaded:n,total:D});for(let K=0,F=t.length;K<F;K++){const k=t[K];k.onProgress&&k.onProgress(y)}r.enqueue(S),l()}})}}});return new Response(h)}else throw new sS(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,e)}).then(e=>{switch(o){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(t=>new DOMParser().parseFromString(t,i));case"json":return e.json();default:if(i===void 0)return e.text();{const a=/charset="?([^;"\s]*)"?/i.exec(i),s=a&&a[1]?a[1].toLowerCase():void 0,D=new TextDecoder(s);return e.arrayBuffer().then(G=>D.decode(G))}}}).then(e=>{fB.add(A,e);const t=IC[A];delete IC[A];for(let a=0,s=t.length;a<s;a++){const D=t[a];D.onLoad&&D.onLoad(e)}}).catch(e=>{const t=IC[A];if(t===void 0)throw this.manager.itemError(A),e;delete IC[A];for(let a=0,s=t.length;a<s;a++){const D=t[a];D.onError&&D.onError(e)}this.manager.itemError(A)}).finally(()=>{this.manager.itemEnd(A)}),this.manager.itemStart(A)}setResponseType(A){return this.responseType=A,this}setMimeType(A){return this.mimeType=A,this}}class ys extends eC{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=this,E=fB.get(A);if(E!==void 0)return B.manager.itemStart(A),setTimeout(function(){I&&I(E),B.manager.itemEnd(A)},0),E;const i=GQ("img");function o(){t(),fB.add(A,this),I&&I(this),B.manager.itemEnd(A)}function e(a){t(),C&&C(a),B.manager.itemError(A),B.manager.itemEnd(A)}function t(){i.removeEventListener("load",o,!1),i.removeEventListener("error",e,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",e,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),B.manager.itemStart(A),i.src=A,i}}class DS extends eC{constructor(A){super(A)}load(A,I,g,C){const B=new fE,E=new ys(this.manager);E.setCrossOrigin(this.crossOrigin),E.setPath(this.path);let i=0;function o(e){E.load(A[e],function(t){B.images[e]=t,i++,i===6&&(B.needsUpdate=!0,I&&I(B))},void 0,C)}for(let e=0;e<A.length;++e)o(e);return B}}class nS extends eC{constructor(A){super(A)}load(A,I,g,C){const B=this,E=new Uo,i=new YB(this.manager);return i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setPath(this.path),i.setWithCredentials(B.withCredentials),i.load(A,function(o){const e=B.parse(o);e&&(e.image!==void 0?E.image=e.image:e.data!==void 0&&(E.image.width=e.width,E.image.height=e.height,E.image.data=e.data),E.wrapS=e.wrapS!==void 0?e.wrapS:Cg,E.wrapT=e.wrapT!==void 0?e.wrapT:Cg,E.magFilter=e.magFilter!==void 0?e.magFilter:nI,E.minFilter=e.minFilter!==void 0?e.minFilter:nI,E.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.encoding!==void 0&&(E.encoding=e.encoding),e.flipY!==void 0&&(E.flipY=e.flipY),e.format!==void 0&&(E.format=e.format),e.type!==void 0&&(E.type=e.type),e.mipmaps!==void 0&&(E.mipmaps=e.mipmaps,E.minFilter=kC),e.mipmapCount===1&&(E.minFilter=nI),e.generateMipmaps!==void 0&&(E.generateMipmaps=e.generateMipmaps),E.needsUpdate=!0,I&&I(E,e))},g,C),E}}class lQ extends eC{constructor(A){super(A)}load(A,I,g,C){const B=new TI,E=new ys(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){B.image=i,B.needsUpdate=!0,I!==void 0&&I(B)},g,C),B}}class po extends _A{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new FA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const di=new uA,Zt=new d,Wt=new d;class fo{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new JA(512,512),this.map=null,this.mapPass=null,this.matrix=new uA,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new JA(1,1),this._viewportCount=1,this._viewports=[new EI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Zt.setFromMatrixPosition(A.matrixWorld),I.position.copy(Zt),Wt.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Wt),I.updateMatrixWorld(),di.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(di),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(di)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class hS extends fo{constructor(){super(new PI(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(A){const I=this.camera,g=cQ*2*A.angle*this.focus,C=this.mapSize.width/this.mapSize.height,B=A.distance||I.far;(g!==I.fov||C!==I.aspect||B!==I.far)&&(I.fov=g,I.aspect=C,I.far=B,I.updateProjectionMatrix()),super.updateMatrices(A)}copy(A){return super.copy(A),this.focus=A.focus,this}}class rS extends po{constructor(A,I,g=0,C=Math.PI/3,B=0,E=2){super(A,I),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_A.DEFAULT_UP),this.updateMatrix(),this.target=new _A,this.distance=g,this.angle=C,this.penumbra=B,this.decay=E,this.map=null,this.shadow=new hS}get power(){return this.intensity*Math.PI}set power(A){this.intensity=A/Math.PI}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.angle=A.angle,this.penumbra=A.penumbra,this.decay=A.decay,this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}const Pt=new uA,QQ=new d,pi=new d;class cS extends fo{constructor(){super(new PI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new JA(4,2),this._viewportCount=6,this._viewports=[new EI(2,1,1,1),new EI(0,1,1,1),new EI(3,1,1,1),new EI(1,1,1,1),new EI(3,0,1,1),new EI(1,0,1,1)],this._cubeDirections=[new d(1,0,0),new d(-1,0,0),new d(0,0,1),new d(0,0,-1),new d(0,1,0),new d(0,-1,0)],this._cubeUps=[new d(0,1,0),new d(0,1,0),new d(0,1,0),new d(0,1,0),new d(0,0,1),new d(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,B=A.distance||g.far;B!==g.far&&(g.far=B,g.updateProjectionMatrix()),QQ.setFromMatrixPosition(A.matrixWorld),g.position.copy(QQ),pi.copy(g.position),pi.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(pi),g.updateMatrixWorld(),C.makeTranslation(-QQ.x,-QQ.y,-QQ.z),Pt.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pt)}}class GS extends po{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new cS}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class wS extends fo{constructor(){super(new YE(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ms extends po{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_A.DEFAULT_UP),this.updateMatrix(),this.target=new _A,this.shadow=new wS}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class Io{static decodeText(A){if(typeof TextDecoder<"u")return new TextDecoder().decode(A);let I="";for(let g=0,C=A.length;g<C;g++)I+=String.fromCharCode(A[g]);try{return decodeURIComponent(escape(I))}catch{return I}}static extractUrlBase(A){const I=A.lastIndexOf("/");return I===-1?"./":A.slice(0,I+1)}static resolveURL(A,I){return typeof A!="string"||A===""?"":(/^https?:\/\//i.test(I)&&/^\//.test(A)&&(I=I.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(A)||/^data:.*,.*$/i.test(A)||/^blob:.*$/i.test(A)?A:I+A)}}class SS extends eC{constructor(A){super(A),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(A){return this.options=A,this}load(A,I,g,C){A===void 0&&(A=""),this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const B=this,E=fB.get(A);if(E!==void 0)return B.manager.itemStart(A),setTimeout(function(){I&&I(E),B.manager.itemEnd(A)},0),E;const i={};i.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",i.headers=this.requestHeader,fetch(A,i).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(B.options,{colorSpaceConversion:"none"}))}).then(function(o){fB.add(A,o),I&&I(o),B.manager.itemEnd(A)}).catch(function(o){C&&C(o),B.manager.itemError(A),B.manager.itemEnd(A)}),B.manager.itemStart(A)}}class Ks{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vt(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=vt();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function vt(){return(typeof performance>"u"?Date:performance).now()}const Yo="\\[\\]\\.:\\/",lS=new RegExp("["+Yo+"]","g"),uo="[^"+Yo+"]",kS="[^"+Yo.replace("\\.","")+"]",yS=/((?:WC+[\/:])*)/.source.replace("WC",uo),MS=/(WCOD+)?/.source.replace("WCOD",kS),KS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),US=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),NS=new RegExp("^"+yS+MS+KS+US+"$"),JS=["material","materials","bones","map"];class RS{constructor(A,I,g){const C=g||II.parseTrackName(I);this._targetGroup=A,this._bindings=A.subscribe_(I,C)}getValue(A,I){this.bind();const g=this._targetGroup.nCachedObjects_,C=this._bindings[g];C!==void 0&&C.getValue(A,I)}setValue(A,I){const g=this._bindings;for(let C=this._targetGroup.nCachedObjects_,B=g.length;C!==B;++C)g[C].setValue(A,I)}bind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].bind()}unbind(){const A=this._bindings;for(let I=this._targetGroup.nCachedObjects_,g=A.length;I!==g;++I)A[I].unbind()}}class II{constructor(A,I,g){this.path=I,this.parsedPath=g||II.parseTrackName(I),this.node=II.findNode(A,this.parsedPath.nodeName),this.rootNode=A,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(A,I,g){return A&&A.isAnimationObjectGroup?new II.Composite(A,I,g):new II(A,I,g)}static sanitizeNodeName(A){return A.replace(/\s/g,"_").replace(lS,"")}static parseTrackName(A){const I=NS.exec(A);if(I===null)throw new Error("PropertyBinding: Cannot parse trackName: "+A);const g={nodeName:I[2],objectName:I[3],objectIndex:I[4],propertyName:I[5],propertyIndex:I[6]},C=g.nodeName&&g.nodeName.lastIndexOf(".");if(C!==void 0&&C!==-1){const B=g.nodeName.substring(C+1);JS.indexOf(B)!==-1&&(g.nodeName=g.nodeName.substring(0,C),g.objectName=B)}if(g.propertyName===null||g.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+A);return g}static findNode(A,I){if(I===void 0||I===""||I==="."||I===-1||I===A.name||I===A.uuid)return A;if(A.skeleton){const g=A.skeleton.getBoneByName(I);if(g!==void 0)return g}if(A.children){const g=function(B){for(let E=0;E<B.length;E++){const i=B[E];if(i.name===I||i.uuid===I)return i;const o=g(i.children);if(o)return o}return null},C=g(A.children);if(C)return C}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(A,I){A[I]=this.targetObject[this.propertyName]}_getValue_array(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)A[I++]=g[C]}_getValue_arrayElement(A,I){A[I]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(A,I){this.resolvedProperty.toArray(A,I)}_setValue_direct(A,I){this.targetObject[this.propertyName]=A[I]}_setValue_direct_setNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(A,I){this.targetObject[this.propertyName]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++]}_setValue_array_setNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(A,I){const g=this.resolvedProperty;for(let C=0,B=g.length;C!==B;++C)g[C]=A[I++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(A,I){this.resolvedProperty[this.propertyIndex]=A[I]}_setValue_arrayElement_setNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty[this.propertyIndex]=A[I],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(A,I){this.resolvedProperty.fromArray(A,I)}_setValue_fromArray_setNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(A,I){this.resolvedProperty.fromArray(A,I),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(A,I){this.bind(),this.getValue(A,I)}_setValue_unbound(A,I){this.bind(),this.setValue(A,I)}bind(){let A=this.node;const I=this.parsedPath,g=I.objectName,C=I.propertyName;let B=I.propertyIndex;if(A||(A=II.findNode(this.rootNode,I.nodeName),this.node=A),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!A){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(g){let e=I.objectIndex;switch(g){case"materials":if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}A=A.material.materials;break;case"bones":if(!A.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}A=A.skeleton.bones;for(let t=0;t<A.length;t++)if(A[t].name===e){e=t;break}break;case"map":if("map"in A){A=A.map;break}if(!A.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!A.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}A=A.material.map;break;default:if(A[g]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}A=A[g]}if(e!==void 0){if(A[e]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,A);return}A=A[e]}}const E=A[C];if(E===void 0){const e=I.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+e+"."+C+" but it wasn't found.",A);return}let i=this.Versioning.None;this.targetObject=A,A.needsUpdate!==void 0?i=this.Versioning.NeedsUpdate:A.matrixWorldNeedsUpdate!==void 0&&(i=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(B!==void 0){if(C==="morphTargetInfluences"){if(!A.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!A.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}A.morphTargetDictionary[B]!==void 0&&(B=A.morphTargetDictionary[B])}o=this.BindingType.ArrayElement,this.resolvedProperty=E,this.propertyIndex=B}else E.fromArray!==void 0&&E.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=E):Array.isArray(E)?(o=this.BindingType.EntireArray,this.resolvedProperty=E):this.propertyName=C;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][i]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}II.Composite=RS;II.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};II.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};II.prototype.GetterByBindingType=[II.prototype._getValue_direct,II.prototype._getValue_array,II.prototype._getValue_arrayElement,II.prototype._getValue_toArray];II.prototype.SetterByBindingTypeAndVersioning=[[II.prototype._setValue_direct,II.prototype._setValue_direct_setNeedsUpdate,II.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[II.prototype._setValue_array,II.prototype._setValue_array_setNeedsUpdate,II.prototype._setValue_array_setMatrixWorldNeedsUpdate],[II.prototype._setValue_arrayElement,II.prototype._setValue_arrayElement_setNeedsUpdate,II.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[II.prototype._setValue_fromArray,II.prototype._setValue_fromArray_setNeedsUpdate,II.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class FS{constructor(A,I,g=0,C=1/0){this.ray=new pE(A,I),this.near=g,this.far=C,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}intersectObject(A,I=!0,g=[]){return go(A,this,g,I),g.sort(jt),g}intersectObjects(A,I=!0,g=[]){for(let C=0,B=A.length;C<B;C++)go(A[C],this,g,I);return g.sort(jt),g}}function jt(Q,A){return Q.distance-A.distance}function go(Q,A,I,g){if(Q.layers.test(A.layers)&&Q.raycast(A,I),g===!0){const C=Q.children;for(let B=0,E=C.length;B<E;B++)go(C[B],A,I,!0)}}class Vt{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(bI(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const CC=qS();function qS(){const Q=new ArrayBuffer(4),A=new Float32Array(Q),I=new Uint32Array(Q),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const B=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,B[o]=e|t}for(let o=1024;o<2048;++o)B[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:B,exponentTable:E,offsetTable:i}}function dS(Q){Math.abs(Q)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),Q=bI(Q,-65504,65504),CC.floatView[0]=Q;const A=CC.uint32View[0],I=A>>23&511;return CC.baseTable[I]+((A&8388607)>>CC.shiftTable[I])}function pS(Q){const A=Q>>10;return CC.uint32View[0]=CC.mantissaTable[CC.offsetTable[A]+(Q&1023)]+CC.exponentTable[A],CC.floatView[0]}const EE={toHalfFloat:dS,fromHalfFloat:pS};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=co);const cB=[];function Us(Q,A){return{subscribe:rI(Q,A).subscribe}}function rI(Q,A=Dg){let I;const g=new Set;function C(i){if(JI(Q,i)&&(Q=i,I)){const o=!cB.length;for(const e of g)e[1](),cB.push(e,Q);if(o){for(let e=0;e<cB.length;e+=2)cB[e][0](cB[e+1]);cB.length=0}}}function B(i){C(i(Q))}function E(i,o=Dg){const e=[i,o];return g.add(e),g.size===1&&(I=A(C)||Dg),i(Q),()=>{g.delete(e),g.size===0&&(I(),I=null)}}return{set:C,update:B,subscribe:E}}function Co(Q,A,I){const g=!Array.isArray(Q),C=g?[Q]:Q,B=A.length<2;return Us(I,E=>{let i=!1;const o=[];let e=0,t=Dg;const a=()=>{if(e)return;t();const D=A(g?o[0]:o,E);B?E(D):t=qE(D)?D:Dg},s=C.map((D,G)=>ro(D,n=>{o[G]=n,e&=~(1<<G),i&&a()},()=>{e|=1<<G}));return i=!0,a(),function(){_C(s),t()}})}const fS={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class HE{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YS=new YE(-1,1,1,-1,0,1),Lo=new Bg;Lo.setAttribute("position",new OI([-1,3,0,-1,-1,0,3,-1,0],3));Lo.setAttribute("uv",new OI([0,2,0,0,2,0],2));class uS{constructor(A){this._mesh=new gg(Lo,A)}dispose(){this._mesh.geometry.dispose()}render(A){A.render(this._mesh,YS)}get material(){return this._mesh.material}set material(A){this._mesh.material=A}}class LS extends HE{constructor(A,I){super(),this.textureID=I!==void 0?I:"tDiffuse",A instanceof Zg?(this.uniforms=A.uniforms,this.material=A):A&&(this.uniforms=as.clone(A.uniforms),this.material=new Zg({defines:Object.assign({},A.defines),uniforms:this.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader})),this.fsQuad=new uS(this.material)}render(A,I,g){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=g.texture),this.fsQuad.material=this.material,this.renderToScreen?(A.setRenderTarget(null),this.fsQuad.render(A)):(A.setRenderTarget(I),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),this.fsQuad.render(A))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _t extends HE{constructor(A,I){super(),this.scene=A,this.camera=I,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(A,I,g){const C=A.getContext(),B=A.state;B.buffers.color.setMask(!1),B.buffers.depth.setMask(!1),B.buffers.color.setLocked(!0),B.buffers.depth.setLocked(!0);let E,i;this.inverse?(E=0,i=1):(E=1,i=0),B.buffers.stencil.setTest(!0),B.buffers.stencil.setOp(C.REPLACE,C.REPLACE,C.REPLACE),B.buffers.stencil.setFunc(C.ALWAYS,E,4294967295),B.buffers.stencil.setClear(i),B.buffers.stencil.setLocked(!0),A.setRenderTarget(g),this.clear&&A.clear(),A.render(this.scene,this.camera),A.setRenderTarget(I),this.clear&&A.clear(),A.render(this.scene,this.camera),B.buffers.color.setLocked(!1),B.buffers.depth.setLocked(!1),B.buffers.stencil.setLocked(!1),B.buffers.stencil.setFunc(C.EQUAL,1,4294967295),B.buffers.stencil.setOp(C.KEEP,C.KEEP,C.KEEP),B.buffers.stencil.setLocked(!0)}}class HS extends HE{constructor(){super(),this.needsSwap=!1}render(A){A.state.buffers.stencil.setLocked(!1),A.state.buffers.stencil.setTest(!1)}}class mS{constructor(A,I){if(this.renderer=A,I===void 0){const g=A.getSize(new JA);this._pixelRatio=A.getPixelRatio(),this._width=g.width,this._height=g.height,I=new yC(this._width*this._pixelRatio,this._height*this._pixelRatio),I.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=I.width,this._height=I.height;this.renderTarget1=I,this.renderTarget2=I.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new LS(fS),this.clock=new Ks}swapBuffers(){const A=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=A}addPass(A){this.passes.push(A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(A,I){this.passes.splice(I,0,A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(A){const I=this.passes.indexOf(A);I!==-1&&this.passes.splice(I,1)}isLastEnabledPass(A){for(let I=A+1;I<this.passes.length;I++)if(this.passes[I].enabled)return!1;return!0}render(A){A===void 0&&(A=this.clock.getDelta());const I=this.renderer.getRenderTarget();let g=!1;for(let C=0,B=this.passes.length;C<B;C++){const E=this.passes[C];if(E.enabled!==!1){if(E.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(C),E.render(this.renderer,this.writeBuffer,this.readBuffer,A,g),E.needsSwap){if(g){const i=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(i.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,A),o.setFunc(i.EQUAL,1,4294967295)}this.swapBuffers()}_t!==void 0&&(E instanceof _t?g=!0:E instanceof HS&&(g=!1))}}this.renderer.setRenderTarget(I)}reset(A){if(A===void 0){const I=this.renderer.getSize(new JA);this._pixelRatio=this.renderer.getPixelRatio(),this._width=I.width,this._height=I.height,A=this.renderTarget1.clone(),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=A,this.renderTarget2=A.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(A,I){this._width=A,this._height=I;const g=this._width*this._pixelRatio,C=this._height*this._pixelRatio;this.renderTarget1.setSize(g,C),this.renderTarget2.setSize(g,C);for(let B=0;B<this.passes.length;B++)this.passes[B].setSize(g,C)}setPixelRatio(A){this._pixelRatio=A,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ns extends HE{constructor(A,I,g,C,B){super(),this.scene=A,this.camera=I,this.overrideMaterial=g,this.clearColor=C,this.clearAlpha=B!==void 0?B:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new FA}render(A,I,g){const C=A.autoClear;A.autoClear=!1;let B,E;this.overrideMaterial!==void 0&&(E=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(A.getClearColor(this._oldClearColor),B=A.getClearAlpha(),A.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&A.clearDepth(),A.setRenderTarget(this.renderToScreen?null:g),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),A.render(this.scene,this.camera),this.clearColor&&A.setClearColor(this._oldClearColor,B),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=E),A.autoClear=C}}const bS=(Q,A,I)=>{Q.renderer=new Mo({powerPreference:"high-performance",canvas:A,antialias:!0,alpha:!0,...I}),Q.composer=new mS(Q.renderer),Q.composer.addPass(new Ns(Q.scene,NB(Q.camera)))},Xt=(Q,A,I)=>{Q.renderer&&(A?Q.renderer.outputEncoding=Mg:Q.renderer.outputEncoding=VA,I?Q.renderer.toneMapping=xg:Q.renderer.toneMapping=ja)},zt=(Q,A,I)=>{var g,C,B,E,i,o,e,t;!Q.renderer||!Q.composer||((C=(g=Q.renderer).setSize)==null||C.call(g,A.width,A.height),(E=(B=Q.renderer).setPixelRatio)==null||E.call(B,I),(o=(i=Q.composer).setSize)==null||o.call(i,A.width,A.height),(t=(e=Q.composer).setPixelRatio)==null||t.call(e,I))},$t=(Q,A,I)=>{Q.renderer&&(Q.renderer.shadowMap.enabled=A,Q.renderer.shadowMap.type=I)},Tg=Q=>Q.userData,TS=(Q,A)=>{Q.pointer.update(I=>Q.renderer?I.set(A.offsetX/Q.renderer.domElement.clientWidth*2-1,-(A.offsetY/Q.renderer.domElement.clientHeight)*2+1):I)},Js=(Q,A,I,g)=>(Q.raycaster.setFromCamera(A,I),Q.raycaster.intersectObjects(g,!1)),xS=(Q,A)=>Q.object.uuid!==A.object.uuid||Q.instanceId!==A.instanceId,OS=(Q,A,I)=>{let g;const C=Q.camera.subscribe(e=>g=e);AI(C);let B;const E=Q.pointer.subscribe(e=>B=e);AI(E);let i;const o=e=>{var s,D;e.preventDefault();const t=e.type;Q.pointerOverCanvas.set(!0),I.pointerInvalidated=!0,TS(Q,e);const a=ZS(A,B,g);if(t==="pointerdown"&&(i=a?{object:a.object,instanceId:a.instanceId}:null),t==="click"){if(!WS(a,i)){i=null;return}i=null}a&&((D=(s=Tg(a.object)).eventDispatcher)==null||D.call(s,t,{...a,event:e}))};return{onClick:o,onContextMenu:o,onPointerUp:o,onPointerDown:o,onPointerMove:o}};function ZS(Q,A,I){if(Q.interactiveObjects.size===0||Q.raycastableObjects.size===0)return null;const g=Js(Q,A,I,Array.from(Q.raycastableObjects));return g.length===0||!Q.interactiveObjects.has(g[0].object)?null:g[0]}function WS(Q,A){return!Q||!A?!1:Q.object.uuid===A.object.uuid&&Q.instanceId===A.instanceId}const PS=(Q,A)=>{let I;const g=Q.pointerOverCanvas.subscribe(e=>I=e);AI(g);let C;const B=Q.camera.subscribe(e=>C=e);AI(B);let E;const i=Q.pointer.subscribe(e=>E=e);return AI(i),{raycast:()=>{var a,s,D,G,n,h,r,l;if(A.interactiveObjects.size===0||A.raycastableObjects.size===0)return;const e=I?Js(A,E,C,Array.from(A.raycastableObjects)):[],t=e.length&&A.interactiveObjects.has(e[0].object)?e[0]:null;t?A.lastIntersection?A.lastIntersection&&xS(A.lastIntersection,t)&&((h=(n=Tg(A.lastIntersection.object)).eventDispatcher)==null||h.call(n,"pointerleave",A.lastIntersection),(l=(r=Tg(t.object)).eventDispatcher)==null||l.call(r,"pointerenter",t)):(G=(D=Tg(t.object)).eventDispatcher)==null||G.call(D,"pointerenter",t):A.lastIntersection&&((s=(a=Tg(A.lastIntersection.object)).eventDispatcher)==null||s.call(a,"pointerleave",A.lastIntersection)),A.lastIntersection=t}}},mE=typeof window<"u",vS=Q=>{if(!mE)return;let A;const I=()=>{Q(),A=requestAnimationFrame(I)};I(),AI(()=>{A&&cancelAnimationFrame(A)})},jS=(Q,A)=>{if(A.frameHandlers.size===0)return;if(A.debugFrameloop){let C=0;A.frameHandlers.forEach(B=>{B.debugFrameloopMessage?A.invalidations[B.debugFrameloopMessage]=B.debugFrameloopMessage in A.invalidations?A.invalidations[B.debugFrameloopMessage]+1:1:++C}),C>0&&(A.invalidations.onFrame=A.frameHandlers.size)}const I=Array.from(A.frameHandlers).reduce((C,B)=>B.order?!0:C,!1),g=Q.clock.getDelta();I?Array.from(A.frameHandlers).sort((C,B)=>(C.order??0)>(B.order??0)?1:-1).forEach(C=>C.fn(Q,g)):A.frameHandlers.forEach(C=>C.fn(Q,g))},VS=Q=>{Q.debugFrameloop&&(Q.frame+=1,console.log(`frame: ${Q.frame}${Object.keys(Q.invalidations).length>0?", requested by ↴":""}`),Object.keys(Q.invalidations).length>0&&console.table(Q.invalidations),Q.invalidations={})},_S=(Q,A,I,g)=>{let C=NB(Q.camera);const B=Q.camera.subscribe(i=>C=i);AI(B);const{raycast:E}=PS(Q,A);vS(()=>{g.dispose();const i=I.frameloop==="always"||I.frameloop==="demand"&&(I.frameInvalidated||I.frameHandlers.size>0)||I.frameloop==="never"&&I.advance;(i||I.pointerInvalidated)&&(E(),I.pointerInvalidated=!1),i&&(!C||!Q.composer||!Q.renderer||(jS(Q,I),Q.composer.passes.length>1?Q.composer.render():Q.renderer.render(Q.scene,C),VS(I),I.frameInvalidated=!1,I.advance=!1))})},XS=()=>{const Q=new PI(75,0,.1,1e3);return Tg(Q).threlteDefaultCamera=!0,Q.position.z=5,Q.lookAt(0,0,0),Q},zS=Q=>{const A=Q.size.subscribe(I=>{Tg(NB(Q.camera)).threlteDefaultCamera&&Q.camera.update(g=>{const C=g;return C.aspect=I.width/I.height,C.updateProjectionMatrix(),Q.invalidate("Default camera: aspect ratio changed"),C})});AI(A)},$S=(Q,A,I,g,C,B,E)=>{const i={audioListeners:new Map,addAudioListener:(r,l)=>{if(l=l??"default",i.audioListeners.has(l)){console.warn(`An AudioListener with the id "${l}" has already been added, aborting.`);return}i.audioListeners.set(l,r)},removeAudioListener:r=>{if(r=r??"default",!i.audioListeners.has(r)){console.warn(`No AudioListener with the id "${r}" found, aborting.`);return}i.audioListeners.delete(r)},getAudioListener:r=>{if(r=r??"default",!i.audioListeners.has(r)){console.warn(`No AudioListener with the id "${r}" found, aborting.`);return}return i.audioListeners.get(r)}},o={debugFrameloop:B,frameloop:E,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},e={size:Co([g,C],([r,l])=>r||l),pointer:rI(new JA),pointerOverCanvas:rI(!1),clock:new Ks,camera:rI(XS()),scene:new vw,renderer:void 0,composer:void 0,invalidate:r=>{o.frameInvalidated=!0,o.debugFrameloop&&r&&(o.invalidations[r]=o.invalidations[r]?o.invalidations[r]+1:1)},advance:()=>{o.advance=!0}},t={flat:rI(A),linear:rI(Q),dpr:rI(I),setCamera:r=>{e.camera.set(r),e.composer&&(e.composer.passes.forEach(l=>{l instanceof Ns&&(l.camera=r)}),e.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new FS,lastIntersection:null,addRaycastableObject:r=>{t.raycastableObjects.add(r)},removeRaycastableObject:r=>{t.raycastableObjects.delete(r)},addInteractiveObject:r=>{t.interactiveObjects.add(r)},removeInteractiveObject:r=>{t.interactiveObjects.delete(r)},addPass:r=>{e.composer&&(e.composer.addPass(r),e.invalidate("Canvas: adding pass"))},removePass:r=>{e.composer&&(e.composer.removePass(r),e.invalidate("Canvas: removing pass"))}},a={dispose:async(r=!1)=>{await OB(),!(!a.shouldDispose&&!r)&&(a.disposableObjects.forEach((l,c)=>{var S;(l===0||r)&&((S=c==null?void 0:c.dispose)==null||S.call(c),a.disposableObjects.delete(c))}),a.shouldDispose=!1)},collectDisposableObjects:(r,l)=>{const c=l??[];return r&&(r!=null&&r.dispose&&typeof r.dispose=="function"&&r.type!=="Scene"&&c.push(r),Object.entries(r).forEach(([S,y])=>{if(S==="parent"||S==="children"||typeof y!="object")return;const K=y;K!=null&&K.dispose&&a.collectDisposableObjects(K,c)})),c},addDisposableObjects:r=>{r.forEach(l=>{const c=a.disposableObjects.get(l);c?a.disposableObjects.set(l,c+1):a.disposableObjects.set(l,1)})},removeDisposableObjects:r=>{r.length!==0&&(r.forEach(l=>{const c=a.disposableObjects.get(l);c&&c>0&&a.disposableObjects.set(l,c-1)}),a.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return ag("threlte",e),ag("threlte-root",t),ag("threlte-render-context",o),ag("threlte-audio-context",i),ag("threlte-disposal-context",a),{ctx:e,rootCtx:t,renderCtx:o,audioCtx:i,disposalCtx:a,getCtx:()=>e,getRootCtx:()=>t,getRenderCtx:()=>o,getAudioCtx:()=>i,getDisposalCtx:()=>a}};function Ho(Q,A){const I=rI(Q);let g=Q;const C=I.subscribe(i=>g=i);return AI(C),{...I,set:i=>{if((i==null?void 0:i.uuid)===(g==null?void 0:g.uuid))return;const o=g;I.set(i),A==null||A(i,o)},update:i=>{const o=i(g);if((o==null?void 0:o.uuid)===(g==null?void 0:g.uuid))return;const e=g;I.set(o),A==null||A(o,e)}}}const tC=()=>rg("threlte");function Al(Q){let A;const I=Q[8].default,g=Kg(I,Q,Q[7],null);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,[B]){g&&g.p&&(!A||B&128)&&Ng(g,I,C,C[7],A?Ug(I,C[7],B,null):Jg(C[7]),null)},i(C){A||(hA(g,C),A=!0)},o(C){kA(g,C),A=!1},d(C){g&&g.d(C)}}}const Il=()=>({onChildMount:rg("threlte-hierarchical-object-on-mount"),onChildDestroy:rg("threlte-hierarchical-object-on-destroy")}),mo=()=>rg("threlte-hierarchical-parent-context");function gl(Q,A,I){var r;let g,{$$slots:C={},$$scope:B}=A,{object:E=void 0}=A,{children:i=[]}=A,{onChildMount:o=void 0}=A;const e=l=>{i.push(l),I(1,i),o==null||o(l)};let{onChildDestroy:t=void 0}=A;const a=l=>{const c=i.findIndex(S=>S.uuid===l.uuid);c!==-1&&i.splice(c,1),I(1,i),t==null||t(l)},{invalidate:s}=tC(),D=mo();LI(Q,D,l=>I(6,g=l));let{parent:G=g}=A;const n=Il();E&&((r=n.onChildMount)==null||r.call(n,E),s("HierarchicalObject: object added"));const h=Ho(E,(l,c)=>{var S,y;c&&((S=n.onChildDestroy)==null||S.call(n,c),s("HierarchicalObject: object added")),l&&((y=n.onChildMount)==null||y.call(n,l),s("HierarchicalObject: object removed"))});return AI(()=>{var l;E&&((l=n.onChildDestroy)==null||l.call(n,E),s("HierarchicalObject: object removed"))}),ag("threlte-hierarchical-object-on-mount",e),ag("threlte-hierarchical-object-on-destroy",a),ag("threlte-hierarchical-parent-context",h),Q.$$set=l=>{"object"in l&&I(3,E=l.object),"children"in l&&I(1,i=l.children),"onChildMount"in l&&I(4,o=l.onChildMount),"onChildDestroy"in l&&I(5,t=l.onChildDestroy),"parent"in l&&I(2,G=l.parent),"$$scope"in l&&I(7,B=l.$$scope)},Q.$$.update=()=>{Q.$$.dirty&64&&I(2,G=g),Q.$$.dirty&8&&h.set(E)},[D,i,G,E,o,t,g,B,C]}class Cl extends mI{constructor(A){super(),HI(this,A,gl,Al,JI,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function Bl(Q){let A;const I=Q[1].default,g=Kg(I,Q,Q[4],null);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&16)&&Ng(g,I,C,C[4],A?Ug(I,C[4],B,null):Jg(C[4]),null)},i(C){A||(hA(g,C),A=!0)},o(C){kA(g,C),A=!1},d(C){g&&g.d(C)}}}function Ql(Q){let A,I;return A=new Cl({props:{object:Q[0],onChildMount:Q[2],onChildDestroy:Q[3],$$slots:{default:[Bl]},$$scope:{ctx:Q}}}),{c(){gI(A.$$.fragment)},m(g,C){zA(A,g,C),I=!0},p(g,[C]){const B={};C&1&&(B.object=g[0]),C&1&&(B.onChildMount=g[2]),C&1&&(B.onChildDestroy=g[3]),C&16&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(hA(A.$$.fragment,g),I=!0)},o(g){kA(A.$$.fragment,g),I=!1},d(g){$A(A,g)}}}function El(Q,A,I){let{$$slots:g={},$$scope:C}=A,{object:B}=A;const E=o=>B.add(o),i=o=>B.remove(o);return Q.$$set=o=>{"object"in o&&I(0,B=o.object),"$$scope"in o&&I(4,C=o.$$scope)},[B,g,E,i,C]}class dQ extends mI{constructor(A){super(),HI(this,A,El,Ql,JI,{object:0})}}const il=()=>{const Q=rI({width:0,height:0});let A={width:0,height:0};const I=Q.subscribe(E=>A=E);AI(I);let g;const C=()=>{const E=A;if(!g||!g.parentElement)return;const{clientWidth:i,clientHeight:o}=g.parentElement;(i!==E.width||o!==E.height)&&Q.set({width:i,height:o})},B=E=>{g=E,C(),window.addEventListener("resize",C)};return mE?(AI(()=>{window.removeEventListener("resize",C)}),{parentSizeAction:B,parentSize:Q}):{parentSize:Q,parentSizeAction:B}};function Aa(Q){let A,I;return A=new dQ({props:{object:Q[0].scene,$$slots:{default:[ol]},$$scope:{ctx:Q}}}),{c(){gI(A.$$.fragment)},m(g,C){zA(A,g,C),I=!0},p(g,C){const B={};C[1]&4&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(hA(A.$$.fragment,g),I=!0)},o(g){kA(A.$$.fragment,g),I=!1},d(g){$A(A,g)}}}function ol(Q){let A;const I=Q[29].default,g=Kg(I,Q,Q[33],null);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B[1]&4)&&Ng(g,I,C,C[33],A?Ug(I,C[33],B,null):Jg(C[33]),null)},i(C){A||(hA(g,C),A=!0)},o(C){kA(g,C),A=!1},d(C){g&&g.d(C)}}}function el(Q){let A,I,g,C,B=Q[2]&&Aa(Q);return{c(){A=La("canvas"),B&&B.c(),ma(A,"class","svelte-o3oskp")},m(E,i){yI(E,A,i),B&&B.m(A,null),Q[30](A),I=!0,g||(C=[RD(Q[3].call(null,A)),qC(A,"click",Q[9]),qC(A,"contextmenu",Q[10]),qC(A,"pointerup",Q[13]),qC(A,"pointerdown",Q[11]),qC(A,"pointermove",Q[12]),qC(A,"pointerenter",Q[31]),qC(A,"pointerleave",Q[32])],g=!0)},p(E,i){E[2]?B?(B.p(E,i),i[0]&4&&hA(B,1)):(B=Aa(E),B.c(),hA(B,1),B.m(A,null)):B&&(WC(),kA(B,1,1,()=>{B=null}),PC())},i(E){I||(hA(B),I=!0)},o(E){kA(B),I=!1},d(E){E&&GI(A),B&&B.d(),Q[30](null),g=!1,_C(C)}}}const Ia=new Set;function tl(Q,A,I){let g,C,B,E,{$$slots:i={},$$scope:o}=A,{dpr:e=mE?window.devicePixelRatio:1}=A,{flat:t=!1}=A,{linear:a=!1}=A,{frameloop:s="demand"}=A,{debugFrameloop:D=!1}=A,{shadows:G=!0}=A,{shadowMapType:n=Za}=A,{size:h=void 0}=A,{rendererParameters:r=void 0}=A,l,c=!1;const S=rI(h),{parentSize:y,parentSizeAction:K}=il(),F=$S(a,t,e,S,y,D,s),{getCtx:k,renderCtx:M,disposalCtx:J}=F,{ctx:u,rootCtx:Y,audioCtx:p}=F;zS(u),Ia.add(u.invalidate),AI(()=>{Ia.delete(u.invalidate)});const{size:m,scene:T}=u;LI(Q,m,QA=>I(26,C=QA));const{flat:IA,linear:AA,dpr:H}=Y;LI(Q,IA,QA=>I(27,B=QA)),LI(Q,AA,QA=>I(28,E=QA)),LI(Q,H,QA=>I(25,g=QA)),ag("threlte-parent",rI(T)),RQ(()=>{l&&(bS(u,l,r),Xt(u,E,B),zt(u,C,g),$t(u,G,n),I(2,c=!0))}),_S(u,Y,M,J);const{onClick:CA,onContextMenu:gA,onPointerDown:z,onPointerMove:v,onPointerUp:BA}=OS(u,Y,M);AI(()=>{J.dispose(!0)});function eA(QA){hQ[QA?"unshift":"push"](()=>{l=QA,I(1,l)})}const W=()=>k().pointerOverCanvas.set(!0),V=()=>k().pointerOverCanvas.set(!1);return Q.$$set=QA=>{"dpr"in QA&&I(14,e=QA.dpr),"flat"in QA&&I(15,t=QA.flat),"linear"in QA&&I(16,a=QA.linear),"frameloop"in QA&&I(17,s=QA.frameloop),"debugFrameloop"in QA&&I(18,D=QA.debugFrameloop),"shadows"in QA&&I(19,G=QA.shadows),"shadowMapType"in QA&&I(20,n=QA.shadowMapType),"size"in QA&&I(21,h=QA.size),"rendererParameters"in QA&&I(22,r=QA.rendererParameters),"$$scope"in QA&&I(33,o=QA.$$scope)},Q.$$.update=()=>{Q.$$.dirty[0]&2097152&&S.set(h),Q.$$.dirty[0]&65536&&oE(AA,E=a,E),Q.$$.dirty[0]&32768&&oE(IA,B=t,B),Q.$$.dirty[0]&16384&&oE(H,g=e,g),Q.$$.dirty[0]&402653184&&Xt(k(),E,B),Q.$$.dirty[0]&100663296&&zt(k(),C,g),Q.$$.dirty[0]&1572864&&$t(k(),G,n)},[u,l,c,K,k,m,IA,AA,H,CA,gA,z,v,BA,e,t,a,s,D,G,n,h,r,Y,p,g,C,B,E,i,eA,W,V,o]}class al extends mI{constructor(A){super(),HI(this,A,tl,el,JI,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const sl=()=>rg("threlte-root"),Dl=()=>rg("threlte-disposal-context");function nl(Q){let A;const I=Q[9].default,g=Kg(I,Q,Q[8],null);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,[B]){g&&g.p&&(!A||B&256)&&Ng(g,I,C,C[8],A?Ug(I,C[8],B,null):Jg(C[8]),null)},i(C){A||(hA(g,C),A=!0)},o(C){kA(g,C),A=!1},d(C){g&&g.d(C)}}}const ga="threlte-disposable-object-context";function hl(Q,A,I){let g,C,{$$slots:B={},$$scope:E}=A;const{collectDisposableObjects:i,addDisposableObjects:o,removeDisposableObjects:e}=Dl();let{object:t=void 0}=A,a=t,{dispose:s=void 0}=A;const D=rg(ga);LI(Q,D,h=>I(7,C=h));const G=rI(s??C??!0);LI(Q,G,h=>I(6,g=h)),ag(ga,G);let n=g?i(t):[];return o(n),AI(()=>{e(n)}),Q.$$set=h=>{"object"in h&&I(2,t=h.object),"dispose"in h&&I(3,s=h.dispose),"$$scope"in h&&I(8,E=h.$$scope)},Q.$$.update=()=>{Q.$$.dirty&136&&G.set(s??C??!0),Q.$$.dirty&116&&t!==a&&(e(n),I(5,n=g?i(t):[]),o(n),I(4,a=t))},[D,G,t,s,a,n,g,C,E,B]}class Rs extends mI{constructor(A){super(),HI(this,A,hl,nl,JI,{object:2,dispose:3})}}function rl(Q,A,I){let g,C,{object:B}=A;const E=Ho(B);LI(Q,E,e=>I(4,C=e));const i=rg("threlte-layers");LI(Q,i,e=>I(3,g=e));const{invalidate:o}=tC();return Q.$$set=e=>{"object"in e&&I(2,B=e.object)},Q.$$.update=()=>{if(Q.$$.dirty&4&&E.set(B),Q.$$.dirty&24){if(g==="all")C.layers.enableAll();else if(g==="none")C.layers.disableAll();else if(Array.isArray(g))for(let e=0;e<32;e+=1){const t=e;g.includes(t)?C.layers.enable(e):C.layers.disable(e)}else g!==void 0&&C.layers.set(g);o("LayerableObject")}},[E,i,B,g,C]}class cl extends mI{constructor(A){super(),HI(this,A,rl,null,JI,{object:2})}}const pQ=(Q,A)=>{if(!mE)return{start:()=>{},stop:()=>{},started:Us(!1)};const I=rg("threlte-render-context"),g={fn:Q,order:A==null?void 0:A.order,debugFrameloopMessage:A==null?void 0:A.debugFrameloopMessage},C=rI(!1),B=()=>{I.frameHandlers.delete(g),C.set(!1)},E=()=>{I.frameHandlers.add(g),C.set(!0)};return((A==null?void 0:A.autostart)??!0)&&E(),AI(()=>{B()}),{start:E,stop:B,started:{subscribe:C.subscribe}}},Gl=()=>{const Q=rI(!1);return(async()=>{await OB(),Q.set(!0)})(),Q};function wl(Q,A,I){let g,C,{object:B}=A,{position:E=void 0}=A,{scale:i=void 0}=A,{rotation:o=void 0}=A,{lookAt:e=void 0}=A;const t=new d,a=xB(),{invalidate:s}=tC(),D=Gl();LI(Q,D,c=>I(8,C=c));const G=async()=>{C||await OB(),a("transform")},n=async()=>{s("TransformableObject: transformed"),await G()};Tg(B).onTransform=n;const{start:h,stop:r}=pQ(async()=>{e&&!o&&e instanceof _A&&(e.getWorldPosition(t),B.lookAt(t),await G())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),l=Ho(B);return LI(Q,l,c=>I(7,g=c)),Q.$$set=c=>{"object"in c&&I(2,B=c.object),"position"in c&&I(3,E=c.position),"scale"in c&&I(4,i=c.scale),"rotation"in c&&I(5,o=c.rotation),"lookAt"in c&&I(6,e=c.lookAt)},Q.$$.update=()=>{Q.$$.dirty&4&&l.set(B),Q.$$.dirty&232&&(E&&(g.position.set(E.x??0,E.y??0,E.z??0),n()),e&&!o&&(e instanceof _A?h():(r(),g.lookAt(e.x??0,e.y??0,e.z??0),n())),e||r()),Q.$$.dirty&144&&i&&(typeof i=="number"?g.scale.set(i,i,i):g.scale.set(i.x??1,i.y??1,i.z??1),n()),Q.$$.dirty&160&&o&&(g.rotation.set(o.x??0,o.y??0,o.z??0,o.order??"XYZ"),n())},[D,l,B,E,i,o,e,g]}class Fs extends mI{constructor(A){super(),HI(this,A,wl,null,JI,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}const Ca=[],Bo=(Q,A)=>{const I=Ca.find(C=>C instanceof Q);if(I)return I;const g=A();return Ca.push(g),g},Ba={type:"change"},fi={type:"start"},Qa={type:"end"};let Sl=class extends zC{constructor(A,I){super(),this.object=A,this.domElement=I,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new d,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gB.ROTATE,MIDDLE:gB.DOLLY,RIGHT:gB.PAN},this.touches={ONE:CB.ROTATE,TWO:CB.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return i.phi},this.getAzimuthalAngle=function(){return i.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(q){q.addEventListener("keydown",jI),this._domElementKeyEvents=q},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",jI),this._domElementKeyEvents=null},this.saveState=function(){g.target0.copy(g.target),g.position0.copy(g.object.position),g.zoom0=g.object.zoom},this.reset=function(){g.target.copy(g.target0),g.object.position.copy(g.position0),g.object.zoom=g.zoom0,g.object.updateProjectionMatrix(),g.dispatchEvent(Ba),g.update(),B=C.NONE},this.update=function(){const q=new d,O=new KI().setFromUnitVectors(A.up,new d(0,1,0)),DA=O.clone().invert(),aA=new d,SA=new KI,yA=2*Math.PI;return function(){const bA=g.object.position;q.copy(bA).sub(g.target),q.applyQuaternion(O),i.setFromVector3(q),g.autoRotate&&B===C.NONE&&M(F()),g.enableDamping?(i.theta+=o.theta*g.dampingFactor,i.phi+=o.phi*g.dampingFactor):(i.theta+=o.theta,i.phi+=o.phi);let PA=g.minAzimuthAngle,CI=g.maxAzimuthAngle;return isFinite(PA)&&isFinite(CI)&&(PA<-Math.PI?PA+=yA:PA>Math.PI&&(PA-=yA),CI<-Math.PI?CI+=yA:CI>Math.PI&&(CI-=yA),PA<=CI?i.theta=Math.max(PA,Math.min(CI,i.theta)):i.theta=i.theta>(PA+CI)/2?Math.max(PA,i.theta):Math.min(CI,i.theta)),i.phi=Math.max(g.minPolarAngle,Math.min(g.maxPolarAngle,i.phi)),i.makeSafe(),i.radius*=e,i.radius=Math.max(g.minDistance,Math.min(g.maxDistance,i.radius)),g.enableDamping===!0?g.target.addScaledVector(t,g.dampingFactor):g.target.add(t),q.setFromSpherical(i),q.applyQuaternion(DA),bA.copy(g.target).add(q),g.object.lookAt(g.target),g.enableDamping===!0?(o.theta*=1-g.dampingFactor,o.phi*=1-g.dampingFactor,t.multiplyScalar(1-g.dampingFactor)):(o.set(0,0,0),t.set(0,0,0)),e=1,a||aA.distanceToSquared(g.object.position)>E||8*(1-SA.dot(g.object.quaternion))>E?(g.dispatchEvent(Ba),aA.copy(g.object.position),SA.copy(g.object.quaternion),a=!1,!0):!1}}(),this.dispose=function(){g.domElement.removeEventListener("contextmenu",_),g.domElement.removeEventListener("pointerdown",FI),g.domElement.removeEventListener("pointercancel",dI),g.domElement.removeEventListener("wheel",Qg),g.domElement.removeEventListener("pointermove",vI),g.domElement.removeEventListener("pointerup",qI),g._domElementKeyEvents!==null&&(g._domElementKeyEvents.removeEventListener("keydown",jI),g._domElementKeyEvents=null)};const g=this,C={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let B=C.NONE;const E=1e-6,i=new Vt,o=new Vt;let e=1;const t=new d;let a=!1;const s=new JA,D=new JA,G=new JA,n=new JA,h=new JA,r=new JA,l=new JA,c=new JA,S=new JA,y=[],K={};function F(){return 2*Math.PI/60/60*g.autoRotateSpeed}function k(){return Math.pow(.95,g.zoomSpeed)}function M(q){o.theta-=q}function J(q){o.phi-=q}const u=function(){const q=new d;return function(DA,aA){q.setFromMatrixColumn(aA,0),q.multiplyScalar(-DA),t.add(q)}}(),Y=function(){const q=new d;return function(DA,aA){g.screenSpacePanning===!0?q.setFromMatrixColumn(aA,1):(q.setFromMatrixColumn(aA,0),q.crossVectors(g.object.up,q)),q.multiplyScalar(DA),t.add(q)}}(),p=function(){const q=new d;return function(DA,aA){const SA=g.domElement;if(g.object.isPerspectiveCamera){const yA=g.object.position;q.copy(yA).sub(g.target);let lA=q.length();lA*=Math.tan(g.object.fov/2*Math.PI/180),u(2*DA*lA/SA.clientHeight,g.object.matrix),Y(2*aA*lA/SA.clientHeight,g.object.matrix)}else g.object.isOrthographicCamera?(u(DA*(g.object.right-g.object.left)/g.object.zoom/SA.clientWidth,g.object.matrix),Y(aA*(g.object.top-g.object.bottom)/g.object.zoom/SA.clientHeight,g.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),g.enablePan=!1)}}();function m(q){g.object.isPerspectiveCamera?e/=q:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom*q)),g.object.updateProjectionMatrix(),a=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function T(q){g.object.isPerspectiveCamera?e*=q:g.object.isOrthographicCamera?(g.object.zoom=Math.max(g.minZoom,Math.min(g.maxZoom,g.object.zoom/q)),g.object.updateProjectionMatrix(),a=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),g.enableZoom=!1)}function IA(q){s.set(q.clientX,q.clientY)}function AA(q){l.set(q.clientX,q.clientY)}function H(q){n.set(q.clientX,q.clientY)}function CA(q){D.set(q.clientX,q.clientY),G.subVectors(D,s).multiplyScalar(g.rotateSpeed);const O=g.domElement;M(2*Math.PI*G.x/O.clientHeight),J(2*Math.PI*G.y/O.clientHeight),s.copy(D),g.update()}function gA(q){c.set(q.clientX,q.clientY),S.subVectors(c,l),S.y>0?m(k()):S.y<0&&T(k()),l.copy(c),g.update()}function z(q){h.set(q.clientX,q.clientY),r.subVectors(h,n).multiplyScalar(g.panSpeed),p(r.x,r.y),n.copy(h),g.update()}function v(q){q.deltaY<0?T(k()):q.deltaY>0&&m(k()),g.update()}function BA(q){let O=!1;switch(q.code){case g.keys.UP:q.ctrlKey||q.metaKey||q.shiftKey?J(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):p(0,g.keyPanSpeed),O=!0;break;case g.keys.BOTTOM:q.ctrlKey||q.metaKey||q.shiftKey?J(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):p(0,-g.keyPanSpeed),O=!0;break;case g.keys.LEFT:q.ctrlKey||q.metaKey||q.shiftKey?M(2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):p(g.keyPanSpeed,0),O=!0;break;case g.keys.RIGHT:q.ctrlKey||q.metaKey||q.shiftKey?M(-2*Math.PI*g.rotateSpeed/g.domElement.clientHeight):p(-g.keyPanSpeed,0),O=!0;break}O&&(q.preventDefault(),g.update())}function eA(){if(y.length===1)s.set(y[0].pageX,y[0].pageY);else{const q=.5*(y[0].pageX+y[1].pageX),O=.5*(y[0].pageY+y[1].pageY);s.set(q,O)}}function W(){if(y.length===1)n.set(y[0].pageX,y[0].pageY);else{const q=.5*(y[0].pageX+y[1].pageX),O=.5*(y[0].pageY+y[1].pageY);n.set(q,O)}}function V(){const q=y[0].pageX-y[1].pageX,O=y[0].pageY-y[1].pageY,DA=Math.sqrt(q*q+O*O);l.set(0,DA)}function QA(){g.enableZoom&&V(),g.enablePan&&W()}function cA(){g.enableZoom&&V(),g.enableRotate&&eA()}function rA(q){if(y.length==1)D.set(q.pageX,q.pageY);else{const DA=MA(q),aA=.5*(q.pageX+DA.x),SA=.5*(q.pageY+DA.y);D.set(aA,SA)}G.subVectors(D,s).multiplyScalar(g.rotateSpeed);const O=g.domElement;M(2*Math.PI*G.x/O.clientHeight),J(2*Math.PI*G.y/O.clientHeight),s.copy(D)}function NA(q){if(y.length===1)h.set(q.pageX,q.pageY);else{const O=MA(q),DA=.5*(q.pageX+O.x),aA=.5*(q.pageY+O.y);h.set(DA,aA)}r.subVectors(h,n).multiplyScalar(g.panSpeed),p(r.x,r.y),n.copy(h)}function qA(q){const O=MA(q),DA=q.pageX-O.x,aA=q.pageY-O.y,SA=Math.sqrt(DA*DA+aA*aA);c.set(0,SA),S.set(0,Math.pow(c.y/l.y,g.zoomSpeed)),m(S.y),l.copy(c)}function fA(q){g.enableZoom&&qA(q),g.enablePan&&NA(q)}function WA(q){g.enableZoom&&qA(q),g.enableRotate&&rA(q)}function FI(q){g.enabled!==!1&&(y.length===0&&(g.domElement.setPointerCapture(q.pointerId),g.domElement.addEventListener("pointermove",vI),g.domElement.addEventListener("pointerup",qI)),iA(q),q.pointerType==="touch"?R(q):aI(q))}function vI(q){g.enabled!==!1&&(q.pointerType==="touch"?U(q):eI(q))}function qI(q){oA(q),y.length===0&&(g.domElement.releasePointerCapture(q.pointerId),g.domElement.removeEventListener("pointermove",vI),g.domElement.removeEventListener("pointerup",qI)),g.dispatchEvent(Qa),B=C.NONE}function dI(q){oA(q)}function aI(q){let O;switch(q.button){case 0:O=g.mouseButtons.LEFT;break;case 1:O=g.mouseButtons.MIDDLE;break;case 2:O=g.mouseButtons.RIGHT;break;default:O=-1}switch(O){case gB.DOLLY:if(g.enableZoom===!1)return;AA(q),B=C.DOLLY;break;case gB.ROTATE:if(q.ctrlKey||q.metaKey||q.shiftKey){if(g.enablePan===!1)return;H(q),B=C.PAN}else{if(g.enableRotate===!1)return;IA(q),B=C.ROTATE}break;case gB.PAN:if(q.ctrlKey||q.metaKey||q.shiftKey){if(g.enableRotate===!1)return;IA(q),B=C.ROTATE}else{if(g.enablePan===!1)return;H(q),B=C.PAN}break;default:B=C.NONE}B!==C.NONE&&g.dispatchEvent(fi)}function eI(q){switch(B){case C.ROTATE:if(g.enableRotate===!1)return;CA(q);break;case C.DOLLY:if(g.enableZoom===!1)return;gA(q);break;case C.PAN:if(g.enablePan===!1)return;z(q);break}}function Qg(q){g.enabled===!1||g.enableZoom===!1||B!==C.NONE||(q.preventDefault(),g.dispatchEvent(fi),v(q),g.dispatchEvent(Qa))}function jI(q){g.enabled===!1||g.enablePan===!1||BA(q)}function R(q){switch(sA(q),y.length){case 1:switch(g.touches.ONE){case CB.ROTATE:if(g.enableRotate===!1)return;eA(),B=C.TOUCH_ROTATE;break;case CB.PAN:if(g.enablePan===!1)return;W(),B=C.TOUCH_PAN;break;default:B=C.NONE}break;case 2:switch(g.touches.TWO){case CB.DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;QA(),B=C.TOUCH_DOLLY_PAN;break;case CB.DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;cA(),B=C.TOUCH_DOLLY_ROTATE;break;default:B=C.NONE}break;default:B=C.NONE}B!==C.NONE&&g.dispatchEvent(fi)}function U(q){switch(sA(q),B){case C.TOUCH_ROTATE:if(g.enableRotate===!1)return;rA(q),g.update();break;case C.TOUCH_PAN:if(g.enablePan===!1)return;NA(q),g.update();break;case C.TOUCH_DOLLY_PAN:if(g.enableZoom===!1&&g.enablePan===!1)return;fA(q),g.update();break;case C.TOUCH_DOLLY_ROTATE:if(g.enableZoom===!1&&g.enableRotate===!1)return;WA(q),g.update();break;default:B=C.NONE}}function _(q){g.enabled!==!1&&q.preventDefault()}function iA(q){y.push(q)}function oA(q){delete K[q.pointerId];for(let O=0;O<y.length;O++)if(y[O].pointerId==q.pointerId){y.splice(O,1);return}}function sA(q){let O=K[q.pointerId];O===void 0&&(O=new JA,K[q.pointerId]=O),O.set(q.pageX,q.pageY)}function MA(q){const O=q.pointerId===y[0].pointerId?y[1]:y[0];return K[O.pointerId]}g.domElement.addEventListener("contextmenu",_),g.domElement.addEventListener("pointerdown",FI),g.domElement.addEventListener("pointercancel",dI),g.domElement.addEventListener("wheel",Qg,{passive:!1}),this.update()}};function ll(Q){let A,I,g,C;return A=new Rs({props:{dispose:Q[2],object:Q[0]}}),g=new Fs({props:{object:Q[4],position:Q[1]}}),g.$on("transform",Q[5]),{c(){gI(A.$$.fragment),I=ng(),gI(g.$$.fragment)},m(B,E){zA(A,B,E),yI(B,I,E),zA(g,B,E),C=!0},p(B,E){const i={};E[0]&4&&(i.dispose=B[2]),E[0]&1&&(i.object=B[0]),A.$set(i);const o={};E[0]&2&&(o.position=B[1]),g.$set(o)},i(B){C||(hA(A.$$.fragment,B),hA(g.$$.fragment,B),C=!0)},o(B){kA(A.$$.fragment,B),kA(g.$$.fragment,B),C=!1},d(B){$A(A,B),B&&GI(I),$A(g,B)}}}function kl(Q,A,I){let g,{autoRotate:C=void 0}=A,{autoRotateSpeed:B=void 0}=A,{dampingFactor:E=void 0}=A,{enableDamping:i=void 0}=A,{enabled:o=void 0}=A,{enablePan:e=void 0}=A,{enableRotate:t=void 0}=A,{enableZoom:a=void 0}=A,{keyPanSpeed:s=void 0}=A,{keys:D=void 0}=A,{maxAzimuthAngle:G=void 0}=A,{maxDistance:n=void 0}=A,{maxPolarAngle:h=void 0}=A,{maxZoom:r=void 0}=A,{minAzimuthAngle:l=void 0}=A,{minDistance:c=void 0}=A,{minPolarAngle:S=void 0}=A,{minZoom:y=void 0}=A,{mouseButtons:K=void 0}=A,{panSpeed:F=void 0}=A,{rotateSpeed:k=void 0}=A,{screenSpacePanning:M=void 0}=A,{touches:J=void 0}=A,{zoomSpeed:u=void 0}=A,{target:Y=void 0}=A,{dispose:p=void 0}=A;const m=mo();LI(Q,m,V=>I(30,g=V));const{renderer:T,invalidate:IA}=tC();if(!T)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(g instanceof So))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const AA=xB(),H=()=>{IA("Orbitcontrols: change event"),AA("change")},CA=()=>AA("start"),gA=()=>AA("end"),z=new Sl(g,T.domElement);Tg(g).orbitControls=z,z.addEventListener("change",H),z.addEventListener("start",CA),z.addEventListener("end",gA),AI(()=>{g&&delete Tg(g).orbitControls,z.removeEventListener("change",H),z.removeEventListener("start",CA),z.removeEventListener("end",gA)});const{start:v,stop:BA}=pQ(()=>z.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),eA=new _A,W=()=>{I(0,z.target=eA.position,z),z.update(),IA("OrbitControls: target changed")};return Q.$$set=V=>{"autoRotate"in V&&I(6,C=V.autoRotate),"autoRotateSpeed"in V&&I(7,B=V.autoRotateSpeed),"dampingFactor"in V&&I(8,E=V.dampingFactor),"enableDamping"in V&&I(9,i=V.enableDamping),"enabled"in V&&I(10,o=V.enabled),"enablePan"in V&&I(11,e=V.enablePan),"enableRotate"in V&&I(12,t=V.enableRotate),"enableZoom"in V&&I(13,a=V.enableZoom),"keyPanSpeed"in V&&I(14,s=V.keyPanSpeed),"keys"in V&&I(15,D=V.keys),"maxAzimuthAngle"in V&&I(16,G=V.maxAzimuthAngle),"maxDistance"in V&&I(17,n=V.maxDistance),"maxPolarAngle"in V&&I(18,h=V.maxPolarAngle),"maxZoom"in V&&I(19,r=V.maxZoom),"minAzimuthAngle"in V&&I(20,l=V.minAzimuthAngle),"minDistance"in V&&I(21,c=V.minDistance),"minPolarAngle"in V&&I(22,S=V.minPolarAngle),"minZoom"in V&&I(23,y=V.minZoom),"mouseButtons"in V&&I(24,K=V.mouseButtons),"panSpeed"in V&&I(25,F=V.panSpeed),"rotateSpeed"in V&&I(26,k=V.rotateSpeed),"screenSpacePanning"in V&&I(27,M=V.screenSpacePanning),"touches"in V&&I(28,J=V.touches),"zoomSpeed"in V&&I(29,u=V.zoomSpeed),"target"in V&&I(1,Y=V.target),"dispose"in V&&I(2,p=V.dispose)},Q.$$.update=()=>{Q.$$.dirty[0]&1073741761&&(C!==void 0&&I(0,z.autoRotate=C,z),B!==void 0&&I(0,z.autoRotateSpeed=B,z),E!==void 0&&I(0,z.dampingFactor=E,z),i!==void 0&&I(0,z.enableDamping=i,z),o!==void 0&&I(0,z.enabled=o,z),e!==void 0&&I(0,z.enablePan=e,z),t!==void 0&&I(0,z.enableRotate=t,z),a!==void 0&&I(0,z.enableZoom=a,z),s!==void 0&&I(0,z.keyPanSpeed=s,z),D!==void 0&&I(0,z.keys=D,z),G!==void 0&&I(0,z.maxAzimuthAngle=G,z),n!==void 0&&I(0,z.maxDistance=n,z),h!==void 0&&I(0,z.maxPolarAngle=h,z),r!==void 0&&I(0,z.maxZoom=r,z),l!==void 0&&I(0,z.minAzimuthAngle=l,z),c!==void 0&&I(0,z.minDistance=c,z),S!==void 0&&I(0,z.minPolarAngle=S,z),y!==void 0&&I(0,z.minZoom=y,z),K!==void 0&&I(0,z.mouseButtons=K,z),F!==void 0&&I(0,z.panSpeed=F,z),k!==void 0&&I(0,z.rotateSpeed=k,z),M!==void 0&&I(0,z.screenSpacePanning=M,z),J!==void 0&&I(0,z.touches=J,z),u!==void 0&&I(0,z.zoomSpeed=u,z),z.update(),IA("OrbitControls: props changed")),Q.$$.dirty[0]&576&&(C||i?v():BA())},[z,Y,p,m,eA,W,C,B,E,i,o,e,t,a,s,D,G,n,h,r,l,c,S,y,K,F,k,M,J,u]}class yl extends mI{constructor(A){super(),HI(this,A,kl,ll,JI,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const qs=new _A;qs.scale.set(0,0,0);qs.matrix;new uA().fromArray(new Array(16).fill(0));new FA(16777215);const ds=(Q,A)=>{if(A.includes(".")){const I=A.split("."),g=I.pop();for(let C=0;C<I.length;C+=1)Q=Q[I[C]];return{target:Q,key:g}}else return{target:Q,key:A}},Yi=Symbol("initialValueBeforeAttach"),Ml=()=>{const{invalidate:Q}=tC();let A=!1,I=Yi,g,C,B;const E=(o,e,t)=>{if(i(),!t){const a=o;((a==null?void 0:a.isMaterial)||!1)&&(t="material"),((a==null?void 0:a.isBufferGeometry)||(a==null?void 0:a.isGeometry)||!1)&&(t="geometry")}if(t){if(typeof t=="function")g=t(e,o);else{const{target:a,key:s}=ds(e,t);I=a[s],a[s]=o,C=a,B=s}A=!0,Q()}},i=()=>{A&&(g?(g(),g=void 0):C&&B&&I!==Yi&&(C[B]=I,I=Yi,C=void 0,B=void 0),A=!1,Q())};return AI(()=>{i()}),{update:E}},Kl=Q=>Q&&Q.isCamera,ps=Q=>Q&&Q.isOrthographicCamera,fs=Q=>Q&&Q.isPerspectiveCamera,Ul=Q=>fs(Q)||ps(Q),Nl=()=>{const{invalidate:Q,size:A}=tC(),{setCamera:I}=sl();let g,C;AI(()=>{C==null||C()});const B=o=>{g&&(ps(g)?(g.left=o.width/-2,g.right=o.width/2,g.top=o.height/2,g.bottom=o.height/-2,g.updateProjectionMatrix(),g.updateMatrixWorld(),Q()):fs(g)&&(g.aspect=o.width/o.height,g.updateProjectionMatrix(),g.updateMatrixWorld(),Q()))};return{update:(o,e)=>{if(C==null||C(),e||!Ul(o)){g=void 0;return}g=o,C=A.subscribe(B)},makeDefaultCamera:(o,e)=>{!Kl(o)||!e||(I(o),Q())}}},Ea=Q=>!!(Q!=null&&Q.addEventListener),Jl=()=>{const Q=xB(),A=XC(),I=s=>{s!=null&&s.type&&Q(s.type,s)},g=(s,D)=>{Ea(s)&&D.forEach(G=>{s.removeEventListener(G,I)})},C=(s,D)=>{Ea(s)&&D.forEach(G=>{s.addEventListener(G,I)})};let B=[],E;const i=rI([]),o=i.subscribe(s=>{g(E,B),C(E,s),B=s});AI(o);const e=rI(),t=e.subscribe(s=>{g(E,B),C(s,B),E=s});return AI(t),AI(()=>{g(E,B)}),RQ(()=>{i.set(Object.keys(A.$$.callbacks))}),{updateRef:s=>{e.set(s)}}},Rl=["$$scope","$$slots","type","args","attach","instance"],Fl=["fov","aspect","near","far","left","right","top","bottom","zoom"],ql=Q=>typeof Q=="string"||typeof Q=="number"||typeof Q=="boolean"||typeof Q>"u"||Q===null,dl=()=>{const{invalidate:Q}=tC(),A=new Map,I=(C,B,E,i)=>{var t,a;if(ql(E)){const s=A.get(B);if(s&&s.instance===C&&s.value===E)return;A.set(B,{instance:C,value:E})}const{key:o,target:e}=ds(C,B);if(!Array.isArray(E)&&typeof E=="number"&&typeof((t=e[o])==null?void 0:t.setScalar)=="function")e[o].setScalar(E);else if(typeof((a=e[o])==null?void 0:a.set)=="function")Array.isArray(E)?e[o].set(...E):e[o].set(E);else{if(e[o]=E,i.manualCamera)return;Fl.includes(o)&&(e.isPerspectiveCamera||e.isOrthographicCamera)&&e.updateProjectionMatrix()}};return{updateProps:(C,B,E)=>{for(const i in B)Rl.includes(i)||I(C,i,B[i],E),Q()}}},pl=Q=>({ref:Q&1}),ia=Q=>({ref:Q[0]}),fl=Q=>({ref:Q&1}),oa=Q=>({ref:Q[0]});function ea(Q){let A,I;return A=new Rs({props:{object:Q[0],dispose:Q[1]}}),{c(){gI(A.$$.fragment)},m(g,C){zA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.object=g[0]),C&2&&(B.dispose=g[1]),A.$set(B)},i(g){I||(hA(A.$$.fragment,g),I=!0)},o(g){kA(A.$$.fragment,g),I=!1},d(g){$A(A,g)}}}function Yl(Q){let A;const I=Q[12].default,g=Kg(I,Q,Q[13],ia);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&8193)&&Ng(g,I,C,C[13],A?Ug(I,C[13],B,pl):Jg(C[13]),ia)},i(C){A||(hA(g,C),A=!0)},o(C){kA(g,C),A=!1},d(C){g&&g.d(C)}}}function ul(Q){let A,I;return A=new dQ({props:{object:Q[0],$$slots:{default:[Ll]},$$scope:{ctx:Q}}}),{c(){gI(A.$$.fragment)},m(g,C){zA(A,g,C),I=!0},p(g,C){const B={};C&1&&(B.object=g[0]),C&8193&&(B.$$scope={dirty:C,ctx:g}),A.$set(B)},i(g){I||(hA(A.$$.fragment,g),I=!0)},o(g){kA(A.$$.fragment,g),I=!1},d(g){$A(A,g)}}}function Ll(Q){let A;const I=Q[12].default,g=Kg(I,Q,Q[13],oa);return{c(){g&&g.c()},m(C,B){g&&g.m(C,B),A=!0},p(C,B){g&&g.p&&(!A||B&8193)&&Ng(g,I,C,C[13],A?Ug(I,C[13],B,fl):Jg(C[13]),oa)},i(C){A||(hA(g,C),A=!0)},o(C){kA(g,C),A=!1},d(C){g&&g.d(C)}}}function Hl(Q){let A=Q[4](Q[0]),I,g,C,B,E,i,o=A&&ea(Q);const e=[ul,Yl],t=[];function a(s,D){return D&1&&(g=null),g==null&&(g=!!s[3](s[0])),g?0:1}return C=a(Q,-1),B=t[C]=e[C](Q),{c(){o&&o.c(),I=ng(),B.c(),E=JQ()},m(s,D){o&&o.m(s,D),yI(s,I,D),t[C].m(s,D),yI(s,E,D),i=!0},p(s,[D]){D&1&&(A=s[4](s[0])),A?o?(o.p(s,D),D&1&&hA(o,1)):(o=ea(s),o.c(),hA(o,1),o.m(I.parentNode,I)):o&&(WC(),kA(o,1,1,()=>{o=null}),PC());let G=C;C=a(s,D),C===G?t[C].p(s,D):(WC(),kA(t[G],1,1,()=>{t[G]=null}),PC(),B=t[C],B?B.p(s,D):(B=t[C]=e[C](s),B.c()),hA(B,1),B.m(E.parentNode,E))},i(s){i||(hA(o),hA(B),i=!0)},o(s){kA(o),kA(B),i=!1},d(s){o&&o.d(s),s&&GI(I),t[C].d(s),s&&GI(E)}}}function ml(Q,A,I){const g=["type","args","attach","manual","makeDefault","dispose","ref"];let C=se(A,g),B,{$$slots:E={},$$scope:i}=A,{type:o}=A,{args:e=void 0}=A,{attach:t=void 0}=A,{manual:a=void 0}=A,{makeDefault:s=void 0}=A,{dispose:D=void 0}=A;const G=rg("threlte-hierarchical-parent-context");LI(Q,G,J=>I(11,B=J));const n=J=>typeof J=="function"&&/^\s*class\s+/.test(J.toString()),h=J=>Array.isArray(J);let{ref:r=n(o)&&h(e)?new o(...e):n(o)?new o:o}=A,l=!1;const c=rI(r);ag("threlte-hierarchical-parent-context",c);const S=dl(),y=Nl(),K=Ml(),F=Jl(),k=J=>!!J.isObject3D,M=J=>J.dispose!==void 0;return Q.$$set=J=>{A=xi(xi({},A),JD(J)),I(21,C=se(A,g)),"type"in J&&I(5,o=J.type),"args"in J&&I(6,e=J.args),"attach"in J&&I(7,t=J.attach),"manual"in J&&I(8,a=J.manual),"makeDefault"in J&&I(9,s=J.makeDefault),"dispose"in J&&I(1,D=J.dispose),"ref"in J&&I(0,r=J.ref),"$$scope"in J&&I(13,i=J.$$scope)},Q.$$.update=()=>{Q.$$.dirty&1120&&(l?I(0,r=n(o)&&h(e)?new o(...e):n(o)?new o:o):I(10,l=!0)),Q.$$.dirty&1&&c.set(r),S.updateProps(r,C,{manualCamera:a}),Q.$$.dirty&257&&y.update(r,a),Q.$$.dirty&513&&y.makeDefaultCamera(r,s),Q.$$.dirty&2177&&K.update(r,B,t),Q.$$.dirty&1&&F.updateRef(r)},[r,D,G,k,M,o,e,t,a,s,l,B,E,i]}class uB extends mI{constructor(A){super(),HI(this,A,ml,Hl,JI,{type:5,args:6,attach:7,manual:8,makeDefault:9,dispose:1,ref:0})}}function bl(Q){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class ta extends mI{constructor(A){super(),HI(this,A,bl,null,JI,{})}}new Proxy(ta,{get(Q,A){return Q[A]||ta}});Bo(lQ,()=>new lQ(SE));const ui=new WeakMap;class aa extends eC{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,I,g,C){const B=new YB(this.manager);B.setPath(this.path),B.setResponseType("arraybuffer"),B.setRequestHeader(this.requestHeader),B.setWithCredentials(this.withCredentials),B.load(A,E=>{this.parse(E,I,C)},g,C)}parse(A,I,g){this.decodeDracoFile(A,I,null,null,lg).catch(g)}decodeDracoFile(A,I,g,C,B=dB){const E={attributeIDs:g||this.defaultAttributeIDs,attributeTypes:C||this.defaultAttributeTypes,useUniqueIDs:!!g,vertexColorSpace:B};return this.decodeGeometry(A,E).then(I)}decodeGeometry(A,I){const g=JSON.stringify(I);if(ui.has(A)){const o=ui.get(A);if(o.key===g)return o.promise;if(A.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let C;const B=this.workerNextTaskID++,E=A.byteLength,i=this._getWorker(B,E).then(o=>(C=o,new Promise((e,t)=>{C._callbacks[B]={resolve:e,reject:t},C.postMessage({type:"decode",id:B,taskConfig:I,buffer:A},[A])}))).then(o=>this._createGeometry(o.geometry));return i.catch(()=>!0).then(()=>{C&&B&&this._releaseTask(C,B)}),ui.set(A,{key:g,promise:i}),i}_createGeometry(A){const I=new Bg;A.index&&I.setIndex(new xI(A.index.array,1));for(let g=0;g<A.attributes.length;g++){const C=A.attributes[g],B=C.name,E=C.array,i=C.itemSize,o=new xI(E,i);B==="color"&&this._assignVertexColorSpace(o,C.vertexColorSpace),I.setAttribute(B,o)}return I}_assignVertexColorSpace(A,I){if(I!==lg)return;const g=new FA;for(let C=0,B=A.count;C<B;C++)g.fromBufferAttribute(A,C).convertSRGBToLinear(),A.setXYZ(C,g.r,g.g,g.b)}_loadLibrary(A,I){const g=new YB(this.manager);return g.setPath(this.decoderPath),g.setResponseType(I),g.setWithCredentials(this.withCredentials),new Promise((C,B)=>{g.load(A,C,void 0,B)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const A=typeof WebAssembly!="object"||this.decoderConfig.type==="js",I=[];return A?I.push(this._loadLibrary("draco_decoder.js","text")):(I.push(this._loadLibrary("draco_wasm_wrapper.js","text")),I.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(I).then(g=>{const C=g[0];A||(this.decoderConfig.wasmBinary=g[1]);const B=Tl.toString(),E=["/* draco decoder */",C,"","/* worker */",B.substring(B.indexOf("{")+1,B.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(B){const E=B.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,B){return C._taskLoad>B._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Tl(){let Q,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":Q=i.decoderConfig,A=new Promise(function(t){Q.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(Q)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const D=I(a,s,new Int8Array(o),e),G=D.attributes.map(n=>n.array.buffer);D.index&&G.push(D.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:D},G)}catch(D){console.error(D),self.postMessage({type:"error",id:i.id,error:D.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,D;const G=i.GetEncodedGeometryType(o);if(G===E.TRIANGULAR_MESH)s=new E.Mesh,D=i.DecodeArrayToMesh(o,o.byteLength,s);else if(G===E.POINT_CLOUD)s=new E.PointCloud,D=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!D.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+D.error_msg());const n={index:null,attributes:[]};for(const h in t){const r=self[a[h]];let l,c;if(e.useUniqueIDs)c=t[h],l=i.GetAttributeByUniqueId(s,c);else{if(c=i.GetAttributeId(s,E[t[h]]),c===-1)continue;l=i.GetAttribute(s,c)}const S=C(E,i,s,h,r,l);h==="color"&&(S.vertexColorSpace=e.vertexColorSpace),n.attributes.push(S)}return G===E.TRIANGULAR_MESH&&(n.index=g(E,i,s)),E.destroy(s),n}function g(E,i,o){const t=o.num_faces()*3,a=t*4,s=E._malloc(a);i.GetTrianglesUInt32Array(o,a,s);const D=new Uint32Array(E.HEAPF32.buffer,s,t).slice();return E._free(s),{array:D,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),G=o.num_points()*s,n=G*t.BYTES_PER_ELEMENT,h=B(E,t),r=E._malloc(n);i.GetAttributeDataArrayForAllPoints(o,a,h,n,r);const l=new t(E.HEAPF32.buffer,r,G).slice();return E._free(r),{name:e,array:l,itemSize:s}}function B(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}function sa(Q,A){if(A===Mn)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),Q;if(A===Vi||A===za){let I=Q.getIndex();if(I===null){const E=[],i=Q.getAttribute("position");if(i!==void 0){for(let o=0;o<i.count;o++)E.push(o);Q.setIndex(E),I=Q.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),Q}const g=I.count-2,C=[];if(A===Vi)for(let E=1;E<=g;E++)C.push(I.getX(0)),C.push(I.getX(E)),C.push(I.getX(E+1));else for(let E=0;E<g;E++)E%2===0?(C.push(I.getX(E)),C.push(I.getX(E+1)),C.push(I.getX(E+2))):(C.push(I.getX(E+2)),C.push(I.getX(E+1)),C.push(I.getX(E)));C.length/3!==g&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const B=Q.clone();return B.setIndex(C),B.clearGroups(),B}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",A),Q}class Da extends eC{constructor(A){super(A),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(I){return new Pl(I)}),this.register(function(I){return new $l(I)}),this.register(function(I){return new Ak(I)}),this.register(function(I){return new Ik(I)}),this.register(function(I){return new jl(I)}),this.register(function(I){return new Vl(I)}),this.register(function(I){return new _l(I)}),this.register(function(I){return new Xl(I)}),this.register(function(I){return new Wl(I)}),this.register(function(I){return new zl(I)}),this.register(function(I){return new vl(I)}),this.register(function(I){return new Ol(I)}),this.register(function(I){return new gk(I)}),this.register(function(I){return new Ck(I)})}load(A,I,g,C){const B=this;let E;this.resourcePath!==""?E=this.resourcePath:this.path!==""?E=this.path:E=Io.extractUrlBase(A),this.manager.itemStart(A);const i=function(e){C?C(e):console.error(e),B.manager.itemError(A),B.manager.itemEnd(A)},o=new YB(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(A,function(e){try{B.parse(e,E,function(t){I(t),B.manager.itemEnd(A)},i)}catch(t){i(t)}},g,i)}setDRACOLoader(A){return this.dracoLoader=A,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(A){return this.ktx2Loader=A,this}setMeshoptDecoder(A){return this.meshoptDecoder=A,this}register(A){return this.pluginCallbacks.indexOf(A)===-1&&this.pluginCallbacks.push(A),this}unregister(A){return this.pluginCallbacks.indexOf(A)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(A),1),this}parse(A,I,g,C){let B;const E={},i={},o=new TextDecoder;if(typeof A=="string")B=JSON.parse(A);else if(A instanceof ArrayBuffer)if(o.decode(new Uint8Array(A,0,4))===Ys){try{E[ZA.KHR_BINARY_GLTF]=new Bk(A)}catch(a){C&&C(a);return}B=JSON.parse(E[ZA.KHR_BINARY_GLTF].content)}else B=JSON.parse(o.decode(A));else B=A;if(B.asset===void 0||B.asset.version[0]<2){C&&C(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const e=new ck(B,{path:I||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});e.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const a=this.pluginCallbacks[t](e);i[a.name]=a,E[a.name]=!0}if(B.extensionsUsed)for(let t=0;t<B.extensionsUsed.length;++t){const a=B.extensionsUsed[t],s=B.extensionsRequired||[];switch(a){case ZA.KHR_MATERIALS_UNLIT:E[a]=new Zl;break;case ZA.KHR_DRACO_MESH_COMPRESSION:E[a]=new Qk(B,this.dracoLoader);break;case ZA.KHR_TEXTURE_TRANSFORM:E[a]=new Ek;break;case ZA.KHR_MESH_QUANTIZATION:E[a]=new ik;break;default:s.indexOf(a)>=0&&i[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}e.setExtensions(E),e.setPlugins(i),e.parse(g,C)}parseAsync(A,I){const g=this;return new Promise(function(C,B){g.parse(A,I,C,B)})}}function xl(){let Q={};return{get:function(A){return Q[A]},add:function(A,I){Q[A]=I},remove:function(A){delete Q[A]},removeAll:function(){Q={}}}}const ZA={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ol{constructor(A){this.parser=A,this.name=ZA.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const A=this.parser,I=this.parser.json.nodes||[];for(let g=0,C=I.length;g<C;g++){const B=I[g];B.extensions&&B.extensions[this.name]&&B.extensions[this.name].light!==void 0&&A._addNodeRef(this.cache,B.extensions[this.name].light)}}_loadLight(A){const I=this.parser,g="light:"+A;let C=I.cache.get(g);if(C)return C;const B=I.json,o=((B.extensions&&B.extensions[this.name]||{}).lights||[])[A];let e;const t=new FA(16777215);o.color!==void 0&&t.fromArray(o.color);const a=o.range!==void 0?o.range:0;switch(o.type){case"directional":e=new Ms(t),e.target.position.set(0,0,-1),e.add(e.target);break;case"point":e=new GS(t),e.distance=a;break;case"spot":e=new rS(t),e.distance=a,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,e.angle=o.spot.outerConeAngle,e.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,e.target.position.set(0,0,-1),e.add(e.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return e.position.set(0,0,0),e.decay=2,GC(e,o),o.intensity!==void 0&&(e.intensity=o.intensity),e.name=I.createUniqueName(o.name||"light_"+A),C=Promise.resolve(e),I.cache.add(g,C),C}getDependency(A,I){if(A==="light")return this._loadLight(I)}createNodeAttachment(A){const I=this,g=this.parser,B=g.json.nodes[A],i=(B.extensions&&B.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(o){return g._getNodeRef(I.cache,i,o)})}}class Zl{constructor(){this.name=ZA.KHR_MATERIALS_UNLIT}getMaterialType(){return TC}extendParams(A,I,g){const C=[];A.color=new FA(1,1,1),A.opacity=1;const B=I.pbrMetallicRoughness;if(B){if(Array.isArray(B.baseColorFactor)){const E=B.baseColorFactor;A.color.fromArray(E),A.opacity=E[3]}B.baseColorTexture!==void 0&&C.push(g.assignTexture(A,"map",B.baseColorTexture,VA))}return Promise.all(C)}}class Wl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name].emissiveStrength;return B!==void 0&&(I.emissiveIntensity=B),Promise.resolve()}}class Pl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_CLEARCOAT}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];if(E.clearcoatFactor!==void 0&&(I.clearcoat=E.clearcoatFactor),E.clearcoatTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatMap",E.clearcoatTexture)),E.clearcoatRoughnessFactor!==void 0&&(I.clearcoatRoughness=E.clearcoatRoughnessFactor),E.clearcoatRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"clearcoatRoughnessMap",E.clearcoatRoughnessTexture)),E.clearcoatNormalTexture!==void 0&&(B.push(g.assignTexture(I,"clearcoatNormalMap",E.clearcoatNormalTexture)),E.clearcoatNormalTexture.scale!==void 0)){const i=E.clearcoatNormalTexture.scale;I.clearcoatNormalScale=new JA(i,i)}return Promise.all(B)}}class vl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_IRIDESCENCE}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];return E.iridescenceFactor!==void 0&&(I.iridescence=E.iridescenceFactor),E.iridescenceTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceMap",E.iridescenceTexture)),E.iridescenceIor!==void 0&&(I.iridescenceIOR=E.iridescenceIor),I.iridescenceThicknessRange===void 0&&(I.iridescenceThicknessRange=[100,400]),E.iridescenceThicknessMinimum!==void 0&&(I.iridescenceThicknessRange[0]=E.iridescenceThicknessMinimum),E.iridescenceThicknessMaximum!==void 0&&(I.iridescenceThicknessRange[1]=E.iridescenceThicknessMaximum),E.iridescenceThicknessTexture!==void 0&&B.push(g.assignTexture(I,"iridescenceThicknessMap",E.iridescenceThicknessTexture)),Promise.all(B)}}class jl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_SHEEN}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[];I.sheenColor=new FA(0,0,0),I.sheenRoughness=0,I.sheen=1;const E=C.extensions[this.name];return E.sheenColorFactor!==void 0&&I.sheenColor.fromArray(E.sheenColorFactor),E.sheenRoughnessFactor!==void 0&&(I.sheenRoughness=E.sheenRoughnessFactor),E.sheenColorTexture!==void 0&&B.push(g.assignTexture(I,"sheenColorMap",E.sheenColorTexture,VA)),E.sheenRoughnessTexture!==void 0&&B.push(g.assignTexture(I,"sheenRoughnessMap",E.sheenRoughnessTexture)),Promise.all(B)}}class Vl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_TRANSMISSION}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];return E.transmissionFactor!==void 0&&(I.transmission=E.transmissionFactor),E.transmissionTexture!==void 0&&B.push(g.assignTexture(I,"transmissionMap",E.transmissionTexture)),Promise.all(B)}}class _l{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_VOLUME}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];I.thickness=E.thicknessFactor!==void 0?E.thicknessFactor:0,E.thicknessTexture!==void 0&&B.push(g.assignTexture(I,"thicknessMap",E.thicknessTexture)),I.attenuationDistance=E.attenuationDistance||1/0;const i=E.attenuationColor||[1,1,1];return I.attenuationColor=new FA(i[0],i[1],i[2]),Promise.all(B)}}class Xl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_IOR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const C=this.parser.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=C.extensions[this.name];return I.ior=B.ior!==void 0?B.ior:1.5,Promise.resolve()}}class zl{constructor(A){this.parser=A,this.name=ZA.KHR_MATERIALS_SPECULAR}getMaterialType(A){const g=this.parser.json.materials[A];return!g.extensions||!g.extensions[this.name]?null:AB}extendMaterialParams(A,I){const g=this.parser,C=g.json.materials[A];if(!C.extensions||!C.extensions[this.name])return Promise.resolve();const B=[],E=C.extensions[this.name];I.specularIntensity=E.specularFactor!==void 0?E.specularFactor:1,E.specularTexture!==void 0&&B.push(g.assignTexture(I,"specularIntensityMap",E.specularTexture));const i=E.specularColorFactor||[1,1,1];return I.specularColor=new FA(i[0],i[1],i[2]),E.specularColorTexture!==void 0&&B.push(g.assignTexture(I,"specularColorMap",E.specularColorTexture,VA)),Promise.all(B)}}class $l{constructor(A){this.parser=A,this.name=ZA.KHR_TEXTURE_BASISU}loadTexture(A){const I=this.parser,g=I.json,C=g.textures[A];if(!C.extensions||!C.extensions[this.name])return null;const B=C.extensions[this.name],E=I.options.ktx2Loader;if(!E){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return I.loadTextureImage(A,B.source,E)}}class Ak{constructor(A){this.parser=A,this.name=ZA.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const E=B.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class Ik{constructor(A){this.parser=A,this.name=ZA.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(A){const I=this.name,g=this.parser,C=g.json,B=C.textures[A];if(!B.extensions||!B.extensions[I])return null;const E=B.extensions[I],i=C.images[E.source];let o=g.textureLoader;if(i.uri){const e=g.options.manager.getHandler(i.uri);e!==null&&(o=e)}return this.detectSupport().then(function(e){if(e)return g.loadTextureImage(A,E.source,o);if(C.extensionsRequired&&C.extensionsRequired.indexOf(I)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return g.loadTexture(A)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(A){const I=new Image;I.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",I.onload=I.onerror=function(){A(I.height===1)}})),this.isSupported}}class gk{constructor(A){this.name=ZA.EXT_MESHOPT_COMPRESSION,this.parser=A}loadBufferView(A){const I=this.parser.json,g=I.bufferViews[A];if(g.extensions&&g.extensions[this.name]){const C=g.extensions[this.name],B=this.parser.getDependency("buffer",C.buffer),E=this.parser.options.meshoptDecoder;if(!E||!E.supported){if(I.extensionsRequired&&I.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return B.then(function(i){const o=C.byteOffset||0,e=C.byteLength||0,t=C.count,a=C.byteStride,s=new Uint8Array(i,o,e);return E.decodeGltfBufferAsync?E.decodeGltfBufferAsync(t,a,s,C.mode,C.filter).then(function(D){return D.buffer}):E.ready.then(function(){const D=new ArrayBuffer(t*a);return E.decodeGltfBuffer(new Uint8Array(D),t,a,s,C.mode,C.filter),D})})}else return null}}class Ck{constructor(A){this.name=ZA.EXT_MESH_GPU_INSTANCING,this.parser=A}createNodeMesh(A){const I=this.parser.json,g=I.nodes[A];if(!g.extensions||!g.extensions[this.name]||g.mesh===void 0)return null;const C=I.meshes[g.mesh];for(const e of C.primitives)if(e.mode!==Sg.TRIANGLES&&e.mode!==Sg.TRIANGLE_STRIP&&e.mode!==Sg.TRIANGLE_FAN&&e.mode!==void 0)return null;const E=g.extensions[this.name].attributes,i=[],o={};for(const e in E)i.push(this.parser.getDependency("accessor",E[e]).then(t=>(o[e]=t,o[e])));return i.length<1?null:(i.push(this.parser.createNodeMesh(A)),Promise.all(i).then(e=>{const t=e.pop(),a=t.isGroup?t.children:[t],s=e[0].count,D=[];for(const G of a){const n=new uA,h=new d,r=new KI,l=new d(1,1,1),c=new $w(G.geometry,G.material,s);for(let S=0;S<s;S++)o.TRANSLATION&&h.fromBufferAttribute(o.TRANSLATION,S),o.ROTATION&&r.fromBufferAttribute(o.ROTATION,S),o.SCALE&&l.fromBufferAttribute(o.SCALE,S),c.setMatrixAt(S,n.compose(h,r,l));for(const S in o)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&G.geometry.setAttribute(S,o[S]);_A.prototype.copy.call(c,G),c.frustumCulled=!1,this.parser.assignFinalMaterial(c),D.push(c)}return t.isGroup?(t.clear(),t.add(...D),t):D[0]}))}}const Ys="glTF",EQ=12,na={JSON:1313821514,BIN:5130562};class Bk{constructor(A){this.name=ZA.KHR_BINARY_GLTF,this.content=null,this.body=null;const I=new DataView(A,0,EQ),g=new TextDecoder;if(this.header={magic:g.decode(new Uint8Array(A.slice(0,4))),version:I.getUint32(4,!0),length:I.getUint32(8,!0)},this.header.magic!==Ys)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const C=this.header.length-EQ,B=new DataView(A,EQ);let E=0;for(;E<C;){const i=B.getUint32(E,!0);E+=4;const o=B.getUint32(E,!0);if(E+=4,o===na.JSON){const e=new Uint8Array(A,EQ+E,i);this.content=g.decode(e)}else if(o===na.BIN){const e=EQ+E;this.body=A.slice(e,e+i)}E+=i}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qk{constructor(A,I){if(!I)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ZA.KHR_DRACO_MESH_COMPRESSION,this.json=A,this.dracoLoader=I,this.dracoLoader.preload()}decodePrimitive(A,I){const g=this.json,C=this.dracoLoader,B=A.extensions[this.name].bufferView,E=A.extensions[this.name].attributes,i={},o={},e={};for(const t in E){const a=Qo[t]||t.toLowerCase();i[a]=E[t]}for(const t in A.attributes){const a=Qo[t]||t.toLowerCase();if(E[t]!==void 0){const s=g.accessors[A.attributes[t]],D=UB[s.componentType];e[a]=D.name,o[a]=s.normalized===!0}}return I.getDependency("bufferView",B).then(function(t){return new Promise(function(a){C.decodeDracoFile(t,function(s){for(const D in s.attributes){const G=s.attributes[D],n=o[D];n!==void 0&&(G.normalized=n)}a(s)},i,e)})})}}class Ek{constructor(){this.name=ZA.KHR_TEXTURE_TRANSFORM}extendTexture(A,I){return I.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),I.offset===void 0&&I.rotation===void 0&&I.scale===void 0||(A=A.clone(),I.offset!==void 0&&A.offset.fromArray(I.offset),I.rotation!==void 0&&(A.rotation=I.rotation),I.scale!==void 0&&A.repeat.fromArray(I.scale),A.needsUpdate=!0),A}}class ik{constructor(){this.name=ZA.KHR_MESH_QUANTIZATION}}class us extends qQ{constructor(A,I,g,C){super(A,I,g,C)}copySampleValue_(A){const I=this.resultBuffer,g=this.sampleValues,C=this.valueSize,B=A*C*3+C;for(let E=0;E!==C;E++)I[E]=g[B+E];return I}interpolate_(A,I,g,C){const B=this.resultBuffer,E=this.sampleValues,i=this.valueSize,o=i*2,e=i*3,t=C-I,a=(g-I)/t,s=a*a,D=s*a,G=A*e,n=G-e,h=-2*D+3*s,r=D-s,l=1-h,c=r-s+a;for(let S=0;S!==i;S++){const y=E[n+S+i],K=E[n+S+o]*t,F=E[G+S+i],k=E[G+S]*t;B[S]=l*y+c*K+h*F+r*k}return B}}const ok=new KI;class ek extends us{interpolate_(A,I,g,C){const B=super.interpolate_(A,I,g,C);return ok.fromArray(B).normalize().toArray(B),B}}const Sg={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},UB={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ha={9728:uI,9729:nI,9984:ji,9985:_a,9986:aE,9987:kC},ra={33071:Cg,33648:wE,10497:RB},Li={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rC={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tk={CUBICSPLINE:void 0,LINEAR:qB,STEP:rQ},Hi={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ak(Q){return Q.DefaultMaterial===void 0&&(Q.DefaultMaterial=new LE({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:QC})),Q.DefaultMaterial}function iQ(Q,A,I){for(const g in I.extensions)Q[g]===void 0&&(A.userData.gltfExtensions=A.userData.gltfExtensions||{},A.userData.gltfExtensions[g]=I.extensions[g])}function GC(Q,A){A.extras!==void 0&&(typeof A.extras=="object"?Object.assign(Q.userData,A.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+A.extras))}function sk(Q,A,I){let g=!1,C=!1,B=!1;for(let e=0,t=A.length;e<t;e++){const a=A[e];if(a.POSITION!==void 0&&(g=!0),a.NORMAL!==void 0&&(C=!0),a.COLOR_0!==void 0&&(B=!0),g&&C&&B)break}if(!g&&!C&&!B)return Promise.resolve(Q);const E=[],i=[],o=[];for(let e=0,t=A.length;e<t;e++){const a=A[e];if(g){const s=a.POSITION!==void 0?I.getDependency("accessor",a.POSITION):Q.attributes.position;E.push(s)}if(C){const s=a.NORMAL!==void 0?I.getDependency("accessor",a.NORMAL):Q.attributes.normal;i.push(s)}if(B){const s=a.COLOR_0!==void 0?I.getDependency("accessor",a.COLOR_0):Q.attributes.color;o.push(s)}}return Promise.all([Promise.all(E),Promise.all(i),Promise.all(o)]).then(function(e){const t=e[0],a=e[1],s=e[2];return g&&(Q.morphAttributes.position=t),C&&(Q.morphAttributes.normal=a),B&&(Q.morphAttributes.color=s),Q.morphTargetsRelative=!0,Q})}function Dk(Q,A){if(Q.updateMorphTargets(),A.weights!==void 0)for(let I=0,g=A.weights.length;I<g;I++)Q.morphTargetInfluences[I]=A.weights[I];if(A.extras&&Array.isArray(A.extras.targetNames)){const I=A.extras.targetNames;if(Q.morphTargetInfluences.length===I.length){Q.morphTargetDictionary={};for(let g=0,C=I.length;g<C;g++)Q.morphTargetDictionary[I[g]]=g}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nk(Q){const A=Q.extensions&&Q.extensions[ZA.KHR_DRACO_MESH_COMPRESSION];let I;return A?I="draco:"+A.bufferView+":"+A.indices+":"+ca(A.attributes):I=Q.indices+":"+ca(Q.attributes)+":"+Q.mode,I}function ca(Q){let A="";const I=Object.keys(Q).sort();for(let g=0,C=I.length;g<C;g++)A+=I[g]+":"+Q[I[g]]+";";return A}function Eo(Q){switch(Q){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hk(Q){return Q.search(/\.jpe?g($|\?)/i)>0||Q.search(/^data\:image\/jpeg/)===0?"image/jpeg":Q.search(/\.webp($|\?)/i)>0||Q.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const rk=new uA;class ck{constructor(A={},I={}){this.json=A,this.extensions={},this.plugins={},this.options=I,this.cache=new xl,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let g=!1,C=!1,B=-1;typeof navigator<"u"&&(g=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,C=navigator.userAgent.indexOf("Firefox")>-1,B=C?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||g||C&&B<98?this.textureLoader=new lQ(this.options.manager):this.textureLoader=new SS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new YB(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(A){this.extensions=A}setPlugins(A){this.plugins=A}parse(A,I){const g=this,C=this.json,B=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(E){return E._markDefs&&E._markDefs()}),Promise.all(this._invokeAll(function(E){return E.beforeRoot&&E.beforeRoot()})).then(function(){return Promise.all([g.getDependencies("scene"),g.getDependencies("animation"),g.getDependencies("camera")])}).then(function(E){const i={scene:E[0][C.scene||0],scenes:E[0],animations:E[1],cameras:E[2],asset:C.asset,parser:g,userData:{}};iQ(B,i,C),GC(i,C),Promise.all(g._invokeAll(function(o){return o.afterRoot&&o.afterRoot(i)})).then(function(){A(i)})}).catch(I)}_markDefs(){const A=this.json.nodes||[],I=this.json.skins||[],g=this.json.meshes||[];for(let C=0,B=I.length;C<B;C++){const E=I[C].joints;for(let i=0,o=E.length;i<o;i++)A[E[i]].isBone=!0}for(let C=0,B=A.length;C<B;C++){const E=A[C];E.mesh!==void 0&&(this._addNodeRef(this.meshCache,E.mesh),E.skin!==void 0&&(g[E.mesh].isSkinnedMesh=!0)),E.camera!==void 0&&this._addNodeRef(this.cameraCache,E.camera)}}_addNodeRef(A,I){I!==void 0&&(A.refs[I]===void 0&&(A.refs[I]=A.uses[I]=0),A.refs[I]++)}_getNodeRef(A,I,g){if(A.refs[I]<=1)return g;const C=g.clone(),B=(E,i)=>{const o=this.associations.get(E);o!=null&&this.associations.set(i,o);for(const[e,t]of E.children.entries())B(t,i.children[e])};return B(g,C),C.name+="_instance_"+A.uses[I]++,C}_invokeOne(A){const I=Object.values(this.plugins);I.push(this);for(let g=0;g<I.length;g++){const C=A(I[g]);if(C)return C}return null}_invokeAll(A){const I=Object.values(this.plugins);I.unshift(this);const g=[];for(let C=0;C<I.length;C++){const B=A(I[C]);B&&g.push(B)}return g}getDependency(A,I){const g=A+":"+I;let C=this.cache.get(g);if(!C){switch(A){case"scene":C=this.loadScene(I);break;case"node":C=this._invokeOne(function(B){return B.loadNode&&B.loadNode(I)});break;case"mesh":C=this._invokeOne(function(B){return B.loadMesh&&B.loadMesh(I)});break;case"accessor":C=this.loadAccessor(I);break;case"bufferView":C=this._invokeOne(function(B){return B.loadBufferView&&B.loadBufferView(I)});break;case"buffer":C=this.loadBuffer(I);break;case"material":C=this._invokeOne(function(B){return B.loadMaterial&&B.loadMaterial(I)});break;case"texture":C=this._invokeOne(function(B){return B.loadTexture&&B.loadTexture(I)});break;case"skin":C=this.loadSkin(I);break;case"animation":C=this._invokeOne(function(B){return B.loadAnimation&&B.loadAnimation(I)});break;case"camera":C=this.loadCamera(I);break;default:if(C=this._invokeOne(function(B){return B!=this&&B.getDependency&&B.getDependency(A,I)}),!C)throw new Error("Unknown type: "+A);break}this.cache.add(g,C)}return C}getDependencies(A){let I=this.cache.get(A);if(!I){const g=this,C=this.json[A+(A==="mesh"?"es":"s")]||[];I=Promise.all(C.map(function(B,E){return g.getDependency(A,E)})),this.cache.add(A,I)}return I}loadBuffer(A){const I=this.json.buffers[A],g=this.fileLoader;if(I.type&&I.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+I.type+" buffer type is not supported.");if(I.uri===void 0&&A===0)return Promise.resolve(this.extensions[ZA.KHR_BINARY_GLTF].body);const C=this.options;return new Promise(function(B,E){g.load(Io.resolveURL(I.uri,C.path),B,void 0,function(){E(new Error('THREE.GLTFLoader: Failed to load buffer "'+I.uri+'".'))})})}loadBufferView(A){const I=this.json.bufferViews[A];return this.getDependency("buffer",I.buffer).then(function(g){const C=I.byteLength||0,B=I.byteOffset||0;return g.slice(B,B+C)})}loadAccessor(A){const I=this,g=this.json,C=this.json.accessors[A];if(C.bufferView===void 0&&C.sparse===void 0){const E=Li[C.type],i=UB[C.componentType],o=C.normalized===!0,e=new i(C.count*E);return Promise.resolve(new xI(e,E,o))}const B=[];return C.bufferView!==void 0?B.push(this.getDependency("bufferView",C.bufferView)):B.push(null),C.sparse!==void 0&&(B.push(this.getDependency("bufferView",C.sparse.indices.bufferView)),B.push(this.getDependency("bufferView",C.sparse.values.bufferView))),Promise.all(B).then(function(E){const i=E[0],o=Li[C.type],e=UB[C.componentType],t=e.BYTES_PER_ELEMENT,a=t*o,s=C.byteOffset||0,D=C.bufferView!==void 0?g.bufferViews[C.bufferView].byteStride:void 0,G=C.normalized===!0;let n,h;if(D&&D!==a){const r=Math.floor(s/D),l="InterleavedBuffer:"+C.bufferView+":"+C.componentType+":"+r+":"+C.count;let c=I.cache.get(l);c||(n=new e(i,r*D,C.count*D/t),c=new jw(n,D/t),I.cache.add(l,c)),h=new Ko(c,o,s%D/t,G)}else i===null?n=new e(C.count*o):n=new e(i,s,C.count*o),h=new xI(n,o,G);if(C.sparse!==void 0){const r=Li.SCALAR,l=UB[C.sparse.indices.componentType],c=C.sparse.indices.byteOffset||0,S=C.sparse.values.byteOffset||0,y=new l(E[1],c,C.sparse.count*r),K=new e(E[2],S,C.sparse.count*o);i!==null&&(h=new xI(h.array.slice(),h.itemSize,h.normalized));for(let F=0,k=y.length;F<k;F++){const M=y[F];if(h.setX(M,K[F*o]),o>=2&&h.setY(M,K[F*o+1]),o>=3&&h.setZ(M,K[F*o+2]),o>=4&&h.setW(M,K[F*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return h})}loadTexture(A){const I=this.json,g=this.options,B=I.textures[A].source,E=I.images[B];let i=this.textureLoader;if(E.uri){const o=g.manager.getHandler(E.uri);o!==null&&(i=o)}return this.loadTextureImage(A,B,i)}loadTextureImage(A,I,g){const C=this,B=this.json,E=B.textures[A],i=B.images[I],o=(i.uri||i.bufferView)+":"+E.sampler;if(this.textureCache[o])return this.textureCache[o];const e=this.loadImageSource(I,g).then(function(t){t.flipY=!1,t.name=E.name||i.name||"";const s=(B.samplers||{})[E.sampler]||{};return t.magFilter=ha[s.magFilter]||nI,t.minFilter=ha[s.minFilter]||kC,t.wrapS=ra[s.wrapS]||RB,t.wrapT=ra[s.wrapT]||RB,C.associations.set(t,{textures:A}),t}).catch(function(){return null});return this.textureCache[o]=e,e}loadImageSource(A,I){const g=this,C=this.json,B=this.options;if(this.sourceCache[A]!==void 0)return this.sourceCache[A].then(a=>a.clone());const E=C.images[A],i=self.URL||self.webkitURL;let o=E.uri||"",e=!1;if(E.bufferView!==void 0)o=g.getDependency("bufferView",E.bufferView).then(function(a){e=!0;const s=new Blob([a],{type:E.mimeType});return o=i.createObjectURL(s),o});else if(E.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+A+" is missing URI and bufferView");const t=Promise.resolve(o).then(function(a){return new Promise(function(s,D){let G=s;I.isImageBitmapLoader===!0&&(G=function(n){const h=new TI(n);h.needsUpdate=!0,s(h)}),I.load(Io.resolveURL(a,B.path),G,void 0,D)})}).then(function(a){return e===!0&&i.revokeObjectURL(o),a.userData.mimeType=E.mimeType||hk(E.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),a});return this.sourceCache[A]=t,t}assignTexture(A,I,g,C){const B=this;return this.getDependency("texture",g.index).then(function(E){if(!E)return null;if(g.texCoord!==void 0&&g.texCoord!=0&&!(I==="aoMap"&&g.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+g.texCoord+" for texture "+I+" not yet supported."),B.extensions[ZA.KHR_TEXTURE_TRANSFORM]){const i=g.extensions!==void 0?g.extensions[ZA.KHR_TEXTURE_TRANSFORM]:void 0;if(i){const o=B.associations.get(E);E=B.extensions[ZA.KHR_TEXTURE_TRANSFORM].extendTexture(E,i),B.associations.set(E,o)}}return C!==void 0&&(E.encoding=C),A[I]=E,E})}assignFinalMaterial(A){const I=A.geometry;let g=A.material;const C=I.attributes.tangent===void 0,B=I.attributes.color!==void 0,E=I.attributes.normal===void 0;if(A.isPoints){const i="PointsMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new ws,Og.prototype.copy.call(o,g),o.color.copy(g.color),o.map=g.map,o.sizeAttenuation=!1,this.cache.add(i,o)),g=o}else if(A.isLine){const i="LineBasicMaterial:"+g.uuid;let o=this.cache.get(i);o||(o=new Gs,Og.prototype.copy.call(o,g),o.color.copy(g.color),this.cache.add(i,o)),g=o}if(C||B||E){let i="ClonedMaterial:"+g.uuid+":";C&&(i+="derivative-tangents:"),B&&(i+="vertex-colors:"),E&&(i+="flat-shading:");let o=this.cache.get(i);o||(o=g.clone(),B&&(o.vertexColors=!0),E&&(o.flatShading=!0),C&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(i,o),this.associations.set(o,this.associations.get(g))),g=o}g.aoMap&&I.attributes.uv2===void 0&&I.attributes.uv!==void 0&&I.setAttribute("uv2",I.attributes.uv),A.material=g}getMaterialType(){return LE}loadMaterial(A){const I=this,g=this.json,C=this.extensions,B=g.materials[A];let E;const i={},o=B.extensions||{},e=[];if(o[ZA.KHR_MATERIALS_UNLIT]){const a=C[ZA.KHR_MATERIALS_UNLIT];E=a.getMaterialType(),e.push(a.extendParams(i,B,I))}else{const a=B.pbrMetallicRoughness||{};if(i.color=new FA(1,1,1),i.opacity=1,Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;i.color.fromArray(s),i.opacity=s[3]}a.baseColorTexture!==void 0&&e.push(I.assignTexture(i,"map",a.baseColorTexture,VA)),i.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,i.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(e.push(I.assignTexture(i,"metalnessMap",a.metallicRoughnessTexture)),e.push(I.assignTexture(i,"roughnessMap",a.metallicRoughnessTexture))),E=this._invokeOne(function(s){return s.getMaterialType&&s.getMaterialType(A)}),e.push(Promise.all(this._invokeAll(function(s){return s.extendMaterialParams&&s.extendMaterialParams(A,i)})))}B.doubleSided===!0&&(i.side=bg);const t=B.alphaMode||Hi.OPAQUE;if(t===Hi.BLEND?(i.transparent=!0,i.depthWrite=!1):(i.transparent=!1,t===Hi.MASK&&(i.alphaTest=B.alphaCutoff!==void 0?B.alphaCutoff:.5)),B.normalTexture!==void 0&&E!==TC&&(e.push(I.assignTexture(i,"normalMap",B.normalTexture)),i.normalScale=new JA(1,1),B.normalTexture.scale!==void 0)){const a=B.normalTexture.scale;i.normalScale.set(a,a)}return B.occlusionTexture!==void 0&&E!==TC&&(e.push(I.assignTexture(i,"aoMap",B.occlusionTexture)),B.occlusionTexture.strength!==void 0&&(i.aoMapIntensity=B.occlusionTexture.strength)),B.emissiveFactor!==void 0&&E!==TC&&(i.emissive=new FA().fromArray(B.emissiveFactor)),B.emissiveTexture!==void 0&&E!==TC&&e.push(I.assignTexture(i,"emissiveMap",B.emissiveTexture,VA)),Promise.all(e).then(function(){const a=new E(i);return B.name&&(a.name=B.name),GC(a,B),I.associations.set(a,{materials:A}),B.extensions&&iQ(C,a,B),a})}createUniqueName(A){const I=II.sanitizeNodeName(A||"");let g=I;for(let C=1;this.nodeNamesUsed[g];++C)g=I+"_"+C;return this.nodeNamesUsed[g]=!0,g}loadGeometries(A){const I=this,g=this.extensions,C=this.primitiveCache;function B(i){return g[ZA.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(i,I).then(function(o){return Ga(o,i,I)})}const E=[];for(let i=0,o=A.length;i<o;i++){const e=A[i],t=nk(e),a=C[t];if(a)E.push(a.promise);else{let s;e.extensions&&e.extensions[ZA.KHR_DRACO_MESH_COMPRESSION]?s=B(e):s=Ga(new Bg,e,I),C[t]={primitive:e,promise:s},E.push(s)}}return Promise.all(E)}loadMesh(A){const I=this,g=this.json,C=this.extensions,B=g.meshes[A],E=B.primitives,i=[];for(let o=0,e=E.length;o<e;o++){const t=E[o].material===void 0?ak(this.cache):this.getDependency("material",E[o].material);i.push(t)}return i.push(I.loadGeometries(E)),Promise.all(i).then(function(o){const e=o.slice(0,o.length-1),t=o[o.length-1],a=[];for(let D=0,G=t.length;D<G;D++){const n=t[D],h=E[D];let r;const l=e[D];if(h.mode===Sg.TRIANGLES||h.mode===Sg.TRIANGLE_STRIP||h.mode===Sg.TRIANGLE_FAN||h.mode===void 0)r=B.isSkinnedMesh===!0?new _w(n,l):new gg(n,l),r.isSkinnedMesh===!0&&r.normalizeSkinWeights(),h.mode===Sg.TRIANGLE_STRIP?r.geometry=sa(r.geometry,za):h.mode===Sg.TRIANGLE_FAN&&(r.geometry=sa(r.geometry,Vi));else if(h.mode===Sg.LINES)r=new AS(n,l);else if(h.mode===Sg.LINE_STRIP)r=new Jo(n,l);else if(h.mode===Sg.LINE_LOOP)r=new IS(n,l);else if(h.mode===Sg.POINTS)r=new gS(n,l);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(r.geometry.morphAttributes).length>0&&Dk(r,B),r.name=I.createUniqueName(B.name||"mesh_"+A),GC(r,B),h.extensions&&iQ(C,r,h),I.assignFinalMaterial(r),a.push(r)}for(let D=0,G=a.length;D<G;D++)I.associations.set(a[D],{meshes:A,primitives:D});if(a.length===1)return a[0];const s=new xC;I.associations.set(s,{meshes:A});for(let D=0,G=a.length;D<G;D++)s.add(a[D]);return s})}loadCamera(A){let I;const g=this.json.cameras[A],C=g[g.type];if(!C){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return g.type==="perspective"?I=new PI(xn.radToDeg(C.yfov),C.aspectRatio||1,C.znear||1,C.zfar||2e6):g.type==="orthographic"&&(I=new YE(-C.xmag,C.xmag,C.ymag,-C.ymag,C.znear,C.zfar)),g.name&&(I.name=this.createUniqueName(g.name)),GC(I,g),Promise.resolve(I)}loadSkin(A){const I=this.json.skins[A],g=[];for(let C=0,B=I.joints.length;C<B;C++)g.push(this._loadNodeShallow(I.joints[C]));return I.inverseBindMatrices!==void 0?g.push(this.getDependency("accessor",I.inverseBindMatrices)):g.push(null),Promise.all(g).then(function(C){const B=C.pop(),E=C,i=[],o=[];for(let e=0,t=E.length;e<t;e++){const a=E[e];if(a){i.push(a);const s=new uA;B!==null&&s.fromArray(B.array,e*16),o.push(s)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',I.joints[e])}return new No(i,o)})}loadAnimation(A){const g=this.json.animations[A],C=[],B=[],E=[],i=[],o=[];for(let e=0,t=g.channels.length;e<t;e++){const a=g.channels[e],s=g.samplers[a.sampler],D=a.target,G=D.node,n=g.parameters!==void 0?g.parameters[s.input]:s.input,h=g.parameters!==void 0?g.parameters[s.output]:s.output;C.push(this.getDependency("node",G)),B.push(this.getDependency("accessor",n)),E.push(this.getDependency("accessor",h)),i.push(s),o.push(D)}return Promise.all([Promise.all(C),Promise.all(B),Promise.all(E),Promise.all(i),Promise.all(o)]).then(function(e){const t=e[0],a=e[1],s=e[2],D=e[3],G=e[4],n=[];for(let r=0,l=t.length;r<l;r++){const c=t[r],S=a[r],y=s[r],K=D[r],F=G[r];if(c===void 0)continue;c.updateMatrix();let k;switch(rC[F.path]){case rC.weights:k=wQ;break;case rC.rotation:k=VC;break;case rC.position:case rC.scale:default:k=SQ;break}const M=c.name?c.name:c.uuid,J=K.interpolation!==void 0?tk[K.interpolation]:qB,u=[];rC[F.path]===rC.weights?c.traverse(function(p){p.morphTargetInfluences&&u.push(p.name?p.name:p.uuid)}):u.push(M);let Y=y.array;if(y.normalized){const p=Eo(Y.constructor),m=new Float32Array(Y.length);for(let T=0,IA=Y.length;T<IA;T++)m[T]=Y[T]*p;Y=m}for(let p=0,m=u.length;p<m;p++){const T=new k(u[p]+"."+rC[F.path],S.array,Y,J);K.interpolation==="CUBICSPLINE"&&(T.createInterpolant=function(AA){const H=this instanceof VC?ek:us;return new H(this.times,this.values,this.getValueSize()/3,AA)},T.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),n.push(T)}}const h=g.name?g.name:"animation_"+A;return new oS(h,void 0,n)})}createNodeMesh(A){const I=this.json,g=this,C=I.nodes[A];return C.mesh===void 0?null:g.getDependency("mesh",C.mesh).then(function(B){const E=g._getNodeRef(g.meshCache,C.mesh,B);return C.weights!==void 0&&E.traverse(function(i){if(i.isMesh)for(let o=0,e=C.weights.length;o<e;o++)i.morphTargetInfluences[o]=C.weights[o]}),E})}loadNode(A){const I=this.json,g=this,C=I.nodes[A],B=g._loadNodeShallow(A),E=[],i=C.children||[];for(let e=0,t=i.length;e<t;e++)E.push(g.getDependency("node",i[e]));const o=C.skin===void 0?Promise.resolve(null):g.getDependency("skin",C.skin);return Promise.all([B,Promise.all(E),o]).then(function(e){const t=e[0],a=e[1],s=e[2];s!==null&&t.traverse(function(D){D.isSkinnedMesh&&D.bind(s,rk)});for(let D=0,G=a.length;D<G;D++)t.add(a[D]);return t})}_loadNodeShallow(A){const I=this.json,g=this.extensions,C=this;if(this.nodeCache[A]!==void 0)return this.nodeCache[A];const B=I.nodes[A],E=B.name?C.createUniqueName(B.name):"",i=[],o=C._invokeOne(function(e){return e.createNodeMesh&&e.createNodeMesh(A)});return o&&i.push(o),B.camera!==void 0&&i.push(C.getDependency("camera",B.camera).then(function(e){return C._getNodeRef(C.cameraCache,B.camera,e)})),C._invokeAll(function(e){return e.createNodeAttachment&&e.createNodeAttachment(A)}).forEach(function(e){i.push(e)}),this.nodeCache[A]=Promise.all(i).then(function(e){let t;if(B.isBone===!0?t=new cs:e.length>1?t=new xC:e.length===1?t=e[0]:t=new _A,t!==e[0])for(let a=0,s=e.length;a<s;a++)t.add(e[a]);if(B.name&&(t.userData.name=B.name,t.name=E),GC(t,B),B.extensions&&iQ(g,t,B),B.matrix!==void 0){const a=new uA;a.fromArray(B.matrix),t.applyMatrix4(a)}else B.translation!==void 0&&t.position.fromArray(B.translation),B.rotation!==void 0&&t.quaternion.fromArray(B.rotation),B.scale!==void 0&&t.scale.fromArray(B.scale);return C.associations.has(t)||C.associations.set(t,{}),C.associations.get(t).nodes=A,t}),this.nodeCache[A]}loadScene(A){const I=this.extensions,g=this.json.scenes[A],C=this,B=new xC;g.name&&(B.name=C.createUniqueName(g.name)),GC(B,g),g.extensions&&iQ(I,B,g);const E=g.nodes||[],i=[];for(let o=0,e=E.length;o<e;o++)i.push(C.getDependency("node",E[o]));return Promise.all(i).then(function(o){for(let t=0,a=o.length;t<a;t++)B.add(o[t]);const e=t=>{const a=new Map;for(const[s,D]of C.associations)(s instanceof Og||s instanceof TI)&&a.set(s,D);return t.traverse(s=>{const D=C.associations.get(s);D!=null&&a.set(s,D)}),a};return C.associations=e(B),B})}}function Gk(Q,A,I){const g=A.attributes,C=new ZB;if(g.POSITION!==void 0){const i=I.json.accessors[g.POSITION],o=i.min,e=i.max;if(o!==void 0&&e!==void 0){if(C.set(new d(o[0],o[1],o[2]),new d(e[0],e[1],e[2])),i.normalized){const t=Eo(UB[i.componentType]);C.min.multiplyScalar(t),C.max.multiplyScalar(t)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const B=A.targets;if(B!==void 0){const i=new d,o=new d;for(let e=0,t=B.length;e<t;e++){const a=B[e];if(a.POSITION!==void 0){const s=I.json.accessors[a.POSITION],D=s.min,G=s.max;if(D!==void 0&&G!==void 0){if(o.setX(Math.max(Math.abs(D[0]),Math.abs(G[0]))),o.setY(Math.max(Math.abs(D[1]),Math.abs(G[1]))),o.setZ(Math.max(Math.abs(D[2]),Math.abs(G[2]))),s.normalized){const n=Eo(UB[s.componentType]);o.multiplyScalar(n)}i.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}C.expandByVector(i)}Q.boundingBox=C;const E=new WB;C.getCenter(E.center),E.radius=C.min.distanceTo(C.max)/2,Q.boundingSphere=E}function Ga(Q,A,I){const g=A.attributes,C=[];function B(E,i){return I.getDependency("accessor",E).then(function(o){Q.setAttribute(i,o)})}for(const E in g){const i=Qo[E]||E.toLowerCase();i in Q.attributes||C.push(B(g[E],i))}if(A.indices!==void 0&&!Q.index){const E=I.getDependency("accessor",A.indices).then(function(i){Q.setIndex(i)});C.push(E)}return GC(Q,A),Gk(Q,A,I),Promise.all(C).then(function(){return A.targets!==void 0?sk(Q,A.targets,I):Q})}var wk=function(){var Q="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",A="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",I=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),g=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var C=WebAssembly.validate(I)?A:Q,B,E=WebAssembly.instantiate(i(C),{}).then(function(r){B=r.instance,B.exports.__wasm_call_ctors()});function i(r){for(var l=new Uint8Array(r.length),c=0;c<r.length;++c){var S=r.charCodeAt(c);l[c]=S>96?S-97:S>64?S-39:S+4}for(var y=0,c=0;c<r.length;++c)l[y++]=l[c]<60?g[l[c]]:(l[c]-60)*64+l[++c];return l.buffer.slice(0,y)}function o(r,l,c,S,y,K){var F=B.exports.sbrk,k=c+3&-4,M=F(k*S),J=F(y.length),u=new Uint8Array(B.exports.memory.buffer);u.set(y,J);var Y=r(M,c,S,J,y.length);if(Y==0&&K&&K(M,k,S),l.set(u.subarray(M,M+c*S)),F(M-F(0)),Y!=0)throw new Error("Malformed buffer data: "+Y)}var e={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},t={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},a=[],s=0;function D(r){var l={object:new Worker(r),pending:0,requests:{}};return l.object.onmessage=function(c){var S=c.data;l.pending-=S.count,l.requests[S.id][S.action](S.value),delete l.requests[S.id]},l}function G(r){for(var l="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i(C))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+o.toString()+h.toString(),c=new Blob([l],{type:"text/javascript"}),S=URL.createObjectURL(c),y=0;y<r;++y)a[y]=D(S);URL.revokeObjectURL(S)}function n(r,l,c,S,y){for(var K=a[0],F=1;F<a.length;++F)a[F].pending<K.pending&&(K=a[F]);return new Promise(function(k,M){var J=new Uint8Array(c),u=s++;K.pending+=r,K.requests[u]={resolve:k,reject:M},K.object.postMessage({id:u,count:r,size:l,source:J,mode:S,filter:y},[J.buffer])})}function h(r){E.then(function(){var l=r.data;try{var c=new Uint8Array(l.count*l.size);o(B.exports[l.mode],c,l.count,l.size,l.source,B.exports[l.filter]),self.postMessage({id:l.id,count:l.count,action:"resolve",value:c},[c.buffer])}catch(S){self.postMessage({id:l.id,count:l.count,action:"reject",value:S})}})}return{ready:E,supported:!0,useWorkers:function(r){G(r)},decodeVertexBuffer:function(r,l,c,S,y){o(B.exports.meshopt_decodeVertexBuffer,r,l,c,S,B.exports[e[y]])},decodeIndexBuffer:function(r,l,c,S){o(B.exports.meshopt_decodeIndexBuffer,r,l,c,S)},decodeIndexSequence:function(r,l,c,S){o(B.exports.meshopt_decodeIndexSequence,r,l,c,S)},decodeGltfBuffer:function(r,l,c,S,y,K){o(B.exports[t[y]],r,l,c,S,B.exports[e[K]])},decodeGltfBufferAsync:function(r,l,c,S,y){return a.length>0?n(r,l,c,t[S],e[y]):E.then(function(){var K=new Uint8Array(r*l);return o(B.exports[t[S]],K,r,l,c,B.exports[e[y]]),K})}}}();const Sk=Q=>{const A={nodes:{},materials:{}};return Q&&Q.traverse(I=>{I.name&&(A.nodes[I.name]=I),I.material&&!A.materials[I.material.name]&&(A.materials[I.material.name]=I.material)}),A},lk=(Q,A)=>{const I=rI(void 0),g=Bo(Da,()=>new Da(SE));if(A!=null&&A.useDraco){const C=typeof A.useDraco=="string"?A.useDraco:"https://www.gstatic.com/draco/versioned/decoders/1.4.3/",B=Bo(aa,()=>new aa(SE).setDecoderPath(C));g.setDRACOLoader(B)}return A!=null&&A.useMeshopt&&g.setMeshoptDecoder(wk),g.load(Q,C=>{C.scene&&Object.assign(C,Sk(C.scene)),I.set(C)}),{gltf:I}};new d;new d;new d;class Ls extends nS{constructor(A){super(A),this.type=dg}parse(A){const i=function(c,S){switch(c){case 1:console.error("THREE.RGBELoader Read Error: "+(S||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(S||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(S||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(S||""))}return-1},a=`
`,s=function(c,S,y){S=S||1024;let F=c.pos,k=-1,M=0,J="",u=String.fromCharCode.apply(null,new Uint16Array(c.subarray(F,F+128)));for(;0>(k=u.indexOf(a))&&M<S&&F<c.byteLength;)J+=u,M+=u.length,F+=128,u+=String.fromCharCode.apply(null,new Uint16Array(c.subarray(F,F+128)));return-1<k?(y!==!1&&(c.pos+=M+k+1),J+u.slice(0,k)):!1},D=function(c){const S=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,K=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,M={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let J,u;if(c.pos>=c.byteLength||!(J=s(c)))return i(1,"no header found");if(!(u=J.match(S)))return i(3,"bad initial token");for(M.valid|=1,M.programtype=u[1],M.string+=J+`
`;J=s(c),J!==!1;){if(M.string+=J+`
`,J.charAt(0)==="#"){M.comments+=J+`
`;continue}if((u=J.match(y))&&(M.gamma=parseFloat(u[1])),(u=J.match(K))&&(M.exposure=parseFloat(u[1])),(u=J.match(F))&&(M.valid|=2,M.format=u[1]),(u=J.match(k))&&(M.valid|=4,M.height=parseInt(u[1],10),M.width=parseInt(u[2],10)),M.valid&2&&M.valid&4)break}return M.valid&2?M.valid&4?M:i(3,"missing image size specifier"):i(3,"missing format specifier")},G=function(c,S,y){const K=S;if(K<8||K>32767||c[0]!==2||c[1]!==2||c[2]&128)return new Uint8Array(c);if(K!==(c[2]<<8|c[3]))return i(3,"wrong scanline width");const F=new Uint8Array(4*S*y);if(!F.length)return i(4,"unable to allocate buffer space");let k=0,M=0;const J=4*K,u=new Uint8Array(4),Y=new Uint8Array(J);let p=y;for(;p>0&&M<c.byteLength;){if(M+4>c.byteLength)return i(1);if(u[0]=c[M++],u[1]=c[M++],u[2]=c[M++],u[3]=c[M++],u[0]!=2||u[1]!=2||(u[2]<<8|u[3])!=K)return i(3,"bad rgbe scanline format");let m=0,T;for(;m<J&&M<c.byteLength;){T=c[M++];const AA=T>128;if(AA&&(T-=128),T===0||m+T>J)return i(3,"bad scanline data");if(AA){const H=c[M++];for(let CA=0;CA<T;CA++)Y[m++]=H}else Y.set(c.subarray(M,M+T),m),m+=T,M+=T}const IA=K;for(let AA=0;AA<IA;AA++){let H=0;F[k]=Y[AA+H],H+=K,F[k+1]=Y[AA+H],H+=K,F[k+2]=Y[AA+H],H+=K,F[k+3]=Y[AA+H],k+=4}p--}return F},n=function(c,S,y,K){const F=c[S+3],k=Math.pow(2,F-128)/255;y[K+0]=c[S+0]*k,y[K+1]=c[S+1]*k,y[K+2]=c[S+2]*k,y[K+3]=1},h=function(c,S,y,K){const F=c[S+3],k=Math.pow(2,F-128)/255;y[K+0]=EE.toHalfFloat(Math.min(c[S+0]*k,65504)),y[K+1]=EE.toHalfFloat(Math.min(c[S+1]*k,65504)),y[K+2]=EE.toHalfFloat(Math.min(c[S+2]*k,65504)),y[K+3]=EE.toHalfFloat(1)},r=new Uint8Array(A);r.pos=0;const l=D(r);if(l!==-1){const c=l.width,S=l.height,y=G(r.subarray(r.pos),c,S);if(y!==-1){let K,F,k;switch(this.type){case sg:k=y.length/4;const M=new Float32Array(k*4);for(let u=0;u<k;u++)n(y,u*4,M,u*4);K=M,F=sg;break;case dg:k=y.length/4;const J=new Uint16Array(k*4);for(let u=0;u<k;u++)h(y,u*4,J,u*4);K=J,F=dg;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:c,height:S,data:K,header:l.string,gamma:l.gamma,exposure:l.exposure,type:F}}}return null}setDataType(A){return this.type=A,this}load(A,I,g,C){function B(E,i){switch(E.type){case sg:case dg:E.encoding=Mg,E.minFilter=nI,E.magFilter=nI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,B,g,C)}}class kk extends eC{constructor(A){super(A),this.hdrLoader=new Ls,this.type=dg}load(A,I,g,C){const B=new fE;switch(B.type=this.type,B.type){case sg:B.encoding=Mg,B.minFilter=nI,B.magFilter=nI,B.generateMipmaps=!1;break;case dg:B.encoding=Mg,B.minFilter=nI,B.magFilter=nI,B.generateMipmaps=!1;break}const E=this;let i=0;function o(e,t,a,s){new YB(E.manager).setPath(E.path).setResponseType("arraybuffer").setWithCredentials(E.withCredentials).load(A[e],function(D){i++;const G=E.hdrLoader.parse(D);if(G){if(G.data!==void 0){const n=new Uo(G.data,G.width,G.height);n.type=B.type,n.encoding=B.encoding,n.format=B.format,n.minFilter=B.minFilter,n.magFilter=B.magFilter,n.generateMipmaps=B.generateMipmaps,B.images[e]=n}i===6&&(B.needsUpdate=!0,t&&t(B))}},a,s)}for(let e=0;e<A.length;e++)o(e,I,g,C);return B}setDataType(A){return this.type=A,this.hdrLoader.setDataType(A),this}}class yk extends gg{constructor(A,I={}){const C=[A.isCubeTexture?"#define ENVMAP_TYPE_CUBE":""],B=`
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