import { useQuery } from 'react-query';
import { axiosPostRequestUserService } from '@lib/axios';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

export const useLatestDepartment = () => {
  const { siteId } = useParams();
  const [createDepartmentModal, setCreateDepartmentModal] = useState(false);

  // Get the Latest Department
  const { data: departments, isLoading: departmentsLoading } = useQuery({
    queryKey: ['getLatestData'],
    queryFn: async () => {
      try {
        return await axiosPostRequestUserService(`/department/search`, {
          siteId,
          sortModel: {
            colId: 'created_at',
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
    departments,
    departmentsLoading,
    createDepartmentModal,

    onUpdateCreateDepartmentModal,
  };
};
