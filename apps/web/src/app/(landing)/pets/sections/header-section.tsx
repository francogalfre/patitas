import { BlurFade } from "@/components/ui/blur-fade";
import { HeaderSearchInput } from "../components/";

interface HeaderSectionProps {
  search: string;
  setSearch: (value: string) => void;
}

export const HeaderSection = ({ search, setSearch }: HeaderSectionProps) => {
  return (
    <header className="w-full flex flex-col justify-center text-center gap-6 sm:gap-8 z-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-5xl mx-auto">
        <BlurFade
          delay={0.2}
          inView
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tighter leading-tight"
        >
          Adopta a tu nuevo mejor amigo
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <p className="block sm:hidden text-sm text-black/90 leading-relaxed max-w-md mx-auto">
            Explora mascotas esperando un hogar. Usa los filtros para encontrar
            tu compañía perfecta.
          </p>

          <p className="hidden sm:block text-base md:text-lg lg:text-xl text-black/90 leading-relaxed max-w-2xl lg:max-w-3xl mx-auto">
            Explora cientos de mascotas esperando un hogar lleno de amor. Usa
            nuestros filtros para encontrar la compañía perfecta para ti.
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={0.6} inView className="max-w-2xl mx-auto w-full">
        <HeaderSearchInput search={search} setSearch={setSearch} />
      </BlurFade>
    </header>
  );
};
