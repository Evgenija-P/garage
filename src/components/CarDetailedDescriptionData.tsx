import formatEuroPrice from '@/helpers/formatEuroPrice';
import { Car } from '@/types/baseTypes';

const SubTitle = ({ text, isPage }: { text: string; isPage?: boolean }) => {
  return (
    <h5 className={`${isPage ? 'text-sm font-semibold' : 'text-[10px]'} leading-none`}>{text}</h5>
  );
};

const FirstPrice = ({ price, isPage }: { price: number; isPage?: boolean }) => {
  return (
    <p
      className={`${isPage ? 'mt-10 mb-5 text-sm font-medium' : 'text-xs font-semibold'} leading-none line-through`}
    >
      {formatEuroPrice(price)}
    </p>
  );
};

const SecondPrice = ({ price, isPage }: { price: number; isPage?: boolean }) => {
  return (
    <p
      className={`${isPage ? 'text-[22px] font-bold' : 'text-[14px] font-bold xl:text-base'} leading-none`}
    >
      {formatEuroPrice(price)}
    </p>
  );
};

const CarDetailedDescriptionData = ({ car, isPage }: { car: Car; isPage?: boolean }) => {
  const netPrice = car.price - (car.price * 21) / 100;

  // ${isPage ? '' : ''}
  return (
    <div
      className={`flex ${isPage ? 'h-[150px] justify-between p-5' : 'h-[95px] py-2.5'} w-full rounded-base bg-[#E8E8E8]`}
    >
      <div className={`flex ${isPage ? 'w-1/3' : 'w-[110px] px-2.5'} flex-col justify-between`}>
        <SubTitle text="Price incl. 21% VAT" isPage={isPage} />
        <FirstPrice price={car.price} isPage={isPage} />
        <SecondPrice price={car.price} isPage={isPage} />
      </div>
      <div
        className={`flex ${isPage ? 'w-1/3 pl-[30px]' : 'w-[116px] px-2.5'} flex-col justify-between border-x-[2px] border-primary/20`}
      >
        <SubTitle text="Net price excl. VAT" isPage={isPage} />
        <FirstPrice price={netPrice} isPage={isPage} />
        <SecondPrice price={netPrice} isPage={isPage} />
      </div>
      <div className={`flex ${isPage ? 'w-1/3 pl-5' : 'w-fit px-2.5'} flex-col justify-between`}>
        <SubTitle text="Monthly financing from" isPage={isPage} />
        <SecondPrice price={195.38} isPage={isPage} />
      </div>
    </div>
  );
};

export default CarDetailedDescriptionData;
