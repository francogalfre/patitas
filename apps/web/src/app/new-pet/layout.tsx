import type { Metadata } from "next";

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
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${fontVariables} antialiased overflow-x-hidden min-h-screen relative bg-[#fccdee80]/50`}
      >
        <main className="flex items-center justify-center py-6 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl w-full min-h-screen mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
