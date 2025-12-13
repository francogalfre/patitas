"use server";

import { fetcher } from "@/lib/fetcher";

import { Pet } from "@/types/pet";
import { User } from "@/types/user";

interface getUserByIdResponse {
  data: {
    profile: User[];
    pets: Pet[];
  };
  message: string;
  success: boolean;
}

interface getUserByIdReturn {
  profile: User | null;
  pets: Pet[] | [];
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
        pets: [],
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    return {
      profile: data.profile[0] || [],
      pets: data.pets || [],
      success: success,
      message: message,
    };
  } catch (error) {
    console.error("Error en Server Action al buscar mascotas:", error);

    return {
      profile: null,
      pets: [],
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
