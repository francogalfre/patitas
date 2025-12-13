"use server";

import { fetcher } from "@/lib/fetcher";

import { User } from "@/types/user";

interface getUserByIdResponse {
  data: User[];
  message: string;
  success: boolean;
}

interface getUserByIdReturn {
  profile: User | null;
  success: boolean;
  message: string;
}

export async function getUserById({
  id,
}: {
  id: string;
}): Promise<getUserByIdReturn> {
  try {
    const { data, success, message } = await fetcher<getUserByIdResponse>(
      `/api/profiles/${id}`
    );

    if (!data) {
      console.error("❌ No hay data en la respuesta:", message);
      return {
        profile: null,
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    return {
      profile: data[0] || [],
      success: success,
      message: message,
    };
  } catch (error) {
    console.error("Error en Server Action al buscar mascotas:", error);

    return {
      profile: null,
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
