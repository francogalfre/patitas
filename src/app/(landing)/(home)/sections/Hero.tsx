"use client"

import Image from "next/image";
import Link from "next/link";

import React from "react";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

import Navbar from "../../components/navbar";

const MotionImage = motion(Image)

export const HeroSection = () => {
  return (
    <div 
      className="relative w-full bg-cover bg-center bg-no-repeat rounded-4xl flex items-center justify-center" 
      style={{ backgroundImage: "url('/landing/hero-background.webp')", minHeight: "calc(100vh - 32px)",}}
    >
      <div className="absolute top-4 left-0 w-full z-20">
        <Navbar />
      </div>
      
      <div className="flex w-full mx-auto z-10 text-center justify-center">
        <header className="space-y-6">
          <MotionImage 
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
            className="space-x-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.3, stiffness: 200}}  
          >
            <Link href={"/pets"}>
              <Button
                size={"lg"}
                className="text-white py-6 text-md rounded-sm hover:bg-primary/80 transition-color"
              >
                Explorar Mascotas
              </Button>
            </Link>

            <Link href={"/new-pet"}>
              <Button
                size={"lg"}
                variant="secondary"
                className="text-white py-6 text-md hover:bg-secondary/80 transition-color"
              >
                Publicar nueva mascota
              </Button>
            </Link>
          </motion.div>
        </header>
      </div>

      <div className="absolute inset-0 bg-black/50 backdrop-brightness-90 rounded-4xl" />
    </div>
  );
};
