import z from "zod";

export const LoginFormSchema = z.object({
	email: z
		.email({ message: "El email es obligatorio" })
		.min(1, { message: "El email es obligatorio" }),
	password: z.string().min(1, { message: "La contraseña es obligatoria" }),
});

export type LoginFormData = z.infer<typeof LoginFormSchema>;
