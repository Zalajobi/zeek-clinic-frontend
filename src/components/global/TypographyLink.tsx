import { ReactNode } from 'react';

interface TypographyLinkProps {
  text: string;
  to: string;
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

const TypographyLink = ({
  text,
  className = '',
  iconBefore,
  iconAfter,
  to,
}: TypographyLinkProps) => {
  return (
    <a
      href={to}
      className={`text-[#C4C4C6] text-base font-extrabold hover:cursor-pointer hover:no-underline hover:text-[#C4C4C6] ${className}`}>
      {iconBefore} {text} {iconAfter}
    </a>
  );
};

export default TypographyLink;
