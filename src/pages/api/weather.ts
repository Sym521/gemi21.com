import type { APIRoute } from "astro";

type ForecastResponse = {
	publicTime?: string;
	location?: { city?: string };
	forecasts?: Array<{
		telop?: string;
		temperature?: {
			min?: { celsius?: string | null } | null;
			max?: { celsius?: string | null } | null;
		};
	}>;
};

const DEFAULT_CITY_CODE = "130010";

const mapWeather = (telop: string | null) => {
	if (!telop) return null;
	if (telop.includes("晴")) return "Clear";
	if (telop.includes("曇")) return "Cloudy";
	if (telop.includes("雨")) return "Rain";
	if (telop.includes("雪")) return "Snow";
	if (telop.includes("雷")) return "Thunder";
	if (telop.includes("暴風") || telop.includes("嵐")) return "Storm";
	return "Other";
};

export const prerender = false;

export const GET = (async ({ request }) => {
	const requestUrl = new URL(request.url);
	const city = requestUrl.searchParams.get("city") || DEFAULT_CITY_CODE;
	const cacheKey = new Request(requestUrl.toString(), { method: "GET" });
	const edgeCache = (caches as CacheStorage & { readonly default: Cache })
		.default;

	try {
		const cached = await edgeCache.match(cacheKey);
		if (cached) return cached;

		const url = `https://weather.tsukumijima.net/api/forecast?city=${encodeURIComponent(city)}`;
		const response = await fetch(url);
		if (!response.ok) {
			return Response.json(
				{ error: "Failed to fetch weather data" },
				{ status: response.status },
			);
		}

		const data = (await response.json()) as ForecastResponse;
		const forecasts = data.forecasts ?? [];
		const primary = forecasts[0];
		const pickTemp = (key: "min" | "max") =>
			forecasts
				.map((forecast) => forecast.temperature?.[key]?.celsius ?? null)
				.find((value) => value !== null) ?? null;

		const result = Response.json(
			{
				city: data.location?.city ?? null,
				weather: primary?.telop ?? null,
				condition: mapWeather(primary?.telop ?? null),
				tempMin: pickTemp("min"),
				tempMax: pickTemp("max"),
				updatedAt: data.publicTime ?? null,
			},
			{ headers: { "Cache-Control": "public, max-age=300" } },
		);
		await edgeCache.put(cacheKey, result.clone());
		return result;
	} catch (error) {
		console.error("Weather endpoint failed", error);
		return Response.json(
			{ error: "Unexpected error while fetching weather data" },
			{ status: 500 },
		);
	}
}) satisfies APIRoute;
