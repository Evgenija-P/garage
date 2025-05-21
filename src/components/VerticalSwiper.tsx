'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const slides = [
  {
    title: 'BMW CAR SERVICE',
    desc: 'Cars from top auctions: selected for condition, price, and reliability...',
    img: '/img1.jpg',
  },
  {
    title: 'CAR SELECTION THROUGH AUCTIONS',
    desc: 'History checks, legal compliance, city delivery...',
    img: '/img2.jpg',
  },
  {
    title: 'VEHICLE SOFTWARE SOLUTIONS',
    desc: 'Custom BMW software upgrades and diagnostics...',
    img: '/img3.jpg',
  },
];

const VerticalSwiper = () => {
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
      className="relative flex h-[570px] w-full items-center justify-between overflow-hidden bg-red-200 px-12"
    >
      {/* Left Text */}
      <div className="w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold text-lime-400 uppercase">{slides[index].title}</h2>
            <p className="max-w-lg text-gray-300">{slides[index].desc}</p>
            <button className="rounded-full border border-white px-6 py-2 text-white transition hover:bg-white hover:text-black">
              View More
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Image */}
      <div className="relative flex h-full w-1/2 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[index].img}
            src={slides[index].img}
            alt="car"
            className="absolute max-h-[80%] object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Dots */}
        <div className="absolute top-1/2 right-4 flex -translate-y-1/2 flex-col gap-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-6 w-6 rounded-full text-sm font-bold ${
                i === index ? 'bg-lime-400 text-black' : 'bg-gray-700 text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalSwiper;
