import { TbArrowsMoveVertical } from 'react-icons/tb';
import moment from 'moment';
import { Fragment, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import {
  GetHospitalResponseData,
  HospitalRowData,
  SiteRowData,
  SitesDataKeyMap,
} from '@typeSpec/superadmin';
import Status from '@components/global/Status';

export const SuperadminHospitalDataColumn = (
  onClickSortParameters: (
    value:
      | 'name'
      | 'email'
      | 'created_at'
      | 'country'
      | 'state'
      | 'phone'
      | 'site_count'
      | 'address'
      | 'city'
  ) => void,
  onUpdateSelectAllHospitals: (event: ChangeEvent<HTMLInputElement>) => void
) => {
  const columnItem = [
    {
      Header: (
        <div className="flex items-center gap-3 whitespace-nowrap w-[60px]">
          <div className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
            <input
              className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
                      ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
                      focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
                      ring-custom-primary-400"
              type="checkbox"
              onChange={onUpdateSelectAllHospitals}
            />
          </div>
        </div>
      ),
      accessor: 'checkbox',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('name')}>
            Name
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'name',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('email')}>
            Email
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'email',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('site_count')}>
            Sites
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'site_count',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('phone')}>
            Phone
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'phone',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('address')}>
            Address
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'address',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('city')}>
            City
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'city',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('state')}>
            State
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'state',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('country')}>
            Country
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'country',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => onClickSortParameters('created_at')}>
            Joined On
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'created_at',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-col gap-1">Status</span>
        </Fragment>
      ),
      accessor: 'action',
    },
  ];

  return columnItem;
};

export const SuperadminHospitalDataRow = (
  data: GetHospitalResponseData[],
  onSelect: (event: ChangeEvent<HTMLInputElement>, id: string) => void,
  selected: boolean
) => {
  const rowItems: HospitalRowData[] = [];

  data?.map((item: GetHospitalResponseData, idx: number) => {
    rowItems.push({
      checkbox: (
        <th
          colSpan={1}
          scope="col"
          className="font-inter text-xs font-medium">
          <div className="flex items-center gap-3 whitespace-nowrap w-[60px]">
            <div className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
              <input
                className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
                      ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
                      focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
                      ring-custom-primary-400"
                type="checkbox"
                // checked={selected}
                onChange={(event) => onSelect(event, item?.id)}
              />
            </div>
          </div>
        </th>
      ),

      name: (
        <Link
          to={`/superadmin/hospital/${item?.id}`}
          className={`text-black hover:text-gray-500 decoration-0`}>
          <b className={`font-extrabold`}>{item?.name}</b>
        </Link>
      ),

      email: <>{item?.email}</>,

      site_count: <>{item?.site_count}</>,

      phone: <>{item?.phone}</>,

      address: <>{item?.address}</>,

      city: <>{item?.city}</>,

      state: <>{item?.state}</>,

      country: <>{item?.country}</>,

      created_at: <>{moment(item?.created_at).format('MMM DD. YYYY')}</>,

      action: (
        <>
          <Status status={item?.status} />
        </>
      ),
    });

    return;
  });

  return rowItems;
};

export const SuperadminSiteDataColumn = () => {
  const columnItem = [
    {
      Header: (
        <div className="flex items-center gap-3 whitespace-nowrap w-[60px]">
          <div className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
            <input
              className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
                      ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
                      focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
                      ring-custom-primary-400"
              type="checkbox"
              // onChange={onUpdateSelectAllHospitals}
            />
          </div>
        </div>
      ),
      accessor: 'checkbox',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Name
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'name',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Email
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'email',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Phone
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'phone',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Country
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'country',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            State
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'state',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            City
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'city',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Address
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'address',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Status
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'status',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => {}}>
            Registered On
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'created_at',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-col gap-1">Status</span>
        </Fragment>
      ),
      accessor: 'action',
    },
  ];

  return columnItem;
};

export const SuperAdminSiteDataColumns = () => {
  return [
    {
      key: 'name',
      value: 'Name',
      sortable: true,
    },
    {
      key: 'email',
      value: 'Email',
      sortable: true,
    },
    {
      key: 'phone',
      value: 'Phone',
      sortable: true,
    },
    {
      key: 'country',
      value: 'Country',
      sortable: true,
    },
    {
      key: 'state',
      value: 'State',
      sortable: true,
    },
    {
      key: 'city',
      value: 'City',
      sortable: true,
    },
    {
      key: 'address',
      value: 'Address',
      sortable: true,
    },
    {
      key: 'status',
      value: 'Status',
      sortable: false,
    },
    {
      key: 'created_at',
      value: 'Created At',
      sortable: false,
    },
    {
      key: 'action',
      value: 'Action',
      sortable: false,
    },
  ];
};

export const SuperAdminSiteDataRows = (data: SitesDataKeyMap[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      name: item?.name,
      id: item?.id,
      email: item?.email,
      phone: item?.phone,
      country: item?.country,
      state: item?.state,
      city: item?.city,
      address: item?.address,
      status: item?.status,
      created_at: moment(item?.created_at).format('MMM DD. YYYY'),
      logo: item?.logo,
    });

    return;
  });

  return rowItems;
};

export const SuperadminSiteDataRow = (
  data: SitesDataKeyMap[]
  // onSelect: (event: ChangeEvent<HTMLInputElement>, id: string) => void
) => {
  const rowItems: SiteRowData[] = [];

  data?.map((item: SitesDataKeyMap, idx: number) => {
    rowItems.push({
      checkbox: (
        <th
          colSpan={1}
          scope="col"
          className="font-inter text-xs font-medium">
          <div className="flex items-center gap-3 whitespace-nowrap w-[60px]">
            <div className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
              <input
                className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
                      ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
                      focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
                      ring-custom-primary-400"
                type="checkbox"
                // checked={selected}
                // onChange={(event) => onSelect(event, item?.id)}
              />
            </div>
          </div>
        </th>
      ),

      name: (
        <Link
          to={`/superadmin/site/${item?.id}`}
          className={`text-black hover:text-gray-500 decoration-0`}>
          <b className={`font-extrabold`}>{item?.name}</b>
        </Link>
      ),

      email: <>{item?.email}</>,

      phone: <>{item?.phone}</>,

      country: <>{item?.country}</>,

      state: <>{item?.state}</>,

      city: <>{item?.city}</>,

      address: <>{item?.address}</>,

      status: (
        <>
          <Status status={item?.status} />
        </>
      ),

      created_at: <>{moment(item?.created_at).format('MMM DD. YYYY')}</>,

      action: (
        <>
          <p>Action</p>
        </>
      ),
    });

    return;
  });

  return rowItems;
};
