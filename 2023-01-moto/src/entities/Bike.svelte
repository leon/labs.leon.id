<script lang="ts">
	import { T, useFrame, useThrelte } from '@threlte/core'
	import {
		MotorModel,
		Vector3,
		RigidBody as RapierRigidBody,
	} from '@dimforge/rapier3d-compat'
	import {
		Collider,
		RigidBody,
		usePrismaticJoint,
		useRevoluteJoint,
	} from '@threlte/rapier'
	import { useControls } from '../hooks/useControls'

	import { useFollowCamera } from '../hooks/useFollowCamera'
	import { DEG2RAD } from 'three/src/math/MathUtils'

	const { camera } = useThrelte()
	const { controlAxis, controlActions } = useControls()

	let chassiRB: RapierRigidBody
	let backAxelRB: RapierRigidBody
	let frontAxelRB: RapierRigidBody
	let backWheelRB: RapierRigidBody
	let frontWheelRB: RapierRigidBody

	// chassi
	const CHASSI_MASS = 50
	const CHASSI_DAMP = 0.8
	const ACCELERATION = 2200
	const ROTATION = 1.5

	// back suspension
	const BACK_SUSP_MASS = 50
	const BACK_SUSP_OFFSET = -1
	const BACK_SUSP_OFFSET_ROT = -0.3
	const BACK_SUSP_RANGE: [number, number] = [0.2, 0.5]
	const BACK_SUSP_MOTOR = [BACK_SUSP_RANGE[1], 100, 10, 300] as const
	const BACK_SUSP_WHEEL_RADIUS = 0.3

	// front suspension
	const FRONT_SUSP_MASS = 50
	const FRONT_SUSP_OFFSET = 0.6
	const FRONT_SUSP_WHEEL_RADIUS = 0.3
	const FRONT_SUSP_RAKE = 0.2
	const FRONT_SUSP_RANGE: [number, number] = [0.3, 0.9]
	const FRONT_SUSP_MOTOR = [FRONT_SUSP_RANGE[1], 200, 80, 220] as const

	// back axel
	const {
		joint: backAxelJoint,
		rigidBodyA: backAxelRB1,
		rigidBodyB: backAxelRB2,
	} = usePrismaticJoint(
		{ x: BACK_SUSP_OFFSET },
		{},
		{ x: BACK_SUSP_OFFSET_ROT, y: -1 },
		BACK_SUSP_RANGE
	)
	$: backAxelRB1.set(chassiRB)
	$: backAxelRB2.set(backAxelRB)
	$: $backAxelJoint?.setContactsEnabled(false)
	$: $backAxelJoint?.configureMotorModel(MotorModel.ForceBased)
	$: $backAxelJoint?.configureMotor(...BACK_SUSP_MOTOR)

	// front axel
	const {
		joint: frontAxelJoint,
		rigidBodyA: frontAxelRB1,
		rigidBodyB: frontAxelRB2,
	} = usePrismaticJoint(
		{ x: FRONT_SUSP_OFFSET },
		{},
		{ x: FRONT_SUSP_RAKE, y: -1 },
		FRONT_SUSP_RANGE
	)
	$: frontAxelRB1.set(chassiRB)
	$: frontAxelRB2.set(frontAxelRB)
	$: $frontAxelJoint?.setContactsEnabled(false)
	$: $frontAxelJoint?.configureMotorModel(MotorModel.ForceBased)
	$: $frontAxelJoint?.configureMotor(...FRONT_SUSP_MOTOR)

	// back wheel
	const {
		joint: backWheelJoint,
		rigidBodyA: backWheelRB1,
		rigidBodyB: backWheelRB2,
	} = useRevoluteJoint({}, {}, { z: 1 })
	$: backWheelRB1.set(backAxelRB)
	$: backWheelRB2.set(backWheelRB)
	$: $backWheelJoint?.setContactsEnabled(false)
	$: $backWheelJoint?.configureMotorModel(MotorModel.AccelerationBased)
	$: $backWheelJoint?.configureMotorVelocity($controlAxis.y * -ACCELERATION, 10)

	// front wheel
	const {
		joint: frontWheelJoint,
		rigidBodyA: frontWheelRB1,
		rigidBodyB: frontWheelRB2,
	} = useRevoluteJoint({}, {}, { z: 1 })
	$: frontWheelRB1.set(frontAxelRB)
	$: frontWheelRB2.set(frontWheelRB)
	$: $frontWheelJoint?.setContactsEnabled(false)

	// Rotate
	const boostVector = new Vector3(10, 30, 0)
	const rotationVector = new Vector3(0, 0, 0)
	useFrame(() => {
		if ($controlAxis.x !== 0) {
			rotationVector.z = $controlAxis.x * -ROTATION * 10
			chassiRB.applyTorqueImpulse(rotationVector, true)
		}
		if ($controlActions.boost) {
			chassiRB.applyImpulse(boostVector, true)
		}
	})

	// Camera
	$: if (chassiRB) useFollowCamera($camera, chassiRB)
</script>

<RigidBody
	position={{ x: 2, y: 5 }}
	bind:rigidBody={chassiRB}
	canSleep={false}
	enabledTranslations={[true, true, false]}
	enabledRotations={[false, false, true]}
	angularDamping={CHASSI_DAMP}
>
	<Collider shape="cuboid" args={[0.7, 0.3, 0.3]} mass={CHASSI_MASS}>
		<T.Mesh castShadow>
			<T.BoxGeometry args={[0.7, 0.3, 0.3]} />
			<T.MeshStandardMaterial />
		</T.Mesh>
	</Collider>
</RigidBody>

<!-- Axels -->
<RigidBody bind:rigidBody={backAxelRB} canSleep={false}>
	<Collider shape={'cuboid'} args={[0.1, 0.1, 0.3]} mass={BACK_SUSP_MASS / 2} />
</RigidBody>
<RigidBody bind:rigidBody={frontAxelRB} canSleep={false}>
	<Collider
		shape={'cuboid'}
		args={[0.1, 0.1, 0.3]}
		mass={FRONT_SUSP_MASS / 2}
	/>
</RigidBody>

<!-- Wheels -->
<RigidBody
	bind:rigidBody={backWheelRB}
	canSleep={false}
	lockTranslations={true}
	angularDamping={0.8}
>
	<Collider
		shape="ball"
		args={[BACK_SUSP_WHEEL_RADIUS]}
		mass={BACK_SUSP_MASS / 2}
		friction={0.6}
	>
		<T.Mesh rotation={{ x: 90 * DEG2RAD }} castShadow>
			<T.CylinderGeometry
				args={[BACK_SUSP_WHEEL_RADIUS, BACK_SUSP_WHEEL_RADIUS, 0.2, 24]}
			/>
			<T.MeshStandardMaterial args={[{ color: 0x000000 }]} />
		</T.Mesh>
	</Collider>
</RigidBody>
<RigidBody
	bind:rigidBody={frontWheelRB}
	canSleep={false}
	lockTranslations={true}
	angularDamping={0.5}
>
	<Collider
		shape="ball"
		args={[FRONT_SUSP_WHEEL_RADIUS]}
		mass={FRONT_SUSP_MASS / 2}
		friction={0.4}
	>
		<T.Mesh rotation={{ x: 90 * DEG2RAD }} castShadow>
			<T.CylinderGeometry
				args={[FRONT_SUSP_WHEEL_RADIUS, FRONT_SUSP_WHEEL_RADIUS, 0.2, 24]}
			/>
			<T.MeshStandardMaterial args={[{ color: 0x000000 }]} />
		</T.Mesh>
	</Collider>
</RigidBody>
