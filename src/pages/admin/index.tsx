import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import PatientActiveProvidersAndAdminSummary from '../../components/admin/dashboard/PatientActiveProvidersAndAdminSummary';

const AdminDashboard = () => {
  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`w-full flex items-center justify-center`}>
          <div className={`max-w-screen-2xl w-full p-10 flex flex-col`}>
            <PatientActiveProvidersAndAdminSummary />
          </div>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminDashboard;
