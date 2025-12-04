"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { user } from "@/db/schema/user";

export async function updateUserProfile(
  userId: string,
  fullName: string,
  email: string
) {
  try {
    await db
      .update(user)
      .set({
        name: fullName,
        email: email,
      })
      .where(eq(user.id, userId));

    revalidatePath(`/profile/${userId}`);
    return { success: true };
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw new Error("No se pudo actualizar la información del perfil.");
  }
}
