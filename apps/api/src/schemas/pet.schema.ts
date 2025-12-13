import z from "zod";

const speciesValues = ["perro", "gato", "conejo", "ave", "otro"] as const;
const ageValues = ["cachorro", "joven", "adulto", "senior"] as const;
const sizeValues = ["pequeño", "mediano", "grande"] as const;
const genderValues = ["macho", "hembra"] as const;

const petSpeciesEnum = z.enum(speciesValues);
const petGenderEnum = z.enum(genderValues);
const petAgeEnum = z.enum(ageValues);
const petSizeEnum = z.enum(sizeValues);

export const PetCreationPayloadSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  species: petSpeciesEnum,
  gender: petGenderEnum,
  age: petAgeEnum,
  size: petSizeEnum,
  description: z
    .string()
    .min(50, "La descripción debe tener al menos 50 caracteres.")
    .max(500, "La descripción solo puede tener 500 caracteres."),

  good_with_kids: z.boolean(),
  good_with_dogs: z.boolean(),
  good_with_cats: z.boolean(),
  is_vaccinated: z.boolean(),
  is_sterilized: z.boolean(),
  special_care: z
    .string()
    .max(255, "Máximo de 255 caracteres")
    .optional()
    .nullable(),

  photos: z
    .array(z.string())
    .min(1, "Debes subir al menos una foto.")
    .max(3, "El máximo es de 3 imágenes."),

  contact_name: z.string().min(1, "El nombre de contacto es requerido."),
  contact_phone: z.string().min(7, "El teléfono de contacto es requerido."),
  contact_email: z
    .string()
    .email("El formato del correo electrónico es inválido."),
  location_city: z.string().min(1, "La ciudad es requerida."),
});

export type PetCreationPayload = z.infer<typeof PetCreationPayloadSchema>;
