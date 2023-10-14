import { Fragment, useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { CgExport } from 'react-icons/cg';
import toast from 'react-hot-toast';
import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminProviderDetails } from '@hooks/admin/useAdminProviderDetails';
import { Typography } from '@components/global/dialog/Typography';
import ProviderDetailsCard from '@components/admin/providers/details/ProviderDetailsCard';
import { BasicOutlineButton } from '@components/global/CustomButton';
import AdminEditProviderModal from '@components/admin/providers/details/AdminEditProviderModal';
import { LoadingSpinner } from '@components/global/Toast';
import UpcomingAppontments from '@components/admin/providers/details/UpcomingAppontments';
import ProviderRecentOrders from '@components/admin/providers/details/ProviderRecentOrders';
import ProviderPersonalHealthRecords from '@components/admin/providers/details/ProviderPersonalHealthRecords';
import ProvidersPrimaryPatients from '@components/admin/providers/details/ProvidersPrimaryPatients';
import {
  UserServiceDepartmentResponseData,
  UserServicePatientDetailsResponse,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';

const AdminProviderDetails = () => {
  const {
    // Value
    editProviderModalSection,
    providerData,
    providerDataLoading,
    providerDataError,
    unitDeptData,
    unitDeptIsLoading,
    unitDeptIsError,
    primaryPatientsData,
    primaryPatientsDataLoading,

    // Function
    onUpdateProviderModalSection,
  } = useAdminProviderDetails();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(!open);

  return (
    <Fragment>
      {providerDataLoading ||
        (unitDeptIsLoading && <LoadingSpinner message={`Loading Data...`} />)}

      {providerDataError ||
        (unitDeptIsError && toast.error(`Error Retrieving Data...`))}

      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <div className={`grid grid-cols-[80%_20%] gap-4`}>
            <Typography
              text={`Welcome Back, ${
                adminData?.personalInfo?.first_name ?? ''
              }`}
              Tag={`h1`}
              size={`2xl`}
              className={`text-left`}
            />

            <div className={`w-full flex justify-end mb-6`}>
              <BasicOutlineButton
                text={`Edit`}
                type={`primary`}
                className={`mr-4 min-w-[130px]`}
                iconBefore={
                  <FaUserEdit
                    size={20}
                    className={`mr-3`}
                  />
                }
                click={handleOpenModal}
              />

              <BasicOutlineButton
                type={`primary`}
                text={`Export`}
                className={`ml-4 min-w-[130px]`}
                iconBefore={
                  <CgExport
                    size={20}
                    className={`mr-2`}
                  />
                }
              />
            </div>
          </div>

          <div className={`w-full flex flex-col my-10`}>
            <div className={`w-full grid gap-6 grid-cols-1 lg:grid-cols-4`}>
              <ProviderDetailsCard
                isLoading={providerDataLoading}
                title={providerData?.data?.provider?.personalInfo.title ?? ''}
                firstName={
                  providerData?.data?.provider?.personalInfo.first_name ?? ''
                }
                middleName={
                  providerData?.data?.provider?.personalInfo?.middle_name ?? ''
                }
                lastName={
                  providerData?.data?.provider?.personalInfo.last_name ?? ''
                }
                email={providerData?.data?.provider?.email ?? ''}
                phone={providerData?.data?.provider?.personalInfo.phone ?? ''}
                dob={providerData?.data?.provider?.personalInfo.dob ?? ''}
                role={providerData?.data?.provider?.primary_role.name ?? ''}
                unit={providerData?.data?.provider?.unit.name ?? ''}
                department={providerData?.data?.provider?.department.name ?? ''}
                serviceArea={
                  providerData?.data?.provider?.servicearea.name ?? ''
                }
                createdAt={providerData?.data?.provider?.created_at ?? ''}
                patientCount={providerData?.data?.patientCount?.toString()}
                country={
                  providerData?.data?.provider?.personalInfo.country ?? ''
                }
                state={providerData?.data?.provider?.personalInfo.state ?? ''}
                city={providerData?.data?.provider?.personalInfo.city ?? ''}
                address={
                  providerData?.data?.provider?.personalInfo.address ?? ''
                }
              />

              <img
                className="w-full h-full min-h-96 object-cover object-center rounded-lg shadow-xl shadow-blue-gray-900/50"
                src={
                  providerData?.data?.provider?.personalInfo?.profile_pic ??
                  'https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
                }
                alt={
                  providerData?.data?.provider?.personalInfo.first_name ?? ''
                }
                loading={`eager`}
              />
            </div>

            <div className={`w-full grid gap-6 grid-cols-6 my-6`}>
              <ProviderPersonalHealthRecords />

              <ProvidersPrimaryPatients
                className={`col-span-6`}
                loading={primaryPatientsDataLoading}
                department={
                  unitDeptData?.data
                    ?.department as UserServiceDepartmentResponseData[]
                }
                serviceArea={
                  unitDeptData?.data
                    ?.serviceArea as UserServiceServiceAreaResponseData[]
                }
                unit={unitDeptData?.data?.unit as UserServiceUnitResponseData[]}
                data={
                  primaryPatientsData?.data as UserServicePatientDetailsResponse[]
                }
                siteId={adminData?.siteId ?? ''}
              />

              {/*<ProviderSummaryCard*/}
              {/*  patients={321}*/}
              {/*  visits={261}*/}
              {/*  appointments={537}*/}
              {/*  orders={632}*/}
              {/*/>*/}

              <UpcomingAppontments />

              <ProviderRecentOrders />
            </div>
          </div>
        </div>

        <AdminEditProviderModal
          open={open}
          handler={handleOpenModal}
          name={providerData?.data?.provider?.personalInfo?.first_name ?? ''}
          currentModal={editProviderModalSection}
          updateCurrentModal={onUpdateProviderModalSection}
          department={unitDeptData?.data?.department}
          role={unitDeptData?.data?.role}
          serviceArea={unitDeptData?.data?.serviceArea}
          unit={unitDeptData?.data?.unit}
          fetchData={unitDeptIsLoading}
          siteId={providerData?.data?.provider?.siteId}
        />
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderDetails;
