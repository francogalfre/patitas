import { eq, and } from "drizzle-orm";
import { db } from "../database";
import { user } from "../database/schema";

export const getProfileById = async (id: string) => {
  return await db.select().from(user).where(eq(user.id, id));
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
    .where(and(eq(user.id, id), eq(user.id, userId)));
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
