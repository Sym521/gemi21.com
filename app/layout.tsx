import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import { Sawarabi_Gothic } from "next/font/google";
import "destyle.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-Oswald",
});
const poppins = Poppins({
	weight: "600",
	subsets: ["latin"],
	variable: "--font-Poppins",
});
export const sawarabi_gothic = Sawarabi_Gothic({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-Sawarabi_Gothic",
});

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
		<html>
			<body
				className={`${inter.className} ${oswald.variable} ${poppins.variable} ${sawarabi_gothic.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
