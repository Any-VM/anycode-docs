import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/guides': '/guides/intro/',
	},
	integrations: [
		starlight({
			favicon: "./src/assets/any-vm.png",
			logo: {
				src: "./src/assets/any-vm.png",
			},
			title: 'AnyCode Docs',
			social: {
				github: 'https://github.com/any-vm/anycode',
				discord: "https://discord.gg/6cpcbKwjBn"
			},
			sidebar: [
				{
					label: 'Docs',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/guides/intro/' },
						{ label: "Configuration", link: "/guides/config/" },
						{ label: "Services", link: "/guides/services/" },
					],
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
