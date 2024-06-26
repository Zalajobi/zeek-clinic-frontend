import { Fragment, ReactNode, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  Menu,
  Button,
  MenuHandler,
  MenuList,
  MenuItem,
  Popover,
  PopoverHandler,
  Input,
  PopoverContent,
  Select,
  Option,
  Typography as MaterialTypography,
  Checkbox,
  Typography,
  Textarea,
} from '@material-tailwind/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface TextInputProps {
  label: string;
  id: string;
  register?: UseFormRegister<any>;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'date'
    | 'datetime-local';
  className?: string;
  errorMsg?: string;
  placeholder?: string;
  icon?: ReactNode;
  change?: (event: string) => void;
  size?: 'lg' | 'md';
  showLabel?: boolean;
}

interface SelectInputProps {
  id: string;
  options: SelectInputFieldProps[];
  register?: UseFormRegister<any>;
  label?: string;
  errorMsg?: string;
  className?: string;
  change?: (event: any) => void;
  size?: 'lg' | 'md';
}

interface DateInputProps {
  label: string;
  id: string;
  register?: UseFormRegister<any>;
  errorMsg?: string;
  change?: (event: Date) => void;
  value?: Date;
  showLabel?: boolean;
}

interface CheckboxInputProps {
  label: string;
  id: string;
  register?: UseFormRegister<any>;
  change?: (value: boolean) => void;
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

interface CustomTextAreaInputProps {
  label: string;
  id: string;
  register?: UseFormRegister<any>;
  className?: string;
  errorMsg?: string;
  placeholder?: string;
  change?: (event: string) => void;
  size?: 'lg' | 'md';
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
  change,
  size,
  showLabel = true,
}: TextInputProps) => {
  return (
    <Fragment>
      <div className={`min-w-[100px] my-2 ${className}`}>
        <div className="w-full">
          <div className="relative w-full">
            {showLabel && (
              <Typography
                variant="small"
                color={errorMsg === '' ? 'blue-gray' : 'red'}
                className="mb-2 font-medium">
                {label}
              </Typography>
            )}

            {register ? (
              <Fragment>
                <Input
                  icon={icon}
                  className="!border-gray-200 focus:!border-black"
                  type={type}
                  variant={'outlined'}
                  size={size ?? 'lg'}
                  id={id}
                  placeholder={placeholder}
                  color={errorMsg === '' ? 'blue-gray' : 'red'}
                  {...register(id)}
                />
              </Fragment>
            ) : (
              <Fragment>
                <Input
                  icon={icon}
                  className="!border-gray-200 focus:!border-black"
                  type={type}
                  variant={'outlined'}
                  size={size ?? 'lg'}
                  id={id}
                  placeholder={placeholder}
                  color={errorMsg === '' ? 'blue-gray' : 'red'}
                  onChange={(event) => {
                    if (change) change(event.target.value);
                  }}
                />
              </Fragment>
            )}
          </div>
          {errorMsg && (
            <MaterialTypography
              variant={'small'}
              className="mt-2 flex items-center gap-1 font-normal"
              color={'red'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              {errorMsg}
            </MaterialTypography>
          )}
        </div>
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
  change,
  size,
}: SelectInputProps) => {
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
        </div>

        <div className={`relative w-full min-w-[100px] my-2 ${className}`}>
          {register ? (
            <Select
              size={size ?? 'lg'}
              onChange={(eventValue) => {
                if (change) change(eventValue ?? '');
                register?.(id, {
                  value: eventValue,
                });
              }}
              label={`Select ${label}`}
              id={id}>
              {options.map((item, idx) => {
                return (
                  <Option
                    value={item.value}
                    key={`${item}-${idx}`}>
                    {item.placeholder.replaceAll('_', ' ')}
                  </Option>
                );
              })}
            </Select>
          ) : (
            <>
              <Select
                label={`Select ${label}`}
                onChange={(value) => {
                  if (change) change(value ?? '');
                }}>
                {options.map((item, idx) => {
                  return (
                    <Option
                      value={item.value}
                      key={`${idx}_${item}`}>
                      {item.placeholder.replaceAll('_', ' ')}
                    </Option>
                  );
                })}
              </Select>
            </>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export const DateInput = ({
  label,
  errorMsg,
  id,
  register,
  change,
  value,
  showLabel = false,
}: DateInputProps) => {
  const [date, setDate] = useState<Date>();

  const updateDate = (value: any) => {
    if (change) {
      change(value);
    }

    setDate(value);
  };

  const dateClassNames = {
    caption: 'flex justify-center py-2 mb-4 relative items-center',
    caption_label: 'text-sm font-medium text-gray-900',
    nav: 'flex items-center',
    nav_button:
      'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
    nav_button_previous: 'absolute left-1.5',
    nav_button_next: 'absolute right-1.5',
    table: 'w-full border-collapse',
    head_row: 'flex font-medium text-gray-900',
    head_cell: 'm-0.5 w-9 font-normal text-sm',
    row: 'flex w-full mt-2',
    cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
    day: 'h-9 w-9 p-0 font-normal',
    day_range_end: 'day-range-end',
    day_selected:
      'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
    day_today: 'rounded-md bg-gray-200 text-gray-900',
    day_outside:
      'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
    day_disabled: 'text-gray-500 opacity-50',
    day_hidden: 'invisible',
  };

  const dateComponent = {
    IconLeft: ({ ...props }) => (
      <BiChevronLeft
        {...props}
        className="h-4 w-4 stroke-2"
      />
    ),
    IconRight: ({ ...props }) => (
      <BiChevronRight
        {...props}
        className="h-4 w-4 stroke-2"
      />
    ),
  };

  return (
    <Fragment>
      <div className={`min-w-[100px] my-2`}>
        <div className="w-full">
          {showLabel && (
            <label
              htmlFor={id}
              className={`block text-sm !text-[#464e5a] font-medium mb-2 dark:text-white ${
                errorMsg ? '!text-red-500' : '!text-blue-gray-200'
              }`}>
              {label}
            </label>
          )}
        </div>

        <Popover placement="bottom">
          <PopoverHandler>
            <Input
              label={label}
              onChange={() => null}
              value={date ? format(date, 'PPP') : ''}
            />
          </PopoverHandler>
          <PopoverContent>
            <DayPicker
              mode="single"
              selected={value}
              {...register?.(id, {
                onChange: (event) => {
                  if (change) {
                    change(event);
                  }
                },
              })}
              onSelect={updateDate}
              showOutsideDays
              classNames={dateClassNames}
              components={dateComponent}
            />
          </PopoverContent>
        </Popover>
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
  change,
}: CheckboxInputProps) => {
  return (
    <Fragment>
      {register ? (
        <Checkbox
          id={id}
          label={
            <MaterialTypography className={`font-bold text-sm ${className}`}>
              {label}
            </MaterialTypography>
          }
          ripple={true}
          disabled={disabled}
          {...register(id, {
            onChange: (event) => {
              if (change) {
                change(event);
              }
            },
          })}
        />
      ) : (
        <Checkbox
          id={id}
          label={
            <MaterialTypography className={`font-bold text-sm ${className}`}>
              {label}
            </MaterialTypography>
          }
          ripple={true}
          disabled={disabled}
          onChange={(event) => {
            if (change) change(event.target.checked);
          }}
        />
      )}
    </Fragment>
  );
};

export const PhoneNumberInput = ({
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

export const CustomTextAreaInput = ({
  className = '',
  id,
  errorMsg,
  label,
  change,
  size,
  register,
  placeholder,
}: CustomTextAreaInputProps) => {
  return (
    <Fragment>
      <div className={`min-w-[100px] my-2 ${className}`}>
        <div className="w-full">
          <div className="relative w-full">
            <Typography
              variant="small"
              color={errorMsg === '' ? 'blue-gray' : 'red'}
              className="mb-2 font-medium">
              {label}
            </Typography>

            {register ? (
              <Fragment>
                <Textarea
                  className="!border-gray-200 focus:!border-black"
                  variant={'outlined'}
                  size={size ?? 'lg'}
                  id={id}
                  placeholder={placeholder}
                  color={errorMsg === '' ? 'blue-gray' : 'red'}
                  {...register(id)}
                />
              </Fragment>
            ) : (
              <Fragment>
                <Textarea
                  className="!border-gray-200 focus:!border-black"
                  variant={'outlined'}
                  size={size ?? 'lg'}
                  id={id}
                  placeholder={placeholder}
                  color={errorMsg === '' ? 'blue-gray' : 'red'}
                  onChange={(event) => {
                    if (change) change(event.target.value);
                  }}
                />
              </Fragment>
            )}
          </div>
          {errorMsg && (
            <MaterialTypography
              variant={'small'}
              className="mt-2 flex items-center gap-1 font-normal"
              color={'red'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              {errorMsg}
            </MaterialTypography>
          )}
        </div>
      </div>
    </Fragment>
  );
};
