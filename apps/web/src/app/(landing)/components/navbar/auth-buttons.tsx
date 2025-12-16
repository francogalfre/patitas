import Link from "next/link";

import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Link href="/auth/login" className="w-full sm:w-auto">
        <Button
          type="button"
          size="lg"
          className="w-full sm:w-auto text-white bg-primary hover:bg-primary/80 font-medium rounded-full sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 transition-colors"
        >
          Iniciar Sesión
        </Button>
      </Link>
      <Link href="/auth/register" className="hidden sm:block">
        <Button
          type="button"
          size="lg"
          className="w-full sm:w-auto text-white bg-primary hover:bg-primary/80 font-medium rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 transition-colors"
        >
          Registrarse
        </Button>
      </Link>
    </div>
  );
};
