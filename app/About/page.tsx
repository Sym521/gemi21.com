import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SkillsMarquee } from "../_components/ui/skillsMarquee";
import { FaPython, FaReact } from "react-icons/fa6";
import { SiTypescript, SiJavascript, SiFastapi } from "react-icons/si";
import { Separator } from "../_components/ui/separator";
import Link from "next/link";

export default function About() {
	return (
		<div>
			<div className="mt-4 space-y-4">
				<h1 className="text-5xl md:text-7xl inline-block font-bold text-left text-blue-900">
					About
				</h1>
				<span className="max-w-[90%] text-left">
					<p>My name is Esuu. I am currently a CS student in Japan.</p>
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
			<Separator className="my-4" />
			<div className="space-y-12 mt-4 mb-16">
				<div className="space-y-2">
					<h1 className="text-4xl md:text-5xl inline-block font-bold text-left">
						Skills
					</h1>
					<SkillsMarquee />
					<div>
						<p>
							These are the languages and tools I like to use for my projects.
						</p>
						<h2 className="mt-4 text-2xl font-bold">About this website🌐</h2>
						<div className="mt-2 space-y-1">
							<span className="flex gap-1">
								<p>Framework:</p>
								<Link
									href={"https://nextjs.org"}
									className="text-blue-600 hover:text-zinc-800 transition-colors duration-300"
								>
									Next.js
								</Link>
							</span>
							<span className="flex gap-1">
								<p>Deployment:</p>
								<Link
									href={"https://vercel.com"}
									className="text-blue-600 hover:text-zinc-800 transition-colors duration-300"
								>
									Vercel
								</Link>
							</span>
							<span className="flex gap-1">
								<p>Styling:</p>
								<Link
									href={"https://tailwindcss.com"}
									className="text-blue-600 hover:text-zinc-800 transition-colors duration-300"
								>
									TailwindCSS
								</Link>
							</span>
							<span className="flex gap-1">
								<p>Format and Lint:</p>
								<Link
									href={"https://biomejs.dev"}
									className="text-blue-600 hover:text-zinc-800 transition-colors duration-300"
								>
									Biome
								</Link>
							</span>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl md:text-5xl inline-block font-bold text-left">
						Education
					</h1>
					<div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<h2 className="mt-2 text-lg font-semibold">
								Tokyo University of Agriculture and Technology
							</h2>
							<p className="text-zinc-600">
								Bachelor of Engineering student in Computer Science
							</p>
							<p className="text-blue-600">2026.04 - current</p>
						</div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<h2 className="mt-2 text-lg font-semibold">
								National Institute of Technology, Oita College
							</h2>
							<p className="text-zinc-600">
								Associate Degree of Engineering, Computer Science
							</p>
							<p className="text-blue-600">2021.04 - 2026.03</p>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl md:text-5xl inline-block font-bold text-left">
						Achievement
					</h1>
					<div className="mt-2 space-y-4">
						<div className="border-l-2 border-zinc-500 pl-2">
							<Link
								href={"https://www.oita-ct.ac.jp/2025/11/05/20251104_ent-x/"}
								className="text-lg font-semibold hover:underline"
							>
								Ent-X
							</Link>
							<p className="text-sm text-zinc-600">2025.10 - 2026.03</p>
							<p>Finalist</p>
						</div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<Link
								href={
									"https://www.city.oita.oita.jp/o155/shigotosangyo/kigyoshien/wakate-2025/2025businessplan_result.html"
								}
								className="text-lg font-semibold hover:underline"
							>
								Oita City Student Business Plan Contest 2025
							</Link>
							<p className="text-sm text-zinc-600">2025.12</p>
							<p className="text-yellow-500">
								🏆Grand Prize (contributed as an engineer)
							</p>
						</div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<Link
								href={
									"https://qshu-nbc.or.jp/2025/11/12/%E2%97%86%E2%97%87%E7%AC%AC25%E5%9B%9E%E4%B9%9D%E5%B7%9E%E3%83%BB%E5%A4%A7%E5%AD%A6%E7%99%BA%E3%83%99%E3%83%B3%E3%83%81%E3%83%A3%E3%83%BC%E3%83%BB%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E3%83%97-2/"
								}
								className="text-lg font-semibold hover:underline"
							>
								The 25th Kyushu University-Originated Venture Business Plan
								Contest
							</Link>
							<p className="text-sm text-zinc-600">2025.11</p>
							<p className="text-yellow-500">
								🏅Excellence Award & Saibu Gas Award (contributed as an
								engineer)
							</p>
						</div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<Link
								href={"https://d-s-festival.jp"}
								className="text-lg font-semibold hover:underline"
							>
								Digital Student Festival Award S×PARK
							</Link>
							<p className="text-sm text-zinc-600">2025.07</p>
							<p className="text-zinc-500">🥈2nd place & audience award</p>
						</div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<Link
								href={
									"https://www.ergonomics.jp/official/wp-content/uploads/2024/10/Programma_Workshop_int_Oct_2024_final.pdf"
								}
								className="text-lg font-semibold hover:underline"
							>
								International Workshop Seating/Sitting Comfort
							</Link>
							<p className="text-sm text-zinc-600">2024.10</p>
							<p>Participated</p>
						</div>
						<div className="border-l-2 border-zinc-500 pl-2">
							<Link
								href={"https://dcon.ai"}
								className="text-lg font-semibold hover:underline"
							>
								DCON 2024
							</Link>
							<p className="text-sm text-zinc-600">2024.05</p>
							<p className="text-amber-700">🥉3rd place</p>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl md:text-5xl inline-block font-bold text-left">
						Experience
					</h1>
					<div className="border-l-2 border-zinc-500 pl-2">
						<h2 className="mt-2 text-lg font-semibold">
							Software Engineer (Intern)
						</h2>
						<span>
							<p>Company A</p>
							<p className="text-blue-600">2024.08 - 2024.09</p>
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
			</div>
		</div>
	);
}
