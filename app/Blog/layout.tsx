import { Footer } from "@/app/_components/ui/Footer";
import { Header } from "@/app/_components/ui/Header";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-fit bg-zinc-50 text-zinc-900 font-inter">
			<main className="flex flex-col mx-auto min-h-dvh max-w-5xl px-5 py-4 sm:px-8 lg:max-w-7xl">
				<Header />
				<div className="mb-16">{children}</div>
				<Footer />
			</main>
		</div>
	);
}
