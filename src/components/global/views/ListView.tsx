import { Fragment, ReactNode } from 'react';

interface ListViewProps {
  children: ReactNode;
  Tag: 'button' | 'div' | 'a' | 'span';
  to?: string;
  className?: string;
}

const ListView = ({
  children,
  Tag = 'button',
  className = '',
  to,
}: ListViewProps) => {
  return (
    <Fragment>
      {to ? (
        <Tag
          href={to}
          className={`flex flex-col items-start justify-center hover:bg-gray-100 rounded-xl p-2 ${className}`}>
          {children}
        </Tag>
      ) : (
        <Tag
          className={`flex flex-col items-start justify-center hover:bg-gray-100 rounded-xl p-2 ${className}`}>
          {children}
        </Tag>
      )}
    </Fragment>
  );
};

export default ListView;
