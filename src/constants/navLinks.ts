// src/constants/navLinks.ts
export type NavLinkType = {
  titleKey: string; // ключ для перекладу
  link: string;
  type: "link" | "id";
};

export const navLinks: NavLinkType[] = [
  {
    titleKey: "services_and_price",
    link: "services_and_price",
    type: "link",
  },
  {
    titleKey: "faq",
    link: "#faq",
    type: "id",
  },
  {
    titleKey: "car_catalogue",
    link: "catalogue",
    type: "link",
  },
  {
    titleKey: "contact_us",
    link: "#contact",
    type: "id",
  },
];
