import {TbArrowsMoveVertical} from "react-icons/tb";
import moment from "moment";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import {GetHospitalResponseData, HospitalRowData} from "../../types/superadmin";

export const SuperadminHospitalColumn = () => {
  const columnItem = [

    {
      Header: <input
        className="!grid !h-6 !w-6 !flex-shrink-0 !place-items-center !rounded-md border !p-1 !outline-none
        !ring-offset-0 !transition-[background-color,_border-color,_box-shadow] !focus:ring-2
        !focus:ring-offset-2 !group-hover:ring-2 !group-hover:ring-offset-2 !border-custom-gray-100 !bg-white
        !ring-custom-primary-400"
          type="checkbox"
        />,
      accessor: 'checkbox',
    },

    {
      Header: <Fragment>
        Name
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By name`)}/>
          </span>
      </Fragment>,
      accessor: 'name',
    },

    {
      Header: <Fragment>
        Email
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Email`)}/>
          </span>
      </Fragment>,
      accessor: 'email',
    },

    {
      Header: <Fragment>
        Sites
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Sites`)}/>
          </span>
      </Fragment>,
      accessor: 'site_count',
    },

    {
      Header: <Fragment>
        Phone
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Phone`)}/>
          </span>
      </Fragment>,
      accessor: 'phone',
    },

    {
      Header: <Fragment>
        Address
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Address`)}/>
          </span>
      </Fragment>,
      accessor: 'address',
    },

    {
      Header: <Fragment>
        Email
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By City`)}/>
          </span>
      </Fragment>,
      accessor: 'city',
    },

    {
      Header: <Fragment>
        State
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By State`)}/>
          </span>
      </Fragment>,
      accessor: 'state',
    },

    {
      Header: <Fragment>
        Country
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Country`)}/>
          </span>
      </Fragment>,
      accessor: 'country',
    },

    {
      Header: <Fragment>
        Joined On
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By created_at`)}/>
          </span>
      </Fragment>,
      accessor: 'created_at',
    },

    {
      Header: <Fragment>
        Action
        <span className="flex shrink-0 flex-col gap-1">
            <TbArrowsMoveVertical size={15} onClick={() => console.log(`Sort By Action`)}/>
          </span>
      </Fragment>,
      accessor: 'action',
    },
  ]

  return columnItem
}

export const SuperadminHospitalRow = (data:GetHospitalResponseData[]) => {
  const rowItems:HospitalRowData[] = []

  data?.map((item:GetHospitalResponseData, idx:number) => {
    rowItems.push({
      checkbox: <th colSpan={1} scope="col" className="font-inter text-xs font-medium">
        <div className="flex items-center gap-3 whitespace-nowrap">
          <div
            className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
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

      name: <Link  to={`/superadmin/hospital/${item?.id}`} className={`text-black hover:text-gray-500 decoration-0`}>
        <b className={`font-extrabold`}>{item?.name}</b>
      </Link>,

      email: <>
        {item?.email}
      </>,

      site_count: <>
        {item?.site_count}
      </>,

      phone: <>
        {item?.phone}
      </>,

      address: <>
        {item?.address}
      </>,

      city: <>
        {item?.city}
      </>,

      state: <>
        {item?.state}
      </>,

      country: <>
        {item?.country}
      </>,

      created_at: <>
        {moment(item?.created_at).format('MMM DD. YYYY')}
      </>,

      action: <button>{item?.id}</button>
    })
  })

  return rowItems
}