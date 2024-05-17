import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';
import { AllCountries, CreateSiteInput } from '@typeSpec/forms/form.types';
import { axiosPostRequestUserService } from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const useCreateSiteModal = (handleOpen?: () => void) => {
  const queryClient = useQueryClient();
  const { hospitalId } = useParams();
  const [logo, setLogo] = useState('');
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [country, setCountry] = useState('');

  // Create SiteDetailsPage
  const { mutate: createSiteMutation } = useMutation(
    async (data: any) => {
      try {
        const siteData = {
          ...data,
          phone: `${Number(`${phoneCode}${data.phone}`)}`,
          country,
          logo,
          country_code: countryCode,
          hospital_id: hospitalId,
          time_zone: timeZone,
        };

        return await axiosPostRequestUserService(`/site/create`, siteData);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
    {
      onMutate: () => {
        toast.loading('Creating Site...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) toast.success(result?.message);
        else toast.error('Something Went Wrong');

        queryClient.resetQueries('getTableData');
      },
    }
  );

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

  const onUpdateLogo = (logo: string) => setLogo(logo);

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

  const createNewSite = async (data: CreateSiteInput) => {
    createSiteMutation(data);
    if (handleOpen) {
      handleOpen();
    }
  };

  return {
    // Values
    logo,
    allCountries,
    allCountryStates,
    phoneCode,
    country,

    // Functions
    onUpdateLogo,
    createNewSite,
    onUpdateCountry,
  };
};
