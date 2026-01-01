"use client";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export const Footer = () => {
	const { data: track } = useSWR("/api/spotify", fetcher);
	return (
		<div className="mt-auto h-auto py-4 space-y-4 bg-blue-700/10 backdrop-blur-sm shadow-sm rounded-xl">
			<div className="px-6 space-x-2 flex items-center">
				<FaSpotify className="w-5 h-5 text-zinc-600" />
				{track?.isPlaying ? (
					<div>
						<p className="text-zinc-700 font-semibold">Now Playing</p>
						<p className="text-zinc-700 text-sm">
							{track.name} - {track.artist}
						</p>
					</div>
				) : (
					<p className=" text-zinc-700 font-semibold">Not Listening</p>
				)}
			</div>
			<div className="flex flex-col md:flex-row px-6 justify-between items-start md:items-center space-y-4 md:space-y-0">
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-zinc-500">
					<Link
						href="/"
						className="hover:text-zinc-900 transition-colors duration-200"
					>
						Home
					</Link>
					<Link
						href="/About"
						className="hover:text-zinc-900 transition-colors duration-200"
					>
						About
					</Link>
					<Link
						href="/Blog"
						className="hover:text-zinc-900 transition-colors duration-200"
					>
						Blog
					</Link>
					<Link
						href="/"
						className="hover:text-zinc-900 transition-colors duration-200"
					>
						🚧Project
					</Link>
				</div>
				<p className="text-zinc-500 text-sm">
					©{new Date().getFullYear()} gemi21.com
				</p>
			</div>
		</div>
	);
};
