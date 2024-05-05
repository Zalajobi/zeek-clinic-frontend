import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import {
  axiosGetRequestUserService,
  axiosPostRequestUserService,
} from '@lib/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchSitesRequestPayload } from '@typeSpec/index';
import { revertDropdownOptionsToResponseKey } from '@util/index';

export const useOrganizationDetails = () => {
  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  const { hospitalId } = useParams();
  const [searchSitePayload, setSearchSitePayload] =
    useState<SearchSitesRequestPayload>({
      hospitalId,
    });
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [refreshData, setRefreshData] = useState(false);
  const [editSiteModalController, setEditSiteModalController] = useState(false);
  const [searchKey, setSearchKey] = useState('Search By');

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
      label: 'Closed',
      value: 'CLOSED',
    },
    {
      label: 'Suspended',
      value: 'DEACTIVATED',
    },
  ];

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

  // Request to Delete Site
  const deleteSite = async (siteId: string) => {
    console.log('Deleting SIte');
  };

  // Get Site Details for edit
  const getSiteDetailsAndEditModalController = async (siteId: string) => {
    setEditSiteModalController(!editSiteModalController);
    console.log('Edit Site');
  };

  // Handle Change Tab
  const onUpdateActiveTab = async (
    tab: 'ALL' | 'PENDING' | 'ACTIVE' | 'DEACTIVATED' | 'CLOSED'
  ) => {
    setSearchSitePayload({
      ...searchSitePayload,
      status: tab,
    });
  };

  // Handle Next Page
  const onClickNext = async (value: number) => {
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

  // Handle Previous Page
  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
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

  // On Change Items Per Page
  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    const perPageItem = typeof value === 'string' ? 1000000 : value;
    setPerPage(value);

    setSearchSitePayload({
      ...searchSitePayload,
      endRow: perPageItem,
      startRow: 0,
    });
    setResultFrom(1);
    setResultTo(perPageItem);
  };

  // Update Search Key
  const onUpdateSearchKey = (value: string) => {
    if (value !== 'Search By') setSearchKey(value);
  };

  // On Update Search Site
  const onUpdateSearchSite = async (value: string) => {
    setSearchSitePayload({
      ...searchSitePayload,
      search: value,
      searchKey: revertDropdownOptionsToResponseKey(searchKey),
    });
  };

  const onUpdateDataRefresh = () => setRefreshData(!refreshData);

  return {
    // Values
    hospitalId,
    perPage,
    currentPage,
    noOfPages,
    resultFrom,
    resultTo,
    tabData,
    hospitalData,
    hospitalDataLoading,
    siteCountData,
    siteCountDataLoading,
    sitesTableData,
    sitesTableDataLoading,
    searchKey,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdatePerPageItem,
    onUpdateSearchSite,
    onUpdateDataRefresh,
    deleteSite,
    getSiteDetailsAndEditModalController,
    onUpdateSearchKey,
  };
};
