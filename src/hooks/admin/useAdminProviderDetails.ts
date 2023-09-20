import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosGetRequest } from '../../lib/axios';
import { AccountServiceApiResponse } from '../../types/apiResponses';
import { ProviderAndRelationAPIResponse } from '../../types/admin';

export const useAdminProviderDetails = () => {
  const { id } = useParams();
  const [providerData, setProviderData] =
    useState<ProviderAndRelationAPIResponse>();
  const [primaryPatientCount, setPrimaryPatientCount] = useState<number>(0);
  const [editProviderModalSection, setEditProviderModalSection] = useState<
    'Personal' | 'GeneratePassword' | 'MoveProvider'
  >('Personal');

  useEffect(() => {
    getData().then((response) => {
      return null;
    });
  }, [id]);

  const getData = async () => {
    const response = (await axiosGetRequest(
      `/account/providers/admin/details/${id}`
    )) as AccountServiceApiResponse;

    if (response.success) {
      setProviderData(response.data.provider as ProviderAndRelationAPIResponse);
      setPrimaryPatientCount(response.data.patientCount as number);
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
