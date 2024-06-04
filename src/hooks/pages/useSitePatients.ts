import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { SearchRequestPayload } from '@typeSpec/index';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import { revertDropdownOptionsToResponseKey } from '@util/index';
import { ONE_MILLION } from '@lib/constants/constants';

export const useSitePatients = () => {
  const { siteId } = useParams();
  const [addPatientModal, setAddPatientModal] = useState(false);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [searchKey, setSearchKey] = useState('Search By');
  const [searchPatientPayload, setSearchPatientPayload] =
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
      label: 'Active',
      value: 'ACTIVE',
    },
    {
      label: 'Pending',
      value: 'PENDING',
    },
    {
      label: 'Discharged',
      value: 'DISCHARGED',
    },
    {
      label: 'Deceased',
      value: 'DECEASED',
    },
    {
      label: 'Inpatient',
      value: 'INPATIENT',
    },

    {
      label: 'Outpatient',
      value: 'OUTPATIENT',
    },
  ];

  // Get Table Data
  const { data: tableData, isLoading: tableDataLoading } = useQuery({
    queryKey: ['getTableData', searchPatientPayload],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(
          `/patient/search`,
          searchPatientPayload
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
    setSearchPatientPayload({
      ...searchPatientPayload,
      sortModel: {
        colId: key,
        sort: searchPatientPayload?.sortModel?.sort === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  // Handle Click Next Page
  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? ONE_MILLION : perPage;
      setSearchPatientPayload({
        ...searchPatientPayload,
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
      const perPageItem = typeof perPage === 'string' ? ONE_MILLION : perPage;
      setSearchPatientPayload({
        ...searchPatientPayload,
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
    const perPageItem = typeof value === 'string' ? ONE_MILLION : value;
    setPerPage(value);

    setSearchPatientPayload({
      ...searchPatientPayload,
      endRow: perPageItem,
      startRow: 0,
    });
    setResultFrom(1);
    setResultTo(perPageItem);
  };

  // On Update Search Admin
  const onUpdateSearchPatient = async (value: string) => {
    if (searchKey === 'Search By')
      return toast.error('Please select a valid search key');
    else
      setSearchPatientPayload({
        ...searchPatientPayload,
        search: value,
        searchKey: revertDropdownOptionsToResponseKey(searchKey),
      });
  };

  // Handle Change Tab
  const onUpdateActiveTab = async (
    tab:
      | 'ALL'
      | 'ACTIVE'
      | 'PENDING'
      | 'DISCHARGED'
      | 'DECEASED'
      | 'INPATIENT'
      | 'OUTPATIENT'
  ) => {
    setSearchPatientPayload({
      ...searchPatientPayload,
      role: tab,
    });
  };

  // Update Create Patient Modal
  const onUpdateAddPatientModal = () => {
    setAddPatientModal((cur) => !cur);
  };

  return {
    // Values
    addPatientModal,
    tableData,
    tableDataLoading,
    perPage,
    resultFrom,
    resultTo,
    currentPage,
    searchKey,
    tabData,

    // Functions
    onUpdateAddPatientModal,
    onUpdatePerPageItem,
    onUpdateActiveTab,
    onHandleSortBy,
    onClickNext,
    onClickPrevious,
    onUpdateSearchKey,
    onUpdateSearchPatient,
  };
};
