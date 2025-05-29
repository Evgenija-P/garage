import { Facebook, Insta, WhatsApp } from '@/assets/icons';
import { Locale } from '@/types/baseTypes';
import Logo from '../UI/Logo';

const Footer = ({ locale }: { locale: Locale }) => {
  return (
    <footer className="relative w-full">
      <div className="absolute top-[90px] left-0 hidden h-[1px] w-full bg-primary/20 md:block" />
      <div className="wrapper pt-5 pb-[45px]">
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <div className="flex items-center justify-between border-b border-primary/20 pb-[15px] md:border-none md:pb-0 xl:flex-col xl:items-start xl:justify-start">
            <div className="md:h-[90px] md:w-1/3">
              <Logo locale={locale} />
            </div>
            <address className="w-[116px] text-right text-xs leading-none font-light not-italic md:text-left md:text-base">
              AutoMaxGarage Verre Weide 65 4264 KM Veen Netherlands
            </address>
          </div>

          <div className="flex flex-col border-b border-primary/20 py-[30px] md:border-none md:py-0">
            <h3 className="mb-5 text-base font-bold md:mb-0 md:h-[90px] md:pt-[15px] md:pl-10 md:text-lg">
              Our Services
            </h3>{' '}
            <ul className="text-sx flex flex-col gap-y-5 leading-none font-medium md:pl-10 md:text-base">
              <li>Buying cars</li>
              <li>Auto Service&Repair</li>
              <li>BMW Car Service</li>
            </ul>
          </div>

          <div className="flex flex-col py-[30px] md:border-none md:py-0">
            <h3 className="mb-[30px] text-base font-bold md:mb-0 md:h-[90px] md:pt-[15px] md:pl-10 md:text-lg">
              Contact Us
            </h3>
            <div className="flex flex-col md:pl-[50px]">
              <h3 className="text-sx mb-5 font-bold md:mb-10 md:text-base">General</h3>
              <h4 className="text-sx mb-[17px] font-semibold md:mb-[15px] md:text-base">
                Auto Service&Repair
              </h4>
              <p className="text-sx mb-[30px] font-light md:mb-10 md:text-base">
                WhatsApp:{' '}
                <a
                  href="https://wa.me/31629768160"
                  className="hover:underline hover:underline-offset-2"
                >
                  +31 6 29 76 81 60
                </a>
              </p>
              <h4 className="text-sx mb-[17px] font-semibold md:mb-[15px] md:text-base">
                Buying cars
              </h4>
              <p className="text-sx mb-[17px] font-light md:mb-[15px] md:text-base">
                UA | RU:{' '}
                <a href="tel:+380507524433" className="hover:underline hover:underline-offset-2">
                  +380 50 752 44 33
                </a>
              </p>
              <p className="text-sx font-light md:text-base">
                EN | DE:{' '}
                <a href="tel:+31615417790" className="hover:underline hover:underline-offset-2">
                  +31 6 15 41 77 90
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between md:flex-row xl:mt-14">
          <p className="order-2 mt-2.5 w-full text-center text-[10px] md:order-1 md:mt-0 xl:w-1/3 xl:text-left xl:text-base">
            Copyright ©2024 AutoMax Garage. All rights reserved
          </p>
          <div className="hidden w-1/3 xl:order-2 xl:block" />
          <div className="order-1 w-full border-b border-primary/20 pb-[30px] md:order-2 md:border-none md:pb-0 md:pl-[50px] xl:order-3 xl:w-1/3">
            <ul className="mx-auto flex w-[110px] items-center justify-between gap-x-2.5 xl:ml-0">
              <li className="flex h-[30px] w-[30px] items-center justify-center">
                <a href="https://www.facebook.com/" className="">
                  <Facebook />
                </a>
              </li>
              <li className="flex h-[30px] w-[30px] items-center justify-center">
                <a href="https://www.instagram.com/" className="">
                  <Insta />
                </a>
              </li>
              <li className="flex h-[30px] w-[30px] items-center justify-center">
                <a href="https://www.linkedin.com/" className="">
                  <WhatsApp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
