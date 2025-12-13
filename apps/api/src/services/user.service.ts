import { eq, and } from "drizzle-orm";
import { db } from "../database";
import { pet, user } from "../database/schema";

export const getProfileById = async (id: string) => {
  const profile = await db.select().from(user).where(eq(user.id, id));
  const pets = await db.select().from(pet).where(eq(pet.owner_id, id));

  return { profile, pets };
};

export const updateProfileBio = async (
  id: string,
  bio: string,
  userId: string
) => {
  if (!userId) throw new Error("Usuario no autenticado.");

  return await db
    .update(user)
    .set({ bio })
    .where(and(eq(user.id, id), eq(user.id, userId)))
    .returning();
};

export const updateProfile = async (
  id: string,
  fullName: string,
  email: string,
  userId: string
) => {
  if (!userId) throw new Error("Usuario no autenticado.");

  return await db
    .update(user)
    .set({ name: fullName, email })
    .where(and(eq(user.id, id), eq(user.id, userId)));
};

export const deleteProfile = async (id: string, userId: string) => {
  if (!userId) throw new Error("Usuario no autenticado.");

  return await db.delete(user).where(and(eq(user.id, id), eq(user.id, userId)));
};
