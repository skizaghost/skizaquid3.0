import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (event) => {
	const user_id = event.cookies.get('user_id');

	return {
		is_logged_in: user_id !== undefined
	};
};
