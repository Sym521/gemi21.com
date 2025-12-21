import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "./separator";

export const Header = () => {
	return (
		<div className="sticky top-2 z-50 flex items-center border-2 border-zinc-300 backdrop-blur-xs bg-white/40 text-zinc-500 px-4 py-2 rounded-3xl">
			<Link
				href="/"
				className="px-1.5 font-Poppins font-extrabold hover:text-zinc-900 text-xl md:text-4xl mr-auto bg-indigo-50 rounded-xl"
			>
				G
			</Link>
			<div className="flex space-x-8">
				<Link href="/About" className="hover:text-zinc-900">
					About
				</Link>
				<Link href="/Blog" className="hover:text-zinc-900">
					Blog
				</Link>
				<Link href="/" className="hover:text-zinc-900">
					🚧Project
				</Link>
				<div className="hidden sm:inline-flex space-x-8">
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
