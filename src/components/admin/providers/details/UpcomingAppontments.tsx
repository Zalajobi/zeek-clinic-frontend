import { CustomCard } from '@components/global/card/CustomCard';
import { Fragment, SetStateAction, useState } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import TableHeaderDropdown from '@components/global/table/TableHeaderDropdown';
import { CustomDropDownMenuSelect } from '@components/global/formInput/CustomInput';

const UpcomingAppointments = () => {
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
  const [timeframe, setTimeframe] = useState('7 Days');

  return (
    <Fragment>
      <CustomCard className={`w-full !bg-[#fff] flex flex-col min-h-[300px]`}>
        <div className={`flex items-center justify-center`}>
          <Typography
            text={`Upcoming Appointments`}
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
          {/*<TableHeaderDropdown*/}
          {/*    value={timeframe}*/}
          {/*    items={selectTimeframe}*/}
          {/*    change={value => setTimeframe(value)}*/}
          {/*/>*/}
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default UpcomingAppointments;
