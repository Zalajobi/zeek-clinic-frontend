import { ChangeEvent, Fragment } from 'react';
import { TbArrowsMoveVertical } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import Status from '@components/global/Status';
import { ProviderAndRelationAPIResponse } from '@typeSpec/admin';
import { ProvidersPageRowData } from '@typeSpec/admin/table';
import { Avatar } from '@material-tailwind/react';

export const AdminProviderDataColumn = () => {
  return [
    // {
    //   Header: (
    //     <div className="flex items-center gap-3 whitespace-nowrap w-[60px]">
    //       <div className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
    //         <input
    //           className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
    //                   ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
    //                   focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
    //                   ring-custom-primary-400"
    //           type="checkbox"
    //           onChange={onUpdateSelectAllProviders}
    //         />
    //       </div>
    //     </div>
    //   ),
    //   accessor: 'checkbox',
    // },
    //
    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">
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
            onClick={() => {}}>
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
            onClick={() => {}}>
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
            onClick={() => []}>
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
            onClick={() => {}}>
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
      accessor: 'createdAt',
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
};

export const AdminProviderDataRow = (
  data: ProviderAndRelationAPIResponse[],
  _onSelect: (event: ChangeEvent<HTMLInputElement>, id: string) => void,
  _selected: boolean
) => {
  const rowItems: ProvidersPageRowData[] = [];

  data?.map((item: ProviderAndRelationAPIResponse, idx: number) => {
    rowItems.push({
      // checkbox: (
      //   <th
      //     colSpan={1}
      //     scope="col"
      //     className="font-inter text-xs font-medium">
      //     <div className="flex items-center gap-3 whitespace-nowrap w-[60px]">
      //       <div className="group flex cursor-pointer select-none flex-row items-center gap-2 font-inter text-sm font-medium outline-none">
      //         <input
      //           className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border p-1 outline-none
      //                 ring-offset-0 transition-[background-color,_border-color,_box-shadow] focus:ring-2
      //                 focus:ring-offset-2 group-hover:ring-2 group-hover:ring-offset-2 border-custom-gray-100 bg-white
      //                 ring-custom-primary-400"
      //           type="checkbox"
      //           // checked={selected}
      //           onChange={(event) => onSelect(event, item?.id)}
      //         />
      //       </div>
      //     </div>
      //   </th>
      // ),

      name: (
        <div className={`flex items-center gap-3`}>
          <Avatar
            src={item?.personalInfo?.profile_pic ?? ''}
            alt={item.personalInfo?.first_name ?? ''}
            key={idx}
            size={`md`}
            className={`border border-blue-50 bg-blue-gray-50/50 object-contain p-1`}
            loading={`lazy`}
            width={48}
            height={48}
          />

          <Link
            to={`/admin/provider/details/${item?.id}`}
            className={`text-black hover:text-gray-500 decoration-0`}>
            <b className={`font-extrabold`}>
              {' '}
              {item.personalInfo?.title ?? ''}{' '}
              {item.personalInfo?.first_name ?? ''}{' '}
              {item.personalInfo?.middle_name ?? ''}{' '}
              {item.personalInfo?.last_name?.toUpperCase() ?? ''}{' '}
            </b>
          </Link>
        </div>
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

      createdAt: <>{moment(item?.createdAt).format('MMM DD. YYYY')}</>,

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
