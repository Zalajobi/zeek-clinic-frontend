import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import { useAdminProviderPage } from '../../hooks/admin/useAdminProviderPage';

const AdminProviderPage = () => {
  const { navigate } = useAdminProviderPage();

  // console.log(navigate);

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col`}>
          <h1>Providers</h1>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderPage;
