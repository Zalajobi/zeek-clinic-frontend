import { useState } from 'react';
import toast from 'react-hot-toast';
import { axiosPostRequestUserService } from '@lib/axios';
import { SearchRequestPayload } from '@typeSpec/index';
import axios from 'axios';
import { useQuery } from 'react-query';
import { revertDropdownOptionsToResponseKey } from '@util/index';
import { useSelector } from 'react-redux';

export const useHospitalOrganisation = () => {
  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );
  const [searchOrganizationPayload, setSearchOrganizationPayload] =
    useState<SearchRequestPayload>({});
  const [searchKey, setSearchKey] = useState('Search By');
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [createHospitalModal, setCreateHospitalModal] = useState(false);

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
      label: 'Archived',
      value: 'ARCHIVED',
    },
    {
      label: 'Pending',
      value: 'PENDING',
    },
    {
      label: 'Suspended',
      value: 'DEACTIVATED',
    },
  ];

  // Table Data
  const { data: hospitalTableData, isLoading: hospitalTableDataLoading } =
    useQuery({
      queryKey: ['getTableData', searchOrganizationPayload],
      queryFn: async () => {
        try {
          return await axiosPostRequestUserService(
            `/hospital/search`,
            searchOrganizationPayload
          );
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            toast.error(error.response.data.error?.message);
          }
        }
      },
    });

  // On Update Active Tab
  const onUpdateActiveTab = async (
    tab: 'ALL' | 'ACTIVE' | 'ARCHIVED' | 'PENDING' | 'DEACTIVATED'
  ) => {
    setSearchOrganizationPayload({
      ...searchOrganizationPayload,
      status: tab,
    });
  };

  // Update Per Page Item
  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    const perPageItem = typeof value === 'string' ? 1000000 : value;
    setPerPage(value);

    setSearchOrganizationPayload({
      ...searchOrganizationPayload,
      endRow: perPageItem,
      startRow: 0,
    });
    setResultFrom(1);
    setResultTo(perPageItem);
  };

  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchOrganizationPayload({
        ...searchOrganizationPayload,
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
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchOrganizationPayload({
        ...searchOrganizationPayload,
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

  // On Update Search Hospital
  const onUpdateSearchOrganisation = async (value: string) => {
    setSearchOrganizationPayload({
      ...searchOrganizationPayload,
      search: value,
      searchKey: revertDropdownOptionsToResponseKey(searchKey),
    });
  };

  // Show Create Hospital Modal
  const onUpdateShowCreateHospitalModal = () => {
    setCreateHospitalModal((cur) => !cur);
  };

  // Sort By
  const onHandleSortBy = async (key: string) => {
    setSearchOrganizationPayload({
      ...searchOrganizationPayload,
      sortModel: {
        colId: key,
        sort:
          searchOrganizationPayload?.sortModel?.sort === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  return {
    //Value
    hospitalTableData,
    hospitalTableDataLoading,
    tabData,
    searchKey,
    perPage,
    currentPage,
    resultFrom,
    resultTo,
    createHospitalModal,

    // Function
    onUpdateActiveTab,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdateSearchOrganisation,
    onUpdateShowCreateHospitalModal,
    onHandleSortBy,
  };
};
