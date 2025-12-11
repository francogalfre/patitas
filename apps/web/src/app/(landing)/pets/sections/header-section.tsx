import { BlurFade } from "@/components/ui/blur-fade";
import { HeaderSearchInput } from "../components/";

interface HeaderSectionProps {
  search: string;
  setSearch: (value: string) => void;
}

export const HeaderSection = ({ search, setSearch }: HeaderSectionProps) => {
  return (
    <header className="w-full flex flex-col justify-center text-center gap-8 z-20 pb-20">
      <div className="space-y-6">
        <BlurFade
          delay={0.2}
          inView
          className="text-5xl items-center font-serif font-normal tracking-tighter"
        >
          Encuentra a tu nuevo mejor amigo
        </BlurFade>
        <BlurFade
          delay={0.4}
          inView
          className="text-lg text-pretty text-black/90 w-3xl justify-self-center"
        >
          Explora cientos de mascotas esperando un hogar lleno de amor. Usa
          nuestros filtros para encontrar la compañía perfecta para ti.
        </BlurFade>
      </div>

      <BlurFade delay={0.6} inView>
        <HeaderSearchInput search={search} setSearch={setSearch} />
      </BlurFade>
    </header>
  );
};
