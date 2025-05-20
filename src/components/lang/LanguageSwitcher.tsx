"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/types/baseTypes";

const LanguageSwitcher = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();

  // Отримаємо шлях без префікса локалі
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  const isLocale = routing.locales.includes(firstSegment as Locale);
  const pathWithoutLocale = isLocale ? segments.slice(1).join("/") : segments.join("/");

  console.log(locale);

  return (
    <div className="w-[196px] p-[6px] flex items-center justify-between rounded-3xl bg-[#E3E3E3] ">
      {routing.locales.map(loc => (
        <Link
          key={loc}
          href={`/${pathWithoutLocale}`}
          locale={loc}
          className={`w-9 h-9 rounded-full uppercase text-sm font-semibold flex items-center justify-center ${
            locale === loc ? "bg-accent" : "hover:underline"
          }`}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
