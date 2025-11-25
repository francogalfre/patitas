import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUsPageHeader = () => {
  return (
    <header className="relative text-center space-y-4 mx-auto justify-center items-center pb-36">
      <BlurFade delay={0.2} inView className="max-w-5xl w-full">
        <h2 className="text-5xl items-center mx-auto text-center font-serif font-normal tracking-tighter px-4">
          Sobre Patitas: Conectando Corazones Peludos
        </h2>
      </BlurFade>
      <BlurFade delay={0.4} inView>
        <p className="text-lg text-pretty text-black/90 max-w-5xl w-full justify-self-center">
          En Patitas, creemos en el poder de dar una segunda oportunidad.
          Facilitamos la adopción responsable de mascotas, construyendo puentes
          entre animales que buscan un hogar y familias amorosas.
        </p>
      </BlurFade>
      <BlurFade delay={0.8}>
        <Button className="w-full sm:w-auto" asChild>
          <a href={"/adopcion"} rel="noopener">
            Ver Mascotas en Adopción
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </BlurFade>
    </header>
  );
};

export default AboutUsPageHeader;
