import type { Metadata } from "next";
import "gen-interface-jp/300.css";
import "gen-interface-jp/400.css";
import "gen-interface-jp/500.css";
import "gen-interface-jp/600.css";
import "gen-interface-jp/700.css";
import "gen-interface-jp/800.css";
import "./globals.css";

export const metadata: Metadata = {
	title: "Gemi21",
	description: "A personal website by Esu",
	openGraph: {
		title: "Gemi21",
		description: "A personal website by Esu.",
		url: "https://gemi21.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ja">
			<body className="bg-zinc-50 font-sans text-zinc-900">{children}</body>
		</html>
	);
}
