<script lang="ts">
	import { T, Three } from '@threlte/core'
	import { RigidBody, useRapier } from '@threlte/rapier'
	import { degToRad } from 'three/src/math/MathUtils'
	import { useRandomTrack } from '../hooks/useRandomTrack'

	const depth = 20
	const { geometry, collider } = useRandomTrack({
		depth,
	})
	const { world } = useRapier()
	let rigidBody
	$: if (rigidBody && collider) {
		collider.setDensity(2000) // 2000 kg/m^3 according to chat gpt
		collider.setFriction(0.3)
		collider.setRestitution(0.05)
		world.createCollider(collider, rigidBody)
	}
</script>

<RigidBody bind:rigidBody type="fixed" position={{ z: -(depth / 2) }}>
	<T.Mesh receiveShadow>
		<Three type={geometry} />
		<T.MeshStandardMaterial
			args={[
				{
					color: 0xc2b280,
					wireframe: false,
				},
			]}
		/>
	</T.Mesh>
</RigidBody>

<!-- Ground -->
<T.Mesh position.x={500} rotation.x={degToRad(-90)}>
	<T.PlaneGeometry args={[1500, 1500]} />
	<T.MeshStandardMaterial args={[{ color: 0xc2b280 }]} />
</T.Mesh>
