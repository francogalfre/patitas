import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "nfvknpjkltkafcrhveff.supabase.co",
				port: "",
				pathname: "/storage/v1/object/sign/avatars/**",
			},
			{
				protocol: "https",
				hostname: "nfvknpjkltkafcrhveff.supabase.co",
				port: "",
				pathname: "/storage/v1/object/public/pet-pics/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
