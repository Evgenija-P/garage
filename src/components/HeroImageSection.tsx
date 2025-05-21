import { thousand } from '@/app/[locale]/fonts';
import { Arrow, HeroButtonIcon } from '@/assets/icons';
import { Link } from '@/i18n/navigation';
import '@/styles/globals.css';
import { Locale } from '@/types/baseTypes';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const HeroImageSection = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('hero-section-home');
  return (
    <div className="relative flex h-[304px] w-full items-center justify-center overflow-hidden rounded-base xl:h-[393px]">
      <Image
        src="/images/hero-image.png"
        alt="hero"
        width={615}
        height={393}
        className="h-[304px] object-cover xl:h-[393px]"
      />
      <div className="absolute right-[10px] bottom-[20px] left-[10px] flex w-[calc(100%-20px)] items-center justify-between xl:right-[20px] xl:left-[20px] xl:w-[calc(100%-40px)]">
        <div className="flex h-fit w-[255px] flex-col xl:h-[105px] xl:w-full xl:gap-y-1">
          <h2
            className={`align-middle text-[22px] leading-none font-medium text-accent uppercase xl:text-4xl ${thousand.className}`}
          >
            {t('img-text.0')}
          </h2>
          <h2 className="align-middle text-lg leading-none font-bold text-white uppercase xl:text-[26px]">
            {t('img-text.1')}
            <span
              className={`text-[22px] leading-none font-medium text-accent xl:text-4xl ${thousand.className}`}
            >
              {t('img-text.2')}
            </span>
          </h2>
          <h2 className="align-middle text-lg font-bold text-white uppercase xl:text-[26px]">
            {t('img-text.3')}
          </h2>
        </div>

        <Link
          className="group absolute right-0 bottom-0 flex h-[60px] w-[60px] items-center justify-center rounded-full xl:h-[120px] xl:w-[120px]"
          href={'#'}
          locale={locale}
        >
          <HeroButtonIcon className="h-full w-full fill-[#F5F5F5] transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:[animation-play-state:paused] group-active:fill-accent xl:animate-[spin-slow_30s_linear_infinite]" />
          <Arrow className="absolute top-1/2 left-1/2 h-[30px] w-[30px] -translate-x-1/2 -translate-y-1/2 -rotate-45 fill-[#F5F5F5] group-active:fill-accent xl:h-10 xl:w-10" />
        </Link>
      </div>
    </div>
  );
};

export default HeroImageSection;
