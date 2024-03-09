<main>
	<div class="content">
		<h1>Hope to see you again!</h1>
		<h1>🎯</h1>
	</div>
	<div class="actions">
		<a href="/" class="primary-button">Go home</a>
		<a href="/login" class="secondary-button">Login</a>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 2rem;
		padding: 1rem;
	}

	.actions {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		width: 40%;
	}

	h1 {
		font-weight: 400;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media only screen and (max-width: 600px) {
		.actions {
			width: 100%;
		}
	}
</style>
