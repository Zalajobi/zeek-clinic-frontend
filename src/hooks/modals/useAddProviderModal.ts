import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '@typeSpec/common';
import { Country, State } from 'country-state-city';
import { useParams } from 'react-router-dom';
import { AllCountries } from '@typeSpec/forms/form.types';

export const useAddProviderModal = (handler: () => void) => {
  const { siteId } = useParams();
  const [logo, setLogo] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    let countriesUpdate: SelectInputFieldProps[] = [];
    Country.getAllCountries().map((country) => {
      countriesUpdate.push({
        value: country.isoCode,
        placeholder: country.name,
      });

      return;
    });
    setAllCountries(countriesUpdate);
  }, []);

  // On Update Country
  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      countryStates.push({
        value: country.name,
        placeholder: country.name,
      });

      return;
    });

    setAllCountryStates(countryStates);
    setCountryCode(countryInfo.isoCode);
    setTimeZone(
      countryInfo.timezones.map((data) => data.gmtOffsetName).join(', ')
    );
    setCountry(countryInfo.name);
    setPhoneCode(countryInfo.phonecode);
  };

  return {
    // Values
    logo,
    allCountries,
    allCountryStates,

    // Functions
    setLogo,
    onUpdateCountry,
  };
};
