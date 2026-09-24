import type { APIRoute } from "astro";
import { getCurrentlyPlayingTrack } from "@/lib/spotify";

export const prerender = false;

export const GET = (async () => {
	try {
		const track = await getCurrentlyPlayingTrack();
		if (!track?.item) {
			return Response.json(
				{ isPlaying: false, name: "", artist: "" },
				{ headers: { "Cache-Control": "no-store" } },
			);
		}

		return Response.json(
			{
				isPlaying: track.is_playing,
				name: track.item.name,
				artist: track.item.artists.map((artist) => artist.name).join(", "),
			},
			{ headers: { "Cache-Control": "no-store" } },
		);
	} catch (error) {
		console.error("Spotify endpoint failed", error);
		return Response.json(
			{ isPlaying: false, name: "", artist: "" },
			{ headers: { "Cache-Control": "no-store" } },
		);
	}
}) satisfies APIRoute;
