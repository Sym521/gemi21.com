import Image from "next/image";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import mailPost from "../../public/mailPost.jpg";
import { Header } from "../_components/Header";
import { Clock } from "../_components/Clock";

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-sonavy text-snow-50">
      <Header />
      <h1 className="mt-8 ml-2 text-6xl md:text-8xl font-Oswald">
        Contact me!📮
      </h1>
      <div className="mt-6 md:mt-12 ml-4 space-y-2">
        <div className="flex space-x-4 items-center">
          <EnvelopeClosedIcon width={30} height={30} />
          <a
            href="mailto:hiroki.seyama@outlook.jp"
            className="text-xl md:text-3xl hover:text-teal-200 hover:underline"
          >
            hiroki.seyama@outlook.jp
          </a>
        </div>
        <div className="flex space-x-4 items-center">
          <GitHubLogoIcon width={30} height={30} />
          <a
            href="https://github.com/Sym521"
            className="text-xl md:text-3xl hover:text-teal-200 hover:underline"
          >
            Sym521
          </a>
        </div>
      </div>
      <Image
        src={mailPost}
        alt="toppage"
        sizes="100vh"
        style={{
          width: "70%",
          height: "auto",
        }}
        className="mx-auto block md:hidden mt-8 justify-center items-center opacity-90 rounded-md"
      />
      <div className="fixed bottom-2 left-2 text-4xl md:text-9xl">
        <Clock />
      </div>
    </div>
  );
}
