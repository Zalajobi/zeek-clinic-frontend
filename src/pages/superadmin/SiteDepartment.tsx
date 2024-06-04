import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useDispatch } from 'react-redux';
import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import { useSiteDepartment } from '@hooks/pages/useSiteDepartment';
import {
  AddDepartmentModal,
  CreateBulkDepartmentModal,
} from '@components/modals/AddDepartmentModal';
import { TableWithoutTabAndLogo } from '@components/global/table/Table';
import { useMemo } from 'react';
import {
  DepartmentActionItem,
  DepartmentDataColumns,
  DepartmentDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';
import {
  formatResponseKeyForDropdown,
  getTotalRowsAndPerPage,
} from '@util/index';
import { DepartmentPayload } from '@typeSpec/payloads';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';

const SiteDepartment = () => {
  const dispatch = useDispatch();
  const searchTableBy: string[] = [];
  let noOfPages = 0;

  const {
    // Values
    addDepartmentModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,
    addBulkDepartmentModal,

    // Functions
    handleAddDepartmentModal,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdatePerPageItem,
    onUpdateSearchDepartment,
    handleBulkCreateDepartmentModal,
  } = useSiteDepartment();

  if (!tableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      tableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => DepartmentDataColumns(), []);
  columnData?.map((column) => {
    if (
      column.key !== 'action' &&
      column.key !== 'createdAt' &&
      column.key !== 'providerCount' &&
      column.key !== 'patientCount'
    ) {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  const actionItems = useMemo(() => DepartmentActionItem(), []);
  const rowData = useMemo(
    () =>
      DepartmentDataRows(tableData?.data?.depts as DepartmentPayload[]) ?? [],
    [tableData?.data?.depts]
  );

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <div className={`flex flex-col md:flex-row gap-4`}>
          <div className={`mr-auto`}>
            <Typography
              text={`Welcome`}
              size="4xl"
              weight={800}
              className="mb-4"
              Tag={'h1'}
            />
          </div>

          <div className={`ml-auto flex flex-row gap-4`}>
            <OutlinedButton
              text={`Bulk Create`}
              type={'primary'}
              className={`h-[38px] max-w-4xl`}
              iconBefore={
                <FaCloudUploadAlt
                  size={20}
                  className={`mr-2`}
                />
              }
              click={handleBulkCreateDepartmentModal}
            />

            <OutlinedButton
              iconBefore={
                <HiPlusSm
                  size={20}
                  className={`mr-2`}
                />
              }
              text={`Add Department`}
              type={`primary`}
              className={`h-[38px] max-w-4xl`}
              click={handleAddDepartmentModal}
            />
          </div>
        </div>

        <SiteDetails />

        <SiteRoutes platform={'SUPERADMIN'} />

        <TableWithoutTabAndLogo
          dataLoading={tableDataLoading}
          onUpdateSearch={onUpdateSearchDepartment}
          perPageChange={onUpdatePerPageItem}
          perPageValue={perPage}
          updateSearchKey={onUpdateSearchKey}
          searchKeys={searchTableBy}
          searchKey={searchKey}
          actionItems={actionItems}
          columns={columnData}
          data={rowData}
          createNew={handleAddDepartmentModal}
          currentPage={currentPage}
          from={resultFrom ?? 1}
          to={resultTo ?? 10}
          noOfPages={noOfPages}
          onNext={onClickNext}
          onPrevious={onClickPrevious}
          sortBy={onHandleSortBy}
          total={tableData?.data?.totalRows ?? 0}
          url={`superadmin/site/department/details`}
        />
      </div>

      <AddDepartmentModal
        open={addDepartmentModal}
        handler={handleAddDepartmentModal}
      />

      <CreateBulkDepartmentModal
        open={addBulkDepartmentModal}
        handler={handleBulkCreateDepartmentModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default SiteDepartment;
