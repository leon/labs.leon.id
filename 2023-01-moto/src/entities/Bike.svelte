<script lang="ts">
	import { T, useFrame, useThrelte } from '@threlte/core'
	import { Vector3 } from 'three'
	import {
		MotorModel,
		Vector3 as RapierVector3,
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
	import { speed } from '../state/bike.state'
	import { MeshStandardMaterial } from 'three'

	export let followCamera = false

	const wheelMaterial = new MeshStandardMaterial({ color: 0x000000 })

	const { camera } = useThrelte()
	const { controlAxis, controlActions } = useControls()

	let chassiRB: RapierRigidBody
	let backAxelRB: RapierRigidBody
	let frontAxelRB: RapierRigidBody
	let backWheelRB: RapierRigidBody
	let frontWheelRB: RapierRigidBody

	// chassi
	const CHASSI_MASS = 70
	const CHASSI_DAMP = 2
	const ACCELERATION_FORCE = 300
	const ROTATION_FORCE = 1.2

	// back suspension
	const BACK_SUSP_MASS = 45
	const BACK_SUSP_FRICTION = 1
	const BACK_SUSP_OFFSET = -1
	const BACK_SUSP_OFFSET_ROT = -0.3
	const BACK_SUSP_RANGE: [number, number] = [0.2, 0.5]
	const BACK_SUSP_MOTOR = [BACK_SUSP_RANGE[1], 100, 80, 100] as const
	const BACK_SUSP_WHEEL_RADIUS = 0.3
	const BACK_SUSP_ANGULAR_DAMPING = 0

	// front suspension
	const FRONT_SUSP_MASS = 30
	const FRONT_SUSP_FRICTION = 0.1
	const FRONT_SUSP_OFFSET = 0.6
	const FRONT_SUSP_RAKE = 0.2
	const FRONT_SUSP_RANGE: [number, number] = [0.3, 0.9]
	const FRONT_SUSP_MOTOR = [FRONT_SUSP_RANGE[1], 100, 80, 100] as const
	const FRONT_SUSP_WHEEL_RADIUS = 0.3
	const FRONT_SUSP_ANGULAR_DAMPING = 0

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
	$: $backWheelJoint?.configureMotorVelocity(
		$controlAxis.y * -ACCELERATION_FORCE,
		50
	)

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
	const boostVector = new RapierVector3(10, 30, 0)
	const rotationVector = new RapierVector3(0, 0, 0)
	useFrame(() => {
		if ($controlAxis.x !== 0) {
			rotationVector.z = $controlAxis.x * -ROTATION_FORCE * 10
			chassiRB.applyTorqueImpulse(rotationVector, true)
		}
		if ($controlActions.boost) {
			chassiRB.applyImpulse(boostVector, true)
		}
	})

	// the faster we go the less friction we want
	const velocity = new Vector3()
	useFrame(() => {
		if (!chassiRB) {
			return
		}
		const s = chassiRB.linvel()
		velocity.set(s.x, s.y, s.z)
		speed.set(velocity.length())
	})

	// Camera
	$: if (followCamera && chassiRB) useFollowCamera($camera, chassiRB)
</script>

<RigidBody
	position={{ x: 3, y: 7 }}
	bind:rigidBody={chassiRB}
	canSleep={false}
	enabledTranslations={[true, true, false]}
	enabledRotations={[false, false, true]}
	angularDamping={CHASSI_DAMP}
>
	<Collider
		position={{ x: -0.2, y: -0.2 }}
		rotation={{ z: -10 * DEG2RAD }}
		shape="cuboid"
		args={[0.5, 0.4, 0.2]}
		mass={CHASSI_MASS}
	/>
	<T.Mesh castShadow>
		<T.BoxGeometry args={[0.7, 0.6, 0.3]} />
		<T.MeshStandardMaterial />
	</T.Mesh>
</RigidBody>

<!-- Axels -->
<RigidBody bind:rigidBody={backAxelRB} canSleep={false}>
	<Collider
		shape={'cuboid'}
		args={[0.03, 0.03, 0.3]}
		mass={BACK_SUSP_MASS / 2}
	/>
</RigidBody>
<RigidBody bind:rigidBody={frontAxelRB} canSleep={false}>
	<Collider
		shape={'cuboid'}
		args={[0.03, 0.03, 0.3]}
		mass={FRONT_SUSP_MASS / 2}
	/>
</RigidBody>

<!-- Wheels -->
<RigidBody
	bind:rigidBody={backWheelRB}
	canSleep={false}
	lockTranslations={true}
	angularDamping={BACK_SUSP_ANGULAR_DAMPING}
>
	<Collider
		shape="ball"
		args={[BACK_SUSP_WHEEL_RADIUS]}
		mass={BACK_SUSP_MASS / 2}
		friction={BACK_SUSP_FRICTION}
	/>
	<T.Mesh rotation={{ x: 90 * DEG2RAD }} castShadow>
		<T.CylinderGeometry
			args={[BACK_SUSP_WHEEL_RADIUS, BACK_SUSP_WHEEL_RADIUS, 0.2, 24]}
		/>
		<T.MeshStandardMaterial args={[{ color: 0x000000 }]} />
	</T.Mesh>
</RigidBody>

<RigidBody
	bind:rigidBody={frontWheelRB}
	canSleep={false}
	lockTranslations={true}
	angularDamping={FRONT_SUSP_ANGULAR_DAMPING}
>
	<Collider
		shape="ball"
		args={[FRONT_SUSP_WHEEL_RADIUS]}
		mass={FRONT_SUSP_MASS / 2}
		friction={FRONT_SUSP_FRICTION}
	/>
	<T.Mesh rotation={{ x: 90 * DEG2RAD }} {wheelMaterial} castShadow>
		<T.TorusGeometry
			args={[FRONT_SUSP_WHEEL_RADIUS, FRONT_SUSP_WHEEL_RADIUS, 0.2, 24]}
		/>
	</T.Mesh>
</RigidBody>
