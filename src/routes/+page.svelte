<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<main>
	<section class="main-content">
		<div class="desc">
			<h1>SkizaQuid</h1>
			<h4>Home for your customized business tunes</h4>
			<div class="actions">
				<a href="/signup" class="primary-button">Get Started</a>

				{#if data.is_logged_in}
					<a href="/login" class="secondary-button">Enter</a>
				{:else}
					<a href="/login" class="secondary-button">Login</a>
				{/if}
			</div>
		</div>
		<div class="images">
			<img src="/imgs/hero-1.jpeg" alt="" />
			<img src="/imgs/hero-2.jpeg" alt="" />
			<img src="/imgs/hero-3.jpeg" alt="" />
			<img src="/imgs/hero-4.jpeg" alt="" />
		</div>
	</section>

	<section class="packages">
		<h1>Packages</h1>

		<div class="package-list">
			<div class="package-card silver">
				<h4>Basic</h4>
				<span class="material-symbols-outlined"> music_note </span>
				<p>KES 3500</p>
			</div>
			<div class="package-card gold">
				<h4>Silver</h4>
				<span class="material-symbols-outlined"> music_note </span>
				<p>KES 6000</p>
			</div>
			<div class="package-card platinum">
				<h4>Platinumn</h4>
				<span class="material-symbols-outlined"> music_note </span>
				<p>KES 10,000</p>
			</div>
		</div>
	</section>
</main>

<style>
	.actions .primary-button {
	}

	.actions {
		width: 50%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		justify-content: center;
		margin-top: 4rem;
	}

	.desc {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.desc h1 {
		font-weight: 300;
		font-size: 6rem;
		margin: 0;
		color: var(--secondary);
	}

	.desc h4 {
		font-weight: 500;
		margin: 0;
	}

	.images {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.images img {
		height: 18rem;
		width: 18rem;
		object-fit: cover;
		border-radius: 50%;
		border: 0.2rem solid white;
		filter: grayscale(50%);
		transition: all 0.6s ease;
		box-shadow: 0.1rem 0.1rem var(--shadow-color);
	}

	.images img:hover {
		filter: grayscale(0%);
		box-shadow: 0.6rem 0.6rem var(--shadow-color);
		transform: translateY(-0.1rem);
	}

	main {
		padding: 8pt;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		min-height: 100vh;
		max-width: 100rem;
	}

	.main-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.packages {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.packages h1 {
		font-weight: 500;
		text-align: center;
	}

	.package-list {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.package-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 16rem;
		border-radius: 0.4rem;
		padding: 0.5rem;
		gap: 1rem;
	}

	.package-card h4 {
		text-align: center;
		font-weight: 500;
		font-size: 1.6rem;
	}

	.package-card p {
		font-weight: bold;
		text-align: center;
	}

	@media only screen and (max-width: 600px) {
		.main-content {
			display: flex;
			flex-direction: column;
		}

		.desc {
			min-height: 80vh;
		}
		.package-list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
