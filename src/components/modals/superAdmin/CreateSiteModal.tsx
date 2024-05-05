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
import { useLoadGoogleCharts } from 'react-google-charts/dist/hooks';

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
  } = useCreateSite(handleOpen);

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
              click={handleSubmit(createNewSite)}
              text={`Add Site`}
              type={`secondary`}
              className={`min-w-[200px] mx-5`}
            />

            <OutlinedButton
              text={`Decline`}
              type={`danger`}
              className={`min-w-[200px] mx-5`}
              click={handleOpen}
            />
          </Fragment>
        }>
        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-4 md:grid-cols-[30%_70%]`}>
          {/*Image Upload*/}
          <CustomTransparentCard className={`w-full h-full p-4 rounded-2xl`}>
            <ImageUpload
              bucketFolder={`/site_image`}
              url={`logo`}
              updateImageUrl={(url) => console.log(url)}
              label={`Site Logo`}
            />
          </CustomTransparentCard>

          <CustomTransparentCard className={`w-full -h-full p-4 rounded-2xl`}>
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
          </CustomTransparentCard>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default CreateSiteModal;
