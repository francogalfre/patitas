"use client";

import Image from "next/image";

import { motion } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";

import HeroButtons from "../components/hero/hero-buttons";

export const HeroSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/landing/hero-background.webp')" }}
    >
      <motion.div
        initial={{ backdropFilter: "blur(20px)" }}
        animate={{ backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-black/50 backdrop-brightness-90"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        <header className="space-y-6 sm:space-y-8 lg:space-y-10 px-4">
          <BlurFade delay={0.2}>
            <Image
              priority={true}
              src="/patitas/logo1000.webp"
              width={100}
              height={100}
              alt="Logo de Patitas"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto hover:scale-105 hover:rotate-12 transition-transform duration-300"
            />
          </BlurFade>

          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <BlurFade delay={0.4}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white font-normal tracking-tighter">
                Encuentra a tu nuevo mejor amigo
              </h1>
            </BlurFade>

            <BlurFade delay={0.6}>
              <p className="block sm:hidden text-sm text-white/90 max-w-xl mx-auto leading-relaxed px-4">
                Conectamos mascotas con familias listas para amar. Cada adopción
                es una nueva oportunidad.
              </p>

              <p className="hidden sm:block text-base md:text-lg lg:text-xl text-white/90 max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4">
                Conectamos mascotas necesitadas con familias amorosas en toda
                Argentina. Cada adopción es una segunda oportunidad para ser
                feliz.
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.8}>
            <HeroButtons />
          </BlurFade>
        </header>
      </div>
    </div>
  );
};
