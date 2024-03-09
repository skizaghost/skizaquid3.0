<script lang="ts">
	import { goto } from '$app/navigation';
	import type { AudioFile } from '@prisma/client';
	import FabButton from '../components/fab_button.svelte';
	import MusicFile from '../components/music_file.svelte';
	import PendingSubmission from '../components/pending_submission.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const submissions = data.pending_submissions;
	const completed_subscription = data.completed_submissions;

	const audio_files = completed_subscription.map((x) => x.audio_file) as AudioFile[];

	const handle_add_script_clicked = () => {
		goto('/home/add_script');
	};
</script>

<main>
	{#if submissions.length > 0}
		<section>
			<h1>Pending Submissions</h1>
			<div class="pending-cards-container">
				{#each submissions as submission}
					<PendingSubmission audio_script={submission} />
				{/each}
			</div>
		</section>
	{/if}
	{#if audio_files.length > 0}
		<section>
			<h1>Your Business Tunes</h1>
			<div class="pending-cards-container">
				{#each audio_files as submission}
					<MusicFile data={submission} on_click={null} />
				{/each}
			</div>
		</section>
	{/if}

	{#if audio_files.length === 0 && submissions.length === 0}
		<p>Submit your first script</p>
	{/if}

	<FabButton label={'Add Script'} on_click={handle_add_script_clicked} />
</main>

<style>
	main {
		padding: 8pt;
	}
	.content {
		min-height: 100%;
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.pending-cards-container {
		display: flex;
		gap: 8pt;
		flex-wrap: wrap;
	}
</style>
