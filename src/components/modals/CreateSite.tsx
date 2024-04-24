import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ImageUpload from '@components/global/formInput/ImageUpload';
import { useCreateSite } from '@hooks/common/useCreateSite';
import {
  CheckboxInput,
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import {
  CreateSiteInput,
  CreateSiteInputSchema,
} from '@typeSpec/superadmin/forms';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';

interface CreateSiteModalProps {
  totalSites: number;
  reloadPage: () => void;
}

const CreateSite = ({ reloadPage, totalSites }: CreateSiteModalProps) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(!open);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSiteInput>({
    resolver: yupResolver(CreateSiteInputSchema),
  });

  const {
    // Values
    logo,
    allCountries,
    allCountryStates,

    // Functions
    onUpdateLogo,
    createNewSite,
    onUpdateCountry,
  } = useCreateSite(reloadPage, totalSites);

  return (
    <Fragment>
      <CustomBasicModal
        footer={
          <Fragment>
            <OutlinedButton
              click={handleSubmit(createNewSite)}
              text={`Add Site`}
              type={`secondary`}
              className={`min-w-[200px] mx-5`}
            />

            <OutlinedButton
              text={`Decline`}
              type={`danger`}
              className={`min-w-[200px] mx-5`}
              click={handleOpenModal}
            />
          </Fragment>
        }
        title={`Add New Site`}
        handler={handleOpenModal}
        open={open}
        size={'lg'}>
        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-6 grid-cols-[30%_70%]`}>
          <CustomTransparentCard
            className={`w-full h-full p-4 rounded-2xl max-h-[400px]`}>
            <ImageUpload
              bucketFolder={`/site_image`}
              url={logo}
              updateImageUrl={onUpdateLogo}
              label={`Site Logo`}
            />
          </CustomTransparentCard>

          <CustomTransparentCard className={`w-full h-full p-4 rounded-2xl`}>
            <div
              className={`w-full grid gap-6 grid-cols-1 mb-6 lg:grid-cols-2`}>
              <TextInput
                label={`Site Name`}
                className={`my-3`}
                errorMsg={errors.name?.message ?? ''}
                id={`name`}
                register={register}
              />

              <TextInput
                label={`Email`}
                className={`my-3`}
                errorMsg={errors.email?.message ?? ''}
                id={`email`}
                type={`email`}
                register={register}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-3`}>
              <SelectInput
                label={`Country`}
                options={allCountries}
                className={`w-full my-3`}
                register={register}
                id={'country'}
                errorMsg={errors.country?.message ?? ''}
                change={(e) => onUpdateCountry(e.target.value)}
              />

              <SelectInput
                label={`State`}
                options={allCountryStates}
                className={`w-full my-3`}
                register={register}
                id={'state'}
                errorMsg={errors.state?.message ?? ''}
              />

              <TextInput
                label={`City`}
                className={`my-3`}
                errorMsg={errors.city?.message ?? ''}
                id={`city`}
                register={register}
              />

              <TextInput
                label={`Zip Code`}
                className={`my-3`}
                errorMsg={errors.zip_code?.message ?? ''}
                type={'number'}
                id={`zip_code`}
                register={register}
              />

              <TextInput
                label={`Address`}
                className={`my-3`}
                errorMsg={errors.address?.message ?? ''}
                id={`address`}
                register={register}
              />

              <TextInput
                label={`Phone`}
                className={`my-3`}
                errorMsg={errors.phone?.message ?? ''}
                id={`phone`}
                type={'tel'}
                register={register}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-2 my-2 lg:grid-cols-4`}>
              <CheckboxInput
                label={`Is Private`}
                className={`my-3 w-full flex items-center`}
                id={`is_private`}
                register={register}
              />

              <CheckboxInput
                label={`Has Appointment`}
                className={`my-3 w-full flex items-center`}
                id={`has_appointment`}
                register={register}
              />

              <CheckboxInput
                label={`Has Care-Giver`}
                className={`my-3 w-full flex items-center`}
                id={`has_caregiver`}
                register={register}
              />

              <CheckboxInput
                label={`Has Clinical`}
                className={`my-3 w-full flex items-center`}
                id={`has_clinical`}
                register={register}
              />

              <CheckboxInput
                label={`Has Doctors`}
                className={`my-3 w-full flex items-center`}
                id={`has_doctor`}
                register={register}
              />

              <CheckboxInput
                label={`Has Emergency`}
                className={`my-3 w-full flex items-center`}
                id={`has_emergency`}
                register={register}
              />

              <CheckboxInput
                label={`Has Laboratory`}
                className={`my-3 w-full flex items-center`}
                id={`has_laboratory`}
                register={register}
              />

              <CheckboxInput
                label={`Has Medical Supply`}
                className={`my-3 w-full flex items-center`}
                id={`has_medical_supply`}
                register={register}
              />

              <CheckboxInput
                label={`Has Nursing`}
                className={`my-3 w-full flex items-center`}
                id={`has_nursing`}
                register={register}
              />

              <CheckboxInput
                label={`Has In-Patient`}
                className={`my-3 w-full flex items-center`}
                id={`has_inpatient`}
                register={register}
              />

              <CheckboxInput
                label={`Has Out-Patient`}
                className={`my-3 w-full flex items-center`}
                id={`has_outpatient`}
                register={register}
              />

              <CheckboxInput
                label={`Has Pharmacy`}
                className={`my-3 w-full flex items-center`}
                id={`has_pharmacy`}
                register={register}
              />

              <CheckboxInput
                label={`Has Physical Therapy`}
                className={`my-3 w-full flex items-center`}
                id={`has_physical_therapy`}
                register={register}
              />

              <CheckboxInput
                label={`Has Procedure`}
                className={`my-3 w-full flex items-center`}
                id={`has_procedure`}
                register={register}
              />

              <CheckboxInput
                label={`Has Radiology`}
                className={`my-3 w-full flex items-center`}
                id={`has_radiology`}
                register={register}
              />

              <CheckboxInput
                label={`Has Unit`}
                className={`my-3 w-full flex items-center`}
                id={`has_unit`}
                register={register}
              />

              <CheckboxInput
                label={`Has Vital`}
                className={`my-3 w-full flex items-center`}
                id={`has_vital`}
                register={register}
              />

              <CheckboxInput
                label={`Has Wallet`}
                className={`my-3 w-full flex items-center`}
                id={`has_wallet`}
                register={register}
              />
            </div>
          </CustomTransparentCard>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default CreateSite;
