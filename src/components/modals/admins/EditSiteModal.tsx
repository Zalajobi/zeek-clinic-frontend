import { Fragment } from 'react';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import {
  CheckboxInput,
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { useEditSite } from '@hooks/common/useEditSite';
import ImageUpload from '@components/global/formInput/ImageUpload';
import { Card } from '@material-tailwind/react';

interface EditSiteModalProps {
  open: boolean;
  handleOpen: () => void;
  siteId: string;
}

const EditSiteModal = ({ open, handleOpen, siteId }: EditSiteModalProps) => {
  const {
    siteData,
    siteLoading,
    logoUrl,
    siteStatus,

    // Functions
    onUpdateSiteName,
    onUpdateSiteLogo,
    onUpdateSiteEmail,
    onUpdateSitePhone,
    isSitePrivate,
    hasAppointment,
    hasCareGiver,
    hasClinical,
    hasDoctor,
    hasEmergency,
    hasLaboratory,
    hasMedicalSupply,
    hasNursing,
    hasInPatient,
    hasOutPatient,
    hasPharmacy,
    hasPhysicalTherapy,
    hasProcedure,
    hasRadiology,
    hasUnit,
    hasVital,
    hasWallet,
    onUpdateSiteStatus,
    updateSite,
  } = useEditSite(siteId, handleOpen);

  return (
    <Fragment>
      <CustomBasicModal
        title={`Edit ${siteData?.data?.name ?? 'Site'}`}
        handler={handleOpen}
        size={'lg'}
        open={open}
        footer={
          <Fragment>
            <OutlinedButton
              text={`Decline`}
              type={`danger`}
              className={`min-w-[200px] mx-5`}
              click={handleOpen}
            />

            <OutlinedButton
              click={updateSite}
              text={`Update Site`}
              type={`secondary`}
              className={`min-w-[200px] mx-5`}
            />
          </Fragment>
        }>
        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-4 md:grid-cols-[30%_70%]`}>
          <CustomTransparentCard
            className={`w-full h-full max-h- p-4 rounded-2xl max-h-[380px]`}>
            <ImageUpload
              bucketFolder={`/site_image`}
              url={logoUrl}
              updateImageUrl={onUpdateSiteLogo}
              label={`Site Logo`}
            />
          </CustomTransparentCard>

          <Card className={`w-full -h-full p-4 rounded-2xl overflow-scroll`}>
            <div
              className={`w-full grid gap-2 grid-cols-1 md:gap-4 md:grid-cols-2`}>
              <TextInput
                label={`Name`}
                className={`my-3`}
                id={`name`}
                change={onUpdateSiteName}
              />

              <TextInput
                label={`Email`}
                className={`my-3`}
                id={`email`}
                type={`email`}
                change={onUpdateSiteEmail}
              />

              <TextInput
                label={`Phone`}
                className={`my-3`}
                id={`phone`}
                type={'tel'}
                change={onUpdateSitePhone}
              />

              <SelectInput
                id={`Status`}
                label={`Status`}
                options={siteStatus}
                size={'lg'}
                change={onUpdateSiteStatus}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-2 my-2 md:grid-cols-4`}>
              <CheckboxInput
                label={`Is Private`}
                id={`is_private`}
                change={isSitePrivate}
              />

              <CheckboxInput
                label={`Has Appointment`}
                id={`has_appointment`}
                change={hasAppointment}
              />

              <CheckboxInput
                label={`Has Care-Giver`}
                id={`has_caregiver`}
                change={hasCareGiver}
              />

              <CheckboxInput
                label={`Has Clinical`}
                id={`has_clinical`}
                change={hasClinical}
              />

              <CheckboxInput
                label={`Has Doctors`}
                id={`has_doctor`}
                change={hasDoctor}
              />

              <CheckboxInput
                label={`Has Emergency`}
                id={`has_emergency`}
                change={hasEmergency}
              />

              <CheckboxInput
                label={`Has Laboratory`}
                id={`has_laboratory`}
                change={hasLaboratory}
              />

              <CheckboxInput
                label={`Has Medical Supply`}
                id={`has_medical_supply`}
                change={hasMedicalSupply}
              />

              <CheckboxInput
                label={`Has Nursing`}
                id={`has_nursing`}
                change={hasNursing}
              />

              <CheckboxInput
                label={`Has In-Patient`}
                id={`has_inpatient`}
                change={hasInPatient}
              />

              <CheckboxInput
                label={`Has Out-Patient`}
                id={`has_outpatient`}
                change={hasOutPatient}
              />

              <CheckboxInput
                label={`Has Pharmacy`}
                id={`has_pharmacy`}
                change={hasPharmacy}
              />

              <CheckboxInput
                label={`Has Physical Therapy`}
                id={`has_physical_therapy`}
                change={hasPhysicalTherapy}
              />

              <CheckboxInput
                label={`Has Procedure`}
                id={`has_procedure`}
                change={hasProcedure}
              />

              <CheckboxInput
                label={`Has Radiology`}
                id={`has_radiology`}
                change={hasRadiology}
              />

              <CheckboxInput
                label={`Has Unit`}
                id={`has_unit`}
                change={hasUnit}
              />

              <CheckboxInput
                label={`Has Vital`}
                id={`has_vital`}
                change={hasVital}
              />

              <CheckboxInput
                label={`Has Wallet`}
                id={`has_wallet`}
                change={hasWallet}
              />
            </div>
          </Card>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default EditSiteModal;
