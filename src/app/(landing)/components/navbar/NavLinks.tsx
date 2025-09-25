import Link from "next/link";

const NAV_LINKS = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Adoptar",
    href: "/mascotas",
  },
  {
    text: "Guías",
    href: "/guias",
  },
  {
    text: "Quienes Somos",
    href: "/nosotros",
  },
];

export const NavLinks = ({ pathname }: { pathname: string }) => {
  return (
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-geist">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={
                pathname == link.href
                  ? "text-primary font-medium"
                  : "hover:text-primary transition-colors"
              }
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
