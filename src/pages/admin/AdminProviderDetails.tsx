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

const AdminProviderDetails = () => {
  const {
    // Value
    editProviderModalSection,
    responseData,
    isLoading,
    error,

    // Function
    onUndateProviderModalSection,
  } = useAdminProviderDetails();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  return (
    <Fragment>
      {isLoading &&
        // <Spinner/>
        toast.loading(`Loading Data...`)}

      {error && toast.error(`Error Retrieving Data...`)}

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
            <ProviderDetailsCard
              title={responseData?.data?.provider?.personalInfo.title ?? ''}
              firstName={
                responseData?.data?.provider?.personalInfo.first_name ?? ''
              }
              middleName={
                responseData?.data?.provider?.personalInfo?.middle_name ?? ''
              }
              lastName={
                responseData?.data?.provider?.personalInfo.last_name ?? ''
              }
              email={responseData?.data?.provider?.email ?? ''}
              phone={responseData?.data?.provider?.personalInfo.phone ?? ''}
              dob={responseData?.data?.provider?.personalInfo.dob ?? ''}
              role={responseData?.data?.provider?.primary_role.name ?? ''}
              unit={responseData?.data?.provider?.unit.name ?? ''}
              department={responseData?.data?.provider?.department.name ?? ''}
              serviceArea={responseData?.data?.provider?.servicearea.name ?? ''}
              createdAt={responseData?.data?.provider?.created_at ?? ''}
              patientCount={responseData?.data?.patientCount?.toString()}
              country={responseData?.data?.provider?.personalInfo.country ?? ''}
              state={responseData?.data?.provider?.personalInfo.state ?? ''}
              city={responseData?.data?.provider?.personalInfo.city ?? ''}
              address={responseData?.data?.provider?.personalInfo.address ?? ''}
            />
          </div>
        </div>

        <AdminEditProviderModal
          siteId={responseData?.data?.provider?.siteId ?? ''}
          name={responseData?.data?.provider?.personalInfo?.first_name ?? ''}
          currentModal={editProviderModalSection}
          updateCurrentModal={onUndateProviderModalSection}
        />
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderDetails;
