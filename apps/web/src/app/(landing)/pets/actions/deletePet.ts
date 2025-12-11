"use server";

import { fetcher } from "@/lib/fetcher";
import { headers } from "next/headers";

interface deletePetResponse {
  message: string;
  success: boolean;
}

interface deletePetReturn {
  success: boolean;
  message: string;
}

export async function deletePet({
  id,
}: {
  id: string;
}): Promise<deletePetReturn> {
  const requestHeaders = await headers();

  const cookieHeaderValue = requestHeaders.get("Cookie");

  const fetchHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (cookieHeaderValue) {
    fetchHeaders.Cookie = cookieHeaderValue;
  }

  try {
    const { success, message } = await fetcher<deletePetResponse>(
      `/api/pets/${id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: fetchHeaders,
      }
    );

    if (!success) {
      console.error("❌ Error al eliminar a la mascota:", message);

      return {
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    return {
      success: true,
      message: "Mascota eliminada con éxito.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
