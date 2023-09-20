import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '../../types/common';
import { Country, State } from 'country-state-city';
import { AllCountries } from '../../types/superadmin/formTypes';
import { useParams } from 'react-router-dom';
import { axiosGetRequest } from '../../lib/axios';

export const useAdminUpdateProviderInformationTabs = () => {
  const { id } = useParams();
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | number>();

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    let countryUpdate: SelectInputFieldProps[] = [];

    Country.getAllCountries().map((country) => {
      return countryUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });
    setAllCountries(countryUpdate);

    const response = await axiosGetRequest(
      `/account/site/department-roles-service_area-unit/${id}`
    );
    console.log(response);
  };

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

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
  };
};
