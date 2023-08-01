import { Fragment } from 'react';
import Typography from '../../global/Typography';
import { PieChart3D } from '../../global/Charts';
import TypographyLink from '../../global/TypographyLink';
import HospitalReport from './HospitalReport';
import { CustomCard } from '../../global/card/CustomCard';

const ActivityReport = () => {
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

  const patientReportData = [
    ['Status', 'Count'],
    ['Active', 11],
    ['Pending', 9],
    ['Discharged', 7],
    ['Deceased', 12],
    ['Inpatient', 8],
    ['Outpatient', 14],
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
        {/*Hospital Activity*/}
        <CustomCard
          className={`max-w-md flex flex-col items-center justify-center max-h-[400px]`}>
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
          className={`w-full flex flex-col items-center justify-center max-h-[400px] lg:col-span-2`}>
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
          className={`max-w-md flex flex-col items-center justify-center max-h-[400px]`}>
          <Typography
            text={`Patient Report`}
            Tag={`h4`}
            className={`text-[20px] w-full text-start mr-auto`}
          />

          <PieChart3D
            data={patientReportData}
            title={`Hospital Activity`}
            height={`300px`}
            width={`100%`}
            className={`mt-[30px]`}
          />
        </CustomCard>
      </div>
    </Fragment>
  );
};

export default ActivityReport;
