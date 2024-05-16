import React, { Fragment } from 'react';
import { OutlinedButton } from '@components/global/CustomButton';
import { useAddProviderModal } from '@hooks/modals/useAddProviderModal';
import { CustomTransparentCard } from '@components/global/card/CustomCard';
import ImageUpload from '@components/global/formInput/ImageUpload';
import { CustomBasicModal } from '@components/global/dialog/CustomModal';
import {
  CheckboxInput,
  SelectInput,
  TextInput,
} from '@components/global/formInput/CustomInput';
import { useForm } from 'react-hook-form';
import { CreateProviderInput } from '@typeSpec/forms/form.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateProviderInputSchema } from '@typeSpec/forms';
import {
  genderSelectInput,
  titleSelectInput,
  relationshipStatus,
  religions,
} from '@lib/constants/constants';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  DepartmentPayload,
  RolesPayload,
  ServiceAreaPayload,
} from '@typeSpec/payloads';

interface AddProviderModalProps {
  open: boolean;
  handler: () => void;
}

const AddProviderModal = ({ open, handler }: AddProviderModalProps) => {
  const deptOptions: SelectInputFieldProps[] = [],
    unitOptions: SelectInputFieldProps[] = [],
    serviceAreaOptions: SelectInputFieldProps[] = [],
    roleOptions: SelectInputFieldProps[] = [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProviderInput>({
    resolver: yupResolver(CreateProviderInputSchema),
  });

  const {
    // Values
    logo,
    allCountries,
    allCountryStates,
    departments,
    departmentsLoading,
    units,
    unitsLoading,
    serviceAreas,
    serviceAreasLoading,
    roles,
    rolesLoading,

    // Functions
    onUpdateCountry,
    setLogo,
    createProvider,
  } = useAddProviderModal(handler);

  if (!departmentsLoading) {
    departments?.data?.depts?.map((data: DepartmentPayload) => {
      deptOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });
  }

  if (!unitsLoading) {
    units?.data?.units?.map((data: DepartmentPayload) => {
      unitOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });
  }

  if (!serviceAreasLoading) {
    serviceAreas?.data?.serviceAreas?.map((data: ServiceAreaPayload) => {
      serviceAreaOptions.push({
        value: data?.id ?? '',
        placeholder: `${data?.name} - ${data?.type}` ?? '',
      });
    });
  }

  if (!rolesLoading) {
    roles?.data?.roles?.map((data: RolesPayload) => {
      roleOptions.push({
        value: data?.id ?? '',
        placeholder: data?.name ?? '',
      });
    });
  }

  return (
    <Fragment>
      <CustomBasicModal
        title={'Add New Site'}
        handler={handler}
        size={'lg'}
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
              click={handleSubmit(createProvider)}
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
              url={logo}
              updateImageUrl={setLogo}
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
                errorMsg={errors.first_name?.message ?? ''}
                id={`name`}
                register={register}
              />

              {/*Last name*/}
              <TextInput
                label={`Last Name`}
                className={`my-3`}
                errorMsg={errors.last_name?.message ?? ''}
                id={`last_name`}
                type={`text`}
                register={register}
              />

              {/*Middle Name*/}
              <TextInput
                label={`Middle Name`}
                className={`my-3`}
                id={`middle_name`}
                errorMsg={errors.middle_name?.message ?? ''}
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
                id={`marital_status`}
                errorMsg={errors.marital_status?.message ?? ''}
              />

              {/*Service Area*/}
              <SelectInput
                label={`Service Area`}
                options={serviceAreaOptions}
                className={`w-full my-3`}
                register={register}
                id={'serviceArea'}
                errorMsg={errors.serviceArea?.message ?? ''}
              />

              {/*Department*/}
              <SelectInput
                label={`Department`}
                options={deptOptions}
                className={`w-full my-3`}
                register={register}
                id={'department'}
                errorMsg={errors.department?.message ?? ''}
              />

              {/*Unit*/}
              <SelectInput
                label={`Unit`}
                options={unitOptions}
                className={`w-full my-3`}
                register={register}
                id={'unit'}
                errorMsg={errors.unit?.message ?? ''}
              />

              {/*Roles*/}
              <SelectInput
                label={`Role`}
                options={roleOptions}
                className={`w-full my-3`}
                register={register}
                id={'role'}
                errorMsg={errors.role?.message ?? ''}
              />

              {/*Staff ID*/}
              <TextInput
                label={`Staff ID`}
                errorMsg={errors.staff_id?.message ?? ''}
                id={`staff_id`}
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
                errorMsg={errors.zip_code?.message ?? ''}
                id={`zip_code`}
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
                errorMsg={errors.address_two?.message ?? ''}
                id={`address_two`}
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
                register={register}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-2 my-2 md:grid-cols-3 overscroll-y-auto`}>
              <CheckboxInput
                label={`Is Consultant`}
                id={`is_consultant`}
                register={register}
              />

              <CheckboxInput
                label={`Is Specialist`}
                id={`is_specialist`}
                register={register}
              />

              <CheckboxInput
                label={`Has Appointment`}
                id={`appointments`}
                register={register}
              />
            </div>
          </CustomTransparentCard>
        </div>
      </CustomBasicModal>
    </Fragment>
  );
};

export default AddProviderModal;
