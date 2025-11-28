import { BlurFade } from "@/components/ui/blur-fade";
import posts from "../data/guias.json";
import GuidesPostCard from "./post-card";

const GuidesPostList = () => {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			{posts.map((post, index) => (
				<BlurFade delay={index * 0.2} inView key={post.id}>
					<GuidesPostCard post={post} />
				</BlurFade>
			))}
		</div>
	);
};

export default GuidesPostList;
