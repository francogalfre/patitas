import Navbar from "@/app/(landing)/components/navbar";
import Background from "@/app/(landing)/components/Background";

import { fontVariables } from "@/styles/font";
import "@/app/globals.css";

export default async function RootLayout({
  children,
}: Readonly<{   
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontVariables} antialiased overflow-x-hidden min-h-screen relative bg-[#fccdee80]/50`}
      >
          <Background />
          <main>{children}</main>
      </body>
    </html>
  );
}