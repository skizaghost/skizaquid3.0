<main>
	<form action="" method="post">
		<input type="text" name="title" placeholder="Title" required />
		<label for="script">Script</label>
		<textarea id={'script'} name="script" cols="50" rows="30" required />
		<input type="submit" value="Submit" class="primary-button" />
	</form>
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 8pt;
	}

	form label {
		font-weight: bold;
	}

	form textarea {
		font: inherit;
		padding: 8pt;
		border-radius: 4pt;
	}
</style>
