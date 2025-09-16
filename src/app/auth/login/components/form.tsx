"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import AuthFormInput from "../../components/input";

import { Button } from "@/components/ui/button";
import { FieldError, useForm } from "react-hook-form";

import { LoginFormSchema, LoginFormData } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const AuthLoginForm = () => {
  const {
    setError,
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: (ctx) => {
          redirect("/");
        },
        onError: (ctx) => {
          setError("root", { message: "Email o contraseña incorrecta" });

          if (ctx.error.status === 403) {
            setError("root", { message: "Porfavor verifica tu correo" });
          }
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
        <h2 className="font-medium text-2xl pt-6">Bienvenido de nuevo </h2>
        <p className="text-gray-800">
          Vuelve a Patitas para conectar con nuestra comunidad y seguir el
          camino de la adopción responsable.
        </p>
      </header>

      <hr className="text-gray-300 pb-6" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <AuthFormInput
          label="Email"
          type="email"
          placeholder="ejemplo@email.com"
          registration={{ ...register("email") }}
          error={errors.email as FieldError}
        />

        <AuthFormInput
          label="Contraseña"
          type="password"
          placeholder="Al menos 8 caracteres"
          registration={{ ...register("password") }}
          error={errors.password as FieldError}
        />

        {errors.root && (
          <p className="text-red-500 text-sm">{errors.root.message}</p>
        )}

        <div className="text-center">
          <Button
            disabled={isSubmitting || isLoading}
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
