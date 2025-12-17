import { BlurFade } from "@/components/ui/blur-fade";
import GuidesPageHeader from "./components/header";
import GuidesPostList from "./components/post-list";

const PatitasGuidesPage = () => {
  return (
    <main className="pt-42 sm:pt-48 pb-12	sm:pb-20">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <GuidesPageHeader />

        <BlurFade delay={1}>
          <section className="max-w-5xl w-full mx-auto px-4">
            <GuidesPostList />
          </section>
        </BlurFade>
      </div>
    </main>
  );
};

export default PatitasGuidesPage;
