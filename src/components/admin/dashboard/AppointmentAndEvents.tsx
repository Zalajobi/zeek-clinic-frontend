import { Fragment, useMemo } from 'react';
import {
  Typography,
  TypographyWithLink,
} from '@components/global/dialog/Typography';
import Table from '@components/global/table/Table';
import {
  AppointmentAndEventsTableColumn,
  AppointmentAndEventsTableRowData,
} from '@components/tables/row-col-mapping/AppointmentAndEventsTable';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import { testAppointmentData } from '@util/constants';

const AppointmentAndEvents = () => {
  const columns = useMemo(() => AppointmentAndEventsTableColumn(), []);

  const data = useMemo(
    () => AppointmentAndEventsTableRowData(testAppointmentData),
    []
  );

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
