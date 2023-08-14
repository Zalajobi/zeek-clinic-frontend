import { ChangeEvent, Fragment } from 'react';
import { TbArrowsMoveVertical } from 'react-icons/tb';
import { HospitalRowData } from '../../types/superadmin';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import Status from '../global/Status';
import { ProvidersPageProvidersData } from '../../types/admin';
import { ProvidersPageRowData } from '../../types/admin/table';

export const AdminProviderDataColumn = () => {
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
            onClick={() => console.log('Name')}>
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
            onClick={() => console.log('Email')}>
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
            onClick={() => console.log('Phone')}>
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
            onClick={() => console.log('Role')}>
            Role
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'role',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('Department')}>
            Department
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'department',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('Unit')}>
            Unit
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'unit',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('serviceArea')}>
            Service Area
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'serviceArea',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('gender')}>
            Gender
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'gender',
    },

    {
      Header: (
        <Fragment>
          <span
            className="flex shrink-0 flex-row gap-1"
            onClick={() => console.log('Country')}>
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
            onClick={() => console.log('Status')}>
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
            onClick={() => console.log('Created On')}>
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
          <span className="flex shrink-0 flex-col gap-1">Action</span>
        </Fragment>
      ),
      accessor: 'action',
    },
  ];

  return columnItem;
};

export const AdminProviderDataRow = (
  data: ProvidersPageProvidersData[],
  onSelect: (event: ChangeEvent<HTMLInputElement>, id: string) => void,
  selected: boolean
) => {
  const rowItems: ProvidersPageRowData[] = [];

  data?.map((item: ProvidersPageProvidersData, idx: number) => {
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
          to={`/admin/provider/${item?.id}`}
          className={`text-black hover:text-gray-500 decoration-0`}>
          <b className={`font-extrabold`}>
            {' '}
            {item.personalInfo?.title ?? ''}{' '}
            {item.personalInfo?.first_name ?? ''}{' '}
            {item.personalInfo?.middle_name ?? ''}{' '}
            {item.personalInfo?.last_name?.toUpperCase() ?? ''}{' '}
          </b>
        </Link>
      ),

      email: <>{item.email ?? ''}</>,

      phone: <>{item.personalInfo?.phone ?? ''}</>,

      role: <>{item.primary_role.name ?? ''}</>,

      department: <>{item.department.name ?? ''}</>,

      unit: <>{item.unit.name ?? ''}</>,

      serviceArea: <>{item.servicearea.name ?? ''}</>,

      gender: <>{item.personalInfo?.gender ?? ''}</>,

      country: <>{item.personalInfo?.country ?? ''}</>,

      status: (
        <>
          <Status status={item.status ?? ''} />
        </>
      ),

      created_at: <>{moment(item?.created_at).format('MMM DD. YYYY')}</>,

      action: (
        <>
          <Status status={item?.status} />
        </>
      ),
    });
  });

  return rowItems;
};
