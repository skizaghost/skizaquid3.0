<script lang="ts">
	export let on_click: (() => void) | null;
	export let label: string;
</script>

{#if on_click === null}
	<a href="/dash/add_music">
		<span class="material-symbols-outlined"> add </span>
		<span>{label}</span>
	</a>
{:else}
	<button on:click={on_click}>
		<span>{label}</span>
	</button>
{/if}

<style>
	a,
	button {
		font: inherit;
		position: absolute;
		background-color: var(--primary);
		bottom: 1rem;
		right: 1rem;
		border: none;
		padding: 0.5rem 1rem;
		color: white;
		border-radius: 0.2rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
	}
</style>
