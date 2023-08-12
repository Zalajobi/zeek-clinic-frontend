import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '../../hooks/admin/useAdminProviderPage';
import { Typography } from '../../components/global/dialog/Typography';
import ProviderPageRoutes from '../../components/admin/providers/ProviderPageRoutes';

const AdminProvider = () => {
  const { siteData, providerData } = useAdminProviderPage();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  // console.log(navigate);

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <Typography
            text={`Welcome To ${siteData?.name ?? ''}`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <ProviderPageRoutes
            siteId={siteData?.id ?? ''}
            id={adminData?.id}
          />
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProvider;
