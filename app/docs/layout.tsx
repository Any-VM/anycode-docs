import { AnyVM, Discord, GitHub } from "@/components/icons";
import { pageTree } from "../source";
import { DocsLayout, type DocsLayoutProps } from "fumadocs-ui/layout";
import type { ReactNode } from "react";
export const layoutOptions: Omit<DocsLayoutProps, "children"> = {
  tree: pageTree,
  nav: {
    title: (
      <>
        <AnyVM className="h-8 w-8" />
        <span className="ml-3 font-semibold max-md:hidden">AnyCode</span>
      </>
    ),
    transparentMode: "top",
    links: [
      {
        label: "Discord",
        href: "https://discord.gg/6cpcbKwjBn",
        icon: <Discord className="h-6 w-6" />,
      },
      {
        label: "GitHub",
        href: "https://github.com/any-VM/anycode-docs",
        icon: <GitHub className="size-12" />,
      },
    ],
  },
};

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return <DocsLayout {...layoutOptions}>{children}</DocsLayout>;
}
