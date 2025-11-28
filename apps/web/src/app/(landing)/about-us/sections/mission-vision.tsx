import { BlurFade } from "@/components/ui/blur-fade";

const MissionVision = () => {
  return (
    <div className="flex gap-2 flex-col">
      <BlurFade delay={0.4} inView>
        <h2 className="font-poppins text-3xl font-medium tracking-tight sm:max-w-6xl sm:text-4xl leading-14">
          Nuestra Misión y Visión
        </h2>
      </BlurFade>
      <BlurFade delay={0.6} inView>
        <p className="text-md max-w-[600px] sm:max-w-6xl font-raleway text-muted-foreground sm:text-lg">
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
