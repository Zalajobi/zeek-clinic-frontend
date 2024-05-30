import { Fragment, useMemo } from 'react';
import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import SiteDetails from '@components/common/SiteDetails';
import { OutlinedButton } from '@components/global/CustomButton';
import { HiPlusSm } from 'react-icons/hi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import AddProviderModal from '@components/modals/AddProviderModal';
import { useSiteProviders } from '@hooks/pages/useSiteProviders';
import {
  formatResponseKeyForDropdown,
  getTotalRowsAndPerPage,
} from '@util/index';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../redux/reducers/tableReducer';
import { useDispatch } from 'react-redux';
import {
  ProfileActionItem,
  ProviderDataColumns,
  ProviderDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';
import { ProviderPayload } from '@typeSpec/payloads';
import { BasicTable } from '@components/global/table/Table';
import SiteRoutes from '@components/common/SiteRoutes';

const SiteProvidersPage = () => {
  const dispatch = useDispatch();
  const searchTableBy: string[] = [];
  let noOfPages = 0;

  const {
    // Values
    addProviderModal,
    tableData,
    tableDataLoading,
    perPage,
    tabData,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,

    // Functions
    handleAddProviderModal,
    onUpdatePerPageItem,
    onUpdateSearchProvider,
    onUpdateActiveTab,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
  } = useSiteProviders();

  if (!tableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      tableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => ProviderDataColumns(), []);
  const actionItems = useMemo(() => ProfileActionItem(), []);

  const rowData = useMemo(
    () =>
      ProviderDataRows(tableData?.data?.providers as ProviderPayload[]) ?? [],
    [tableData?.data?.providers]
  );

  columnData?.map((column) => {
    if (
      column.key !== 'action' &&
      column.key !== 'area' &&
      column.key !== 'unit' &&
      column.key !== 'dept' &&
      column.key !== 'role' &&
      column.key !== 'status' &&
      column.key !== 'name'
    ) {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  return (
    <Fragment>
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
                text={`Add Provider`}
                type={`primary`}
                className={`h-[38px] max-w-4xl`}
                click={handleAddProviderModal}
              />
            </div>
          </div>

          <SiteDetails />

          <SiteRoutes platform={'ADMIN'} />

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
            onUpdateSearch={onUpdateSearchProvider}
            createNew={handleAddProviderModal}
            actionItems={actionItems}
            sortBy={onHandleSortBy}
          />
        </div>
      </SuperadminBaseTemplate>

      <AddProviderModal
        open={addProviderModal}
        handler={handleAddProviderModal}
      />
    </Fragment>
  );
};

export default SiteProvidersPage;
