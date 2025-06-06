'use client';

import { Calendar, DriveUnit, Fuel, Gearbox, Mileage } from '@/assets/icons';
import { Car } from '@/types/baseTypes';
import Image from 'next/image';
import { useState } from 'react';
import CarDetailedDescriptionData from './CarDetailedDescriptionData';
import Buttons from './UI/buttons/Buttons';
import BaseModal from './UI/modal/Modal';

const CarPageDetailedDescription = ({ car }: { car: Car }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const carData = [
    { icon: <Fuel />, value: car.fuel_type }, // Тип палива
    { icon: <Calendar />, value: car.year }, //рік випуску
    { icon: <DriveUnit />, value: car.drive_unit }, // тип приводу
    { icon: <Gearbox />, value: car.gearbox }, // коробка передач
    { icon: <Mileage />, value: car.mileage }, // пробіг
  ];

  return (
    <>
      <div className="flex w-full flex-col gap-y-5 pb-2.5 pl-[25px]">
        <CarDetailedDescriptionData car={car} isPage />
        <Buttons
          category="base-dark"
          children="Reserve"
          fnc={() => setIsOpenModal(true)}
          styles="ml-auto w-[128px]"
        />
        <div className="grid w-full grid-cols-5 gap-x-2.5 border-t border-t-primary pt-8">
          {carData.map((item, index) => (
            <article
              key={item.value}
              className="relative flex flex-col items-center justify-between rounded-base border border-primary pt-[31px] pb-5"
            >
              {index === carData.length - 1 && (
                <Image
                  src="/images/NAP.png"
                  alt="line"
                  width={80}
                  height={34}
                  className="absolute -top-[19px] left-1/2 -translate-x-1/2"
                />
              )}
              {item.icon}
              <p className="text-base font-semibold">{item.value}</p>
            </article>
          ))}
        </div>
      </div>
      <BaseModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        type="notification"
        isShowBtnClose={false}
      >
        <div className="">
          <h3 className="mb-2.5 text-center text-[28px] font-bold uppercase">Important to know</h3>
          <p className="mb-5 text-center">
            Reservation is made for 7 days with a deposit of 500 Euros. The deposit is
            non-refundable. The deposit amount is deducted from the total cost of the car upon
            purchase.
          </p>
          <div className="flex items-center justify-between gap-x-2.5">
            <Buttons
              category="base-dark"
              children="Make Deposit"
              styles="w-1/2"
              // fnc={() => setIsOpenModal(false)}
            />
            <Buttons
              category="base"
              children="Back to Product"
              fnc={() => setIsOpenModal(false)}
              styles="w-1/2"
            />
          </div>
        </div>
      </BaseModal>
    </>
  );
};

export default CarPageDetailedDescription;
