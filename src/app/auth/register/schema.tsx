import z from "zod";

export const RegisterFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .max(50, { message: "El nombre no puede superar los 50 caracteres" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios",
    }),
  email: z
    .email({ message: "Email invalido" })
    .min(1, { message: "El email es obligatorio" }),
  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .max(32, { message: "La contraseña no puede superar los 32 caracteres" })
    .regex(/[A-Z]/, {
      message: "La contraseña debe contener al menos una letra mayúscula",
    }),
});

export type RegisterFormData = z.infer<typeof RegisterFormSchema>;
