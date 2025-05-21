import '@/styles/globals.css';
import { Locale } from '@/types/baseTypes';
import HeroImageSection from '../HeroImageSection';
import HeroMenuBlocks from '../HeroMenuBlocks';
import { useTranslations } from 'next-intl';

const TextWrapper = ({ styles }: { styles?: string }) => {
  const t = useTranslations('hero-section-home');
  return (
    <div className={`flex flex-col ${styles}`}>
      <h1 className="mt-[30px] mb-[15px] text-[28px] leading-none font-semibold uppercase xl:mb-10 xl:text-[42px]">
        {t('title')}
      </h1>
      <p className="text-justify text-sm leading-[1.2] xl:text-left xl:text-lg">
        {t('description')}
      </p>
    </div>
  );
};

const Hero = ({ locale }: { locale: Locale }) => {
  return (
    <section className="w-full pb-[50px] xl:pb-[71px]">
      <div className="wrapper flex flex-col gap-x-[11px] gap-y-[10px]">
        <div className="grid grid-cols-1 gap-x-[11px] pl-[6px] xl:grid-cols-2">
          <TextWrapper styles="hidden xl:block mt-[60px] h-[212px] min-w-[440px] max-w-[90%]" />
          <HeroImageSection locale={locale} />
        </div>
        <HeroMenuBlocks locale={locale} />
        <TextWrapper styles="xl:hidden" />
      </div>
    </section>
  );
};

export default Hero;
