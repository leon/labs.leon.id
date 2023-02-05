<script lang="ts">
	import { speed } from '../state/bike.state'
</script>

<div
	class="absolute bottom-0 left-0 right-0 pointer-events-none flex justify-center p-4"
>
	<div class="px-4 py-2 rounded-lg bg-slate-100/60 font-bold">
		{($speed * 3.6).toFixed(0)} km/h
	</div>
</div>
