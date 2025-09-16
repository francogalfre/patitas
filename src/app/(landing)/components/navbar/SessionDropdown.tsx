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

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface SessionDropdownProps {
  session: User;
}

export const SessionDropdown = ({ session }: SessionDropdownProps) => {
  const handleSignOut = () => {
    authClient.signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="cursor-pointer bg-primary px-4 py-2 rounded-sm text-white"
        asChild
      >
        <p className="font-medium">{session.name}</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-1 mt-1">
        <DropdownMenuLabel className="text-md font-geist pb-0">
          {session.name}
        </DropdownMenuLabel>
        <DropdownMenuLabel className="text-sm text-gray-600 font-raleway pt-0">
          {session.email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-300" />
        <DropdownMenuItem className="transition-colors font-raleway">
          Mi Perfil
        </DropdownMenuItem>
        <DropdownMenuItem className="transition-colors font-raleway">
          Soporte
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
