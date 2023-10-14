import { Fragment } from 'react';
import { TbArrowsMoveVertical } from 'react-icons/tb';
import { UserServicePatientDetailsResponse } from '@typeSpec/index';
import { ProviderPrimaryPatient } from '@typeSpec/patient';
import { Typography } from '@components/global/dialog/Typography';
import {
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react';
import { Link, NavigateFunction } from 'react-router-dom';
import Status from '@components/global/Status';
import { calculateAge } from '@util/index';
import moment from 'moment';

export const ProviderPrimaryPatientColumnData = () => {
  const columnItem = [
    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
            Age
            <TbArrowsMoveVertical size={15} />
          </span>
        </Fragment>
      ),
      accessor: 'age',
    },

    {
      Header: (
        <Fragment>
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
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
          <span className="flex shrink-0 flex-row gap-1 w-full justify-center">
            Action
          </span>
        </Fragment>
      ),
      accessor: 'action',
    },
  ];

  return columnItem;
};

export const ProviderPrimaryPatientRowData = (
  data: UserServicePatientDetailsResponse[],
  isLoading: boolean,
  navigate: NavigateFunction,
  movePatientActionHandler: (
    id: string,
    title: string,
    firstName: string,
    middleName: string,
    lastName: string,
    profilePic: string
  ) => void
) => {
  const rowItems: ProviderPrimaryPatient[] = [];

  data?.map((item) => {
    rowItems.push({
      name: (
        <div className={`flex items-center gap-3`}>
          <Avatar
            src={item?.personalInfo?.profile_pic ?? ''}
            alt={item.personalInfo?.first_name ?? ''}
            size={`md`}
            className={`border border-blue-50 bg-blue-gray-50/50 object-contain p-1`}
            loading={`lazy`}
            width={48}
            height={48}
          />

          <Link
            to={`#`}
            className={`text-black hover:text-gray-500 decoration-0`}>
            <b className={`font-extrabold`}>
              {`${item.personalInfo?.title ?? ''} ${
                item.personalInfo?.first_name ?? ''
              } ${item.personalInfo?.middle_name ?? ''} ${
                item.personalInfo?.last_name?.toUpperCase() ?? ''
              }`}
            </b>
          </Link>
        </div>
      ),

      email: (
        <>
          <Typography
            text={item?.email ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      phone: (
        <>
          <Typography
            text={item?.personalInfo?.phone ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      age: (
        <>
          <Typography
            text={calculateAge(item?.personalInfo?.dob) ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      unit: (
        <>
          <Typography
            text={item?.unit?.name ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      serviceArea: (
        <>
          <Typography
            text={item?.servicearea?.name ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      gender: (
        <>
          <Typography
            text={item?.personalInfo?.gender ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      country: (
        <>
          <Typography
            text={item?.personalInfo?.country ?? '--'}
            Tag={`p`}
            isLoading={isLoading}
            className={`whitespace-nowrap p-6 font-inter text-sm font-medium text-custom-primary-800 first:!pr-0 [&:nth-child(1)>*]:pr-0 [&:nth-child(2)]:pl-4 text-black max-w-[300px] overflow-hidden truncate`}
          />
        </>
      ),

      status: (
        <>
          <Status status={item?.status} />
        </>
      ),

      createdAt: (
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
                onClick={() => navigate(`/admin/patient/details/${item?.id}`)}>
                View Patient
              </Button>

              <Button
                size="sm"
                variant={`text`}
                className={`my-2 w-full`}
                onClick={() => navigate(`/admin/patient/billing/${item?.id}`)}>
                Billing
              </Button>

              <Button
                size="sm"
                variant={`text`}
                className={`my-2 w-full`}
                onClick={() => navigate('#')}>
                Update Status
              </Button>

              <Button
                size="sm"
                variant={`text`}
                className={`my-2 w-full`}
                onClick={() =>
                  movePatientActionHandler(
                    item?.id ?? '',
                    item.personalInfo?.title ?? '',
                    item.personalInfo?.first_name ?? '',
                    item.personalInfo?.middle_name ?? '',
                    item.personalInfo?.last_name?.toUpperCase() ?? '',
                    item?.personalInfo?.profile_pic ?? ''
                  )
                }>
                Move Patient
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
