import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { BeautifulLink } from '@components/global/dialog/Typography';
import {
  AdminIcon,
  DepartmentIcon,
  PatientIcon,
  ProviderIcon,
  RolesIcon,
  ServiceAreaIcon,
  UnitIcon,
} from '@components/global/GlobalIcons';

interface SiteRoutesProps {
  platform: 'SUPERADMIN' | 'PROVIDER' | 'PATIENT' | 'ADMIN';
}

const SiteRoutes = ({ platform }: SiteRoutesProps) => {
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

  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold md:grid-cols-4 lg:grid-cols-6`}>
        <BeautifulLink
          icon={<ProviderIcon className={`mr-2`} />}
          text={`Providers`}
          to={`${prefixURL}/site/provider/${siteId}`}
        />

        <BeautifulLink
          icon={<PatientIcon className={`mr-2`} />}
          text={`Patients`}
          to={`${prefixURL}/site/patient/${siteId}`}
        />

        <BeautifulLink
          icon={<UnitIcon className={`mr-2`} />}
          text={`Units`}
          to={`${prefixURL}/site/unit/${siteId}`}
        />

        <BeautifulLink
          icon={<DepartmentIcon className={`mr-2`} />}
          text={`Departments`}
          to={`${prefixURL}/site/department/${siteId}`}
        />

        <BeautifulLink
          icon={<ServiceAreaIcon className={`mr-2`} />}
          text={`Service Area`}
          to={`${prefixURL}/site/service-area/${siteId}`}
        />

        <BeautifulLink
          icon={<RolesIcon className={`mr-2`} />}
          text={`Roles`}
          to={`${prefixURL}/site/role/${siteId}`}
        />

        <BeautifulLink
          icon={<AdminIcon className={`mr-2`} />}
          text={`Admin`}
          to={`${prefixURL}/site/admin/${siteId}`}
        />
      </div>
    </Fragment>
  );
};

export default SiteRoutes;
