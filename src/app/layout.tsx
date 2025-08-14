import type { Metadata } from "next";
import { SEO_CONFIG } from "@/constants/seo";

import { fontVariables } from "@/styles/font";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: SEO_CONFIG.author,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>{children}</body>
    </html>
  );
}
