import { ChangeEvent, useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import input = Simulate.input;
import { axiosGetRequest } from '../../lib/axios';
import { useParams } from 'react-router-dom';
import { SelectInputFieldProps } from '../../types/common';
import { GetDepartmentsDataResponse } from '../../types/apiResponses';
import { AdminAddProviderInput } from '../../types/superadmin/formTypes';

export const useAdminAddProvider = () => {
  const { siteId } = useParams();
  const departments: SelectInputFieldProps[] = [];

  // State for Input fields
  const [profilePic, setProfilePic] = useState('');

  // Check for input error state management
  const [firstNameError, setFirstNameError] = useState(false);

  useEffect(() => {
    const getAddProviderData = async () => {
      const response = await axiosGetRequest(
        `/account/department/get-all/${siteId}`
      );

      if (response.success) {
        const data = response.data as GetDepartmentsDataResponse[];

        for (const item of data) {
          departments.push({
            value: item?.id,
            placeholder: item?.name,
          });
        }
      }
    };

    getAddProviderData().catch((err) => {
      console.log(err);
    });
  }, [input]);

  const onSubmit = async (data: AdminAddProviderInput) => {
    console.log(data);
  };

  return {
    // Values
    profilePic,
    departments,

    // Functions
    setProfilePic,
    onSubmit,
  };
};

export default useAdminAddProvider;
