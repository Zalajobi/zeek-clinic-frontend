import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { axiosGetRequestUserService } from '@lib/axios';

export const useAdminProviderDetails = () => {
  const { id } = useParams();
  const [editProviderModalSection, setEditProviderModalSection] = useState<
    'Personal' | 'GeneratePassword' | 'MoveProvider'
  >('Personal');

  const {
    data: providerData,
    isLoading: providerDataLoading,
    isError: providerDataError,
  } = useQuery<AccountServiceApiResponse>('providerDetails', function () {
    return axiosGetRequestUserService(`/providers/admin/details/${id}`);
  });

  const {
    data: primaryPatientsData,
    isLoading: primaryPatientsDataLoading,
    isError: primaryPatientsDataError,
  } = useQuery<AccountServiceApiResponse>(
    'providerPrimaryPatients',
    function () {
      return axiosGetRequestUserService(
        `/patients/provider/primary-patient/all/${id}`
      );
    }
  );

  const {
    data: unitDeptData,
    isLoading: unitDeptIsLoading,
    isError: unitDeptIsError,
  } = useQuery<AccountServiceApiResponse>(
    'getUnitAreaRoleAndDept',
    function () {
      return axiosGetRequestUserService(
        `/site/department-roles-service_area-unit/${providerData?.data?.provider?.siteId}`
      );
    },
    {
      enabled: !providerDataLoading && !providerDataError, // Enable Query B when Query A has successfully loaded
    }
  );

  const onUpdateProviderModalSection = (
    value: 'Personal' | 'GeneratePassword' | 'MoveProvider'
  ) => {
    setEditProviderModalSection((editProviderModalSection) => value);
  };

  return {
    // Value
    id,
    editProviderModalSection,
    providerData,
    providerDataLoading,
    providerDataError,
    unitDeptData,
    unitDeptIsLoading,
    unitDeptIsError,
    primaryPatientsData,
    primaryPatientsDataError,
    primaryPatientsDataLoading,

    // Function
    onUpdateProviderModalSection,
  };
};
