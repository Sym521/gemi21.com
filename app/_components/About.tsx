import { FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFastapi, SiTailwindcss } from "react-icons/si";


export const About = () => {
    return (
        <div className="ml-8 space-y-4 flex-col">
            <div>
                <h1 className="text-6xl">Hi there👋</h1>
                <div className="mt-2 ml-2">
                    <p>My name is Sym!</p>
                    <p>I am currently an associate student at National Institute of Technology, Oita College.</p>
                    <p>My major is information engenieering.</p>
                    <p>I am curious about web designing, artificial intelligence, and quantum computing.</p>
                </div>
            </div>
            <div>
                <h1 className="text-4xl">Achievements</h1>
                <div className="mt-2 ml-2 space-y-1">
                    <a href="https://dcon.ai/" className="text-lg hover:text-teal-200 hover:underline">DCON 2024</a>
                    <p>3rd place</p>
                </div>
            </div>
            <div>
                <h1 className="text-4xl">Experience</h1>
                <div className="mt-2 ml-2 space-y-1 ">
                    <h2>Software Engineer (Intern)</h2>
                    <div className="flex gap-4">
                        <a href="https://akariinc.co.jp" className=" hover:text-red-300 hover:underline">@AKARI Inc.</a>
                        <p>2024.08 - 2024.09</p>
                    </div>
                    <div className="flex space-x-2">
                        <FaHtml5 size={30} />
                        <FaCss3 size={30} />
                        <SiTailwindcss size={30} />
                        <SiTypescript size={30} />
                        <FaReact size={30} />
                        <SiNextdotjs size={30} />
                        <FaPython size={30} />
                        <SiFastapi size={30} />
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-4xl">Projects</h1>
                <p className="mt-2 ml-2">
                    Coming soon
                </p>
            </div>
        </div>
    );
}