<script lang="ts">
	import DashScriptSubmission from '../components/dash_script_submission.svelte';
	import FabButton from '../components/fab_button.svelte';
	import MusicFile from '../components/music_file.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<div class="content">
	{#if data.new_scripts.length > 0}
		<div>
			<h2>New Scripts</h2>
			<div class="section">
				{#each data.new_scripts as script, i}
					<DashScriptSubmission audio_script={script} />
				{/each}
			</div>
		</div>
	{/if}
	<div>
		<h2>New Assigned Script</h2>
		<div class="section">
			{#each data.audio as file, i}
				<MusicFile data={file} on_click={null} is_admin={data.is_admin} />
			{/each}
		</div>
	</div>
</div>

<style>
	.content {
		min-height: 100%;
		padding: 1rem;
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}

	.section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>
