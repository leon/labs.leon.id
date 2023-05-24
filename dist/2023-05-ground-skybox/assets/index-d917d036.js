import{S as v,E as h,a as g,I as P,C as w,T as C,b,M as y,A as E,V as x,c as I}from"./babylon-270f63ad.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class _ extends v{constructor(n,r,c){const e=r.map.isCube,t=`
      precision highp float;

      attribute vec3 position;

      uniform mat4 world;
      uniform mat4 projection;
      uniform mat4 worldView;
      uniform mat4 worldViewProjection;

      varying vec3 vWorldPosition;

      void main() {
        vec4 worldPosition = world * vec4(position, 1.0);
				vWorldPosition = worldPosition.xyz;

				gl_Position = projection * worldView * vec4(position, 1.0);
      }
    `,s=`
      ${e?"#define ENVMAP_TYPE_CUBE true":""}

      precision highp float;

      #define RECIPROCAL_PI 0.3183098861837907
      #define RECIPROCAL_PI2 0.15915494309189535

      varying vec3 vWorldPosition;

      uniform vec3 cameraPosition;
      uniform float radius;
      uniform float height;

      #ifdef ENVMAP_TYPE_CUBE
        uniform samplerCube map;
      #else
        uniform sampler2D map;
      #endif

      // From: https://www.shadertoy.com/view/4tsBD7
      float diskIntersectWithBackFaceCulling(vec3 ro, vec3 rd, vec3 c, vec3 n, float r) {
        float d = dot(rd, n);
        if(d > 0.0) { return 1e6; }
        vec3 o = ro - c;
        float t = -dot(n, o) / d;
        vec3 q = o + rd * t;
        return (dot(q, q) < r * r) ? t : 1e6;
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
          vec3 h = vec3(0.0, -height, 0.0);
          float intersection2 = diskIntersectWithBackFaceCulling(camPos, p, h, vec3(0.0, 1.0, 0.0), radius);
          p = (camPos + min(intersection, intersection2) * p) / radius;
        } else {
          p = vec3(0.0, 1.0, 0.0);
        }

        return p;
      }

      vec2 equirectUv(in vec3 dir) {
        // dir is assumed to be unit length
        float u = atan(dir.z, dir.x) * RECIPROCAL_PI2 + 0.5;
        float v = asin(clamp(dir.y, - 1.0, 1.0)) * RECIPROCAL_PI + 0.5;
        return vec2(u, v);
      }

      void main() {
        vec3 projectedWorldPosition = project();

        #ifdef ENVMAP_TYPE_CUBE
          vec3 outcolor = textureCube(map, projectedWorldPosition).rgb;
          // vec3 outcolor = projectedWorldPosition;
        #else
          vec3 direction = normalize(projectedWorldPosition);
          vec2 uv = equirectUv(direction);
          vec3 outcolor = texture2D(map, uv).rgb;
        #endif

        gl_FragColor = vec4(outcolor, 1.0);
      }
    `;super(n,c,{vertexSource:t,fragmentSource:s},{attributes:["position"],uniforms:["world","projection","worldView","cameraPosition","map","height","radius"]}),this.setTexture("map",r.map),this.setFloat("height",r.height??15),this.setFloat("radius",r.radius??100)}}const A=document.getElementById("app"),u=new h(A,!0,{},!0),M=()=>u.resize();window.addEventListener("resize",M,{passive:!0});const o=new g(u);o.imageProcessingConfiguration.toneMappingEnabled=!0;o.imageProcessingConfiguration.toneMappingType=P.TONEMAPPING_ACES;const m=w.CreateFromPrefilteredData("/2023-05-ground-skybox/environments/quarry_02_2k.env",o);o.environmentTexture=m;const f=m.clone();f.coordinatesMode=C.SKYBOX_MODE;const S=new _("skybox",{map:f,height:20,radius:400},o),l=b("skybox",{radius:1,subdivisions:16,sideOrientation:y.BACKSIDE,updatable:!1});l.material=S;l.scaling.setAll(200);l.receiveShadows=!0;const T=Math.PI/4*3,L=Math.PI/3,a=new E("arcRotateCamera",T,L,10,x.Zero(),o);a.lowerRadiusLimit=10;a.allowUpsideDown=!1;o.switchActiveCamera(a);const p=await I.LoadAssetContainerAsync("/2023-05-ground-skybox/models/","truck.glb",o);p.meshes.find(i=>i.id==="__root__");p.addAllToScene();const d=o.getWorldExtends(i=>i!==l),O=d.max.subtract(d.min),R=d.max.add(d.min).scale(.5);a.setTarget(R);a.radius=O.length()*1.5;u.runRenderLoop(()=>o.render());
