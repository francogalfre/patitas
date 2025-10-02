import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable, text, boolean, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { user } from "./user";

export const petSpeciesEnum = pgEnum("pet_species", [
  "perro",
  "gato",
  "conejo",
  "ave",
  "otro",
]);

export const petAgeEnum = pgEnum("pet_ages", [
  "cachorro",
  "joven",
  "adulto",
  "senior",
]);

export const petSizeEnum = pgEnum("pet_size", ["pequeño", "mediano", "grande"]);

export const petGenderEnum = pgEnum("pet_gender", ["macho", "hembra"]);

export const pet = pgTable("pets", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  owner_id: text("owner_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),

  name: text("name").notNull(),
  species: petSpeciesEnum("species").notNull(),
  gender: petGenderEnum("gender").notNull(),
  age: petAgeEnum("age").notNull(),
  size: petSizeEnum("size").notNull(),
  description: text("description").notNull(),

  good_with_kids: boolean("good_with_kids").default(false).notNull(),
  good_with_dogs: boolean("good_with_dogs").default(false).notNull(),
  good_with_cats: boolean("good_with_cats").default(false).notNull(),

  is_vaccinated: boolean("is_vaccinated").default(false).notNull(),
  is_sterilized: boolean("is_sterilized").default(false).notNull(),
  special_care: text("special_care"),

  photos: text("photos").array().notNull(),

  contact_name: text("contact_name").notNull(),
  contact_phone: text("contact_phone").notNull(),
  contact_email: text("contact_email").notNull(),

  location_city: text("location_city").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const petRelations = relations(pet, ({ one }) => ({
  owner: one(user, {
    fields: [pet.owner_id],
    references: [user.id],
  }),
}));

export type Pet = InferSelectModel<typeof pet>;
