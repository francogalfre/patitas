import React from 'react'
import Link from 'next/link';

import { ArrowLeft } from "lucide-react"

interface CreatePetFormHeaderProps {
    step: number;
    MAX_STEP: number
}

const CreatePetFormHeader = ({ step, MAX_STEP }: CreatePetFormHeaderProps) => {
  return (
    <>
      <Link href={"/"} className="flex items-center gap-2">
        <ArrowLeft />
        <span className='font-semibold'>Volver</span>
      </Link>

      <header className="space-y-3">
        <h2 className="text-2xl font-medium">
          Publicar una mascota en adopción
        </h2>
        <p>Ayúdanos a encontrarle el hogar perfecto a tu amigo.</p>
        <span>
          Paso: {step} de {MAX_STEP}
        </span>
      </header>
    </>
  )
}

export default CreatePetFormHeader