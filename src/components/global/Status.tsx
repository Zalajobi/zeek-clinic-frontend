import { Fragment } from 'react';
import { Chip } from '@material-tailwind/react';

interface StatusProps {
  // status?: 'PENDING' | 'ACTIVE' | 'ARCHIVED' | 'DEACTIVATED'
  status?: string;
  className?: string;
}

const Status = ({ status, className }: StatusProps) => {
  const colorPick = () => {
    if (status === 'PENDING') return 'teal';

    if (status === 'ACTIVE') return 'green';

    if (status === 'ARCHIVED') return 'cyan';

    if (status === 'DECEASED') return 'red';

    if (status === 'DISCHARGED') return 'orange';

    if (status === 'INPATIENT') return 'purple';

    if (status === 'OUTPATIENT') return 'blue';

    return 'red';
  };
  return (
    <Fragment>
      <div className="w-max">
        <Chip
          size="sm"
          variant="ghost"
          value={status}
          color={colorPick()}
        />
      </div>
    </Fragment>
  );
};

export default Status;
