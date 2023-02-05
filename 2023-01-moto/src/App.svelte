<script lang="ts">
	import { Canvas } from '@threlte/core'
	import { Environment } from '@threlte/extras'
	import { World } from '@threlte/rapier'
	import Game from './Game.svelte'
	import Stats from './ui/Stats.svelte'
</script>

<div class="min-h-[100dvh]">
	<Canvas
		rendererParameters={{
			powerPreference: 'high-performance',
			antialias: true,
		}}
	>
		<World>
			<!-- <T.DirectionalLight castShadow position={[3, 10, 10]} />
			<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
			<T.AmbientLight intensity={0.2} /> -->

			<Environment
				path={`${import.meta.env.BASE_URL}assets/`}
				files="quarry.hdr"
				isBackground={true}
			/>

			<Game />
			<!-- <Test /> -->
		</World>
	</Canvas>
</div>

<Stats />
