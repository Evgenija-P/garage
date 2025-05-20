import { Link } from "@/i18n/navigation";
import { Locale } from "@/types/baseTypes";

const NavBar = ({ locale }: { locale: Locale }) => {
  return (
    <nav className="hidden md:flex gap-6">
      <Link href={`/${locale}/about`}></Link>
      <Link href={`/${locale}/services`}></Link>
      <Link href={`/${locale}/contact`}></Link>
    </nav>
  );
};

export default NavBar;
