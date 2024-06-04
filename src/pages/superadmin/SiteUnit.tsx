import { useDispatch } from 'react-redux';
import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useSiteUnit } from '@hooks/pages/useSiteUnit';
import AddUnitModal from '@components/modals/AddUnitModal';
import { useMemo } from 'react';
import {
  UnitActionItem,
  UnitDataColumns,
  UnitDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';
import {
  formatResponseKeyForDropdown,
  getTotalRowsAndPerPage,
} from '@util/index';
import { UnitPayload } from '@typeSpec/payloads';
import { TableWithoutTabAndLogo } from '@components/global/table/Table';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';

const SiteUnit = () => {
  const dispatch = useDispatch();
  const searchTableBy: string[] = [];
  let noOfPages = 0;

  const {
    // Values
    addUnitModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,

    // Functions
    handleAddUnitModal,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdatePerPageItem,
    onUpdateSearchUnit,
  } = useSiteUnit();

  if (!tableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      tableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => UnitDataColumns(), []);
  columnData?.map((column) => {
    if (
      column.key !== 'action' &&
      column.key !== 'createdAt' &&
      column.key !== 'providerCount' &&
      column.key !== 'patientCount' &&
      column.key !== 'occupiedBeds' &&
      column.key !== 'totalBeds'
    ) {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  const actionItems = useMemo(() => UnitActionItem(), []);
  const rowData = useMemo(
    () => UnitDataRows(tableData?.data?.units as UnitPayload[]) ?? [],
    [tableData?.data?.units]
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
              text={`Add Department`}
              type={`primary`}
              className={`h-[38px] max-w-4xl`}
              click={handleAddUnitModal}
            />
          </div>
        </div>

        <SiteDetails />

        <SiteRoutes platform={'SUPERADMIN'} />

        <TableWithoutTabAndLogo
          dataLoading={tableDataLoading}
          onUpdateSearch={onUpdateSearchUnit}
          perPageChange={onUpdatePerPageItem}
          perPageValue={perPage}
          updateSearchKey={onUpdateSearchKey}
          searchKeys={searchTableBy}
          searchKey={searchKey}
          actionItems={actionItems}
          columns={columnData}
          data={rowData}
          createNew={handleAddUnitModal}
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

      <AddUnitModal
        handler={handleAddUnitModal}
        open={addUnitModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default SiteUnit;
