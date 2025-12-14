import { betterAuth, type User } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getRandomAvatar } from "@/utils/get-random-avatar";

import { user as userTable } from "@/database/schema/user";

import { db } from "../database";
import { eq } from "drizzle-orm";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  user: {
    additionalFields: {
      bio: { type: "string", required: false },
      image: { type: "string", required: false },
      location: { type: "string", required: false },
      is_shelter: { type: "boolean", required: false },
    },
  },

  events: {
    afterUserCreated: async ({ user }: { user: User }) => {
      const avatarUrl = await getRandomAvatar();

      await db
        .update(userTable)
        .set({ image: avatarUrl })
        .where(eq(userTable.id, user.id));
    },
  },

  emailAndPassword: {
    enabled: true,
  },

  baseURL: process.env.API_URL || "http://localhost:3001",
  trustedOrigins: [process.env.WEB_URL || "http://localhost:3000"],

  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
});
