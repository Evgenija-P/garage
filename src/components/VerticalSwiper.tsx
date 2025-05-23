'use client';

import CircularStep from '@/assets/CircularStep';
import { Locale } from '@/types/baseTypes';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Title from './sections/Title';
import Links from './UI/links/Links';

const slides = [
  {
    title: {
      en: 'Auto Service & Repair',
      ua: 'Автосервіс та ремонт',
      de: 'Auto Service & Reparatur',
      ru: 'Автосервис и ремонт',
      nl: 'Auto Service & Reparatie',
    },
    desc: {
      en: 'Cars from top auctions: selected for condition, price, and reliability. History checks, legal compliance, and city delivery included.',
      ua: 'Автомобілі з провідних аукціонів: обрані за станом, ціною та надійністю. Перевірка історії, юридична відповідність та доставка по місту включені.',
      de: 'Autos von Top-Auktionen: ausgewählt nach Zustand, Preis und Zuverlässigkeit. Historienprüfungen, gesetzliche Konformität und Lieferung in die Stadt inklusive.',
      ru: 'Автомобили с лучших аукционов: отобраны по состоянию, цене и надежности. Проверка истории, юридическая чистота и доставка по городу включены.',
      nl: 'Auto’s van top veilingen: geselecteerd op staat, prijs en betrouwbaarheid. Geschiedeniscontroles, wettelijke naleving en stadsbezorging inbegrepen.',
    },
    img: '/images/services/screen_1.png',
  },
  {
    title: {
      en: 'BMW Car Service',
      ua: 'Сервіс автомобілів BMW',
      de: 'BMW Auto Service',
      ru: 'Сервис автомобилей BMW',
      nl: 'BMW Auto Service',
    },
    desc: {
      en: 'Cars from top auctions: selected for condition, price, and reliability. History checks, legal compliance, and city delivery included.',
      ua: 'Автомобілі з провідних аукціонів: обрані за станом, ціною та надійністю. Перевірка історії, юридична відповідність та доставка по місту включені.',
      de: 'Autos von Top-Auktionen: ausgewählt nach Zustand, Preis und Zuverlässigkeit. Historienprüfungen, gesetzliche Konformität und Lieferung in die Stadt inklusive.',
      ru: 'Автомобили с лучших аукционов: отобраны по состоянию, цене и надежности. Проверка истории, юридическая чистота и доставка по городу включены.',
      nl: 'Auto’s van top veilingen: geselecteerd op staat, prijs en betrouwbaarheid. Geschiedeniscontroles, wettelijke naleving en stadsbezorging inbegrepen.',
    },
    img: '/images/services/screen_2.png',
  },
  {
    title: {
      en: 'Car Selection Through Auctions',
      ua: 'Вибір авто через аукціони',
      de: 'Autowahl über Auktionen',
      ru: 'Выбор автомобиля через аукционы',
      nl: 'Auto selectie via veilingen',
    },
    desc: {
      en: 'Cars from top auctions: selected for condition, price, and reliability. History checks, legal compliance, and city delivery included.',
      ua: 'Автомобілі з провідних аукціонів: обрані за станом, ціною та надійністю. Перевірка історії, юридична відповідність та доставка по місту включені.',
      de: 'Autos von Top-Auktionen: ausgewählt nach Zustand, Preis und Zuverlässigkeit. Historienprüfungen, gesetzliche Konformität und Lieferung in die Stadt inklusive.',
      ru: 'Автомобили с лучших аукционов: отобраны по состоянию, цене и надежности. Проверка истории, юридическая чистота и доставка по городу включены.',
      nl: 'Auto’s van top veilingen: geselecteerd op staat, prijs en betrouwbaarheid. Geschiedeniscontroles, wettelijke naleving en stadsbezorging inbegrepen.',
    },
    img: '/images/services/screen_3.jpg',
  },
];

const VerticalSwiper = ({ locale, buttonLabel }: { locale: Locale; buttonLabel: string }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  const handleWheel = (e: WheelEvent) => {
    if (!isHovered.current) return;

    e.preventDefault(); // блокує прокрутку сторінки

    if (e.deltaY > 0) {
      setIndex(prev => (prev + 1) % slides.length);
    } else {
      setIndex(prev => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseEnter = () => (isHovered.current = true);
    const onMouseLeave = () => (isHovered.current = false);

    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('mouseenter', onMouseEnter);
      container.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-[1] flex h-[570px] w-full flex-col gap-y-5 overflow-hidden xl:flex-row xl:justify-between xl:pl-[100px]"
    >
      {/* Left Text */}
      <div className="mt-[30px] w-full px-2.5 xl:mt-[195px] xl:w-1/2 xl:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Title styles="mb-2.5" tag="h4" textColor="white">
              {slides[index].title[locale]}
            </Title>
            <p className="w-full text-justify text-white/80 xl:max-w-lg">
              {slides[index].desc[locale]}
            </p>
          </motion.div>
        </AnimatePresence>

        <Links
          category="secondary"
          styles="mt-6 xl:mt-20 w-[144px]"
          href="/services_and_price"
          locale={locale}
        >
          {buttonLabel}
        </Links>
      </div>
      {/* Right Image */}
      <div className="relative z-[1] h-[300px] min-w-[390px] overflow-hidden rounded-tl-[200px] xl:h-full xl:w-1/2 xl:rounded-tl-[350px]">
        <div className="pointer-events-none absolute top-0 left-0 z-[3] h-full w-full rounded-tl-[200px] bg-surface/70 xl:rounded-tl-[350px]" />

        {/* Анімоване зображення */}
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].img}
            src={slides[index].img}
            alt="car"
            className="absolute h-full w-full rounded-tl-[200px] object-cover grayscale xl:rounded-tl-[350px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute bottom-[15px] left-5 z-[10] flex gap-3 xl:right-[100px] xl:bottom-1/2 xl:left-auto xl:translate-y-1/2 xl:flex-col">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-10 w-10 xl:h-[50px] xl:w-[50px]"
            >
              {i === index ? (
                <CircularStep
                  number={i + 1}
                  progress={25}
                  color="var(--accent)"
                  background="var(--accent)"
                  textColor="var(--primary)"
                />
              ) : (
                <p className="font-bold text-white">{i + 1}</p>
              )}
            </button>
          ))}
        </div>
        <div className="services-mobile-gradient absolute bottom-[0px] z-[9] h-[65px] w-full" />
      </div>
    </div>
  );
};

export default VerticalSwiper;
