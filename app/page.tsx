import { Greeting } from "./_components/Greeting";
import { Header } from "./_components/ui/Header";
import { PixelBlastBackground } from "./_components/ui/PixelBlastBackground";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-5 py-4 sm:px-8 lg:max-w-7xl">
			<Header />
			<main className="relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden">
				<PixelBlastBackground />
				<div className="relative z-10 flex w-full flex-col items-start justify-center">
					<Greeting />
				</div>
			</main>
		</div>
	);
}
