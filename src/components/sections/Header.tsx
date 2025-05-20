import { Locale } from "@/types/baseTypes";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "./UI/Logo";
import NavBar from "./nav/NawBar";
import BurgerMenu from "./nav/BurgerMenu";

const Header = ({ locale }: { locale: Locale }) => {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-6 md:px-12">
      <Logo locale={locale} />
      <NavBar locale={locale} />
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
        <BurgerMenu /> {/* для мобільної версії */}
      </div>
    </header>
  );
};

export default Header;
