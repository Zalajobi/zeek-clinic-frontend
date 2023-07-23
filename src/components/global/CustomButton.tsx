import { Fragment } from 'react';
import clsx from 'clsx';

interface BasicOutlineButtonProps {
  type:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  text: string;
  click: () => void;
}

export const BasicOutlineButton = ({
  type = 'primary',
  text,
  click,
}: BasicOutlineButtonProps) => {
  return (
    <Fragment>
      <button
        type="button"
        className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
        data-te-ripple-init>
        Primary
      </button>
    </Fragment>
  );
};
