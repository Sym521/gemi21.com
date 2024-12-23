import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import "destyle.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const OswaldFont = Oswald({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-Oswald",
});

export const metadata: Metadata = {
	title: "Gemi21",
	description: "Personal website by Sym",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${OswaldFont.variable}`}>
				{children}
			</body>
		</html>
	);
}
