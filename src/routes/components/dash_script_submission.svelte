<script lang="ts">
	import type { AudioScript } from '@prisma/client';

	export let audio_script: AudioScript;
</script>

<a class="card" href={`/dash/add_music?id=${audio_script.id}`}>
	<span>Pending</span>
	<h4>{audio_script.title}</h4>
</a>

<style>
	.card {
		box-shadow: 0.2rem 0.2rem var(--shadow-color);
		transition: all ease-out 0.3s;
		border: 1pt solid var(--shadow-color);
		height: 10rem;
		width: 10rem;
		border-radius: 0.3rem;
		display: grid;
		grid-template-rows: 1fr auto auto;
		gap: 0.5rem;
		justify-content: center;
		align-items: center;
		padding: 0.5rem;
		cursor: pointer;
		font: inherit;
	}
</style>
