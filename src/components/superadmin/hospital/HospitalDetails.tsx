import { Fragment } from 'react';
import { HospitalOrganizationData } from '../../../types/superadmin';
import moment from 'moment/moment';
import Status from '../../global/Status';
import { Typography } from '../../global/dialog/Typography';
import { CustomTransparentCard } from '../../global/card/CustomCard';

interface HospitalDetailsProps {
  data: HospitalOrganizationData | null;
}

const HospitalDetails = ({ data }: HospitalDetailsProps) => {
  return (
    <Fragment>
      <CustomTransparentCard
        className={`w-full grid grid-cols-4 items-center gap-4 bg-white px-6 py-9 text-sm font-extrabold`}>
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

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Zip Code:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={data?.zip_code as string}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Total Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={data?.site_count as number}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Active Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={data?.activeSites as number}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Pending Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={data?.pendingSites as number}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Closed Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={data?.closedSites as number}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Suspended Operation Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Typography
            text={data?.deactivatedSites as number}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
          />
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Status:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          <Status
            className={`ml-3`}
            status={data?.status ?? '--'}
          />
        </div>
      </CustomTransparentCard>
    </Fragment>
  );
};

export default HospitalDetails;
