import { Fragment } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import AdminBaseTemplate from '../../components/layout/admin/AdminBaseTemplate';
import { useAdminProviderDetails } from '../../hooks/admin/useAdminProviderDetails';
import { Typography } from '../../components/global/dialog/Typography';
import ProviderDetailsCard from '../../components/admin/providers/ProviderDetailsCard';
import { ProviderAndRelationAPIResponse } from '../../types/admin';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../../components/global/CustomButton';
import { CgExport } from 'react-icons/cg';
import AdminEditProviderModal from '../../components/admin/providers/AdminEditProviderModal';

const AdminProviderDetails = () => {
  const { providerData, primaryPatientCount } = useAdminProviderDetails();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <Typography
            text={`Welcome Back, ${adminData?.personalInfo?.first_name ?? ''}`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <div className={`w-full flex flex-col my-10`}>
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

            <ProviderDetailsCard
              data={providerData as ProviderAndRelationAPIResponse}
              patientCount={primaryPatientCount}
            />
          </div>
        </div>

        <AdminEditProviderModal
          name={providerData?.personalInfo?.first_name ?? ''}
        />
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderDetails;
