import { Locale } from '@/types/baseTypes';
import Links from '../UI/links/Links';
import Title from './Title';

const Arrivals = ({ locale }: { locale: Locale }) => {
  return (
    <section className="relative mb-20 h-[735px] w-full">
      <div className="wrapper flex h-full flex-col items-center justify-end">
        <Title tag="h2" textColor="primary" styles="absolute top-0 left-1/2 -translate-x-1/2">
          new arrivals
        </Title>
        <Links category="primary" href="/catalogue " locale={locale} styles="mt-10">
          To Catalogue
        </Links>
      </div>
    </section>
  );
};

export default Arrivals;
