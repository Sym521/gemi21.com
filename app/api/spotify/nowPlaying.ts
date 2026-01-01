import type { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlayingTrack } from "@/lib/spotify";
/**
 * API route to get the currently playing track on Spotify.
 * Returns track details if a song is currently playing, otherwise returns isPlaying: false.
 *
 * @param _req - The incoming request object.
 * @param res - The response object to send back the data.
 */

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse,
) {
	const response = await getCurrentlyPlayingTrack();

	if (response.status === 204 || response.status > 400) {
		return res.status(200).json({ isPlaying: false });
	}

	const song = await response.json();

	if (song.item === null) {
		return res.status(200).json({ isPlaying: false });
	}

	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists
		.map((_artist: any) => _artist.name)
		.join(", ");
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return res.status(200).json({
		album,
		albumImageUrl,
		artist,
		isPlaying,
		songUrl,
		title,
	});
}
