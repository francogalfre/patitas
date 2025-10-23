import type { Metadata } from "next";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import { fontVariables } from "@/styles/font";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Patitas | Publicar nueva mascota",
  description: "Publicar una nueva mascota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} antialiased overflow-x-hidden min-h-screen relative bg-[#fccdee80]/50`}
      >
        <NuqsAdapter>
          <main className="flex items-center justify-center py-12 max-w-7xl w-full h-screen mx-auto">
            {children}
          </main>
        </NuqsAdapter>
      </body>
    </html>
  );
}
