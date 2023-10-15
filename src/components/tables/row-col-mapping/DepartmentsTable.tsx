import { Fragment } from 'react';
import { Link, NavigateFunction } from 'react-router-dom';
import { UserServiceUnitResponseData } from '@typeSpec/index';
import { DepartmentsPatientAndProviderCountRowData } from '@typeSpec/admin/table';
import { Typography } from '@components/global/dialog/Typography';
import moment from 'moment/moment';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react';
import { MdDeleteForever, MdModeEdit } from 'react-icons/md';

export const DepartmentsPatientAndDoctorCountDataColumn = () => {
  return [
    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">Name</span>
        </Fragment>
      ),
      accessor: 'name',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">Description</span>
        </Fragment>
      ),
      accessor: 'description',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">
            No. Of Provider(s)
          </span>
        </Fragment>
      ),
      accessor: 'providers',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">
            No. Of Patient(s)
          </span>
        </Fragment>
      ),
      accessor: 'patients',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">Created On</span>
        </Fragment>
      ),
      accessor: 'created_at',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1">Last Update</span>
        </Fragment>
      ),
      accessor: 'updated_at',
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

export const DepartmentsPatientAndDoctorCountTableRowData = (
  data: UserServiceUnitResponseData[],
  isLoading: boolean,
  navigate: NavigateFunction,
  showOnDeleteDepartmentModalHandler: (id: string, name: string) => void,
  showEditDepartmentModalHandler: (id: string, name: string) => void
) => {
  const rowItems: DepartmentsPatientAndProviderCountRowData[] = [];

  data?.map((item: UserServiceUnitResponseData, idx: number) => {
    rowItems.push({
      name: (
        <Link
          to={`/admin/department/details/${item?.id}`}
          className={`text-black hover:text-gray-500 decoration-0`}>
          <b className={`font-extrabold`}>{item?.name ?? ''}</b>
        </Link>
      ),

      description: (
        <>
          <Typography
            text={item?.description ?? ''}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      providers: (
        <>
          <Typography
            text={item?.providers ?? ''}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      patients: (
        <>
          <Typography
            text={item?.patients ?? ''}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      created_at: (
        <>
          <Typography
            text={moment(item?.created_at).format('MMM DD. YYYY') ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      updated_at: (
        <>
          <Typography
            text={moment(item?.created_at).format('MMM DD. YYYY') ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      action: (
        <>
          <Popover>
            <PopoverHandler
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
              placement={'top'}>
              <Button>Actions</Button>
            </PopoverHandler>
            <PopoverContent
              className={`min-w-[120px] flex flex-col items-center just`}>
              <Button
                size="sm"
                variant={`text`}
                className={`my-2 w-full`}
                onClick={() =>
                  navigate(`/admin/department/details/${item?.id}`)
                }>
                View
              </Button>

              <Button
                size="sm"
                className={`my-2 w-full flex items-center`}
                color={`red`}
                onClick={() =>
                  showOnDeleteDepartmentModalHandler(item?.id, item?.name)
                }>
                <MdDeleteForever
                  color={`white`}
                  className={`mr-1`}
                />
                Delete
              </Button>

              <Button
                size="sm"
                color={`blue`}
                className={`my-2 w-full flex items-center`}
                onClick={() =>
                  showEditDepartmentModalHandler(item?.id, item?.name)
                }>
                <MdModeEdit
                  color={`white`}
                  className={`mr-1`}
                />
                Edit
              </Button>
            </PopoverContent>
          </Popover>
        </>
      ),
    });

    return;
  });

  return rowItems;
};
