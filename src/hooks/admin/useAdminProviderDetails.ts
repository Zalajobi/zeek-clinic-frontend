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

  useEffect(() => {
    getData().then((response) => {
      console.log(response);
    });
  }, [id]);

  const getData = async () => {
    const response = (await axiosGetRequest(
      `/account/providers/admin/details/${id}`
    )) as AccountServiceApiResponse;

    if (response.success) {
      console.log(response.data);
      setProviderData(response.data.provider as ProviderAndRelationAPIResponse);
      setPrimaryPatientCount(response.data.patientCount as number);
    }
  };

  return {
    id,
    providerData,
    primaryPatientCount,
  };
};
