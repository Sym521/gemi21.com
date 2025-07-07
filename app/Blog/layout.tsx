import { Footer } from "@/app/_components/Footer";
import { Header } from "@/app/_components/Header";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-fit bg-linear-to-tl from-indigo-100 from-0% via-red-50 via-50% to-stone-50 to-100% text-slate-800">
			<main className="flex flex-col min-h-screen mx-auto max-w-5xl px-5 py-4 sm:px-8">
				<Header></Header>
				{children}
				<Footer></Footer>
			</main>
		</div>
	);
}
