import { BlurFade } from "@/components/ui/blur-fade";

const MissionVision = () => {
  return (
    <div className="flex gap-2 sm:gap-3 lg:gap-4 flex-col px-4 sm:px-6 lg:px-8">
      <BlurFade delay={0.4} inView>
        <h2 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-tight sm:leading-snug">
          Nuestra Misión y Visión
        </h2>
      </BlurFade>
      <BlurFade delay={0.6} inView>
        <p className="block sm:hidden text-sm font-raleway text-muted-foreground leading-relaxed">
          Transformamos vidas conectando mascotas con familias. Buscamos ser
          líderes en adopciones responsables.
        </p>

        <p className="hidden sm:block text-base md:text-lg font-raleway text-muted-foreground leading-relaxed max-w-4xl">
          En Patitas, nuestra misión es transformar vidas: las de las mascotas
          que esperan un hogar y las de las personas que anhelan un compañero.
          Buscamos ser la plataforma líder en adopciones, fomentando la
          responsabilidad, la transparencia y el amor incondicional en cada
          conexión.
        </p>
      </BlurFade>
    </div>
  );
};

export default MissionVision;
