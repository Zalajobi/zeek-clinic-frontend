import { useEffect, useState } from 'react';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';

import { AllCountries } from '@typeSpec/superadmin/formTypes';
import { axiosPostRequestUserService } from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import { CreateHospitalInput } from '@typeSpec/superadmin/forms';

export const useCreateHospitalModal = () => {
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);

  const [country, setCountry] = useState('');
  const [logo, setLogo] = useState('');

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

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;
    let countryStates: SelectInputFieldProps[] = [];

    State.getStatesOfCountry(value).map((country) => {
      countryStates.push({
        value: country.isoCode,
        placeholder: country.name,
      });

      return;
    });

    setAllCountryStates(countryStates);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
    setCountryCode(countryInfo?.isoCode);
  };

  const createNewOrganization = async (data: CreateHospitalInput) => {
    if (!logo) toast.error('Please Upload Organization Logo');
    else {
      const hospitalData = {
        ...data,
        phone: `${data.phone}`,
        country,
        logo,
        country_code: countryCode,
      };
      const response = await axiosPostRequestUserService(
        '/hospital/create',
        hospitalData
      );

      if (response.success) toast.success(response.message);
      else toast.error(response.message);
    }
  };

  return {
    // Value
    logo,
    allCountries,
    allCountryStates,
    phoneCode,

    // Functions
    createNewOrganization,
    setLogo,
    onUpdateCountry,
  };
};
