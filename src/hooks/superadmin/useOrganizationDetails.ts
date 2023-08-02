import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosGetRequest } from '../../lib/axios';
import toast from 'react-hot-toast';
import {
  HospitalOrganizationData,
  SuperadminSiteData,
} from '../../types/superadmin';
import * as queryString from 'querystring';
import { SelectInputFieldProps } from '../../types/common';

export const useOrganizationDetails = () => {
  const { hospitalId } = useParams();
  const [organization, setOrganization] =
    useState<HospitalOrganizationData | null>(null);
  const [sites, setSites] = useState<SuperadminSiteData[] | null>(null);
  const [activeTabs, setActiveTabs] = useState<
    'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATE'
  >('ALL');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [noOfPages, setNoOfPages] = useState(0);
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

  useEffect(() => {
    let tempCountriesFilter: SelectInputFieldProps[] = [],
      stateFilter: SelectInputFieldProps[] = [];

    const getData = async () => {
      const response = await Promise.all([
        await axiosGetRequest('/account/hospital/details', {
          id: hospitalId,
        }),

        axiosGetRequest(
          '/account/site/get-distinct/country-and-state/organization',
          {
            hospital_id: hospitalId,
          }
        ),
      ]);

      if (response[0].success && response[1].success) {
        response[1].data.countries.map((item: { country: string }) => {
          tempCountriesFilter.push({
            value: item?.country,
            placeholder: item?.country,
          });
        });

        response[1].data.states.map((item: { state: string }) => {
          stateFilter.push({
            value: item?.state,
            placeholder: item?.state,
          });
        });

        setOrganization(response[0].data.hospital as HospitalOrganizationData);
        setSites(response[0]?.data?.sites);
        setNoOfPages(
          Math.ceil(
            response[0].data.tableData.sites / (perPage !== 'All' ? perPage : 0)
          )
        );
        setTotalData(response[0].data.tableData.sites);
        setResultFrom(response[0]?.data?.sites.length <= 0 ? 0 : 1);
        setResultTo(
          response[0]?.data?.sites.length <= 0
            ? 0
            : currentPage + 1 === noOfPages
            ? response[0].data.tableData.sites
            : currentPage * (perPage !== 'All' ? perPage : 0) +
              (perPage !== 'All' ? perPage : 0)
        );

        setCountryFilterList(tempCountriesFilter);
        setStateFilterList(stateFilter);
      } else {
        toast.error(response[0].message);
      }
    };

    getData().catch((err) => {
      toast.error('Response');
    });
  }, [hospitalId, refreshData]);

  const onUpdateActiveTab = async (
    tab: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATE'
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
      params
    );

    if (response.success) {
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
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

      const response = await axiosGetRequest(
        '/account/site/organization/table-filter',
        params
      );

      if (response.success) {
        setSites(response?.data?.sites as SuperadminSiteData[]);
        setTotalData(response?.data?.count as number);
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

      const response = await axiosGetRequest(
        '/account/site/organization/table-filter',
        params
      );

      if (response.success) {
        setSites(response?.data?.sites as SuperadminSiteData[]);
        setTotalData(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
      }
    }
  };

  const onUpdateSelectFrom = async (value: string) => {
    setDateFilterFrom(new Date(value));
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
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
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
    }
  };

  const onUpdateSelectTo = async (value: string) => {
    setDateFilterTo(new Date(value));
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
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
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
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

      const response = await axiosGetRequest(
        '/account/site/organization/table-filter',
        params
      );

      if (response.success) {
        setSites(response?.data?.sites as SuperadminSiteData[]);
        setTotalData(response?.data?.count as number);
        setNoOfPages(
          Math.ceil(
            response?.data?.count /
              (perPage === 'All' ? response?.data?.count : perPage)
          )
        );
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
      params
    );

    if (response.success) {
      setResultTo(value === 'All' ? response?.data?.count : value);
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (value === 'All' ? response?.data?.count : value)
        )
      );
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
      params
    );

    if (response.success) {
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
      params
    );

    if (response.success) {
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
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

    const response = await axiosGetRequest(
      '/account/site/organization/table-filter',
      params
    );

    if (response.success) {
      setSites(response?.data?.sites as SuperadminSiteData[]);
      setTotalData(response?.data?.count as number);
      setResultTo(perPage === 'All' ? response?.data?.count : perPage);
      setNoOfPages(
        Math.ceil(
          response?.data?.count /
            (perPage === 'All' ? response?.data?.count : perPage)
        )
      );
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
  };
};
