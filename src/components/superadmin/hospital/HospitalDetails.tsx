import { Fragment } from 'react';
import moment from 'moment/moment';
import {
  HospitalDetailsData,
  HospitalSiteCountData,
} from '@typeSpec/superadmin';
import Status from '@components/global/Status';
import { Typography } from '@components/global/dialog/Typography';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import { Spinner } from '@material-tailwind/react';

interface HospitalDetailsProps {
  data: HospitalDetailsData | null;
  hospitalDataLoading: boolean;
  siteData: HospitalSiteCountData | null;
  siteDataLoading: boolean;
}

const HospitalDetails = ({
  data,
  hospitalDataLoading,
  siteData,
  siteDataLoading,
}: HospitalDetailsProps) => {
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

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.name ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Email:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.email ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Phone:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.phone ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Created On:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={moment(data?.created_at).format('MMM DD. YYYY')}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Country:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.country ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`State:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.state ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`City:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.city ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Address:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.address ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Zip Code:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={data?.zip_code ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Total Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {siteDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteData?.totalSites ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Active Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {siteDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteData?.activeSites ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Pending Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {siteDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteData?.pendingSites ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Closed Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {siteDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteData?.closedSites ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Suspended Operation Sites:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {siteDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteData?.deactivatedSites ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </>
          )}
        </div>

        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Status:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {hospitalDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <div className={`ml-3`}>
              <Status status={data?.status ?? '--'} />
            </div>
          )}
        </div>
      </CustomTransparentCard>
    </Fragment>
  );
};

export default HospitalDetails;
