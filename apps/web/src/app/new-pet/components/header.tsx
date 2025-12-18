import React from "react";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

interface CreatePetFormHeaderProps {
  step: number;
  MAX_STEP: number;
}

const CreatePetFormHeader = ({ step, MAX_STEP }: CreatePetFormHeaderProps) => {
  return (
    <div className="flex flex-col bg-gray-100 p-6 md:p-12 rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none gap-6 md:gap-12 w-full lg:w-auto lg:min-w-[320px]">
      <Link href={"/"} className="flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Volver</span>
      </Link>

      <header className="space-y-3">
        <h2 className="text-xl md:text-2xl font-medium">
          Publicar una mascota en adopción
        </h2>
        <p className="text-sm md:text-base">
          Ayúdanos a encontrarle el hogar perfecto a tu amigo.
        </p>
        <span className="text-sm md:text-base font-medium">
          Paso: {step} de {MAX_STEP}
        </span>
      </header>
    </div>
  );
};

export default CreatePetFormHeader;
