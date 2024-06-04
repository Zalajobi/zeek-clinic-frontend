import {
  AdminPayload,
  DepartmentPayload,
  PatientPayload,
  ProviderPayload,
  SitePayload,
} from '@typeSpec/payloads';
import moment from 'moment/moment';
import { HiPencil } from 'react-icons/hi2';
import { MdDelete } from 'react-icons/md';
import { useMemo } from 'react';

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
      key: 'createdAt',
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
      createdAt: moment(item?.createdAt).format('MMM DD. YYYY'),
      logo: item?.logo,
      countryCode: item?.countryCode,
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
      sortable: true,
    },
    {
      key: 'role',
      value: 'Role',
      sortable: false,
    },
    {
      key: 'gender',
      value: 'Gender',
      sortable: true,
    },
    {
      key: 'age',
      value: 'Age',
      sortable: false,
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
      value: 'ZipCode',
      sortable: true,
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

export const ProviderDataRows = (data: ProviderPayload[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      id: item?.id,
      name: `${item?.firstName} ${
        item?.middleName
      } ${item?.lastName?.toUpperCase()}`,
      email: item?.email,
      role: item?.role,
      roleId: item?.primaryRoleId,
      gender: item?.gender?.toUpperCase(),
      age: ageFromTimeStamp(item?.dob ?? ''),
      country: item?.country,
      state: item?.state,
      city: item?.city,
      zipCode: item?.zipCode,
      unit: item?.unit,
      unitId: item?.unitId,
      dept: item?.dept,
      deptId: item?.departmentId,
      area: item?.area,
      areaId: item?.serviceAreaId,
      status: item?.status,
      createdAt: moment(item?.createdAt).format('MMM DD. YYYY'),
      profilePic: item?.profilePic,
      isSpecialist: item?.isSpecialist,
      isConsultant: item?.isConsultant,
      appointments: item?.appointments,
      staffId: item?.staffId,
      maritalStatus: item?.maritalStatus,
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

// Admin Start
export const AdminDataColumns = () => {
  return [
    {
      key: 'name',
      value: 'Name',
      sortable: false,
    },
    {
      key: 'email',
      value: 'Email',
      sortable: true,
    },
    {
      key: 'role',
      value: 'Role',
      sortable: false,
    },
    {
      key: 'gender',
      value: 'Gender',
      sortable: true,
    },
    {
      key: 'age',
      value: 'Age',
      sortable: false,
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
      key: 'phone',
      value: 'Phone',
      sortable: true,
    },
    {
      key: 'zipCode',
      value: 'ZipCode',
      sortable: true,
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

export const AdminActionItem = () => {
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

export const AdminDataRows = (data: AdminPayload[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      id: item?.id,
      name: `${item?.firstName} ${
        item?.middleName
      } ${item?.lastName?.toUpperCase()}`,
      email: item?.email,
      role: item?.role?.replace('_', ' '),
      gender: item?.gender?.toUpperCase(),
      age: ageFromTimeStamp(item?.dob ?? ''),
      country: item?.country,
      phone: item?.phone,
      state: item?.state,
      city: item?.city,
      zipCode: item?.zipCode,
      createdAt: moment(item?.createdAt).format('MMM DD. YYYY'),
      profilePic: item?.profilePic,
      staffId: item?.staffId,
      maritalStatus: item?.maritalStatus,
    });
    return;
  });

  return rowItems;
};
// Admin End

// Patient Start
export const PatientDataColumns = () => {
  return [
    {
      key: 'name',
      value: 'Name',
      sortable: false,
    },
    {
      key: 'email',
      value: 'Email',
      sortable: true,
    },
    {
      key: 'provider',
      value: 'Primary Provider',
      sortable: false,
    },
    {
      key: 'cardNumber',
      value: 'Card Number',
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
      key: 'gender',
      value: 'Gender',
      sortable: true,
    },
    {
      key: 'age',
      value: 'Age',
      sortable: false,
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
      key: 'phone',
      value: 'Phone',
      sortable: true,
    },
    {
      key: 'zipCode',
      value: 'Zip Code',
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

export const PatientActionItem = () => {
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

export const PatientDataRows = (data: PatientPayload[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      id: item?.id,
      name: `${item?.firstName} ${
        item?.middleName
      } ${item?.lastName?.toUpperCase()}`,
      email: item?.email,
      cardNumber: item?.cardNumber?.toUpperCase(),
      provider: `${item?.providerTitle} ${
        item?.providerFirstName
      } ${item?.providerLastName?.toUpperCase()}`,
      unit: item?.unitName,
      dept: item?.departmentName,
      area: item?.serviceAreaName,
      gender: item?.gender?.toUpperCase(),
      age: ageFromTimeStamp(item?.dob ?? ''),
      country: item?.country,
      phone: item?.phone,
      state: item?.state,
      status: item?.status,
      city: item?.city,
      zipCode: item?.zipCode,
      createdAt: moment(item?.createdAt).format('MMM DD. YYYY'),
      profilePic: item?.profilePic,
      maritalStatus: item?.maritalStatus,
    });
    return;
  });

  return rowItems;
};
// Admin End

// Department Start
export const DepartmentDataColumns = () => {
  return [
    {
      key: 'name',
      value: 'Name',
      sortable: true,
    },
    {
      key: 'description',
      value: 'Description',
      sortable: true,
    },
    {
      key: 'providerCount',
      value: 'Providers',
      sortable: false,
    },
    {
      key: 'patientCount',
      value: 'Patients',
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

export const DepartmentActionItem = () => {
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

export const DepartmentDataRows = (data: DepartmentPayload[]) => {
  const rowItems: any[] = [];

  data?.map((item) => {
    rowItems.push({
      id: item.id,
      name: item.name,
      description: item?.description,
      providerCount: Number(item?.providerCount ?? 0),
      patientCount: Number(item.patientCount ?? 0),
      createdAt: moment(item?.createdAt).format('MMM DD. YYYY'),
    });
    return;
  });

  return rowItems;
};
// Department End

const ageFromTimeStamp = (timestamp: string) => {
  const birthDay = moment(timestamp);
  const currentDate = moment();
  return currentDate.diff(birthDay, 'years');
};
