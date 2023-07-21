import { Fragment } from 'react';
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
} from '../../lib/constants/constants';
import { useForm } from 'react-hook-form';
import {
  AdminAddProviderInput,
  AdminAddProviderInputSchema,
} from '../../types/superadmin/formTypes';
import { yupResolver } from '@hookform/resolvers/yup';

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
              />

              <TextInput
                label={`Middle Name`}
                className={`my-3 lg:col-span-2`}
                id={`middle_name`}
                register={register}
              />

              <TextInput
                label={`Last Name`}
                className={`my-3 lg:col-span-2`}
                errorMsg={errors.last_name?.message ?? ''}
                id={`last_name`}
                register={register}
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
              />

              <TextInput
                label={`Email`}
                placeholder={`jane@doe.com`}
                className={`my-3 lg:col-span-2`}
                errorMsg={errors.email?.message ?? ''}
                id={`email`}
                register={register}
                type={`email`}
              />

              <TextInput
                label={`Staff ID`}
                placeholder={`NA92NS90D2KNS`}
                className={`my-3 lg:col-span-2`}
                errorMsg={errors.staff_id?.message ?? ''}
                id={`staff_id`}
                register={register}
                type={`text`}
              />
            </div>

            <div
              className={`grid grid-cols-1 lg:grid-cols-4 gap-6 lg:col-span-6`}>
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
              />

              <TextInput
                label={`Phone Number`}
                placeholder={`+2347053980998`}
                className={`my-3 w-full`}
                errorMsg={errors.phone?.message ?? ''}
                id={`phone`}
                register={register}
                type={`tel`}
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
