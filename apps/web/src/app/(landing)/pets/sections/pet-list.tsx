import { PetCard as PetsCard } from "@/components/pet-card";
import { BlurFade } from "@/components/ui/blur-fade";

import type { Pet } from "@/types/pet";
import PageButtons from "./page-buttons";

interface PetListProps {
  pets: Pet[];
  page: number;
  setPage: (value: number) => void;
  hasNextPage: boolean;
}

const PetList = ({ page, setPage, pets, hasNextPage }: PetListProps) => {
  return (
    <>
      {pets.length > 0 ? (
        <>
          <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet, index) => (
              <BlurFade delay={0.1 * index} key={pet.id} inView>
                <PetsCard
                  id={pet.id}
                  imageUrl={pet.photos[0]}
                  name={pet.name}
                  location={pet.location_city}
                  specie={pet.species}
                  gender={pet.gender}
                  is_adopted={pet.is_adopted}
                />
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={pets.length * 0.05} inView>
            <PageButtons
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </BlurFade>
        </>
      ) : (
        <div className="col-span-full text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No se encontraron mascotas
          </h3>
          <p className="text-gray-600">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      )}
    </>
  );
};

export default PetList;
