import { AuroraBackground } from "@/app/_components/ui/aurora-background";
import { Footer } from "./_components/Footer";
import { Greeting } from "./_components/Greeting";
import { Header } from "./_components/Header";
import { TopPageAboutMe } from "./_components/TopPageAboutMe";

export default function Home() {
	return (
		<div className="w-full h-fit text-slate-800">
			{/* <AuroraBackground> */}
			<main className="flex flex-col min-h-screen mx-auto max-w-5xl px-5 py-4 sm:px-8">
				<Header />
				<Greeting />
				<TopPageAboutMe />
				<Footer />
			</main>
			{/* </AuroraBackground> */}
		</div>
	);
}
