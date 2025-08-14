"use client";

import React from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
          <Image
            src="/patitas/logo1000.webp"
            alt="Logo de Patitas"
            width={60}
            height={60}
          />
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-geist">
            <li>
              <a href="/" className="text-primary font-medium">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="adoptar"
                className="hover:text-primary transition-colors"
              >
                Adoptar
              </a>
            </li>
            <li>
              <a href="guias" className="hover:text-primary transition-colors">
                Guías
              </a>
            </li>
            <li>
              <a
                href="sobre-nosotros"
                className="hover:text-primary transition-colors"
              >
                Quienes somos
              </a>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-primary hover:bg-primary/80 hover:scale-105 focus:ring-4 focus:outline-none cursor-pointer font-medium rounded-lg text-sm px-4 py-2 text-center transition-all"
          >
            Crear una cuenta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
