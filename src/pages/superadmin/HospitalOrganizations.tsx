import { useMemo, useState } from 'react';
import { TiExportOutline } from 'react-icons/ti';
import { HiPlusSm } from 'react-icons/hi';

import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import Text from '@components/global/dialog/Text';
import { useHospitalOrganisation } from '@hooks/superadmin/useHospitalOrganisation';
import {
  SuperAdminHospitalActionItem,
  SuperAdminHospitalDataColumns,
  SuperAdminHospitalDataRows,
} from '@components/tables/row-col-mapping/SuperadminTable';
import CreateHospitalModal from '@components/modals/CreateHospitalModal';
import { OutlinedButton } from '@components/global/CustomButton';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import { useDispatch } from 'react-redux';
import { formatResponseKeyForDropdown } from '@util/index';
import { HospitalPayload } from '@typeSpec/payloads';
import { BasicTable } from '@components/global/table/Table';

const HospitalOrganizations = () => {
  const searchTableBy: string[] = [];
  const dispatch = useDispatch();
  let noOfPages = 0;

  const {
    //Value
    hospitalTableData,
    hospitalTableDataLoading,
    tabData,
    searchKey,
    perPage,
    currentPage,
    resultFrom,
    resultTo,

    // Function
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdateSearchOrganisation,
    onUpdateShowCreateHospitalModal,
    onHandleSortBy,
  } = useHospitalOrganisation();

  if (!hospitalTableDataLoading) {
    noOfPages =
      typeof perPage === 'string'
        ? 1
        : Math.ceil(hospitalTableData?.data?.totalRows / perPage);
    dispatch(
      setNoOfPages(
        Math.ceil(
          hospitalTableData?.data?.totalRows /
            (perPage === 'All' ? hospitalTableData?.data?.totalRows : perPage)
        )
      )
    );
    dispatch(setTotalDataCount(hospitalTableData?.data?.totalRows));
  }

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(!open);

  const rowData = useMemo(
    () =>
      SuperAdminHospitalDataRows(
        hospitalTableData?.data?.hospitals as HospitalPayload[]
      ) ?? [],
    [hospitalTableData?.data?.hospitals]
  );

  const columnData = useMemo(() => SuperAdminHospitalDataColumns(), []);
  columnData.map((column) => {
    if (column.key !== 'action') {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  const actionItems = useMemo(() => SuperAdminHospitalActionItem(), []);

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <Text
          text={`Organisations`}
          size="4xl"
          weight={800}
          className="mb-8 text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
        />

        <div className={`grid grid-cols-6 gap-4 my-5`}>
          <OutlinedButton
            iconBefore={
              <HiPlusSm
                size={20}
                className={`mr-2`}
              />
            }
            text={`Add New Organization`}
            type={`primary`}
            className={`h-[38px] w-full py-6`}
            click={handleOpenModal}
          />

          <OutlinedButton
            text={`Export Organization`}
            type={'primary'}
            className={`h-[38px] w-full py-6`}
            iconBefore={
              <TiExportOutline
                size={20}
                className={`mr-2`}
              />
            }
          />
        </div>

        <BasicTable
          tabItems={tabData}
          onSelectTab={onUpdateActiveTab}
          perPageValue={perPage}
          perPageChange={onUpdatePerPageItem}
          columns={columnData}
          data={rowData ?? []}
          url={'superadmin/site'}
          noOfPages={noOfPages ?? 0}
          total={hospitalTableData?.data?.totalRows ?? 0}
          from={resultFrom ?? 1}
          to={resultTo ?? 10}
          onNext={onClickNext}
          onPrevious={onClickPrevious}
          currentPage={currentPage ?? -1}
          searchKeys={searchTableBy}
          dataLoading={hospitalTableDataLoading}
          searchKey={searchKey}
          updateSearchKey={onUpdateSearchKey}
          onUpdateSearch={onUpdateSearchOrganisation}
          createNew={onUpdateShowCreateHospitalModal}
          actionItems={actionItems}
          sortBy={onHandleSortBy}
        />
      </div>

      <CreateHospitalModal
        open={open}
        handler={handleOpenModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default HospitalOrganizations;
