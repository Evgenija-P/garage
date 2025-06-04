'use client';

import { Car, Filters } from '@/types/baseTypes';
import { useState } from 'react';
import CarCard from './CarCard';
import FiltersComponent from './FiltersComponent';
import Buttons from './UI/buttons/Buttons';

type CarsWrapperProps = {
  cars: Car[];
};

export const yearRangesMap: Record<string, [number, number]> = {
  '2020-2024': [2020, 2024],
  '2016-2019': [2016, 2019],
  '2010-2015': [2010, 2015],
  '2006-2009': [2006, 2009],
  '<2006': [0, 2005],
};

export const mileageRangesMap: Record<string, [number, number]> = {
  '>100000': [100000, 10000000],
  '50000-100000': [50000, 100000],
  '20000-50000': [20000, 50000],
  '10000-20000': [10000, 20000],
  '<10000': [0, 10000],
};

export const brandOptions = [
  'Audi',
  'BMW',
  'Mercedes-Benz',
  'Volkswagen',
  'Porsche',
  'Toyota',
  'Honda',
  'Nissan',
];

export const transmissionOptions = ['Mechanical', 'Automatic', 'Semi-automatic', 'CVT'];
export const fuelOptions = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];

export const CarsWrapper = ({ cars }: CarsWrapperProps) => {
  const [filters, setFilters] = useState<Filters>({
    yearRanges: [],
    mileageRanges: [],
    brand: undefined,
    transmission: undefined,
    fuelType: undefined,
  });

  const [visibleCount, setVisibleCount] = useState(12);

  // const renderCars = cars.filter(car => car.primary_photo_url?.length > 0);
  const renderCars = cars;

  const filterCars = (cars: Car[], filters: Filters): Car[] => {
    const { yearRanges, mileageRanges, brand, transmission, fuelType } = filters;

    return cars.filter(car => {
      const yearMatch =
        !yearRanges.length ||
        yearRanges.some(range => {
          const [start, end] = yearRangesMap[range];
          const carYear = Number(car.year);
          return !isNaN(carYear) && carYear >= start && carYear <= end;
        });

      const mileageMatch =
        !mileageRanges.length ||
        mileageRanges.some(range => {
          const [start, end] = mileageRangesMap[range];
          const mileage = Number(car.mileage);
          return !isNaN(mileage) && mileage >= start && mileage <= end;
        });

      const brandMatch = !brand || car.make.toLowerCase() === brand.toLowerCase();
      const transmissionMatch =
        !transmission || car.gearbox.toLowerCase() === transmission.toLowerCase();
      const fuelMatch = !fuelType || car.fuel_type.toLowerCase() === fuelType.toLowerCase();

      return yearMatch && mileageMatch && brandMatch && transmissionMatch && fuelMatch;
    });
  };

  const filteredCars = filterCars(renderCars, filters);
  const visibleCars = filteredCars.slice(0, visibleCount);

  return (
    <section className="w-full">
      <div className="wrapper mx-auto">
        <div className="my-10 flex flex-wrap gap-4">
          <FiltersComponent filters={filters} setFilters={setFilters} />
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleCars.map(car => (
            <CarCard key={car.custom_id} car={car} />
          ))}
        </div>

        {visibleCount < filteredCars.length && (
          <div className="mt-8 flex justify-center">
            <Buttons category="base" fnc={() => setVisibleCount(prev => prev + 6)}>
              Показати ще
            </Buttons>
          </div>
        )}
      </div>
    </section>
  );
};
