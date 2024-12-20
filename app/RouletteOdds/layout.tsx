import { Noto_Sans_JP } from "next/font/google";

const NotoSansJP = Noto_Sans_JP({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-Noto_Sans_JP",
});

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className={`${NotoSansJP.className}`}> {children}</section>;
}
