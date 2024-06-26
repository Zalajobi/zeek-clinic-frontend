import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import {
  axiosDeleteRequestUserService,
  axiosPostRequestUserService,
} from '@lib/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { SearchRequestPayload } from '@typeSpec/index';
import { revertDropdownOptionsToResponseKey } from '@util/index';
import { ONE_MILLION } from '@lib/constants/constants';

export const useOrganizationDetails = () => {
  const queryClient = useQueryClient();
  const { hospitalId } = useParams();
  const { totalDataCount, noOfPages } = useSelector(
    (state: any) => state.adminProviderTable
  );

  const [searchSitePayload, setSearchSitePayload] =
    useState<SearchRequestPayload>({
      hospitalId,
    });
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resultFrom, setResultFrom] = useState<number | null>(null);
  const [resultTo, setResultTo] = useState<number | null>(null);
  const [editSiteModalController, setEditSiteModalController] = useState(false);
  const [searchKey, setSearchKey] = useState('Search By');
  const [showCreateSiteModal, setShowCreateSiteModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [siteId, setSiteId] = useState('');

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

  // Table Data
  const { data: sitesTableData, isLoading: sitesTableDataLoading } = useQuery({
    queryKey: ['getTableData', searchSitePayload],
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

  // Delete SiteDetailsPage Mutation
  const { mutate: deleteSiteMutation } = useMutation(
    async () => {
      try {
        return await axiosDeleteRequestUserService(`/site/delete/${siteId}`);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
    {
      onMutate: () => {
        toast.loading('Creating SiteDetailsPage', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) toast.success(result?.message);
        else toast.error('Something Went Wrong');

        queryClient.resetQueries('getTableData').then(() => {});
      },
    }
  );

  // Request to Delete SiteDetailsPage
  const deleteSite = async (siteId: string) => {
    setSiteId(siteId);
    setShowDeleteModal(!showDeleteModal);
  };

  // Confirm Delete SiteDetailsPage - Send Delete Request
  const confirmDeleteSite = () => {
    setShowDeleteModal(!showDeleteModal);
    deleteSiteMutation();
  };

  // Get SiteDetailsPage Details for edit
  const editSite = async (siteId: string) => {
    setEditSiteModalController(!editSiteModalController);
    setSiteId(siteId);
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

  // Sort By
  const onHandleSortBy = async (key: string) => {
    setSearchSitePayload({
      ...searchSitePayload,
      sortModel: {
        colId: key,
        sort: searchSitePayload?.sortModel?.sort === 'asc' ? 'desc' : 'asc',
      },
    });
  };

  // Handle Click Next Page
  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      const perPageItem = typeof perPage === 'string' ? ONE_MILLION : perPage;
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

  // Handle Click Previous Page
  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      const perPageItem = typeof perPage === 'string' ? ONE_MILLION : perPage;
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
    const perPageItem = typeof value === 'string' ? ONE_MILLION : value;
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

  // On Update Search SiteDetailsPage
  const onUpdateSearchSite = async (value: string) => {
    setSearchSitePayload({
      ...searchSitePayload,
      search: value,
      searchKey: revertDropdownOptionsToResponseKey(searchKey),
    });
  };

  const onUpdateShowCreateSiteModal = () => {
    setShowCreateSiteModal((cur) => !cur);
  };

  return {
    // Values
    hospitalId,
    perPage,
    currentPage,
    noOfPages,
    resultFrom,
    resultTo,
    tabData,
    sitesTableData,
    sitesTableDataLoading,
    searchKey,
    showCreateSiteModal,
    showDeleteModal,
    editSiteModalController,
    siteId,

    // Functions
    onUpdateActiveTab,
    onClickNext,
    onClickPrevious,
    onUpdatePerPageItem,
    onUpdateSearchSite,
    deleteSite,
    editSite,
    onUpdateSearchKey,
    onUpdateShowCreateSiteModal,
    setShowDeleteModal,
    confirmDeleteSite,
    setEditSiteModalController,
    onHandleSortBy,
  };
};
