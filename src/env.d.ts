/// <reference types="astro/client" />

declare module "cloudflare:workers" {
	export const env: {
		SPOTIFY_CLIENT_ID?: string;
		SPOTIFY_CLIENT_SECRET?: string;
		SPOTIFY_REFRESH_TOKEN?: string;
	};
}
