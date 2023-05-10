import { BaseTexture } from '@babylonjs/core/Materials'
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial'
import { Scene } from '@babylonjs/core/scene'

export interface GroundSkyboxMaterialOptions {
  map: BaseTexture
  height?: number
  radius?: number
}

/*
Conversion of https://threejs.org/examples/webgl_materials_envmaps_groundprojected.html
*/

/*
Babylon Uniforms
uniform mat4 world; // mesh global transforming state (move + rotate + scale)
uniform mat4 worldView; // global view part of mesh
uniform mat4 worldViewProjection; // global camera
uniform mat4 view; // mesh local view part
uniform mat4 projection; // local camera
uniform float time; // per each frame
uniform vec3 cameraPosition; // camera position in world space

Three Uniforms
uniform mat4 modelMatrix; // mesh global transforming state (move + rotate + scale) = object.matrixWorld
uniform mat4 modelViewMatrix; // global view part of mesh = camera.matrixWorldInverse * object.matrixWorld
uniform mat4 projectionMatrix; // global camera = camera.projectionMatrix
uniform mat4 viewMatrix; // mesh local view part = camera.matrixWorldInverse
uniform mat3 normalMatrix; // inverse transpose of modelViewMatrix
uniform vec3 cameraPosition; // camera position in world space
*/

export class GroundSkyboxMaterial extends ShaderMaterial {
  constructor(name: string, options: GroundSkyboxMaterialOptions, scene: Scene) {
    const isCubeTexture = options.map.isCube

    const vertexSource = `
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
    `

    const fragmentSource = `
      ${isCubeTexture ? '#define ENVMAP_TYPE_CUBE true' : ''}

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
        uniforms: ['world', 'worldView', 'worldViewProjection', 'map', 'height', 'radius'],
      },
    )

    this.setTexture('map', options.map)
    this.setFloat('height', options.height ?? 15)
    this.setFloat('radius', options.radius ?? 100)
  }
}
