import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import { useSitePatients } from '@hooks/pages/useSitePatients';
import AddPatientModal from '@components/modals/AddPatientModal';
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
  PatientActionItem,
  PatientDataColumns,
  PatientDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';
import { PatientPayload } from '@typeSpec/payloads';
import { BasicTable } from '@components/global/table/Table';

const SitePatientPage = () => {
  const dispatch = useDispatch();
  const searchTableBy: string[] = [];
  let noOfPages = 0;

  const {
    // Values
    addPatientModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,
    tabData,

    // Functions
    onUpdateAddPatientModal,
    onUpdatePerPageItem,
    onUpdateActiveTab,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdateSearchPatient,
  } = useSitePatients();

  if (!tableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      tableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => PatientDataColumns(), []);
  columnData?.map((column) => {
    if (
      column.key !== 'action' &&
      column.key !== 'gender' &&
      column.key !== 'createdAt' &&
      column.key !== 'status' &&
      column.key !== 'area' &&
      column.key !== 'unit' &&
      column.key !== 'dept' &&
      column.key !== 'provider' &&
      column.key !== 'employer' &&
      column.key !== 'name'
    ) {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  const actionItems = useMemo(() => PatientActionItem(), []);
  const rowData = useMemo(
    () => PatientDataRows(tableData?.data?.patients as PatientPayload[]) ?? [],
    [tableData?.data?.patients]
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
              click={onUpdateAddPatientModal}
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
          onUpdateSearch={onUpdateSearchPatient}
          createNew={onUpdateAddPatientModal}
          actionItems={actionItems}
          sortBy={onHandleSortBy}
        />
      </div>

      <AddPatientModal
        open={addPatientModal}
        handler={onUpdateAddPatientModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default SitePatientPage;
