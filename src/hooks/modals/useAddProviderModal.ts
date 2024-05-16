import { useEffect, useState } from 'react';
import { SelectInputFieldProps } from '@typeSpec/common';
import { Country, State } from 'country-state-city';
import { useParams } from 'react-router-dom';
import { AllCountries } from '@typeSpec/forms/form.types';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';

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
  const selectApiPayload = {
    siteId,
    startRow: 0,
    endRow: 1000000,
    sortModel: {
      colId: 'name',
      sort: 'asc',
    },
  };

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

  // Get ServiceArea
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

  return {
    // Values
    logo,
    allCountries,
    allCountryStates,
    departments,
    departmentsLoading,
    units,
    unitsLoading,
    serviceAreas,
    serviceAreasLoading,

    // Functions
    setLogo,
    onUpdateCountry,
  };
};
