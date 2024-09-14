import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <div className="flex justify-between mt-4">
                <div className="text-3xl md:text-6xl text-left ml-4">
                    <a href="/">Sym's Portfolio</a>
                    <div className="flex space-x-5">
                        <a href="https://github.com/Sym521">
                            <GitHubLogoIcon width={35} height={60} />
                        </a>
                        <a href="https://x.com/esulikesbread">
                            <TwitterLogoIcon width={35} height={60} />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 text-xl md:text-4xl mr-6 text-right list-none">
                    <Link href={"/"} className="hover:underline">About</Link>
                    <Link href={"/"} className="hover:underline">Projects</Link>
                    <Link href={"/"} className="hover:underline">Contact</Link>
                </div>
            </div>
        </>
    );
}

