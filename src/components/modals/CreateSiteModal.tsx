import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ImageUpload } from '@components/global/formInput/FileUpload';
import { useCreateSiteModal } from '@hooks/modals/useCreateSiteModal';
import {
  CheckboxInput,
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import { CreateSiteInputSchema } from '@typeSpec/forms';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { Card } from '@material-tailwind/react';
import { CreateSiteInput } from '@typeSpec/forms/form.types';

interface CreateSiteModalProps {
  open: boolean;
  handleOpen: () => void;
}

const CreateSiteModal = ({ open, handleOpen }: CreateSiteModalProps) => {
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
  } = useCreateSiteModal(handleOpen);

  return (
    <Fragment>
      <CustomBasicModal
        title={'Add New Site'}
        handler={handleOpen}
        size={'lg'}
        open={open}
        footer={
          <Fragment>
            <OutlinedButton
              text={`Cancel`}
              type={`danger`}
              click={handleOpen}
            />

            <OutlinedButton
              click={handleSubmit(createNewSite)}
              text={`Confirm`}
              type={`secondary`}
            />
          </Fragment>
        }>
        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-4 md:grid-cols-[30%_70%]`}>
          {/*Image Upload*/}
          <CustomTransparentCard
            className={`w-full h-full max-h- p-4 rounded-2xl max-h-[380px]`}>
            <ImageUpload
              bucketFolder={`/site_image`}
              url={logo}
              updateImageUrl={onUpdateLogo}
              label={`Site Logo`}
            />
          </CustomTransparentCard>

          <Card className={`w-full p-4 rounded-2xl h-[500px] overflow-scroll`}>
            <div
              className={`w-full grid gap-2 grid-cols-1 md:gap-4 md:grid-cols-2`}>
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
                change={onUpdateCountry}
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
                errorMsg={errors.zipCode?.message ?? ''}
                type={'text'}
                id={`zipCode`}
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
                type={'text'}
                register={register}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-2 my-2 md:grid-cols-4`}>
              <CheckboxInput
                label={`Is Private`}
                id={`is_private`}
                register={register}
              />

              <CheckboxInput
                label={`Has Appointment`}
                id={`has_appointment`}
                register={register}
              />

              <CheckboxInput
                label={`Has Care-Giver`}
                id={`has_caregiver`}
                register={register}
              />

              <CheckboxInput
                label={`Has Clinical`}
                id={`has_clinical`}
                register={register}
              />

              <CheckboxInput
                label={`Has Doctors`}
                id={`has_doctor`}
                register={register}
              />

              <CheckboxInput
                label={`Has Emergency`}
                id={`has_emergency`}
                register={register}
              />

              <CheckboxInput
                label={`Has Laboratory`}
                id={`has_laboratory`}
                register={register}
              />

              <CheckboxInput
                label={`Has Medical Supply`}
                id={`has_medical_supply`}
                register={register}
              />

              <CheckboxInput
                label={`Has Nursing`}
                id={`has_nursing`}
                register={register}
              />

              <CheckboxInput
                label={`Has In-Patient`}
                id={`has_inpatient`}
                register={register}
              />

              <CheckboxInput
                label={`Has Out-Patient`}
                id={`has_outpatient`}
                register={register}
              />

              <CheckboxInput
                label={`Has Pharmacy`}
                id={`has_pharmacy`}
                register={register}
              />

              <CheckboxInput
                label={`Has Physical Therapy`}
                id={`has_physical_therapy`}
                register={register}
              />

              <CheckboxInput
                label={`Has Procedure`}
                id={`has_procedure`}
                register={register}
              />

              <CheckboxInput
                label={`Has Radiology`}
                id={`has_radiology`}
                register={register}
              />

              <CheckboxInput
                label={`Has Unit`}
                id={`has_unit`}
                register={register}
              />

              <CheckboxInput
                label={`Has Vital`}
                id={`has_vital`}
                register={register}
              />

              <CheckboxInput
                label={`Has Wallet`}
                id={`has_wallet`}
                register={register}
              />
            </div>
          </Card>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default CreateSiteModal;
