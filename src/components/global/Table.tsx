import { useTable } from 'react-table'
import { Fragment } from "react"
import { TbArrowsMoveVertical } from 'react-icons/tb'

interface TableProps {
  columns: any[]
  data: any[]
}

const Table = ({columns, data}:TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <Fragment>

      <div className="relative overflow-x-auto sm:rounded-lg">
        <table className="w-full border-none" {...getTableProps()}>
          <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className={`border-y bg-ds-gray-100 dark:bg-ds-gray-900`}>
              <th colSpan={1} scope="col" className="font-inter text-xs font-medium text-custom-description">
                <div className="flex items-center gap-3 whitespace-nowrap px-6 py-3">
                  <div
                    className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium text-brand-description-text outline-none">
                    <input
                      className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
                      ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
                      focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
                      ring-custom-primary-400"
                      type="checkbox"
                    />
                  </div>
                </div>
              </th>

              {headerGroup.headers.map(column => (
                <th
                  colSpan={1}
                  {...column.getHeaderProps()}
                  scope="col"
                  className="font-inter text-xs font-medium text-custom-description"
                >
                  <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
                    {column.render('Header')}
                    <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By ${column.render('Header')}`)}/>
                  </div>
                </th>
              ))}
            </tr>
          ))}
          </thead>

          <tbody {...getTableBodyProps()} className={`bg-white`}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  <th colSpan={1} scope="col" className="font-inter text-xs font-medium text-custom-description">
                    <div className="flex items-center gap-3 whitespace-nowrap px-6 py-3">
                      <div
                        className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium text-brand-description-text outline-none">
                        <input
                          className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
                      ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
                      focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
                      ring-custom-primary-400"
                          type="checkbox"
                        />
                      </div>
                    </div>
                  </th>

                  {row.cells.map(cell => {
                    return (
                      <td className="whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800">
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Table