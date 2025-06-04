import formatEuroPrice from '@/helpers/formatEuroPrice';
import { getCarImage } from '@/helpers/getCarImage';
import { Link } from '@/i18n/navigation';
import { Car, Locale } from '@/types/baseTypes';
import Image from 'next/image';

type CarProps = {
  car: Car;
  locale?: Locale;
};

const SubTitle = ({ text }: { text: string }) => {
  return <h5 className="text-[10px] leading-none">{text}</h5>;
};

const FirstPrice = ({ price }: { price: number }) => {
  return (
    <p className="text-xs leading-none font-semibold line-through">{formatEuroPrice(price)}</p>
  );
};

const SecondPrice = ({ price }: { price: number }) => {
  return <p className="text-base leading-none font-bold">{formatEuroPrice(price)}</p>;
};

const CarCard = ({ car, locale }: CarProps) => {
  const carID = car.custom_id || 5885;

  const carTitle = `ID ${carID} ${car.make} ${car.model}`;
  const netPrice = car.price - (car.price * 21) / 100;

  const carImgURL = getCarImage(car.primary_photo_url);
  const carImgURL1 = getCarImage(car.photo_urls[1]);
  const carImgURL2 = getCarImage(car.photo_urls[2]);

  return (
    <article className="group flex h-[444px] w-[407px] flex-col overflow-hidden transition-all duration-500 ease-in-out will-change-transform hover:h-[564px] hover:gap-y-2.5">
      <Link href={`/catalogue/${car.id}`} locale={locale} className="h-full w-full">
        <div className="h-[220px] w-full overflow-hidden rounded-t-base transition-all duration-500 ease-in-out group-hover:h-[200px] group-hover:rounded-base">
          <Image
            src={carImgURL}
            alt="car"
            width={407}
            height={220}
            className="h-[220px] w-full object-cover group-hover:h-[200px]"
          />
        </div>
        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[140px] group-hover:opacity-100">
          <div className="flex items-center justify-center gap-x-2.5">
            <div className="h-[120px] w-1/2 overflow-hidden rounded-base">
              <Image
                src={carImgURL1}
                alt="car"
                width={198}
                height={120}
                className="h-[120px] w-full object-cover transition-opacity duration-500 ease-in-out"
              />
            </div>
            <div className="h-[120px] w-1/2 overflow-hidden rounded-base">
              <Image
                src={carImgURL2}
                alt="car"
                width={198}
                height={120}
                className="h-[120px] w-full object-cover transition-opacity duration-500 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[224px] w-full flex-col gap-[15px] rounded-b-base border-[2px] border-primary px-5 py-[30px] transition-all duration-500 ease-in-out group-hover:rounded-base">
          <h4 className="text-xl font-bold">{carTitle}</h4>
          <div className="flex h-[95px] w-full rounded-base bg-[#E8E8E8] py-2.5">
            <div className="flex w-[110px] flex-col justify-between px-2.5">
              <SubTitle text="Price incl. 21% VAT" />
              <FirstPrice price={car.price} />
              <SecondPrice price={car.price} />
            </div>
            <div className="flex w-[116px] flex-col justify-between border-x-[2px] border-primary/20 px-2.5">
              <SubTitle text="Net price excl. VAT" />
              <FirstPrice price={netPrice} />
              <SecondPrice price={netPrice} />
            </div>
            <div className="flex w-fit flex-col justify-between px-2.5">
              <SubTitle text="Monthly financing from" />
              <SecondPrice price={195.38} />
            </div>
          </div>
          <p className="text-ark-grey text-base leading-[1.2] font-medium">
            {car.year} - {car.gearbox} - {car.mileage} km
          </p>
        </div>
      </Link>
    </article>
  );
};

export default CarCard;
