import { useParams } from 'react-router-dom';
import { CreateDepartmentInput } from '@typeSpec/forms/form.types';
import { axiosPostRequestUserService } from '@lib/axios';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';
import { SelectInputFieldProps } from '@typeSpec/common';

export const useAddDepartmentModal = (handler: () => void) => {
  const queryClient = useQueryClient();
  const { siteId } = useParams();
  const [headers, setHeaders] = useState<SelectInputFieldProps[]>([]);
  const [departmentName, setDepartmentName] = useState('name');
  const [departmentDescription, setDepartmentDescription] =
    useState('description');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [bulkUploadJSONData, setBulkUploadJSONData] = useState<any[]>([]);

  const validDepartmentKeys = ['name', 'description'];

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

  const handleCreateBulkDepartment = () => {
    const departmentData: CreateDepartmentInput[] = bulkUploadJSONData.map(
      (data) => {
        return {
          name: data[departmentName],
          description: data[departmentDescription],
          siteId: siteId ?? '',
        };
      }
    );

    const invalidDepartmentData = departmentData.filter((data) => {
      return !validDepartmentKeys.every((key) =>
        Object.keys(data).includes(key)
      );
    });

    if (invalidDepartmentData.length) {
      toast.error('Invalid Department Data');
    } else {
      // createBulkServiceAreaMutation(departmentData);
      console.log(departmentData);
      toast.success('Uploaded Successfully');
    }
  };

  return {
    // Values
    headers,
    fileUploaded,

    // Functions
    createDepartment,
    setDepartmentName,
    setDepartmentDescription,
    processedExcelFile,
    handleCreateBulkDepartment,
  };
};
