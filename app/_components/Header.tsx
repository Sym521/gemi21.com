import { GitHubLogoIcon, NotionLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <div className="flex justify-between mt-0.5 ml-2">
                <div className="text-3xl md:text-7xl text-left">
                    <a href="/">Sym</a>
                    <div className="flex space-x-5">
                        <a href="https://github.com/Sym521">
                            <GitHubLogoIcon width={35} height={60} />
                        </a>
                        <a href="https://x.com/esulikesbread">
                            <TwitterLogoIcon width={35} height={60} />
                        </a>
                    </div>

                </div>
                <div className="flex flex-col justify-end items-end text-3xl md:text-5xl space-y-1 mr-2 text-right text-sonavy list-none">
                    <Link href={"/"} className="hover:underline">About</Link>
                    <Link href={"/"} className="hover:underline">Projects</Link>
                    <Link href={"/"} className="hover:underline">Contact</Link>
                </div>
            </div>
        </>
    );
}

