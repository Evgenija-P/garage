'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowNav } from '@/assets/icons';
import { Car, Locale } from '@/types/baseTypes';
import { Navigation } from 'swiper/modules';
import CarCard from './CarCard';

type SliderCarsProps = {
  cars: Car[];
  locale: Locale;
};

const Slider = ({ cars, locale }: SliderCarsProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-between">
      <button className="card-swiper-slick-prev group absolute top-1/2 -left-[60px] flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full">
        <ArrowNav className="rotate-180 fill-primary group-hover:fill-accent" />
      </button>
      <Swiper
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: '.card-swiper-slick-next',
          prevEl: '.card-swiper-slick-prev',
        }}
      >
        {cars.map(car => (
          <SwiperSlide key={car.id}>
            <CarCard car={car} locale={locale} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <button className="card-swiper-slick-next group absolute top-1/2 -right-[60px] flex h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full">
        <ArrowNav className="fill-primary group-hover:fill-accent" />
      </button>
    </div>
  );
};

export default Slider;
