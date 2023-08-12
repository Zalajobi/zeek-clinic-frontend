import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { axiosGetRequest } from '../../lib/axios';
import { AccountServiceApiResponse } from '../../types/apiResponses';
import {
  ProviderPageSiteResponseData,
  ProvidersPageProvidersData,
} from '../../types/admin';

export const useAdminProviderPage = () => {
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<ProviderPageSiteResponseData>();
  const [providerData, setProviderData] = useState<
    ProvidersPageProvidersData[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const baseData = JSON.parse(localStorage.getItem('adminData') as string);
      const response = (await axiosGetRequest(
        `/account/providers/site/providers/get/${baseData.siteId}`
      )) as AccountServiceApiResponse;

      if (response.success) {
        setProviderData(
          response.data.providers as ProvidersPageProvidersData[]
        );
        setSiteData(response.data.site as ProviderPageSiteResponseData);
      }
    };

    getData().then((response) => {
      console.log(response);
    });
  }, [input]);

  return {
    navigate,
    siteData,
    providerData,
  };
};
