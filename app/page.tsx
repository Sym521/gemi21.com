import Image from "next/image";
import topPageBg from "../public/topPageBg.jpg";
//import { About } from "./_components/About";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div className="w-full h-fit md:h-dvh text-snow-50">
      <AuroraBackground>
        <main className="mx-auto mb-16 max-w-5xl px-5 py-4 sm:px-8">
          <Header />
          <Footer />
        </main>
      </AuroraBackground>
    </div>
  );
}
