import GuidesPageHeader from "./components/header";
import GuidesPostList from "./components/post-list";

const PatitasGuidesPage = () => {
	return (
		<main className="py-48">
			<div className="container mx-auto flex flex-col items-center gap-16">
				<GuidesPageHeader />

				<section className="max-w-5xl w-full mx-auto px-4">
					<GuidesPostList />
				</section>
			</div>
		</main>
	);
};

export default PatitasGuidesPage;
