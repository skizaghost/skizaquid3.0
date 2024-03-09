import { db } from '$lib';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);

	const id = (params as any).id;

	if (id === undefined) {
		throw error(404, { message: 'File not found' });
	}

	const audio_file = await db.audioScript.findFirst({
		where: {
			id: parseInt(id),
			NOT: [{ audio_file: null }]
		},
		include: {
			audio_file: true
		}
	});

	if (audio_file === null) {
		throw error(404, { message: 'File doesnt exist' });
	}

	return {
		audio_file: audio_file
	};
};
