import AdminBaseTemplate from '@layout/admin/AdminBaseTemplate';
import { useAdminDepartmentsPage } from '@hooks/admin/departments/useAdminDepartmentsPage';
import { Typography } from '@components/global/dialog/Typography';
import AdminSiteInfo from '@components/admin/AdminSiteInfo';
import AdminRoutes from '@components/admin/AdminRoutes';
import { BasicOutlineButton } from '@components/global/CustomButton';
import { CgExport } from 'react-icons/cg';
import {
  DepartmentsPatientAndDoctorCountDataColumn,
  DepartmentsPatientAndDoctorCountTableRowData,
} from '@components/tables/row-col-mapping/DepartmentsTable';
import { useMemo } from 'react';
import {
  setNoOfPages,
  setResultFrom,
  setResultTo,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationTable } from '@components/global/table/ApplicationTable';
import { WarningModal } from '@components/modals/GlobalModal';

const AdminDepartmentsPage = () => {
  const dispatch = useDispatch();
  const adminData = JSON.parse(localStorage.getItem('adminData') as string);
  const { resultFrom, noOfPages, totalDataCount, resultTo } = useSelector(
    (state: any) => state.adminProviderTable
  );
  const {
    // Values
    siteData,
    siteDataLoading,
    departmentData,
    departmentDataError,
    departmentDataLoading,
    currentPage,
    perPage,
    departmentFrom,
    departmentTo,
    searchDepartment,
    actions,
    navigate,
    showOnDeleteModal,

    // Functions
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onUpdateSearchDepartment,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    onDeleteDepartment,
    setShowOnDeleteModal,
    proceedDeleteDepartment,
  } = useAdminDepartmentsPage();

  if (departmentData && !departmentDataLoading && !departmentDataError) {
    const count = departmentData?.data?.count;

    dispatch(setTotalDataCount(count));
    dispatch(
      setNoOfPages(Math.ceil(count / (perPage === 'All' ? count : perPage)))
    );

    if (actions === 'page-load') {
      dispatch(setResultFrom(1));
      dispatch(
        setResultTo(
          currentPage + 1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (
      actions === 'selectFrom' ||
      actions === 'selectTo' ||
      actions === 'search' ||
      actions === 'tab'
    ) {
      dispatch(
        setResultTo(
          1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (actions === 'nextPage' || actions === 'previousPage') {
      dispatch(
        setResultTo(
          currentPage + 1 === noOfPages
            ? count
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }

    if (actions === 'pageNumber') {
      dispatch(
        setResultTo(
          currentPage === noOfPages
            ? totalDataCount
            : currentPage * (perPage !== 'All' ? perPage : 0) +
                (perPage !== 'All' ? perPage : 0)
        )
      );
    }
  }

  const columns = useMemo(
    () => DepartmentsPatientAndDoctorCountDataColumn(),
    []
  );

  const data = useMemo(
    () =>
      DepartmentsPatientAndDoctorCountTableRowData(
        departmentData?.data?.departments,
        departmentDataLoading,
        navigate,
        onDeleteDepartment
      ) ?? [],
    [
      departmentData?.data?.departments,
      departmentDataLoading,
      navigate,
      onDeleteDepartment,
    ]
  );

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

        <ApplicationTable
          tableColumns={columns}
          tableData={data}
          query={searchDepartment}
          onUpdateQuery={(e) => onUpdateSearchDepartment(e.target.value)}
          perPage={perPage}
          onUpdatePerPageItem={onUpdatePerPageItem}
          filterFromDate={departmentFrom as Date}
          onUpdateFilterFromDate={onUpdateSelectFrom}
          filterToDate={departmentTo as Date}
          onUpdateFilterToDate={onUpdateSelectTo}
          noOfPages={noOfPages}
          totalCount={totalDataCount}
          resultFrom={resultFrom}
          resultTo={resultTo}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          currentPage={currentPage}
          onEnterPageNumber={onEnterPageNumber}
          containerClassName={`mt-8`}
        />
      </div>

      <WarningModal
        open={showOnDeleteModal}
        handler={() => setShowOnDeleteModal(!showOnDeleteModal)}
        proceed={proceedDeleteDepartment}
      />
    </AdminBaseTemplate>
  );
};

export default AdminDepartmentsPage;
