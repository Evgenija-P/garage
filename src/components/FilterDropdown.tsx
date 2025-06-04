'use client';

import { SelectIcon } from '@/assets/icons';

type FilterDropdownProps = {
  title: string;
  options: string[];
  selectedOptions: string[];
  multiple?: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
  filterName?: string;
};

const FilterDropdown = ({
  title,
  options,
  selectedOptions,
  multiple = false,
  isOpen,
  onToggle,
  onChange,
  filterName,
}: FilterDropdownProps) => {
  const isSelected = (option: string) => selectedOptions.includes(option);

  return (
    <div className="relative">
      <button
        className="relative z-[2] flex h-[52px] w-[185px] items-center justify-between gap-x-[10px] rounded-full border-[1.5px] border-primary bg-bgColor p-[18px] font-medium"
        onClick={onToggle}
      >
        <>
          {title} {filterName === 'year' && `(${selectedOptions.length})`}
        </>

        <SelectIcon className={`${isOpen ? 'rotate-180' : ''} transition-transform duration-300`} />
      </button>

      {isOpen && (
        <div className="absolute top-[26px] left-0 z-[1] flex w-full flex-col gap-y-5 rounded-b-[40px] border-[1.5px] border-primary bg-bgColor px-5 py-[25px] pt-[26px]">
          {options.map(option => {
            if (multiple) {
              return (
                <label
                  key={option}
                  className="flex items-center gap-2 rounded px-2 py-1 hover:cursor-pointer hover:bg-accent"
                >
                  <input
                    type="checkbox"
                    value={option}
                    checked={isSelected(option)}
                    onChange={() => onChange(option)}
                  />
                  {option}
                </label>
              );
            }

            return (
              <div
                key={option}
                onClick={() => onChange(option)}
                className={`rounded px-2 py-1 hover:cursor-pointer hover:bg-accent ${
                  isSelected(option) ? 'font-semibold' : ''
                }`}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
