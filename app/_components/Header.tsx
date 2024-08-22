import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Header = () => {
    return (
        <>
            <div className="flex justify-between bg-mustard">
                <div className="text-3xl md:text-7xl text-left ml-2 text-sonavy">
                    <h1>Hiroki Seyama</h1>
                    <a href="https://github.com/Sym521">
                        <GitHubLogoIcon width={40} height={40} />
                    </a>
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

