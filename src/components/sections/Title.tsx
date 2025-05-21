import { thousand } from '@/app/[locale]/fonts';
import React from 'react';

interface TitleProps {
  tag?: string;
  styles?: string;
  children: React.ReactNode;
  textColor?: 'primary' | 'accent' | 'white';
}

const Title = ({ tag = 'h3', styles = '', textColor = 'primary', children }: TitleProps) => {
  const textColorVariable = {
    primary: 'text-primary',
    accent: 'text-accent',
    white: 'text-white',
  };

  const textColorClass = textColorVariable[textColor];
  const textStyle = `${styles} ${textColorClass} uppercase ${thousand.className}`;

  switch (tag) {
    case 'h1':
      return (
        <h1 className={`text-2xl leading-[1] font-medium xl:text-4xl ${textStyle}`}>{children}</h1>
      );
    case 'h2':
      return (
        <h2 className={`text-[22px] leading-[1.2] font-medium xl:text-[32px] ${textStyle}`}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={`text-[28px] leading-[1.4] font-semibold xl:text-[42px] ${textStyle}`}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={`text-xl leading-[1.2] font-medium xl:text-[28px] ${textStyle}`}>
          {children}
        </h4>
      );
    case 'h5':
      return <h5 className={`text-2xl leading-[1] font-medium ${textStyle}`}>{children}</h5>;
    case 'h6':
      return (
        <h6 className={`text-lg leading-[1] font-bold xl:text-[28px] ${textStyle}`}>{children}</h6>
      );
    default:
      return (
        <h3 className={`text-[28px] leading-[1.4] font-semibold xl:text-[42px] ${textStyle}`}>
          {children}
        </h3>
      );
  }
};

export default Title;
