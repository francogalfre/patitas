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

const DEFAULT_AVATARS = [
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMS5wbmciLCJpYXQiOjE3NTgwNTg3MzIsImV4cCI6MjA3MzQxODczMn0.NJ8CSDyScIeUc-aS6hmarctrwU9F6dmamfwCkSZqhG4",
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMi5wbmciLCJpYXQiOjE3NTgwNTg3NTMsImV4cCI6MjA3MzQxODc1M30.slaEyYrocZddz8x0ioRS-eiwQ0N_VZpTGNYslf9yirE",
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfMy5wbmciLCJpYXQiOjE3NTgwNTg3NjcsImV4cCI6MjA3MzQxODc2N30.ADyF-sL8PE4tt6ulxYqTIuUcvWpNsBsG9U_QNr3WayI",
  "https://nfvknpjkltkafcrhveff.supabase.co/storage/v1/object/sign/avatars/patitas_default_avatar_4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZjgxMjM3YS03YTI0LTRlMjEtODA5OC1lYzc4NDRhZTA3ZmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhdmF0YXJzL3BhdGl0YXNfZGVmYXVsdF9hdmF0YXJfNC5wbmciLCJpYXQiOjE3NTgwNTg3NzgsImV4cCI6MjA3MzQxODc3OH0.NkL1b6ljfyXAS2kl4INFX99kIpb2sCEijONSzMjMus8",
];

const getRandomAvatar = () => {
  return DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)];
};

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
        image: getRandomAvatar(),
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
        <h2 className="font-medium text-2xl pt-6">Crea tu cuenta</h2>
        <p className="text-gray-800">
          Bienvenido a Patitas - Únete a nuestra comunidad de amantes de los
          animales para ayudar a quienes te necesitan
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
