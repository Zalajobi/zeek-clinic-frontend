import { Fragment } from 'react';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import ActivitySummary from '../../components/admin/dashboard/ActivitySummary';
import ActivityReport from '../../components/admin/dashboard/ActivityReport';
import AppointmentAndEvents from '../../components/admin/dashboard/AppointmentAndEvents';
import DoctorsList from '../../components/admin/dashboard/DoctorsList';

const AdminDashboard = () => {
  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col`}>
          <ActivitySummary />

          <ActivityReport />

          <div className={`grid grid-cols-1 gap-4 my-4 lg:grid-cols-4`}>
            <AppointmentAndEvents />

            <DoctorsList />
          </div>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AdminDashboard;
