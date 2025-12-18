import Image from "next/image";
import { PetCard } from "@/components/pet-card";
import type { Pet } from "@/types/pet";

interface PetsListProps {
  isOwner: boolean;
  pets: Pet[] | [];
}

const PetsList = ({ isOwner, pets }: PetsListProps) => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-medium font-poppins mb-4 sm:mb-6">
        {isOwner ? "Tus mascotas" : "Mascotas publicadas"}
      </h3>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {pets.length <= 0 ? (
          <div className="col-span-full flex flex-col gap-3 sm:gap-4 justify-center items-center py-6 sm:py-8">
            <Image
              src="/sad-dog-illustration.webp"
              width={120}
              height={120}
              alt="Sad Dog Illustration"
              className="size-20 sm:size-24 md:size-[120px]"
            />
            <div className="max-w-lg w-full px-4">
              <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold font-raleway">
                Sin mascotas publicadas
              </h2>
              <p className="text-center text-sm sm:text-base text-gray-600 mt-1.5 sm:mt-2">
                No hay mascotas por ahora. Cuando el usuario publique una
                aparecerán aquí.
              </p>
            </div>
          </div>
        ) : (
          pets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              imageUrl={pet.photos[0]}
              name={pet.name}
              location={pet.location_city}
              specie={pet.species}
              gender={pet.gender}
              is_adopted={pet.is_adopted}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default PetsList;
