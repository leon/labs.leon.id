<script>
	import { T } from '@threlte/core'
	import { Debug, useRapier } from '@threlte/rapier'
	import Track from './entities/Track.svelte'
	import Bike from './entities/Bike.svelte'
	import { OrbitControls } from '@threlte/core'
	import { degToRad } from 'three/src/math/MathUtils'

	// set up physics to use more iterations for more stability
	const { world } = useRapier()
	world.maxStabilizationIterations = 100
	world.maxVelocityFrictionIterations = 800
	world.maxVelocityIterations = 400
	// $: console.log(world)
</script>

<T.PerspectiveCamera makeDefault position={[0, 20, 30]} fov={50}>
	<OrbitControls maxPolarAngle={degToRad(80)} target={{ x: 0, y: 0, z: 0 }} />
</T.PerspectiveCamera>

<Track />

<Bike followCamera />

<!-- <T.GridHelper args={[500, 50]} /> -->
<!-- <T.AxesHelper args={[2]} /> -->

<Debug depthTest={false} depthWrite={false} />
