"use client";

import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import type { Pet } from "@/types/pet";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

import { getAllPets } from "./actions/getAllPets";
import { HeaderSection } from "./sections/header-section";

import SectionContainer from "../components/section-container";
import PetList from "./sections/pet-list";

const PatitasMascotsPage = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasNextPage, setHasNextPage] = useState(false);

  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));

  const [search, setSearch] = useQueryState(
    "search",
    parseAsString.withDefault("")
  );

  useEffect(() => {
    const fetchPets = async () => {
      setIsLoading(true);

      try {
        const { pets, hasNextPage, message, success } = await getAllPets(
          page,
          search
        );

        if (!success) {
          console.error(message);
          setPets([]);
          return;
        }

        setPets(pets);
        setHasNextPage(hasNextPage);
      } catch (error) {
        console.error("Error fetching pets:", error);
        setPets([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPets();
  }, [search, page]);

  return (
    <main className="pt-48">
      <HeaderSection search={search} setSearch={setSearch} />

      <SectionContainer classname="w-full">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-20">
            <LoadingSpinner />
          </div>
        ) : (
          <PetList
            pets={pets}
            page={page}
            setPage={setPage}
            hasNextPage={hasNextPage}
          />
        )}
      </SectionContainer>
    </main>
  );
};

export default PatitasMascotsPage;
