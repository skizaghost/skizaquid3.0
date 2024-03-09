import { db } from '$lib';
import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './add_music/$types';

export const load: PageServerLoad = async ({ params, cookies }) => {
	const user_id = cookies.get('user_id');

	if (user_id === undefined) {
		throw redirect(301, '/login');
	}

	const user = await db.user.findFirst({
		where: {
			id: parseInt(user_id)
		}
	});

	if (user === undefined) {
		throw redirect(301, '/login');
	}

	if (!user?.is_admin) {
		throw redirect(301, '/home');
	}

	const is_adming = user?.is_admin === true;

	const audio_files = await db.audioScript.findMany({
		where: {
			NOT: [{ audio_file: null }]
		},
		include: {
			audio_file: true
		}
	});

	const new_scripts = await db.audioScript.findMany({
		where: {
			audio_file: null
		}
	});

	//Load audio files scripts

	return {
		audio: audio_files.map((x) => x.audio_file),
		new_scripts: new_scripts,
		is_admin: is_adming
	};
};
