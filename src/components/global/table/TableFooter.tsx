import { IconButton, Typography } from '@material-tailwind/react';
import { Fragment } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

interface TableFooterProps {
  noOfPages: number;
  total: number;
  from: number;
  to: number;
  currentPage: number;
  onNext: (value: number) => void;
  onPrevious: (value: number) => void;
  enterPageNumber: (value: number | string) => void;
}

const TableFooter = ({
  noOfPages,
  total,
  from,
  currentPage,
  onNext,
  to,
  onPrevious,
}: TableFooterProps) => {
  return (
    <Fragment>
      <footer className="flex w-full flex-col items-center justify-between p-6 text-custom-primary-800 dark:text-white lg:flex-row px-7 py-5">
        <p className="inline-block font-velasans-gx text-sm font-medium lg:flex-nowrap">
          <b className="font-extrabold">
            Showing results from {from} - {to}
          </b>{' '}
          of {total}
        </p>

        <div className="mt-3 flex flex-col items-center gap-6 divide-ds-gray-300 dark:divide-ds-dark-400 lg:mt-0 lg:flex-row lg:divide-x">
          <div className="flex flex-col items-center gap-2 font-velasans-gx text-sm font-medium text-custom-description dark:text-ds-dark-300 sm:flex-row lg:whitespace-nowrap">
            <div className="flex items-center gap-8">
              <IconButton
                size="sm"
                variant="outlined"
                onClick={() => onPrevious(currentPage - 1)}
                disabled={currentPage === 0}>
                <IoMdArrowDropleft size={20} />
              </IconButton>

              <Typography
                color="gray"
                className="font-normal">
                Page{' '}
                <strong className="text-gray-900">{currentPage + 1}</strong> of{' '}
                <strong className="text-gray-900">{noOfPages}</strong>
              </Typography>

              <IconButton
                size="sm"
                variant="outlined"
                onClick={() => onNext(currentPage + 1)}
                disabled={currentPage + 1 === noOfPages}>
                <IoMdArrowDropright size={20} />
              </IconButton>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default TableFooter;
