import React, { Fragment } from 'react';
import { OutlinedButton } from '@components/global/CustomButton';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import ImageUpload from '@components/global/formInput/ImageUpload';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import { useAddPatientModal } from '@hooks/modals/useAddPatientModal';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  DepartmentPayload,
  ProviderPayload,
  ServiceAreaPayload,
} from '@typeSpec/payloads';
import { useForm } from 'react-hook-form';
import { CreatePatientInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreatePatientInputSchema } from '@typeSpec/forms';
import {
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import {
  genderSelectInput,
  relationshipStatus,
  religions,
  titleSelectInput,
} from '@lib/constants/constants';

interface AddPatientModalProps {
  handler: () => void;
  open: boolean;
}

const AddPatientModal = ({ handler, open }: AddPatientModalProps) => {
  const providerOptions: SelectInputFieldProps[] = [],
    deptOptions: SelectInputFieldProps[] = [],
    unitOptions: SelectInputFieldProps[] = [],
    serviceAreaOptions: SelectInputFieldProps[] = [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePatientInput>({
    resolver: yupResolver(CreatePatientInputSchema),
  });

  const {
    // Values
    providerData,
    providerDataLoading,
    departments,
    departmentsLoading,
    units,
    unitsLoading,
    serviceAreas,
    serviceAreasLoading,
    allCountries,
    profilePic,
    allCountryStates,

    // Functions
    setProfilePic,
    onUpdateCountry,
    handleCreateProvider,
  } = useAddPatientModal(handler);

  if (!providerDataLoading)
    providerData?.data?.providers?.map((provider: ProviderPayload) => {
      providerOptions.push({
        placeholder: `${provider.title} ${provider?.firstName} ${provider?.lastName} - ${provider.role}`,
        value: provider?.id,
      });
    });

  if (!departmentsLoading)
    departments?.data?.depts?.map((data: DepartmentPayload) => {
      deptOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });

  if (!unitsLoading)
    units?.data?.units?.map((data: DepartmentPayload) => {
      unitOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });

  if (!serviceAreasLoading)
    serviceAreas?.data?.serviceAreas?.map((data: ServiceAreaPayload) => {
      serviceAreaOptions.push({
        value: data?.id ?? '',
        placeholder: `${data?.name} - ${data?.type}` ?? '',
      });
    });

  return (
    <CustomBasicModal
      title={'Add New Patient'}
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
            click={handleSubmit(handleCreateProvider)}
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
            bucketFolder={`/site_image`}
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

            {/*Primary Provider*/}
            <SelectInput
              label={`Primary Provider`}
              options={providerOptions}
              className={`w-full my-3`}
              register={register}
              id={'providerId'}
              errorMsg={errors.providerId?.message ?? ''}
            />

            {/*Service Area*/}
            <SelectInput
              label={`Service Area`}
              options={serviceAreaOptions}
              className={`w-full my-3`}
              register={register}
              id={'serviceAreaId'}
              errorMsg={errors.serviceAreaId?.message ?? ''}
            />

            {/*Department*/}
            <SelectInput
              label={`Department`}
              options={deptOptions}
              className={`w-full my-3`}
              register={register}
              id={'departmentId'}
              errorMsg={errors.departmentId?.message ?? ''}
            />

            {/*Unit*/}
            <SelectInput
              label={`Unit`}
              options={unitOptions}
              className={`w-full my-3`}
              register={register}
              id={'unitId'}
              errorMsg={errors.unitId?.message ?? ''}
            />

            {/*Staff ID*/}
            <TextInput
              label={`Card Number`}
              errorMsg={errors.cardNumber?.message ?? ''}
              id={`cardNumber`}
              className={`my-3`}
              register={register}
              type={'text'}
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

            {/*address*/}
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

export default AddPatientModal;
