import { HeroButtonIcon } from "@/assets/icons";
import { Link } from "@/i18n/navigation";
import "@/styles/globals.css";
import { Locale } from "@/types/baseTypes";
import Image from "next/image";

const Hero = ({ locale }: { locale: Locale }) => {
  return (
    <section>
      <div className="wrapper flex flex-col">
        <div className="grid grid-cols-2">
          <div></div>
          <div className="flex items-center justify-center rounded-base overflow-hidden relative">
            <Image
              src="/images/hero-image.png"
              alt="hero"
              width={615}
              height={393}
              className="object-contain"
            />
            <div className="absolute bottom-0 right-0 w-full flex">
              <h1>
                <span>Find your</span>
                <br />
                perfect <span>car</span>
                <br />
                at the best deal
              </h1>
              <Link
                className="w-[120px] h-[120px] rounded-full spin-paused flex items-center justify-center"
                href={"#"}
                locale={locale}
              >
                <HeroButtonIcon className="spinning-icon w-6 h-6 animate-[spin-slow_5s_linear_infinite]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4"></div>
      </div>
    </section>
  );
};

export default Hero;
