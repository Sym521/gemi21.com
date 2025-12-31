import { FlipWords } from "@/app/_components/ui/flip-words";
export const Greeting = () => {
	return (
		<div className="space-y-2 font-inter select-none">
			<div className="flex text-6xl md:text-7xl lg:text-8xl font-bold">
				<p className="text-blue-900">Hi there</p>
				<p>👋</p>
			</div>
			<div className="text-base sm:text-xl md:text-2xl space-y-2">
				<p>I&apos;m Esuu, a Japanese student majoring in computer science.</p>
				<div>
					Currently I&apos;m crazy about...
					<FlipWords
						words={["Web design", "Playing game", "AI", "Future Core", "VR"]}
						duration={1000}
						className="font-extrabold text-blue-900"
					></FlipWords>
				</div>
			</div>
		</div>
	);
};
