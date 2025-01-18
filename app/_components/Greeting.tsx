import { FlipWords } from "@/app/_components/ui/flip-words";
import { LinearGradient } from "react-text-gradients";

export const Greeting = () => {
	return (
		<div className="my-6 space-y-6 mr-auto font-Noto_Sans_JP select-none">
			<div className="flex text-6xl md:text-7xl font-bold">
				<LinearGradient gradient={["to left", "#818CF8 ,#5B21B6"]}>
					Hi there
				</LinearGradient>
				<p>👋</p>
			</div>
			<div className="font-medium text-lg sm:text-xl md:text-3xl">
				<p className="">My name is Sym! I&apos;m a CS student in japan!</p>
				<div className="mt-2 font-medium">
					Currently I&apos;m crazy about...
					<FlipWords
						words={["Web design", "Playing game", "AI", "Future Core"]}
						duration={1000}
						className="font-extrabold"
					></FlipWords>
				</div>
			</div>
		</div>
	);
};
