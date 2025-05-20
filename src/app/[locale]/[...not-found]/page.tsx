import Image from "next/image";
import { thousand } from "../fonts";

const NotFoundPage = () => {
  return (
    <section className="w-full h-[calc(100%-80px)] flex items-center justify-center">
      <div className="flex flex-col gap-y-10 justify-center items-center relative">
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
};

export default NotFoundPage;
