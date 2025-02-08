/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens } from 'fluid-tailwind';

export default {
	content: { files: ['./src/**/*.{html,js,svelte,ts}'], extract },

	theme: {
		screens,
		extend: {}
	},
	plugins: [fluid]
};
