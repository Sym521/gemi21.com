const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

// Retrieve a new access token using the refresh token
async function getAccessToken(): Promise<string> {
    if (!refresh_token) {
        throw new Error("NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN is not defined");
    }

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${Buffer.from(
                `${clientId}:${clientSecret}`
            ).toString("base64")}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token!,
        }),
    });
    return tokenResponse.json();
};

// Fetch the currently playing track from Spotify
export async function getCurrentlyPlayingTrack() {
    const accessToken = await getAccessToken();

    return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
        },
    });
};