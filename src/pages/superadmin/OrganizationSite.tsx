import { useMemo } from 'react';
// import { Tab } from '@headlessui/react';
import { HiPlusSm } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';
import { CgArrowsH, CgExport } from 'react-icons/cg';

import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { useOrganizationDetails } from '@hooks/superadmin/useOrganizationDetails';
import {
  SuperadminSiteDataColumn,
  SuperAdminSiteDataColumns,
  SuperadminSiteDataRow,
  SuperAdminSiteDataRows,
} from '@components/tables/row-col-mapping/SuperadminTable';
import { SuperadminSiteData } from '@typeSpec/superadmin';
import Table, { BasicTable } from '@components/global/table/Table';
import TableFooter from '@components/global/table/TableFooter';
import HospitalDetails from '@components/superadmin/hospital/HospitalDetails';
import HospitalRoutes from '@components/superadmin/HospitalRoutes';
import CreateSite from '@components/modals/CreateSite';
import { OutlinedButton } from '@components/global/CustomButton';
import { Typography } from '@components/global/dialog/Typography';
import { FaCalendarAlt } from 'react-icons/fa';
import {
  DateInput,
  SelectInput,
} from '@components/global/formInput/CustomInput';
import { BasicSearchInput } from '@components/global/formInput/SearchInputs';
import { CustomTabSelector, DropdownMenu } from '@components/global/MenuTabs';
import { Card } from '@material-tailwind/react';

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

  const columns = useMemo(() => SuperadminSiteDataColumn(), []);

  const columnData = useMemo(() => SuperAdminSiteDataColumns(), []);
  const rowData = useMemo(
    () => SuperAdminSiteDataRows(sites as SuperadminSiteData[]) ?? [],
    [sites]
  );

  const data = useMemo(
    () => SuperadminSiteDataRow(sites as SuperadminSiteData[]) ?? [],
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
        />

        <div className="relative overflow-x-auto overflow-y-auto shadow-lg flex flex-col rounded-lg border border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700">
          <div className="w-full grid grid-cols-[22%_8%_45%_12%_12%] gap-4">
            <BasicSearchInput
              placeholder={`Search...`}
              value={searchSite}
              change={(e) => onUpdateSearchSite(e.target.value)}
              className={`!mb-0 w-full`}
            />

            <DropdownMenu
              value={perPage}
              menuItems={itemsPerPage}
              change={onUpdatePerPageItem}
              buttonClass={`border-[#E9ECEF] w-full h-[45px]`}
            />

            <div className="flex items-center w-full space-x-3 md:w-auto">
              <DateInput
                label={`From`}
                placeholder={`DD/MM/YYYY`}
                className={`my-3`}
                change={onUpdateSelectFrom}
                value={dateFilterFrom as Date}
                id={`from`}
                icon={<FaCalendarAlt size={20} />}
              />

              <CgArrowsH size={40} />

              <DateInput
                label={`To`}
                placeholder={`DD/MM/YYYY`}
                className={`my-3`}
                change={onUpdateSelectTo}
                value={dateFilterTo as Date}
                id={`to`}
                icon={<FaCalendarAlt size={20} />}
              />
            </div>

            <SelectInput
              label={`Country`}
              options={countryFilterList}
              className={`w-full`}
              id={'country'}
              change={onUpdateFilterByCountry}
            />

            <SelectInput
              label={`State`}
              options={stateFilterList}
              className={`w-full`}
              id={'state'}
              change={onUpdateFilterByState}
            />
          </div>

          <Table
            columns={columns}
            data={data}
          />

          <TableFooter
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
      </div>

      <CreateSite
        reloadPage={onUpdateDataRefresh}
        totalSites={organization?.site_count ?? (0 as number)}
      />
    </SuperadminBaseTemplate>
  );
};

export default OrganizationSite;
