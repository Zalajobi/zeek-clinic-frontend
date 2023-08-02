import { ReactNode } from 'react';
import clsx from 'clsx';

interface TypographyProps {
  text: string;
  Tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

interface TypographyWithLinkProps {
  text: string;
  to: string;
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

export const Typography = ({
  text,
  className = '',
  iconBefore,
  iconAfter,
  Tag = 'p',
  size = 'md',
}: TypographyProps) => {
  const classes = clsx(`text-[#0E0F17] font-bold ${className}`, {
    'text-[34px] leading-[44px]': Tag === 'h1',
    'text-[26px] leading-[35px]': Tag === 'h2',
    'text-[22px] leading-[30px]': Tag === 'h3',
    'text-[18px] leading-[26px]': Tag === 'h4',
    'text-[16px] leading-[24px]': Tag === 'h5',
    'text-[14px] leading-[21px]': Tag === 'h6',
    '!font-normal': Tag === 'p',
    '!text-[20px]': size === 'xl',
    '!text-[18px]': size === 'lg',
    '!text-[16px]': size === 'md',
    '!text-[14px]': size === 'sm',
    '!text-[12px]': size === 'xs',
  });
  return (
    <Tag className={classes}>
      {iconBefore} {text} {iconAfter}
    </Tag>
  );
};

export const TypographyWithLink = ({
  text,
  className = '',
  iconBefore,
  iconAfter,
  to,
}: TypographyWithLinkProps) => {
  return (
    <a
      href={to}
      className={`text-[#C4C4C6] text-[700] text-base not-italic hover:cursor-pointer hover:no-underline hover:text-[#C4C4C6] ${className}`}>
      {iconBefore} {text} {iconAfter}
    </a>
  );
};
