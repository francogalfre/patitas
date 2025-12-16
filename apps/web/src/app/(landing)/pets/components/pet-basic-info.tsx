import type { Pet } from "@/types/pet";

export default function PetBasicInfo({ pet }: { pet: Pet }) {
  return (
    <div className="mb-8 sm:mb-10 lg:mb-12 font-normal md:text-md xl:text-lg font-raleway grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
      <p>
        Especie: <span className="capitalize font-medium">{pet.species}</span>
      </p>
      <p>
        Tamaño: <span className="capitalize font-medium">{pet.size}</span>
      </p>
      <p>
        Género: <span className="capitalize font-medium">{pet.gender}</span>
      </p>
    </div>
  );
}
