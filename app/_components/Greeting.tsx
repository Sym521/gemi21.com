import { FlipWords } from "@/app/_components/ui/flip-words";
import { FaGlobe, FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export const Greeting = () => {
	const { data: track } = useSWR("/api/spotify", fetcher);

	return (
		<div className="space-y-4 font-inter select-none">
			<div className="space-y-2">
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
			<div className="space-y-2">
				<div className="space-x-2 flex items-center">
					<FaGlobe className="w-5 h-5 text-zinc-600" />
					<p className="text-zinc-700">Japan; Born in🍜, Raised in♨️</p>
				</div>
				<div className="space-x-2 flex items-center">
					<FaSpotify className="w-5 h-5 text-zinc-600" />
					{track?.isPlaying ? (
						<div className="text-zinc-700">
							<p>Now Playing</p>
							<p className="text-sm">
								{track.name} - {track.artist}
							</p>
						</div>
					) : (
						<p className="text-zinc-700">Not listening</p>
					)}
				</div>
			</div>
		</div>
	);
};
