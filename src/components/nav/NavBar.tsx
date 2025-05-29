'use client';

import { navLinks } from '@/constants/navLinks';
import { Link, usePathname } from '@/i18n/navigation';
import { Locale } from '@/types/baseTypes';
import { useTranslations } from 'next-intl';

const NavBar = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const t = useTranslations('navigation');

  const NavLinkComponent = ({ titleKey }: { titleKey: string }) => {
    return (
      <p className="text-sm font-medium uppercase group-hover:underline group-hover:underline-offset-3">
        {t(titleKey)}
      </p>
    );
  };

  return (
    <nav className="hidden items-center justify-center gap-10 md:flex">
      {navLinks.map(el => {
        const isActive = pathname.includes(el.link);
        return (() => {
          switch (el.type) {
            case 'link':
              return (
                <Link
                  // href={el.link}
                  locale={locale}
                  href={`/${el.link}`}
                  className={`group border-b border-transparent ${isActive ? 'border-b-accent hover:border-transparent' : ''}`}
                  key={el.link}
                >
                  <NavLinkComponent titleKey={el.titleKey} />
                </Link>
              );
            case 'id':
              return (
                <a href={el.link} className="group" key={el.link}>
                  <NavLinkComponent titleKey={el.titleKey} />
                </a>
              );

            default:
              return null;
          }
        })();
      })}
    </nav>
  );
};

export default NavBar;
