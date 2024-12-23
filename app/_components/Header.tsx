import Link from "next/link";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export const Header = () => {
	return (
		<div className="flex items-center backdrop-blur-sm bg-white/40 text-slate-500 px-4 py-2 rounded-xl">
			<Link href="/" className="font-Noto_Sans_JP font-bold hover:text-slate-900 text-4xl mr-auto">
				Gemi21.com
			</Link>
			<div className="flex space-x-8">
				<Link href="/about" className="hover:text-slate-800">
					About
				</Link>
				<Link href="/blog" className="hover:text-slate-900">
					Blog
				</Link>
				<Link href="/content" className="hover:text-slate-900">
					Content
				</Link>
				<p>|</p>
				<Link href="https://github.com/Sym521">
					<GitHubLogoIcon width={25} height={25} className="transition ease-in-out delay-50 hover:text-slate-700 hover:scale-110 " />
				</Link>
				<Link href="https://x.com/esulikesbread">
					<TwitterLogoIcon width={25} height={25} className="transition ease-in-out delay-50 hover:text-sky-400 hover:scale-110 " />
				</Link>
			</div>

		</div>
	);
};
