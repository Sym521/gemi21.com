import { BentoCard, BentoGrid } from "@/app/_components/ui/bento-grid";
import { FaCss3, FaHtml5, FaLocationDot, FaPython } from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import Marquee from "./ui/marquee";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const AboutMe = () => {
    const bentoItems = [
        {
            Icon: FaLocationDot,
            name: "Japan",
            description: "Born in🍜, Raised in♨️  ",
            className: "row-span-1 md:col-span-1",
            background: (
                <Image src="/images/sakura.jpg" alt="Japan" width={500} height={500} className="opacity-70" />
            )
        },
        {
            Icon: HiWrenchScrewdriver,
            name: "Stacks",
            description: "My skills and tools",
            className: "row-span-2 md:col-span-2 md:row-span-1",
            background: (<div>
                <Marquee
                    pauseOnHover
                    className="absolute top-10 [--duration:3s]"
                >
                    <figure
                        className={cn(
                            "relative w-48 overflow-hidden p-auto",
                            "transform-gpu transition-all duration-300",
                        )}>
                        <div className="flex flex-row items-center space-x-8">
                            <FaHtml5 size={80} />
                            <FaCss3 size={80} />
                            <FaPython size={80} />
                        </div>
                        <div className="flex flex-row items-center space-x-8">
                            <FaHtml5 size={80} />
                            <FaCss3 size={80} />
                            <FaPython size={80} />
                        </div>
                    </figure>
                </Marquee>
            </div>
            )
        },
    ];
    return (
        <div>
            <h1 className="my-2 text-3xl font-Poppins font-black flex justify-center items-center">About Me</h1>
            <div>
                <BentoGrid className="grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
                    {bentoItems.map((items) => (
                        <BentoCard key={items.name} {...items} />
                    ))}
                </BentoGrid>
            </div>
        </div>
    );
};
