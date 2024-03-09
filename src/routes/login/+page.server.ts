import { db } from '$lib';
import bcrypt from 'bcrypt';
import type { PageServerLoad, RequestEvent } from './$types';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	const user_id = event.cookies.get('user_id');
	if (user_id === undefined) {
		return {};
	}

	const account = await db.user.findFirst({
		where: {
			id: parseInt(user_id)
		}
	});
	if (account === null) {
		return {};
	}
	if (account.is_client) {
		throw redirect(301, '/home');
	}

	throw redirect(301, '/dash');
};

export const actions = {
	default: async (event) => {
		const body = await event.request.formData();

		const username = body.get('username_or_email');
		if (typeof username !== 'string') {
			return { success: false };
		}

		const password = body.get('password');
		if (typeof password !== 'string') {
			return { success: false };
		}

		const account = await db.user.findFirst({
			where: {
				email: username
			}
		});

		if (account === null) {
			return { success: false };
		}

		const is_true = await bcrypt.compare(password, account.password);
		if (is_true) {
			if (account.is_client) {
				throw redirect(301, '/home');
			}
			throw redirect(301, '/dash');
		}
		event.cookies.set('user_id', account.id.toString());

		return { success: true };
	}
} satisfies Actions;
