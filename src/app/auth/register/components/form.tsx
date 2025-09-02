import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AuthRegisterForm = () => {
  return (
    <>
      <header className="space-y-2 pb-6">
        <Image
          src="/patitas/logo1000.webp"
          alt="Logo de Patitas"
          width={100}
          height={100}
        />
        <h2 className="font-medium text-2xl pt-6">Crea tu cuenta</h2>
        <p className="text-gray-800">
          Bienvenido a Patitas - Únete a nuestra comunidad de amantes de los
          animales para ayudar a quienes te necesitan
        </p>
      </header>

      <hr className="text-gray-300 pb-6" />

      <form action="" className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="name" className="text-md font-normal text-gray-700">
            Nombre y Apellido
          </Label>
          <Input
            type="text"
            name="name"
            required
            className="h-12 border-gray-400"
            placeholder="John Doe"
          />
        </div>
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
            Crear cuenta
          </Button>
          <span className="items-center">
            Ya tienes una cuenta?
            <Link href={"/auth/login"} className="text-primary pl-2 underline">
              Iniciar Sesion
            </Link>
          </span>
        </div>
      </form>
    </>
  );
};

export default AuthRegisterForm;
