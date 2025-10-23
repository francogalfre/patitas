import React from "react";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative max-w-2xl w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 bg-white pl-10 pr-4 text-start placeholder:text-gray-500 border-gray-300 text-xl font-raleway"
          placeholder="Buscar mascotas por nombre, raza o ubicación..."
        />
      </div>
    </div>
  );
};
