import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const user_id = event.cookies.get('user_id');

	if (user_id === undefined) {
		return {
			success: true
		};
	}
	event.cookies.delete('user_id');
	return {
		success: true
	};
};
