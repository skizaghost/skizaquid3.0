<main>
	<form method="POST">
		<h2>Welcome to skizaquid</h2>
		<div class="form-container">
			<input type="text" name="username_or_email" placeholder="Username or Email" required />
			<input type="password" name="password" placeholder="Password" required />
		</div>
		<!-- <input type="submit" value={'Login'} class="primary-button" /> -->

		<input type="submit" value={'Login'} class="primary-button" />
		<a href="/signup" class="text-button">Dont have an account?</a>
	</form>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	.form-container {
		display: flex;
		flex-direction: column;
		gap: 8pt;
		width: 100%;
	}

	.primary-button {
		width: 100%;
	}

	form {
		width: 300pt;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8pt;
		background-color: white;
		padding: 16pt;
		border: 1pt solid var(--surface-variant);
		border-radius: 8pt;
	}
</style>
