"use server";

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { user } from "@/db/schema/user";

export async function deleteUserProfile(userId: string) {
	try {
		await db.delete(user).where(eq(user.id, userId));
		return { success: true };
	} catch (error) {
		console.error("Error deleting user profile:", error);
		throw new Error("No se pudo eliminar el perfil.");
	}
}
