"use server";

import { db } from "@/db";
import { pet } from "@/db/schema/pet";

export const getAllPets = async () => {
  const pets = await db.select().from(pet);

  console.log(pets);
  return pets;
};
