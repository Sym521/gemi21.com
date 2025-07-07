import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "./ui/separator";

export const Header = () => {
	return (
		<div className="sticky top-2 z-50 flex items-center border-2 border-slate-300 backdrop-blur-xs bg-white/40 text-slate-500 px-4 py-2 rounded-3xl">
			<Link
				href="/"
				className="px-1.5 font-Poppins font-extrabold hover:text-slate-900 text-xl md:text-4xl mr-auto bg-indigo-50 rounded-xl"
			>
				G
			</Link>
			<div className="flex space-x-8">
				<Link href="/About" className="hover:text-slate-800">
					About
				</Link>
				<Link href="/Blog" className="hover:text-slate-900">
					Blog
				</Link>
				<Link href="/" className="hover:text-slate-900">
					🚧Project
				</Link>
				<div className="hidden sm:inline-flex space-x-8">
					<Separator orientation="vertical" />
					<Link href="https://github.com/Sym521">
						<GitHubLogoIcon
							width={25}
							height={25}
							className="transition ease-in-out delay-50 hover:text-slate-700 hover:scale-110 "
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
