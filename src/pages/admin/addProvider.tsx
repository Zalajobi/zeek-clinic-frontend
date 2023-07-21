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
import { Label } from 'flowbite-react';

export const AddProvider = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminAddProviderInput>({
    resolver: yupResolver(AdminAddProviderInputSchema),
  });
  const {
    // Values
    hello,
    profilePic,
    firstName,
    firstNameError,
    departments,
    lastName,
    middleName,
    userTitle,
    gender,
    dateOfBirth,

    // Functions
    setProfilePic,
    onUpdateFirstName,
    onSubmit,
    onUpdateTitle,
    onUpdateLastName,
    onUpdateMiddleName,
    onUpdateGender,
    onUpdateDateOfBirth,
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
            className={`grid grid-col-1 w-full h-full shadow-2xl p-6 my-6 gap-4 lg:grid-cols-4`}>
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
                className={`lg:col-span-2`}
                register={register}
                id={'title'}
                errorMsg={errors.title?.message ?? ''}
              />

              <TextInput
                label={`First Name`}
                className={`lg:col-span-2`}
                errorMsg={errors.first_name?.message ?? ''}
                id={`first_name`}
                register={register}
              />

              <TextInput
                label={`Middle Name`}
                className={`lg:col-span-2`}
                id={`middle_name`}
                register={register}
              />

              <TextInput
                label={`Last Name`}
                className={`lg:col-span-2`}
                errorMsg={errors.last_name?.message ?? ''}
                id={`last_name`}
                register={register}
              />

              {/*<SelectInput*/}
              {/*  change={onUpdateGender}*/}
              {/*  label={`Gender`}*/}
              {/*  options={genderSelectInput}*/}
              {/*  className={`lg:col-span-2`}*/}
              {/*  value={gender}*/}
              {/*/>*/}

              {/*<DateInput*/}
              {/*  value={dateOfBirth}*/}
              {/*  change={onUpdateDateOfBirth}*/}
              {/*  label={`Date Or Birth`}*/}
              {/*  placeholder={`Date Or Birth`}*/}
              {/*  className={`lg:col-span-2`}*/}
              {/*/>*/}
            </div>

            <button onClick={handleSubmit(onSubmit)}>Submit</button>
          </div>
          <h1>{hello}</h1>
          <h1>{hello}</h1>
          <h1>{hello}</h1>
        </div>
      </AdminBaseTemplate>
    </Fragment>
  );
};

export default AddProvider;
