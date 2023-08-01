import { Fragment, ReactNode } from 'react';

interface TypographyProps {
  text: string;
  Tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
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
}: TypographyProps) => {
  return (
    <Tag className={`text-[#0E0F17] font-extrabold ${className}`}>
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
      className={`text-[#C4C4C6] text-base font-extrabold hover:cursor-pointer hover:no-underline hover:text-[#C4C4C6] ${className}`}>
      {iconBefore} {text} {iconAfter}
    </a>
  );
};
