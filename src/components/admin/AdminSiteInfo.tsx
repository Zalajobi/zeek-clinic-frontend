import { Fragment } from 'react';
import { Typography } from '@components/global/dialog/Typography';
import moment from 'moment/moment';
import { CustomTransparentCard } from '@components/global/card/CustomCard';

interface AdminSiteInfoProps {
  address: string;
  name: string;
  email: string;
  country: string;
  phone: string;
  id: string;
  state: string;
  city: string;
  createdAt: string;
  dataLoading: boolean;
}
const AdminSiteInfo = ({
  address,
  name,
  email,
  country,
  phone,
  id,
  state,
  city,
  createdAt,
  dataLoading,
}: AdminSiteInfoProps) => {
  return (
    <Fragment>
      <CustomTransparentCard
        className={`w-full grid grid-cols-4 items-center gap-4 !bg-white px-6 py-9 mt-10 text-sm font-extrabold`}>
        <div className={`col-span-4`}>
          <Typography
            text={`Site Information`}
            Tag={'p'}
            size={'2xl'}
            className={`text-[color:var(--text-color)] dark:text-white m-0`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Name:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={name}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            isLoading={dataLoading}
          />
        </div>

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
            isLoading={dataLoading}
          />
        </div>

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
            isLoading={dataLoading}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Created On:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={moment(createdAt).format('MMM DD. YYYY')}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
            isLoading={dataLoading}
          />
        </div>

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
            isLoading={dataLoading}
          />
        </div>

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
            isLoading={dataLoading}
          />
        </div>

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
            isLoading={dataLoading}
          />
        </div>

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
            isLoading={dataLoading}
          />
        </div>
      </CustomTransparentCard>
    </Fragment>
  );
};

export default AdminSiteInfo;
