import React, {Fragment, useMemo} from 'react';
import {Tab} from "@headlessui/react";
import {HiPlusSm} from "react-icons/hi";
import {AiFillEdit} from "react-icons/ai";


import SuperadminBaseTemplate from '../../components/templates/superadmin/SuperadminBaseTemplate';
import {useOrganizationDetails} from "../../hooks/superadmin/useOrganizationDetails";
import Text from "../../components/global/Text";
import HospitalDetails from "../../components/superadmin/HospitalDetails";
import {PrimaryButtonOutline} from "../../components/global/input/ButtonInput";
import {SuperadminHospitalDataColumn, SuperadminSiteDataColumn} from "../../components/tables/SuperadminTable";

const OrganizationSite = () => {

  const {
    // Values
    organization,
    activeTabs,
    sites,

    // Functions
    onUpdateActiveTab,
  } = useOrganizationDetails()


  const columns = useMemo(
    () => SuperadminSiteDataColumn(),
    [sites])


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

            <div className={`ml-auto`}>
              <PrimaryButtonOutline
                text={`Edit`}
                click={() => console.log('Add New Site')}
                icon={<AiFillEdit size={20} className={`mr-2`}/>}
              />
            </div>
          </div>

          <HospitalDetails data={organization ? organization : null}/>

          <div className={`grid grid-cols-6 gap-4 my-10`}>

            <div className={`col-span-4 max-w-md`}>
              <Tab.Group>
                <Tab.List className={`flex space-x-1 rounded-xl bg-white p-1`}>
                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${activeTabs === 'ALL' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                    onClick={() => onUpdateActiveTab('ALL')}
                  >
                    All
                  </Tab>

                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${activeTabs === 'ACTIVE' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                    onClick={() => onUpdateActiveTab('ACTIVE')}
                  >
                    Active
                  </Tab>

                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${activeTabs === 'PENDING' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                    onClick={() => onUpdateActiveTab('PENDING')}
                  >
                    Pending
                  </Tab>

                  <Tab
                    className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${activeTabs === 'DEACTIVATE' ? 'bg-[#EEF7FF] shadow' : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'}`}
                    onClick={() => onUpdateActiveTab('DEACTIVATE')}
                  >
                    Deactivated
                  </Tab>

                </Tab.List>
              </Tab.Group>
            </div>

            <div className={`w-full`}>
              <button
                type="button"
                onClick={() => console.log('Add New Site') }
                className="w-full flex flex-row items-center text-white bg-blue-700 hover:bg-blue-800 font-medium
              rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <HiPlusSm size={20} className={`mr-2`}/>Add new Site
              </button>
            </div>
          </div>

        </div>
      </SuperadminBaseTemplate>
    </Fragment>
  )
}

export default OrganizationSite;