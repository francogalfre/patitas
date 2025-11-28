import { db } from "@/db";
import { pet } from "../schema/pet";
import { eq } from "drizzle-orm";

export const deletePet = async (id: string) => {
	try {
		const result = await db.delete(pet).where(eq(pet.id, id));

		if (result && "rowsAffected" in result && result.length > 0) {
			return { success: true };
		}

		return { success: true };
	} catch (error) {
		console.error("Error al eliminar la mascota:", error);
		return { success: false, error: error };
	}
};
