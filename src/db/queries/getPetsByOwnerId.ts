import { db } from "@/db";
import { pet, type Pet } from "../schema/pet";
import { eq } from "drizzle-orm";

export const getPetsByOwnerId = async (id: string): Promise<Pet[]> => {
  const pets = await db.select().from(pet).where(eq(pet.owner_id, id));

  // Drizzle siempre devuelve un array, nunca null/undefined
  // Si no hay resultados, devuelve un array vacío []
  // El código que consume esta función puede verificar: if (pets.length === 0)
  return pets;
};
