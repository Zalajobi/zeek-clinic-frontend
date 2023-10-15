import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { axiosGetRequestUserService } from '@lib/axios';
import { useState } from 'react';
import { setResultFrom } from '../../../redux/reducers/tableReducer';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

export const useAdminDepartmentsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { siteId } = useParams();
  const { noOfPages } = useSelector((state: any) => state.adminProviderTable);

  // Fetch Params
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState<'All' | 10 | 20 | 50 | 100>(10);
  const [departmentFrom, setDepartmentFrom] = useState<Date>();
  const [departmentTo, setDepartmentTo] = useState<Date>();
  const [searchDepartment, setSearchDepartment] = useState('');

  // Edit Department
  const [departmentName, setDepartmentName] = useState('');
  const [departmentDescription, setDepartmentDescription] = useState('');

  const [departmentId, setDepartmentId] = useState('');
  const [showOnDeleteModal, setShowOnDeleteModal] = useState(false);
  const [showOnEditModal, setShowOnEditModal] = useState(false);
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

  const {
    data: siteData,
    isLoading: siteDataLoading,
    isError: siteDataError,
  } = useQuery<AccountServiceApiResponse>(
    ['siteInfoData', siteId],
    function () {
      return axiosGetRequestUserService(
        `/site/admin/get/information/${siteId}`
      );
    }
  );

  const {
    data: departmentData,
    isLoading: departmentDataLoading,
    isError: departmentDataError,
  } = useQuery<AccountServiceApiResponse>(
    ['departmentDataFetch', refetchProvidersData],
    function () {
      const params = {
        page: currentPage,
        per_page: perPage === 'All' ? 0 : perPage,
        from_date: departmentFrom,
        to_date: departmentTo,
        search: searchDepartment,
      };

      return axiosGetRequestUserService(
        `/department/list/paginated/${siteId}`,
        params
      );
    }
  );

  const onUpdateSelectFrom = async (value: Date) => {
    setDepartmentFrom(value);
    setActions('selectFrom');
    setCurrentPage(0);
    dispatch(setResultFrom((perPage !== 'All' ? perPage : 0) + 1));

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onUpdateSelectTo = async (value: Date) => {
    setDepartmentTo(value);
    dispatch(
      setResultFrom(currentPage * (perPage !== 'All' ? perPage : 0) + 1)
    );
    setCurrentPage(0);
    setActions('selectTo');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onUpdateSearchDepartment = async (value: string) => {
    setSearchDepartment(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('search');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onUpdatePerPageItem = async (value: 'All' | 10 | 20 | 50 | 100) => {
    setPerPage(value);
    dispatch(setResultFrom(1));
    setCurrentPage(0);
    setActions('tab');

    setRefetchProvidersData(!refetchProvidersData);
  };

  const onClickNext = async (value: number) => {
    if (value >= noOfPages) toast.error('You are on the last page');
    else {
      setCurrentPage(value);
      dispatch(setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1));
      setActions('nextPage');

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

  const onClickPrevious = async (value: number) => {
    if (value === -1) toast.error('You are on the first page');
    else {
      setCurrentPage(value);
      dispatch(setResultFrom(value * (perPage !== 'All' ? perPage : 0) + 1));
      setActions('previousPage');

      setRefetchProvidersData(!refetchProvidersData);
    }
  };

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

  const showOnDeleteDepartmentModalHandler = (id: string, name: string) => {
    setShowOnDeleteModal(!showOnDeleteModal);
    setDepartmentName(name);
    setDepartmentId(id);
  };

  const proceedDeleteDepartment = () => {
    setShowOnDeleteModal(!showOnDeleteModal);
    setTimeout(() => {
      toast.success(`Deleted ${departmentName}`);
    }, 5000);
  };

  const showOnEditDepartmentModalHandler = (id: string, name: string) => {
    setShowOnEditModal(!showOnEditModal);
    setDepartmentName(name);
    setDepartmentId(id);
  };

  const updateDepartmentInformation = async () => {
    setShowOnEditModal(!setShowOnEditModal);
    setTimeout(() => {
      toast.success(`Updated ${departmentName}`);
    }, 3000);
  };

  const onUpdateDepartmentName = (value: string) => setDepartmentName(value);

  const onUpdateDepartmentDescription = (value: string) =>
    setDepartmentDescription(value);

  return {
    // Values
    siteData,
    siteDataLoading,
    siteDataError,
    departmentData,
    departmentDataError,
    departmentDataLoading,
    currentPage,
    perPage,
    departmentFrom,
    departmentTo,
    searchDepartment,
    actions,
    navigate,
    refetchProvidersData,
    showOnDeleteModal,
    showOnEditModal,
    departmentName,

    // Functions
    onUpdateSelectFrom,
    onUpdateSelectTo,
    onUpdateSearchDepartment,
    onUpdatePerPageItem,
    onClickNext,
    onClickPrevious,
    onEnterPageNumber,
    showOnDeleteDepartmentModalHandler,
    setShowOnDeleteModal,
    proceedDeleteDepartment,
    showOnEditDepartmentModalHandler,
    setShowOnEditModal,
    updateDepartmentInformation,
    onUpdateDepartmentName,
    onUpdateDepartmentDescription,
  };
};
