<script lang="ts">
	import type { AudioFile, Level } from '@prisma/client';

	export let data: AudioFile;
	export let is_admin: boolean;

	export let on_click: (() => void) | null;

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
</script>

{#if on_click === null}
	{#if is_admin}
		<a
			href={`/dash/subscriptions/${data.id}`}
			class={`note_card ${return_package_color(data.level)}`}
		>
			<div class="image-container">
				<span class="material-symbols-outlined"> music_note </span>
			</div>
			<h4>{data.name}</h4>
			<div class="bottom">
				<span class="material-symbols-outlined"> person</span>
				<p>{data.author}</p>
			</div>
		</a>
	{:else}
		<a
			href={`/home/subscriptions/${data.id}`}
			class={`note_card ${return_package_color(data.level)}`}
		>
			<div class="image-container">
				<span class="material-symbols-outlined"> music_note </span>
			</div>
			<h4>{data.name}</h4>
			<div class="bottom">
				<span class="material-symbols-outlined"> person</span>
				<p>{data.author}</p>
			</div>
		</a>
	{/if}
{:else}
	<button on:click={on_click} class={`note_card ${return_package_color(data.level)}`}>
		<div class="image-container">
			<span class="material-symbols-outlined"> music_note </span>
		</div>
		<h4>{data.name}</h4>
		<div class="bottom">
			<span class="material-symbols-outlined"> person</span>
			<p>{data.author}</p>
		</div>
	</button>
{/if}

<style>
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
		background-color: #ffdd00;
	}

	.platinum {
		background-color: #a66358;
	}

	.silver {
		background-color: #adb5bd;
	}
</style>
