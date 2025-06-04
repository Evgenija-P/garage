'use client';

import { Filters } from '@/types/baseTypes';
import { useState } from 'react';
import {
  brandOptions,
  fuelOptions,
  mileageRangesMap,
  transmissionOptions,
  yearRangesMap,
} from './CarsWrapper';
import FilterDropdown from './FilterDropdown';

type FiltersComponentProps = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
};

const initialFilters: Filters = {
  yearRanges: [],
  mileageRanges: [],
  brand: undefined,
  transmission: undefined,
  fuelType: undefined,
};

const FiltersComponent = ({ filters, setFilters }: FiltersComponentProps) => {
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const toggleFilter = (filterName: string) => {
    setOpenFilter(prev => (prev === filterName ? null : filterName));
  };

  return (
    <>
      <FilterDropdown
        title="Year"
        options={Object.keys(yearRangesMap)}
        selectedOptions={filters.yearRanges}
        multiple
        isOpen={openFilter === 'yearRanges'}
        onToggle={() => toggleFilter('yearRanges')}
        onChange={range =>
          setFilters({
            ...filters,
            yearRanges: filters.yearRanges.includes(range)
              ? filters.yearRanges.filter(r => r !== range)
              : [...filters.yearRanges, range],
          })
        }
        filterName="year"
      />

      <FilterDropdown
        title="Mileage"
        options={Object.keys(mileageRangesMap)}
        selectedOptions={filters.mileageRanges}
        // multiple
        isOpen={openFilter === 'mileageRanges'}
        onToggle={() => toggleFilter('mileageRanges')}
        onChange={range =>
          setFilters({
            ...filters,
            mileageRanges: filters.mileageRanges.includes(range)
              ? filters.mileageRanges.filter(r => r !== range)
              : [...filters.mileageRanges, range],
          })
        }
      />

      <FilterDropdown
        title="Brand"
        options={brandOptions}
        selectedOptions={filters.brand ? [filters.brand] : []}
        isOpen={openFilter === 'brand'}
        onToggle={() => toggleFilter('brand')}
        onChange={brand =>
          setFilters({
            ...filters,
            brand: brand === filters.brand ? undefined : brand,
          })
        }
      />

      <FilterDropdown
        title="Transmission"
        options={transmissionOptions}
        selectedOptions={filters.transmission ? [filters.transmission] : []}
        isOpen={openFilter === 'transmission'}
        onToggle={() => toggleFilter('transmission')}
        onChange={transmission =>
          setFilters({
            ...filters,
            transmission: transmission === filters.transmission ? undefined : transmission,
          })
        }
      />

      <FilterDropdown
        title="Fuel"
        options={fuelOptions}
        selectedOptions={filters.fuelType ? [filters.fuelType] : []}
        isOpen={openFilter === 'fuelType'}
        onToggle={() => toggleFilter('fuelType')}
        onChange={fuelType =>
          setFilters({
            ...filters,
            fuelType: fuelType === filters.fuelType ? undefined : fuelType,
          })
        }
      />
      <button
        className="flex h-[52px] w-fit items-center justify-between gap-x-[10px] rounded-full border-[1.5px] border-primary bg-bgColor p-[18px] font-medium hover:border-accent hover:bg-accent"
        onClick={() => {
          setFilters(initialFilters);
          setOpenFilter(null);
        }}
      >
        Reset filters
      </button>
    </>
  );
};

export default FiltersComponent;
