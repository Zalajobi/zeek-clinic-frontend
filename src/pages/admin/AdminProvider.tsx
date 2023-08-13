import { Fragment } from 'react';
import AdminBaseTemplate from '../../layout/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '../../hooks/admin/useAdminProviderPage';
import { Typography } from '../../components/global/dialog/Typography';
import AdminRoutes from '../../components/admin/AdminRoutes';
import AdminSiteInfo from '../../components/admin/AdminSiteInfo';
import { ProviderPageSiteResponseData } from '../../types/admin';

const AdminProvider = () => {
  const { siteData } = useAdminProviderPage();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <Typography
            text={`Welcome`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <AdminSiteInfo data={siteData as ProviderPageSiteResponseData} />

          <AdminRoutes
            siteId={siteData?.id ?? ''}
            id={adminData?.id}
          />
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProvider;
