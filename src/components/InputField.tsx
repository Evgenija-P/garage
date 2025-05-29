import { Cross } from '@/assets/icons';
import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import ErrorFormMessage from './ErrorFormMessage';

type InputFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder?: string;
  type?: string;
  rules?: object;
  className?: string;
  clearField?: () => void;
  value?: string; // додаємо value
};

const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = 'text',
  rules,
  className = '',
  clearField,
  value = '',
}: InputFieldProps) => {
  return (
    <div className="group relative mb-[30px]">
      <label htmlFor={name} className="text-base font-semibold text-primary">
        {label}*
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full border-b-[1.5px] border-primary text-base transition-colors duration-300 focus:border-primary/60 focus:outline-none ${className} ${errors[name] ? 'border-red-500' : ''}`}
      />
      {errors[name] && <ErrorFormMessage information={errors[name]?.message?.toString()} />}
      {clearField && value.trim() !== '' && (
        <button
          type="button"
          onClick={clearField}
          className="send-btn absolute top-1/2 right-0 -translate-y-1/2 opacity-60 transition-opacity duration-300 hover:opacity-100"
          aria-label="Clear input"
        >
          <Cross className="cross-icon transition-colors duration-300" />
        </button>
      )}
    </div>
  );
};

export default InputField;
