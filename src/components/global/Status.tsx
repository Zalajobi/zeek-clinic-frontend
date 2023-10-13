import { Fragment } from 'react';
import { Chip } from '@material-tailwind/react';

interface StatusProps {
  // status?: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED'
  status?: string;
  className?: string;
}

const Status = ({ status, className }: StatusProps) => {
  return (
    <Fragment>
      <div className="w-max">
        <Chip
          size="sm"
          variant="ghost"
          value={status}
          color={
            status === 'PENDING'
              ? 'teal'
              : status === 'ACTIVE'
              ? 'green'
              : status === 'ARCHIVED'
              ? 'cyan'
              : 'red'
          }
        />
      </div>
    </Fragment>
  );
};

export default Status;
