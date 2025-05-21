import { Locale } from '@/types/baseTypes';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../lang/LanguageSwitcher';
import BurgerMenu from '../nav/BurgerMenu';
import NavBar from '../nav/NavBar';
import Logo from '../UI/Logo';

const Header = ({ locale }: { locale: Locale }) => {
  const t = useTranslations('navigation');
  return (
    <header className="mb-6 w-full pt-[15px]">
      <div className="wrapper flex h-12 items-center justify-between">
        <Logo locale={locale} />
        <NavBar locale={locale} />
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <BurgerMenu /> {/* для мобільної версії */}
        </div>
      </div>
    </header>
  );
};

export default Header;
