import { BlurFade } from "@/components/ui/blur-fade";

const OurStory = () => {
  return (
    <div className="flex gap-2 flex-col text-end">
      <BlurFade delay={0.8} inView>
        <h2 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-6xl sm:text-4xl leading-14">
          La Historia Detrás de Cada Patita
        </h2>
      </BlurFade>
      <BlurFade delay={1} inView>
        <p className="text-md max-w-[600px] sm:max-w-6xl font-raleway text-muted-foreground sm:text-lg">
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
