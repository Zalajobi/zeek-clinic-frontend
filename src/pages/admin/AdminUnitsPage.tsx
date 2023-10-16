import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminDepartmentsPage } from '@hooks/admin/units/useUnitsPage';
import { Typography } from '@components/global/dialog/Typography';
import { BasicOutlineButton } from '@components/global/CustomButton';
import { FaPlus } from 'react-icons/fa';
import { CgExport } from 'react-icons/cg';
import AdminSiteInfo from '@components/admin/AdminSiteInfo';
import { AddNewDeptServiceAreaModal } from '@components/modals/quickAction/AddNewDeptServiceAreaModal';
import AdminRoutes from '@components/admin/AdminRoutes';
import { LoadingSpinner } from '@components/global/Toast';
import toast from 'react-hot-toast';

const AdminUnitsPage = () => {
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);
  const {
    // Values
    siteData,
    siteDataLoading,
    // siteDataError,
    showCreateUnitModal,

    // Functions
    setShowCreateUnitModal,
    createNewUnit,
    onUpdateNewUnitDescription,
    onUpdateNewUnitName,
  } = useAdminDepartmentsPage();

  console.log(siteData);

  return (
    <AdminBaseTemplate>
      <LoadingSpinner
        message={siteData?.message as string}
        error={!siteData?.success}
        success={siteData?.success}
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
            <BasicOutlineButton
              type={`primary`}
              text={`Create New`}
              className={`ml-4 min-w-[130px]`}
              click={() => setShowCreateUnitModal(!showCreateUnitModal)}
              iconBefore={
                <FaPlus
                  size={20}
                  className={`mr-2`}
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

      <AddNewDeptServiceAreaModal
        updateDescription={onUpdateNewUnitDescription}
        updateName={onUpdateNewUnitName}
        handler={() => setShowCreateUnitModal(!showCreateUnitModal)}
        name={`Department`}
        open={showCreateUnitModal}
        submit={createNewUnit}
      />
    </AdminBaseTemplate>
  );
};

export default AdminUnitsPage;
