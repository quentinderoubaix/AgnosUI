import {redirect} from '@sveltejs/kit';
import {readFile} from 'fs/promises';
import {join} from 'path';

export const load = async ({params}) => {
	const filePath = params.slug;
	if (!filePath) {
		redirect(302, '/api/index.html');
	}

	return {
		html: await readFile(join('generated/typedoc', filePath), 'utf-8'),
		path: filePath,
	};
};
