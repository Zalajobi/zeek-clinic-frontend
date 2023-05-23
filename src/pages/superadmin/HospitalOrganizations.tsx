import { ImSearch } from 'react-icons/im'
import { HiPlusSm } from 'react-icons/hi'
import { TiExportOutline } from 'react-icons/ti'
import SuperadminBaseTemplate from "../../components/templates/superadmin/SuperadminBaseTemplate"
import Text from "../../components/global/Text";
import {useHospitalOrganisation} from "../../hooks/superadmin/useHospitalOrganisation";
import { Tab } from "@headlessui/react";

const HospitalOrganizations = () => {

  const {
    //Value
    searchOrganisation,
    hospitalTabs,

    // Function
    onUpdateSearchOrganisation,
    onUpdateActiveTab,
  } = useHospitalOrganisation()

  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <Text
          text={`Organisations`}
          size="4xl"
          weight={800}
          className="mb-8 text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
        />


        <div className={`grid grid-cols-6 gap-4 my-3`}>
          <div className={`col-span-4 max-w-md`}>
            <Tab.Group>
              <Tab.List className={`flex space-x-1 rounded-xl bg-blue-900/20 p-1`}>
                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white focus:outline-none focus:ring-2
                    ${hospitalTabs === 'All' ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`}
                    onClick={() => onUpdateActiveTab('All')}
                  >
                    All
                  </Tab>


                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Pending' ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`}
                  onClick={() => onUpdateActiveTab('Pending')}
                >
                  Pending
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Active' ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`}
                  onClick={() => onUpdateActiveTab('Active')}
                >
                  Active
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-white focus:outline-none focus:ring-2
                  ${hospitalTabs === 'Deactivated' ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'}`}
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

        <div className="relative overflow-x-auto shadow-lg flex flex-col rounded-lg border border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700 p-10">
          <div className={`grid grid-cols-6 gap-4`}>
            <div className={`flex col-span-4`}>
              <label htmlFor="search-org"
                     className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative w-full">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <ImSearch size={20}/>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Organization..."
                    value={searchOrganisation}
                    onChange={onUpdateSearchOrganisation}
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <input
                style={{display: 'none'}}
                type="file"
              />

              <button >Open file upload box</button>
            </div>
          </div>


        </div>
      </div>
    </SuperadminBaseTemplate>
  )
}

export default HospitalOrganizations