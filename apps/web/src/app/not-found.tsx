import "@/app/globals.css";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <main className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <Image
      src="/sad-dog-illustration.webp"
      alt="Sad Dog Illustration - Page not found"
      width={140}
      height={240}
      className="size-24 sm:size-32 lg:size-36 mb-4 sm:mb-6 lg:mb-8"
      priority
    />

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold mb-3 sm:mb-4 text-center tracking-tight leading-tight px-4">
      ¡Ups! Página no encontrada
    </h1>

    <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 font-raleway text-center max-w-md sm:max-w-lg lg:max-w-2xl leading-relaxed px-4">
      Parece que la página que estás buscando no existe. Por favor, verificá que
      el enlace sea correcto o volvé al inicio.
    </p>

    <Button
      asChild
      size="lg"
      className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6"
    >
      <Link href="/">Volver al inicio</Link>
    </Button>
  </main>
);

export default NotFound;
