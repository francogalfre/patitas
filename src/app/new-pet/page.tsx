"use client";

import { useState } from "react";

import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  PetRegistrationFormSchema,
  PetRegistrationFormType,
  stepSchema,
  StepKey,
  MAX_STEP,
  MIN_STEP,
} from "./schema";

import { Button } from "@/components/ui/button";

import AuthFormInput from "@/components/form-input";

const PatitasCreateNewPetPage = () => {
  const [step, setStep] = useState(MIN_STEP);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
    trigger,
  } = useForm({
    resolver: zodResolver(PetRegistrationFormSchema),
    defaultValues: {
      is_vaccinated: false,
      is_sterilized: false,
    },
    mode: "onBlur",
  });

  const handleNextStep = async () => {
    const currentStepSchema = stepSchema[step as StepKey];
    const currentStepFields = Object.keys(
      currentStepSchema.shape
    ) as (keyof PetRegistrationFormType)[];

    const isValid = await trigger(currentStepFields, { shouldFocus: true });

    if (isValid) {
      setStep(step + 1);
    }
  };

  const onSubmit = (data: PetRegistrationFormType) => {
    console.log("¡Formulario de Mascota Completo!", data);
  };

  return (
    <>
      <header className="space-y-3">
        <h2 className="text-2xl font-medium">
          Publicar una mascota en adopción
        </h2>
        <p>Ayúdanos a encontrarle el hogar perfecto a tu amigo.</p>
        <span>
          Paso: {step} de {MAX_STEP}
        </span>
      </header>
      <hr />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-purple-100/50 p-12 rounded-xl"
      >
        {step == 1 && (
          <>
            <h2 className="text-lg pb-8 font-medium">
              Datos basicos de la mascota
            </h2>

            <div>
              <AuthFormInput
                type="text"
                placeholder="Ingrese el nombre de la mascota"
                label="Nombre de la mascota"
                registration={register("name")}
                error={errors.name as FieldError}
                isRequired
              />

              <input type="text" placeholder="species" />
              <input type="text" placeholder="gender" />
              <input type="text" placeholder="age" />
              <input type="text" placeholder="size" />
              <input type="text" placeholder="description" />
            </div>
          </>
        )}

        {step == 2 && (
          <>
            <input type="text" placeholder="photos" />
            <input type="text" placeholder="good with kids" />
            <input type="text" placeholder="good with dogs" />
            <input type="text" placeholder="good with cats" />
            <input type="text" placeholder="is_vaccinated" />
            <input type="text" placeholder="is_sterilized" />
            <input type="text" placeholder="special_care" />
          </>
        )}

        {step == 3 && (
          <>
            <input type="text" placeholder="contact_name" />
            <input type="text" placeholder="contact_phone" />
            <input type="text" placeholder="contact_email" />
            <input type="text" placeholder="location_city" />
          </>
        )}

        <div className="w-full flex justify-between mt-36">
          <Button disabled={step == 1} onClick={() => setStep(step + 1)}>
            Atras
          </Button>
          <Button disabled={step == 3} onClick={handleNextStep}>
            Siguiente
          </Button>
        </div>
      </form>
    </>
  );
};

export default PatitasCreateNewPetPage;
