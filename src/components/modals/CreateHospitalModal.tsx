import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useCreateHospitalModal } from '../../hooks/superadmin/useCreateHospitalModal';
import ImageUpload from '../global/formInput/ImageUpload';
import { CustomBasicModal } from '../global/dialog/CustomModal';
import {
  BasicOutlineButton,
  ModalButtonOutlineLunch,
} from '../global/CustomButton';
import { CustomTransparentCard } from '../global/card/CustomCard';
import { SelectInput, TextInput } from '../global/formInput/CustomInput';
import {
  CreateHospitalInput,
  CreateHospitalInputSchema,
} from '../../typeSpec/superadmin/forms';

const CreateHospitalModal = () => {
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
  } = useCreateHospitalModal();

  return (
    <Fragment>
      <CustomBasicModal
        targetModalId={`createOrg`}
        footer={
          <Fragment>
            <BasicOutlineButton
              click={handleSubmit(createNewOrganization)}
              text={`Add Organization`}
              type={`secondary`}
              className={`min-w-[200px] mx-5`}
            />

            <ModalButtonOutlineLunch
              data-te-modal-dismiss
              text={`Decline`}
              type={`danger`}
              className={`min-w-[200px] mx-5`}
            />
          </Fragment>
        }
        title={`Add New Organization`}>
        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-6 grid-cols-[30%_70%]`}>
          <CustomTransparentCard
            className={`w-full h-full p-4 rounded-2xl max-h-[400px]`}>
            <ImageUpload
              bucketFolder={`/hospital_image`}
              url={logo}
              updateImageUrl={setLogo}
              label={`Site Logo`}
            />
          </CustomTransparentCard>

          <CustomTransparentCard className={`w-full h-full p-4 rounded-2xl`}>
            <div
              className={`w-full grid gap-6 grid-cols-1 mb-6 lg:grid-cols-2`}>
              <TextInput
                label={`Company Name`}
                className={`my-3`}
                errorMsg={errors.name?.message ?? ''}
                id={`name`}
                register={register}
                placeholder={`John Hopkins`}
              />

              <TextInput
                label={`Email`}
                className={`my-3`}
                errorMsg={errors.email?.message ?? ''}
                id={`email`}
                type={`email`}
                register={register}
                placeholder={`john@doe.com`}
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
                label={`city`}
                className={`my-3`}
                errorMsg={errors.city?.message ?? ''}
                id={`city`}
                register={register}
                placeholder={`Baltimore`}
              />

              <TextInput
                label={`Zip Code`}
                className={`my-3`}
                errorMsg={errors.zip_code?.message ?? ''}
                id={`zip_code`}
                type={'number'}
                register={register}
                placeholder={`101231`}
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
                type={'tel'}
                id={`zip_code`}
                register={register}
                placeholder={`+170539802`}
              />
            </div>
          </CustomTransparentCard>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default CreateHospitalModal;
