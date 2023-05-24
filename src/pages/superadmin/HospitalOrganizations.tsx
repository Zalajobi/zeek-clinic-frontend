import { HiPlusSm } from 'react-icons/hi'
import { TiExportOutline } from 'react-icons/ti'
import { GoSearch } from 'react-icons/go'
import { IoMdArrowDropdown } from 'react-icons/io'
import {Menu, Tab, Transition } from "@headlessui/react";
import {Fragment, useMemo} from "react";

import SuperadminBaseTemplate from "../../components/templates/superadmin/SuperadminBaseTemplate"
import Text from "../../components/global/Text";
import {useHospitalOrganisation} from "../../hooks/superadmin/useHospitalOrganisation";
import Table from "../../components/global/Table";
import TableHeaderDropdown from "../../components/global/TableHeaderDropdown";
import {GetHospitalResponseData} from "../../types/superadmin";
import {SuperadminHospitalColumn, SuperadminHospitalRow} from "../../components/tables/SuperadminTable";

const HospitalOrganizations = () => {
  const itemsPerPage = ['All', 10, 20, 50, 100]

  const {
    //Value
    searchOrganisation,
    hospitalTabs,
    perPage,
    hospitalData,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
    onUpdatePerPageItem,
  } = useHospitalOrganisation()

  // const data = useMemo(() => hospitalData ?? [], [hospitalData]);

  const data = useMemo(() => SuperadminHospitalRow(hospitalData) ?? [], [hospitalData]);

  const columns = useMemo(() => SuperadminHospitalColumn(), [hospitalData])

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
                  ${hospitalTabs === 'Pending' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('Pending')}
                >
                  Pending
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
                  ${hospitalTabs === 'Deactivated' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                  onClick={() => onUpdateActiveTab('Deactivated')}
                >
                  Deactivated
                </Tab>

              </Tab.List>
            </Tab.Group>
          </div>

          <div className={`w-full`}>
            <button type="button"
                    className="w-full flex flex-row items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"><HiPlusSm size={20} className={`mr-2`}/>Add new organization
            </button>
          </div>

          <div className={`w-full`}>
            <button type="button"
                    className="w-full flex flex-row items-center py-2.5 px-5 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-fit"><TiExportOutline size={20} className={`mr-2`}/>Export Organization
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-lg flex flex-col rounded-lg border border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700">

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
                  <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          type="button">
                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                    Actions
                  </button>
                  <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-4 mr-2 text-gray-400"
                         viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clip-rule="evenodd"/>
                    </svg>
                    Filter
                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clip-rule="evenodd" fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                    </svg>
                  </button>
                </div>
              </div>

              </div>
            </div>

          <Table columns={columns} data={data}/>

        </div>
      </div>
    </SuperadminBaseTemplate>
  )
}

export default HospitalOrganizations