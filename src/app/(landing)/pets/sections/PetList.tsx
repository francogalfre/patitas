import React from "react";

import PetCard from "../components/pet-card";
import { Pet } from "@/db/schema/pet";

interface PetListProps {
  filteredPets: Pet[];
}

const PetList = ({ filteredPets }: PetListProps) => {
  return (
    <>
      {filteredPets.length > 0 ? (
        filteredPets.map((pet) => <PetCard {...pet} key={pet.id} />)
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
