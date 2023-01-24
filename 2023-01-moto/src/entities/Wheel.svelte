<script>
	import { MotorModel } from '@dimforge/rapier3d-compat'
	import { T } from '@threlte/core'
	import { Collider, RigidBody, useRevoluteJoint } from '@threlte/rapier'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	import { useControls } from '../hooks/useControls'

	export let parentRigidBody = undefined
	export let position = undefined
	export let isDriven = false
	export let radius = 0.3

	let collider

	const { controlAxis, controlActions } = useControls()

	const { rigidBodyA, rigidBodyB, joint } = useRevoluteJoint(
		position,
		{},
		{ z: 1 }
	)
	$: if (parentRigidBody) rigidBodyA.set(parentRigidBody)
	$: $joint?.configureMotorModel(MotorModel.AccelerationBased)
	$: $joint?.configureMotorModel(
		isDriven && $controlActions.break
			? MotorModel.ForceBased
			: MotorModel.AccelerationBased
	)
	$: if (isDriven)
		$joint?.configureMotorVelocity(
			$controlActions.break ? 0 : $controlAxis.y * -100,
			10
		)
	$: $joint?.setContactsEnabled(false)
</script>

<RigidBody
	bind:rigidBody={$rigidBodyB}
	{position}
	canSleep={false}
	lockTranslations={true}
>
	<Collider
		shape={'ball'}
		args={[radius]}
		rotation={{ x: 90 * DEG2RAD }}
		mass={50}
		friction={1.1}
		restitution={0.05}
	>
		<T.Mesh castShadow>
			<T.CylinderGeometry args={[radius, radius, 0.2, 24]} />
			<T.MeshStandardMaterial args={[{ color: 0x000000 }]} />
		</T.Mesh>
	</Collider>
</RigidBody>
