import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div><Header></Header>{children}<Footer></Footer></div>;
}
