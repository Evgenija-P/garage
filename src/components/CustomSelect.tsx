'use client';

import { SelectIcon } from '@/assets/icons'; // твоя іконка стрілки
import React, { useState } from 'react';
import Select, { Props as SelectProps, StylesConfig } from 'react-select';

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  label?: string;
  value: Option | null;
  onChange: (value: Option | null) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  instanceId?: string;
};

const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    height: '27px',
    minHeight: '27px',
    border: 'none',
    borderBottom: '1.5px solid var(--primary)',
    borderRadius: '0',
    boxShadow: 'none !important',
    cursor: 'pointer',
    backgroundColor: 'var(--background)',
    '&:hover': {
      borderBottom: '1.5px solid var(--primary)',
    },
    padding: '0 !important',
    color: 'var(--primary)',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  singleValue: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
    color: 'var(--primary)', // або інший, який ти використовуєш
  }),

  placeholder: provided => ({
    ...provided,
    color: '#6B7280',
  }),

  menu: provided => ({
    ...provided,
    backgroundColor: 'var(--background) !important', // 💡 Додали !important
    border: '1.5px solid var(--primary)',
    borderColor: 'var(--primary) !important',
    borderRadius: '0 0 10px 10px',
    marginTop: 0,
    boxShadow: 'none',
    overflow: 'hidden',
  }),
  menuList: provided => ({
    ...provided,
    backgroundColor: 'var(--background) !important',
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'var(--accent)' : 'var(--background)',
    color: 'var(--primary)',
    cursor: 'pointer',
    borderRadius: 0,
    padding: '8px 12px',
    borderBottom: 'none',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0 !important',
    margin: 0,
    height: '27px',
    display: 'flex',
    alignItems: 'center',
  }),

  indicatorsContainer: provided => ({
    ...provided,
    height: '27px',
    display: 'flex',
    alignItems: 'center',
    // paddingRight: '12px',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    color: state.isFocused ? 'var(--accent)' : 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
  }),
};

const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  instanceId,
}: CustomSelectProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <div className="relative mb-[30px]">
      {label && <label className="text-base font-semibold text-primary">{label}*</label>}
      <Select
        value={value}
        onChange={option => onChange(option ?? null)}
        options={options}
        styles={customStyles}
        isClearable
        isSearchable={false}
        instanceId={instanceId}
        onMenuOpen={() => setMenuIsOpen(true)}
        onMenuClose={() => setMenuIsOpen(false)}
        menuIsOpen={menuIsOpen}
        components={{
          DropdownIndicator: () => (
            <div
              className={`${menuIsOpen ? 'rotate-180' : ''} transform cursor-pointer transition-transform duration-300`}
            >
              <SelectIcon />
            </div>
          ),
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomSelect;
