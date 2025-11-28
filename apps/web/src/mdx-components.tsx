import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";

const Tip = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 my-6 rounded-md shadow-sm">
		<strong className="font-semibold text-blue-700">💡 Consejo Pro:</strong>{" "}
		{children}
	</div>
);

const components = {
	h1: ({ children }) => (
		<h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mt-12 mb-4">
			{children}
		</h1>
	),
	h2: ({ children }) => (
		<h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4 border-l-4 border-yellow-500 pl-3">
			{children}
		</h2>
	),
	img: (props) => (
		<div className="my-8 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
			<Image
				sizes="100vw"
				className="w-full h-auto object-cover"
				width={1000}
				height={560}
				loading="lazy"
				{...(props as ImageProps)}
			/>
		</div>
	),
	Tip,
} satisfies MDXComponents;

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
	};
}
