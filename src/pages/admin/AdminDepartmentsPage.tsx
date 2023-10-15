import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminDepartmentsPage } from '@hooks/admin/departments/useAdminDepartmentsPage';
import { Typography } from '@components/global/dialog/Typography';
import AdminSiteInfo from '@components/admin/AdminSiteInfo';
import AdminRoutes from '@components/admin/AdminRoutes';
import { BasicOutlineButton } from '@components/global/CustomButton';
import { CgExport } from 'react-icons/cg';
import { TiPlus } from 'react-icons/ti';

const AdminDepartmentsPage = () => {
  const { siteData, siteDataLoading } = useAdminDepartmentsPage();

  const adminData = JSON.parse(localStorage.getItem('adminData') as string);

  return (
    <AdminBaseTemplate>
      <div className={`flex flex-col w-full`}>
        <div className={`grid grid-cols-[80%_20%] gap-4`}>
          <Typography
            text={`Welcome Back, ${adminData?.personalInfo?.first_name ?? ''}`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <div className={`w-full flex justify-end mb-6`}>
            <BasicOutlineButton
              text={`Create`}
              type={`primary`}
              className={`mr-4 min-w-[130px]`}
              iconBefore={
                <TiPlus
                  size={20}
                  className={`mr-3`}
                />
              }
            />

            <BasicOutlineButton
              type={`primary`}
              text={`Export`}
              className={`ml-4 min-w-[130px]`}
              iconBefore={
                <CgExport
                  size={20}
                  className={`mr-2`}
                />
              }
            />
          </div>
        </div>

        <AdminSiteInfo
          dataLoading={siteDataLoading}
          id={siteData?.data?.id ?? ''}
          address={siteData?.data?.address ?? ''}
          name={siteData?.data?.name ?? ''}
          email={siteData?.data?.email ?? ''}
          country={siteData?.data?.country ?? ''}
          phone={siteData?.data?.phone ?? ''}
          state={siteData?.data?.state ?? ''}
          city={siteData?.data?.city ?? ''}
          created_at={siteData?.data?.city ?? ''}
        />

        <AdminRoutes
          siteId={siteData?.data?.id ?? ''}
          id={adminData?.id}
        />
      </div>
    </AdminBaseTemplate>
  );
};

export default AdminDepartmentsPage;
