"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { NavLinks } from "./NavLinks";
import { SessionDropdown } from "./SessionDropdown";
import { AuthButtons } from "./AuthButtons";

import { User } from "@/db/schema/user";

const Navbar = () => {
  const pathname = usePathname();
  const { data } = authClient.useSession();

  const isAuthorized = data?.session;

  return (
    <nav className="w-full z-10 top-0 left-0 right-0 transition-all duration-100 pt-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/patitas/logo1000.webp"
            alt="Logo de Patitas"
            width={60}
            height={60}
          />
        </Link>

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
  );
};

export default Navbar;
