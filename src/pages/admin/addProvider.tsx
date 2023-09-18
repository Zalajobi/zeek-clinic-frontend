import { Fragment } from 'react';
import { FaCalendarAlt, FaPhone, FaCity } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiIdentification } from 'react-icons/hi';
import { TbZoomInAreaFilled } from 'react-icons/tb';
import { BiRename } from 'react-icons/bi';
import { IoMdPersonAdd } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useAdminAddProvider from '../../hooks/admin/useAdminAddProvider';
import AdminBaseTemplate from '../../components/layout/admin/AdminBaseTemplate';
import ImageUpload from '../../components/global/formInput/ImageUpload';
import {
  CheckboxInput,
  DateInput,
  PhoneNumberInput,
  SelectInput,
  TextInput,
} from '../../components/global/formInput/CustomInput';
import {
  genderSelectInput,
  providersTitleSelectInput,
  relationshipStatus,
  religions,
} from '../../lib/constants/constants';
import {
  AdminAddProviderInput,
  AdminAddProviderInputSchema,
} from '../../types/superadmin/formTypes';
import { BasicFilledButton } from '../../components/global/CustomButton';
import { Typography } from '../../components/global/dialog/Typography';

export const AddProvider = () => {
  // tailwindElementsConfig()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminAddProviderInput>({
    resolver: yupResolver(AdminAddProviderInputSchema),
  });

  const {
    // Values
    profilePic,
    departments,
    allCountries,
    allCountryStates,
    phoneCode,
    roles,
    serviceArea,
    units,
    countryCode,

    // Functions
    setProfilePic,
    onSubmit,
    onUpdateCountry,
  } = useAdminAddProvider();

  return (
    <Fragment>
      <AdminBaseTemplate>
        <div className={`flex flex-col w-full`}>
          <div className={`flex w-full items-start`}>
            <Typography
              text={`Add New Provider`}
              Tag={`h2`}
            />
          </div>

          <div
            className={`w-full h-full p-6 grid grid-cols-1 gap-6 grid-cols-[30%_70%]`}>
            <div
              className={`w-full h-full p-4 rounded-2xl shadow-2xl shadow-[#52525b] max-h-[400px]`}>
              <ImageUpload
                bucketFolder={`/profile_image/providers`}
                url={profilePic}
                updateImageUrl={setProfilePic}
              />
            </div>

            <div
              className={`w-full h-full p-4 rounded-2xl shadow-2xl shadow-[#52525b]`}>
              <div
                className={`w-full grid gap-6 grid-cols-1 mb-2 lg:grid-cols-5`}>
                <SelectInput
                  label={`Title`}
                  options={providersTitleSelectInput}
                  className={`my-3`}
                  register={register}
                  id={'title'}
                  errorMsg={errors.title?.message ?? ''}
                />

                <TextInput
                  label={`First Name`}
                  className={`my-3 lg:col-span-2`}
                  errorMsg={errors.first_name?.message ?? ''}
                  id={`first_name`}
                  register={register}
                  icon={
                    <BiRename
                      size={20}
                      className={`${
                        errors.first_name?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />

                <PhoneNumberInput
                  country={countryCode}
                  change={(value) => console.log(value)}
                />

                <TextInput
                  label={`Last Name`}
                  className={`my-3 lg:col-span-2`}
                  errorMsg={errors.last_name?.message ?? ''}
                  id={`last_name`}
                  register={register}
                  icon={
                    <BiRename
                      size={20}
                      className={`${
                        errors.last_name?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />
              </div>

              <div
                className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-2`}>
                <TextInput
                  label={`Middle Name`}
                  className={`my-3`}
                  id={`middle_name`}
                  register={register}
                  icon={
                    <BiRename
                      size={20}
                      className={`${
                        errors.middle_name?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />

                <SelectInput
                  label={`Gender`}
                  options={genderSelectInput}
                  className={`my-3`}
                  register={register}
                  id={`gender`}
                  errorMsg={errors.gender?.message ?? ''}
                />
              </div>

              <div
                className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-3`}>
                <DateInput
                  label={`Date Or Birth`}
                  placeholder={`DD/MM/YYYY`}
                  className={`my-3`}
                  errorMsg={errors.dob?.message ?? ''}
                  id={`dob`}
                  register={register}
                  icon={
                    <FaCalendarAlt
                      size={20}
                      className={`${errors.dob?.message ? 'text-red-500' : ''}`}
                    />
                  }
                />

                <TextInput
                  label={`Email`}
                  placeholder={`jane@doe.com`}
                  className={`my-3 w-full`}
                  errorMsg={errors.email?.message ?? ''}
                  id={`email`}
                  register={register}
                  type={`email`}
                  icon={
                    <MdEmail
                      size={20}
                      className={`${
                        errors.email?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />

                {/*<TextInput*/}
                {/*  label={`Username`}*/}
                {/*  placeholder={`john_doe`}*/}
                {/*  className={`my-3 w-full`}*/}
                {/*  errorMsg={errors.username?.message ?? ''}*/}
                {/*  id={`username`}*/}
                {/*  register={register}*/}
                {/*  type={`text`}*/}
                {/*  icon={*/}
                {/*    <FaUser*/}
                {/*      size={20}*/}
                {/*      className={`${*/}
                {/*        errors.username?.message ? 'text-red-500' : ''*/}
                {/*      }`}*/}
                {/*    />*/}
                {/*  }*/}
                {/*/>*/}

                <TextInput
                  label={`Staff ID`}
                  placeholder={`NA92NS90D2KNS`}
                  className={`my-3 w-full`}
                  errorMsg={errors.staff_id?.message ?? ''}
                  id={`staff_id`}
                  register={register}
                  type={`text`}
                  icon={
                    <HiIdentification
                      size={20}
                      className={`${
                        errors.staff_id?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />
              </div>

              <div
                className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-2`}>
                <SelectInput
                  label={`Relationship Status`}
                  options={relationshipStatus}
                  className={`w-full my-3`}
                  register={register}
                  id={'relationship_status'}
                  errorMsg={errors.relationship_status?.message ?? ''}
                  enableFilter={true}
                />

                <SelectInput
                  label={`Religion`}
                  options={religions.sort((a, b) =>
                    a.placeholder.localeCompare(b.placeholder)
                  )}
                  className={`w-full my-3`}
                  register={register}
                  id={'religion'}
                  errorMsg={errors.religion?.message ?? ''}
                  enableFilter={true}
                />

                <SelectInput
                  label={`Department`}
                  options={departments}
                  className={`w-full my-3`}
                  register={register}
                  id={'department'}
                  errorMsg={errors.department?.message ?? ''}
                  enableFilter={true}
                />

                <SelectInput
                  label={`Role`}
                  options={roles}
                  className={`w-full my-3`}
                  register={register}
                  id={'role'}
                  errorMsg={errors.role?.message ?? ''}
                  enableFilter={true}
                />

                <SelectInput
                  label={`Service Area`}
                  options={serviceArea}
                  className={`w-full my-3`}
                  register={register}
                  id={'serviceArea'}
                  errorMsg={errors.serviceArea?.message ?? ''}
                  enableFilter={true}
                />

                <SelectInput
                  label={`Unit`}
                  options={units}
                  className={`w-full my-3`}
                  register={register}
                  id={'unit'}
                  errorMsg={errors.unit?.message ?? ''}
                  enableFilter={true}
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
                  enableFilter={true}
                  change={(e) => onUpdateCountry(e.target.value)}
                />

                <SelectInput
                  label={`State`}
                  options={allCountryStates}
                  className={`w-full my-3`}
                  register={register}
                  id={'state'}
                  errorMsg={errors.state?.message ?? ''}
                  enableFilter={true}
                />

                <TextInput
                  label={`City`}
                  className={`my-3 w-full`}
                  id={`city`}
                  register={register}
                  icon={
                    <FaCity
                      size={20}
                      className={`${
                        errors.city?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />
              </div>

              <div
                className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-3`}>
                <TextInput
                  label={`Address`}
                  className={`my-3 w-full`}
                  errorMsg={errors.address?.message ?? ''}
                  id={`address`}
                  register={register}
                  icon={
                    <TbZoomInAreaFilled
                      size={20}
                      className={`${
                        errors.address?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />

                <TextInput
                  label={`Zip Code`}
                  className={`my-3 w-full`}
                  errorMsg={errors.zip_code?.message ?? ''}
                  id={`zip_code`}
                  register={register}
                  icon={
                    <TbZoomInAreaFilled
                      size={20}
                      className={`${
                        errors.zip_code?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />

                <TextInput
                  label={`Phone Number`}
                  placeholder={`+2347053980998`}
                  className={`my-3 w-full`}
                  errorMsg={errors.phone?.message ?? ''}
                  id={`phone`}
                  register={register}
                  type={`tel`}
                  prefix={`${phoneCode ? '+' + phoneCode : ''}`}
                  icon={
                    <FaPhone
                      size={20}
                      className={`${
                        errors.phone?.message ? 'text-red-500' : ''
                      }`}
                    />
                  }
                />
              </div>

              <div
                className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-3`}>
                <CheckboxInput
                  label={`Consultant`}
                  className={`my-3 w-full flex items-center`}
                  id={`is_consultant`}
                  register={register}
                />

                <CheckboxInput
                  label={`Specialist`}
                  className={`my-3 w-full flex items-center`}
                  id={`is_specialist`}
                  register={register}
                />

                <CheckboxInput
                  label={`Appointments`}
                  className={`my-3 w-full flex items-center`}
                  id={`appointments`}
                  register={register}
                />
              </div>

              <div className={`w-full flex justify-center mt-8`}>
                <BasicFilledButton
                  click={handleSubmit(onSubmit)}
                  text={`Create Provider`}
                  type={`dark`}
                  iconBefore={
                    <IoMdPersonAdd
                      size={15}
                      className={`mr-1`}
                    />
                  }
                  className={`min-w-[100px] max-w-[200px]`}
                />
              </div>
            </div>
          </div>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AddProvider;
