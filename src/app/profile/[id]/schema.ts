import z from "zod";

export const EditProfileFormSchema = z.object({
	fullName: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
	email: z
		.string()
		.min(5, "El correo electrónico debe tener al menos 5 caracteres"),
});

export type EditProfileData = z.infer<typeof EditProfileFormSchema>;
