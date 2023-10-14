import { useEffect, useState } from 'react';
import { Country, State } from 'country-state-city';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import {
  convertObjectToGlobalSelectInputProps,
  generateRandomCharacters,
} from '../../util';
import { AdminEditProvidersInformation } from '@typeSpec/admin/provider';
import { AllCountries } from '@typeSpec/superadmin/formTypes';
import { axiosPutRequestUserService } from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import {
  UserServiceDepartmentResponseData,
  UserServiceRoleResponseData,
  UserServiceServiceAreaResponseData,
  UserServiceUnitResponseData,
} from '@typeSpec/index';

export const useAdminUpdateProviderInformationTabs = (
  fetchData: boolean,
  siteId: string,
  departments: UserServiceDepartmentResponseData[],
  roles: UserServiceRoleResponseData[],
  serviceAreas: UserServiceServiceAreaResponseData[],
  units: UserServiceUnitResponseData[]
) => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [allCountries, setAllCountries] = useState<SelectInputFieldProps[]>([]);
  const [allCountryStates, setAllCountryStates] = useState<
    SelectInputFieldProps[]
  >([]);
  const [country, setCountry] = useState('');
  const [tempPassword, setTempPassword] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string | number>();
  const [departmentsSelectField, setDepartmentsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [rolesSelectField, setRolesSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [serviceAreasSelectField, setServiceAreasSelectField] = useState<
    SelectInputFieldProps[]
  >([]);
  const [unitsSelectField, setUnitsSelectField] = useState<
    SelectInputFieldProps[]
  >([]);

  useEffect(() => {
    if (!fetchData) {
      getCountryData();
    }
  }, []);

  const getCountryData = () => {
    if (departments) {
      setDepartmentsSelectField(
        convertObjectToGlobalSelectInputProps(departments, 'id', 'name')
      );
      setRolesSelectField(
        convertObjectToGlobalSelectInputProps(roles, 'id', 'name')
      );
      setServiceAreasSelectField(
        convertObjectToGlobalSelectInputProps(serviceAreas, 'id', 'name')
      );
      setUnitsSelectField(
        convertObjectToGlobalSelectInputProps(units, 'id', 'name')
      );
    }

    setAllCountries(
      convertObjectToGlobalSelectInputProps(
        Country.getAllCountries(),
        'isoCode',
        'name'
      )
    );
  };

  const onUpdatePhoneNumber = (value: string | number) => setPhoneNumber(value);

  const onUpdateCountry = (value: string) => {
    const countryInfo = Country.getCountryByCode(value) as AllCountries;

    setAllCountryStates(
      convertObjectToGlobalSelectInputProps(
        State.getStatesOfCountry(value),
        'name',
        'name'
      )
    );
    setCountry(countryInfo?.name);
  };

  const generatePassword = () => {
    const password = generateRandomCharacters(15);
    setTempPassword(password);
  };

  const onUpdateTempPassword = (value: string) => setTempPassword(value);

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return axiosPutRequestUserService(
        `/providers/update/${id}/${siteId}`,
        data
      );
    },

    onError: (error) => {
      toast.error('Unable To Update Provider Information');
      setShowLoading(false);
    },

    onSuccess: (result) => {
      if (toast?.success) toast.success(result?.message);
      else toast.error('Something Went Wrong');

      setShowLoading(false);
      queryClient.resetQueries('providerDetails');
    },

    onMutate: () => {
      setShowLoading(true);
    },
  });

  const handleUpdateProviderDetails = async (
    data: AdminEditProvidersInformation
  ) => {
    const updateData = {
      ...data,
      password: tempPassword,
      country,
      phone: phoneNumber,
    };
    mutation.mutate(updateData);
  };

  return {
    // Value
    allCountries,
    allCountryStates,
    country,
    departmentsSelectField,
    rolesSelectField,
    serviceAreasSelectField,
    unitsSelectField,
    tempPassword,
    showLoading,

    // Function
    onUpdateCountry,
    onUpdatePhoneNumber,
    generatePassword,
    onUpdateTempPassword,
    handleUpdateProviderDetails,
    setShowLoading,
  };
};
