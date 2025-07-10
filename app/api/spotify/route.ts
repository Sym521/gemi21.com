import { NextResponse } from "next/server";
import { getCurrentlyPlayingTrack } from "@/lib/spotify";

export async function GET() {
	try {
		const track = await getCurrentlyPlayingTrack();

		// Not playing anything
		if (!track || !track.item) {
			return NextResponse.json({
				isPlaying: false,
				name: "",
				artist: "",
			});
		}

		// Return track details
		return NextResponse.json({
			isPlaying: track.is_playing,
			name: track.item.name,
			artist: track.item.artists.map((artist: any) => artist.name).join(", "),
		});
	} catch (error) {
		// error handling
		console.error("Error fetching Spotify track:", error);
		return NextResponse.json({
			isPlaying: false,
			name: "",
			artist: "",
		});
	}
}
