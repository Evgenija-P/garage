"use client";

import Image from "next/image";
import { useEffect } from "react";
import { thousand } from "./fonts";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <section className="w-full h-[calc(100%-80px)] flex items-center justify-center">
      <div className="flex flex-col gap-y-10 justify-center items-center relative">
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
