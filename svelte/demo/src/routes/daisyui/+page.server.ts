import {glob} from 'glob';

const components = (await glob('**/+page.svelte', {cwd: import.meta.dirname}))
	.filter((page) => page.includes('/'))
	.map((page) => page.substring(0, page.lastIndexOf('/')))
	.sort();

export const load = () => ({
	components,
});
