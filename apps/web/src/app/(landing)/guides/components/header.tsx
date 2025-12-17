import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";

function GuidesPageHeader() {
  return (
    <header className="w-full flex flex-col justify-center text-center gap-4 sm:gap-6 lg:gap-8 z-20 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-5xl mx-auto">
        <BlurFade
          delay={0.2}
          inView
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tighter leading-tight"
        >
          Guías Esenciales para Padres de Mascotas
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <p className="block sm:hidden text-sm text-black/90 leading-relaxed max-w-md mx-auto">
            Consejos de expertos sobre nutrición, comportamiento y salud para tu
            compañero.
          </p>

          <p className="hidden sm:block text-base md:text-lg lg:text-xl text-black/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
            Descubre consejos de expertos y profundiza tus conocimientos sobre
            nutrición, comportamiento y salud preventiva para asegurar la
            felicidad y el bienestar de tu compañero.
          </p>
        </BlurFade>
      </div>

      <BlurFade
        delay={0.6}
        inView
        className="max-w-md sm:max-w-xs mx-auto w-full"
      >
        <Button className="w-full sm:w-auto" asChild>
          <a href={"/pets"} rel="noopener">
            Ver Mascotas en Adopción
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
      </BlurFade>
    </header>
  );
}

export default GuidesPageHeader;
