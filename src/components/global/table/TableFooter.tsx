import { Fragment } from "react"
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

const TableFooter = () => {
  return (
    <Fragment>
      <footer className="flex w-full flex-col items-center justify-between p-6 text-custom-primary-800 dark:text-white lg:flex-row px-7 py-5">
        <p className="inline-block font-velasans-gx text-sm font-medium lg:flex-nowrap">
          <b className="font-extrabold">Showing results 1 - 0</b> of 0
        </p>

        <div className="mt-3 flex flex-col items-center gap-6 divide-ds-gray-300 dark:divide-ds-dark-400 lg:mt-0 lg:flex-row lg:divide-x">
          <p className="flex flex-col items-center gap-2 font-velasans-gx text-sm font-medium text-custom-description dark:text-ds-dark-300 sm:flex-row lg:whitespace-nowrap">
            The page you are on
            <input
              type="number"
              className="flexh-8 w-12 rounded-md border border-ds-gray-300 px-3 py-1 text-end font-extrabold text-custom-primary-800 dark:border-ds-dark-400 dark:text-white"
              value="1"
            />
            of 0
          </p>
          <span className="flex w-max flex-row items-center gap-1 lg:pl-6">
            <button
              className="grid h-8 w-8 place-items-center rounded-md border border-ds-gray-300 px-2 font-extrabold text-custom-primary-800 dark:border-ds-dark-400 dark:text-white">
              <IoMdArrowDropleft size={20}/>
            </button>

            <button className="grid h-8 w-8 place-items-center rounded-md border border-ds-gray-300 px-2 font-extrabold text-custom-primary-800 dark:border-ds-dark-400 dark:text-white">
              <IoMdArrowDropright size={20}/>
            </button>
          </span>
        </div>
      </footer>
    </Fragment>
  )
}

export default TableFooter
