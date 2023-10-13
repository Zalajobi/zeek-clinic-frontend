import { ChangeEvent, Fragment, ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Simulate } from 'react-dom/test-utils';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Typography } from '@components/global/dialog/Typography';
import change = Simulate.change;
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  Menu,
  Button,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react';

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

interface CustomDropDownMenuSelectProps {
  items: any[];
  value: any;
  onSelect: (value: any) => void;
  className?: string;
  prefixIcon?: ReactNode;
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
            className={`block text-sm !text-[#464e5a] font-medium mb-2 dark:text-white ${
              errorMsg ? '!text-red-500' : '!text-blue-gray-200'
            }`}>
            {label}
          </label>

          <div className="relative h-[58px] w-full min-w-[200px]">
            {register ? (
              <>
                <input
                  type={type}
                  className={`py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5`}
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
        className={`relative min-h-[100px] w-full min-w-[100px] my-2 ${className}`}>
        <label
          htmlFor="select-2"
          className="block !text-[#464e5a] text-sm font-medium mb-2 dark:text-white">
          {label}
        </label>
        {register ? (
          <select
            className="py-3 px-4 pr-9 block w-full border-[2px] border-gray-200 rounded-md text-sm focus:border-blue-500
              focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5"
            {...register?.(id, {
              onChange: (event) => {
                if (change) {
                  change(event);
                }
              },
            })}
            id={id}>
            <option
              selected
              disabled>
              Select {label}
            </option>
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
            className="py-3 px-4 pr-9 block w-full border-[2px] border-gray-200 rounded-md text-sm focus:border-blue-500
              focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 sm:p-5"
            onChange={change}
            id={id}>
            <option
              selected
              disabled>
              Select {label}
            </option>
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
      <div className={`relative h-10 w-full min-w-[100px] ${className}`}>
        <div className="w-full">
          <label
            htmlFor={id}
            className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex
              h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all
              before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5
              before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200
              before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block
              after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r
              after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm
              peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500
              peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
              peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2
              peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2
              peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent
              peer-disabled:before:border-transparent peer-disabled:after:border-transparent
              peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${
                errorMsg ? '!text-red-500' : '!text-blue-gray-200'
              }`}>
            {label}
          </label>

          <div className="relative h-[58px] w-full min-w-[200px]">
            {register ? (
              <>
                <input
                  type={`date`}
                  className={`peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent 
                  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all
                  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
                  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0
                  disabled:bg-blue-gray-50`}
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
                  type={`date`}
                  className={`peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent
                  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all
                  placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
                  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0
                  disabled:bg-blue-gray-50`}
                  placeholder={placeholder}
                  id={id}
                  onChange={change}
                  // value={value}
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
  label,
  className = '',
}: {
  country: string;
  label: string;
  change: (value: string | number) => void;
  className?: string;
}) => {
  return (
    <Fragment>
      <div
        className={`relative h-10 w-full min-w-[100px] min-h-[100px] my-3 ${className}`}>
        <div className="w-full">
          <label className={`block text-sm font-medium mb-2 dark:text-white`}>
            {label}
          </label>
        </div>

        <div className="relative h-[58px] w-full min-w-[200px]">
          <PhoneInput
            placeholder="Enter phone number"
            label={`Phone Number`}
            country="US"
            onChange={(value) => change(value as string)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export const CustomDropDownMenuSelect = ({
  items,
  value,
  onSelect,
  className = '',
  prefixIcon,
}: CustomDropDownMenuSelectProps) => {
  return (
    <Fragment>
      <Menu
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}>
        <MenuHandler>
          <Button
            className={`flex items-center justify-center p-2 ${className}`}>
            {prefixIcon} {value}
          </Button>
        </MenuHandler>

        {items.length > 0 && (
          <MenuList className={`max-h-72`}>
            {items?.map((item: any) => (
              <div>
                <MenuItem onClick={() => onSelect(item)}>{item}</MenuItem>
              </div>
            ))}
          </MenuList>
        )}
      </Menu>
    </Fragment>
  );
};
