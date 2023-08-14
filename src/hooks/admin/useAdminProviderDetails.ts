import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosGetRequest } from '../../lib/axios';
import { AccountServiceApiResponse } from '../../types/apiResponses';
import { ProviderAndRelationAPIResponse } from '../../types/admin';

export const useAdminProviderDetails = () => {
  const { id } = useParams();
  const [providerData, setProviderData] =
    useState<ProviderAndRelationAPIResponse>();

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
      setProviderData(response.data as ProviderAndRelationAPIResponse);
    }
  };

  return {
    id,
    providerData,
  };
};
