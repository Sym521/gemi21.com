import { fileURLToPath } from "node:url";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://gemi21.com",
	output: "static",
	session: false,
	adapter: cloudflare({ imageService: "compile" }),
	integrations: [react(), mdx()],
	markdown: { syntaxHighlight: false },
	redirects: {
		"/About": { destination: "/about", status: 301 },
		"/Works": { destination: "/works", status: 301 },
		"/RouletteOdds": { destination: "/roulette-odds", status: 301 },
		"/Blog": { destination: "/blog", status: 301 },
		"/Blog/spotifyCurrentlyPlaying": {
			destination: "/blog/spotify-currently-playing",
			status: 301,
		},
		"/Blog/tuatEntranceExam": {
			destination: "/blog/tuat-entrance-exam",
			status: 301,
		},
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
		},
	},
});
