import { InferSelectModel } from "drizzle-orm";

import { pgTable, text, timestamp, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { user } from "./user";

export const pet = pgTable("pets", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  species: text("species").notNull(),
  breed: text("breed").notNull(),
  age: integer("age").notNull(),
  gender: text("gender").notNull(),
  description: text("description").notNull(),
  location: text("location"),
  status: text("status").default("disponible"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const petRelations = relations(pet, ({ one }) => ({
  user: one(user, {
    fields: [pet.userId],
    references: [user.id],
  }),
}));

export type Pet = InferSelectModel<typeof pet>;
