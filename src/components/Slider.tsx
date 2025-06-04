'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowNav } from '@/assets/icons';
import { BASE_URL } from '@/constants/APIConfig';
import { Car, Locale } from '@/types/baseTypes';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import CarCard from './CarCard';

type SliderCarsProps = {
  locale: Locale;
};

const Slider = ({ locale }: SliderCarsProps) => {
  const [cars, setCars] = useState<Car[]>([]);

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

      const renderCars: Car[] = (data as Car[]).filter((car: Car) => car.photo_urls.length > 0);

      setCars(data);
    }

    fetchCars();
  }, []);

  if (!cars || cars.length === 0) return null;

  return (
    <div className="relative flex h-full w-full items-center justify-between py-5">
      <button className="card-swiper-slick-prev group absolute top-1/2 -left-[60px] flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full">
        <ArrowNav className="rotate-180 fill-primary group-hover:fill-accent" />
      </button>
      <Swiper
        modules={[Navigation]}
        className="mySwiper h-full w-full"
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: '.card-swiper-slick-next',
          prevEl: '.card-swiper-slick-prev',
        }}
      >
        {cars.map(car => (
          <SwiperSlide key={car.id}>
            <div className="flex h-full items-center justify-center">
              <CarCard car={car} locale={locale} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="card-swiper-slick-next group absolute top-1/2 -right-[60px] flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full">
        <ArrowNav className="fill-primary group-hover:fill-accent" />
      </button>
    </div>
  );
};

export default Slider;
