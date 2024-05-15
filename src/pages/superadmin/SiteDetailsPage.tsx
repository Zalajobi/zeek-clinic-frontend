import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import SiteDetails from '@components/superadmin/SiteDetails';

const SiteDetailsPage = () => {
  return (
    <SuperadminBaseTemplate>
      <div className={`w-full flex flex-col`}>
        <SiteDetails />

        <div className={`grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4`}>
          <h1>Site Details</h1>
          <h1>Site Details</h1>
          <h1>Site Details</h1>
          <h1>Site Details</h1>
          <h1>Site Details</h1>
        </div>
      </div>
    </SuperadminBaseTemplate>
  );
};

export default SiteDetailsPage;
