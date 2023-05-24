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
              {headerGroup.headers.map(column => (
                <>
                  {column.render('Header')}
                </>
              ))}
            </tr>
          ))}
          </thead>

          <tbody {...getTableBodyProps()} className={`bg-white`}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <>
                        {cell.render('Cell')}
                      </>
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