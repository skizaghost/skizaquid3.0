<script lang="ts">
	import type { AudioFile } from '@prisma/client';
	import AssignedNoteCard from '../../../components/assigned_note_card.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const audio_file = data.audio_file.audio_file as AudioFile;
</script>

<main>
	<section>
		<div class="audio-file-container">
			<AssignedNoteCard data={audio_file} />
		</div>

		<h3>{data.audio_file.title}</h3>
		<div>
			<p>{data.audio_file.script}</p>
		</div>
		<div class="actions">
			<button class="primary-button">Make Payment</button>
		</div>
	</section>
</main>

<style>
	.actions {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.actions .primary-button {
		width: 50%;
	}

	main {
		display: flex;
		justify-content: center;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 40rem;
		width: 100%;
	}

	.audio-file-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		text-align: center;
	}
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
	section {
		padding: 10%;
	}
</style>
