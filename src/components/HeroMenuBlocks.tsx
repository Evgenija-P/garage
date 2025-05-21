'use client';

import { Arrow } from '@/assets/icons';
import { navLinks } from '@/constants/navLinks';
import { useIsDesktop } from '@/hooks/useIsDesktop';
import { Link } from '@/i18n/navigation';
import { Locale } from '@/types/baseTypes';
import { useTranslations } from 'next-intl';

const HeroMenuBlocks = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('navigation');

  const isDesktop = useIsDesktop();

  const sortedLinks = isDesktop
    ? [...navLinks].sort((a, b) => a.id - b.id) // копія + сортування
    : navLinks;

  return (
    <ul className="grid grid-cols-2 gap-2.5 xl:grid-cols-4 xl:gap-x-[11px]">
      {sortedLinks.map((el, index) => {
        const baseStylesList =
          ' relative flex h-[150px] xl:h-[250px] w-full flex-col justify-end overflow-hidden rounded-base border-[1.5px] border-primary bg-cover bg-center bg-no-repeat px-2.5 pt-5 pb-2.5 xl:p-5';

        const baseTextStyles = `${index === 0 ? 'text-white' : 'text-primary'} max-w-4/5 text-base xl:text-2xl font-bold uppercase`;

        const baseArrowStyles =
          index === 0
            ? 'group-active:fill-primary fill-white group-hover:fill-accent group-active:-rotate-45'
            : 'fill-primary group-hover:fill-white group-active:-rotate-45 group-active:fill-accent';

        const baseLinkStyles = `${index === 0 ? 'border-white hover:border-accent active:bg-accent' : 'border-primary hover:bg-primary'} group flex h-10 w-10 items-center justify-center rounded-full border ml-auto`;

        return (
          <li
            key={el.link}
            style={{
              backgroundImage: el.img ? `url(${el.img})` : undefined,
            }}
            className={baseStylesList}
          >
            {el.titleKey === 'car_catalogue' && (
              <div className="absolute top-0 left-0 z-0 h-full w-full bg-bgColor opacity-90" />
            )}
            {el.titleKey === 'services_and_price' && (
              <div className="absolute top-0 left-0 z-0 h-full w-full bg-primary opacity-70" />
            )}
            <div className="relative z-[1] flex h-full flex-col items-stretch justify-between xl:h-fit xl:flex-row xl:items-center">
              <p className={baseTextStyles}>{t(el.titleKey)}</p>
              {el.type === 'link' ? (
                <Link href={el.link} locale={locale} className={baseLinkStyles}>
                  <Arrow className={baseArrowStyles} />
                </Link>
              ) : (
                <a href={el.link} className={baseLinkStyles}>
                  <Arrow className={baseArrowStyles} />
                </a>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HeroMenuBlocks;
