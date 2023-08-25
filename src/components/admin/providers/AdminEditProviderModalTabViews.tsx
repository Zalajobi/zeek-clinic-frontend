import { Fragment } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { availableTitles } from '../../../lib/constants/constants';
import {
  DateInput,
  SelectInput,
  TextInput,
} from '../../global/formInput/CustomInput';
import {
  DeepRequired,
  FieldErrors,
  FieldErrorsImpl,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import {
  AdminEditPersonalInformation,
  AdminEditPersonalInformationSchema,
} from '../../../types/admin/provider';
import { useAdminUpdateProviderInformationTabs } from '../../../hooks/admin/useAdminUpdateProviderInformationTabs';

interface AdminEditProviderModalTabViewsProps {
  register: UseFormRegister<any>;
  errors: any;
}

export const AdminEditPersonalInformationModalTab = ({
  register,
  errors,
}: AdminEditProviderModalTabViewsProps) => {
  const {
    // Value
    allCountries,
    allCountryStates,
    country,
    countryCode,
    phoneCode,

    // Function
    onUpdateCountry,
  } = useAdminUpdateProviderInformationTabs();

  return (
    <Fragment>
      <div
        className={`w-full h-full flex flex-col item-center justify-start px-8 py-4`}>
        <div className={`grid grid-cols-5 gap-4 mb-2`}>
          {/*Title*/}
          <SelectInput
            label={`Title`}
            options={availableTitles}
            className={`my-3`}
            register={register}
            id={'title'}
            errorMsg={errors?.title?.message ?? ''}
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

        <div className={`grid grid-cols-2 gap-4 my-2`}>
          {/*Middle Name*/}
          <TextInput
            label={`Other Name`}
            className={`my-3`}
            errorMsg={errors.last_name?.message ?? ''}
            id={`middle_name`}
            register={register}
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

        <div className={`grid grid-cols-3 gap-4 my-2`}>
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

          {/*Phone*/}
          <TextInput
            label={`Phone Number`}
            placeholder={`+2347053980998`}
            className={`my-3 w-full`}
            errorMsg={errors.phone?.message ?? ''}
            id={`phone`}
            register={register}
            type={`tel`}
            prefix={`${phoneCode ? '+' + phoneCode : ''}`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export const AdminEditMoveProviderTab = () => {
  return (
    <Fragment>
      <h1>Move Provider</h1>
    </Fragment>
  );
};

export const AdminEditGeneratePasswordTab = () => {
  return (
    <Fragment>
      <h1>Generate Password</h1>
    </Fragment>
  );
};
