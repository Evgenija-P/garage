import '@/styles/globals.css';
import Image from 'next/image';
import { thousand } from './fonts';

export default function NotFound() {
  return (
    <section className="flex h-[calc(100%-80px)] w-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center gap-y-10">
        <p className={`${thousand.className} text-[260px] font-medium text-[#D7D7D7]`}>404</p>
        <p> Oops! We broke our GPS and can't find this page.</p>
        <Image
          src="/images/404.png"
          alt="404"
          width={315}
          height={200}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}
