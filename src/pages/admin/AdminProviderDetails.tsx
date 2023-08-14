import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/layout/admin/AdminBaseTemplate';
import { useAdminProviderDetails } from '../../hooks/admin/useAdminProviderDetails';
import { Typography } from '../../components/global/dialog/Typography';
import ProviderDetailsCard from '../../components/admin/providers/ProviderDetailsCard';
import { ProviderAndRelationAPIResponse } from '../../types/admin';

const AdminProviderDetails = () => {
  const { providerData } = useAdminProviderDetails();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  console.log(providerData);

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

          <ProviderDetailsCard
            data={providerData as ProviderAndRelationAPIResponse}
          />
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderDetails;
