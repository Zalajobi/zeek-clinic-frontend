import { Fragment } from 'react';
import { Select, initTE } from 'tw-elements';
import { availableTitles } from '../../../lib/constants/constants';
import {
  DateInput,
  PhoneNumberInput,
  SelectInput,
  TextInput,
} from '../../global/formInput/CustomInput';
import { UseFormRegister } from 'react-hook-form';
import { SelectInputFieldProps } from '../../../types/common';

interface AdminEditProviderModalTabViewsProps {
  register: UseFormRegister<any>;
  errors: any;
  onUpdatePhoneNumber: (value: string | number) => void;
  countryCode: string;
  allCountries: SelectInputFieldProps[];
  allCountryStates: SelectInputFieldProps[];
  onUpdateCountry: (value: string) => void;
}

interface AdminEditMoveProviderTabProps {
  register: UseFormRegister<any>;
  errors: any;
  departments: SelectInputFieldProps[];
  roles: SelectInputFieldProps[];
  serviceArea: SelectInputFieldProps[];
  unit: SelectInputFieldProps[];
}

export const AdminEditProvidersInformationModalTab = ({
  register,
  errors,
  onUpdatePhoneNumber,
  countryCode,
  allCountries,
  allCountryStates,
  onUpdateCountry,
}: AdminEditProviderModalTabViewsProps) => {
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

          <PhoneNumberInput
            country={countryCode}
            change={onUpdatePhoneNumber}
          />
        </div>
      </div>
    </Fragment>
  );
};

export const AdminEditMoveProviderTab = ({
  departments,
  roles,
  unit,
  serviceArea,
  register,
  errors,
}: AdminEditMoveProviderTabProps) => {
  initTE({ Select });
  return (
    <Fragment>
      <div
        className={`w-full h-full flex flex-col item-center justify-start px-8 py-4`}>
        <div className={`grid grid-cols-2 gap-4 my-2`}>
          {/*Department*/}
          <SelectInput
            label={`Department`}
            options={departments}
            className={`my-3`}
            id={`departments`}
            enableFilter={true}
            change={(event) => console.log(event)}
          />

          {/*roles*/}
          <SelectInput
            label={`Role`}
            options={roles}
            className={`my-3`}
            id={`roles`}
            enableFilter={true}
            change={(event) => console.log(event)}
          />

          {/*Service Area*/}
          <SelectInput
            label={`Service Area`}
            options={serviceArea}
            className={`my-3`}
            id={`serviceArea`}
            enableFilter={true}
            change={(event) => console.log(event)}
          />

          {/*Unit*/}
          <SelectInput
            label={`Unit`}
            options={unit}
            className={`my-3`}
            id={`unit`}
            enableFilter={true}
            change={(event) => console.log(event)}
          />
        </div>
      </div>
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
