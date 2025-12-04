import { eq, type InferInsertModel } from "drizzle-orm";
import { db } from "../db";
import { pet, type Pet } from "../db/schema";

import type { PetCreationPayload } from "../schemas/pet.schema";

type NewPet = InferInsertModel<typeof pet>;

export const getAllPets = async () => {
  return await db.select().from(pet);
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

export const markAsAdopted = async (id: string) => {
  return await db.update(pet).set({ is_adopted: true }).where(eq(pet.id, id));
};

export const deletePet = async (id: string) => {
  return await db.delete(pet).where(eq(pet.id, id));
};
