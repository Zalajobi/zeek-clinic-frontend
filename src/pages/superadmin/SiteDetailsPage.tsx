import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import SiteDetails from '@components/common/SiteDetails';
import LatestDepartments from '@components/LatestDepartments';

const SiteDetailsPage = () => {
  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <Typography
          text={`Welcome`}
          size="4xl"
          weight={800}
          className="mb-4"
          Tag={'h1'}
        />

        <SiteDetails />

        <div className="flex flex-col gap-4 my-6 md:grid md:grid-cols-2 lg:grid-cols-4">
          <LatestDepartments />

          <h1>Site Details</h1>

          <h1>Site Details</h1>

          <h1>Site Details</h1>
        </div>
      </div>
    </SuperadminBaseTemplate>
  );
};

export default SiteDetailsPage;
