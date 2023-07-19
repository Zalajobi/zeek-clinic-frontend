import { Fragment, useMemo } from 'react';
import CustomCard from '../../global/card/CustomCard';
import Typography from '../../global/Typography';
import TypographyLink from '../../global/TypographyLink';
import Table from '../../global/table/Table';
import { AppointmentAndEventsTable } from '../../tables/AppointmentAndEventsTable';

const AppointmentAndEvents = () => {
  const columns = useMemo(() => AppointmentAndEventsTable(), []);

  const data = [] as any;

  return (
    <Fragment>
      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4`}>
        <CustomCard
          className={`w-full flex flex-col items-center justify-center max-h-[400px] lg:col-span-3`}>
          <div className={`w-full flex justify-center items-center`}>
            <Typography
              text={`Events & Appointments`}
              Tag={`h4`}
              className={`text-[20px] w-full text-start mr-auto`}
            />

            <TypographyLink
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
        </CustomCard>

        <h1>HELLO WORLD</h1>
      </div>
    </Fragment>
  );
};

export default AppointmentAndEvents;
