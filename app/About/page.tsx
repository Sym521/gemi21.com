import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { Footer } from "../_components/ui/Footer";
import { Header } from "../_components/ui/Header";
import { SkillsMarquee } from "../_components/ui/skillsMarquee";
import { FaPython, FaReact } from "react-icons/fa6";
import {
	SiTypescript,
	SiJavascript,
	SiFastapi,
} from "react-icons/si";
import { Separator } from "../_components/ui/separator";
import Link from "next/link";

export default function About() {
	return (
		<div className="w-full h-fit bg-linear-to-tl from-indigo-100 from-0% via-red-50 via-50% to-stone-50 to-100% text-slate-800">
			<main className="flex flex-col min-h-screen mx-auto max-w-5xl px-5 py-2 sm:px-8">
				<Header />
				<div className="mt-4 space-y-2">
					<h1 className="text-4xl md:text-7xl inline-block font-bold text-left bg-linear-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">
						About
					</h1>
					<span className="max-w-[90%] text-left">
						<p>
							Hi!👋 I&apos;m Esu! I am currently a CS student at National
							Institute of Technology.
						</p>

						<p>
							I am curious about web designing, artificial intelligence, and
							virtual reality.
						</p>

						<p className="flex gap-1 items-center">
							My favorite framework is Next.js
							<RiNextjsFill />
						</p>
					</span>
				</div>
				<Separator className="my-2" />
				<div className="space-y-6 mt-4 mb-8">
					<div>
						<h1 className="text-3xl md:text-5xl inline-block font-bold text-left bg-linear-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent">
							Skills
						</h1>
						<SkillsMarquee />
						<div>
							<p>
								These are the languages and tools I like to use for my projects.
							</p>
							<h2 className="mt-4 text-xl font-bold">About this website🌐</h2>
							<div className="space-y-1">
								<span className="flex gap-1">
									<p>Framework:</p>
									<Link
										href={"https://nextjs.org"}
										className="text-fuchsia-600 hover:text-slate-800 transition-colors duration-300"
									>
										Next.js
									</Link>
								</span>
								<span className="flex gap-1">
									<p>Deployment:</p>
									<Link
										href={"https://vercel.com"}
										className="text-fuchsia-600 hover:text-slate-800 transition-colors duration-300"
									>
										Vercel
									</Link>
								</span>
								<span className="flex gap-1">
									<p>Styling:</p>
									<Link
										href={"https://tailwindcss.com"}
										className="text-fuchsia-600 hover:text-slate-800 transition-colors duration-300"
									>
										TailwindCSS
									</Link>
								</span>
								<span className="flex gap-1">
									<p>Format and Lint:</p>
									<Link
										href={"https://biomejs.dev"}
										className="text-fuchsia-600 hover:text-slate-800 transition-colors duration-300"
									>
										Biome
									</Link>
								</span>
							</div>
						</div>
					</div>
					<div>
						<h1 className="text-3xl md:text-5xl inline-block font-bold text-left bg-linear-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent">
							Education
						</h1>
						<div>
							<h2 className="mt-2 text-lg font-semibold">
								National Institute of Technology, College at somewhere in Kyushu
							</h2>
							<p className="text-sky-600">2021.04 - 2026.03</p>
							<p className="text-slate-600">Faculty of Computer Science</p>
						</div>
					</div>
					<div>
						<h1 className="text-3xl md:text-5xl inline-block font-bold text-left bg-linear-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent">
							Achievement
						</h1>
						<div>
							<h2 className="mt-2 text-lg font-semibold">
								DCON 2024 (AI and business contest for National Institute of
								Technology students)
							</h2>
							<p className="text-amber-700">🥉3rd place</p>
						</div>
					</div>
					<div>
						<h1 className="text-3xl md:text-5xl inline-block font-bold text-left bg-linear-to-r from-gray-900 via-gray-600 to-gray-400 bg-clip-text text-transparent">
							Experience
						</h1>
						<h2 className="mt-2 text-lg font-semibold">
							Software Engineer (Intern)
						</h2>
						<span>
							<p className="text-red-400">Company A</p>
							<p>2024.08 - 2024.09</p>
						</span>
						<div className="flex gap-2 mt-1">
							<SiJavascript style={{ width: 25, height: 25 }} />
							<SiTypescript style={{ width: 25, height: 25 }} />
							<FaReact style={{ width: 25, height: 25 }} />
							<RiNextjsFill style={{ width: 25, height: 25 }} />
							<RiTailwindCssFill style={{ width: 25, height: 25 }} />
							<FaPython style={{ width: 25, height: 25 }} />
							<SiFastapi style={{ width: 25, height: 25 }} />
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
}
