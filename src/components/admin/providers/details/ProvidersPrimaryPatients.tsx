import { CustomCard } from '@components/global/card/CustomCard';
import { Fragment, SetStateAction, useState } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import { CustomDropDownMenuSelect } from '@components/global/formInput/CustomInput';

interface ProvidersPrimaryPatientProps {
  className?: string;
}

const ProvidersPrimaryPatients = ({
  className = '',
}: ProvidersPrimaryPatientProps) => {
  const selectTimeframe = [
    'All',
    '1 Day(s)',
    '7 Day(s)',
    '2 Week(s)',
    '1 Month',
  ];
  const [selectedTimeframe, setSelectedTimeframe] = useState(
    selectTimeframe[2]
  );

  return (
    <Fragment>
      <CustomCard
        className={`w-full !bg-[#fff] flex flex-col min-h-[450px] ${className}`}>
        <div className={`flex items-center justify-center`}>
          <Typography
            text={`Primary Patients`}
            Tag={`p`}
            weight={700}
            size={`xl`}
            className={`mr-auto`}
          />

          <CustomDropDownMenuSelect
            items={selectTimeframe}
            value={selectedTimeframe}
            onSelect={(value: SetStateAction<string | number>) =>
              setSelectedTimeframe(value as string)
            }
          />
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default ProvidersPrimaryPatients;
