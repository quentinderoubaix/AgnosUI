import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import path from 'path';
import {alias} from '../../viteAlias';

// https://vitejs.dev/config/
export default defineConfig((config) => ({
	server: {
		port: 3001,
		strictPort: true,
	},
	resolve: {
		alias:
			config.mode === 'production'
				? {
						'@agnos-ui/common': path.join(__dirname, '../../common'),
					}
				: alias,
	},
	plugins: [sveltekit()],
}));
