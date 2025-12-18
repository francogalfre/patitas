import type { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import { FormCheckboxInput } from "@/components/checkbox-input";
import { FormFileInput } from "@/components/file-input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { PetRegistrationFormType } from "../../schema";

interface CreatePetStep2FormProps {
  errors: FieldErrors<PetRegistrationFormType>;
  register: UseFormRegister<PetRegistrationFormType>;
}

const CreatePetStep2Form = ({ errors, register }: CreatePetStep2FormProps) => {
  return (
    <div className="space-y-10">
      <FormFileInput
        maxFiles={3}
        label="Fotos de la mascota"
        registration={register("photos")}
        error={errors.photos as FieldError}
        isRequired={true}
      />

      <div className="flex flex-wrap items-center gap-4 sm:gap-x-8 sm:gap-y-5">
        <FormCheckboxInput
          label="Amigable con niños"
          error={errors.good_with_kids as FieldError}
          registration={register("good_with_kids")}
        />

        <FormCheckboxInput
          label="Amigable con perros"
          error={errors.good_with_dogs as FieldError}
          registration={register("good_with_dogs")}
        />

        <FormCheckboxInput
          label="Amigable con gatos"
          error={errors.good_with_cats as FieldError}
          registration={register("good_with_cats")}
        />

        <FormCheckboxInput
          label="Esta esterilizado/a"
          error={errors.is_sterilized as FieldError}
          registration={register("is_sterilized")}
        />

        <FormCheckboxInput
          label="Esta vacunado/a"
          error={errors.is_vaccinated as FieldError}
          registration={register("is_vaccinated")}
        />
      </div>

      <div className="space-y-4">
        <Label className="text-md font-normal text-gray-700 flex items-center gap-1">
          Cuidados especiales o condiciones medicas
        </Label>

        <Textarea
          {...register("special_care")}
          placeholder="Ej: ¿Necesita medicación, una dieta especial, tiene alguna alergia o condición médica? Si no requiere cuidados especiales, puedes dejar este campo vacío."
          className={`resize-none min-h-24 max-h-24 border-gray-400 text-sm sm:text-base ${errors.special_care && "border-red-500"}`}
          maxLength={500}
        />

        {errors.special_care && (
          <p className="text-red-500 text-sm">{errors.special_care.message}</p>
        )}
      </div>
    </div>
  );
};

export default CreatePetStep2Form;
