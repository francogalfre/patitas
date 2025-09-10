"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/patitas/logo1000.webp"
            alt="Logo de Patitas"
            width={60}
            height={60}
          />
        </Link>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-geist">
            <li>
              <Link
                href="/"
                className={
                  pathname == "/"
                    ? "text-primary font-medium"
                    : "hover:text-primary transition-colors"
                }
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="adoptar"
                className={
                  pathname == "/adoptar"
                    ? "text-primary font-medium"
                    : "hover:text-primary transition-colors"
                }
              >
                Adoptar
              </Link>
            </li>
            <li>
              <Link
                href="guias"
                className={
                  pathname == "/guias"
                    ? "text-primary font-medium"
                    : "hover:text-primary transition-colors"
                }
              >
                Guías
              </Link>
            </li>
            <li>
              <Link
                href="nosotros"
                className={`${
                  pathname == "/nosotros" && "text-primary font-medium"
                } hover:text-primary transition-all `}
              >
                Quienes somos
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex md:order-2 space-x-3">
          <Link href="/auth/login">
            <Button
              type="button"
              size={"lg"}
              className="text-white bg-primary hover:bg-primary/80 cursor-pointer font-medium rounded-lg text-sm px-4 py-4 text-center transition-color"
            >
              Iniciar Sesion
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button
              type="button"
              size={"lg"}
              className="text-white bg-primary hover:bg-primary/80 cursor-pointer font-medium rounded-lg text-sm px-4 py-4 text-center transition-color"
            >
              Crear una cuenta
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
