'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ArrowNav, CarPreviewBorder, Zoom } from '@/assets/icons';
import { BASE_URL_IMG } from '@/constants/APIConfig';
import { Car } from '@/types/baseTypes';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper/types';
import BaseModal from './UI/modal/Modal';

type CarPageSwiperProps = {
  car: Car;
};

const CarPageSwiper = ({ car }: CarPageSwiperProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [mainThumbsSwiper, setMainThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [modalSwiper, setModalSwiper] = useState<SwiperInstance | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (modalSwiper && isOpen) {
      modalSwiper.slideTo(activeIndex);
    }
  }, [activeIndex, modalSwiper, isOpen]);

  console.log(car.photo_urls.length > 0);
  return (
    <section className="car-page w-full">
      <div className="wrapper mx-auto">
        {car.photo_urls.length > 0 ? (
          <>
            <div className="relative mr-0 h-[403px] w-1/2">
              <button className="car-page-swiper-prev group absolute top-1/2 -left-[30px] z-[15] hidden h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-primary bg-bgColor disabled:cursor-not-allowed disabled:opacity-45 xl:flex">
                <ArrowNav
                  className="rotate-180 fill-primary group-hover:fill-accent group-disabled:fill-primary"
                  width="15"
                  height="26"
                />
              </button>
              <Swiper
                onSwiper={setMainSwiper}
                onSlideChange={swiper => {
                  if (swiper && swiper.activeIndex !== undefined) {
                    setActiveIndex(swiper.activeIndex);
                  }
                }}
                spaceBetween={10}
                navigation={{
                  nextEl: '.car-page-swiper-next',
                  prevEl: '.car-page-swiper-prev',
                }}
                thumbs={{ swiper: mainThumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="car-details-preview mb-2.5 rounded-base"
              >
                {car.photo_urls.map((item, index) => (
                  <SwiperSlide className="relative">
                    <Image
                      src={`${BASE_URL_IMG}${item}`}
                      width={650}
                      height={403}
                      alt="car"
                      className="h-full w-full object-cover"
                    />
                    <button
                      className="group absolute right-[10px] bottom-[10px] z-[15] h-10 w-10 rounded-full"
                      onClick={() => {
                        setActiveIndex(index);
                        setIsOpen(true);
                      }}
                    >
                      <Zoom className="transition-all duration-300 group-hover:scale-125" />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="car-page-swiper-next group absolute top-1/2 -right-[30px] z-[15] hidden h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-primary bg-bgColor disabled:cursor-not-allowed disabled:opacity-45 xl:flex">
                <ArrowNav
                  className="fill-primary group-hover:fill-accent group-disabled:fill-primary"
                  width="15"
                  height="26"
                />
              </button>
            </div>

            <Swiper
              onSwiper={setMainThumbsSwiper}
              spaceBetween={0}
              slidesPerView={6}
              freeMode={true}
              navigation={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="car-photos-preview !h-[150px]"
            >
              {car.photo_urls.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <SwiperSlide
                    key={item}
                    className="relative flex !w-[208px] items-center justify-center overflow-hidden rounded-base"
                  >
                    <div className="h-full w-full p-[5px]">
                      <Image
                        src={`${BASE_URL_IMG}${item}`}
                        alt="car"
                        width={198}
                        height={140}
                        className="h-full w-full rounded-base object-cover"
                      />
                    </div>

                    {isActive && (
                      <div className="pointer-events-none absolute inset-0">
                        <CarPreviewBorder />
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {isOpen && (
              <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} type="baseModal">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="rounded-base"
                  onSwiper={setModalSwiper}
                  initialSlide={activeIndex}
                  onSlideChange={swiper => {
                    setActiveIndex(swiper.activeIndex);
                    mainSwiper?.slideTo(swiper.activeIndex);
                  }}
                >
                  {car.photo_urls.map(item => (
                    <SwiperSlide className="flex items-center justify-center">
                      <Image
                        src={`${BASE_URL_IMG}${item}`}
                        width={650}
                        height={403}
                        alt="car"
                        className="mx-auto my-auto rounded-base object-center"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </BaseModal>
            )}
          </>
        ) : (
          <div className="h-[403px] w-1/2 overflow-hidden rounded-base">
            <Image
              src={'/images/no-image.jpg'}
              alt="car"
              width={650}
              height={403}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default CarPageSwiper;
