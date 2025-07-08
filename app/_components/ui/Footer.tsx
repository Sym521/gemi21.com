"use client";
import Link from "next/link";
import { FaSpotify } from "react-icons/fa";
import { useState } from "react";
import "@/lib/callSpotifyAPI";

export const Footer = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	return (
		<div className="mt-auto h-auto py-4 bg-indigo-600/10 backdrop-blur-sm shadow-sm rounded-xl">
			<div className="px-6 my-2 flex items-center text-slate-800">
				<FaSpotify className="w-6 h-6 mr-2 text-green-500" />
				<div className="flex flex-col">
					<p className="text-sm font-medium">Now Playing</p>
					{isPlaying ? (
						<p className="text-xs text-slate-600">Song Title - Artist Name</p>
					) : (
						<p className="text-xs text-slate-600">Not Listening</p>
					)}
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 px-6">
				<div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-slate-500">
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
