import { FaHtml5, FaCss3, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiFastapi } from "react-icons/si";


export const About = () => {
    return (
        <div className="ml-8 space-y-4 flex-col">
            <div>
                <h1 className="text-6xl mb-2">Hi there👋</h1>
                <span>
                    <p>My name is Sym!</p>
                    <p>I am currently an associate student at National Institute of Technology, Oita College.</p>
                    <p>My major is information engenieering.</p>
                    <p>I am curious about web designing, artificial intelligence, and quantum computing.</p>
                </span>
            </div>
            <div>
                <h1 className="text-4xl">Achievements</h1>
                <div className="mt-2 space-y-1">
                    <h2 className="text-xl">DCON 2024</h2>
                    <p>3rd place</p>
                </div>
            </div>
            <div>
                <h1 className="text-4xl">Experience</h1>
                <div className="text-xl mt-2 space-y-1">
                    <h2>Software Engineer (Intern)</h2>
                    <div className="flex gap-4">
                        <a href="https://akariinc.co.jp" className="hover:underline">@AKARI Inc.</a>
                        <p>2024.08 - 2024.09</p>
                    </div>
                    <div className="flex space-x-2">
                        <FaHtml5 size={30} />
                        <FaCss3 size={30} />
                        <SiTypescript size={30} />
                        <FaReact size={30} />
                        <SiNextdotjs size={30} />
                        <FaPython size={30} />
                        <SiFastapi size={30} />
                    </div>
                </div>
            </div>
            <div className="my-8 ml-4 flex-col">
                <h1 className="text-4xl">Projects</h1>
                <p className="text-xl mt-2 ml-2">
                    Coming soon
                </p>
            </div>
        </div>
    );
}