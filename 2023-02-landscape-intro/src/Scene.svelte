<script>
	import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
	import { Fog } from '@threlte/core'
	import { spring } from 'svelte/motion'
	import { degToRad } from 'three/src/math/MathUtils'
	import RollingScenery from './RollingScenery.svelte'

	const scale = spring(1)
</script>

<div class="min-h-[100dvh]">
	<Canvas>
		<T.PerspectiveCamera makeDefault position={[0, 10, 100]} fov={24}>
			<OrbitControls target={{ y: 2 }} />
			<!-- <OrbitControls
				minPolarAngle={degToRad(70)}
				maxPolarAngle={degToRad(90)}
				minAzimuthAngle={degToRad(-15)}
				maxAzimuthAngle={degToRad(15)}
				enableZoom={false}
				target={{ y: 0.5 }}
			/> -->
		</T.PerspectiveCamera>

		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<Fog color={'#dddddd'} />

		<RollingScenery />

		<!-- Cube -->
		<!-- <T.Group scale={$scale}>
			<T.Mesh position.y={0.5} castShadow let:ref>
				<InteractiveObject
					object={ref}
					interactive
					on:pointerenter={() => ($scale = 2)}
					on:pointerleave={() => ($scale = 1)}
				/>

				<T.BoxGeometry />
				<T.MeshStandardMaterial color="#333333" />
			</T.Mesh>
		</T.Group>
		<T.Mesh receiveShadow rotation.x={degToRad(-90)}>
			<T.CircleGeometry args={[3, 72]} />
			<T.MeshStandardMaterial color="white" />
		</T.Mesh>
		 -->
	</Canvas>
</div>
