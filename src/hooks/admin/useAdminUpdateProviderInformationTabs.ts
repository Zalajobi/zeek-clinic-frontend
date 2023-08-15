import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '../../types/common';
import { Country, State } from 'country-state-city';
import { AllCountries } from '../../types/superadmin/formTypes';

export const useAdminUpdateProviderInformationTabs = () => {
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneCode, setPhoneCode] = useState('');

  useEffect(() => {
    let countriesUpdate: SelectInputFieldProps[] = [];

    Country.getAllCountries().map((country) => {
      return countriesUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });
    });
    setAllCountries(countriesUpdate);
  }, []);

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
    country,
    countryCode,
    phoneCode,

    // Function
    onUpdateCountry,
  };
};
