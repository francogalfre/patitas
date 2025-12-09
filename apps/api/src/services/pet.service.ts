import { eq, and, or, ilike, type InferInsertModel, sql } from "drizzle-orm";
import { db } from "../database";
import { pet } from "../database/schema";

import type { PetCreationPayload } from "../schemas/pet.schema";

type NewPet = InferInsertModel<typeof pet>;

type PaginationParams = {
  page: number;
  limit: number;
  searchQuery: string;
};

export const getAllPets = async ({
  page,
  limit,
  searchQuery,
}: PaginationParams) => {
  const offset = (page - 1) * limit;

  const hasSearch = Boolean(searchQuery && searchQuery.trim());

  if (hasSearch) {
    const searchTerm = `%${searchQuery}%`;

    return await db
      .select()
      .from(pet)
      .where(
        or(
          ilike(sql`${pet.name}::text`, searchTerm),
          ilike(sql`${pet.species}::text`, searchTerm),
          ilike(sql`${pet.location_city}::text`, searchTerm),
          ilike(sql`${pet.gender}::text`, searchTerm)
        )
      )
      .orderBy(pet.createdAt)
      .limit(limit)
      .offset(offset);
  }

  const pets = await db
    .select()
    .from(pet)
    .orderBy(pet.createdAt)
    .limit(limit)
    .offset(offset);

  const hasNextPage = pets.length === limit;

  return {
    pets,
    hasNextPage,
  };
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
