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
				accent: colors.blue,
				"gradient-from": "var(--gradient-from)",
				"gradient-to": "var(--gradient-to)",
			},
			fontFamily: {
				sans: ["Inter var", "Inter", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
		},
	},
};
export default config;
