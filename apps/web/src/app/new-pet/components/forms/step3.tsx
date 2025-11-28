"use client";

import { FormTextInput } from "@/components/text-input";

import type { UseFormRegister, FieldError, FieldErrors } from "react-hook-form";

import type { PetRegistrationFormType } from "../../schema";

interface CreatePetStep3FormProps {
	errors: FieldErrors<PetRegistrationFormType>;
	register: UseFormRegister<PetRegistrationFormType>;
}

const CreatePetStep3Form = ({ errors, register }: CreatePetStep3FormProps) => {
	return (
		<div className="space-y-4">
			<FormTextInput
				type="text"
				placeholder="Tu nombre completo"
				label="Nombre de Contacto"
				registration={register("contact_name", {
					required: "El nombre es requerido.",
					minLength: { value: 2, message: "Minimo 2 caracteres" },
				})}
				error={errors.contact_name as FieldError}
				isRequired={true}
			/>

			<FormTextInput
				type="tel"
				placeholder="Teléfono (ej: +54 342.....)"
				label="Teléfono de Contacto"
				registration={register("contact_phone")}
				error={errors.contact_phone as FieldError}
				isRequired={true}
			/>

			<FormTextInput
				type="email"
				placeholder="correo@ejemplo.com"
				label="Correo de Contacto"
				registration={register("contact_email")}
				error={errors.contact_email as FieldError}
				isRequired={true}
			/>

			<FormTextInput
				type="text"
				placeholder="En donde se encuentra la mascota"
				label="Ubicación"
				registration={register("location_city", {
					required: "La ubicación es requerida.",
					minLength: { value: 2, message: "Minimo 2 caracteres" },
				})}
				error={errors.location_city as FieldError}
				isRequired={true}
			/>
		</div>
	);
};

export default CreatePetStep3Form;
