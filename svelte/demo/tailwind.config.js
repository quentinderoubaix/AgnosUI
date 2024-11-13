import daisyUI from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/routes/daisyui/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [daisyUI],
	darkMode: ['selector', '[data-theme="dark"]'],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
