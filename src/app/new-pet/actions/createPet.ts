"use server";

import { db } from "@/db";
import { pet } from "@/db/schema/pet";

import { PetRegistrationFormType } from "../schema";

export async function createPetAdoption(
  formData: PetRegistrationFormType,
  ownerId: string
) {
  const photosUrls = ["url_de_la_imagen_subida"];

  try {
    await db
      .insert(pet)
      .values({
        owner_id: ownerId,
        ...formData,
        photos: photosUrls,
      })
      .execute();

    return { success: true, message: "Mascota registrada con éxito." };
  } catch (error) {
    console.error("DB Error:", error);
    return { success: false, message: "Fallo al registrar la mascota." };
  }
}
