import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/layout/admin/AdminBaseTemplate';
import { useAdminProviderDetails } from '../../hooks/admin/useAdminProviderDetails';

const AdminProviderDetails = () => {
  const { id } = useAdminProviderDetails();
  console.log(id);

  return (
    <Fragment>
      <AdminBaseTemplate>
        <h1>Providers Details Page</h1>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminProviderDetails;
