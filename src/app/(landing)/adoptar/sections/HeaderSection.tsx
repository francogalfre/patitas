import React from "react";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

import { SearchInput } from "../components/Search";

export const HeaderSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect rows={15} cols={24} cellSize={64} />

      <header className="w-full flex flex-col justify-center text-center gap-8 z-20">
        <div className="space-y-6">
          <h2 className="text-5xl font-semibold">
            Encuentra a tu nuevo{" "}
            <span className="text-primary font-bold te">mejor amigo</span>
          </h2>
          <p className="text-xl text-gray-600 prose leading-8">
            Explora cientos de mascotas esperando un hogar lleno de amor. Usa
            nuestros filtros <br />
            para encontrar la compañía perfecta para ti.
          </p>
        </div>

        <SearchInput />
      </header>
    </div>
  );
};
