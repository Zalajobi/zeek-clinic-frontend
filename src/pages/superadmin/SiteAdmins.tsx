import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import { useSiteAdmins } from '@hooks/pages/useSiteAdmins';
import AddAdminModal from '@components/modals/AddAdminModal';
import { BasicTable } from '@components/global/table/Table';
import { useDispatch } from 'react-redux';
import {
  formatResponseKeyForDropdown,
  getTotalRowsAndPerPage,
} from '@util/index';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import { useMemo } from 'react';
import {
  AdminActionItem,
  AdminDataColumns,
  AdminDataRows,
  ProfileActionItem,
  ProviderDataColumns,
  ProviderDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';
import { AdminPayload, ProviderPayload } from '@typeSpec/payloads';

const SiteAdmins = () => {
  const dispatch = useDispatch();
  const searchTableBy: string[] = [];
  let noOfPages = 0;

  const {
    // Values
    addAdminModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,
    tabData,

    // Functions
    handleAddAdminModal,
    onUpdatePerPageItem,
    onUpdateSearchAdmin,
    onUpdateActiveTab,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
  } = useSiteAdmins();

  if (!tableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      tableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => AdminDataColumns(), []);
  columnData?.map((column) => {
    if (
      column.key !== 'action' &&
      column.key !== 'gender' &&
      column.key !== 'createdAt' &&
      column.key !== 'status' &&
      column.key !== 'name'
    ) {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  const actionItems = useMemo(() => AdminActionItem(), []);
  const rowData = useMemo(
    () => AdminDataRows(tableData?.data?.admins as AdminPayload[]) ?? [],
    [tableData?.data?.admins]
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
            />

            <OutlinedButton
              iconBefore={
                <HiPlusSm
                  size={20}
                  className={`mr-2`}
                />
              }
              text={`Add Admin`}
              type={`primary`}
              className={`h-[38px] max-w-4xl`}
              click={handleAddAdminModal}
            />
          </div>
        </div>

        <SiteDetails />

        <SiteRoutes platform={'SUPERADMIN'} />

        <BasicTable
          tabItems={tabData}
          onSelectTab={onUpdateActiveTab}
          perPageValue={perPage}
          perPageChange={onUpdatePerPageItem}
          columns={columnData}
          data={rowData ?? []}
          url={'superadmin/site'}
          noOfPages={noOfPages ?? 0}
          total={tableData?.data?.totalRows ?? 0}
          from={resultFrom ?? 1}
          to={resultTo ?? 10}
          onNext={onClickNext}
          onPrevious={onClickPrevious}
          currentPage={currentPage ?? -1}
          searchKeys={searchTableBy}
          dataLoading={tableDataLoading}
          searchKey={searchKey}
          updateSearchKey={onUpdateSearchKey}
          onUpdateSearch={onUpdateSearchAdmin}
          createNew={handleAddAdminModal}
          actionItems={actionItems}
          sortBy={onHandleSortBy}
        />
      </div>

      <AddAdminModal
        handler={handleAddAdminModal}
        open={addAdminModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default SiteAdmins;
