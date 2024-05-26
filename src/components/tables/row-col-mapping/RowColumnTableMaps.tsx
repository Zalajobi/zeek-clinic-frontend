import { ProviderPayload, SitePayload } from '@typeSpec/payloads';
import moment from 'moment/moment';
import { HiPencil } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';

// Site Start
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

// Site End

// Provider Start

export const ProviderDataColumns = () => {
  return [
    {
      key: 'name',
      value: 'Name',
      sortable: false,
    },
    {
      key: 'email',
      value: 'Email',
      sortable: false,
    },
    {
      key: 'role',
      value: 'Role',
      sortable: false,
    },
    {
      key: 'gender',
      value: 'Gender',
      sortable: false,
    },
    {
      key: 'age',
      value: 'Age',
      sortable: false,
    },
    {
      key: 'country',
      value: 'Country',
      sortable: false,
    },
    {
      key: 'state',
      value: 'State',
      sortable: false,
    },
    {
      key: 'city',
      value: 'City',
      sortable: false,
    },
    {
      key: 'unit',
      value: 'Unit',
      sortable: false,
    },
    {
      key: 'dept',
      value: 'Department',
      sortable: false,
    },
    {
      key: 'area',
      value: 'Service Area',
      sortable: false,
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

export const ProviderDataRows = (data: ProviderPayload[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      id: item?.id,
      name: `${item?.first_name} ${
        item?.middle_name
      } ${item?.last_name?.toUpperCase()}`,
      email: item?.email,
      role: item?.role,
      roleId: item?.role_id,
      gender: item?.gender?.toUpperCase(),
      age: ageFromTimeStamp(item?.dob ?? ''),
      country: item?.country,
      state: item?.state,
      city: item?.city,
      unit: item?.unit,
      unitId: item?.unit_id,
      dept: item?.dept,
      deptId: item?.dept_id,
      area: item?.area,
      areaId: item?.area_id,
      profileId: item?.profile_id,
      status: item?.status,
      created_at: moment(item?.created_at).format('MMM DD. YYYY'),
      profile_pic: item?.profile_pic,
    });

    return;
  });

  return rowItems;
};

export const ProfileActionItem = () => {
  return [
    {
      icon: (
        <HiPencil
          className="h-4 w-4"
          color={`blue`}
          size={15}
        />
      ),
      label: 'View',
      onClick: (id: string) => console.log(id),
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
      onClick: (id: string) => console.log(`Delete Provider: ${id}`),
    },
  ];
};

// Provider End

const ageFromTimeStamp = (timestamp: string) => {
  const birthDay = moment(timestamp);
  const currentDate = moment();
  return currentDate.diff(birthDay, 'years');
};