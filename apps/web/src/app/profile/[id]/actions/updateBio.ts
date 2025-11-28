"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { user } from "@/db/schema/user";

export async function updateUserBio(userId: string, bio: string) {
	try {
		await db
			.update(user)
			.set({
				bio: bio,
			})
			.where(eq(user.id, userId));

		revalidatePath(`/profile/${userId}`);
	} catch (error) {
		console.error("Error updating user bio:", error);
		throw new Error("No se pudo actualizar la biografía.");
	}
}
