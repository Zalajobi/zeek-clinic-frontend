import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';

export const useLatestDepartment = () => {
  const { siteId } = useParams();
  const [createDepartmentModal, setCreateDepartmentModal] = useState(false);

  // Get the Latest Department
  const { data: departments, isLoading: departmentsLoading } = useQuery({
    queryKey: ['getLatestDepartmentData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/department/search`, {
          siteId,
          sortModel: {
            colId: 'createdAt',
            sort: 'desc',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const onUpdateCreateDepartmentModal = () =>
    setCreateDepartmentModal((cur) => !cur);

  return {
    siteId,
    departments,
    departmentsLoading,
    createDepartmentModal,

    onUpdateCreateDepartmentModal,
  };
};

export const useLatestUnit = () => {
  const { siteId } = useParams();
  const [createUnitModal, setCreateUnitModal] = useState(false);

  // Get the Latest Department
  const { data: units, isLoading: unitsLoading } = useQuery({
    queryKey: ['getLatestUnitData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/unit/search`, {
          siteId,
          sortModel: {
            colId: 'createdAt',
            sort: 'desc',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const onUpdateCreateUnitModal = () => setCreateUnitModal((cur) => !cur);

  return {
    siteId,
    unitsLoading,
    units,
    createUnitModal,

    onUpdateCreateUnitModal,
  };
};

export const useLatestServiceArea = () => {
  const { siteId } = useParams();
  const [createServiceAreaModal, setCreateServiceAreaModal] = useState(false);

  // Get the Latest Department
  const { data: serviceAreas, isLoading: serviceAreasLoading } = useQuery({
    queryKey: ['getLatestServiceAreaData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/service-area/search`, {
          siteId,
          sortModel: {
            colId: 'createdAt',
            sort: 'desc',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const onUpdateCreateServiceAreaModal = () =>
    setCreateServiceAreaModal((cur) => !cur);

  return {
    siteId,
    createServiceAreaModal,
    serviceAreas,
    serviceAreasLoading,

    onUpdateCreateServiceAreaModal,
  };
};

export const useLatestRole = () => {
  const { siteId } = useParams();
  const [createRoleModal, setCreateRoleModal] = useState(false);

  // Get the Latest Department
  const { data: roles, isLoading: rolesLoading } = useQuery({
    queryKey: ['getLatestRoleData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/role/search`, {
          siteId,
          sortModel: {
            colId: 'createdAt',
            sort: 'desc',
          },
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
  });

  const onUpdateCreateRoleModal = () => setCreateRoleModal((cur) => !cur);

  return {
    siteId,
    createRoleModal,
    roles,
    rolesLoading,

    onUpdateCreateRoleModal,
  };
};
