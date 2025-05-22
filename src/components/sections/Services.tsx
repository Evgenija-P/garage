import { Locale } from '@/types/baseTypes';
import { useTranslations } from 'next-intl';
import Links from '../UI/links/Links';
import VerticalSwiper from '../VerticalSwiper';
import Title from './Title';

const Services = ({ locale }: { locale: Locale }) => {
  const t = useTranslations();
  return (
    <section className="relative mb-[100px] h-[678px] w-full bg-surface-dark pt-10 xl:h-[570px] xl:bg-surface xl:pt-0">
      <div className="relative z-[5] mx-auto min-w-[390px] xl:w-[1440px]">
        <Title
          tag="h2"
          textColor="accent"
          styles="w-[277px] ml-2.5 xl:ml-0 xl:w-[710px] xl:absolute xl:top-[80px] xl:left-[100px] z-[2]"
        >
          {t('services.title')}
        </Title>

        <VerticalSwiper locale={locale} buttonLabel={t('links_and_buttons_title.view_more')} />
        <Links
          category="primary"
          styles="absolute bottom-0 left-5 w-[223px] z-[13] xl:bottom-auto xl:top-[70px] xl:right-[100px] xl:left-auto"
          href="/services_and_price"
          locale={locale}
        >
          {t('links_and_buttons_title.explore_our_services')}
        </Links>
      </div>
    </section>
  );
};

export default Services;
