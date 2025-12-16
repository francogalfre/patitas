import type { Metadata } from "next";

import { SEO_CONFIG } from "@/constants/seo";
import { fontVariables } from "@/styles/font";

import Background from "./components/background";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

import "@/app/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: SEO_CONFIG.authors,

  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behaviour="smooth" lang="en">
      <body
        className={`${fontVariables} antialiased overflow-x-hidden min-h-screen relative`}
      >
        <Suspense>
          <NuqsAdapter>
            <Navbar />
            <Background />
            <main className="w-full">{children}</main>
            <Footer />
          </NuqsAdapter>
        </Suspense>
      </body>
    </html>
  );
}
