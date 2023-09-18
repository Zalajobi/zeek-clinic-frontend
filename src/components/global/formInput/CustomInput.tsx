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
  enableFilter?: boolean;
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
      <div className={`min-w-[100px] ${className}`}>
        <div className="w-full">
          <div className="relative h-[58px] w-full min-w-[200px]">
            <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
              {icon}
            </div>

            {register && (
              <input
                className={`peer h-full w-full rounded-[7px] border border-blue-gray-200 
              bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 
              transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
              placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent 
              focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                placeholder={placeholder}
                id={id}
                {...register(id)}
              />
            )}

            {change && (
              <input
                className={`peer h-full w-full rounded-[7px] border border-blue-gray-200 
              bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 
              transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
              placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent 
              focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                placeholder={placeholder}
                onChange={change}
                value={value}
                id={id}
              />
            )}

            <label
              className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex 
              h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all 
              before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 
              before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 
              before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block 
              after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r 
              after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm 
              peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 
              peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent 
              peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 
              peer-focus:before:border-l-2 peer-focus:before:border-gray-500 peer-focus:after:border-t-2 
              peer-focus:after:border-r-2 peer-focus:after:border-gray-500 peer-disabled:text-transparent 
              peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
              peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${
                errorMsg ? '!text-red-500' : '!text-blue-gray-200'
              }`}
              htmlFor={id}>
              {label}
            </label>
          </div>

          {errorMsg && (
            <div className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary">
              <Typography
                Tag={`span`}
                text={errorMsg}
                className={`italic text-xs font-thin ${
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
  enableFilter = false,
  change,
}: SelectInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative h-10 w-full min-w-[100px] select-input-global-component ${className}`}>
        {register ? (
          <select
            data-te-select-init={true}
            data-te-select-size="lg"
            data-te-select-filter={enableFilter}
            {...register?.(id, {
              onChange: (event) => {
                if (change) {
                  change(event);
                }
              },
            })}
            id={id}>
            <option value="">Select {label}</option>
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
            data-te-select-init={true}
            data-te-select-size="lg"
            data-te-select-filter={enableFilter}
            onChange={change}
            id={id}>
            <option value="">Select {label}</option>
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

        <label data-te-select-label-ref>{label}</label>

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
