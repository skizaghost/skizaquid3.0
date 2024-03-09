import { db } from '$lib';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const actions = {
	default: async (event) => {
		const body = await event.request.formData();
		console.log(body);
		console.log('Its working');

		const script = body.get('script');
		if (typeof script !== 'string') {
			return { success: false };
		}

		const title = body.get('title');
		if (typeof title !== 'string') {
			return { success: false };
		}

		const user_id = event.cookies.get('user_id');
		if (user_id === undefined) {
			throw redirect(301, '/login');
		}

		const new_script = await db.audioScript.create({
			data: {
				script: script,
				title: title,
				user: {
					connect: {
						id: parseInt(user_id)
					}
				}
			}
		});

		throw redirect(301, '/home');
	}
} satisfies Actions;
