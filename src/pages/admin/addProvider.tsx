import { Fragment } from 'react';
import { FaCalendarAlt, FaEye, FaPhone, FaCity } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiIdentification } from 'react-icons/hi';
import { TbZoomInAreaFilled } from 'react-icons/tb';
import { BiRename } from 'react-icons/bi';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useAdminAddProvider from '../../hooks/admin/useAdminAddProvider';
import AdminBaseTemplate from '../../components/templates/admin/AdminBaseTemplate';
import Typography from '../../components/global/Typography';
import ImageUpload from '../../components/global/input/ImageUpload';
import {
  DateInput,
  SelectInput,
  TextInput,
} from '../../components/global/input/CustomInput';
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

export const AddProvider = () => {
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
            className={`grid grid-col-1 w-full h-full shadow-2xl p-6 my-6 gap-6 lg:grid-cols-4`}>
            <ImageUpload
              bucketFolder={`/hospital_image`}
              url={profilePic}
              updateImageUrl={setProfilePic}
            />

            <div
              className={`w-full grid grid-cols-1 gap-4 items-center lg:grid-cols-4 lg:col-span-3`}>
              <SelectInput
                label={`Title`}
                options={providersTitleSelectInput}
                className={`my-3 lg:col-span-2`}
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

              <TextInput
                label={`Middle Name`}
                className={`my-3 lg:col-span-2`}
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

              <SelectInput
                label={`Gender`}
                options={genderSelectInput}
                className={`my-3 lg:col-span-2`}
                register={register}
                id={`gender`}
                errorMsg={errors.gender?.message ?? ''}
              />

              <DateInput
                label={`Date Or Birth`}
                placeholder={`DD/MM/YYYY`}
                className={`my-3 lg:col-span-2`}
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
            </div>

            <div
              className={`grid grid-cols-1 lg:grid-cols-4 gap-6 lg:col-span-6`}>
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
                    className={`${errors.email?.message ? 'text-red-500' : ''}`}
                  />
                }
              />

              <TextInput
                label={`Password`}
                placeholder={`********`}
                className={`my-3 w-full`}
                errorMsg={errors.password?.message ?? ''}
                id={`password`}
                register={register}
                type={`password`}
                icon={
                  <FaEye
                    size={20}
                    className={`${
                      errors.password?.message ? 'text-red-500' : ''
                    }`}
                  />
                }
              />

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
                    className={`${errors.city?.message ? 'text-red-500' : ''}`}
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
                    className={`${errors.phone?.message ? 'text-red-500' : ''}`}
                  />
                }
              />
            </div>
          </div>

          <button onClick={handleSubmit(onSubmit)}>Submit</button>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AddProvider;
