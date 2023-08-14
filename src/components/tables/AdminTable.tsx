import { Fragment } from 'react';
import { TbArrowsMoveVertical } from 'react-icons/tb';

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
            Department
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
            onClick={() => console.log('service-area')}>
            Service Area
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'service-area',
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
          <span className="flex shrink-0 flex-col gap-1">Status</span>
        </Fragment>
      ),
      accessor: 'action',
    },
  ];

  return columnItem;
};
