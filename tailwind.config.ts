import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";
const config: Config = {
	plugins: [starlightPlugin()],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				gray: colors.slate,
				accent: colors.slate,
				background: "var(--background)",
				"bg-lighter": "var(--bg-lighter)",
			},
			fontFamily: {
				sans: ["Geist Sans", "sans-serif"],
				mono: ["Geist Mono", "monospace"],
			},
		},
	},
};
export default config;
