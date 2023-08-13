import { useMemo } from 'react';
import { Tab } from '@headlessui/react';
import { TiExportOutline } from 'react-icons/ti';
import { CgArrowsH } from 'react-icons/cg';
import { FaCalendarAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';

import SuperadminBaseTemplate from '../../layout/superadmin/SuperadminBaseTemplate';
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

        <div
          className="relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border
         border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700">
          <div className="w-full relative my-4 sm:rounded-lg px-10">
            <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full md:w-3/4">
                <BasicSearchInput
                  id={`searchOrg`}
                  placeholder={`Search...`}
                  value={searchOrganisation}
                  change={(e) => onUpdateSearchOrganisation(e.target.value)}
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

              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <div className="flex items-center w-full space-x-3 md:w-auto">
                  <DateInput
                    label={`From`}
                    placeholder={`DD/MM/YYYY`}
                    className={`my-3`}
                    change={(e) => onUpdateSelectFrom(new Date(e.target.value))}
                    value={hospitalFilterFrom as Date}
                    id={`from`}
                    icon={<FaCalendarAlt size={20} />}
                  />

                  <CgArrowsH size={40} />

                  <DateInput
                    label={`To`}
                    placeholder={`DD/MM/YYYY`}
                    className={`my-3`}
                    change={(e) => onUpdateSelectTo(new Date(e.target.value))}
                    value={hospitalFilterTo as Date}
                    id={`to`}
                    icon={<FaCalendarAlt size={20} />}
                  />
                </div>
              </div>

              <div>
                <SelectInput
                  label={`Country`}
                  options={allHospitalCountries}
                  className={`w-full min-h-[59px]`}
                  id={'country'}
                  enableFilter={true}
                  change={(e) => filterByCountry(e.target.value)}
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

      <CreateHospitalModal />
    </SuperadminBaseTemplate>
  );
};

export default HospitalOrganizations;
