"use client";

import React, { useMemo, useState, useEffect } from "react";

import SectionContainer from "../components/SectionContainer";

import { HeaderSection } from "./sections/HeaderSection";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

import { parseAsString, useQueryState } from "nuqs";

import { getAllPets } from "./actions/getPets";
import { Pet } from "@/db/schema/pet";

import PetList from "./sections/PetList";

const PatitasMascotsPage = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  useEffect(() => {
    const fetchPets = async () => {
      const allPets = await getAllPets();
      setPets(allPets);
      setIsLoading(false);
    };

    fetchPets();
  }, [search]);

  const filteredPets = useMemo(() => {
    if (!search) return pets;

    const searchLower = search.toLowerCase();

    return pets.filter((pet) =>
      [pet.name, pet.species, pet.location_city, pet.species].some((f) =>
        f?.toLowerCase().includes(searchLower)
      )
    );
  }, [search, pets]);

  return (
    <main className="pt-48">
      <HeaderSection search={search} setSearch={setSearch} />

      <SectionContainer classname="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-10">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <PetList filteredPets={filteredPets} />
        )}
      </SectionContainer>
    </main>
  );
};

export default PatitasMascotsPage;
