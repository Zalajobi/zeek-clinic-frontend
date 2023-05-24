import {GetHospitalResponseData, HospitalRowData} from "../../types/superadmin";
import {TbArrowsMoveVertical} from "react-icons/tb";
// import { ColumnDef } from "@tanstack/react-table"

export const SuperadminHospitalColumn = () => {
  const columnItem = [

    {
      Header: <th colSpan={1} scope="col" className="font-inter text-xs font-medium text-custom-description">
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
      </th>,
      accessor: 'checkbox', // accessor is the "key" in the data
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Name
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By name`)}/>
        </div>
      </th>,
      accessor: 'name', // accessor is the "key" in the data
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Email
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Email`)}/>
        </div>
      </th>,
      accessor: 'email',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Sites
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Sites`)}/>
        </div>
      </th>,
      accessor: 'site_count',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Phone
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Phone`)}/>
        </div>
      </th>,
      accessor: 'phone',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Address
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Address`)}/>
        </div>
      </th>,
      accessor: 'address',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          City
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By City`)}/>
        </div>
      </th>,
      accessor: 'city',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          State
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By State`)}/>
        </div>
      </th>,
      accessor: 'state',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Country
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Country`)}/>
        </div>
      </th>,
      accessor: 'country',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Joined On
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By created_at`)}/>
        </div>
      </th>,
      accessor: 'created_at',
    },

    {
      Header: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          Action
          <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Action`)}/>
        </div>
      </th>,
      accessor: 'action',
    },
  ]

  return columnItem
}

export const SuperadminHospitalRow = (data:GetHospitalResponseData[]) => {
  const rowItems:HospitalRowData[] = []

  data?.map((item:GetHospitalResponseData, idx:number) => {
    rowItems.push({
      checkbox: <th colSpan={1} scope="col" className="font-inter text-xs font-medium text-custom-description">
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
      </th>,
      name: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.name}
        </div>
      </th>,
      email: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.email}
        </div>
      </th>,
      site_count: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.site_count}
        </div>
      </th>,
      phone: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.phone}
        </div>
      </th>,
      address: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.address}
        </div>
      </th>,
      city: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.city}
        </div>
      </th>,
      state: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.state}
        </div>
      </th>,
      country: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.country}
        </div>
      </th>,
      created_at: <th
        colSpan={1}
        scope="col"
        className="font-inter text-xs font-medium text-custom-description"
      >
        <div className={`flex items-center gap-3 whitespace-nowrap px-6 py-3 cursor-pointer select-none`}>
          {item?.created_at}
        </div>
      </th>,
      action: <button>{item?.id}</button>
    })
  })

  return rowItems
}