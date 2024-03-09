import { db } from '$lib';
import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const user_id = event.cookies.get('user_id');
	if (user_id === undefined) {
		throw redirect(301, '/login');
	}

	const pending_scripts = await db.audioScript.findMany({
		where: {
			userId: parseInt(user_id),
			audio_file: null
		}
	});

	const completed_submissions = await db.audioScript.findMany({
		where: {
			userId: parseInt(user_id),
			NOT: [{ audio_file: null }]
		},
		include: {
			audio_file: true
		}
	});

	return {
		pending_submissions: pending_scripts,
		completed_submissions: completed_submissions
	};
};
