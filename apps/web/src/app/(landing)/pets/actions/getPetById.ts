"use server";

import { fetcher } from "@/lib/fetcher";

import type { Pet } from "@/types/pet";
import type { User } from "@/types/user";

interface getPetByIdResponse {
  data: {
    pet: Pet;
    owner: User[];
  };
  message: string;
  success: boolean;
}

interface GetPetByIdReturn {
  pet: Pet | null;
  owner: User | null;
  success: boolean;
  message: string;
}

export async function getPetById({
  id,
}: {
  id: string;
}): Promise<GetPetByIdReturn> {
  try {
    const { data, success, message } = await fetcher<getPetByIdResponse>(
      `/api/pets/${id}`
    );

    if (!data) {
      console.error("❌ No hay data en la respuesta:", message);
      return {
        pet: null,
        owner: null,
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    return {
      pet: data.pet || {},
      owner: data.owner[0] || {},
      success: success,
      message: message,
    };
  } catch (error) {
    console.error("Error en Server Action al buscar mascotas:", error);

    return {
      pet: null,
      owner: null,
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
