import type { Metadata } from "next";

import { fontVariables } from "@/styles/font";
import "@/app/globals.css";

export const metadata: Metadata = {
	title: "Patitas | Perfil",
	description: "Perfiles",
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
				<>
					<main className="">{children}</main>
				</>
			</body>
		</html>
	);
}
