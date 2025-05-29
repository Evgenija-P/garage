import { Facebook, Insta, WhatsApp } from '@/assets/icons';
import { Locale } from '@/types/baseTypes';
import Logo from '../UI/Logo';

const Footer = ({ locale }: { locale: Locale }) => {
  return (
    <footer className="relative w-full">
      <div className="absolute top-[90px] left-0 h-[1px] w-full bg-primary/20" />
      <div className="wrapper pt-5 pb-[45px]">
        <div className="flex flex-wrap">
          <div className="h-[90px] w-1/3">
            <Logo locale={locale} />
          </div>

          <h3 className="h-[90px] w-1/3 pt-[15px] pl-10 text-lg font-bold">Our Services</h3>
          <h3 className="h-[90px] w-1/3 pt-[15px] pl-[50px] text-lg font-bold">Contact Us</h3>
          <div className="w-1/3">
            <address className="w-[116px] text-base leading-none font-light not-italic">
              AutoMaxGarage Verre Weide 65 4264 KM Veen Netherlands
            </address>
          </div>

          <ul className="flex w-1/3 flex-col gap-y-5 pl-10 text-base leading-none font-medium">
            <li>Buying cars</li>
            <li>Auto Service&Repair</li>
            <li>BMW Car Service</li>
          </ul>
          <div className="flex w-1/3 flex-col pl-[50px]">
            <h3 className="mb-10 text-base font-bold">General</h3>
            <h4 className="mb-10 mb-[15px] text-base font-semibold">Auto Service&Repair</h4>
            <p className="mb-10 text-base font-light">
              WhatsApp:{' '}
              <a
                href="https://wa.me/31629768160"
                className="hover:underline hover:underline-offset-2"
              >
                +31 6 29 76 81 60
              </a>
            </p>
            <h4 className="mb-10 mb-[15px] text-base font-semibold">Buying cars</h4>
            <p className="mb-[15px] text-base font-light">
              UA | RU:{' '}
              <a href="tel:+380507524433" className="hover:underline hover:underline-offset-2">
                +380 50 752 44 33
              </a>
            </p>
            <p className="text-base font-light">
              EN | DE:{' '}
              <a href="tel:+31615417790" className="hover:underline hover:underline-offset-2">
                +31 6 15 41 77 90
              </a>
            </p>
          </div>
        </div>
        <div className="mt-14 flex w-full items-center justify-between">
          <p className="w-1/3 text-base">Copyright ©2024 AutoMax Garage. All rights reserved</p>
          <div className="w-1/3" />
          <div className="w-1/3 pl-[50px]">
            <ul className="flex w-[110px] items-center justify-between gap-x-2.5">
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
