import { Fragment } from 'react';
import { Typography } from '../../global/dialog/Typography';
import { CustomTransparentCard } from '../../global/card/CustomCard';
import moment from 'moment';

interface ProviderDetailsCardProps {
  title: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  role: string;
  unit: string;
  department: string;
  serviceArea: string;
  createdAt: string;
  patientCount: string;
  country: string;
  state: string;
  city: string;
  address: string;
}

const ProviderDetailsCard = ({
  title,
  firstName,
  middleName,
  lastName,
  email,
  phone,
  dob,
  role,
  unit,
  department,
  serviceArea,
  createdAt,
  patientCount,
  country,
  state,
  city,
  address,
}: ProviderDetailsCardProps) => {
  return (
    <Fragment>
      <Fragment>
        <CustomTransparentCard
          className={`w-full grid grid-cols-1 items-center gap-4 !bg-white px-6 py-9 text-sm font-extrabold lg:grid-cols-3`}>
          {/*Name*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Name:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={`${title} ${firstName} ${middleName} ${lastName}`}
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
              text={email}
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
              text={phone}
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
              text={moment(dob).format('MMM DD. YYYY')}
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
              text={role}
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

          {/*Unit*/}
          <div className={`flex flex-row items-center py-3`}>
            <Typography
              text={`Unit:`}
              Tag={'p'}
              size={'sm'}
              className={`text-[color:var(--label-color)]`}
            />

            <Typography
              text={unit}
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
              text={department}
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
              text={serviceArea}
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
              text={moment(createdAt).format('MMM DD. YYYY')}
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
              text={country}
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
              text={state}
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
              text={city}
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
              text={address}
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
