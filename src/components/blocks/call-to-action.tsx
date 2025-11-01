"use client"

import { MoveRight, Heart, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { motion } from "motion/react";

interface CallToActionSectionProps {
  title: string,
  description: string
}

function CTA({ title, description }: CallToActionSectionProps) {
  return (
    <div className="w-full py-20 lg:py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10, x: -20, backdropFilter: "blur(50px)" }}
          whileInView={{ opacity: 1, y: 0, x: 0, backdropFilter: "blur(0px)" }}
          transition={{ type: "spring", duration: 3, delay: 0.1, stiffness: 200 }}
          viewport={{ once: true }}
          className="flex flex-col text-center bg-primary/90 rounded-2xl p-4 lg:p-14 gap-6 items-center">
          <div className="flex flex-col gap-4">
            <motion.h3 className="font-serif text-white text-3xl font-normal tracking-tighter sm:text-5xl leading-14"
            >
              {title}
            </motion.h3>
            <p className="text-md font-raleway text-white/90 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button 
              size={"lg"} 
              variant="outline" 
              className="py-6 gap-2 rounded-lg text-md font-raleway" 
            >
              Explorar Mascotas <Heart className="w-4 h-4" />
            </Button>
            <Button 
              size={"lg"} 
              variant="secondary"
              className="text-white bg-secondary/90 py-6 gap-2 rounded-lg text-md hover:bg-secondary/80 transition-color font-raleway"
            >
              Publicar Mascota <Plus className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export { CTA };
