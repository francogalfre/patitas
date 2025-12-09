"use client";

import { Button } from "@/components/ui/button";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageButtonsProps {
  page: number;
  setPage: (value: number) => void;
  hasNextPage: boolean;
}

const PageButtons = ({
  page,
  setPage,
  hasNextPage = true,
}: PageButtonsProps) => {
  return (
    <section className="w-full flex items-center justify-between mt-10 max-w-7xl">
      <Button
        className="gap-2 items-center"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        <ArrowLeft size={16} /> Volver atrás
      </Button>

      <Button
        className="gap-2 items-center"
        disabled={!hasNextPage}
        onClick={() => setPage(page + 1)}
      >
        Siguiente página <ArrowRight size={16} />
      </Button>
    </section>
  );
};

export default PageButtons;
