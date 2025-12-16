import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

import Link from "next/link";

const HeroButtons = () => {
  return (
    <div className="space-x-2 sm:space-x-3 flex sm:gap-1 md:gap-3 justify-center w-full">
      <MagneticButton>
        <Link href={"/pets"}>
          <Button className="flex-1 text-white py-5 md:py-6 md:px-12 text-sm md:text-md rounded-lg hover:bg-primary/80 transition-color">
            Explorar Mascotas
          </Button>
        </Link>
      </MagneticButton>

      <Link href={"/new-pet"}>
        <Button
          variant="secondary"
          className="flex-1 text-white bg-secondary/90 py-5 md:py-6 md:px-12 rounded-lg text-sm md:text-md hover:bg-secondary/80 transition-color"
        >
          Publicar mascota
        </Button>
      </Link>
    </div>
  );
};

export default HeroButtons;
