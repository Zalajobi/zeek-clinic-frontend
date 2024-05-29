import { useState } from 'react';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { SearchRequestPayload } from '@typeSpec/index';
import { revertDropdownOptionsToResponseKey } from '@util/index';
import { useSelector } from 'react-redux';

export const useSiteProviders = () => {
  const { siteId } = useParams();
  const [addProviderModal, setAddProviderModal] = useState(false);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [searchKey, setSearchKey] = useState('Search By');
  const [searchProviderPayload, setSearchProviderPayload] =
    useState<SearchRequestPayload>({
      siteId,
    });

  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  // Get Table Data
  const { data: tableData, isLoading: tableDataLoading } = useQuery({
    queryKey: ['getTableData', searchProviderPayload],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/provider/search`,
          searchProviderPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const tabData = [
    {
      label: 'All',
      value: 'ALL',
    },
    {
      label: 'Active',
      value: 'ACTIVE',
    },
    {
      label: 'Pending',
      value: 'PENDING',
    },
    {
      label: 'Leave',
      value: 'ON_LEAVE',
    },
    {
      label: 'Break',
      value: 'ON_BREAK',
    },
    {
      label: 'Suspended',
      value: 'SUSPENDED',
    },

    {
      label: 'Fired',
      value: 'TERMINATED',
    },

    {
      label: 'Closed',
      value: 'UNAVAILABLE',
    },
  ];

  const handleAddProviderModal = () => {
    setAddProviderModal((cur) => !cur);
  };

  // On Change Items Per Page
  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    const perPageItem = typeof value === 'string' ? 1000000 : value;
    setPerPage(value);

    setSearchProviderPayload({
      ...searchProviderPayload,
      endRow: perPageItem,
      startRow: 0,
    });
    setResultFrom(1);
    setResultTo(perPageItem);
  };

  // On Update Search Provider
  const onUpdateSearchProvider = async (value: string) => {
    setSearchProviderPayload({
      ...searchProviderPayload,
      search: value,
      searchKey: revertDropdownOptionsToResponseKey(searchKey),
    });
  };

  // Handle Change Tab
  const onUpdateActiveTab = async (
    tab:
      | 'ALL'
      | 'PENDING'
      | 'ACTIVE'
      | 'ON_LEAVE'
      | 'ON_BREAK'
      | 'SUSPENDED'
      | 'TERMINATED'
      | 'UNAVAILABLE'
  ) => {
    setSearchProviderPayload({
      ...searchProviderPayload,
      status: tab,
    });
  };

  // Sort By
  const onHandleSortBy = async (key: string) => {
    setSearchProviderPayload({
      ...searchProviderPayload,
      sortModel: {
        colId: key,
        sort: searchProviderPayload?.sortModel?.sort === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  // Handle Click Next Page
  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchProviderPayload({
        ...searchProviderPayload,
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

  // Handle Click Previous Page
  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchProviderPayload({
        ...searchProviderPayload,
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

  // Update Search Key
  const onUpdateSearchKey = (value: string) => {
    if (value !== 'Search By') setSearchKey(value);
  };

  return {
    // Values
    addProviderModal,
    tableData,
    tableDataLoading,
    perPage,
    tabData,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,

    // Functions
    handleAddProviderModal,
    onUpdatePerPageItem,
    onUpdateSearchProvider,
    onUpdateActiveTab,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
  };
};
