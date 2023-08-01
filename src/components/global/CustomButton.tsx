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
    | 'dark';
  text: string;
  click: () => void;
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

export const BasicOutlineButton = ({
  type = 'primary',
  text,
  click,
  className = '',
  iconBefore,
  iconAfter,
}: ButtonProps) => {
  const classes = clsx(
    `text-[14px] font-bold flex flex-row rounded-[8px] px-[18px] py-[5px] items-center justify-center border
    leading-[34px] transition duration-150 ease-in-out hover:ring-offset-4 hover:ring-0 ${className}`,
    {
      'text-[color:var(--blue-6)] border-[color:var(--blue-6)] hover:bg-[color:var(--blue-0)] ring-[color:var(--blue-0)]':
        type === 'primary',
      'text-[color:var(--red-6)] border-[color:var(--red-6)] hover:bg-[color:var(--red-0)] hover:ring-[color:var(--red-0)]':
        type === 'danger',
      'text-[color:var(--orange-6)] border-[color:var(--orange-6)] hover:bg-[color:var(--orange-0)] hover:ring-[color:var(--orange-0)]':
        type === 'warning',
      'text-[color:var(--cyan-6)] border-[color:var(--cyan-6)] hover:bg-[color:var(--cyan-0)] hover:ring-[color:var(--cyan-0)]':
        type === 'info',
      'text-[color:var(--indigo-6)] border-[color:var(--indigo-6)] hover:bg-[color:var(--indigo-0)] hover:ring-[color:var(--indigo-0)]':
        type === 'secondary',
      'text-[color:var(--green-6)] border-[color:var(--green-6)] hover:bg-[color:var(--green-0)] hover:ring-[color:var(--green-0)]':
        type === 'success',
      'text-[color:var(--dark-6)] border-[color:var(--dark-6)] hover:bg-[color:var(--dark-0)] hover:ring-[color:var(--dark-0)]':
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
    `text-[14px] font-bold flex flex-row rounded-[8px] px-[18px] py-[5px] items-center justify-center 
    leading-[34px] transition duration-150 ease-in-out hover:ring-offset-4 hover:ring-2 ${className}`,
    {
      'text-[color:var(--blue-6)] bg-[color:var(--blue-0)] hover:bg-[color:var(--blue-1)] ring-[color:var(--blue-1)]':
        type === 'primary',
      'text-[color:var(--red-6)] bg-[color:var(--red-0)] hover:bg-[color:var(--red-1)] hover:ring-[color:var(--red-1)]':
        type === 'danger',
      'text-[color:var(--orange-6)] bg-[color:var(--orange-0)] hover:bg-[color:var(--orange-1)] hover:ring-[color:var(--orange-1)]':
        type === 'warning',
      'text-[color:var(--cyan-6)] bg-[color:var(--cyan-0)] hover:bg-[color:var(--cyan-1)] hover:ring-[color:var(--cyan-1)]':
        type === 'info',
      'text-[color:var(--indigo-6)] bg-[color:var(--indigo-0)] hover:bg-[color:var(--indigo-1)] hover:ring-[color:var(--indigo-1)]':
        type === 'secondary',
      'text-[color:var(--green-6)] bg-[color:var(--green-0)] hover:bg-[color:var(--green-1)] hover:ring-[color:var(--green-1)]':
        type === 'success',
      'text-[color:var(--dark-6)] bg-[color:var(--dark-0)] hover:bg-[color:var(--dark-1)] hover:ring-[color:var(--dark-1)]':
        type === 'dark',
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

export const BasicFilledButton = ({
  type = 'primary',
  text,
  click,
  className = '',
  iconBefore,
  iconAfter,
}: ButtonProps) => {
  const classes = clsx(
    `text-[14px] font-bold flex flex-row rounded-[8px] px-[18px] py-[5px] items-center justify-center text-white 
    leading-[34px] transition duration-150 ease-in-out hover:ring-offset-4 hover:ring-2 ${className}`,
    {
      'bg-[color:var(--blue-6)] hover:bg-[color:var(--blue-7)] ring-[color:var(--blue-7)]':
        type === 'primary',
      'bg-[color:var(--red-6)] hover:bg-[color:var(--red-7)] hover:ring-[color:var(--red-7)]':
        type === 'danger',
      'bg-[color:var(--orange-6)] hover:bg-[color:var(--orange-7)] hover:ring-[color:var(--orange-7)]':
        type === 'warning',
      'bg-[color:var(--cyan-6)] hover:bg-[color:var(--cyan-7)] hover:ring-[color:var(--cyan-7)]':
        type === 'info',
      'bg-[color:var(--indigo-6)] hover:bg-[color:var(--indigo-7)] hover:ring-[color:var(--indigo-7)]':
        type === 'secondary',
      'bg-[color:var(--green-6)] hover:bg-[color:var(--green-7)] hover:ring-[color:var(--green-7)]':
        type === 'success',
      'bg-[color:var(--dark-6)] hover:bg-[color:var(--dark-7)] hover:ring-[color:var(--dark-7)]':
        type === 'dark',
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
