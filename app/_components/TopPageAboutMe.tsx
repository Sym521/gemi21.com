import { BentoCard, BentoGrid } from "@/app/_components/ui/bento-grid";
import {
	FaGitAlt,
	FaLink,
	FaLocationDot,
	FaPython,
	FaReact,
	FaUnity,
	FaYarn,
} from "react-icons/fa6";
import {
	SiAstro,
	SiBiome,
	SiCplusplus,
	SiJavascript,
	SiLlvm,
	SiNotion,
	SiShadcnui,
	SiTensorflow,
	SiTypescript,
	SiUnsplash,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { VscVscode } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import {
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const TopPageAboutMe = () => {
	const bentoItems = [
		{
			Icon: FaLocationDot,
			name: "Japan",
			description: "Born in🍜, Raised in♨️",
			className: "row-span-1 md:col-span-1 md:row-span-1",
			background: (
				<Image
					src="/images/trimmedTopLandscape.jpg"
					alt="Japan"
					width={300}
					height={300}
					className="opacity-95 pointer-events-none"
				/>
			),
		},
		{
			Icon: HiWrenchScrewdriver,
			name: "Stacks",
			description: "My favorite languages and tools",
			className: "row-span-1 md:col-span-1 md:row-span-1",
			background: (
				<div className="overflow-hidden text-4xl space-y-8 p-4">
					<div className="flex flex-row items-center space-x-2">
						<SiTypescript className="text-indigo-600" />
						<SiJavascript className="text-indigo-500" />
						<RiNextjsFill className="text-indigo-400" />
						<RiTailwindCssFill className="text-indigo-300" />
						<FaReact className="text-indigo-200" />
						<SiShadcnui className="text-indigo-100" />
					</div>
					<div className="flex flex-row items-center space-x-2 ">
						<SiNotion className="text-violet-600" />
						<SiUnsplash className="text-violet-500" />
						<FaGitAlt className="text-violet-400" />
						<FaPython className="text-violet-300" />
						<SiTensorflow className="text-violet-200" />
						<FaUnity className="text-violet-100" />
					</div>
					<div className="flex flex-row items-center space-x-2">
						<VscVscode className="text-teal-600" />
						<SiBiome className="text-teal-500" />
						<FaYarn className="text-teal-400" />
						<SiAstro className="text-teal-300" />
						<SiCplusplus className="text-teal-200" />
						<SiLlvm className="text-teal-100" />
					</div>
				</div>
			),
		},
		{
			Icon: FaLink,
			name: "Contact",
			description: "Connect with me",
			className: "row-span-1 md:col-span-1 md:row-span-1",
			background: (
				<div className="mt-4 mx-6 text-3xl font-light text-slate-400 space-y-4">
					<Link
						href="https://github.com/Sym521"
						className="flex items-center gap-2 hover:text-slate-800 transition"
					>
						<GitHubLogoIcon width={25} height={25} />
						GitHub
					</Link>
					<Link
						href="https://x.com/esulikesbread"
						className="flex items-center gap-2 hover:text-slate-800 transition"
					>
						<TwitterLogoIcon width={25} height={25} />
						Twitter
					</Link>
					<Link
						href="mailto:hiroki.seyama@outlook.jp"
						className="flex items-center gap-2 hover:text-slate-800 transition"
					>
						<EnvelopeClosedIcon width={25} height={25} />
						Email
					</Link>
				</div>
			),
		},
	];
	return (
		<div className="my-4 md:my-6">
			<h1 className="my-2 text-2xl md:text-3xl font-Poppins font-bold flex justify-center items-center">
				About Me
			</h1>
			<div>
				<BentoGrid className="grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-1 max-w-[75vw] md:max-w-fit mx-auto">
					{bentoItems.map((items) => (
						<BentoCard key={items.name} {...items} />
					))}
				</BentoGrid>
			</div>
		</div>
	);
};
