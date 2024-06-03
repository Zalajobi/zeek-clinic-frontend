import { Fragment } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BeautifulLink } from '@components/global/dialog/Typography';
import {
  AdminIcon,
  DepartmentIcon,
  PatientIcon,
  ProviderIcon,
  RolesIcon,
  ServiceAreaIcon,
  SiteIcon,
  UnitIcon,
} from '@components/global/GlobalIcons';

interface SiteRoutesProps {
  platform: 'SUPERADMIN' | 'PROVIDER' | 'PATIENT' | 'ADMIN';
}

const SiteRoutes = ({ platform }: SiteRoutesProps) => {
  const { pathname } = useLocation();
  const { siteId } = useParams();
  let prefixURL = '';

  switch (platform) {
    case 'SUPERADMIN':
      prefixURL = '/superadmin';
      break;
    case 'PROVIDER':
      prefixURL = '/care';
      break;
    case 'ADMIN':
      prefixURL = '/admin';
      break;
    case 'PATIENT':
      prefixURL = '/patient';
      break;
  }

  const isCurrentPath = (compareWith: string): boolean => {
    return pathname.toLowerCase() === compareWith.toLowerCase();
  };

  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold md:grid-cols-4 lg:grid-cols-6`}>
        <BeautifulLink
          icon={
            <SiteIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Site`}
          to={`${prefixURL}/site/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <ProviderIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/provider/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Providers`}
          to={`${prefixURL}/site/provider/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/provider/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/provider/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <PatientIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/patient/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Patients`}
          to={`${prefixURL}/site/patient/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/patient/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/patient/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <UnitIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/unit/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Units`}
          to={`${prefixURL}/site/unit/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/unit/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/unit/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <DepartmentIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/department/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Departments`}
          to={`${prefixURL}/site/department/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/department/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/department/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <ServiceAreaIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/service-area/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Service Area`}
          to={`${prefixURL}/site/service-area/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/service-area/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/service-area/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <RolesIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/role/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Roles`}
          to={`${prefixURL}/site/role/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/role/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/role/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />

        <BeautifulLink
          icon={
            <AdminIcon
              className={`mr-2`}
              color={
                isCurrentPath(`${prefixURL}/site/admin/${siteId}`)
                  ? 'white'
                  : '#3975AE'
              }
            />
          }
          text={`Admin`}
          to={`${prefixURL}/site/admin/${siteId}`}
          className={`${
            isCurrentPath(`${prefixURL}/site/admin/${siteId}`)
              ? '!bg-[#3975AE]'
              : '!bg-white'
          }`}
          textClassName={`${
            isCurrentPath(`${prefixURL}/site/admin/${siteId}`)
              ? '!text-white'
              : '!text-[#3975AE]'
          }`}
        />
      </div>
    </Fragment>
  );
};

export default SiteRoutes;
