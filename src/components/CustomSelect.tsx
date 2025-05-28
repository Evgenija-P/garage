import { Arrow } from '@/assets/icons'; // твоя іконка стрілки
import React from 'react';
import Select, { Props as SelectProps, StylesConfig } from 'react-select';

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = Omit<SelectProps<Option>, 'styles'> & {
  label?: string; // додано пропс label
};

const customStyles: StylesConfig<Option, false> = {
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    borderBottom: '1.5px solid var(--primary)',
    borderRadius: '0',
    boxShadow: 'none !important', // 💡

    cursor: 'pointer',
    backgroundColor: 'var(--background)',
    '&:hover': {
      borderBottom: '1.5px solid var(--primary)', // 💡 явно зафіксовано
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
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    color: state.isFocused ? 'var(--accent)' : 'var(--primary)',
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
  }),
};

const CustomSelect = ({ label, ...props }: CustomSelectProps) => {
  return (
    <div className="mb-4">
      {label && <label className="mb-1 block text-base font-semibold text-primary">{label}*</label>}
      <Select
        {...props}
        isMulti={false}
        styles={customStyles}
        components={{
          DropdownIndicator: dropdownProps => (
            <div style={{ padding: '0 8px' }}>
              <Arrow />
            </div>
          ),
        }}
        isSearchable={false}
      />
    </div>
  );
};

export default CustomSelect;
