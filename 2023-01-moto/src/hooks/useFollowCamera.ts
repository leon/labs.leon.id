import { useFrame } from '@threlte/core'
import type { RigidBody } from '@dimforge/rapier3d-compat'
import { Camera, Vector3 } from 'three'

export function useFollowCamera(camera: Camera, rigidBody: RigidBody) {
	const cameraVec = new Vector3()
	const lookatVec = new Vector3()
	const lookatOffset = new Vector3(4, 0, 0)
	const cameraOffset = new Vector3(-1, 3, 24)

	useFrame((ctx, delta) => {
		lookatVec.copy(rigidBody.translation() as Vector3).add(lookatOffset)
		cameraVec.lerp(lookatVec, delta * 8)
		camera.position.lerp(cameraVec.clone().add(cameraOffset), delta * 10)
		camera.lookAt(cameraVec)
		camera.matrixWorldNeedsUpdate = true
	})
}
