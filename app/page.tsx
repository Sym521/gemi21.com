import { Footer } from "./_components/ui/Footer";
import { Greeting } from "./_components/Greeting";
import { Header } from "./_components/ui/Header";
import { TopPageAboutMe } from "./_components/TopPageAboutMe";

export default function Home() {
	return (
		<div className="w-full h-fit bg-zinc-50 text-zinc-900">
			<main className="flex flex-col min-h-screen mx-auto max-w-5xl px-5 py-4 sm:px-8">
				<Header />
				<Greeting />
				<TopPageAboutMe />
				<Footer />
			</main>
		</div>
	);
}
