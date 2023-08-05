import { Fragment } from 'react';

interface CheckBoxProps {
  inputClassName?: string;
  labelClassName?: string;
  text?: string;
  id?: string;
  checked: boolean;
  click: () => void;
}

const CheckBox = ({
  inputClassName,
  labelClassName,
  text = 'Remember me',
  id = 'remember',
  checked,
  click,
}: CheckBoxProps) => {
  return (
    <Fragment>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          className={`h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 hover:cursor-pointer ${inputClassName}`}
          id={id}
          onClick={click}
        />
        <label
          className={`text-sm font-medium text-gray-900 dark:text-gray-300 hover:cursor-pointer ${labelClassName}`}
          onClick={click}>
          {text}
        </label>
      </div>
    </Fragment>
  );
};

export default CheckBox;
