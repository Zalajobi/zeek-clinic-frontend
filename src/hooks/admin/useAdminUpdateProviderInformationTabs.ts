import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '../../types/common';
import { Country, State } from 'country-state-city';
import { AllCountries } from '../../types/superadmin/formTypes';
import { useParams } from 'react-router-dom';
import { UserServiceRoleResponseData } from '../../types/admin';
import {
  convertObjectToGlobalSelectInputProps,
  generateRandomCharacters,
} from '../../util';
import { AdminEditProvidersInformation } from '../../types/admin/provider';

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
  const [tempPassword, setTempPassword] = useState<string>('');
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

    setAllCountries(
      convertObjectToGlobalSelectInputProps(
        Country.getAllCountries(),
        'isoCode',
        'name'
      )
    );
  };

  const onUpdatePhoneNumber = (value: string | number) => setPhoneNumber(value);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;

    setAllCountryStates(
      convertObjectToGlobalSelectInputProps(
        State.getStatesOfCountry(value),
        'name',
        'name'
      )
    );
    setCountry(countryInfo?.name);
  };

  const generatePassword = () => {
    const password = generateRandomCharacters(15);
    setTempPassword(password);
  };

  const onUpdateTempPassword = (value: string) => setTempPassword(value);

  const handleUpdateProviderDetails = async (
    data: AdminEditProvidersInformation
  ) => {
    const updateData = {
      ...data,
      tempPassword,
      country,
      phone: phoneNumber,
    };

    console.log(updateData);
  };

  return {
    // Value
    allCountries,
    allCountryStates,
    country,
    departmentsSelectField,
    rolesSelectField,
    serviceAreasSelectField,
    unitsSelectField,
    tempPassword,

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
    generatePassword,
    onUpdateTempPassword,
    handleUpdateProviderDetails,
  };
};
