import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import codeTheme from "./code-theme.json";
// https://astro.build/config
export default defineConfig({
  site: "https://code.anyvm.tech",
  integrations: [
    starlight({
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://code.anyvm.tech/logo.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/logo.png",
          },
        },
      ],
      expressiveCode: {
        themes: [codeTheme],
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
          autogenerate: {
            directory: "start-here",
          },
        },
        {
          label: "Self Hosting",
          autogenerate: {
            directory: "self-hosting",
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
