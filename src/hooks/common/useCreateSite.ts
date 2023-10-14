import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';
import { initTE, Select } from 'tw-elements';
import { AllCountries } from '@typeSpec/superadmin/formTypes';
import { axiosPostRequestUserService } from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import { CreateSiteInput } from '@typeSpec/superadmin/forms';

export const useCreateSite = (reloadPage: () => void, totalSites: number) => {
  const navigate = useNavigate();
  const { hospitalId } = useParams();
  const [logo, setLogo] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
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
    });
    setAllCountries(countriesUpdate);

    // initTE({ Select, Datepicker, Input, Ripple });
    initTE({ Select });
  }, [navigate]);

  const onUpdateLogo = (logo: string) => setLogo(logo);

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
    setCountryCode(countryInfo.isoCode);
    setCountry(countryInfo?.name);
    setPhoneCode(countryInfo?.phonecode);
  };

  const createNewSite = async (data: CreateSiteInput) => {
    const siteData = {
      ...data,
      totalSites: totalSites,
      phone: `${data.phone}`,
      country,
      logo,
      country_code: countryCode,
      hospital_id: hospitalId,
    };

    const response = await axiosPostRequestUserService(
      '/site/create',
      siteData
    );

    if (response.success) {
      toast.success(response.message);
      reloadPage();
    } else toast.error(response.message);
  };

  return {
    // Values
    logo,
    allCountries,
    allCountryStates,
    phoneCode,

    // Functions
    onUpdateLogo,
    createNewSite,
    onUpdateCountry,
  };
};
