import { Fragment, useMemo } from 'react';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import Table from '@components/global/table/Table';
import {
  AppointmentAndEventsTableColumn,
  AppointmentAndEventsTableRowData,
} from '@components/tables/AppointmentAndEventsTable';
import { AppointmentTableData } from '@typeSpec/admin';
import { CustomTransparentCard } from '@components/global/card/CustomCard';

const AppointmentAndEvents = () => {
  const testData: AppointmentTableData[] = [
    {
      id: '1',
      title: 'Mr.',
      first_name: 'Zhikrullah',
      last_name: 'Igbalajobi',
      date: '10, Jan 2023: 11:39am',
      age: 26,
      phone: '07053980998',
      for: 'Dermatologist',
    },

    {
      id: '2',
      title: 'Mr.',
      first_name: 'Cameron',
      last_name: 'Diaz',
      date: '20, May 2023, 6:30pm',
      age: 54,
      phone: '07053980998',
      for: 'Dr. Lee',
    },

    {
      id: '3',
      title: 'Mr.',
      first_name: 'Jorge',
      last_name: 'Foreman',
      date: '20, May 2023, 7:30pm',
      age: 76,
      phone: '07053980998',
      for: 'Dr. Gregory',
    },

    {
      id: '4',
      title: 'Mr.',
      first_name: 'Philip',
      last_name: 'Lahm',
      date: '20, May 2023, 8:30pm',
      age: 47,
      phone: '07053980998',
      for: 'Dr. Bernard',
    },

    {
      id: '1',
      title: 'Mr.',
      first_name: 'Nathan',
      last_name: 'Daniels',
      date: '20, May 2023, 9:00pm',
      age: 40,
      phone: '07053980998',
      for: 'Dr. Mitchell',
    },

    {
      id: '1',
      title: 'Mr.',
      first_name: 'Soham',
      last_name: 'Pratt',
      date: '20, May 2023, 6:30pm',
      age: 3,
      phone: '07053980998',
      for: 'Dr. Randall',
    },
  ];

  const columns = useMemo(() => AppointmentAndEventsTableColumn(), []);

  const data = useMemo(() => AppointmentAndEventsTableRowData(testData), []);

  return (
    <Fragment>
      <CustomTransparentCard
        className={`w-full flex flex-col items-center justify-center max-h-[400px] lg:col-span-3`}>
        <div className={`w-full flex justify-center items-center`}>
          <Typography
            text={`Events & Appointments`}
            Tag={`h4`}
            className={`text-[20px] w-full text-start mr-auto`}
          />

          <TypographyWithLink
            text={`View All`}
            to={`#`}
            className={`text-[13px] ml-auto font-bold text-xs min-w-[50px] text-center`}
          />
        </div>

        <Table
          containerClass={`w-full rounded-lg`}
          columns={columns}
          data={data}
        />
      </CustomTransparentCard>
    </Fragment>
  );
};

export default AppointmentAndEvents;
