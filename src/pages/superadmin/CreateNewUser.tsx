import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useSuperadminCreateAdminUser } from '../../hooks/superadmin/useSuperadminCreateAdminUser';
import ImageUpload from '../../components/global/formInput/ImageUpload';
import SuperadminBaseTemplate from '../../layout/superadmin/SuperadminBaseTemplate';
import {
  availableTitles,
  genderSelectInput,
  relationshipStatus,
  religions,
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
} from '../../typeSpec/superadmin/forms';
import { FilledButton } from '../../components/global/CustomButton';

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
    allRoles,
    profileImgURL,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    setProfileImgURL,
    rerouteToURL,
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
                id={`middle_name`}
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

              <SelectInput
                label={`Relationship Status`}
                options={relationshipStatus}
                className={`w-full my-3`}
                register={register}
                id={'marital_status'}
                errorMsg={errors.marital_status?.message ?? ''}
              />

              {/*Religion*/}
              <SelectInput
                label={`Religion`}
                options={religions.sort((a, b) =>
                  a.placeholder.localeCompare(b.placeholder)
                )}
                className={`w-full my-3`}
                register={register}
                id={'religion'}
                errorMsg={errors.religion?.message ?? ''}
              />

              {/*Staff ID*/}
              <TextInput
                label={`Staff ID`}
                placeholder={`IODANJK89IK`}
                className={`my-3 w-full`}
                errorMsg={errors.staff_id?.message ?? ''}
                id={`staff_id`}
                register={register}
                type={`text`}
              />

              {/*DOB*/}
              <DateInput
                label={`Date Or Birth`}
                placeholder={`DD/MM/YYYY`}
                className={`my-3`}
                errorMsg={errors.dob?.message ?? ''}
                id={`dob`}
                register={register}
              />
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-4`}>
              {/*Roles*/}
              <SelectInput
                label={`Role`}
                options={allRoles}
                className={`my-3`}
                register={register}
                id={`role`}
                errorMsg={errors.role?.message ?? ''}
              />

              {/*Country*/}
              <SelectInput
                label={`Country`}
                options={allCountries}
                className={`my-3`}
                register={register}
                id={`country`}
                errorMsg={errors.country?.message ?? ''}
                change={onUpdateCountry}
              />

              {/*State*/}
              <SelectInput
                label={`State`}
                options={allCountryStates}
                className={`my-3`}
                register={register}
                id={`state`}
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
            </div>

            <div
              className={`w-full grid gap-6 grid-cols-1 my-5 lg:grid-cols-3`}>
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
                errorMsg={errors.phone?.message ?? ''}
                id={`phone`}
                register={register}
                type={`tel`}
                // prefix={`${phoneCode ? '+' + phoneCode : ''}`}
              />
            </div>

            <div className={`w-full flex items-center justify-center my-5`}>
              <FilledButton
                type={`danger`}
                text={`Cancel`}
                className={`mx-4 min-w-[200px]`}
                hasRings={true}
                click={() => rerouteToURL('/superadmin')}
              />

              <FilledButton
                type={`secondary`}
                text={`Add Provider`}
                className={`mx-4 min-w-[200px]`}
                hasRings={true}
                click={handleSubmit(handleCreateAdmin)}
              />
            </div>
          </CustomCard>
        </div>
      </div>
    </SuperadminBaseTemplate>
  );
};

export default CreateNewUser;
