import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface Post {
  id: number;
  slug: string;
  url: string;
  image: string;
  title: string;
  summary: string;
  category: string;
}

const GuidesPostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="grid grid-rows-[auto_auto_1fr_auto] shadow-none border-border h-full rounded-xl">
      <div className="aspect-4/3 sm:aspect-16/10 md:aspect-4/3 w-full overflow-hidden">
        <Link
          href={post.url}
          className="transition-opacity duration-300 fade-in hover:opacity-80"
        >
          <Image
            height={640}
            width={480}
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover object-center rounded-t-xl"
          />
        </Link>
      </div>
      <CardHeader className="p-4 sm:p-4 md:p-6 pb-2">
        <Badge
          variant="secondary"
          className="w-fit mb-4 sm:mb-2 text-white text-xs sm:text-sm py-0.5 sm:py-1 font-poppins font-light"
        >
          {post.category}
        </Badge>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold w-full font-poppins leading-snug">
          <a href={post.url}>{post.title}</a>
        </h3>
      </CardHeader>
      <CardContent className="grow px-3 sm:px-4 md:px-6">
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
          {post.summary}
        </p>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 md:p-6 pt-2 sm:pt-4">
        <Button variant="outline" className="w-full text-xs sm:text-sm" asChild>
          <a
            href={post.url}
            className="flex items-center text-foreground font-medium"
          >
            Leer Guía Completa
            <ArrowRight className="ml-1.5 sm:ml-2 size-3 sm:size-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GuidesPostCard;
