import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Unirail",
  description:
    "A platform for comprehensive AI application testing platform ensuring production-ready solutions through rigorous edge-case analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
