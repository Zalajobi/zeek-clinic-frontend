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
import { customPromiseRequest } from '../../lib/requests';
import { SelectInputFieldProps } from '../../types/common';
import toast from 'react-hot-toast';

export const useAdminProviderPage = () => {
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<ProviderPageSiteResponseData>();
  // const [adminId, setAdminId] = useState<string>('');
  const [providerData, setProviderData] = useState<
    ProvidersPageProvidersData[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const baseData = JSON.parse(localStorage.getItem('adminData') as string);

      const [siteProviderData] = await customPromiseRequest([
        axiosGetRequest(
          `/account/providers/site/providers/get/${baseData.siteId}`
        ),
      ]);

      if (
        siteProviderData?.status === 'fulfilled' &&
        siteProviderData?.value?.success
      ) {
        setProviderData(
          siteProviderData?.value?.data
            .providers as ProvidersPageProvidersData[]
        );
        setSiteData(
          siteProviderData?.value?.data.site as ProviderPageSiteResponseData
        );
      } else {
        toast.error(
          'Something went wrong getting Site and Providers information'
        );
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
