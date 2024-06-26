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
  type: 'departments' | 'units' | 'area' | 'role',
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
    type: '',
    siteId,
    plan: false,
    nursing: false,
    charts: false,
    upload: false,
    refer_outpx: false,
    referral: false,
    consult: false,
    radiology: false,
    clerking: false,
    dental: false,
    logs: false,
    review: false,
    time_of_death: false,
    discharge: false,
    move_patient: false,
    transfer_patient: false,
    admit_patient: false,
    med_supply: false,
    vitals: false,
    appointment: false,
    lab_test: false,
    procedure: false,
    note: false,
    prescription: false,
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
          `/department/organization/roles/filters`,
          {
            ...params,
            siteId,
          }
        );
      } else if (type === 'units') {
        return axiosGetRequestUserService(`/unit/organization/roles/filters`, {
          ...params,
          siteId,
        });
      } else if (type === 'area') {
        return axiosGetRequestUserService(
          `/service-area/organization/roles/filters`,
          {
            ...params,
            siteId,
          }
        );
      } else {
        return axiosGetRequestUserService(`/role/organization/roles/filters`, {
          ...params,
          siteId,
        });
      }
    }
  );

  // Update Data
  const updateItemInfoMutate = useMutation({
    mutationFn: (data: any) => {
      if (type === 'departments') {
        return axiosPutRequestUserService(
          `/department/update/${editItemId}`,
          data
        );
      } else if (type === 'units') {
        return axiosPutRequestUserService(`/unit/update/${editItemId}`, data);
      } else if (type === 'area') {
        return axiosPutRequestUserService(
          `/service-area/update/${editItemId}`,
          data
        );
      } else {
        return axiosPutRequestUserService(`/role/update/${editItemId}`, data);
      }
    },

    onError: () => {
      toast.error(`Something Went Wrong`);
    },

    onSuccess: (result) => {
      if (result?.success) toast.success(result?.message);
      else toast.error('Something Went Wrong');

      queryClient.resetQueries('fetchTableData').then(() => {});
    },
  });

  // Create New Data
  const createItemMutate = useMutation({
    mutationFn: (data: any) => {
      if (type === 'departments') {
        return axiosPostRequestUserService(`/department/create`, data);
      } else if (type === 'units') {
        return axiosPostRequestUserService(`/unit/create`, data);
      } else if (type === 'area') {
        return axiosPostRequestUserService(`/service-area/create`, data);
      } else {
        return axiosPostRequestUserService(`/role/create`, data);
      }
    },

    onError: () => {
      toast.error(`Something Went Wrong`);
    },

    onSuccess: (result) => {
      if (result?.success) toast.success(result?.message);
      else toast.error(result?.message);

      queryClient.resetQueries('fetchTableData').then(() => {});
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

  const onUpdateEditType = (value: string) =>
    setNewEditItemInfo({ ...newEditItemInfo, type: value });

  const onUpdateEditNote = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, note: value });

  const onUpdateEditPlan = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, plan: value });

  const onUpdateEditProcedure = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, procedure: value });

  const onUpdateEditLabTest = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, lab_test: value });

  const onUpdateEditAppointment = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, appointment: value });

  const onUpdateEditVitals = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, vitals: value });

  const onUpdateEditMedicalSupply = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, med_supply: value });

  const onUpdateEditAdmitPatient = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, admit_patient: value });

  const onUpdateEditTransferPatient = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, transfer_patient: value });

  const onUpdateEditMovePatient = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, move_patient: value });

  const onUpdateEditDischargePatient = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, discharge: value });

  const onUpdateEditTimeOfDeath = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, time_of_death: value });

  const onUpdateEditReview = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, review: value });

  const onUpdateEditLogs = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, logs: value });

  const onUpdateEditPrescription = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, prescription: value });

  const onUpdateEditDental = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, dental: value });

  const onUpdateEditClerking = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, clerking: value });

  const onUpdateEditRadiology = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, radiology: value });

  const onUpdateEditConsult = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, consult: value });

  const onUpdateEditReferral = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, referral: value });

  const onUpdateEditReferExP = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, refer_outpx: value });

  const onUpdateEditUpload = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, upload: value });

  const onUpdateEditCharts = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, charts: value });

  const onUpdateEditNursing = (value: boolean) =>
    setNewEditItemInfo({ ...newEditItemInfo, nursing: value });

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

  const onUpdateCreateNewItemType = (value: string) =>
    setCreateNewItem({ ...createNewItem, type: value });

  const onUpdateCreateNewItemOccupiedBeds = (value: number) =>
    setCreateNewItem({ ...createNewItem, occupied_beds: value });

  const onUpdateCreateNewNote = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, note: value });

  const onUpdateCreateNewPlan = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, plan: value });

  const onUpdateCreateNewProcedure = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, procedure: value });

  const onUpdateCreateNewLabTest = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, lab_test: value });

  const onUpdateCreateNewAppointment = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, appointment: value });

  const onUpdateCreateNewVitals = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, vitals: value });

  const onUpdateCreateNewMedicalSupply = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, med_supply: value });

  const onUpdateCreateNewAdmitPatient = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, admit_patient: value });

  const onUpdateCreateNewTransferPatient = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, transfer_patient: value });

  const onUpdateCreateNewMovePatient = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, move_patient: value });

  const onUpdateCreateNewDischargePatient = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, discharge: value });

  const onUpdateCreateNewTimeOfDeath = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, time_of_death: value });

  const onUpdateCreateNewReview = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, review: value });

  const onUpdateCreateNewLogs = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, logs: value });

  const onUpdateCreateNewPrescription = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, prescription: value });

  const onUpdateCreateNewDental = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, dental: value });

  const onUpdateCreateNewClerking = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, clerking: value });

  const onUpdateCreateNewRadiology = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, radiology: value });

  const onUpdateCreateNewConsult = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, consult: value });

  const onUpdateCreateNewReferral = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, referral: value });

  const onUpdateCreateNewReferExP = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, refer_outpx: value });

  const onUpdateCreateNewUpload = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, upload: value });

  const onUpdateCreateNewCharts = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, charts: value });

  const onUpdateCreateNewNursing = (value: boolean) =>
    setCreateNewItem({ ...createNewItem, nursing: value });

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
    onUpdateEditType,
    onUpdateCreateNewItemType,
    onUpdateEditNote,
    onUpdateEditPlan,
    onUpdateEditProcedure,
    onUpdateEditLabTest,
    onUpdateEditAppointment,
    onUpdateEditVitals,
    onUpdateEditMedicalSupply,
    onUpdateEditAdmitPatient,
    onUpdateEditTransferPatient,
    onUpdateEditMovePatient,
    onUpdateEditDischargePatient,
    onUpdateEditTimeOfDeath,
    onUpdateEditReview,
    onUpdateEditLogs,
    onUpdateEditPrescription,
    onUpdateEditDental,
    onUpdateEditClerking,
    onUpdateEditRadiology,
    onUpdateEditConsult,
    onUpdateEditReferral,
    onUpdateEditReferExP,
    onUpdateEditUpload,
    onUpdateEditCharts,
    onUpdateEditNursing,
    onUpdateCreateNewNote,
    onUpdateCreateNewPlan,
    onUpdateCreateNewProcedure,
    onUpdateCreateNewLabTest,
    onUpdateCreateNewAppointment,
    onUpdateCreateNewVitals,
    onUpdateCreateNewMedicalSupply,
    onUpdateCreateNewAdmitPatient,
    onUpdateCreateNewTransferPatient,
    onUpdateCreateNewMovePatient,
    onUpdateCreateNewDischargePatient,
    onUpdateCreateNewTimeOfDeath,
    onUpdateCreateNewReview,
    onUpdateCreateNewLogs,
    onUpdateCreateNewPrescription,
    onUpdateCreateNewDental,
    onUpdateCreateNewClerking,
    onUpdateCreateNewRadiology,
    onUpdateCreateNewConsult,
    onUpdateCreateNewReferral,
    onUpdateCreateNewReferExP,
    onUpdateCreateNewUpload,
    onUpdateCreateNewCharts,
    onUpdateCreateNewNursing,
  };
};
