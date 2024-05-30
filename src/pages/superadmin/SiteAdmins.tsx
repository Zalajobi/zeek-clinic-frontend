import SuperadminBaseTemplate from '@layout/superadmin/SuperadminBaseTemplate';
import { Typography } from '@components/global/dialog/Typography';
import { OutlinedButton } from '@components/global/CustomButton';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { HiPlusSm } from 'react-icons/hi';
import SiteDetails from '@components/common/SiteDetails';
import SiteRoutes from '@components/common/SiteRoutes';
import { useSiteAdmins } from '@hooks/pages/useSiteAdmins';
import AddAdminModal from '@components/modals/AddAdminModal';

const SiteAdmins = () => {
  const {
    // Values
    addAdminModal,

    // Functions
    handleAddAdminModal,
  } = useSiteAdmins();

  return (
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
              text={`Add Admin`}
              type={`primary`}
              className={`h-[38px] max-w-4xl`}
              click={handleAddAdminModal}
            />
          </div>
        </div>

        <SiteDetails />

        <SiteRoutes platform={'SUPERADMIN'} />
      </div>

      <AddAdminModal
        handler={handleAddAdminModal}
        open={addAdminModal}
      />
    </SuperadminBaseTemplate>
  );
};

export default SiteAdmins;
