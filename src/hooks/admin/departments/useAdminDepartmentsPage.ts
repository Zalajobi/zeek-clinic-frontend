import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { axiosGetRequestUserService } from '@lib/axios';
import { useState } from 'react';

export const useAdminDepartmentsPage = () => {
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

  return {
    // Values
    siteData,
    siteDataLoading,
    siteDataError,
    showOnDeleteModal,
    showOnEditModal,
    showNewDepartmentModal,
    siteId,

    // Functions
    setShowOnDeleteModal,
    setShowOnEditModal,
    setShowNewDepartmentModal,
  };
};
