import { useMemo } from 'react';
// import { Tab } from '@headlessui/react';
import { HiPlusSm } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';

import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useOrganizationDetails } from '@hooks/superadmin/useOrganizationDetails';
import { BasicTable } from '@components/global/table/Table';
import HospitalDetails from '@components/superadmin/HospitalDetails';
import HospitalRoutes from '@components/superadmin/HospitalRoutes';
import CreateSiteModal from '@components/modals/CreateSiteModal';
import { OutlinedButton } from '@components/global/CustomButton';
import { Typography } from '@components/global/dialog/Typography';
import {
  formatResponseKeyForDropdown,
  getTotalRowsAndPerPage,
} from '@util/index';
import { useDispatch } from 'react-redux';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import ConfirmationModal from '@components/modals/ConfirmationModal';
import EditSiteModal from '@components/modals/admins/EditSiteModal';
import { SitePayload } from '@typeSpec/payloads';
import {
  SiteActionItem,
  SiteDataColumns,
  SiteDataRows,
} from '@components/tables/row-col-mapping/RowColumnTableMaps';

const OrganizationSite = () => {
  const searchTableBy: string[] = [];
  const dispatch = useDispatch();
  let noOfPages = 0;

  const {
    // Values
    perPage,
    currentPage,
    resultFrom,
    resultTo,
    tabData,
    sitesTableData,
    sitesTableDataLoading,
    searchKey,
    showCreateSiteModal,
    showDeleteModal,
    editSiteModalController,
    siteId,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdatePerPageItem,
    onUpdateSearchSite,
    deleteSite,
    editSite,
    onUpdateSearchKey,
    onUpdateShowCreateSiteModal,
    setShowDeleteModal,
    confirmDeleteSite,
    setEditSiteModalController,
    onHandleSortBy,
  } = useOrganizationDetails();

  if (!sitesTableDataLoading) {
    const { noOfPages: pagesCount, totalRows } = getTotalRowsAndPerPage(
      sitesTableData?.data,
      perPage
    );

    noOfPages = pagesCount;
    dispatch(setNoOfPages(pagesCount));
    dispatch(setTotalDataCount(totalRows));
  }

  const columnData = useMemo(() => SiteDataColumns(), []);
  const actionItems = useMemo(() => SiteActionItem(editSite, deleteSite), []);

  const rowData = useMemo(
    () => SiteDataRows(sitesTableData?.data?.sites as SitePayload[]) ?? [],
    [sitesTableData?.data?.sites]
  );

  columnData.map((column) => {
    if (column.key !== 'action') {
      searchTableBy.push(formatResponseKeyForDropdown(column.key));
    }
  });

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <div className={`flex flex-row gap-4 mb-8`}>
          <div className={`mr-auto`}>
            <Typography
              text={`Welcome`}
              size="4xl"
              weight={800}
              Tag={'h1'}
            />
          </div>

          <div className={`ml-auto flex flex-row gap-4`}>
            <OutlinedButton
              text={`Edit`}
              type={'primary'}
              className={`h-[38px] w-[140px]`}
              iconBefore={
                <AiFillEdit
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
              text={`Add Site`}
              type={`primary`}
              className={`h-[38px] w-[180px]`}
              click={onUpdateShowCreateSiteModal}
            />
          </div>
        </div>

        <HospitalDetails />

        <HospitalRoutes />

        <BasicTable
          tabItems={tabData}
          onSelectTab={onUpdateActiveTab}
          perPageValue={perPage}
          perPageChange={onUpdatePerPageItem}
          columns={columnData}
          data={rowData ?? []}
          url={'superadmin/site'}
          noOfPages={noOfPages ?? 0}
          total={sitesTableData?.data?.totalRows ?? 0}
          from={resultFrom ?? 1}
          to={resultTo ?? 10}
          onNext={onClickNext}
          onPrevious={onClickPrevious}
          currentPage={currentPage ?? -1}
          searchKeys={searchTableBy}
          dataLoading={sitesTableDataLoading}
          searchKey={searchKey}
          updateSearchKey={onUpdateSearchKey}
          onUpdateSearch={onUpdateSearchSite}
          createNew={onUpdateShowCreateSiteModal}
          actionItems={actionItems}
          sortBy={onHandleSortBy}
        />
      </div>

      <CreateSiteModal
        open={showCreateSiteModal}
        handleOpen={onUpdateShowCreateSiteModal}
      />

      <ConfirmationModal
        open={showDeleteModal}
        message={'Are you sure you want to delete this item?'}
        handleOpen={() => setShowDeleteModal((cur) => !cur)}
        handleConfirm={confirmDeleteSite}
      />

      <EditSiteModal
        open={editSiteModalController}
        handleOpen={() => setEditSiteModalController(!editSiteModalController)}
        siteId={siteId}
      />
    </SuperadminBaseTemplate>
  );
};

export default OrganizationSite;
