import { Fragment, useMemo } from 'react';
import { Tab } from '@headlessui/react';
import { HiPlusSm } from 'react-icons/hi';
import { AiFillEdit } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { CgArrowsH, CgExport } from 'react-icons/cg';
import { Select } from 'flowbite-react';

import SuperadminBaseTemplate from '../../components/templates/superadmin/SuperadminBaseTemplate';
import { useOrganizationDetails } from '../../hooks/superadmin/useOrganizationDetails';
import Text from '../../components/global/Text';
import { PrimaryButtonOutline } from '../../components/global/input/ButtonInput';
import {
  SuperadminSiteDataColumn,
  SuperadminSiteDataRow,
} from '../../components/tables/SuperadminTable';
import { SuperadminSiteData } from '../../types/superadmin';
import BasicDatePicker from '../../components/global/input/DatePicker';
import Table from '../../components/global/table/Table';
import TableFooter from '../../components/global/table/TableFooter';
import TableHeaderDropdown from '../../components/global/table/TableHeaderDropdown';
import HospitalDetails from '../../components/superadmin/hospital/HospitalDetails';
import HospitalRoutes from '../../components/superadmin/HospitalRoutes';
import CreateHospitalModal from '../../components/modals/CreateHospitalModal';
import CreateSite from '../../components/modals/CreateSite';

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
    showCreateSiteModal,

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
    onUpdateShowCreateSiteModal,
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
              <Text
                text={`Welcome To, ${organization?.name}`}
                size="4xl"
                weight={800}
                className="mb-8 text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
              />
            </div>

            <div className={`ml-auto flex flex-row gap-4`}>
              <PrimaryButtonOutline
                text={`Edit`}
                click={() => console.log('Add New Site')}
                icon={
                  <AiFillEdit
                    size={20}
                    className={`mr-2`}
                  />
                }
                className={`h-[38px] w-[140px]`}
              />

              <PrimaryButtonOutline
                click={() => console.log('Export Data')}
                text={`Export Data`}
                icon={
                  <CgExport
                    size={20}
                    className={`mr-2`}
                  />
                }
                className={`h-[38px] w-[150px]`}
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
              <PrimaryButtonOutline
                click={() => onUpdateShowCreateSiteModal()}
                text={`Add New Site`}
                icon={
                  <HiPlusSm
                    size={20}
                    className={`mr-2`}
                  />
                }
              />

              <PrimaryButtonOutline
                click={() => console.log('Export Sites')}
                text={`Export Sites`}
                icon={
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
                  <form className="flex items-center">
                    <label
                      htmlFor="simple-search"
                      className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <GoSearch size={20} />
                      </div>
                      <input
                        type="text"
                        id="search"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                      bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={searchSite}
                        onChange={onUpdateSearchSite}
                        placeholder="Search"
                      />
                    </div>
                  </form>
                </div>

                <TableHeaderDropdown
                  value={perPage}
                  items={itemsPerPage}
                  change={onUpdatePerPageItem}
                />

                <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                  <div className="flex items-center w-full space-x-3 md:w-auto">
                    <BasicDatePicker
                      label={`From`}
                      change={onUpdateSelectFrom}
                    />

                    <CgArrowsH size={30} />

                    <BasicDatePicker
                      label={`To`}
                      change={onUpdateSelectTo}
                    />
                  </div>
                </div>

                <div>
                  <Select
                    id="state"
                    required={false}
                    onChange={onUpdateFilterByCountry}
                    className={`flex items-center justify-center w-full text-sm font-medium text-gray-900 bg-white border
                   border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 
                  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[106px]`}>
                    <option value={``}>Country</option>
                    {countryFilterList?.map(
                      (item: { country: string }, idx: number) => {
                        return (
                          <option
                            key={idx}
                            value={item?.country}>
                            {item?.country}
                          </option>
                        );
                      }
                    )}
                  </Select>
                </div>

                <div>
                  <Select
                    id="state"
                    required={false}
                    onChange={onUpdateFilterByState}
                    className={`flex items-center justify-center w-full text-sm font-medium text-gray-900 bg-white border
                   border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 
                  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[106px]`}>
                    <option value={``}>State</option>
                    {stateFilterList?.map(
                      (item: { state: string }, idx: number) => {
                        return (
                          <option
                            key={idx}
                            value={item?.state}>
                            {item?.state}
                          </option>
                        );
                      }
                    )}
                  </Select>
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
          showModal={showCreateSiteModal}
          close={onUpdateShowCreateSiteModal}
          reloadPage={onUpdateDataRefresh}
          totalSites={organization?.site_count ?? (0 as number)}
        />
      </SuperadminBaseTemplate>
    </Fragment>
  );
};

export default OrganizationSite;
