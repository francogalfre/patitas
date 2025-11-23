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
				className="flex items-center gap-2 no-underline bg-primary w-fit px-4 py-1 rounded-full text-white transition-color hover:bg-primary/80 duration-200"
			>
				<MoveLeft size={16} /> Volver atras
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
