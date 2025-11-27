"use server";

import { redirect } from "next/navigation";
import { deletePet } from "@/db/queries/deletePet";
import { supabaseStorage } from "@/db/supabase/storage/client";

import { extractFilePath } from "../utils/extract-path";

export const deletePetAction = async (petId: string, photos: string[]) => {
	const { success } = await deletePet(petId);

	if (!success) {
		return {
			success: false,
			error: "Error al eliminar la mascota",
		};
	}

	const filePaths = photos.map(extractFilePath);

	const { error } = await supabaseStorage.storage
		.from("pet-pics")
		.remove(filePaths);

	if (error) {
		console.error(error);
		return {
			success: false,
			error: "Error al eliminar las imágenes del Storage",
		};
	}

	redirect("/pets");
};
