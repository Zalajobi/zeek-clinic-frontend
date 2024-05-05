import { Fragment, ReactNode } from 'react';
import { Card } from '@material-tailwind/react';

interface CustomCardProps {
  children: ReactNode;
  className?: string;
}

export const CustomCard = ({ children, className = '' }: CustomCardProps) => {
  return (
    <Fragment>
      <Card
        className={`border-gray-200 rounded-2xl shadow p-4 overflow-hidden ${className}`}>
        {children}
      </Card>
    </Fragment>
  );
};

export const CustomTransparentCard = ({
  children,
  className = '',
}: CustomCardProps) => {
  return (
    <Fragment>
      <Card
        className={`glassmorphism shadow-blue-gray-900/50 border-gray-200 rounded-2xl shadow p-4 overflow-hidden ${className}`}>
        {children}
      </Card>
    </Fragment>
  );
};
