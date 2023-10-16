import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { AccountServiceApiResponse } from '@typeSpec/apiResponses';
import { axiosGetRequestUserService } from '@lib/axios';
import { useState } from 'react';

export const useAdminDepartmentsPage = () => {
  const { siteId } = useParams();

  // Create New Unit
  const [showCreateUnitModal, setShowCreateUnitModal] = useState(false);
  const [newUnit, setNewUnit] = useState({
    name: '',
    description: '',
    siteId,
  });

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

  // Create New Unit
  const onUpdateNewUnitDescription = (description: string) =>
    setNewUnit({ ...newUnit, description });

  const onUpdateNewUnitName = (name: string) =>
    setNewUnit({ ...newUnit, name });
  const createNewUnit = () => {
    console.log({
      message: createNewUnit,
      newUnit,
    });
  };

  return {
    // Values
    siteData,
    siteDataLoading,
    siteDataError,
    showCreateUnitModal,

    // Functions
    setShowCreateUnitModal,
    createNewUnit,
    onUpdateNewUnitDescription,
    onUpdateNewUnitName,
  };
};
