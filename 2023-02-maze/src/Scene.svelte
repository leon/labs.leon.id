<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core'
	import { Environment } from '@threlte/extras'
	import { Debug, World } from '@threlte/rapier'
	import Game from './Game.svelte'

	const debug = false
	const debugCamera = false
</script>

<div class="min-h-[100dvh]">
	<Canvas shadows>
		<T.PerspectiveCamera makeDefault position={[0, 0.8, 0.4]} fov={24}>
			<OrbitControls
				enableZoom={debugCamera}
				enableRotate={debugCamera}
				enablePan={debugCamera}
				target={{ y: 0 }}
			/>
		</T.PerspectiveCamera>

		<Environment
			files={`${import.meta.env.BASE_URL}environments/cayley_interior_1k.hdr`}
			isBackground={false}
		/>

		<T.DirectionalLight
			args={[0xffffff, 1]}
			castShadow
			position={[0, 1, 1]}
			lookAt={{ x: 0, y: 0, z: 0 }}
		/>

		<World>
			{#if debug}
				<Debug depthTest={false} />
			{/if}
			<Game />
		</World>
	</Canvas>
</div>
