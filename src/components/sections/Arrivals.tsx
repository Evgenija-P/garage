import { Locale } from '@/types/baseTypes';
import Slider from '../Slider';
import Links from '../UI/links/Links';
import Title from './Title';

export default function Arrivals({ locale }: { locale: Locale }) {
  return (
    <section className="relative mb-20 h-[735px] w-full">
      <div className="wrapper flex h-full flex-col items-center">
        <Title tag="h2" textColor="primary" styles="text-center ">
          new arrivals
        </Title>
        <Slider locale={locale} />
        <Links category="primary" href="/catalogue" locale={locale} styles="mt-10">
          To Catalogue
        </Links>
      </div>
    </section>
  );
}
