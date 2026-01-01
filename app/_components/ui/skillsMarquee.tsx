"use client";

import {
	SiAstro,
	SiBiome,
	SiCplusplus,
	SiFastapi,
	SiFigma,
	SiJavascript,
	SiLlvm,
	SiTensorflow,
	SiTypescript,
} from "react-icons/si";
import { Marquee } from "../marquee";
import { FaReact, FaPython, FaUnity } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const SkillsMarquee = () => {
	return (
		<div className="relative flex h-[100px]  flex-col items-center justify-center overflow-hidden">
			<Marquee className="[--duration:15s]">
				<SiTypescript style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiJavascript style={{ width: 60, height: 60, color: "#27272A" }} />
				<RiNextjsFill style={{ width: 60, height: 60, color: "#27272A" }} />
				<RiTailwindCssFill
					style={{ width: 60, height: 60, color: "#27272A" }}
				/>
				<FaReact style={{ width: 60, height: 60, color: "#27272A" }} />

				<FaPython style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiFastapi style={{ width: 60, height: 60, color: "#27272A" }} />

				<SiTensorflow style={{ width: 60, height: 60, color: "#27272A" }} />
				<FaUnity style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiBiome style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiAstro style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiCplusplus style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiLlvm style={{ width: 60, height: 60, color: "#27272A" }} />
				<SiFigma style={{ width: 60, height: 60, color: "#27272A" }} />
			</Marquee>
		</div>
	);
};
