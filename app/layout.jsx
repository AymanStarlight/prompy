import "@styles/globals.css";

export const metadata = {
	title: "Prompy",
	description: "Discover & share AI Prompts",
};

function RootLayout({ children }) {
	return (
		<html lang="eng">
			<body>
				<div className="main">
					<div className="gradient" />
				</div>
				<main className="app">{children}</main>
			</body>
		</html>
	);
}

export default RootLayout;