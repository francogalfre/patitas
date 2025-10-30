"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { NavLinks } from "./NavLinks";
import { SessionDropdown } from "./SessionDropdown";
import { AuthButtons } from "./AuthButtons";

import { User } from "@/db/schema/user";

import { motion } from "motion/react"

const Navbar = () => {
  const pathname = usePathname();
  const { data } = authClient.useSession();

  const isAuthorized = data?.session;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, stiffness: 200 }}
      className="w-full z-10 top-0 left-0 right-0 pt-2"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLinks pathname={pathname} />

        <div className="flex md:order-2 space-x-3">
          {isAuthorized ? (
            <SessionDropdown user={data.user as User} />
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
