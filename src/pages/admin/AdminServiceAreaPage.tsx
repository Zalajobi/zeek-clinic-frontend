import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminDepartmentUnitAndServiceAreaPage } from '@hooks/admin/common/useAdminDepartmentUnitAndServiceAreaPage';
import { LoadingSpinner } from '@components/global/Toast';
import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaPlus } from 'react-icons/fa';
import { CgExport } from 'react-icons/cg';
import AdminSiteInfo from '@components/admin/AdminSiteInfo';
import AdminRoutes from '@components/admin/AdminRoutes';
import AdminDepartmentUnitAndAreaTableEditAndCreate from '@components/common/AdminDepartmentUnitAndAreaTableEditAndCreate';

const AdminServiceAreaPage = () => {
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);
  const {
    // Values
    siteData,
    siteDataLoading,
    siteDataError,
    showNewItemModal,
    siteId,

    // Functions
    setShowNewItemModal,
  } = useAdminDepartmentUnitAndServiceAreaPage();
  return (
    <AdminBaseTemplate>
      <LoadingSpinner
        message={siteData?.message as string}
        error={!siteData?.success || siteDataError}
        success={siteData?.success && !siteDataLoading}
        loading={siteDataLoading}
      />

      <div className={`flex flex-col w-full`}>
        <div className={`grid grid-cols-[80%_20%] gap-4`}>
          <Typography
            text={`Welcome Back, ${adminData?.personalInfo?.first_name ?? ''}`}
            Tag={`h1`}
            size={`2xl`}
            className={`text-left`}
          />

          <div className={`w-full flex justify-end mb-6`}>
            <OutlinedButton
              type={`primary`}
              text={`Create New`}
              className={`ml-4 min-w-[130px]`}
              click={() => setShowNewItemModal(!showNewItemModal)}
              iconBefore={
                <FaPlus
                  size={20}
                  className={`mr-2`}
                />
              }
            />

            <OutlinedButton
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

        <AdminDepartmentUnitAndAreaTableEditAndCreate
          type={`area`}
          siteId={siteId as string}
          openNewItemModal={showNewItemModal}
          handleNewItemModal={() => setShowNewItemModal(!showNewItemModal)}
        />
      </div>
    </AdminBaseTemplate>
  );
};

export default AdminServiceAreaPage;
