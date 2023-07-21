import { Fragment, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import Typography from '../Typography';

interface TextInputProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  className?: string;
  errorMsg?: string;
  placeholder?: string;
  icon?: ReactNode;
}

interface SelectInputProps {
  id: string;
  options: {
    value: string;
    placeholder: string;
  }[];
  register: UseFormRegister<any>;
  label: string;
  errorMsg?: string;
  className?: string;
}

interface DateInputProps {
  label: string;
  id: string;
  placeholder: string;
  className?: string;
  errorMsg?: string;
  register: UseFormRegister<any>;
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
}: TextInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative h-10 w-full min-w-[200px] ${className}`}
        data-te-input-wrapper-init>
        <input
          className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15]
          outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary
          data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200
          dark:placeholder:text-neutral-200 dark:peer-focus:text-primary !border-red-500
          [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          placeholder={placeholder}
          {...register(id)}
          id={id}
          type={type}
        />

        {icon && (
          <div className="absolute top-2/4 right-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
            {icon}
          </div>
        )}

        <label
          className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem]
            leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem]
            peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem]
            peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200
            dark:peer-focus:text-primary`}
          htmlFor={id}>
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

export const SelectInput = ({
  options,
  label,
  errorMsg,
  className = '',
  id,
  register,
}: SelectInputProps) => {
  return (
    <Fragment>
      <div className={`relative h-10 w-full min-w-[200px] ${className}`}>
        <select
          data-te-select-init
          data-te-select-size="lg"
          {...register(id)}
          id={id}>
          <option value="">Select {label}</option>
          {options.map((item, idx) => {
            return <option value={item.value}>{item.placeholder}</option>;
          })}
        </select>
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
}: DateInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative h-10 w-full min-w-[200px] ${className}`}
        data-te-datepicker-init
        data-te-inline={true}
        data-te-input-wrapper-init>
        <input
          type="text"
          className={`peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] 
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary
            data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200
            dark:placeholder:text-neutral-200 dark:peer-focus:text-primary
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          placeholder={placeholder}
          {...register(id)}
          id={id}
        />

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
