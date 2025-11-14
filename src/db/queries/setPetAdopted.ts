import { db } from "@/db";
import { pet } from "../schema/pet";
import { eq } from "drizzle-orm";

export const setPetAdopted = async (id: string) => {
	try {
		const result = await db
			.update(pet)
			.set({ is_adopted: true })
			.where(eq(pet.id, id));

		if (result && "rowsAffected" in result && result.length > 0) {
			return { success: true };
		}

		return { success: true };
	} catch (error) {
		console.error("Error al marcar la mascota como adoptada:", error);
		return { success: false, error: error };
	}
};
