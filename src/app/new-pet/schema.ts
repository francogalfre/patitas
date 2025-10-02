import { z } from "zod";

const validSpecies = ["perro", "gato", "conejo", "ave", "otro"] as const;
const validAge = ["cachorro", "joven", "adulto", "senior"] as const;
const validSize = ["pequeño", "mediano", "grande"] as const;
const validGender = ["macho", "hembra"] as const;

const SpeciesEnum = z.enum(validSpecies);
const AgeEnum = z.enum(validAge);
const SizeEnum = z.enum(validSize);
const GenderEnum = z.enum(validGender);

export const Step1FormShema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  species: SpeciesEnum,
  gender: GenderEnum,
  age: AgeEnum,
  size: SizeEnum,
  description: z
    .string()
    .min(50, { message: "La descripcion debe tener al menos 50 caracteres" }),
});

export const Step2FormShema = z.object({
  photos: z
    .string()
    .array()
    .min(1, { message: "Al menos debes subir una imagen" }),
  good_with_kids: z.boolean().default(false),
  good_with_dogs: z.boolean().default(false),
  good_with_cats: z.boolean().default(false),
  is_vaccinated: z.boolean(),
  is_sterilized: z.boolean(),
  special_care: z
    .string()
    .max(255, { message: "Maximo de 255 caracteres" })
    .optional()
    .nullable(),
});

export const Step3FormShema = z.object({
  contact_name: z.string().min(1, "El nombre de contacto es obligatorio."),
  contact_phone: z
    .string()
    .regex(/^\+?(\d[\d\s-]{8,}\d)$/, "Número de teléfono inválido."),
  contact_email: z.email("El formato del correo electrónico es inválido."),
  location_city: z.string().min(1, "La ciudad es obligatoria."),
});

export const PetRegistrationFormSchema = z.object({
  ...Step1FormShema.shape,
  ...Step2FormShema.shape,
  ...Step3FormShema.shape,
});

export type PetRegistrationFormType = z.infer<typeof PetRegistrationFormSchema>;

export const stepSchema = {
  1: Step1FormShema,
  2: Step2FormShema,
  3: Step3FormShema,
};

export type StepKey = keyof typeof stepSchema;

export type Step1Form = z.infer<typeof Step1FormShema>;
export type Step2Form = z.infer<typeof Step2FormShema>;
export type Step3Form = z.infer<typeof Step3FormShema>;

export const MAX_STEP = 3;
export const MIN_STEP = 1;
