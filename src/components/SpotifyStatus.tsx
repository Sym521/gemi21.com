import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

type SpotifyResponse = { isPlaying: boolean; name: string; artist: string };

export default function SpotifyStatus() {
	const { data: track } = useSWR<SpotifyResponse>("/api/spotify", fetcher);
	return (
		<div className="flex min-w-0 items-center gap-2">
			<FaSpotify className="h-6 w-6 shrink-0 text-zinc-600" />
			{track?.isPlaying ? (
				<div className="min-w-0">
					<p className="font-semibold text-zinc-700">Now Playing</p>
					<p className="wrap-break-word text-sm text-zinc-700">
						{track.name} - {track.artist}
					</p>
				</div>
			) : (
				<p className="font-semibold text-zinc-700">Not Listening</p>
			)}
		</div>
	);
}
