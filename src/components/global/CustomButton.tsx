import { Fragment, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
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
  className?: string;
  curvedEdges?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

export const BasicOutlineButton = ({
  type = 'primary',
  text,
  click,
  className = '',
  curvedEdges = false,
  iconBefore,
  iconAfter,
}: ButtonProps) => {
  const classes = clsx(
    `rounded text-sm font-bold leading-normal inline-block border-2 px-6 pb-[6px] pt-2 
  transition duration-150 ease-in-out hover:bg-opacity-10 ${className}`,
    {
      'rounded-full': curvedEdges,
      '!flex !items-center !justify-center': iconBefore || iconAfter,
      'border-primary text-primary hover:border-primary-600 hover:bg-neutral-500 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'primary',
      'border-primary-100 text-primary-700 hover:border-primary-accent-100 hover:bg-neutral-500 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'secondary',
      'border-success text-success hover:border-success-600 hover:bg-neutral-500 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'success',
      'border-danger text-danger hover:border-danger-600 hover:bg-neutral-500 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'danger',
      'border-warning text-warning hover:border-warning-600 hover:bg-neutral-500 hover:text-warning-600 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'warning',
      'border-2 border-info text-info hover:border-info-600 hover:bg-neutral-500 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'info',
      'border-neutral-50 text-neutral-50 hover:border-neutral-100 hover:bg-neutral-500 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10':
        type === 'light',
      'border-neutral-800 text-neutral-800 hover:border-neutral-800 hover:bg-neutral-500 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900':
        type === 'dark',
    }
  );
  return (
    <Fragment>
      <button
        onClick={click}
        type="button"
        className={classes}
        data-te-ripple-init>
        {iconBefore}

        {text}

        {iconAfter}
      </button>
    </Fragment>
  );
};

export const BasicLightButton = ({
  type = 'primary',
  text,
  click,
  className = '',
  iconBefore,
  iconAfter,
}: ButtonProps) => {
  const classes = clsx(
    `text-[14px] font-bold flex flex-row rounded-[8px] px-[18px] py-[5px] items-center justify-center transition duration-150 ease-in-out hover:ring-offset-4 hover:ring-2 ${className}`,
    {
      'text-customPrimaryColor bg-[#E7F5FF] hover:bg-[#D0EBFF] ring-[#D0EBFF]':
        type === 'primary',
      'text-customDangerColor bg-customBackgroundDangerColor hover:bg-[#FFE3E3] hover:ring-[#FFE3E3]':
        type === 'danger',
    }
  );

  return (
    <Fragment>
      <button
        onClick={click}
        type="button"
        className={classes}>
        {iconBefore}

        {text}

        {iconAfter}
      </button>
    </Fragment>
  );
};
