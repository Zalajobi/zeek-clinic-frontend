import { Fragment } from 'react';
import SummaryCard from './SummaryCard';
import { FaHospitalUser, FaUserMd, FaUserNurse } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import CustomCard from '../../global/card/CustomCard';
import Typography from '../../global/Typography';
import { PieChart3D } from '../../global/Charts';

const PatientActiveProvidersAndAdminSummary = () => {
  const data = [
    ['Activity', 'Count'],
    ['Inpatients', 11],
    ['Outpatients', 2],
    ['Prescription', 2],
    ['Emergency', 2],
    ['Radiology', 7],
    ['Laboratory', 7],
  ];

  return (
    <Fragment>
      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4`}>
        <SummaryCard
          icon={
            <FaUserMd
              size={20}
              color={`#3DC1C5`}
            />
          }
          boldHeader={'2937'}
          lightHeader={`Doctors`}
          descriptionContext={`31`}
          description={'Active doctor(s)'}
          contextColour={`#3DC1C5`}
          bgColour={`#DDF5F6`}
        />

        <SummaryCard
          icon={
            <FaUserNurse
              size={20}
              color={`#369DFF`}
            />
          }
          boldHeader={'3798'}
          lightHeader={`Nurses`}
          descriptionContext={`45`}
          description={'Active Nurse(s)'}
          contextColour={`#369DFF`}
          bgColour={`#DEF0FF`}
        />

        <SummaryCard
          icon={
            <FaHospitalUser
              size={20}
              color={`#F7777B`}
            />
          }
          boldHeader={'5453'}
          lightHeader={`Visits`}
          descriptionContext={`1291`}
          description={'Patients visits in the last 7 days'}
          contextColour={`#F7777B`}
          bgColour={`#FDE8E9`}
        />

        <SummaryCard
          icon={
            <RiAdminFill
              size={20}
              color={`#495058`}
            />
          }
          boldHeader={'5453'}
          lightHeader={`Admin`}
          descriptionContext={`1291`}
          description={'Active Admin(s)'}
          contextColour={`#495058`}
          bgColour={`#DEE2E6`}
        />
      </div>

      <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-3`}>
        <CustomCard className={`flex flex-col items-center justify-center`}>
          <Typography
            text={`Hospital Activity`}
            Tag={`h4`}
            className={`text-[20px] w-full text-start`}
          />

          <PieChart3D
            data={data}
            title={`Hospital Activity`}
            height={`300px`}
            width={`100%`}
          />
        </CustomCard>
      </div>
    </Fragment>
  );
};

export default PatientActiveProvidersAndAdminSummary;
