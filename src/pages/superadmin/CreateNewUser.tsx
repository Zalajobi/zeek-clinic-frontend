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
import { BiRename } from 'react-icons/bi';
import {
  CreateAdminUserInput,
  CreateAdminUserInputSchema,
} from '../../types/superadmin/forms';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
    allStateCities,
    allDepartments,
    allRoles,
    profileImgURL,

    // Functions
    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
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
              className={`w-full grid gap-6 grid-cols-1 mb-2 lg:grid-cols-5`}>
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
              className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-2`}>
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
              className={`w-full grid gap-6 grid-cols-1 my-2 lg:grid-cols-2`}></div>
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
