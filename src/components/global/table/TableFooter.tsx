import { Fragment } from "react"
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

interface TableFooterProps {
  noOfPages: number
  total: number
  from: number
  to: number
  currentPage: number
  onNext: (value:number) => void
  onPrevious: (value:number) => void
}

const TableFooter = ({noOfPages, total, from, currentPage, onNext, to, onPrevious}: TableFooterProps) => {
  return (
    <Fragment>
      <footer className="flex w-full flex-col items-center justify-between p-6 text-custom-primary-800 dark:text-white lg:flex-row px-7 py-5">
        <p className="inline-block font-velasans-gx text-sm font-medium lg:flex-nowrap">
          <b className="font-extrabold">Showing results from {from} - {to}</b> of {total}
        </p>

        <div className="mt-3 flex flex-col items-center gap-6 divide-ds-gray-300 dark:divide-ds-dark-400 lg:mt-0 lg:flex-row lg:divide-x">
          <p className="flex flex-col items-center gap-2 font-velasans-gx text-sm font-medium text-custom-description dark:text-ds-dark-300 sm:flex-row lg:whitespace-nowrap">
            The page you are on
            <input
              type="number"
              className="flexh-8 w-12 rounded-md border border-ds-gray-300 px-3 py-1 text-end font-extrabold text-custom-primary-800 dark:border-ds-dark-400 dark:text-white"
              value={currentPage + 1}
            />
            of {noOfPages}
          </p>
          <span className="flex w-max flex-row items-center gap-1 lg:pl-6">
            <button
              className="grid h-8 w-8 place-items-center rounded-md border border-ds-gray-300 px-2 font-extrabold text-custom-primary-800 dark:border-ds-dark-400 dark:text-white" onClick={() => onPrevious(currentPage - 1)}>
              <IoMdArrowDropleft size={20}/>
            </button>

            <button className="grid h-8 w-8 place-items-center rounded-md border border-ds-gray-300 px-2 font-extrabold text-custom-primary-800 dark:border-ds-dark-400 dark:text-white" onClick={() => onNext(currentPage + 1)}>
              <IoMdArrowDropright size={20}/>
            </button>
          </span>
        </div>
      </footer>
    </Fragment>
  )
}

export default TableFooter
