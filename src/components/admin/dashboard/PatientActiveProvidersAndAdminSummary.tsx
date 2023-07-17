import { Fragment } from 'react';
import { FaHospitalUser, FaUserMd, FaUserNurse } from 'react-icons/fa';
import SummaryCard from './SummaryCard';
import { RiAdminFill } from 'react-icons/ri';
import CustomCard from '../../global/card/CustomCard';
import Typography from '../../global/Typography';
import { PieChart3D } from '../../global/Charts';
import HospitalReport from './HospitalReport';
import TypographyLink from '../../global/TypographyLink';
import BedOccupancy from './BedOccupancy';

const PatientActiveProvidersAndAdminSummary = () => {
  const data = [
    ['Activity', 'Count'],
    ['Inpatients', 11],
    ['Outpatients', 9],
    ['Prescription', 7],
    ['Emergency', 12],
    ['Radiology', 8],
    ['Laboratory', 14],
    ['Appointments', 18],
  ];

  const hospitalReportData = [
    {
      title: 'Room 501 AC is not working',
      hospital: 'Korede Hospital',
      reportedBy: 'Zhikrullah Igbalajobi',
      read: true,
      createdAt: '2023-07-05 09:32:17',
    },

    {
      title: '101 Washroom needs to be cleaned',
      hospital: 'Korede Hospital',
      reportedBy: 'Martha Curtis',
      read: false,
      createdAt: '2023-07-07 15:45:12',
    },

    {
      title: 'Dr Olawale Left the clinic',
      hospital: 'Korede Hospital',
      reportedBy: 'Philip Tucker',
      read: false,
      createdAt: '2023-07-07 15:45:12',
    },

    {
      title:
        'The Male Ward 1 will be closed during the holiday for routine maintaiance',
      hospital: 'Korede Hospital',
      reportedBy: 'John Anderson',
      read: false,
      createdAt: '2023-07-04 21:18:36',
    },

    {
      title:
        'The automatic doors at the hospital entrance are not functioning correctly.',
      hospital: 'Korede Hospital',
      reportedBy: 'Michelle Lewis',
      read: false,
      createdAt: '2023-07-08 08:55:29',
    },

    {
      title:
        'The ceiling lights in the operating room are flickering intermittently.',
      hospital: 'Korede Hospital',
      reportedBy: 'John Anderson',
      read: false,
      createdAt: '2023-07-03 13:27:40',
    },

    {
      title:
        'The computer system in the billing department is experiencing frequent crashes.',
      hospital: 'Korede Hospital',
      reportedBy: 'David Moore',
      read: false,
      createdAt: '2023-07-06 17:09:21',
    },

    {
      title:
        "The ceiling lights in the operating room are flickering intermittently. It's affecting visibility during procedures.",
      hospital: 'Korede Hospital',
      reportedBy: 'Mark Roberts',
      read: true,
      createdAt: '2023-07-10 10:41:55',
    },

    {
      title:
        'The deadline for submitting vacation requests for the upcoming holiday season is approaching.',
      hospital: 'Korede Hospital',
      reportedBy: 'Lisa Johnson',
      read: true,
      createdAt: '2023-07-02 19:14:03',
    },

    {
      title:
        'The plumbing in the staff breakroom has a leak that is causing water damage',
      hospital: 'Korede Hospital',
      reportedBy: 'Emma Collins',
      read: true,
      createdAt: '2023-07-09 06:28:49',
    },

    {
      title:
        'Attention all staff, please refrain from using the main elevator until further notice.',
      hospital: 'Korede Hospital',
      reportedBy: 'John Anderson',
      read: true,
      createdAt: '2023-07-01 11:57:14',
    },

    {
      title:
        ' Urgent! The air conditioning system in the Pediatric Wing is malfunctioning.',
      hospital: 'Korede Hospital',
      reportedBy: 'Sarah Thompson',
      read: false,
      createdAt: '2023-07-05 14:36:27',
    },

    {
      title: 'Hanna Just Arrived From Holiday',
      hospital: 'Korede Hospital',
      reportedBy: 'Abdulyakeen Maryam',
      read: false,
      createdAt: '2023-07-07 18:03:52',
    },
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
        {/*Hospital Activity*/}
        <CustomCard
          className={`flex flex-col items-center justify-center max-h-[400px]`}>
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
            className={`mt-[30px]`}
          />
        </CustomCard>

        {/*Hospital Report*/}
        <CustomCard
          className={`flex flex-col items-center justify-center max-h-[400px]`}>
          <div className={`w-full flex justify-center items-center`}>
            <Typography
              text={`Hospital Report`}
              Tag={`h4`}
              className={`text-[20px] w-full text-start mr-auto`}
            />

            <TypographyLink
              text={`View All`}
              to={`#`}
              className={`text-[13px] ml-auto font-bold text-xs min-w-[50px] text-center`}
            />
          </div>

          <HospitalReport data={hospitalReportData} />
        </CustomCard>

        {/*Current Occupancy Rate*/}
        <CustomCard
          className={`flex flex-col items-center justify-center max-h-[400px]`}>
          <Typography
            text={`Bed Occupancy`}
            Tag={`h4`}
            className={`text-[20px] w-full text-start mr-auto`}
          />

          <BedOccupancy />
        </CustomCard>
      </div>
    </Fragment>
  );
};

export default PatientActiveProvidersAndAdminSummary;
