import "@/app/globals.css";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
    <Image
      src="/sad-dog-illustration.webp"
      alt="Sad Dog Illustration - Page not found"
      width={140}
      height={140}
      className="mb-6"
      priority
    />
    <h1 className="text-4xl font-poppins font-semibold mb-3 text-center">
      ¡Ups! Página no encontrada
    </h1>
    <p className="text-lg text-gray-600 mb-8 font-raleway text-center max-w-2xl">
      Parece que la página que estás buscando no existe. Por favor, verificá que
      el enlace sea correcto o volvé al inicio.
    </p>
    <Button asChild size="lg" className="text-md">
      <Link href="/">Volver al inicio</Link>
    </Button>
  </main>
);

export default NotFound;
