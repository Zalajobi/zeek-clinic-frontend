import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { axiosGetRequestUserService } from '@lib/axios';
import { useQuery } from 'react-query';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { useDispatch, useSelector } from 'react-redux';
import { setResultFrom } from '../../redux/reducers/tableReducer';

export const useAdminProviderPage = () => {
  const { siteId } = useParams();
  const dispatch = useDispatch();
  const { noOfPages } = useSelector((state: any) => state.adminProviderTable);

  // Fetch Params
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [providerFrom, setProviderFrom] = useState<Date>();
  const [providerTo, setProviderTo] = useState<Date>();
  const [searchProvider, setSearchProvider] = useState<string>('');
  const [countryFilter, setCountryFilter] = useState<string>('');
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

  const [refetchProvidersData, setRefetchProvidersData] = useState(false);
  const [selectAllProviders, setSelectAllProviders] = useState(false);
  const [actions, setActions] = useState<
    | 'page-load'
    | 'selectFrom'
    | 'selectTo'
    | 'search'
    | 'tab'
    | 'perPage'
    | 'nextPage'
    | 'previousPage'
    | 'countryFilter'
    | 'pageNumber'
  >('page-load');

  const {
    data: siteData,
    isLoading: siteDataLoading,
    isError: siteDataError,
  } = useQuery<AccountServiceApiResponse>(
    ['siteInfoData', siteId],
    function () {
      return axiosGetRequestUserService(
        `/site/admin/get/information/${siteId}`
      );
    }
  );

  const {
    data: providerData,
    isLoading: providerDataLoading,
    isError: providerDataError,
  } = useQuery<AccountServiceApiResponse>(
    ['providerTableData', refetchProvidersData],
    function () {
      const params = {
        page: currentPage,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: providerFrom,
        to_date: providerTo,
        search: searchProvider,
        country: countryFilter,
        status: providerStatus === 'ALL' ? '' : providerStatus,
      };

      return axiosGetRequestUserService(
        `/providers/admin/get-providers/pagination/${siteId}`,
        params
      );
    }
  );

  const onUpdateSelectFrom = async (value: Date) => {
    setProviderFrom(value);
    setActions('selectFrom');
    setCurrentPage(0);
    dispatch(setResultFrom((perPage !== 'All' ? perPage : 0) + 1));

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onUpdateSelectTo = async (value: Date) => {
    setProviderTo(value);
    dispatch(
      setResultFrom(currentPage * (perPage !== 'All' ? perPage : 0) + 1)
    );
    setCurrentPage(0);
    setActions('selectTo');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onUpdateSearchProvider = async (value: string) => {
    setSearchProvider(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('search');

    setRefetchProvidersData(!refetchProvidersData);
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
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('tab');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('tab');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      setCurrentPage(value);
      dispatch(setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1));
      setActions('nextPage');

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      setCurrentPage(value);
      dispatch(setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1));
      setActions('previousPage');

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

  const filterByCountry = async (value: string) => {
    setCountryFilter(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('previousPage');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onEnterPageNumber = async (value: number | string) => {
    if (value <= 0) toast.error('You are on the first page');
    else if (value > noOfPages)
      toast.error('You Cannot go beyond the last page');
    else {
      const pageNumber = value ? Number(value) : 0;
      setCurrentPage(pageNumber - 1);
      setActions('pageNumber');
      dispatch(
        setResultFrom((pageNumber - 1) * (perPage !== 'All' ? perPage : 0) + 1)
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

      setRefetchProvidersData(!refetchProvidersData);
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
    providerFrom,
    providerTo,
    currentPage,
    searchProvider,
    perPage,
    noOfPages,
    selectAllProviders,
    providerStatus,
    siteData,
    siteDataLoading,
    siteDataError,
    providerData,
    providerDataLoading,
    providerDataError,
    actions,

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
