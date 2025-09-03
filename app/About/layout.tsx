import { Footer } from "../_components/ui/Footer";
import { Header } from "../_components/ui/Header";

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-fit bg-linear-to-tl from-indigo-100 from-0% via-red-50 via-50% to-stone-50 to-100% text-slate-800">
			<main className="flex flex-col min-h-screen mx-auto max-w-5xl px-5 py-4 sm:px-8">
				<Header />
				<div>{children}</div>
				<Footer />
			</main>
		</div>
	);
}
