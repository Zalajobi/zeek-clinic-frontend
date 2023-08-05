import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';

const AdminProviderPage = () => {
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
