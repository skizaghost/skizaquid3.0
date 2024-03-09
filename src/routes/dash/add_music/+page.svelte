<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<main>
	<div class="container">
		<div class="add-music-form">
			<h2>Script</h2>
			<h4>{data.script.title}</h4>
			<p>{data.script.script}</p>
		</div>
	</div>

	<div class="container">
		<form class="add-music-form" method="POST" enctype="multipart/form-data">
			<h4>Assign Note</h4>
			<input placeholder="Name" type="text" name="name" required />
			<input placeholder="Author" type="text" name="author" required />
			<input type="hidden" name="script_id" value={data.script.id} />
			<select name="package" required>
				<option value={'SILVER'}>Silver</option>
				<option value={'GOLD'}>Gold</option>
				<option value={'PLATINUMN'}>Platinum</option>
			</select>
			<input type="file" placeholder="file" name="audio_file" required accept={'audio/*'} />
			<input type="submit" class="primary-button" />
		</form>
	</div>
</main>

<style>
	.add-music-form {
		background-color: var(---surface);
		height: fit-content;
		border: 1pt solid var(--outline);
		border-radius: 0.4rem;
		box-shadow: 0.4rem 0.4rem var(--shadow-color);
		padding: 1rem;
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: '100%';
		width: '100%';
	}
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	h2 {
		text-align: center;
	}
</style>
