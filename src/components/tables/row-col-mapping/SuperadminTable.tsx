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
      key: 'zipCode',
      value: 'Zip Code',
      sortable: true,
    },
    {
      key: 'address',
      value: 'Address',
      sortable: true,
    },
    {
      key: 'siteCount',
      value: 'Sites',
      sortable: true,
    },
    {
      key: 'status',
      value: 'Status',
      sortable: false,
    },
    {
      key: 'createdAt',
      value: 'Created At',
      sortable: true,
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
      name: item?.name ?? '--',
      email: item?.email ?? '--',
      phone: item?.phone ?? '--',
      address: item?.address ?? '--',
      city: item?.city ?? '--',
      state: item?.state ?? '--',
      country: item?.country ?? '--',
      logo: item?.logo ?? '--',
      zipCode: item?.zipCode ?? '--',
      countryCode: item?.countryCode ?? '--',
      updatedAt: item?.updatedAt,
      status: item?.status,
      siteCount: item?.siteCount,
      createdAt: moment(item?.createdAt).format('MMM DD. YYYY'),
    });

    return;
  });

  return rowItems;
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
