import { MoveLeft } from "lucide-react";
import Link from "next/link";
import guidesData from "../../data/guias.json";

export default async function GuideDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/posts/${slug}.mdx`);

  return (
    <article className="w-full mx-auto">
      <Link
        href="/guides"
        className="flex items-center gap-1.5 sm:gap-2 no-underline bg-primary w-fit px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-white text-xs sm:text-sm transition-color hover:bg-primary/80 duration-200"
      >
        <MoveLeft className="size-3.5 sm:size-4" /> Volver atrás
      </Link>
      <Post />
    </article>
  );
}

export function generateStaticParams() {
  return guidesData.map((guia) => ({
    slug: guia.slug,
  }));
}

export const dynamicParams = false;
