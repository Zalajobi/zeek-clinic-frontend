import { Fragment } from 'react';
import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import SiteDetails from '@components/common/SiteDetails';
import { OutlinedButton } from '@components/global/CustomButton';
import { HiPlusSm } from 'react-icons/hi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import AddProviderModal from '@components/modals/AddProviderModal';
import { useSiteProvidersPage } from '@hooks/useSiteProvidersPage';

const SiteProvidersPage = () => {
  const {
    // Values
    addProviderModal,

    // Functions
    handleAddProviderModal,
  } = useSiteProvidersPage();

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

            <div className={`ml-auto flex flex-row gap-4`}>
              <OutlinedButton
                text={`Bulk Create`}
                type={'primary'}
                className={`h-[38px] max-w-4xl`}
                iconBefore={
                  <FaCloudUploadAlt
                    size={20}
                    className={`mr-2`}
                  />
                }
              />

              <OutlinedButton
                iconBefore={
                  <HiPlusSm
                    size={20}
                    className={`mr-2`}
                  />
                }
                text={`Add Provider`}
                type={`primary`}
                className={`h-[38px] max-w-4xl`}
                click={handleAddProviderModal}
              />
            </div>
          </div>

          <SiteDetails />
        </div>
      </SuperadminBaseTemplate>

      <AddProviderModal
        open={addProviderModal}
        handler={handleAddProviderModal}
      />
    </Fragment>
  );
};

export default SiteProvidersPage;
