import type { Metadata } from "next";
import { SEO_CONFIG } from "@/constants/seo";

import Navbar from "./components/navbar";
import Background from "./components/Background";
import Footer from "./components/Footer";

import { fontVariables } from "@/styles/font";
import "@/app/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: SEO_CONFIG.author,

  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const fullUrl = headersList.get("x-url");
  const pathname = fullUrl ? new URL(fullUrl).pathname : "/";

  const showNavbar = pathname !== "/";

  return (
    <html lang="en">
      <body
        className={`${fontVariables} antialiased overflow-x-hidden min-h-screen relative bg-[#fccdee80]/50`}
      >
        <NuqsAdapter>
          {showNavbar && <Navbar />}
          <Background />
          <main className="p-4 space-y-32">{children}</main>
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
