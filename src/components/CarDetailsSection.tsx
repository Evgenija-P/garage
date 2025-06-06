'use client';

import { thousand } from '@/app/[locale]/fonts';
import { Plus } from '@/assets/icons';
import { Car } from '@/types/baseTypes';
import { useState } from 'react';
import Title from './sections/Title';
import BaseModal from './UI/modal/Modal';

const CarDetailsSection = ({ car }: { car: Car }) => {
  const [nameSectionOnShow, setNameSectionOnShow] = useState<string>('');
  const details = [
    { name: 'brand', value: car.make },
    { name: 'Drive Type', value: car.drive_unit },
    { name: 'Range', value: car.mileage },
    { name: 'Origin', value: 'not info' },
    { name: 'Model', value: car.model },
    { name: 'Gear box', value: car.gearbox },
    { name: 'Category', value: 'not info' },
    { name: 'Number of Owners', value: 'not info' },
    { name: 'FIRST REGISTRATION DATE', value: 'not info' },
    { name: 'Engine Power (Electric)', value: car.engine_capacity },
    { name: 'Number of Seats', value: 'not info' },
    { name: 'Technical Inspection (APK)', value: 'not info' },
    { name: 'odometer reading', value: 'not info' },
    { name: 'Fuel Type', value: car.fuel_type },
    { name: 'Color', value: 'not info' },
    { name: 'License Plate', value: 'not info' },
    { name: 'Defects', value: 'not info' },
  ];

  return (
    <section className="-mt-[75px] min-h-[987px] w-full bg-secondary">
      <div className="wrapper mx-auto pt-[75px]">
        <Title tag="h4" styles={`text-center my-20 ${thousand.className}`} textColor="accent">
          Details
        </Title>
        <div className="grid grid-cols-4 gap-10 border-t border-b border-t-white border-b-white py-[35px]">
          {details.map(detail => (
            <div key={detail.name} className="flex flex-col gap-y-3 font-bold">
              <p className="text-xs text-lite-grey/70">{detail.name}</p>
              <p className="text-lg text-white">{detail.value}</p>
            </div>
          ))}
        </div>
        <div
          className={`${nameSectionOnShow === 'description' ? 'pt-[27px] pb-5' : 'py-[27px]'} relative w-full`}
        >
          <h3 className="text-[22px] font-bold text-white">Description</h3>
          {nameSectionOnShow === 'description' && (
            <p className="mt-5 text-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est labore temporibus
              praesentium, officiis sit iure omnis voluptates blanditiis facere possimus eum ad
              libero reiciendis architecto, qui distinctio, velit dignissimos?
            </p>
          )}
          <button
            className={`group absolute right-[5px] flex h-10 w-10 items-center justify-center rounded-full hover:bg-accent/30 ${nameSectionOnShow === 'description' ? 'top-[10px] bg-accent' : 'top-1/2 -translate-y-1/2 bg-bgColor/30'}`}
            onClick={() =>
              setNameSectionOnShow(nameSectionOnShow === 'description' ? '' : 'description')
            }
          >
            <Plus
              className={` ${nameSectionOnShow === 'description' ? 'rotate-45 text-primary' : 'text-white'}`}
            />
          </button>
        </div>
        <div
          className={`${nameSectionOnShow === 'features' ? 'pt-[27px] pb-5' : 'py-[27px]'} relative w-full border-t border-b border-t-white border-b-white`}
        >
          <h3 className="text-[22px] font-bold text-white">Features</h3>

          <button
            className="group absolute top-1/2 right-[5px] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-bgColor/30 hover:bg-accent"
            onClick={() => setNameSectionOnShow('features')}
          >
            <Plus className="text-white group-hover:rotate-45 group-hover:text-primary" />
          </button>
        </div>
      </div>
      <BaseModal
        isOpen={nameSectionOnShow === 'features'}
        onClose={() => setNameSectionOnShow('')}
        type="baseModal"
        modalWrapperStyles="w-1/2 h-1/2 bg-bgColor"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam est labore temporibus
          praesentium, officiis sit iure omnis voluptates blanditiis facere possimus eum ad libero
          reiciendis architecto, qui distinctio, velit dignissimos?
        </p>
      </BaseModal>
    </section>
  );
};

export default CarDetailsSection;
