"use client";

import { usePathname } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { NavLinks } from "./NavLinks";
import { SessionDropdown } from "./SessionDropdown";
import { AuthButtons } from "./AuthButtons";

import type { User } from "@/db/schema/user";

import { motion } from "motion/react";

const Navbar = () => {
	const pathname = usePathname();
	const { data } = authClient.useSession();

	const isAuthorized = data?.session;

	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", duration: 1.5, stiffness: 200 }}
			className="fixed max-w-3xl w-full justify-self-center z-50 top-6 left-0 right-0 rounded-full p-[2px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20"
		>
			<nav className="w-full h-full rounded-full bg-white/80 backdrop-blur-xl flex items-center shadow-sm">
				<div className="flex flex-wrap w-full px-6 py-3 items-center justify-between">
					<NavLinks pathname={pathname} />

					<div className="flex md:order-2 space-x-3">
						{isAuthorized ? (
							<SessionDropdown user={data.user as User} />
						) : (
							<AuthButtons />
						)}
					</div>
				</div>
			</nav>
		</motion.div>
	);
};

export default Navbar;
