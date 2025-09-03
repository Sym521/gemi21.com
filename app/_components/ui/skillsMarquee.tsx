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
		<div className="relative flex h-[100px]  flex-col items-center justify-center overflow-hidden rounded-lg ">
			<Marquee className="[--duration:15s]">
				<SiTypescript style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiJavascript style={{ width: 60, height: 60, color: "#1E293B" }} />
				<RiNextjsFill style={{ width: 60, height: 60, color: "#1E293B" }} />
				<RiTailwindCssFill
					style={{ width: 60, height: 60, color: "#1E293B" }}
				/>
				<FaReact style={{ width: 60, height: 60, color: "#1E293B" }} />

				<FaPython style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiFastapi style={{ width: 60, height: 60, color: "#1E293B" }} />

				<SiTensorflow style={{ width: 60, height: 60, color: "#1E293B" }} />
				<FaUnity style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiBiome style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiAstro style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiCplusplus style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiLlvm style={{ width: 60, height: 60, color: "#1E293B" }} />
				<SiFigma style={{ width: 60, height: 60, color: "#1E293B" }} />
			</Marquee>
		</div>
	);
};
