"use server";

import { db } from "@/db";
import { pet } from "@/db/schema/pet";

import type { PetRegistrationFormType } from "../schema";

import { uploadPetPhotos } from "./uploadPhotos";
import { eq } from "drizzle-orm";

export async function createPetAdoption(
	formData: PetRegistrationFormType,
	ownerId: string,
) {
	try {
		const [createdPet] = await db
			.insert(pet)
			.values({
				owner_id: ownerId,
				...formData,
				photos: [],
			})
			.returning({
				id: pet.id,
			});

		const { urls, success, error } = await uploadPetPhotos(
			createdPet.id,
			formData.photos,
		);

		if (!success) {
			return {
				success: false,
				message: `Fallo al guardar las imagenes: ${error}.`,
			};
		}

		await db
			.update(pet)
			.set({
				photos: urls,
			})
			.where(eq(pet.id, createdPet.id));

		return { success: true, message: "Mascota registrada con éxito." };
	} catch (error) {
		console.error("DB Error:", error);
		return {
			success: false,
			message: `Fallo al registrar la mascota: ${error}`,
		};
	}
}
