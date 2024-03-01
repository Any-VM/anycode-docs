import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';
import type { Config } from 'tailwindcss';
const config: Config = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: colors.blue,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
			},
			fontFamily: {
				// Your preferred font stack. Inter is closest to Starlight’s defaults.
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [starlightPlugin()],
};
export default config