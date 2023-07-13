import NavBar from "@components/NavBar";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
	title: "Prompy - Explore & share AI Prompts",
	description: "Explore & share AI Prompts",
};

function RootLayout({ children }) {
	return (
		<html lang="eng">
			<body>
				<Provider>
					<div className="main">
						<div className="gradient" />
					</div>
					<main className="app">
						<NavBar />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}

export default RootLayout;
