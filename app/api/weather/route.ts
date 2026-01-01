import { NextRequest, NextResponse } from "next/server";

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

const DEFAULT_CITY_CODE = "130010"; // Tokyo

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

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const city = searchParams.get("city") || DEFAULT_CITY_CODE;

	const url = `https://weather.tsukumijima.net/api/forecast?city=${encodeURIComponent(city)}`;

	try {
		const res = await fetch(url, { next: { revalidate: 300 } });

		if (!res.ok) {
			return NextResponse.json(
				{ error: "Failed to fetch weather data" },
				{ status: res.status },
			);
		}

		const data = (await res.json()) as ForecastResponse;
		const forecasts = data.forecasts ?? [];
		const primary = forecasts[0];

		const pickTemp = (key: "min" | "max") =>
			forecasts
				.map((f) => f?.temperature?.[key]?.celsius ?? null)
				.find((value) => value !== null) ?? null;

		const payload = {
			city: data.location?.city ?? null,
			weather: primary?.telop ?? null,
			condition: mapWeather(primary?.telop ?? null),
			tempMin: pickTemp("min"),
			tempMax: pickTemp("max"),
			updatedAt: data.publicTime ?? null,
		};

		return NextResponse.json(payload, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Unexpected error while fetching weather data" },
			{ status: 500 },
		);
	}
}
