import { Fragment } from 'react';
import { Chip } from '@material-tailwind/react';

interface StatusProps {
  status?: string;
  className?: string;
}

const Status = ({ status, className }: StatusProps) => {
  const colorPick = () => {
    if (status === 'PENDING') return 'teal';

    if (status === 'ACTIVE') return 'green';

    if (status === 'ARCHIVED') return 'cyan';

    if (status === 'DECEASED' || status === 'TERMINATED') return 'red';

    if (status === 'DISCHARGED' || status === 'SUSPENDED') return 'orange';

    if (status === 'INPATIENT' || status === 'ON_LEAVE') return 'purple';

    if (status === 'OUTPATIENT' || status === 'UNAVAILABLE') return 'blue';

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
          className={className}
        />
      </div>
    </Fragment>
  );
};

export default Status;
