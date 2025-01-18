import { Footer } from "./_components/Footer";
import { Greeting } from "./_components/Greeting";
import { Header } from "./_components/Header";
import { TopPageAboutMe } from "./_components/TopPageAboutMe";

export default function Home() {
	return (
		<div className="w-full h-fit bg-gradient-to-tl from-indigo-100 from-0% via-red-50 via-50% to-stone-50 to-100% text-slate-800">
			<main className="flex flex-col min-h-screen mx-auto max-w-5xl px-5 py-4 sm:px-8">
				<Header />
				<Greeting />
				<TopPageAboutMe />
				<Footer />
			</main>
		</div>
	);
}
