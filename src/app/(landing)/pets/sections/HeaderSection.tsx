import React from "react";

import { SearchInput } from "../components/search";

interface HeaderSectionProps {
  search: string;
  setSearch: (value: string) => void;
}

export const HeaderSection = ({ search, setSearch }: HeaderSectionProps) => {
  return (
    <header className="w-full flex flex-col justify-center text-center gap-8 z-20 pt-8 pb-20">
      <div className="space-y-6">
        <h2 className="text-5xl font-semibold items-center">
          Encuentra a tu nuevo
          <span className="text-primary font-bold"> mejor amigo</span>
        </h2>
        <p className="text-xl text-gray-600 prose leading-8">
          Explora cientos de mascotas esperando un hogar lleno de amor. Usa
          nuestros filtros <br />
          para encontrar la compañía perfecta para ti.
        </p>
      </div>

      <SearchInput search={search} setSearch={setSearch} />
    </header>
  );
};
