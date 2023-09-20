import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { axiosGetRequestUserService } from '../../lib/axios';
import {
  ProviderPageSiteResponseData,
  ProviderAndRelationAPIResponse,
} from '../../types/admin';
import { customPromiseRequest } from '../../lib/requests';
import toast from 'react-hot-toast';

export const useAdminProviderPage = () => {
  const { siteId } = useParams();
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
  >('ALL');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [countryFilter, setCountryFilter] = useState<string>('');
  const [searchProvider, setSearchProvider] = useState<string>('');
  const [providerFrom, setProviderFrom] = useState<Date>();
  const [providerTo, setProviderTo] = useState<Date>();
  const [noOfPages, setNoOfPages] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number>(0);
  const [resultTo, setResultTo] = useState<number>(0);
  const [totalProviders, setTotalProviders] = useState<number>(0);
  const [providerData, setProviderData] = useState<
    ProviderAndRelationAPIResponse[]
  >([]);
  const [selectAllProviders, setSelectAllProviders] = useState(false);

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

    const [siteInfo, providerData] = await customPromiseRequest([
      axiosGetRequestUserService(`/site/admin/get/information/${siteId}`),

      axiosGetRequestUserService(
        `/providers/admin/get-providers/pagination/${siteId}`,
        params
      ),
    ]);

    if (siteInfo?.status === 'fulfilled' && siteInfo?.value?.success) {
      setSiteData(siteInfo?.value?.data as ProviderPageSiteResponseData);
    } else {
      toast.error('Error getting site data');
    }

    if (providerData?.status === 'fulfilled' && providerData?.value?.success) {
      const count = providerData?.value?.data?.count as number;

      setTotalProviders(count);
      setProviderData(
        providerData?.value?.data?.providers as ProviderAndRelationAPIResponse[]
      );

      setNoOfPages(Math.ceil(count / (perPage === 'All' ? count : perPage)));
      setResultTo(
        currentPage + 1 === noOfPages
          ? count
          : currentPage * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );
      setResultFrom(1);
    } else {
      toast.error('Error getting providers data');
    }
  };

  const onUpdateSelectFrom = async (value: Date) => {
    setProviderFrom(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      to_date: providerTo,
      search: searchProvider,
      country: countryFilter,
      status: providerStatus === 'ALL' ? '' : providerStatus,
    };

    setResultFrom((perPage !== 'All' ? perPage : 0) + 1);
    setResultTo(
      1 === noOfPages
        ? totalProviders
        : currentPage * (perPage !== 'All' ? perPage : 0) +
            (perPage !== 'All' ? perPage : 0)
    );
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      `/providers/admin/get-providers/pagination/${siteId}`,
      params
    );

    if (response.success) {
      setProviderData(
        response?.data?.providers as ProviderAndRelationAPIResponse[]
      );
      setTotalProviders(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateSelectTo = async (value: Date) => {
    setProviderTo(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: providerFrom,
      to_date: value,
      search: searchProvider,
      country: countryFilter,
      status: providerStatus === 'ALL' ? '' : providerStatus,
    };

    setResultFrom(currentPage * (perPage !== 'All' ? perPage : 0) + 1);
    setResultTo(
      currentPage + 1 === noOfPages
        ? totalProviders
        : currentPage * (perPage !== 'All' ? perPage : 0) +
            (perPage !== 'All' ? perPage : 0)
    );

    const response = await axiosGetRequestUserService(
      `/providers/admin/get-providers/pagination/${siteId}`,
      params
    );

    if (response.success) {
      setProviderData(
        response?.data?.providers as ProviderAndRelationAPIResponse[]
      );
      setTotalProviders(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateSearchProvider = async (value: string) => {
    console.log(value);
    setSearchProvider(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: providerFrom,
      to_date: providerTo,
      search: value as string,
      status: providerStatus === 'ALL' ? '' : providerStatus,
    };

    setResultFrom(1);
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      `/providers/admin/get-providers/pagination/${siteId}`,
      params
    );

    if (response.success) {
      console.log(response.data);
      setProviderData(
        response?.data?.providers as ProviderAndRelationAPIResponse[]
      );
      setTotalProviders(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateStatusFilterTab = async (
    tab:
      | 'ALL'
      | 'ACTIVE'
      | 'PENDING'
      | 'ON_LEAVE'
      | 'ON_BREAK'
      | 'SUSPENDED'
      | 'TERMINATED'
      | 'UNAVAILABLE'
  ) => {
    setProviderStatus(tab);
    setResultFrom(1);
    setCurrentPage(0);

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: providerFrom,
      to_date: providerTo,
      search: searchProvider,
      country: countryFilter,
      status: tab === 'ALL' ? '' : tab,
    };

    const response = await axiosGetRequestUserService(
      `/providers/admin/get-providers/pagination/${siteId}`,
      params
    );

    if (response.success) {
      setProviderData(
        response?.data?.providers as ProviderAndRelationAPIResponse[]
      );
      setTotalProviders(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value);
    setNoOfPages(
      Math.ceil(totalProviders / (value === 'All' ? totalProviders : value))
    );
    setResultFrom(1);
    setResultTo(value === 'All' ? totalProviders : value);
    setCurrentPage(0);

    const params = {
      page: 0,
      per_page: value === 'All' ? 0 : value,
      from_date: providerFrom,
      to_date: providerTo,
      search: searchProvider,
      country: countryFilter,
      status: providerStatus === 'ALL' ? '' : providerStatus,
    };

    const response = await axiosGetRequestUserService(
      `/providers/admin/get-providers/pagination/${siteId}`,
      params
    );

    if (response.success) {
      setProviderData(
        response?.data?.providers as ProviderAndRelationAPIResponse[]
      );
      setTotalProviders(response?.data?.count as number);
    }
  };

  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      setCurrentPage(value);

      setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        value + 1 === noOfPages
          ? totalProviders
          : value * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: providerFrom,
        to_date: providerTo,
        search: searchProvider,
        country: countryFilter,
        status: providerStatus === 'ALL' ? '' : providerStatus,
      };

      const response = await axiosGetRequestUserService(
        `/providers/admin/get-providers/pagination/${siteId}`,
        params
      );

      if (response.success) {
        setProviderData(
          response?.data?.providers as ProviderAndRelationAPIResponse[]
        );
        setTotalProviders(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      setCurrentPage(value);

      setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        value + 1 === noOfPages
          ? totalProviders
          : value * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: providerFrom,
        to_date: providerTo,
        search: searchProvider,
        country: countryFilter,
        status: providerStatus === 'ALL' ? '' : providerStatus,
      };

      const response = await axiosGetRequestUserService(
        `/providers/admin/get-providers/pagination/${siteId}`,
        params
      );

      if (response.success) {
        setProviderData(
          response?.data?.providers as ProviderAndRelationAPIResponse[]
        );
        setTotalProviders(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const filterByCountry = async (value: string) => {
    setCountryFilter(value);
    setResultFrom(1);
    setCurrentPage(0);

    // setResultTo((value + 1 === noOfPages) ? totalHospitals : ((value) * (perPage !== 'All' ? perPage : 0)) + (perPage !== 'All' ? perPage : 0))

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: providerFrom,
      to_date: providerTo,
      search: searchProvider,
      country: value,
      status: providerStatus === 'ALL' ? '' : providerStatus,
    };

    const response = await axiosGetRequestUserService(
      `/providers/admin/get-providers/pagination/${siteId}`,
      params
    );

    if (response.success) {
      setProviderData(
        response?.data?.providers as ProviderAndRelationAPIResponse[]
      );
      setTotalProviders(response?.data?.count as number);
      // setResultTo(perPage === 'All' ? response?.data?.count : perPage)
      setResultTo(perPage === 'All' ? response?.data?.count : perPage * 1);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onEnterPageNumber = async (value: number | string) => {
    if (value <= 0) toast.error('You are on the first page');
    else if (value > noOfPages)
      toast.error('You Cannot go beyond the last page');
    else {
      const pageNumber = value ? Number(value) : 0;
      setCurrentPage(pageNumber - 1);

      setResultFrom((pageNumber - 1) * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        pageNumber - 1 === noOfPages
          ? totalProviders
          : (pageNumber - 1) * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: pageNumber - 1,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: providerFrom,
        to_date: providerTo,
        search: searchProvider,
        country: countryFilter,
        status: providerStatus === 'ALL' ? '' : providerStatus,
      };

      const response = await axiosGetRequestUserService(
        `/providers/admin/get-providers/pagination/${siteId}`,
        params
      );

      if (response.success) {
        setProviderData(
          response?.data?.providers as ProviderAndRelationAPIResponse[]
        );
        setTotalProviders(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const onUpdateSelectedRow = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    // if (event.target.checked) selectedHospitals.push(id);
    // else selectedHospitals = selectedHospitals.filter((item) => item !== id);
    console.log(`Selected Provider With ID ${id}`);
  };

  const onUpdateSelectAllProviders = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectAllProviders(event.target.checked);
  };

  return {
    // Values
    navigate,
    siteData,
    providerData,
    totalProviders,
    providerFrom,
    providerTo,
    resultFrom,
    resultTo,
    currentPage,
    searchProvider,
    perPage,
    noOfPages,
    selectAllProviders,
    providerStatus,

    // Functions
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onUpdateSearchProvider,
    onUpdateStatusFilterTab,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    filterByCountry,
    onEnterPageNumber,
    onUpdateSelectedRow,
    onUpdateSelectAllProviders,
  };
};
