import { AuroraBackground } from "@/app/_components/ui/aurora-background";
//import { About } from "./_components/About";
import { Footer } from "./_components/Footer";
import { Greeting } from "./_components/Greeting";
import { Header } from "./_components/Header";
import { AboutMe } from "./_components/AboutMe";

export default function Home() {
	return (
		<div className="w-full h-fit md:h-dvh text-snow-50">
			<AuroraBackground>
				<main className="mx-auto mb-16 max-w-5xl px-5 py-4 sm:px-8">
					<Header />
					<Greeting />
          <AboutMe />
					<Footer />
				</main>
			</AuroraBackground>
		</div>
	);
}
