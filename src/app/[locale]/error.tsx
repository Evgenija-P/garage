'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { thousand } from './fonts';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <section className="flex h-[calc(100%-80px)] w-full items-center justify-center">
      <div className="relative flex flex-col items-center justify-center gap-y-10">
        <p className={`${thousand.className} text-[240px] font-medium text-[#D7D7D7]`}>sorry</p>
        <p> Oops, something went wrong!</p>
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
