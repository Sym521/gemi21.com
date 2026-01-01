import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "./separator";

export const Header = () => {
	return (
		<div className="sticky z-50 flex items-center border-2 border-zinc-300 backdrop-blur-xs bg-white/40 text-zinc-500 px-4 py-2 rounded-3xl">
			<Link
				href="/"
				className="px-1.5 font-Poppins font-extrabold text-zinc-600 hover:text-zinc-900 text-xl md:text-4xl mr-auto bg-indigo-50 rounded-xl"
			>
				G
			</Link>
			<div className="flex space-x-4">
				<Link
					href="/About"
					className="hover:text-zinc-900 hover:bg-zinc-200 px-2 py-1 rounded-lg transition delay-50"
				>
					About
				</Link>
				<Link
					href="/Blog"
					className="hover:text-zinc-900 hover:bg-zinc-200 px-2 py-1 rounded-lg transition delay-50"
				>
					Blog
				</Link>
				<Link
					href="/"
					className="hover:text-zinc-900 hover:bg-zinc-200 px-2 py-1 rounded-lg transition delay-50"
				>
					🚧Works
				</Link>
				<div className="hidden sm:inline-flex space-x-8 items-center">
					<Separator orientation="vertical" />
					<Link href="https://github.com/Sym521">
						<GitHubLogoIcon
							width={25}
							height={25}
							className="transition ease-in-out delay-50 hover:text-zinc-700 hover:scale-110 "
						/>
					</Link>
					<Link href="https://x.com/esulikesbread">
						<TwitterLogoIcon
							width={25}
							height={25}
							className="transition ease-in-out delay-50 hover:text-sky-400 hover:scale-110 "
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
