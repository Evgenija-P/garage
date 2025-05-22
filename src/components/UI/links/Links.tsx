import { Arrow } from '@/assets/icons';
import { Link } from '@/i18n/navigation';
import { Locale } from '@/types/baseTypes';
import React from 'react';

type LinksProps = {
  category: 'primary' | 'secondary';
  styles?: string;
  children: React.ReactNode;
  href: string;
  locale: Locale;
};

const baseButtonClass = `px-5 h-[52px] rounded-full flex gap-x-[10px] items-center border-[1.5px] text-white text-sm font-semibold group disabled:opacity-80 disabled:pointer-events-none`;

const categoryStyles: Record<LinksProps['category'], string> = {
  primary: `justify-center bg-primary border-primary active:text-accent pl-4 pr-2`,
  secondary: `justify-center bg-transparent border-white hover:text-accent hover:border-accent active:text-primary active:border-accent active:bg-accent`,
};

const arrowWrapperClass = `w-9 h-9 rounded-full flex items-center justify-center bg-white text-white group-hover:bg-accent group-active:bg-accent group-active:-rotate-45 group-disabled:bg-white group-disabled:text-white group-disabled:rotate-0 ml-auto`;

const Links = ({ category, styles = '', children, href, locale }: LinksProps) => {
  return (
    <Link
      href={href}
      locale={locale}
      className={`${baseButtonClass} ${categoryStyles[category]} ${styles}`}
    >
      {children}
      {category === 'primary' && (
        <div className={arrowWrapperClass}>
          <Arrow fill={'fill-(--color-primary) '} />
        </div>
      )}
    </Link>
  );
};

export default Links;
