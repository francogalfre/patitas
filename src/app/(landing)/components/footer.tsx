import { BlurFade } from "@/components/ui/blur-fade";

import Image from "next/image";
import Link from "next/link";

const links = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Encontrar Mascotas",
    href: "/pets",
  },
  {
    title: "Nuestras Guías",
    href: "/guides",
  },
  {
    title: "Quienes somos",
    href: "/about-us",
  },
];

export default function Footer() {
  return (
    <BlurFade delay={0.2} inView>
      <footer className="border-t border-gray-300 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/"
            aria-label="Ir al inicio"
            className="mx-auto block size-fit"
          >
            <Image
              src="/patitas/logo1000.webp"
              alt="Logo de Patitas"
              className="size-18 transition-transform duration-200 hover:scale-105 hover:rotate-6"
              width={72}
              height={72}
            />
          </Link>

          <div className="space-y-4 mt-8">
            <div className="flex flex-wrap justify-center gap-6">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-black hover:text-gray-600 block duration-150 text-md"
                >
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>

            <span className="text-gray-600 block text-center text-sm">
              © {new Date().getFullYear()} Patitas, todos los derechos
              reservados
            </span>
          </div>
        </div>
      </footer>
    </BlurFade>
  );
}
