import { Fragment, ReactNode } from 'react';

interface CustomInnerCardProps {
  children: ReactNode;
  className?: string;
}

const CustomInnerCard = ({
  children,
  className = '',
}: CustomInnerCardProps) => {
  return (
    <Fragment>
      <div
        className={`w-full rounded-lg p-2 flex flex-col align-items justify-center hover:shadow-md ${className}`}>
        {children}
      </div>
    </Fragment>
  );
};

export default CustomInnerCard;
