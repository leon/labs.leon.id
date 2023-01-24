import { createEngine, createScene, createPBRSkybox, createArcRotateCamera, createUniversalCamera } from './runtime'
import '@babylonjs/loaders/glTF/2.0'
import '@babylonjs/core/Misc/dds'
import '@babylonjs/core/Materials/Textures/Loaders/envTextureLoader'

import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'
import { Quaternion, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector'
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader'

import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { UniversalCamera } from '@babylonjs/core/Cameras/universalCamera'
import { Scalar } from '@babylonjs/core/Maths/math.scalar'

import './style.css'

const canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement
const engine = createEngine(canvas)
const scene = createScene()

createPBRSkybox()
const arcCamera = createArcRotateCamera()
const uniCamera = createUniversalCamera()

function createLights() {
  const light = new HemisphericLight('light', Vector3.Zero(), scene)
  light.intensity = 0.3
}

async function loadBabylonCube() {
  await SceneLoader.ImportMeshAsync('', `${import.meta.env.BASE_URL}models/`, 'babylon-cube.glb', scene)
}

function updateUI(arcCamera: ArcRotateCamera, uniCamera: UniversalCamera) {
  const arcData = document.getElementById('arc-data')!
  const uniData = document.getElementById('uni-data')!
  arcData.innerHTML = `
    <h3>ArcRotateCamera</h3>
    <div>
      target: ${formatVector(arcCamera.target)}<br />
      position: ${formatVector(arcCamera.position)}<br />
      absoluteRotation: ${formatVector(arcCamera.absoluteRotation)}<br />
      absoluteRotation.toEulerAngles(): ${formatVector(arcCamera.absoluteRotation.toEulerAngles())}<br />
      Alpha Beta Radius: ${formatVector(
        new Vector3(Scalar.NormalizeRadians(arcCamera.alpha), Scalar.NormalizeRadians(arcCamera.beta), arcCamera.radius),
      )}
    </div>
  `
  uniData.innerHTML = `
    <h3>UniversalCamera</h3>
    <div>
      target: ${formatVector(uniCamera.target)}<br />
      position: ${formatVector(uniCamera.position)}<br />
      rotationQuaternion: ${formatVector(uniCamera.rotationQuaternion)}<br />
      rotation: ${formatVector(uniCamera.rotation)}<br />
      Alpha Beta Radius: ${convertRotationToAlphaBetaRadius(uniCamera.rotation)}
    <div>
  `
}

function convertRotationToAlphaBetaRadius(rotation: Vector3) {
  const alpha = Scalar.NormalizeRadians((rotation.y + Math.PI / 2) * -1)
  const beta = Scalar.NormalizeRadians(rotation.x * -1 + Math.PI / 2)
  const radius = rotation.z
  return formatVector(new Vector3(alpha, beta, radius))
}

function formatVector(vector: Vector3 | Vector4 | Quaternion) {
  if (!vector) {
    return 'null'
  }
  return vector
    .asArray()
    .map((v) => v.toFixed(2))
    .join(', ')
}

/**
 * Main function that is run on startup
 */
async function main() {
  createLights()
  await loadBabylonCube()

  updateUI(arcCamera, uniCamera)

  arcCamera.onViewMatrixChangedObservable.add(() => {
    uniCamera.position.copyFrom(arcCamera.position)
    uniCamera.setTarget(arcCamera.getTarget())

    updateUI(arcCamera, uniCamera)
  })

  // Start the scene
  engine.runRenderLoop(() => {
    scene.render()
  })
}

main().catch((error) => console.error(error))
