"use client";

import React, { useMemo } from "react";

import SectionContainer from "../components/SectionContainer";

import { HeaderSection } from "./sections/HeaderSection";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

import { pets } from "./mock-pets";
import Link from "next/link";

import { parseAsString, useQueryState } from "nuqs";

const PatitasMascotsPage = () => {
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  const filteredPets = useMemo(() => {
    if (!search) return pets;

    const searchLower = search.toLowerCase();

    return pets.filter((pet) => {
      return (
        pet.name.toLowerCase().includes(searchLower) ||
        pet.breed.toLowerCase().includes(searchLower) ||
        pet.location.toLowerCase().includes(searchLower) ||
        pet.species.toLowerCase().includes(searchLower) ||
        pet.description.toLowerCase().includes(searchLower)
      );
    });
  }, [search]);

  return (
    <>
      <HeaderSection search={search} setSearch={setSearch} />

      <SectionContainer classname="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <Link
              key={pet.id}
              href={`/mascotas/${pet.id}`}
              className="cursor-pointer"
            >
              <DirectionAwareHover imageUrl={pet.image}>
                <h2 className="text-xl">{pet.name}</h2>
                <p>
                  {pet.gender} - {pet.age} años
                </p>
                <p className="text-gray-200">{pet.location}</p>
              </DirectionAwareHover>
            </Link>
          ))
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
      </SectionContainer>
    </>
  );
};

export default PatitasMascotsPage;
