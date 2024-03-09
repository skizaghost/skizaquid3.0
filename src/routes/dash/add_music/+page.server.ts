import { db } from '$lib';
import { type Actions, redirect } from '@sveltejs/kit';
import { writeFile } from 'fs/promises';
import uuid from 'uuid';
import type { PageServerLoad } from '$types';

export const load: PageServerLoad = async (event) => {
	const user_id = event.cookies.get('user_id');
	if (user_id === undefined) {
		throw redirect(301, '/login');
	}

	const script_id = event.url.searchParams.get('id');
	if (script_id === null) {
		throw redirect(301, '/dash');
	}

	const script = await db.audioScript.findFirst({
		where: {
			id: parseInt(script_id)
		}
	});

	if (script === null) {
		throw redirect(301, '/dash');
	}

	return {
		script: script
	};
};

export const actions = {
	default: async (event) => {
		const body = await event.request.formData();
		const file = body.get('audio_file') as File;
		const name = body.get('name');
		const author = body.get('author');
		const audio_package = body.get('package');
		const script_id = body.get('script_id');

		const file_uuid = uuid.v4();
		const user_id = event.cookies.get('user_id');

		if (user_id === undefined) {
			throw redirect(301, '/login');
		}

		if (typeof script_id !== 'string') {
			return { success: false };
		}

		console.log(file_uuid);
		const file_storage_location = `./media/${file_uuid}`;
		writeFile(file_storage_location, file.stream() as any, (err: any) => {
			console.error(err);
		});

		console.log('Reached here');

		const result = await db.audioFile.create({
			data: {
				name: name as string,
				level: audio_package,
				location: file_storage_location,
				author: author,
				owner: {
					connect: {
						id: parseInt(user_id)
					}
				}
			}
		});

		const update_script = await db.audioScript.update({
			where: {
				id: parseInt(script_id)
			},
			data: {
				audio_file: {
					connect: result
				}
			}
		});
		console.log(result);
		console.log(update_script);
		throw redirect(301, '/dash');
	}
} satisfies Actions;
