import { Input } from '@material-tailwind/react';
import { ChangeEvent, Fragment } from 'react';

interface BasicSearchInputProps {
  placeholder?: string;
  value: string;
  change: (event: ChangeEvent<HTMLInputElement>) => void;
  inputClass?: string;
  className?: string;
}

export const BasicSearchInput = ({
  placeholder,
  value,
  change,
  inputClass = '',
  className = '',
}: BasicSearchInputProps) => {
  return (
    <Fragment>
      <div className={`relative flex w-full gap-2 ${className}`}>
        <Input
          size="lg"
          label="Search"
          value={value}
          onChange={change}
          placeholder={placeholder ?? 'Search...'}
          labelProps={{
            className: 'hidden',
          }}
          containerProps={{ className: 'min-w-[100px]' }}
          className={`!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 ${inputClass}`}
        />
      </div>
    </Fragment>
  );
};
