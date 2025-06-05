import CarCard from '@/components/CarCard';
import CarPageSwiper from '@/components/CarPageSwiper';
import PagePath from '@/components/PagePath';
import PageTitle from '@/components/PageTitle';
import { BASE_URL } from '@/constants/APIConfig';
import { Locale } from '@/types/baseTypes';
import { notFound } from 'next/navigation';

async function getCarById(id: string) {
  const res = await fetch(`${BASE_URL}/cars/${id}`);

  return res.json();
}

export default async function CarByIdPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;

  if (!id) {
    return notFound();
  }

  const response = await getCarById(id);
  const car = response.result;

  if (!car) {
    return notFound();
  }

  const { make, model, custom_id } = car;

  const carID = custom_id || 5885;
  const carTitle = `ID ${carID} ${make} ${model}`;

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <section className="mb-10 w-full">
        <div className="wrapper mx-auto">
          <PagePath path={`Catalogue / ${carTitle}`} />
          <PageTitle>{carTitle}</PageTitle>
        </div>
      </section>{' '}
      <CarPageSwiper car={car} />
    </main>
  );
}
