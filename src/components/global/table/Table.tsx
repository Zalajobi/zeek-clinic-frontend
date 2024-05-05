import { useTable } from 'react-table';
import { Fragment } from 'react';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import { CustomTabSelector, DropdownMenu } from '@components/global/MenuTabs';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HiChevronUpDown, HiPencil } from 'react-icons/hi2';
import Status from '@components/global/Status';
import { Link } from 'react-router-dom';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

interface TableProps {
  columns: any[];
  data: any[];
  containerClass?: string;
}

const Table = ({ columns, data, containerClass = '' }: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Fragment>
      <div className={`relative overflow-x-auto ${containerClass}`}>
        <Card className={`h-full w-full overflow-scroll ${containerClass}`}>
          <CardBody className={`overflow-scroll px-0`}>
            <table
              className={`w-full min-w-max table-auto text-left border-none`}
              {...getTableProps()}>
              <thead className={`sticky bg-gray-100`}>
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className={`border-y bg-ds-gray-100 dark:bg-ds-gray-900`}>
                    {headerGroup.headers.map((column) => (
                      <th
                        colSpan={1}
                        scope="col"
                        className="font-inter text-xs font-medium text-description first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)>*]:pl-4">
                        <div className="flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none">
                          {column.render('Header')}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody
                {...getTableBodyProps()}
                className={`bg-white`}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[200px] overflow-hidden truncate`}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
};

interface BasicTableProps {
  cardHeadFloat?: boolean;
  cardHeadShadow?: boolean;
  onSelectTab: (value: any) => void;
  tabItems: {
    label: string;
    value: string;
    icon?: any;
  }[];
  perPageValue: string | number;
  perPageMenuItems: any[];
  perPageChange: (item: any) => void;
  columns: any[];
  data: any[];
  url: string;
  noOfPages: number;
  total: number;
  from: number;
  to: number;
  currentPage: number;
  onNext: (value: number) => void;
  onPrevious: (value: number) => void;
  deleteRow?: (value: string) => void;
  editRow?: (value: string) => void;
}

export const BasicTable = ({
  cardHeadFloat = false,
  cardHeadShadow = false,
  onSelectTab,
  tabItems,
  perPageValue,
  perPageMenuItems,
  perPageChange,
  columns,
  data,
  url,
  noOfPages,
  total,
  from,
  to,
  currentPage,
  onNext,
  onPrevious,
  deleteRow,
  editRow,
}: BasicTableProps) => {
  const keysDropDown = columns.map((item) => {
    if (item.key !== 'action') {
      return item.key;
    }
  });

  return (
    <Card className={`w-full h-auto`}>
      <CardHeader
        floated={cardHeadFloat}
        shadow={cardHeadShadow}
        className={`rounded-none`}>
        <div
          className={`flex flex-col items-center justify-between gap-4 md:flex-row`}>
          <div className={`flex gap-4 items-center justify-center`}>
            <CustomTabSelector
              onClick={onSelectTab}
              tabItems={tabItems}
            />

            <DropdownMenu
              value={perPageValue}
              menuItems={perPageMenuItems}
              change={perPageChange}
              buttonClass={`border-gray-100 w-44 h-[42px]`}
            />
          </div>

          <div className="flex flex-col gap-4 items-center md:flex-row">
            {perPageValue && perPageMenuItems && perPageChange && (
              <DropdownMenu
                value={perPageValue}
                menuItems={keysDropDown}
                change={perPageChange}
                buttonClass={`border-gray-100 w-44 h-[42px] w-full md:w-32`}
              />
            )}

            <div className={`w-full md:w-72`}>
              <Input
                label="Search..."
                icon={<FaMagnifyingGlass className="h-5 w-5" />}
                className={`border-t-[aliceblue]`}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className={`overflow-scroll px-0`}>
        <table className={`mt-4 w-full min-w-max table-auto text-left`}>
          <thead>
            <tr>
              {columns.map((item, index) => (
                <th
                  key={item.key}
                  className={`cursor-pointer border-y bg-ds-gray-100 p-4 transition-colors hover:bg-blue-gray-50`}>
                  <Typography
                    variant={'small'}
                    color={'blue-gray'}
                    className={
                      'flex items-center font-inter text-xs font-bold text-description justify-between gap-2 leading-none opacity-70'
                    }>
                    {item.value}{' '}
                    {item.sortable && (
                      <HiChevronUpDown
                        strokeWidth={2}
                        className={'h-4 w-4'}
                      />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className={`border-y`}>
                {columns.map((column, index) => (
                  <>
                    {/*For Status*/}
                    {column.key === 'status' ? (
                      <td
                        key={index}
                        className={`p-4 border-y text-black font-inter text-sm font-medium mx-1`}>
                        <div className="w-max">
                          <Status status={item[column.key]} />
                        </div>
                      </td>
                    ) : // Title or Name
                    column.key === 'name' || column.key === 'title' ? (
                      <td key={index}>
                        <Link
                          to={`/${url}/${item?.id}`}
                          className={`text-black decoration-0 pointer-cursor`}>
                          <div
                            className={`flex items-center gap-3 max-w-[300px] overflow-hidden`}>
                            <Avatar
                              className={`border-gray-300 border ml-1`}
                              src={item?.logo ?? item?.avatar}
                              alt={'Logo'}
                              size={'sm'}
                            />
                            <div className={`flex flex-col w-full`}>
                              <Typography
                                variant={'small'}
                                color={'black'}
                                className={
                                  'font-inter font-bold truncate w-full'
                                }>
                                {item[column.key]}
                              </Typography>

                              <Typography
                                variant={'small'}
                                color={'blue-gray'}
                                className={
                                  'font-normal opacity-70 truncate w-full'
                                }>
                                {item?.email}
                              </Typography>
                            </div>
                          </div>
                        </Link>
                      </td>
                    ) : // Send Email
                    column.key === 'email' ? (
                      <td
                        key={index}
                        className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[200px] overflow-hidden truncate mx-2`}>
                        <a
                          target={`_blank`}
                          href={`mailto:${item[column.key]}`}
                          className={`hover:cursor-pointer hover:text-gray-400`}>
                          {item[column.key]}
                        </a>
                      </td>
                    ) : column.key === 'action' ? (
                      <td key={index}>
                        <Tooltip content="Action">
                          <Menu
                            animate={{
                              mount: { y: 0 },
                              unmount: { y: 25 },
                            }}
                            allowHover={false}>
                            <MenuHandler>
                              <IconButton variant="text">
                                <BsThreeDotsVertical className="h-4 w-4" />
                              </IconButton>
                            </MenuHandler>

                            <MenuList className={`min-w-[150px] p-2`}>
                              {editRow && (
                                <MenuItem
                                  onClick={() => editRow(item.id)}
                                  className={`hover:bg-gray-100 py-1 px-0 text-sm font-bold h-10 flex items-center text-blue-900`}>
                                  <IconButton
                                    variant="text"
                                    className={
                                      'hover:bg-transparent active:bg-transparent'
                                    }>
                                    <HiPencil
                                      className="h-4 w-4"
                                      color={`blue`}
                                      size={15}
                                    />
                                  </IconButton>{' '}
                                  Edit
                                </MenuItem>
                              )}

                              {deleteRow && (
                                <MenuItem
                                  onClick={() => deleteRow(item.id)}
                                  className={`hover:bg-gray-100 py-1 px-0 text-sm font-bold h-10 flex items-center text-red-900`}>
                                  <IconButton
                                    variant="text"
                                    className={
                                      'hover:bg-transparent active:bg-transparent'
                                    }>
                                    <MdDelete
                                      className="h-4 w-4"
                                      color={`red`}
                                      size={15}
                                    />
                                  </IconButton>{' '}
                                  Delete
                                </MenuItem>
                              )}
                            </MenuList>
                          </Menu>
                        </Tooltip>
                      </td>
                    ) : (
                      <td
                        key={index}
                        className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[200px] overflow-hidden truncate mx-2`}>
                        {item[column.key]}
                      </td>
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>

      <CardFooter
        className={`flex items-center justify-between border-t border-blue-gray-50 p-4`}>
        <div className="flex w-full flex-col items-center justify-between p-6 text-custom-primary-800 dark:text-white lg:flex-row px-7 py-5">
          <p className="inline-block font-velasans-gx text-sm font-medium lg:flex-nowrap">
            <b className="font-extrabold">
              Showing results from {from} - {to}
            </b>{' '}
            of {total}
          </p>

          <div className="mt-3 flex flex-col items-center gap-6 divide-ds-gray-300 dark:divide-ds-dark-400 lg:mt-0 lg:flex-row lg:divide-x">
            <div className="flex flex-col items-center gap-2 font-velasans-gx text-sm font-medium text-custom-description dark:text-ds-dark-300 sm:flex-row lg:whitespace-nowrap">
              <div className="flex items-center gap-8">
                <Button
                  size="sm"
                  variant="outlined"
                  onClick={() => onPrevious(currentPage - 1)}
                  disabled={currentPage === 0}>
                  <IoMdArrowDropleft size={20} />
                </Button>

                <Typography
                  color="gray"
                  className="font-normal">
                  Page{' '}
                  <strong className="text-gray-900">{currentPage + 1}</strong>{' '}
                  of <strong className="text-gray-900">{noOfPages}</strong>
                </Typography>

                <Button
                  size="sm"
                  variant="outlined"
                  onClick={() => onNext(currentPage + 1)}
                  disabled={currentPage + 1 === noOfPages}>
                  <IoMdArrowDropright size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Table;
