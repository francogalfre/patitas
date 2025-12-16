"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { NavLinks } from "./nav-links";
import { SessionDropdown } from "./session-dropdown";
import { AuthButtons } from "./auth-buttons";

import type { User } from "@/types/user";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { data } = authClient.useSession();
  const isAuthorized = data?.session;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1.5, stiffness: 200 }}
        className="fixed w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto z-50 top-4 sm:top-6 left-0 right-0 px-4 sm:px-0"
      >
        <div className="rounded-full p-[2px] bg-linear-to-r from-primary/20 via-secondary/20 to-primary/20">
          <nav className="w-full h-full rounded-full bg-white/80 backdrop-blur-xl flex items-center shadow-md">
            <div className="flex w-full px-4 sm:px-6 py-3 items-center justify-between">
              <div className="hidden md:flex">
                <NavLinks pathname={pathname} />
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <div className="flex items-center space-x-3">
                {isAuthorized ? (
                  <SessionDropdown user={data.user as User} />
                ) : (
                  <AuthButtons />
                )}
              </div>
            </div>
          </nav>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-26 left-4 right-4 z-40 md:hidden max-w-sm sm:max-w-md mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-md p-4">
              <NavLinks pathname={pathname} isMobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
