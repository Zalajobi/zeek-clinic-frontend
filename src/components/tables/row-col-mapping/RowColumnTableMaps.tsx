import { SitePayload } from '@typeSpec/payloads';
import moment from 'moment/moment';
import { HiPencil } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';

export const SiteDataColumns = () => {
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

export const SiteDataRows = (data: SitePayload[]) => {
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
      country_code: item?.country_code,
    });

    return;
  });

  return rowItems;
};

export const SiteActionItem = (
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
