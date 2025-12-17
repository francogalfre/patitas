import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

const AboutUsPageHeader = () => {
  return (
    <>
      <header className="w-full flex flex-col justify-center text-center gap-4 sm:gap-6 lg:gap-8 z-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-5xl mx-auto">
          <BlurFade
            delay={0.2}
            inView
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tighter leading-tight"
          >
            Sobre Patitas: Conectando Corazones Peludos
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <p className="block sm:hidden text-sm text-black/90 leading-relaxed max-w-md mx-auto">
              Facilitamos la adopción responsable, conectando mascotas con
              familias amorosas.
            </p>

            <p className="hidden sm:block text-base md:text-lg lg:text-xl text-black/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
              En Patitas, creemos en el poder de dar una segunda oportunidad.
              Facilitamos la adopción responsable de mascotas, construyendo
              puentes entre animales que buscan un hogar y familias amorosas.
            </p>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.6}
          inView
          className="max-w-md sm:max-w-xs mx-auto w-full"
        >
          <Button className="w-full sm:w-auto" asChild>
            <a href="/pets" rel="noopener">
              Ver Mascotas en Adopción
              <ArrowRight className="ml-2 size-4" />
            </a>
          </Button>
        </BlurFade>
      </header>

      <BlurFade delay={0.8} inView className="w-full px-4 sm:px-6 lg:px-8">
        <Image
          className="mb-8 sm:mb-12 lg:mb-16 rounded-xl sm:rounded-2xl w-full max-w-5xl mx-auto"
          src="/landing/hero-background.webp"
          alt="Imagen de animales felices"
          width={1280}
          height={1000}
        />
      </BlurFade>
    </>
  );
};

export default AboutUsPageHeader;
