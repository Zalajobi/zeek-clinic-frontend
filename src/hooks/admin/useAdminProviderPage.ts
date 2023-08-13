import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { axiosGetRequest } from '../../lib/axios';
// import { AccountServiceApiResponse } from '../../types/apiResponses';
import {
  ProviderPageSiteResponseData,
  ProvidersPageProvidersData,
} from '../../types/admin';
import { customPromiseRequest } from '../../lib/requests';
// import { SelectInputFieldProps } from '../../types/common';
import toast from 'react-hot-toast';

export const useAdminProviderPage = () => {
  const navigate = useNavigate();
  const [siteData, setSiteData] = useState<ProviderPageSiteResponseData>();
  const [providerStatus, setProviderStatus] = useState<
    | 'ALL'
    | 'ACTIVE'
    | 'PENDING'
    | 'ON_LEAVE'
    | 'ON_BREAK'
    | 'SUSPENDED'
    | 'TERMINATED'
    | 'UNAVAILABLE'
  >();
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  // const [noOfPages, setNoOfPages] = useState<number>(0);
  // const [resultFrom, setResultFrom] = useState<number>(0);
  // const [resultTo, setResultTo] = useState<number>(0);
  const [countryFilter, setCountryFilter] = useState<string>('');
  const [searchProvider, setSearchProvider] = useState<string>('');
  const [providerFrom, setProviderFrom] = useState<Date | null>();
  const [providerTo, setProviderTo] = useState<Date | null>();

  const [providerData, setProviderData] = useState<
    ProvidersPageProvidersData[]
  >([]);

  useEffect(() => {
    getData().then((response) => {
      console.log(response);
    });
  }, [input]);

  const getData = async () => {
    const params = {
      page: currentPage,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: providerFrom,
      to_date: providerTo,
      search: searchProvider,
      country: countryFilter,
      status: providerStatus === 'ALL' ? '' : providerStatus,
    };
    const baseData = JSON.parse(localStorage.getItem('adminData') as string);

    const [siteInfo, providerData] = await customPromiseRequest([
      axiosGetRequest(`/account/site/admin/get/information/${baseData.siteId}`),

      axiosGetRequest(
        `/account/providers/admin/get-providers/pagination/${baseData.siteId}`,
        params
      ),
    ]);

    if (siteInfo?.status === 'fulfilled' && siteInfo?.value?.success) {
      // setProviderData(
      //   siteInfo?.value?.data
      //     .providers as ProvidersPageProvidersData[]
      // );
      setSiteData(siteInfo?.value?.data as ProviderPageSiteResponseData);
    } else {
      toast.error('Error getting site data');
    }

    if (providerData?.status === 'fulfilled' && providerData?.value?.success) {
      console.log(providerData?.value?.data?.count);

      setProviderData(
        providerData?.value?.data?.providers as ProvidersPageProvidersData[]
      );
    } else {
      toast.error('Error getting providers data');
    }
  };

  return {
    navigate,
    siteData,
    providerData,
  };
};
