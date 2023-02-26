<script lang="ts">
	import { T, Three, useFrame } from '@threlte/core'
	import { useGltf } from '@threlte/extras'
	import {
		AutoColliders,
		Collider,
		RigidBody,
		useRapier,
	} from '@threlte/rapier'
	import type { RigidBody as RapierRigidBody } from '@dimforge/rapier3d-compat'
	import { writable } from 'svelte/store'
	import { clamp, degToRad } from 'three/src/math/MathUtils'
	import { useControls } from './hooks/useControls'
	import { Euler, Mesh, Quaternion } from 'three'

	// make physics more stable, by iterating more times before doing a median value
	const { world } = useRapier()
	// world.timestep = 1000 / 120
	world.maxStabilizationIterations = 100
	world.maxVelocityFrictionIterations = 800
	world.maxVelocityIterations = 400

	const { gltf } = useGltf(`${import.meta.env.BASE_URL}models/maze.glb`, {
		useDraco: true,
	})

	// If ball is dropped as same time as track,
	// it will fall through each time, so we wait a couple of ms
	const pauseBall = writable(true)
	$: if ($gltf) {
		const mazeModel = $gltf.nodes['maze'] as Mesh
		mazeModel.receiveShadow = true
		// shadows look like shit
		// for (const mesh of mazeModel.children) {
		// 	mesh.receiveShadow = true
		// 	mesh.castShadow = true
		// }

		setTimeout(() => {
			reset()
			pauseBall.set(false)
		}, 200)
	}

	let trackRigidBody: RapierRigidBody
	let ballRigidBody: RapierRigidBody

	// Controls
	const { controlAxis, controlActions } = useControls()
	let leanZ = 0
	let leanX = 0

	let euler = new Euler()
	let quat = new Quaternion()
	useFrame(() => {
		if (!trackRigidBody) return

		if ($controlAxis.x !== 0) {
			leanZ -= $controlAxis.x * 0.15
			leanZ = clamp(leanZ, -10, 10)
		}

		if ($controlAxis.y !== 0) {
			leanX -= $controlAxis.y * 0.15
			leanX = clamp(leanX, -10, 10)
		}

		euler.set(degToRad(leanX), 0, degToRad(leanZ))
		quat.setFromEuler(euler)
		trackRigidBody.setNextKinematicRotation(quat)
	})

	const reset = () => {
		trackRigidBody?.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true)
		ballRigidBody?.resetForces(false)
		ballRigidBody?.resetTorques(false)
		ballRigidBody?.setTranslation({ x: 0.01, y: 0.05, z: -0.13 }, false)
		pauseBall.set(true)
	}

	const gameOver = () => {
		console.log('game over')
		reset()

		setTimeout(() => {
			pauseBall.set(false)
		}, 2000)
	}
</script>

{#if $gltf}
	<!-- Track -->
	<RigidBody
		bind:rigidBody={trackRigidBody}
		canSleep={false}
		type="kinematicPosition"
	>
		<AutoColliders shape="trimesh">
			<Three castShadow type={$gltf.scene} />
		</AutoColliders>

		<Collider
			shape="cuboid"
			sensor={true}
			args={[0.2, 0.02, 0.2]}
			position={{ y: -0.05 }}
			on:sensorenter={gameOver}
		/>
	</RigidBody>

	<!-- Ball -->
	<RigidBody
		bind:rigidBody={ballRigidBody}
		type={$pauseBall ? 'kinematicPosition' : 'dynamic'}
		linearDamping={0.2}
	>
		<Collider shape="ball" args={[0.007]} mass={0.5} restitution={0.02} />
		<T.Mesh castShadow>
			<T.SphereGeometry args={[0.007]} />
			<T.MeshStandardMaterial color="#555555" metalness={1} roughness={0} />
		</T.Mesh>
	</RigidBody>
{/if}
