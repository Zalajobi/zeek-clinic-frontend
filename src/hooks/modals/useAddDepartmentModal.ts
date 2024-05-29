import { useParams } from 'react-router-dom';
import { CreateDepartmentInput } from '@typeSpec/forms/form.types';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

export const useAddDepartmentModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const { siteId } = useParams();

  // Create Department
  const { mutate: createDepartmentMutation } = useMutation(
    async (data: CreateDepartmentInput) => {
      try {
        return await axiosPostRequestUserService(`/department/create`, {
          ...data,
          siteId,
        });
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          toast.error(error.response.data.error?.message);
        }
      }
    },
    {
      onMutate: () => {
        toast.loading('Creating Department...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
          queryClient
            .resetQueries([
              'getLatestDepartmentData',
              'getDeptCount',
              'getTableData',
            ])
            .then(() => {});
        } else {
          toast.error('Something Went Wrong');
        }
      },
    }
  );

  const createDepartment = (data: CreateDepartmentInput) => {
    createDepartmentMutation(data);
  };

  return {
    createDepartment,
  };
};
