import { BasicSearchInput } from '../formInput/SearchInputs';
import TableHeaderDropdown from './TableHeaderDropdown';
import { DateInput, SelectInput } from '../formInput/CustomInput';
import { FaCalendarAlt } from 'react-icons/fa';
import { CgArrowsH } from 'react-icons/cg';
import Table from './Table';
import TableFooter from './TableFooter';
import { ChangeEvent, Fragment } from 'react';

interface AdminTableProps {
  query: string;
  onUpdateQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  perPage: 'All' | 10 | 20 | 50 | 100;
  onUpdatePerPageItem: (event: ChangeEvent<HTMLInputElement>) => void;
  fromDate: Date;
  onUpdateFromDate: (date: Date) => void;
  toDate: Date;
  onUpdateToDate: (date: Date) => void;
  containerClassName?: string;
}

export const AdminTable = ({
  query,
  onUpdateQuery,
  perPage = 10,
  onUpdatePerPageItem,
  fromDate,
  onUpdateFromDate,
  toDate,
  onUpdateToDate,
}: AdminTableProps) => {
  const itemsPerPage = ['All', 10, 20, 50, 100];

  return (
    <Fragment>
      <div
        className={`relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border
      border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700 ${query}`}>
        <div className="w-full relative my-4 sm:rounded-lg px-10">
          <div className="flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-3/4">
              <BasicSearchInput
                id={`searchOrg`}
                placeholder={`Search...`}
                value={query}
                change={onUpdateQuery}
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
                  change={(e) => onUpdateFromDate(new Date(e.target.value))}
                  value={fromDate as Date}
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
    </Fragment>
  );
};
