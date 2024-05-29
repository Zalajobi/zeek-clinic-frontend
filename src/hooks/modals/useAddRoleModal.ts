import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { CreateRoleInput } from '@typeSpec/forms/form.types';
import toast from 'react-hot-toast';
import axios from 'axios';
import { axiosPostRequestUserService } from '@lib/axios';

export const useAddRoleModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const { siteId } = useParams();

  // Create Role
  const { mutate: createRoleMutation } = useMutation(
    async (data: CreateRoleInput) => {
      try {
        return await axiosPostRequestUserService(`/role/create`, {
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
        toast.loading('Creating Role...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
          queryClient
            .resetQueries(['getLatestRoleData', 'getTableData', 'getRoleCount'])
            .then(() => {});
        } else {
          toast.error('Something Went Wrong');
        }
      },
    }
  );

  const createRole = (data: CreateRoleInput) => {
    createRoleMutation(data);
  };

  return {
    createRole,
  };
};
