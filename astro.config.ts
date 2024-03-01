import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: "https://docs.anyvm.tech",
  integrations: [starlight({
    editLink: {
      baseUrl: 'https://github.com/any-vm/anycode-docs/edit/main/',
    },
    favicon: "./src/assets/any-vm.png",
    logo: {
      src: "./src/assets/any-vm.png"
      
    },
    title: 'AnyCode Docs',
    social: {
      github: 'https://github.com/any-vm/anycode',
      discord: "https://discord.gg/6cpcbKwjBn"
    },  
    sidebar: [
      {
        label: 'Reference',
        // Autogenerate a group of links for the 'guides' directory.
        autogenerate: { directory: 'reference' },
      },
    ],
    customCss: ['./src/tailwind.css']
  }), tailwind({
    applyBaseStyles: false
  })],
});