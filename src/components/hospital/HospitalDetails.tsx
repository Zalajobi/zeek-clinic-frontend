import { Fragment } from 'react';
import moment from 'moment/moment';
import Status from '@components/global/Status';
import { Typography } from '@components/global/dialog/Typography';
import { CustomCard } from '@components/global/card/CustomCard';
import { Spinner } from '@material-tailwind/react';
import { useHospitalDetails } from '@hooks/components/useHospitalDetails';
import { formatPhoneNumber } from '@util/index';

const HospitalDetails = () => {
  const {
    hospitalData,
    hospitalDataLoading,
    siteCountData,
    siteCountDataLoading,
  } = useHospitalDetails();

  return (
    <Fragment>
      <CustomCard className={`w-full grid grid-cols-4 items-center gap-4 p-9`}>
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
                text={hospitalData?.data?.name ?? '--'}
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
                text={hospitalData?.data?.email ?? '--'}
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
                text={
                  formatPhoneNumber(
                    hospitalData?.data?.phone,
                    hospitalData?.data?.countryCode
                  ) ?? '--'
                }
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
                text={moment(hospitalData?.data?.createdAt).format(
                  'MMM DD. YYYY'
                )}
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
                text={hospitalData?.data?.country ?? '--'}
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
                text={hospitalData?.data?.state ?? '--'}
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
                text={hospitalData?.data?.city ?? '--'}
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
                text={hospitalData?.data?.address ?? '--'}
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
                text={hospitalData?.data?.zipCode ?? '--'}
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

          {siteCountDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteCountData?.data?.totalSites ?? '--'}
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

          {siteCountDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteCountData?.data?.activeSites ?? '--'}
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

          {siteCountDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteCountData?.data?.pendingSites ?? '--'}
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

          {siteCountDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteCountData?.data?.closedSites ?? '--'}
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

          {siteCountDataLoading ? (
            <>
              <Spinner className="h-4 w-4 ml-3" />
            </>
          ) : (
            <>
              <Typography
                text={siteCountData?.data?.deactivatedSites ?? '--'}
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
              <Status status={hospitalData?.data?.status ?? '--'} />
            </div>
          )}
        </div>
      </CustomCard>
    </Fragment>
  );
};

export default HospitalDetails;
