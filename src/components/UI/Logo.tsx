import { Link } from '@/i18n/navigation';
import { Locale } from '@/types/baseTypes';
import Image from 'next/image';

type LogoProps = {
  locale: Locale;
};

const Logo = ({ locale }: LogoProps) => {
  return (
    <Link href={`/`} locale={locale}>
      <Image src="/images/logo.png" alt="logo" width={130} height={40} />
    </Link>
  );
};

export default Logo;
