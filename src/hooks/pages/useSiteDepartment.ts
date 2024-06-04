import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { SearchRequestPayload } from '@typeSpec/index';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { revertDropdownOptionsToResponseKey } from '@util/index';

export const useSiteDepartment = () => {
  const { siteId } = useParams();
  const [addDepartmentModal, setAddDepartmentModal] = useState(false);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [searchKey, setSearchKey] = useState('Search By');
  const [searchDepartmentPayload, setSearchDepartmentPayload] =
    useState<SearchRequestPayload>({
      siteId,
    });

  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  // Get Table Data
  const { data: tableData, isLoading: tableDataLoading } = useQuery({
    queryKey: ['getTableData', searchDepartmentPayload],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/department/search`,
          searchDepartmentPayload
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
    setSearchDepartmentPayload({
      ...searchDepartmentPayload,
      sortModel: {
        colId: key,
        sort:
          searchDepartmentPayload?.sortModel?.sort === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  // Handle Click Next Page
  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? 1000000 : perPage;
      setSearchDepartmentPayload({
        ...searchDepartmentPayload,
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
      setSearchDepartmentPayload({
        ...searchDepartmentPayload,
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

  // On Change Items Per Page
  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    const perPageItem = typeof value === 'string' ? 1000000 : value;
    setPerPage(value);

    setSearchDepartmentPayload({
      ...searchDepartmentPayload,
      endRow: perPageItem,
      startRow: 0,
    });
    setResultFrom(1);
    setResultTo(perPageItem);
  };

  // On Update Search Admin
  const onUpdateSearchDepartment = async (value: string) => {
    if (searchKey === 'Search By')
      return toast.error('Please select a valid search key');
    else
      setSearchDepartmentPayload({
        ...searchDepartmentPayload,
        search: value,
        searchKey: revertDropdownOptionsToResponseKey(searchKey),
      });
  };

  // Handler Add Department Modal
  const handleAddDepartmentModal = () => {
    setAddDepartmentModal((cur) => !cur);
  };

  return {
    // Values
    addDepartmentModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,

    // Functions
    handleAddDepartmentModal,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdatePerPageItem,
    onUpdateSearchDepartment,
  };
};
