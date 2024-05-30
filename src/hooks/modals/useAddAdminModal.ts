import { useEffect, useState } from 'react';
import { AllCountries, CreateAdminUserInput } from '@typeSpec/forms/form.types';
import { SelectInputFieldProps } from '@typeSpec/common';
import { Country, State } from 'country-state-city';
import { useParams } from 'react-router-dom';
import { axiosPostRequestUserService } from '@lib/axios';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useAddAdminModal = (handler: () => void) => {
  const { siteId } = useParams();
  const queryClient = useQueryClient();
  const [profilePic, setProfilePic] = useState('');
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

      return;
    });
    setAllCountries(countriesUpdate);
  }, []);

  // Create Admin
  const { mutate: createAdminMutate } = useMutation(
    async (data: CreateAdminUserInput) => {
      try {
        return await axiosPostRequestUserService(`/admin/create`, {
          ...data,
          siteId,
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
    {
      onMutate: () => {
        toast.loading('Creating Admin...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
          queryClient
            .resetQueries(['getAdminCount', 'getTableData'])
            .then(() => {});
        } else {
          toast.error(result?.message ?? 'Something Went Wrong');
        }
      },
    }
  );

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
    setCountry(countryInfo.name);
    setPhoneCode(countryInfo.phonecode);
  };

  // Handle Create Admin
  const handleCreateAdmin = (data: CreateAdminUserInput) => {
    data.dob = new Date(data.dob).toISOString();
    data.phone = `${Number(`${phoneCode}${data.phone}`)}`;
    data.siteId = siteId ?? '';
    data.countryCode = countryCode;
    data.country = country;
    data.profilePic = profilePic;
    createAdminMutate(data);
  };

  return {
    // Values
    profilePic,
    allCountries,
    allCountryStates,

    // Functions
    setProfilePic,
    onUpdateCountry,
    handleCreateAdmin,
  };
};
