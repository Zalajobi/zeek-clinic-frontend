import { Fragment } from 'react';
import { ProviderPageSiteResponseData } from '@typeSpec/admin';
import { Typography } from '@components/global/dialog/Typography';
import moment from 'moment/moment';
import { CustomTransparentCard } from '@components/global/card/CustomCard';

const AdminSiteInfo = ({ data }: { data: ProviderPageSiteResponseData }) => {
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
            text={data?.name as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={data?.email as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={data?.phone as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={moment(data?.created_at).format('MMM DD. YYYY')}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={data?.country as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={data?.state as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={data?.city as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
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
            text={data?.address as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>
      </CustomTransparentCard>
    </Fragment>
  );
};

export default AdminSiteInfo;
