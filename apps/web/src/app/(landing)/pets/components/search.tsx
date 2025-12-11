import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative max-w-xl w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-14 bg-white pl-10 pr-5 text-start rounded-full placeholder:text-gray-500 border-gray-300 text-md font-raleway placeholder:text-md"
          placeholder="Buscar mascotas por nombre, raza o ubicación..."
        />
      </div>
    </div>
  );
};

export default SearchInput;
