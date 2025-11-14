"use server";

import { redirect } from "next/navigation";
import { deletePet } from "@/db/queries/deletePet";

export const deletePetAction = async (petId: string) => {
	const { success } = await deletePet(petId);

	if (success) {
		redirect("/pets");
	} else {
		throw new Error("No se pudo eliminar la mascota");
	}
};
