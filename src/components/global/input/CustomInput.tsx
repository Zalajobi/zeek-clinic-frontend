import { ChangeEvent, Fragment, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import Typography from '../Typography';

interface TextInputProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
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
  value: string;
  change: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
  className?: string;
  isError?: boolean;
}

export const TextInput = ({
  label,
  id,
  errorMsg,
  icon,
  placeholder = '',
  className = '',
  register,
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
  value,
  change,
  label,
  placeholder,
  className = '',
  isError,
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
          onChange={(e) => console.log(e)}
          className={`peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans 
          text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border 
          placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2
          focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 
          ${isError ? 'border-red-500' : ''} ${
            value ? 'border-t-transparent' : ''
          } `}
        />

        <label
          htmlFor="date"
          className={`className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex
        h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all
        before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
        before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200
        before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block
        after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r
        after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm
        peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500
        peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
        peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2
        peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2
        peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent
        peer-disabled:before:border-transparent peer-disabled:after:border-transparent
        peer-disabled:peer-placeholder-shown:text-blue-gray-500`}>
          {label}
        </label>
      </div>
    </Fragment>
  );
};
