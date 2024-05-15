import { Fragment } from 'react';
import { CustomCard } from '@components/global/card/CustomCard';
import { Typography } from '@components/global/dialog/Typography';
import { Spinner } from '@material-tailwind/react';
import { useSiteDetails } from '@hooks/components/useSiteDetails';
import moment from 'moment';
import Status from '@components/global/Status';
import { formatPhoneNumber } from '@util/index';

const SiteDetails = () => {
  const { siteData, isLoading } = useSiteDetails();

  return (
    <Fragment>
      <CustomCard
        className={`w-full flex flex-col items-center p-4 mb-4 md:grid md:grid-cols-2 md:p-9 lg:grid-cols-4`}>
        {/*Name*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Name:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={siteData?.data?.name ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Email*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Email:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={siteData?.data?.email ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Phone*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Phone:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  formatPhoneNumber(
                    siteData?.data?.phone,
                    siteData?.data?.country_code
                  ) ?? '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Country*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Country:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={siteData?.data?.country ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*State*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`State:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={siteData?.data?.state ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*City*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`City:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={siteData?.data?.city ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Status*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Status:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <div className={`ml-3`}>
              <Status status={siteData?.data?.status ?? '--'} />
            </div>
          )}
        </div>

        {/*Created At*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Created On:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {isLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  moment(siteData?.data?.created_at).format('MMM DD. YYYY') ??
                  '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default SiteDetails;
