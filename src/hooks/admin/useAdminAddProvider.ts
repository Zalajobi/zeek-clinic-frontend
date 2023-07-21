import { ChangeEvent, useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { useParams } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import { axiosGetRequest } from '../../lib/axios';
import { SelectInputFieldProps } from '../../types/common';
import { GetDepartmentsDataResponse } from '../../types/apiResponses';
import {
  AdminAddProviderInput,
  AllCountries,
  AllStatesAndCities,
} from '../../types/superadmin/formTypes';
import input = Simulate.input;

export const useAdminAddProvider = () => {
  const { siteId } = useParams();
  const departments: SelectInputFieldProps[] = [];

  // State for Input fields
  const [profilePic, setProfilePic] = useState('');
  const [country, setCountry] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  // const [state, setState] = useState(initState);

  // Check for input error state management
  const [firstNameError, setFirstNameError] = useState(false);

  useEffect(() => {
    const getAddProviderData = async () => {
      let countriesUpdate: SelectInputFieldProps[] = [];

      Country.getAllCountries().map((country) => {
        countriesUpdate.push({
          value: country.isoCode,
          placeholder: country.name,
        });
      });

      setAllCountries(countriesUpdate);

      const response = await axiosGetRequest(
        `/account/department/get-all/${siteId}`
      );

      if (response.success) {
        const data = response.data as GetDepartmentsDataResponse[];

        for (const item of data) {
          departments.push({
            value: item?.id,
            placeholder: item?.name,
          });
        }
      }
    };

    getAddProviderData().catch((err) => {
      console.log(err);
    });
  }, [input]);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      countryStates.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });

    setAllCountryStates(countryStates);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(countryInfo?.isoCode);
  };

  const onSubmit = async (data: AdminAddProviderInput) => {
    const addAdminData = {
      ...data,
      country,
    };
    console.log(addAdminData);
  };

  return {
    // Values
    profilePic,
    departments,
    allCountries,
    allCountryStates,

    // Functions
    setProfilePic,
    onSubmit,
    onUpdateCountry,
  };
};

export default useAdminAddProvider;
