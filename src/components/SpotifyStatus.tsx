import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

type SpotifyResponse = { isPlaying: boolean; name: string; artist: string };

export default function SpotifyStatus() {
	const { data: track } = useSWR<SpotifyResponse>("/api/spotify", fetcher);
	return (
		<div className="flex items-center space-x-2 px-6">
			<FaSpotify className="h-5 w-5 text-zinc-600" />
			{track?.isPlaying ? (
				<div>
					<p className="font-semibold text-zinc-700">Now Playing</p>
					<p className="text-sm text-zinc-700">
						{track.name} - {track.artist}
					</p>
				</div>
			) : (
				<p className="font-semibold text-zinc-700">Not Listening</p>
			)}
		</div>
	);
}
