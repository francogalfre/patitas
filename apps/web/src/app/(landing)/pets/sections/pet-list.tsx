import { PetCard as PetsCard } from "@/components/pet-card";
import { BlurFade } from "@/components/ui/blur-fade";
import type { Pet } from "@/db/schema/pet";

interface PetListProps {
  filteredPets: Pet[];
}

const PetList = ({ filteredPets }: PetListProps) => {
  return (
    <>
      {filteredPets.length > 0 ? (
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet, index) => (
            <BlurFade delay={0.3 * index} key={pet.id}>
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
