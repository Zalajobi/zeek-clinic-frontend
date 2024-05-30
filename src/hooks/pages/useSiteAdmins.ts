import { useState } from 'react';
import { SearchRequestPayload } from '@typeSpec/index';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import { revertDropdownOptionsToResponseKey } from '@util/index';

export const useSiteAdmins = () => {
  const { siteId } = useParams();
  const [addAdminModal, setAddAdminModal] = useState(false);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [searchKey, setSearchKey] = useState('Search By');
  const [searchAdminPayload, setSearchAdminPayload] =
    useState<SearchRequestPayload>({
      siteId,
    });

  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  const tabData = [
    {
      label: 'All',
      value: 'ALL',
    },
    {
      label: 'Admin',
      value: 'ADMIN',
    },
    {
      label: 'Records',
      value: 'RECORDS',
    },
    {
      label: 'Cashier',
      value: 'CASHIER',
    },
    {
      label: 'Hospital',
      value: 'HOSPITAL_ADMIN',
    },
    {
      label: 'Site',
      value: 'SITE_ADMIN',
    },

    {
      label: 'HR',
      value: 'HUMAN_RESOURCES',
    },

    {
      label: 'HMO',
      value: 'HMO_ADMIN',
    },
  ];

  // Get Table Data
  const { data: tableData, isLoading: tableDataLoading } = useQuery({
    queryKey: ['getTableData', searchAdminPayload],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/admin/search`,
          searchAdminPayload
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  // Sort By
  const onHandleSortBy = async (key: string) => {
    setSearchAdminPayload({
      ...searchAdminPayload,
      sortModel: {
        colId: key,
        sort: searchAdminPayload?.sortModel?.sort === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  // Handle Click Next Page
  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchAdminPayload({
        ...searchAdminPayload,
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
      setSearchAdminPayload({
        ...searchAdminPayload,
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

  // Handle Create admin Modal
  const handleAddAdminModal = () => {
    setAddAdminModal((cur) => !cur);
  };

  // On Change Items Per Page
  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    const perPageItem = typeof value === 'string' ? 1000000 : value;
    setPerPage(value);

    setSearchAdminPayload({
      ...searchAdminPayload,
      endRow: perPageItem,
      startRow: 0,
    });
    setResultFrom(1);
    setResultTo(perPageItem);
  };

  // On Update Search Admin
  const onUpdateSearchAdmin = async (value: string) => {
    setSearchAdminPayload({
      ...searchAdminPayload,
      search: value,
      searchKey: revertDropdownOptionsToResponseKey(searchKey),
    });
  };

  // Handle Change Tab
  const onUpdateActiveTab = async (
    tab:
      | 'ALL'
      | 'ADMIN'
      | 'SUPER_ADMIN'
      | 'RECORDS'
      | 'CASHIER'
      | 'HOSPITAL_ADMIN'
      | 'SITE_ADMIN'
      | 'HUMAN_RESOURCES'
      | 'HMO_ADMIN'
  ) => {
    setSearchAdminPayload({
      ...searchAdminPayload,
      role: tab,
    });
  };

  return {
    // Values
    addAdminModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,
    tabData,

    // Functions
    handleAddAdminModal,
    onUpdatePerPageItem,
    onUpdateSearchAdmin,
    onUpdateActiveTab,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
  };
};
