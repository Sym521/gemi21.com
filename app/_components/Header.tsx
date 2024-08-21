import Link from "next/link";

export const Header = () => {
    return (
        <>
            <div className="flex justify-between bg-mustard">
                <div className="text-4xl md:text-8xl text-left ml-2 text-sonavy">
                    <h1>Hiroki</h1>
                    <h1>Seyama</h1>
                </div>
                <div className="flex flex-col justify-end items-end text-2xl md:text-6xl space-y-1 mr-2 text-right text-sonavy list-none">
                    <Link href={"/about"} className="hover:underline">About</Link>
                    <Link href={"/"} className="hover:underline">My Works</Link>
                    <Link href={"/"} className="hover:underline">Contact</Link>
                </div>
            </div>
        </>
    );
}

