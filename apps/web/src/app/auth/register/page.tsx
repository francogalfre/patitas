import type { Metadata } from "next";

import AuthWrapper from "../components/wrapper";
import AuthRegisterForm from "./components/form";

export const metadata: Metadata = {
  title: "Únete a la comunidad | Patitas",
  description:
    "Regístrate en Patitas y únete a nuestra comunidad para ayudar a los animales que buscan un hogar.",
};

const PatitasRegisterPage = () => {
  return (
    <AuthWrapper
      image="/auth/register.webp"
      alt="Un niño abrazando a su perro de raza Golden, que está acostado en el césped"
    >
      <AuthRegisterForm />
    </AuthWrapper>
  );
};

export default PatitasRegisterPage;
