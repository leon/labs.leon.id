<script lang="ts">
	import { T, Three } from '@threlte/core'
	import { RigidBody, useRapier } from '@threlte/rapier'
	import { useRandomTrack } from '../hooks/useRandomTrack'

	const depth = 20
	const { geometry, collider } = useRandomTrack({
		depth,
	})
	const { world } = useRapier()
	let rigidBody
	$: if (rigidBody && collider) {
		collider.setDensity(2000) // 2000 kg/m^3 according to chat gpt
		collider.setFriction(0.6)
		collider.setRestitution(0.01)
		world.createCollider(collider, rigidBody)
	}
</script>

<RigidBody
	bind:rigidBody
	type="fixed"
	position={{ x: -5, y: -1, z: -(depth / 2) }}
>
	<T.Mesh receiveShadow>
		<Three type={geometry} />
		<T.MeshStandardMaterial
			args={[
				{
					color: 0xaaee88,
					wireframe: false,
				},
			]}
		/>
	</T.Mesh>
</RigidBody>
