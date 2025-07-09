"use client";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export const Footer = () => {
	const { data: track } = useSWR("/api/spotify", fetcher);
	return (
		<div className="mt-auto h-auto py-4 space-y-4 bg-indigo-600/10 backdrop-blur-sm shadow-sm rounded-xl">
			<div className="px-6 space-x-2 flex items-center">
				<FaSpotify className="w-6 h-6 text-slate-600" />
				{track?.isPlaying ? (
					<div>
						<p className="text-slate-700 font-semibold font-Noto_Sans_JP">
							Now Playing
						</p>
						<p className="text-slate-600 text-sm font-Noto_Sans_JP">{track.name} - {track.artist}</p>
					</div>
				) : (
					<p className="border-slate-500 text-slate-600 font-semibold font-Noto_Sans_JP">Not Listening</p>
				)}
			</div>
			<div className="flex flex-col md:flex-row px-6 justify-between items-start md:items-center space-y-4 md:space-y-0">
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-slate-500">
					<Link
						href="/"
						className="hover:text-slate-900 transition-colors duration-200"
					>
						Home
					</Link>
					<Link
						href="/About"
						className="hover:text-slate-900 transition-colors duration-200"
					>
						About
					</Link>
					<Link
						href="/Blog"
						className="hover:text-slate-900 transition-colors duration-200"
					>
						Blog
					</Link>
					<Link
						href="/"
						className="hover:text-slate-900 transition-colors duration-200"
					>
						🚧Project
					</Link>
				</div>
				<p className="text-slate-500 text-sm">
					©{new Date().getFullYear()} gemi21.com
				</p>
			</div>
		</div>
	);
};
