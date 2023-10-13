import { useMemo, useState } from 'react';
import { Tab } from '@headlessui/react';
import { TiExportOutline } from 'react-icons/ti';
import { HiPlusSm } from 'react-icons/hi';

import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import Text from '@components/global/dialog/Text';
import { useHospitalOrganisation } from '@hooks/superadmin/useHospitalOrganisation';
import {
  SuperadminHospitalDataColumn,
  SuperadminHospitalDataRow,
} from '@components/tables/row-col-mapping/SuperadminTable';
import CreateHospitalModal from '@components/modals/CreateHospitalModal';
import { BasicOutlineButton } from '@components/global/CustomButton';
import { ApplicationTable } from '@components/global/table/ApplicationTable';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

const HospitalOrganizations = () => {
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
    selectAllHospitals,
    hospitalFilterFrom,
    hospitalFilterTo,

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
    onUpdateSelectedRow,
    onUpdateSelectAllHospitals,
  } = useHospitalOrganisation();

  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(!open);

  const data = useMemo(
    () =>
      SuperadminHospitalDataRow(
        hospitalData,
        onUpdateSelectedRow,
        selectAllHospitals
      ) ?? [],
    [hospitalData, currentPage]
  );

  const columns = useMemo(
    () =>
      SuperadminHospitalDataColumn(
        onClickSortParameters,
        onUpdateSelectAllHospitals
      ),
    [hospitalData, currentPage]
  );

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
                  ${
                    hospitalTabs === 'ALL'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => onUpdateActiveTab('ALL')}>
                  All
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    hospitalTabs === 'ACTIVE'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => onUpdateActiveTab('ACTIVE')}>
                  Active
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    hospitalTabs === 'ARCHIVED'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => onUpdateActiveTab('ARCHIVED')}>
                  Archived
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    hospitalTabs === 'PENDING'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => onUpdateActiveTab('PENDING')}>
                  Pending
                </Tab>

                <Tab
                  className={`w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black ring-[#EEF7FF] focus:outline-none focus:ring-2
                  ${
                    hospitalTabs === 'DEACTIVATED'
                      ? 'bg-[#EEF7FF] shadow'
                      : 'text-black hover:bg-[#bfdbfe] hover:text-[#27272a]'
                  }`}
                  onClick={() => onUpdateActiveTab('DEACTIVATED')}>
                  Deactivated
                </Tab>
              </Tab.List>
            </Tab.Group>
          </div>

          <BasicOutlineButton
            iconBefore={
              <HiPlusSm
                size={20}
                className={`mr-2`}
              />
            }
            text={`Add New Organization`}
            type={`primary`}
            className={`h-[38px] w-full py-6`}
            click={handleOpenModal}
          />

          <BasicOutlineButton
            text={`Export Organization`}
            type={'primary'}
            className={`h-[38px] w-full py-6`}
            iconBefore={
              <TiExportOutline
                size={20}
                className={`mr-2`}
              />
            }
          />
        </div>

        <ApplicationTable
          tableColumns={columns}
          tableData={data}
          query={searchOrganisation}
          onUpdateQuery={(e) => onUpdateSearchOrganisation(e.target.value)}
          perPage={perPage}
          onUpdatePerPageItem={onUpdatePerPageItem}
          filterFromDate={hospitalFilterFrom as Date}
          onUpdateFilterFromDate={onUpdateSelectFrom}
          filterToDate={hospitalFilterTo as Date}
          onUpdateFilterToDate={onUpdateSelectTo}
          noOfPages={noOfPages}
          totalCount={totalHospitals}
          resultFrom={resultFrom}
          resultTo={resultTo}
          onClickNext={onClickNext}
          onClickPrevious={onClickPrevious}
          currentPage={currentPage}
          onEnterPageNumber={onEnterPageNumber}
          disableCountryFilter={true}
          countries={allHospitalCountries}
          onUpdateCountryFilter={filterByCountry}
        />
      </div>

      <CreateHospitalModal
        open={open}
        handler={handleOpenModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default HospitalOrganizations;
