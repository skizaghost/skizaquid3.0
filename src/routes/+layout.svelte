<script lang="ts">
	import '../app.css';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<main>
	<nav>
		<h1>SkizaQuid</h1>

		<div />

		<div class="left">
			{#if data.is_logged_in}
				<a href="/logout" class="primary-button">Logout</a>
			{:else}
				<a href="" class="primary-button">Login</a>
			{/if}
		</div>
	</nav>
	<slot />
</main>

<style>
	main {
		display: grid;
		grid-template-rows: auto 1fr;
		min-height: 100vh;
	}

	.left {
		display: flex;
		align-items: center;
	}

	.primary-button {
		font-size: 0.9rem;
	}

	nav {
		padding: 0.2rem;
		display: grid;
		grid-template-columns: auto 1fr auto;
	}

	h1 {
		font-size: 1rem;
		color: var(--primary);
	}
</style>
