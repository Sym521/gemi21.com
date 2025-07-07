import { FlipWords } from "@/app/_components/ui/flip-words";
export const Greeting = () => {
	return (
		<div className="mt-6 space-y-4 mr-auto font-inter select-none">
			<div className="flex text-6xl md:text-7xl font-bold">
				<span className="bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
					Hi there
				</span>
				<p>👋</p>
			</div>
			<div className="text-base sm:text-xl md:text-3xl">
				<p className="">My name is Esu! I&apos;m a CS student in japan!</p>
				<div className="mt-2">
					Currently I&apos;m crazy about...
					<FlipWords
						words={["Web design", "Playing game", "AI", "Future Core", "VR"]}
						duration={1000}
						className="font-extrabold"
					></FlipWords>
				</div>
			</div>
		</div>
	);
};
