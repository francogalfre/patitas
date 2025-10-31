import Link from "next/link";

import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
  return (
    <>
      <Link href="/auth/login">
        <Button
          type="button"
          size={"lg"}
          className="text-white bg-primary hover:bg-primary/80 cursor-pointer font-medium rounded-full text-sm px-4 py-4 text-center transition-color"
        >
          Iniciar Sesion
        </Button>
      </Link>
      <Link href="/auth/register">
        <Button
          type="button"
          size={"lg"}
          className="text-white bg-primary hover:bg-primary/80 cursor-pointer font-medium rounded-full text-sm px-4 py-4 text-center transition-color"
        >
          Crear una cuenta
        </Button>
      </Link>
    </>
  );
};
