"use server";

import { fetcher } from "@/lib/fetcher";
import { Pet } from "@/types/pet";
import { PetRegistrationFormType } from "../schema";
import { uploadPetPhotos } from "./uploadPhotos";
import { headers } from "next/headers";

interface CreatePetResponse {
  data: Pet;
  message: string;
  success: boolean;
}

interface CreatePetReturn {
  success: boolean;
  message: string;
  petId: string;
}

export async function createPet(
  formData: PetRegistrationFormType,
  ownerId: string
): Promise<CreatePetReturn> {
  try {
    const tempId = crypto.randomUUID();
    const requestHeaders = await headers();

    const cookieHeaderValue = requestHeaders.get("Cookie");

    const fetchHeaders: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (cookieHeaderValue) {
      fetchHeaders.Cookie = cookieHeaderValue;
    }

    const {
      urls,
      success: uploadSuccess,
      error,
    } = await uploadPetPhotos(tempId, formData.photos);

    if (!uploadSuccess || !urls) {
      return {
        success: false,
        message: `Fallo al guardar las imágenes: ${error || "Error desconocido"}.`,
        petId: "Error la crear la mascota",
      };
    }

    const { photos: _, ...restFormData } = formData;

    const petData = {
      ...restFormData,
      photos: urls,
      ownerId: ownerId,
    };

    const { data, message, success } = await fetcher<CreatePetResponse>(
      "/api/pets",
      {
        method: "POST",
        body: JSON.stringify({ ...petData }),
        headers: fetchHeaders,
      }
    );

    console.log("Mascota creada", data);

    if (!success || !data) {
      console.error("❌ Error al crear mascota:", message);
      return {
        success: false,
        message: message || "Error al crear la mascota",
        petId: "Error la crear la mascota",
      };
    }

    return {
      success: true,
      message: message,
      petId: data.id,
    };
  } catch (error) {
    console.error("Error en Server Action al crear mascota:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Fallo de conexión o error en el servidor de la API.",
      petId: "Error la crear la mascota",
    };
  }
}
