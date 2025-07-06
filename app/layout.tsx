import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Oswald } from "next/font/google";
import { Poppins } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
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
const noto_sans_jp = Noto_Sans_JP({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-Noto_Sans_JP",
});
const zen_kaku_gothic_new = Zen_Kaku_Gothic_New({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-Zen_Kaku_Gothic_New",
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
				className={`${inter.className} ${oswald.variable} ${poppins.variable} ${noto_sans_jp.variable} ${zen_kaku_gothic_new.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
