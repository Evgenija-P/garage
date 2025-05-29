import { BASE_URL_IMG } from '@/constants/APIConfig';
import formatEuroPrice from '@/helpers/formatEuroPrice';
import { Car } from '@/types/baseTypes';
import Image from 'next/image';

type CarProps = {
  car: Car;
};
const CarCard = ({ car }: CarProps) => {
  const carID = car.custom_id || 5885;
  const carTitle = `ID ${carID} ${car.make} ${car.model}`;
  const netPrice = car.price - (car.price * 21) / 100;

  const carImgURL = `${BASE_URL_IMG}${car.primary_photo_url}`;

  return (
    <article className="group flex h-[444px] w-[407px] flex-col overflow-hidden transition-all duration-300 ease-out hover:h-[564px] hover:gap-y-2.5">
      <div className="h-[220px] w-full overflow-hidden rounded-t-base transition-all duration-300 ease-out group-hover:h-[200px] group-hover:rounded-base">
        <Image src={carImgURL} alt="car" width={407} height={220} className="w-full object-cover" />
      </div>
      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-[140px] group-hover:opacity-100">
        <div className="flex items-center justify-center gap-x-2.5">
          <div className="h-[120px] w-1/2 overflow-hidden rounded-base">
            <Image
              src={`${BASE_URL_IMG}${car.photo_urls[1]}`}
              alt="car"
              width={198}
              height={120}
              className="w-full object-cover transition-opacity duration-300 ease-out"
            />
          </div>
          <div className="h-[120px] w-1/2 overflow-hidden rounded-base">
            <Image
              src={`${BASE_URL_IMG}${car.photo_urls[2]}`}
              alt="car"
              width={198}
              height={120}
              className="w-full object-cover transition-opacity duration-300 ease-out"
            />
          </div>
        </div>
      </div>
      <div className="flex h-[224px] w-full flex-col gap-[15px] rounded-b-base border-[2px] border-primary px-5 py-[30px] transition-all duration-300 ease-out group-hover:rounded-base">
        <h4 className="text-xl font-bold">{carTitle}</h4>
        <div className="flex h-[95px] w-full rounded-base bg-[#E8E8E8] py-2.5">
          <div className="flex w-[110px] flex-col justify-between px-2.5">
            <p className="text-[10px] leading-none">Price incl. 21% VAT</p>
            <p className="text-xs leading-none font-semibold line-through">
              {formatEuroPrice(car.price)}
            </p>
            <p className="text-base leading-none font-bold">{formatEuroPrice(car.price)}</p>
          </div>
          <div className="flex w-[116px] flex-col justify-between border-x-[2px] border-primary/20 px-2.5">
            <p className="text-[10px] leading-none">Net price excl. VAT</p>
            <p className="text-xs leading-none font-semibold line-through">
              {formatEuroPrice(netPrice)}
            </p>
            <p className="text-base leading-none font-bold">{formatEuroPrice(netPrice)} </p>
          </div>
          <div className="flex w-fit flex-col justify-between px-2.5">
            <p className="text-[10px] leading-none">Monthly financing from</p>

            <p className="text-base leading-none font-bold">195,38 €</p>
          </div>
        </div>
        <p className="text-ark-grey text-base leading-[1.2] font-medium">
          {car.year} - {car.gearbox} - {car.mileage} km
        </p>
      </div>
    </article>
  );
};

export default CarCard;
