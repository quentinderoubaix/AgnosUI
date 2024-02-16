import {readdir} from 'fs/promises';

const agnosUIRegex = /^_agnos_ui_(.*)\.html$/;
const titleRegex = /^_agnos_ui_([^.]+)\.([^.]+)\.html$/;

export const load = async ({params}) => {
	const fileMap: Record<string, {label: string; path: string; subpath: string}[]> = {};
	for (const type of ['functions', 'classes', 'interfaces', 'types']) {
		const files = await readdir(`generated/typedoc/${type}`);
		for (const file of files) {
			const match = file.match(titleRegex);
			if (match) {
				const name = (match[2] as string).replace('_', '-');
				const module = (match[1] as string).replace('_', '-');
				if (!fileMap[module]) {
					fileMap[module] = [];
				}
				fileMap[module].push({
					label: name,
					path: `api/${type}/${file}`,
					subpath: '',
				});
			}
		}
	}
	return {
		mainTitle: 'API',
		menu: (await readdir('generated/typedoc/modules')).map((file) => {
			const module = (file.match(agnosUIRegex)?.[1] as string | undefined)?.replace('_', '-') || file;
			return {
				title: module,
				submenu: [
					{
						label: 'Index',
						path: `api/modules/${file}`,
						subpath: '',
					},
					...fileMap[module],
				],
			};
		}),
	};
};
