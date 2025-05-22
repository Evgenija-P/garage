'use client';

import { ReactNode, useEffect } from 'react';

type BackdropProps = {
  children?: ReactNode;
  className?: string;
};

const Backdrop = ({ children, className = '' }: BackdropProps) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    const body = document.body;

    // Заборона скролу + збереження позиції
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.overflow = 'hidden';
    body.style.width = '100%';

    return () => {
      // Повертаємо скрол назад
      const storedScrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.overflow = '';
      body.style.width = '';

      window.scrollTo(0, parseInt(storedScrollY || '0') * -1);
    };
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-[rgba(203,200,194,0.76)] backdrop-blur-sm ${className}`}
    >
      {children}
    </section>
  );
};

export default Backdrop;
