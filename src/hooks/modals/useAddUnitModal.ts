import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { CreateUnitInput } from '@typeSpec/forms/form.types';
import toast from 'react-hot-toast';
import axios from 'axios';
import { axiosPostRequestUserService } from '@lib/axios';

export const useAddUnitModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const { siteId } = useParams();

  // Create Unit
  const { mutate: createUnitMutation } = useMutation(
    async (data: CreateUnitInput) => {
      try {
        return await axiosPostRequestUserService(`/unit/create`, {
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
        toast.loading('Creating Unit...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
          queryClient
            .resetQueries(['getLatestUnitData', 'getTableData', 'getUnitCount'])
            .then(() => {});
        } else {
          toast.error('Something Went Wrong');
        }
      },
    }
  );

  const createUnit = (data: CreateUnitInput) => {
    createUnitMutation(data);
  };

  return {
    createUnit,
  };
};
