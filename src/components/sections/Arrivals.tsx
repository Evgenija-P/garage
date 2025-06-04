import { Locale } from '@/types/baseTypes';
import Slider from '../Slider';
import Links from '../UI/links/Links';
import Title from './Title';

export default function Arrivals({ locale }: { locale: Locale }) {
  return (
    <section className="arrivals relative mb-[60px] h-[494px] w-full xl:mb-20 xl:h-[735px]">
      <div className="wrapper flex h-full flex-col items-center justify-between">
        <Title tag="h2" textColor="primary" styles="text-center mb-5 xl:mb-0">
          new arrivals
        </Title>
        <Slider locale={locale} />
        <Links category="primary" href="/catalogue" locale={locale} styles="mt-5 xl:mt-10">
          To Catalogue
        </Links>
      </div>
    </section>
  );
}
