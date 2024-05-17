import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { SearchRequestPayload } from '@typeSpec/index';
import { revertDropdownOptionsToResponseKey } from '@util/index';

export const useSiteProvidersPage = () => {
  const queryClient = useQueryClient();
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

  // Get Table Data
  const { data: tableData, isLoading: tableDataLoading } = useQuery({
    queryKey: ['getRoleCharts'],
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
      label: 'On Leave',
      value: 'ON_LEAVE',
    },
    {
      label: 'On Break',
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
      label: 'Not Unseat',
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

    // Functions
    handleAddProviderModal,
    onUpdatePerPageItem,
    onUpdateSearchProvider,
    onUpdateActiveTab,
    onHandleSortBy,
  };
};
