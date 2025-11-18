import { z } from "zod";

import { validSpecies, validAge, validSize, validGender } from "./petEnums";

const SpeciesEnum = z.enum(validSpecies, {
	message: "Porfavor selecciona una especie",
});
const AgeEnum = z.enum(validAge, {
	message: "Porfavor selecciona una edad",
});
const SizeEnum = z.enum(validSize, {
	message: "Porfavor selecciona un tamaño",
});
const GenderEnum = z.enum(validGender, {
	message: "Porfavor selecciona un genero",
});

export const Step1FormShema = z.object({
	name: z.string().min(1, { message: "El nombre es requerido" }),
	species: SpeciesEnum,
	gender: GenderEnum,
	age: AgeEnum,
	size: SizeEnum,
	description: z
		.string()
		.min(50, { message: "La descripcion debe tener al menos 50 caracteres" })
		.max(500, { message: "La descripcion solo puede tener 500 caracteres" }),
});

export const Step2FormShema = z.object({
	photos: z
		.custom<FileList>()
		.refine((files) => files?.length >= 1, "Debes subir al menos una foto."),

	good_with_kids: z.boolean(),
	good_with_dogs: z.boolean(),
	good_with_cats: z.boolean(),
	is_vaccinated: z.boolean(),
	is_sterilized: z.boolean(),

	special_care: z
		.string()
		.max(255, { message: "Maximo de 255 caracteres" })
		.optional()
		.nullable(),
});

export const Step3FormShema = z.object({
	contact_name: z.string(),
	contact_phone: z.string(),
	contact_email: z.email("El formato del correo electrónico es inválido."),
	location_city: z.string(),
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
