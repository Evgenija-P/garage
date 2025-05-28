'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from './CustomSelect';
import InputField from './InputField';

type Option = {
  value: string;
  label: string;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  language: Option;
  prefer: Option;
  message: string;
};

const languageOptions: Option[] = [
  { value: 'uk', label: 'Українська' },
  { value: 'ru', label: 'Русский' },
  { value: 'en', label: 'English' },
  { value: 'de', label: 'Deutsch' },
  { value: 'nl', label: 'Nederlands' },
];

const preferOptions: Option[] = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone' },
];

const ContactForm = () => {
  const [messageLength, setMessageLength] = useState<number>(0);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    trigger,
    reset,
    getValues,
    watch,
  } = useForm<FormData>({
    mode: 'all',
  });

  const onSubmit = (data: FormData) => {
    console.log('Submitted data:', {
      ...data,
      language: data.language.label,
      prefer: data.prefer.value,
    });

    reset();

    setMessageLength(0);
  };

  const clearField = (fieldName: keyof FormData) => {
    reset({ ...getValues(), [fieldName]: '' });
  };
  const nameValue = watch('name');
  const phoneValue = watch('phone');
  const emailValue = watch('email');

  return (
    <div className="form-wrapper w-[615px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gradient-border-form relative z-[1] w-full bg-bgColor px-[30px] pt-10 pb-[60px]"
      >
        <h2 className="mb-[30px] text-[22px] font-bold">
          Leave your contacts, and we’ll contact you
        </h2>
        <InputField
          label="Name"
          name="name"
          register={register}
          errors={errors}
          rules={{
            required: 'Name is required',
            pattern: {
              message: 'Please enter your name',
            },
          }}
          clearField={() => clearField('name')}
          value={nameValue}
        />

        <InputField
          label="Phone"
          name="phone"
          register={register}
          errors={errors}
          rules={{
            required: 'Phone is required',
            pattern: {
              value: /^[\d\s()+-]{7,20}$/,
              message: 'Invalid phone format',
            },
          }}
          clearField={() => clearField('phone')}
          value={phoneValue}
        />

        <InputField
          label="Email"
          name="email"
          register={register}
          errors={errors}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email format',
            },
          }}
          clearField={() => clearField('email')}
          value={emailValue}
        />

        <div>
          <Controller
            name="language"
            control={control}
            rules={{ required: 'Language is required' }}
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={field.value ?? null}
                options={languageOptions}
                label="Language"
                placeholder=""
                instanceId="language-select"
                onChange={val => field.onChange(val)}
              />
            )}
          />
          {errors.language && <p className="text-sm text-red-500">{errors.language.message}</p>}
        </div>

        <div>
          <Controller
            name="prefer"
            control={control}
            rules={{ required: 'Please select a contact method' }}
            render={({ field }) => (
              <CustomSelect
                {...field}
                label="I prefer to be connected by"
                value={field.value ?? null}
                options={preferOptions}
                instanceId="prefer-select"
                onChange={val => field.onChange(val)}
                placeholder=""
              />
            )}
          />
          {errors.prefer && <p className="text-sm text-red-500">{errors.prefer.message}</p>}
        </div>

        <div className="mt-[60px]">
          <label htmlFor="message" className="text-base font-semibold text-primary">
            Message*
          </label>
          <textarea
            {...register('message', {
              required: 'Message is required',
              maxLength: {
                value: 500,
                message: 'Message must be under 500 characters',
              },
              onChange: e => setMessageLength(e.target.value.length),
            })}
            onBlur={() => trigger('message')}
            id="message"
            placeholder="Message*"
            className="mt-2.5 h-[130px] w-full rounded-base bg-white p-2"
          />
          <div className="text-right text-sm text-gray-600">{messageLength} / 500</div>
          {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="mx-auto flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white"
        >
          Send Message <span className="text-lg">→</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
