import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "AnyCode",
  description:
    "AnyCode is group focusing on innovative cloud computing solutions.",
  metadataBase: new URL("https://code.anyvm.tech"),
  openGraph: {
    title: "AnyCode",
    type: "website",
    description:
      "AnyVM is group focusing on innovative cloud computing solutions.",
    images: "/logo.png",
  },
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
