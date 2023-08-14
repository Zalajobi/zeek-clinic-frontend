import { useMemo } from 'react';
import { Tab } from '@headlessui/react';
import { TiExportOutline } from 'react-icons/ti';
import { CgArrowsH } from 'react-icons/cg';
import { FaCalendarAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';

import SuperadminBaseTemplate from '../../components/layout/superadmin/SuperadminBaseTemplate';
import Text from '../../components/global/dialog/Text';
import { useHospitalOrganisation } from '../../hooks/superadmin/useHospitalOrganisation';
import Table from '../../components/global/table/Table';
import TableHeaderDropdown from '../../components/global/table/TableHeaderDropdown';
import {
  SuperadminHospitalDataColumn,
  SuperadminHospitalDataRow,
} from '../../components/tables/SuperadminTable';
import TableFooter from '../../components/global/table/TableFooter';
import CreateHospitalModal from '../../components/modals/CreateHospitalModal';
import {
  DateInput,
  SelectInput,
} from '../../components/global/formInput/CustomInput';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../../components/global/CustomButton';
import { BasicSearchInput } from '../../components/global/formInput/SearchInputs';
import { AdminTable } from '../../components/global/table/AdminTable';

const HospitalOrganizations = () => {
  const itemsPerPage = ['All', 10, 20, 50, 100];

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
    onUpdateShowCreateHospitalModal,
    onUpdateSelectedRow,
    onUpdateSelectAllHospitals,
  } = useHospitalOrganisation();

  // const data = useMemo(() => hospitalData ?? [], [hospitalData]);

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

          <ModalButtonOutlineLunch
            iconBefore={
              <HiPlusSm
                size={20}
                className={`mr-2`}
              />
            }
            targetModalId={`createOrg`}
            text={`Add New Organization`}
            type={`primary`}
            className={`h-[38px] w-full py-6`}
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

        <AdminTable
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

      <CreateHospitalModal />
    </SuperadminBaseTemplate>
  );
};

export default HospitalOrganizations;
