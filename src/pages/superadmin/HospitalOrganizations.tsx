import { HiPlusSm } from 'react-icons/hi'
import { TiExportOutline } from 'react-icons/ti'
import { GoSearch } from 'react-icons/go'
import { CgArrowsH } from 'react-icons/cg'
import { Tab } from "@headlessui/react";
import React, { useMemo } from "react";

import SuperadminBaseTemplate from "../../components/templates/superadmin/SuperadminBaseTemplate"
import Text from "../../components/global/Text";
import {useHospitalOrganisation} from "../../hooks/superadmin/useHospitalOrganisation";
import Table from "../../components/global/table/Table";
import TableHeaderDropdown from "../../components/global/table/TableHeaderDropdown";
import {SuperadminHospitalColumn, SuperadminHospitalRow} from "../../components/tables/SuperadminTable";
import BasicDatePicker from "../../components/global/input/DatePicker";
import TableFooter from "../../components/global/table/TableFooter";
import {availableTitles} from "../../lib/constants/constants";
import {Select} from "flowbite-react";
import CreateHospitalModal from "../../components/modals/CreateHospitalModal";

const HospitalOrganizations = () => {
  const itemsPerPage = ['All', 10, 20, 50, 100]

  const {
    //Value
    searchOrganisation,
    hospitalTabs,
    perPage,
    hospitalData,
    currentPage,
    noOfPages,
    totalHospitals,
    resultFrom,
    resultTo,
    allHospitalCountries,
    showCreateHospitalModal,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onClickSortParameters,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    filterByCountry,
    onUpdateShowCreateHospitalModal,
  } = useHospitalOrganisation()

  // const data = useMemo(() => hospitalData ?? [], [hospitalData]);

  const data = useMemo(
    () => SuperadminHospitalRow(hospitalData) ?? [],
    [hospitalData, currentPage]);

  const columns = useMemo(
    () => SuperadminHospitalColumn(onClickSortParameters),
    [hospitalData, currentPage])

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
          <div className={`col-span-4 max-w-md`}>
            <Tab.Group>
              <Tab.List className={`flex space-x-1 rounded-xl bg-white p-1`}>
                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${hospitalTabs === 'All' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('All')}
                >
                  All
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Active' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('Active')}
                >
                  Active
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Archived' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('Archived')}
                >
                  Archived
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Pending' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('Pending')}
                >
                  Pending
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Deactivated' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('Deactivated')}
                >
                  Deactivated
                </Tab>

              </Tab.List>
            </Tab.Group>
          </div>

          <div className={`w-full`}>
            <button
              type="button"
              onClick={onUpdateShowCreateHospitalModal  }
              className="w-full flex flex-row items-center text-white bg-blue-700 hover:bg-blue-800 font-medium
              rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <HiPlusSm size={20} className={`mr-2`}/>Add new organization
            </button>
          </div>

          <div className={`w-full`}>
            <button type="button"
                    className="w-full flex flex-row items-center py-2.5 px-5 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit"><TiExportOutline size={20} className={`mr-2`}/>Export Organization
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border
         border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700">

          <div className="w-full relative my-4 sm:rounded-lg px-10">
            <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-3/4">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <GoSearch size={20}/>
                    </div>
                    <input
                      type="text"
                      id="search"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg
                      bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={searchOrganisation}
                      onChange={onUpdateSearchOrganisation}
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>

              <TableHeaderDropdown value={perPage} items={itemsPerPage} change={onUpdatePerPageItem}/>

              <div
                className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <div className="flex items-center w-full space-x-3 md:w-auto">
                  <BasicDatePicker label={`From`} change={onUpdateSelectFrom}/>

                  <CgArrowsH size={30}/>

                  <BasicDatePicker label={`To`} change={onUpdateSelectTo}/>
                </div>

              </div>

              <div>
                <Select
                  id="state"
                  required={false}
                  onChange={filterByCountry}
                  className={`flex items-center justify-center w-full text-sm font-medium text-gray-900 bg-white border
                   border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 
                  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[106px]`}
                >
                  <option value={``}>Country</option>
                  {allHospitalCountries?.map((item:{country:string}, idx:number) => {
                    return (
                      <option key={idx} value={item?.country}>{item?.country}</option>
                    )
                  })}

                </Select>
              </div>
            </div>
          </div>

          <Table columns={columns} data={data}/>

          <TableFooter
            noOfPages={noOfPages}
            total={totalHospitals}
            from={resultFrom}
            to={resultTo}
            onNext={onClickNext}
            onPrevious={onClickPrevious}
            currentPage={currentPage}
            enterPageNumber={onEnterPageNumber}
          />
        </div>
      </div>

      <CreateHospitalModal showModal={showCreateHospitalModal} close={onUpdateShowCreateHospitalModal}/>
    </SuperadminBaseTemplate>
  )
}

export default HospitalOrganizations