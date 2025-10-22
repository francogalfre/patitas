import { betterAuth } from "better-auth";

import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

import { eq } from "drizzle-orm";
import { supabaseStorage } from "@/db/supabase/storage/client";

const resend = new Resend(process.env.RESEND_API_KEY as string);

const DEFAULT_AVATARS = [
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMS5wbmciLCJpYXQiOjE3NTgwNTg3MzIsImV4cCI6MjA3MzQxODczMn0.NJ8CSDyScIeUc-aS6hmarctrwU9F6dmamfwCkSZqhG4",
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMi5wbmciLCJpYXQiOjE3NTgwNTg3NTMsImV4cCI6MjA3MzQxODc1M30.slaEyYrocZddz8x0ioRS-eiwQ0N_VZpTGNYslf9yirE",
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMy5wbmciLCJpYXQiOjE3NTgwNTg3NjcsImV4cCI6MjA3MzQxODc2N30.ADyF-sL8PE4tt6ulxYqTIuUcvWpNsBsG9U_QNr3WayI",
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfNC5wbmciLCJpYXQiOjE3NTgwNTg3NzgsImV4cCI6MjA3MzQxODc3OH0.NkL1b6ljfyXAS2kl4INFX99kIpb2sCEijONSzMjMus8",
];

const getRandomAvatar = () => {
  return DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)];
};

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  user: {
    additionalFields: {
      bio: {
        type: "string",
        required: false,
      },
      image: {
        type: "string",
        required: false,
      },
      location: {
        type: "string",
        required: false,
      },
      is_shelter: {
        type: "boolean",
        required: false,
      },
    },
  },

  events: {
    afterUserCreated: async ({ user }) => {
      await db
        .update(user)
        .set({ avatar: getRandomAvatar() })
        .where(eq(user.id, user.id));
    },
  },

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  emailVerification: {
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: user.email,
        subject: "Bienvenido a Patitas | Porfavor verifica tu correo",
        react: EmailTemplate({ username: user.name, url }),
      });
    },
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
  },
});
