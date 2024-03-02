import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.anyvm.tech",
	integrations: [
		starlight({
			head: [
				{
					tag: "meta",
					attrs: {
						property: "og:image",
						content: "https://docs.anyvm.tech/logo.png",
					},
				},
			],
			expressiveCode: {
				themes: ["github-dark-dimmed"],
			},
			editLink: {
				baseUrl: "https://github.com/any-vm/anycode-docs/edit/main/",
			},
			favicon: "./src/assets/anycode.svg",
			logo: {
				src: "./src/assets/anycode.svg",
			},
			title: "AnyCode",
			social: {
				github: "https://github.com/any-vm/anycode",
				discord: "https://discord.gg/6cpcbKwjBn",
			},
			sidebar: [
				{
					label: "Start Here",
					// Autogenerate a group of links for the 'guides' directory.
					autogenerate: {
						directory: "start-here",
					},
				},
				{
					label: "Other Info",
					autogenerate: {
						directory: "other-info",
					},
				},
			],
			customCss: ["./src/index.css"],
		}),
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
