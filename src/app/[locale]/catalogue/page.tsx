import { CarsWrapper } from '@/components/CarsWrapper';
import PagePath from '@/components/PagePath';
import PageTitle from '@/components/PageTitle';
import Auctions from '@/components/sections/Auctions';
import ContactUs from '@/components/sections/ContactUs';
import GetInTouch from '@/components/sections/GetInTouch';
import OurManagers from '@/components/sections/OurManagers';
import { BASE_URL } from '@/constants/APIConfig';
import { Locale } from '@/types/baseTypes';

async function getAllCars() {
  const res = await fetch(`${BASE_URL}/cars/`, { cache: 'no-cache' });

  return res.json();
}

export default async function CarCataloguePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  const cars = await getAllCars();

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <section className="w-full">
        <div className="wrapper mx-auto">
          <PagePath path="Catalogue" />
          <PageTitle>CAR Catalogue</PageTitle>
        </div>
      </section>
      <CarsWrapper cars={cars} />
      <Auctions />
      <OurManagers />
      <GetInTouch />
      <ContactUs />
    </main>
  );
}
