"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { Locale } from "@/types/baseTypes";

type NavLinks = {
  title: string;
  link: string;
  type: "link" | "id";
};
const NavBar = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();

  const navLinks: NavLinks[] = [
    {
      title: "services & price list",
      link: "services_and_price",
      type: "link",
    },
    {
      title: "faq",
      link: "#faq",
      type: "id",
    },
    {
      title: "car catalogue",
      link: "catalogue",
      type: "link",
    },
    {
      title: "contact us",
      link: "#contact",
      type: "id",
    },
  ];

  const NavLinkComponent = ({
    title,
    link,
  }: {
    title: NavLinks["title"];
    link: NavLinks["link"];
  }) => {
    return (
      <p
        className={`text-sm uppercase font-medium group-hover:underline group-hover:underline-offset-3`}
      >
        {title}
      </p>
    );
  };

  return (
    <nav className="hidden md:flex gap-10 items-center justify-center">
      {navLinks.map(el => {
        const isActive = pathname.includes(el.link);
        return (() => {
          switch (el.type) {
            case "link":
              return (
                <Link
                  href={el.link}
                  locale={locale}
                  className={`group border-b border-transparent  ${isActive ? "border-b-accent hover:border-transparent" : ""}`}
                  key={el.link}
                >
                  <NavLinkComponent title={el.title} link={el.link} />
                </Link>
              );
            case "id":
              return (
                <a href={el.link} className="group" key={el.link}>
                  <NavLinkComponent title={el.title} link={el.link} />
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
