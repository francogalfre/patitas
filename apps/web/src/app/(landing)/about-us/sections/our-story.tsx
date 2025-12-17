import { BlurFade } from "@/components/ui/blur-fade";

const OurStory = () => {
  return (
    <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-col text-start sm:text-end px-4 sm:px-6 lg:px-8">
      <BlurFade delay={0.8} inView>
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight sm:leading-snug">
          La Historia Detrás de Cada Patita
        </h2>
      </BlurFade>
      <BlurFade delay={1} inView>
        <p className="block sm:hidden text-sm font-raleway text-muted-foreground leading-relaxed">
          Patitas nació del deseo de cambiar la realidad de animales
          abandonados, creando un espacio seguro que conecta y educa.
        </p>

        <p className="hidden sm:block text-base md:text-lg font-raleway text-muted-foreground leading-relaxed max-w-4xl ml-auto">
          Patitas nació de una experiencia personal profunda y un deseo
          inquebrantable de cambiar la realidad de miles de animales
          abandonados. Comprendimos la necesidad de un espacio seguro y
          confiable que no solo conectara a mascotas con adoptantes, sino que
          también educara y construyera una comunidad. Es nuestro granito de
          arena para un mundo más compasivo.
        </p>
      </BlurFade>
    </div>
  );
};

export default OurStory;
