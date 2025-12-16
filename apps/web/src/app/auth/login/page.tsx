import type { Metadata } from "next";

import AuthWrapper from "../components/wrapper";
import AuthLoginForm from "./components/form";

export const metadata: Metadata = {
  title: "Iniciar Sesión | Patitas",
  description:
    "Inicia sesión en tu cuenta para acceder a la plataforma de adopción responsable de Patitas.",
};

const PatitasLoginPage = async () => {
  return (
    <AuthWrapper
      image="/auth/login.webp"
      alt="Un perro de color marrón rojizo, corre con entusiasmo en la orilla de una playa, con la boca abierta y la lengua fuera."
    >
      <AuthLoginForm />
    </AuthWrapper>
  );
};

export default PatitasLoginPage;
