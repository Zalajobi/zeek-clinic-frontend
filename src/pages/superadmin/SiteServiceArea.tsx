import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useSiteServiceArea } from '@hooks/pages/useSiteServiceArea';
import { useDispatch } from 'react-redux';
import {
  formatResponseKeyForDropdown,
  getTotalRowsAndPerPage,
} from '@util/index';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import {
  CreateBulkServiceArea,
  CreateServiceAreaModal,
} from '@components/modals/CreateServiceAreaModal';
import { useMemo } from 'react';
import {
  ServiceAreaActionItem,
  ServiceAreaDataColumns,
  ServiceAreaDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';
import { ServiceAreaPayload } from '@typeSpec/payloads';
import { TableWithoutTabAndLogo } from '@components/global/table/Table';

const SiteServiceArea = () => {
  const dispatch = useDispatch();
  const searchTableBy: string[] = [];
  let noOfPages = 0;
  const {
    // Values
    addServiceAreaModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,
    bulkCreateServiceAreaModal,

    // Functions
    handleAddServiceAreaModal,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdatePerPageItem,
    onUpdateSearchServiceArea,
    handleBulkCreateServiceAreaModal,
  } = useSiteServiceArea();

  if (!tableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      tableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => ServiceAreaDataColumns(), []);
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

  const actionItems = useMemo(() => ServiceAreaActionItem(), []);
  const rowData = useMemo(
    () =>
      ServiceAreaDataRows(
        tableData?.data?.serviceAreas as ServiceAreaPayload[]
      ) ?? [],
    [tableData?.data?.serviceAreas]
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
              click={handleBulkCreateServiceAreaModal}
            />

            <OutlinedButton
              iconBefore={
                <HiPlusSm
                  size={20}
                  className={`mr-2`}
                />
              }
              text={`Add Service Area`}
              type={`primary`}
              className={`h-[38px] max-w-4xl`}
              click={handleAddServiceAreaModal}
            />
          </div>
        </div>

        <SiteDetails />

        <SiteRoutes platform={'SUPERADMIN'} />

        <TableWithoutTabAndLogo
          dataLoading={tableDataLoading}
          onUpdateSearch={onUpdateSearchServiceArea}
          perPageChange={onUpdatePerPageItem}
          perPageValue={perPage}
          updateSearchKey={onUpdateSearchKey}
          searchKeys={searchTableBy}
          searchKey={searchKey}
          actionItems={actionItems}
          columns={columnData}
          data={rowData}
          createNew={handleAddServiceAreaModal}
          currentPage={currentPage}
          from={resultFrom ?? 1}
          to={resultTo ?? 10}
          noOfPages={noOfPages}
          onNext={onClickNext}
          onPrevious={onClickPrevious}
          sortBy={onHandleSortBy}
          total={tableData?.data?.totalRows ?? 0}
          url={`superadmin/site/unit/details`}
        />
      </div>

      <CreateServiceAreaModal
        open={addServiceAreaModal}
        handler={handleAddServiceAreaModal}
      />

      <CreateBulkServiceArea
        open={bulkCreateServiceAreaModal}
        handler={handleBulkCreateServiceAreaModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default SiteServiceArea;
