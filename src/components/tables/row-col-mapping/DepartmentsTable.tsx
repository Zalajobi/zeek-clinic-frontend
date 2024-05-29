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

export const DepartmentsPatientAndDoctorCountDataColumn = (
  type: 'departments' | 'units' | 'area' | 'role'
) => {
  if (type === 'units') {
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
            <span className="flex shrink-0 flex-row gap-1">Total Beds</span>
          </Fragment>
        ),
        accessor: 'total_beds',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Available Beds</span>
          </Fragment>
        ),
        accessor: 'occupied_beds',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Created On</span>
          </Fragment>
        ),
        accessor: 'createdAt',
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
  } else if (type === 'departments') {
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
        accessor: 'createdAt',
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
  } else if (type === 'area') {
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
            <span className="flex shrink-0 flex-row gap-1">Service Type</span>
          </Fragment>
        ),
        accessor: 'type',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Created On</span>
          </Fragment>
        ),
        accessor: 'createdAt',
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
  } else {
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
            <span className="flex shrink-0 flex-row gap-1">Notes</span>
          </Fragment>
        ),
        accessor: 'note',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Plan</span>
          </Fragment>
        ),
        accessor: 'plan',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Procedure</span>
          </Fragment>
        ),
        accessor: 'procedure',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Lab Test</span>
          </Fragment>
        ),
        accessor: 'lab_test',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Appointment</span>
          </Fragment>
        ),
        accessor: 'appointment',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Vitals</span>
          </Fragment>
        ),
        accessor: 'vitals',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Medical Supply</span>
          </Fragment>
        ),
        accessor: 'med_supply',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Admit Patient</span>
          </Fragment>
        ),
        accessor: 'admit_patient',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">
              Transfer Patient
            </span>
          </Fragment>
        ),
        accessor: 'transfer_patient',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Move Patient</span>
          </Fragment>
        ),
        accessor: 'move_patient',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">
              Discharge Patient
            </span>
          </Fragment>
        ),
        accessor: 'discharge',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Time Of Death</span>
          </Fragment>
        ),
        accessor: 'time_of_death',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Review</span>
          </Fragment>
        ),
        accessor: 'review',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Logs</span>
          </Fragment>
        ),
        accessor: 'logs',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Prescription</span>
          </Fragment>
        ),
        accessor: 'prescription',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Dental</span>
          </Fragment>
        ),
        accessor: 'dental',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Clerking</span>
          </Fragment>
        ),
        accessor: 'clerking',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Radiology</span>
          </Fragment>
        ),
        accessor: 'radiology',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Consult</span>
          </Fragment>
        ),
        accessor: 'consult',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Referral</span>
          </Fragment>
        ),
        accessor: 'referral',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">
              Refer Out Prescription
            </span>
          </Fragment>
        ),
        accessor: 'refer_outpx',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Upload</span>
          </Fragment>
        ),
        accessor: 'upload',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Charts</span>
          </Fragment>
        ),
        accessor: 'charts',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Nursing</span>
          </Fragment>
        ),
        accessor: 'nursing',
      },

      {
        Header: (
          <Fragment>
            <span className="flex shrink-0 flex-row gap-1">Created On</span>
          </Fragment>
        ),
        accessor: 'createdAt',
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
  }
};

export const DepartmentsPatientAndDoctorCountTableRowData = (
  data: UserServiceUnitResponseData[],
  isLoading: boolean,
  navigate: NavigateFunction,
  type: 'departments' | 'units' | 'area' | 'role',
  showOnDeleteDepartmentModalHandler: (id: string, name: string) => void,
  showEditDepartmentModalHandler: (
    id: string,
    name: string,
    desc: string
  ) => void
) => {
  const rowItems: DepartmentsPatientAndProviderCountRowData[] = [];

  data?.map((item: UserServiceUnitResponseData, idx: number) => {
    if (type === 'units') {
      rowItems.push({
        name: (
          <Link
            key={`$${idx}_${item?.id}`}
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

        total_beds: (
          <>
            <Typography
              text={item?.total_beds ?? 0}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        occupied_beds: (
          <>
            <Typography
              text={(item?.total_beds ?? 0) - (item?.occupied_beds ?? 0)}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        createdAt: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        updated_at: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
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
                    showEditDepartmentModalHandler(
                      item?.id,
                      item?.name,
                      item?.description
                    )
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
    } else if (type === 'departments') {
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

        createdAt: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        updated_at: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
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
                    showEditDepartmentModalHandler(
                      item?.id,
                      item?.name,
                      item?.description
                    )
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
    } else if (type === 'area') {
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

        type: (
          <>
            <Typography
              text={item?.type ?? ''}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        createdAt: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        updated_at: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
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
                    showEditDepartmentModalHandler(
                      item?.id,
                      item?.name,
                      item?.description
                    )
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
    } else {
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

        note: (
          <>
            <Typography
              text={item?.note ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        plan: (
          <>
            <Typography
              text={item?.plan ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        procedure: (
          <>
            <Typography
              text={item?.procedure ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        lab_test: (
          <>
            <Typography
              text={item?.lab_test ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        appointment: (
          <>
            <Typography
              text={item?.appointment ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        vitals: (
          <>
            <Typography
              text={item?.vitals ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        med_supply: (
          <>
            <Typography
              text={item?.med_supply ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        admit_patient: (
          <>
            <Typography
              text={item?.admit_patient ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        transfer_patient: (
          <>
            <Typography
              text={item?.transfer_patient ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        move_patient: (
          <>
            <Typography
              text={item?.move_patient ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        discharge: (
          <>
            <Typography
              text={item?.discharge ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        time_of_death: (
          <>
            <Typography
              text={item?.time_of_death ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        review: (
          <>
            <Typography
              text={item?.review ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        logs: (
          <>
            <Typography
              text={item?.logs ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        prescription: (
          <>
            <Typography
              text={item?.prescription ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        dental: (
          <>
            <Typography
              text={item?.dental ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        clerking: (
          <>
            <Typography
              text={item?.clerking ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        radiology: (
          <>
            <Typography
              text={item?.radiology ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        consult: (
          <>
            <Typography
              text={item?.consult ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        referral: (
          <>
            <Typography
              text={item?.referral ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        refer_outpx: (
          <>
            <Typography
              text={item?.refer_outpx ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        upload: (
          <>
            <Typography
              text={item?.upload ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        charts: (
          <>
            <Typography
              text={item?.charts ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        nursing: (
          <>
            <Typography
              text={item?.nursing ? 'YES' : 'NO'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        createdAt: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
              Tag={`p`}
              isLoading={isLoading}
              className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
            />
          </>
        ),

        updated_at: (
          <>
            <Typography
              text={moment(item?.createdAt).format('MMM DD. YYYY') ?? '--'}
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
                  onClick={() => navigate(`/admin/role/details/${item?.id}`)}>
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
                    showEditDepartmentModalHandler(
                      item?.id,
                      item?.name,
                      item?.description
                    )
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
    }

    return;
  });

  return rowItems;
};
