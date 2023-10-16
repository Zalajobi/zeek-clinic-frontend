import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import {
  axiosGetRequestUserService,
  axiosPostRequestUserService,
  axiosPutRequestUserService,
} from '@lib/axios';
import { setResultFrom } from '../../redux/reducers/tableReducer';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export const useAdminDepartmentUnitAndAreaTableEditAndCreate = (
  type: 'departments' | 'units' | 'area',
  siteId: string,
  handleNewItemModal: () => void
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { noOfPages } = useSelector((state: any) => state.adminProviderTable);

  // Table Fetch Params
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [tableFrom, setTableFrom] = useState<Date>();
  const [tableTo, setTableTo] = useState<Date>();
  const [searchTable, setSearchTable] = useState('');

  // Table Helper
  const [refetchProvidersData, setRefetchProvidersData] = useState(false);
  const [actions, setActions] = useState<
    | 'page-load'
    | 'selectFrom'
    | 'selectTo'
    | 'search'
    | 'perPage'
    | 'nextPage'
    | 'previousPage'
    | 'pageNumber'
    | 'tab'
  >('page-load');

  // Modal Handlers
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Delete Item State
  const [deleteItemName, setDeleteItemName] = useState('');
  const [deleteItemId, setDeleteItemId] = useState('');

  // Edit Item State
  const [editItemName, setEditItemName] = useState('');
  const [editItemId, setEditItemId] = useState('');
  const [editItemDescription, setEditItemDescription] = useState('');
  const [newEditItemInfo, setNewEditItemInfo] = useState({});

  // Create New Item
  const [createNewItem, setCreateNewItem] = useState({
    name: '',
    description: '',
    total_beds: 0,
    occupied_beds: 0,
    siteId,
  });

  // Get Table Data  Query
  const {
    data: tableData,
    isLoading: tableDataLoading,
    isError: tableDataError,
  } = useQuery<AccountServiceApiResponse>(
    ['fetchTableData', refetchProvidersData],
    function () {
      const params = {
        page: currentPage,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: tableFrom,
        to_date: tableTo,
        search: searchTable,
      };

      if (type === 'departments') {
        return axiosGetRequestUserService(
          `/department/list/paginated/${siteId}`,
          params
        );
      } else if (type === 'units') {
        return axiosGetRequestUserService(
          `/unit/list/paginated/${siteId}`,
          params
        );
      } else {
        return axiosGetRequestUserService(
          `/department/list/paginated/${siteId}`,
          params
        );
      }
    }
  );

  const updateItemInfoMutate = useMutation({
    mutationFn: (data: any) => {
      if (type === 'departments') {
        return axiosPutRequestUserService(
          `/department/admin/update/${editItemId}`,
          data
        );
      } else if (type === 'units') {
        return axiosPutRequestUserService(
          `/unit/admin/update/${editItemId}`,
          data
        );
      } else {
        return axiosPutRequestUserService(
          `/department/admin/update/${editItemId}`,
          data
        );
      }
    },

    onError: () => {
      toast.error(`Something Went Wrong`);
    },

    onSuccess: (result) => {
      if (result?.success) toast.success(result?.message);
      else toast.error('Something Went Wrong');

      queryClient.resetQueries('fetchTableData');
    },
  });

  const createItemMutate = useMutation({
    mutationFn: (data: any) => {
      if (type === 'departments') {
        return axiosPostRequestUserService(`/department/create`, data);
      } else if (type === 'units') {
        return axiosPostRequestUserService(`/unit/create`, data);
      } else {
        return axiosPostRequestUserService(`/department/create`, data);
      }
    },

    onError: () => {
      toast.error(`Something Went Wrong`);
    },

    onSuccess: (result) => {
      if (result?.success) toast.success(result?.message);
      else toast.error(result?.message);

      queryClient.resetQueries('fetchTableData');
    },
  });

  // Update Search Table Item
  const onUpdateSearchTable = async (value: string) => {
    setSearchTable(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('search');

    setRefetchProvidersData(!refetchProvidersData);
  };

  // Update Per-page Table Item
  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('tab');

    setRefetchProvidersData(!refetchProvidersData);
  };

  // Update On Next Table Item
  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      setCurrentPage(value);
      dispatch(setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1));
      setActions('nextPage');

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

  // Update On Previous Table Item
  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      setCurrentPage(value);
      dispatch(setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1));
      setActions('previousPage');

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

  // On Update Enter Page Number
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

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

  // Update Select From
  const onUpdateSelectFrom = async (value: Date) => {
    setTableFrom(value);
    setActions('selectFrom');
    setCurrentPage(0);
    dispatch(setResultFrom((perPage !== 'All' ? perPage : 0) + 1));

    setRefetchProvidersData(!refetchProvidersData);
  };

  // Update Select To
  const onUpdateSelectTo = async (value: Date) => {
    setTableTo(value);
    dispatch(
      setResultFrom(currentPage * (perPage !== 'All' ? perPage : 0) + 1)
    );
    setCurrentPage(0);
    setActions('selectTo');

    setRefetchProvidersData(!refetchProvidersData);
  };

  // Delete Item Functions Start
  const showOnDeleteModalHandler = (id: string, name: string) => {
    console.log(deleteItemId);
    setShowDeleteModal(!showDeleteModal);
    setDeleteItemName(name);
    setDeleteItemId(id);
  };

  const proceedDeleteItem = () => {
    setShowDeleteModal(!showDeleteModal);
    setTimeout(() => {
      toast.success(`Deleted ${deleteItemName}`);
    }, 3000);
  };

  // Edit Item Functions Start
  const showOnEditModalHandler = (id: string, name: string, desc: string) => {
    setShowEditModal(!showEditModal);
    setEditItemName(name);
    setEditItemId(id);
    setEditItemDescription(desc);
  };

  const onUpdateEditItemName = (value: string) =>
    setNewEditItemInfo({ ...newEditItemInfo, name: value });

  const onUpdateEditTotalBeds = (value: number) =>
    setNewEditItemInfo({ ...newEditItemInfo, total_beds: value });

  const onUpdateEditOccupiedBeds = (value: number) =>
    setNewEditItemInfo({ ...newEditItemInfo, occupied_beds: value });

  const onUpdateEditItemDescription = (value: string) =>
    setNewEditItemInfo({ ...newEditItemInfo, description: value });

  const updateItemInformation = async () => {
    setShowEditModal(!showEditModal);
    setTimeout(() => {
      updateItemInfoMutate.mutate(newEditItemInfo);
    }, 500);
  };

  // Create New Item
  const onUpdateCreateNewItemName = (value: string) =>
    setCreateNewItem({ ...createNewItem, name: value });

  const onUpdateCreateNewItemDescription = (value: string) =>
    setCreateNewItem({ ...createNewItem, description: value });

  const onUpdateCreateNewItemTotalBeds = (value: number) =>
    setCreateNewItem({ ...createNewItem, total_beds: value });

  const onUpdateCreateNewItemOccupiedBeds = (value: number) =>
    setCreateNewItem({ ...createNewItem, occupied_beds: value });

  const submitCreateNewItem = () => {
    if (!createNewItem?.name || !createNewItem?.description)
      toast.error(`Name and Description are required`);
    else {
      handleNewItemModal();
      setTimeout(() => {
        createItemMutate.mutate(createNewItem);
      }, 3000);
    }
  };

  return {
    // Values
    currentPage,
    perPage,
    tableFrom,
    tableTo,
    searchTable,
    tableData,
    tableDataLoading,
    tableDataError,
    navigate,
    showDeleteModal,
    showEditModal,
    actions,
    editItemName,
    editItemDescription,

    // Functions
    showOnDeleteModalHandler,
    showOnEditModalHandler,
    onUpdateSearchTable,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    onUpdateSelectFrom,
    onUpdateSelectTo,
    setShowDeleteModal,
    setShowEditModal,
    proceedDeleteItem,
    onUpdateEditItemName,
    onUpdateEditItemDescription,
    updateItemInformation,
    onUpdateCreateNewItemName,
    onUpdateCreateNewItemDescription,
    submitCreateNewItem,
    onUpdateEditTotalBeds,
    onUpdateEditOccupiedBeds,
    onUpdateCreateNewItemTotalBeds,
    onUpdateCreateNewItemOccupiedBeds,
  };
};
