import { useMemo } from 'react';
// import { Tab } from '@headlessui/react';
import { HiPlusSm } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';

import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useOrganizationDetails } from '@hooks/superadmin/useOrganizationDetails';
import {
  SuperAdminSiteDataColumns,
  SuperAdminSiteDataRows,
} from '@components/tables/row-col-mapping/SuperadminTable';
import { SuperadminSiteData } from '@typeSpec/superadmin';
import { BasicTable } from '@components/global/table/Table';
import HospitalDetails from '@components/superadmin/hospital/HospitalDetails';
import HospitalRoutes from '@components/superadmin/HospitalRoutes';
import CreateSite from '@components/modals/CreateSite';
import { OutlinedButton } from '@components/global/CustomButton';
import { Typography } from '@components/global/dialog/Typography';
import { CustomTabSelector } from '@components/global/MenuTabs';

const OrganizationSite = () => {
  const itemsPerPage = ['All', 10, 20, 50, 100];

  const {
    // Values
    organization,
    sites,
    perPage,
    currentPage,
    noOfPages,
    resultFrom,
    resultTo,
    totalData,
    searchSite,
    countryFilterList,
    stateFilterList,
    dateFilterFrom,
    dateFilterTo,
    tabData,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onEnterPageNumber,
    onUpdatePerPageItem,
    onUpdateSearchSite,
    onUpdateFilterByCountry,
    onUpdateFilterByState,
    onUpdateDataRefresh,
  } = useOrganizationDetails();

  const columnData = useMemo(() => SuperAdminSiteDataColumns(), []);
  const rowData = useMemo(
    () => SuperAdminSiteDataRows(sites as SuperadminSiteData[]) ?? [],
    [sites]
  );

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <div className={`flex flex-row gap-4`}>
          <div className={`mr-auto`}>
            <Typography
              text={`Welcome To, ${organization?.name}`}
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
            />
          </div>
        </div>

        <HospitalDetails data={organization ? organization : null} />

        <HospitalRoutes />

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 my-10`}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <CustomTabSelector
              onClick={onUpdateActiveTab}
              tabItems={tabData}
            />
          </div>
        </div>

        <BasicTable
          tabItems={tabData}
          onSelectTab={onUpdateActiveTab}
          perPageValue={perPage}
          perPageMenuItems={itemsPerPage}
          perPageChange={onUpdatePerPageItem}
          columns={columnData}
          data={rowData}
          url={'superadmin/site'}
          noOfPages={noOfPages}
          total={totalData}
          from={resultFrom}
          to={resultTo}
          onNext={onClickNext}
          onPrevious={onClickPrevious}
          currentPage={currentPage}
          enterPageNumber={onEnterPageNumber}
        />
      </div>

      <CreateSite
        reloadPage={onUpdateDataRefresh}
        totalSites={organization?.site_count ?? (0 as number)}
      />
    </SuperadminBaseTemplate>
  );
};

export default OrganizationSite;
