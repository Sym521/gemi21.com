import { BentoCard, BentoGrid } from "@/app/_components/ui/bento-grid";
import {
	FaGitAlt,
	FaLink,
	FaLocationDot,
	FaPython,
	FaReact,
	FaSpotify,
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
						<SiTypescript className="text-zinc-800" />
						<SiJavascript className="text-zinc-700" />
						<RiNextjsFill className="text-zinc-600" />
						<RiTailwindCssFill className="text-zinc-500" />
						<FaReact className="text-zinc-400" />
						<SiShadcnui className="text-zinc-300" />
					</div>
					<div className="flex flex-row items-center space-x-2 ">
						<SiNotion className="text-zinc-800" />
						<SiUnsplash className="text-zinc-700" />
						<FaGitAlt className="text-zinc-600" />
						<FaPython className="text-zinc-500" />
						<SiTensorflow className="text-zinc-400" />
						<FaUnity className="text-zinc-300" />
					</div>
					<div className="flex flex-row items-center space-x-2">
						<VscVscode className="text-zinc-800" />
						<SiBiome className="text-zinc-700" />
						<FaYarn className="text-zinc-600" />
						<SiAstro className="text-zinc-500" />
						<SiCplusplus className="text-zinc-400" />
						<SiLlvm className="text-zinc-300" />
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
				<div className="mt-4 mx-6 text-3xl font-light text-zinc-500 space-y-4">
					<Link
						href="https://github.com/Sym521"
						className="flex items-center gap-2 hover:text-zinc-800 transition"
					>
						<GitHubLogoIcon width={25} height={25} />
						GitHub
					</Link>
					<Link
						href="https://x.com/esulikesbread"
						className="flex items-center gap-2 hover:text-zinc-800 transition"
					>
						<TwitterLogoIcon width={25} height={25} />
						Twitter
					</Link>
					<Link
						href="https://open.spotify.com/user/qxr4091wotokv8qatsd5kl86a?si=5e696083677a4fc6"
						className="flex items-center gap-2 hover:text-zinc-800 transition"
					>
						<FaSpotify className="w-6.5 h-6.5" />
						Spotify
					</Link>
					<Link
						href="mailto:hiroki.seyama@outlook.jp"
						className="flex items-center gap-2 hover:text-zinc-800 transition"
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
