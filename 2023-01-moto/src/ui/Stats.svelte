<script lang="ts">
	import { speed, traction } from '../state/bike.state'
</script>

<div
	class="absolute bottom-0 left-0 right-0 pointer-events-none flex gap-1 justify-center p-4"
>
	<div class="px-4 py-2 rounded-lg bg-slate-100/60 font-bold">
		{$speed.toFixed(0)} km/h
	</div>

	<div class="px-4 py-2 rounded-lg bg-slate-100/60 font-bold">
		{$traction.toFixed(2)}
	</div>
</div>
