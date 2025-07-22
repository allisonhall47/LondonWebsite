import Image from "next/image";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] flex items-center justify-center">
      <main className="flex items-center justify-start px-10 relative gap-0">
      <h1
        className={`${playfair.className} text-[12rem] md:text-[20rem] font-bold tracking-tighter`}
        style={{
          transform: 'scaleY(2) scaleX(0.8)',
          transformOrigin: 'center',
          lineHeight: '1',
        }}
      >
        LDN
      </h1>
        <div className="relative">
          <Image
            src="/DSC_0030.jpg"
            alt="London"
            width={550}
            height={700}
            className="object-cover rounded-md"
            priority
          />
        </div>
      </main>
    </div>
  );
}
