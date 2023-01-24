(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const Q of C)if(Q.type==="childList")for(const E of Q.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function I(C){const Q={};return C.integrity&&(Q.integrity=C.integrity),C.referrerpolicy&&(Q.referrerPolicy=C.referrerpolicy),C.crossorigin==="use-credentials"?Q.credentials="include":C.crossorigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(C){if(C.ep)return;C.ep=!0;const Q=I(C);fetch(C.href,Q)}})();function XI(){}function VB(B,A){for(const I in A)B[I]=A[I];return B}function be(B){return B()}function mo(){return Object.create(null)}function fC(B){B.forEach(be)}function sE(B){return typeof B=="function"}function hI(B,A){return B!=B?A==A:B!==A||B&&typeof B=="object"||typeof B=="function"}function LD(B){return Object.keys(B).length===0}function Zi(B,...A){if(B==null)return XI;const I=B.subscribe(...A);return I.unsubscribe?()=>I.unsubscribe():I}function lg(B){let A;return Zi(B,I=>A=I)(),A}function cI(B,A,I){B.$$.on_destroy.push(Zi(A,I))}function $I(B,A,I,g){if(B){const C=Oe(B,A,I,g);return B[0](C)}}function Oe(B,A,I,g){return B[1]&&g?VB(I.ctx.slice(),B[1](g(A))):I.ctx}function Ag(B,A,I,g){if(B[2]&&g){const C=B[2](g(I));if(A.dirty===void 0)return C;if(typeof C=="object"){const Q=[],E=Math.max(A.dirty.length,C.length);for(let i=0;i<E;i+=1)Q[i]=A.dirty[i]|C[i];return Q}return A.dirty|C}return A.dirty}function Ig(B,A,I,g,C,Q){if(C){const E=Oe(A,I,g,Q);B.p(E,C)}}function gg(B){if(B.ctx.length>32){const A=[],I=B.ctx.length/32;for(let g=0;g<I;g++)A[g]=-1;return A}return-1}function ki(B){const A={};for(const I in B)I[0]!=="$"&&(A[I]=B[I]);return A}function To(B,A){const I={};A=new Set(A);for(const g in B)!A.has(g)&&g[0]!=="$"&&(I[g]=B[g]);return I}function OQ(B,A,I){return B.set(I),A}function fD(B){return B&&sE(B.destroy)?B.destroy:XI}function iI(B,A,I){B.insertBefore(A,I||null)}function EI(B){B.parentNode&&B.parentNode.removeChild(B)}function Ze(B){return document.createElement(B)}function We(B){return document.createTextNode(B)}function rI(){return We(" ")}function Wi(){return We("")}function rC(B,A,I,g){return B.addEventListener(A,I,g),()=>B.removeEventListener(A,I,g)}function Pe(B,A,I){I==null?B.removeAttribute(A):B.getAttribute(A)!==I&&B.setAttribute(A,I)}function uD(B){return Array.from(B.childNodes)}function HD(B,A,{bubbles:I=!1,cancelable:g=!1}={}){const C=document.createEvent("CustomEvent");return C.initCustomEvent(B,I,g,A),C}let XB;function bB(B){XB=B}function uC(){if(!XB)throw new Error("Function called outside component initialization");return XB}function sQ(B){uC().$$.on_mount.push(B)}function CI(B){uC().$$.on_destroy.push(B)}function sC(){const B=uC();return(A,I,{cancelable:g=!1}={})=>{const C=B.$$.callbacks[A];if(C){const Q=HD(A,I,{cancelable:g});return C.slice().forEach(E=>{E.call(B,Q)}),!Q.defaultPrevented}return!0}}function sg(B,A){return uC().$$.context.set(B,A),A}function hg(B){return uC().$$.context.get(B)}function qI(B,A){const I=B.$$.callbacks[A.type];I&&I.slice().forEach(g=>g.call(this,A))}const iB=[],Vg=[],ZQ=[],yi=[],ve=Promise.resolve();let li=!1;function je(){li||(li=!0,ve.then(Ve))}function iC(){return je(),ve}function Mi(B){ZQ.push(B)}function MB(B){yi.push(B)}const LE=new Set;let bC=0;function Ve(){if(bC!==0)return;const B=XB;do{try{for(;bC<iB.length;){const A=iB[bC];bC++,bB(A),mD(A.$$)}}catch(A){throw iB.length=0,bC=0,A}for(bB(null),iB.length=0,bC=0;Vg.length;)Vg.pop()();for(let A=0;A<ZQ.length;A+=1){const I=ZQ[A];LE.has(I)||(LE.add(I),I())}ZQ.length=0}while(iB.length);for(;yi.length;)yi.pop()();li=!1,LE.clear(),bB(B)}function mD(B){if(B.fragment!==null){B.update(),fC(B.before_update);const A=B.dirty;B.dirty=[-1],B.fragment&&B.fragment.p(B.ctx,A),B.after_update.forEach(Mi)}}const WQ=new Set;let JC;function zB(){JC={r:0,c:[],p:JC}}function _B(){JC.r||fC(JC.c),JC=JC.p}function aA(B,A){B&&B.i&&(WQ.delete(B),B.i(A))}function nA(B,A,I,g){if(B&&B.o){if(WQ.has(B))return;WQ.add(B),JC.c.push(()=>{WQ.delete(B),g&&(I&&B.d(1),g())}),B.o(A)}else g&&g()}function KB(B,A,I){const g=B.$$.props[A];g!==void 0&&(B.$$.bound[g]=I,I(B.$$.ctx[g]))}function pA(B){B&&B.c()}function RA(B,A,I,g){const{fragment:C,after_update:Q}=B.$$;C&&C.m(A,I),g||Mi(()=>{const E=B.$$.on_mount.map(be).filter(sE);B.$$.on_destroy?B.$$.on_destroy.push(...E):fC(E),B.$$.on_mount=[]}),Q.forEach(Mi)}function qA(B,A){const I=B.$$;I.fragment!==null&&(fC(I.on_destroy),I.fragment&&I.fragment.d(A),I.on_destroy=I.fragment=null,I.ctx=[])}function TD(B,A){B.$$.dirty[0]===-1&&(iB.push(B),je(),B.$$.dirty.fill(0)),B.$$.dirty[A/31|0]|=1<<A%31}function GI(B,A,I,g,C,Q,E,i=[-1]){const o=XB;bB(B);const t=B.$$={fragment:null,ctx:[],props:Q,update:XI,not_equal:C,bound:mo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(A.context||(o?o.$$.context:[])),callbacks:mo(),dirty:i,skip_bound:!1,root:A.target||o.$$.root};E&&E(t.root);let e=!1;if(t.ctx=I?I(B,A.props||{},(a,D,...s)=>{const G=s.length?s[0]:D;return t.ctx&&C(t.ctx[a],t.ctx[a]=G)&&(!t.skip_bound&&t.bound[a]&&t.bound[a](G),e&&TD(B,a)),D}):[],t.update(),e=!0,fC(t.before_update),t.fragment=g?g(t.ctx):!1,A.target){if(A.hydrate){const a=uD(A.target);t.fragment&&t.fragment.l(a),a.forEach(EI)}else t.fragment&&t.fragment.c();A.intro&&aA(B.$$.fragment),RA(B,A.target,A.anchor,A.customElement),Ve()}bB(o)}class wI{$destroy(){qA(this,1),this.$destroy=XI}$on(A,I){if(!sE(I))return XI;const g=this.$$.callbacks[A]||(this.$$.callbacks[A]=[]);return g.push(I),()=>{const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}$set(A){this.$$set&&!LD(A)&&(this.$$.skip_bound=!0,this.$$set(A),this.$$.skip_bound=!1)}}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pi="148",OC={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ZC={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xD=0,xo=1,bD=2,Xe=1,ze=2,mB=3,pC=0,Mg=1,vi=2,SQ=3,QC=0,DB=1,bo=2,Oo=3,Zo=4,OD=5,oB=100,ZD=101,WD=102,Wo=103,Po=104,PD=200,vD=201,jD=202,VD=203,_e=204,$e=205,XD=206,zD=207,_D=208,$D=209,As=210,Is=0,gs=1,Cs=2,Ki=3,Bs=4,Qs=5,Es=6,is=7,Aa=0,os=1,ts=2,fg=0,es=1,as=2,Ds=3,Ia=4,ss=5,ga=300,hB=301,GB=302,Ui=303,Ji=304,nE=306,Ni=1e3,Rg=1001,Fi=1002,VI=1003,vo=1004,fE=1005,rg=1006,ns=1007,$B=1008,YC=1009,hs=1010,Gs=1011,Ca=1012,ws=1013,NC=1014,FC=1015,AQ=1016,Ss=1017,rs=1018,sB=1020,cs=1021,ks=1022,qg=1023,ys=1024,ls=1025,qC=1026,wB=1027,Ms=1028,Ks=1029,Us=1030,Js=1031,Ns=1033,uE=33776,HE=33777,mE=33778,TE=33779,jo=35840,Vo=35841,Xo=35842,zo=35843,Fs=36196,_o=37492,$o=37496,At=37808,It=37809,gt=37810,Ct=37811,Bt=37812,Qt=37813,Et=37814,it=37815,ot=37816,tt=37817,et=37818,at=37819,Dt=37820,st=37821,nt=36492,oC=3e3,DI=3001,Rs=3200,qs=3201,Ba=0,ds=1,pg="srgb",IQ="srgb-linear",xE=7680,ps=519,ht=35044,Gt="300 es",Ri=1035;class HC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const Q=C.indexOf(I);Q!==-1&&C.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let Q=0,E=C.length;Q<E;Q++)C[Q].call(this,A);A.target=null}}}const ZI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wt=1234567;const OB=Math.PI/180,$Q=180/Math.PI;function mC(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ZI[B&255]+ZI[B>>8&255]+ZI[B>>16&255]+ZI[B>>24&255]+"-"+ZI[A&255]+ZI[A>>8&255]+"-"+ZI[A>>16&15|64]+ZI[A>>24&255]+"-"+ZI[I&63|128]+ZI[I>>8&255]+"-"+ZI[I>>16&255]+ZI[I>>24&255]+ZI[g&255]+ZI[g>>8&255]+ZI[g>>16&255]+ZI[g>>24&255]).toLowerCase()}function bI(B,A,I){return Math.max(A,Math.min(I,B))}function ji(B,A){return(B%A+A)%A}function Ys(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function Ls(B,A,I){return B!==A?(I-B)/(A-B):0}function ZB(B,A,I){return(1-I)*B+I*A}function fs(B,A,I,g){return ZB(B,A,1-Math.exp(-I*g))}function us(B,A=1){return A-Math.abs(ji(B,A*2)-A)}function Hs(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function ms(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function Ts(B,A){return B+Math.floor(Math.random()*(A-B+1))}function xs(B,A){return B+Math.random()*(A-B)}function bs(B){return B*(.5-Math.random())}function Os(B){B!==void 0&&(wt=B);let A=wt+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function Zs(B){return B*OB}function Ws(B){return B*$Q}function qi(B){return(B&B-1)===0&&B!==0}function Ps(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function AE(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function vs(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),t=Q((A+g)/2),e=E((A+g)/2),a=Q((A-g)/2),D=E((A-g)/2),s=Q((g-A)/2),G=E((g-A)/2);switch(C){case"XYX":B.set(i*e,o*a,o*D,i*t);break;case"YZY":B.set(o*D,i*e,o*a,i*t);break;case"ZXZ":B.set(o*a,o*D,i*e,i*t);break;case"XZX":B.set(i*e,o*G,o*s,i*t);break;case"YXY":B.set(o*s,i*e,o*G,i*t);break;case"ZYZ":B.set(o*G,o*s,i*e,i*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function TB(B,A){switch(A.constructor){case Float32Array:return B;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function Cg(B,A){switch(A.constructor){case Float32Array:return B;case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}var St=Object.freeze({__proto__:null,DEG2RAD:OB,RAD2DEG:$Q,generateUUID:mC,clamp:bI,euclideanModulo:ji,mapLinear:Ys,inverseLerp:Ls,lerp:ZB,damp:fs,pingpong:us,smoothstep:Hs,smootherstep:ms,randInt:Ts,randFloat:xs,randFloatSpread:bs,seededRandom:Os,degToRad:Zs,radToDeg:Ws,isPowerOfTwo:qi,ceilPowerOfTwo:Ps,floorPowerOfTwo:AE,setQuaternionFromProperEuler:vs,normalize:Cg,denormalize:TB});class eA{constructor(A=0,I=0){eA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ng{constructor(){ng.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,Q,E,i,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=i,e[3]=I,e[4]=Q,e[5]=o,e[6]=g,e[7]=E,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],t=g[1],e=g[4],a=g[7],D=g[2],s=g[5],G=g[8],h=C[0],n=C[3],S=C[6],y=C[1],c=C[4],k=C[7],l=C[2],K=C[5],f=C[8];return Q[0]=E*h+i*y+o*l,Q[3]=E*n+i*c+o*K,Q[6]=E*S+i*k+o*f,Q[1]=t*h+e*y+a*l,Q[4]=t*n+e*c+a*K,Q[7]=t*S+e*k+a*f,Q[2]=D*h+s*y+G*l,Q[5]=D*n+s*c+G*K,Q[8]=D*S+s*k+G*f,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8];return I*E*e-I*i*t-g*Q*e+g*i*o+C*Q*t-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=e*E-i*t,D=i*o-e*Q,s=t*Q-E*o,G=I*a+g*D+C*s;if(G===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/G;return A[0]=a*h,A[1]=(C*t-e*g)*h,A[2]=(i*g-C*E)*h,A[3]=D*h,A[4]=(e*I-C*o)*h,A[5]=(C*Q-i*I)*h,A[6]=s*h,A[7]=(g*o-t*I)*h,A[8]=(E*I-g*Q)*h,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),t=Math.sin(Q);return this.set(g*o,g*t,-g*(o*E+t*i)+E+A,-C*t,C*o,-C*(-t*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(bE.makeScale(A,I)),this}rotate(A){return this.premultiply(bE.makeRotation(-A)),this}translate(A,I){return this.premultiply(bE.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const bE=new ng;function Qa(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function gQ(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function dC(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function PQ(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}const OE={[pg]:{[IQ]:dC},[IQ]:{[pg]:PQ}},PI={legacyMode:!0,get workingColorSpace(){return IQ},set workingColorSpace(B){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(B,A,I){if(this.legacyMode||A===I||!A||!I)return B;if(OE[A]&&OE[A][I]!==void 0){const g=OE[A][I];return B.r=g(B.r),B.g=g(B.g),B.b=g(B.b),B}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(B,A){return this.convert(B,this.workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this.workingColorSpace)}},Ea={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pI={r:0,g:0,b:0},Jg={h:0,s:0,l:0},rQ={h:0,s:0,l:0};function ZE(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}function cQ(B,A){return A.r=B.r,A.g=B.g,A.b=B.b,A}class gI{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=pg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,PI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=PI.workingColorSpace){return this.r=A,this.g=I,this.b=g,PI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=PI.workingColorSpace){if(A=ji(A,1),I=bI(I,0,1),g=bI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=ZE(E,Q,A+1/3),this.g=ZE(E,Q,A),this.b=ZE(E,Q,A-1/3)}return PI.toWorkingColorSpace(this,C),this}setStyle(A,I=pg){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(Q[1],10))/255,this.g=Math.min(255,parseInt(Q[2],10))/255,this.b=Math.min(255,parseInt(Q[3],10))/255,PI.toWorkingColorSpace(this,I),g(Q[4]),this;if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(Q[1],10))/100,this.g=Math.min(100,parseInt(Q[2],10))/100,this.b=Math.min(100,parseInt(Q[3],10))/100,PI.toWorkingColorSpace(this,I),g(Q[4]),this;break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const o=parseFloat(Q[1])/360,t=parseFloat(Q[2])/100,e=parseFloat(Q[3])/100;return g(Q[4]),this.setHSL(o,t,e,I)}break}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.r=parseInt(Q.charAt(0)+Q.charAt(0),16)/255,this.g=parseInt(Q.charAt(1)+Q.charAt(1),16)/255,this.b=parseInt(Q.charAt(2)+Q.charAt(2),16)/255,PI.toWorkingColorSpace(this,I),this;if(E===6)return this.r=parseInt(Q.charAt(0)+Q.charAt(1),16)/255,this.g=parseInt(Q.charAt(2)+Q.charAt(3),16)/255,this.b=parseInt(Q.charAt(4)+Q.charAt(5),16)/255,PI.toWorkingColorSpace(this,I),this}return A&&A.length>0?this.setColorName(A,I):this}setColorName(A,I=pg){const g=Ea[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=dC(A.r),this.g=dC(A.g),this.b=dC(A.b),this}copyLinearToSRGB(A){return this.r=PQ(A.r),this.g=PQ(A.g),this.b=PQ(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=pg){return PI.fromWorkingColorSpace(cQ(this,pI),A),bI(pI.r*255,0,255)<<16^bI(pI.g*255,0,255)<<8^bI(pI.b*255,0,255)<<0}getHexString(A=pg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=PI.workingColorSpace){PI.fromWorkingColorSpace(cQ(this,pI),I);const g=pI.r,C=pI.g,Q=pI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,t;const e=(i+E)/2;if(i===E)o=0,t=0;else{const a=E-i;switch(t=e<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=PI.workingColorSpace){return PI.fromWorkingColorSpace(cQ(this,pI),I),A.r=pI.r,A.g=pI.g,A.b=pI.b,A}getStyle(A=pg){return PI.fromWorkingColorSpace(cQ(this,pI),A),A!==pg?`color(${A} ${pI.r} ${pI.g} ${pI.b})`:`rgb(${pI.r*255|0},${pI.g*255|0},${pI.b*255|0})`}offsetHSL(A,I,g){return this.getHSL(Jg),Jg.h+=A,Jg.s+=I,Jg.l+=g,this.setHSL(Jg.h,Jg.s,Jg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Jg),A.getHSL(rQ);const g=ZB(Jg.h,rQ.h,I),C=ZB(Jg.s,rQ.s,I),Q=ZB(Jg.l,rQ.l,I);return this.setHSL(g,C,Q),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}gI.NAMES=Ea;let WC;class ia{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{WC===void 0&&(WC=gQ("canvas")),WC.width=A.width,WC.height=A.height;const g=WC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=WC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=gQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=dC(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(dC(I[g]/255)*255):I[g]=dC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class oa{constructor(A=null){this.isSource=!0,this.uuid=mC(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(WE(C[E].image)):Q.push(WE(C[E]))}else Q=WE(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function WE(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?ia.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let js=0;class Qg extends HC{constructor(A=Qg.DEFAULT_IMAGE,I=Qg.DEFAULT_MAPPING,g=Rg,C=Rg,Q=rg,E=$B,i=qg,o=YC,t=Qg.DEFAULT_ANISOTROPY,e=oC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:js++}),this.uuid=mC(),this.name="",this.source=new oa(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=t,this.format=i,this.internalFormat=null,this.type=o,this.offset=new eA(0,0),this.repeat=new eA(1,1),this.center=new eA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ng,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ga)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Ni:A.x=A.x-Math.floor(A.x);break;case Rg:A.x=A.x<0?0:1;break;case Fi:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Ni:A.y=A.y-Math.floor(A.y);break;case Rg:A.y=A.y<0?0:1;break;case Fi:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}Qg.DEFAULT_IMAGE=null;Qg.DEFAULT_MAPPING=ga;Qg.DEFAULT_ANISOTROPY=1;class xI{constructor(A=0,I=0,g=0,C=1){xI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const o=A.elements,t=o[0],e=o[4],a=o[8],D=o[1],s=o[5],G=o[9],h=o[2],n=o[6],S=o[10];if(Math.abs(e-D)<.01&&Math.abs(a-h)<.01&&Math.abs(G-n)<.01){if(Math.abs(e+D)<.1&&Math.abs(a+h)<.1&&Math.abs(G+n)<.1&&Math.abs(t+s+S-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const c=(t+1)/2,k=(s+1)/2,l=(S+1)/2,K=(e+D)/4,f=(a+h)/4,r=(G+n)/4;return c>k&&c>l?c<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(c),C=K/g,Q=f/g):k>l?k<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(k),g=K/C,Q=r/C):l<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(l),g=f/Q,C=r/Q),this.set(g,C,Q,I),this}let y=Math.sqrt((n-G)*(n-G)+(a-h)*(a-h)+(D-e)*(D-e));return Math.abs(y)<.001&&(y=1),this.x=(n-G)/y,this.y=(a-h)/y,this.z=(D-e)/y,this.w=Math.acos((t+s+S-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tC extends HC{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new xI(0,0,A,I),this.scissorTest=!1,this.viewport=new xI(0,0,A,I);const C={width:A,height:I,depth:1};this.texture=new Qg(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:rg,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new oa(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends Qg{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=VI,this.minFilter=VI,this.wrapR=Rg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs extends Qg{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=VI,this.minFilter=VI,this.wrapR=Rg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const D=Q[E+0],s=Q[E+1],G=Q[E+2],h=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(i===1){A[I+0]=D,A[I+1]=s,A[I+2]=G,A[I+3]=h;return}if(a!==h||o!==D||t!==s||e!==G){let n=1-i;const S=o*D+t*s+e*G+a*h,y=S>=0?1:-1,c=1-S*S;if(c>Number.EPSILON){const l=Math.sqrt(c),K=Math.atan2(l,S*y);n=Math.sin(n*K)/l,i=Math.sin(i*K)/l}const k=i*y;if(o=o*n+D*k,t=t*n+s*k,e=e*n+G*k,a=a*n+h*k,n===1-i){const l=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=l,t*=l,e*=l,a*=l}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=Q[E],D=Q[E+1],s=Q[E+2],G=Q[E+3];return A[I]=i*G+e*a+o*s-t*D,A[I+1]=o*G+e*D+t*a-i*s,A[I+2]=t*G+e*s+i*D-o*a,A[I+3]=e*G-i*a-o*D-t*s,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,t=i(g/2),e=i(C/2),a=i(Q/2),D=o(g/2),s=o(C/2),G=o(Q/2);switch(E){case"XYZ":this._x=D*e*a+t*s*G,this._y=t*s*a-D*e*G,this._z=t*e*G+D*s*a,this._w=t*e*a-D*s*G;break;case"YXZ":this._x=D*e*a+t*s*G,this._y=t*s*a-D*e*G,this._z=t*e*G-D*s*a,this._w=t*e*a+D*s*G;break;case"ZXY":this._x=D*e*a-t*s*G,this._y=t*s*a+D*e*G,this._z=t*e*G+D*s*a,this._w=t*e*a-D*s*G;break;case"ZYX":this._x=D*e*a-t*s*G,this._y=t*s*a+D*e*G,this._z=t*e*G-D*s*a,this._w=t*e*a+D*s*G;break;case"YZX":this._x=D*e*a+t*s*G,this._y=t*s*a+D*e*G,this._z=t*e*G-D*s*a,this._w=t*e*a-D*s*G;break;case"XZY":this._x=D*e*a-t*s*G,this._y=t*s*a-D*e*G,this._z=t*e*G+D*s*a,this._w=t*e*a+D*s*G;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],t=I[2],e=I[6],a=I[10],D=g+i+a;if(D>0){const s=.5/Math.sqrt(D+1);this._w=.25/s,this._x=(e-o)*s,this._y=(Q-t)*s,this._z=(E-C)*s}else if(g>i&&g>a){const s=2*Math.sqrt(1+g-i-a);this._w=(e-o)/s,this._x=.25*s,this._y=(C+E)/s,this._z=(Q+t)/s}else if(i>a){const s=2*Math.sqrt(1+i-g-a);this._w=(Q-t)/s,this._x=(C+E)/s,this._y=.25*s,this._z=(o+e)/s}else{const s=2*Math.sqrt(1+a-g-i);this._w=(E-C)/s,this._x=(Q+t)/s,this._y=(o+e)/s,this._z=.25*s}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(bI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+E*i+C*t-Q*o,this._y=C*e+E*o+Q*i-g*t,this._z=Q*e+E*t+g*o-C*i,this._w=E*e-g*i-C*o-Q*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const s=1-I;return this._w=s*E+I*this._w,this._x=s*g+I*this._x,this._y=s*C+I*this._y,this._z=s*Q+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(o),e=Math.atan2(t,i),a=Math.sin((1-I)*e)/t,D=Math.sin(I*e)/t;return this._w=E*a+this._w*D,this._x=g*a+this._x*D,this._y=C*a+this._y*D,this._z=Q*a+this._z*D,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(Q),g*Math.cos(Q),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(A=0,I=0,g=0){L.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(rt.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(rt.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,t=o*I+E*C-i*g,e=o*g+i*I-Q*C,a=o*C+Q*g-E*I,D=-Q*I-E*g-i*C;return this.x=t*o+D*-Q+e*-i-a*-E,this.y=e*o+D*-E+a*-Q-t*-i,this.z=a*o+D*-i+t*-E-e*-Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return PE.copy(this).projectOnVector(A),this.sub(PE)}reflect(A){return this.sub(PE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(bI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const PE=new L,rt=new zI;class nQ{constructor(A=new L(1/0,1/0,1/0),I=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,C=1/0,Q=-1/0,E=-1/0,i=-1/0;for(let o=0,t=A.length;o<t;o+=3){const e=A[o],a=A[o+1],D=A[o+2];e<I&&(I=e),a<g&&(g=a),D<C&&(C=D),e>Q&&(Q=e),a>E&&(E=a),D>i&&(i=D)}return this.min.set(I,g,C),this.max.set(Q,E,i),this}setFromBufferAttribute(A){let I=1/0,g=1/0,C=1/0,Q=-1/0,E=-1/0,i=-1/0;for(let o=0,t=A.count;o<t;o++){const e=A.getX(o),a=A.getY(o),D=A.getZ(o);e<I&&(I=e),a<g&&(g=a),D<C&&(C=D),e>Q&&(Q=e),a>E&&(E=a),D>i&&(i=D)}return this.min.set(I,g,C),this.max.set(Q,E,i),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=cC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const Q=g.attributes.position;for(let E=0,i=Q.count;E<i;E++)cC.fromBufferAttribute(Q,E).applyMatrix4(A.matrixWorld),this.expandByPoint(cC)}else g.boundingBox===null&&g.computeBoundingBox(),vE.copy(g.boundingBox),vE.applyMatrix4(A.matrixWorld),this.union(vE);const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,cC),cC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(dB),kQ.subVectors(this.max,dB),PC.subVectors(A.a,dB),vC.subVectors(A.b,dB),jC.subVectors(A.c,dB),AC.subVectors(vC,PC),IC.subVectors(jC,vC),kC.subVectors(PC,jC);let I=[0,-AC.z,AC.y,0,-IC.z,IC.y,0,-kC.z,kC.y,AC.z,0,-AC.x,IC.z,0,-IC.x,kC.z,0,-kC.x,-AC.y,AC.x,0,-IC.y,IC.x,0,-kC.y,kC.x,0];return!jE(I,PC,vC,jC,kQ)||(I=[1,0,0,0,1,0,0,0,1],!jE(I,PC,vC,jC,kQ))?!1:(yQ.crossVectors(AC,IC),I=[yQ.x,yQ.y,yQ.z],jE(I,PC,vC,jC,kQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return cC.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=this.getSize(cC).length()*.5,A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Og[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Og[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Og[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Og[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Og[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Og[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Og[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Og[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Og),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Og=[new L,new L,new L,new L,new L,new L,new L,new L],cC=new L,vE=new nQ,PC=new L,vC=new L,jC=new L,AC=new L,IC=new L,kC=new L,dB=new L,kQ=new L,yQ=new L,yC=new L;function jE(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){yC.fromArray(B,Q);const i=C.x*Math.abs(yC.x)+C.y*Math.abs(yC.y)+C.z*Math.abs(yC.z),o=A.dot(yC),t=I.dot(yC),e=g.dot(yC);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>i)return!1}return!0}const Xs=new nQ,pB=new L,VE=new L;class hE{constructor(A=new L,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Xs.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;pB.subVectors(A,this.center);const I=pB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(pB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(VE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(pB.copy(A.center).add(VE)),this.expandByPoint(pB.copy(A.center).sub(VE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zg=new L,XE=new L,lQ=new L,gC=new L,zE=new L,MQ=new L,_E=new L;class Vi{constructor(A=new L,I=new L(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Zg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.direction).multiplyScalar(g).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Zg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Zg.copy(this.direction).multiplyScalar(I).add(this.origin),Zg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){XE.copy(A).add(I).multiplyScalar(.5),lQ.copy(I).sub(A).normalize(),gC.copy(this.origin).sub(XE);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(lQ),i=gC.dot(this.direction),o=-gC.dot(lQ),t=gC.lengthSq(),e=Math.abs(1-E*E);let a,D,s,G;if(e>0)if(a=E*o-i,D=E*i-o,G=Q*e,a>=0)if(D>=-G)if(D<=G){const h=1/e;a*=h,D*=h,s=a*(a+E*D+2*i)+D*(E*a+D+2*o)+t}else D=Q,a=Math.max(0,-(E*D+i)),s=-a*a+D*(D+2*o)+t;else D=-Q,a=Math.max(0,-(E*D+i)),s=-a*a+D*(D+2*o)+t;else D<=-G?(a=Math.max(0,-(-E*Q+i)),D=a>0?-Q:Math.min(Math.max(-Q,-o),Q),s=-a*a+D*(D+2*o)+t):D<=G?(a=0,D=Math.min(Math.max(-Q,-o),Q),s=D*(D+2*o)+t):(a=Math.max(0,-(E*Q+i)),D=a>0?Q:Math.min(Math.max(-Q,-o),Q),s=-a*a+D*(D+2*o)+t);else D=E>0?-Q:Q,a=Math.max(0,-(E*D+i)),s=-a*a+D*(D+2*o)+t;return g&&g.copy(this.direction).multiplyScalar(a).add(this.origin),C&&C.copy(lQ).multiplyScalar(D).add(XE),s}intersectSphere(A,I){Zg.subVectors(A.center,this.origin);const g=Zg.dot(this.direction),C=Zg.dot(Zg)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return i<0&&o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,D=this.origin;return t>=0?(g=(A.min.x-D.x)*t,C=(A.max.x-D.x)*t):(g=(A.max.x-D.x)*t,C=(A.min.x-D.x)*t),e>=0?(Q=(A.min.y-D.y)*e,E=(A.max.y-D.y)*e):(Q=(A.max.y-D.y)*e,E=(A.min.y-D.y)*e),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-D.z)*a,o=(A.max.z-D.z)*a):(i=(A.max.z-D.z)*a,o=(A.min.z-D.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Zg)!==null}intersectTriangle(A,I,g,C,Q){zE.subVectors(I,A),MQ.subVectors(g,A),_E.crossVectors(zE,MQ);let E=this.direction.dot(_E),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;gC.subVectors(this.origin,A);const o=i*this.direction.dot(MQ.crossVectors(gC,MQ));if(o<0)return null;const t=i*this.direction.dot(zE.cross(gC));if(t<0||o+t>E)return null;const e=-i*gC.dot(_E);return e<0?null:this.at(e/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class KI{constructor(){KI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,Q,E,i,o,t,e,a,D,s,G,h,n){const S=this.elements;return S[0]=A,S[4]=I,S[8]=g,S[12]=C,S[1]=Q,S[5]=E,S[9]=i,S[13]=o,S[2]=t,S[6]=e,S[10]=a,S[14]=D,S[3]=s,S[7]=G,S[11]=h,S[15]=n,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new KI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/VC.setFromMatrixColumn(A,0).length(),Q=1/VC.setFromMatrixColumn(A,1).length(),E=1/VC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const D=E*e,s=E*a,G=i*e,h=i*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=s+G*t,I[5]=D-h*t,I[9]=-i*o,I[2]=h-D*t,I[6]=G+s*t,I[10]=E*o}else if(A.order==="YXZ"){const D=o*e,s=o*a,G=t*e,h=t*a;I[0]=D+h*i,I[4]=G*i-s,I[8]=E*t,I[1]=E*a,I[5]=E*e,I[9]=-i,I[2]=s*i-G,I[6]=h+D*i,I[10]=E*o}else if(A.order==="ZXY"){const D=o*e,s=o*a,G=t*e,h=t*a;I[0]=D-h*i,I[4]=-E*a,I[8]=G+s*i,I[1]=s+G*i,I[5]=E*e,I[9]=h-D*i,I[2]=-E*t,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const D=E*e,s=E*a,G=i*e,h=i*a;I[0]=o*e,I[4]=G*t-s,I[8]=D*t+h,I[1]=o*a,I[5]=h*t+D,I[9]=s*t-G,I[2]=-t,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const D=E*o,s=E*t,G=i*o,h=i*t;I[0]=o*e,I[4]=h-D*a,I[8]=G*a+s,I[1]=a,I[5]=E*e,I[9]=-i*e,I[2]=-t*e,I[6]=s*a+G,I[10]=D-h*a}else if(A.order==="XZY"){const D=E*o,s=E*t,G=i*o,h=i*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=D*a+h,I[5]=E*e,I[9]=s*a-G,I[2]=G*a-s,I[6]=i*e,I[10]=h*a+D}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(zs,A,_s)}lookAt(A,I,g){const C=this.elements;return tg.subVectors(A,I),tg.lengthSq()===0&&(tg.z=1),tg.normalize(),CC.crossVectors(g,tg),CC.lengthSq()===0&&(Math.abs(g.z)===1?tg.x+=1e-4:tg.z+=1e-4,tg.normalize(),CC.crossVectors(g,tg)),CC.normalize(),KQ.crossVectors(tg,CC),C[0]=CC.x,C[4]=KQ.x,C[8]=tg.x,C[1]=CC.y,C[5]=KQ.y,C[9]=tg.y,C[2]=CC.z,C[6]=KQ.z,C[10]=tg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],t=g[12],e=g[1],a=g[5],D=g[9],s=g[13],G=g[2],h=g[6],n=g[10],S=g[14],y=g[3],c=g[7],k=g[11],l=g[15],K=C[0],f=C[4],r=C[8],U=C[12],R=C[1],O=C[5],m=C[9],d=C[13],u=C[2],p=C[6],_=C[10],IA=C[14],x=C[3],BA=C[7],CA=C[11],N=C[15];return Q[0]=E*K+i*R+o*u+t*x,Q[4]=E*f+i*O+o*p+t*BA,Q[8]=E*r+i*m+o*_+t*CA,Q[12]=E*U+i*d+o*IA+t*N,Q[1]=e*K+a*R+D*u+s*x,Q[5]=e*f+a*O+D*p+s*BA,Q[9]=e*r+a*m+D*_+s*CA,Q[13]=e*U+a*d+D*IA+s*N,Q[2]=G*K+h*R+n*u+S*x,Q[6]=G*f+h*O+n*p+S*BA,Q[10]=G*r+h*m+n*_+S*CA,Q[14]=G*U+h*d+n*IA+S*N,Q[3]=y*K+c*R+k*u+l*x,Q[7]=y*f+c*O+k*p+l*BA,Q[11]=y*r+c*m+k*_+l*CA,Q[15]=y*U+c*d+k*IA+l*N,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],t=A[13],e=A[2],a=A[6],D=A[10],s=A[14],G=A[3],h=A[7],n=A[11],S=A[15];return G*(+Q*o*a-C*t*a-Q*i*D+g*t*D+C*i*s-g*o*s)+h*(+I*o*s-I*t*D+Q*E*D-C*E*s+C*t*e-Q*o*e)+n*(+I*t*a-I*i*s-Q*E*a+g*E*s+Q*i*e-g*t*e)+S*(-C*i*e-I*o*a+I*i*D+C*E*a-g*E*D+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],t=A[7],e=A[8],a=A[9],D=A[10],s=A[11],G=A[12],h=A[13],n=A[14],S=A[15],y=a*n*t-h*D*t+h*o*s-i*n*s-a*o*S+i*D*S,c=G*D*t-e*n*t-G*o*s+E*n*s+e*o*S-E*D*S,k=e*h*t-G*a*t+G*i*s-E*h*s-e*i*S+E*a*S,l=G*a*o-e*h*o-G*i*D+E*h*D+e*i*n-E*a*n,K=I*y+g*c+C*k+Q*l;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const f=1/K;return A[0]=y*f,A[1]=(h*D*Q-a*n*Q-h*C*s+g*n*s+a*C*S-g*D*S)*f,A[2]=(i*n*Q-h*o*Q+h*C*t-g*n*t-i*C*S+g*o*S)*f,A[3]=(a*o*Q-i*D*Q-a*C*t+g*D*t+i*C*s-g*o*s)*f,A[4]=c*f,A[5]=(e*n*Q-G*D*Q+G*C*s-I*n*s-e*C*S+I*D*S)*f,A[6]=(G*o*Q-E*n*Q-G*C*t+I*n*t+E*C*S-I*o*S)*f,A[7]=(E*D*Q-e*o*Q+e*C*t-I*D*t-E*C*s+I*o*s)*f,A[8]=k*f,A[9]=(G*a*Q-e*h*Q-G*g*s+I*h*s+e*g*S-I*a*S)*f,A[10]=(E*h*Q-G*i*Q+G*g*t-I*h*t-E*g*S+I*i*S)*f,A[11]=(e*i*Q-E*a*Q-e*g*t+I*a*t+E*g*s-I*i*s)*f,A[12]=l*f,A[13]=(e*h*C-G*a*C+G*g*D-I*h*D-e*g*n+I*a*n)*f,A[14]=(G*i*C-E*h*C-G*g*o+I*h*o+E*g*n-I*i*n)*f,A[15]=(E*a*C-e*i*C+e*g*o-I*a*o-E*g*D+I*i*D)*f,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,t=Q*E,e=Q*i;return this.set(t*E+g,t*i-C*o,t*o+C*i,0,t*i+C*o,e*i+g,e*o-C*E,0,t*o-C*i,e*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,t=Q+Q,e=E+E,a=i+i,D=Q*t,s=Q*e,G=Q*a,h=E*e,n=E*a,S=i*a,y=o*t,c=o*e,k=o*a,l=g.x,K=g.y,f=g.z;return C[0]=(1-(h+S))*l,C[1]=(s+k)*l,C[2]=(G-c)*l,C[3]=0,C[4]=(s-k)*K,C[5]=(1-(D+S))*K,C[6]=(n+y)*K,C[7]=0,C[8]=(G+c)*f,C[9]=(n-y)*f,C[10]=(1-(D+h))*f,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=VC.set(C[0],C[1],C[2]).length();const E=VC.set(C[4],C[5],C[6]).length(),i=VC.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],Ng.copy(this);const t=1/Q,e=1/E,a=1/i;return Ng.elements[0]*=t,Ng.elements[1]*=t,Ng.elements[2]*=t,Ng.elements[4]*=e,Ng.elements[5]*=e,Ng.elements[6]*=e,Ng.elements[8]*=a,Ng.elements[9]*=a,Ng.elements[10]*=a,I.setFromRotationMatrix(Ng),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E){const i=this.elements,o=2*Q/(I-A),t=2*Q/(g-C),e=(I+A)/(I-A),a=(g+C)/(g-C),D=-(E+Q)/(E-Q),s=-2*E*Q/(E-Q);return i[0]=o,i[4]=0,i[8]=e,i[12]=0,i[1]=0,i[5]=t,i[9]=a,i[13]=0,i[2]=0,i[6]=0,i[10]=D,i[14]=s,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(A,I,g,C,Q,E){const i=this.elements,o=1/(I-A),t=1/(g-C),e=1/(E-Q),a=(I+A)*o,D=(g+C)*t,s=(E+Q)*e;return i[0]=2*o,i[4]=0,i[8]=0,i[12]=-a,i[1]=0,i[5]=2*t,i[9]=0,i[13]=-D,i[2]=0,i[6]=0,i[10]=-2*e,i[14]=-s,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const VC=new L,Ng=new KI,zs=new L(0,0,0),_s=new L(1,1,1),CC=new L,KQ=new L,tg=new L,ct=new KI,kt=new zI;class TC{constructor(A=0,I=0,g=0,C=TC.DefaultOrder){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],t=C[5],e=C[9],a=C[2],D=C[6],s=C[10];switch(I){case"XYZ":this._y=Math.asin(bI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-e,s),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(D,t),this._z=0);break;case"YXZ":this._x=Math.asin(-bI(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(i,s),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(bI(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(-a,s),this._z=Math.atan2(-E,t)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-bI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(D,s),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,t));break;case"YZX":this._z=Math.asin(bI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,s));break;case"XZY":this._z=Math.asin(-bI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(D,t),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-e,s),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return ct.makeRotationFromQuaternion(A),this.setFromRotationMatrix(ct,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return kt.setFromEuler(this),this.setFromQuaternion(kt,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}TC.DefaultOrder="XYZ";TC.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xi{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let $s=0;const yt=new L,XC=new zI,Wg=new KI,UQ=new L,YB=new L,An=new L,In=new zI,lt=new L(1,0,0),Mt=new L(0,1,0),Kt=new L(0,0,1),gn={type:"added"},Ut={type:"removed"};class nI extends HC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$s++}),this.uuid=mC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nI.DefaultUp.clone();const A=new L,I=new TC,g=new zI,C=new L(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new KI},normalMatrix:{value:new ng}}),this.matrix=new KI,this.matrixWorld=new KI,this.matrixAutoUpdate=nI.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=nI.DefaultMatrixWorldAutoUpdate,this.layers=new Xi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return XC.setFromAxisAngle(A,I),this.quaternion.multiply(XC),this}rotateOnWorldAxis(A,I){return XC.setFromAxisAngle(A,I),this.quaternion.premultiply(XC),this}rotateX(A){return this.rotateOnAxis(lt,A)}rotateY(A){return this.rotateOnAxis(Mt,A)}rotateZ(A){return this.rotateOnAxis(Kt,A)}translateOnAxis(A,I){return yt.copy(A).applyQuaternion(this.quaternion),this.position.add(yt.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(lt,A)}translateY(A){return this.translateOnAxis(Mt,A)}translateZ(A){return this.translateOnAxis(Kt,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Wg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?UQ.copy(A):UQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),YB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wg.lookAt(YB,UQ,this.up):Wg.lookAt(UQ,YB,this.up),this.quaternion.setFromRotationMatrix(Wg),C&&(Wg.extractRotation(C.matrixWorld),XC.setFromRotationMatrix(Wg),this.quaternion.premultiply(XC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(gn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Ut)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(Ut)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Wg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Wg.multiply(A.parent.matrixWorld)),A.applyMatrix4(Wg),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,Q=this.children.length;C<Q;C++){const E=this.children[C].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(YB,A,An),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(YB,In,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const Q=I[g];(Q.matrixWorldAutoUpdate===!0||A===!0)&&Q.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,t=this.material.length;o<t;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),t=E(A.textures),e=E(A.images),a=E(A.shapes),D=E(A.skeletons),s=E(A.animations),G=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),D.length>0&&(g.skeletons=D),s.length>0&&(g.animations=s),G.length>0&&(g.nodes=G)}return g.object=C,g;function E(i){const o=[];for(const t in i){const e=i[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}nI.DefaultUp=new L(0,1,0);nI.DefaultMatrixAutoUpdate=!0;nI.DefaultMatrixWorldAutoUpdate=!0;const Fg=new L,Pg=new L,$E=new L,vg=new L,zC=new L,_C=new L,Jt=new L,Ai=new L,Ii=new L,gi=new L;class jg{constructor(A=new L,I=new L,g=new L){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Fg.subVectors(A,I),C.cross(Fg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){Fg.subVectors(C,I),Pg.subVectors(g,I),$E.subVectors(A,I);const E=Fg.dot(Fg),i=Fg.dot(Pg),o=Fg.dot($E),t=Pg.dot(Pg),e=Pg.dot($E),a=E*t-i*i;if(a===0)return Q.set(-2,-1,-1);const D=1/a,s=(t*o-i*e)*D,G=(E*e-i*o)*D;return Q.set(1-s-G,G,s)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,vg),vg.x>=0&&vg.y>=0&&vg.x+vg.y<=1}static getUV(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,vg),o.set(0,0),o.addScaledVector(Q,vg.x),o.addScaledVector(E,vg.y),o.addScaledVector(i,vg.z),o}static isFrontFacing(A,I,g,C){return Fg.subVectors(g,I),Pg.subVectors(A,I),Fg.cross(Pg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Fg.subVectors(this.c,this.b),Pg.subVectors(this.a,this.b),Fg.cross(Pg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return jg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return jg.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,Q){return jg.getUV(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return jg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return jg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;zC.subVectors(C,g),_C.subVectors(Q,g),Ai.subVectors(A,g);const o=zC.dot(Ai),t=_C.dot(Ai);if(o<=0&&t<=0)return I.copy(g);Ii.subVectors(A,C);const e=zC.dot(Ii),a=_C.dot(Ii);if(e>=0&&a<=e)return I.copy(C);const D=o*a-e*t;if(D<=0&&o>=0&&e<=0)return E=o/(o-e),I.copy(g).addScaledVector(zC,E);gi.subVectors(A,Q);const s=zC.dot(gi),G=_C.dot(gi);if(G>=0&&s<=G)return I.copy(Q);const h=s*t-o*G;if(h<=0&&t>=0&&G<=0)return i=t/(t-G),I.copy(g).addScaledVector(_C,i);const n=e*G-s*a;if(n<=0&&a-e>=0&&s-G>=0)return Jt.subVectors(Q,C),i=(a-e)/(a-e+(s-G)),I.copy(C).addScaledVector(Jt,i);const S=1/(n+h+D);return E=h*S,i=D*S,I.copy(g).addScaledVector(zC,E).addScaledVector(_C,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Cn=0;class UB extends HC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=mC(),this.name="",this.type="Material",this.blending=DB,this.side=pC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_e,this.blendDst=$e,this.blendEquation=oB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ps,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xE,this.stencilZFail=xE,this.stencilZPass=xE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const C=this[I];if(C===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==DB&&(g.blending=this.blending),this.side!==pC&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class ea extends UB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Aa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const FI=new L,JQ=new eA;class Bg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=ht,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)JQ.fromBufferAttribute(this,I),JQ.applyMatrix3(A),this.setXY(I,JQ.x,JQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)FI.fromBufferAttribute(this,I),FI.applyMatrix3(A),this.setXYZ(I,FI.x,FI.y,FI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)FI.fromBufferAttribute(this,I),FI.applyMatrix4(A),this.setXYZ(I,FI.x,FI.y,FI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)FI.fromBufferAttribute(this,I),FI.applyNormalMatrix(A),this.setXYZ(I,FI.x,FI.y,FI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)FI.fromBufferAttribute(this,I),FI.transformDirection(A),this.setXYZ(I,FI.x,FI.y,FI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=TB(I,this.array)),I}setX(A,I){return this.normalized&&(I=Cg(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=TB(I,this.array)),I}setY(A,I){return this.normalized&&(I=Cg(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=TB(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Cg(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=TB(I,this.array)),I}setW(A,I){return this.normalized&&(I=Cg(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Cg(I,this.array),g=Cg(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=Cg(I,this.array),g=Cg(g,this.array),C=Cg(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=Cg(I,this.array),g=Cg(g,this.array),C=Cg(C,this.array),Q=Cg(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==ht&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class aa extends Bg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Da extends Bg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class dI extends Bg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Bn=0;const wg=new KI,Ci=new nI,$C=new L,eg=new nQ,LB=new nQ,TI=new L;class Eg extends HC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bn++}),this.uuid=mC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Qa(A)?Da:aa)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new ng().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return wg.makeRotationFromQuaternion(A),this.applyMatrix4(wg),this}rotateX(A){return wg.makeRotationX(A),this.applyMatrix4(wg),this}rotateY(A){return wg.makeRotationY(A),this.applyMatrix4(wg),this}rotateZ(A){return wg.makeRotationZ(A),this.applyMatrix4(wg),this}translate(A,I,g){return wg.makeTranslation(A,I,g),this.applyMatrix4(wg),this}scale(A,I,g){return wg.makeScale(A,I,g),this.applyMatrix4(wg),this}lookAt(A){return Ci.lookAt(A),Ci.updateMatrix(),this.applyMatrix4(Ci.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($C).negate(),this.translate($C.x,$C.y,$C.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new dI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nQ);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];eg.setFromBufferAttribute(Q),this.morphTargetsRelative?(TI.addVectors(this.boundingBox.min,eg.min),this.boundingBox.expandByPoint(TI),TI.addVectors(this.boundingBox.max,eg.max),this.boundingBox.expandByPoint(TI)):(this.boundingBox.expandByPoint(eg.min),this.boundingBox.expandByPoint(eg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hE);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(A){const g=this.boundingSphere.center;if(eg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];LB.setFromBufferAttribute(i),this.morphTargetsRelative?(TI.addVectors(eg.min,LB.min),eg.expandByPoint(TI),TI.addVectors(eg.max,LB.max),eg.expandByPoint(TI)):(eg.expandByPoint(LB.min),eg.expandByPoint(LB.max))}eg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)TI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(TI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let t=0,e=i.count;t<e;t++)TI.fromBufferAttribute(i,t),o&&($C.fromBufferAttribute(A,t),TI.add($C)),C=Math.max(C,g.distanceToSquared(TI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,Q=I.normal.array,E=I.uv.array,i=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bg(new Float32Array(4*i),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let R=0;R<i;R++)t[R]=new L,e[R]=new L;const a=new L,D=new L,s=new L,G=new eA,h=new eA,n=new eA,S=new L,y=new L;function c(R,O,m){a.fromArray(C,R*3),D.fromArray(C,O*3),s.fromArray(C,m*3),G.fromArray(E,R*2),h.fromArray(E,O*2),n.fromArray(E,m*2),D.sub(a),s.sub(a),h.sub(G),n.sub(G);const d=1/(h.x*n.y-n.x*h.y);isFinite(d)&&(S.copy(D).multiplyScalar(n.y).addScaledVector(s,-h.y).multiplyScalar(d),y.copy(s).multiplyScalar(h.x).addScaledVector(D,-n.x).multiplyScalar(d),t[R].add(S),t[O].add(S),t[m].add(S),e[R].add(y),e[O].add(y),e[m].add(y))}let k=this.groups;k.length===0&&(k=[{start:0,count:g.length}]);for(let R=0,O=k.length;R<O;++R){const m=k[R],d=m.start,u=m.count;for(let p=d,_=d+u;p<_;p+=3)c(g[p+0],g[p+1],g[p+2])}const l=new L,K=new L,f=new L,r=new L;function U(R){f.fromArray(Q,R*3),r.copy(f);const O=t[R];l.copy(O),l.sub(f.multiplyScalar(f.dot(O))).normalize(),K.crossVectors(r,O);const d=K.dot(e[R])<0?-1:1;o[R*4]=l.x,o[R*4+1]=l.y,o[R*4+2]=l.z,o[R*4+3]=d}for(let R=0,O=k.length;R<O;++R){const m=k[R],d=m.start,u=m.count;for(let p=d,_=d+u;p<_;p+=3)U(g[p+0]),U(g[p+1]),U(g[p+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Bg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let D=0,s=g.count;D<s;D++)g.setXYZ(D,0,0,0);const C=new L,Q=new L,E=new L,i=new L,o=new L,t=new L,e=new L,a=new L;if(A)for(let D=0,s=A.count;D<s;D+=3){const G=A.getX(D+0),h=A.getX(D+1),n=A.getX(D+2);C.fromBufferAttribute(I,G),Q.fromBufferAttribute(I,h),E.fromBufferAttribute(I,n),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),i.fromBufferAttribute(g,G),o.fromBufferAttribute(g,h),t.fromBufferAttribute(g,n),i.add(e),o.add(e),t.add(e),g.setXYZ(G,i.x,i.y,i.z),g.setXYZ(h,o.x,o.y,o.z),g.setXYZ(n,t.x,t.y,t.z)}else for(let D=0,s=I.count;D<s;D+=3)C.fromBufferAttribute(I,D+0),Q.fromBufferAttribute(I,D+1),E.fromBufferAttribute(I,D+2),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),g.setXYZ(D+0,e.x,e.y,e.z),g.setXYZ(D+1,e.x,e.y,e.z),g.setXYZ(D+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)TI.fromBufferAttribute(A,I),TI.normalize(),A.setXYZ(I,TI.x,TI.y,TI.z)}toNonIndexed(){function A(i,o){const t=i.array,e=i.itemSize,a=i.normalized,D=new t.constructor(o.length*e);let s=0,G=0;for(let h=0,n=o.length;h<n;h++){i.isInterleavedBufferAttribute?s=o[h]*i.data.stride+i.offset:s=o[h]*e;for(let S=0;S<e;S++)D[G++]=t[s++]}return new Bg(D,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Eg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],t=A(o,g);I.setAttribute(i,t)}const Q=this.morphAttributes;for(const i in Q){const o=[],t=Q[i];for(let e=0,a=t.length;e<a;e++){const D=t[e],s=A(D,g);o.push(s)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const t=E[i];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,D=t.length;a<D;a++){const s=t[a];e.push(s.toJSON(A.data))}e.length>0&&(C[o]=e,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const Q=A.morphAttributes;for(const t in Q){const e=[],a=Q[t];for(let D=0,s=a.length;D<s;D++)e.push(a[D].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let t=0,e=E.length;t<e;t++){const a=E[t];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,A.parameters!==void 0&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nt=new KI,AB=new Vi,Bi=new hE,fB=new L,uB=new L,HB=new L,Qi=new L,NQ=new L,FQ=new eA,RQ=new eA,qQ=new eA,Ei=new L,dQ=new L;class kg extends nI{constructor(A=new Eg,I=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){NQ.set(0,0,0);for(let o=0,t=Q.length;o<t;o++){const e=i[o],a=Q[o];e!==0&&(Qi.fromBufferAttribute(a,A),E?NQ.addScaledVector(Qi,e):NQ.addScaledVector(Qi.sub(I),e))}I.add(NQ)}return this.isSkinnedMesh&&this.boneTransform(A,I),I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;if(C===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),Bi.copy(g.boundingSphere),Bi.applyMatrix4(Q),A.ray.intersectsSphere(Bi)===!1)||(Nt.copy(Q).invert(),AB.copy(A.ray).applyMatrix4(Nt),g.boundingBox!==null&&AB.intersectsBox(g.boundingBox)===!1))return;let E;const i=g.index,o=g.attributes.position,t=g.attributes.uv,e=g.attributes.uv2,a=g.groups,D=g.drawRange;if(i!==null)if(Array.isArray(C))for(let s=0,G=a.length;s<G;s++){const h=a[s],n=C[h.materialIndex],S=Math.max(h.start,D.start),y=Math.min(i.count,Math.min(h.start+h.count,D.start+D.count));for(let c=S,k=y;c<k;c+=3){const l=i.getX(c),K=i.getX(c+1),f=i.getX(c+2);E=pQ(this,n,A,AB,t,e,l,K,f),E&&(E.faceIndex=Math.floor(c/3),E.face.materialIndex=h.materialIndex,I.push(E))}}else{const s=Math.max(0,D.start),G=Math.min(i.count,D.start+D.count);for(let h=s,n=G;h<n;h+=3){const S=i.getX(h),y=i.getX(h+1),c=i.getX(h+2);E=pQ(this,C,A,AB,t,e,S,y,c),E&&(E.faceIndex=Math.floor(h/3),I.push(E))}}else if(o!==void 0)if(Array.isArray(C))for(let s=0,G=a.length;s<G;s++){const h=a[s],n=C[h.materialIndex],S=Math.max(h.start,D.start),y=Math.min(o.count,Math.min(h.start+h.count,D.start+D.count));for(let c=S,k=y;c<k;c+=3){const l=c,K=c+1,f=c+2;E=pQ(this,n,A,AB,t,e,l,K,f),E&&(E.faceIndex=Math.floor(c/3),E.face.materialIndex=h.materialIndex,I.push(E))}}else{const s=Math.max(0,D.start),G=Math.min(o.count,D.start+D.count);for(let h=s,n=G;h<n;h+=3){const S=h,y=h+1,c=h+2;E=pQ(this,C,A,AB,t,e,S,y,c),E&&(E.faceIndex=Math.floor(h/3),I.push(E))}}}}function Qn(B,A,I,g,C,Q,E,i){let o;if(A.side===Mg?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===pC,i),o===null)return null;dQ.copy(i),dQ.applyMatrix4(B.matrixWorld);const t=I.ray.origin.distanceTo(dQ);return t<I.near||t>I.far?null:{distance:t,point:dQ.clone(),object:B}}function pQ(B,A,I,g,C,Q,E,i,o){B.getVertexPosition(E,fB),B.getVertexPosition(i,uB),B.getVertexPosition(o,HB);const t=Qn(B,A,I,g,fB,uB,HB,Ei);if(t){C&&(FQ.fromBufferAttribute(C,E),RQ.fromBufferAttribute(C,i),qQ.fromBufferAttribute(C,o),t.uv=jg.getUV(Ei,fB,uB,HB,FQ,RQ,qQ,new eA)),Q&&(FQ.fromBufferAttribute(Q,E),RQ.fromBufferAttribute(Q,i),qQ.fromBufferAttribute(Q,o),t.uv2=jg.getUV(Ei,fB,uB,HB,FQ,RQ,qQ,new eA));const e={a:E,b:i,c:o,normal:new L,materialIndex:0};jg.getNormal(fB,uB,HB,e.normal),t.face=e}return t}class JB extends Eg{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],t=[],e=[],a=[];let D=0,s=0;G("z","y","x",-1,-1,g,I,A,E,Q,0),G("z","y","x",1,-1,g,I,-A,E,Q,1),G("x","z","y",1,1,A,g,I,C,E,2),G("x","z","y",1,-1,A,g,-I,C,E,3),G("x","y","z",1,-1,A,I,g,C,Q,4),G("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new dI(t,3)),this.setAttribute("normal",new dI(e,3)),this.setAttribute("uv",new dI(a,2));function G(h,n,S,y,c,k,l,K,f,r,U){const R=k/f,O=l/r,m=k/2,d=l/2,u=K/2,p=f+1,_=r+1;let IA=0,x=0;const BA=new L;for(let CA=0;CA<_;CA++){const N=CA*O-d;for(let V=0;V<p;V++){const QA=V*R-m;BA[h]=QA*y,BA[n]=N*c,BA[S]=u,t.push(BA.x,BA.y,BA.z),BA[h]=0,BA[n]=0,BA[S]=K>0?1:-1,e.push(BA.x,BA.y,BA.z),a.push(V/f),a.push(1-CA/r),IA+=1}}for(let CA=0;CA<r;CA++)for(let N=0;N<f;N++){const V=D+N+p*CA,QA=D+N+p*(CA+1),iA=D+(N+1)+p*(CA+1),sA=D+(N+1)+p*CA;o.push(V,QA,sA),o.push(QA,iA,sA),x+=6}i.addGroup(s,x,U),s+=x,D+=IA}}static fromJSON(A){return new JB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function SB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function vI(B){const A={};for(let I=0;I<B.length;I++){const g=SB(B[I]);for(const C in g)A[C]=g[C]}return A}function En(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function sa(B){return B.getRenderTarget()===null&&B.outputEncoding===DI?pg:IQ}const na={clone:SB,merge:vI};var on=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xg extends UB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=on,this.fragmentShader=tn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=SB(A.uniforms),this.uniformsGroups=En(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class zi extends nI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new KI,this.projectionMatrix=new KI,this.projectionMatrixInverse=new KI}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dg extends zi{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=$Q*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(OB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return $Q*2*Math.atan(Math.tan(OB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(OB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,t=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/t,C*=E.width/o,g*=E.height/t}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const IB=-90,gB=1;class en extends nI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new Dg(IB,gB,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const Q=new Dg(IB,gB,A,I);Q.layers=this.layers,Q.up.set(0,1,0),Q.lookAt(-1,0,0),this.add(Q);const E=new Dg(IB,gB,A,I);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(0,1,0),this.add(E);const i=new Dg(IB,gB,A,I);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const o=new Dg(IB,gB,A,I);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const t=new Dg(IB,gB,A,I);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,-1),this.add(t)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,Q,E,i,o,t]=this.children,e=A.getRenderTarget(),a=A.toneMapping,D=A.xr.enabled;A.toneMapping=fg,A.xr.enabled=!1;const s=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,Q),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=s,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(e),A.toneMapping=a,A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class ha extends Qg{constructor(A,I,g,C,Q,E,i,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:hB,super(A,I,g,C,Q,E,i,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class an extends tC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new ha(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:rg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new JB(5,5,5),Q=new Xg({name:"CubemapFromEquirect",uniforms:SB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Mg,blending:QC});Q.uniforms.tEquirect.value=I;const E=new kg(C,Q),i=I.minFilter;return I.minFilter===$B&&(I.minFilter=rg),new en(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const ii=new L,Dn=new L,sn=new ng;class MC{constructor(A=new L(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=ii.subVectors(g,I).cross(Dn.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,I){const g=A.delta(ii),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(g).multiplyScalar(Q).add(A.start)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||sn.getNormalMatrix(A),C=this.coplanarPoint(ii).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const CB=new hE,YQ=new L;class GE{constructor(A=new MC,I=new MC,g=new MC,C=new MC,Q=new MC,E=new MC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],Q=g[1],E=g[2],i=g[3],o=g[4],t=g[5],e=g[6],a=g[7],D=g[8],s=g[9],G=g[10],h=g[11],n=g[12],S=g[13],y=g[14],c=g[15];return I[0].setComponents(i-C,a-o,h-D,c-n).normalize(),I[1].setComponents(i+C,a+o,h+D,c+n).normalize(),I[2].setComponents(i+Q,a+t,h+s,c+S).normalize(),I[3].setComponents(i-Q,a-t,h-s,c-S).normalize(),I[4].setComponents(i-E,a-e,h-G,c-y).normalize(),I[5].setComponents(i+E,a+e,h+G,c+y).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),CB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(CB)}intersectsSprite(A){return CB.center.set(0,0,0),CB.radius=.7071067811865476,CB.applyMatrix4(A.matrixWorld),this.intersectsSphere(CB)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(YQ.x=C.normal.x>0?A.max.x:A.min.x,YQ.y=C.normal.y>0?A.max.y:A.min.y,YQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(YQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ga(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function nn(B,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,D=t.usage,s=B.createBuffer();B.bindBuffer(e,s),B.bufferData(e,a,D),t.onUploadCallback();let G;if(a instanceof Float32Array)G=5126;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)G=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else G=5123;else if(a instanceof Int16Array)G=5122;else if(a instanceof Uint32Array)G=5125;else if(a instanceof Int32Array)G=5124;else if(a instanceof Int8Array)G=5120;else if(a instanceof Uint8Array)G=5121;else if(a instanceof Uint8ClampedArray)G=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:s,type:G,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version}}function Q(t,e,a){const D=e.array,s=e.updateRange;B.bindBuffer(a,t),s.count===-1?B.bufferSubData(a,0,D):(I?B.bufferSubData(a,s.offset*D.BYTES_PER_ELEMENT,D,s.offset,s.count):B.bufferSubData(a,s.offset*D.BYTES_PER_ELEMENT,D.subarray(s.offset,s.offset+s.count)),s.count=-1),e.onUploadCallback()}function E(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function i(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(B.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const D=g.get(t);(!D||D.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);a===void 0?g.set(t,C(t,e)):a.version<t.version&&(Q(a.buffer,t,e),a.version=t.version)}return{get:E,remove:i,update:o}}class _i extends Eg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),t=i+1,e=o+1,a=A/i,D=I/o,s=[],G=[],h=[],n=[];for(let S=0;S<e;S++){const y=S*D-E;for(let c=0;c<t;c++){const k=c*a-Q;G.push(k,-y,0),h.push(0,0,1),n.push(c/i),n.push(1-S/o)}}for(let S=0;S<o;S++)for(let y=0;y<i;y++){const c=y+t*S,k=y+t*(S+1),l=y+1+t*(S+1),K=y+1+t*S;s.push(c,k,K),s.push(k,l,K)}this.setIndex(s),this.setAttribute("position",new dI(G,3)),this.setAttribute("normal",new dI(h,3)),this.setAttribute("uv",new dI(n,2))}static fromJSON(A){return new _i(A.width,A.height,A.widthSegments,A.heightSegments)}}var hn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gn=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wn=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sn=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kn="vec3 transformed = vec3( position );",yn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ln=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Mn=`#ifdef USE_IRIDESCENCE
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
#endif`,Kn=`#ifdef USE_BUMPMAP
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
#endif`,Un=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rn=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pn=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yn=`#define PI 3.141592653589793
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
}`,Ln=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fn=`vec3 transformedNormal = objectNormal;
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
#endif`,un=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hn=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,mn=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tn=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xn="gl_FragColor = linearToOutputTexel( gl_FragColor );",bn=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,On=`#ifdef USE_ENVMAP
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
#endif`,Zn=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wn=`#ifdef USE_ENVMAP
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
#endif`,Pn=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vn=`#ifdef USE_ENVMAP
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
#endif`,jn=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vn=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xn=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zn=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_n=`#ifdef USE_GRADIENTMAP
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
}`,$n=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#endif`,Bh=`#if defined( USE_ENVMAP )
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
#endif`,Qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,th=`PhysicalMaterial material;
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
#endif`,eh=`struct PhysicalMaterial {
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
}`,ah=`
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
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
#endif`,sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
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
#endif`,Uh=`#ifdef USE_MORPHTARGETS
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
#endif`,Jh=`#ifdef USE_MORPHTARGETS
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
#endif`,Nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Fh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ph=`#ifdef USE_NORMALMAP
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
#endif`,Yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,uh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Vh=`float getShadowMask() {
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
}`,Xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zh=`#ifdef USE_SKINNING
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
#endif`,_h=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$h=`#ifdef USE_SKINNING
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
#endif`,AG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CG=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,BG=`#ifdef USE_TRANSMISSION
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
#endif`,QG=`#ifdef USE_TRANSMISSION
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
#endif`,EG=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,iG=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,oG=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,tG=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,eG=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,aG=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,DG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nG=`uniform sampler2D t2D;
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
}`,hG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,rG=`#include <common>
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
}`,cG=`#if DEPTH_PACKING == 3200
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
}`,kG=`#define DISTANCE
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
}`,yG=`#define DISTANCE
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
}`,lG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,KG=`uniform float scale;
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
}`,UG=`uniform vec3 diffuse;
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
}`,JG=`#include <common>
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
}`,NG=`uniform vec3 diffuse;
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
}`,FG=`#define LAMBERT
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
}`,RG=`#define LAMBERT
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
}`,qG=`#define MATCAP
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
}`,dG=`#define MATCAP
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
}`,pG=`#define NORMAL
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
}`,YG=`#define NORMAL
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
}`,LG=`#define PHONG
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
}`,fG=`#define PHONG
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
}`,uG=`#define STANDARD
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
}`,HG=`#define STANDARD
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
}`,mG=`#define TOON
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
}`,TG=`#define TOON
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
}`,xG=`uniform float size;
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
}`,bG=`uniform vec3 diffuse;
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
}`,OG=`#include <common>
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
}`,ZG=`uniform vec3 color;
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
}`,WG=`uniform float rotation;
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
}`,PG=`uniform vec3 diffuse;
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
}`,bA={alphamap_fragment:hn,alphamap_pars_fragment:Gn,alphatest_fragment:wn,alphatest_pars_fragment:Sn,aomap_fragment:rn,aomap_pars_fragment:cn,begin_vertex:kn,beginnormal_vertex:yn,bsdfs:ln,iridescence_fragment:Mn,bumpmap_pars_fragment:Kn,clipping_planes_fragment:Un,clipping_planes_pars_fragment:Jn,clipping_planes_pars_vertex:Nn,clipping_planes_vertex:Fn,color_fragment:Rn,color_pars_fragment:qn,color_pars_vertex:dn,color_vertex:pn,common:Yn,cube_uv_reflection_fragment:Ln,defaultnormal_vertex:fn,displacementmap_pars_vertex:un,displacementmap_vertex:Hn,emissivemap_fragment:mn,emissivemap_pars_fragment:Tn,encodings_fragment:xn,encodings_pars_fragment:bn,envmap_fragment:On,envmap_common_pars_fragment:Zn,envmap_pars_fragment:Wn,envmap_pars_vertex:Pn,envmap_physical_pars_fragment:Bh,envmap_vertex:vn,fog_vertex:jn,fog_pars_vertex:Vn,fog_fragment:Xn,fog_pars_fragment:zn,gradientmap_pars_fragment:_n,lightmap_fragment:$n,lightmap_pars_fragment:Ah,lights_lambert_fragment:Ih,lights_lambert_pars_fragment:gh,lights_pars_begin:Ch,lights_toon_fragment:Qh,lights_toon_pars_fragment:Eh,lights_phong_fragment:ih,lights_phong_pars_fragment:oh,lights_physical_fragment:th,lights_physical_pars_fragment:eh,lights_fragment_begin:ah,lights_fragment_maps:Dh,lights_fragment_end:sh,logdepthbuf_fragment:nh,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:Gh,logdepthbuf_vertex:wh,map_fragment:Sh,map_pars_fragment:rh,map_particle_fragment:ch,map_particle_pars_fragment:kh,metalnessmap_fragment:yh,metalnessmap_pars_fragment:lh,morphcolor_vertex:Mh,morphnormal_vertex:Kh,morphtarget_pars_vertex:Uh,morphtarget_vertex:Jh,normal_fragment_begin:Nh,normal_fragment_maps:Fh,normal_pars_fragment:Rh,normal_pars_vertex:qh,normal_vertex:dh,normalmap_pars_fragment:ph,clearcoat_normal_fragment_begin:Yh,clearcoat_normal_fragment_maps:Lh,clearcoat_pars_fragment:fh,iridescence_pars_fragment:uh,output_fragment:Hh,packing:mh,premultiplied_alpha_fragment:Th,project_vertex:xh,dithering_fragment:bh,dithering_pars_fragment:Oh,roughnessmap_fragment:Zh,roughnessmap_pars_fragment:Wh,shadowmap_pars_fragment:Ph,shadowmap_pars_vertex:vh,shadowmap_vertex:jh,shadowmask_pars_fragment:Vh,skinbase_vertex:Xh,skinning_pars_vertex:zh,skinning_vertex:_h,skinnormal_vertex:$h,specularmap_fragment:AG,specularmap_pars_fragment:IG,tonemapping_fragment:gG,tonemapping_pars_fragment:CG,transmission_fragment:BG,transmission_pars_fragment:QG,uv_pars_fragment:EG,uv_pars_vertex:iG,uv_vertex:oG,uv2_pars_fragment:tG,uv2_pars_vertex:eG,uv2_vertex:aG,worldpos_vertex:DG,background_vert:sG,background_frag:nG,backgroundCube_vert:hG,backgroundCube_frag:GG,cube_vert:wG,cube_frag:SG,depth_vert:rG,depth_frag:cG,distanceRGBA_vert:kG,distanceRGBA_frag:yG,equirect_vert:lG,equirect_frag:MG,linedashed_vert:KG,linedashed_frag:UG,meshbasic_vert:JG,meshbasic_frag:NG,meshlambert_vert:FG,meshlambert_frag:RG,meshmatcap_vert:qG,meshmatcap_frag:dG,meshnormal_vert:pG,meshnormal_frag:YG,meshphong_vert:LG,meshphong_frag:fG,meshphysical_vert:uG,meshphysical_frag:HG,meshtoon_vert:mG,meshtoon_frag:TG,points_vert:xG,points_frag:bG,shadow_vert:OG,shadow_frag:ZG,sprite_vert:WG,sprite_frag:PG},wA={common:{diffuse:{value:new gI(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ng},uv2Transform:{value:new ng},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new eA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ng}},sprite:{diffuse:{value:new gI(16777215)},opacity:{value:1},center:{value:new eA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ng}}},Yg={basic:{uniforms:vI([wA.common,wA.specularmap,wA.envmap,wA.aomap,wA.lightmap,wA.fog]),vertexShader:bA.meshbasic_vert,fragmentShader:bA.meshbasic_frag},lambert:{uniforms:vI([wA.common,wA.specularmap,wA.envmap,wA.aomap,wA.lightmap,wA.emissivemap,wA.bumpmap,wA.normalmap,wA.displacementmap,wA.fog,wA.lights,{emissive:{value:new gI(0)}}]),vertexShader:bA.meshlambert_vert,fragmentShader:bA.meshlambert_frag},phong:{uniforms:vI([wA.common,wA.specularmap,wA.envmap,wA.aomap,wA.lightmap,wA.emissivemap,wA.bumpmap,wA.normalmap,wA.displacementmap,wA.fog,wA.lights,{emissive:{value:new gI(0)},specular:{value:new gI(1118481)},shininess:{value:30}}]),vertexShader:bA.meshphong_vert,fragmentShader:bA.meshphong_frag},standard:{uniforms:vI([wA.common,wA.envmap,wA.aomap,wA.lightmap,wA.emissivemap,wA.bumpmap,wA.normalmap,wA.displacementmap,wA.roughnessmap,wA.metalnessmap,wA.fog,wA.lights,{emissive:{value:new gI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag},toon:{uniforms:vI([wA.common,wA.aomap,wA.lightmap,wA.emissivemap,wA.bumpmap,wA.normalmap,wA.displacementmap,wA.gradientmap,wA.fog,wA.lights,{emissive:{value:new gI(0)}}]),vertexShader:bA.meshtoon_vert,fragmentShader:bA.meshtoon_frag},matcap:{uniforms:vI([wA.common,wA.bumpmap,wA.normalmap,wA.displacementmap,wA.fog,{matcap:{value:null}}]),vertexShader:bA.meshmatcap_vert,fragmentShader:bA.meshmatcap_frag},points:{uniforms:vI([wA.points,wA.fog]),vertexShader:bA.points_vert,fragmentShader:bA.points_frag},dashed:{uniforms:vI([wA.common,wA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bA.linedashed_vert,fragmentShader:bA.linedashed_frag},depth:{uniforms:vI([wA.common,wA.displacementmap]),vertexShader:bA.depth_vert,fragmentShader:bA.depth_frag},normal:{uniforms:vI([wA.common,wA.bumpmap,wA.normalmap,wA.displacementmap,{opacity:{value:1}}]),vertexShader:bA.meshnormal_vert,fragmentShader:bA.meshnormal_frag},sprite:{uniforms:vI([wA.sprite,wA.fog]),vertexShader:bA.sprite_vert,fragmentShader:bA.sprite_frag},background:{uniforms:{uvTransform:{value:new ng},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bA.background_vert,fragmentShader:bA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:bA.backgroundCube_vert,fragmentShader:bA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bA.cube_vert,fragmentShader:bA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bA.equirect_vert,fragmentShader:bA.equirect_frag},distanceRGBA:{uniforms:vI([wA.common,wA.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bA.distanceRGBA_vert,fragmentShader:bA.distanceRGBA_frag},shadow:{uniforms:vI([wA.lights,wA.fog,{color:{value:new gI(0)},opacity:{value:1}}]),vertexShader:bA.shadow_vert,fragmentShader:bA.shadow_frag}};Yg.physical={uniforms:vI([Yg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new eA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new gI(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new eA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new gI(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new gI(1,1,1)},specularColorMap:{value:null}}]),vertexShader:bA.meshphysical_vert,fragmentShader:bA.meshphysical_frag};const LQ={r:0,b:0,g:0};function vG(B,A,I,g,C,Q,E){const i=new gI(0);let o=Q===!0?0:1,t,e,a=null,D=0,s=null;function G(n,S){let y=!1,c=S.isScene===!0?S.background:null;c&&c.isTexture&&(c=(S.backgroundBlurriness>0?I:A).get(c));const k=B.xr,l=k.getSession&&k.getSession();l&&l.environmentBlendMode==="additive"&&(c=null),c===null?h(i,o):c&&c.isColor&&(h(c,1),y=!0),(B.autoClear||y)&&B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil),c&&(c.isCubeTexture||c.mapping===nE)?(e===void 0&&(e=new kg(new JB(1,1,1),new Xg({name:"BackgroundCubeMaterial",uniforms:SB(Yg.backgroundCube.uniforms),vertexShader:Yg.backgroundCube.vertexShader,fragmentShader:Yg.backgroundCube.fragmentShader,side:Mg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(K,f,r){this.matrixWorld.copyPosition(r.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=c,e.material.uniforms.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,e.material.toneMapped=c.encoding!==DI,(a!==c||D!==c.version||s!==B.toneMapping)&&(e.material.needsUpdate=!0,a=c,D=c.version,s=B.toneMapping),e.layers.enableAll(),n.unshift(e,e.geometry,e.material,0,0,null)):c&&c.isTexture&&(t===void 0&&(t=new kg(new _i(2,2),new Xg({name:"BackgroundMaterial",uniforms:SB(Yg.background.uniforms),vertexShader:Yg.background.vertexShader,fragmentShader:Yg.background.fragmentShader,side:pC,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=c,t.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,t.material.toneMapped=c.encoding!==DI,c.matrixAutoUpdate===!0&&c.updateMatrix(),t.material.uniforms.uvTransform.value.copy(c.matrix),(a!==c||D!==c.version||s!==B.toneMapping)&&(t.material.needsUpdate=!0,a=c,D=c.version,s=B.toneMapping),t.layers.enableAll(),n.unshift(t,t.geometry,t.material,0,0,null))}function h(n,S){n.getRGB(LQ,sa(B)),g.buffers.color.setClear(LQ.r,LQ.g,LQ.b,S,E)}return{getClearColor:function(){return i},setClearColor:function(n,S=1){i.set(n),o=S,h(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(n){o=n,h(i,o)},render:G}}function jG(B,A,I,g){const C=B.getParameter(34921),Q=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||Q!==null,i={},o=n(null);let t=o,e=!1;function a(u,p,_,IA,x){let BA=!1;if(E){const CA=h(IA,_,p);t!==CA&&(t=CA,s(t.object)),BA=S(u,IA,_,x),BA&&y(u,IA,_,x)}else{const CA=p.wireframe===!0;(t.geometry!==IA.id||t.program!==_.id||t.wireframe!==CA)&&(t.geometry=IA.id,t.program=_.id,t.wireframe=CA,BA=!0)}x!==null&&I.update(x,34963),(BA||e)&&(e=!1,r(u,p,_,IA),x!==null&&B.bindBuffer(34963,I.get(x).buffer))}function D(){return g.isWebGL2?B.createVertexArray():Q.createVertexArrayOES()}function s(u){return g.isWebGL2?B.bindVertexArray(u):Q.bindVertexArrayOES(u)}function G(u){return g.isWebGL2?B.deleteVertexArray(u):Q.deleteVertexArrayOES(u)}function h(u,p,_){const IA=_.wireframe===!0;let x=i[u.id];x===void 0&&(x={},i[u.id]=x);let BA=x[p.id];BA===void 0&&(BA={},x[p.id]=BA);let CA=BA[IA];return CA===void 0&&(CA=n(D()),BA[IA]=CA),CA}function n(u){const p=[],_=[],IA=[];for(let x=0;x<C;x++)p[x]=0,_[x]=0,IA[x]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:_,attributeDivisors:IA,object:u,attributes:{},index:null}}function S(u,p,_,IA){const x=t.attributes,BA=p.attributes;let CA=0;const N=_.getAttributes();for(const V in N)if(N[V].location>=0){const iA=x[V];let sA=BA[V];if(sA===void 0&&(V==="instanceMatrix"&&u.instanceMatrix&&(sA=u.instanceMatrix),V==="instanceColor"&&u.instanceColor&&(sA=u.instanceColor)),iA===void 0||iA.attribute!==sA||sA&&iA.data!==sA.data)return!0;CA++}return t.attributesNum!==CA||t.index!==IA}function y(u,p,_,IA){const x={},BA=p.attributes;let CA=0;const N=_.getAttributes();for(const V in N)if(N[V].location>=0){let iA=BA[V];iA===void 0&&(V==="instanceMatrix"&&u.instanceMatrix&&(iA=u.instanceMatrix),V==="instanceColor"&&u.instanceColor&&(iA=u.instanceColor));const sA={};sA.attribute=iA,iA&&iA.data&&(sA.data=iA.data),x[V]=sA,CA++}t.attributes=x,t.attributesNum=CA,t.index=IA}function c(){const u=t.newAttributes;for(let p=0,_=u.length;p<_;p++)u[p]=0}function k(u){l(u,0)}function l(u,p){const _=t.newAttributes,IA=t.enabledAttributes,x=t.attributeDivisors;_[u]=1,IA[u]===0&&(B.enableVertexAttribArray(u),IA[u]=1),x[u]!==p&&((g.isWebGL2?B:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](u,p),x[u]=p)}function K(){const u=t.newAttributes,p=t.enabledAttributes;for(let _=0,IA=p.length;_<IA;_++)p[_]!==u[_]&&(B.disableVertexAttribArray(_),p[_]=0)}function f(u,p,_,IA,x,BA){g.isWebGL2===!0&&(_===5124||_===5125)?B.vertexAttribIPointer(u,p,_,x,BA):B.vertexAttribPointer(u,p,_,IA,x,BA)}function r(u,p,_,IA){if(g.isWebGL2===!1&&(u.isInstancedMesh||IA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;c();const x=IA.attributes,BA=_.getAttributes(),CA=p.defaultAttributeValues;for(const N in BA){const V=BA[N];if(V.location>=0){let QA=x[N];if(QA===void 0&&(N==="instanceMatrix"&&u.instanceMatrix&&(QA=u.instanceMatrix),N==="instanceColor"&&u.instanceColor&&(QA=u.instanceColor)),QA!==void 0){const iA=QA.normalized,sA=QA.itemSize,T=I.get(QA);if(T===void 0)continue;const hA=T.buffer,MA=T.type,uA=T.bytesPerElement;if(QA.isInterleavedBufferAttribute){const SA=QA.data,xA=SA.stride,gA=QA.offset;if(SA.isInstancedInterleavedBuffer){for(let AA=0;AA<V.locationSize;AA++)l(V.location+AA,SA.meshPerAttribute);u.isInstancedMesh!==!0&&IA._maxInstanceCount===void 0&&(IA._maxInstanceCount=SA.meshPerAttribute*SA.count)}else for(let AA=0;AA<V.locationSize;AA++)k(V.location+AA);B.bindBuffer(34962,hA);for(let AA=0;AA<V.locationSize;AA++)f(V.location+AA,sA/V.locationSize,MA,iA,xA*uA,(gA+sA/V.locationSize*AA)*uA)}else{if(QA.isInstancedBufferAttribute){for(let SA=0;SA<V.locationSize;SA++)l(V.location+SA,QA.meshPerAttribute);u.isInstancedMesh!==!0&&IA._maxInstanceCount===void 0&&(IA._maxInstanceCount=QA.meshPerAttribute*QA.count)}else for(let SA=0;SA<V.locationSize;SA++)k(V.location+SA);B.bindBuffer(34962,hA);for(let SA=0;SA<V.locationSize;SA++)f(V.location+SA,sA/V.locationSize,MA,iA,sA*uA,sA/V.locationSize*SA*uA)}}else if(CA!==void 0){const iA=CA[N];if(iA!==void 0)switch(iA.length){case 2:B.vertexAttrib2fv(V.location,iA);break;case 3:B.vertexAttrib3fv(V.location,iA);break;case 4:B.vertexAttrib4fv(V.location,iA);break;default:B.vertexAttrib1fv(V.location,iA)}}}}K()}function U(){m();for(const u in i){const p=i[u];for(const _ in p){const IA=p[_];for(const x in IA)G(IA[x].object),delete IA[x];delete p[_]}delete i[u]}}function R(u){if(i[u.id]===void 0)return;const p=i[u.id];for(const _ in p){const IA=p[_];for(const x in IA)G(IA[x].object),delete IA[x];delete p[_]}delete i[u.id]}function O(u){for(const p in i){const _=i[p];if(_[u.id]===void 0)continue;const IA=_[u.id];for(const x in IA)G(IA[x].object),delete IA[x];delete _[u.id]}}function m(){d(),e=!0,t!==o&&(t=o,s(t.object))}function d(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:m,resetDefaultState:d,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:c,enableAttribute:k,disableUnusedAttributes:K}}function VG(B,A,I,g){const C=g.isWebGL2;let Q;function E(t){Q=t}function i(t,e){B.drawArrays(Q,t,e),I.update(e,Q,1)}function o(t,e,a){if(a===0)return;let D,s;if(C)D=B,s="drawArraysInstanced";else if(D=A.get("ANGLE_instanced_arrays"),s="drawArraysInstancedANGLE",D===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[s](Q,t,e,a),I.update(e,Q,a)}this.setMode=E,this.render=i,this.renderInstances=o}function XG(B,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const f=A.get("EXT_texture_filter_anisotropic");g=B.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function Q(f){if(f==="highp"){if(B.getShaderPrecisionFormat(35633,36338).precision>0&&B.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";f="mediump"}return f==="mediump"&&B.getShaderPrecisionFormat(35633,36337).precision>0&&B.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&B instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&B instanceof WebGL2ComputeRenderingContext;let i=I.precision!==void 0?I.precision:"highp";const o=Q(i);o!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",o,"instead."),i=o);const t=E||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=B.getParameter(34930),D=B.getParameter(35660),s=B.getParameter(3379),G=B.getParameter(34076),h=B.getParameter(34921),n=B.getParameter(36347),S=B.getParameter(36348),y=B.getParameter(36349),c=D>0,k=E||A.has("OES_texture_float"),l=c&&k,K=E?B.getParameter(36183):0;return{isWebGL2:E,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:Q,precision:i,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:D,maxTextureSize:s,maxCubemapSize:G,maxAttributes:h,maxVertexUniforms:n,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:c,floatFragmentTextures:k,floatVertexTextures:l,maxSamples:K}}function zG(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new MC,i=new ng,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,D,s){const G=a.length!==0||D||g!==0||C;return C=D,I=e(a,s,0),g=a.length,G},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1,t()},this.setState=function(a,D,s){const G=a.clippingPlanes,h=a.clipIntersection,n=a.clipShadows,S=B.get(a);if(!C||G===null||G.length===0||Q&&!n)Q?e(null):t();else{const y=Q?0:g,c=y*4;let k=S.clippingState||null;o.value=k,k=e(G,D,c,s);for(let l=0;l!==c;++l)k[l]=I[l];S.clippingState=k,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=y}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,D,s,G){const h=a!==null?a.length:0;let n=null;if(h!==0){if(n=o.value,G!==!0||n===null){const S=s+h*4,y=D.matrixWorldInverse;i.getNormalMatrix(y),(n===null||n.length<S)&&(n=new Float32Array(S));for(let c=0,k=s;c!==h;++c,k+=4)E.copy(a[c]).applyMatrix4(y,i),E.normal.toArray(n,k),n[k+3]=E.constant}o.value=n,o.needsUpdate=!0}return A.numPlanes=h,A.numIntersection=0,n}}function _G(B){let A=new WeakMap;function I(E,i){return i===Ui?E.mapping=hB:i===Ji&&(E.mapping=GB),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===Ui||i===Ji)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const t=new an(o.height/2);return t.fromEquirectangularTexture(B,E),A.set(E,t),E.addEventListener("dispose",C),I(t.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class $i extends zi{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=t*this.view.offsetX,E=Q+t*this.view.width,i-=e*this.view.offsetY,o=i-e*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const tB=4,Ft=[.125,.215,.35,.446,.526,.582],UC=20,oi=new $i,Rt=new gI;let ti=null;const KC=(1+Math.sqrt(5))/2,BB=1/KC,qt=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,KC,BB),new L(0,KC,-BB),new L(BB,0,KC),new L(-BB,0,KC),new L(KC,BB,0),new L(-KC,BB,0)];class dt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){ti=this._renderer.getRenderTarget(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ti),A.scissorTest=!1,fQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===hB||A.mapping===GB?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ti=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:rg,minFilter:rg,generateMipmaps:!1,type:AQ,format:qg,encoding:oC,depthBuffer:!1},C=pt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$G(Q)),this._blurMaterial=Aw(Q,A,I)}return C}_compileMaterial(A){const I=new kg(this._lodPlanes[0],A);this._renderer.compile(I,oi)}_sceneToCubeUV(A,I,g,C){const i=new Dg(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,D=e.toneMapping;e.getClearColor(Rt),e.toneMapping=fg,e.autoClear=!1;const s=new ea({name:"PMREM.Background",side:Mg,depthWrite:!1,depthTest:!1}),G=new kg(new JB,s);let h=!1;const n=A.background;n?n.isColor&&(s.color.copy(n),A.background=null,h=!0):(s.color.copy(Rt),h=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(i.up.set(0,o[S],0),i.lookAt(t[S],0,0)):y===1?(i.up.set(0,0,o[S]),i.lookAt(0,t[S],0)):(i.up.set(0,o[S],0),i.lookAt(0,0,t[S]));const c=this._cubeSize;fQ(C,y*c,S>2?c:0,c,c),e.setRenderTarget(C),h&&e.render(G,i),e.render(A,i)}G.geometry.dispose(),G.material.dispose(),e.toneMapping=D,e.autoClear=a,A.background=n}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===hB||A.mapping===GB;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yt());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new kg(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;fQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,oi)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const Q=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),E=qt[(C-1)%qt.length];this._blur(A,C-1,C,Q,E)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,t=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new kg(this._lodPlanes[C],t),D=t.uniforms,s=this._sizeLods[g]-1,G=isFinite(Q)?Math.PI/(2*s):2*Math.PI/(2*UC-1),h=Q/G,n=isFinite(Q)?1+Math.floor(e*h):UC;n>UC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${n} samples when the maximum is set to ${UC}`);const S=[];let y=0;for(let f=0;f<UC;++f){const r=f/h,U=Math.exp(-r*r/2);S.push(U),f===0?y+=U:f<n&&(y+=2*U)}for(let f=0;f<S.length;f++)S[f]=S[f]/y;D.envMap.value=A.texture,D.samples.value=n,D.weights.value=S,D.latitudinal.value=E==="latitudinal",i&&(D.poleAxis.value=i);const{_lodMax:c}=this;D.dTheta.value=G,D.mipInt.value=c-g;const k=this._sizeLods[C],l=3*k*(C>c-tB?C-c+tB:0),K=4*(this._cubeSize-k);fQ(I,l,K,3*k,2*k),o.setRenderTarget(I),o.render(a,oi)}}function $G(B){const A=[],I=[],g=[];let C=B;const Q=B-tB+1+Ft.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-tB?o=Ft[E-B+tB-1]:E===0&&(o=0),g.push(o);const t=1/(i-2),e=-t,a=1+t,D=[e,e,a,e,a,a,e,e,a,a,e,a],s=6,G=6,h=3,n=2,S=1,y=new Float32Array(h*G*s),c=new Float32Array(n*G*s),k=new Float32Array(S*G*s);for(let K=0;K<s;K++){const f=K%3*2/3-1,r=K>2?0:-1,U=[f,r,0,f+2/3,r,0,f+2/3,r+1,0,f,r,0,f+2/3,r+1,0,f,r+1,0];y.set(U,h*G*K),c.set(D,n*G*K);const R=[K,K,K,K,K,K];k.set(R,S*G*K)}const l=new Eg;l.setAttribute("position",new Bg(y,h)),l.setAttribute("uv",new Bg(c,n)),l.setAttribute("faceIndex",new Bg(k,S)),A.push(l),C>tB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function pt(B,A,I){const g=new tC(B,A,I);return g.texture.mapping=nE,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function fQ(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function Aw(B,A,I){const g=new Float32Array(UC),C=new L(0,1,0);return new Xg({name:"SphericalGaussianBlur",defines:{n:UC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:QC,depthTest:!1,depthWrite:!1})}function Yt(){return new Xg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:QC,depthTest:!1,depthWrite:!1})}function Lt(){return new Xg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:QC,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function Iw(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,t=o===Ui||o===Ji,e=o===hB||o===GB;if(t||e)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let a=A.get(i);return I===null&&(I=new dt(B)),a=t?I.fromEquirectangular(i,a):I.fromCubemap(i,a),A.set(i,a),a.texture}else{if(A.has(i))return A.get(i).texture;{const a=i.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new dt(B));const D=t?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,D),i.addEventListener("dispose",Q),D.texture}else return null}}}return i}function C(i){let o=0;const t=6;for(let e=0;e<t;e++)i[e]!==void 0&&o++;return o===t}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function gw(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Cw(B,A,I,g){const C={},Q=new WeakMap;function E(a){const D=a.target;D.index!==null&&A.remove(D.index);for(const G in D.attributes)A.remove(D.attributes[G]);D.removeEventListener("dispose",E),delete C[D.id];const s=Q.get(D);s&&(A.remove(s),Q.delete(D)),g.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0&&delete D._maxInstanceCount,I.memory.geometries--}function i(a,D){return C[D.id]===!0||(D.addEventListener("dispose",E),C[D.id]=!0,I.memory.geometries++),D}function o(a){const D=a.attributes;for(const G in D)A.update(D[G],34962);const s=a.morphAttributes;for(const G in s){const h=s[G];for(let n=0,S=h.length;n<S;n++)A.update(h[n],34962)}}function t(a){const D=[],s=a.index,G=a.attributes.position;let h=0;if(s!==null){const y=s.array;h=s.version;for(let c=0,k=y.length;c<k;c+=3){const l=y[c+0],K=y[c+1],f=y[c+2];D.push(l,K,K,f,f,l)}}else{const y=G.array;h=G.version;for(let c=0,k=y.length/3-1;c<k;c+=3){const l=c+0,K=c+1,f=c+2;D.push(l,K,K,f,f,l)}}const n=new(Qa(D)?Da:aa)(D,1);n.version=h;const S=Q.get(a);S&&A.remove(S),Q.set(a,n)}function e(a){const D=Q.get(a);if(D){const s=a.index;s!==null&&D.version<s.version&&t(a)}else t(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:e}}function Bw(B,A,I,g){const C=g.isWebGL2;let Q;function E(D){Q=D}let i,o;function t(D){i=D.type,o=D.bytesPerElement}function e(D,s){B.drawElements(Q,s,i,D*o),I.update(s,Q,1)}function a(D,s,G){if(G===0)return;let h,n;if(C)h=B,n="drawElementsInstanced";else if(h=A.get("ANGLE_instanced_arrays"),n="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[n](Q,s,i,D*o,G),I.update(s,Q,G)}this.setMode=E,this.setIndex=t,this.render=e,this.renderInstances=a}function Qw(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case 4:I.triangles+=i*(Q/3);break;case 1:I.lines+=i*(Q/2);break;case 3:I.lines+=i*(Q-1);break;case 2:I.lines+=i*Q;break;case 0:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Ew(B,A){return B[0]-A[0]}function iw(B,A){return Math.abs(A[1])-Math.abs(B[1])}function ow(B,A,I){const g={},C=new Float32Array(8),Q=new WeakMap,E=new xI,i=[];for(let t=0;t<8;t++)i[t]=[t,0];function o(t,e,a,D){const s=t.morphTargetInfluences;if(A.isWebGL2===!0){const h=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,n=h!==void 0?h.length:0;let S=Q.get(e);if(S===void 0||S.count!==n){let _=function(){u.dispose(),Q.delete(e),e.removeEventListener("dispose",_)};var G=_;S!==void 0&&S.texture.dispose();const k=e.morphAttributes.position!==void 0,l=e.morphAttributes.normal!==void 0,K=e.morphAttributes.color!==void 0,f=e.morphAttributes.position||[],r=e.morphAttributes.normal||[],U=e.morphAttributes.color||[];let R=0;k===!0&&(R=1),l===!0&&(R=2),K===!0&&(R=3);let O=e.attributes.position.count*R,m=1;O>A.maxTextureSize&&(m=Math.ceil(O/A.maxTextureSize),O=A.maxTextureSize);const d=new Float32Array(O*m*4*n),u=new ta(d,O,m,n);u.type=FC,u.needsUpdate=!0;const p=R*4;for(let IA=0;IA<n;IA++){const x=f[IA],BA=r[IA],CA=U[IA],N=O*m*4*IA;for(let V=0;V<x.count;V++){const QA=V*p;k===!0&&(E.fromBufferAttribute(x,V),d[N+QA+0]=E.x,d[N+QA+1]=E.y,d[N+QA+2]=E.z,d[N+QA+3]=0),l===!0&&(E.fromBufferAttribute(BA,V),d[N+QA+4]=E.x,d[N+QA+5]=E.y,d[N+QA+6]=E.z,d[N+QA+7]=0),K===!0&&(E.fromBufferAttribute(CA,V),d[N+QA+8]=E.x,d[N+QA+9]=E.y,d[N+QA+10]=E.z,d[N+QA+11]=CA.itemSize===4?E.w:1)}}S={count:n,texture:u,size:new eA(O,m)},Q.set(e,S),e.addEventListener("dispose",_)}let y=0;for(let k=0;k<s.length;k++)y+=s[k];const c=e.morphTargetsRelative?1:1-y;D.getUniforms().setValue(B,"morphTargetBaseInfluence",c),D.getUniforms().setValue(B,"morphTargetInfluences",s),D.getUniforms().setValue(B,"morphTargetsTexture",S.texture,I),D.getUniforms().setValue(B,"morphTargetsTextureSize",S.size)}else{const h=s===void 0?0:s.length;let n=g[e.id];if(n===void 0||n.length!==h){n=[];for(let l=0;l<h;l++)n[l]=[l,0];g[e.id]=n}for(let l=0;l<h;l++){const K=n[l];K[0]=l,K[1]=s[l]}n.sort(iw);for(let l=0;l<8;l++)l<h&&n[l][1]?(i[l][0]=n[l][0],i[l][1]=n[l][1]):(i[l][0]=Number.MAX_SAFE_INTEGER,i[l][1]=0);i.sort(Ew);const S=e.morphAttributes.position,y=e.morphAttributes.normal;let c=0;for(let l=0;l<8;l++){const K=i[l],f=K[0],r=K[1];f!==Number.MAX_SAFE_INTEGER&&r?(S&&e.getAttribute("morphTarget"+l)!==S[f]&&e.setAttribute("morphTarget"+l,S[f]),y&&e.getAttribute("morphNormal"+l)!==y[f]&&e.setAttribute("morphNormal"+l,y[f]),C[l]=r,c+=r):(S&&e.hasAttribute("morphTarget"+l)===!0&&e.deleteAttribute("morphTarget"+l),y&&e.hasAttribute("morphNormal"+l)===!0&&e.deleteAttribute("morphNormal"+l),C[l]=0)}const k=e.morphTargetsRelative?1:1-c;D.getUniforms().setValue(B,"morphTargetBaseInfluence",k),D.getUniforms().setValue(B,"morphTargetInfluences",C)}}return{update:o}}function tw(B,A,I,g){let C=new WeakMap;function Q(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);return C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),I.update(o.instanceMatrix,34962),o.instanceColor!==null&&I.update(o.instanceColor,34962)),a}function E(){C=new WeakMap}function i(o){const t=o.target;t.removeEventListener("dispose",i),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:Q,dispose:E}}const wa=new Qg,Sa=new ta,ra=new Vs,ca=new ha,ft=[],ut=[],Ht=new Float32Array(16),mt=new Float32Array(9),Tt=new Float32Array(4);function NB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=ft[C];if(Q===void 0&&(Q=new Float32Array(C),ft[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function LI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function fI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function wE(B,A){let I=ut[A];I===void 0&&(I=new Int32Array(A),ut[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function ew(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function aw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(LI(I,A))return;B.uniform2fv(this.addr,A),fI(I,A)}}function Dw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(LI(I,A))return;B.uniform3fv(this.addr,A),fI(I,A)}}function sw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(LI(I,A))return;B.uniform4fv(this.addr,A),fI(I,A)}}function nw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(LI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),fI(I,A)}else{if(LI(I,g))return;Tt.set(g),B.uniformMatrix2fv(this.addr,!1,Tt),fI(I,g)}}function hw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(LI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),fI(I,A)}else{if(LI(I,g))return;mt.set(g),B.uniformMatrix3fv(this.addr,!1,mt),fI(I,g)}}function Gw(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(LI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),fI(I,A)}else{if(LI(I,g))return;Ht.set(g),B.uniformMatrix4fv(this.addr,!1,Ht),fI(I,g)}}function ww(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function Sw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(LI(I,A))return;B.uniform2iv(this.addr,A),fI(I,A)}}function rw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(LI(I,A))return;B.uniform3iv(this.addr,A),fI(I,A)}}function cw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(LI(I,A))return;B.uniform4iv(this.addr,A),fI(I,A)}}function kw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function yw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(LI(I,A))return;B.uniform2uiv(this.addr,A),fI(I,A)}}function lw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(LI(I,A))return;B.uniform3uiv(this.addr,A),fI(I,A)}}function Mw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(LI(I,A))return;B.uniform4uiv(this.addr,A),fI(I,A)}}function Kw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||wa,C)}function Uw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||ra,C)}function Jw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||ca,C)}function Nw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||Sa,C)}function Fw(B){switch(B){case 5126:return ew;case 35664:return aw;case 35665:return Dw;case 35666:return sw;case 35674:return nw;case 35675:return hw;case 35676:return Gw;case 5124:case 35670:return ww;case 35667:case 35671:return Sw;case 35668:case 35672:return rw;case 35669:case 35673:return cw;case 5125:return kw;case 36294:return yw;case 36295:return lw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Kw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Rw(B,A){B.uniform1fv(this.addr,A)}function qw(B,A){const I=NB(A,this.size,2);B.uniform2fv(this.addr,I)}function dw(B,A){const I=NB(A,this.size,3);B.uniform3fv(this.addr,I)}function pw(B,A){const I=NB(A,this.size,4);B.uniform4fv(this.addr,I)}function Yw(B,A){const I=NB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function Lw(B,A){const I=NB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function fw(B,A){const I=NB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function uw(B,A){B.uniform1iv(this.addr,A)}function Hw(B,A){B.uniform2iv(this.addr,A)}function mw(B,A){B.uniform3iv(this.addr,A)}function Tw(B,A){B.uniform4iv(this.addr,A)}function xw(B,A){B.uniform1uiv(this.addr,A)}function bw(B,A){B.uniform2uiv(this.addr,A)}function Ow(B,A){B.uniform3uiv(this.addr,A)}function Zw(B,A){B.uniform4uiv(this.addr,A)}function Ww(B,A,I){const g=this.cache,C=A.length,Q=wE(I,C);LI(g,Q)||(B.uniform1iv(this.addr,Q),fI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||wa,Q[E])}function Pw(B,A,I){const g=this.cache,C=A.length,Q=wE(I,C);LI(g,Q)||(B.uniform1iv(this.addr,Q),fI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||ra,Q[E])}function vw(B,A,I){const g=this.cache,C=A.length,Q=wE(I,C);LI(g,Q)||(B.uniform1iv(this.addr,Q),fI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||ca,Q[E])}function jw(B,A,I){const g=this.cache,C=A.length,Q=wE(I,C);LI(g,Q)||(B.uniform1iv(this.addr,Q),fI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||Sa,Q[E])}function Vw(B){switch(B){case 5126:return Rw;case 35664:return qw;case 35665:return dw;case 35666:return pw;case 35674:return Yw;case 35675:return Lw;case 35676:return fw;case 5124:case 35670:return uw;case 35667:case 35671:return Hw;case 35668:case 35672:return mw;case 35669:case 35673:return Tw;case 5125:return xw;case 36294:return bw;case 36295:return Ow;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return jw}}class Xw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=Fw(I.type)}}class zw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=Vw(I.type)}}class _w{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const ei=/(\w+)(\])?(\[|\.)?/g;function xt(B,A){B.seq.push(A),B.map[A.id]=A}function $w(B,A,I){const g=B.name,C=g.length;for(ei.lastIndex=0;;){const Q=ei.exec(g),E=ei.lastIndex;let i=Q[1];const o=Q[2]==="]",t=Q[3];if(o&&(i=i|0),t===void 0||t==="["&&E+2===C){xt(I,t===void 0?new Xw(i,B,A):new zw(i,B,A));break}else{let a=I.map[i];a===void 0&&(a=new _w(i),xt(I,a)),I=a}}}class vQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,35718);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);$w(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function bt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}let AS=0;function IS(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function gS(B){switch(B){case oC:return["Linear","( value )"];case DI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",B),["Linear","( value )"]}}function Ot(B,A,I){const g=B.getShaderParameter(A,35713),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+IS(B.getShaderSource(A),E)}else return C}function CS(B,A){const I=gS(A);return"vec4 "+B+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function BS(B,A){let I;switch(A){case es:I="Linear";break;case as:I="Reinhard";break;case Ds:I="OptimizedCineon";break;case Ia:I="ACESFilmic";break;case ss:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function QS(B){return[B.extensionDerivatives||B.envMapCubeUVHeight||B.bumpMap||B.tangentSpaceNormalMap||B.clearcoatNormalMap||B.flatShading||B.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(B.extensionFragDepth||B.logarithmicDepthBuffer)&&B.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",B.extensionDrawBuffers&&B.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(B.extensionShaderTextureLOD||B.envMap||B.transmission)&&B.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xB).join(`
`)}function ES(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function iS(B,A){const I={},g=B.getProgramParameter(A,35721);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===35674&&(i=2),Q.type===35675&&(i=3),Q.type===35676&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function xB(B){return B!==""}function Zt(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Wt(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const oS=/^[ \t]*#include +<([\w\d./]+)>/gm;function di(B){return B.replace(oS,tS)}function tS(B,A){const I=bA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return di(I)}const eS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pt(B){return B.replace(eS,aS)}function aS(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function vt(B){let A="precision "+B.precision+` float;
precision `+B.precision+" int;";return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function DS(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Xe?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===ze?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===mB&&(A="SHADOWMAP_TYPE_VSM"),A}function sS(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case hB:case GB:A="ENVMAP_TYPE_CUBE";break;case nE:A="ENVMAP_TYPE_CUBE_UV";break}return A}function nS(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case GB:A="ENVMAP_MODE_REFRACTION";break}return A}function hS(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case Aa:A="ENVMAP_BLENDING_MULTIPLY";break;case os:A="ENVMAP_BLENDING_MIX";break;case ts:A="ENVMAP_BLENDING_ADD";break}return A}function GS(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function wS(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=DS(I),t=sS(I),e=nS(I),a=hS(I),D=GS(I),s=I.isWebGL2?"":QS(I),G=ES(Q),h=C.createProgram();let n,S,y=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(n=[G].filter(xB).join(`
`),n.length>0&&(n+=`
`),S=[s,G].filter(xB).join(`
`),S.length>0&&(S+=`
`)):(n=[vt(I),"#define SHADER_NAME "+I.shaderName,G,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xB).join(`
`),S=[s,vt(I),"#define SHADER_NAME "+I.shaderName,G,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==fg?"#define TONE_MAPPING":"",I.toneMapping!==fg?bA.tonemapping_pars_fragment:"",I.toneMapping!==fg?BS("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",bA.encodings_pars_fragment,CS("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(xB).join(`
`)),E=di(E),E=Zt(E,I),E=Wt(E,I),i=di(i),i=Zt(i,I),i=Wt(i,I),E=Pt(E),i=Pt(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,n=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+n,S=["#define varying in",I.glslVersion===Gt?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Gt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const c=y+n+E,k=y+S+i,l=bt(C,35633,c),K=bt(C,35632,k);if(C.attachShader(h,l),C.attachShader(h,K),I.index0AttributeName!==void 0?C.bindAttribLocation(h,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(h,0,"position"),C.linkProgram(h),B.debug.checkShaderErrors){const U=C.getProgramInfoLog(h).trim(),R=C.getShaderInfoLog(l).trim(),O=C.getShaderInfoLog(K).trim();let m=!0,d=!0;if(C.getProgramParameter(h,35714)===!1){m=!1;const u=Ot(C,l,"vertex"),p=Ot(C,K,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(h,35715)+`

Program Info Log: `+U+`
`+u+`
`+p)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(R===""||O==="")&&(d=!1);d&&(this.diagnostics={runnable:m,programLog:U,vertexShader:{log:R,prefix:n},fragmentShader:{log:O,prefix:S}})}C.deleteShader(l),C.deleteShader(K);let f;this.getUniforms=function(){return f===void 0&&(f=new vQ(C,h)),f};let r;return this.getAttributes=function(){return r===void 0&&(r=iS(C,h)),r},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(h),this.program=void 0},this.name=I.shaderName,this.id=AS++,this.cacheKey=A,this.usedTimes=1,this.program=h,this.vertexShader=l,this.fragmentShader=K,this}let SS=0;class rS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new cS(A),I.set(A,g)),g}}class cS{constructor(A){this.id=SS++,this.code=A,this.usedTimes=0}}function kS(B,A,I,g,C,Q,E){const i=new Xi,o=new rS,t=[],e=C.isWebGL2,a=C.logarithmicDepthBuffer,D=C.vertexTextures;let s=C.precision;const G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(r,U,R,O,m){const d=O.fog,u=m.geometry,p=r.isMeshStandardMaterial?O.environment:null,_=(r.isMeshStandardMaterial?I:A).get(r.envMap||p),IA=_&&_.mapping===nE?_.image.height:null,x=G[r.type];r.precision!==null&&(s=C.getMaxPrecision(r.precision),s!==r.precision&&console.warn("THREE.WebGLProgram.getParameters:",r.precision,"not supported, using",s,"instead."));const BA=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,CA=BA!==void 0?BA.length:0;let N=0;u.morphAttributes.position!==void 0&&(N=1),u.morphAttributes.normal!==void 0&&(N=2),u.morphAttributes.color!==void 0&&(N=3);let V,QA,iA,sA;if(x){const xA=Yg[x];V=xA.vertexShader,QA=xA.fragmentShader}else V=r.vertexShader,QA=r.fragmentShader,o.update(r),iA=o.getVertexShaderID(r),sA=o.getFragmentShaderID(r);const T=B.getRenderTarget(),hA=r.alphaTest>0,MA=r.clearcoat>0,uA=r.iridescence>0;return{isWebGL2:e,shaderID:x,shaderName:r.type,vertexShader:V,fragmentShader:QA,defines:r.defines,customVertexShaderID:iA,customFragmentShaderID:sA,isRawShaderMaterial:r.isRawShaderMaterial===!0,glslVersion:r.glslVersion,precision:s,instancing:m.isInstancedMesh===!0,instancingColor:m.isInstancedMesh===!0&&m.instanceColor!==null,supportsVertexTextures:D,outputEncoding:T===null?B.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:oC,map:!!r.map,matcap:!!r.matcap,envMap:!!_,envMapMode:_&&_.mapping,envMapCubeUVHeight:IA,lightMap:!!r.lightMap,aoMap:!!r.aoMap,emissiveMap:!!r.emissiveMap,bumpMap:!!r.bumpMap,normalMap:!!r.normalMap,objectSpaceNormalMap:r.normalMapType===ds,tangentSpaceNormalMap:r.normalMapType===Ba,decodeVideoTexture:!!r.map&&r.map.isVideoTexture===!0&&r.map.encoding===DI,clearcoat:MA,clearcoatMap:MA&&!!r.clearcoatMap,clearcoatRoughnessMap:MA&&!!r.clearcoatRoughnessMap,clearcoatNormalMap:MA&&!!r.clearcoatNormalMap,iridescence:uA,iridescenceMap:uA&&!!r.iridescenceMap,iridescenceThicknessMap:uA&&!!r.iridescenceThicknessMap,displacementMap:!!r.displacementMap,roughnessMap:!!r.roughnessMap,metalnessMap:!!r.metalnessMap,specularMap:!!r.specularMap,specularIntensityMap:!!r.specularIntensityMap,specularColorMap:!!r.specularColorMap,opaque:r.transparent===!1&&r.blending===DB,alphaMap:!!r.alphaMap,alphaTest:hA,gradientMap:!!r.gradientMap,sheen:r.sheen>0,sheenColorMap:!!r.sheenColorMap,sheenRoughnessMap:!!r.sheenRoughnessMap,transmission:r.transmission>0,transmissionMap:!!r.transmissionMap,thicknessMap:!!r.thicknessMap,combine:r.combine,vertexTangents:!!r.normalMap&&!!u.attributes.tangent,vertexColors:r.vertexColors,vertexAlphas:r.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,vertexUvs:!!r.map||!!r.bumpMap||!!r.normalMap||!!r.specularMap||!!r.alphaMap||!!r.emissiveMap||!!r.roughnessMap||!!r.metalnessMap||!!r.clearcoatMap||!!r.clearcoatRoughnessMap||!!r.clearcoatNormalMap||!!r.iridescenceMap||!!r.iridescenceThicknessMap||!!r.displacementMap||!!r.transmissionMap||!!r.thicknessMap||!!r.specularIntensityMap||!!r.specularColorMap||!!r.sheenColorMap||!!r.sheenRoughnessMap,uvsVertexOnly:!(r.map||r.bumpMap||r.normalMap||r.specularMap||r.alphaMap||r.emissiveMap||r.roughnessMap||r.metalnessMap||r.clearcoatNormalMap||r.iridescenceMap||r.iridescenceThicknessMap||r.transmission>0||r.transmissionMap||r.thicknessMap||r.specularIntensityMap||r.specularColorMap||r.sheen>0||r.sheenColorMap||r.sheenRoughnessMap)&&!!r.displacementMap,fog:!!d,useFog:r.fog===!0,fogExp2:d&&d.isFogExp2,flatShading:!!r.flatShading,sizeAttenuation:r.sizeAttenuation,logarithmicDepthBuffer:a,skinning:m.isSkinnedMesh===!0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:CA,morphTextureStride:N,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:r.dithering,shadowMapEnabled:B.shadowMap.enabled&&R.length>0,shadowMapType:B.shadowMap.type,toneMapping:r.toneMapped?B.toneMapping:fg,physicallyCorrectLights:B.physicallyCorrectLights,premultipliedAlpha:r.premultipliedAlpha,doubleSided:r.side===vi,flipSided:r.side===Mg,useDepthPacking:!!r.depthPacking,depthPacking:r.depthPacking||0,index0AttributeName:r.index0AttributeName,extensionDerivatives:r.extensions&&r.extensions.derivatives,extensionFragDepth:r.extensions&&r.extensions.fragDepth,extensionDrawBuffers:r.extensions&&r.extensions.drawBuffers,extensionShaderTextureLOD:r.extensions&&r.extensions.shaderTextureLOD,rendererExtensionFragDepth:e||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:e||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:e||g.has("EXT_shader_texture_lod"),customProgramCacheKey:r.customProgramCacheKey()}}function n(r){const U=[];if(r.shaderID?U.push(r.shaderID):(U.push(r.customVertexShaderID),U.push(r.customFragmentShaderID)),r.defines!==void 0)for(const R in r.defines)U.push(R),U.push(r.defines[R]);return r.isRawShaderMaterial===!1&&(S(U,r),y(U,r),U.push(B.outputEncoding)),U.push(r.customProgramCacheKey),U.join()}function S(r,U){r.push(U.precision),r.push(U.outputEncoding),r.push(U.envMapMode),r.push(U.envMapCubeUVHeight),r.push(U.combine),r.push(U.vertexUvs),r.push(U.fogExp2),r.push(U.sizeAttenuation),r.push(U.morphTargetsCount),r.push(U.morphAttributeCount),r.push(U.numDirLights),r.push(U.numPointLights),r.push(U.numSpotLights),r.push(U.numSpotLightMaps),r.push(U.numHemiLights),r.push(U.numRectAreaLights),r.push(U.numDirLightShadows),r.push(U.numPointLightShadows),r.push(U.numSpotLightShadows),r.push(U.numSpotLightShadowsWithMaps),r.push(U.shadowMapType),r.push(U.toneMapping),r.push(U.numClippingPlanes),r.push(U.numClipIntersection),r.push(U.depthPacking)}function y(r,U){i.disableAll(),U.isWebGL2&&i.enable(0),U.supportsVertexTextures&&i.enable(1),U.instancing&&i.enable(2),U.instancingColor&&i.enable(3),U.map&&i.enable(4),U.matcap&&i.enable(5),U.envMap&&i.enable(6),U.lightMap&&i.enable(7),U.aoMap&&i.enable(8),U.emissiveMap&&i.enable(9),U.bumpMap&&i.enable(10),U.normalMap&&i.enable(11),U.objectSpaceNormalMap&&i.enable(12),U.tangentSpaceNormalMap&&i.enable(13),U.clearcoat&&i.enable(14),U.clearcoatMap&&i.enable(15),U.clearcoatRoughnessMap&&i.enable(16),U.clearcoatNormalMap&&i.enable(17),U.iridescence&&i.enable(18),U.iridescenceMap&&i.enable(19),U.iridescenceThicknessMap&&i.enable(20),U.displacementMap&&i.enable(21),U.specularMap&&i.enable(22),U.roughnessMap&&i.enable(23),U.metalnessMap&&i.enable(24),U.gradientMap&&i.enable(25),U.alphaMap&&i.enable(26),U.alphaTest&&i.enable(27),U.vertexColors&&i.enable(28),U.vertexAlphas&&i.enable(29),U.vertexUvs&&i.enable(30),U.vertexTangents&&i.enable(31),U.uvsVertexOnly&&i.enable(32),r.push(i.mask),i.disableAll(),U.fog&&i.enable(0),U.useFog&&i.enable(1),U.flatShading&&i.enable(2),U.logarithmicDepthBuffer&&i.enable(3),U.skinning&&i.enable(4),U.morphTargets&&i.enable(5),U.morphNormals&&i.enable(6),U.morphColors&&i.enable(7),U.premultipliedAlpha&&i.enable(8),U.shadowMapEnabled&&i.enable(9),U.physicallyCorrectLights&&i.enable(10),U.doubleSided&&i.enable(11),U.flipSided&&i.enable(12),U.useDepthPacking&&i.enable(13),U.dithering&&i.enable(14),U.specularIntensityMap&&i.enable(15),U.specularColorMap&&i.enable(16),U.transmission&&i.enable(17),U.transmissionMap&&i.enable(18),U.thicknessMap&&i.enable(19),U.sheen&&i.enable(20),U.sheenColorMap&&i.enable(21),U.sheenRoughnessMap&&i.enable(22),U.decodeVideoTexture&&i.enable(23),U.opaque&&i.enable(24),r.push(i.mask)}function c(r){const U=G[r.type];let R;if(U){const O=Yg[U];R=na.clone(O.uniforms)}else R=r.uniforms;return R}function k(r,U){let R;for(let O=0,m=t.length;O<m;O++){const d=t[O];if(d.cacheKey===U){R=d,++R.usedTimes;break}}return R===void 0&&(R=new wS(B,U,r,Q),t.push(R)),R}function l(r){if(--r.usedTimes===0){const U=t.indexOf(r);t[U]=t[t.length-1],t.pop(),r.destroy()}}function K(r){o.remove(r)}function f(){o.dispose()}return{getParameters:h,getProgramCacheKey:n,getUniforms:c,acquireProgram:k,releaseProgram:l,releaseShaderCache:K,programs:t,dispose:f}}function yS(){let B=new WeakMap;function A(Q){let E=B.get(Q);return E===void 0&&(E={},B.set(Q,E)),E}function I(Q){B.delete(Q)}function g(Q,E,i){B.get(Q)[E]=i}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function lS(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function jt(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function Vt(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,D,s,G,h,n){let S=B[A];return S===void 0?(S={id:a.id,object:a,geometry:D,material:s,groupOrder:G,renderOrder:a.renderOrder,z:h,group:n},B[A]=S):(S.id=a.id,S.object=a,S.geometry=D,S.material=s,S.groupOrder=G,S.renderOrder=a.renderOrder,S.z=h,S.group=n),A++,S}function i(a,D,s,G,h,n){const S=E(a,D,s,G,h,n);s.transmission>0?g.push(S):s.transparent===!0?C.push(S):I.push(S)}function o(a,D,s,G,h,n){const S=E(a,D,s,G,h,n);s.transmission>0?g.unshift(S):s.transparent===!0?C.unshift(S):I.unshift(S)}function t(a,D){I.length>1&&I.sort(a||lS),g.length>1&&g.sort(D||jt),C.length>1&&C.sort(D||jt)}function e(){for(let a=A,D=B.length;a<D;a++){const s=B[a];if(s.id===null)break;s.id=null,s.object=null,s.geometry=null,s.material=null,s.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:e,sort:t}}function MS(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new Vt,B.set(g,[E])):C>=Q.length?(E=new Vt,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function KS(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new L,color:new gI};break;case"SpotLight":I={position:new L,direction:new L,color:new gI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new L,color:new gI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new L,skyColor:new gI,groundColor:new gI};break;case"RectAreaLight":I={color:new gI,position:new L,halfWidth:new L,halfHeight:new L};break}return B[A.id]=I,I}}}function US(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new eA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new eA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new eA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let JS=0;function NS(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function FS(B,A){const I=new KS,g=US(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)C.probe.push(new L);const Q=new L,E=new KI,i=new KI;function o(e,a){let D=0,s=0,G=0;for(let O=0;O<9;O++)C.probe[O].set(0,0,0);let h=0,n=0,S=0,y=0,c=0,k=0,l=0,K=0,f=0,r=0;e.sort(NS);const U=a!==!0?Math.PI:1;for(let O=0,m=e.length;O<m;O++){const d=e[O],u=d.color,p=d.intensity,_=d.distance,IA=d.shadow&&d.shadow.map?d.shadow.map.texture:null;if(d.isAmbientLight)D+=u.r*p*U,s+=u.g*p*U,G+=u.b*p*U;else if(d.isLightProbe)for(let x=0;x<9;x++)C.probe[x].addScaledVector(d.sh.coefficients[x],p);else if(d.isDirectionalLight){const x=I.get(d);if(x.color.copy(d.color).multiplyScalar(d.intensity*U),d.castShadow){const BA=d.shadow,CA=g.get(d);CA.shadowBias=BA.bias,CA.shadowNormalBias=BA.normalBias,CA.shadowRadius=BA.radius,CA.shadowMapSize=BA.mapSize,C.directionalShadow[h]=CA,C.directionalShadowMap[h]=IA,C.directionalShadowMatrix[h]=d.shadow.matrix,k++}C.directional[h]=x,h++}else if(d.isSpotLight){const x=I.get(d);x.position.setFromMatrixPosition(d.matrixWorld),x.color.copy(u).multiplyScalar(p*U),x.distance=_,x.coneCos=Math.cos(d.angle),x.penumbraCos=Math.cos(d.angle*(1-d.penumbra)),x.decay=d.decay,C.spot[S]=x;const BA=d.shadow;if(d.map&&(C.spotLightMap[f]=d.map,f++,BA.updateMatrices(d),d.castShadow&&r++),C.spotLightMatrix[S]=BA.matrix,d.castShadow){const CA=g.get(d);CA.shadowBias=BA.bias,CA.shadowNormalBias=BA.normalBias,CA.shadowRadius=BA.radius,CA.shadowMapSize=BA.mapSize,C.spotShadow[S]=CA,C.spotShadowMap[S]=IA,K++}S++}else if(d.isRectAreaLight){const x=I.get(d);x.color.copy(u).multiplyScalar(p),x.halfWidth.set(d.width*.5,0,0),x.halfHeight.set(0,d.height*.5,0),C.rectArea[y]=x,y++}else if(d.isPointLight){const x=I.get(d);if(x.color.copy(d.color).multiplyScalar(d.intensity*U),x.distance=d.distance,x.decay=d.decay,d.castShadow){const BA=d.shadow,CA=g.get(d);CA.shadowBias=BA.bias,CA.shadowNormalBias=BA.normalBias,CA.shadowRadius=BA.radius,CA.shadowMapSize=BA.mapSize,CA.shadowCameraNear=BA.camera.near,CA.shadowCameraFar=BA.camera.far,C.pointShadow[n]=CA,C.pointShadowMap[n]=IA,C.pointShadowMatrix[n]=d.shadow.matrix,l++}C.point[n]=x,n++}else if(d.isHemisphereLight){const x=I.get(d);x.skyColor.copy(d.color).multiplyScalar(p*U),x.groundColor.copy(d.groundColor).multiplyScalar(p*U),C.hemi[c]=x,c++}}y>0&&(A.isWebGL2||B.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=wA.LTC_FLOAT_1,C.rectAreaLTC2=wA.LTC_FLOAT_2):B.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=wA.LTC_HALF_1,C.rectAreaLTC2=wA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=D,C.ambient[1]=s,C.ambient[2]=G;const R=C.hash;(R.directionalLength!==h||R.pointLength!==n||R.spotLength!==S||R.rectAreaLength!==y||R.hemiLength!==c||R.numDirectionalShadows!==k||R.numPointShadows!==l||R.numSpotShadows!==K||R.numSpotMaps!==f)&&(C.directional.length=h,C.spot.length=S,C.rectArea.length=y,C.point.length=n,C.hemi.length=c,C.directionalShadow.length=k,C.directionalShadowMap.length=k,C.pointShadow.length=l,C.pointShadowMap.length=l,C.spotShadow.length=K,C.spotShadowMap.length=K,C.directionalShadowMatrix.length=k,C.pointShadowMatrix.length=l,C.spotLightMatrix.length=K+f-r,C.spotLightMap.length=f,C.numSpotLightShadowsWithMaps=r,R.directionalLength=h,R.pointLength=n,R.spotLength=S,R.rectAreaLength=y,R.hemiLength=c,R.numDirectionalShadows=k,R.numPointShadows=l,R.numSpotShadows=K,R.numSpotMaps=f,C.version=JS++)}function t(e,a){let D=0,s=0,G=0,h=0,n=0;const S=a.matrixWorldInverse;for(let y=0,c=e.length;y<c;y++){const k=e[y];if(k.isDirectionalLight){const l=C.directional[D];l.direction.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(k.target.matrixWorld),l.direction.sub(Q),l.direction.transformDirection(S),D++}else if(k.isSpotLight){const l=C.spot[G];l.position.setFromMatrixPosition(k.matrixWorld),l.position.applyMatrix4(S),l.direction.setFromMatrixPosition(k.matrixWorld),Q.setFromMatrixPosition(k.target.matrixWorld),l.direction.sub(Q),l.direction.transformDirection(S),G++}else if(k.isRectAreaLight){const l=C.rectArea[h];l.position.setFromMatrixPosition(k.matrixWorld),l.position.applyMatrix4(S),i.identity(),E.copy(k.matrixWorld),E.premultiply(S),i.extractRotation(E),l.halfWidth.set(k.width*.5,0,0),l.halfHeight.set(0,k.height*.5,0),l.halfWidth.applyMatrix4(i),l.halfHeight.applyMatrix4(i),h++}else if(k.isPointLight){const l=C.point[s];l.position.setFromMatrixPosition(k.matrixWorld),l.position.applyMatrix4(S),s++}else if(k.isHemisphereLight){const l=C.hemi[n];l.direction.setFromMatrixPosition(k.matrixWorld),l.direction.transformDirection(S),n++}}}return{setup:o,setupView:t,state:C}}function Xt(B,A){const I=new FS(B,A),g=[],C=[];function Q(){g.length=0,C.length=0}function E(a){g.push(a)}function i(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:Q,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:E,pushShadow:i}}function RS(B,A){let I=new WeakMap;function g(Q,E=0){const i=I.get(Q);let o;return i===void 0?(o=new Xt(B,A),I.set(Q,[o])):E>=i.length?(o=new Xt(B,A),i.push(o)):o=i[E],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class qS extends UB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class dS extends UB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YS=`uniform sampler2D shadow_pass;
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
}`;function LS(B,A,I){let g=new GE;const C=new eA,Q=new eA,E=new xI,i=new qS({depthPacking:qs}),o=new dS,t={},e=I.maxTextureSize,a={0:Mg,1:pC,2:vi},D=new Xg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new eA},radius:{value:4}},vertexShader:pS,fragmentShader:YS}),s=D.clone();s.defines.HORIZONTAL_PASS=1;const G=new Eg;G.setAttribute("position",new Bg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new kg(G,D),n=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xe,this.render=function(k,l,K){if(n.enabled===!1||n.autoUpdate===!1&&n.needsUpdate===!1||k.length===0)return;const f=B.getRenderTarget(),r=B.getActiveCubeFace(),U=B.getActiveMipmapLevel(),R=B.state;R.setBlending(QC),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let O=0,m=k.length;O<m;O++){const d=k[O],u=d.shadow;if(u===void 0){console.warn("THREE.WebGLShadowMap:",d,"has no shadow.");continue}if(u.autoUpdate===!1&&u.needsUpdate===!1)continue;C.copy(u.mapSize);const p=u.getFrameExtents();if(C.multiply(p),Q.copy(u.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(Q.x=Math.floor(e/p.x),C.x=Q.x*p.x,u.mapSize.x=Q.x),C.y>e&&(Q.y=Math.floor(e/p.y),C.y=Q.y*p.y,u.mapSize.y=Q.y)),u.map===null){const IA=this.type!==mB?{minFilter:VI,magFilter:VI}:{};u.map=new tC(C.x,C.y,IA),u.map.texture.name=d.name+".shadowMap",u.camera.updateProjectionMatrix()}B.setRenderTarget(u.map),B.clear();const _=u.getViewportCount();for(let IA=0;IA<_;IA++){const x=u.getViewport(IA);E.set(Q.x*x.x,Q.y*x.y,Q.x*x.z,Q.y*x.w),R.viewport(E),u.updateMatrices(d,IA),g=u.getFrustum(),c(l,K,u.camera,d,this.type)}u.isPointLightShadow!==!0&&this.type===mB&&S(u,K),u.needsUpdate=!1}n.needsUpdate=!1,B.setRenderTarget(f,r,U)};function S(k,l){const K=A.update(h);D.defines.VSM_SAMPLES!==k.blurSamples&&(D.defines.VSM_SAMPLES=k.blurSamples,s.defines.VSM_SAMPLES=k.blurSamples,D.needsUpdate=!0,s.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new tC(C.x,C.y)),D.uniforms.shadow_pass.value=k.map.texture,D.uniforms.resolution.value=k.mapSize,D.uniforms.radius.value=k.radius,B.setRenderTarget(k.mapPass),B.clear(),B.renderBufferDirect(l,null,K,D,h,null),s.uniforms.shadow_pass.value=k.mapPass.texture,s.uniforms.resolution.value=k.mapSize,s.uniforms.radius.value=k.radius,B.setRenderTarget(k.map),B.clear(),B.renderBufferDirect(l,null,K,s,h,null)}function y(k,l,K,f,r,U){let R=null;const O=K.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(O!==void 0)R=O;else if(R=K.isPointLight===!0?o:i,B.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const m=R.uuid,d=l.uuid;let u=t[m];u===void 0&&(u={},t[m]=u);let p=u[d];p===void 0&&(p=R.clone(),u[d]=p),R=p}return R.visible=l.visible,R.wireframe=l.wireframe,U===mB?R.side=l.shadowSide!==null?l.shadowSide:l.side:R.side=l.shadowSide!==null?l.shadowSide:a[l.side],R.alphaMap=l.alphaMap,R.alphaTest=l.alphaTest,R.map=l.map,R.clipShadows=l.clipShadows,R.clippingPlanes=l.clippingPlanes,R.clipIntersection=l.clipIntersection,R.displacementMap=l.displacementMap,R.displacementScale=l.displacementScale,R.displacementBias=l.displacementBias,R.wireframeLinewidth=l.wireframeLinewidth,R.linewidth=l.linewidth,K.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(K.matrixWorld),R.nearDistance=f,R.farDistance=r),R}function c(k,l,K,f,r){if(k.visible===!1)return;if(k.layers.test(l.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&r===mB)&&(!k.frustumCulled||g.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,k.matrixWorld);const O=A.update(k),m=k.material;if(Array.isArray(m)){const d=O.groups;for(let u=0,p=d.length;u<p;u++){const _=d[u],IA=m[_.materialIndex];if(IA&&IA.visible){const x=y(k,IA,f,K.near,K.far,r);B.renderBufferDirect(K,null,O,x,k,_)}}}else if(m.visible){const d=y(k,m,f,K.near,K.far,r);B.renderBufferDirect(K,null,O,d,k,null)}}const R=k.children;for(let O=0,m=R.length;O<m;O++)c(R[O],l,K,f,r)}}function fS(B,A,I){const g=I.isWebGL2;function C(){let H=!1;const X=new xI;let oA=null;const yA=new xI(0,0,0,0);return{setMask:function(FA){oA!==FA&&!H&&(B.colorMask(FA,FA,FA,FA),oA=FA)},setLocked:function(FA){H=FA},setClear:function(FA,BI,HI,OI,hC){hC===!0&&(FA*=OI,BI*=OI,HI*=OI),X.set(FA,BI,HI,OI),yA.equals(X)===!1&&(B.clearColor(FA,BI,HI,OI),yA.copy(X))},reset:function(){H=!1,oA=null,yA.set(-1,0,0,0)}}}function Q(){let H=!1,X=null,oA=null,yA=null;return{setTest:function(FA){FA?hA(2929):MA(2929)},setMask:function(FA){X!==FA&&!H&&(B.depthMask(FA),X=FA)},setFunc:function(FA){if(oA!==FA){switch(FA){case Is:B.depthFunc(512);break;case gs:B.depthFunc(519);break;case Cs:B.depthFunc(513);break;case Ki:B.depthFunc(515);break;case Bs:B.depthFunc(514);break;case Qs:B.depthFunc(518);break;case Es:B.depthFunc(516);break;case is:B.depthFunc(517);break;default:B.depthFunc(515)}oA=FA}},setLocked:function(FA){H=FA},setClear:function(FA){yA!==FA&&(B.clearDepth(FA),yA=FA)},reset:function(){H=!1,X=null,oA=null,yA=null}}}function E(){let H=!1,X=null,oA=null,yA=null,FA=null,BI=null,HI=null,OI=null,hC=null;return{setTest:function(SI){H||(SI?hA(2960):MA(2960))},setMask:function(SI){X!==SI&&!H&&(B.stencilMask(SI),X=SI)},setFunc:function(SI,xg,Gg){(oA!==SI||yA!==xg||FA!==Gg)&&(B.stencilFunc(SI,xg,Gg),oA=SI,yA=xg,FA=Gg)},setOp:function(SI,xg,Gg){(BI!==SI||HI!==xg||OI!==Gg)&&(B.stencilOp(SI,xg,Gg),BI=SI,HI=xg,OI=Gg)},setLocked:function(SI){H=SI},setClear:function(SI){hC!==SI&&(B.clearStencil(SI),hC=SI)},reset:function(){H=!1,X=null,oA=null,yA=null,FA=null,BI=null,HI=null,OI=null,hC=null}}}const i=new C,o=new Q,t=new E,e=new WeakMap,a=new WeakMap;let D={},s={},G=new WeakMap,h=[],n=null,S=!1,y=null,c=null,k=null,l=null,K=null,f=null,r=null,U=!1,R=null,O=null,m=null,d=null,u=null;const p=B.getParameter(35661);let _=!1,IA=0;const x=B.getParameter(7938);x.indexOf("WebGL")!==-1?(IA=parseFloat(/^WebGL (\d)/.exec(x)[1]),_=IA>=1):x.indexOf("OpenGL ES")!==-1&&(IA=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),_=IA>=2);let BA=null,CA={};const N=B.getParameter(3088),V=B.getParameter(2978),QA=new xI().fromArray(N),iA=new xI().fromArray(V);function sA(H,X,oA){const yA=new Uint8Array(4),FA=B.createTexture();B.bindTexture(H,FA),B.texParameteri(H,10241,9728),B.texParameteri(H,10240,9728);for(let BI=0;BI<oA;BI++)B.texImage2D(X+BI,0,6408,1,1,0,6408,5121,yA);return FA}const T={};T[3553]=sA(3553,3553,1),T[34067]=sA(34067,34069,6),i.setClear(0,0,0,1),o.setClear(1),t.setClear(0),hA(2929),o.setFunc(Ki),GA(!1),mA(xo),hA(2884),DA(QC);function hA(H){D[H]!==!0&&(B.enable(H),D[H]=!0)}function MA(H){D[H]!==!1&&(B.disable(H),D[H]=!1)}function uA(H,X){return s[H]!==X?(B.bindFramebuffer(H,X),s[H]=X,g&&(H===36009&&(s[36160]=X),H===36160&&(s[36009]=X)),!0):!1}function SA(H,X){let oA=h,yA=!1;if(H)if(oA=G.get(X),oA===void 0&&(oA=[],G.set(X,oA)),H.isWebGLMultipleRenderTargets){const FA=H.texture;if(oA.length!==FA.length||oA[0]!==36064){for(let BI=0,HI=FA.length;BI<HI;BI++)oA[BI]=36064+BI;oA.length=FA.length,yA=!0}}else oA[0]!==36064&&(oA[0]=36064,yA=!0);else oA[0]!==1029&&(oA[0]=1029,yA=!0);yA&&(I.isWebGL2?B.drawBuffers(oA):A.get("WEBGL_draw_buffers").drawBuffersWEBGL(oA))}function xA(H){return n!==H?(B.useProgram(H),n=H,!0):!1}const gA={[oB]:32774,[ZD]:32778,[WD]:32779};if(g)gA[Wo]=32775,gA[Po]=32776;else{const H=A.get("EXT_blend_minmax");H!==null&&(gA[Wo]=H.MIN_EXT,gA[Po]=H.MAX_EXT)}const AA={[PD]:0,[vD]:1,[jD]:768,[_e]:770,[As]:776,[_D]:774,[XD]:772,[VD]:769,[$e]:771,[$D]:775,[zD]:773};function DA(H,X,oA,yA,FA,BI,HI,OI){if(H===QC){S===!0&&(MA(3042),S=!1);return}if(S===!1&&(hA(3042),S=!0),H!==OD){if(H!==y||OI!==U){if((c!==oB||K!==oB)&&(B.blendEquation(32774),c=oB,K=oB),OI)switch(H){case DB:B.blendFuncSeparate(1,771,1,771);break;case bo:B.blendFunc(1,1);break;case Oo:B.blendFuncSeparate(0,769,0,1);break;case Zo:B.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case DB:B.blendFuncSeparate(770,771,1,771);break;case bo:B.blendFunc(770,1);break;case Oo:B.blendFuncSeparate(0,769,0,1);break;case Zo:B.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}k=null,l=null,f=null,r=null,y=H,U=OI}return}FA=FA||X,BI=BI||oA,HI=HI||yA,(X!==c||FA!==K)&&(B.blendEquationSeparate(gA[X],gA[FA]),c=X,K=FA),(oA!==k||yA!==l||BI!==f||HI!==r)&&(B.blendFuncSeparate(AA[oA],AA[yA],AA[BI],AA[HI]),k=oA,l=yA,f=BI,r=HI),y=H,U=!1}function KA(H,X){H.side===vi?MA(2884):hA(2884);let oA=H.side===Mg;X&&(oA=!oA),GA(oA),H.blending===DB&&H.transparent===!1?DA(QC):DA(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),i.setMask(H.colorWrite);const yA=H.stencilWrite;t.setTest(yA),yA&&(t.setMask(H.stencilWriteMask),t.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),t.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),dA(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?hA(32926):MA(32926)}function GA(H){R!==H&&(H?B.frontFace(2304):B.frontFace(2305),R=H)}function mA(H){H!==xD?(hA(2884),H!==O&&(H===xo?B.cullFace(1029):H===bD?B.cullFace(1028):B.cullFace(1032))):MA(2884),O=H}function YA(H){H!==m&&(_&&B.lineWidth(H),m=H)}function dA(H,X,oA){H?(hA(32823),(d!==X||u!==oA)&&(B.polygonOffset(X,oA),d=X,u=oA)):MA(32823)}function oI(H){H?hA(3089):MA(3089)}function AI(H){H===void 0&&(H=33984+p-1),BA!==H&&(B.activeTexture(H),BA=H)}function F(H,X,oA){oA===void 0&&(BA===null?oA=33984+p-1:oA=BA);let yA=CA[oA];yA===void 0&&(yA={type:void 0,texture:void 0},CA[oA]=yA),(yA.type!==H||yA.texture!==X)&&(BA!==oA&&(B.activeTexture(oA),BA=oA),B.bindTexture(H,X||T[H]),yA.type=H,yA.texture=X)}function M(){const H=CA[BA];H!==void 0&&H.type!==void 0&&(B.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function j(){try{B.compressedTexImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function EA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tA(){try{B.texSubImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rA(){try{B.texSubImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function HA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{B.texStorage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function cA(){try{B.texStorage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lA(){try{B.texImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function kA(){try{B.texImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function NA(H){QA.equals(H)===!1&&(B.scissor(H.x,H.y,H.z,H.w),QA.copy(H))}function JA(H){iA.equals(H)===!1&&(B.viewport(H.x,H.y,H.z,H.w),iA.copy(H))}function jA(H,X){let oA=a.get(X);oA===void 0&&(oA=new WeakMap,a.set(X,oA));let yA=oA.get(H);yA===void 0&&(yA=B.getUniformBlockIndex(X,H.name),oA.set(H,yA))}function VA(H,X){const yA=a.get(X).get(H);e.get(X)!==yA&&(B.uniformBlockBinding(X,yA,H.__bindingPointIndex),e.set(X,yA))}function tI(){B.disable(3042),B.disable(2884),B.disable(2929),B.disable(32823),B.disable(3089),B.disable(2960),B.disable(32926),B.blendEquation(32774),B.blendFunc(1,0),B.blendFuncSeparate(1,0,1,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(513),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(519,0,4294967295),B.stencilOp(7680,7680,7680),B.clearStencil(0),B.cullFace(1029),B.frontFace(2305),B.polygonOffset(0,0),B.activeTexture(33984),B.bindFramebuffer(36160,null),g===!0&&(B.bindFramebuffer(36009,null),B.bindFramebuffer(36008,null)),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),D={},BA=null,CA={},s={},G=new WeakMap,h=[],n=null,S=!1,y=null,c=null,k=null,l=null,K=null,f=null,r=null,U=!1,R=null,O=null,m=null,d=null,u=null,QA.set(0,0,B.canvas.width,B.canvas.height),iA.set(0,0,B.canvas.width,B.canvas.height),i.reset(),o.reset(),t.reset()}return{buffers:{color:i,depth:o,stencil:t},enable:hA,disable:MA,bindFramebuffer:uA,drawBuffers:SA,useProgram:xA,setBlending:DA,setMaterial:KA,setFlipSided:GA,setCullFace:mA,setLineWidth:YA,setPolygonOffset:dA,setScissorTest:oI,activeTexture:AI,bindTexture:F,unbindTexture:M,compressedTexImage2D:j,compressedTexImage3D:EA,texImage2D:lA,texImage3D:kA,updateUBOMapping:jA,uniformBlockBinding:VA,texStorage2D:Z,texStorage3D:cA,texSubImage2D:tA,texSubImage3D:rA,compressedTexSubImage2D:HA,compressedTexSubImage3D:q,scissor:NA,viewport:JA,reset:tI}}function uS(B,A,I,g,C,Q,E){const i=C.isWebGL2,o=C.maxTextures,t=C.maxCubemapSize,e=C.maxTextureSize,a=C.maxSamples,D=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),G=new WeakMap;let h;const n=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,M){return S?new OffscreenCanvas(F,M):gQ("canvas")}function c(F,M,j,EA){let tA=1;if((F.width>EA||F.height>EA)&&(tA=EA/Math.max(F.width,F.height)),tA<1||M===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const rA=M?AE:Math.floor,HA=rA(tA*F.width),q=rA(tA*F.height);h===void 0&&(h=y(HA,q));const Z=j?y(HA,q):h;return Z.width=HA,Z.height=q,Z.getContext("2d").drawImage(F,0,0,HA,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+HA+"x"+q+")."),Z}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function k(F){return qi(F.width)&&qi(F.height)}function l(F){return i?!1:F.wrapS!==Rg||F.wrapT!==Rg||F.minFilter!==VI&&F.minFilter!==rg}function K(F,M){return F.generateMipmaps&&M&&F.minFilter!==VI&&F.minFilter!==rg}function f(F){B.generateMipmap(F)}function r(F,M,j,EA,tA=!1){if(i===!1)return M;if(F!==null){if(B[F]!==void 0)return B[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let rA=M;return M===6403&&(j===5126&&(rA=33326),j===5131&&(rA=33325),j===5121&&(rA=33321)),M===33319&&(j===5126&&(rA=33328),j===5131&&(rA=33327),j===5121&&(rA=33323)),M===6408&&(j===5126&&(rA=34836),j===5131&&(rA=34842),j===5121&&(rA=EA===DI&&tA===!1?35907:32856),j===32819&&(rA=32854),j===32820&&(rA=32855)),(rA===33325||rA===33326||rA===33327||rA===33328||rA===34842||rA===34836)&&A.get("EXT_color_buffer_float"),rA}function U(F,M,j){return K(F,j)===!0||F.isFramebufferTexture&&F.minFilter!==VI&&F.minFilter!==rg?Math.log2(Math.max(M.width,M.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?M.mipmaps.length:1}function R(F){return F===VI||F===vo||F===fE?9728:9729}function O(F){const M=F.target;M.removeEventListener("dispose",O),d(M),M.isVideoTexture&&G.delete(M)}function m(F){const M=F.target;M.removeEventListener("dispose",m),p(M)}function d(F){const M=g.get(F);if(M.__webglInit===void 0)return;const j=F.source,EA=n.get(j);if(EA){const tA=EA[M.__cacheKey];tA.usedTimes--,tA.usedTimes===0&&u(F),Object.keys(EA).length===0&&n.delete(j)}g.remove(F)}function u(F){const M=g.get(F);B.deleteTexture(M.__webglTexture);const j=F.source,EA=n.get(j);delete EA[M.__cacheKey],E.memory.textures--}function p(F){const M=F.texture,j=g.get(F),EA=g.get(M);if(EA.__webglTexture!==void 0&&(B.deleteTexture(EA.__webglTexture),E.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let tA=0;tA<6;tA++)B.deleteFramebuffer(j.__webglFramebuffer[tA]),j.__webglDepthbuffer&&B.deleteRenderbuffer(j.__webglDepthbuffer[tA]);else{if(B.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&B.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&B.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let tA=0;tA<j.__webglColorRenderbuffer.length;tA++)j.__webglColorRenderbuffer[tA]&&B.deleteRenderbuffer(j.__webglColorRenderbuffer[tA]);j.__webglDepthRenderbuffer&&B.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let tA=0,rA=M.length;tA<rA;tA++){const HA=g.get(M[tA]);HA.__webglTexture&&(B.deleteTexture(HA.__webglTexture),E.memory.textures--),g.remove(M[tA])}g.remove(M),g.remove(F)}let _=0;function IA(){_=0}function x(){const F=_;return F>=o&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o),_+=1,F}function BA(F){const M=[];return M.push(F.wrapS),M.push(F.wrapT),M.push(F.wrapR||0),M.push(F.magFilter),M.push(F.minFilter),M.push(F.anisotropy),M.push(F.internalFormat),M.push(F.format),M.push(F.type),M.push(F.generateMipmaps),M.push(F.premultiplyAlpha),M.push(F.flipY),M.push(F.unpackAlignment),M.push(F.encoding),M.join()}function CA(F,M){const j=g.get(F);if(F.isVideoTexture&&oI(F),F.isRenderTargetTexture===!1&&F.version>0&&j.__version!==F.version){const EA=F.image;if(EA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(EA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{MA(j,F,M);return}}I.bindTexture(3553,j.__webglTexture,33984+M)}function N(F,M){const j=g.get(F);if(F.version>0&&j.__version!==F.version){MA(j,F,M);return}I.bindTexture(35866,j.__webglTexture,33984+M)}function V(F,M){const j=g.get(F);if(F.version>0&&j.__version!==F.version){MA(j,F,M);return}I.bindTexture(32879,j.__webglTexture,33984+M)}function QA(F,M){const j=g.get(F);if(F.version>0&&j.__version!==F.version){uA(j,F,M);return}I.bindTexture(34067,j.__webglTexture,33984+M)}const iA={[Ni]:10497,[Rg]:33071,[Fi]:33648},sA={[VI]:9728,[vo]:9984,[fE]:9986,[rg]:9729,[ns]:9985,[$B]:9987};function T(F,M,j){if(j?(B.texParameteri(F,10242,iA[M.wrapS]),B.texParameteri(F,10243,iA[M.wrapT]),(F===32879||F===35866)&&B.texParameteri(F,32882,iA[M.wrapR]),B.texParameteri(F,10240,sA[M.magFilter]),B.texParameteri(F,10241,sA[M.minFilter])):(B.texParameteri(F,10242,33071),B.texParameteri(F,10243,33071),(F===32879||F===35866)&&B.texParameteri(F,32882,33071),(M.wrapS!==Rg||M.wrapT!==Rg)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),B.texParameteri(F,10240,R(M.magFilter)),B.texParameteri(F,10241,R(M.minFilter)),M.minFilter!==VI&&M.minFilter!==rg&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.has("EXT_texture_filter_anisotropic")===!0){const EA=A.get("EXT_texture_filter_anisotropic");if(M.magFilter===VI||M.minFilter!==fE&&M.minFilter!==$B||M.type===FC&&A.has("OES_texture_float_linear")===!1||i===!1&&M.type===AQ&&A.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||g.get(M).__currentAnisotropy)&&(B.texParameterf(F,EA.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,C.getMaxAnisotropy())),g.get(M).__currentAnisotropy=M.anisotropy)}}function hA(F,M){let j=!1;F.__webglInit===void 0&&(F.__webglInit=!0,M.addEventListener("dispose",O));const EA=M.source;let tA=n.get(EA);tA===void 0&&(tA={},n.set(EA,tA));const rA=BA(M);if(rA!==F.__cacheKey){tA[rA]===void 0&&(tA[rA]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,j=!0),tA[rA].usedTimes++;const HA=tA[F.__cacheKey];HA!==void 0&&(tA[F.__cacheKey].usedTimes--,HA.usedTimes===0&&u(M)),F.__cacheKey=rA,F.__webglTexture=tA[rA].texture}return j}function MA(F,M,j){let EA=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(EA=35866),M.isData3DTexture&&(EA=32879);const tA=hA(F,M),rA=M.source;I.bindTexture(EA,F.__webglTexture,33984+j);const HA=g.get(rA);if(rA.version!==HA.__version||tA===!0){I.activeTexture(33984+j),B.pixelStorei(37440,M.flipY),B.pixelStorei(37441,M.premultiplyAlpha),B.pixelStorei(3317,M.unpackAlignment),B.pixelStorei(37443,0);const q=l(M)&&k(M.image)===!1;let Z=c(M.image,q,!1,e);Z=AI(M,Z);const cA=k(Z)||i,lA=Q.convert(M.format,M.encoding);let kA=Q.convert(M.type),NA=r(M.internalFormat,lA,kA,M.encoding,M.isVideoTexture);T(EA,M,cA);let JA;const jA=M.mipmaps,VA=i&&M.isVideoTexture!==!0,tI=HA.__version===void 0||tA===!0,H=U(M,Z,cA);if(M.isDepthTexture)NA=6402,i?M.type===FC?NA=36012:M.type===NC?NA=33190:M.type===sB?NA=35056:NA=33189:M.type===FC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===qC&&NA===6402&&M.type!==Ca&&M.type!==NC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=NC,kA=Q.convert(M.type)),M.format===wB&&NA===6402&&(NA=34041,M.type!==sB&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=sB,kA=Q.convert(M.type))),tI&&(VA?I.texStorage2D(3553,1,NA,Z.width,Z.height):I.texImage2D(3553,0,NA,Z.width,Z.height,0,lA,kA,null));else if(M.isDataTexture)if(jA.length>0&&cA){VA&&tI&&I.texStorage2D(3553,H,NA,jA[0].width,jA[0].height);for(let X=0,oA=jA.length;X<oA;X++)JA=jA[X],VA?I.texSubImage2D(3553,X,0,0,JA.width,JA.height,lA,kA,JA.data):I.texImage2D(3553,X,NA,JA.width,JA.height,0,lA,kA,JA.data);M.generateMipmaps=!1}else VA?(tI&&I.texStorage2D(3553,H,NA,Z.width,Z.height),I.texSubImage2D(3553,0,0,0,Z.width,Z.height,lA,kA,Z.data)):I.texImage2D(3553,0,NA,Z.width,Z.height,0,lA,kA,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){VA&&tI&&I.texStorage3D(35866,H,NA,jA[0].width,jA[0].height,Z.depth);for(let X=0,oA=jA.length;X<oA;X++)JA=jA[X],M.format!==qg?lA!==null?VA?I.compressedTexSubImage3D(35866,X,0,0,0,JA.width,JA.height,Z.depth,lA,JA.data,0,0):I.compressedTexImage3D(35866,X,NA,JA.width,JA.height,Z.depth,0,JA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?I.texSubImage3D(35866,X,0,0,0,JA.width,JA.height,Z.depth,lA,kA,JA.data):I.texImage3D(35866,X,NA,JA.width,JA.height,Z.depth,0,lA,kA,JA.data)}else{VA&&tI&&I.texStorage2D(3553,H,NA,jA[0].width,jA[0].height);for(let X=0,oA=jA.length;X<oA;X++)JA=jA[X],M.format!==qg?lA!==null?VA?I.compressedTexSubImage2D(3553,X,0,0,JA.width,JA.height,lA,JA.data):I.compressedTexImage2D(3553,X,NA,JA.width,JA.height,0,JA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):VA?I.texSubImage2D(3553,X,0,0,JA.width,JA.height,lA,kA,JA.data):I.texImage2D(3553,X,NA,JA.width,JA.height,0,lA,kA,JA.data)}else if(M.isDataArrayTexture)VA?(tI&&I.texStorage3D(35866,H,NA,Z.width,Z.height,Z.depth),I.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,lA,kA,Z.data)):I.texImage3D(35866,0,NA,Z.width,Z.height,Z.depth,0,lA,kA,Z.data);else if(M.isData3DTexture)VA?(tI&&I.texStorage3D(32879,H,NA,Z.width,Z.height,Z.depth),I.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,lA,kA,Z.data)):I.texImage3D(32879,0,NA,Z.width,Z.height,Z.depth,0,lA,kA,Z.data);else if(M.isFramebufferTexture){if(tI)if(VA)I.texStorage2D(3553,H,NA,Z.width,Z.height);else{let X=Z.width,oA=Z.height;for(let yA=0;yA<H;yA++)I.texImage2D(3553,yA,NA,X,oA,0,lA,kA,null),X>>=1,oA>>=1}}else if(jA.length>0&&cA){VA&&tI&&I.texStorage2D(3553,H,NA,jA[0].width,jA[0].height);for(let X=0,oA=jA.length;X<oA;X++)JA=jA[X],VA?I.texSubImage2D(3553,X,0,0,lA,kA,JA):I.texImage2D(3553,X,NA,lA,kA,JA);M.generateMipmaps=!1}else VA?(tI&&I.texStorage2D(3553,H,NA,Z.width,Z.height),I.texSubImage2D(3553,0,0,0,lA,kA,Z)):I.texImage2D(3553,0,NA,lA,kA,Z);K(M,cA)&&f(EA),HA.__version=rA.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function uA(F,M,j){if(M.image.length!==6)return;const EA=hA(F,M),tA=M.source;I.bindTexture(34067,F.__webglTexture,33984+j);const rA=g.get(tA);if(tA.version!==rA.__version||EA===!0){I.activeTexture(33984+j),B.pixelStorei(37440,M.flipY),B.pixelStorei(37441,M.premultiplyAlpha),B.pixelStorei(3317,M.unpackAlignment),B.pixelStorei(37443,0);const HA=M.isCompressedTexture||M.image[0].isCompressedTexture,q=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let X=0;X<6;X++)!HA&&!q?Z[X]=c(M.image[X],!1,!0,t):Z[X]=q?M.image[X].image:M.image[X],Z[X]=AI(M,Z[X]);const cA=Z[0],lA=k(cA)||i,kA=Q.convert(M.format,M.encoding),NA=Q.convert(M.type),JA=r(M.internalFormat,kA,NA,M.encoding),jA=i&&M.isVideoTexture!==!0,VA=rA.__version===void 0||EA===!0;let tI=U(M,cA,lA);T(34067,M,lA);let H;if(HA){jA&&VA&&I.texStorage2D(34067,tI,JA,cA.width,cA.height);for(let X=0;X<6;X++){H=Z[X].mipmaps;for(let oA=0;oA<H.length;oA++){const yA=H[oA];M.format!==qg?kA!==null?jA?I.compressedTexSubImage2D(34069+X,oA,0,0,yA.width,yA.height,kA,yA.data):I.compressedTexImage2D(34069+X,oA,JA,yA.width,yA.height,0,yA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jA?I.texSubImage2D(34069+X,oA,0,0,yA.width,yA.height,kA,NA,yA.data):I.texImage2D(34069+X,oA,JA,yA.width,yA.height,0,kA,NA,yA.data)}}}else{H=M.mipmaps,jA&&VA&&(H.length>0&&tI++,I.texStorage2D(34067,tI,JA,Z[0].width,Z[0].height));for(let X=0;X<6;X++)if(q){jA?I.texSubImage2D(34069+X,0,0,0,Z[X].width,Z[X].height,kA,NA,Z[X].data):I.texImage2D(34069+X,0,JA,Z[X].width,Z[X].height,0,kA,NA,Z[X].data);for(let oA=0;oA<H.length;oA++){const FA=H[oA].image[X].image;jA?I.texSubImage2D(34069+X,oA+1,0,0,FA.width,FA.height,kA,NA,FA.data):I.texImage2D(34069+X,oA+1,JA,FA.width,FA.height,0,kA,NA,FA.data)}}else{jA?I.texSubImage2D(34069+X,0,0,0,kA,NA,Z[X]):I.texImage2D(34069+X,0,JA,kA,NA,Z[X]);for(let oA=0;oA<H.length;oA++){const yA=H[oA];jA?I.texSubImage2D(34069+X,oA+1,0,0,kA,NA,yA.image[X]):I.texImage2D(34069+X,oA+1,JA,kA,NA,yA.image[X])}}}K(M,lA)&&f(34067),rA.__version=tA.version,M.onUpdate&&M.onUpdate(M)}F.__version=M.version}function SA(F,M,j,EA,tA){const rA=Q.convert(j.format,j.encoding),HA=Q.convert(j.type),q=r(j.internalFormat,rA,HA,j.encoding);g.get(M).__hasExternalTextures||(tA===32879||tA===35866?I.texImage3D(tA,0,q,M.width,M.height,M.depth,0,rA,HA,null):I.texImage2D(tA,0,q,M.width,M.height,0,rA,HA,null)),I.bindFramebuffer(36160,F),dA(M)?D.framebufferTexture2DMultisampleEXT(36160,EA,tA,g.get(j).__webglTexture,0,YA(M)):(tA===3553||tA>=34069&&tA<=34074)&&B.framebufferTexture2D(36160,EA,tA,g.get(j).__webglTexture,0),I.bindFramebuffer(36160,null)}function xA(F,M,j){if(B.bindRenderbuffer(36161,F),M.depthBuffer&&!M.stencilBuffer){let EA=33189;if(j||dA(M)){const tA=M.depthTexture;tA&&tA.isDepthTexture&&(tA.type===FC?EA=36012:tA.type===NC&&(EA=33190));const rA=YA(M);dA(M)?D.renderbufferStorageMultisampleEXT(36161,rA,EA,M.width,M.height):B.renderbufferStorageMultisample(36161,rA,EA,M.width,M.height)}else B.renderbufferStorage(36161,EA,M.width,M.height);B.framebufferRenderbuffer(36160,36096,36161,F)}else if(M.depthBuffer&&M.stencilBuffer){const EA=YA(M);j&&dA(M)===!1?B.renderbufferStorageMultisample(36161,EA,35056,M.width,M.height):dA(M)?D.renderbufferStorageMultisampleEXT(36161,EA,35056,M.width,M.height):B.renderbufferStorage(36161,34041,M.width,M.height),B.framebufferRenderbuffer(36160,33306,36161,F)}else{const EA=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let tA=0;tA<EA.length;tA++){const rA=EA[tA],HA=Q.convert(rA.format,rA.encoding),q=Q.convert(rA.type),Z=r(rA.internalFormat,HA,q,rA.encoding),cA=YA(M);j&&dA(M)===!1?B.renderbufferStorageMultisample(36161,cA,Z,M.width,M.height):dA(M)?D.renderbufferStorageMultisampleEXT(36161,cA,Z,M.width,M.height):B.renderbufferStorage(36161,Z,M.width,M.height)}}B.bindRenderbuffer(36161,null)}function gA(F,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(36160,F),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),CA(M.depthTexture,0);const EA=g.get(M.depthTexture).__webglTexture,tA=YA(M);if(M.depthTexture.format===qC)dA(M)?D.framebufferTexture2DMultisampleEXT(36160,36096,3553,EA,0,tA):B.framebufferTexture2D(36160,36096,3553,EA,0);else if(M.depthTexture.format===wB)dA(M)?D.framebufferTexture2DMultisampleEXT(36160,33306,3553,EA,0,tA):B.framebufferTexture2D(36160,33306,3553,EA,0);else throw new Error("Unknown depthTexture format")}function AA(F){const M=g.get(F),j=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");gA(M.__webglFramebuffer,F)}else if(j){M.__webglDepthbuffer=[];for(let EA=0;EA<6;EA++)I.bindFramebuffer(36160,M.__webglFramebuffer[EA]),M.__webglDepthbuffer[EA]=B.createRenderbuffer(),xA(M.__webglDepthbuffer[EA],F,!1)}else I.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=B.createRenderbuffer(),xA(M.__webglDepthbuffer,F,!1);I.bindFramebuffer(36160,null)}function DA(F,M,j){const EA=g.get(F);M!==void 0&&SA(EA.__webglFramebuffer,F,F.texture,36064,3553),j!==void 0&&AA(F)}function KA(F){const M=F.texture,j=g.get(F),EA=g.get(M);F.addEventListener("dispose",m),F.isWebGLMultipleRenderTargets!==!0&&(EA.__webglTexture===void 0&&(EA.__webglTexture=B.createTexture()),EA.__version=M.version,E.memory.textures++);const tA=F.isWebGLCubeRenderTarget===!0,rA=F.isWebGLMultipleRenderTargets===!0,HA=k(F)||i;if(tA){j.__webglFramebuffer=[];for(let q=0;q<6;q++)j.__webglFramebuffer[q]=B.createFramebuffer()}else{if(j.__webglFramebuffer=B.createFramebuffer(),rA)if(C.drawBuffers){const q=F.texture;for(let Z=0,cA=q.length;Z<cA;Z++){const lA=g.get(q[Z]);lA.__webglTexture===void 0&&(lA.__webglTexture=B.createTexture(),E.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(i&&F.samples>0&&dA(F)===!1){const q=rA?M:[M];j.__webglMultisampledFramebuffer=B.createFramebuffer(),j.__webglColorRenderbuffer=[],I.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){const cA=q[Z];j.__webglColorRenderbuffer[Z]=B.createRenderbuffer(),B.bindRenderbuffer(36161,j.__webglColorRenderbuffer[Z]);const lA=Q.convert(cA.format,cA.encoding),kA=Q.convert(cA.type),NA=r(cA.internalFormat,lA,kA,cA.encoding,F.isXRRenderTarget===!0),JA=YA(F);B.renderbufferStorageMultisample(36161,JA,NA,F.width,F.height),B.framebufferRenderbuffer(36160,36064+Z,36161,j.__webglColorRenderbuffer[Z])}B.bindRenderbuffer(36161,null),F.depthBuffer&&(j.__webglDepthRenderbuffer=B.createRenderbuffer(),xA(j.__webglDepthRenderbuffer,F,!0)),I.bindFramebuffer(36160,null)}}if(tA){I.bindTexture(34067,EA.__webglTexture),T(34067,M,HA);for(let q=0;q<6;q++)SA(j.__webglFramebuffer[q],F,M,36064,34069+q);K(M,HA)&&f(34067),I.unbindTexture()}else if(rA){const q=F.texture;for(let Z=0,cA=q.length;Z<cA;Z++){const lA=q[Z],kA=g.get(lA);I.bindTexture(3553,kA.__webglTexture),T(3553,lA,HA),SA(j.__webglFramebuffer,F,lA,36064+Z,3553),K(lA,HA)&&f(3553)}I.unbindTexture()}else{let q=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(i?q=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),I.bindTexture(q,EA.__webglTexture),T(q,M,HA),SA(j.__webglFramebuffer,F,M,36064,q),K(M,HA)&&f(q),I.unbindTexture()}F.depthBuffer&&AA(F)}function GA(F){const M=k(F)||i,j=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let EA=0,tA=j.length;EA<tA;EA++){const rA=j[EA];if(K(rA,M)){const HA=F.isWebGLCubeRenderTarget?34067:3553,q=g.get(rA).__webglTexture;I.bindTexture(HA,q),f(HA),I.unbindTexture()}}}function mA(F){if(i&&F.samples>0&&dA(F)===!1){const M=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],j=F.width,EA=F.height;let tA=16384;const rA=[],HA=F.stencilBuffer?33306:36096,q=g.get(F),Z=F.isWebGLMultipleRenderTargets===!0;if(Z)for(let cA=0;cA<M.length;cA++)I.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(36160,36064+cA,36161,null),I.bindFramebuffer(36160,q.__webglFramebuffer),B.framebufferTexture2D(36009,36064+cA,3553,null,0);I.bindFramebuffer(36008,q.__webglMultisampledFramebuffer),I.bindFramebuffer(36009,q.__webglFramebuffer);for(let cA=0;cA<M.length;cA++){rA.push(36064+cA),F.depthBuffer&&rA.push(HA);const lA=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(lA===!1&&(F.depthBuffer&&(tA|=256),F.stencilBuffer&&(tA|=1024)),Z&&B.framebufferRenderbuffer(36008,36064,36161,q.__webglColorRenderbuffer[cA]),lA===!0&&(B.invalidateFramebuffer(36008,[HA]),B.invalidateFramebuffer(36009,[HA])),Z){const kA=g.get(M[cA]).__webglTexture;B.framebufferTexture2D(36009,36064,3553,kA,0)}B.blitFramebuffer(0,0,j,EA,0,0,j,EA,tA,9728),s&&B.invalidateFramebuffer(36008,rA)}if(I.bindFramebuffer(36008,null),I.bindFramebuffer(36009,null),Z)for(let cA=0;cA<M.length;cA++){I.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(36160,36064+cA,36161,q.__webglColorRenderbuffer[cA]);const lA=g.get(M[cA]).__webglTexture;I.bindFramebuffer(36160,q.__webglFramebuffer),B.framebufferTexture2D(36009,36064+cA,3553,lA,0)}I.bindFramebuffer(36009,q.__webglMultisampledFramebuffer)}}function YA(F){return Math.min(a,F.samples)}function dA(F){const M=g.get(F);return i&&F.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function oI(F){const M=E.render.frame;G.get(F)!==M&&(G.set(F,M),F.update())}function AI(F,M){const j=F.encoding,EA=F.format,tA=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===Ri||j!==oC&&(j===DI?i===!1?A.has("EXT_sRGB")===!0&&EA===qg?(F.format=Ri,F.minFilter=rg,F.generateMipmaps=!1):M=ia.sRGBToLinear(M):(EA!==qg||tA!==YC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),M}this.allocateTextureUnit=x,this.resetTextureUnits=IA,this.setTexture2D=CA,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=QA,this.rebindTextures=DA,this.setupRenderTarget=KA,this.updateRenderTargetMipmap=GA,this.updateMultisampleRenderTarget=mA,this.setupDepthRenderbuffer=AA,this.setupFrameBufferTexture=SA,this.useMultisampledRTT=dA}function HS(B,A,I){const g=I.isWebGL2;function C(Q,E=null){let i;if(Q===YC)return 5121;if(Q===Ss)return 32819;if(Q===rs)return 32820;if(Q===hs)return 5120;if(Q===Gs)return 5122;if(Q===Ca)return 5123;if(Q===ws)return 5124;if(Q===NC)return 5125;if(Q===FC)return 5126;if(Q===AQ)return g?5131:(i=A.get("OES_texture_half_float"),i!==null?i.HALF_FLOAT_OES:null);if(Q===cs)return 6406;if(Q===qg)return 6408;if(Q===ys)return 6409;if(Q===ls)return 6410;if(Q===qC)return 6402;if(Q===wB)return 34041;if(Q===ks)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(Q===Ri)return i=A.get("EXT_sRGB"),i!==null?i.SRGB_ALPHA_EXT:null;if(Q===Ms)return 6403;if(Q===Ks)return 36244;if(Q===Us)return 33319;if(Q===Js)return 33320;if(Q===Ns)return 36249;if(Q===uE||Q===HE||Q===mE||Q===TE)if(E===DI)if(i=A.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(Q===uE)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Q===HE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Q===mE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Q===TE)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=A.get("WEBGL_compressed_texture_s3tc"),i!==null){if(Q===uE)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Q===HE)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Q===mE)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Q===TE)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Q===jo||Q===Vo||Q===Xo||Q===zo)if(i=A.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(Q===jo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Q===Vo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Q===Xo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Q===zo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Q===Fs)return i=A.get("WEBGL_compressed_texture_etc1"),i!==null?i.COMPRESSED_RGB_ETC1_WEBGL:null;if(Q===_o||Q===$o)if(i=A.get("WEBGL_compressed_texture_etc"),i!==null){if(Q===_o)return E===DI?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(Q===$o)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Q===At||Q===It||Q===gt||Q===Ct||Q===Bt||Q===Qt||Q===Et||Q===it||Q===ot||Q===tt||Q===et||Q===at||Q===Dt||Q===st)if(i=A.get("WEBGL_compressed_texture_astc"),i!==null){if(Q===At)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Q===It)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Q===gt)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Q===Ct)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Q===Bt)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Q===Qt)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Q===Et)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Q===it)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Q===ot)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Q===tt)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Q===et)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Q===at)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Q===Dt)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Q===st)return E===DI?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Q===nt)if(i=A.get("EXT_texture_compression_bptc"),i!==null){if(Q===nt)return E===DI?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return Q===sB?g?34042:(i=A.get("WEBGL_depth_texture"),i!==null?i.UNSIGNED_INT_24_8_WEBGL:null):B[Q]!==void 0?B[Q]:null}return{convert:C}}class mS extends Dg{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class uQ extends nI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TS={type:"move"};class ai{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uQ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uQ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uQ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,t=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(t&&A.hand){E=!0;for(const h of A.hand.values()){const n=I.getJointPose(h,g),S=this._getHandJoint(t,h);n!==null&&(S.matrix.fromArray(n.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.jointRadius=n.radius),S.visible=n!==null}const e=t.joints["index-finger-tip"],a=t.joints["thumb-tip"],D=e.position.distanceTo(a.position),s=.02,G=.005;t.inputState.pinching&&D>s+G?(t.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!t.inputState.pinching&&D<=s-G&&(t.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(TS)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),t!==null&&(t.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new uQ;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}class xS extends Qg{constructor(A,I,g,C,Q,E,i,o,t,e){if(e=e!==void 0?e:qC,e!==qC&&e!==wB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===qC&&(g=NC),g===void 0&&e===wB&&(g=sB),super(null,C,Q,E,i,o,e,g,t),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:VI,this.minFilter=o!==void 0?o:VI,this.flipY=!1,this.generateMipmaps=!1}}class bS extends HC{constructor(A,I){super();const g=this;let C=null,Q=1,E=null,i="local-floor",o=null,t=null,e=null,a=null,D=null,s=null;const G=I.getContextAttributes();let h=null,n=null;const S=[],y=[],c=new Set,k=new Map,l=new Dg;l.layers.enable(1),l.viewport=new xI;const K=new Dg;K.layers.enable(2),K.viewport=new xI;const f=[l,K],r=new mS;r.layers.enable(1),r.layers.enable(2);let U=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=S[N];return V===void 0&&(V=new ai,S[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=S[N];return V===void 0&&(V=new ai,S[N]=V),V.getGripSpace()},this.getHand=function(N){let V=S[N];return V===void 0&&(V=new ai,S[N]=V),V.getHandSpace()};function O(N){const V=y.indexOf(N.inputSource);if(V===-1)return;const QA=S[V];QA!==void 0&&QA.dispatchEvent({type:N.type,data:N.inputSource})}function m(){C.removeEventListener("select",O),C.removeEventListener("selectstart",O),C.removeEventListener("selectend",O),C.removeEventListener("squeeze",O),C.removeEventListener("squeezestart",O),C.removeEventListener("squeezeend",O),C.removeEventListener("end",m),C.removeEventListener("inputsourceschange",d);for(let N=0;N<S.length;N++){const V=y[N];V!==null&&(y[N]=null,S[N].disconnect(V))}U=null,R=null,A.setRenderTarget(h),D=null,a=null,e=null,C=null,n=null,CA.stop(),g.isPresenting=!1,g.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){Q=N,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){i=N,g.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||E},this.setReferenceSpace=function(N){o=N},this.getBaseLayer=function(){return a!==null?a:D},this.getBinding=function(){return e},this.getFrame=function(){return s},this.getSession=function(){return C},this.setSession=async function(N){if(C=N,C!==null){if(h=A.getRenderTarget(),C.addEventListener("select",O),C.addEventListener("selectstart",O),C.addEventListener("selectend",O),C.addEventListener("squeeze",O),C.addEventListener("squeezestart",O),C.addEventListener("squeezeend",O),C.addEventListener("end",m),C.addEventListener("inputsourceschange",d),G.xrCompatible!==!0&&await I.makeXRCompatible(),C.renderState.layers===void 0||A.capabilities.isWebGL2===!1){const V={antialias:C.renderState.layers===void 0?G.antialias:!0,alpha:G.alpha,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:Q};D=new XRWebGLLayer(C,I,V),C.updateRenderState({baseLayer:D}),n=new tC(D.framebufferWidth,D.framebufferHeight,{format:qg,type:YC,encoding:A.outputEncoding,stencilBuffer:G.stencil})}else{let V=null,QA=null,iA=null;G.depth&&(iA=G.stencil?35056:33190,V=G.stencil?wB:qC,QA=G.stencil?sB:NC);const sA={colorFormat:32856,depthFormat:iA,scaleFactor:Q};e=new XRWebGLBinding(C,I),a=e.createProjectionLayer(sA),C.updateRenderState({layers:[a]}),n=new tC(a.textureWidth,a.textureHeight,{format:qg,type:YC,depthTexture:new xS(a.textureWidth,a.textureHeight,QA,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:G.stencil,encoding:A.outputEncoding,samples:G.antialias?4:0});const T=A.properties.get(n);T.__ignoreDepthValues=a.ignoreDepthValues}n.isXRRenderTarget=!0,this.setFoveation(1),o=null,E=await C.requestReferenceSpace(i),CA.setContext(C),CA.start(),g.isPresenting=!0,g.dispatchEvent({type:"sessionstart"})}};function d(N){for(let V=0;V<N.removed.length;V++){const QA=N.removed[V],iA=y.indexOf(QA);iA>=0&&(y[iA]=null,S[iA].disconnect(QA))}for(let V=0;V<N.added.length;V++){const QA=N.added[V];let iA=y.indexOf(QA);if(iA===-1){for(let T=0;T<S.length;T++)if(T>=y.length){y.push(QA),iA=T;break}else if(y[T]===null){y[T]=QA,iA=T;break}if(iA===-1)break}const sA=S[iA];sA&&sA.connect(QA)}}const u=new L,p=new L;function _(N,V,QA){u.setFromMatrixPosition(V.matrixWorld),p.setFromMatrixPosition(QA.matrixWorld);const iA=u.distanceTo(p),sA=V.projectionMatrix.elements,T=QA.projectionMatrix.elements,hA=sA[14]/(sA[10]-1),MA=sA[14]/(sA[10]+1),uA=(sA[9]+1)/sA[5],SA=(sA[9]-1)/sA[5],xA=(sA[8]-1)/sA[0],gA=(T[8]+1)/T[0],AA=hA*xA,DA=hA*gA,KA=iA/(-xA+gA),GA=KA*-xA;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(GA),N.translateZ(KA),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const mA=hA+KA,YA=MA+KA,dA=AA-GA,oI=DA+(iA-GA),AI=uA*MA/YA*mA,F=SA*MA/YA*mA;N.projectionMatrix.makePerspective(dA,oI,AI,F,mA,YA)}function IA(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(C===null)return;r.near=K.near=l.near=N.near,r.far=K.far=l.far=N.far,(U!==r.near||R!==r.far)&&(C.updateRenderState({depthNear:r.near,depthFar:r.far}),U=r.near,R=r.far);const V=N.parent,QA=r.cameras;IA(r,V);for(let sA=0;sA<QA.length;sA++)IA(QA[sA],V);r.matrixWorld.decompose(r.position,r.quaternion,r.scale),N.matrix.copy(r.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const iA=N.children;for(let sA=0,T=iA.length;sA<T;sA++)iA[sA].updateMatrixWorld(!0);QA.length===2?_(r,l,K):r.projectionMatrix.copy(l.projectionMatrix)},this.getCamera=function(){return r},this.getFoveation=function(){if(a!==null)return a.fixedFoveation;if(D!==null)return D.fixedFoveation},this.setFoveation=function(N){a!==null&&(a.fixedFoveation=N),D!==null&&D.fixedFoveation!==void 0&&(D.fixedFoveation=N)},this.getPlanes=function(){return c};let x=null;function BA(N,V){if(t=V.getViewerPose(o||E),s=V,t!==null){const QA=t.views;D!==null&&(A.setRenderTargetFramebuffer(n,D.framebuffer),A.setRenderTarget(n));let iA=!1;QA.length!==r.cameras.length&&(r.cameras.length=0,iA=!0);for(let sA=0;sA<QA.length;sA++){const T=QA[sA];let hA=null;if(D!==null)hA=D.getViewport(T);else{const uA=e.getViewSubImage(a,T);hA=uA.viewport,sA===0&&(A.setRenderTargetTextures(n,uA.colorTexture,a.ignoreDepthValues?void 0:uA.depthStencilTexture),A.setRenderTarget(n))}let MA=f[sA];MA===void 0&&(MA=new Dg,MA.layers.enable(sA),MA.viewport=new xI,f[sA]=MA),MA.matrix.fromArray(T.transform.matrix),MA.projectionMatrix.fromArray(T.projectionMatrix),MA.viewport.set(hA.x,hA.y,hA.width,hA.height),sA===0&&r.matrix.copy(MA.matrix),iA===!0&&r.cameras.push(MA)}}for(let QA=0;QA<S.length;QA++){const iA=y[QA],sA=S[QA];iA!==null&&sA!==void 0&&sA.update(iA,V,o||E)}if(x&&x(N,V),V.detectedPlanes){g.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let QA=null;for(const iA of c)V.detectedPlanes.has(iA)||(QA===null&&(QA=[]),QA.push(iA));if(QA!==null)for(const iA of QA)c.delete(iA),k.delete(iA),g.dispatchEvent({type:"planeremoved",data:iA});for(const iA of V.detectedPlanes)if(!c.has(iA))c.add(iA),k.set(iA,V.lastChangedTime),g.dispatchEvent({type:"planeadded",data:iA});else{const sA=k.get(iA);iA.lastChangedTime>sA&&(k.set(iA,iA.lastChangedTime),g.dispatchEvent({type:"planechanged",data:iA}))}}s=null}const CA=new Ga;CA.setAnimationLoop(BA),this.setAnimationLoop=function(N){x=N},this.dispose=function(){}}}function OS(B,A){function I(h,n){n.color.getRGB(h.fogColor.value,sa(B)),n.isFog?(h.fogNear.value=n.near,h.fogFar.value=n.far):n.isFogExp2&&(h.fogDensity.value=n.density)}function g(h,n,S,y,c){n.isMeshBasicMaterial||n.isMeshLambertMaterial?C(h,n):n.isMeshToonMaterial?(C(h,n),e(h,n)):n.isMeshPhongMaterial?(C(h,n),t(h,n)):n.isMeshStandardMaterial?(C(h,n),a(h,n),n.isMeshPhysicalMaterial&&D(h,n,c)):n.isMeshMatcapMaterial?(C(h,n),s(h,n)):n.isMeshDepthMaterial?C(h,n):n.isMeshDistanceMaterial?(C(h,n),G(h,n)):n.isMeshNormalMaterial?C(h,n):n.isLineBasicMaterial?(Q(h,n),n.isLineDashedMaterial&&E(h,n)):n.isPointsMaterial?i(h,n,S,y):n.isSpriteMaterial?o(h,n):n.isShadowMaterial?(h.color.value.copy(n.color),h.opacity.value=n.opacity):n.isShaderMaterial&&(n.uniformsNeedUpdate=!1)}function C(h,n){h.opacity.value=n.opacity,n.color&&h.diffuse.value.copy(n.color),n.emissive&&h.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(h.map.value=n.map),n.alphaMap&&(h.alphaMap.value=n.alphaMap),n.bumpMap&&(h.bumpMap.value=n.bumpMap,h.bumpScale.value=n.bumpScale,n.side===Mg&&(h.bumpScale.value*=-1)),n.displacementMap&&(h.displacementMap.value=n.displacementMap,h.displacementScale.value=n.displacementScale,h.displacementBias.value=n.displacementBias),n.emissiveMap&&(h.emissiveMap.value=n.emissiveMap),n.normalMap&&(h.normalMap.value=n.normalMap,h.normalScale.value.copy(n.normalScale),n.side===Mg&&h.normalScale.value.negate()),n.specularMap&&(h.specularMap.value=n.specularMap),n.alphaTest>0&&(h.alphaTest.value=n.alphaTest);const S=A.get(n).envMap;if(S&&(h.envMap.value=S,h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=n.reflectivity,h.ior.value=n.ior,h.refractionRatio.value=n.refractionRatio),n.lightMap){h.lightMap.value=n.lightMap;const k=B.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=n.lightMapIntensity*k}n.aoMap&&(h.aoMap.value=n.aoMap,h.aoMapIntensity.value=n.aoMapIntensity);let y;n.map?y=n.map:n.specularMap?y=n.specularMap:n.displacementMap?y=n.displacementMap:n.normalMap?y=n.normalMap:n.bumpMap?y=n.bumpMap:n.roughnessMap?y=n.roughnessMap:n.metalnessMap?y=n.metalnessMap:n.alphaMap?y=n.alphaMap:n.emissiveMap?y=n.emissiveMap:n.clearcoatMap?y=n.clearcoatMap:n.clearcoatNormalMap?y=n.clearcoatNormalMap:n.clearcoatRoughnessMap?y=n.clearcoatRoughnessMap:n.iridescenceMap?y=n.iridescenceMap:n.iridescenceThicknessMap?y=n.iridescenceThicknessMap:n.specularIntensityMap?y=n.specularIntensityMap:n.specularColorMap?y=n.specularColorMap:n.transmissionMap?y=n.transmissionMap:n.thicknessMap?y=n.thicknessMap:n.sheenColorMap?y=n.sheenColorMap:n.sheenRoughnessMap&&(y=n.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix));let c;n.aoMap?c=n.aoMap:n.lightMap&&(c=n.lightMap),c!==void 0&&(c.isWebGLRenderTarget&&(c=c.texture),c.matrixAutoUpdate===!0&&c.updateMatrix(),h.uv2Transform.value.copy(c.matrix))}function Q(h,n){h.diffuse.value.copy(n.color),h.opacity.value=n.opacity}function E(h,n){h.dashSize.value=n.dashSize,h.totalSize.value=n.dashSize+n.gapSize,h.scale.value=n.scale}function i(h,n,S,y){h.diffuse.value.copy(n.color),h.opacity.value=n.opacity,h.size.value=n.size*S,h.scale.value=y*.5,n.map&&(h.map.value=n.map),n.alphaMap&&(h.alphaMap.value=n.alphaMap),n.alphaTest>0&&(h.alphaTest.value=n.alphaTest);let c;n.map?c=n.map:n.alphaMap&&(c=n.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),h.uvTransform.value.copy(c.matrix))}function o(h,n){h.diffuse.value.copy(n.color),h.opacity.value=n.opacity,h.rotation.value=n.rotation,n.map&&(h.map.value=n.map),n.alphaMap&&(h.alphaMap.value=n.alphaMap),n.alphaTest>0&&(h.alphaTest.value=n.alphaTest);let S;n.map?S=n.map:n.alphaMap&&(S=n.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uvTransform.value.copy(S.matrix))}function t(h,n){h.specular.value.copy(n.specular),h.shininess.value=Math.max(n.shininess,1e-4)}function e(h,n){n.gradientMap&&(h.gradientMap.value=n.gradientMap)}function a(h,n){h.roughness.value=n.roughness,h.metalness.value=n.metalness,n.roughnessMap&&(h.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(h.metalnessMap.value=n.metalnessMap),A.get(n).envMap&&(h.envMapIntensity.value=n.envMapIntensity)}function D(h,n,S){h.ior.value=n.ior,n.sheen>0&&(h.sheenColor.value.copy(n.sheenColor).multiplyScalar(n.sheen),h.sheenRoughness.value=n.sheenRoughness,n.sheenColorMap&&(h.sheenColorMap.value=n.sheenColorMap),n.sheenRoughnessMap&&(h.sheenRoughnessMap.value=n.sheenRoughnessMap)),n.clearcoat>0&&(h.clearcoat.value=n.clearcoat,h.clearcoatRoughness.value=n.clearcoatRoughness,n.clearcoatMap&&(h.clearcoatMap.value=n.clearcoatMap),n.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=n.clearcoatRoughnessMap),n.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(n.clearcoatNormalScale),h.clearcoatNormalMap.value=n.clearcoatNormalMap,n.side===Mg&&h.clearcoatNormalScale.value.negate())),n.iridescence>0&&(h.iridescence.value=n.iridescence,h.iridescenceIOR.value=n.iridescenceIOR,h.iridescenceThicknessMinimum.value=n.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=n.iridescenceThicknessRange[1],n.iridescenceMap&&(h.iridescenceMap.value=n.iridescenceMap),n.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=n.iridescenceThicknessMap)),n.transmission>0&&(h.transmission.value=n.transmission,h.transmissionSamplerMap.value=S.texture,h.transmissionSamplerSize.value.set(S.width,S.height),n.transmissionMap&&(h.transmissionMap.value=n.transmissionMap),h.thickness.value=n.thickness,n.thicknessMap&&(h.thicknessMap.value=n.thicknessMap),h.attenuationDistance.value=n.attenuationDistance,h.attenuationColor.value.copy(n.attenuationColor)),h.specularIntensity.value=n.specularIntensity,h.specularColor.value.copy(n.specularColor),n.specularIntensityMap&&(h.specularIntensityMap.value=n.specularIntensityMap),n.specularColorMap&&(h.specularColorMap.value=n.specularColorMap)}function s(h,n){n.matcap&&(h.matcap.value=n.matcap)}function G(h,n){h.referencePosition.value.copy(n.referencePosition),h.nearDistance.value=n.nearDistance,h.farDistance.value=n.farDistance}return{refreshFogUniforms:I,refreshMaterialUniforms:g}}function ZS(B,A,I,g){let C={},Q={},E=[];const i=I.isWebGL2?B.getParameter(35375):0;function o(y,c){const k=c.program;g.uniformBlockBinding(y,k)}function t(y,c){let k=C[y.id];k===void 0&&(G(y),k=e(y),C[y.id]=k,y.addEventListener("dispose",n));const l=c.program;g.updateUBOMapping(y,l);const K=A.render.frame;Q[y.id]!==K&&(D(y),Q[y.id]=K)}function e(y){const c=a();y.__bindingPointIndex=c;const k=B.createBuffer(),l=y.__size,K=y.usage;return B.bindBuffer(35345,k),B.bufferData(35345,l,K),B.bindBuffer(35345,null),B.bindBufferBase(35345,c,k),k}function a(){for(let y=0;y<i;y++)if(E.indexOf(y)===-1)return E.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function D(y){const c=C[y.id],k=y.uniforms,l=y.__cache;B.bindBuffer(35345,c);for(let K=0,f=k.length;K<f;K++){const r=k[K];if(s(r,K,l)===!0){const U=r.__offset,R=Array.isArray(r.value)?r.value:[r.value];let O=0;for(let m=0;m<R.length;m++){const d=R[m],u=h(d);typeof d=="number"?(r.__data[0]=d,B.bufferSubData(35345,U+O,r.__data)):d.isMatrix3?(r.__data[0]=d.elements[0],r.__data[1]=d.elements[1],r.__data[2]=d.elements[2],r.__data[3]=d.elements[0],r.__data[4]=d.elements[3],r.__data[5]=d.elements[4],r.__data[6]=d.elements[5],r.__data[7]=d.elements[0],r.__data[8]=d.elements[6],r.__data[9]=d.elements[7],r.__data[10]=d.elements[8],r.__data[11]=d.elements[0]):(d.toArray(r.__data,O),O+=u.storage/Float32Array.BYTES_PER_ELEMENT)}B.bufferSubData(35345,U,r.__data)}}B.bindBuffer(35345,null)}function s(y,c,k){const l=y.value;if(k[c]===void 0){if(typeof l=="number")k[c]=l;else{const K=Array.isArray(l)?l:[l],f=[];for(let r=0;r<K.length;r++)f.push(K[r].clone());k[c]=f}return!0}else if(typeof l=="number"){if(k[c]!==l)return k[c]=l,!0}else{const K=Array.isArray(k[c])?k[c]:[k[c]],f=Array.isArray(l)?l:[l];for(let r=0;r<K.length;r++){const U=K[r];if(U.equals(f[r])===!1)return U.copy(f[r]),!0}}return!1}function G(y){const c=y.uniforms;let k=0;const l=16;let K=0;for(let f=0,r=c.length;f<r;f++){const U=c[f],R={boundary:0,storage:0},O=Array.isArray(U.value)?U.value:[U.value];for(let m=0,d=O.length;m<d;m++){const u=O[m],p=h(u);R.boundary+=p.boundary,R.storage+=p.storage}if(U.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=k,f>0){K=k%l;const m=l-K;K!==0&&m-R.boundary<0&&(k+=l-K,U.__offset=k)}k+=R.storage}return K=k%l,K>0&&(k+=l-K),y.__size=k,y.__cache={},this}function h(y){const c={boundary:0,storage:0};return typeof y=="number"?(c.boundary=4,c.storage=4):y.isVector2?(c.boundary=8,c.storage=8):y.isVector3||y.isColor?(c.boundary=16,c.storage=12):y.isVector4?(c.boundary=16,c.storage=16):y.isMatrix3?(c.boundary=48,c.storage=48):y.isMatrix4?(c.boundary=64,c.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),c}function n(y){const c=y.target;c.removeEventListener("dispose",n);const k=E.indexOf(c.__bindingPointIndex);E.splice(k,1),B.deleteBuffer(C[c.id]),delete C[c.id],delete Q[c.id]}function S(){for(const y in C)B.deleteBuffer(C[y]);E=[],C={},Q={}}return{bind:o,update:t,dispose:S}}function WS(){const B=gQ("canvas");return B.style.display="block",B}function ka(B={}){this.isWebGLRenderer=!0;const A=B.canvas!==void 0?B.canvas:WS(),I=B.context!==void 0?B.context:null,g=B.depth!==void 0?B.depth:!0,C=B.stencil!==void 0?B.stencil:!0,Q=B.antialias!==void 0?B.antialias:!1,E=B.premultipliedAlpha!==void 0?B.premultipliedAlpha:!0,i=B.preserveDrawingBuffer!==void 0?B.preserveDrawingBuffer:!1,o=B.powerPreference!==void 0?B.powerPreference:"default",t=B.failIfMajorPerformanceCaveat!==void 0?B.failIfMajorPerformanceCaveat:!1;let e;I!==null?e=I.getContextAttributes().alpha:e=B.alpha!==void 0?B.alpha:!1;let a=null,D=null;const s=[],G=[];this.domElement=A,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oC,this.physicallyCorrectLights=!1,this.toneMapping=fg,this.toneMappingExposure=1;const h=this;let n=!1,S=0,y=0,c=null,k=-1,l=null;const K=new xI,f=new xI;let r=null,U=A.width,R=A.height,O=1,m=null,d=null;const u=new xI(0,0,U,R),p=new xI(0,0,U,R);let _=!1;const IA=new GE;let x=!1,BA=!1,CA=null;const N=new KI,V=new eA,QA=new L,iA={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function sA(){return c===null?O:1}let T=I;function hA(J,v){for(let z=0;z<J.length;z++){const P=J[z],$=A.getContext(P,v);if($!==null)return $}return null}try{const J={alpha:!0,depth:g,stencil:C,antialias:Q,premultipliedAlpha:E,preserveDrawingBuffer:i,powerPreference:o,failIfMajorPerformanceCaveat:t};if("setAttribute"in A&&A.setAttribute("data-engine",`three.js r${Pi}`),A.addEventListener("webglcontextlost",NA,!1),A.addEventListener("webglcontextrestored",JA,!1),A.addEventListener("webglcontextcreationerror",jA,!1),T===null){const v=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&v.shift(),T=hA(v,J),T===null)throw hA(v)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}T.getShaderPrecisionFormat===void 0&&(T.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(J){throw console.error("THREE.WebGLRenderer: "+J.message),J}let MA,uA,SA,xA,gA,AA,DA,KA,GA,mA,YA,dA,oI,AI,F,M,j,EA,tA,rA,HA,q,Z,cA;function lA(){MA=new gw(T),uA=new XG(T,MA,B),MA.init(uA),q=new HS(T,MA,uA),SA=new fS(T,MA,uA),xA=new Qw,gA=new yS,AA=new uS(T,MA,SA,gA,uA,q,xA),DA=new _G(h),KA=new Iw(h),GA=new nn(T,uA),Z=new jG(T,MA,GA,uA),mA=new Cw(T,GA,xA,Z),YA=new tw(T,mA,GA,xA),tA=new ow(T,uA,AA),M=new zG(gA),dA=new kS(h,DA,KA,MA,uA,Z,M),oI=new OS(h,gA),AI=new MS,F=new RS(MA,uA),EA=new vG(h,DA,KA,SA,YA,e,E),j=new LS(h,YA,uA),cA=new ZS(T,xA,uA,SA),rA=new VG(T,MA,xA,uA),HA=new Bw(T,MA,xA,uA),xA.programs=dA.programs,h.capabilities=uA,h.extensions=MA,h.properties=gA,h.renderLists=AI,h.shadowMap=j,h.state=SA,h.info=xA}lA();const kA=new bS(h,T);this.xr=kA,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const J=MA.get("WEBGL_lose_context");J&&J.loseContext()},this.forceContextRestore=function(){const J=MA.get("WEBGL_lose_context");J&&J.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(J){J!==void 0&&(O=J,this.setSize(U,R,!1))},this.getSize=function(J){return J.set(U,R)},this.setSize=function(J,v,z){if(kA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=J,R=v,A.width=Math.floor(J*O),A.height=Math.floor(v*O),z!==!1&&(A.style.width=J+"px",A.style.height=v+"px"),this.setViewport(0,0,J,v)},this.getDrawingBufferSize=function(J){return J.set(U*O,R*O).floor()},this.setDrawingBufferSize=function(J,v,z){U=J,R=v,O=z,A.width=Math.floor(J*z),A.height=Math.floor(v*z),this.setViewport(0,0,J,v)},this.getCurrentViewport=function(J){return J.copy(K)},this.getViewport=function(J){return J.copy(u)},this.setViewport=function(J,v,z,P){J.isVector4?u.set(J.x,J.y,J.z,J.w):u.set(J,v,z,P),SA.viewport(K.copy(u).multiplyScalar(O).floor())},this.getScissor=function(J){return J.copy(p)},this.setScissor=function(J,v,z,P){J.isVector4?p.set(J.x,J.y,J.z,J.w):p.set(J,v,z,P),SA.scissor(f.copy(p).multiplyScalar(O).floor())},this.getScissorTest=function(){return _},this.setScissorTest=function(J){SA.setScissorTest(_=J)},this.setOpaqueSort=function(J){m=J},this.setTransparentSort=function(J){d=J},this.getClearColor=function(J){return J.copy(EA.getClearColor())},this.setClearColor=function(){EA.setClearColor.apply(EA,arguments)},this.getClearAlpha=function(){return EA.getClearAlpha()},this.setClearAlpha=function(){EA.setClearAlpha.apply(EA,arguments)},this.clear=function(J=!0,v=!0,z=!0){let P=0;J&&(P|=16384),v&&(P|=256),z&&(P|=1024),T.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){A.removeEventListener("webglcontextlost",NA,!1),A.removeEventListener("webglcontextrestored",JA,!1),A.removeEventListener("webglcontextcreationerror",jA,!1),AI.dispose(),F.dispose(),gA.dispose(),DA.dispose(),KA.dispose(),YA.dispose(),Z.dispose(),cA.dispose(),dA.dispose(),kA.dispose(),kA.removeEventListener("sessionstart",yA),kA.removeEventListener("sessionend",FA),CA&&(CA.dispose(),CA=null),BI.stop()};function NA(J){J.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),n=!0}function JA(){console.log("THREE.WebGLRenderer: Context Restored."),n=!1;const J=xA.autoReset,v=j.enabled,z=j.autoUpdate,P=j.needsUpdate,$=j.type;lA(),xA.autoReset=J,j.enabled=v,j.autoUpdate=z,j.needsUpdate=P,j.type=$}function jA(J){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",J.statusMessage)}function VA(J){const v=J.target;v.removeEventListener("dispose",VA),tI(v)}function tI(J){H(J),gA.remove(J)}function H(J){const v=gA.get(J).programs;v!==void 0&&(v.forEach(function(z){dA.releaseProgram(z)}),J.isShaderMaterial&&dA.releaseShaderCache(J))}this.renderBufferDirect=function(J,v,z,P,$,LA){v===null&&(v=iA);const TA=$.isMesh&&$.matrixWorld.determinant()<0,ZA=qD(J,v,z,P,$);SA.setMaterial(P,TA);let WA=z.index,II=1;P.wireframe===!0&&(WA=mA.getWireframeAttribute(z),II=2);const XA=z.drawRange,zA=z.attributes.position;let JI=XA.start*II,ig=(XA.start+XA.count)*II;LA!==null&&(JI=Math.max(JI,LA.start*II),ig=Math.min(ig,(LA.start+LA.count)*II)),WA!==null?(JI=Math.max(JI,0),ig=Math.min(ig,WA.count)):zA!=null&&(JI=Math.max(JI,0),ig=Math.min(ig,zA.count));const bg=ig-JI;if(bg<0||bg===1/0)return;Z.setup($,P,ZA,z,WA);let GC,NI=rA;if(WA!==null&&(GC=GA.get(WA),NI=HA,NI.setIndex(GC)),$.isMesh)P.wireframe===!0?(SA.setLineWidth(P.wireframeLinewidth*sA()),NI.setMode(1)):NI.setMode(4);else if($.isLine){let _A=P.linewidth;_A===void 0&&(_A=1),SA.setLineWidth(_A*sA()),$.isLineSegments?NI.setMode(1):$.isLineLoop?NI.setMode(2):NI.setMode(3)}else $.isPoints?NI.setMode(0):$.isSprite&&NI.setMode(4);if($.isInstancedMesh)NI.renderInstances(JI,bg,$.count);else if(z.isInstancedBufferGeometry){const _A=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,qE=Math.min(z.instanceCount,_A);NI.renderInstances(JI,bg,qE)}else NI.render(JI,bg)},this.compile=function(J,v){function z(P,$,LA){P.transparent===!0&&P.side===SQ?(P.side=Mg,P.needsUpdate=!0,Gg(P,$,LA),P.side=pC,P.needsUpdate=!0,Gg(P,$,LA),P.side=SQ):Gg(P,$,LA)}D=F.get(J),D.init(),G.push(D),J.traverseVisible(function(P){P.isLight&&P.layers.test(v.layers)&&(D.pushLight(P),P.castShadow&&D.pushShadow(P))}),D.setupLights(h.physicallyCorrectLights),J.traverse(function(P){const $=P.material;if($)if(Array.isArray($))for(let LA=0;LA<$.length;LA++){const TA=$[LA];z(TA,J,P)}else z($,J,P)}),G.pop(),D=null};let X=null;function oA(J){X&&X(J)}function yA(){BI.stop()}function FA(){BI.start()}const BI=new Ga;BI.setAnimationLoop(oA),typeof self<"u"&&BI.setContext(self),this.setAnimationLoop=function(J){X=J,kA.setAnimationLoop(J),J===null?BI.stop():BI.start()},kA.addEventListener("sessionstart",yA),kA.addEventListener("sessionend",FA),this.render=function(J,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(n===!0)return;J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),kA.enabled===!0&&kA.isPresenting===!0&&(kA.cameraAutoUpdate===!0&&kA.updateCamera(v),v=kA.getCamera()),J.isScene===!0&&J.onBeforeRender(h,J,v,c),D=F.get(J,G.length),D.init(),G.push(D),N.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),IA.setFromProjectionMatrix(N),BA=this.localClippingEnabled,x=M.init(this.clippingPlanes,BA,v),a=AI.get(J,s.length),a.init(),s.push(a),HI(J,v,0,h.sortObjects),a.finish(),h.sortObjects===!0&&a.sort(m,d),x===!0&&M.beginShadows();const z=D.state.shadowsArray;if(j.render(z,J,v),x===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),EA.render(a,J),D.setupLights(h.physicallyCorrectLights),v.isArrayCamera){const P=v.cameras;for(let $=0,LA=P.length;$<LA;$++){const TA=P[$];OI(a,J,TA,TA.viewport)}}else OI(a,J,v);c!==null&&(AA.updateMultisampleRenderTarget(c),AA.updateRenderTargetMipmap(c)),J.isScene===!0&&J.onAfterRender(h,J,v),Z.resetDefaultState(),k=-1,l=null,G.pop(),G.length>0?D=G[G.length-1]:D=null,s.pop(),s.length>0?a=s[s.length-1]:a=null};function HI(J,v,z,P){if(J.visible===!1)return;if(J.layers.test(v.layers)){if(J.isGroup)z=J.renderOrder;else if(J.isLOD)J.autoUpdate===!0&&J.update(v);else if(J.isLight)D.pushLight(J),J.castShadow&&D.pushShadow(J);else if(J.isSprite){if(!J.frustumCulled||IA.intersectsSprite(J)){P&&QA.setFromMatrixPosition(J.matrixWorld).applyMatrix4(N);const TA=YA.update(J),ZA=J.material;ZA.visible&&a.push(J,TA,ZA,z,QA.z,null)}}else if((J.isMesh||J.isLine||J.isPoints)&&(J.isSkinnedMesh&&J.skeleton.frame!==xA.render.frame&&(J.skeleton.update(),J.skeleton.frame=xA.render.frame),!J.frustumCulled||IA.intersectsObject(J))){P&&QA.setFromMatrixPosition(J.matrixWorld).applyMatrix4(N);const TA=YA.update(J),ZA=J.material;if(Array.isArray(ZA)){const WA=TA.groups;for(let II=0,XA=WA.length;II<XA;II++){const zA=WA[II],JI=ZA[zA.materialIndex];JI&&JI.visible&&a.push(J,TA,JI,z,QA.z,zA)}}else ZA.visible&&a.push(J,TA,ZA,z,QA.z,null)}}const LA=J.children;for(let TA=0,ZA=LA.length;TA<ZA;TA++)HI(LA[TA],v,z,P)}function OI(J,v,z,P){const $=J.opaque,LA=J.transmissive,TA=J.transparent;D.setupLightsView(z),LA.length>0&&hC($,v,z),P&&SA.viewport(K.copy(P)),$.length>0&&SI($,v,z),LA.length>0&&SI(LA,v,z),TA.length>0&&SI(TA,v,z),SA.buffers.depth.setTest(!0),SA.buffers.depth.setMask(!0),SA.buffers.color.setMask(!0),SA.setPolygonOffset(!1)}function hC(J,v,z){const P=uA.isWebGL2;CA===null&&(CA=new tC(1,1,{generateMipmaps:!0,type:MA.has("EXT_color_buffer_half_float")?AQ:YC,minFilter:$B,samples:P&&Q===!0?4:0})),h.getDrawingBufferSize(V),P?CA.setSize(V.x,V.y):CA.setSize(AE(V.x),AE(V.y));const $=h.getRenderTarget();h.setRenderTarget(CA),h.clear();const LA=h.toneMapping;h.toneMapping=fg,SI(J,v,z),h.toneMapping=LA,AA.updateMultisampleRenderTarget(CA),AA.updateRenderTargetMipmap(CA),h.setRenderTarget($)}function SI(J,v,z){const P=v.isScene===!0?v.overrideMaterial:null;for(let $=0,LA=J.length;$<LA;$++){const TA=J[$],ZA=TA.object,WA=TA.geometry,II=P===null?TA.material:P,XA=TA.group;ZA.layers.test(z.layers)&&xg(ZA,v,z,WA,II,XA)}}function xg(J,v,z,P,$,LA){J.onBeforeRender(h,v,z,P,$,LA),J.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,J.matrixWorld),J.normalMatrix.getNormalMatrix(J.modelViewMatrix),$.onBeforeRender(h,v,z,P,J,LA),$.transparent===!0&&$.side===SQ?($.side=Mg,$.needsUpdate=!0,h.renderBufferDirect(z,v,P,$,J,LA),$.side=pC,$.needsUpdate=!0,h.renderBufferDirect(z,v,P,$,J,LA),$.side=SQ):h.renderBufferDirect(z,v,P,$,J,LA),J.onAfterRender(h,v,z,P,$,LA)}function Gg(J,v,z){v.isScene!==!0&&(v=iA);const P=gA.get(J),$=D.state.lights,LA=D.state.shadowsArray,TA=$.state.version,ZA=dA.getParameters(J,$.state,LA,v,z),WA=dA.getProgramCacheKey(ZA);let II=P.programs;P.environment=J.isMeshStandardMaterial?v.environment:null,P.fog=v.fog,P.envMap=(J.isMeshStandardMaterial?KA:DA).get(J.envMap||P.environment),II===void 0&&(J.addEventListener("dispose",VA),II=new Map,P.programs=II);let XA=II.get(WA);if(XA!==void 0){if(P.currentProgram===XA&&P.lightsStateVersion===TA)return fo(J,ZA),XA}else ZA.uniforms=dA.getUniforms(J),J.onBuild(z,ZA,h),J.onBeforeCompile(ZA,h),XA=dA.acquireProgram(ZA,WA),II.set(WA,XA),P.uniforms=ZA.uniforms;const zA=P.uniforms;(!J.isShaderMaterial&&!J.isRawShaderMaterial||J.clipping===!0)&&(zA.clippingPlanes=M.uniform),fo(J,ZA),P.needsLights=pD(J),P.lightsStateVersion=TA,P.needsLights&&(zA.ambientLightColor.value=$.state.ambient,zA.lightProbe.value=$.state.probe,zA.directionalLights.value=$.state.directional,zA.directionalLightShadows.value=$.state.directionalShadow,zA.spotLights.value=$.state.spot,zA.spotLightShadows.value=$.state.spotShadow,zA.rectAreaLights.value=$.state.rectArea,zA.ltc_1.value=$.state.rectAreaLTC1,zA.ltc_2.value=$.state.rectAreaLTC2,zA.pointLights.value=$.state.point,zA.pointLightShadows.value=$.state.pointShadow,zA.hemisphereLights.value=$.state.hemi,zA.directionalShadowMap.value=$.state.directionalShadowMap,zA.directionalShadowMatrix.value=$.state.directionalShadowMatrix,zA.spotShadowMap.value=$.state.spotShadowMap,zA.spotLightMatrix.value=$.state.spotLightMatrix,zA.spotLightMap.value=$.state.spotLightMap,zA.pointShadowMap.value=$.state.pointShadowMap,zA.pointShadowMatrix.value=$.state.pointShadowMatrix);const JI=XA.getUniforms(),ig=vQ.seqWithValue(JI.seq,zA);return P.currentProgram=XA,P.uniformsList=ig,XA}function fo(J,v){const z=gA.get(J);z.outputEncoding=v.outputEncoding,z.instancing=v.instancing,z.skinning=v.skinning,z.morphTargets=v.morphTargets,z.morphNormals=v.morphNormals,z.morphColors=v.morphColors,z.morphTargetsCount=v.morphTargetsCount,z.numClippingPlanes=v.numClippingPlanes,z.numIntersection=v.numClipIntersection,z.vertexAlphas=v.vertexAlphas,z.vertexTangents=v.vertexTangents,z.toneMapping=v.toneMapping}function qD(J,v,z,P,$){v.isScene!==!0&&(v=iA),AA.resetTextureUnits();const LA=v.fog,TA=P.isMeshStandardMaterial?v.environment:null,ZA=c===null?h.outputEncoding:c.isXRRenderTarget===!0?c.texture.encoding:oC,WA=(P.isMeshStandardMaterial?KA:DA).get(P.envMap||TA),II=P.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,XA=!!P.normalMap&&!!z.attributes.tangent,zA=!!z.morphAttributes.position,JI=!!z.morphAttributes.normal,ig=!!z.morphAttributes.color,bg=P.toneMapped?h.toneMapping:fg,GC=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,NI=GC!==void 0?GC.length:0,_A=gA.get(P),qE=D.state.lights;if(x===!0&&(BA===!0||J!==l)){const og=J===l&&P.id===k;M.setState(P,J,og)}let mI=!1;P.version===_A.__version?(_A.needsLights&&_A.lightsStateVersion!==qE.state.version||_A.outputEncoding!==ZA||$.isInstancedMesh&&_A.instancing===!1||!$.isInstancedMesh&&_A.instancing===!0||$.isSkinnedMesh&&_A.skinning===!1||!$.isSkinnedMesh&&_A.skinning===!0||_A.envMap!==WA||P.fog===!0&&_A.fog!==LA||_A.numClippingPlanes!==void 0&&(_A.numClippingPlanes!==M.numPlanes||_A.numIntersection!==M.numIntersection)||_A.vertexAlphas!==II||_A.vertexTangents!==XA||_A.morphTargets!==zA||_A.morphNormals!==JI||_A.morphColors!==ig||_A.toneMapping!==bg||uA.isWebGL2===!0&&_A.morphTargetsCount!==NI)&&(mI=!0):(mI=!0,_A.__version=P.version);let wC=_A.currentProgram;mI===!0&&(wC=Gg(P,v,$));let uo=!1,qB=!1,dE=!1;const WI=wC.getUniforms(),SC=_A.uniforms;if(SA.useProgram(wC.program)&&(uo=!0,qB=!0,dE=!0),P.id!==k&&(k=P.id,qB=!0),uo||l!==J){if(WI.setValue(T,"projectionMatrix",J.projectionMatrix),uA.logarithmicDepthBuffer&&WI.setValue(T,"logDepthBufFC",2/(Math.log(J.far+1)/Math.LN2)),l!==J&&(l=J,qB=!0,dE=!0),P.isShaderMaterial||P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshStandardMaterial||P.envMap){const og=WI.map.cameraPosition;og!==void 0&&og.setValue(T,QA.setFromMatrixPosition(J.matrixWorld))}(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&WI.setValue(T,"isOrthographic",J.isOrthographicCamera===!0),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial||P.isShadowMaterial||$.isSkinnedMesh)&&WI.setValue(T,"viewMatrix",J.matrixWorldInverse)}if($.isSkinnedMesh){WI.setOptional(T,$,"bindMatrix"),WI.setOptional(T,$,"bindMatrixInverse");const og=$.skeleton;og&&(uA.floatVertexTextures?(og.boneTexture===null&&og.computeBoneTexture(),WI.setValue(T,"boneTexture",og.boneTexture,AA),WI.setValue(T,"boneTextureSize",og.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const pE=z.morphAttributes;if((pE.position!==void 0||pE.normal!==void 0||pE.color!==void 0&&uA.isWebGL2===!0)&&tA.update($,z,P,wC),(qB||_A.receiveShadow!==$.receiveShadow)&&(_A.receiveShadow=$.receiveShadow,WI.setValue(T,"receiveShadow",$.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(SC.envMap.value=WA,SC.flipEnvMap.value=WA.isCubeTexture&&WA.isRenderTargetTexture===!1?-1:1),qB&&(WI.setValue(T,"toneMappingExposure",h.toneMappingExposure),_A.needsLights&&dD(SC,dE),LA&&P.fog===!0&&oI.refreshFogUniforms(SC,LA),oI.refreshMaterialUniforms(SC,P,O,R,CA),vQ.upload(T,_A.uniformsList,SC,AA)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(vQ.upload(T,_A.uniformsList,SC,AA),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&WI.setValue(T,"center",$.center),WI.setValue(T,"modelViewMatrix",$.modelViewMatrix),WI.setValue(T,"normalMatrix",$.normalMatrix),WI.setValue(T,"modelMatrix",$.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const og=P.uniformsGroups;for(let YE=0,YD=og.length;YE<YD;YE++)if(uA.isWebGL2){const Ho=og[YE];cA.update(Ho,wC),cA.bind(Ho,wC)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wC}function dD(J,v){J.ambientLightColor.needsUpdate=v,J.lightProbe.needsUpdate=v,J.directionalLights.needsUpdate=v,J.directionalLightShadows.needsUpdate=v,J.pointLights.needsUpdate=v,J.pointLightShadows.needsUpdate=v,J.spotLights.needsUpdate=v,J.spotLightShadows.needsUpdate=v,J.rectAreaLights.needsUpdate=v,J.hemisphereLights.needsUpdate=v}function pD(J){return J.isMeshLambertMaterial||J.isMeshToonMaterial||J.isMeshPhongMaterial||J.isMeshStandardMaterial||J.isShadowMaterial||J.isShaderMaterial&&J.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return c},this.setRenderTargetTextures=function(J,v,z){gA.get(J.texture).__webglTexture=v,gA.get(J.depthTexture).__webglTexture=z;const P=gA.get(J);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=z===void 0,P.__autoAllocateDepthBuffer||MA.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(J,v){const z=gA.get(J);z.__webglFramebuffer=v,z.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(J,v=0,z=0){c=J,S=v,y=z;let P=!0,$=null,LA=!1,TA=!1;if(J){const WA=gA.get(J);WA.__useDefaultFramebuffer!==void 0?(SA.bindFramebuffer(36160,null),P=!1):WA.__webglFramebuffer===void 0?AA.setupRenderTarget(J):WA.__hasExternalTextures&&AA.rebindTextures(J,gA.get(J.texture).__webglTexture,gA.get(J.depthTexture).__webglTexture);const II=J.texture;(II.isData3DTexture||II.isDataArrayTexture||II.isCompressedArrayTexture)&&(TA=!0);const XA=gA.get(J).__webglFramebuffer;J.isWebGLCubeRenderTarget?($=XA[v],LA=!0):uA.isWebGL2&&J.samples>0&&AA.useMultisampledRTT(J)===!1?$=gA.get(J).__webglMultisampledFramebuffer:$=XA,K.copy(J.viewport),f.copy(J.scissor),r=J.scissorTest}else K.copy(u).multiplyScalar(O).floor(),f.copy(p).multiplyScalar(O).floor(),r=_;if(SA.bindFramebuffer(36160,$)&&uA.drawBuffers&&P&&SA.drawBuffers(J,$),SA.viewport(K),SA.scissor(f),SA.setScissorTest(r),LA){const WA=gA.get(J.texture);T.framebufferTexture2D(36160,36064,34069+v,WA.__webglTexture,z)}else if(TA){const WA=gA.get(J.texture),II=v||0;T.framebufferTextureLayer(36160,36064,WA.__webglTexture,z||0,II)}k=-1},this.readRenderTargetPixels=function(J,v,z,P,$,LA,TA){if(!(J&&J.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ZA=gA.get(J).__webglFramebuffer;if(J.isWebGLCubeRenderTarget&&TA!==void 0&&(ZA=ZA[TA]),ZA){SA.bindFramebuffer(36160,ZA);try{const WA=J.texture,II=WA.format,XA=WA.type;if(II!==qg&&q.convert(II)!==T.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zA=XA===AQ&&(MA.has("EXT_color_buffer_half_float")||uA.isWebGL2&&MA.has("EXT_color_buffer_float"));if(XA!==YC&&q.convert(XA)!==T.getParameter(35738)&&!(XA===FC&&(uA.isWebGL2||MA.has("OES_texture_float")||MA.has("WEBGL_color_buffer_float")))&&!zA){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=J.width-P&&z>=0&&z<=J.height-$&&T.readPixels(v,z,P,$,q.convert(II),q.convert(XA),LA)}finally{const WA=c!==null?gA.get(c).__webglFramebuffer:null;SA.bindFramebuffer(36160,WA)}}},this.copyFramebufferToTexture=function(J,v,z=0){const P=Math.pow(2,-z),$=Math.floor(v.image.width*P),LA=Math.floor(v.image.height*P);AA.setTexture2D(v,0),T.copyTexSubImage2D(3553,z,0,0,J.x,J.y,$,LA),SA.unbindTexture()},this.copyTextureToTexture=function(J,v,z,P=0){const $=v.image.width,LA=v.image.height,TA=q.convert(z.format),ZA=q.convert(z.type);AA.setTexture2D(z,0),T.pixelStorei(37440,z.flipY),T.pixelStorei(37441,z.premultiplyAlpha),T.pixelStorei(3317,z.unpackAlignment),v.isDataTexture?T.texSubImage2D(3553,P,J.x,J.y,$,LA,TA,ZA,v.image.data):v.isCompressedTexture?T.compressedTexSubImage2D(3553,P,J.x,J.y,v.mipmaps[0].width,v.mipmaps[0].height,TA,v.mipmaps[0].data):T.texSubImage2D(3553,P,J.x,J.y,TA,ZA,v.image),P===0&&z.generateMipmaps&&T.generateMipmap(3553),SA.unbindTexture()},this.copyTextureToTexture3D=function(J,v,z,P,$=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const LA=J.max.x-J.min.x+1,TA=J.max.y-J.min.y+1,ZA=J.max.z-J.min.z+1,WA=q.convert(P.format),II=q.convert(P.type);let XA;if(P.isData3DTexture)AA.setTexture3D(P,0),XA=32879;else if(P.isDataArrayTexture)AA.setTexture2DArray(P,0),XA=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(37440,P.flipY),T.pixelStorei(37441,P.premultiplyAlpha),T.pixelStorei(3317,P.unpackAlignment);const zA=T.getParameter(3314),JI=T.getParameter(32878),ig=T.getParameter(3316),bg=T.getParameter(3315),GC=T.getParameter(32877),NI=z.isCompressedTexture?z.mipmaps[0]:z.image;T.pixelStorei(3314,NI.width),T.pixelStorei(32878,NI.height),T.pixelStorei(3316,J.min.x),T.pixelStorei(3315,J.min.y),T.pixelStorei(32877,J.min.z),z.isDataTexture||z.isData3DTexture?T.texSubImage3D(XA,$,v.x,v.y,v.z,LA,TA,ZA,WA,II,NI.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),T.compressedTexSubImage3D(XA,$,v.x,v.y,v.z,LA,TA,ZA,WA,NI.data)):T.texSubImage3D(XA,$,v.x,v.y,v.z,LA,TA,ZA,WA,II,NI),T.pixelStorei(3314,zA),T.pixelStorei(32878,JI),T.pixelStorei(3316,ig),T.pixelStorei(3315,bg),T.pixelStorei(32877,GC),$===0&&P.generateMipmaps&&T.generateMipmap(XA),SA.unbindTexture()},this.initTexture=function(J){J.isCubeTexture?AA.setTextureCube(J,0):J.isData3DTexture?AA.setTexture3D(J,0):J.isDataArrayTexture||J.isCompressedArrayTexture?AA.setTexture2DArray(J,0):AA.setTexture2D(J,0),SA.unbindTexture()},this.resetState=function(){S=0,y=0,c=null,SA.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class PS extends ka{}PS.prototype.isWebGL1Renderer=!0;class vS extends nI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.backgroundIntensity=this.backgroundIntensity),I}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(A){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=A}}class SE extends UB{constructor(A){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gI(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.linewidth=A.linewidth,this.linecap=A.linecap,this.linejoin=A.linejoin,this.fog=A.fog,this}}const zt=new L,_t=new L,$t=new KI,Di=new Vi,HQ=new hE;class jS extends nI{constructor(A=new Eg,I=new SE){super(),this.isLine=!0,this.type="Line",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),this.material=A.material,this.geometry=A.geometry,this}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[0];for(let C=1,Q=I.count;C<Q;C++)zt.fromBufferAttribute(I,C-1),_t.fromBufferAttribute(I,C),g[C]=g[C-1],g[C]+=zt.distanceTo(_t);A.setAttribute("lineDistance",new dI(g,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(A,I){const g=this.geometry,C=this.matrixWorld,Q=A.params.Line.threshold,E=g.drawRange;if(g.boundingSphere===null&&g.computeBoundingSphere(),HQ.copy(g.boundingSphere),HQ.applyMatrix4(C),HQ.radius+=Q,A.ray.intersectsSphere(HQ)===!1)return;$t.copy(C).invert(),Di.copy(A.ray).applyMatrix4($t);const i=Q/((this.scale.x+this.scale.y+this.scale.z)/3),o=i*i,t=new L,e=new L,a=new L,D=new L,s=this.isLineSegments?2:1,G=g.index,n=g.attributes.position;if(G!==null){const S=Math.max(0,E.start),y=Math.min(G.count,E.start+E.count);for(let c=S,k=y-1;c<k;c+=s){const l=G.getX(c),K=G.getX(c+1);if(t.fromBufferAttribute(n,l),e.fromBufferAttribute(n,K),Di.distanceSqToSegment(t,e,D,a)>o)continue;D.applyMatrix4(this.matrixWorld);const r=A.ray.origin.distanceTo(D);r<A.near||r>A.far||I.push({distance:r,point:a.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,E.start),y=Math.min(n.count,E.start+E.count);for(let c=S,k=y-1;c<k;c+=s){if(t.fromBufferAttribute(n,c),e.fromBufferAttribute(n,c+1),Di.distanceSqToSegment(t,e,D,a)>o)continue;D.applyMatrix4(this.matrixWorld);const K=A.ray.origin.distanceTo(D);K<A.near||K>A.far||I.push({distance:K,point:a.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}}const Ae=new L,Ie=new L;let Io=class extends jS{constructor(A,I){super(A,I),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const A=this.geometry;if(A.index===null){const I=A.attributes.position,g=[];for(let C=0,Q=I.count;C<Q;C+=2)Ae.fromBufferAttribute(I,C),Ie.fromBufferAttribute(I,C+1),g[C]=C===0?0:g[C-1],g[C+1]=g[C]+Ae.distanceTo(Ie);A.setAttribute("lineDistance",new dI(g,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};class Tg{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(A,I){const g=this.getUtoTmapping(A);return this.getPoint(g,I)}getPoints(A=5){const I=[];for(let g=0;g<=A;g++)I.push(this.getPoint(g/A));return I}getSpacedPoints(A=5){const I=[];for(let g=0;g<=A;g++)I.push(this.getPointAt(g/A));return I}getLength(){const A=this.getLengths();return A[A.length-1]}getLengths(A=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===A+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const I=[];let g,C=this.getPoint(0),Q=0;I.push(0);for(let E=1;E<=A;E++)g=this.getPoint(E/A),Q+=g.distanceTo(C),I.push(Q),C=g;return this.cacheArcLengths=I,I}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(A,I){const g=this.getLengths();let C=0;const Q=g.length;let E;I?E=I:E=A*g[Q-1];let i=0,o=Q-1,t;for(;i<=o;)if(C=Math.floor(i+(o-i)/2),t=g[C]-E,t<0)i=C+1;else if(t>0)o=C-1;else{o=C;break}if(C=o,g[C]===E)return C/(Q-1);const e=g[C],D=g[C+1]-e,s=(E-e)/D;return(C+s)/(Q-1)}getTangent(A,I){let C=A-1e-4,Q=A+1e-4;C<0&&(C=0),Q>1&&(Q=1);const E=this.getPoint(C),i=this.getPoint(Q),o=I||(E.isVector2?new eA:new L);return o.copy(i).sub(E).normalize(),o}getTangentAt(A,I){const g=this.getUtoTmapping(A);return this.getTangent(g,I)}computeFrenetFrames(A,I){const g=new L,C=[],Q=[],E=[],i=new L,o=new KI;for(let s=0;s<=A;s++){const G=s/A;C[s]=this.getTangentAt(G,new L)}Q[0]=new L,E[0]=new L;let t=Number.MAX_VALUE;const e=Math.abs(C[0].x),a=Math.abs(C[0].y),D=Math.abs(C[0].z);e<=t&&(t=e,g.set(1,0,0)),a<=t&&(t=a,g.set(0,1,0)),D<=t&&g.set(0,0,1),i.crossVectors(C[0],g).normalize(),Q[0].crossVectors(C[0],i),E[0].crossVectors(C[0],Q[0]);for(let s=1;s<=A;s++){if(Q[s]=Q[s-1].clone(),E[s]=E[s-1].clone(),i.crossVectors(C[s-1],C[s]),i.length()>Number.EPSILON){i.normalize();const G=Math.acos(bI(C[s-1].dot(C[s]),-1,1));Q[s].applyMatrix4(o.makeRotationAxis(i,G))}E[s].crossVectors(C[s],Q[s])}if(I===!0){let s=Math.acos(bI(Q[0].dot(Q[A]),-1,1));s/=A,C[0].dot(i.crossVectors(Q[0],Q[A]))>0&&(s=-s);for(let G=1;G<=A;G++)Q[G].applyMatrix4(o.makeRotationAxis(C[G],s*G)),E[G].crossVectors(C[G],Q[G])}return{tangents:C,normals:Q,binormals:E}}clone(){return new this.constructor().copy(this)}copy(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}toJSON(){const A={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return A.arcLengthDivisions=this.arcLengthDivisions,A.type=this.type,A}fromJSON(A){return this.arcLengthDivisions=A.arcLengthDivisions,this}}class go extends Tg{constructor(A=0,I=0,g=1,C=1,Q=0,E=Math.PI*2,i=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=A,this.aY=I,this.xRadius=g,this.yRadius=C,this.aStartAngle=Q,this.aEndAngle=E,this.aClockwise=i,this.aRotation=o}getPoint(A,I){const g=I||new eA,C=Math.PI*2;let Q=this.aEndAngle-this.aStartAngle;const E=Math.abs(Q)<Number.EPSILON;for(;Q<0;)Q+=C;for(;Q>C;)Q-=C;Q<Number.EPSILON&&(E?Q=0:Q=C),this.aClockwise===!0&&!E&&(Q===C?Q=-C:Q=Q-C);const i=this.aStartAngle+A*Q;let o=this.aX+this.xRadius*Math.cos(i),t=this.aY+this.yRadius*Math.sin(i);if(this.aRotation!==0){const e=Math.cos(this.aRotation),a=Math.sin(this.aRotation),D=o-this.aX,s=t-this.aY;o=D*e-s*a+this.aX,t=D*a+s*e+this.aY}return g.set(o,t)}copy(A){return super.copy(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}toJSON(){const A=super.toJSON();return A.aX=this.aX,A.aY=this.aY,A.xRadius=this.xRadius,A.yRadius=this.yRadius,A.aStartAngle=this.aStartAngle,A.aEndAngle=this.aEndAngle,A.aClockwise=this.aClockwise,A.aRotation=this.aRotation,A}fromJSON(A){return super.fromJSON(A),this.aX=A.aX,this.aY=A.aY,this.xRadius=A.xRadius,this.yRadius=A.yRadius,this.aStartAngle=A.aStartAngle,this.aEndAngle=A.aEndAngle,this.aClockwise=A.aClockwise,this.aRotation=A.aRotation,this}}class VS extends go{constructor(A,I,g,C,Q,E){super(A,I,g,g,C,Q,E),this.isArcCurve=!0,this.type="ArcCurve"}}function Co(){let B=0,A=0,I=0,g=0;function C(Q,E,i,o){B=Q,A=i,I=-3*Q+3*E-2*i-o,g=2*Q-2*E+i+o}return{initCatmullRom:function(Q,E,i,o,t){C(E,i,t*(i-Q),t*(o-E))},initNonuniformCatmullRom:function(Q,E,i,o,t,e,a){let D=(E-Q)/t-(i-Q)/(t+e)+(i-E)/e,s=(i-E)/e-(o-E)/(e+a)+(o-i)/a;D*=e,s*=e,C(E,i,D,s)},calc:function(Q){const E=Q*Q,i=E*Q;return B+A*Q+I*E+g*i}}}const mQ=new L,si=new Co,ni=new Co,hi=new Co;class XS extends Tg{constructor(A=[],I=!1,g="centripetal",C=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=A,this.closed=I,this.curveType=g,this.tension=C}getPoint(A,I=new L){const g=I,C=this.points,Q=C.length,E=(Q-(this.closed?0:1))*A;let i=Math.floor(E),o=E-i;this.closed?i+=i>0?0:(Math.floor(Math.abs(i)/Q)+1)*Q:o===0&&i===Q-1&&(i=Q-2,o=1);let t,e;this.closed||i>0?t=C[(i-1)%Q]:(mQ.subVectors(C[0],C[1]).add(C[0]),t=mQ);const a=C[i%Q],D=C[(i+1)%Q];if(this.closed||i+2<Q?e=C[(i+2)%Q]:(mQ.subVectors(C[Q-1],C[Q-2]).add(C[Q-1]),e=mQ),this.curveType==="centripetal"||this.curveType==="chordal"){const s=this.curveType==="chordal"?.5:.25;let G=Math.pow(t.distanceToSquared(a),s),h=Math.pow(a.distanceToSquared(D),s),n=Math.pow(D.distanceToSquared(e),s);h<1e-4&&(h=1),G<1e-4&&(G=h),n<1e-4&&(n=h),si.initNonuniformCatmullRom(t.x,a.x,D.x,e.x,G,h,n),ni.initNonuniformCatmullRom(t.y,a.y,D.y,e.y,G,h,n),hi.initNonuniformCatmullRom(t.z,a.z,D.z,e.z,G,h,n)}else this.curveType==="catmullrom"&&(si.initCatmullRom(t.x,a.x,D.x,e.x,this.tension),ni.initCatmullRom(t.y,a.y,D.y,e.y,this.tension),hi.initCatmullRom(t.z,a.z,D.z,e.z,this.tension));return g.set(si.calc(o),ni.calc(o),hi.calc(o)),g}copy(A){super.copy(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(C.clone())}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}toJSON(){const A=super.toJSON();A.points=[];for(let I=0,g=this.points.length;I<g;I++){const C=this.points[I];A.points.push(C.toArray())}return A.closed=this.closed,A.curveType=this.curveType,A.tension=this.tension,A}fromJSON(A){super.fromJSON(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(new L().fromArray(C))}return this.closed=A.closed,this.curveType=A.curveType,this.tension=A.tension,this}}function ge(B,A,I,g,C){const Q=(g-A)*.5,E=(C-I)*.5,i=B*B,o=B*i;return(2*I-2*g+Q+E)*o+(-3*I+3*g-2*Q-E)*i+Q*B+I}function zS(B,A){const I=1-B;return I*I*A}function _S(B,A){return 2*(1-B)*B*A}function $S(B,A){return B*B*A}function WB(B,A,I,g){return zS(B,A)+_S(B,I)+$S(B,g)}function Ar(B,A){const I=1-B;return I*I*I*A}function Ir(B,A){const I=1-B;return 3*I*I*B*A}function gr(B,A){return 3*(1-B)*B*B*A}function Cr(B,A){return B*B*B*A}function PB(B,A,I,g,C){return Ar(B,A)+Ir(B,I)+gr(B,g)+Cr(B,C)}class ya extends Tg{constructor(A=new eA,I=new eA,g=new eA,C=new eA){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=A,this.v1=I,this.v2=g,this.v3=C}getPoint(A,I=new eA){const g=I,C=this.v0,Q=this.v1,E=this.v2,i=this.v3;return g.set(PB(A,C.x,Q.x,E.x,i.x),PB(A,C.y,Q.y,E.y,i.y)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}}class Br extends Tg{constructor(A=new L,I=new L,g=new L,C=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=A,this.v1=I,this.v2=g,this.v3=C}getPoint(A,I=new L){const g=I,C=this.v0,Q=this.v1,E=this.v2,i=this.v3;return g.set(PB(A,C.x,Q.x,E.x,i.x),PB(A,C.y,Q.y,E.y,i.y),PB(A,C.z,Q.z,E.z,i.z)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this.v3.copy(A.v3),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A.v3=this.v3.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this.v3.fromArray(A.v3),this}}class Bo extends Tg{constructor(A=new eA,I=new eA){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=A,this.v2=I}getPoint(A,I=new eA){const g=I;return A===1?g.copy(this.v2):(g.copy(this.v2).sub(this.v1),g.multiplyScalar(A).add(this.v1)),g}getPointAt(A,I){return this.getPoint(A,I)}getTangent(A,I){const g=I||new eA;return g.copy(this.v2).sub(this.v1).normalize(),g}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class Qr extends Tg{constructor(A=new L,I=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=A,this.v2=I}getPoint(A,I=new L){const g=I;return A===1?g.copy(this.v2):(g.copy(this.v2).sub(this.v1),g.multiplyScalar(A).add(this.v1)),g}getPointAt(A,I){return this.getPoint(A,I)}copy(A){return super.copy(A),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class la extends Tg{constructor(A=new eA,I=new eA,g=new eA){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=A,this.v1=I,this.v2=g}getPoint(A,I=new eA){const g=I,C=this.v0,Q=this.v1,E=this.v2;return g.set(WB(A,C.x,Q.x,E.x),WB(A,C.y,Q.y,E.y)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class Er extends Tg{constructor(A=new L,I=new L,g=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=A,this.v1=I,this.v2=g}getPoint(A,I=new L){const g=I,C=this.v0,Q=this.v1,E=this.v2;return g.set(WB(A,C.x,Q.x,E.x),WB(A,C.y,Q.y,E.y),WB(A,C.z,Q.z,E.z)),g}copy(A){return super.copy(A),this.v0.copy(A.v0),this.v1.copy(A.v1),this.v2.copy(A.v2),this}toJSON(){const A=super.toJSON();return A.v0=this.v0.toArray(),A.v1=this.v1.toArray(),A.v2=this.v2.toArray(),A}fromJSON(A){return super.fromJSON(A),this.v0.fromArray(A.v0),this.v1.fromArray(A.v1),this.v2.fromArray(A.v2),this}}class Ma extends Tg{constructor(A=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=A}getPoint(A,I=new eA){const g=I,C=this.points,Q=(C.length-1)*A,E=Math.floor(Q),i=Q-E,o=C[E===0?E:E-1],t=C[E],e=C[E>C.length-2?C.length-1:E+1],a=C[E>C.length-3?C.length-1:E+2];return g.set(ge(i,o.x,t.x,e.x,a.x),ge(i,o.y,t.y,e.y,a.y)),g}copy(A){super.copy(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(C.clone())}return this}toJSON(){const A=super.toJSON();A.points=[];for(let I=0,g=this.points.length;I<g;I++){const C=this.points[I];A.points.push(C.toArray())}return A}fromJSON(A){super.fromJSON(A),this.points=[];for(let I=0,g=A.points.length;I<g;I++){const C=A.points[I];this.points.push(new eA().fromArray(C))}return this}}var Ka=Object.freeze({__proto__:null,ArcCurve:VS,CatmullRomCurve3:XS,CubicBezierCurve:ya,CubicBezierCurve3:Br,EllipseCurve:go,LineCurve:Bo,LineCurve3:Qr,QuadraticBezierCurve:la,QuadraticBezierCurve3:Er,SplineCurve:Ma});class ir extends Tg{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(A){this.curves.push(A)}closePath(){const A=this.curves[0].getPoint(0),I=this.curves[this.curves.length-1].getPoint(1);A.equals(I)||this.curves.push(new Bo(I,A))}getPoint(A,I){const g=A*this.getLength(),C=this.getCurveLengths();let Q=0;for(;Q<C.length;){if(C[Q]>=g){const E=C[Q]-g,i=this.curves[Q],o=i.getLength(),t=o===0?0:1-E/o;return i.getPointAt(t,I)}Q++}return null}getLength(){const A=this.getCurveLengths();return A[A.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const A=[];let I=0;for(let g=0,C=this.curves.length;g<C;g++)I+=this.curves[g].getLength(),A.push(I);return this.cacheLengths=A,A}getSpacedPoints(A=40){const I=[];for(let g=0;g<=A;g++)I.push(this.getPoint(g/A));return this.autoClose&&I.push(I[0]),I}getPoints(A=12){const I=[];let g;for(let C=0,Q=this.curves;C<Q.length;C++){const E=Q[C],i=E.isEllipseCurve?A*2:E.isLineCurve||E.isLineCurve3?1:E.isSplineCurve?A*E.points.length:A,o=E.getPoints(i);for(let t=0;t<o.length;t++){const e=o[t];g&&g.equals(e)||(I.push(e),g=e)}}return this.autoClose&&I.length>1&&!I[I.length-1].equals(I[0])&&I.push(I[0]),I}copy(A){super.copy(A),this.curves=[];for(let I=0,g=A.curves.length;I<g;I++){const C=A.curves[I];this.curves.push(C.clone())}return this.autoClose=A.autoClose,this}toJSON(){const A=super.toJSON();A.autoClose=this.autoClose,A.curves=[];for(let I=0,g=this.curves.length;I<g;I++){const C=this.curves[I];A.curves.push(C.toJSON())}return A}fromJSON(A){super.fromJSON(A),this.autoClose=A.autoClose,this.curves=[];for(let I=0,g=A.curves.length;I<g;I++){const C=A.curves[I];this.curves.push(new Ka[C.type]().fromJSON(C))}return this}}class Ce extends ir{constructor(A){super(),this.type="Path",this.currentPoint=new eA,A&&this.setFromPoints(A)}setFromPoints(A){this.moveTo(A[0].x,A[0].y);for(let I=1,g=A.length;I<g;I++)this.lineTo(A[I].x,A[I].y);return this}moveTo(A,I){return this.currentPoint.set(A,I),this}lineTo(A,I){const g=new Bo(this.currentPoint.clone(),new eA(A,I));return this.curves.push(g),this.currentPoint.set(A,I),this}quadraticCurveTo(A,I,g,C){const Q=new la(this.currentPoint.clone(),new eA(A,I),new eA(g,C));return this.curves.push(Q),this.currentPoint.set(g,C),this}bezierCurveTo(A,I,g,C,Q,E){const i=new ya(this.currentPoint.clone(),new eA(A,I),new eA(g,C),new eA(Q,E));return this.curves.push(i),this.currentPoint.set(Q,E),this}splineThru(A){const I=[this.currentPoint.clone()].concat(A),g=new Ma(I);return this.curves.push(g),this.currentPoint.copy(A[A.length-1]),this}arc(A,I,g,C,Q,E){const i=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(A+i,I+o,g,C,Q,E),this}absarc(A,I,g,C,Q,E){return this.absellipse(A,I,g,g,C,Q,E),this}ellipse(A,I,g,C,Q,E,i,o){const t=this.currentPoint.x,e=this.currentPoint.y;return this.absellipse(A+t,I+e,g,C,Q,E,i,o),this}absellipse(A,I,g,C,Q,E,i,o){const t=new go(A,I,g,C,Q,E,i,o);if(this.curves.length>0){const a=t.getPoint(0);a.equals(this.currentPoint)||this.lineTo(a.x,a.y)}this.curves.push(t);const e=t.getPoint(1);return this.currentPoint.copy(e),this}copy(A){return super.copy(A),this.currentPoint.copy(A.currentPoint),this}toJSON(){const A=super.toJSON();return A.currentPoint=this.currentPoint.toArray(),A}fromJSON(A){return super.fromJSON(A),this.currentPoint.fromArray(A.currentPoint),this}}class Qo extends Eg{constructor(A=1,I=1,g=1,C=32,Q=1,E=!1,i=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:A,radiusBottom:I,height:g,radialSegments:C,heightSegments:Q,openEnded:E,thetaStart:i,thetaLength:o};const t=this;C=Math.floor(C),Q=Math.floor(Q);const e=[],a=[],D=[],s=[];let G=0;const h=[],n=g/2;let S=0;y(),E===!1&&(A>0&&c(!0),I>0&&c(!1)),this.setIndex(e),this.setAttribute("position",new dI(a,3)),this.setAttribute("normal",new dI(D,3)),this.setAttribute("uv",new dI(s,2));function y(){const k=new L,l=new L;let K=0;const f=(I-A)/g;for(let r=0;r<=Q;r++){const U=[],R=r/Q,O=R*(I-A)+A;for(let m=0;m<=C;m++){const d=m/C,u=d*o+i,p=Math.sin(u),_=Math.cos(u);l.x=O*p,l.y=-R*g+n,l.z=O*_,a.push(l.x,l.y,l.z),k.set(p,f,_).normalize(),D.push(k.x,k.y,k.z),s.push(d,1-R),U.push(G++)}h.push(U)}for(let r=0;r<C;r++)for(let U=0;U<Q;U++){const R=h[U][r],O=h[U+1][r],m=h[U+1][r+1],d=h[U][r+1];e.push(R,O,d),e.push(O,m,d),K+=6}t.addGroup(S,K,0),S+=K}function c(k){const l=G,K=new eA,f=new L;let r=0;const U=k===!0?A:I,R=k===!0?1:-1;for(let m=1;m<=C;m++)a.push(0,n*R,0),D.push(0,R,0),s.push(.5,.5),G++;const O=G;for(let m=0;m<=C;m++){const u=m/C*o+i,p=Math.cos(u),_=Math.sin(u);f.x=U*_,f.y=n*R,f.z=U*p,a.push(f.x,f.y,f.z),D.push(0,R,0),K.x=p*.5+.5,K.y=_*.5*R+.5,s.push(K.x,K.y),G++}for(let m=0;m<C;m++){const d=l+m,u=O+m;k===!0?e.push(u,u+1,d):e.push(u+1,u,d),r+=3}t.addGroup(S,r,k===!0?1:2),S+=r}}static fromJSON(A){return new Qo(A.radiusTop,A.radiusBottom,A.height,A.radialSegments,A.heightSegments,A.openEnded,A.thetaStart,A.thetaLength)}}class Ua extends Ce{constructor(A){super(A),this.uuid=mC(),this.type="Shape",this.holes=[]}getPointsHoles(A){const I=[];for(let g=0,C=this.holes.length;g<C;g++)I[g]=this.holes[g].getPoints(A);return I}extractPoints(A){return{shape:this.getPoints(A),holes:this.getPointsHoles(A)}}copy(A){super.copy(A),this.holes=[];for(let I=0,g=A.holes.length;I<g;I++){const C=A.holes[I];this.holes.push(C.clone())}return this}toJSON(){const A=super.toJSON();A.uuid=this.uuid,A.holes=[];for(let I=0,g=this.holes.length;I<g;I++){const C=this.holes[I];A.holes.push(C.toJSON())}return A}fromJSON(A){super.fromJSON(A),this.uuid=A.uuid,this.holes=[];for(let I=0,g=A.holes.length;I<g;I++){const C=A.holes[I];this.holes.push(new Ce().fromJSON(C))}return this}}const or={triangulate:function(B,A,I=2){const g=A&&A.length,C=g?A[0]*I:B.length;let Q=Ja(B,0,C,I,!0);const E=[];if(!Q||Q.next===Q.prev)return E;let i,o,t,e,a,D,s;if(g&&(Q=sr(B,A,Q,I)),B.length>80*I){i=t=B[0],o=e=B[1];for(let G=I;G<C;G+=I)a=B[G],D=B[G+1],a<i&&(i=a),D<o&&(o=D),a>t&&(t=a),D>e&&(e=D);s=Math.max(t-i,e-o),s=s!==0?32767/s:0}return CQ(Q,E,I,i,o,s,0),E}};function Ja(B,A,I,g,C){let Q,E;if(C===Mr(B,A,I,g)>0)for(Q=A;Q<I;Q+=g)E=Be(Q,B[Q],B[Q+1],E);else for(Q=I-g;Q>=A;Q-=g)E=Be(Q,B[Q],B[Q+1],E);return E&&rE(E,E.next)&&(QQ(E),E=E.next),E}function LC(B,A){if(!B)return B;A||(A=B);let I=B,g;do if(g=!1,!I.steiner&&(rE(I,I.next)||MI(I.prev,I,I.next)===0)){if(QQ(I),I=A=I.prev,I===I.next)break;g=!0}else I=I.next;while(g||I!==A);return A}function CQ(B,A,I,g,C,Q,E){if(!B)return;!E&&Q&&Sr(B,g,C,Q);let i=B,o,t;for(;B.prev!==B.next;){if(o=B.prev,t=B.next,Q?er(B,g,C,Q):tr(B)){A.push(o.i/I|0),A.push(B.i/I|0),A.push(t.i/I|0),QQ(B),B=t.next,i=t.next;continue}if(B=t,B===i){E?E===1?(B=ar(LC(B),A,I),CQ(B,A,I,g,C,Q,2)):E===2&&Dr(B,A,I,g,C,Q):CQ(LC(B),A,I,g,C,Q,1);break}}}function tr(B){const A=B.prev,I=B,g=B.next;if(MI(A,I,g)>=0)return!1;const C=A.x,Q=I.x,E=g.x,i=A.y,o=I.y,t=g.y,e=C<Q?C<E?C:E:Q<E?Q:E,a=i<o?i<t?i:t:o<t?o:t,D=C>Q?C>E?C:E:Q>E?Q:E,s=i>o?i>t?i:t:o>t?o:t;let G=g.next;for(;G!==A;){if(G.x>=e&&G.x<=D&&G.y>=a&&G.y<=s&&eB(C,i,Q,o,E,t,G.x,G.y)&&MI(G.prev,G,G.next)>=0)return!1;G=G.next}return!0}function er(B,A,I,g){const C=B.prev,Q=B,E=B.next;if(MI(C,Q,E)>=0)return!1;const i=C.x,o=Q.x,t=E.x,e=C.y,a=Q.y,D=E.y,s=i<o?i<t?i:t:o<t?o:t,G=e<a?e<D?e:D:a<D?a:D,h=i>o?i>t?i:t:o>t?o:t,n=e>a?e>D?e:D:a>D?a:D,S=pi(s,G,A,I,g),y=pi(h,n,A,I,g);let c=B.prevZ,k=B.nextZ;for(;c&&c.z>=S&&k&&k.z<=y;){if(c.x>=s&&c.x<=h&&c.y>=G&&c.y<=n&&c!==C&&c!==E&&eB(i,e,o,a,t,D,c.x,c.y)&&MI(c.prev,c,c.next)>=0||(c=c.prevZ,k.x>=s&&k.x<=h&&k.y>=G&&k.y<=n&&k!==C&&k!==E&&eB(i,e,o,a,t,D,k.x,k.y)&&MI(k.prev,k,k.next)>=0))return!1;k=k.nextZ}for(;c&&c.z>=S;){if(c.x>=s&&c.x<=h&&c.y>=G&&c.y<=n&&c!==C&&c!==E&&eB(i,e,o,a,t,D,c.x,c.y)&&MI(c.prev,c,c.next)>=0)return!1;c=c.prevZ}for(;k&&k.z<=y;){if(k.x>=s&&k.x<=h&&k.y>=G&&k.y<=n&&k!==C&&k!==E&&eB(i,e,o,a,t,D,k.x,k.y)&&MI(k.prev,k,k.next)>=0)return!1;k=k.nextZ}return!0}function ar(B,A,I){let g=B;do{const C=g.prev,Q=g.next.next;!rE(C,Q)&&Na(C,g,g.next,Q)&&BQ(C,Q)&&BQ(Q,C)&&(A.push(C.i/I|0),A.push(g.i/I|0),A.push(Q.i/I|0),QQ(g),QQ(g.next),g=B=Q),g=g.next}while(g!==B);return LC(g)}function Dr(B,A,I,g,C,Q){let E=B;do{let i=E.next.next;for(;i!==E.prev;){if(E.i!==i.i&&kr(E,i)){let o=Fa(E,i);E=LC(E,E.next),o=LC(o,o.next),CQ(E,A,I,g,C,Q,0),CQ(o,A,I,g,C,Q,0);return}i=i.next}E=E.next}while(E!==B)}function sr(B,A,I,g){const C=[];let Q,E,i,o,t;for(Q=0,E=A.length;Q<E;Q++)i=A[Q]*g,o=Q<E-1?A[Q+1]*g:B.length,t=Ja(B,i,o,g,!1),t===t.next&&(t.steiner=!0),C.push(cr(t));for(C.sort(nr),Q=0;Q<C.length;Q++)I=hr(C[Q],I);return I}function nr(B,A){return B.x-A.x}function hr(B,A){const I=Gr(B,A);if(!I)return A;const g=Fa(I,B);return LC(g,g.next),LC(I,I.next)}function Gr(B,A){let I=A,g=-1/0,C;const Q=B.x,E=B.y;do{if(E<=I.y&&E>=I.next.y&&I.next.y!==I.y){const D=I.x+(E-I.y)*(I.next.x-I.x)/(I.next.y-I.y);if(D<=Q&&D>g&&(g=D,C=I.x<I.next.x?I:I.next,D===Q))return C}I=I.next}while(I!==A);if(!C)return null;const i=C,o=C.x,t=C.y;let e=1/0,a;I=C;do Q>=I.x&&I.x>=o&&Q!==I.x&&eB(E<t?Q:g,E,o,t,E<t?g:Q,E,I.x,I.y)&&(a=Math.abs(E-I.y)/(Q-I.x),BQ(I,B)&&(a<e||a===e&&(I.x>C.x||I.x===C.x&&wr(C,I)))&&(C=I,e=a)),I=I.next;while(I!==i);return C}function wr(B,A){return MI(B.prev,B,A.prev)<0&&MI(A.next,B,B.next)<0}function Sr(B,A,I,g){let C=B;do C.z===0&&(C.z=pi(C.x,C.y,A,I,g)),C.prevZ=C.prev,C.nextZ=C.next,C=C.next;while(C!==B);C.prevZ.nextZ=null,C.prevZ=null,rr(C)}function rr(B){let A,I,g,C,Q,E,i,o,t=1;do{for(I=B,B=null,Q=null,E=0;I;){for(E++,g=I,i=0,A=0;A<t&&(i++,g=g.nextZ,!!g);A++);for(o=t;i>0||o>0&&g;)i!==0&&(o===0||!g||I.z<=g.z)?(C=I,I=I.nextZ,i--):(C=g,g=g.nextZ,o--),Q?Q.nextZ=C:B=C,C.prevZ=Q,Q=C;I=g}Q.nextZ=null,t*=2}while(E>1);return B}function pi(B,A,I,g,C){return B=(B-I)*C|0,A=(A-g)*C|0,B=(B|B<<8)&16711935,B=(B|B<<4)&252645135,B=(B|B<<2)&858993459,B=(B|B<<1)&1431655765,A=(A|A<<8)&16711935,A=(A|A<<4)&252645135,A=(A|A<<2)&858993459,A=(A|A<<1)&1431655765,B|A<<1}function cr(B){let A=B,I=B;do(A.x<I.x||A.x===I.x&&A.y<I.y)&&(I=A),A=A.next;while(A!==B);return I}function eB(B,A,I,g,C,Q,E,i){return(C-E)*(A-i)>=(B-E)*(Q-i)&&(B-E)*(g-i)>=(I-E)*(A-i)&&(I-E)*(Q-i)>=(C-E)*(g-i)}function kr(B,A){return B.next.i!==A.i&&B.prev.i!==A.i&&!yr(B,A)&&(BQ(B,A)&&BQ(A,B)&&lr(B,A)&&(MI(B.prev,B,A.prev)||MI(B,A.prev,A))||rE(B,A)&&MI(B.prev,B,B.next)>0&&MI(A.prev,A,A.next)>0)}function MI(B,A,I){return(A.y-B.y)*(I.x-A.x)-(A.x-B.x)*(I.y-A.y)}function rE(B,A){return B.x===A.x&&B.y===A.y}function Na(B,A,I,g){const C=xQ(MI(B,A,I)),Q=xQ(MI(B,A,g)),E=xQ(MI(I,g,B)),i=xQ(MI(I,g,A));return!!(C!==Q&&E!==i||C===0&&TQ(B,I,A)||Q===0&&TQ(B,g,A)||E===0&&TQ(I,B,g)||i===0&&TQ(I,A,g))}function TQ(B,A,I){return A.x<=Math.max(B.x,I.x)&&A.x>=Math.min(B.x,I.x)&&A.y<=Math.max(B.y,I.y)&&A.y>=Math.min(B.y,I.y)}function xQ(B){return B>0?1:B<0?-1:0}function yr(B,A){let I=B;do{if(I.i!==B.i&&I.next.i!==B.i&&I.i!==A.i&&I.next.i!==A.i&&Na(I,I.next,B,A))return!0;I=I.next}while(I!==B);return!1}function BQ(B,A){return MI(B.prev,B,B.next)<0?MI(B,A,B.next)>=0&&MI(B,B.prev,A)>=0:MI(B,A,B.prev)<0||MI(B,B.next,A)<0}function lr(B,A){let I=B,g=!1;const C=(B.x+A.x)/2,Q=(B.y+A.y)/2;do I.y>Q!=I.next.y>Q&&I.next.y!==I.y&&C<(I.next.x-I.x)*(Q-I.y)/(I.next.y-I.y)+I.x&&(g=!g),I=I.next;while(I!==B);return g}function Fa(B,A){const I=new Yi(B.i,B.x,B.y),g=new Yi(A.i,A.x,A.y),C=B.next,Q=A.prev;return B.next=A,A.prev=B,I.next=C,C.prev=I,g.next=I,I.prev=g,Q.next=g,g.prev=Q,g}function Be(B,A,I,g){const C=new Yi(B,A,I);return g?(C.next=g.next,C.prev=g,g.next.prev=C,g.next=C):(C.prev=C,C.next=C),C}function QQ(B){B.next.prev=B.prev,B.prev.next=B.next,B.prevZ&&(B.prevZ.nextZ=B.nextZ),B.nextZ&&(B.nextZ.prevZ=B.prevZ)}function Yi(B,A,I){this.i=B,this.x=A,this.y=I,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mr(B,A,I,g){let C=0;for(let Q=A,E=I-g;Q<I;Q+=g)C+=(B[E]-B[Q])*(B[Q+1]+B[E+1]),E=Q;return C}class vB{static area(A){const I=A.length;let g=0;for(let C=I-1,Q=0;Q<I;C=Q++)g+=A[C].x*A[Q].y-A[Q].x*A[C].y;return g*.5}static isClockWise(A){return vB.area(A)<0}static triangulateShape(A,I){const g=[],C=[],Q=[];Qe(A),Ee(g,A);let E=A.length;I.forEach(Qe);for(let o=0;o<I.length;o++)C.push(E),E+=I[o].length,Ee(g,I[o]);const i=or.triangulate(g,C);for(let o=0;o<i.length;o+=3)Q.push(i.slice(o,o+3));return Q}}function Qe(B){const A=B.length;A>2&&B[A-1].equals(B[0])&&B.pop()}function Ee(B,A){for(let I=0;I<A.length;I++)B.push(A[I].x),B.push(A[I].y)}class Eo extends Eg{constructor(A=new Ua([new eA(.5,.5),new eA(-.5,.5),new eA(-.5,-.5),new eA(.5,-.5)]),I={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:A,options:I},A=Array.isArray(A)?A:[A];const g=this,C=[],Q=[];for(let i=0,o=A.length;i<o;i++){const t=A[i];E(t)}this.setAttribute("position",new dI(C,3)),this.setAttribute("uv",new dI(Q,2)),this.computeVertexNormals();function E(i){const o=[],t=I.curveSegments!==void 0?I.curveSegments:12,e=I.steps!==void 0?I.steps:1,a=I.depth!==void 0?I.depth:1;let D=I.bevelEnabled!==void 0?I.bevelEnabled:!0,s=I.bevelThickness!==void 0?I.bevelThickness:.2,G=I.bevelSize!==void 0?I.bevelSize:s-.1,h=I.bevelOffset!==void 0?I.bevelOffset:0,n=I.bevelSegments!==void 0?I.bevelSegments:3;const S=I.extrudePath,y=I.UVGenerator!==void 0?I.UVGenerator:Kr;let c,k=!1,l,K,f,r;S&&(c=S.getSpacedPoints(e),k=!0,D=!1,l=S.computeFrenetFrames(e,!1),K=new L,f=new L,r=new L),D||(n=0,s=0,G=0,h=0);const U=i.extractPoints(t);let R=U.shape;const O=U.holes;if(!vB.isClockWise(R)){R=R.reverse();for(let gA=0,AA=O.length;gA<AA;gA++){const DA=O[gA];vB.isClockWise(DA)&&(O[gA]=DA.reverse())}}const d=vB.triangulateShape(R,O),u=R;for(let gA=0,AA=O.length;gA<AA;gA++){const DA=O[gA];R=R.concat(DA)}function p(gA,AA,DA){return AA||console.error("THREE.ExtrudeGeometry: vec does not exist"),AA.clone().multiplyScalar(DA).add(gA)}const _=R.length,IA=d.length;function x(gA,AA,DA){let KA,GA,mA;const YA=gA.x-AA.x,dA=gA.y-AA.y,oI=DA.x-gA.x,AI=DA.y-gA.y,F=YA*YA+dA*dA,M=YA*AI-dA*oI;if(Math.abs(M)>Number.EPSILON){const j=Math.sqrt(F),EA=Math.sqrt(oI*oI+AI*AI),tA=AA.x-dA/j,rA=AA.y+YA/j,HA=DA.x-AI/EA,q=DA.y+oI/EA,Z=((HA-tA)*AI-(q-rA)*oI)/(YA*AI-dA*oI);KA=tA+YA*Z-gA.x,GA=rA+dA*Z-gA.y;const cA=KA*KA+GA*GA;if(cA<=2)return new eA(KA,GA);mA=Math.sqrt(cA/2)}else{let j=!1;YA>Number.EPSILON?oI>Number.EPSILON&&(j=!0):YA<-Number.EPSILON?oI<-Number.EPSILON&&(j=!0):Math.sign(dA)===Math.sign(AI)&&(j=!0),j?(KA=-dA,GA=YA,mA=Math.sqrt(F)):(KA=YA,GA=dA,mA=Math.sqrt(F/2))}return new eA(KA/mA,GA/mA)}const BA=[];for(let gA=0,AA=u.length,DA=AA-1,KA=gA+1;gA<AA;gA++,DA++,KA++)DA===AA&&(DA=0),KA===AA&&(KA=0),BA[gA]=x(u[gA],u[DA],u[KA]);const CA=[];let N,V=BA.concat();for(let gA=0,AA=O.length;gA<AA;gA++){const DA=O[gA];N=[];for(let KA=0,GA=DA.length,mA=GA-1,YA=KA+1;KA<GA;KA++,mA++,YA++)mA===GA&&(mA=0),YA===GA&&(YA=0),N[KA]=x(DA[KA],DA[mA],DA[YA]);CA.push(N),V=V.concat(N)}for(let gA=0;gA<n;gA++){const AA=gA/n,DA=s*Math.cos(AA*Math.PI/2),KA=G*Math.sin(AA*Math.PI/2)+h;for(let GA=0,mA=u.length;GA<mA;GA++){const YA=p(u[GA],BA[GA],KA);hA(YA.x,YA.y,-DA)}for(let GA=0,mA=O.length;GA<mA;GA++){const YA=O[GA];N=CA[GA];for(let dA=0,oI=YA.length;dA<oI;dA++){const AI=p(YA[dA],N[dA],KA);hA(AI.x,AI.y,-DA)}}}const QA=G+h;for(let gA=0;gA<_;gA++){const AA=D?p(R[gA],V[gA],QA):R[gA];k?(f.copy(l.normals[0]).multiplyScalar(AA.x),K.copy(l.binormals[0]).multiplyScalar(AA.y),r.copy(c[0]).add(f).add(K),hA(r.x,r.y,r.z)):hA(AA.x,AA.y,0)}for(let gA=1;gA<=e;gA++)for(let AA=0;AA<_;AA++){const DA=D?p(R[AA],V[AA],QA):R[AA];k?(f.copy(l.normals[gA]).multiplyScalar(DA.x),K.copy(l.binormals[gA]).multiplyScalar(DA.y),r.copy(c[gA]).add(f).add(K),hA(r.x,r.y,r.z)):hA(DA.x,DA.y,a/e*gA)}for(let gA=n-1;gA>=0;gA--){const AA=gA/n,DA=s*Math.cos(AA*Math.PI/2),KA=G*Math.sin(AA*Math.PI/2)+h;for(let GA=0,mA=u.length;GA<mA;GA++){const YA=p(u[GA],BA[GA],KA);hA(YA.x,YA.y,a+DA)}for(let GA=0,mA=O.length;GA<mA;GA++){const YA=O[GA];N=CA[GA];for(let dA=0,oI=YA.length;dA<oI;dA++){const AI=p(YA[dA],N[dA],KA);k?hA(AI.x,AI.y+c[e-1].y,c[e-1].x+DA):hA(AI.x,AI.y,a+DA)}}}iA(),sA();function iA(){const gA=C.length/3;if(D){let AA=0,DA=_*AA;for(let KA=0;KA<IA;KA++){const GA=d[KA];MA(GA[2]+DA,GA[1]+DA,GA[0]+DA)}AA=e+n*2,DA=_*AA;for(let KA=0;KA<IA;KA++){const GA=d[KA];MA(GA[0]+DA,GA[1]+DA,GA[2]+DA)}}else{for(let AA=0;AA<IA;AA++){const DA=d[AA];MA(DA[2],DA[1],DA[0])}for(let AA=0;AA<IA;AA++){const DA=d[AA];MA(DA[0]+_*e,DA[1]+_*e,DA[2]+_*e)}}g.addGroup(gA,C.length/3-gA,0)}function sA(){const gA=C.length/3;let AA=0;T(u,AA),AA+=u.length;for(let DA=0,KA=O.length;DA<KA;DA++){const GA=O[DA];T(GA,AA),AA+=GA.length}g.addGroup(gA,C.length/3-gA,1)}function T(gA,AA){let DA=gA.length;for(;--DA>=0;){const KA=DA;let GA=DA-1;GA<0&&(GA=gA.length-1);for(let mA=0,YA=e+n*2;mA<YA;mA++){const dA=_*mA,oI=_*(mA+1),AI=AA+KA+dA,F=AA+GA+dA,M=AA+GA+oI,j=AA+KA+oI;uA(AI,F,M,j)}}}function hA(gA,AA,DA){o.push(gA),o.push(AA),o.push(DA)}function MA(gA,AA,DA){SA(gA),SA(AA),SA(DA);const KA=C.length/3,GA=y.generateTopUV(g,C,KA-3,KA-2,KA-1);xA(GA[0]),xA(GA[1]),xA(GA[2])}function uA(gA,AA,DA,KA){SA(gA),SA(AA),SA(KA),SA(AA),SA(DA),SA(KA);const GA=C.length/3,mA=y.generateSideWallUV(g,C,GA-6,GA-3,GA-2,GA-1);xA(mA[0]),xA(mA[1]),xA(mA[3]),xA(mA[1]),xA(mA[2]),xA(mA[3])}function SA(gA){C.push(o[gA*3+0]),C.push(o[gA*3+1]),C.push(o[gA*3+2])}function xA(gA){Q.push(gA.x),Q.push(gA.y)}}}toJSON(){const A=super.toJSON(),I=this.parameters.shapes,g=this.parameters.options;return Ur(I,g,A)}static fromJSON(A,I){const g=[];for(let Q=0,E=A.shapes.length;Q<E;Q++){const i=I[A.shapes[Q]];g.push(i)}const C=A.options.extrudePath;return C!==void 0&&(A.options.extrudePath=new Ka[C.type]().fromJSON(C)),new Eo(g,A.options)}}const Kr={generateTopUV:function(B,A,I,g,C){const Q=A[I*3],E=A[I*3+1],i=A[g*3],o=A[g*3+1],t=A[C*3],e=A[C*3+1];return[new eA(Q,E),new eA(i,o),new eA(t,e)]},generateSideWallUV:function(B,A,I,g,C,Q){const E=A[I*3],i=A[I*3+1],o=A[I*3+2],t=A[g*3],e=A[g*3+1],a=A[g*3+2],D=A[C*3],s=A[C*3+1],G=A[C*3+2],h=A[Q*3],n=A[Q*3+1],S=A[Q*3+2];return Math.abs(i-e)<Math.abs(E-t)?[new eA(E,1-o),new eA(t,1-a),new eA(D,1-G),new eA(h,1-S)]:[new eA(i,1-o),new eA(e,1-a),new eA(s,1-G),new eA(n,1-S)]}};function Ur(B,A,I){if(I.shapes=[],Array.isArray(B))for(let g=0,C=B.length;g<C;g++){const Q=B[g];I.shapes.push(Q.uuid)}else I.shapes.push(B.uuid);return I.options=Object.assign({},A),A.extrudePath!==void 0&&(I.options.extrudePath=A.extrudePath.toJSON()),I}class io extends UB{constructor(A){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gI(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gI(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new eA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}const ie={enabled:!1,files:{},add:function(B,A){this.enabled!==!1&&(this.files[B]=A)},get:function(B){if(this.enabled!==!1)return this.files[B]},remove:function(B){delete this.files[B]},clear:function(){this.files={}}};class Jr{constructor(A,I,g){const C=this;let Q=!1,E=0,i=0,o;const t=[];this.onStart=void 0,this.onLoad=A,this.onProgress=I,this.onError=g,this.itemStart=function(e){i++,Q===!1&&C.onStart!==void 0&&C.onStart(e,E,i),Q=!0},this.itemEnd=function(e){E++,C.onProgress!==void 0&&C.onProgress(e,E,i),E===i&&(Q=!1,C.onLoad!==void 0&&C.onLoad())},this.itemError=function(e){C.onError!==void 0&&C.onError(e)},this.resolveURL=function(e){return o?o(e):e},this.setURLModifier=function(e){return o=e,this},this.addHandler=function(e,a){return t.push(e,a),this},this.removeHandler=function(e){const a=t.indexOf(e);return a!==-1&&t.splice(a,2),this},this.getHandler=function(e){for(let a=0,D=t.length;a<D;a+=2){const s=t[a],G=t[a+1];if(s.global&&(s.lastIndex=0),s.test(e))return G}return null}}}const Ra=new Jr;class qa{constructor(A){this.manager=A!==void 0?A:Ra,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(A,I){const g=this;return new Promise(function(C,Q){g.load(A,C,I,Q)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}}class Nr extends qa{constructor(A){super(A)}load(A,I,g,C){this.path!==void 0&&(A=this.path+A),A=this.manager.resolveURL(A);const Q=this,E=ie.get(A);if(E!==void 0)return Q.manager.itemStart(A),setTimeout(function(){I&&I(E),Q.manager.itemEnd(A)},0),E;const i=gQ("img");function o(){e(),ie.add(A,this),I&&I(this),Q.manager.itemEnd(A)}function t(a){e(),C&&C(a),Q.manager.itemError(A),Q.manager.itemEnd(A)}function e(){i.removeEventListener("load",o,!1),i.removeEventListener("error",t,!1)}return i.addEventListener("load",o,!1),i.addEventListener("error",t,!1),A.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(i.crossOrigin=this.crossOrigin),Q.manager.itemStart(A),i.src=A,i}}class oe extends qa{constructor(A){super(A)}load(A,I,g,C){const Q=new Qg,E=new Nr(this.manager);return E.setCrossOrigin(this.crossOrigin),E.setPath(this.path),E.load(A,function(i){Q.image=i,Q.needsUpdate=!0,I!==void 0&&I(Q)},g,C),Q}}class da extends nI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new gI(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),I}}const Gi=new KI,te=new L,ee=new L;class Fr{constructor(A){this.camera=A,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new eA(512,512),this.map=null,this.mapPass=null,this.matrix=new KI,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new GE,this._frameExtents=new eA(1,1),this._viewportCount=1,this._viewports=[new xI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;te.setFromMatrixPosition(A.matrixWorld),I.position.copy(te),ee.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(ee),I.updateMatrixWorld(),Gi.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gi),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(Gi)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}class Rr extends Fr{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ae extends da{constructor(A,I){super(A,I),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nI.DefaultUp),this.updateMatrix(),this.target=new nI,this.shadow=new Rr}dispose(){this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}}class qr extends da{constructor(A,I){super(A,I),this.isAmbientLight=!0,this.type="AmbientLight"}}class pa{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=De(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=De();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function De(){return(typeof performance>"u"?Date:performance).now()}class dr{constructor(A,I,g=0,C=1/0){this.ray=new Vi(A,I),this.near=g,this.far=C,this.camera=null,this.layers=new Xi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(A,I){this.ray.set(A,I)}setFromCamera(A,I){I.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(I.matrixWorld),this.ray.direction.set(A.x,A.y,.5).unproject(I).sub(this.ray.origin).normalize(),this.camera=I):I.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,(I.near+I.far)/(I.near-I.far)).unproject(I),this.ray.direction.set(0,0,-1).transformDirection(I.matrixWorld),this.camera=I):console.error("THREE.Raycaster: Unsupported camera type: "+I.type)}intersectObject(A,I=!0,g=[]){return Li(A,this,g,I),g.sort(se),g}intersectObjects(A,I=!0,g=[]){for(let C=0,Q=A.length;C<Q;C++)Li(A[C],this,g,I);return g.sort(se),g}}function se(B,A){return B.distance-A.distance}function Li(B,A,I,g){if(B.layers.test(A.layers)&&B.raycast(A,I),g===!0){const C=B.children;for(let Q=0,E=C.length;Q<E;Q++)Li(C[Q],A,I,!0)}}class ne{constructor(A=1,I=0,g=0){return this.radius=A,this.phi=I,this.theta=g,this}set(A,I,g){return this.radius=A,this.phi=I,this.theta=g,this}copy(A){return this.radius=A.radius,this.phi=A.phi,this.theta=A.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(A){return this.setFromCartesianCoords(A.x,A.y,A.z)}setFromCartesianCoords(A,I,g){return this.radius=Math.sqrt(A*A+I*I+g*g),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,g),this.phi=Math.acos(bI(I/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pr extends Io{constructor(A=10,I=10,g=4473924,C=8947848){g=new gI(g),C=new gI(C);const Q=I/2,E=A/I,i=A/2,o=[],t=[];for(let D=0,s=0,G=-i;D<=I;D++,G+=E){o.push(-i,0,G,i,0,G),o.push(G,0,-i,G,0,i);const h=D===Q?g:C;h.toArray(t,s),s+=3,h.toArray(t,s),s+=3,h.toArray(t,s),s+=3,h.toArray(t,s),s+=3}const e=new Eg;e.setAttribute("position",new dI(o,3)),e.setAttribute("color",new dI(t,3));const a=new SE({vertexColors:!0,toneMapped:!1});super(e,a),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yr extends Io{constructor(A=1){const I=[0,0,0,A,0,0,0,0,0,0,A,0,0,0,0,0,0,A],g=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],C=new Eg;C.setAttribute("position",new dI(I,3)),C.setAttribute("color",new dI(g,3));const Q=new SE({vertexColors:!0,toneMapped:!1});super(C,Q),this.type="AxesHelper"}setColors(A,I,g){const C=new gI,Q=this.geometry.attributes.color.array;return C.set(A),C.toArray(Q,0),C.toArray(Q,3),C.set(I),C.toArray(Q,6),C.toArray(Q,9),C.set(g),C.toArray(Q,12),C.toArray(Q,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pi);const QB=[];function Ya(B,A){return{subscribe:lI(B,A).subscribe}}function lI(B,A=XI){let I;const g=new Set;function C(i){if(hI(B,i)&&(B=i,I)){const o=!QB.length;for(const t of g)t[1](),QB.push(t,B);if(o){for(let t=0;t<QB.length;t+=2)QB[t][0](QB[t+1]);QB.length=0}}}function Q(i){C(i(B))}function E(i,o=XI){const t=[i,o];return g.add(t),g.size===1&&(I=A(C)||XI),i(B),()=>{g.delete(t),g.size===0&&(I(),I=null)}}return{set:C,update:Q,subscribe:E}}function IE(B,A,I){const g=!Array.isArray(B),C=g?[B]:B,Q=A.length<2;return Ya(I,E=>{let i=!1;const o=[];let t=0,e=XI;const a=()=>{if(t)return;e();const s=A(g?o[0]:o,E);Q?E(s):e=sE(s)?s:XI},D=C.map((s,G)=>Zi(s,h=>{o[G]=h,t&=~(1<<G),i&&a()},()=>{t|=1<<G}));return i=!0,a(),function(){fC(D),e()}})}const Lr={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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

