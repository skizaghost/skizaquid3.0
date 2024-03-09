<script lang="ts">
	import type { AudioFile, AudioScript, Level } from '@prisma/client';

	export let data: AudioFile;

	function return_package_color(level: Level) {
		switch (level) {
			case 'GOLD': {
				return 'gold';
			}
			case 'SILVER': {
				return 'silver';
			}
			case 'PLATINUMN': {
				return 'platinum';
			}
		}
	}

	let audio_element: HTMLAudioElement;

	let is_playing = false;

	function play_audio() {
		is_playing = true;
		audio_element.play();

		audio_element.onended = () => {
			is_playing = false;
		};
	}
</script>

<button class={`note_card ${return_package_color(data.level)}`}>
	<div class="image-container">
		<button class="action-button" on:click={play_audio}>
			{#if !is_playing}
				<span class="material-symbols-outlined">play_arrow</span>
			{:else}
				<span class="material-symbols-outlined">pause</span>
			{/if}
		</button>
		<audio bind:this={audio_element}>
			<source src={data.location.slice(1, data.location.length)} type={'audio/mpeg'} />
		</audio>
	</div>
	<h4>{data.name}</h4>
	<div class="bottom">
		<span class="material-symbols-outlined"> person</span>
		<p>{data.author}</p>
	</div>
</button>

<style>
	.action-button {
		background: none;
		border: none;
		cursor: pointer;
	}

	.note_card {
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

	.note_card:hover {
		box-shadow: 0.4rem 0.4rem var(--shadow-color);
		transform: translateY(-0.1rem);
	}
	.bottom {
		display: grid;
		grid-template-columns: auto 1fr;
		place-items: center;
		gap: 0.5rem;
	}

	h4,
	p {
		margin: 0;
		padding: 0;
	}

	.image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.gold {
		background-color: var(--gold);
	}

	.platinum {
		background-color: var(--platinum);
	}

	.silver {
		background-color: var(--silver);
	}
</style>
