import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import ActivitySummary from '../../components/admin/dashboard/ActivitySummary';
import ActivityReport from '../../components/admin/dashboard/ActivityReport';

const AdminDashboard = () => {
  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`w-full flex items-center justify-center`}>
          <div className={`max-w-screen-2xl w-full p-10 flex flex-col`}>
            <ActivitySummary />

            <ActivityReport />
          </div>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminDashboard;
