import { ChangeEvent, Fragment, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import Typography from '../Typography';
import { Simulate } from 'react-dom/test-utils';
import change = Simulate.change;

interface TextInputProps {
  label: string;
  id: string;
  register: UseFormRegister<any>;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  className?: string;
  errorMsg?: string;
  placeholder?: string;
  icon?: ReactNode;
  prefix?: string;
}

interface SelectInputProps {
  id: string;
  options: {
    value: string;
    placeholder: string;
  }[];
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
  register: UseFormRegister<any>;
  className?: string;
  errorMsg?: string;
  icon?: ReactNode;
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
}: TextInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative w-full min-w-[100px] ${className}`}
        data-te-input-wrapper-init>
        {prefix && (
          <div>
            <Typography
              className="absolute top-2/4 grid h-5 w-18 -translate-y-2/4 place-items-center text-blue-gray-500 ml-[10px]
              peer-[:not(:placeholder-shown)]:top-[67%] focus:top-[67%] peer-focus:top-[67%] text-[#C4C4C6]
              [&:not(:placeholder-shown)]:top-[67%] [&:not(:placeholder-shown)]:top-[67%]"
              Tag={`span`}
              text={prefix}
            />
          </div>
        )}
        <input
          className={`peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent 
          bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 
          ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] 
          focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 
          dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary 
          [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem] 
          ${prefix ? 'pl-[70px]' : ''}`}
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
          className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 
          py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 
          peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary 
          peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] 
          peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 
          dark:peer-focus:text-primary ${errorMsg ? 'text-red-500' : ''}`}
          htmlFor={id}>
          {label}
        </label>

        {errorMsg && (
          <div
            className="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
            data-te-input-helper-ref>
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
      <div className={`relative h-10 w-full min-w-[100px] ${className}`}>
        <select
          data-te-select-init
          data-te-select-size="lg"
          data-te-select-filter={enableFilter}
          className={`helloworld`}
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
}: DateInputProps) => {
  return (
    <Fragment>
      <div
        className={`relative h-10 w-full min-w-[100px] ${className}`}
        data-te-datepicker-init
        data-te-inline={true}
        data-te-input-wrapper-init>
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
          id={id}
        />

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
