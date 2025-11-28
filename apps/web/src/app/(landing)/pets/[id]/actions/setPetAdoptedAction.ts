"use server";

import { setPetAdopted } from "@/db/queries/setPetAdopted";
import { revalidatePath } from "next/cache";

export const setPetAdoptedAction = async (petId: string) => {
	const { success } = await setPetAdopted(petId);

	if (success) {
		revalidatePath(`pets/${petId}`);
	} else {
		throw new Error("No se pudo eliminar la mascota");
	}
};
