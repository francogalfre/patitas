"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import Image from "next/image";

import type { User } from "@/types/user";

import { motion } from "motion/react";

const DropdownTrigger = motion.create(DropdownMenuTrigger);

const base_navigation_items = [
  {
    id: 1,
    text: "Subir una mascota",
    href: "/new-pet",
  },
];

export const SessionDropdown = ({ user }: { user: User }) => {
  const handleSignOut = () => {
    authClient.signOut();
  };

  const profileItem = {
    id: 2,
    text: "Mi Perfil",
    href: `/profile/${user.id}`,
  };

  const supportItem = {
    id: 3,
    text: "Soporte",
    href: "mailto:francogalfre.code@gmail.com",
  };

  const final_dropwdown_items = [
    profileItem,
    ...base_navigation_items,
    supportItem,
  ];

  return (
    <DropdownMenu>
      <DropdownTrigger
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring" }}
        className="cursor-pointer bg-primary px-6 py-2 text-white rounded-full"
        asChild
      >
        <p className="font-medium">{user.name}</p>
      </DropdownTrigger>

      <DropdownMenuContent className="max-w-80 p-2 pr-4 mt-2 mr-4">
        <div className="flex items-center">
          {user.image && (
            <Image
              className="rounded-full"
              src={user.image}
              alt="User's Avatar"
              width={48}
              height={48}
            />
          )}
          <div className="flex flex-col">
            <DropdownMenuLabel className="text-md font-geist pb-0">
              {user.name}
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-sm font-raleway pt-0 text-gray-60">
              {user.email}
            </DropdownMenuLabel>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-300 mb-2" />

        {final_dropwdown_items.map((item) => (
          <DropdownMenuItem
            asChild
            key={item.id}
            className="cursor-pointer text-sm"
          >
            <Link href={item.href}>{item.text}</Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          className="cursor-pointer  font-raleway"
          onClick={handleSignOut}
        >
          Cerrar Sesion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
