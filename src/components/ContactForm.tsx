'use client';

import { Arrow } from '@/assets/icons';
import { BASE_URL } from '@/constants/APIConfig';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CustomSelect from './CustomSelect';
import ErrorFormMessage from './ErrorFormMessage';
import InputField from './InputField';
import Buttons from './UI/buttons/Buttons';
import Spinner from './UI/loader/Spinner';

type Option = {
  value: string;
  label: string;
};

type FormData = {
  name: string;
  phone: string;
  email: string;
  language: Option | null;
  prefer: Option | null;
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

const TitleText = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-5 text-lg font-bold md:mb-[30px] md:text-[22px]">{children}</h2>
);

const ContactForm = () => {
  const [messageLength, setMessageLength] = useState<number>(0);
  const [isSendMessage, setIsSendMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
    shouldUnregister: true,
    defaultValues: {
      language: null,
      prefer: null,
      name: '',
      email: '',
      message: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!data.language || !data.prefer) {
      trigger(['language', 'prefer']); // викличе помилки
      return;
    }

    setIsLoading(true);
    setError(null);

    const fetchingData = {
      ...data,
      language: data.language.label,
      prefer: data.prefer.value,
    };

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fetchingData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setIsSendMessage(true);
      reset();
      setMessageLength(0);
    } catch (err: any) {
      setError(err.message || 'Unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const clearField = (fieldName: keyof FormData) => {
    reset({ ...getValues(), [fieldName]: '' });
  };
  const nameValue = watch('name');
  const phoneValue = watch('phone');
  const emailValue = watch('email');

  return (
    <div className="form-wrapper min-h-[764px] w-full rounded-base md:min-h-[826px] xl:w-[615px]">
      {isSendMessage ? (
        <div className="gradient-border-form relative z-[1] flex h-full w-full flex-col items-center justify-center rounded-base bg-bgColor px-[15px] py-[30px] text-center md:px-[30px] md:py-10">
          <TitleText>Thank you!</TitleText>

          <p className="mt-2.5 mb-5">
            We recived your Message. <br />
            Our Team will contact you withing 2 working days.
          </p>
          <Buttons category="primary" type="button" fnc={() => setIsSendMessage(false)}>
            Contact Again
          </Buttons>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gradient-border-form relative z-[1] w-full rounded-4xl bg-bgColor px-[15px] py-[30px] md:px-[30px] md:pt-10 md:pb-[60px]"
        >
          <TitleText> Leave your contacts, and we’ll contact you</TitleText>

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
              render={({ field, fieldState }) => (
                <div className="relative">
                  <CustomSelect
                    label="Language"
                    value={field.value}
                    onChange={option => field.onChange(option)}
                    options={languageOptions}
                    placeholder="Select language"
                    instanceId="language-select"
                  />
                  {fieldState.error && <ErrorFormMessage information={fieldState.error.message} />}
                </div>
              )}
            />
          </div>

          <div>
            <Controller
              name="prefer"
              control={control}
              rules={{ required: 'Please select a contact method' }}
              render={({ field, fieldState }) => (
                <div className="relative">
                  <CustomSelect
                    label="I prefer to be connected by"
                    value={field.value}
                    onChange={option => field.onChange(option)}
                    options={preferOptions}
                    placeholder="Select a contact method"
                    instanceId="prefer-select"
                  />
                  {fieldState.error && <ErrorFormMessage information={fieldState.error.message} />}
                </div>
              )}
            />
          </div>

          <div className="relative mt-[30px] md:mt-[60px]">
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
            {errors.message && (
              <ErrorFormMessage information={errors.message?.message?.toString()} />
            )}
          </div>

          <button
            type="submit"
            className={`group mx-auto flex h-[52px] min-w-[144px] items-center justify-between gap-x-[10px] rounded-full border-[1.5px] border-primary bg-primary ${isLoading ? 'px-0' : 'pr-[8px] pl-[23px]'} text-sm font-semibold text-white active:text-accent disabled:pointer-events-none disabled:opacity-80`}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                Send Message
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-white group-hover:bg-accent group-active:-rotate-45 group-active:bg-accent group-disabled:rotate-0 group-disabled:bg-white group-disabled:text-white">
                  <Arrow fill={'fill-(--color-primary)'} />
                </div>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
