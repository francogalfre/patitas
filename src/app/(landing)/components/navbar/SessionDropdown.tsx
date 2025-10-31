"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { authClient } from "@/lib/auth-client";

import { TriangleAlert } from "lucide-react";

import Link from "next/link";
import Image from "next/image";

import { User } from "@/db/schema/user";

import { motion } from "motion/react";

const DropdownTrigger = motion.create(DropdownMenuTrigger)

export const SessionDropdown = ({ user }: { user: User }) => {
  const handleSignOut = () => {
    authClient.signOut();
  };

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
      <DropdownMenuContent className="max-w-80 p-2 pr-4 mt-2">
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
            <DropdownMenuLabel
              className={`text-sm font-raleway pt-0 ${user.emailVerified ? "text-gray-600" : "text-red-500"}`}
            >
              {user.email}
            </DropdownMenuLabel>
          </div>
        </div>
        {!user.emailVerified && (
          <p className="flex items-center gap-1 pt-2 text-red-500 text-sm font-raleway py-2 pl-2">
            <TriangleAlert className="size-4" /> Verifica tu correo electronico
          </p>
        )}
        <DropdownMenuSeparator className="bg-gray-300 mb-2" />
        <DropdownMenuItem asChild className="transition-colors font-raleway">
          <Link href={`/profiles/${user.id}`}>Mi Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="transition-colors font-raleway">
          <Link href={`/new-pet`}>Subir una mascota</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="transition-colors font-raleway">
          <Link href={`/`}>Mis mascotas</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="transition-colors font-raleway">
          <a href="mailto:francogalfre.code@gmail.com">Soporte</a>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="transition-colors font-raleway"
          onClick={handleSignOut}
        >
          Cerrar Sesion
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
