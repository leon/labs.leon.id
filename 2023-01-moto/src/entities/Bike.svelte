<script lang="ts">
	import { T, useFrame, useThrelte } from '@threlte/core'
	import { RigidBody, AutoColliders } from '@threlte/rapier'
	import {
		type RigidBody as RapierRigidBody,
		Vector3,
	} from '@dimforge/rapier3d-compat'
	import { useControls } from '../hooks/useControls'
	import { useFollowCamera } from '../hooks/useFollowCamera'
	import Wheel from './Wheel.svelte'

	const { camera } = useThrelte()
	const { controlAxis, controlActions } = useControls()

	let rigidBody: RapierRigidBody
	// $: if (rigidBody) {
	// 	console.log('bike', rigidBody.translation())
	// }
	$: if (rigidBody) useFollowCamera($camera, rigidBody)

	// Rotate
	const boostVector = new Vector3(50, 0, 0)
	const rotationVector = new Vector3(0, 0, 0)
	useFrame(() => {
		if ($controlAxis.x !== 0) {
			rotationVector.z = $controlAxis.x * -1 * 10
			rigidBody.applyTorqueImpulse(rotationVector, true)
		}
		if ($controlActions.boost) {
			rigidBody.applyImpulse(boostVector, true)
		}
	})
</script>

<RigidBody
	bind:rigidBody
	canSleep={false}
	enabledTranslations={[true, true, false]}
	enabledRotations={[false, false, true]}
	angularDamping={0.3}
>
	<AutoColliders shape={'cuboid'} mass={150} position={{ y: 0.3 }}>
		<T.Mesh castShadow>
			<T.BoxGeometry args={[1, 0.6, 0.5]} />
			<T.MeshStandardMaterial />
		</T.Mesh>
	</AutoColliders>
</RigidBody>

<!-- Back Wheel -->
<Wheel parentRigidBody={rigidBody} position={{ x: -1 }} isDriven={true} />

<!-- Front Wheel -->
<Wheel
	parentRigidBody={rigidBody}
	position={{ x: 1 }}
	isDriven={false}
	radius={0.35}
/>
