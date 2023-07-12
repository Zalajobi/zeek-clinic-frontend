import { Fragment, ReactNode } from 'react';

interface TypographyProps {
  text: string;
  Tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

const Typography = ({
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

export default Typography;
