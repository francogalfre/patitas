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

import { validSpecies, validAge, validSize, validGender } from "./petEnums";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FormTextInput } from "@/components/text-input";

import {
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

import { db } from "@/db";
import { pet } from "@/db/schema/pet";
import { authClient } from "@/lib/auth-client";
import { createPetAdoption } from "./actions/createPet";

import CreatePetStep1Form from "./components/forms/step1";

const PatitasCreateNewPetPage = () => {
  const [step, setStep] = useState(MIN_STEP);
  const session = authClient.useSession();

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
      good_with_kids: false,
      good_with_dogs: false,
      good_with_cats: false,
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

  const onSubmit = async (data: PetRegistrationFormType) => {
    console.log("¡Formulario de Mascota Completo!", data);

    const ownerId = session.data?.user.id;

    if (!ownerId) {
      console.error("No se puede publicar sin ID de propietario.");
      return;
    }

    try {
      const result = await createPetAdoption(data, ownerId);

      if (result.success) {
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (err) {
      console.error(err);
    }
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
        className="bg-white border-1 border-gray-300 p-12 rounded-xl space-y-8"
      >
        {step == 1 && (
          <>
            <h2 className="text-xl font-poppins font-light">
              Datos basicos de la mascota
            </h2>
            <CreatePetStep1Form errors={errors} register={register} />
          </>
        )}

        {step == 2 && (
          <>
            <h2 className="text-lg font-medium">Características y Cuidados</h2>

            <Label htmlFor="photos">Fotos de la mascota (Opcional)</Label>
            <input
              {...register("photos")}
              type="file"
              id="photos"
              className="mb-4"
            />
            {errors.photos && (
              <p className="text-red-500 text-sm">
                {(errors.photos as any).message}
              </p>
            )}
            <br />

            <div className="space-y-4">
              <Label className="block text-md font-normal text-gray-700">
                Comportamiento y Estado
              </Label>
              <div className="flex items-center gap-2">
                <input
                  {...register("good_with_kids")}
                  type="checkbox"
                  id="good_with_kids"
                />
                <Label htmlFor="good_with_kids">Se lleva bien con niños</Label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  {...register("good_with_dogs")}
                  type="checkbox"
                  id="good_with_dogs"
                />
                <Label htmlFor="good_with_dogs">
                  Se lleva bien con otros perros
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  {...register("good_with_cats")}
                  type="checkbox"
                  id="good_with_cats"
                />
                <Label htmlFor="good_with_cats">Se lleva bien con gatos</Label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  {...register("is_sterilized")}
                  type="checkbox"
                  id="is_sterilized"
                />
                <Label htmlFor="is_sterilized">Está esterilizado/a</Label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  {...register("is_vaccinated")}
                  type="checkbox"
                  id="is_vaccinated"
                />
                <Label htmlFor="is_vaccinated">Está vacunado/a</Label>
              </div>
            </div>
            <br />
            <div className="space-y-2">
              <Label className="text-md font-normal text-gray-700 flex items-center gap-1">
                Cuidados especiales o condiciones medicas (Opcional)
              </Label>
              <Textarea
                {...register("special_care")}
                placeholder="description"
                className="border-gray-400"
              />
            </div>
          </>
        )}

        {step == 3 && (
          <div className="space-y-4">
            <h2 className="text-lg pb-8 font-medium">
              Datos de Contacto y Ubicación
            </h2>

            <FormTextInput
              type="text"
              placeholder="Tu nombre completo"
              label="Nombre de Contacto"
              registration={register("contact_name")}
              error={errors.contact_name as FieldError}
              isRequired
            />
            <FormTextInput
              type="tel"
              placeholder="Teléfono (ej: +549...)"
              label="Teléfono de Contacto"
              registration={register("contact_phone")}
              error={errors.contact_phone as FieldError}
              isRequired
            />
            <FormTextInput
              type="email"
              placeholder="correo@ejemplo.com"
              label="Correo de Contacto"
              registration={register("contact_email")}
              error={errors.contact_email as FieldError}
              isRequired
            />
            <FormTextInput
              type="text"
              placeholder="Ciudad donde se encuentra la mascota"
              label="Ciudad"
              registration={register("location_city")}
              error={errors.location_city as FieldError}
              isRequired
            />
          </div>
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
    </>
  );
};

export default PatitasCreateNewPetPage;
