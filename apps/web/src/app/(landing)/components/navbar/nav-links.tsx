import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  pathname: string;
  isMobile?: boolean;
}

export const NavLinks = ({ pathname, isMobile = false }: NavLinksProps) => {
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/pets", label: "Adoptar" },
    { href: "/guides", label: "Guías" },
    { href: "/about", label: "Nosotros" },
  ];

  return (
    <ul
      className={cn(
        isMobile
          ? "flex flex-col space-y-2"
          : "flex flex-row space-x-6 items-center"
      )}
    >
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "text-md font-medium transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-gray-700",
              isMobile && "block py-2 px-4 rounded-lg hover:bg-gray-100"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
