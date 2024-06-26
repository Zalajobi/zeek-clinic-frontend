import { Fragment } from 'react';
import { CustomCard } from '@components/global/card/CustomCard';
import { Typography } from '@components/global/dialog/Typography';
import { Spinner } from '@material-tailwind/react';
import { useSiteDetails } from '@hooks/components/useSiteDetails';
import moment from 'moment';
import Status from '@components/global/Status';
import { formatPhoneNumber } from '@util/index';

const SiteDetails = () => {
  const {
    siteData,
    isLoading,
    roleCount,
    roleCountLoading,
    departmentCount,
    departmentCountLoading,
    patientsCount,
    patientsCountLoading,
    providersCount,
    providersCountLoading,
    serviceAreaCount,
    serviceAreaCountLoading,
    unitCount,
    unitCountLoading,
    adminCount,
    adminCountLoading,
  } = useSiteDetails();

  return (
    <Fragment>
      <CustomCard
        className={`w-full flex flex-col items-center p-4 mb-4 md:grid md:grid-cols-3 md:p-9 lg:grid-cols-4`}>
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
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
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
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
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
                    siteData?.data?.phone ?? 0,
                    siteData?.data?.countryCode ?? 'NG'
                  ) ?? '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
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
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
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
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
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
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
              />
            </Fragment>
          )}
        </div>

        {/*Zip Code*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`ZipCode:`}
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
                text={siteData?.data?.zipCode ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
              />
            </Fragment>
          )}
        </div>

        {/*Address*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Address:`}
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
                text={siteData?.data?.address ?? '--'}
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3 truncate`}
              />
            </Fragment>
          )}
        </div>

        {/*Roles Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Roles:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {roleCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(roleCount?.data?.totalRows ?? 0)?.toLocaleString() ??
                  '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*ServiceArea Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Service Area:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {serviceAreaCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(
                    serviceAreaCount?.data?.totalRows ?? 0
                  )?.toLocaleString() ?? '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Department Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Departments:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {departmentCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(
                    departmentCount?.data?.totalRows ?? 0
                  )?.toLocaleString() ?? '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Unit Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Units:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {unitCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(unitCount?.data?.totalRows ?? 0)?.toLocaleString() ??
                  '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Admin Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Admins:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {adminCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(adminCount?.data?.totalRows ?? 0)?.toLocaleString() ??
                  '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Patients Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Patients:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {patientsCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(
                    patientsCount?.data?.totalRows ?? 0
                  )?.toLocaleString() ?? '--'
                }
                Tag={'p'}
                size={'sm'}
                className={`text-[color:var(--text-color)] dark:text-white mt-0 ml-3`}
              />
            </Fragment>
          )}
        </div>

        {/*Patients Count*/}
        <div className={`flex flex-row items-center py-3`}>
          <Typography
            text={`Providers:`}
            Tag={'p'}
            size={'sm'}
            className={`text-[color:var(--label-color)]`}
          />

          {providersCountLoading ? (
            <Fragment>
              <Spinner className="h-4 w-4 ml-3" />
            </Fragment>
          ) : (
            <Fragment>
              <Typography
                text={
                  Number(
                    providersCount?.data?.totalRows ?? 0
                  )?.toLocaleString() ?? '--'
                }
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
                  moment(siteData?.data?.createdAt).format('MMM DD. YYYY') ??
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
