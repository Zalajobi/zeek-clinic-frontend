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

const SiteRoutes = () => {
  const { siteId } = useParams();

  return (
    <Fragment>
      <div
        className={`w-full grid grid-cols-3 items-center gap-4 py-9 text-sm font-extrabold md:grid-cols-4 lg:grid-cols-6`}>
        <BeautifulLink
          icon={<ProviderIcon className={`mr-2`} />}
          text={`Providers`}
          to={`/site/provider/${siteId}`}
        />

        <BeautifulLink
          icon={<PatientIcon className={`mr-2`} />}
          text={`Patients`}
          to={`/site/patient/${siteId}`}
        />

        <BeautifulLink
          icon={<UnitIcon className={`mr-2`} />}
          text={`Units`}
          to={`/site/unit/${siteId}`}
        />

        <BeautifulLink
          icon={<DepartmentIcon className={`mr-2`} />}
          text={`Departments`}
          to={`/site/department/${siteId}`}
        />

        <BeautifulLink
          icon={<ServiceAreaIcon className={`mr-2`} />}
          text={`Service Area`}
          to={`/site/service-area/${siteId}`}
        />

        <BeautifulLink
          icon={<RolesIcon className={`mr-2`} />}
          text={`Roles`}
          to={`/site/role/${siteId}`}
        />

        <BeautifulLink
          icon={<AdminIcon className={`mr-2`} />}
          text={`Admin`}
          to={`/site/admin/${siteId}`}
        />
      </div>
    </Fragment>
  );
};

export default SiteRoutes;
