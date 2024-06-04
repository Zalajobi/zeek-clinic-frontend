import React, { Fragment } from 'react';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { useForm } from 'react-hook-form';
import { CreateAdminUserInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateAdminUserInputSchema } from '@typeSpec/forms';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import { ImageUpload } from '@components/global/formInput/FileUpload';
import { useAddAdminModal } from '@hooks/modals/useAddAdminModal';
import {
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import {
  adminRoles,
  genderSelectInput,
  relationshipStatus,
  religions,
  titleSelectInput,
} from '@lib/constants/constants';

interface AddAdminModalProps {
  open: boolean;
  handler: () => void;
}

const AddAdminModal = ({ open, handler }: AddAdminModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdminUserInput>({
    resolver: yupResolver(CreateAdminUserInputSchema),
  });

  const {
    // Values
    profilePic,
    allCountries,
    allCountryStates,

    // Functions
    setProfilePic,
    onUpdateCountry,
    handleCreateAdmin,
  } = useAddAdminModal(handler);

  return (
    <CustomBasicModal
      title={'Add Admin'}
      handler={handler}
      size={'xl'}
      className="h-full w-full"
      open={open}
      footer={
        <Fragment>
          <OutlinedButton
            text={`Cancel`}
            type={`danger`}
            click={handler}
          />

          <OutlinedButton
            click={handleSubmit(handleCreateAdmin)}
            text={`Confirm`}
            type={`secondary`}
          />
        </Fragment>
      }>
      <div
        className={`w-full h-full p-6 grid grid-cols-1 gap-4 md:grid-cols-[30%_70%] mb-4 min-h-[900px]`}>
        {/*Image Upload*/}
        <CustomTransparentCard
          className={`w-full h-full max-h- p-4 rounded-2xl max-h-[380px]`}>
          <ImageUpload
            bucketFolder={`/profile/admin`}
            url={profilePic}
            updateImageUrl={setProfilePic}
            label={`Site Logo`}
          />
        </CustomTransparentCard>

        <CustomTransparentCard
          className={`w-full h-full p-4 rounded-2xl overflow-scroll overscroll-y-auto`}>
          <div
            className={`w-full grid gap-2 grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3`}>
            {/*Title*/}
            <SelectInput
              label={`Title`}
              options={titleSelectInput}
              className={`my-3`}
              register={register}
              id={`title`}
              errorMsg={errors.title?.message ?? ''}
            />

            {/*First Name*/}
            <TextInput
              label={`First Name`}
              className={`my-3`}
              errorMsg={errors.firstName?.message ?? ''}
              id={`firstName`}
              register={register}
            />

            {/*Last name*/}
            <TextInput
              label={`Last Name`}
              className={`my-3`}
              errorMsg={errors.lastName?.message ?? ''}
              id={`lastName`}
              type={`text`}
              register={register}
            />

            {/*Middle Name*/}
            <TextInput
              label={`Middle Name`}
              className={`my-3`}
              id={`middleName`}
              errorMsg={errors.middleName?.message ?? ''}
              type={`text`}
              register={register}
            />

            {/*Email*/}
            <TextInput
              label={`Email`}
              className={`my-3`}
              id={`email`}
              type={`email`}
              register={register}
              errorMsg={errors.email?.message ?? ''}
            />

            {/*Gender*/}
            <SelectInput
              label={`Gender`}
              options={genderSelectInput}
              className={`my-3`}
              register={register}
              id={`gender`}
              errorMsg={errors.gender?.message ?? ''}
            />

            {/*Staff ID*/}
            <TextInput
              label={`Staff ID`}
              errorMsg={errors.staffId?.message ?? ''}
              id={`staffId`}
              className={`my-3`}
              register={register}
              type={'text'}
            />

            {/*Role*/}
            <SelectInput
              label={`Role`}
              options={adminRoles}
              className={`my-3`}
              register={register}
              id={`role`}
              errorMsg={errors.role?.message ?? ''}
            />

            {/*DOB*/}
            <TextInput
              label={`Date Of Birth`}
              errorMsg={errors.dob?.message ?? ''}
              id={`dob`}
              className={`my-3`}
              register={register}
              type={'date'}
            />

            {/*Religion*/}
            <SelectInput
              label={`Religion`}
              options={religions}
              className={`my-3`}
              register={register}
              id={`religion`}
              errorMsg={errors.religion?.message ?? ''}
            />

            {/*Marital Status*/}
            <SelectInput
              label={`Relationship Status`}
              options={relationshipStatus}
              className={`my-3`}
              register={register}
              id={`maritalStatus`}
              errorMsg={errors.maritalStatus?.message ?? ''}
            />

            {/*Country*/}
            <SelectInput
              label={`Country`}
              options={allCountries}
              className={`w-full my-3`}
              register={register}
              id={'country'}
              errorMsg={errors.country?.message ?? ''}
              change={onUpdateCountry}
            />

            {/*State*/}
            <SelectInput
              label={`State`}
              options={allCountryStates}
              className={`w-full my-3`}
              register={register}
              id={'state'}
              errorMsg={errors.state?.message ?? ''}
            />

            {/*City*/}
            <TextInput
              label={`City`}
              errorMsg={errors.city?.message ?? ''}
              id={`city`}
              className={`my-3`}
              register={register}
              type={'text'}
            />

            {/*Zip Code*/}
            <TextInput
              label={`Zip Code`}
              errorMsg={errors.zipCode?.message ?? ''}
              id={`zipCode`}
              className={`my-3`}
              register={register}
              type={'text'}
            />

            {/*address*/}
            <TextInput
              label={`Primary Address`}
              errorMsg={errors.address?.message ?? ''}
              id={`address`}
              className={`my-3`}
              register={register}
              type={'text'}
            />

            {/*Alternate address*/}
            <TextInput
              label={`Alternate Address`}
              errorMsg={errors.alternateAddress?.message ?? ''}
              id={`alternateAddress`}
              className={`my-3`}
              register={register}
              type={'text'}
            />

            {/*Phone Number*/}
            <TextInput
              label={`Phone Number`}
              className={`my-3`}
              id={`phone`}
              type={`tel`}
              errorMsg={errors.phone?.message ?? ''}
              register={register}
            />
          </div>
        </CustomTransparentCard>
      </div>
    </CustomBasicModal>
  );
};

export default AddAdminModal;
