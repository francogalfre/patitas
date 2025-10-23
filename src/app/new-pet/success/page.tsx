"use client";

import React, { useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Confetti, type ConfettiRef } from "@/components/ui/confetti";

const PatitasCreateNewPetSuccessPage = () => {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <>
      <div className="bg-white max-w-lg w-full p-12 rounded-xl text-center z-10 space-y-6">
        <Image
          className="justify-self-center"
          src="/patitas/logo1000.webp"
          width={100}
          height={100}
          alt="Logo de Patitas"
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl text-primary font-semibold">
              ¡Felicidades!
            </h2>
            <h4 className="text-lg">Tu mascota ya fue cargada en Patitas.</h4>
          </div>
          <p>
            ¡Gracias por ayudar a que más peluditos encuentren una familia! 🐶
          </p>
        </div>

        <Link href={"/"}>
          <Button size={"lg"} className="text-md py-6 w-full">
            Volver al inicio
          </Button>
        </Link>
      </div>

      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </>
  );
};

export default PatitasCreateNewPetSuccessPage;
