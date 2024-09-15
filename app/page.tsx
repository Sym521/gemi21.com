import Image from "next/image";
import topPageBg from "../public/topPageBg.jpg";
import { Header } from "./_components/Header";
import { About } from "./_components/About";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-sonavy text-snow-50">
      <Header />
      <main className="mt-8 ml-4 md:grid md:grid-cols-4 text-snow-200">
        <Image
          src={topPageBg}
          alt="toppage"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          className="hidden md:block"
        />
        <div className="md:col-span-3">
          <About />
        </div>
      </main>
    </div>
  );
}
