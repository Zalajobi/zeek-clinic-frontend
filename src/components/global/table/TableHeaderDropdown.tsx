import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { IoMdArrowDropdown } from 'react-icons/io';

interface TableHeaderDropdownProps {
  value: string | number;
  items: any[];
  change: (item: any) => void;
}

const TableHeaderDropdown = ({
  value,
  change,
  items,
}: TableHeaderDropdownProps) => {
  return (
    <Fragment>
      <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
        <Menu
          as="div"
          className="relative inline-block text-left">
          <div>
            <Menu.Button
              className="flex items-center justify-center w-full p-2 text-sm font-medium
                        text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none
                        hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200
                        dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600
                        dark:hover:text-white dark:hover:bg-gray-700 w-[106px]">
              <IoMdArrowDropdown
                size={20}
                className={`mr-2 ml-1`}
              />{' '}
              <span className={`mr-1`}>{value}</span>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items
              className="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100
                        rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-w-[106px]">
              <div className="px-1 py-1 ">
                {items.map((item) => {
                  return (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-[#EEF7FF] text-black' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => change(item)}>
                          {item}
                        </button>
                      )}
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </Fragment>
  );
};

export default TableHeaderDropdown;
