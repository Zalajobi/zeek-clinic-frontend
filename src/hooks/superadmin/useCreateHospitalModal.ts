import { useEffect, useState } from 'react';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

import { AllCountries } from '@typeSpec/superadmin/formTypes';
import { axiosPostRequestUserService } from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import { CreateHospitalInput } from '@typeSpec/superadmin/forms';
import axios from 'axios';

export const useCreateHospitalModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [country, setCountry] = useState('');
  const [logo, setLogo] = useState('');

  // Edit SiteDetailsPage Mutation
  const { mutate: createOrganizationMutation } = useMutation(
    async (data: CreateHospitalInput) => {
      try {
        const hospitalData = {
          ...data,
          phone: `${data.phone}`,
          country,
          logo,
          country_code: countryCode,
        };

        return await axiosPostRequestUserService(
          '/hospital/create',
          hospitalData
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
    {
      onMutate: () => {
        toast.loading('Creating Organization', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
        } else {
          toast.error('Something Went Wrong');
        }

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
    createOrganizationMutation(data);
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
