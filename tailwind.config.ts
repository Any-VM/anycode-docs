import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const config: Config = {
	plugins: [starlightPlugin()],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				gray: colors.zinc,
				accent: colors.zinc,
				background: "var(--background)",
			},
			fontFamily: {
				sans: ["Geist Sans", "sans-serif"],
				mono: ["Geist Mono", "monospace"],
			},
		},
	},
};
export default config;
