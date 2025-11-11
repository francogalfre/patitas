"use client"

import React from "react";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { motion } from "motion/react";

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
}

export const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  return (
    <motion.div 
      className="w-full flex justify-center items-center"
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 1.5, delay: 0.3, stiffness: 200}} 
    >
      <div className="relative max-w-xl w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-400" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-12 bg-white pl-10 pr-5 text-start rounded-full placeholder:text-gray-500 border-gray-300 text-xl font-raleway"
          placeholder="Buscar mascotas por nombre, raza o ubicación..."
        />
      </div>
    </motion.div>
  );
};
