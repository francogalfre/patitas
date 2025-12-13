"use server";

import { fetcher } from "@/lib/fetcher";
import { revalidatePath } from "next/cache";

import { User } from "@/types/user";
import { headers } from "next/headers";

interface updateProfileBioResponse {
  data: User[];
  message: string;
  success: boolean;
}

interface updateProfileBioReturn {
  profile: User | null;
  success: boolean;
  message: string;
}

export async function updateProfileBio({
  id,
  bio,
}: {
  id: string;
  bio: string;
}): Promise<updateProfileBioReturn> {
  const requestHeaders = await headers();

  const cookieHeaderValue = requestHeaders.get("Cookie");

  const fetchHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (cookieHeaderValue) {
    fetchHeaders.Cookie = cookieHeaderValue;
  }

  try {
    const { data, success, message } = await fetcher<updateProfileBioResponse>(
      `/api/profiles/${id}/edit/bio`,
      {
        method: "PATCH",
        body: JSON.stringify({ bio }),
        headers: fetchHeaders,
      }
    );

    if (!data) {
      console.error("❌ No hay data en la respuesta:", message);
      return {
        profile: null,
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    if (success) {
      revalidatePath(`/profile/${id}`);
    }

    return {
      profile: data[0] || [],
      success: success,
      message: message,
    };
  } catch (error) {
    console.error(
      "Error en Server Action al editar la biografia del perfil:",
      error
    );

    return {
      profile: null,
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
