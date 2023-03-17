import { Effect } from '@babylonjs/core/Materials/effect'
import { ShaderMaterial } from '@babylonjs/core/Materials/shaderMaterial'
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Scene } from '@babylonjs/core/scene'

Effect.ShadersStore['stripedVertexShader'] = `
precision highp float;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 world;
uniform mat4 worldView;
uniform mat4 worldViewProjection;

varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec2 vUV;

void main() {
    gl_Position = worldViewProjection * vec4(position, 1.0);
    vPositionW = vec3(worldView * vec4(position, 1.0));
    vNormalW = normalize(vec3(world * vec4(normal, 0.0)));
    vUV = uv;
}
`

Effect.ShadersStore['stripedFragmentShader'] = `
precision highp float;

varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec2 vUV;

uniform mat4 world;
uniform vec4 bgColor;
uniform vec4 stripeColor;
uniform float stripeWidth;
uniform float stripeAngle;
uniform bool fixedWidth;

void main() {
  // Calculate stripe width in world space
  vec4 worldPos = vec4(vPositionW, 1.0);

  float worldStripeWidth = length(mat3(world) * vec3(stripeWidth / 100.0, 0.0, 0.0));
  float calculatedStripeWidth = worldStripeWidth;
  if (fixedWidth) {
    // calculate the width of the stripes according to world space
    calculatedStripeWidth = (worldStripeWidth / gl_FragCoord.w / 10.0);
  }

  // Calculate stripe pattern in world space
  float stripeX = dot(vPositionW, normalize(vec3(cos(stripeAngle), sin(stripeAngle), 0.0)));
  vec2 stripeUV = vec2(stripeX / calculatedStripeWidth, vUV.y);

  // either bg or stripe color
  gl_FragColor = bgColor;
  if (mod(stripeUV.x, 2.0) > 1.0) {
    gl_FragColor = stripeColor;
  }
}

`

// void main() {
//   vec2 stripeUV = vec2(vUV.x * cos(stripeAngle) + vUV.y * sin(stripeAngle), vUV.y * cos(stripeAngle) - vUV.x * sin(stripeAngle));
//   gl_FragColor = bgColor;
//   if (mod(stripeUV.x / (stripeWidth / gl_FragCoord.w * 2.0), 2.0) > 1.0) {
//     gl_FragColor = stripeColor;
//   }
// }

// void main() {
//   // Calculate stripe width in world space
//   vec4 worldPos = vec4(vPositionW, 1.0);
//   float worldStripeWidth = length(mat3(world) * vec3(stripeWidth, 0.0, 0.0));
//   // Calculate stripe pattern in world space
//   vec2 stripeUV = vec2(dot(vPositionW, normalize(vec3(cos(stripeAngle), sin(stripeAngle), 0.0))) / worldStripeWidth, vUV.y);
//   gl_FragColor = bgColor;
//   if (mod(stripeUV.x, 2.0) > 1.0) {
//     gl_FragColor = stripeColor;
//   }
// }

export interface StripedMaterialOptions {
  bgColor?: Color4
  stripeColor?: Color4
  stripeWidth?: number
  stripeAngle?: number
  fixedWidth?: boolean
}

export class StripedMaterial extends ShaderMaterial {
  constructor(name: string, scene: Scene, options: StripedMaterialOptions) {
    options = {
      bgColor: Color3.Red().toColor4(0.5),
      stripeColor: Color3.Red().toColor4(1),
      stripeWidth: 10,
      stripeAngle: 0.7854, // 45° in radians
      fixedWidth: false,
      ...options,
    }
    super(
      name,
      scene,
      {
        vertex: 'striped',
        fragment: 'striped',
      },
      {
        attributes: ['position', 'normal', 'uv'],
        uniforms: [
          'world',
          'worldView',
          'worldViewProjection',
          'view',
          'projection',
          'bgColor',
          'stripeColor',
          'stripeWidth',
          'stripeAngle',
          'fixedWidth',
        ],
      },
    )

    this.setColor4('bgColor', options.bgColor!)
    this.setColor4('stripeColor', options.stripeColor!)
    this.setFloat('stripeWidth', options.stripeWidth!)
    this.setFloat('stripeAngle', options.stripeAngle!)
    this.setFloat('fixedWidth', options.fixedWidth ? 1.0 : 0.0)

    // force alpha blending
    this.alpha = 0.9999
  }
}
