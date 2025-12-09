"use server";

import { fetcher } from "@/lib/fetcher";

import type { Pet } from "@/types/pet";
import { normalize } from "@/utils/normalize";

interface GetAllPetsResponse {
  data: {
    pets: Pet[];
    hasNextPage: boolean;
  };
  message: string;
  success: boolean;
}

export async function getAllPets(page: number = 1, search?: string) {
  try {
    const params = new URLSearchParams();
    params.set("page", page.toString());

    if (search?.trim()) {
      params.set("search", normalize(search));
    }

    const response = await fetcher<GetAllPetsResponse>(
      `/api/pets?${params.toString()}`
    );

    return {
      pets: response.data.pets,
      hasNextPage: response.data.hasNextPage,
      success: response.success,
      message: response.message,
    };
  } catch (error) {
    return {
      pets: [],
      hasNextPage: false,
      success: false,
      message:
        error instanceof Error ? error.message : "Error al obtener mascotas",
    };
  }
}
