<script lang="ts">
	import { Canvas, T } from '@threlte/core'
	import { Environment } from '@threlte/extras'
	import { World } from '@threlte/rapier'
	import Game from './Game.svelte'
	import Stats from './ui/Stats.svelte'
</script>

<div class="min-h-[100dvh]">
	<Canvas>
		<World>
			<T.DirectionalLight castShadow position={[3, 10, 10]} />
			<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
			<T.AmbientLight intensity={0.2} />

			<Environment path="/assets/" files="quarry.hdr" />

			<Game />
		</World>
	</Canvas>
</div>

<Stats />
