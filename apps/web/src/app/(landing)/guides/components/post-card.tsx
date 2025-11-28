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
			<div className="aspect-[4/3] w-full overflow-hidden">
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
			<CardHeader className="pb-2">
				<Badge
					variant="secondary"
					className="w-fit mb-2 text-white py-1 font-poppins font-light"
				>
					{post.category}
				</Badge>
				<h3 className="text-lg font-semibold md:text-2xl w-full font-poppins">
					<a href={post.url}>{post.title}</a>
				</h3>
			</CardHeader>
			<CardContent className="flex-grow">
				<p className="text-muted-foreground text-sm">{post.summary}</p>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="w-full" asChild>
					<a
						href={post.url}
						className="flex items-center text-foreground font-medium"
					>
						Leer Guía Completa
						<ArrowRight className="ml-2 size-4" />
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default GuidesPostCard;
