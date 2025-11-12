"use client";

import { useState } from "react";

import { FormTextInput } from "@/components/text-input";
import { FormSelectInput } from "@/components/select-input";

import {
	UseFormRegister,
	FieldError,
	FieldErrors,
	Control,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { validAge, validGender, validSize, validSpecies } from "../../petEnums";

import { PetRegistrationFormType } from "../../schema";

interface CreatePetStep1FormProps {
	errors: FieldErrors<PetRegistrationFormType>;
	register: UseFormRegister<PetRegistrationFormType>;
	control: Control<PetRegistrationFormType>;
}

const CreatePetStep1Form = ({
	errors,
	register,
	control,
}: CreatePetStep1FormProps) => {
	const [descriptionLenght, setDescriptionLenght] = useState(0);

	const handleDescriptionChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setDescriptionLenght(e.target.value.length);
	};

	return (
		<div className="space-y-10">
			<FormTextInput
				type="text"
				placeholder="Ingrese el nombre de la mascota"
				label="Nombre de la mascota"
				registration={register("name")}
				error={errors.name as FieldError}
				isRequired
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-4">
					<FormSelectInput
						label="Especie"
						placeholder="Selecciona la especie"
						name="species"
						control={control}
						options={validSpecies}
						isRequired
					/>

					<FormSelectInput
						label="Edad"
						placeholder="Selecciona la edad"
						name="age"
						control={control}
						options={validAge}
						isRequired
					/>
				</div>

				<div className="space-y-4">
					<FormSelectInput
						label="Tamaño"
						placeholder="Selecciona el tamaño"
						name="size"
						control={control}
						options={validSize}
						isRequired
					/>

					<FormSelectInput
						label="Género"
						placeholder="Selecciona el género"
						name="gender"
						control={control}
						options={validGender}
						isRequired
					/>
				</div>
			</div>

			<div className="space-y-2">
				<Label className="text-md font-normal text-gray-700 flex items-center gap-1">
					Cuentanos un poco la historia de la mascota
					<span className="text-red-500 text-4xl">*</span>
				</Label>

				<Textarea
					{...register("description", {
						onChange: handleDescriptionChange,
						minLength: 0,
						maxLength: 500,
					})}
					placeholder="Describe a la mascota: su historia, apariencia, comportamiento, qué le gusta hacer..."
					className={`resize-none min-h-32 max-h-32 border-gray-400 w-full max-w-2xl break-words whitespace-pre-wrap ${errors.description && "border-red-500"}`}
					maxLength={500}
					wrap="soft"
				/>
				<p className="text-sm text-gray-500">
					({descriptionLenght}/500) Minimo 50 caracteres
				</p>
				{errors.description && (
					<p className="text-red-500 text-sm">{errors.description.message}</p>
				)}
			</div>
		</div>
	);
};

export default CreatePetStep1Form;
