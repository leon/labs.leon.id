import { BaseTexture } from '@babylonjs/core/Materials'
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial'
import { Scene } from '@babylonjs/core/scene'

export interface GroundSkyboxMaterialOptions {
  map: BaseTexture
  height?: number
  radius?: number
}

/*
Conversion of threejs example https://threejs.org/examples/webgl_materials_envmaps_groundprojected.html
which is a conversion of the react-three-fiber <Environment /> component, which uses the three-stdlib class
https://github.com/pmndrs/three-stdlib/blob/main/src/objects/GroundProjectedEnv.ts
*/

/*
Babylon Uniforms
uniform mat4 world; // This matrix represents the transformation applied to an object's vertices in the object's local coordinate space. It includes transformations such as translation, rotation, and scaling specific to the object itself. Applying the world matrix to a vertex position brings it from the object's local space to the world space.
uniform mat4 view; // The view matrix represents the transformation applied to the entire scene to simulate the camera's viewpoint. It includes translation and rotation to position the camera at a specific location and orient it towards the desired direction. Applying the view matrix to a vertex position brings it from world space to the camera/view space.
uniform mat4 projection; // The projection matrix is responsible for mapping the 3D scene onto a 2D plane (the screen). It applies perspective transformations, such as foreshortening and depth clipping, to create a realistic representation of the scene. Applying the projection matrix to a vertex position brings it from the camera/view space to the clip space.
uniform mat4 worldView; // world * view = The worldView matrix is the combination of the world matrix and the view matrix. It represents the transformation from the object's local space to the camera/view space. Applying the worldView matrix to a vertex position brings it directly from the object's local space to the camera/view space, bypassing the world space.
uniform mat4 worldViewProjection; world * view * projection = The worldViewProjection matrix is the combination of the world, view, and projection matrices. It represents the complete transformation from the object's local space to the clip space. Applying the worldViewProjection matrix to a vertex position brings it directly from the object's local space to the clip space, bypassing the intermediate world and camera/view spaces.
uniform float time; // per each frame
uniform vec3 cameraPosition; // camera position in world space

Three Uniforms
uniform mat4 modelMatrix; // world
uniform mat4 viewMatrix; // view
uniform mat4 projectionMatrix; // projection
uniform mat4 modelViewMatrix; // worldView
uniform mat3 normalMatrix; // normalMatrix in Three.js is similar to normalMatrix in Babylon.js. However, in Three.js, it's represented as a mat3 (a 3x3 matrix) instead of a mat4 (a 4x4 matrix). The normalMatrix is used to transform surface normals in the vertex shader to ensure correct lighting calculations.
uniform vec3 cameraPosition; // camera position in world space
*/

export class GroundSkyboxMaterial extends ShaderMaterial {
  constructor(name: string, options: GroundSkyboxMaterialOptions, scene: Scene) {
    const isCubeTexture = options.map.isCube

    const vertexSource = `
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
    `

    const fragmentSource = `
      ${isCubeTexture ? '#define ENVMAP_TYPE_CUBE true' : ''}

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
    `

    super(
      name,
      scene,
      {
        vertexSource,
        fragmentSource,
      },
      {
        attributes: ['position'],
        uniforms: ['world', 'projection', 'worldView', 'cameraPosition', 'map', 'height', 'radius'],
      },
    )

    this.setTexture('map', options.map)
    this.setFloat('height', options.height ?? 15)
    this.setFloat('radius', options.radius ?? 100)
  }
}
