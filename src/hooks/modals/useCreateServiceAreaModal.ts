import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { CreateServiceAreaInput } from '@typeSpec/forms/form.types';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SelectInputFieldProps } from '@typeSpec/common';
import { useState } from 'react';

export const useCreateServiceAreaModal = (handler: () => void) => {
  const { siteId } = useParams();
  const queryClient = useQueryClient();
  const [headers, setHeaders] = useState<SelectInputFieldProps[]>([]);
  const [serviceAreaName, setServiceAreaName] = useState('name');
  const [serviceAreaDescription, setServiceAreaDescription] =
    useState('description');
  const [serviceAreaType, setServiceAreaType] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [bulkUploadJSONData, setBulkUploadJSONData] = useState<any[]>([]);

  const validServiceAreaKeys = ['name', 'type', 'description'];

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

  // Create a Single Service Area
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

  // Create Bulk Service-Area
  const { mutate: createBulkServiceAreaMutation } = useMutation(
    async (data: CreateServiceAreaInput[]) => {
      try {
        return await axiosPostRequestUserService(`/service-area/create/batch`, {
          data,
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
    setBulkUploadJSONData(data);
    const fileHeaders = Object.keys(data[0]);
    setFileUploaded(true);
    setHeaders(
      fileHeaders.map((header) => {
        return {
          value: header,
          placeholder: header,
        };
      })
    );
  };

  const handleCreateBulkServiceArea = () => {
    const serviceAreaData: CreateServiceAreaInput[] = bulkUploadJSONData.map(
      (data) => {
        return {
          name: data[serviceAreaName],
          type: data[serviceAreaType],
          description: data[serviceAreaDescription],
          siteId: siteId ?? '',
        };
      }
    );

    const invalidServiceAreaData = serviceAreaData.filter((data) => {
      return !validServiceAreaKeys.every((key) =>
        Object.keys(data).includes(key)
      );
    });

    if (invalidServiceAreaData.length) {
      toast.error('Invalid Service Area Data');
    } else {
      createBulkServiceAreaMutation(serviceAreaData);
      toast.success('Uploaded Successfully');
    }
  };

  return {
    // Values
    serviceAreaInputs,
    headers,
    fileUploaded,

    // Functions
    createServiceArea,
    processedExcelFile,
    setServiceAreaName,
    setServiceAreaDescription,
    setServiceAreaType,
    handleCreateBulkServiceArea,
  };
};
