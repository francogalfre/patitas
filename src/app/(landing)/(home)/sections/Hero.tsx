"use client"

import Image from "next/image";
import Link from "next/link";

import React from "react";

import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

import { motion } from "motion/react";

const MotionImage = motion.create(Image)
const MotionLink = motion.create(Link)

export const HeroSection = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center z-0" 
      style={{ backgroundImage: "url('/landing/hero-background.webp')" }}
    > 
      <div className="flex w-full mx-auto z-10 text-center justify-center">
        <header className="space-y-6">
          <MotionImage 
            priority={true} 
            src={"/patitas/logo1000.webp"} 
            width={100} height={100} 
            alt="Logo de Patitas" 
            className="justify-self-center"
            whileHover={{ scale: 1.1, rotate: 10 }} 
            initial={{ opacity: 0, y: -10}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1.5, stiffness: 200}}
          />

          <div className="space-y-6 pt-6">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.1, stiffness: 200}}
              className="text-6xl font-serif text-white font-normal tracking-tighter"
            >
              Encuentra a tu nuevo mejor amigo
            </motion.h1>
            <motion.p 
              className="text-lg text-pretty text-white/90 w-3xl justify-self-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.2,  stiffness: 200}}
            >
              Conectamos mascotas necesitadas con familias amorosas en toda
              Argentina. Cada adopción es una segunda oportunidad para ser
              feliz.
            </motion.p>
          </div>

          <motion.div 
            className="space-x-3 flex gap-3 justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.3, stiffness: 200}}  
          >
            <MagneticButton>
              <Link href={"/pets"}>
                <Button
                  size={"lg"}
                  className="text-white py-6 text-md rounded-lg hover:bg-primary/80 transition-color"
                >
                  Explorar Mascotas
                </Button>
              </Link>
            </MagneticButton>

            <MotionLink 
              whileHover={{ scale: 1.02, translateY: -3 }}
              transition={{ type: "spring" }}
              href={"/new-pet"}>
              <Button
                size={"lg"}
                variant="secondary"
                className="text-white bg-secondary/90 py-6 rounded-lg text-md hover:bg-secondary/80 transition-color"
              >
                Publicar nueva mascota
              </Button>
            </MotionLink>
          </motion.div>
        </header>
      </div>

      <motion.div
        initial={{ backdropFilter: "blur(20px)" }}
        animate={{ backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: "easeOut" }} 
        className="absolute inset-0 bg-black/50 backdrop-brightness-90 h-screen"  />
    </div>
  );
};
