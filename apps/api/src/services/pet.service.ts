import { eq, and, type InferInsertModel } from "drizzle-orm";
import { db } from "../database";
import { pet } from "../database/schema";

import type { PetCreationPayload } from "../schemas/pet.schema";

type NewPet = InferInsertModel<typeof pet>;

type PaginationParams = {
  page: number;
  limit: number;
};

export const getAllPets = async ({ page, limit }: PaginationParams) => {
  const offset = (page - 1) * limit;

  const pets = await db
    .select()
    .from(pet)
    .orderBy(pet.id)
    .limit(limit)
    .offset(offset);

  return pets;
};

export const getPetById = async (id: string) => {
  return await db.select().from(pet).where(eq(pet.id, id));
};

export const createPet = async (petData: PetCreationPayload) => {
  const dataToInsert = petData as NewPet;

  const result = await db
    .insert(pet)
    .values(dataToInsert)
    .returning({ id: pet.id });
  return result[0];
};

export const markAsAdopted = async (id: string, userId: string | undefined) => {
  if (!userId) throw new Error("Usuario no autenticado.");

  return await db
    .update(pet)
    .set({ is_adopted: true })
    .where(and(eq(pet.id, id), eq(pet.owner_id, userId)));
};

export const deletePet = async (id: string, userId: string | undefined) => {
  if (!userId) throw new Error("Usuario no autenticado.");

  return await db
    .delete(pet)
    .where(and(eq(pet.id, id), eq(pet.owner_id, userId)));
};
