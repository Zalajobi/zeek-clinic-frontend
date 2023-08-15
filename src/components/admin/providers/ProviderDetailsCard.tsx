import { Fragment } from 'react';
import { Typography } from '../../global/dialog/Typography';
import { CustomTransparentCard } from '../../global/card/CustomCard';
import moment from 'moment';
import { ProviderAndRelationAPIResponse } from '../../../types/admin';

const ProviderDetailsCard = ({
  data,
  patientCount,
}: {
  data: ProviderAndRelationAPIResponse;
  patientCount: number;
}) => {
  console.log(data);

  return (
    <Fragment>
      <Fragment>
        <CustomTransparentCard
          className={`w-full grid grid-cols-4 items-center gap-4 bg-white px-6 py-9 mt-10 text-sm font-extrabold`}>
          {/*Name*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Name:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={`${data?.personalInfo?.title ?? ''} ${
                data?.personalInfo?.first_name ?? ''
              } ${data?.personalInfo?.middle_name ?? ''} ${
                data?.personalInfo?.last_name?.toUpperCase() ?? ''
              }`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Email*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Email:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.email}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Phone*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Phone:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.personalInfo?.phone ?? ''}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*DOB*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Date Of Birth:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={moment(data?.personalInfo?.dob).format('MMM DD. YYYY')}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Role*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Primary Role:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.primary_role?.name ?? ''}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Unit*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Unit:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.unit?.name ?? ''}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Assigned Patient Count*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Assigned Patient Count:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={patientCount ?? 0}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Department*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Department:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.department?.name ?? ''}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Service Area*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Service Area:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.servicearea?.name ?? ''}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Registered On*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Registered On:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={moment(data?.created_at).format('MMM DD. YYYY')}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Country*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Country:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.personalInfo?.country}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*State*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`State:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.personalInfo?.state}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*City*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`City:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.personalInfo?.city}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>

          {/*Address*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Address:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={data?.personalInfo?.address}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            />
          </div>
        </CustomTransparentCard>
      </Fragment>
    </Fragment>
  );
};

export default ProviderDetailsCard;
