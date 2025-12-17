import { BlurFade } from "@/components/ui/blur-fade";
import posts from "../data/guias.json";
import GuidesPostCard from "./post-card";

const GuidesPostList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:gap-8 px-4 sm:px-6 lg:px-8">
      {posts.map((post, index) => (
        <BlurFade delay={index * 0.15} inView key={post.id}>
          <GuidesPostCard post={post} />
        </BlurFade>
      ))}
    </div>
  );
};

export default GuidesPostList;
