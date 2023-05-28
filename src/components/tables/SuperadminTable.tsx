import {TbArrowsMoveVertical} from "react-icons/tb";
import moment from "moment";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import {GetHospitalResponseData, HospitalRowData} from "../../types/superadmin";
import Status from "../global/Status";

// const sortHospitalColumnByHeaders: 'name' | 'email' | 'created_at' | 'country' | 'state' | 'phone' | 'site_count' | 'address' | 'city' = 'created_at'

export const SuperadminHospitalColumn = (onClickSortParameters: (value:('name' | 'email' | 'created_at' | 'country' | 'state' | 'phone' | 'site_count' | 'address' | 'city')) => void) => {
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
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('name')}>
          Name
          <TbArrowsMoveVertical size={15}/>
        </span>
      </Fragment>,
      accessor: 'name',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('email')}>
          Email
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'email',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('site_count')}>
          Sites
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'site_count',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('phone')}>
          Phone
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'phone',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('address')}>
        Address
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'address',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('city')}>
          City
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'city',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('state')}>
          State
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'state',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('country')}>
          Country
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'country',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-row gap-1" onClick={() => onClickSortParameters('created_at')}>
          Joined On
          <TbArrowsMoveVertical size={15} />
        </span>
      </Fragment>,
      accessor: 'created_at',
    },

    {
      Header: <Fragment>
        <span className="flex shrink-0 flex-col gap-1">
          Status
        </span>
      </Fragment>,
      accessor: 'action',
    },
  ]

  return columnItem
}

export const SuperadminHospitalRow = (data: GetHospitalResponseData[]) => {
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

      action: <>
        <Status status={item?.status}/>
      </>
    })
  })

  return rowItems
}