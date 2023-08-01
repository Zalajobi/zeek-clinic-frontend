import { Fragment, ReactNode } from 'react';

interface CustomCardProps {
  children: ReactNode;
  className?: string;
}

export const CustomCard = ({ children, className = '' }: CustomCardProps) => {
  return (
    <Fragment>
      <div
        className={`bg-white border border-gray-200 rounded-2xl shadow p-4 overflow-hidden ${className}`}>
        {children}
      </div>
    </Fragment>
  );
};

export const CustomTransparentCard = ({
  children,
  className = '',
}: CustomCardProps) => {
  return (
    <Fragment>
      <div className={`glassmorphism ${className}`}>{children}</div>
    </Fragment>
  );
};
