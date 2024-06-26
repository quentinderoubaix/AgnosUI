import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import {alias} from '../../viteAlias';

export default defineConfig((config) => ({
	plugins: [sveltekit()],
	resolve: {
		alias: config.mode === 'production' ? {} : alias,
	},
	server: {
		port: 5002,
	},
	preview: {
		port: 5002,
	},
}));
