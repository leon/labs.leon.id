<script lang="ts">
	import { Canvas, T } from '@threlte/core'
	import { World } from '@threlte/rapier'
	import Game from './Game.svelte'
</script>

<div class="min-h-[100dvh]">
	<Canvas>
		<World>
			<T.DirectionalLight castShadow position={[3, 10, 10]} />
			<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
			<T.AmbientLight intensity={0.2} />

			<Game />
		</World>
	</Canvas>
</div>
