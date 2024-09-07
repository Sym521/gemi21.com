import Image from "next/image";
import { Header } from "./_components/Header";
import { About } from "./_components/About";
import { Experience } from "./_components/Experience";
import { Projects } from "./_components/Projects";
import { Achievements } from "./_components/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-sonavy text-snow-50">
      <Header />
      <main>
        <About />
        <Experience />
        <Achievements />
        <Projects />
      </main>
    </div>
  );
}
