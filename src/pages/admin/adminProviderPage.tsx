import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '../../hooks/admin/useAdminProviderPage';
import { Typography } from '../../components/global/dialog/Typography';

const AdminProviderPage = () => {
  const { siteData } = useAdminProviderPage();

  // console.log(navigate);

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <Typography
            text={`Welcome To ${siteData?.name}`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderPage;
