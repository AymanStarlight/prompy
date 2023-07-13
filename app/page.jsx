import Feed from "@components/Feed";

function Home() {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Explore & Share
				<br className="" />
				<span className="red_gradient text-center">AI-Powered Prompts</span>
			</h1>
			<p className="desc text-center">
				<span className="font-bold text-primary-red">Prompy</span> is an AI
				prompting tool brewed to unleash the creative powers of AI Platforms.
				Discover, Create and share the best prompts.
			</p>
			<Feed />
		</section>
	);
}

export default Home;
