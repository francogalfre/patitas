import Image from "next/image";
import Link from "next/link";

import React from "react";

import { Button } from "@/components/ui/button";

import HeroStats from "../components/HeroStats";

const HeroSection = () => {
  return (
    <div className="flex w-full justify-between pt-36 gap-16">
      <div className="w-contain space-y-12">
        <header className="space-y-6">
          <h2 className="text-5xl">
            Encuentra a tu nuevo{" "}
            <span className="text-7xl font-bold text-primary  ">
              mejor amigo
            </span>
          </h2>
          <p className="text-lg text-pretty">
            Conectamos mascotas necesitadas con familias amorosas en toda
            Argentina. Cada adopción es una segunda oportunidad para ser feliz.
          </p>
          <div className="space-x-3">
            <Button
              size={"lg"}
              className="text-white py-6 text-md rounded-sm hover:bg-primary/80 transition-color"
            >
              <Link href={"/adoptar"}>Explorar Mascotas</Link>
            </Button>
            <Button
              size={"lg"}
              variant="secondary"
              className="text-white py-6 text-md hover:bg-secondary/80 transition-color"
            >
              Publicar Mascota
            </Button>
          </div>
        </header>
        <HeroStats />
      </div>
      <div className="relative w-full">
        <Image
          priority
          fetchPriority="high"
          width={660}
          height={100}
          src="/landing/hero.webp"
          alt="Ilustración pastel de perro, gato, conejo y pájaro dentro de una burbuja verde menta para sitio de adopción de mascotas"
          className="rounded-xl object-cover relative"
        />
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-16 z-[-2] opacity-50"
        >
          <path
            fill="#B2D8D8"
            d="M53.7,-58.5C65.5,-54.2,67.8,-33.3,68.7,-14.2C69.5,4.8,68.8,22.1,60.1,32.4C51.4,42.7,34.7,46.2,19.5,50.3C4.3,54.4,-9.5,59.1,-23.1,56.9C-36.7,54.8,-50.1,45.7,-58.6,32.9C-67.1,20.1,-70.6,3.5,-66.9,-10.8C-63.2,-25,-52.1,-37,-39.8,-41.1C-27.4,-45.3,-13.7,-41.6,3.7,-45.9C21,-50.3,42,-62.7,53.7,-58.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
