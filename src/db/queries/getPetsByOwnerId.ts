import { db } from "@/db";
import { pet } from "../schema/pet";
import { eq } from "drizzle-orm";

export const getPetsByOwnerId = async (id: string) => {
	const pets = await db.select().from(pet).where(eq(pet.owner_id, id));

	return pets;
};
