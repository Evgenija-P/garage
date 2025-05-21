// src/constants/navLinks.ts
export type NavLinkType = {
  id: number;
  titleKey: string; // ключ для перекладу
  link: string;
  type: 'link' | 'id';
  img?: string;
};

export const navLinks: NavLinkType[] = [
  {
    id: 10,
    titleKey: 'services_and_price',
    link: 'services_and_price',
    type: 'link',
    img: '/images/hero-services.jpg',
  },
  { id: 12, titleKey: 'faq', link: '#faq', type: 'id' },
  {
    id: 11,
    titleKey: 'car_catalogue',
    link: 'catalogue',
    type: 'link',
    img: '/images/hero-catalogue.jpg',
  },
  { id: 13, titleKey: 'contact_us', link: '#contact', type: 'id', img: '/images/hero-contact.png' },
];
