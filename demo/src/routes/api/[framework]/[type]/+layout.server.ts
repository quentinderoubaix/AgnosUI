import {listTypedocPages} from '$lib/api';

export const load = async ({params}) => {
	return {
		includesFwk: true,
		includesPkg: true,
		menu: listTypedocPages(params.framework, params.type).map((category) => ({
			title: category.name.replace('-', ' '),
			path: category.path ? `api/${params.framework}/${params.type}/${category.path}` : undefined,
			submenu: category.files,
		})),
	};
};
