import { useParams } from 'react-router-dom';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import { ONE_MILLION } from '@lib/constants/constants';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '@typeSpec/common';
import { Country, State } from 'country-state-city';
import { AllCountries, CreatePatientInput } from '@typeSpec/forms/form.types';

export const useAddPatientModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const { siteId } = useParams();
  const [phoneCode, setPhoneCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [country, setCountry] = useState('');
  const [profilePic, setProfilePic] = useState('');

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
  const selectApiPayload = {
    siteId,
    startRow: 0,
    endRow: ONE_MILLION,
    sortModel: {
      colId: 'name',
      sort: 'asc',
    },
  };

  // Create Patient
  const { mutate: createPatientMutate } = useMutation(
    async (data: CreatePatientInput) => {
      try {
        return await axiosPostRequestUserService(`/patient/create`, {
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
        toast.loading('Creating Patient...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
          queryClient
            .resetQueries(['getPatientsCount', 'getTableData'])
            .then(() => {});
        } else {
          toast.error('Something Went Wrong');
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

  // Get Providers
  const { data: providerData, isLoading: providerDataLoading } = useQuery({
    queryKey: ['getProviders', siteId],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/provider/search`, {
          siteId,
          startRow: 0,
          endRow: ONE_MILLION,
          sortModel: {
            sort: 'asc',
            colId: 'firstName',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get Departments
  const { data: departments, isLoading: departmentsLoading } = useQuery({
    queryKey: ['getDepartments'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/department/search`,
          selectApiPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get Units
  const { data: units, isLoading: unitsLoading } = useQuery({
    queryKey: ['getUnits'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/unit/search`,
          selectApiPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get ServiceAreas
  const { data: serviceAreas, isLoading: serviceAreasLoading } = useQuery({
    queryKey: ['getServiceArea'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/service-area/search`,
          selectApiPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const handleCreateProvider = (data: CreatePatientInput) => {
    data.dob = new Date(data.dob).toISOString();
    data.phone = `+${Number(`${phoneCode}${data.phone}`)}`;
    data.siteId = siteId ?? '';
    data.countryCode = countryCode;
    data.country = country;
    data.profilePic = profilePic;

    createPatientMutate(data);
  };

  return {
    // Values
    providerData,
    providerDataLoading,
    departments,
    departmentsLoading,
    units,
    unitsLoading,
    serviceAreas,
    serviceAreasLoading,
    allCountries,
    profilePic,
    allCountryStates,

    // Functions
    setProfilePic,
    onUpdateCountry,
    handleCreateProvider,
  };
};
