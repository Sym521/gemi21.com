import { FlipWords } from "@/app/_components/ui/flip-words";
import { FaCloudSun, FaGlobe, FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export const Greeting = () => {
	const { data: track } = useSWR("/api/spotify", fetcher);
	const { data: weather, error: weatherError } = useSWR<{
		city: string | null;
		weather: string | null;
		condition: string | null;
		tempMin: string | null;
		tempMax: string | null;
		updatedAt: string | null;
	}>("/api/weather?city=130010", fetcher);

	const weatherText = weather?.condition ?? weather?.weather ?? "-";

	const parseTemp = (value: string | null | undefined) => {
		if (value === null || value === undefined) return null;
		const num = Number(value);
		return Number.isFinite(num) ? num : null;
	};

	const tempMinNum = parseTemp(weather?.tempMin);
	const tempMaxNum = parseTemp(weather?.tempMax);
	const avgTemp =
		tempMinNum !== null && tempMaxNum !== null
			? ((tempMinNum + tempMaxNum) / 2).toFixed(1)
			: null;
	const tempText = avgTemp ? `${avgTemp}°C` : "-°C";

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
					<p className="text-zinc-700">Japan; Born in🍜, Raised in♨️, Now🗼</p>
				</div>
				<div className="space-x-2 flex items-center">
					<FaCloudSun className="w-5 h-5 text-zinc-600" />
					{weatherError ? (
						<p className="text-zinc-700">Rain, rain, go away</p>
					) : (
						<p className="text-zinc-700">
							{weatherText}
							{tempText.trim() ? " / " : ""}
							{tempText}
						</p>
					)}
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
