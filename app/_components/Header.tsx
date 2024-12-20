import Link from "next/link";

export const Header = () => {
	return (
		<div className="flex items-center bg-snow-50 text-slate-500 px-4 rounded-xl">
			<Link href="/" className="font-Noto_Sans_JP font-bold text-4xl mr-auto">
				Gemi21.com
			</Link>
			<div className="flex space-x-6">
				<Link href="/about" className="hover:underline">
					About
				</Link>
				<Link href="/blog" className="hover:underline">
					Blog
				</Link>
				<Link href="/content" className="hover:underline">
					Content
				</Link>
			</div>
		</div>
	);
};
