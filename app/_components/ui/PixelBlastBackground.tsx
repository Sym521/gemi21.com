"use client";

import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("./PixelBlast"), { ssr: false });

export function PixelBlastBackground() {
	return (
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
		>
			<PixelBlast
				variant="square"
				pixelSize={4}
				color="#f3f5fb"
				patternScale={2.5}
				patternDensity={1}
				enableRipples={false}
				rippleSpeed={0.3}
				rippleThickness={0.1}
				rippleIntensityScale={1}
				speed={0.5}
				transparent
				edgeFade={0.2}
				className="h-full w-full"
				style={{}}
			/>
		</div>
	);
}
