import {
  eq,
  and,
  or,
  ilike,
  type InferInsertModel,
  sql,
  desc,
} from "drizzle-orm";
import { db } from "../database";
import { pet } from "../database/schema";

import type { PetCreationPayload } from "../schemas/pet.schema";
import { supabaseStorage } from "../config/supabase";
import { extractFilePath } from "../utils/extract-storage-path";

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
  const queryLimit = limit + 1;
  const offset = (page - 1) * limit;
  const hasSearch = Boolean(searchQuery && searchQuery.trim());

  let pets;

  if (hasSearch) {
    const searchTerm = `%${searchQuery}%`;

    pets = await db
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
      .orderBy(desc(pet.createdAt))
      .limit(queryLimit)
      .offset(offset);
  } else {
    pets = await db
      .select()
      .from(pet)
      .orderBy(desc(pet.createdAt))
      .limit(queryLimit)
      .offset(offset);
  }

  const hasNextPage = pets.length === queryLimit;
  const petsSlice = pets.slice(0, limit);

  return {
    pets: petsSlice,
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

  try {
    await db
      .update(pet)
      .set({ is_adopted: true })
      .where(and(eq(pet.id, id), eq(pet.owner_id, userId)));

    return {
      success: true,
      message: "Mascota marcada como adoptada con exito",
    };
  } catch (error) {
    return {
      success: false,
      message: "Error al marcar la mascota como adoptada.",
      error: error,
    };
  }
};

export const deletePet = async (id: string, userId: string | undefined) => {
  if (!userId) throw new Error("Usuario no autenticado.");

  const selectedPet = await db.select().from(pet).where(eq(pet.id, id));
  const petToDelete = selectedPet[0];

  if (!petToDelete) {
    throw new Error("Mascota no encontrada.");
  }

  const photoUrls = petToDelete.photos || [];
  const storagePaths = photoUrls.map(extractFilePath);

  try {
    await db.delete(pet).where(and(eq(pet.id, id), eq(pet.owner_id, userId)));
    await supabaseStorage.storage.from("pet-pics").remove(storagePaths);

    return { success: true, message: "Mascota eliminada con exito" };
  } catch (error) {
    return {
      success: false,
      message: "Error al eliminar a la mascota",
      error: error,
    };
  }
};
