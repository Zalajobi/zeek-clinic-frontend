import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { CreateServiceAreaInput } from '@typeSpec/forms/form.types';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SelectInputFieldProps } from '@typeSpec/common';

export const useCreateServiceAreaModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const { siteId } = useParams();

  const serviceAreaInputs: SelectInputFieldProps[] = [
    {
      value: 'INPATIENT',
      placeholder: 'INPATIENT',
    },

    {
      value: 'OUTPATIENT',
      placeholder: 'OUTPATIENT',
    },

    {
      value: 'PROCEDURE',
      placeholder: 'PROCEDURE',
    },

    {
      value: 'EMERGENCY',
      placeholder: 'EMERGENCY',
    },

    {
      value: 'OTHERS',
      placeholder: 'OTHERS',
    },
  ];

  // Create Service-Area
  const { mutate: createServiceAreaMutation } = useMutation(
    async (data: CreateServiceAreaInput) => {
      try {
        return await axiosPostRequestUserService(`/service-area/create`, {
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
        toast.loading('Creating Service-Area...', { duration: 3 });
      },
      onSuccess: (result) => {
        if (result?.success) {
          handler();
          toast.success(result?.message);
          queryClient
            .resetQueries([
              'getLatestServiceAreaData',
              'getTableData',
              'getAreaCount',
            ])
            .then(() => {});
        } else {
          toast.error('Something Went Wrong');
        }
      },
    }
  );

  const createServiceArea = (data: CreateServiceAreaInput) => {
    createServiceAreaMutation(data);
  };

  // Received Processed Excel File
  const processedExcelFile = (data: any[]) => {
    console.log(data);
  };

  return {
    // Values
    serviceAreaInputs,

    // Functions
    createServiceArea,
    processedExcelFile,
  };
};
