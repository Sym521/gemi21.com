import Image from 'next/image'
import { Header } from "./_components/Header";
import { About } from "./_components/About";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-sonavy text-snow-50">
      <Header />
      <main className="mt-8 ml-4 grid grid-cols-4 text-snow-200">
        <Image
          src="/topPageBg.jpg"
          alt='toppage'
          width={400}
          height={400}
          sizes='(min-width: 768px) 100vw, 0vw'
          className='mt-2'
        />
        <div className='col-span-3'>
          <About />
        </div>

      </main>
    </div>
  );
}
