'use client';

import { BASE_URL } from '@/constants/APIConfig';
import { Locale } from '@/types/baseTypes';
import { useEffect, useState } from 'react';
import Slider from '../Slider';
import Links from '../UI/links/Links';
import Title from './Title';

export default function Arrivals({ locale }: { locale: Locale }) {
  const [cars, setCars] = useState<any[]>([]);

  async function getAllCars() {
    try {
      const res = await fetch(`${BASE_URL}/cars/`, { cache: 'no-cache' });
      if (!res.ok) throw new Error('Failed to fetch cars');
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching cars:', error);
      return [];
    }
  }

  useEffect(() => {
    async function fetchCars() {
      const data = await getAllCars();
      setCars(data);
    }
    fetchCars();
  }, []);

  const renderCars = cars.filter(car => car.primary_photo_url.length > 0);

  if (!cars || renderCars.length === 0) return null;

  console.log(renderCars);

  return (
    <section className="relative mb-20 h-[735px] w-full">
      <div className="wrapper flex h-full flex-col items-center justify-end">
        <Title tag="h2" textColor="primary" styles="absolute top-0 left-1/2 -translate-x-1/2">
          new arrivals
        </Title>
        <Slider cars={renderCars} locale={locale} />
        <Links category="primary" href="/catalogue" locale={locale} styles="mt-10">
          To Catalogue
        </Links>
      </div>
    </section>
  );
}
