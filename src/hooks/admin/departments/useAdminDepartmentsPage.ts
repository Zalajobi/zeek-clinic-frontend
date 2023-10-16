import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { axiosGetRequestUserService } from '@lib/axios';
import { useState } from 'react';

export const useAdminDepartmentsPage = () => {
  const navigate = useNavigate();
  const { siteId } = useParams();

  // Create Department
  const [showNewDepartmentModal, setShowNewDepartmentModal] = useState(false);

  const [showOnDeleteModal, setShowOnDeleteModal] = useState(false);
  const [showOnEditModal, setShowOnEditModal] = useState(false);

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

  // const {
  //   data: departmentData,
  //   isLoading: departmentDataLoading,
  //   isError: departmentDataError,
  // } = useQuery<AccountServiceApiResponse>(
  //   ['departmentDataFetch', refetchProvidersData],
  //   function () {
  //     const params = {
  //       page: currentPage,
  //       per_page: perPage === 'All' ? 0 : perPage,
  //       from_date: departmentFrom,
  //       to_date: departmentTo,
  //       search: searchDepartment,
  //     };
  //
  //     return axiosGetRequestUserService(
  //       `/department/list/paginated/${siteId}`,
  //       params
  //     );
  //   }
  // );

  // const updateDepartmentMutate = useMutation({
  //   mutationFn: (data: any) => {
  //     return axiosPutRequestUserService(
  //       `/department/admin/update/${departmentId}`,
  //       data
  //     );
  //   },
  //
  //   onError: () => {
  //     toast.error(`Something Went Wrong`);
  //   },
  //
  //   onSuccess: (result) => {
  //     if (result?.success) toast.success(result?.message);
  //     else toast.error('Something Went Wrong');
  //
  //     queryClient.resetQueries('departmentDataFetch');
  //   },
  //
  //   onMutate: () => {
  //     toast.custom(`Updating ${departmentName}`);
  //   },
  // });

  // const createDepartmentMutate = useMutation({
  //   mutationFn: (data: any) => {
  //     return axiosPostRequestUserService(`/department/create`, data);
  //   },
  //
  //   onError: () => {
  //     toast.error(`Something Went Wrong`);
  //   },
  //
  //   onSuccess: (result) => {
  //     if (result?.success) toast.success(result?.message);
  //     else toast.error(result?.message);
  //
  //     queryClient.resetQueries('departmentDataFetch');
  //   },
  //
  //   onMutate: () => {
  //     toast.success(`Creating ${newDepartment.name} Department`);
  //   },
  // });

  return {
    // Values
    siteData,
    siteDataLoading,
    siteDataError,
    showOnDeleteModal,
    showOnEditModal,
    showNewDepartmentModal,

    // Functions
    setShowOnDeleteModal,
    setShowOnEditModal,
    setShowNewDepartmentModal,
  };
};
