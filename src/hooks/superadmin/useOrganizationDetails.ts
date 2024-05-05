import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { HospitalDetailsData, SitesDataKeyMap } from '@typeSpec/superadmin';
import {
  axiosGetRequestUserService,
  axiosPostRequestUserService,
} from '@lib/axios';
import { SelectInputFieldProps } from '@typeSpec/common';
import { customPromiseRequest } from '@lib/requests';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const useOrganizationDetails = () => {
  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  const { hospitalId } = useParams();
  const [organization, setOrganization] = useState<HospitalDetailsData | null>(
    null
  );
  const [sites, setSites] = useState<SitesDataKeyMap[] | null>(null);
  const [activeTabs, setActiveTabs] = useState<
    'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATED'
  >('ALL');
  const [searchSitePayload, setSearchSitePayload] = useState({
    hospitalId,
    search: undefined,
    status: undefined,
    country: undefined,
    state: undefined,
    from_date: undefined,
    to_date: undefined,
    startRow: 0,
    endRow: 10,
    sortModel: undefined,
  });
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  // const [noOfPages, setNoOfPages] = useState(0);
  const [resultFrom, setResultFrom] = useState(0);
  const [resultTo, setResultTo] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [searchSite, setSearchSite] = useState('');
  const [dateFilterTo, setDateFilterTo] = useState<Date | null>();
  const [dateFilterFrom, setDateFilterFrom] = useState<Date | null>();
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [countryFilterList, setCountryFilterList] = useState<
    SelectInputFieldProps[]
  >([]);
  const [stateFilterList, setStateFilterList] = useState<
    SelectInputFieldProps[]
  >([]);
  const [refreshData, setRefreshData] = useState(false);

  const [editSiteModalController, setEditSiteModalController] = useState(false);

  const tabData = [
    {
      label: 'All',
      value: 'ALL',
    },
    {
      label: 'Pending',
      value: 'PENDING',
    },
    {
      label: 'Active',
      value: 'ACTIVE',
    },
    {
      label: 'Deactivated',
      value: 'DEACTIVATED',
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const [countryStates] = await customPromiseRequest([
        axiosGetRequestUserService(`/site/${hospitalId}/locations/distinct`),
      ]);

      // if (hospital?.status === 'fulfilled' && hospital?.value?.success) {
      //   setHospitalData(hospital?.value as AccountServiceApiResponse);
      // } else {
      //   toast.error('Something went wrong getting hospital list');
      // }

      if (
        countryStates.status === 'fulfilled' &&
        countryStates?.value?.success
      ) {
        setCountryAndStateSitesData(
          countryStates.value as AccountServiceApiResponse
        );
      } else {
        toast.error('Something went wrong getting site countries and states');
      }
    };

    getData().catch((err) => {
      toast.error('Response');
    });
  }, [hospitalId, refreshData]);

  // Get Hospital Details
  const { data: hospitalData, isLoading: hospitalDataLoading } = useQuery({
    queryKey: ['getHospitalDetails'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(
          `/hospital/details/${hospitalId}`
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Get Site Count Data
  const { data: siteCountData, isLoading: siteCountDataLoading } = useQuery({
    queryKey: ['getSiteCountData'],
    queryFn: async () => {
      try {
        return await axiosGetRequestUserService(
          `/site/status-counts/organization/${hospitalId}`
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Table Data
  const { data: sitesTableData, isLoading: sitesTableDataLoading } = useQuery({
    queryKey: ['getSiteTableData', searchSitePayload],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/site/search`,
          searchSitePayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const setHospitalData = (responseData: AccountServiceApiResponse) => {
    setOrganization(responseData.data.hospital as HospitalDetailsData);
    setSites(responseData?.data?.sites);
    // setNoOfPages(
    //   Math.ceil(
    //     responseData.data.tableData.sites / (perPage !== 'All' ? perPage : 0)
    //   )
    // );
    setTotalData(responseData.data.tableData.sites);
    setResultFrom(responseData?.data?.sites.length <= 0 ? 0 : 1);
    setResultTo(
      responseData?.data?.sites.length <= 0
        ? 0
        : currentPage + 1 === noOfPages
        ? responseData.data.tableData.sites
        : currentPage * (perPage !== 'All' ? perPage : 0) +
          (perPage !== 'All' ? perPage : 0)
    );
  };

  // Request to Delete Site
  const deleteSite = async (siteId: string) => {
    console.log('Deleting SIte');
  };

  // Get Site Details for edit
  const getSiteDetailsAndEditModalController = async (siteId: string) => {
    setEditSiteModalController(!editSiteModalController);
    console.log('Edit Site');
  };

  const setCountryAndStateSitesData = (
    responseData: AccountServiceApiResponse
  ) => {
    let tempCountriesFilter: SelectInputFieldProps[] = [],
      stateFilter: SelectInputFieldProps[] = [];

    responseData.data.countries.map((item: { country: string }) => {
      tempCountriesFilter.push({
        value: item?.country,
        placeholder: item?.country,
      });

      return;
    });

    responseData.data.states.map((item: { state: string }) => {
      stateFilter.push({
        value: item?.state,
        placeholder: item?.state,
      });

      return;
    });

    setCountryFilterList(tempCountriesFilter);
    setStateFilterList(stateFilter);
  };

  const onUpdateActiveTab = async (
    tab: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATED'
  ) => {
    setActiveTabs(tab);
    setResultFrom(1);
    setCurrentPage(0);

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: dateFilterFrom,
      to_date: dateFilterTo,
      search: searchSite,
      country: country,
      status: tab === 'ALL' ? '' : tab,
      hospital_id: hospitalId,
      state,
    };

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (perPage === 'All' ? response?.data?.count : perPage)
      //   )
      // );
    }
  };

  // Handle Next Page
  const onClickNext = async (value: number) => {
    console.log({
      // resultFrom,
      noOfPages,
      totalDataCount,
      // resultTo,
    });

    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchSitePayload({
        ...searchSitePayload,
        startRow: value * perPageItem,
        endRow: (value + 1) * perPageItem,
      });

      setCurrentPage(value);
      setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        value + 1 === noOfPages
          ? totalDataCount
          : value * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );
    }
  };

  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      setCurrentPage(value);

      setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1);
      setResultTo(
        value + 1 === noOfPages
          ? totalData
          : value * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: value,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: dateFilterFrom,
        to_date: dateFilterTo,
        search: searchSite,
        country: country,
        status: activeTabs === 'ALL' ? '' : activeTabs,
        hospital_id: hospitalId,
        state,
      };

      const response = await axiosGetRequestUserService(
        '/site/organization/sites/filters',
        params
      );

      if (response.success) {
        setSites(response?.data?.sites as SitesDataKeyMap[]);
        setTotalData(response?.data?.count as number);
        // setNoOfPages(
        //   Math.ceil(
        //     response?.data?.count /
        //       (perPage === 'All' ? response?.data?.count : perPage)
        //   )
        // );
      }
    }
  };

  const onUpdateSelectFrom = async (value: Date) => {
    setDateFilterFrom(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: value,
      to_date: dateFilterTo,
      search: searchSite,
      country: country,
      status: activeTabs === 'ALL' ? '' : activeTabs,
      hospital_id: hospitalId,
      state,
    };

    setCurrentPage(0);
    setResultFrom((perPage !== 'All' ? perPage : 0) + 1);

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setResultTo(
        response?.data?.count <=
          (perPage !== 'All' ? perPage : response?.data?.count)
          ? response?.data?.count
          : currentPage + 1 === noOfPages
          ? totalData
          : currentPage * (perPage !== 'All' ? perPage : 0) +
            (perPage !== 'All' ? perPage : 0)
      );
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (perPage === 'All' ? response?.data?.count : perPage)
      //   )
      // );
    }
  };

  const onUpdateSelectTo = async (value: Date) => {
    setDateFilterTo(value);
    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: dateFilterFrom,
      to_date: value,
      search: searchSite,
      country: country,
      status: activeTabs === 'ALL' ? '' : activeTabs,
      hospital_id: hospitalId,
      state,
    };

    setCurrentPage(0);
    setResultFrom(currentPage * (perPage !== 'All' ? perPage : 0) + 1);

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setResultTo(
        response?.data?.count <=
          (perPage !== 'All' ? perPage : response?.data?.count)
          ? response?.data?.count
          : currentPage + 1 === noOfPages
          ? totalData
          : currentPage * (perPage !== 'All' ? perPage : 0) +
            (perPage !== 'All' ? perPage : 0)
      );
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (perPage === 'All' ? response?.data?.count : perPage)
      //   )
      // );
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
          ? totalData
          : (pageNumber - 1) * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
      );

      const params = {
        page: pageNumber - 1,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: dateFilterFrom,
        to_date: dateFilterTo,
        search: searchSite,
        country: country,
        status: activeTabs === 'ALL' ? '' : activeTabs,
        hospital_id: hospitalId,
        state,
      };

      const response = await axiosGetRequestUserService(
        '/site/organization/sites/filters',
        params
      );

      if (response.success) {
        setSites(response?.data?.sites as SitesDataKeyMap[]);
        setTotalData(response?.data?.count as number);
        // setNoOfPages(
        //   Math.ceil(
        //     response?.data?.count /
        //       (perPage === 'All' ? response?.data?.count : perPage)
        //   )
        // );
      }
    }
  };

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value);
    setResultFrom(1);
    setCurrentPage(0);

    const params = {
      page: 0,
      per_page: value === 'All' ? 0 : value,
      from_date: dateFilterFrom,
      to_date: dateFilterTo,
      search: searchSite,
      country: country,
      status: activeTabs === 'ALL' ? '' : activeTabs,
      hospital_id: hospitalId,
      state,
    };

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setResultTo(value === 'All' ? response?.data?.count : value);
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (value === 'All' ? response?.data?.count : value)
      //   )
      // );
    }
  };

  const onUpdateSearchSite = async (value: string) => {
    setSearchSite(value);

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: dateFilterFrom,
      to_date: dateFilterTo,
      search: value,
      country: country,
      status: activeTabs === 'ALL' ? '' : activeTabs,
      hospital_id: hospitalId,
      state,
    };

    setResultFrom(1);
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (perPage === 'All' ? response?.data?.count : perPage)
      //   )
      // );
    }
  };

  const onUpdateFilterByCountry = async (value: string) => {
    setCountry(value);

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: dateFilterFrom,
      to_date: dateFilterTo,
      search: searchSite,
      country: value,
      status: activeTabs === 'ALL' ? '' : activeTabs,
      hospital_id: hospitalId,
      state,
    };

    setResultFrom(1);
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (perPage === 'All' ? response?.data?.count : perPage)
      //   )
      // );
    }
  };

  const onUpdateFilterByState = async (value: string) => {
    setState(value);

    const params = {
      page: 0,
      per_page: perPage === 'All' ? 0 : perPage,
      from_date: dateFilterFrom,
      to_date: dateFilterTo,
      search: searchSite,
      country: country,
      status: activeTabs === 'ALL' ? '' : activeTabs,
      hospital_id: hospitalId,
      state: value,
    };

    setResultFrom(1);
    setCurrentPage(0);

    const response = await axiosGetRequestUserService(
      '/site/organization/sites/filters',
      params
    );

    if (response.success) {
      setSites(response?.data?.sites as SitesDataKeyMap[]);
      setTotalData(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      // setNoOfPages(
      //   Math.ceil(
      //     response?.data?.count /
      //       (perPage === 'All' ? response?.data?.count : perPage)
      //   )
      // );
    }
  };

  const onUpdateDataRefresh = () => setRefreshData(!refreshData);

  return {
    // Values
    hospitalId,
    organization,
    activeTabs,
    sites,
    perPage,
    currentPage,
    noOfPages,
    resultFrom,
    resultTo,
    totalData,
    searchSite,
    country,
    countryFilterList,
    stateFilterList,
    dateFilterFrom,
    dateFilterTo,
    tabData,
    hospitalData,
    hospitalDataLoading,
    siteCountData,
    siteCountDataLoading,
    sitesTableData,
    sitesTableDataLoading,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onEnterPageNumber,
    onUpdatePerPageItem,
    onUpdateSearchSite,
    onUpdateFilterByCountry,
    onUpdateFilterByState,
    onUpdateDataRefresh,
    deleteSite,
    getSiteDetailsAndEditModalController,
  };
};
