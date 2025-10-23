"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
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

import { authClient } from "@/lib/auth-client";
import { createPetAdoption } from "./actions/createPet";

import CreatePetFormHeader from "./components/header";

import CreatePetStep1Form from "./components/forms/step1";
import CreatePetStep2Form from "./components/forms/step2";
import CreatePetStep3Form from "./components/forms/step3";

const PatitasCreateNewPetPage = () => {
  const [step, setStep] = useState(MIN_STEP);

  const router = useRouter();
  const session = authClient.useSession();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
    control,
    trigger,
    clearErrors,
  } = useForm({
    resolver: zodResolver(PetRegistrationFormSchema),
    defaultValues: {
      is_vaccinated: false,
      is_sterilized: false,
      good_with_kids: false,
      good_with_dogs: false,
      good_with_cats: false,
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    clearErrors();
  }, [step, clearErrors]);

  const handleNextStep = async () => {
    const currentStepSchema = stepSchema[step as StepKey];
    const currentStepFields = Object.keys(
      currentStepSchema.shape
    ) as (keyof PetRegistrationFormType)[];

    const isValid = await trigger(currentStepFields, { shouldFocus: true });

    if (isValid) {
      clearErrors();
      setStep(step + 1);
    }
  };

  const onSubmit = async (data: PetRegistrationFormType) => {
    const ownerId = session.data?.user.id;

    if (!ownerId) {
      console.error("No se puede publicar sin ID de propietario.");
      return;
    }

    try {
      const result = await createPetAdoption(data, ownerId);

      if (result.success) {
        router.push("/new-pet/success");
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex w-full bg-white border-1 border-gray-300 rounded-xl">
      <CreatePetFormHeader step={step} MAX_STEP={MAX_STEP} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" rounded-xl space-y-8 flex-2 p-12"
      >
        {step == 1 && (
          <>
            <h2 className="text-xl font-poppins font-light">
              Datos basicos de la mascota
            </h2>
            <CreatePetStep1Form
              errors={errors}
              register={register}
              control={control}
            />
          </>
        )}

        {step == 2 && (
          <>
            <h2 className="text-lg font-medium">Características y Cuidados</h2>
            <CreatePetStep2Form errors={errors} register={register} />
          </>
        )}

        {step == 3 && (
          <>
            <h2 className="text-lg font-medium">
              Datos de Contacto y Ubicación
            </h2>
            <CreatePetStep3Form errors={errors} register={register} />
          </>
        )}

        <div className="w-full flex justify-between">
          <Button
            type="button"
            disabled={step == MIN_STEP}
            onClick={() => setStep(step - 1)}
          >
            Atras
          </Button>
          {step < MAX_STEP ? (
            <Button type="button" onClick={handleNextStep}>
              Siguiente
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting ? "Publicando..." : "Publicar Mascota"}
            </Button>
          )}
        </div>
      </form>
    </main>
  );
};

export default PatitasCreateNewPetPage;
