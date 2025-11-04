"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FormTextInput } from "@/components/text-input";

import { Button } from "@/components/ui/button";
import { FieldError, useForm } from "react-hook-form";

import { RegisterFormSchema, RegisterFormData } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const AuthRegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    resolver: zodResolver(RegisterFormSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    await authClient.signUp.email(
      {
        name: data.fullName,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: async (ctx) => {
          redirect("/");
        },
        onError: (ctx) => {
          console.error(ctx.error.message);
        },
      }
    );
  };

  return (
    <>
      <header className="space-y-2 pb-6">
        <Image
          src="/patitas/logo1000.webp"
          alt="Logo de Patitas"
          width={100}
          height={100}
        />
        <h2 className="font-medium text-3xl font-serif pt-6">Crea tu cuenta</h2>
          Bienvenido a Patitas - Únete a nuestra comunidad de amantes de los
          animales para ayudar a quienes te necesitan
        <p className="text-gray-800">
        </p>
      </header>

      <hr className="text-gray-300 pb-6" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormTextInput
          label="Nombre y Apellido"
          placeholder="John Doe"
          registration={{ ...register("fullName") }}
          error={errors.fullName as FieldError}
          isRequired
        />

        <FormTextInput
          label="Email"
          type="email"
          placeholder="ejemplo@email.com"
          registration={{ ...register("email") }}
          error={errors.email as FieldError}
          isRequired
        />

        <FormTextInput
          label="Contraseña"
          type="password"
          placeholder="Al menos 8 caracteres"
          registration={{ ...register("password") }}
          error={errors.password as FieldError}
          isRequired
        />

        <div className="text-center">
          <Button
            type="submit"
            disabled={isSubmitting || isLoading}
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
