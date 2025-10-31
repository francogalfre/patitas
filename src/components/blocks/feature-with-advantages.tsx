"use client"

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { motion } from "motion/react";

interface Feature {
  title: string,
  description: string
}

interface FeaturesSectionProps {
  features: Array<Feature>
}

function Feature({ features }: FeaturesSectionProps) {
  return (
    <section className="w-full lg:py-16">
      <div className="container mx-auto">
        <header className="flex gap-4 py-10 lg:py-18 flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: -10, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.1, stiffness: 200 }}
          >
            <Badge className="text-md px-4 py-1 font-medium font-raleway bg-primary/70 mb-4">¿Por qué elegir Patitas?</Badge>
          </motion.div>
          <div className="flex gap-4 flex-col">
            <motion.h2
              initial={{ opacity: 0, y: -10, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.5, delay: 0.2, stiffness: 200 }} 
              className="font-poppins text-3xl font-medium tracking-tight sm:max-w-6xl sm:text-5xl leading-14">
              Todo lo que necesitas para adoptar con confianza
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 1.5, delay: 0.3, stiffness: 200 }} 
              className="text-md max-w-[600px] sm:max-w-6xl font-raleway text-muted-foreground sm:text-xl">
              Facilitamos cada paso para que adoptes de forma simple, segura y responsable. 
              Desde filtros inteligentes hasta el contacto con refugios, te guiamos para decidir mejor.
            </motion.p>
          </div>
        </header>

        <div className="w-full">
          <ul role="list" className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="w-full"
                initial={{ opacity: 0, y: -10, x: -20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 1.5, delay: 0.4 * index, stiffness: 200 }}
              >
                <article className="flex flex-row gap-6 items-start">
                  <Check aria-hidden className="w-6 h-6 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-medium font-poppins">{feature.title}</h3>
                    <p className="text-muted-foreground text-md font-raleway">
                      {feature.description}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export { Feature };
