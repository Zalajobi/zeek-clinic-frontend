import { useTable } from 'react-table';
import { Fragment } from 'react';

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
        <table
          className="w-full border-none"
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
      </div>
    </Fragment>
  );
};

export default Table;
