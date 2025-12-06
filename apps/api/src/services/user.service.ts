import { eq } from "drizzle-orm";
import { db } from "../database";
import { user } from "../database/schema";

export const getProfileById = async (id: string) => {
  return await db.select().from(user).where(eq(user.id, id));
};

export const updateProfileBio = async (id: string, bio: string) => {
  return await db.update(user).set({ bio }).where(eq(user.id, id));
};

export const updateProfile = async (
  id: string,
  fullName: string,
  email: string
) => {
  return await db
    .update(user)
    .set({ name: fullName, email })
    .where(eq(user.id, id));
};

export const deleteProfile = async (id: string) => {
  return await db.delete(user).where(eq(user.id, id));
};
