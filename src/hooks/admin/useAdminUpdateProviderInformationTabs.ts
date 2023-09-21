import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '../../types/common';
import { Country, State } from 'country-state-city';
import { AllCountries } from '../../types/superadmin/formTypes';
import { useParams } from 'react-router-dom';
import {
  UserServiceDepartmentResponseData,
  UserServiceRoleResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '../../types/admin';
import { convertObjectToGlobalSelectInputProps } from '../../util';

export const useAdminUpdateProviderInformationTabs = (
  fetchData: boolean,
  departments: UserServiceRoleResponseData[],
  roles: UserServiceRoleResponseData[],
  serviceAreas: UserServiceRoleResponseData[],
  units: UserServiceRoleResponseData[]
) => {
  const { id } = useParams();
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | number>();
  const [departmentsSelectField, setDepartmentsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [rolesSelectField, setRolesSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [serviceAreasSelectField, setServiceAreasSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [unitsSelectField, setUnitsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);

  useEffect(() => {
    if (!fetchData) {
      getCountryData();
    }
  }, [id, departments]);

  const getCountryData = () => {
    let countryUpdate: SelectInputFieldProps[] = [];

    if (departments) {
      setDepartmentsSelectField(
        convertObjectToGlobalSelectInputProps(departments, 'name', 'name')
      );
      setRolesSelectField(
        convertObjectToGlobalSelectInputProps(roles, 'name', 'name')
      );
      setServiceAreasSelectField(
        convertObjectToGlobalSelectInputProps(serviceAreas, 'name', 'name')
      );
      setUnitsSelectField(
        convertObjectToGlobalSelectInputProps(units, 'name', 'name')
      );
    }

    Country.getAllCountries().map((country) => {
      return countryUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });
    setAllCountries(countryUpdate);
  };

  const onUpdatePhoneNumber = (value: string | number) => {
    console.log(phoneNumber);
    setPhoneNumber(value);
  };

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      return countryStates.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });

    setAllCountryStates(countryStates);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(countryInfo?.isoCode);
  };

  return {
    // Value
    allCountries,
    allCountryStates,
    countryCode,
    departmentsSelectField,
    rolesSelectField,
    serviceAreasSelectField,
    unitsSelectField,

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
  };
};
