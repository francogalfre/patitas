import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AuthLoginForm = () => {
  return (
    <>
      <header className="space-y-2 pb-6">
        <Image
          src="/patitas/logo1000.webp"
          alt="Logo de Patitas"
          width={100}
          height={100}
        />
        <h2 className="font-medium text-2xl pt-6">Bienvenido de nuevo </h2>
        <p className="text-gray-800">
          Vuelve a Patitas para conectar con nuestra comunidad y seguir el
          camino de la adopción responsable.
        </p>
      </header>

      <hr className="text-gray-300 pb-6" />

      <form action="" className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-md font-normal text-gray-700">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            required
            className="h-12 border-gray-400"
            placeholder="ejemplo@email.com"
          />
        </div>
        <div className="space-y-3">
          <Label htmlFor="name" className="text-md font-normal text-gray-700">
            Contraseña
          </Label>
          <Input
            type="password"
            name="password"
            required
            className="h-12 border-gray-400"
            placeholder="Al menos 8 caracteres"
          />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="text-white w-full text-md h-12 mb-6"
            size={"lg"}
          >
            Iniciar Sesión
          </Button>
          <span className="items-center">
            ¿No eres parte de nuestra comunidad?
            <Link
              href={"/auth/register"}
              className="text-primary pl-2 underline"
            >
              Únete ahora.
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default AuthLoginForm;
