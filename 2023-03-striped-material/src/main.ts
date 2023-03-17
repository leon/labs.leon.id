import './style.css'

import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { Engine } from '@babylonjs/core/Engines/engine'
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'
import { ImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Scene } from '@babylonjs/core/scene'
import { createEnvironment } from './helpers'

import '@babylonjs/loaders/glTF/2.0' // needed for gltf 2
import '@babylonjs/core/Rendering/edgesRenderer' // needed for edges renderer

import { StripedMaterial } from './striped.material'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { CreateBox } from '@babylonjs/core/Meshes/Builders/boxBuilder'
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData'
import { VertexBuffer } from '@babylonjs/core/Buffers/buffer'

// Engine
const canvas = document.getElementById('app') as HTMLCanvasElement
const engine = new Engine(canvas, true, {}, true)
const handleResize = () => engine.resize()
window.addEventListener('resize', handleResize, { passive: true })

// Scene
const scene = new Scene(engine)
scene.imageProcessingConfiguration.toneMappingEnabled = true
scene.imageProcessingConfiguration.toneMappingType = ImageProcessingConfiguration.TONEMAPPING_ACES

// Environment
const skyBox = createEnvironment(scene)

// Camera
const startAlpha = (Math.PI / 4) * 3 // rotate so we see the cube
const startBeta = Math.PI / 3 // look from above
const camera = new ArcRotateCamera('arcRotateCamera', startAlpha, startBeta, 10, Vector3.Zero(), scene)
scene.switchActiveCamera(camera)

// Load GLTF Model
const container = await SceneLoader.LoadAssetContainerAsync('/models/', 'babylon-cube.glb', scene)
container.addAllToScene()
const model1 = container.meshes[1]

// force normal creation
// const normals = model1.getVerticesData(VertexBuffer.NormalKind) ?? []
// console.log('normals', normals)
// if (normals.length === 0) {
//   const positions = model1.getVerticesData(VertexBuffer.PositionKind)
//   const indices = model1.getIndices()
//   VertexData.ComputeNormals(positions, indices, normals)
//   model1.setVerticesData(VertexBuffer.NormalKind, normals)
// }

const model2 = CreateBox('box', { size: 1 }, scene)
model2.position = new Vector3(2, 0, 0)

// Calculate world size
const worldExtent = scene.getWorldExtends()
const worldSize = worldExtent.max.subtract(worldExtent.min)
const worldCenter = worldExtent.max.add(worldExtent.min).scale(0.5)

// position camera at center
camera.setTarget(worldCenter)
camera.radius = worldSize.length() * 1.5

// New Material
const color = Color3.Red()

const mat = new StripedMaterial('striped', scene, {
  bgColor: color.toColor4(0.5),
  stripeColor: color.toColor4(1),
  stripeWidth: 0.01,
  stripeAngle: Math.PI / 4,
})
model1.material = mat
model1.enableEdgesRendering()
model1.edgesColor = color.toColor4(1)

model2.material = mat
model2.enableEdgesRendering()
model2.edgesColor = color.toColor4(1)

// Start Render Loop
engine.runRenderLoop(() => scene.render())
