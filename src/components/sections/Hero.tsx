import { thousand } from "@/app/[locale]/fonts";
import { Arrow, HeroButtonIcon } from "@/assets/icons";
import { Link } from "@/i18n/navigation";
import "@/styles/globals.css";
import { Locale } from "@/types/baseTypes";
import Image from "next/image";

const TextWrapper = ({ styles }: { styles?: string }) => {
  return (
    <div className={`w-[440px] mt-[105px] flex flex-col ${styles}`}>
      <h1 className="text-[42px] font-semibold leading-none mb-10 uppercase">
        automax garage — multibrand car service and repair
      </h1>
      <p className="text-lg">
        We develop and implement software for BMW vehicles, ensuring top performance, reliability,
        and comfort.
      </p>
    </div>
  );
};

const Hero = ({ locale }: { locale: Locale }) => {
  return (
    <section>
      <div className="wrapper flex flex-col gap-x-[11px] gap-y-[10px]">
        <div className="grid grid-cols-2 gap-x-[11px]">
          <TextWrapper styles="hidden xl:block" />
          <div className="flex items-center justify-center rounded-base overflow-hidden relative">
            <Image
              src="/images/hero-image.png"
              alt="hero"
              width={615}
              height={393}
              className="object-contain"
            />
            <div className="absolute bottom-[20px] right-[20px] left-[20px] w-[calc(100%-40px)] flex justify-between">
              <div className="w-[415px] h-[105px] flex flex-col gap-y-1">
                <h2
                  className={`text-4xl font-medium text-accent leading-none uppercase align-middle ${thousand.className}`}
                >
                  Find your
                </h2>
                <h2 className="text-[26px] text-white font-bold uppercase align-middle leading-none">
                  perfect
                  <span
                    className={`text-4xl font-medium text-accent leading-none ${thousand.className}`}
                  >
                    car
                  </span>
                </h2>
                <h2 className="text-[26px] text-white font-bold uppercase align-middle ">
                  at the best deal
                </h2>
              </div>

              <Link
                className="w-[120px] h-[120px] rounded-full flex items-center justify-center group relative"
                href={"#"}
                locale={locale}
              >
                <HeroButtonIcon className="w-full h-full fill-[#F5F5F5] animate-[spin-slow_30s_linear_infinite] group-hover:[animation-play-state:paused] transition-transform duration-300 ease-in-out group-hover:scale-110 group-active:fill-accent" />
                <Arrow className="fill-[#F5F5F5] w-10 h-10 -rotate-45 group-active:fill-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
