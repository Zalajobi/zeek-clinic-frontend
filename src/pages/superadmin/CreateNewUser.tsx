import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Text from '../../components/global/dialog/Text';
import { useSuperadminCreateAdminUser } from '../../hooks/superadmin/useSuperadminCreateAdminUser';
import ImageUpload from '../../components/global/formInput/ImageUpload';
import SuperadminBaseTemplate from '../../components/templates/superadmin/SuperadminBaseTemplate';
import {
  availableTitles,
  genderSelectInput,
} from '../../lib/constants/constants';
import { Typography } from '../../components/global/dialog/Typography';
import { CustomCard } from '../../components/global/card/CustomCard';
import {
  DateInput,
  SelectInput,
  TextInput,
} from '../../components/global/formInput/CustomInput';
import {
  CreateAdminUserInput,
  CreateAdminUserInputSchema,
} from '../../types/superadmin/forms';

const CreateNewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAdminUserInput>({
    resolver: yupResolver(CreateAdminUserInputSchema),
  });

  const {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allDepartments,
    allRoles,
    profileImgURL,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    setProfileImgURL,
    onUpdatePhoneNumber,
  } = useSuperadminCreateAdminUser();

  return (
    <SuperadminBaseTemplate>
      <div className={`flex flex-col w-full`}>
        <div className={`flex w-full items-start`}>
          <Typography
            text={`Add Admin`}
            Tag={`h2`}
            size={'4xl'}
          />
        </div>

        <div
          className={`w-full h-full p-6 grid grid-cols-1 gap-6 grid-cols-[30%_70%]`}>
          <CustomCard
            className={`w-full h-full p-4 rounded-2xl shadow-2xl shadow-[#52525b] max-h-[400px]`}>
            <ImageUpload
              bucketFolder={`/profile_image/providers`}
              url={profileImgURL}
              updateImageUrl={setProfileImgURL}
            />
          </CustomCard>

          <CustomCard>
            <div
              className={`w-full grid gap-6 grid-cols-1 mb-5 lg:grid-cols-5`}>
              {/*Title*/}
              <SelectInput
                label={`Title`}
                options={availableTitles}
                className={`my-3`}
                register={register}
                id={'title'}
                errorMsg={errors.title?.message ?? ''}
              />

              {/*First Name*/}
              <TextInput
                label={`First Name`}
                className={`my-3 lg:col-span-2`}
                errorMsg={errors.first_name?.message ?? ''}
                id={`first_name`}
                register={register}
              />

              {/*Last Name*/}
              <TextInput
                label={`Last Name`}
                className={`my-3 lg:col-span-2`}
                errorMsg={errors.last_name?.message ?? ''}
                id={`last_name`}
                register={register}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-2`}>
              {/*Middle Name*/}
              <TextInput
                label={`Other Name`}
                className={`my-3`}
                id={`other_name`}
                register={register}
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
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-3`}>
              {/*DOB*/}
              <DateInput
                label={`Date Or Birth`}
                placeholder={`DD/MM/YYYY`}
                className={`my-3`}
                errorMsg={errors.dob?.message ?? ''}
                id={`dob`}
                register={register}
              />

              {/*Email*/}
              <TextInput
                label={`Email`}
                placeholder={`jane@doe.com`}
                className={`my-3 w-full`}
                errorMsg={errors.email?.message ?? ''}
                id={`email`}
                register={register}
                type={`email`}
              />

              {/*Username*/}
              <TextInput
                label={`Username`}
                placeholder={`jane@doe.com`}
                className={`my-3 w-full`}
                errorMsg={errors.username?.message ?? ''}
                id={`username`}
                register={register}
                type={`text`}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-2`}>
              {/*Departments*/}
              <SelectInput
                label={`Department`}
                options={allDepartments}
                className={`my-3`}
                register={register}
                id={`department`}
                enableFilter={true}
                errorMsg={errors.department?.message ?? ''}
              />

              {/*Roles*/}
              <SelectInput
                label={`Role`}
                options={allRoles}
                className={`my-3`}
                register={register}
                id={`role`}
                enableFilter={true}
                errorMsg={errors.role?.message ?? ''}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-3`}>
              {/*Country*/}
              <SelectInput
                label={`Country`}
                options={allCountries}
                className={`my-3`}
                register={register}
                id={`country`}
                enableFilter={true}
                errorMsg={errors.country?.message ?? ''}
                change={(e) => onUpdateCountry(e.target.value)}
              />

              {/*State*/}
              <SelectInput
                label={`State`}
                options={allCountryStates}
                className={`my-3`}
                register={register}
                id={`state`}
                enableFilter={true}
                errorMsg={errors.state?.message ?? ''}
              />

              {/*City*/}
              <TextInput
                label={`City`}
                className={`my-3`}
                id={`city`}
                register={register}
                errorMsg={errors.city?.message ?? ''}
              />

              {/*Zip Code*/}
              <TextInput
                label={`Zip Code`}
                className={`my-3`}
                id={`zip_code`}
                register={register}
                errorMsg={errors.zip_code?.message ?? ''}
              />

              {/*Address*/}
              <TextInput
                label={`Address`}
                className={`my-3`}
                id={`address`}
                register={register}
                errorMsg={errors.address?.message ?? ''}
              />

              {/*Alternative Address*/}
              <TextInput
                label={`Alternative Address`}
                className={`my-3`}
                id={`address_two`}
                register={register}
                errorMsg={errors.address_two?.message ?? ''}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-2`}>
              <TextInput
                label={`Phone Number`}
                placeholder={`+2347053980998`}
                className={`my-3 w-full`}
                errorMsg={errors.phone_number?.message ?? ''}
                id={`phone`}
                register={register}
                type={`tel`}
                prefix={`${phoneCode ? '+' + phoneCode : ''}`}
              />
            </div>
          </CustomCard>
        </div>
      </div>

      <div className={`w-full p-10 md:px-20 flex flex-col`}>
        <Text
          text={`Add Admin`}
          size="4xl"
          weight={800}
          className="mb-8 text-ds-primary-700 dark:text-ds-primary-200 font-extrabold"
        />
      </div>
    </SuperadminBaseTemplate>
  );
};

export default CreateNewUser;
