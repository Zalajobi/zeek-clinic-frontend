import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminDepartmentsPage } from '@hooks/admin/departments/useAdminDepartmentsPage';

const AdminDepartmentsPage = () => {
  const { siteData } = useAdminDepartmentsPage();

  console.log(siteData);

  return (
    <AdminBaseTemplate>
      <h1>List Departments</h1>
    </AdminBaseTemplate>
  );
};

export default AdminDepartmentsPage;
