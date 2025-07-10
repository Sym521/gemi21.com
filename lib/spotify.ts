const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
    if (!refresh_token) {
        throw new Error("SPOTIFY_REFRESH_TOKEN is not defined");
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


export async function getCurrentlyPlayingTrack() {
    try {
        const tokenData = await getAccessToken();
        const accessToken = tokenData.access_token;

        if (!accessToken) {
            throw new Error("Failed to get access token");
        }

        const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (response.status === 204) {
            // 何も再生していない場合
            return null;
        }

        if (!response.ok) {
            throw new Error(`Spotify API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching currently playing track:", error);
        return null;
    }
}