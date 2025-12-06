import z from "zod";

export const ProfileEditBioPayloadSchema = z.object({
  bio: z.string().min(1, "La biografía es requerida."),
});

export const ProfileEditPayloadSchema = z.object({
  fullName: z.string().min(1, "El nombre de usuario es requerida."),
  email: z.string().min(1, "El email es requerida."),
});

export type ProfileEditBioPayload = z.infer<typeof ProfileEditBioPayloadSchema>;
export type ProfileEditPayload = z.infer<typeof ProfileEditPayloadSchema>;
