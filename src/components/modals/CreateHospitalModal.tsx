import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCreateHospitalModal } from '@hooks/superadmin/useCreateHospitalModal';
import ImageUpload from '@components/global/formInput/ImageUpload';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import {
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { CreateHospitalInputSchema } from '@typeSpec/forms';
import { CreateHospitalInput } from '@typeSpec/forms/form.types';

interface CreateHospitalModalProps {
  open: boolean;
  handler: () => void;
}
const CreateHospitalModal = ({ open, handler }: CreateHospitalModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateHospitalInput>({
    resolver: yupResolver(CreateHospitalInputSchema),
  });

  const {
    // Fields
    logo,
    allCountries,
    allCountryStates,

    // Functions
    createNewOrganization,
    setLogo,
    onUpdateCountry,
  } = useCreateHospitalModal(handler);

  return (
    <Fragment>
      <CustomBasicModal
        footer={
          <Fragment>
            <OutlinedButton
              click={handleSubmit(createNewOrganization)}
              text={`Add Organization`}
              type={`secondary`}
              className={`min-w-[200px] mx-5`}
            />

            <OutlinedButton
              text={`Decline`}
              type={`danger`}
              className={`min-w-[200px] mx-5`}
              click={handler}
            />
          </Fragment>
        }
        title={`Add New Organization`}
        handler={handler}
        open={open}
        size={`lg`}
        className={`min-h-[500px]`}>
        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-6 md:grid-cols-[30%_70%]`}>
          <CustomTransparentCard
            className={`w-full h-full p-4 rounded-2xl max-h-[400px]`}>
            <ImageUpload
              bucketFolder={`/hospital_image`}
              url={logo}
              updateImageUrl={setLogo}
              label={`Site Logo`}
            />
          </CustomTransparentCard>

          <CustomTransparentCard
            className={`w-full h-full min-h-[500px] p-4 rounded-2xl`}>
            <div
              className={`w-full grid gap-6 grid-cols-1 mb-6 lg:grid-cols-2`}>
              <TextInput
                label={`Organization Name`}
                className={`my-3`}
                errorMsg={errors.name?.message ?? ''}
                id={`name`}
                register={register}
                type={'text'}
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
                type={'text'}
              />

              <TextInput
                label={`Zip Code`}
                className={`my-3`}
                errorMsg={errors.zipCode?.message ?? ''}
                id={`zipCode`}
                type={'text'}
                register={register}
              />

              <TextInput
                label={`Address`}
                className={`my-3`}
                errorMsg={errors.address?.message ?? ''}
                id={`address`}
                register={register}
                type={'text'}
              />

              <TextInput
                label={`Phone`}
                className={`my-3`}
                errorMsg={errors.phone?.message ?? ''}
                type={'tel'}
                id={`phone`}
                register={register}
              />
            </div>
          </CustomTransparentCard>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default CreateHospitalModal;
