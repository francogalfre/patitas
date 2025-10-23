"use server";

import { db } from "@/db";
import { pet } from "@/db/schema/pet";

import { eq } from "drizzle-orm";

export const getAllPets = async () => {
  const pets = await db.select().from(pet);
  return pets;
};

export const getPetById = async ({ id }: { id: string }) => {
  const result = await db.select().from(pet).where(eq(pet.id, id));
  return result[0];
};
