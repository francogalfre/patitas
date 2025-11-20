import guidesData from "../data/guias.json";

export default async function GuideDetailsPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const { default: Post } = await import(`../content/posts/${slug}.mdx`);

	return <Post />;
}

export function generateStaticParams() {
	return guidesData.map((guia) => ({
		slug: guia.slug,
	}));
}

export const dynamicParams = false;
