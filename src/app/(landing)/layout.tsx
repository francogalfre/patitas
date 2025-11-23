import type { Metadata } from "next";
import { SEO_CONFIG } from "@/constants/seo";
import { fontVariables } from "@/styles/font";
import Background from "./components/background";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "@/app/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { AuthProvider } from "@/providers/AuthProvider";

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
	return (
		<html data-scroll-behaviour="smooth" lang="en">
			<body
				className={`${fontVariables} antialiased overflow-x-hidden min-h-screen relative bg-[#fccdee80]/50`}
			>
				<AuthProvider>
					<NuqsAdapter>
						<Navbar />
						<Background />
						<main>{children}</main>
						<Footer />
					</NuqsAdapter>
				</AuthProvider>
			</body>
		</html>
	);
}
