"use server";

import { fetcher } from "@/lib/fetcher";
import { headers } from "next/headers";

interface setPetAdoptedResponse {
  message: string;
  success: boolean;
}

interface setPetAdoptedReturn {
  success: boolean;
  message: string;
}

export async function setPetAdopted({
  id,
}: {
  id: string;
}): Promise<setPetAdoptedReturn> {
  const requestHeaders = await headers();

  const cookieHeaderValue = requestHeaders.get("Cookie");

  const fetchHeaders: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (cookieHeaderValue) {
    fetchHeaders.Cookie = cookieHeaderValue;
  }

  try {
    const { success, message } = await fetcher<setPetAdoptedResponse>(
      `/api/pets/${id}/adopt`,
      {
        method: "PATCH",
        credentials: "include",
        headers: fetchHeaders,
      }
    );

    if (!success) {
      console.error("❌ Error al marcar la mascota como adoptada:", message);

      return {
        success: false,
        message: "Respuesta inválida del servidor",
      };
    }

    return {
      success: true,
      message: "Mascota marcada como adoptada con éxito.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Fallo de conexión o error en el servidor de la API.",
    };
  }
}
