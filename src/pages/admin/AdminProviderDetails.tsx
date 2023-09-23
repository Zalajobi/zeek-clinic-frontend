import { Fragment } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import AdminBaseTemplate from '../../layout/admin/AdminBaseTemplate';
import { useAdminProviderDetails } from '../../hooks/admin/useAdminProviderDetails';
import { Typography } from '../../components/global/dialog/Typography';
import ProviderDetailsCard from '../../components/admin/providers/ProviderDetailsCard';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../../components/global/CustomButton';
import { CgExport } from 'react-icons/cg';
import AdminEditProviderModal from '../../components/admin/providers/AdminEditProviderModal';
import toast from 'react-hot-toast';
import { LoadingSpinner } from '../../components/global/Toast';
import ProviderSummaryCard from '../../components/admin/providers/ProviderSummaryCard';

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

    // Function
    onUpdateProviderModalSection,
  } = useAdminProviderDetails();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

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
              <ModalButtonOutlineLunch
                text={`Edit`}
                type={`primary`}
                className={`mr-4 min-w-[130px]`}
                targetModalId={`editProvider`}
                iconBefore={
                  <FaUserEdit
                    size={20}
                    className={`mr-3`}
                  />
                }
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
            <div
              className={`w-full grid gap-6 grid-cols-1 lg:grid-cols-[70%_30%]`}>
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

              <ProviderSummaryCard
                patients={321}
                visits={261}
                appointments={537}
                orders={632}
              />
            </div>
          </div>
        </div>

        <AdminEditProviderModal
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
