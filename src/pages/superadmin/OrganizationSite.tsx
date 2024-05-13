import { useMemo } from 'react';
// import { Tab } from '@headlessui/react';
import { HiPlusSm } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';

import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useOrganizationDetails } from '@hooks/superadmin/useOrganizationDetails';
import {
  SuperAdminSiteActionItem,
  SuperAdminSiteDataColumns,
  SuperAdminSiteDataRows,
} from '@components/tables/row-col-mapping/SuperadminTable';
import { SitesDataKeyMap } from '@typeSpec/superadmin';
import { BasicTable } from '@components/global/table/Table';
import HospitalDetails from '@components/superadmin/hospital/HospitalDetails';
import HospitalRoutes from '@components/superadmin/HospitalRoutes';
import CreateSiteModal from '@components/modals/superAdmin/CreateSiteModal';
import { OutlinedButton } from '@components/global/CustomButton';
import { Typography } from '@components/global/dialog/Typography';
import { formatResponseKeyForDropdown } from '@util/index';
import { useDispatch } from 'react-redux';
import {
  setNoOfPages,
  setTotalDataCount,
} from '../../redux/reducers/tableReducer';
import ConfirmationModal from '@components/modals/ConfirmationModal';

const OrganizationSite = () => {
  const itemsPerPage = ['All', 10, 20, 50, 100],
    searchTableBy: string[] = [];
  const dispatch = useDispatch();
  let noOfPages = 0;

  const {
    // Values
    // sites,
    perPage,
    currentPage,
    resultFrom,
    resultTo,
    tabData,
    hospitalData,
    hospitalDataLoading,
    siteCountData,
    siteCountDataLoading,
    sitesTableData,
    sitesTableDataLoading,
    searchKey,
    showCreateSiteModal,
    showDeleteModal,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdatePerPageItem,
    onUpdateSearchSite,
    deleteSite,
    getSiteDetailsAndEditModalController,
    onUpdateSearchKey,
    onUpdateShowCreateSiteModal,
    setShowDeleteModal,
    confirmDeleteSite,
  } = useOrganizationDetails();

  if (!sitesTableDataLoading) {
    noOfPages =
      typeof perPage === 'string'
        ? 1
        : Math.ceil(sitesTableData?.data?.totalRows / perPage);
    dispatch(
      setNoOfPages(
        Math.ceil(
          sitesTableData?.data?.totalRows /
            (perPage === 'All' ? sitesTableData?.data?.totalRows : perPage)
        )
      )
    );
    dispatch(setTotalDataCount(sitesTableData?.data?.totalRows));
  }

  const columnData = useMemo(() => SuperAdminSiteDataColumns(), []);
  const actionItems = useMemo(
    () =>
      SuperAdminSiteActionItem(
        getSiteDetailsAndEditModalController,
        deleteSite
      ),
    []
  );

  const rowData = useMemo(
    () =>
      SuperAdminSiteDataRows(
        sitesTableData?.data?.sites as SitesDataKeyMap[]
      ) ?? [],
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
        <div className={`flex flex-row gap-4`}>
          <div className={`mr-auto`}>
            <Typography
              text={`Welcome To, ${hospitalData?.data?.name}`}
              size="4xl"
              weight={800}
              className="mb-8"
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

        <HospitalDetails
          data={hospitalData?.data ? hospitalData?.data : null}
          siteData={siteCountData?.data ? siteCountData?.data : null}
          siteDataLoading={siteCountDataLoading}
          hospitalDataLoading={hospitalDataLoading}
        />

        <HospitalRoutes />

        <BasicTable
          tabItems={tabData}
          onSelectTab={onUpdateActiveTab}
          perPageValue={perPage}
          perPageMenuItems={itemsPerPage}
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
    </SuperadminBaseTemplate>
  );
};

export default OrganizationSite;
