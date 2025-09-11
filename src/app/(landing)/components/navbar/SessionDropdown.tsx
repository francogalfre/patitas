"use client";

import React from "react";

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
  return (
    <>
      <p className="font-medium">{session.name}</p>
    </>
  );
};
