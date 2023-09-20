import { Fragment, useMemo } from 'react';
import { Tab } from '@headlessui/react';
import { HiPlusSm } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';
import { CgArrowsH, CgExport } from 'react-icons/cg';

import SuperadminBaseTemplate from '../../layout/superadmin/SuperadminBaseTemplate';
import { useOrganizationDetails } from '../../hooks/superadmin/useOrganizationDetails';
import {
  SuperadminSiteDataColumn,
  SuperadminSiteDataRow,
} from '../../components/tables/SuperadminTable';
import { SuperadminSiteData } from '../../types/superadmin';
import Table from '../../components/global/table/Table';
import TableFooter from '../../components/global/table/TableFooter';
import TableHeaderDropdown from '../../components/global/table/TableHeaderDropdown';
import HospitalDetails from '../../components/superadmin/hospital/HospitalDetails';
import HospitalRoutes from '../../components/superadmin/HospitalRoutes';
import CreateSite from '../../components/modals/CreateSite';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../../components/global/CustomButton';
import { Typography } from '../../components/global/dialog/Typography';
import { FaCalendarAlt } from 'react-icons/fa';
import {
  DateInput,
  SelectInput,
} from '../../components/global/formInput/CustomInput';
import { BasicSearchInput } from '../../components/global/formInput/SearchInputs';

const OrganizationSite = () => {
  const itemsPerPage = ['All', 10, 20, 50, 100];

  const {
    // Values
    organization,
    activeTabs,
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

  const columns = useMemo(() => SuperadminSiteDataColumn(), [sites]);

  const data = useMemo(
    () => SuperadminSiteDataRow(sites as SuperadminSiteData[]) ?? [],
    [sites]
  );

  return (
    <Fragment>
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
              <BasicOutlineButton
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

              <BasicOutlineButton
                text={`Export Data`}
                type={'primary'}
                className={`h-[38px] w-[150px]`}
                iconBefore={
                  <CgExport
                    size={20}
                    className={`mr-2`}
                  />
                }
              />
            </div>
          </div>

          <HospitalDetails data={organization ? organization : null} />

          <HospitalRoutes />

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 my-10`}>
            <div className={`max-w-md`}>
              <Tab.Group>
                <Tab.List className={`flex space-x-1 rounded-xl bg-white p-1`}>
                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTabs === 'ALL'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                    onClick={() => onUpdateActiveTab('ALL')}>
                    All
                  </Tab>

                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTabs === 'ACTIVE'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                    onClick={() => onUpdateActiveTab('ACTIVE')}>
                    Active
                  </Tab>

                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTabs === 'PENDING'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                    onClick={() => onUpdateActiveTab('PENDING')}>
                    Pending
                  </Tab>

                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    activeTabs === 'DEACTIVATE'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                    onClick={() => onUpdateActiveTab('DEACTIVATE')}>
                    Deactivated
                  </Tab>
                </Tab.List>
              </Tab.Group>
            </div>

            <div
              className={`w-full flex flex-row gap-4 items-center justify-end`}>
              <ModalButtonOutlineLunch
                iconBefore={
                  <HiPlusSm
                    size={20}
                    className={`mr-2`}
                  />
                }
                targetModalId={`createSite`}
                text={`Add New Site`}
                type={`primary`}
                className={`h-[38px] w-[180px]`}
              />

              <BasicOutlineButton
                text={`Export Sites`}
                click={() => console.log('Export Sites')}
                type={'primary'}
                className={`h-[38px] w-[150px]`}
                iconBefore={
                  <CgExport
                    size={20}
                    className={`mr-2`}
                  />
                }
              />
            </div>
          </div>

          <div
            className="relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border
         border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700">
            <div className="w-full relative my-4 sm:rounded-lg px-10">
              <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                <div className="w-full md:w-3/4">
                  <BasicSearchInput
                    id={`searchOrg`}
                    placeholder={`Search...`}
                    value={searchSite}
                    change={(e) => onUpdateSearchSite(e.target.value)}
                    inputClass={`!min-h-[58px]`}
                    labelClass={`!top-[12px] !text-[15px]`}
                    className={`!mb-0`}
                  />
                </div>

                <TableHeaderDropdown
                  value={perPage}
                  items={itemsPerPage}
                  change={onUpdatePerPageItem}
                />

                <div
                  className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto
                  md:flex-row md:space-y-0 md:items-center md:space-x-3">
                  <div className="flex items-center w-full space-x-3 md:w-auto">
                    <DateInput
                      label={`From`}
                      placeholder={`DD/MM/YYYY`}
                      className={`my-3`}
                      change={(e) => onUpdateSelectFrom(e.target.value)}
                      value={dateFilterFrom as Date}
                      id={`from`}
                      icon={<FaCalendarAlt size={20} />}
                    />

                    <CgArrowsH size={40} />

                    <DateInput
                      label={`To`}
                      placeholder={`DD/MM/YYYY`}
                      className={`my-3`}
                      change={(e) => onUpdateSelectTo(e.target.value)}
                      value={dateFilterTo as Date}
                      id={`to`}
                      icon={<FaCalendarAlt size={20} />}
                    />
                  </div>
                </div>

                <div
                  className={`flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto 
                  md:flex-row md:space-y-0 md:items-center md:space-x-3`}>
                  <SelectInput
                    label={`Country`}
                    options={countryFilterList}
                    className={`w-full min-h-[59px]`}
                    id={'country'}
                    enableFilter={true}
                    change={(e) => onUpdateFilterByCountry(e.target.value)}
                  />

                  <SelectInput
                    label={`State`}
                    options={stateFilterList}
                    className={`w-full min-h-[59px]`}
                    id={'state'}
                    enableFilter={true}
                    change={(e) => onUpdateFilterByState(e.target.value)}
                  />
                </div>
              </div>
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
    </Fragment>
  );
};

export default OrganizationSite;
