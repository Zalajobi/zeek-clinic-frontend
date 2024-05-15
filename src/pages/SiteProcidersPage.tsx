import { Fragment } from 'react';
import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import SiteDetails from '@components/common/SiteDetails';

const SiteProvidersPage = () => {
  return (
    <Fragment>
      <SuperadminBaseTemplate>
        <div className={`w-full flex flex-col`}>
          <div className={`flex flex-col md:flex-row gap-4`}>
            <div className={`mr-auto`}>
              <Typography
                text={`Welcome`}
                size="4xl"
                weight={800}
                className="mb-4"
                Tag={'h1'}
              />
            </div>

            <div className={``}></div>
          </div>

          <SiteDetails />
        </div>
      </SuperadminBaseTemplate>
    </Fragment>
  );
};

export default SiteProvidersPage;
