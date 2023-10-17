import { ChangeEvent, Fragment } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { CgArrowsH } from 'react-icons/cg';
import { MdArrowDropDown } from 'react-icons/md';
import { BasicSearchInput } from '@components/global/formInput/SearchInputs';
import {
  CustomDropDownMenuSelect,
  DateInput,
  SelectInput,
} from '@components/global/formInput/CustomInput';
import Table from '@components/global/table/Table';
import TableFooter from '@components/global/table/TableFooter';
import { SelectInputFieldProps } from '@typeSpec/common';

interface AdminTableProps {
  tableColumns: any;
  tableData: any;
  query: string;
  onUpdateQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  perPage: 'All' | 10 | 20 | 50 | 100;
  onUpdatePerPageItem: (value: 'All' | 10 | 20 | 50 | 100) => void;
  noOfPages: number;
  totalCount: number;
  resultFrom: number;
  resultTo: number;
  onClickNext: (value: number) => void;
  onClickPrevious: (value: number) => void;
  currentPage: number;
  onEnterPageNumber: (value: number | string) => void;
  containerClassName?: string;
  disableCountryFilter?: boolean;
  countries?: SelectInputFieldProps[];
  onUpdateCountryFilter?: (event: string) => void;
  filterFromDate?: Date;
  onUpdateFilterFromDate?: (date: Date) => void;
  filterToDate?: Date;
  onUpdateFilterToDate?: (date: Date) => void;
}

export const ApplicationTable = ({
  tableColumns,
  tableData,
  query,
  onUpdateQuery,
  perPage = 10,
  onUpdatePerPageItem,
  filterFromDate,
  onUpdateFilterFromDate,
  filterToDate,
  onUpdateFilterToDate,
  noOfPages,
  totalCount,
  resultFrom,
  resultTo,
  onClickNext,
  onClickPrevious,
  currentPage,
  onEnterPageNumber,
  containerClassName = '',
  disableCountryFilter = false,
  countries,
  onUpdateCountryFilter,
}: AdminTableProps) => {
  const itemsPerPage = ['All', 10, 20, 50, 100];

  return (
    <Fragment>
      <div
        className={`relative overflow-x-auto overflow-y-auto max-h-screen shadow-lg flex flex-col rounded-lg border
      border-ds-gray-300 bg-white dark:border-ds-dark-400 dark:bg-ds-dark-700 ${containerClassName}`}>
        <div className="w-full relative my-4 sm:rounded-lg px-10">
          <div className="flex flex-col items-baseline space-y-3 md:flex-row md:space-y-0 md:space-x-4 h-[90px]">
            <div className="w-full md:w-3/4">
              <BasicSearchInput
                id={`searchOrg`}
                placeholder={` `}
                value={query}
                change={onUpdateQuery}
                inputClass={`h-[58px]`}
                className={`!mb-0`}
              />
            </div>

            <CustomDropDownMenuSelect
              items={itemsPerPage}
              value={perPage}
              onSelect={onUpdatePerPageItem}
              className={`bg-white border border-gray-300 text-black w-[80px] font-medium rounded-lg text-base h-[58px]`}
              prefixIcon={
                <MdArrowDropDown
                  className={`text-black`}
                  size={30}
                />
              }
            />

            {onUpdateFilterFromDate && onUpdateFilterToDate && (
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <div className="flex items-center justify-center w-full space-x-3 md:w-auto">
                  <DateInput
                    label={`From`}
                    placeholder={`DD/MM/YYYY`}
                    change={(e) =>
                      onUpdateFilterFromDate(new Date(e.target.value))
                    }
                    value={filterFromDate as Date}
                    id={`from`}
                    icon={<FaCalendarAlt size={20} />}
                  />

                  <CgArrowsH size={40} />

                  <DateInput
                    label={`To`}
                    placeholder={`DD/MM/YYYY`}
                    change={(e) =>
                      onUpdateFilterToDate(new Date(e.target.value))
                    }
                    value={filterToDate as Date}
                    id={`to`}
                    icon={<FaCalendarAlt size={20} />}
                  />
                </div>
              </div>
            )}

            {disableCountryFilter && (
              <div>
                <SelectInput
                  label={`Country`}
                  options={countries ?? []}
                  className={`w-full min-h-[59px]`}
                  id={'country'}
                  change={(e) =>
                    onUpdateCountryFilter
                      ? onUpdateCountryFilter(e.target.value as string)
                      : {}
                  }
                />
              </div>
            )}
          </div>
        </div>

        <Table
          columns={tableColumns}
          data={tableData}
        />

        <TableFooter
          noOfPages={noOfPages}
          total={totalCount}
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
