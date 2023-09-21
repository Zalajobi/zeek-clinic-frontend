import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ReactQueryDataUserService } from '../../lib/reactQuery';

export const useAdminProviderDetails = () => {
  const { id } = useParams();
  const [editProviderModalSection, setEditProviderModalSection] = useState<
    'Personal' | 'GeneratePassword' | 'MoveProvider'
  >('Personal');

  // Initial Data
  const { responseData, isLoading, error } = ReactQueryDataUserService(
    `/providers/admin/details/${id}`,
    'getProviderDetails',
    id
  );

  // Site And Role Data
  // const [unitRole, unitRoleIsLoading, unitRoleError] = ReactQueryDataUserService(
  //   `/site/department-roles-service_area-unit/${siteId}`,
  //   'getUnitAreaRoleAndDept',
  //     siteId,
  // );

  const onUndateProviderModalSection = (
    value: 'Personal' | 'GeneratePassword' | 'MoveProvider'
  ) => {
    setEditProviderModalSection((editProviderModalSection) => value);
  };

  return {
    // Value
    id,
    editProviderModalSection,
    responseData,
    isLoading,
    error,

    // Function
    onUndateProviderModalSection,
  };
};
