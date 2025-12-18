"use server";

import { headers } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const getApiSession = async () => {
  const incomingHeaders = await headers();
  const sessionCookie = incomingHeaders.get("cookie");

  const fetchHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (sessionCookie) {
    fetchHeaders.Cookie = sessionCookie;
  }

  if (!sessionCookie) {
    return { session: null };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/get-session`, {
      method: "GET",
      headers: {
        Cookie: sessionCookie,
        ...fetchHeaders,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("API session check failed:", response.status);
      return { session: null };
    }

    const data = await response.json();

    return { session: data?.session, user: data?.user };
  } catch (error) {
    console.error("Error fetching session from external API:", error);
    return { session: null };
  }
};
