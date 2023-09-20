import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosGetRequestUserService } from '../../lib/axios';
import { AccountServiceApiResponse } from '../../types/apiResponses';
import { ProviderAndRelationAPIResponse } from '../../types/admin';
import { useQuery } from 'react-query';
import { ReactQueryDataUserService } from '../../lib/reactQuery';

export const useAdminProviderDetails = () => {
  const { id } = useParams();
  const [providerData, setProviderData] =
    useState<ProviderAndRelationAPIResponse>();
  const [primaryPatientCount, setPrimaryPatientCount] = useState<number>(0);
  const [editProviderModalSection, setEditProviderModalSection] = useState<
    'Personal' | 'GeneratePassword' | 'MoveProvider'
  >('Personal');
  const [siteId, setSiteId] = useState<string>('');

  useEffect(() => {
    getData().then((response) => {
      return null;
    });
  }, [id]);

  // Initial Data
  // const { data, isLoading, error } = useQuery<AccountServiceApiResponse, boolean, Error>(['getProviderDetails', siteId],
  //     function () {
  //       return axiosGetRequestUserService(`/providers/admin/details/${id}`)
  //     });

  // const { data, isLoading, error } = useQuery<AccountServiceApiResponse, boolean, Error>(['getUnitAreaRoleAndDept', siteId],
  //     function () {
  //       return axiosGetRequestUserService(`/site/department-roles-service_area-unit/${siteId}`)
  //     }, {
  //   enabled: !isLoading && !error
  //     });

  const [providerDetailsData, isLoading, error] = ReactQueryDataUserService(
    `/providers/admin/details/${id}`,
    'getProviderDetails',
    id
  );

  console.log('providerDetailsData');
  console.log(providerDetailsData);

  const getData = async () => {
    const response = (await axiosGetRequestUserService(
      `/providers/admin/details/${id}`
    )) as AccountServiceApiResponse;

    if (response.success) {
      setProviderData(response.data.provider as ProviderAndRelationAPIResponse);
      setPrimaryPatientCount(response.data.patientCount as number);
      setSiteId(response.data.provider.siteId);
    }
  };

  const onUndateProviderModalSection = (
    value: 'Personal' | 'GeneratePassword' | 'MoveProvider'
  ) => {
    setEditProviderModalSection((editProviderModalSection) => value);
  };

  return {
    // Value
    id,
    providerData,
    primaryPatientCount,
    editProviderModalSection,

    // Function
    onUndateProviderModalSection,
  };
};
