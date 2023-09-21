import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '../../types/common';
import { Country, State } from 'country-state-city';
import { AllCountries } from '../../types/superadmin/formTypes';
import { useParams } from 'react-router-dom';
import { axiosGetRequestUserService } from '../../lib/axios';
import {
  UserServiceDepartmentResponseData,
  UserServiceRoleResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '../../types/admin';

export const useAdminUpdateProviderInformationTabs = (siteId: string) => {
  const { id } = useParams();
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | number>();
  const [departments, setDepartments] =
    useState<UserServiceDepartmentResponseData[]>();
  const [roles, setRoles] = useState<UserServiceRoleResponseData[]>();
  const [serviceAreas, setServiceAreas] =
    useState<UserServiceServiceAreaResponseData>();
  const [units, setUnits] = useState<UserServiceUnitResponseData[]>();

  // const { data, isLoading, error } = useQuery<AccountServiceApiResponse, boolean, Error>('getUnitAreaRoleAndDept',
  //     function () {
  //   return axiosGetRequestUserService(`/site/department-roles-service_area-unit/${siteId}`)
  // });

  const getData = async () => {
    let countryUpdate: SelectInputFieldProps[] = [];

    Country.getAllCountries().map((country) => {
      return countryUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });
    setAllCountries(countryUpdate);

    if (siteId) {
      const response = await axiosGetRequestUserService(
        `/site/department-roles-service_area-unit/${siteId}`
      );

      if (response.success) {
        const { department, role, serviceArea, unit } = response.data;
        setServiceAreas(serviceArea);
        setDepartments(department);
        setRoles(role);
        setUnits(unit);
      }
    }
  };

  // if (data) {
  //   const apiResponse = data as unknown as AccountServiceApiResponse
  //   if (apiResponse.success) {
  //     const { department, role, serviceArea, unit} = apiResponse.data
  //     setServiceAreas(serviceArea)
  //     setDepartments(department)
  //     setRoles(role)
  //     setUnits(unit)
  //   }
  // }

  // toast.promise(data as any, {
  //   error: 'Something Went Wrong',
  //   loading: 'Loading Data...',
  //   success: 'Data Retrieved Success'
  //   // success: 'Data Retrieved Success',
  //   // error: 'Something Went Wrong'
  // })

  console.log(siteId);

  const onUpdatePhoneNumber = (value: string | number) => setPhoneNumber(value);

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
    departments,
    roles,
    serviceAreas,
    units,
    // isLoading,
    // error,

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
  };
};
