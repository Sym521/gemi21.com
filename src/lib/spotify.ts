import { env } from "cloudflare:workers";

type SpotifyEnv = {
	SPOTIFY_CLIENT_ID?: string;
	SPOTIFY_CLIENT_SECRET?: string;
	SPOTIFY_REFRESH_TOKEN?: string;
};

type SpotifyTrack = {
	is_playing: boolean;
	item: null | {
		name: string;
		artists: Array<{ name: string }>;
	};
};

async function getAccessToken() {
	const runtimeEnv = env as unknown as SpotifyEnv;
	const clientId = runtimeEnv.SPOTIFY_CLIENT_ID;
	const clientSecret = runtimeEnv.SPOTIFY_CLIENT_SECRET;
	const refreshToken = runtimeEnv.SPOTIFY_REFRESH_TOKEN;

	if (!clientId) throw new Error("SPOTIFY_CLIENT_ID is not defined");
	if (!clientSecret) throw new Error("SPOTIFY_CLIENT_SECRET is not defined");
	if (!refreshToken) throw new Error("SPOTIFY_REFRESH_TOKEN is not defined");

	const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token: refreshToken,
		}),
	});

	if (!tokenResponse.ok) {
		throw new Error(`Spotify token API error: ${tokenResponse.status}`);
	}

	return tokenResponse.json() as Promise<{ access_token?: string }>;
}

export async function getCurrentlyPlayingTrack(): Promise<SpotifyTrack | null> {
	try {
		const tokenData = await getAccessToken();
		const accessToken = tokenData.access_token;

		if (!accessToken) throw new Error("Failed to get access token");

		const response = await fetch(
			"https://api.spotify.com/v1/me/player/currently-playing",
			{ headers: { Authorization: `Bearer ${accessToken}` } },
		);

		if (response.status === 204) return null;
		if (!response.ok) throw new Error(`Spotify API error: ${response.status}`);

		return (await response.json()) as SpotifyTrack;
	} catch (error) {
		console.error(`Error fetching currently playing track: ${String(error)}`);
		return null;
	}
}
