import './style.css'

import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { Engine } from '@babylonjs/core/Engines/engine'
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'
import { ImageProcessingConfiguration } from '@babylonjs/core/Materials/imageProcessingConfiguration'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Scene } from '@babylonjs/core/scene'

import '@babylonjs/loaders/glTF/2.0' // needed for gltf 2
import '@babylonjs/core/Rendering/edgesRenderer' // needed for edges renderer
import '@babylonjs/core/Materials/Textures/Loaders/envTextureLoader' // needed for environment texture
import '@babylonjs/core/Misc/dds' // needed for environment texture
// import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent" // shadows

import { GroundSkyboxMaterial } from './ground-skybox'
import { CubeTexture } from '@babylonjs/core/Materials/Textures/cubeTexture'
import { AbstractMesh, CreateIcoSphere, Mesh } from '@babylonjs/core/Meshes'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'

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

const envTexture = CubeTexture.CreateFromPrefilteredData(`${import.meta.env.BASE_URL}environments/quarry_02_2k.env`, scene)
scene.environmentTexture = envTexture
const skyboxTexture = envTexture.clone()
skyboxTexture.coordinatesMode = Texture.SKYBOX_MODE

// const skyboxTexture = new Texture(`${import.meta.env.BASE_URL}environments/quarry_02_2k.jpg`, scene)
// skyboxTexture.wrapU = Texture.CLAMP_ADDRESSMODE
// skyboxTexture.wrapV = Texture.CLAMP_ADDRESSMODE
// skyboxTexture.coordinatesMode = Texture.EQUIRECTANGULAR_MODE

const skyboxMaterial = new GroundSkyboxMaterial(
  'skybox',
  {
    map: skyboxTexture,
    height: 20,
    radius: 400,
  },
  scene,
)
const icoSphere = CreateIcoSphere('skybox', {
  radius: 1,
  subdivisions: 16,
  sideOrientation: Mesh.BACKSIDE,
  updatable: false,
})
icoSphere.material = skyboxMaterial
icoSphere.scaling.setAll(200)
icoSphere.receiveShadows = true

// Camera
const startAlpha = (Math.PI / 4) * 3 // rotate so we see the cube
const startBeta = Math.PI / 3 // look from above
const camera = new ArcRotateCamera('arcRotateCamera', startAlpha, startBeta, 10, Vector3.Zero(), scene)
camera.lowerRadiusLimit = 10
camera.allowUpsideDown = false
scene.switchActiveCamera(camera)

// Load GLTF Model
const container = await SceneLoader.LoadAssetContainerAsync(`${import.meta.env.BASE_URL}models/`, 'truck.glb', scene)
const rootMesh = container.meshes.find(node => node.id === '__root__') as AbstractMesh
container.addAllToScene()

// Calculate world size
const worldExtent = scene.getWorldExtends((mesh) => mesh !== icoSphere)
const worldSize = worldExtent.max.subtract(worldExtent.min)
const worldCenter = worldExtent.max.add(worldExtent.min).scale(0.5)

// position camera at center
camera.setTarget(worldCenter)
camera.radius = worldSize.length() * 1.5


// Start Render Loop
engine.runRenderLoop(() => scene.render())
