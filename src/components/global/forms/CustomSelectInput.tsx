import { Select, Option } from '@material-tailwind/react';
import { ChangeEvent, Fragment } from 'react';
import { SelectInputFieldProps } from '@typeSpec/common';
import { UseFormRegister } from 'react-hook-form';
import {
  MaterialTailwindColor,
  MaterialTailwindSize,
  MaterialTailwindVariant,
} from '@typeSpec/global/material-tailwind/selectInputProps';

interface CustomSelectInputProps {
  id: string;
  value: string;
  label: string;
  options: SelectInputFieldProps[];
  change: (event: string | undefined) => void;
  size?: MaterialTailwindSize;
  color?: MaterialTailwindColor;
  className?: string;
  animate?: Object;
  variant?: MaterialTailwindVariant;
  success?: boolean;
  error?: boolean;
}

export const CustomSelectMenuDropdown = ({
  id,
  value,
  label,
  options,
  change,
  size = 'md',
  color = 'gray',
  className = '',
  variant = 'outlined',
  success = false,
  error = false,
  animate = {
    mount: { y: 0 },
    unmount: { y: 25 },
  },
}: CustomSelectInputProps) => {
  console.log(value);
  return (
    <Fragment>
      <div className="w-72">
        <Select
          label="Select Version"
          value={value}>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
          {options.map((item) => {
            return (
              <Option
                onClick={(event) => console.log(event)}
                value={'Sweet'}>
                Material Is Sweet
              </Option>
            );
          })}
        </Select>
      </div>

      <div
        className={`relative w-full h-10 min-w-72 min-w-[200px] ${className}`}>
        <select
          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          onChange={(event) => change(event.target.value)}>
          <option
            disabled
            className={`py-3 my-3`}>
            Select {label}
          </option>
          {options.map((item) => {
            return (
              <option
                id={item.value}
                value={item.value}
                className={`py-3 my-3`}>
                {item.placeholder.replaceAll('_', ' ')}
              </option>
            );
          })}
        </select>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {label}
        </label>
      </div>
    </Fragment>
  );
};
