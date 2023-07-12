import { Fragment, ReactNode } from 'react';

interface CustomCardProps {
  children: ReactNode;
  className?: string;
}

const CustomCard = ({ children, className }: CustomCardProps) => {
  return (
    <Fragment>
      <div
        className={`max-w-md bg-white border border-gray-200 rounded-2xl shadow p-4 ${className}`}>
        {children}
      </div>
    </Fragment>
  );
};

export default CustomCard;
