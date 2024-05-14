import moment from 'moment';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { GetHospitalResponseData, HospitalRowData } from '@typeSpec/superadmin';
import Status from '@components/global/Status';
import { HiPencil } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { HospitalPayload, SitePayload } from '@typeSpec/payloads';

export const SuperAdminHospitalDataColumns = () => {
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
      key: 'zip_code',
      value: 'Zip Code',
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

export const SuperAdminHospitalDataRows = (data: HospitalPayload[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      id: item?.id,
      name: item?.name,
      email: item?.email,
      phone: item?.phone,
      address: item?.address,
      city: item?.city,
      state: item?.state,
      country: item?.country,
      logo: item?.logo,
      zip_code: item?.zip_code,
      country_code: item?.country_code,
      updated_at: item?.updated_at,
      status: item?.status,
      created_at: moment(item?.created_at).format('MMM DD. YYYY'),
    });

    return;
  });

  return rowItems;
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

export const SuperAdminSiteDataRows = (data: SitePayload[]) => {
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

export const SuperAdminSiteActionItem = (
  editSite: (siteId: string) => Promise<void>,
  deleteSite: (siteId: string) => Promise<void>
) => {
  return [
    {
      icon: (
        <HiPencil
          className="h-4 w-4"
          color={`blue`}
          size={15}
        />
      ),
      label: 'Edit',
      onClick: (siteId: string) => editSite(siteId),
    },

    {
      icon: (
        <MdDelete
          className="h-4 w-4"
          color={`red`}
          size={15}
        />
      ),
      label: 'Delete',
      onClick: (siteId: string) => deleteSite(siteId),
    },
  ];
};

export const SuperAdminHospitalActionItem = () => {
  return [
    {
      icon: (
        <HiPencil
          className="h-4 w-4"
          color={`blue`}
          size={15}
        />
      ),
      label: 'Edit',
      onClick: (siteId: string) => console.log(siteId),
    },

    {
      icon: (
        <MdDelete
          className="h-4 w-4"
          color={`red`}
          size={15}
        />
      ),
      label: 'Delete',
      onClick: (siteId: string) => console.log(siteId),
    },
  ];
};
