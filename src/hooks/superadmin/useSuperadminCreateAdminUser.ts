import { useEffect, useState } from 'react';
import { Country, State, City } from 'country-state-city';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Simulate } from 'react-dom/test-utils';

import { CreateAdminUserInput } from '../../types/superadmin/forms';
import { SelectInputFieldProps } from '../../types/common';
import { AccountServiceApiResponse } from '../../types/apiResponses';
import { axiosGetRequest, axiosPostRequest } from '../../lib/axios';
import {
  AllCountries,
  AllStatesAndCities,
} from '../../types/superadmin/formTypes';
import input = Simulate.input;

interface DepartmentRoleProps {
  name: string;
  description: string;
  id: string;
}

export const useSuperadminCreateAdminUser = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('None');
  const [countryCode, setCountryCode] = useState('');
  const [profileImgURL, setProfileImgURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | number>('');

  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    AllStatesAndCities[] | null
  >(null);
  const [allStateCities, setAllStateCities] = useState<
    AllStatesAndCities[] | null
  >(null);
  const [allDepartments, setAllDepartments] = useState<SelectInputFieldProps[]>(
    []
  );
  const [allRoles, setAllRoles] = useState<SelectInputFieldProps[]>([]);
  const [phoneCode, setPhoneCode] = useState('');

  useEffect(() => {
    let countriesUpdate: SelectInputFieldProps[] = [],
      rolesList: SelectInputFieldProps[] = [],
      departmentsList: SelectInputFieldProps[] = [];
    Country.getAllCountries().map((country) => {
      countriesUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });
    setAllCountries(countriesUpdate);

    const superadminGetRolesAndDepartments = async () => {
      const response = <AccountServiceApiResponse>(
        await axiosGetRequest('/account/super-admin/get/roles_and_departments')
      );
      if (response?.success) {
        response?.data?.department?.map((item: DepartmentRoleProps) => {
          departmentsList.push({
            placeholder: item.name,
            value: item.id,
          });
        });

        response?.data?.role?.map((item: DepartmentRoleProps) => {
          rolesList.push({
            placeholder: item.name,
            value: item.id,
          });
        });

        setAllDepartments(departmentsList);
        setAllRoles(rolesList);
      } else {
        toast.error(response?.message);
      }
    };
    superadminGetRolesAndDepartments().catch((err) => {
      toast.error(err?.message);
    });
  }, [input]);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    setAllCountryStates(
      State.getStatesOfCountry(value) as unknown as AllStatesAndCities[]
    );
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(countryInfo?.isoCode);
  };

  const onUpdateState = (value: string) => {
    setAllStateCities(
      City.getCitiesOfState(
        countryCode,
        value
      ) as unknown as AllStatesAndCities[]
    );
    setState(value);
  };

  const onUpdateCity = (value: string) => setCity(value ?? 'None');

  const onUpdatePhoneNumber = (value: string | number) => setPhoneNumber(value);

  const handleCreateAdmin = async (data: CreateAdminUserInput) => {
    const adminData = {
      ...data,
      country,
      city,
      state,
      country_code: countryCode,
      call_code: phoneCode,
      profile_img_url: profileImgURL,
      phone_number: phoneNumber,
    };

    const { success, message } = await axiosPostRequest(
      '/account/super-admin/create/admin',
      adminData
    );

    if (success) toast.success(message);
    else toast.error(message);
  };

  return {
    // Values
    allCountries,
    phoneCode,
    allCountryStates,
    allStateCities,
    allDepartments,
    allRoles,
    profileImgURL,

    handleCreateAdmin,
    onUpdateCountry,
    onUpdateState,
    onUpdateCity,
    setProfileImgURL,
    onUpdatePhoneNumber,
  };
};
