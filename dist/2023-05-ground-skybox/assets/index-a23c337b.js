import{S as p,E as v,a as h,I as g,C as P,T as w,b,M as y,A as C,V as E,c as x}from"./babylon-0f776a74.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class A extends p{constructor(i,r,s){const e=r.map.isCube,t=`
      precision highp float;

      attribute vec3 position;

      uniform mat4 world;
      uniform mat4 worldView;
      uniform mat4 worldViewProjection;

      varying vec3 vWorldPosition;

      void main() {
        vec4 worldPosition = (world * vec4(position, 1.0));
				vWorldPosition = worldPosition.xyz;
        gl_Position = worldViewProjection * vec4(position, 1.0);
      }
    `,n=`
      ${e?"#define ENVMAP_TYPE_CUBE true":""}

      precision highp float;

      varying vec3 vWorldPosition;

      uniform vec3 cameraPosition;
      uniform float radius;
      uniform float height;
      uniform float angle;

      #ifdef ENVMAP_TYPE_CUBE
        uniform samplerCube map;
      #else
        uniform sampler2D map;
      #endif

      // From: https://www.shadertoy.com/view/4tsBD7
      float diskIntersectWithBackFaceCulling(vec3 ro, vec3 rd, vec3 c, vec3 n, float r) {
        float d = dot (rd, n);
        if(d > 0.0) { return 1e6; }
        vec3 o = ro - c;
        float t = - dot(n, o) / d;
        vec3 q = o + rd * t;
        return (dot(q, q) < r * r ) ? t : 1e6;
      }

      // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
      float sphereIntersect(vec3 ro, vec3 rd, vec3 ce, float ra) {
        vec3 oc = ro - ce;
        float b = dot(oc, rd);
        float c = dot(oc, oc) - ra * ra;
        float h = b * b - c;

        if(h < 0.0) { return -1.0; }

        h = sqrt(h);

        return - b + h;
      }

      vec3 project() {
        vec3 p = normalize(vWorldPosition);
        vec3 camPos = cameraPosition;
        camPos.y -= height;

        float intersection = sphereIntersect(camPos, p, vec3(0.0), radius);
        if(intersection > 0.0) {
          vec3 h = vec3(0.0, - height, 0.0);
          float intersection2 = diskIntersectWithBackFaceCulling(camPos, p, h, vec3(0.0, 1.0, 0.0), radius);
          p = (camPos + min(intersection, intersection2) * p) / radius;
        } else {
          p = vec3(0.0, 1.0, 0.0);
        }

        return p;
      }

      void main() {
        vec3 projectedWorldPosition = project();

        #ifdef ENVMAP_TYPE_CUBE
          vec3 outcolor = textureCube(map, projectedWorldPosition).rgb;
        #else
          vec3 direction = normalize(projectedWorldPosition);
          vec2 uv = equirectUv(direction);
          vec3 outcolor = texture2D(map, uv).rgb;
        #endif

        gl_FragColor = vec4(outcolor, 1.0);
      }
    `;super(i,s,{vertexSource:t,fragmentSource:n},{attributes:["position"],uniforms:["world","worldView","worldViewProjection","map","height","radius"]}),this.setTexture("map",r.map),this.setFloat("height",r.height??15),this.setFloat("radius",r.radius??100)}}const M=document.getElementById("app"),d=new v(M,!0,{},!0),T=()=>d.resize();window.addEventListener("resize",T,{passive:!0});const o=new h(d);o.imageProcessingConfiguration.toneMappingEnabled=!0;o.imageProcessingConfiguration.toneMappingType=g.TONEMAPPING_ACES;const m=P.CreateFromPrefilteredData("/2023-05-ground-skybox/environments/quarry_02_2k.env",o);o.environmentTexture=m;const f=m.clone();f.coordinatesMode=w.EQUIRECTANGULAR_MODE;const I=new A("skybox",{map:f,height:16,radius:100},o),l=b("skybox",{radius:1,subdivisions:16,sideOrientation:y.DOUBLESIDE,updatable:!1});l.material=I;l.scaling.setAll(100);const S=Math.PI/4*3,_=Math.PI/3,u=new C("arcRotateCamera",S,_,10,E.Zero(),o);o.switchActiveCamera(u);const L=await x.LoadAssetContainerAsync("/2023-05-ground-skybox/models/","truck.glb",o);L.addAllToScene();const a=o.getWorldExtends(c=>c!==l),O=a.max.subtract(a.min),V=a.max.add(a.min).scale(.5);u.setTarget(V);u.radius=O.length()*1.5;d.runRenderLoop(()=>o.render());
