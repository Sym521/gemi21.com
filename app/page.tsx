"use client";

import { Greeting } from "./_components/Greeting";
import { Header } from "./_components/ui/Header";
import PixelBlast from "./_components/ui/PixelBlast";

export default function Home() {
	return (
		<div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-5 py-4 sm:px-8 lg:max-w-7xl">
			<Header />
			<main className="relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
				>
					<PixelBlast
						variant="square"
						pixelSize={4}
						color="#f3f5fb"
						patternScale={2.5}
						patternDensity={1}
						enableRipples={false}
						rippleSpeed={0.3}
						rippleThickness={0.1}
						rippleIntensityScale={1}
						speed={0.5}
						transparent
						edgeFade={0.2}
						className="h-full w-full"
						style={{}}
					/>
				</div>
				<div className="relative z-10 flex w-full flex-col items-start justify-center">
					<Greeting />
				</div>
			</main>
		</div>
	);
}
