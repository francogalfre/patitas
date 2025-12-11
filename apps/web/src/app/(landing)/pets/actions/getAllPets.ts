"use server";

import { fetcher } from "@/lib/fetcher";

import type { Pet } from "@/types/pet";
import { normalize } from "@/utils";

interface GetAllPetsResponse {
  data: {
    pets: Pet[];
    hasNextPage: boolean;
  };
  message: string;
  success: boolean;
}

interface getAllPetsReturn {
  pets: Pet[] | [];
  hasNextPage: boolean;
  success: boolean;
  message: string;
}

export async function getAllPets(
  page: number = 1,
  search?: string
): Promise<getAllPetsReturn> {
  try {
    const params = new URLSearchParams();
    params.set("page", page.toString());

    if (search?.trim()) {
      params.set("search", normalize(search));
    }

    const response = await fetcher<GetAllPetsResponse>(
      `/api/pets?${params.toString()}`
    );

    const { data, success, message } = response;

    if (!data) {
      console.error("❌ No hay data en la respuesta:", message);
      return {
        pets: [],
        hasNextPage: false,
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    return {
      pets: data.pets || [],
      hasNextPage: data.hasNextPage,
      success: success,
      message: message,
    };
  } catch (error) {
    console.error("Error en Server Action al buscar mascotas:", error);

    return {
      pets: [],
      hasNextPage: false,
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
