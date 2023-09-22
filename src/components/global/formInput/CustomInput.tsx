import { ChangeEvent, Fragment, ReactNode, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Typography } from '../dialog/Typography';
import { Simulate } from 'react-dom/test-utils';
import change = Simulate.change;
import moment from 'moment';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { SelectInputFieldProps } from '../../../types/common';

interface TextInputProps {
  label: string;
  id: string;
  register?: UseFormRegister<any>;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  className?: string;
  errorMsg?: string;
  placeholder?: string;
  icon?: ReactNode;
  prefix?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

interface TextInputWithoutLabelProps {
  id: string;
  register?: UseFormRegister<any>;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  className?: string;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  max?: string | number;
  min?: string | number;
}

interface SelectInputProps {
  id: string;
  options: SelectInputFieldProps[];
  register?: UseFormRegister<any>;
  label: string;
  errorMsg?: string;
  className?: string;
  change?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

interface DateInputProps {
  label: string;
  id: string;
  placeholder: string;
  register?: UseFormRegister<any>;
  className?: string;
  errorMsg?: string;
  icon?: ReactNode;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: Date;
}

interface CheckboxInputProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  change?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

export const TextInput = ({
  label,
  id,
  errorMsg,
  icon,
  placeholder = '',
  className = '',
  register,
  type = 'text',
  prefix,
  change,
  value,
}: TextInputProps) => {
  return (
    <Fragment>
      <div className={`min-w-[100px] my-2 ${className}`}>
        <div className="w-full">
          <label
            htmlFor={id}
            className={`block text-sm font-medium mb-2 dark:text-white ${
              errorMsg ? '!text-red-500' : '!text-blue-gray-200'
            }`}>
            {label}
          </label>

          <div className="relative h-[58px] w-full min-w-[200px]">
            {register ? (
              <>
                <input
                  type={type}
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5`}
                  placeholder={placeholder}
                  id={id}
                  {...register(id)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                  {icon}
                </div>
              </>
            ) : (
              <>
                <input
                  type={type}
                  className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5`}
                  placeholder={placeholder}
                  id={id}
                  onChange={change}
                  value={value}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                  {icon}
                </div>
              </>
            )}
          </div>
          {errorMsg && (
            <div className="text-sm text-red-600 mt-2">
              <Typography
                Tag={`span`}
                text={errorMsg}
                className={`italic text-xs font-bold ${
                  errorMsg ? 'text-red-500' : ''
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export const TextInputWithoutLabel = ({
  id,
  register,
  type = 'text',
  className,
  change,
  value,
  max,
  min,
}: TextInputWithoutLabelProps) => {
  return (
    <Fragment>
      {register ? (
        <input
          type={type}
          {...register(id)}
          className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 
          focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 ${className}`}
        />
      ) : (
        <input
          type={type}
          className={`py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 
          focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 ${className}`}
          onChange={change}
          value={value}
          max={max}
          min={min}
        />
      )}
    </Fragment>
  );
};

export const SelectInput = ({
  options,
  label,
  errorMsg,
  className = '',
  id,
  register,
  change,
}: SelectInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative h-[58px] w-full min-w-[100px] select-input-global-component my-2 ${className}`}>
        <label
          htmlFor="select-2"
          className="block text-sm font-medium mb-2 dark:text-white">
          {label}
        </label>
        {register ? (
          <select
            className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500
              focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5"
            {...register?.(id, {
              onChange: (event) => {
                if (change) {
                  change(event);
                }
              },
            })}
            id={id}>
            <option selected>Select {label}</option>
            {options.map((item, idx) => {
              return (
                <option
                  className={`!capitalize`}
                  value={item.value}>
                  {item.placeholder.replaceAll('_', ' ')}
                </option>
              );
            })}
          </select>
        ) : (
          <select
            className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500
              focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5"
            onChange={change}
            id={id}>
            <option selected>Select {label}</option>
            {options.map((item, idx) => {
              return (
                <option
                  className={`!capitalize`}
                  value={item.value}>
                  {item.placeholder.replaceAll('_', ' ')}
                </option>
              );
            })}
          </select>
        )}

        {errorMsg && (
          <>
            <Typography
              Tag={`span`}
              text={errorMsg}
              className={`text-sm text-green-600 mt-2 ${
                errorMsg ? 'text-red-500' : ''
              }`}
            />
          </>
        )}
      </div>
    </Fragment>
  );
};

export const DateInput = ({
  label,
  placeholder,
  className = '',
  errorMsg,
  id,
  register,
  icon,
  change,
  value,
}: DateInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative h-10 w-full min-w-[100px] min-h-[58px] date_picker-input-global-component ${className}`}
        data-te-datepicker-init
        data-te-inline={true}
        data-te-input-wrapper-init
        data-te-format={'m-d-yyyy'}>
        {register ? (
          <input
            data-te-datepicker-toggle-ref
            data-te-datepicker-toggle-button-ref
            type="text"
            className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] 
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary
            data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200
            dark:placeholder:text-neutral-200 dark:peer-focus:text-primary
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
            placeholder={placeholder}
            {...register(id)}
            value={moment(value).format('MMM DD. YYYY')}
            id={id}
          />
        ) : (
          <input
            data-te-datepicker-toggle-ref
            data-te-datepicker-toggle-button-ref
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6]
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary
            data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200
            dark:placeholder:text-neutral-200 dark:peer-focus:text-primary
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            placeholder={placeholder}
            onInput={change}
            id={id}
          />
        )}

        {icon && (
          <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
            {icon}
          </div>
        )}

        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
          leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
          peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
          peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 
          dark:peer-focus:text-primary`}>
          {label}
        </label>

        {errorMsg && (
          <>
            <Typography
              Tag={`span`}
              text={errorMsg}
              className={`italic text-xs font-thin ${
                errorMsg ? 'text-red-500' : ''
              }`}
            />
          </>
        )}
      </div>
    </Fragment>
  );
};

export const CheckboxInput = ({
  label,
  id,
  className = '',
  disabled = false,
  register,
}: CheckboxInputProps) => {
  return (
    <Fragment>
      <div
        className={`mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ${className}`}>
        <input
          className={`relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none 
            rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none
            before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full
            before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']
            checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute
            checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem]
            checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0
            checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent
            checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04]
            hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s]
            focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)]
            focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1]
            focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem]
            focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]
            checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px
            checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem]
            checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]
            checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid
            checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600
            dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)]
            dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]`}
          type="checkbox"
          value=""
          id={id}
          disabled={disabled}
          {...register(id, {
            onChange: (event) => {
              if (change) {
                change(event);
              }
            },
          })}
        />

        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor={id}>
          {label}
        </label>
      </div>
    </Fragment>
  );
};

export const CustomInputLabel = ({
  forItem,
  label,
  className = '',
}: {
  forItem: string;
  label: string;
  className?: string;
}) => {
  return (
    <label
      className={`text-sm font-medium text-gray-900 dark:text-gray-300 ${className}`}
      htmlFor={forItem}>
      {label}
    </label>
  );
};

export const PhoneNumberInput = ({
  country,
  change,
}: {
  country: string;
  change: (value: string | number) => void;
}) => {
  return (
    <Fragment>
      <div
        className={`relative w-full min-w-[100px] min-h-[80px] date_picker-input-global-component flex items-center justify-center`}>
        <PhoneInput
          placeholder="Enter phone number"
          label={`Phone Number`}
          country="US"
          onChange={(value) => change(value as string)}
        />
      </div>
    </Fragment>
  );
};
